import React from "react";
import { PortalContextType, PortalProviderProps } from "../typings";
import PortalContext from "./context";

// create the provider
const PortalProvider: React.FC<PortalProviderProps> = ({ children }) => {
  // keep track of all the portals' refs rendered by ID
  const [refs, setRefs] = React.useState<PortalContextType["refs"]>({});

  // keep track of all the portals' render items by ID
  const [renderItems, setRenderItems] = React.useState<
    PortalContextType["renderItems"]
  >({});

  // register a new portal ref
  const register: PortalContextType["register"] = React.useCallback(
    (id, ref, renderItem) => {
      setRefs((refs) => ({
        ...refs,
        [id]: ref,
      }));
      setRenderItems((renderItems) => ({
        ...renderItems,
        [id]: renderItem,
      }));
    },
    []
  );

  // unregister an existing portal ref
  const unregister: PortalContextType["unregister"] = React.useCallback(
    (id) => {
      setRefs((refs) => {
        const { [id]: _, ...rest } = refs;
        return rest;
      });
      setRenderItems((renderItems) => {
        const { [id]: _, ...rest } = renderItems;
        return rest;
      });
    },
    []
  );

  // expose the context value
  const value = React.useMemo(
    () => ({ refs, renderItems, register, unregister }),
    [refs, renderItems, register, unregister]
  );

  // render the context provider
  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
};

export default PortalProvider;
