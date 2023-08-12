import { ArrowBack as ArrowBackIcon, Send as SendIcon } from "@mui/icons-material";
import { Button, Paper, TextField } from "@mui/material";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { useGrupoLocais } from "hooks/useGrupoLocais";
import styles from "./styles.module.scss";

export const Cadastro = (): JSX.Element => {
  const { grupoLocaisCadastroForm, handleCreate } = useGrupoLocais();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = grupoLocaisCadastroForm;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit(handleCreate)}>
          <h1 className={styles.title}>Cadastro de Fazendas</h1>
          <Paper elevation={4} className={styles.paper}>
            <div className={styles.input_box}>
              <TextField
                type="text"
                label="Nome*:"
                variant="standard"
                className={styles.input}
                error={!!errors.nome}
                helperText={errors.nome ? errors.nome.message : ""}
                onChange={(event) => {
                  setValue("nome", event.target.value.trim());
                }}
              />
              <TextField
                type="number"
                label="Área (Ha):"
                variant="standard"
                className={styles.input}
                error={!!errors.areaHa}
                helperText={errors.areaHa ? errors.areaHa.message : ""}
                onChange={(event) => {
                  setValue("areaHa", Number(event.target.value));
                }}
              />
            </div>
            <TextField
              type="text"
              label="Descrição:"
              variant="standard"
              className={styles.input}
              error={!!errors.descricao}
              helperText={errors.descricao ? errors.descricao.message : ""}
              onChange={(event) => {
                setValue("descricao", event.target.value.trim());
              }}
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
            <Button type="submit" endIcon={<SendIcon />}>
              Salvar
            </Button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};
