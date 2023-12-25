import { ThemeType } from '@ui-kitten/components';

const styles = (theme: ThemeType) => ({
  calendar: {
    borderColor: 'transparent'
  },
  exportButtonContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    minHeight: 160,
    paddingBottom: 152,
  },
  exportButton: {
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 24,
    borderRadius: 16,
    width: '100%'
  },
});

export default styles;
