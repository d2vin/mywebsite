export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type GithubActivity = {
  username: string;
  profileUrl: string;
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  totalContributions: number;
  activeDays: number;
  currentStreak: number;
  busiestDay: { date: string; count: number } | null;
  days: ContributionDay[];
  languages: { name: string; count: number; percent: number }[];
  recent: { repo: string; message: string; date: string; url: string }[];
  updatedAt: string;
  source: 'graphql' | 'rest';
};

const USERNAME = 'd2vin';
const API_VERSION = '2026-03-10';

type GithubResponse<T> = { data?: T; errors?: { message: string }[] };

const headers = (token?: string) => ({
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': API_VERSION,
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

async function githubFetch<T>(url: string, token?: string): Promise<T> {
  const response = await fetch(url, { headers: headers(token) });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  return response.json() as Promise<T>;
}

function isoDay(date: Date) {
  return date.toISOString().slice(0, 10);
}

function emptyCalendar(numberOfDays = 365) {
  const days: ContributionDay[] = [];
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  for (let offset = numberOfDays - 1; offset >= 0; offset -= 1) {
    const date = new Date(today);
    date.setUTCDate(today.getUTCDate() - offset);
    days.push({ date: isoDay(date), count: 0, level: 0 });
  }
  return days;
}

function summarize(days: ContributionDay[]) {
  const activeDays = days.filter((day) => day.count > 0).length;
  let currentStreak = 0;
  for (let index = days.length - 1; index >= 0; index -= 1) {
    if (days[index].count === 0) {
      if (index === days.length - 1) continue;
      break;
    }
    currentStreak += 1;
  }
  const busiest = days.reduce<ContributionDay | null>(
    (best, day) => (!best || day.count > best.count ? day : best),
    null,
  );
  return {
    activeDays,
    currentStreak,
    busiestDay: busiest && busiest.count > 0 ? { date: busiest.date, count: busiest.count } : null,
  };
}

function languageSummary(repos: { language: string | null; fork: boolean }[]) {
  const counts = repos.reduce<Record<string, number>>((all, repo) => {
    if (!repo.fork && repo.language) all[repo.language] = (all[repo.language] || 0) + 1;
    return all;
  }, {});
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0) || 1;
  return Object.entries(counts)
    .map(([name, count]) => ({ name, count, percent: Math.round((count / total) * 100) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

async function fetchGraphqlCalendar(token: string) {
  const query = `query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks { contributionDays { date contributionCount contributionLevel } }
        }
      }
    }
  }`;
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { ...headers(token), 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { login: USERNAME } }),
  });
  if (!response.ok) throw new Error(`GitHub GraphQL returned ${response.status}`);
  const result = (await response.json()) as GithubResponse<{
    user: { contributionsCollection: { contributionCalendar: {
      totalContributions: number;
      weeks: { contributionDays: { date: string; contributionCount: number; contributionLevel: string }[] }[];
    } } };
  }>;
  if (!result.data || result.errors) throw new Error(result.errors?.[0]?.message || 'No GitHub data');
  const calendar = result.data.user.contributionsCollection.contributionCalendar;
  const levels: Record<string, number> = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };
  return {
    total: calendar.totalContributions,
    days: calendar.weeks.flatMap((week) => week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: levels[day.contributionLevel] || 0,
    }))),
  };
}

export async function getGithubActivity(): Promise<GithubActivity | null> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const since = new Date();
    since.setUTCFullYear(since.getUTCFullYear() - 1);
    const commitQuery = encodeURIComponent(`author:${USERNAME} committer-date:>=${isoDay(since)}`);
    const [profile, repos, commits] = await Promise.all([
      githubFetch<{ avatar_url: string; html_url: string; public_repos: number; followers: number }>(`https://api.github.com/users/${USERNAME}`, token),
      githubFetch<{ language: string | null; fork: boolean }[]>(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`, token),
      githubFetch<{ total_count: number; items: { html_url: string; repository: { name: string }; commit: { message: string; committer: { date: string } } }[] }>(`https://api.github.com/search/commits?q=${commitQuery}&sort=committer-date&order=desc&per_page=100`, token),
    ]);

    let source: 'graphql' | 'rest' = 'rest';
    let days = emptyCalendar();
    let totalContributions = commits.total_count;
    if (token) {
      try {
        const calendar = await fetchGraphqlCalendar(token);
        days = calendar.days;
        totalContributions = calendar.total;
        source = 'graphql';
      } catch {
        // REST remains a complete public-data fallback if GraphQL is unavailable.
      }
    }
    if (source === 'rest') {
      const byDate = new Map<string, number>();
      commits.items.forEach((item) => {
        const date = item.commit.committer.date.slice(0, 10);
        byDate.set(date, (byDate.get(date) || 0) + 1);
      });
      const max = Math.max(...Array.from(byDate.values()), 1);
      days = days.map((day) => {
        const count = byDate.get(day.date) || 0;
        return { ...day, count, level: count ? Math.max(1, Math.ceil((count / max) * 4)) : 0 };
      });
    }

    return {
      username: USERNAME,
      profileUrl: profile.html_url,
      avatarUrl: profile.avatar_url,
      publicRepos: profile.public_repos,
      followers: profile.followers,
      totalContributions,
      ...summarize(days),
      days,
      languages: languageSummary(repos),
      recent: commits.items.slice(0, 5).map((item) => ({
        repo: item.repository.name,
        message: item.commit.message.split('\n')[0],
        date: item.commit.committer.date,
        url: item.html_url,
      })),
      updatedAt: new Date().toISOString(),
      source,
    };
  } catch (error) {
    console.error('Unable to load GitHub activity', error);
    return null;
  }
}
