import { displayWithVizHeight, displayWithVizWidth } from './shared.styles';

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  content: {
    height: displayWithVizHeight,
    width: displayWithVizWidth,
  },
});
