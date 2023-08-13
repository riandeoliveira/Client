import styles from "./styles.module.scss";

interface DebuggerProps<T> {
  label: string;
  code: T;
}

export const Debugger = <T,>({ label, code }: DebuggerProps<T>): JSX.Element => {
  return (
    <pre className={styles.box}>
      <strong>{label}</strong>
      <code>{JSON.stringify(code, null, 2)}</code>
    </pre>
  );
};
