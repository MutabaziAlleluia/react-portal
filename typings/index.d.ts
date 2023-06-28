import * as React from "react";

export type RefType = React.RefObject<HTMLDivElement>;
export type RenderItemType = (item: React.ReactNode) => React.ReactNode;
export type PortalContextType = {
  refs: { [key: string]: RefType };
  renderItems: { [key: string]: RenderItemType };
  register: (id: string, ref: RefType, renderItem: RenderItemType) => void;
  unregister: (id: string) => void;
};

export interface PortalProviderProps {
  children: React.ReactNode;
}

export interface PortalElementProps {
  id: string;
  children: React.ReactNode;
}

export interface PortalProps {
  id: string;
  renderItem?: RenderItemType;
}

export type PortalType = React.FC<PortalProps> & {
  Context: React.Context<PortalContextType>;
  Element: React.FC<PortalElementProps>;
  Provider: React.FC<PortalProviderProps>;
};
