import * as React from "react";

export type RefType = React.RefObject<HTMLDivElement>;
export type RenderItemType = (item: React.ReactNode) => React.ReactNode;
export type PortalContextType = {
  refs: { [key: string]: RefType };
  renderItems: { [key: string]: RenderItemType };
  register: (id: string, ref: RefType, renderItem: RenderItemType) => void;
  unregister: (id: string) => void;
};

export type PortalProviderProps = {
  children: React.ReactNode;
};

export type PortalElementProps = {
  id: string;
  children: React.ReactNode;
};

export type PlaceholderProps = {
  id: string;
  renderItem?: RenderItemType;
};

export type PortalType = React.FC<PortalElementProps> & {
  Context: React.Context<PortalContextType>;
  Placeholder: React.FC<PlaceholderProps>;
  Provider: React.FC<PortalProviderProps>;
};
