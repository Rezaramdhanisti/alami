/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import axios from 'axios';

import Loading from '@components/Loading';
import ListItem from '@components/ListItem';

import styles from './style';

const DetailPost = ({route, navigation}) => {
  const [data, setData] = useState({});
  const [dataList, setList] = useState([]);
  const [isLoading, updateState] = useState(true);
  const {dataParams} = route.params;

  const fetchData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${dataParams.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch(() => {
        updateState(false);
      });
  };

  const fetchDataComment = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) => {
        let result = res.data.filter((data) => data.postId === dataParams.id);
        setList(result);
        updateState(false);
      })
      .catch(() => {
        setList([]);
        updateState(false);
      });
  };

  // fetching detail once after the initial render
  useEffect(() => {
    fetchData();
    fetchDataComment();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.viewHeader}>
          <Text style={styles.idText}>{data.title}</Text>
          <Text style={styles.idText}>User Id: {data.userId}</Text>
          <Text style={styles.idText}>Id : {data.id}</Text>
        </View>
        <View style={styles.title}>
          <Text>{data.body}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}></TouchableOpacity>
        </View>
      </View>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={dataList}
        renderItem={({item}) => (
          <ListItem data={item} navigation={navigation} isDetailPage={true} />
        )}
        style={styles.list}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DetailPost;
