import type { ModalProps } from "@mui/material";
import { Dialog } from "@mui/material";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  open: boolean;
  onClose: ModalProps["onClose"];
}

export const Container = ({ open, onClose, children }: ContainerProps): JSX.Element => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ style: { padding: "32px", gap: "24px", width: "512px" } }}
    >
      {children}
    </Dialog>
  );
};
