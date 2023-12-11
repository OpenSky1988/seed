import { Button, Text, withStyles } from '@ui-kitten/components';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import type { IButtonSwitchProps, ILevelButtonSwitchProps, TButtonSwitchItemProps } from './types';

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
    if (index === 0) return eva?.style?.firstButton;
    if (index === count - 1) return eva?.style?.lastButton;
    return eva?.style?.middleButton;
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
          key={`${label}-${index}`}
          onPress={handlePress}
          status={isSelected ? 'primary' : 'basic'}
          style={[
            style,
            borderStyle,
            fullWidth && eva?.style?.buttonFullWidth,
            isSelected || eva?.style?.unselectedButton,
          ]}
        />
      );
    });
  };

  return (
    <View style={eva?.style?.container}>
      <Text category='label' style={eva?.style?.levelLabel}>{label}</Text>
      <View {...buttonSwitchProps} style={[eva?.style?.switchContainer, style]}>
        {renderButtons()}
      </View>
    </View>
  );
};

const ThemedButtonSwitch = withStyles(ButtonSwitchBase, styles);

const CustomText: React.FC<TButtonSwitchItemProps> = ({
  children,
  eva,
  evaProps,
}) => (
  <Text {...evaProps} style={eva?.style?.unselectedButtonText}>
    {children}
  </Text>
);

const ThemedText = withStyles(CustomText, styles);

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
    {levels.map((level, i) => (
      <Button key={`${label}-${level}`}>
        {i === selectedIndex
          ? level.toString()
          : (evaProps) => <ThemedText evaProps={evaProps}>{level.toString()}</ThemedText>
        }
      </Button>
    ))}
  </ThemedButtonSwitch>
);

export default ButtonSwitch;
