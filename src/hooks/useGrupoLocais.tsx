import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { GrupoLocaisCadastroSchema } from "schemas/grupo-locais-schema";
import { grupoLocaisSchema } from "schemas/grupo-locais-schema";
import { grupoLocaisService } from "services/grupo-locais-service";
import { grupoLocaisStore } from "store/grupo-locais.store";
import { modalStore } from "store/modal.store";
import type { GrupoLocaisRequest } from "types/api";

export const useGrupoLocais = () => {
  const navigate = useNavigate();

  //#region Forms

  const grupoLocaisCadastroForm = useForm<GrupoLocaisCadastroSchema>({
    defaultValues: {
      nome: "",
      areaHa: 0,
      descricao: "",
      fazendaId: "41559565-65a8-4170-aba2-ce724a2089be",
    },
    resolver: zodResolver(grupoLocaisSchema.cadastro),
  });

  //#endregion

  //#region Handlers

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

  //#endregion

  return {
    grupoLocaisCadastroForm,

    handleCreate,
    handleFetchAll,
    handleFetchById,
    handleRemove,
    handleToggleStatus,
  };
};
