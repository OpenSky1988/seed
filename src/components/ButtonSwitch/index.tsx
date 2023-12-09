import { Button, Text, withStyles } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import type { IButtonSwitchProps, ILevelButtonSwitchProps } from './types';

const ButtonSwitchBase: React.FC<IButtonSwitchProps> = ({
  children,
  eva,
  fullWidth,
  label,
  onSelect,
  selectedIndex,
  style,
  ...buttonSwitchProps
}) => {
  const getBorderStyleForPosition = (index: number, count: number) => {
    if (index === 0) return eva.style.firstButton;
    if (index === count - 1) return eva.style.lastButton;
    return eva.style.middleButton;
  };

  const renderButtons = () => {
    return children.map((childComponent, index) => {
      const { props: { style, ...childProps } } = childComponent;

      const borderStyle = getBorderStyleForPosition(index, children.length);
      const isSelected = index === selectedIndex;

      const handlePress = () => onSelect(index);

      return (
        <childComponent.type
          {...childProps}
          key={childComponent.props.children}
          style={[style, borderStyle, fullWidth && eva.style.buttonFullWidth]}
          status={isSelected ? 'primary' : 'basic'}
          onPress={handlePress}
        />
      );
    });
  };

  return (
    <View style={eva.style.container}>
      <Text category='label' style={eva.style.levelLabel}>{label}</Text>
      <View {...buttonSwitchProps} style={[eva.style.switchContainer, style]}>
        {renderButtons()}
      </View>
    </View>
  );
};

const ThemedButtonSwitch = withStyles(ButtonSwitchBase, styles);

const ButtonSwitch: React.FC<ILevelButtonSwitchProps> = ({
  label,
  levels,
  selectedIndex,
  setSelectedIndex,
}) => (
  <ThemedButtonSwitch
    label={label}
    fullWidth
    onSelect={setSelectedIndex}
    selectedIndex={selectedIndex}
  >
    {levels.map((level) => (
      <Button key={level}>{level.toString()}</Button>
    ))}
  </ThemedButtonSwitch>
);

export default ButtonSwitch;
