import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { locale } from '../../locale';
import { InputForm } from '../../components/InputForm';
import { KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { useFormikContext, FormikProps, Formik } from 'formik';
import { FormRecharge } from './formValues';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { initialValues } from './formValues';
import { validationSchema } from './validationSchema';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { showWarning } from '../../utils/flashMessages';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import {
  Container,
  Title,
  SubTitle,
  Header,
  FormContainer,
  Button,
  ButtonContainer,
  ButtonLabel,
  ModalTitle,
  ModalCodeLabel,
  CodeWrapper,
  CodeValue,
  ModalWrapper,
  ButtonWrapper,
  CopyButton,
  BackButton,
  BackText,
  CopyText,
  Icon
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
      textStyle: { textDecorationLine: "none", color: 'white' },
      style: {marginBottom: 20, marginTop: 10},
      fillColor: '#34AA71',
      unfillColor: 'transparent',
      iconStyle: { borderColor: 'gray' }
    },
    {
      id: 1,
      text: 'Boleto',
      textStyle: { textDecorationLine: "none", color: 'white' },
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
    <KeyboardAwareScrollView style={{ backgroundColor: '#2c2f33' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
      >
        {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
          <Container>
            <Header title='Recarregar RU' />
            <Title>Digite quanto deseja recarregar:</Title>            
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
            <Title>Selecione a forma de pagamento:</Title>
            <BouncyCheckboxGroup
              data={staticData}
              style={{ flexDirection: "column", marginTop: 20, paddingHorizontal: 20}}
              onChange={handleSelectPayment}
            />
            <ButtonContainer>
              <Button onPress={handleSubmit} />
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
                      {copied ? <Icon name="check"/> : <CopyText>Copiar</CopyText>}
                    </CopyButton>
                    <BackButton onPress={handleBack}>
                      <BackText>Voltar</BackText>
                    </BackButton>
                    </View>
              </ModalWrapper>
            </Modal>
          </Container>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Recharge;
