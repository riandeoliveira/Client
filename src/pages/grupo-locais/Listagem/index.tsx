import { Cancel as CancelIcon, CheckCircle as CheckCircleIcon } from "@mui/icons-material";
import { Button, Dialog, Table as MaterialTable } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Table } from "components/Table";
import { useGrupoLocais } from "hooks/useGrupoLocais";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { grupoLocaisStore } from "store/grupo-locais.store";
import { modalStore } from "store/modal.store";
import styles from "./styles.module.scss";

export const Listagem = observer((): JSX.Element => {
  const navigate = useNavigate();
  const { handleFetchAll, handleRemove, handleToggleStatus } = useGrupoLocais();

  useEffect(() => {
    handleFetchAll();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.page_box}>
          <div className={styles.page_header}>
            <h1 className={styles.title}>Fazendas</h1>
            <Button variant="contained" href="/grupo-locais/cadastro">
              Nova Fazenda
            </Button>
          </div>
          <TableContainer component={Paper}>
            <MaterialTable>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Nome</TableCell>
                  <TableCell align="left">Descrição</TableCell>
                  <TableCell align="center">Área (Ha)</TableCell>
                  <TableCell align="right">Ativo</TableCell>
                  <TableCell align="right">Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {grupoLocaisStore.listing.map((grupoLocais) => (
                  <>
                    <TableRow key={grupoLocais.id}>
                      <TableCell>{grupoLocais.nome}</TableCell>
                      <TableCell align="center">{grupoLocais.descricao}</TableCell>
                      <TableCell align="center">{grupoLocais.areaHa}</TableCell>
                      <TableCell align="right">
                        {grupoLocais.ativo ? (
                          <CheckCircleIcon color="success" />
                        ) : (
                          <CancelIcon color="error" />
                        )}
                      </TableCell>
                      <Table.Actions
                        onVisualize={() => navigate(`/grupo-locais/visualizacao/${grupoLocais.id}`)}
                        onEdit={() => navigate(`/grupo-locais/edicao/${grupoLocais.id}`)}
                        onToggle={() => {
                          modalStore.open("toggleGrupoLocaisStatus");
                          grupoLocaisStore.setselectedGrupoLocais(grupoLocais);
                        }}
                        onDelete={() => {
                          modalStore.open("removeGrupoLocais");
                          grupoLocaisStore.setselectedGrupoLocais(grupoLocais);
                        }}
                      />
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </MaterialTable>
          </TableContainer>
        </div>
      </main>
      <Footer />
      <Dialog
        open={modalStore.toggleGrupoLocaisStatus.isOpen}
        onClose={() => modalStore.close("toggleGrupoLocaisStatus")}
        PaperProps={{ style: { padding: "32px", gap: "24px", width: "512px" } }}
      >
        <h2>Ativar/Desativar Fazenda</h2>
        <p>Você tem certeza que deseja alterar o status desta fazenda?</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => modalStore.close("toggleGrupoLocaisStatus")}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            onClick={() => handleToggleStatus(grupoLocaisStore.selectedGrupoLocais.id)}
          >
            Confirmar
          </Button>
        </div>
      </Dialog>
      <Dialog
        open={modalStore.removeGrupoLocais.isOpen}
        onClose={() => modalStore.close("removeGrupoLocais")}
        PaperProps={{ style: { padding: "32px", gap: "24px", width: "512px" } }}
      >
        <h2>Excluir Fazenda</h2>
        <p>Você tem certeza que deseja excluir esta fazenda?</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => modalStore.close("removeGrupoLocais")}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            onClick={() => handleRemove(grupoLocaisStore.selectedGrupoLocais.id)}
          >
            Confirmar
          </Button>
        </div>
      </Dialog>
    </>
  );
});
