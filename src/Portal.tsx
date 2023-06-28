import React from "react";
import PortalContext from "./context";
import { PortalProps } from "../typings";

// create the portal
const Portal: React.FC<PortalProps> = ({ id, renderItem = (item) => item }) => {
  // get the portal context
  const { register, unregister } = React.useContext(PortalContext);

  // create the portal ref
  const ref = React.useRef<HTMLDivElement>(null);

  // register the portal ref
  React.useEffect(() => {
    register(id, ref, renderItem);
    return () => unregister(id);
  }, [id, renderItem, register, unregister]);

  // render the portal
  return <div ref={ref} />;
};

export default Portal;
