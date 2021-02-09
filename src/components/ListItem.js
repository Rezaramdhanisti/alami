import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import * as color from '@theme/color';

const ListItem = ({data, navigation, isDetailPage = false}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        !isDetailPage &&
        navigation.navigate('detailPost', {
          dataParams: data,
        })
      }>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.info}>
            <View>
              <Text style={styles.textTitle}>{data.title || data.name}</Text>
              {isDetailPage ? (
                <Text>Post Id : {data.postId}</Text>
              ) : (
                <Text>User Id : {data.userId}</Text>
              )}
              <Text>Id : {data.id}</Text>
            </View>
            <Text>{data.body}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 4,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    backgroundColor: color.white,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  textTitle: {
    color: color.black,
    fontWeight: '700',
    fontSize: 14,
  },
});

export default ListItem;
