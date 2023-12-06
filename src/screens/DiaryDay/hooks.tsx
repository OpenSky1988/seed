import { useNavigation } from '@react-navigation/native';
import { Icon, IconProps, TopNavigationAction } from '@ui-kitten/components';
import React from 'react';

const useSettingsAction = () => {
  const navigation = useNavigation();
  const SettingsIcon = (props: IconProps) => <Icon {...props} name="settings-outline" />;

  const onPress = () => navigation.navigate('Settings' as never);

  return () => <TopNavigationAction icon={SettingsIcon} onPress={onPress} />;
};

export { useSettingsAction };
