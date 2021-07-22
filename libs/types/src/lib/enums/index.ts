export enum ActionType {
  Add = 'add',
  Custom = 'custom',
  Delete = 'delete',
}

export enum DisplayMediaType {
  Text = 'text',
  Emoji = 'emoji',
  Svg = 'svg',
  Src = 'src',
  Flag = 'flag',
}

export enum DisplayMediaKapiTypeSupported {
  Country = 'country',
  CountryCode = 'country_code',
  Username = 'username',
  FullName = 'full_name',
  FirstName = 'first_name',
  String = 'string',
  City = 'city',
  Prime = 'prime',
  SeverityLevel = 'severity_level',
}

export enum AggregationType {
  AlphabeticalBucket = 'alphabeticalBucket',
  AlphaTier = 'alphaTier',
  Average = 'average',
  Bucket = 'bucket',
  CountTotal = 'countTotal',
  Change = 'change',
  ChangePercent = 'changePercent',
  ChangeCount = 'changeCount',
  CountUnique = 'countUnique',
  CustomAggregation = 'customAggregation',
  CustomCount = 'customCount',
  CustomTrend = 'customTrend',
  Latest = 'latest',
  Max = 'max',
  MaxSparkline = 'maxSparkline',
  MedianMiddl = 'medianMiddl',
  Min = 'min',
  ModeFrequent = 'modeFrequent',
  NoAggregation = 'noAggregation',
  Occurrence = 'occurrence',
  Oldest = 'oldest',
  SelfMulti = 'selfMulti',
  SelfSingle = 'selfSingle',
  Sum = 'sum',
  Tier = 'tier',
  TrendCountHighLowSparkline = 'trendCountHighLowSparkline',
  TrendCountSparkline = 'trendCountSparkline',
  TrendCountVsStartSparkline = 'trendCountVsStartSparkline',
  TrendCountVsEndSparkline = 'trendCountVsEndSparkline',
  TrendHighLowSparkline = 'trendHighLowSparkline',
  TrendSparkline = 'trendSparkline',
  TrendVsStartSparkline = 'trendVsStartSparkline',
  TrendVsEndSparkline = 'trendVsEndSparkline',
  Unique = 'unique',
}

export enum NavPosition {
  left = 'nav-left',
  top = 'nav-top',
}

export enum NavType {
  workflow = 'workflow',
  customUrl = 'customUrl',
}

export enum FilterOperators {
  max = 'max',
  from = 'from',
  min = 'min',
  in = '_in',
  to = 'to',
  relativeDate = 'relativeDate',
}

export enum FilterTypes {
  in = 'filter-in',
  out = 'filter-out',
}

export const FilterForNumerics = [
  'Data - Numeric - Discrete',
  'Data - Numeric',
  'Data - Numeric - Continuous',
  'Data - Numeric - Percentage',
  'Data - Numeric - NTG - Discrete',
  'Data - Numeric - NTG - Severity Ranking',
];

export const SameSDTAggregations = [
  AggregationType.Average,
  AggregationType.Latest,
  AggregationType.Max,
  AggregationType.MedianMiddl,
  AggregationType.Min,
  AggregationType.NoAggregation,
  AggregationType.Oldest,
  AggregationType.SelfMulti,
  AggregationType.SelfSingle,
];

export enum StatisticalDataType {
  // Parent
  Categorical = 'Data - Categorical',
  Color = 'Data - Color',
  Numeric = 'Data - Numeric',
  Image = 'Data - Image',

  // Categorical
  Binary = 'Data - Categorical - Binary',
  FreeForm = 'Data - Categorical - free form',
  LongRichHTML = 'Data - Categorical - free form - longRichHtml',
  Ordered = 'Data - Categorical - ordered',
  OrderedSeverityRanking = 'Data - Categorical - ordered - Severity Ranking',
  OrderedTemporalLooped = 'Data - Categorical - ordered - Temporal Looped',
  Unordered = 'Data - Categorical - unordered',
  UnorderedGeo = 'Data - Categorical - unordered - geo',

  // Numeric
  NumericContinuousGeo = 'Data - Numeric - Geo',
  NTG = 'Data - Numeric - NTG',
  NumericContinuous = 'Data - Numeric - NTG - Continuous',
  NumericDiscrete = 'Data - Numeric - NTG - Discrete',
  NumericPercentage = 'Data - Numeric - NTG - Percentage',
  NumericSeverityRanking = 'Data - Numeric - NTG - Severity Ranking',
  NumericTemporal = 'Data - Numeric - Temporal',
}

