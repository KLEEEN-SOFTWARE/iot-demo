import React, { useState } from 'react';
import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { useEntityDetailsEventHandler, useKleeenActions } from '@kleeen/react/hooks';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useStyles } from './styles/styles';
import { PageIntroSection, CardSection02, SnackBarSection } from '@kleeen/react/atomic-elements';
import { pageIntroSectionActions } from './settings/page-intro-section-actions';
import { pageIntroSectionAttributes } from './settings/page-intro-section-attributes';
import { cardSectionWidgets } from './settings/card-section-widgets';

function ConfigTask({ translate, ...props }) {
  const taskName = `configureSensorNode`;
  const pageIntroSectionTitle = `Configure Sensor/Node`;
  const pageIntroSectionDescription = undefined;
  const classes = useStyles();
  const cardSectionContainerId = `container-id-${classes.configCardSection}`;
  const [showSubmit, setShowSubmit] = useState(false);
  const configureSensorNodeActions = useKleeenActions(taskName);

  const [attributeEventList, { addEvent, clearEventList }] = useEntityDetailsEventHandler();

  React.useEffect(() => {
    return clearEventList;
  }, []);

  function onCancel() {
    setShowSubmit(false);
    attributeEventList.map((event) => event.onCancel());
  }

  function onInputChange(hasChanged) {
    setShowSubmit(hasChanged);
  }

  function onSave() {
    setShowSubmit(false);
    const widgetsData = attributeEventList.map((event) => event.onSave()).filter((data) => data);
    const dataList = widgetsData.map((current) => {
      return {
        ...current,
        params: {
          ...current.params,
        },
      };
    });

    dataList.map((data) => configureSensorNodeActions.updateRequest(data));
  }

  function registerEvents(event) {
    addEvent(event);
  }

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={classes.configTask}>
        <div className={classes.pageIntro}>
          <PageIntroSection
            actions={pageIntroSectionActions}
            attributes={pageIntroSectionAttributes}
            description={pageIntroSectionDescription}
            entity={''}
            entityActions={{}}
            showActions={false}
            title={pageIntroSectionTitle}
          />
        </div>
        <div
          id={cardSectionContainerId}
          className={`${classes.configCardSection} ${showSubmit ? classes.snackbarNavLeft : ''} `}
        >
          <CardSection02
            justifyContent="center"
            taskName={taskName}
            widgets={cardSectionWidgets}
            hideSaveAndClose={true}
            onInputChange={onInputChange}
            registerEvents={registerEvents}
            containerId={cardSectionContainerId}
          />
        </div>
        <div>
          <SnackBarSection
            actions={[
              {
                type: 'CUSTOM',
                label: 'SAVE',
                func: onSave,
              },
              {
                type: 'CUSTOM',
                label: 'CANCEL',
                func: onCancel,
              },
            ]}
            entity=""
            entityActions={{}}
            selectedRows={[]}
            setSelectedRows={[]}
            showSelectAndExecute={false}
            showSnackBar={showSubmit}
          />
        </div>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(ConfigTask);
