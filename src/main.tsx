import { App } from "components/App";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "styles/_global.scss";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement!).render(<App />);
