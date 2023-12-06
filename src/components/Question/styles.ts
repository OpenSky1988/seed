import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  countdown: {
    color: COLORS.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  countdownContainer: {
    backgroundColor: COLORS.error,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    width: 40,
  },
  questionContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  questionCounter: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  questionCurrentIndex: {
    fontSize: 20,
    opacity: 0.6,
  },
  questionTotal: {
    fontSize: 18,
    opacity: 0.6,
  },
  questionText: {
    fontSize: 26,
    fontWeight: '700',
  },
});

export default styles;
