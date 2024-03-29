import * as eva from '@eva-design/eva';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { get } from './async-storage';
import { useLocale, useThemeMode } from './hooks';
import TabNavigator from './navigation/BottomNavigator';
import { RootState } from './store';
import { setDiary } from './store/slices/diary';
import getTheme from './theme';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DEVICE_STORE_KEYS } from './async-storage/deviceStoreKeys';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { themeMode } = useSelector((state: RootState) => state.settings);
  const colorScheme = useThemeMode();
  useLocale();

  useEffect(() => {
    (async () => {
      const diary = await get(DEVICE_STORE_KEYS.DIARY) || {};
      dispatch(setDiary(diary))
    })();
  }, []);

  const theme = getTheme(colorScheme, themeMode);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <ActionSheetProvider>
              <NavigationContainer>
                <TabNavigator />
              </NavigationContainer>
            </ActionSheetProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ApplicationProvider>
    </>
  );
};

export default App;
