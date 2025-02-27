import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { themeDark, themeLight } from '../config/Themization';

// Define ThemeContext type
interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Create Context with proper default value type
const ThemeContext = createContext<ThemeContextType | null>(null);

// Define the provider's props type
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme ? JSON.parse(storedTheme) : false;
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.setAttribute('theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const theme: DefaultTheme = darkMode ? themeDark : themeLight;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom Hook for consuming theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProviderWrapper');
  }
  return context;
};
