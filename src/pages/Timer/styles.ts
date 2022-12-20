import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  configBtn: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 40 / 2,
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default styles;
