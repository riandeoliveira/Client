// import { z } from "zod";

// // FIXME: RESOLVER ERRO DE NAN AO APAGAR NUMBER INPUT !!!

// export const grupoLocaisSchema = {
//   cadastro: z.object({
//     descricao: z.string().trim().max(1024, { message: "Máximo de 1024 caracteres!" }).nullable(),
//     fazendaId: z.string().nonempty("Campo Obrigatório!"),
//     nome: z
//       .string()
//       .trim()
//       .max(64, { message: "Máximo de 64 caracteres" })
//       .nonempty("Campo Obrigatório!"),
//     tamanhoHa: z.number().min(0, { message: "Campo maior ou igual a zero!" }).nullable(),
//   }),

//   edicao: z.object({
//     descricao: z.string().trim().max(1024, { message: "Máximo de 1024 caracteres!" }).nullable(),
//     fazendaId: z.string().nonempty("Campo Obrigatório!"),
//     id: z.string().nonempty("Campo Obrigatório!"),
//     nome: z
//       .string()
//       .trim()
//       .max(64, { message: "Máximo de 64 caracteres" })
//       .nonempty("Campo Obrigatório!"),
//     tamanhoHa: z.number().min(0, { message: "Campo maior ou igual a zero!" }).nullable(),
//   }),
// };

// export type GrupoLocaisCadastroSchema = z.infer<typeof grupoLocaisSchema.cadastro>;
// export type GrupoLocaisEdicaoSchema = z.infer<typeof grupoLocaisSchema.edicao>;

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
