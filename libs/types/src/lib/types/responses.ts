import { CrossLinking, FormatProps, Results } from '.';

import { AggregationType as Transformation } from '../';

export interface TransformationResponse {
  crosslinking: CrossLinking[];
  format: FormatProps;
  results: Results;
  transformation: Transformation;
}
