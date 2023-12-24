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
    marginVertical: 10,
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
    backgroundColor: '#A767B5',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonText: {
    textShadowColor: 'rgba(0, 0, 0, 0.85)',
    textShadowRadius: 4,
  },
  overlay: {
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
  },
  overlayShadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
});

export default styles;
