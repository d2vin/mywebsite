import { CloudSun, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = mounted ? resolvedTheme : 'dark';
  const themeOrder = ['dark', 'aero', 'light'];
  const currentIndex = themeOrder.indexOf(currentTheme || 'dark');
  const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
  const themeName = nextTheme === 'aero' ? 'Frutiger Aero' : nextTheme;

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(nextTheme)}
      aria-label={mounted ? `Switch to ${themeName} mode` : 'Change color theme'}
      title={mounted ? `Switch to ${themeName} mode` : 'Change color theme'}
    >
      <Sun className="theme-icon theme-icon-sun" size={16} aria-hidden="true" />
      <Moon className="theme-icon theme-icon-moon" size={15} aria-hidden="true" />
      <CloudSun className="theme-icon theme-icon-aero" size={18} aria-hidden="true" />
    </button>
  );
};

export default ThemeToggle;
