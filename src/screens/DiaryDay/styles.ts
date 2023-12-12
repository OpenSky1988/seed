import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  addMealButton: {
    paddingVertical: 20,
    marginTop: 24,
    borderRadius: 50,
  },
  addMealButtonContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    minHeight: 160,
    paddingBottom: 72,
  },
  layoutContainer: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 16,
    position: 'relative',
  },
  scrollView: {
    flexGrow: 1,
  }
});

export default styles;
