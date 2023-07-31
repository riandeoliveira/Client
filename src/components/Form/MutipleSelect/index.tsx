import { Autocomplete, Checkbox, TextField } from "@mui/material";
import type { SelectOptionsType } from "types";

type MultipleSelectProps = {
  options: SelectOptionsType[];
  value: SelectOptionsType[] | null;
  onSelect: (event: React.SyntheticEvent<Element, Event>, value: SelectOptionsType[]) => void;
  label: string;
};

export const MultipleSelect = ({
  options,
  value,
  onSelect,
  label,
}: MultipleSelectProps): JSX.Element => {
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      size="small"
      limitTags={2}
      options={options}
      value={value || undefined}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option, { selected }): JSX.Element => (
        <li {...props}>
          <Checkbox checked={selected} />
          {option.label}
        </li>
      )}
      onChange={onSelect}
      style={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label={label} variant="standard" />}
    />
  );
};
