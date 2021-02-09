/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';
import NoData from '@components/NoData';
import Loading from '@components/Loading';

const Account = () => {
  const [data, setList] = useState([]);
  const [isLoading, updateState] = useState(true);
  const [storageValue, updateStorageValue] = useState(0);
  const [update, setUpdate] = useState(false);
  const [isError, setError] = useState(false);

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
      .get(`https://jsonplaceholder.typicode.com/users/${storageValue}`)
      .then((res) => {
        let result = res.data;
        setList(result);
        updateState(false);
      })
      .catch(() => {
        setError(true);
        updateState(false);
      });
  };
  // fetching profile once after the initial render
  useEffect(() => {
    getStorageValue();
    fetchData();
  }, [update]);

  let list = (
    <View style={styles.containerContent}>
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.profile}>
            Hello my name {data.name} my friend call me {data.username}, you can
            contact me through phone in here {data.phone} or website in here{' '}
            {data.website}, my user id is {data.id}. Fell free to contact me!
            Have a nice day !
          </Text>
        </View>
      </View>
    </View>
  );

  if (isLoading) {
    list = <Loading />;
  }

  if (isError) {
    list = <NoData />;
  }

  return <View style={styles.container}>{list}</View>;
};

export default Account;
