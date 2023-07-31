export type PageActionTypes = "register" | "visualize" | "edit";

export type SelectOptionsType = {
  label: string;
  value: string;
};

export type StoreType<S, A> = {
  values: S;
  actions: A;
};
