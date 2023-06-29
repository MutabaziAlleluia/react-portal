import React from "react";
import PortalContext from "./context";
import type { PlaceholderProps } from "./types";

// create the portal placeholder
const PortalPlaceholder: React.FC<PlaceholderProps> = ({
  id,
  renderItem = (item) => item,
  className,
}) => {
  // get the portal context
  const { register, unregister } = React.useContext(PortalContext);

  // create the portal ref
  const ref = React.useRef<HTMLDivElement>(null);

  // register the portal ref
  React.useEffect(() => {
    if (ref.current) {
      register(id, ref.current, renderItem);
    }

    return () => unregister(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, ref.current]);

  // render the portal
  return (
    <div
      className={[`portal-placeholder-${id}`, className]
        .filter((c) => Boolean(c))
        .join(" ")}
      ref={ref}
    />
  );
};

export default PortalPlaceholder;
