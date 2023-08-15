import { Button } from "@mui/material";
import type { MouseEventHandler } from "react";

interface ActionsProps {
  onCancel: () => MouseEventHandler<HTMLButtonElement> | unknown;
  onConfirm: () => MouseEventHandler<HTMLButtonElement> | unknown;
}

export const Actions = ({ onCancel, onConfirm }: ActionsProps): JSX.Element => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Button variant="outlined" color="secondary" onClick={onCancel}>
        Cancelar
      </Button>
      <Button variant="contained" onClick={onConfirm}>
        Confirmar
      </Button>
    </div>
  );
};
