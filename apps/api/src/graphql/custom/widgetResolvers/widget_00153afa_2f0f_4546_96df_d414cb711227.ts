import { GetWidgetDataResult, DataAggregationArgs, AuthContext } from '../../../types';

// View: Node Details --- Widget: Site Status
// Group by: timestamp
// No Aggregation
// Value: siteStatus
// Value aggregated by: Change (in percentage)
// Chart type: Positive Negative Area
export const widget_00153afa_2f0f_4546_96df_d414cb711227 = async (
  input: DataAggregationArgs,
  context: AuthContext,
): Promise<GetWidgetDataResult | 'not implemented'> => {
  // TODO: add your code here.
  // If you need to access the current user, the token and data sources,
  // you can get them from 'context'
  return 'not implemented';
};
