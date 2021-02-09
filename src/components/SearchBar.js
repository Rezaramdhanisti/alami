import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import * as color from '@theme/color';

const SearchBar = ({value, updateText}) => (
  <View style={styles.container}>
    <View style={styles.search}>
      <EvilIcons name="search" size={28} color={color.grey} />
      <TextInput
        value={value}
        onChangeText={(text) => updateText(text)}
        style={styles.textInput}
        placeholder="Cari judul atau deskripsi"
        placeholderTextColor={color.grey}
        autoCorrect={false}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: color.white,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  textInput: {
    flex: 1,
    height: 40,
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SearchBar;
