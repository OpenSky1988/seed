import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Icon, IconProps, TopNavigationAction } from '@ui-kitten/components';

const useBackAction = () => {
  const navigation = useNavigation();
  const navigateBack = () => navigation.goBack();

  const BackIcon = (props: IconProps) => <Icon {...props} name="arrow-back" />;

  return () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;
};

export { useBackAction };
