import { ThemeType } from '@ui-kitten/components';

const styles = (theme: ThemeType) => ({
  container: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 24,
    adjustItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  calendar: {
    borderColor: 'transparent'
  },
  dateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledDate: {
    backgroundColor: theme['background-basic-color-3'],
  },
  exportButtonContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    minHeight: 160,
    paddingBottom: 52,
  },
  exportButton: {
    paddingVertical: 20,
    marginTop: 24,
    borderRadius: 16,
    width: '100%'
  },
});

export default styles;
