import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { InputForm } from '../../components/InputForm';
import { StackHeader } from '../../components/StackHeader';
import { KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { useFormikContext, FormikProps, Formik } from 'formik';
import { FormRecharge } from './formValues';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { initialValues } from './formValues';
import { validationSchema } from './validationSchema';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
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

  const onSubmit = (values: FormRecharge) => {
    console.log(values);
    setOpen(true);
  };

  const handleCopy = () => {
    setCopied(true);
  }

  const handleBack = () => {
    setOpen(false);
    setCopied(false);
    navigation.goBack();
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
            <ButtonContainer>
              <Button onPress={handleSubmit}>
                <ButtonLabel>ENTRAR</ButtonLabel>
              </Button>
            </ButtonContainer>
            <Modal isVisible={open} backdropOpacity={0.9}>
              <ModalWrapper>
                  <ModalTitle>Boleto gerado com sucesso!</ModalTitle> 
                  <Image source={RUImages.tick} style={{width: 80, height: 80, alignSelf: 'center', marginTop: 40}} resizeMode='contain' />
                  <ModalCodeLabel>Código</ModalCodeLabel>
                  <CodeWrapper>
                    <CodeValue>1234123123432421112420000001212</CodeValue>
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
