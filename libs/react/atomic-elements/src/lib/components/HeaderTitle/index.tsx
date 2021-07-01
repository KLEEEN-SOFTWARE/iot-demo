import { DisplayValueTitle } from '../display-value-title';
import React from 'react';
import classnames from 'classnames';

const bem = 'ks-header-title';

interface HeaderTitle {
  objectValue?: string;
  slots?: any[];
  taskName?: string;
  title?: string;
}

export const HeaderTitleEllipsis = (props: HeaderTitle, split = true): React.ReactElement => {
  return (
    <>
      {props.slots && props.objectValue ? (
        <div className={classnames(bem, 'header-title')}>
          <div className={classnames(`${bem}__title`, 'title-container')}>{props.title}</div>
          <div className={classnames(`${bem}__ellipsis`, 'with-ellipsis')}>
            <DisplayValueTitle
              objectValue={props.objectValue}
              operationName={props.slots[0]?.params?.operationName}
              taskName={props.taskName}
            />
          </div>
        </div>
      ) : (
        props.title
      )}
    </>
  );
};

export const HeaderTitle = (props: HeaderTitle, split = true): React.ReactElement => {
  return (
    <>
      {props.slots && props.objectValue ? (
        <>
          <DisplayValueTitle
            objectValue={props.objectValue}
            operationName={props.slots[0]?.params?.operationName}
            taskName={props.taskName}
          />
          {split && ' | ' + props.title}
        </>
      ) : (
        props.title
      )}
    </>
  );
};
