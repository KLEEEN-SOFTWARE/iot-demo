import { GetListingDataResults, DataListingArgs, AuthContext } from '../../../types';

// View: nodes
// Chart type: [WIDGET] FULL_TABLE
export const object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7 = async (
  input: DataListingArgs,
  context: AuthContext,
): Promise<GetListingDataResults | 'not implemented'> => {
  return context.dataSources.api120421.listEntity();
};
