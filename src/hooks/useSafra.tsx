import { useCallback } from "react";
import { safraService } from "services/safra-service";
import { safraStore } from "store/safra.store";

export const useSafra = () => {
  const handleFetchAllByGrupoSafraIds = useCallback(async (grupoSafraIds: string[]) => {
    const safraListing = await safraService.fetchAllByGrupoSafraIds(grupoSafraIds);

    safraStore.setListing(safraListing);
  }, []);

  return {
    handleFetchAllByGrupoSafraIds,
  };
};
