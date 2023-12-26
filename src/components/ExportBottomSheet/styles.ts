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
    paddingHorizontal: 24,
    width: '100%',
  },
  exportButton: {
    borderRadius: 16,
    marginTop: 24,
    paddingVertical: 20,
    width: '100%'
  },
});

export default styles;
