import 'react-reflex/styles.css';

import React, { useCallback, useState } from 'react';
import { ReflexContainer, ReflexElement, ReflexHandle, ReflexSplitter } from 'react-reflex';
import { PreviewCloseButton, MockSelect, useStyles } from './previewPanel.styles';
import { NavPosition } from '@kleeen/types';
import { NavigationTask } from './modules/generated/components';
import classnames from 'classnames';
import settings from './settings/app.json';
import { PreviewPanelLayoutProvider, useKleeenRouting, usePreviewPanel } from '@kleeen/react/hooks';
import { FormControl } from '@material-ui/core';
import { KUIConnect } from '@kleeen/core-react';

//TODO Remove Mock component when ViewSwitcher is implemented
const MockMenu = () => {
  const styles = useStyles();

  return (
    <FormControl className={styles.menuComponent}>
      <MockSelect
        className={styles.selectComponent}
        disableUnderline
        style={{ color: 'var(--on-secondary-color-variant)' }}
        name="test"
      >
        <option value="test">DASHBOARD</option>,<option value={10}>LAYOUT</option>
      </MockSelect>
    </FormControl>
  );
};

//TODO Move preview layout and its components to another class
const CloseButtonBase = ({ translate }) => {
  const styles = useStyles();
  const previewContext = usePreviewPanel();
  const closePreview = () => {
    previewContext.togglePreviewPanel();
  };
  return (
    <div className={styles.previewCloseButtonContainer}>
      <PreviewCloseButton variant="outlined" onClick={closePreview}>
        {translate('app.previewLayout.closeButton')}
      </PreviewCloseButton>
    </div>
  );
};
const CloseButton = KUIConnect(({ translate }) => ({ translate }))(CloseButtonBase);

const Layout = ({ modules }) => {
  const KsRouter = useKleeenRouting(modules, [], settings.defaultHomePage);
  const isNavTop = settings.layout.position === NavPosition.top;
  const bem = 'ks-layout';
  const modifier = isNavTop ? 'top' : 'side container-nav-left';
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  const styles = useStyles();

  const Content = useCallback(
    () => (
      <main
        className={classnames(`${bem}__content`, 'main-layout', {
          [NavPosition.top]: isNavTop,
          [NavPosition.left]: !isNavTop,
        })}
      >
        <KsRouter />
      </main>
    ),
    [],
  );

  const togglePreviewPanel = () => {
    setPreviewOpen((prevState) => !prevState);
  };

  const reflexFns = {
    togglePreviewPanel,
  };

  return (
    <div className={classnames(bem, `${bem}--${modifier}`, 'content-layout')}>
      <section className={classnames(`${bem}__navigation`)}>
        <NavigationTask />
      </section>
      <PreviewPanelLayoutProvider fns={reflexFns}>
        <ReflexContainer
          orientation="horizontal"
          className={classnames(`${bem}__preview-container`, 'layout')}
        >
          <ReflexElement
            className={classnames(`${bem}__top-pane`, styles.topPanel, styles.reflexPanelElement)}
          >
            <Content />
          </ReflexElement>
          {isPreviewOpen && (
            <ReflexSplitter className={classnames(`${bem}__splitter`, styles.previewSplitter)} />
          )}
          {isPreviewOpen && (
            <ReflexElement
              className={classnames(`${bem}__bottom-pane`, styles.bottomPanel, styles.reflexPanelHeader)}
            >
              <ReflexHandle>
                <div className={classnames(`${bem}__handle-container`, styles.previewHeader)}>
                  <MockMenu />
                  <CloseButton />
                  <div className={styles.previewHandler}>::::::</div>
                </div>
              </ReflexHandle>
            </ReflexElement>
          )}
        </ReflexContainer>
      </PreviewPanelLayoutProvider>
    </div>
  );
};

export default React.memo(Layout);
