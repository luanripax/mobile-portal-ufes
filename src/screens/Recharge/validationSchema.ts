import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  value: Yup
  .number()
  .required("Campo obrigatório").transform((o, v) => parseInt(v.replace(/,/g, '')))
  .min(1, 'O valor mínimo é de R$ 1,00')
});
