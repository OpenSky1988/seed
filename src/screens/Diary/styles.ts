import { ThemeType } from '@ui-kitten/components';

const styles = (theme: ThemeType) => ({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    position: 'relative',
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledDate: {
    backgroundColor: theme['background-basic-color-3'],
  }
});

export default styles;
