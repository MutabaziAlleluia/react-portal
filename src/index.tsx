import { PortalType } from "../typings";
import __Portal from "./Portal";
import PortalElement from "./PortalElement";
import PortalProvider from "./Provider";
import PortalContext from "./context";

const Portal = __Portal as PortalType;

Portal.Context = PortalContext;
Portal.Element = PortalElement;
Portal.Provider = PortalProvider;

export default Portal;
