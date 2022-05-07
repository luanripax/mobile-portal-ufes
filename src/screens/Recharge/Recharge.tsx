import React, { useState } from 'react';
import { locale } from '../../locale';
import { InputForm } from '../../components/InputForm';
import { View, Image} from 'react-native';
import { Formik } from 'formik';
import { FormRecharge } from './formValues';
import { initialValues } from './formValues';
import { validationSchema } from './validationSchema';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import { showWarning } from '../../utils/flashMessages';
import { getTheme } from '../../hooks/settings';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import {
  Container,
  Title,
  Header,
  FormContainer,
  Button,
  ButtonContainer,
  ModalTitle,
  ModalCodeLabel,
  CodeWrapper,
  CodeValue,
  ModalWrapper,
  CopyButton,
  BackButton,
  BackText,
  CopyText,
  Icon,
  KeyBoardAvoidView
} from './styles';
import RUImages from '../../assets/index';

const Recharge: React.FC = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [payment, setPayment] = useState('pix');

  const staticData: ICheckboxButton[] = [
    {
      id: 0,
      text: 'PIX',
      textStyle: { textDecorationLine: "none", color: getTheme() === 'dark' ? 'white' : 'black'},
      style: {marginBottom: 20, marginTop: 10},
      fillColor: '#34AA71',
      unfillColor: 'transparent',
      iconStyle: { borderColor: 'gray' }
    },
    {
      id: 1,
      text: 'Boleto',
      textStyle: { textDecorationLine: "none", color: getTheme() === 'dark' ? 'white' : 'black' },
      fillColor: '#34AA71',
      unfillColor: 'transparent',
      iconStyle: { borderColor: 'gray' }
    }
  ];

  const onSubmit = (values: FormRecharge) => {
    if(payment)
      setOpen(true);
    else
      showWarning('Selecione o método de pagamento');
  };

  const handleCopy = () => {
    setCopied(true);
  }

  const handleBack = () => {
    setOpen(false);
    setCopied(false);
    navigation.goBack();
  }

  const handleSelectPayment = (selectedItem: ICheckboxButton) => {
    selectedItem.text === "PIX" ? setPayment('pix') : setPayment('billet');
  }

  return (
    <KeyBoardAvoidView>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
      >
        {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
          <Container>
            <Header title={locale('ru.rechargeTitle')} />
            <Title>{locale('ru.rechargeAmount')}</Title>            
            <FormContainer>
              <InputForm
                label=""
                placeholder="R$ XX,XX"
                value={values.value}
                error={errors.value}
                handleChange={handleChange('value')}
                autoCapitalize="none"
              />
            </FormContainer>
            <Title>{locale('ru.rechargePayment')}</Title>
            <BouncyCheckboxGroup
              data={staticData}
              style={{ flexDirection: "column", marginTop: 20, paddingHorizontal: 20}}
              onChange={handleSelectPayment}
            />
            <ButtonContainer>
              <Button onPress={handleSubmit} title={locale('ru.rechargeLabel')}/>
            </ButtonContainer>
            <Modal isVisible={open} backdropOpacity={0.9}>
              <ModalWrapper>
                  <ModalTitle>{locale(`${payment}.title`)}</ModalTitle> 
                  <Image source={payment === 'pix' ? RUImages.pix : RUImages.billet} style={{width: 80, height: 80, alignSelf: 'center', marginTop: 40}} resizeMode='contain' />
                  <ModalCodeLabel>{locale(`${payment}.codeLabel`)}</ModalCodeLabel>
                  <CodeWrapper>
                    <CodeValue>{locale(`${payment}.codeExample`)}</CodeValue>
                  </CodeWrapper>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 40}}>
                    <CopyButton onPress={handleCopy}>
                      {copied ? <Icon name="check"/> : <CopyText>{locale('general.copy')}</CopyText>}
                    </CopyButton>
                    <BackButton onPress={handleBack}>
                      <BackText>{locale('general.back')}</BackText>
                    </BackButton>
                    </View>
              </ModalWrapper>
            </Modal>
          </Container>
        )}
      </Formik>
    </KeyBoardAvoidView>
  );
};

export default Recharge;
