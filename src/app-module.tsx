import React, { FC } from 'react';
import { Provider } from 'mobx-react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, ExtendedTheme } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import store from 'src/stores';

import { AppProviders } from 'src/context';

import { theme } from 'src/theme';

import Routes from '../Routes';

if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App: FC = () => {
  const MyTheme: ExtendedTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme.colors
    }
  };

  return (
    <Provider rootStore={store}>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <Routes />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <AppProviders>
      <StatusBar backgroundColor={theme.colors.secondary} barStyle='dark-content' />

      <App />
    </AppProviders>
  </ThemeProvider>
);
