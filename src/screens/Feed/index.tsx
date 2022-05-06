import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { CollegiateNew } from '../../components/CollegiateNew';
import { useStores } from '../../hooks/useStores';
import { showError } from '../../utils/flashMessages';
import If from '../../components/If';
import { ActivityIndicator, FlatList } from 'react-native';
import { Updater } from '../../components/Updater';

import { Container, MainHeader, LoadingWrapper } from './styles';

const Feed = () => {

  const { info, user } = useStores();
  const { code } = user.userInfo.course;

  const [loading, setLoading] = useState(false);
  const [,setUpdate] = useState(false);

  const getCollegiateNews = async() => {
    try {
      setLoading(true);
      await info.getCollegiateNews(code);
      setLoading(false);
    } catch (err) {
      showError(err.message);
    }
  }

  const renderNews = ({ item }) => (
    <CollegiateNew
      date={item.posted_at}
      content={item.message}
      liked={item.liked}
      likes={item.likes}
    />
  );

  useEffect(() => {
    getCollegiateNews();
  },[]);

  
  return (
    <Container>
      <MainHeader title="Notícias" />
      <If condition={loading}>
        <LoadingWrapper>
          <ActivityIndicator size="large"/>
        </LoadingWrapper>
      </If>
      <If condition={!loading}>
        <FlatList
          data={info.collegiateNews}
          renderItem={renderNews}
          keyExtractor={(item) => item.id}
        />
      </If>
      <Updater update={setUpdate} />
    </Container>
  );
}

export default observer(Feed);