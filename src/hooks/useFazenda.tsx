import { useCallback } from "react";
import { FazendaService } from "services/fazenda-service";
import { useFazendaStore } from "store/fazenda.store";

export const useFazenda = () => {
  const fazendaStore = useFazendaStore();

  const fetchAllFazendas = useCallback(async () => {
    const data = await FazendaService.fetchAll();

    fazendaStore.setList(data);
  }, []);

  return {
    fetchAllFazendas,
  };
};
