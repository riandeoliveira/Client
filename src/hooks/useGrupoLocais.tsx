import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { grupoLocaisService } from "services/grupo-locais-service";
import { grupoLocaisStore } from "store/grupo-locais.store";
import { modalStore } from "store/modal.store";
import type { GrupoLocaisRequest } from "types/api";

export const useGrupoLocais = () => {
  const navigate = useNavigate();

  const handleCreate = async (grupoLocaisData: GrupoLocaisRequest.Create): Promise<void> => {
    await grupoLocaisService.create(grupoLocaisData);

    navigate("/grupo-locais/listagem");
  };

  const handleFetchAll = useCallback(async (): Promise<void> => {
    const grupoLocaisListing = await grupoLocaisService.fetchAll();

    grupoLocaisStore.setListing(grupoLocaisListing);
  }, []);

  const handleFetchById = async (grupoLocaisId: string): Promise<void> => {
    await grupoLocaisService.fetchById(grupoLocaisId);
  };

  const handleRemove = async (grupoLocaisId: string): Promise<void> => {
    await grupoLocaisService.remove(grupoLocaisId);

    modalStore.close("removeGrupoLocais");

    handleFetchAll();
  };

  const handleToggleStatus = async (grupoLocaisId: string): Promise<void> => {
    await grupoLocaisService.toggleStatus(grupoLocaisId);

    modalStore.close("toggleGrupoLocaisStatus");

    handleFetchAll();
  };

  return {
    handleCreate,
    handleFetchAll,
    handleFetchById,
    handleRemove,
    handleToggleStatus,
  };
};
