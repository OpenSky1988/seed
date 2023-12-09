import React from 'react';
import { useTranslation } from 'react-i18next';
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Icon, IconProps } from '@ui-kitten/components';

import ThemedSafeAreaView from '../components/ThemedSafeAreaView';
import DiaryDay from '../screens/DiaryDay';
import Settings from '../screens/Settings';
import Diary from '../screens/Diary';
import Entry from '../screens/Entry';
import { TRootStackParamList } from '../types';

const { Navigator, Screen } = createBottomTabNavigator<TRootStackParamList>();

const CalendarIcon = (props: IconProps) => <Icon {...props} name='calendar' />;
const CalendarOutlineIcon = (props: IconProps) => <Icon {...props} name='calendar-outline' />;
const BookOpenIcon = (props: IconProps) => <Icon {...props} name='book-open' />;
const BookOpenOutlineIcon = (props: IconProps) => <Icon {...props} name='book-open-outline' />;
const SettingsIcon = (props: IconProps) => <Icon {...props} name='settings' />;
const SettingsOutlineIcon = (props: IconProps) => <Icon {...props} name='settings-outline' />;

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => {
  const { t } = useTranslation();

  return (
    <BottomNavigation
      appearance='noIndicator'
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab
        title={t('bottom_navigation.diary_tab')}
        icon={state.index === 0 ? CalendarIcon : CalendarOutlineIcon}
      />
      <BottomNavigationTab
        title={t('bottom_navigation.today_tab')}
        icon={state.index === 1 ? BookOpenIcon : BookOpenOutlineIcon}
      />
      <BottomNavigationTab
        title={t('bottom_navigation.settings_tab')}
        icon={state.index === 2 ? SettingsIcon : SettingsOutlineIcon}
      />
    </BottomNavigation>
  );
};

const TabBarNavigation: React.FC<BottomTabBarProps> = (props) => <BottomTabBar {...props} />

const TabNavigator = () => (
  <ThemedSafeAreaView>
    <Navigator
      backBehavior="history"
      initialRouteName="Today"
      screenOptions={{ headerShown: false }}
      tabBar={TabBarNavigation}
    >
      <Screen name="Diary" component={Diary} />
      <Screen name="Today" component={DiaryDay} />
      <Screen name="Settings" component={Settings} />
      <Screen name="Entry" component={Entry} />
    </Navigator>
  </ThemedSafeAreaView>
);

export default TabNavigator;
