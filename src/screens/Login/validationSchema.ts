import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required('Campo obrigatorio'),
  password: Yup.string().required('Campo obrigatorio'),
});
