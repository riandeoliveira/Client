import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { grupoLocaisService } from "services/grupo-locais-service";
import { grupoLocaisStore } from "store/grupo-locais.store";
import { modalStore } from "store/modal.store";
import type { CreateGrupoLocais, UpdateGrupoLocais } from "types/api";

export const useGrupoLocais = () => {
  const navigate = useNavigate();

  const handleCreate = async (grupoLocaisData: CreateGrupoLocais.Request) => {
    const wasSuccessful = await grupoLocaisService.create(grupoLocaisData);

    if (wasSuccessful) navigate("/grupo-locais/listagem");
  };

  const handleFetchAll = useCallback(async (): Promise<void> => {
    const grupoLocaisListing = await grupoLocaisService.fetchAll();

    grupoLocaisStore.setListing(grupoLocaisListing);
  }, []);

  const handleFetchById = useCallback(async (grupoLocaisId?: string): Promise<void> => {
    const grupoLocais = await grupoLocaisService.fetchById(grupoLocaisId);

    grupoLocaisStore.setCurrent(grupoLocais);
  }, []);

  const handleRemove = async (grupoLocaisId: string): Promise<void> => {
    const wasSuccessful = await grupoLocaisService.remove(grupoLocaisId);

    modalStore.close("removeGrupoLocais");

    if (wasSuccessful) handleFetchAll();
  };

  const handleUpdate = async (grupoLocaisData: UpdateGrupoLocais.Request) => {
    const wasSuccessful = await grupoLocaisService.update(grupoLocaisData);

    if (wasSuccessful) navigate("/grupo-locais/listagem");
  };

  const handleToggleStatus = async (grupoLocaisId: string): Promise<void> => {
    const wasSuccessful = await grupoLocaisService.toggleStatus(grupoLocaisId);

    modalStore.close("toggleGrupoLocaisStatus");

    if (wasSuccessful) handleFetchAll();
  };

  return {
    handleCreate,
    handleFetchAll,
    handleFetchById,
    handleRemove,
    handleUpdate,
    handleToggleStatus,
  };
};
