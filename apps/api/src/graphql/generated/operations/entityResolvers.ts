import { IResolvers } from 'apollo-server-express';
import { DispatchCustomActionResults } from '../../../types';

export const entityResolvers: IResolvers = {
  Query: {
    // Timestamp Resolvers
    add96096: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api96096.addEntity(input.entity, input.parent),
    }),
    list96096: (_parent, args, { dataSources }) => ({ data: dataSources.api96096.listEntity(args) }),
    get96096: (_parent, { id }, { dataSources }) => ({ data: dataSources.api96096.getEntity(id) }),
    delete96096: (_parent, { id }, { dataSources }) => ({ data: dataSources.api96096.deleteEntity(id) }),
    update96096: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api96096.updateEntity(entity),
    }),
    autoComplete96096: (_parent, params, { dataSources }) => ({
      data: dataSources.api96096.getAutoCompleteValues(params.input),
    }),

    // ZDeleteCountry Resolvers
    add96098: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api96098.addEntity(input.entity, input.parent),
    }),
    list96098: (_parent, args, { dataSources }) => ({ data: dataSources.api96098.listEntity(args) }),
    get96098: (_parent, { id }, { dataSources }) => ({ data: dataSources.api96098.getEntity(id) }),
    delete96098: (_parent, { id }, { dataSources }) => ({ data: dataSources.api96098.deleteEntity(id) }),
    update96098: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api96098.updateEntity(entity),
    }),
    autoComplete96098: (_parent, params, { dataSources }) => ({
      data: dataSources.api96098.getAutoCompleteValues(params.input),
    }),

    // ZDeletePopulation Resolvers
    add96099: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api96099.addEntity(input.entity, input.parent),
    }),
    list96099: (_parent, args, { dataSources }) => ({ data: dataSources.api96099.listEntity(args) }),
    get96099: (_parent, { id }, { dataSources }) => ({ data: dataSources.api96099.getEntity(id) }),
    delete96099: (_parent, { id }, { dataSources }) => ({ data: dataSources.api96099.deleteEntity(id) }),
    update96099: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api96099.updateEntity(entity),
    }),
    autoComplete96099: (_parent, params, { dataSources }) => ({
      data: dataSources.api96099.getAutoCompleteValues(params.input),
    }),

    // ZDeleteGdp Resolvers
    add96100: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api96100.addEntity(input.entity, input.parent),
    }),
    list96100: (_parent, args, { dataSources }) => ({ data: dataSources.api96100.listEntity(args) }),
    get96100: (_parent, { id }, { dataSources }) => ({ data: dataSources.api96100.getEntity(id) }),
    delete96100: (_parent, { id }, { dataSources }) => ({ data: dataSources.api96100.deleteEntity(id) }),
    update96100: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api96100.updateEntity(entity),
    }),
    autoComplete96100: (_parent, params, { dataSources }) => ({
      data: dataSources.api96100.getAutoCompleteValues(params.input),
    }),

    // Event Resolvers
    add120420: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120420.addEntity(input.entity, input.parent),
    }),
    list120420: (_parent, args, { dataSources }) => ({ data: dataSources.api120420.listEntity(args) }),
    get120420: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120420.getEntity(id) }),
    delete120420: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120420.deleteEntity(id) }),
    update120420: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120420.updateEntity(entity),
    }),
    autoComplete120420: (_parent, params, { dataSources }) => ({
      data: dataSources.api120420.getAutoCompleteValues(params.input),
    }),

    // Node Resolvers
    add120421: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120421.addEntity(input.entity, input.parent),
    }),
    list120421: (_parent, args, { dataSources }) => ({ data: dataSources.api120421.listEntity(args) }),
    get120421: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120421.getEntity(id) }),
    delete120421: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120421.deleteEntity(id) }),
    update120421: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120421.updateEntity(entity),
    }),
    autoComplete120421: (_parent, params, { dataSources }) => ({
      data: dataSources.api120421.getAutoCompleteValues(params.input),
    }),
    reboot120421: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api120421.customAction_reboot(params.input),

    // NodeOverallStatus Resolvers
    add120422: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120422.addEntity(input.entity, input.parent),
    }),
    list120422: (_parent, args, { dataSources }) => ({ data: dataSources.api120422.listEntity(args) }),
    get120422: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120422.getEntity(id) }),
    delete120422: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120422.deleteEntity(id) }),
    update120422: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120422.updateEntity(entity),
    }),
    autoComplete120422: (_parent, params, { dataSources }) => ({
      data: dataSources.api120422.getAutoCompleteValues(params.input),
    }),

    // NodeStatus Resolvers
    add120423: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120423.addEntity(input.entity, input.parent),
    }),
    list120423: (_parent, args, { dataSources }) => ({ data: dataSources.api120423.listEntity(args) }),
    get120423: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120423.getEntity(id) }),
    delete120423: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120423.deleteEntity(id) }),
    update120423: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120423.updateEntity(entity),
    }),
    autoComplete120423: (_parent, params, { dataSources }) => ({
      data: dataSources.api120423.getAutoCompleteValues(params.input),
    }),

    // SiteMap Resolvers
    add120424: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120424.addEntity(input.entity, input.parent),
    }),
    list120424: (_parent, args, { dataSources }) => ({ data: dataSources.api120424.listEntity(args) }),
    get120424: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120424.getEntity(id) }),
    delete120424: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120424.deleteEntity(id) }),
    update120424: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120424.updateEntity(entity),
    }),
    autoComplete120424: (_parent, params, { dataSources }) => ({
      data: dataSources.api120424.getAutoCompleteValues(params.input),
    }),

    // Sensor Resolvers
    add120425: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120425.addEntity(input.entity, input.parent),
    }),
    list120425: (_parent, args, { dataSources }) => ({ data: dataSources.api120425.listEntity(args) }),
    get120425: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120425.getEntity(id) }),
    delete120425: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120425.deleteEntity(id) }),
    update120425: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120425.updateEntity(entity),
    }),
    autoComplete120425: (_parent, params, { dataSources }) => ({
      data: dataSources.api120425.getAutoCompleteValues(params.input),
    }),
    reboot120425: (_parent, params, { dataSources }): DispatchCustomActionResults =>
      dataSources.api120425.customAction_reboot(params.input),

    // SensorOverallStatus Resolvers
    add120426: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120426.addEntity(input.entity, input.parent),
    }),
    list120426: (_parent, args, { dataSources }) => ({ data: dataSources.api120426.listEntity(args) }),
    get120426: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120426.getEntity(id) }),
    delete120426: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120426.deleteEntity(id) }),
    update120426: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120426.updateEntity(entity),
    }),
    autoComplete120426: (_parent, params, { dataSources }) => ({
      data: dataSources.api120426.getAutoCompleteValues(params.input),
    }),

    // SensorStatus Resolvers
    add120427: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120427.addEntity(input.entity, input.parent),
    }),
    list120427: (_parent, args, { dataSources }) => ({ data: dataSources.api120427.listEntity(args) }),
    get120427: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120427.getEntity(id) }),
    delete120427: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120427.deleteEntity(id) }),
    update120427: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120427.updateEntity(entity),
    }),
    autoComplete120427: (_parent, params, { dataSources }) => ({
      data: dataSources.api120427.getAutoCompleteValues(params.input),
    }),

    // SiteStatus Resolvers
    add120428: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120428.addEntity(input.entity, input.parent),
    }),
    list120428: (_parent, args, { dataSources }) => ({ data: dataSources.api120428.listEntity(args) }),
    get120428: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120428.getEntity(id) }),
    delete120428: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120428.deleteEntity(id) }),
    update120428: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120428.updateEntity(entity),
    }),
    autoComplete120428: (_parent, params, { dataSources }) => ({
      data: dataSources.api120428.getAutoCompleteValues(params.input),
    }),

    // SystemHealth Resolvers
    add120429: (_parent, { input }, { dataSources }) => ({
      data: dataSources.api120429.addEntity(input.entity, input.parent),
    }),
    list120429: (_parent, args, { dataSources }) => ({ data: dataSources.api120429.listEntity(args) }),
    get120429: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120429.getEntity(id) }),
    delete120429: (_parent, { id }, { dataSources }) => ({ data: dataSources.api120429.deleteEntity(id) }),
    update120429: (_parent, { entity }, { dataSources }) => ({
      data: dataSources.api120429.updateEntity(entity),
    }),
    autoComplete120429: (_parent, params, { dataSources }) => ({
      data: dataSources.api120429.getAutoCompleteValues(params.input),
    }),
  },
};
