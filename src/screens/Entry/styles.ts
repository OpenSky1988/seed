import { StyleSheet } from 'react-native';

import { SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  quizContainer: {
    flex: 1,
    paddingHorizontal: 16,
    position: 'relative',
    minHeight: '100%',
  },
  bottomBackgroundImage: {
    bottom: 0,
    height: 130,
    left: 0,
    opacity: 0.5,
    position: 'absolute',
    right: 0,
    width: SIZES.width,
    zIndex: -1,
  },
});

export default styles;
