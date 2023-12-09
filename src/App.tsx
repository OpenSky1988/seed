import React from 'react';
import { useSelector } from 'react-redux';
import * as eva from '@eva-design/eva';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { RootState } from './store';
import { useLocale, useThemeMode } from './hooks';
import TabNavigator from './navigation/BottomNavigator';
import getTheme from './theme';

const App: React.FC = () => {
  const colorScheme = useThemeMode();
  const { themeMode } = useSelector((state: RootState) => state.settings);
  useLocale();

  const theme = getTheme(colorScheme, themeMode);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <ActionSheetProvider>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </ActionSheetProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
