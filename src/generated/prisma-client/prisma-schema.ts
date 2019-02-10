export const typeDefs = /* GraphQL */ `type AggregateApartment {
  count: Int!
}

type AggregateIWasntThere {
  count: Int!
}

type AggregatePlace {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Apartment {
  id: ID!
  name: String!
  image: String
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ApartmentConnection {
  pageInfo: PageInfo!
  edges: [ApartmentEdge]!
  aggregate: AggregateApartment!
}

input ApartmentCreateInput {
  name: String!
  image: String
  places: PlaceCreateManyWithoutApartmentInput
}

input ApartmentCreateOneInput {
  create: ApartmentCreateInput
  connect: ApartmentWhereUniqueInput
}

input ApartmentCreateOneWithoutPlacesInput {
  create: ApartmentCreateWithoutPlacesInput
  connect: ApartmentWhereUniqueInput
}

input ApartmentCreateWithoutPlacesInput {
  name: String!
  image: String
}

type ApartmentEdge {
  node: Apartment!
  cursor: String!
}

enum ApartmentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  image_ASC
  image_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ApartmentPreviousValues {
  id: ID!
  name: String!
  image: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ApartmentSubscriptionPayload {
  mutation: MutationType!
  node: Apartment
  updatedFields: [String!]
  previousValues: ApartmentPreviousValues
}

input ApartmentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ApartmentWhereInput
  AND: [ApartmentSubscriptionWhereInput!]
  OR: [ApartmentSubscriptionWhereInput!]
  NOT: [ApartmentSubscriptionWhereInput!]
}

input ApartmentUpdateDataInput {
  name: String
  image: String
  places: PlaceUpdateManyWithoutApartmentInput
}

input ApartmentUpdateInput {
  name: String
  image: String
  places: PlaceUpdateManyWithoutApartmentInput
}

input ApartmentUpdateManyMutationInput {
  name: String
  image: String
}

input ApartmentUpdateOneRequiredInput {
  create: ApartmentCreateInput
  update: ApartmentUpdateDataInput
  upsert: ApartmentUpsertNestedInput
  connect: ApartmentWhereUniqueInput
}

input ApartmentUpdateOneRequiredWithoutPlacesInput {
  create: ApartmentCreateWithoutPlacesInput
  update: ApartmentUpdateWithoutPlacesDataInput
  upsert: ApartmentUpsertWithoutPlacesInput
  connect: ApartmentWhereUniqueInput
}

input ApartmentUpdateWithoutPlacesDataInput {
  name: String
  image: String
}

input ApartmentUpsertNestedInput {
  update: ApartmentUpdateDataInput!
  create: ApartmentCreateInput!
}

input ApartmentUpsertWithoutPlacesInput {
  update: ApartmentUpdateWithoutPlacesDataInput!
  create: ApartmentCreateWithoutPlacesInput!
}

input ApartmentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  places_every: PlaceWhereInput
  places_some: PlaceWhereInput
  places_none: PlaceWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ApartmentWhereInput!]
  OR: [ApartmentWhereInput!]
  NOT: [ApartmentWhereInput!]
}

input ApartmentWhereUniqueInput {
  id: ID
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type IWasntThere {
  id: ID!
  date: DateTime!
  user: User!
  apartment: Apartment!
}

type IWasntThereConnection {
  pageInfo: PageInfo!
  edges: [IWasntThereEdge]!
  aggregate: AggregateIWasntThere!
}

input IWasntThereCreateInput {
  date: DateTime!
  user: UserCreateOneInput!
  apartment: ApartmentCreateOneInput!
}

type IWasntThereEdge {
  node: IWasntThere!
  cursor: String!
}

enum IWasntThereOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type IWasntTherePreviousValues {
  id: ID!
  date: DateTime!
}

type IWasntThereSubscriptionPayload {
  mutation: MutationType!
  node: IWasntThere
  updatedFields: [String!]
  previousValues: IWasntTherePreviousValues
}

input IWasntThereSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IWasntThereWhereInput
  AND: [IWasntThereSubscriptionWhereInput!]
  OR: [IWasntThereSubscriptionWhereInput!]
  NOT: [IWasntThereSubscriptionWhereInput!]
}

input IWasntThereUpdateInput {
  date: DateTime
  user: UserUpdateOneRequiredInput
  apartment: ApartmentUpdateOneRequiredInput
}

input IWasntThereUpdateManyMutationInput {
  date: DateTime
}

input IWasntThereWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  user: UserWhereInput
  apartment: ApartmentWhereInput
  AND: [IWasntThereWhereInput!]
  OR: [IWasntThereWhereInput!]
  NOT: [IWasntThereWhereInput!]
}

input IWasntThereWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createApartment(data: ApartmentCreateInput!): Apartment!
  updateApartment(data: ApartmentUpdateInput!, where: ApartmentWhereUniqueInput!): Apartment
  updateManyApartments(data: ApartmentUpdateManyMutationInput!, where: ApartmentWhereInput): BatchPayload!
  upsertApartment(where: ApartmentWhereUniqueInput!, create: ApartmentCreateInput!, update: ApartmentUpdateInput!): Apartment!
  deleteApartment(where: ApartmentWhereUniqueInput!): Apartment
  deleteManyApartments(where: ApartmentWhereInput): BatchPayload!
  createIWasntThere(data: IWasntThereCreateInput!): IWasntThere!
  updateIWasntThere(data: IWasntThereUpdateInput!, where: IWasntThereWhereUniqueInput!): IWasntThere
  updateManyIWasntTheres(data: IWasntThereUpdateManyMutationInput!, where: IWasntThereWhereInput): BatchPayload!
  upsertIWasntThere(where: IWasntThereWhereUniqueInput!, create: IWasntThereCreateInput!, update: IWasntThereUpdateInput!): IWasntThere!
  deleteIWasntThere(where: IWasntThereWhereUniqueInput!): IWasntThere
  deleteManyIWasntTheres(where: IWasntThereWhereInput): BatchPayload!
  createPlace(data: PlaceCreateInput!): Place!
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
  updateManyPlaces(data: PlaceUpdateManyMutationInput!, where: PlaceWhereInput): BatchPayload!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
  deletePlace(where: PlaceWhereUniqueInput!): Place
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Place {
  id: ID!
  name: String!
  difficulty: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
  apartment: Apartment!
}

type PlaceConnection {
  pageInfo: PageInfo!
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  name: String!
  difficulty: Int!
  apartment: ApartmentCreateOneWithoutPlacesInput!
}

input PlaceCreateManyWithoutApartmentInput {
  create: [PlaceCreateWithoutApartmentInput!]
  connect: [PlaceWhereUniqueInput!]
}

input PlaceCreateWithoutApartmentInput {
  name: String!
  difficulty: Int!
}

type PlaceEdge {
  node: Place!
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  difficulty_ASC
  difficulty_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PlacePreviousValues {
  id: ID!
  name: String!
  difficulty: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input PlaceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  difficulty: Int
  difficulty_not: Int
  difficulty_in: [Int!]
  difficulty_not_in: [Int!]
  difficulty_lt: Int
  difficulty_lte: Int
  difficulty_gt: Int
  difficulty_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PlaceScalarWhereInput!]
  OR: [PlaceScalarWhereInput!]
  NOT: [PlaceScalarWhereInput!]
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PlaceWhereInput
  AND: [PlaceSubscriptionWhereInput!]
  OR: [PlaceSubscriptionWhereInput!]
  NOT: [PlaceSubscriptionWhereInput!]
}

input PlaceUpdateInput {
  name: String
  difficulty: Int
  apartment: ApartmentUpdateOneRequiredWithoutPlacesInput
}

input PlaceUpdateManyDataInput {
  name: String
  difficulty: Int
}

input PlaceUpdateManyMutationInput {
  name: String
  difficulty: Int
}

input PlaceUpdateManyWithoutApartmentInput {
  create: [PlaceCreateWithoutApartmentInput!]
  delete: [PlaceWhereUniqueInput!]
  connect: [PlaceWhereUniqueInput!]
  set: [PlaceWhereUniqueInput!]
  disconnect: [PlaceWhereUniqueInput!]
  update: [PlaceUpdateWithWhereUniqueWithoutApartmentInput!]
  upsert: [PlaceUpsertWithWhereUniqueWithoutApartmentInput!]
  deleteMany: [PlaceScalarWhereInput!]
  updateMany: [PlaceUpdateManyWithWhereNestedInput!]
}

input PlaceUpdateManyWithWhereNestedInput {
  where: PlaceScalarWhereInput!
  data: PlaceUpdateManyDataInput!
}

input PlaceUpdateWithoutApartmentDataInput {
  name: String
  difficulty: Int
}

input PlaceUpdateWithWhereUniqueWithoutApartmentInput {
  where: PlaceWhereUniqueInput!
  data: PlaceUpdateWithoutApartmentDataInput!
}

input PlaceUpsertWithWhereUniqueWithoutApartmentInput {
  where: PlaceWhereUniqueInput!
  update: PlaceUpdateWithoutApartmentDataInput!
  create: PlaceCreateWithoutApartmentInput!
}

input PlaceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  difficulty: Int
  difficulty_not: Int
  difficulty_in: [Int!]
  difficulty_not_in: [Int!]
  difficulty_lt: Int
  difficulty_lte: Int
  difficulty_gt: Int
  difficulty_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  apartment: ApartmentWhereInput
  AND: [PlaceWhereInput!]
  OR: [PlaceWhereInput!]
  NOT: [PlaceWhereInput!]
}

input PlaceWhereUniqueInput {
  id: ID
}

type Query {
  apartment(where: ApartmentWhereUniqueInput!): Apartment
  apartments(where: ApartmentWhereInput, orderBy: ApartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Apartment]!
  apartmentsConnection(where: ApartmentWhereInput, orderBy: ApartmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApartmentConnection!
  iWasntThere(where: IWasntThereWhereUniqueInput!): IWasntThere
  iWasntTheres(where: IWasntThereWhereInput, orderBy: IWasntThereOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [IWasntThere]!
  iWasntTheresConnection(where: IWasntThereWhereInput, orderBy: IWasntThereOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IWasntThereConnection!
  place(where: PlaceWhereUniqueInput!): Place
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  apartment(where: ApartmentSubscriptionWhereInput): ApartmentSubscriptionPayload
  iWasntThere(where: IWasntThereSubscriptionWhereInput): IWasntThereSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
}

input UserUpdateInput {
  email: String
  password: String
  name: String
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  name: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`