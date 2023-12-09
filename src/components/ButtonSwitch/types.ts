import { ViewProps } from 'react-native';

interface IButtonSwitchProps extends ViewProps {
  fullWidth?: boolean;
  children: React.ReactElement[];
  label: string;
  selectedIndex: number;
  onSelect: (index: number) => void;
}

interface ILevelButtonSwitchProps {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  levels: number[];
  label: string;
}

export type { IButtonSwitchProps, ILevelButtonSwitchProps };
