import type { PortalType } from "./types";
import PortalElement from "./PortalElement";
import PortalPlaceholder from "./PortalPlaceholder";
import PortalProvider from "./Provider";
import PortalContext from "./context";

const Portal = PortalElement as PortalType;

Portal.Context = PortalContext;
Portal.Placeholder = PortalPlaceholder;
Portal.Provider = PortalProvider;

export default Portal;
