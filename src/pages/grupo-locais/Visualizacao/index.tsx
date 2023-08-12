import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { Button, Paper, TextField } from "@mui/material";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { useGrupoLocais } from "hooks/useGrupoLocais";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

export const Visualizacao = (): JSX.Element => {
  const { id } = useParams();
  const { handleFetchById } = useGrupoLocais();

  useEffect(() => {
    handleFetchById(id as string);
  }, []);

  // TODO: Trazer os dados

  // TODO: Preencher no formulário de visualização

  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.form}>
          <h1 className={styles.title}>Visualização de Fazendas</h1>
          <Paper elevation={4} className={styles.paper}>
            <div className={styles.input_box}>
              <TextField
                type="text"
                label="Nome*:"
                variant="standard"
                disabled
                value={"Teste"}
                className={styles.input}
              />
              <TextField
                type="number"
                label="Área (Ha):"
                variant="standard"
                disabled
                value={10}
                className={styles.input}
              />
            </div>
            <TextField
              type="text"
              label="Descrição:"
              variant="standard"
              disabled
              value={"Teste"}
              className={styles.input}
            />
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
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};
