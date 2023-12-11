import { ThemeType } from '@ui-kitten/components';

const cameraIconStyles = (theme: ThemeType) => ({
  cameraIcon: {
    fill: theme['text-hint-color'],
    height: 68,
    width: 68,
  },
});

const styles = (theme: ThemeType) => ({
  preview: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme['border-basic-color-4'],
    height: 240,
    width: 240,
    backgroundColor: theme['background-basic-color-2'],
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },  
});  

export {
  cameraIconStyles,
  styles,
};
