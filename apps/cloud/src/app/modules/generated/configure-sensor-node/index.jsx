import { KUIConnect, AccessControl } from '@kleeen/core-react';
import { roleAccessKeyTag } from '@kleeen/common/utils';
import { useState, useEffect } from 'react';
import {
  ConfigureLayoutStyle,
  PageIntroSection,
  CardSection02,
  SnackBarSection,
} from '@kleeen/react/atomic-elements';
import { useEntityDetailsEventHandler, useKleeenActions } from '@kleeen/react/hooks';
import { widgets } from './settings/widgets';

function Workflow({ translate, ...props }) {
  const taskName = `configureSensorNode`;
  const [selectedRows, setSelectedRows] = useState([]);
  const classes = ConfigureLayoutStyle();
  const workflowName = `Configure Sensor/Node`;
  const workflowDescription = undefined;
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [attributeEventList, eventList] = useEntityDetailsEventHandler();
  function snackBarRegisterEvents(event) {
    eventList.addEvent(event);
  }
  function onInputChange(hasChanged) {
    setShowSnackBar(hasChanged);
  }
  const mainContainerId = `container-id-${classes.configCardSection}`;

  useEffect(() => {
    const { clearEventList } = eventList;
    return clearEventList;
  }, []);

  const configureSensorNodeActions = useKleeenActions(taskName);
  function snackBarOnCancel() {
    setShowSnackBar(false);
    attributeEventList.map((event) => event.onCancel());
  }
  function snackBarOnSave() {
    setShowSnackBar(false);
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

  return (
    <AccessControl id={roleAccessKeyTag(`navigation.${taskName}`)}>
      <div className={classes.configTask}>
        <div className={classes.pageIntro}>
          <PageIntroSection title={workflowName} description={workflowDescription} showActions />
        </div>
        <div
          id={mainContainerId}
          className={`${classes.configCardSection} ${showSnackBar ? classes.snackbarNavTop : ''} `}
        >
          <CardSection02
            justifyContent={'center'}
            hideSaveAndClose
            widgets={widgets}
            containerId={mainContainerId}
            registerEvents={snackBarRegisterEvents}
            onInputChange={onInputChange}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            taskName={taskName}
          />
        </div>
        <div>
          <SnackBarSection
            entityActions={configureSensorNodeActions}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            showSnackBar={showSnackBar}
            actions={[
              {
                type: 'CUSTOM',
                label: 'SAVE',
                func: snackBarOnSave,
              },
              {
                type: 'CUSTOM',
                label: 'CANCEL',
                func: snackBarOnCancel,
              },
            ]}
          />
        </div>
      </div>
    </AccessControl>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Workflow);
