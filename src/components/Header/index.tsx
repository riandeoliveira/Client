import { Form } from "components/Form";
import { FazendaService } from "services/fazenda-service";
import { useMenuOptionsStore } from "store/menu-options-store";
import styles from "./styles.module.scss";

const options = [
  {
    label: "teste",
    value: "2n36rv78dffgdfg236r823r2hfrui",
  },
  {
    label: "asd",
    value: "2n36rvdfgdfgdfgdfg78236r823r2hfrui",
  },
  {
    label: "435ge",
    value: "2n36rv78236rdfgdfg823r2hfrui",
  },
  {
    label: "fgh",
    value: "2n36rvdfgdfg78236r823r2hfrui",
  },
  {
    label: "dfgdfg",
    value: "dfgdfgasdadfgsdasdasdasdasdasd",
  },
];

export const Header = (): JSX.Element => {
  const menuOptionsStore = useMenuOptionsStore();

  return (
    <>
      <header className={styles.header}>
        <img
          src="/sgagri-logo.png"
          alt="Logo do SGAgri"
          width={168}
          height={56}
          className={styles.logo}
          onClick={async () => {
            await FazendaService.findAll();
          }}
        />
        <div className={styles.header_box}>
          <Form.Select
            label="Clientes"
            options={options}
            value={menuOptionsStore.values.clientes}
            onSelect={(_, values) => {
              menuOptionsStore.actions.setClientes(values);
            }}
          />
          <Form.MultipleSelect
            label="Safras"
            options={options}
            value={menuOptionsStore.values.safras}
            onSelect={(_, values) => {
              menuOptionsStore.actions.setSafras(values);
            }}
          />
          <Form.MultipleSelect
            label="Atividades"
            options={options}
            value={menuOptionsStore.values.atividades}
            onSelect={(_, values) => {
              menuOptionsStore.actions.setAtividades(values);
            }}
          />
        </div>
      </header>
      {/* <pre style={{ padding: "24px" }}>
        <code style={{ fontFamily: "Consolas" }}>
          {JSON.stringify(menuOptionsStore.values, null, 2)}
        </code>
      </pre> */}
    </>
  );
};
