/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import {
  CustomActionArgs,
  DataListingArgs,
  DataAggregationArgs,
  MultiTransFormationArgs,
  AuthContext,
} from '../../../types';
import { custom_action_3b73adbb_d755_414b_b017_1d964567aa2d } from '../../custom/widgetResolvers/custom_action_3b73adbb_d755_414b_b017_1d964567aa2d';
import { custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9 } from '../../custom/widgetResolvers/custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9';
import { entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421 } from '../../custom/widgetResolvers/entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421';
import { entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424 } from '../../custom/widgetResolvers/entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424';
import { entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425 } from '../../custom/widgetResolvers/entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425';
import { entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428 } from '../../custom/widgetResolvers/entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428';
import { entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424 } from '../../custom/widgetResolvers/entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424';
import { entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424 } from '../../custom/widgetResolvers/entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424';
import { object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6 } from '../../custom/widgetResolvers/object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6';
import { object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36 } from '../../custom/widgetResolvers/object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36';
import { object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7 } from '../../custom/widgetResolvers/object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7';
import { object_listing_5cb3e084_759a_484a_8bea_4db978e3c656 } from '../../custom/widgetResolvers/object_listing_5cb3e084_759a_484a_8bea_4db978e3c656';
import { object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3 } from '../../custom/widgetResolvers/object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3';
import { object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4 } from '../../custom/widgetResolvers/object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4';
import { summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824 } from '../../custom/widgetResolvers/summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824';
import { summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74 } from '../../custom/widgetResolvers/summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74';
import { summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5 } from '../../custom/widgetResolvers/summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5';
import { summary_title_e376073d_113e_42f3_a34b_c14829f152c7 } from '../../custom/widgetResolvers/summary_title_e376073d_113e_42f3_a34b_c14829f152c7';
import { summary_title_f991e457_5522_4e72_ba6b_9f8811f612af } from '../../custom/widgetResolvers/summary_title_f991e457_5522_4e72_ba6b_9f8811f612af';
import { widget_00153afa_2f0f_4546_96df_d414cb711227 } from '../../custom/widgetResolvers/widget_00153afa_2f0f_4546_96df_d414cb711227';
import { widget_0ee0fc44_015d_44d8_9d75_21c5a38778a4 } from '../../custom/widgetResolvers/widget_0ee0fc44_015d_44d8_9d75_21c5a38778a4';
import { widget_815cc1b3_74e5_4e82_8527_26e37f227dbd } from '../../custom/widgetResolvers/widget_815cc1b3_74e5_4e82_8527_26e37f227dbd';
import { widget_9a34e9b1_361a_4679_8fbc_3b3d8b19dde8 } from '../../custom/widgetResolvers/widget_9a34e9b1_361a_4679_8fbc_3b3d8b19dde8';
import { widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe } from '../../custom/widgetResolvers/widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe';
import { widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88 } from '../../custom/widgetResolvers/widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88';
import { widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3 } from '../../custom/widgetResolvers/widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3';
import { widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c } from '../../custom/widgetResolvers/widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c';
import { widget_statisticsa765aacf_2974_46d8_8df3_2f8cbee6c3e7 } from '../../custom/widgetResolvers/widget_statisticsa765aacf_2974_46d8_8df3_2f8cbee6c3e7';
import { widget_statisticsbf07f4f0_21b2_4d3e_a890_76ffe849f9e6 } from '../../custom/widgetResolvers/widget_statisticsbf07f4f0_21b2_4d3e_a890_76ffe849f9e6';
import { widget_statisticscc6d1107_019b_4a80_8c6e_0b6d67c8cc1c } from '../../custom/widgetResolvers/widget_statisticscc6d1107_019b_4a80_8c6e_0b6d67c8cc1c';
import { widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e } from '../../custom/widgetResolvers/widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async custom_action_3b73adbb_d755_414b_b017_1d964567aa2d(args: CustomActionArgs) {
    return custom_action_3b73adbb_d755_414b_b017_1d964567aa2d(args, this.context);
  }

  async custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9(args: CustomActionArgs) {
    return custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9(args, this.context);
  }

  async entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421(args: DataListingArgs) {
    return entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421(args, this.context);
  }

  async entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424(args: DataListingArgs) {
    return entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424(args, this.context);
  }

  async entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425(args: DataListingArgs) {
    return entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425(args, this.context);
  }

  async entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428(args: DataListingArgs) {
    return entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428(args, this.context);
  }

  async entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424(args: DataListingArgs) {
    return entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424(args, this.context);
  }

  async entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424(args: DataListingArgs) {
    return entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424(args, this.context);
  }

  async object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6(args: DataListingArgs) {
    return object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6(args, this.context);
  }

  async object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36(args: DataListingArgs) {
    return object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36(args, this.context);
  }

  async object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7(args: DataListingArgs) {
    return object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7(args, this.context);
  }

  async object_listing_5cb3e084_759a_484a_8bea_4db978e3c656(args: DataListingArgs) {
    return object_listing_5cb3e084_759a_484a_8bea_4db978e3c656(args, this.context);
  }

  async object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3(args: DataListingArgs) {
    return object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3(args, this.context);
  }

  async object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4(args: DataListingArgs) {
    return object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4(args, this.context);
  }

  async summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824(args: DataListingArgs) {
    return summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824(args, this.context);
  }

  async summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74(args: DataListingArgs) {
    return summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74(args, this.context);
  }

  async summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5(args: DataListingArgs) {
    return summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5(args, this.context);
  }

  async summary_title_e376073d_113e_42f3_a34b_c14829f152c7(args: DataListingArgs) {
    return summary_title_e376073d_113e_42f3_a34b_c14829f152c7(args, this.context);
  }

  async summary_title_f991e457_5522_4e72_ba6b_9f8811f612af(args: DataListingArgs) {
    return summary_title_f991e457_5522_4e72_ba6b_9f8811f612af(args, this.context);
  }

  async widget_00153afa_2f0f_4546_96df_d414cb711227(args: DataAggregationArgs) {
    return widget_00153afa_2f0f_4546_96df_d414cb711227(args, this.context);
  }

  async widget_0ee0fc44_015d_44d8_9d75_21c5a38778a4(args: DataAggregationArgs) {
    return widget_0ee0fc44_015d_44d8_9d75_21c5a38778a4(args, this.context);
  }

  async widget_815cc1b3_74e5_4e82_8527_26e37f227dbd(args: DataAggregationArgs) {
    return widget_815cc1b3_74e5_4e82_8527_26e37f227dbd(args, this.context);
  }

  async widget_9a34e9b1_361a_4679_8fbc_3b3d8b19dde8(args: DataAggregationArgs) {
    return widget_9a34e9b1_361a_4679_8fbc_3b3d8b19dde8(args, this.context);
  }

  async widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe(args: DataAggregationArgs) {
    return widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe(args, this.context);
  }

  async widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88(args: DataAggregationArgs) {
    return widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88(args, this.context);
  }

  async widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3(args: MultiTransFormationArgs) {
    return widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3(args, this.context);
  }

  async widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c(args: MultiTransFormationArgs) {
    return widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c(args, this.context);
  }

  async widget_statisticsa765aacf_2974_46d8_8df3_2f8cbee6c3e7(args: MultiTransFormationArgs) {
    return widget_statisticsa765aacf_2974_46d8_8df3_2f8cbee6c3e7(args, this.context);
  }

  async widget_statisticsbf07f4f0_21b2_4d3e_a890_76ffe849f9e6(args: MultiTransFormationArgs) {
    return widget_statisticsbf07f4f0_21b2_4d3e_a890_76ffe849f9e6(args, this.context);
  }

  async widget_statisticscc6d1107_019b_4a80_8c6e_0b6d67c8cc1c(args: MultiTransFormationArgs) {
    return widget_statisticscc6d1107_019b_4a80_8c6e_0b6d67c8cc1c(args, this.context);
  }

  async widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e(args: MultiTransFormationArgs) {
    return widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e(args, this.context);
  }
}
