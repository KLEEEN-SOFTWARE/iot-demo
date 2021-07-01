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
  }

  input MultiTransFormationArgs {
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
    # Widget: Reboot Sensor
    # Chart type: [WIDGET] CUSTOM_ACTION
    custom_action_3b73adbb_d755_414b_b017_1d964567aa2d(input: CustomActionArgs): CustomActionResults

    # Widget: Reboot Node
    # Chart type: [WIDGET] CUSTOM_ACTION
    custom_action_ca30dd1c_541f_447c_9a35_1335699f33f9(input: CustomActionArgs): CustomActionResults

    # View: Site Map Details
    # Value: node
    # Value aggregated by: Total Count
    # Chart type: Slot
    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120421(input: DataListingArgs): ListingResult

    # View: Site Map Details
    # Value: siteMap
    # Value aggregated by: No Aggregation
    # Chart type: Slot
    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120424(input: DataListingArgs): ListingResult

    # View: Site Map Details
    # Value: sensor
    # Value aggregated by: Total Count
    # Chart type: Slot
    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120425(input: DataListingArgs): ListingResult

    # View: Site Map Details
    # Value: siteStatus
    # Value aggregated by: No Aggregation
    # Chart type: Slot
    entity_detail_09522661_c6e8_4161_a1cf_8c1e2e499824_120428(input: DataListingArgs): ListingResult

    # View: Sensor Details
    # Value: siteMap
    # Value aggregated by: No Aggregation
    # Chart type: Slot
    entity_detail_e376073d_113e_42f3_a34b_c14829f152c7_120424(input: DataListingArgs): ListingResult

    # View: Node Details
    # Value: siteMap
    # Value aggregated by: No Aggregation
    # Chart type: Slot
    entity_detail_f991e457_5522_4e72_ba6b_9f8811f612af_120424(input: DataListingArgs): ListingResult

    # View: configureSensorNode --- Widget: Nodes
    # Chart type: [WIDGET] CONFIG_TABLE
    object_listing_1e31bd22_da1f_4caf_8f46_421982eacad6(input: DataListingArgs): ListingResult

    # View: siteMapDetails
    # Chart type: [WIDGET] FULL_TABLE
    object_listing_1f20697a_3aa6_4ce4_a14a_8d50d486ce36(input: DataListingArgs): ListingResult

    # View: nodes
    # Chart type: [WIDGET] FULL_TABLE
    object_listing_3d3baa6b_4237_4e39_bc34_7f22976f16e7(input: DataListingArgs): ListingResult

    # View: configureSensorNode --- Widget: Sensors
    # Chart type: [WIDGET] CONFIG_TABLE
    object_listing_5cb3e084_759a_484a_8bea_4db978e3c656(input: DataListingArgs): ListingResult

    # View: sensors
    # Chart type: [WIDGET] FULL_TABLE
    object_listing_7c86260d_a5b0_407c_8546_2e0be73aada3(input: DataListingArgs): ListingResult

    # View: siteMapReport --- Widget: Site Map
    # Chart type: Table
    object_listing_83d2ffac_502b_4730_ab9a_af59e46419da(input: DataListingArgs): ListingResult

    # View: sites
    # Chart type: [WIDGET] FULL_TABLE
    object_listing_aecfa22b_e76c_4402_b2ec_cf1c7a4e8781(input: DataListingArgs): ListingResult

    # View: siteMapDetails
    # Chart type: [WIDGET] FULL_TABLE
    object_listing_b6dcf2f6_6cc1_418f_b027_34d3e60bb8c4(input: DataListingArgs): ListingResult

    # View: configureSensorNode --- Widget: Sites
    # Chart type: [WIDGET] CONFIG_TABLE
    object_listing_f51934f0_c79e_4bba_998b_0d8e381cf5f1(input: DataListingArgs): ListingResult

    # View: Site Map Details
    # Value: siteMap
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] SUMMARY_TITLE
    summary_title_09522661_c6e8_4161_a1cf_8c1e2e499824(input: DataListingArgs): ListingResult

    # View: Nodes
    # Value: node
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] SUMMARY_TITLE
    summary_title_3e93db18_fe67_43a2_be09_6ecf9873ee74(input: DataListingArgs): ListingResult

    # View: Sites
    # Value: siteMap
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] SUMMARY_TITLE
    summary_title_46191c4f_2521_4d6d_8015_5116357f2668(input: DataListingArgs): ListingResult

    # View: Sensors
    # Value: sensor
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] SUMMARY_TITLE
    summary_title_ccd4b585_b8d5_4315_817f_bae7060c22e5(input: DataListingArgs): ListingResult

    # View: Sensor Details
    # Value: sensor
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] SUMMARY_TITLE
    summary_title_e376073d_113e_42f3_a34b_c14829f152c7(input: DataListingArgs): ListingResult

    # View: Node Details
    # Value: node
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] SUMMARY_TITLE
    summary_title_f991e457_5522_4e72_ba6b_9f8811f612af(input: DataListingArgs): ListingResult

    # View: Node Details --- Widget: Site Status
    # Group by: timestamp
    # No Aggregation
    # Value: siteStatus
    # Value aggregated by: Change (in percentage)
    # Chart type: Positive Negative Area
    widget_00153afa_2f0f_4546_96df_d414cb711227(input: DataAggregationArgs): GraphResult

    # View: System --- Widget: Historical Events
    # Group by: timestamp
    # No Aggregation
    # Value: event
    # Value aggregated by: Total Count
    # Chart type: [WIDGET] STEP_LINE
    widget_16dee097_f374_4987_922e_53015c7934d9(input: DataAggregationArgs): GraphResult

    # View: Site Map Report --- Widget: Node Breakdown
    # Group by: siteMap
    # No Aggregation
    # Value: node
    # Value aggregated by: Total Count
    # Chart type: Polar Area
    widget_3ee9f2eb_56f5_413d_885c_2b50b4fe77ce(input: DataAggregationArgs): GraphResult

    # View: Site Map Report --- Widget: Event Length
    # Group by: event
    # No Aggregation
    # Value: eventLength
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] BUBBLE_CHART
    widget_54091272_9393_4593_9876_f39a3b43ca18(input: DataAggregationArgs): GraphResult

    # View: System --- Widget: Node Status
    # Group by: timestamp
    # No Aggregation
    # Value: node
    # Value aggregated by: Total Count
    # Chart type: [WIDGET] AREA_GRADIENT
    widget_5d346104_9524_4ba4_a30a_bb9c509fc439(input: DataAggregationArgs): GraphResult

    # View: Site Map Report --- Widget: Site Map Status
    # Group by: timestamp
    # No Aggregation
    # Value: siteMap
    # Value aggregated by: Total Count
    # Chart type: [WIDGET] AREA_GRADIENT
    widget_6b3abce7_9ad3_4e09_8f10_e4806284237d(input: DataAggregationArgs): GraphResult

    # View: Site Map Report --- Widget: Node Status
    # Group by: node
    # No Aggregation
    # Value: nodeStatus
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] COLUMN_BAR
    widget_831078f7_ef51_4751_8d76_3ed1b4647d4e(input: DataAggregationArgs): GraphResult

    # View: System --- Widget: Event Length
    # Group by: event
    # No Aggregation
    # Value: eventLength
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] BUBBLE_CHART
    widget_8b263bdb_cbd4_4d6c_ba39_1e8568529e85(input: DataAggregationArgs): GraphResult

    # View: Node Details --- Widget: Sensors
    # Group by: node
    # No Aggregation
    # Value: sensor
    # Value aggregated by: Total Count
    # Chart type: [WIDGET] SIMPLE_LIST_RANKED
    widget_d3df6c8c_ee91_45e1_af8e_3b1ef9343fbe(input: DataAggregationArgs): GraphResult

    # View: System --- Widget: Site Map
    # Group by: siteMap
    # No Aggregation
    # Value: siteStatus
    # Value aggregated by: No Aggregation
    # Chart type: [WIDGET] SINGLE_BAR_HIGHLIGHT_MAX
    widget_ec00ac75_6320_4963_abcd_4c1aea91727b(input: DataAggregationArgs): GraphResult

    # View: System --- Widget: Sensor Status
    # Group by: timestamp
    # No Aggregation
    # Value: sensor
    # Value aggregated by: Total Count
    # Chart type: [WIDGET] AREA_GRADIENT
    widget_ec36d0ef_f9c6_4345_bc1d_552b19ceeccd(input: DataAggregationArgs): GraphResult

    # View: Sensor Details --- Widget: Sensor Status
    # Group by: timestamp
    # No Aggregation
    # Value: sensorStatus
    # Value aggregated by: Change (in count)
    # Chart type: Positive Negative Area
    widget_f2e76b4e_b7ab_4a57_bb13_6e7c3c783e88(input: DataAggregationArgs): GraphResult

    # View: Site Map Report --- Widget: Node Summary
    # Value: nodeStatus
    # Value aggregated by: 
    # Chart type: Summary Statistics
    widget_statistics074508ac_6c71_4c53_bae4_29f37200164b(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # View: System --- Widget: Sensor Overall Status
    # Value: sensorOverallStatus
    # Value aggregated by: 
    # Chart type: Summary Statistics
    widget_statistics15d23aa3_6f00_4505_9199_85c2e2662aaa(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # View: System --- Widget: System Health
    # Value: systemHealth
    # Value aggregated by: 
    # Chart type: [WIDGET] GAUGE_SEVERITY_LEVEL
    widget_statistics324888f3_eb8c_4097_ba9f_21aa8cf6be4f(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # View: System --- Widget: Sensors
    # Value: sensorStatus
    # Value aggregated by: 
    # Chart type: Summary Statistics
    widget_statistics3a3b0785_d65d_4156_8025_0691da0cf99c(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # View: System --- Widget: Nodes
    # Value: nodeStatus
    # Value aggregated by: 
    # Chart type: Summary Statistics
    widget_statistics423ff13b_de6b_451c_95c3_23288e4edced(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # View: Sensor Details --- Widget: Site Status
    # Value: siteStatus
    # Value aggregated by: 
    # Chart type: [WIDGET] GAUGE_SEVERITY_LEVEL
    widget_statistics592242b4_67a8_4d1f_a98e_45527ebd46c3(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # View: Sensor Details --- Widget: Status
    # Value: sensorStatus
    # Value aggregated by: 
    # Chart type: [WIDGET] GAUGE_SEVERITY_LEVEL
    widget_statistics86ae65f8_0d94_499f_86e2_60c17bc48f2c(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # View: System --- Widget: Node Overall Status
    # Value: nodeOverallStatus
    # Value aggregated by: 
    # Chart type: Summary Statistics
    widget_statisticscd7fa114_5174_423f_9fdd_b14fc75dd1f1(input: MultiTransFormationArgs): [MultiTransFormationResults]

    # View: Node Details --- Widget: Status
    # Value: nodeStatus
    # Value aggregated by: 
    # Chart type: [WIDGET] GAUGE_SEVERITY_LEVEL
    widget_statisticse95096b2_8851_4330_a0ed_276c81ebe69e(input: MultiTransFormationArgs): [MultiTransFormationResults]
  }
`;
