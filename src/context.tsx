import React from "react";
import type { PortalContextType } from "./types";

// create the context
const PortalContext = React.createContext<PortalContextType>({
  refs: {},
  renderItems: {},
  register: () => {},
  unregister: () => {},
});

export default PortalContext;
