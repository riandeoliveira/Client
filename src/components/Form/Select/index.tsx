import { Autocomplete, TextField } from "@mui/material";
import type { SelectOptionsType } from "types";

type SelectProps = {
  options: SelectOptionsType[];
  value: SelectOptionsType | null;
  onSelect: (event: React.SyntheticEvent<Element, Event>, value: SelectOptionsType | null) => void;
  label: string;
};

export const Select = ({ options, value, onSelect, label }: SelectProps): JSX.Element => {
  return (
    <Autocomplete
      options={options}
      size="small"
      value={value || undefined}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option): JSX.Element => <li {...props}>{option.label}</li>}
      onChange={onSelect}
      style={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label={label} variant="standard" />}
    />
  );
};
