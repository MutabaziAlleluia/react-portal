import type { PortalType } from "../types";
import PortalElement from "./PortalElement";
import PortalPlaceholder from "./PortalPlaceholder";
import PortalProvider from "./Provider";
import PortalContext from "./context";

export * from "../types";

export const Provider = PortalProvider;
export const Placeholder = PortalPlaceholder;
export const Context = PortalContext;

const Portal = PortalElement as PortalType;

Portal.Context = PortalContext;
Portal.Placeholder = PortalPlaceholder;
Portal.Provider = PortalProvider;

export default Portal;
