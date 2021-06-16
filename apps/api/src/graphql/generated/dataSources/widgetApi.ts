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
import { object_listing_57e511be_c5b3_49bc_a376_e2de48c8283c } from '../../custom/widgetResolvers/object_listing_57e511be_c5b3_49bc_a376_e2de48c8283c';
import { object_listing_5cb3e084_759a_484a_8bea_4db978e3c656 } from '../../custom/widgetResolvers/object_listing_5cb3e084_759a_484a_8bea_4db978e3c656';
import { object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3 } from '../../custom/widgetResolvers/object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3';
import { object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4 } from '../../custom/widgetResolvers/object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4';
import { object_listing_f51934f0_c79e_4bba_998b_0d8e381cf5f1 } from '../../custom/widgetResolvers/object_listing_f51934f0_c79e_4bba_998b_0d8e381cf5f1';
import { summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824 } from '../../custom/widgetResolvers/summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824';
import { summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74 } from '../../custom/widgetResolvers/summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74';
import { summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5 } from '../../custom/widgetResolvers/summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5';
import { summary_title_e376073d_113e_42f3_a34b_c14829f152c7 } from '../../custom/widgetResolvers/summary_title_e376073d_113e_42f3_a34b_c14829f152c7';
import { summary_title_f991e457_5522_4e72_ba6b_9f8811f612af } from '../../custom/widgetResolvers/summary_title_f991e457_5522_4e72_ba6b_9f8811f612af';
import { widget_00153afa_2f0f_4546_96df_d414cb711227 } from '../../custom/widgetResolvers/widget_00153afa_2f0f_4546_96df_d414cb711227';
import { widget_5d346104_9524_4ba4_a30a_bb9c509fc439 } from '../../custom/widgetResolvers/widget_5d346104_9524_4ba4_a30a_bb9c509fc439';
import { widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe } from '../../custom/widgetResolvers/widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe';
import { widget_ec00ac75_6320_4963_abcd_4c1aea91727b } from '../../custom/widgetResolvers/widget_ec00ac75_6320_4963_abcd_4c1aea91727b';
import { widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd } from '../../custom/widgetResolvers/widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd';
import { widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88 } from '../../custom/widgetResolvers/widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88';
import { widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa } from '../../custom/widgetResolvers/widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa';
import { widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f } from '../../custom/widgetResolvers/widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f';
import { widget_statistics3a3b0785_d65d_4156_8025_0691da0cf99c } from '../../custom/widgetResolvers/widget_statistics3a3b0785_d65d_4156_8025_0691da0cf99c';
import { widget_statistics423ff13b_de6b_451c_95c3_23288e4edced } from '../../custom/widgetResolvers/widget_statistics423ff13b_de6b_451c_95c3_23288e4edced';
import { widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3 } from '../../custom/widgetResolvers/widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3';
import { widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c } from '../../custom/widgetResolvers/widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c';
import { widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1 } from '../../custom/widgetResolvers/widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1';
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

  async object_listing_57e511be_c5b3_49bc_a376_e2de48c8283c(args: DataListingArgs) {
    return object_listing_57e511be_c5b3_49bc_a376_e2de48c8283c(args, this.context);
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

  async object_listing_f51934f0_c79e_4bba_998b_0d8e381cf5f1(args: DataListingArgs) {
    return object_listing_f51934f0_c79e_4bba_998b_0d8e381cf5f1(args, this.context);
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

  async widget_5d346104_9524_4ba4_a30a_bb9c509fc439(args: DataAggregationArgs) {
    return widget_5d346104_9524_4ba4_a30a_bb9c509fc439(args, this.context);
  }

  async widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe(args: DataAggregationArgs) {
    return widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe(args, this.context);
  }

  async widget_ec00ac75_6320_4963_abcd_4c1aea91727b(args: DataAggregationArgs) {
    return widget_ec00ac75_6320_4963_abcd_4c1aea91727b(args, this.context);
  }

  async widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd(args: DataAggregationArgs) {
    return widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd(args, this.context);
  }

  async widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88(args: DataAggregationArgs) {
    return widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88(args, this.context);
  }

  async widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa(args: MultiTransFormationArgs) {
    return widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa(args, this.context);
  }

  async widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f(args: MultiTransFormationArgs) {
    return widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f(args, this.context);
  }

  async widget_statistics3a3b0785_d65d_4156_8025_0691da0cf99c(args: MultiTransFormationArgs) {
    return widget_statistics3a3b0785_d65d_4156_8025_0691da0cf99c(args, this.context);
  }

  async widget_statistics423ff13b_de6b_451c_95c3_23288e4edced(args: MultiTransFormationArgs) {
    return widget_statistics423ff13b_de6b_451c_95c3_23288e4edced(args, this.context);
  }

  async widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3(args: MultiTransFormationArgs) {
    return widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3(args, this.context);
  }

  async widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c(args: MultiTransFormationArgs) {
    return widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c(args, this.context);
  }

  async widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1(args: MultiTransFormationArgs) {
    return widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1(args, this.context);
  }

  async widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e(args: MultiTransFormationArgs) {
    return widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e(args, this.context);
  }
}
