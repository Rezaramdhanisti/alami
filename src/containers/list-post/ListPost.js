/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import axios from 'axios';

import ListItem from '@components/ListItem';
import SearchBar from '@components/SearchBar';
import NoData from '@components/NoData';
import Loading from '@components/Loading';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';

const ListPost = ({navigation}) => {
  const [data, setList] = useState([]);
  const [filterData, setFilterList] = useState([]);
  const [isLoading, updateState] = useState(true);
  const [searchText, updateText] = useState('');
  const [isFiltered, toggleFilter] = useState(false);
  const [storageValue, updateStorageValue] = useState(0);
  const [update, setUpdate] = useState(false);

  const getStorageValue = async () => {
    let value = 0;
    try {
      value = JSON.parse(await AsyncStorage.getItem('id_user')) || 0;
    } catch (e) {
    } finally {
      updateStorageValue(value);
      setUpdate(true);
    }
  };

  const fetchData = () => {
    if (storageValue === 0) {
      return;
    }
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        let result = res.data.filter((data) => data.userId === storageValue);
        setList(result);
        updateState(false);
      })
      .catch(() => {
        setList([]);
        updateState(false);
      });
  };

  // fetching list once after the initial render
  useEffect(() => {
    getStorageValue();
    fetchData();
  }, [update]);

  const onChangeSearchText = (text) => {
    if (text.length > 0) {
      toggleFilter(true);
    } else {
      toggleFilter(false);
    }
    updateText(text);
    updateFilterData(text);
  };

  // Searching
  const updateFilterData = (input) => {
    const keyword = input.toLowerCase();
    const newData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword) ||
        item.body.includes(keyword),
    );
    setFilterList(newData);
  };

  let list = (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={isFiltered ? filterData : data}
      renderItem={({item}) => <ListItem data={item} navigation={navigation} />}
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<NoData />}
    />
  );

  if (isLoading) {
    list = <Loading />;
  }

  return (
    <View style={styles.container}>
      {!isLoading && (
        <SearchBar
          value={searchText}
          updateText={(text) => onChangeSearchText(text)}
        />
      )}
      {list}
    </View>
  );
};

export default ListPost;
