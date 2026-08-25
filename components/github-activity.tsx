import { ArrowUpRight, Github, GitCommitHorizontal } from 'lucide-react';
import type { GithubActivity as GithubActivityData } from '../lib/github';

const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(new Date(date));

const GithubActivity = ({ activity }: { activity: GithubActivityData | null }) => {
  if (!activity) return null;
  const visibleDays = activity.days.slice(-196);

  return (
    <section className="github-section" id="github" aria-labelledby="github-heading">
      <div className="github-heading">
        <div>
          <p className="github-kicker"><span className="live-dot" /> Live from GitHub</p>
          <h2 id="github-heading">The work,<br /><em>in motion.</em></h2>
        </div>
        <p className="github-intro">A live record of what I&apos;ve been shipping, exploring, and refining in public.</p>
        <a className="github-profile-link" href={activity.profileUrl} target="_blank" rel="noreferrer">
          <Github size={17} /> @{activity.username} <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="github-dashboard">
        <div className="github-calendar-card">
          <div className="calendar-meta">
            <span>Contribution signal</span>
            <span>Last {visibleDays.length} days</span>
          </div>
          <div className="contribution-grid" role="img" aria-label={`${activity.totalContributions} GitHub contributions in the last year`}>
            {visibleDays.map((day) => (
              <span key={day.date} className={`contribution-cell level-${day.level}`} title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`} />
            ))}
          </div>
          <div className="github-big-number">
            <strong>{activity.totalContributions.toLocaleString()}</strong>
            <span>contributions<br />this year</span>
          </div>
        </div>

        <dl className="github-stats">
          <div><dt>Active days</dt><dd>{activity.activeDays}</dd></div>
          <div><dt>Current streak</dt><dd>{activity.currentStreak}<small> days</small></dd></div>
          <div><dt>Public repos</dt><dd>{activity.publicRepos}</dd></div>
          <div><dt>Busiest day</dt><dd>{activity.busiestDay?.count || '—'}<small>{activity.busiestDay ? ` · ${formatDate(activity.busiestDay.date)}` : ''}</small></dd></div>
        </dl>

        <div className="github-languages">
          <div className="calendar-meta"><span>Languages in rotation</span><span>Public repos</span></div>
          <div className="language-bar" aria-hidden="true">
            {activity.languages.map((language) => <i key={language.name} style={{ flex: language.percent }} />)}
          </div>
          <ul>{activity.languages.map((language) => <li key={language.name}><span>{language.name}</span><b>{language.percent}%</b></li>)}</ul>
        </div>

        <div className="github-feed">
          <div className="calendar-meta"><span>Latest commits</span><span>UTC</span></div>
          {activity.recent.map((commit) => (
            <a href={commit.url} target="_blank" rel="noreferrer" key={commit.url} className="commit-row">
              <GitCommitHorizontal size={16} />
              <span><b>{commit.message}</b><small>{commit.repo}</small></span>
              <time>{formatDate(commit.date)}</time>
            </a>
          ))}
        </div>
      </div>
      <p className="github-note">Updated {formatDate(activity.updatedAt)} · {activity.source === 'graphql' ? 'Complete GitHub contribution graph' : 'Public GitHub activity'}</p>
    </section>
  );
};

export default GithubActivity;
