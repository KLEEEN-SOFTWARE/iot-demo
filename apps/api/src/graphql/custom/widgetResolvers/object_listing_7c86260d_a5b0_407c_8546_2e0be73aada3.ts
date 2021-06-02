import { GetListingDataResults, DataListingArgs, AuthContext } from '../../../types';

// View: sensors
// Chart type: [WIDGET] FULL_TABLE
export const object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  return context.dataSources.api120425.listEntity();
};
