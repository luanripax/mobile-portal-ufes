import * as Yup from 'yup';
import { locale } from '../../locale';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required(locale('error.mandatoryField')),
  password: Yup.string().required(locale('error.mandatoryField')),
});
