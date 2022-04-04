import React from 'react';
import Logo from '../../assets/logo.svg';
import { observer } from 'mobx-react';
import { InputForm } from '../../components/InputForm';
import { useFormikContext, FormikProps, Formik } from 'formik';
import { FormLogin } from './formValues';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { initialValues } from './formValues';
import { validationSchema } from './validationSchema';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, Firestore, getFirestore } from "firebase/firestore";
import { useStores } from '../../hooks/useStores';
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
  const auth = getAuth();
  const { user } = useStores();
  
  const getData = async() => {
    const db = getFirestore();
    const docRef = doc(db, "users", "gp6yrAmOlmTcNDbH3nWI");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  }

  const onSubmit = async(values: FormLogin) => {
    
    try {
      //const email = `${values.email}@ufes.com`;
      //await signInWithEmailAndPassword(auth, email, values.password);
      await user.login(values.email, values.password);
    } catch (err) {
      console.log(err.code);
    }
    //getData();
    
    /*const email = `${values.email}@ufes.com`;
    

    signInWithEmailAndPassword(auth, email, values.password)
    .then(() => navigation.navigate('Routes'))
    .catch((error) => {
      console.log(error);
    })*/
    //try {
     // await user.login(values.email, values.password);
    //} catch (err) {
    //s  console.log('aaaaaaaaaa');
    //}
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

export default observer(Login);
