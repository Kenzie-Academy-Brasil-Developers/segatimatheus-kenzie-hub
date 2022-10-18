import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
  confirmPassword: yup.string().required("Senhas devem ser iguais"),
  bio: yup.string().required("Bio é obrigatório"),
  contact: yup.number().required("Contato é obrigatório"),
});

export const schemaLogin = yup.object({
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatório"),
});

export const schemaTecnologie = yup.object({
  title: yup.string().required("Titulo é obrigatório"),
  status: yup.string().required("Status é obrigatório"),
});
