import { ArrowBack as ArrowBackIcon, Send as SendIcon } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import { Footer } from "components/Footer";
import { Form } from "components/Form";
import { Header } from "components/Header";
import { useFormik } from "formik";
import { useGrupoLocais } from "hooks/useGrupoLocais";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { grupoLocaisSchema } from "schemas/grupo-locais-schema";
import { grupoLocaisStore } from "store/grupo-locais.store";
import styles from "./styles.module.scss";

export const Edicao = observer((): JSX.Element => {
  const { id } = useParams();
  const { handleFetchById, handleUpdate } = useGrupoLocais();

  const formik = useFormik({
    initialValues: {
      descricao: grupoLocaisStore.current?.descricao ?? null,
      fazendaId: "41559565-65a8-4170-aba2-ce724a2089be",
      id: id ?? "",
      nome: grupoLocaisStore.current?.nome ?? "",
      tamanhoHa: grupoLocaisStore.current?.tamanhoHa ?? null,
    },
    validationSchema: grupoLocaisSchema.edicao,
    onSubmit: (values) => handleUpdate(values),
    enableReinitialize: true,
  });

  useEffect(() => {
    handleFetchById(id);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <h1 className={styles.title}>Edição de Fazendas</h1>
          <Paper elevation={4} className={styles.paper}>
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
      <Footer />
    </>
  );
});
