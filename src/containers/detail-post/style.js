import {StyleSheet} from 'react-native';
import * as color from '@theme/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bgColor,
  },
  content: {
    marginVertical: 16,
    backgroundColor: color.white,
  },
  viewHeader: {
    padding: 16,
  },
  idText: {
    color: color.black,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 4,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 0.5,
    borderBottomWidth: 1,
    borderColor: color.lightGrey,
  },
});
