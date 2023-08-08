import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";
import { IconButton, TableCell, Tooltip } from "@mui/material";

type ActionsProps = {
  onVisualize: () => void;
  onEdit: () => void;
  onToggle: () => void;
  onDelete: () => void;
};

export const Actions = ({ onVisualize, onEdit, onToggle, onDelete }: ActionsProps): JSX.Element => {
  return (
    <TableCell align="right">
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
    </TableCell>
  );
};
