import { ThemeType } from '@ui-kitten/components';

const styles = (theme: ThemeType) => ({
  contentContainer: {
    backgroundColor: theme['background-basic-color-1'],
    flex: 1,
    alignItems: 'center',
  },
  handle: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: theme['background-basic-color-1'],
  },
  handleIndicator: {
    backgroundColor: theme['text-basic-color'],
  },
  bottomSheet: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
});

export default styles;
