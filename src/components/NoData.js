import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const NoData = () => (
  <View style={styles.container}>
    <Text>Data tidak ditemukan</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});

export default NoData;
