import {StyleSheet} from 'react-native';
import * as color from '@theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: color.bgColor,
  },
  containerContent: {
    flex: 1,
    marginVertical: 4,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    backgroundColor: color.white,
    borderRadius: 10,
  },
  profile: {
    color: color.black,
    fontWeight: '400',
    fontSize: 18,
    paddingVertical: 4,
  },
});
