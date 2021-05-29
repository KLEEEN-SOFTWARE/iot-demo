/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import {
  CustomActionArgs,
  DataListingArgs,
  DataAggregationArgs,
  MultiTransFormationArgs,
} from '../../../types';
import { DataSource } from 'apollo-datasource';
import {
  dispatchCustomAction,
  getListingData,
  getWidgetData,
  getMultiTransFormationData,
} from '../../../realisticFakeData';

export class WidgetFakeApi extends DataSource {
  async custom_action_3b73adbb_d755_414b_b017_1d964567aa2d(args: CustomActionArgs) {
    return dispatchCustomAction(args);
  }

  async custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9(args: CustomActionArgs) {
    return dispatchCustomAction(args);
  }

  async entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421(args: DataListingArgs) {
    return getListingData(args);
  }

  async entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424(args: DataListingArgs) {
    return getListingData(args);
  }

  async entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425(args: DataListingArgs) {
    return getListingData(args);
  }

  async entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428(args: DataListingArgs) {
    return getListingData(args);
  }

  async entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424(args: DataListingArgs) {
    return getListingData(args);
  }

  async entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424(args: DataListingArgs) {
    return getListingData(args);
  }

  async object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6(args: DataListingArgs) {
    return getListingData(args);
  }

  async object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36(args: DataListingArgs) {
    return getListingData(args);
  }

  async object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7(args: DataListingArgs) {
    return getListingData(args);
  }

  async object_listing_5cb3e084_759a_484a_8bea_4db978e3c656(args: DataListingArgs) {
    return getListingData(args);
  }

  async object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3(args: DataListingArgs) {
    return getListingData(args);
  }

  async object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4(args: DataListingArgs) {
    return getListingData(args);
  }

  async summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824(args: DataListingArgs) {
    return getListingData(args);
  }

  async summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74(args: DataListingArgs) {
    return getListingData(args);
  }

  async summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5(args: DataListingArgs) {
    return getListingData(args);
  }

  async summary_title_e376073d_113e_42f3_a34b_c14829f152c7(args: DataListingArgs) {
    return getListingData(args);
  }

  async summary_title_f991e457_5522_4e72_ba6b_9f8811f612af(args: DataListingArgs) {
    return getListingData(args);
  }

  async widget_00153afa_2f0f_4546_96df_d414cb711227(args: DataAggregationArgs) {
    return getWidgetData(args);
  }

  async widget_0ee0fc44_015d_44d8_9d75_21c5a38778a4(args: DataAggregationArgs) {
    return getWidgetData(args);
  }

  async widget_815cc1b3_74e5_4e82_8527_26e37f227dbd(args: DataAggregationArgs) {
    return getWidgetData(args);
  }

  async widget_9a34e9b1_361a_4679_8fbc_3b3d8b19dde8(args: DataAggregationArgs) {
    return getWidgetData(args);
  }

  async widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe(args: DataAggregationArgs) {
    return getWidgetData(args);
  }

  async widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88(args: DataAggregationArgs) {
    return getWidgetData(args);
  }

  async widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3(args: MultiTransFormationArgs) {
    return getMultiTransFormationData(args);
  }

  async widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c(args: MultiTransFormationArgs) {
    return getMultiTransFormationData(args);
  }

  async widget_statisticsa765aacf_2974_46d8_8df3_2f8cbee6c3e7(args: MultiTransFormationArgs) {
    return getMultiTransFormationData(args);
  }

  async widget_statisticsbf07f4f0_21b2_4d3e_a890_76ffe849f9e6(args: MultiTransFormationArgs) {
    return getMultiTransFormationData(args);
  }

  async widget_statisticscc6d1107_019b_4a80_8c6e_0b6d67c8cc1c(args: MultiTransFormationArgs) {
    return getMultiTransFormationData(args);
  }

  async widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e(args: MultiTransFormationArgs) {
    return getMultiTransFormationData(args);
  }
}
