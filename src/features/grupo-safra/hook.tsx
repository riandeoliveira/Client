import { useCallback } from "react";
import { grupoSafraService } from "./service";
import { grupoSafraStore } from "./store";

export const useGrupoSafra = () => {
  const handleFetchAllByFazendaId = useCallback(async (fazendaId: string) => {
    const grupoSafraListing = await grupoSafraService.fetchAllByFazendaId(fazendaId);

    grupoSafraStore.setListing(grupoSafraListing);
  }, []);

  return {
    handleFetchAllByFazendaId,
  };
};
