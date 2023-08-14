import { Autocomplete, Checkbox, TextField } from "@mui/material";
import type { SyntheticEvent } from "react";
import type { ISelectOptions } from "types";

interface MultiSelectProps {
  disableClearable?: boolean;
  label: string;
  onSelect: (event: SyntheticEvent, values: ISelectOptions[] | null) => void;
  options: ISelectOptions[];
  value: ISelectOptions[] | null;
}

export const MultiSelect = ({
  label,
  onSelect,
  disableClearable,
  options,
  value,
}: MultiSelectProps): JSX.Element => {
  return (
    <Autocomplete
      multiple
      fullWidth
      disableClearable={disableClearable}
      disableCloseOnSelect
      size="small"
      isOptionEqualToValue={(option, value) => option.value === value.value}
      limitTags={2}
      options={options}
      value={value || undefined}
      getOptionLabel={(option): string => option.label}
      renderOption={(props, option, { selected }): JSX.Element => (
        <li {...props}>
          <Checkbox checked={selected} />

          {option.label}
        </li>
      )}
      onChange={onSelect}
      renderInput={(params): JSX.Element => (
        <TextField {...params} label={label} variant="standard" />
      )}
    />
  );
};
