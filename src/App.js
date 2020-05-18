import React from 'react';
import { GlobalStyle } from './styled/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lite, dark} from './styled/themes';
import { useGlobalState } from './context/globalContext';

import Header from './components/header';
import Layout from './components/layout';
import ThemeSwitcher from './components/themeSwitcher';

const App = () => {
  const {theme} = useGlobalState();
  const themeToUse = theme === 'lite' ? lite : dark;

  return (
      <ThemeProvider theme={themeToUse}>
        <GlobalStyle />
        
        <Header />

        <Layout>
          <ThemeSwitcher/>
        </Layout>

      </ThemeProvider>
  );
}

export default App;
