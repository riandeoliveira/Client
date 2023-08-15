import { Search as SearchIcon } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import type { FormEventHandler } from "react";
import { filterStore } from "store/filter.store";
import styles from "./styles.module.scss";

interface FilterProps {
  onFilter: () => FormEventHandler<HTMLFormElement> | unknown;
}

export const Filter = observer(({ onFilter }: FilterProps): JSX.Element => {
  return (
    <form
      onSubmit={(event): void => {
        event.preventDefault();
        onFilter();
      }}
      className={styles.form}
    >
      <TextField
        variant="standard"
        fullWidth
        value={filterStore.filtro}
        onChange={(event): void => {
          filterStore.setFiltro(event.target.value);
        }}
      />
      <IconButton onClick={onFilter}>
        <SearchIcon />
      </IconButton>
    </form>
  );
});
