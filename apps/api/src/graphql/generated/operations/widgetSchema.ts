/* eslint-disable max-lines */
import { gql } from 'apollo-server-express';

export const widgetSchema = gql`
  type GraphResult {
    format: JSON
    results: JSON
    crossLinking: JSON
  }

  type MultiTransFormationResults {
    crossLinking: JSON
    format: JSON
    results: JSON
    transformation: String!
  }

  type ListingResult {
    data: JSON
    format: JSON
    pagination: JSON
  }

  input DataListingArgs {
    entity: String!
    attributes: JSON!
    filters: JSON
    pagination: JSON
    sorting: [JSON!]
  }

  input MultiTransFormationArgs {
    attributes: [String]
    entity: String!
    filters: JSON
    transformations: [String!]!
  }

  input CustomActionArgs {
    entity: String!
    functionName: String!
    filters: JSON
  }

    extend type Query {
          # Widget Summary
    # Widget: Reboot Sensor
    # Thing: sensor
    custom_action_3b73adbb_d755_414b_b017_1d964567aa2d(input: CustomActionArgs): CustomActionResults

    # Widget Summary
    # Widget: Reboot Node
    # Thing: node
    custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9(input: CustomActionArgs): CustomActionResults

    # Widget Summary
    # View: siteMapDetails
    # Widget: Summary
    # Value: node - Total Count
    # Widget type: behavior
    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: siteMapDetails
    # Widget: Summary
    # Value: siteMap - No Aggregation
    # Widget type: behavior
    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: siteMapDetails
    # Widget: Summary
    # Value: sensor - Total Count
    # Widget type: behavior
    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: siteMapDetails
    # Widget: Summary
    # Value: siteStatus - No Aggregation
    # Widget type: behavior
    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: sensorDetails
    # Widget: Summary Drawer
    # Value: siteMap - No Aggregation
    # Widget type: behavior
    entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: nodeDetails
    # Widget: Summary Drawer
    # Value: siteMap - No Aggregation
    # Widget type: behavior
    entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Nodes
    # Thing: node
    # Attributes: Node, NodeStatus, SiteMap
    object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Site Map Details
    # Widget: Sensors
    # Thing: Sensor
    # Attributes: sensor, sensorStatus
    # Widget type: goal
    object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Nodes
    # Widget: Table of Node
    # Thing: Node
    # Attributes: node, nodeStatus
    # Widget type: goal
    object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Sensors
    # Thing: sensor
    # Attributes: Sensor, SensorStatus, SiteMap
    object_listing_5cb3e084_759a_484a_8bea_4db978e3c656(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Sensors
    # Widget: Table of Sensor
    # Thing: Sensor
    # Attributes: sensor, sensorStatus
    # Widget type: goal
    object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Site Map
    # Thing: siteMap
    # Attributes: SiteStatus, SiteMap, Node, Sensor
    object_listing_83d2ffac_502b_4730_ab9a_af59e46419da(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Sites
    # Thing: siteMap
    # Attributes: SiteMap, SiteStatus
    object_listing_90101dbc_cddd_446b_a5e7_cc8318d22a43(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Sites
    # Widget: Site Map
    # Thing: SiteMap
    # Attributes: siteMap, siteStatus, node, sensor
    # Widget type: goal
    object_listing_aecfa22b_e76c_4402_b2ec_cf1c7a4e8781(input: DataListingArgs): ListingResult

    # Widget Summary
    # View: Site Map Details
    # Widget: Nodes
    # Thing: Node
    # Attributes: node, nodeStatus
    # Widget type: goal
    object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4(input: DataListingArgs): ListingResult

    # Widget Summary
    # Widget: Site Status
    # Value: siteStatus - Change (in percentage)
    # Group by: timestamp - No Aggregation
    widget_00153afa_2f0f_4546_96df_d414cb711227(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Historical Events
    # Value: event - Total Count
    # Group by: timestamp - No Aggregation
    widget_16dee097_f374_4987_922e_53015c7934d9(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Node Breakdown
    # Value: node - Total Count
    # Group by: siteMap - No Aggregation
    widget_3ee9f2eb_56f5_413d_885c_2b50b4fe77ce(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Event Length
    # Value: eventLength - No Aggregation
    # Group by: event - No Aggregation
    widget_54091272_9393_4593_9876_f39a3b43ca18(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Node Status
    # Value: node - Total Count
    # Group by: timestamp - No Aggregation
    widget_5d346104_9524_4ba4_a30a_bb9c509fc439(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Site Map Status
    # Value: siteMap - Total Count
    # Group by: timestamp - No Aggregation
    widget_6b3abce7_9ad3_4e09_8f10_e4806284237d(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Node Status
    # Value: nodeStatus - No Aggregation
    # Group by: node - No Aggregation
    widget_831078f7_ef51_4751_8d76_3ed1b4647d4e(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Event Length
    # Value: eventLength - No Aggregation
    # Group by: event - No Aggregation
    widget_8b263bdb_cbd4_4d6c_ba39_1e8568529e85(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Sensors
    # Value: sensor - Total Count
    # Group by: node - No Aggregation
    widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Site Map
    # Value: siteStatus - No Aggregation
    # Group by: siteMap - No Aggregation
    widget_ec00ac75_6320_4963_abcd_4c1aea91727b(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Sensor Status
    # Value: sensor - Total Count
    # Group by: timestamp - No Aggregation
    widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Sensor Status
    # Value: sensorStatus - Change (in count)
    # Group by: timestamp - No Aggregation
    widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88(input: DataAggregationArgs): GraphResult

    # Widget Summary
    # Widget: Node Summary
    # Value: nodeStatus
    widget_statistics074508ac_6c71_4c53_bae4_29f37200164b(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Sensor Overall Status
    # Value: sensorOverallStatus
    widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: System Health
    # Value: systemHealth
    widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Sensors
    # Value: sensorStatus
    widget_statistics3a3b0785_d65d_4156_8025_0691da0cf99c(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Nodes
    # Value: nodeStatus
    widget_statistics423ff13b_de6b_451c_95c3_23288e4edced(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Site Status
    # Value: siteStatus
    widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Status
    # Value: sensorStatus
    widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Node Overall Status
    # Value: nodeOverallStatus
    widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # Widget Summary
    # Widget: Status
    # Value: nodeStatus
    widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e(input: MultiTransFormationArgs): [MultiTransFormationResults]
    }
  `;
