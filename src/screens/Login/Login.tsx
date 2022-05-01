import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { observer } from 'mobx-react';
import { InputForm } from '../../components/InputForm';
import { useFormikContext, FormikProps, Formik } from 'formik';
import { FormLogin } from './formValues';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { initialValues } from './formValues';
import { validationSchema } from './validationSchema';
import { useStores } from '../../hooks/useStores';
import { showError } from '../../utils/flashMessages';
import {
  Container,
  Title,
  SubTitle,
  Header,
  FormContainer,
  Button,
  ButtonContainer,
} from './styles';
import { StackActions, CommonActions } from '@react-navigation/native';
import theme from '../../styles/theme';
import { getTheme } from '../../hooks/settings';
import { StatusBar } from 'expo-status-bar';

const Login = ({navigation}) => {
  const { user, info } = useStores();
  const [loaded, setLoaded] = useState(false);

  const onSubmit = async(values: FormLogin) => { 
    try {
      setLoaded(true);
      await user.login(values.email, values.password);
      await user.getUserInfo();
      await info.getGeneralInfo();
      navigation.dispatch(CommonActions.reset({
        routes: [
          { name: 'Routes' },
        ],
      }));
      setLoaded(false);
    } catch (err) {
      showError(err.message);
      setLoaded(false);
    }
  };

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: theme.colors[getTheme()].background_secondary }}>
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
                autoCapitalize="none"
                autoCorrect={false}
              />
              <InputForm
                label="Senha"
                placeholder="Digite sua senha"
                value={values.password}
                error={errors.password}
                handleChange={handleChange('password')}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
            </FormContainer>
            <ButtonContainer>
              <Button title='ENTRAR' onPress={handleSubmit} loading={loaded}/>
            </ButtonContainer>
          </Container>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
};

export default observer(Login);
