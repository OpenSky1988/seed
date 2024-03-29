import { ThemeType } from '@ui-kitten/components';

const styles = (theme: ThemeType) => ({
  container: {
    marginVertical: 6,
    width: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstButton: {
    borderRadius: 16,
    borderTopEndRadius: 0,
    borderBottomEndRadius: 0,
  },
  middleButton: {
    borderRadius: 0,
  },
  lastButton: {
    borderRadius: 16,
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
  },
  unselectedButton: {
    backgroundColor: theme['background-basic-color-2'],
    borderColor: theme['background-basic-color-2'],
  },
  unselectedButtonText: {
    color: theme['text-basic-color'],
  },
  buttonFullWidth: {
    flex: 1,
  },
  levelLabel: {
    alignSelf: 'flex-start',
    marginBottom: 6,
    color: theme['text-hint-color'],
  },
});

export default styles;
