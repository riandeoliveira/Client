import { Form } from "components/Form";
import { useFazenda } from "hooks/useFazenda";
import { useGrupoSafra } from "hooks/useGrupoSafra";
import { useSafra } from "hooks/useSafra";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { fazendaStore } from "store/fazenda.store";
import { grupoSafraStore } from "store/grupo-safra.store";
import { localStorageStore } from "store/local-storage.store";
import { safraStore } from "store/safra.store";
import styles from "./styles.module.scss";

export const Header = observer((): JSX.Element => {
  const { handleFetchAll } = useFazenda();
  const { handleFetchAllByFazendaId } = useGrupoSafra();
  const { handleFetchAllByGrupoSafraIds } = useSafra();

  useEffect(() => {
    handleFetchAll();
    handleFetchAllByFazendaId("41559565-65a8-4170-aba2-ce724a2089be");
    handleFetchAllByGrupoSafraIds(["b8896e7a-718a-4ff5-aa12-ed3dba3154a6"]);
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
    </header>
  );
});
