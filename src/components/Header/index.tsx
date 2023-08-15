import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Paper } from "@mui/material";
import { Form } from "components/Form";
import { useFazenda } from "features/fazenda/hook";
import { fazendaStore } from "features/fazenda/store";
import { useGrupoSafra } from "features/grupo-safra/hook";
import { grupoSafraStore } from "features/grupo-safra/store";
import { useSafra } from "features/safra/hook";
import { safraStore } from "features/safra/store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { localStorageStore } from "store/local-storage.store";
import styles from "./styles.module.scss";

export const Header = observer((): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { handleFetchAll } = useFazenda();
  const { handleFetchAllByFazendaId } = useGrupoSafra();
  const { handleFetchAllByGrupoSafraIds } = useSafra();

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  useEffect(() => {
    handleFetchAll();
    handleFetchAllByFazendaId("41559565-65a8-4170-aba2-ce724a2089be");
    handleFetchAllByGrupoSafraIds(["b8896e7a-718a-4ff5-aa12-ed3dba3154a6"]);
  }, []);

  return (
    <Paper>
      <header className={styles.header}>
        <img
          src="/sgagri-logo.png"
          alt="Logo do SGAgri"
          width={168}
          height={56}
          className={styles.logo}
        />
        <div className={styles.header_box}>
          <Form.Select
            label="Clientes"
            value={localStorageStore.fazenda}
            disableClearable
            onSelect={(_, value) => {
              localStorageStore.setFazenda(value);
            }}
            options={fazendaStore.listing.map((fazenda) => ({
              label: fazenda.nomeRazao,
              value: fazenda.id,
            }))}
          />
          <Form.MultiSelect
            label="Safras"
            value={localStorageStore.grupoSafras}
            disableClearable
            onSelect={(_, values): void => {
              localStorageStore.setGrupoSafra(values);
            }}
            options={grupoSafraStore.listing}
          />
          <Form.MultiSelect
            label="Atividades"
            value={localStorageStore.safras}
            disableClearable
            onSelect={(_, values): void => {
              localStorageStore.setSafras(values);
            }}
            options={safraStore.listing}
          />
        </div>
        <div className={styles.header_mobile_box}>
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} className={styles.menu}>
            <MenuItem disableRipple className={styles.item}>
              <Form.Select
                label="Clientes"
                value={localStorageStore.fazenda}
                disableClearable
                onSelect={(_, value) => {
                  localStorageStore.setFazenda(value);
                }}
                options={fazendaStore.listing.map((fazenda) => ({
                  label: fazenda.nomeRazao,
                  value: fazenda.id,
                }))}
              />
            </MenuItem>
            <MenuItem disableRipple className={styles.item}>
              <Form.MultiSelect
                label="Safras"
                value={localStorageStore.grupoSafras}
                disableClearable
                onSelect={(_, values): void => {
                  localStorageStore.setGrupoSafra(values);
                }}
                options={grupoSafraStore.listing}
              />
            </MenuItem>
            <MenuItem disableRipple className={styles.item}>
              <Form.MultiSelect
                label="Atividades"
                value={localStorageStore.safras}
                disableClearable
                onSelect={(_, values): void => {
                  localStorageStore.setSafras(values);
                }}
                options={safraStore.listing}
              />
            </MenuItem>
          </Menu>
        </div>
      </header>
    </Paper>
  );
});
