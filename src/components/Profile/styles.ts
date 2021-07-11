import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 23,
    marginBottom: 27
  },
  textTitle: {
    color: theme.colors.heading,
    fontSize: 24,
    fontFamily: theme.fonts.title500
  },
  footerButtons: {
    flexDirection: "row",
    paddingHorizontal: 20
  },
  containerButton: {
    flex: 1,
    marginHorizontal: 4
  }
});