import * as Yup from 'yup';
import { locale } from '../../locale';

export const validationSchema = Yup.object().shape({
  value: Yup
  .number()
  .required(locale('error.mandatoryField')).transform((o, v) => parseInt(v.replace(/,/g, '')))
  .min(1, locale('error.minRechargeValue'))
});
