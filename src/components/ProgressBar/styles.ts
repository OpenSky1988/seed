import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: '#00000020',
    borderRadius: 10,
    height: 10,
    width: '100%',
  },
  progressBar: {
    backgroundColor: COLORS.accent,
    borderRadius: 10,
    height: 10,
  },
});

export default styles;
