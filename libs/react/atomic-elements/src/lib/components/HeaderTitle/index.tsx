import { DisplayValueTitle } from '../display-value-title';
import React from 'react';
import classnames from 'classnames';
import { isNilOrEmpty } from '@kleeen/common/utils';

const bem = 'ks-header-title';

interface HeaderTitle {
  objectValue?: string;
  taskName?: string;
  title?: string;
  results?: string;
}

export const HeaderTitleEllipsis = (props: HeaderTitle, split = true): React.ReactElement => {
  return (
    <>
      {props.objectValue && isNilOrEmpty(props.results) ? (
        <div className={classnames(bem, 'header-title')}>
          <div className={classnames(`${bem}__title`, 'title-container')}>{props.title}</div>
          <div className={classnames(`${bem}__ellipsis`, 'with-ellipsis')}>
            <DisplayValueTitle objectValue={props.objectValue} taskName={props.taskName} />
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
      {props.objectValue && isNilOrEmpty(props.results) ? (
        <>
          <DisplayValueTitle objectValue={props.objectValue} taskName={props.taskName} />
          {split && ' | ' + props.title}
        </>
      ) : (
        props.title
      )}
    </>
  );
};
