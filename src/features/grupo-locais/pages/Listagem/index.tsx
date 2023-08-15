import { Button } from "@mui/material";
import { Filter } from "components/Filter";
import { Header } from "components/Header";
import { Modal } from "components/Modal";
import { GrupoLocaisListingTable } from "features/grupo-locais/components/GrupoLocaisListingTable";
import { useGrupoLocais } from "features/grupo-locais/hook";
import { grupoLocaisStore } from "features/grupo-locais/store";
import { observer } from "mobx-react-lite";
import { modalStore } from "store/modal.store";
import styles from "./styles.module.scss";

export const Listagem = observer((): JSX.Element => {
  const { handleRemove, handleToggleStatus, handleFetchAll } = useGrupoLocais();

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
          <Filter onFilter={handleFetchAll} />
          <GrupoLocaisListingTable />
        </div>
      </main>
      <Modal.Container
        open={modalStore.toggleGrupoLocaisStatus.isOpen}
        onClose={() => modalStore.close("toggleGrupoLocaisStatus")}
      >
        <Modal.Content>
          <h2>Ativar/Desativar Fazenda</h2>
          <p>Você tem certeza que deseja alterar o status desta fazenda?</p>
        </Modal.Content>
        <Modal.Actions
          onCancel={(): void => modalStore.close("toggleGrupoLocaisStatus")}
          onConfirm={(): Promise<void> =>
            handleToggleStatus(grupoLocaisStore.selectedGrupoLocais.id)
          }
        />
      </Modal.Container>
      <Modal.Container
        open={modalStore.removeGrupoLocais.isOpen}
        onClose={(): void => modalStore.close("removeGrupoLocais")}
      >
        <Modal.Content>
          <h2>Excluir Fazenda</h2>
          <p>Você tem certeza que deseja excluir esta fazenda?</p>
        </Modal.Content>
        <Modal.Actions
          onCancel={(): void => modalStore.close("removeGrupoLocais")}
          onConfirm={(): Promise<void> => handleRemove(grupoLocaisStore.selectedGrupoLocais.id)}
        />
      </Modal.Container>
    </>
  );
});
