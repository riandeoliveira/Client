import * as yup from "yup";

export const grupoLocaisSchema = {
  cadastro: yup.object().shape({
    descricao: yup.string().trim().max(128, "Máximo de 256 caracteres!").nullable().notRequired(),
    fazendaId: yup.string().required("Campo Obrigatório!"),
    nome: yup.string().trim().max(64, "Máximo de 64 caracteres!").required("Campo Obrigatório!"),
    tamanhoHa: yup.number().min(0, "Campo maior ou igual a zero!").nullable().notRequired(),
  }),

  edicao: yup.object().shape({
    descricao: yup.string().trim().max(128, "Máximo de 256 caracteres!").nullable().notRequired(),
    fazendaId: yup.string().required("Campo Obrigatório!"),
    id: yup.string().required("Campo Obrigatório!"),
    nome: yup.string().trim().max(64, "Máximo de 64 caracteres!").required("Campo Obrigatório!"),
    tamanhoHa: yup.number().min(0, "Campo maior ou igual a zero!").nullable().notRequired(),
  }),
};
