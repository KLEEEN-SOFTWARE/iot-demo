import React, { createContext, useContext } from 'react';

export const PreviewPanelContext = createContext(null);

export function usePreviewPanel() {
  const previewPanelContext = useContext(PreviewPanelContext);
  if (!previewPanelContext) {
    throw new Error(`Preview function cannot be used outside Preview Layout`);
  }
  return previewPanelContext;
}

export const PreviewPanelLayoutProvider = ({ children, fns: { togglePreviewPanel } }) => {
  const previewPanelLayout = {
    togglePreviewPanel,
  };
  return <PreviewPanelContext.Provider value={previewPanelLayout}>{children}</PreviewPanelContext.Provider>;
};