import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const styles = StyleSheet.create({
  nextButton: {
    borderRadius: 16,
    marginTop: 40,
    padding: 20,
    width: '100%',
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
