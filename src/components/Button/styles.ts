import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerOutline: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.secondary100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary30

  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    textAlign: 'center',
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18
  }
});