// TODO add translation support to SelectList component to remove labels here, used in HUDs refresh control section
export const TimeIntervals = [
  { label: 'Every 15 seconds', translateKey: 'app.refreshControl.every15seconds', value: 0.25 },
  { label: 'Every 30 seconds', translateKey: 'app.refreshControl.every30seconds', value: 0.5 },
  { label: 'Every minute', translateKey: 'app.refreshControl.every1minute', value: 1 },
  { label: 'Every 5 minutes', translateKey: 'app.refreshControl.every5minutes', value: 5 },
  { label: 'Every 10 minutes', translateKey: 'app.refreshControl.every10minutes', value: 10 },
  { label: 'Every 15 minutes', translateKey: 'app.refreshControl.every15minutes', value: 15 },
  { label: 'Every 30 minutes', translateKey: 'app.refreshControl.every30minutes', value: 30 },
  { label: 'Every 60 minutes', translateKey: 'app.refreshControl.every60minutes', value: 60 },
];

export enum TimestampKey {
  key = '--timestamp--:',
  format = 'MM/DD/YYYY HH:mm',
}

export enum IntervalDate {
  minute = '1,m',
  oneHours = '1,h',
  sixHours = '6,h',
  twentyFourHours = '24,h',
  oneWeek = '1,w',
  oneMonth = '1,M',
  threeMonth = '3,M',
  allTime = '*',
}

export enum WidgetDataAttributes {
  DisplayMedia = 'displayMedia',
  DisplayValue = 'displayValue',
}

export enum WidgetTypes {
  AREA = '[WIDGET] AREA',
  AREA_GRADIENT = '[WIDGET] AREA_GRADIENT',
  AREA_MACRO_MICRO = '[WIDGET] AREA_MACRO_MICRO',
  AREA_MASTER_DETAIL = '[WIDGET] AREA_MASTER_DETAIL',
  BUBBLE_CHART = '[WIDGET] BUBBLE_CHART',
  COLUMN_BAR = '[WIDGET] COLUMN_BAR',
  COLUMN_BAR_DOUBLE_BAR = '[WIDGET] COLUMN_BAR_DOUBLE_BAR',
  COLUMN_BAR_MACRO_MICRO = '[WIDGET] COLUMN_BAR_MACRO_MICRO',
  COLUMN_BAR_SEGMENTED = '[WIDGET] COLUMN_BAR_SEGMENTED',
  CONFIG_INPUT_FIELD_USER_DEFINED = '[WIDGET] CONFIG_INPUT_FIELD_USER DEFINED',
  CONFIG_TABLE = '[WIDGET] CONFIG_TABLE',
  CUSTOM = '[WIDGET] CUSTOM',
  CUSTOM_ACTION = '[WIDGET] CUSTOM_ACTION',
  DONUT = '[WIDGET] DONUT',
  DONUT_VARIANT = '[WIDGET] DONUT_VARIANT',
  FULL_TABLE = '[WIDGET] FULL_TABLE',
  GAUGE = '[WIDGET] GAUGE',
  GAUGE_SEVERITY_LEVEL = '[WIDGET] GAUGE_SEVERITY_LEVEL',
  GAUGE_SEVERITY_SCORE = '[WIDGET] GAUGE_SEVERITY_SCORE',
  LINE = '[WIDGET] LINE',
  PIE = '[WIDGET] PIE',
  POLAR_AREA = '[WIDGET] POLAR_AREA',
  POSITIVE_NEGATIVE_AREA = '[WIDGET] POSITIVE_NEGATIVE_AREA',
  READ_ONLY_TEXT = '[WIDGET] READ_ONLY_TEXT',
  SCATTER = '[WIDGET] SCATTER',
  SIMPLE_LIST = '[WIDGET] SIMPLE_LIST',
  SIMPLE_LIST_RANKED = '[WIDGET] SIMPLE_LIST_RANKED',
  SINGLE_BAR_HIGHLIGHT_MAX = '[WIDGET] SINGLE_BAR_HIGHLIGHT_MAX',
  STEP_LINE = '[WIDGET] STEP_LINE',
  SUMMARY_SLOT = '[WIDGET] SLOT',
  SUMMARY_STATISTICS = '[WIDGET] SUMMARY_STATISTICS',
  TABLE = '[WIDGET] TABLE',
  WATERFALL = '[WIDGET] WATERFALL',
}

export enum ViewType {
  custom = 'custom',
  dashboard = 'dashboard',
  report = 'report',
  single = 'single',
  table = 'table',
}
