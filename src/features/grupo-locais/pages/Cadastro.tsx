import { ArrowBack as ArrowBackIcon, Send as SendIcon } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import { Form } from "components/Form";
import { Header } from "components/Header";
import { useGrupoLocais } from "features/grupo-locais/hook";
import { grupoLocaisSchema } from "features/grupo-locais/schema";
import { useFormik } from "formik";
import { localStorageStore } from "store/local-storage.store";
import styles from "./styles.module.scss";

export const Cadastro = (): JSX.Element => {
  const { handleCreate } = useGrupoLocais();

  const formik = useFormik({
    initialValues: {
      descricao: "",
      fazendaId: localStorageStore.fazenda?.value || "",
      nome: "",
      tamanhoHa: null,
    },
    validationSchema: grupoLocaisSchema.cadastro,
    onSubmit: (values) => handleCreate(values),
  });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <h1 className={styles.title}>Cadastro de Fazendas</h1>
          <Paper className={styles.paper}>
            <div className={styles.input_box}>
              <Form.TextField label="Nome*:" name="nome" form={formik} />
              <Form.NumberField
                label="Área (Ha):"
                name="tamanhoHa"
                form={formik}
                allowNegative={false}
                decimalScale={3}
              />
            </div>
            <Form.TextField label="Descrição:" name="descricao" form={formik} />
          </Paper>
          <div className={styles.button_box}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<ArrowBackIcon />}
              href="/grupo-locais/listagem"
            >
              Voltar
            </Button>
            <Button type="submit" endIcon={<SendIcon />}>
              Salvar
            </Button>
          </div>
        </form>
      </main>
    </>
  );
};
