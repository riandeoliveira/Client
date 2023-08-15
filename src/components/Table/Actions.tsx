import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  MoreVert as MoreVertIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { IconButton, Menu, MenuItem, TableCell, Tooltip } from "@mui/material";
import { useState } from "react";
import styles from "./styles.module.scss";

type ActionsProps = {
  onVisualize: () => void;
  onEdit: () => void;
  onToggle: () => void;
  onDelete: () => void;
};

export const Actions = ({ onVisualize, onEdit, onToggle, onDelete }: ActionsProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <TableCell align="right">
      <div className={styles.menu}>
        <Tooltip title="Visualizar">
          <IconButton onClick={onVisualize}>
            <VisibilityIcon color="info" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Editar">
          <IconButton onClick={onEdit}>
            <EditIcon color="success" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Ativar/Desativar">
          <IconButton onClick={onToggle}>
            <VisibilityOffIcon color="warning" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Excluir">
          <IconButton onClick={onDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      </div>
      <div className={styles.mobile_menu}>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={onVisualize} className={styles.item}>
            <VisibilityIcon color="info" />
            Visualizar
          </MenuItem>
          <MenuItem onClick={onEdit} className={styles.item}>
            <EditIcon color="success" />
            Editar
          </MenuItem>
          <MenuItem onClick={onToggle} className={styles.item}>
            <VisibilityOffIcon color="warning" />
            Ativar/Desativar
          </MenuItem>
          <MenuItem onClick={onDelete} className={styles.item}>
            <DeleteIcon color="error" />
            Excluir
          </MenuItem>
        </Menu>
      </div>
    </TableCell>
  );
};
