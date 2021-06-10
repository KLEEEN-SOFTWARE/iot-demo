import { gql } from 'apollo-server-express';

export const entitySchema = gql`
  input AutoCompleteByEntityInput {
    entity: String!
    offset: Int
    totalCount: Int
    limit: Int
  }

  input AddEntityParent {
    id: String!
    entity: String
  }

  input AddEntityInput {
    entity: JSON
    parent: AddEntityParent
  }

  input ListEntityInput {
    entity: JSON
  }

  type AutoCompleteOptionShape {
    displayValue: String!
    value: String
    id: String
  }

  type AutoCompleteResponse {
    data: [AutoCompleteOptionShape]
    errorMessage: String
  }

  extend type Query {
    # Timestamp
    add96096(input: AddEntityInput): GenericEntity
    list96096(input: ListEntityInput): GenericEntity
    get96096(id: String): GenericEntity
    delete96096(id: String): GenericEntity
    update96096(entity: JSON): GenericEntity
    autoComplete96096(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Event
    add120420(input: AddEntityInput): GenericEntity
    list120420(input: ListEntityInput): GenericEntity
    get120420(id: String): GenericEntity
    delete120420(id: String): GenericEntity
    update120420(entity: JSON): GenericEntity
    autoComplete120420(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Node
    add120421(input: AddEntityInput): GenericEntity
    list120421(input: ListEntityInput): GenericEntity
    get120421(id: String): GenericEntity
    delete120421(id: String): GenericEntity
    update120421(entity: JSON): GenericEntity
    autoComplete120421(input: AutoCompleteByEntityInput): AutoCompleteResponse
    reboot120421(input: CustomActionArgs): GenericEntity

    # NodeOverallStatus
    add120422(input: AddEntityInput): GenericEntity
    list120422(input: ListEntityInput): GenericEntity
    get120422(id: String): GenericEntity
    delete120422(id: String): GenericEntity
    update120422(entity: JSON): GenericEntity
    autoComplete120422(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # NodeStatus
    add120423(input: AddEntityInput): GenericEntity
    list120423(input: ListEntityInput): GenericEntity
    get120423(id: String): GenericEntity
    delete120423(id: String): GenericEntity
    update120423(entity: JSON): GenericEntity
    autoComplete120423(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SiteMap
    add120424(input: AddEntityInput): GenericEntity
    list120424(input: ListEntityInput): GenericEntity
    get120424(id: String): GenericEntity
    delete120424(id: String): GenericEntity
    update120424(entity: JSON): GenericEntity
    autoComplete120424(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # Sensor
    add120425(input: AddEntityInput): GenericEntity
    list120425(input: ListEntityInput): GenericEntity
    get120425(id: String): GenericEntity
    delete120425(id: String): GenericEntity
    update120425(entity: JSON): GenericEntity
    autoComplete120425(input: AutoCompleteByEntityInput): AutoCompleteResponse
    reboot120425(input: CustomActionArgs): GenericEntity

    # SensorOverallStatus
    add120426(input: AddEntityInput): GenericEntity
    list120426(input: ListEntityInput): GenericEntity
    get120426(id: String): GenericEntity
    delete120426(id: String): GenericEntity
    update120426(entity: JSON): GenericEntity
    autoComplete120426(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SensorStatus
    add120427(input: AddEntityInput): GenericEntity
    list120427(input: ListEntityInput): GenericEntity
    get120427(id: String): GenericEntity
    delete120427(id: String): GenericEntity
    update120427(entity: JSON): GenericEntity
    autoComplete120427(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SiteStatus
    add120428(input: AddEntityInput): GenericEntity
    list120428(input: ListEntityInput): GenericEntity
    get120428(id: String): GenericEntity
    delete120428(id: String): GenericEntity
    update120428(entity: JSON): GenericEntity
    autoComplete120428(input: AutoCompleteByEntityInput): AutoCompleteResponse

    # SystemHealth
    add120429(input: AddEntityInput): GenericEntity
    list120429(input: ListEntityInput): GenericEntity
    get120429(id: String): GenericEntity
    delete120429(id: String): GenericEntity
    update120429(entity: JSON): GenericEntity
    autoComplete120429(input: AutoCompleteByEntityInput): AutoCompleteResponse
  }
`;
