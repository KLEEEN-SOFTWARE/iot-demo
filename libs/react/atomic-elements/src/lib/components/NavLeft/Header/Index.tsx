import { HeaderNavLeftProps } from './HeaderNavLeft.model';
import { useStyles } from './HeaderNavLeft.style';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import classnames from 'classnames';

const bem = 'ks-nav-left-header';

export const HeaderNavLeft = ({ logo, productName }: HeaderNavLeftProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classnames(bem, classes.appBarContainer)}>
      <AppBar className={classnames(`${bem}__app-bar`, classes.appBar)} color="primary" position="fixed">
        <div className={classnames(`${bem}__content`, classes.appBarContent)}>
          {logo ? (
            <div className={classnames(`${bem}__logo`, classes.logoContainer)}>
              <Avatar alt="KS" variant="square" src={logo} />
            </div>
          ) : null}
          {productName ? <div className={classnames(`${bem}__brand`)}>{productName}</div> : null}
        </div>
      </AppBar>
    </div>
  );
};
