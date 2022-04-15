import React from 'react';
import If from '../../components/If';
import { SubjectProgress } from '../../screens/SubjectProgress';
import { Report } from '../../screens/Report';
import { Offer } from '../../screens/Offer';

export function DocumentSelect({ navigation, route }) {
  const { tag } = route.params;

  return (
    <>
      <If condition={tag === 'offer'}>
        <Offer navigation={navigation} />
      </If>
      <If condition={tag === 'report'}>
        <Report navigation={navigation}/>
      </If>
      <If condition={tag === 'subject'}>
        <SubjectProgress />
      </If>
    </>
  );
}
