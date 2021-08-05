import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { ReactElement, Widget } from '@kleeen/types';

export const PreviewPanelContext = createContext(null);

type PreviewPanel = {
  closePreviewPanel: () => void;
  openPreviewPanel: () => void;
  setPreviewWidgets: Dispatch<SetStateAction<Widget[]>>;
};

export function usePreviewPanel() {
  const previewPanelContext = useContext<PreviewPanel>(PreviewPanelContext);

  if (!previewPanelContext) {
    return {
      closePreviewPanel: () => {},
      openPreviewPanel: () => {},
      setPreviewWidgets: () => {},
    };
    // TODO @cafe this provider should be used higher in the chain, since the menu lives outside of the app
    // throw new Error(`Preview function cannot be used outside Preview Layout`);
  }

  return previewPanelContext;
}

export function PreviewPanelLayoutProvider({
  children,
  fns: { closePreviewPanel, openPreviewPanel, setPreviewWidgets },
}: {
  children: ReactElement;
  fns: PreviewPanel;
}) {
  const previewPanelLayout = {
    closePreviewPanel,
    openPreviewPanel,
    setPreviewWidgets,
  };

  return <PreviewPanelContext.Provider value={previewPanelLayout}>{children}</PreviewPanelContext.Provider>;
}
