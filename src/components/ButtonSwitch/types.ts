import { TextProps, ThemedComponentProps } from '@ui-kitten/components';
import { ViewProps } from 'react-native';

type IButtonSwitchProps = ViewProps & ThemedComponentProps<{}> & {
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

type TButtonSwitchItemProps = TextProps & ThemedComponentProps<{}> & {
  evaProps: TextProps | undefined;
};

export type { IButtonSwitchProps, TButtonSwitchItemProps, ILevelButtonSwitchProps };
