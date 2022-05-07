import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import If from '../../components/If';
import { locale } from '../../locale';
import {
  Container,
  MainHeader,
  BodyWrapper,
} from './styles';
import { useStores } from '../../hooks/useStores';
import { showError } from '../../utils/flashMessages';
import { DropDown } from '../../components/DropDown';
import { Button } from './styles';
export function Offer({navigation}) {

  const { user, info } = useStores();
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('mainCourse');
  const [items, setItems] = useState([
    { label: locale('offer.mainCourse'), value: 'mainCourse' },
    { label: locale('offer.offerGrid'), value: 'offerGrid' },
    { label: locale('offer.filterCourse'), value: 'filterCourse' },
    { label: locale('offer.filterSubject'), value: 'filterSubject' },
    { label: locale('offer.filterDepartment'), value: 'filterDepartment' }
  ]);

  const [openCourse, setOpenCourse] = useState(false);
  const [valueCourse, setValueCourse] = useState('adm-day');
  const [itemsCourse, setItemsCourse] = useState([]);

  const [openSubject, setOpenSubject] = useState(false);
  const [valueSubject, setValueSubject] = useState('alg-num');
  const [itemsSubject, setItemsSubject] = useState([]);

  const [openDepartment, setOpenDepartment] = useState(false);
  const [valueDepartment, setValueDepartment] = useState('physical-edu');
  const [itemsDepartment, setItemsDepartment] = useState([]);

  const handlePress = () => {
    navigation.navigate('PdfViewer', { title: items.find(item => item.value === value).label, tag: value });
  };

  const getOfferInfo = async() => {
    try {
        setItemsCourse(await info.getCourseList());
        setItemsDepartment(await info.getDepartmentList());
        setItemsSubject(await user.getUserCourseSubjects());
    } catch (err) {
        showError(err.message);
    }
  };

  useEffect(() => {
    getOfferInfo();
  },[]);

  return (
    <Container>
        <MainHeader title={locale('offer.title')} />

        <BodyWrapper>
        <View>
            <DropDown
              title={locale('offer.type')}
              maxHeight={85}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
            <If condition={value === 'filterCourse'}>
            <DropDown
              title={locale('offer.course')}
              maxHeight={200}
              open={openCourse}
              value={valueCourse}
              items={itemsCourse}
              setOpen={setOpenCourse}
              setValue={setValueCourse}
              setItems={setItemsCourse}
            />
            </If>
            <If condition={value === 'filterSubject'}>
            <DropDown
              title={locale('offer.subject')}
              maxHeight={200}
              open={openSubject}
              value={valueSubject}
              items={itemsSubject}
              setOpen={setOpenSubject}
              setValue={setValueSubject}
              setItems={setItemsSubject}
            />
            </If>
            <If condition={value === 'filterDepartment'}>
            <DropDown
              title={locale('offer.department')}
              maxHeight={200}
              open={openDepartment}
              value={valueDepartment}
              items={itemsDepartment}
              setOpen={setOpenDepartment}
              setValue={setValueDepartment}
              setItems={setItemsDepartment}
            />
            </If>
        </View>
        <Button title={locale('general.viewPDF')} onPress={handlePress}/>
        </BodyWrapper>
  </Container>
  );
}