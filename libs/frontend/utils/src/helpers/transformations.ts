import { AggregationType, Attribute, FilterForNumerics } from '@kleeen/types';

export const transformationsAvailableForFilterIn = [
  AggregationType.SelfMulti,
  AggregationType.SelfSingle,
  AggregationType.NoAggregation,
  AggregationType.Max,
  AggregationType.Min,
  AggregationType.Latest,
  AggregationType.Oldest,
];
export const isATransformationsAvailableForFilterIn = (transformation: AggregationType) =>
  transformationsAvailableForFilterIn.includes(transformation);
export const countTransformations = [AggregationType.CountTotal, AggregationType.CountUnique];
export const isCountTransformations = (transformation: AggregationType) =>
  countTransformations.includes(transformation);
export const isNumericType = (attr: Attribute) =>
  attr?.format?.isNumericType || FilterForNumerics.includes(attr?.statisticalType);
