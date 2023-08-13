import { Autocomplete, Checkbox, TextField } from "@mui/material";
import { useGrupoLocais } from "hooks/useGrupoLocais";
import { useEffect, useState } from "react";
import type { AtividadeResponse } from "services/atividade-service";
import type { FetchAllResponse } from "services/cliente-service";
import { ClienteService } from "services/cliente-service";
import { SafraService, type FetchByFazendaIdResponse } from "services/safra-service";
import { useMenuOptionsStore } from "store/menu-options.store";
import styles from "./styles.module.scss";

export const Header = (): JSX.Element => {
  const menuOptionsStore = useMenuOptionsStore();
  const { grupoLocaisCadastroForm, grupoLocaisEdicaoForm } = useGrupoLocais();

  const [clientes, setClientes] = useState<FetchAllResponse[]>([]);
  const [safras, setSafras] = useState<FetchByFazendaIdResponse[]>([]);
  const [atividades, setAtividades] = useState<AtividadeResponse[] | null>([]);

  useEffect(() => {
    const sendRequest = async () => {
      const clientesData = await ClienteService.fetchAll();
      const safrasData = await SafraService.fetchByFazendaId(
        "41559565-65a8-4170-aba2-ce724a2089be",
      );
      // const atividadesData = await AtividadeService.fetchBySafraId(
      //   "cd4c267c-38d3-4c0e-b8a0-e1c7631e0f93",
      // );

      setClientes(clientesData);
      setSafras(safrasData);
      // setAtividades(atividadesData);
    };

    sendRequest();
  }, []);

  return (
    <header className={styles.header}>
      <img
        src="/sgagri-logo.png"
        alt="Logo do SGAgri"
        width={168}
        height={56}
        className={styles.logo}
      />
      <div className={styles.header_box}>
        <Autocomplete
          options={clientes.map((cliente) => ({ label: cliente.nomeRazao, value: cliente.id }))}
          size="small"
          value={menuOptionsStore.state.clientes}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option): JSX.Element => <li {...props}>{option.label}</li>}
          onChange={(_, values) => {
            menuOptionsStore.action.setClientes(values);
          }}
          style={{ width: 500 }}
          renderInput={(params) => <TextField {...params} label="Clientes" variant="standard" />}
        />
        <Autocomplete
          multiple
          disableCloseOnSelect
          size="small"
          limitTags={2}
          options={safras}
          value={menuOptionsStore.state.safras || undefined}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option, { selected }): JSX.Element => (
            <li {...props}>
              <Checkbox checked={selected} />

              {option.label}
            </li>
          )}
          onChange={(_, values) => {
            menuOptionsStore.action.setSafras(values);
          }}
          style={{ width: 500 }}
          renderInput={(params) => <TextField {...params} label="Safras" variant="standard" />}
        />
        {/* <Form.MultipleSelect
          label="Safras"
          options={safras}
          value={menuOptionsStore.state.safras}
          onSelect={(_, values) => {
            menuOptionsStore.action.setSafras(values);
          }}
        />
        <Form.MultipleSelect
          label="Atividades"
          options={atividades}
          value={menuOptionsStore.state.atividades}
          onSelect={(_, values) => {
            menuOptionsStore.action.setAtividades(values);
          }}
        /> */}
      </div>
    </header>
  );
};
