import React, { useEffect, useState } from 'react';
import { View} from 'react-native';
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
import { Button } from '../../components/Button';

export function Offer({navigation}) {

  const { user, info } = useStores();
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('mainCourse');
  const [items, setItems] = useState([
    { label: 'Oferta do seu curso', value: 'mainCourse' },
    { label: 'Grade de oferta', value: 'offerGrid' },
    { label: 'Oferta por curso', value: 'filterCourse' },
    { label: 'Oferta por disciplina de curso', value: 'filterSubject' },
    { label: 'Oferta por departamento', value: 'filterDepartment' }
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
        <MainHeader title="Oferta - 2022/1" />

        <BodyWrapper>
        <View>
            <DropDown
            title="Tipo de oferta"
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
                title="Curso"
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
                title="Disciplina"
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
                title="Departamento"
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
        <Button title="Visualizar PDF" color="#b51b28" onPress={handlePress}/>
        </BodyWrapper>
  </Container>
  );
}