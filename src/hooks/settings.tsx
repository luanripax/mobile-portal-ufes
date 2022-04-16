import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect
} from 'react';

const SettingContext = createContext({
  idiom: 'pt_BR',
  appTheme: 'dark',
  allowNotify: true
});

interface SettingProviderProps {
  children: ReactNode;
}

let theme = 'light';

const getTheme = () => theme;

function SettingProvider({ children }: SettingProviderProps) {
  const [appTheme, setAppTheme] = useState('light');
  const [idiom, setIdiom] = useState('pt_BR');
  const [allowNotify, setAllowNotify] = useState(true);

  useEffect(() => {
    theme = appTheme;
  },[appTheme])

  return (
    <SettingContext.Provider
      value={{
        appTheme,
        setAppTheme,
        idiom,
        setIdiom,
        allowNotify,
        setAllowNotify
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}

function useSetting() {
  const context = useContext(SettingContext);
  return context;
}

export { SettingProvider, useSetting, getTheme };
