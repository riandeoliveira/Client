import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { fazendaService } from "services/fazenda-service";
import { fazendaStore } from "store/fazenda.store";
import { modalStore } from "store/modal.store";
import type { FazendaRequest } from "types/api";

export const useFazenda = () => {
  const navigate = useNavigate();

  const handleCreate = async (fazendaData: FazendaRequest.Create): Promise<void> => {
    await fazendaService.create(fazendaData);

    navigate("/fazenda/listagem");
  };

  const handleFetchAll = useCallback(async (): Promise<void> => {
    const fazendasListing = await fazendaService.fetchAll();

    fazendaStore.setListing(fazendasListing);
  }, []);

  const handleFetchById = async (fazendaId: string): Promise<void> => {
    await fazendaService.fetchById(fazendaId);
  };

  const handleRemove = async (fazendaId: string): Promise<void> => {
    await fazendaService.remove(fazendaId);

    modalStore.close("removeFazenda");

    handleFetchAll();
  };

  const handleToggleStatus = async (fazendaId: string): Promise<void> => {
    await fazendaService.toggleStatus(fazendaId);

    modalStore.close("toggleFazendaStatus");

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
