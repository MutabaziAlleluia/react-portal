import React from "react";
import ReactDOM from "react-dom";
import type { PortalElementProps } from "./types";
import PortalContext from "./context";

// create the portal element
const PortalElement: React.FC<PortalElementProps> = ({ id, children }) => {
  // get the portal context
  const { refs, renderItems } = React.useContext(PortalContext);

  // get the portal ref
  const ref = refs[id];

  // get the portal render item
  const renderItem = renderItems[id];

  if (!ref) {
    return null;
  }

  // render the portal element
  if (!renderItem) {
    return ReactDOM.createPortal(children, ref, id);
  }

  // render the portal element
  return ReactDOM.createPortal(renderItem(children), ref, id);
};

export default PortalElement;
