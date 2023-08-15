import { Cancel as CancelIcon, CheckCircle as CheckCircleIcon } from "@mui/icons-material";
import { Table as MaterialTable } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Table } from "components/Table";
import { useGrupoLocais } from "features/grupo-locais/hook";
import { grupoLocaisStore } from "features/grupo-locais/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { modalStore } from "store/modal.store";
import { v4 as uuidv4 } from "uuid";

export const GrupoLocaisListingTable = observer((): JSX.Element => {
  const navigate = useNavigate();
  const { handleFetchAll } = useGrupoLocais();

  useEffect(() => {
    handleFetchAll();
  }, []);

  return (
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
            <TableRow key={uuidv4()}>
              <TableCell>{grupoLocais.nome}</TableCell>
              <TableCell align="left">{grupoLocais.descricao}</TableCell>
              <TableCell align="center">{grupoLocais.tamanhoHa}</TableCell>
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
                  grupoLocaisStore.setSelectedGrupoLocais(grupoLocais);
                }}
                onDelete={() => {
                  modalStore.open("removeGrupoLocais");
                  grupoLocaisStore.setSelectedGrupoLocais(grupoLocais);
                }}
              />
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
});
