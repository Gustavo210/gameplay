import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Dimensions.get("screen").height - 180
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay
  }
});