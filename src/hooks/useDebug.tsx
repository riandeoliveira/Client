import type { ReactNode } from "react";

type DebugType = "terminal" | "screen";

export const useDebug = <T,>(debugType: DebugType, code: T): JSX.Element | ReactNode => {
  const formattedCode: string = JSON.stringify(code, null, 2);

  if (debugType === "terminal") {
    console.clear();
    console.log(formattedCode);
  }

  if (debugType === "screen") {
    return (
      <pre style={{ padding: "24px" }}>
        <code>{formattedCode}</code>
      </pre>
    );
  }
};
