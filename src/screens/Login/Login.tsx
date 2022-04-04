import React, { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { observer } from 'mobx-react';
import { InputForm } from '../../components/InputForm';
import { useFormikContext, FormikProps, Formik } from 'formik';
import { FormLogin } from './formValues';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { initialValues } from './formValues';
import { validationSchema } from './validationSchema';
import { useNavigation } from '@react-navigation/native';
import { doc, getDoc, Firestore, getFirestore } from "firebase/firestore";
import { useStores } from '../../hooks/useStores';
import { showMessage, hideMessage } from "react-native-flash-message";
import {
  Container,
  Title,
  SubTitle,
  Header,
  FormContainer,
  Button,
  ButtonContainer,
} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useStores();
  const [loaded, setLoaded] = useState(false);
  
  const getData = async() => {
    const db = getFirestore();
    const docRef = doc(db, "users", "gp6yrAmOlmTcNDbH3nWI");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  }

  const onSubmit = async(values: FormLogin) => {
    
    try {
      setLoaded(true);
      await user.login(values.email, values.password);
      setLoaded(false);
    } catch (err) {
      console.log(err.code);
      showMessage({message: err.message, type: 'danger', duration: 3000})
      setLoaded(false);
    }
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
                autoCapitalize="none"
              />
              <InputForm
                label="Senha"
                placeholder="Digite sua senha"
                value={values.password}
                error={errors.password}
                handleChange={handleChange('password')}
                autoCapitalize="none"
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
