/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import {
  CustomActionArgs,
  DataListingArgs,
  DataAggregationArgs,
  MultiTransFormationArgs,
} from '../../../types';
import { IResolvers } from 'apollo-server-express';

export const widgetResolvers: IResolvers = {
  Query: {
    custom_action_3b73adbb_d755_414b_b017_1d964567aa2d: async (
      _parent: any,
      args: { input: CustomActionArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.custom_action_3b73adbb_d755_414b_b017_1d964567aa2d(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.custom_action_3b73adbb_d755_414b_b017_1d964567aa2d(args.input, {
            ...rest,
          })
        : result;
    },

    custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9: async (
      _parent: any,
      args: { input: CustomActionArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424(args.input, {
            ...rest,
          })
        : result;
    },

    entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_5cb3e084_759a_484a_8bea_4db978e3c656: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_5cb3e084_759a_484a_8bea_4db978e3c656(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_5cb3e084_759a_484a_8bea_4db978e3c656(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_f51934f0_c79e_4bba_998b_0d8e381cf5f1: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_f51934f0_c79e_4bba_998b_0d8e381cf5f1(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_f51934f0_c79e_4bba_998b_0d8e381cf5f1(args.input, {
            ...rest,
          })
        : result;
    },

    summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824(args.input, {
            ...rest,
          })
        : result;
    },

    summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74(args.input, {
            ...rest,
          })
        : result;
    },

    summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5(args.input, {
            ...rest,
          })
        : result;
    },

    summary_title_e376073d_113e_42f3_a34b_c14829f152c7: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.summary_title_e376073d_113e_42f3_a34b_c14829f152c7(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.summary_title_e376073d_113e_42f3_a34b_c14829f152c7(args.input, {
            ...rest,
          })
        : result;
    },

    summary_title_f991e457_5522_4e72_ba6b_9f8811f612af: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.summary_title_f991e457_5522_4e72_ba6b_9f8811f612af(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.summary_title_f991e457_5522_4e72_ba6b_9f8811f612af(args.input, {
            ...rest,
          })
        : result;
    },

    widget_00153afa_2f0f_4546_96df_d414cb711227: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_00153afa_2f0f_4546_96df_d414cb711227(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_00153afa_2f0f_4546_96df_d414cb711227(args.input, { ...rest })
        : result;
    },

    widget_5d346104_9524_4ba4_a30a_bb9c509fc439: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_5d346104_9524_4ba4_a30a_bb9c509fc439(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_5d346104_9524_4ba4_a30a_bb9c509fc439(args.input, { ...rest })
        : result;
    },

    widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe(args.input, { ...rest })
        : result;
    },

    widget_ec00ac75_6320_4963_abcd_4c1aea91727b: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_ec00ac75_6320_4963_abcd_4c1aea91727b(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_ec00ac75_6320_4963_abcd_4c1aea91727b(args.input, { ...rest })
        : result;
    },

    widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd(args.input, { ...rest })
        : result;
    },

    widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88(args.input, { ...rest })
        : result;
    },

    widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics3a3b0785_d65d_4156_8025_0691da0cf99c: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics3a3b0785_d65d_4156_8025_0691da0cf99c(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics3a3b0785_d65d_4156_8025_0691da0cf99c(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics423ff13b_de6b_451c_95c3_23288e4edced: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics423ff13b_de6b_451c_95c3_23288e4edced(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics423ff13b_de6b_451c_95c3_23288e4edced(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e(args.input, {
            ...rest,
          })
        : result;
    },
  },
};
