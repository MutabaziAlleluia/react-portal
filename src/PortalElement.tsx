import React from "react";
import ReactDOM from "react-dom";
import { PortalElementProps } from "../typings";
import PortalContext from "./context";

// create the portal element
const PortalElement: React.FC<PortalElementProps> = ({ id, children }) => {
  // get the portal context
  const { refs, renderItems } = React.useContext(PortalContext);

  // get the portal ref
  const ref = refs[id];

  // get the portal render item
  const renderItem = renderItems[id];

  // render the portal element
  return ref && ref.current
    ? ReactDOM.createPortal(
        renderItem ? renderItem(children) : children,
        ref.current
      )
    : null;
};

export default PortalElement;
