import { Button, Table as MaterialTable } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Table } from "components/Table";
import styles from "./styles.module.scss";

const rows = [
  { nome: "Codaíba", descricao: "asdafg", areaHa: 15.73, ativo: true },
  { nome: "Faria", descricao: "hgjrnyb", areaHa: 455, ativo: false },
  { nome: "Limeira", descricao: "xmcvh", areaHa: 91, ativo: true },
];

const BasicTable = () => {
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
          {rows.map((row) => (
            <TableRow key={row.nome}>
              <TableCell>{row.nome}</TableCell>
              <TableCell align="center">{row.descricao}</TableCell>
              <TableCell align="center">{row.areaHa}</TableCell>
              <TableCell align="right">{row.ativo}</TableCell>
              <Table.Actions
                onVisualize={() => {}}
                onEdit={() => {}}
                onToggle={() => {}}
                onDelete={() => {}}
              />
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export const Listagem = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.page_box}>
          <div className={styles.page_header}>
            <h1 className={styles.title}>Fazendas</h1>
            <Button variant="contained">Nova Fazenda</Button>
          </div>
          <BasicTable />
        </div>
      </main>
      <Footer />
    </>
  );
};
