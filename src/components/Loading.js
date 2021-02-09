import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

import * as color from '@theme/color';

const Loading = () => (
  <View style={styles.loading}>
    <ActivityIndicator size="large" color={color.orange} />
    <Text style={styles.loadingText}>Please wait</Text>
  </View>
);

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: color.black,
    fontWeight: '500',
    fontSize: 14,
    padding: 4,
  },
});

export default Loading;
