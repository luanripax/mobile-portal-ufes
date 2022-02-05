import React from 'react';
import Logo from '../../assets/logo.svg';
import { InputForm } from '../../components/InputForm';
import { KeyboardAvoidingView } from 'react-native';
import { useFormikContext, FormikProps, Formik } from 'formik';
import { FormLogin } from './formValues';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { initialValues } from './formValues';
import { validationSchema } from './validationSchema';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  SubTitle,
  Header,
  FormContainer,
  Button,
  ButtonContainer,
  ButtonLabel
} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const onSubmit = (values: FormLogin) => {
    console.log(values);
    navigation.navigate('Routes');
  };

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: '#1C1C1C' }}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
      >
        {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
          <Container>
            <Header>
              <Title>UFES</Title>
              <Logo />
              <SubTitle>Portal do Aluno</SubTitle>
            </Header>
            <FormContainer>
              <InputForm
                label="Login"
                placeholder="Digite seu nome de usuário"
                value={values.email}
                error={errors.email}
                handleChange={handleChange('email')}
              />
              <InputForm
                label="Senha"
                placeholder="Digite sua senha"
                value={values.password}
                error={errors.password}
                handleChange={handleChange('password')}
              />
            </FormContainer>
            <ButtonContainer>
              <Button onPress={handleSubmit}>
                <ButtonLabel>ENTRAR</ButtonLabel>
              </Button>
            </ButtonContainer>
          </Container>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default Login;
