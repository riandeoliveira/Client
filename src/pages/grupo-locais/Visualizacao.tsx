import { ArrowBack as ArrowBackIcon } from "@mui/icons-material";
import { Button, Paper, TextField } from "@mui/material";
import { Header } from "components/Header";
import { useGrupoLocais } from "hooks/useGrupoLocais";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { grupoLocaisStore } from "store/grupo-locais.store";
import styles from "./styles.module.scss";

export const Visualizacao = observer((): JSX.Element => {
  const { id } = useParams();
  const { handleFetchById } = useGrupoLocais();

  useEffect(() => {
    handleFetchById(id);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.form}>
          <h1 className={styles.title}>Visualização de Fazendas</h1>
          <Paper className={styles.paper}>
            <div className={styles.input_box}>
              <TextField
                type="text"
                label="Nome*:"
                variant="standard"
                disabled
                value={grupoLocaisStore.current?.nome}
                InputLabelProps={{ shrink: true }}
                className={styles.input}
              />
              <TextField
                type="number"
                label="Área (Ha):"
                variant="standard"
                disabled
                value={grupoLocaisStore.current?.tamanhoHa}
                InputLabelProps={{ shrink: true }}
                className={styles.input}
              />
            </div>
            <TextField
              type="text"
              label="Descrição:"
              variant="standard"
              disabled
              value={grupoLocaisStore.current?.descricao}
              InputLabelProps={{ shrink: true }}
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
    </>
  );
});
