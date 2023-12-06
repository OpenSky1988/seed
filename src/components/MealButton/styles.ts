import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  mealButtonTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  mealButton: {
    borderRadius: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 20,
  },
  mealButtonCategory: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
  },
  mealButtonTime: {
    color: COLORS.white,
    fontSize: 16,
  },
  mealButtonName: {
    color: COLORS.white,
    fontSize: 18,
    marginBottom: 16,
  },
  mealButtonNotes: {
    color: COLORS.white,
    fontSize: 16,
  },
  mealButtonNotesContainer: {
    backgroundColor: COLORS.error,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonText: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowRadius: 4,
  }
});

export default styles;
