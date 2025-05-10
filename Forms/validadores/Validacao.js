import * as Yup from 'yup';

const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[^çÇáéíóúàèìòùâêîôûãõäëïöüñ]{8,}$/;

const validationSchema = Yup.object().shape({
  nome: Yup.string().required('Nome é obrigatório'),
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
    .required('CEP é obrigatório'),
  cpf: Yup.string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
    .required('CPF é obrigatório'),
  telefone: Yup.string()
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido')
    .required('Telefone é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[^çÇáéíóúàèìòùâêîôûãõäëïöüñ]{8,}$/,
      'Senha deve ter 8 caracteres, incluindo maiúscula, minúscula, número e caractere especial (sem ç ou acento)'
    )
    .required('Senha é obrigatória'),
});

export default validationSchema;
