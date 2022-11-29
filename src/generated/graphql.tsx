import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  DateTime: any
  Hex: any
  Json: any
  Long: any
  RGBAHue: any
  RGBATransparency: any
  RichTextAST: any
}

export type About = Node & {
  __typename?: 'About'
  about?: Maybe<Scalars['String']>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<About>
  /** List of About versions */
  history: Array<Version>
  howWorks: Scalars['String']
  /** The unique identifier */
  id: Scalars['ID']
  missao?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  objetivo?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  valores?: Maybe<Scalars['String']>
  visao?: Maybe<Scalars['String']>
}

export type AboutCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type AboutDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type AboutHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type AboutPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type AboutScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type AboutUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type AboutConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AboutWhereUniqueInput
}

/** A connection to a list of items. */
export type AboutConnection = {
  __typename?: 'AboutConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AboutEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AboutCreateInput = {
  about?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  howWorks: Scalars['String']
  missao?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  objetivo?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  valores?: InputMaybe<Scalars['String']>
  visao?: InputMaybe<Scalars['String']>
}

export type AboutCreateManyInlineInput = {
  /** Connect multiple existing About documents */
  connect?: InputMaybe<Array<AboutWhereUniqueInput>>
  /** Create and connect multiple existing About documents */
  create?: InputMaybe<Array<AboutCreateInput>>
}

export type AboutCreateOneInlineInput = {
  /** Connect one existing About document */
  connect?: InputMaybe<AboutWhereUniqueInput>
  /** Create and connect one About document */
  create?: InputMaybe<AboutCreateInput>
}

/** An edge in a connection. */
export type AboutEdge = {
  __typename?: 'AboutEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: About
}

/** Identifies documents */
export type AboutManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  about?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  about_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  about_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  about_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  about_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  about_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  about_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  about_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AboutWhereStageInput>
  documentInStages_none?: InputMaybe<AboutWhereStageInput>
  documentInStages_some?: InputMaybe<AboutWhereStageInput>
  howWorks?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  howWorks_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  howWorks_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  howWorks_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  howWorks_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  howWorks_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  howWorks_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  howWorks_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  howWorks_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  howWorks_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  missao?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  missao_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  missao_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  missao_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  missao_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  missao_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  missao_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  missao_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  missao_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  missao_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  objetivo?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  objetivo_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  objetivo_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  objetivo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  objetivo_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  objetivo_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  objetivo_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  objetivo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  objetivo_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  objetivo_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  valores?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  valores_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  valores_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  valores_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  valores_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  valores_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  valores_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  valores_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  valores_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  valores_starts_with?: InputMaybe<Scalars['String']>
  visao?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  visao_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  visao_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  visao_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  visao_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  visao_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  visao_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  visao_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  visao_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  visao_starts_with?: InputMaybe<Scalars['String']>
}

export enum AboutOrderByInput {
  AboutAsc = 'about_ASC',
  AboutDesc = 'about_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  HowWorksAsc = 'howWorks_ASC',
  HowWorksDesc = 'howWorks_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MissaoAsc = 'missao_ASC',
  MissaoDesc = 'missao_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjetivoAsc = 'objetivo_ASC',
  ObjetivoDesc = 'objetivo_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValoresAsc = 'valores_ASC',
  ValoresDesc = 'valores_DESC',
  VisaoAsc = 'visao_ASC',
  VisaoDesc = 'visao_DESC'
}

export type AboutUpdateInput = {
  about?: InputMaybe<Scalars['String']>
  howWorks?: InputMaybe<Scalars['String']>
  missao?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  objetivo?: InputMaybe<Scalars['String']>
  valores?: InputMaybe<Scalars['String']>
  visao?: InputMaybe<Scalars['String']>
}

export type AboutUpdateManyInlineInput = {
  /** Connect multiple existing About documents */
  connect?: InputMaybe<Array<AboutConnectInput>>
  /** Create and connect multiple About documents */
  create?: InputMaybe<Array<AboutCreateInput>>
  /** Delete multiple About documents */
  delete?: InputMaybe<Array<AboutWhereUniqueInput>>
  /** Disconnect multiple About documents */
  disconnect?: InputMaybe<Array<AboutWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing About documents */
  set?: InputMaybe<Array<AboutWhereUniqueInput>>
  /** Update multiple About documents */
  update?: InputMaybe<Array<AboutUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple About documents */
  upsert?: InputMaybe<Array<AboutUpsertWithNestedWhereUniqueInput>>
}

export type AboutUpdateManyInput = {
  about?: InputMaybe<Scalars['String']>
  howWorks?: InputMaybe<Scalars['String']>
  missao?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  objetivo?: InputMaybe<Scalars['String']>
  valores?: InputMaybe<Scalars['String']>
  visao?: InputMaybe<Scalars['String']>
}

export type AboutUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutUpdateManyInput
  /** Document search */
  where: AboutWhereInput
}

export type AboutUpdateOneInlineInput = {
  /** Connect existing About document */
  connect?: InputMaybe<AboutWhereUniqueInput>
  /** Create and connect one About document */
  create?: InputMaybe<AboutCreateInput>
  /** Delete currently connected About document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected About document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single About document */
  update?: InputMaybe<AboutUpdateWithNestedWhereUniqueInput>
  /** Upsert single About document */
  upsert?: InputMaybe<AboutUpsertWithNestedWhereUniqueInput>
}

export type AboutUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutUpdateInput
  /** Unique document search */
  where: AboutWhereUniqueInput
}

export type AboutUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutCreateInput
  /** Update document if it exists */
  update: AboutUpdateInput
}

export type AboutUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutUpsertInput
  /** Unique document search */
  where: AboutWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AboutWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type AboutWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  about?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  about_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  about_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  about_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  about_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  about_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  about_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  about_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  about_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  about_starts_with?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AboutWhereStageInput>
  documentInStages_none?: InputMaybe<AboutWhereStageInput>
  documentInStages_some?: InputMaybe<AboutWhereStageInput>
  howWorks?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  howWorks_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  howWorks_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  howWorks_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  howWorks_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  howWorks_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  howWorks_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  howWorks_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  howWorks_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  howWorks_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  missao?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  missao_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  missao_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  missao_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  missao_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  missao_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  missao_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  missao_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  missao_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  missao_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  objetivo?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  objetivo_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  objetivo_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  objetivo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  objetivo_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  objetivo_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  objetivo_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  objetivo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  objetivo_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  objetivo_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  valores?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  valores_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  valores_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  valores_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  valores_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  valores_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  valores_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  valores_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  valores_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  valores_starts_with?: InputMaybe<Scalars['String']>
  visao?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  visao_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  visao_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  visao_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  visao_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  visao_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  visao_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  visao_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  visao_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  visao_starts_with?: InputMaybe<Scalars['String']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AboutWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AboutWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References About record uniquely */
export type AboutWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The file name */
  fileName: Scalars['String']
  /** The file handle */
  handle: Scalars['String']
  /** The height of the file */
  height?: Maybe<Scalars['Float']>
  /** List of Asset versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  imageBanner: Array<Banner>
  imageHowWork: Array<HowWork>
  imagePartnership: Array<Partnership>
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** The file size */
  size?: Maybe<Scalars['Float']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']
  /** The file width */
  width?: Maybe<Scalars['Float']>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetImageBannerArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<BannerOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BannerWhereInput>
}

/** Asset system model */
export type AssetImageHowWorkArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<HowWorkOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<HowWorkWhereInput>
}

/** Asset system model */
export type AssetImagePartnershipArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<PartnershipOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PartnershipWhereInput>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  imageBanner?: InputMaybe<BannerCreateManyInlineInput>
  imageHowWork?: InputMaybe<HowWorkCreateManyInlineInput>
  imagePartnership?: InputMaybe<PartnershipCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  fileName: Scalars['String']
  handle: Scalars['String']
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageBanner_every?: InputMaybe<BannerWhereInput>
  imageBanner_none?: InputMaybe<BannerWhereInput>
  imageBanner_some?: InputMaybe<BannerWhereInput>
  imageHowWork_every?: InputMaybe<HowWorkWhereInput>
  imageHowWork_none?: InputMaybe<HowWorkWhereInput>
  imageHowWork_some?: InputMaybe<HowWorkWhereInput>
  imagePartnership_every?: InputMaybe<PartnershipWhereInput>
  imagePartnership_none?: InputMaybe<PartnershipWhereInput>
  imagePartnership_some?: InputMaybe<PartnershipWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>
}

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  imageBanner?: InputMaybe<BannerUpdateManyInlineInput>
  imageHowWork?: InputMaybe<HowWorkUpdateManyInlineInput>
  imagePartnership?: InputMaybe<PartnershipUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  mimeType?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Float']>
  width?: InputMaybe<Scalars['Float']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>
  height?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  imageBanner_every?: InputMaybe<BannerWhereInput>
  imageBanner_none?: InputMaybe<BannerWhereInput>
  imageBanner_some?: InputMaybe<BannerWhereInput>
  imageHowWork_every?: InputMaybe<HowWorkWhereInput>
  imageHowWork_none?: InputMaybe<HowWorkWhereInput>
  imageHowWork_some?: InputMaybe<HowWorkWhereInput>
  imagePartnership_every?: InputMaybe<PartnershipWhereInput>
  imagePartnership_none?: InputMaybe<PartnershipWhereInput>
  imagePartnership_some?: InputMaybe<PartnershipWhereInput>
  mimeType?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  width?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Banner = Node & {
  __typename?: 'Banner'
  button?: Maybe<Button>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Banner>
  /** List of Banner versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  image?: Maybe<Asset>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  subtitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type BannerButtonArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type BannerCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type BannerDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type BannerHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type BannerImageArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type BannerPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type BannerScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type BannerUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type BannerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: BannerWhereUniqueInput
}

/** A connection to a list of items. */
export type BannerConnection = {
  __typename?: 'BannerConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<BannerEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type BannerCreateInput = {
  button?: InputMaybe<ButtonCreateOneInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  image?: InputMaybe<AssetCreateOneInlineInput>
  subtitle?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type BannerCreateManyInlineInput = {
  /** Connect multiple existing Banner documents */
  connect?: InputMaybe<Array<BannerWhereUniqueInput>>
  /** Create and connect multiple existing Banner documents */
  create?: InputMaybe<Array<BannerCreateInput>>
}

export type BannerCreateOneInlineInput = {
  /** Connect one existing Banner document */
  connect?: InputMaybe<BannerWhereUniqueInput>
  /** Create and connect one Banner document */
  create?: InputMaybe<BannerCreateInput>
}

/** An edge in a connection. */
export type BannerEdge = {
  __typename?: 'BannerEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Banner
}

/** Identifies documents */
export type BannerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BannerWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BannerWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BannerWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  button?: InputMaybe<ButtonWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<BannerWhereStageInput>
  documentInStages_none?: InputMaybe<BannerWhereStageInput>
  documentInStages_some?: InputMaybe<BannerWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  subtitle?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum BannerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BannerUpdateInput = {
  button?: InputMaybe<ButtonUpdateOneInlineInput>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  subtitle?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type BannerUpdateManyInlineInput = {
  /** Connect multiple existing Banner documents */
  connect?: InputMaybe<Array<BannerConnectInput>>
  /** Create and connect multiple Banner documents */
  create?: InputMaybe<Array<BannerCreateInput>>
  /** Delete multiple Banner documents */
  delete?: InputMaybe<Array<BannerWhereUniqueInput>>
  /** Disconnect multiple Banner documents */
  disconnect?: InputMaybe<Array<BannerWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Banner documents */
  set?: InputMaybe<Array<BannerWhereUniqueInput>>
  /** Update multiple Banner documents */
  update?: InputMaybe<Array<BannerUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Banner documents */
  upsert?: InputMaybe<Array<BannerUpsertWithNestedWhereUniqueInput>>
}

export type BannerUpdateManyInput = {
  subtitle?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type BannerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BannerUpdateManyInput
  /** Document search */
  where: BannerWhereInput
}

export type BannerUpdateOneInlineInput = {
  /** Connect existing Banner document */
  connect?: InputMaybe<BannerWhereUniqueInput>
  /** Create and connect one Banner document */
  create?: InputMaybe<BannerCreateInput>
  /** Delete currently connected Banner document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Banner document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Banner document */
  update?: InputMaybe<BannerUpdateWithNestedWhereUniqueInput>
  /** Upsert single Banner document */
  upsert?: InputMaybe<BannerUpsertWithNestedWhereUniqueInput>
}

export type BannerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BannerUpdateInput
  /** Unique document search */
  where: BannerWhereUniqueInput
}

export type BannerUpsertInput = {
  /** Create document if it didn't exist */
  create: BannerCreateInput
  /** Update document if it exists */
  update: BannerUpdateInput
}

export type BannerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BannerUpsertInput
  /** Unique document search */
  where: BannerWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type BannerWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type BannerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BannerWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BannerWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BannerWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  button?: InputMaybe<ButtonWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<BannerWhereStageInput>
  documentInStages_none?: InputMaybe<BannerWhereStageInput>
  documentInStages_some?: InputMaybe<BannerWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  subtitle?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  subtitle_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type BannerWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BannerWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BannerWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BannerWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<BannerWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Banner record uniquely */
export type BannerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']
}

export type Button = {
  __typename?: 'Button'
  icon?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** text of the button */
  name: Scalars['String']
  order?: Maybe<Scalars['String']>
  /** System stage field */
  stage: Stage
  url: Scalars['String']
}

export type ButtonConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ButtonWhereUniqueInput
}

/** A connection to a list of items. */
export type ButtonConnection = {
  __typename?: 'ButtonConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ButtonEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ButtonCreateInput = {
  icon?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  order?: InputMaybe<Scalars['String']>
  url: Scalars['String']
}

export type ButtonCreateManyInlineInput = {
  /** Create and connect multiple existing Button documents */
  create?: InputMaybe<Array<ButtonCreateInput>>
}

export type ButtonCreateOneInlineInput = {
  /** Create and connect one Button document */
  create?: InputMaybe<ButtonCreateInput>
}

export type ButtonCreateWithPositionInput = {
  /** Document to create */
  data: ButtonCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type ButtonEdge = {
  __typename?: 'ButtonEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Button
}

/** Identifies documents */
export type ButtonManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ButtonWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ButtonWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ButtonWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  icon?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  icon_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  icon_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  icon_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  icon_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  icon_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  icon_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  icon_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  order_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  order_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  order_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  order_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  order_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  order_starts_with?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>
}

export enum ButtonOrderByInput {
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ButtonParent = Banner | Menu

export type ButtonParentConnectInput = {
  Banner?: InputMaybe<BannerConnectInput>
  Menu?: InputMaybe<MenuConnectInput>
}

export type ButtonParentCreateInput = {
  Banner?: InputMaybe<BannerCreateInput>
  Menu?: InputMaybe<MenuCreateInput>
}

export type ButtonParentCreateManyInlineInput = {
  /** Connect multiple existing ButtonParent documents */
  connect?: InputMaybe<Array<ButtonParentWhereUniqueInput>>
  /** Create and connect multiple existing ButtonParent documents */
  create?: InputMaybe<Array<ButtonParentCreateInput>>
}

export type ButtonParentCreateOneInlineInput = {
  /** Connect one existing ButtonParent document */
  connect?: InputMaybe<ButtonParentWhereUniqueInput>
  /** Create and connect one ButtonParent document */
  create?: InputMaybe<ButtonParentCreateInput>
}

export type ButtonParentUpdateInput = {
  Banner?: InputMaybe<BannerUpdateInput>
  Menu?: InputMaybe<MenuUpdateInput>
}

export type ButtonParentUpdateManyInlineInput = {
  /** Connect multiple existing ButtonParent documents */
  connect?: InputMaybe<Array<ButtonParentConnectInput>>
  /** Create and connect multiple ButtonParent documents */
  create?: InputMaybe<Array<ButtonParentCreateInput>>
  /** Delete multiple ButtonParent documents */
  delete?: InputMaybe<Array<ButtonParentWhereUniqueInput>>
  /** Disconnect multiple ButtonParent documents */
  disconnect?: InputMaybe<Array<ButtonParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ButtonParent documents */
  set?: InputMaybe<Array<ButtonParentWhereUniqueInput>>
  /** Update multiple ButtonParent documents */
  update?: InputMaybe<Array<ButtonParentUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ButtonParent documents */
  upsert?: InputMaybe<Array<ButtonParentUpsertWithNestedWhereUniqueInput>>
}

export type ButtonParentUpdateManyWithNestedWhereInput = {
  Banner?: InputMaybe<BannerUpdateManyWithNestedWhereInput>
  Menu?: InputMaybe<MenuUpdateManyWithNestedWhereInput>
}

export type ButtonParentUpdateOneInlineInput = {
  /** Connect existing ButtonParent document */
  connect?: InputMaybe<ButtonParentWhereUniqueInput>
  /** Create and connect one ButtonParent document */
  create?: InputMaybe<ButtonParentCreateInput>
  /** Delete currently connected ButtonParent document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected ButtonParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single ButtonParent document */
  update?: InputMaybe<ButtonParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single ButtonParent document */
  upsert?: InputMaybe<ButtonParentUpsertWithNestedWhereUniqueInput>
}

export type ButtonParentUpdateWithNestedWhereUniqueInput = {
  Banner?: InputMaybe<BannerUpdateWithNestedWhereUniqueInput>
  Menu?: InputMaybe<MenuUpdateWithNestedWhereUniqueInput>
}

export type ButtonParentUpsertWithNestedWhereUniqueInput = {
  Banner?: InputMaybe<BannerUpsertWithNestedWhereUniqueInput>
  Menu?: InputMaybe<MenuUpsertWithNestedWhereUniqueInput>
}

export type ButtonParentWhereInput = {
  Banner?: InputMaybe<BannerWhereInput>
  Menu?: InputMaybe<MenuWhereInput>
}

export type ButtonParentWhereUniqueInput = {
  Banner?: InputMaybe<BannerWhereUniqueInput>
  Menu?: InputMaybe<MenuWhereUniqueInput>
}

export type ButtonUpdateInput = {
  icon?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type ButtonUpdateManyInlineInput = {
  /** Create and connect multiple Button component instances */
  create?: InputMaybe<Array<ButtonCreateWithPositionInput>>
  /** Delete multiple Button documents */
  delete?: InputMaybe<Array<ButtonWhereUniqueInput>>
  /** Update multiple Button component instances */
  update?: InputMaybe<Array<ButtonUpdateWithNestedWhereUniqueAndPositionInput>>
  /** Upsert multiple Button component instances */
  upsert?: InputMaybe<Array<ButtonUpsertWithNestedWhereUniqueAndPositionInput>>
}

export type ButtonUpdateManyInput = {
  icon?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type ButtonUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ButtonUpdateManyInput
  /** Document search */
  where: ButtonWhereInput
}

export type ButtonUpdateOneInlineInput = {
  /** Create and connect one Button document */
  create?: InputMaybe<ButtonCreateInput>
  /** Delete currently connected Button document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Update single Button document */
  update?: InputMaybe<ButtonUpdateWithNestedWhereUniqueInput>
  /** Upsert single Button document */
  upsert?: InputMaybe<ButtonUpsertWithNestedWhereUniqueInput>
}

export type ButtonUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ButtonUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: ButtonWhereUniqueInput
}

export type ButtonUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ButtonUpdateInput
  /** Unique document search */
  where: ButtonWhereUniqueInput
}

export type ButtonUpsertInput = {
  /** Create document if it didn't exist */
  create: ButtonCreateInput
  /** Update document if it exists */
  update: ButtonUpdateInput
}

export type ButtonUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ButtonUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: ButtonWhereUniqueInput
}

export type ButtonUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ButtonUpsertInput
  /** Unique document search */
  where: ButtonWhereUniqueInput
}

/** Identifies documents */
export type ButtonWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ButtonWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ButtonWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ButtonWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  icon?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  icon_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  icon_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  icon_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  icon_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  icon_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  icon_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  icon_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  order_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  order_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  order_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  order_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  order_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  order_starts_with?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>
}

/** References Button record uniquely */
export type ButtonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']
  hex: Scalars['Hex']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>
  rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>
}

export type Contact = Node & {
  __typename?: 'Contact'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Contact>
  /** List of Contact versions */
  history: Array<Version>
  icon?: Maybe<Contacts>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  value: Scalars['String']
}

export type ContactCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type ContactDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type ContactHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type ContactPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type ContactScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ContactUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type ContactConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ContactWhereUniqueInput
}

/** A connection to a list of items. */
export type ContactConnection = {
  __typename?: 'ContactConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ContactEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ContactCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  icon?: InputMaybe<Contacts>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  value: Scalars['String']
}

export type ContactCreateManyInlineInput = {
  /** Connect multiple existing Contact documents */
  connect?: InputMaybe<Array<ContactWhereUniqueInput>>
  /** Create and connect multiple existing Contact documents */
  create?: InputMaybe<Array<ContactCreateInput>>
}

export type ContactCreateOneInlineInput = {
  /** Connect one existing Contact document */
  connect?: InputMaybe<ContactWhereUniqueInput>
  /** Create and connect one Contact document */
  create?: InputMaybe<ContactCreateInput>
}

/** An edge in a connection. */
export type ContactEdge = {
  __typename?: 'ContactEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Contact
}

/** Identifies documents */
export type ContactManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ContactWhereStageInput>
  documentInStages_none?: InputMaybe<ContactWhereStageInput>
  documentInStages_some?: InputMaybe<ContactWhereStageInput>
  icon?: InputMaybe<Contacts>
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Contacts>>>
  /** All values that are not equal to given value. */
  icon_not?: InputMaybe<Contacts>
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Contacts>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  value?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>
}

export enum ContactOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type ContactUpdateInput = {
  icon?: InputMaybe<Contacts>
  value?: InputMaybe<Scalars['String']>
}

export type ContactUpdateManyInlineInput = {
  /** Connect multiple existing Contact documents */
  connect?: InputMaybe<Array<ContactConnectInput>>
  /** Create and connect multiple Contact documents */
  create?: InputMaybe<Array<ContactCreateInput>>
  /** Delete multiple Contact documents */
  delete?: InputMaybe<Array<ContactWhereUniqueInput>>
  /** Disconnect multiple Contact documents */
  disconnect?: InputMaybe<Array<ContactWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Contact documents */
  set?: InputMaybe<Array<ContactWhereUniqueInput>>
  /** Update multiple Contact documents */
  update?: InputMaybe<Array<ContactUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Contact documents */
  upsert?: InputMaybe<Array<ContactUpsertWithNestedWhereUniqueInput>>
}

export type ContactUpdateManyInput = {
  icon?: InputMaybe<Contacts>
  value?: InputMaybe<Scalars['String']>
}

export type ContactUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactUpdateManyInput
  /** Document search */
  where: ContactWhereInput
}

export type ContactUpdateOneInlineInput = {
  /** Connect existing Contact document */
  connect?: InputMaybe<ContactWhereUniqueInput>
  /** Create and connect one Contact document */
  create?: InputMaybe<ContactCreateInput>
  /** Delete currently connected Contact document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Contact document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Contact document */
  update?: InputMaybe<ContactUpdateWithNestedWhereUniqueInput>
  /** Upsert single Contact document */
  upsert?: InputMaybe<ContactUpsertWithNestedWhereUniqueInput>
}

export type ContactUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactUpdateInput
  /** Unique document search */
  where: ContactWhereUniqueInput
}

export type ContactUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactCreateInput
  /** Update document if it exists */
  update: ContactUpdateInput
}

export type ContactUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactUpsertInput
  /** Unique document search */
  where: ContactWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ContactWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ContactWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<ContactWhereStageInput>
  documentInStages_none?: InputMaybe<ContactWhereStageInput>
  documentInStages_some?: InputMaybe<ContactWhereStageInput>
  icon?: InputMaybe<Contacts>
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<Contacts>>>
  /** All values that are not equal to given value. */
  icon_not?: InputMaybe<Contacts>
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<Contacts>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  value?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ContactWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ContactWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Contact record uniquely */
export type ContactWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum Contacts {
  Celular = 'celular',
  Email = 'email',
  Empresa = 'empresa',
  Map = 'map'
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']
  data?: Maybe<Scalars['Json']>
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type HowWork = Node & {
  __typename?: 'HowWork'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<HowWork>
  /** List of HowWork versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  image: Asset
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  text?: Maybe<Scalars['String']>
  title: Scalars['String']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type HowWorkCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type HowWorkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type HowWorkHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type HowWorkImageArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type HowWorkPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type HowWorkScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type HowWorkUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type HowWorkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: HowWorkWhereUniqueInput
}

/** A connection to a list of items. */
export type HowWorkConnection = {
  __typename?: 'HowWorkConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<HowWorkEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type HowWorkCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  image: AssetCreateOneInlineInput
  text?: InputMaybe<Scalars['String']>
  title: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type HowWorkCreateManyInlineInput = {
  /** Connect multiple existing HowWork documents */
  connect?: InputMaybe<Array<HowWorkWhereUniqueInput>>
  /** Create and connect multiple existing HowWork documents */
  create?: InputMaybe<Array<HowWorkCreateInput>>
}

export type HowWorkCreateOneInlineInput = {
  /** Connect one existing HowWork document */
  connect?: InputMaybe<HowWorkWhereUniqueInput>
  /** Create and connect one HowWork document */
  create?: InputMaybe<HowWorkCreateInput>
}

/** An edge in a connection. */
export type HowWorkEdge = {
  __typename?: 'HowWorkEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: HowWork
}

/** Identifies documents */
export type HowWorkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HowWorkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HowWorkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HowWorkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<HowWorkWhereStageInput>
  documentInStages_none?: InputMaybe<HowWorkWhereStageInput>
  documentInStages_some?: InputMaybe<HowWorkWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  text?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  text_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum HowWorkOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type HowWorkUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>
  text?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type HowWorkUpdateManyInlineInput = {
  /** Connect multiple existing HowWork documents */
  connect?: InputMaybe<Array<HowWorkConnectInput>>
  /** Create and connect multiple HowWork documents */
  create?: InputMaybe<Array<HowWorkCreateInput>>
  /** Delete multiple HowWork documents */
  delete?: InputMaybe<Array<HowWorkWhereUniqueInput>>
  /** Disconnect multiple HowWork documents */
  disconnect?: InputMaybe<Array<HowWorkWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing HowWork documents */
  set?: InputMaybe<Array<HowWorkWhereUniqueInput>>
  /** Update multiple HowWork documents */
  update?: InputMaybe<Array<HowWorkUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple HowWork documents */
  upsert?: InputMaybe<Array<HowWorkUpsertWithNestedWhereUniqueInput>>
}

export type HowWorkUpdateManyInput = {
  text?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type HowWorkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HowWorkUpdateManyInput
  /** Document search */
  where: HowWorkWhereInput
}

export type HowWorkUpdateOneInlineInput = {
  /** Connect existing HowWork document */
  connect?: InputMaybe<HowWorkWhereUniqueInput>
  /** Create and connect one HowWork document */
  create?: InputMaybe<HowWorkCreateInput>
  /** Delete currently connected HowWork document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected HowWork document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single HowWork document */
  update?: InputMaybe<HowWorkUpdateWithNestedWhereUniqueInput>
  /** Upsert single HowWork document */
  upsert?: InputMaybe<HowWorkUpsertWithNestedWhereUniqueInput>
}

export type HowWorkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HowWorkUpdateInput
  /** Unique document search */
  where: HowWorkWhereUniqueInput
}

export type HowWorkUpsertInput = {
  /** Create document if it didn't exist */
  create: HowWorkCreateInput
  /** Update document if it exists */
  update: HowWorkUpdateInput
}

export type HowWorkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HowWorkUpsertInput
  /** Unique document search */
  where: HowWorkWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type HowWorkWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type HowWorkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HowWorkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HowWorkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HowWorkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<HowWorkWhereStageInput>
  documentInStages_none?: InputMaybe<HowWorkWhereStageInput>
  documentInStages_some?: InputMaybe<HowWorkWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  text?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  text_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type HowWorkWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HowWorkWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HowWorkWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HowWorkWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<HowWorkWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References HowWork record uniquely */
export type HowWorkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']
  longitude: Scalars['Float']
}

export type Menu = Node & {
  __typename?: 'Menu'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Menu>
  /** List of Menu versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  links: Array<Button>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type MenuCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type MenuDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type MenuHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type MenuLinksArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ButtonOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ButtonWhereInput>
}

export type MenuPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type MenuScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type MenuUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type MenuConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: MenuWhereUniqueInput
}

/** A connection to a list of items. */
export type MenuConnection = {
  __typename?: 'MenuConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<MenuEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type MenuCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  links?: InputMaybe<ButtonCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type MenuCreateManyInlineInput = {
  /** Connect multiple existing Menu documents */
  connect?: InputMaybe<Array<MenuWhereUniqueInput>>
  /** Create and connect multiple existing Menu documents */
  create?: InputMaybe<Array<MenuCreateInput>>
}

export type MenuCreateOneInlineInput = {
  /** Connect one existing Menu document */
  connect?: InputMaybe<MenuWhereUniqueInput>
  /** Create and connect one Menu document */
  create?: InputMaybe<MenuCreateInput>
}

/** An edge in a connection. */
export type MenuEdge = {
  __typename?: 'MenuEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Menu
}

/** Identifies documents */
export type MenuManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MenuWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MenuWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MenuWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<MenuWhereStageInput>
  documentInStages_none?: InputMaybe<MenuWhereStageInput>
  documentInStages_some?: InputMaybe<MenuWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  links_every?: InputMaybe<ButtonWhereInput>
  links_none?: InputMaybe<ButtonWhereInput>
  links_some?: InputMaybe<ButtonWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum MenuOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MenuUpdateInput = {
  links?: InputMaybe<ButtonUpdateManyInlineInput>
}

export type MenuUpdateManyInlineInput = {
  /** Connect multiple existing Menu documents */
  connect?: InputMaybe<Array<MenuConnectInput>>
  /** Create and connect multiple Menu documents */
  create?: InputMaybe<Array<MenuCreateInput>>
  /** Delete multiple Menu documents */
  delete?: InputMaybe<Array<MenuWhereUniqueInput>>
  /** Disconnect multiple Menu documents */
  disconnect?: InputMaybe<Array<MenuWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Menu documents */
  set?: InputMaybe<Array<MenuWhereUniqueInput>>
  /** Update multiple Menu documents */
  update?: InputMaybe<Array<MenuUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Menu documents */
  upsert?: InputMaybe<Array<MenuUpsertWithNestedWhereUniqueInput>>
}

export type MenuUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>
}

export type MenuUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MenuUpdateManyInput
  /** Document search */
  where: MenuWhereInput
}

export type MenuUpdateOneInlineInput = {
  /** Connect existing Menu document */
  connect?: InputMaybe<MenuWhereUniqueInput>
  /** Create and connect one Menu document */
  create?: InputMaybe<MenuCreateInput>
  /** Delete currently connected Menu document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Menu document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Menu document */
  update?: InputMaybe<MenuUpdateWithNestedWhereUniqueInput>
  /** Upsert single Menu document */
  upsert?: InputMaybe<MenuUpsertWithNestedWhereUniqueInput>
}

export type MenuUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MenuUpdateInput
  /** Unique document search */
  where: MenuWhereUniqueInput
}

export type MenuUpsertInput = {
  /** Create document if it didn't exist */
  create: MenuCreateInput
  /** Update document if it exists */
  update: MenuUpdateInput
}

export type MenuUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MenuUpsertInput
  /** Unique document search */
  where: MenuWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type MenuWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type MenuWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MenuWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MenuWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MenuWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<MenuWhereStageInput>
  documentInStages_none?: InputMaybe<MenuWhereStageInput>
  documentInStages_some?: InputMaybe<MenuWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  links_every?: InputMaybe<ButtonWhereInput>
  links_none?: InputMaybe<ButtonWhereInput>
  links_some?: InputMaybe<ButtonWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type MenuWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MenuWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MenuWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MenuWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<MenuWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Menu record uniquely */
export type MenuWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create one about */
  createAbout?: Maybe<About>
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one banner */
  createBanner?: Maybe<Banner>
  /** Create one contact */
  createContact?: Maybe<Contact>
  /** Create one howWork */
  createHowWork?: Maybe<HowWork>
  /** Create one menu */
  createMenu?: Maybe<Menu>
  /** Create one partnership */
  createPartnership?: Maybe<Partnership>
  /** Create one pricing */
  createPricing?: Maybe<Pricing>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Create one socialMedia */
  createSocialMedia?: Maybe<SocialMedia>
  /** Delete one about from _all_ existing stages. Returns deleted document. */
  deleteAbout?: Maybe<About>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one banner from _all_ existing stages. Returns deleted document. */
  deleteBanner?: Maybe<Banner>
  /** Delete one contact from _all_ existing stages. Returns deleted document. */
  deleteContact?: Maybe<Contact>
  /** Delete one howWork from _all_ existing stages. Returns deleted document. */
  deleteHowWork?: Maybe<HowWork>
  /**
   * Delete many About documents
   * @deprecated Please use the new paginated many mutation (deleteManyAboutsConnection)
   */
  deleteManyAbouts: BatchPayload
  /** Delete many About documents, return deleted documents */
  deleteManyAboutsConnection: AboutConnection
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many Banner documents
   * @deprecated Please use the new paginated many mutation (deleteManyBannersConnection)
   */
  deleteManyBanners: BatchPayload
  /** Delete many Banner documents, return deleted documents */
  deleteManyBannersConnection: BannerConnection
  /**
   * Delete many Contact documents
   * @deprecated Please use the new paginated many mutation (deleteManyContactsConnection)
   */
  deleteManyContacts: BatchPayload
  /** Delete many Contact documents, return deleted documents */
  deleteManyContactsConnection: ContactConnection
  /**
   * Delete many HowWork documents
   * @deprecated Please use the new paginated many mutation (deleteManyHowWorksConnection)
   */
  deleteManyHowWorks: BatchPayload
  /** Delete many HowWork documents, return deleted documents */
  deleteManyHowWorksConnection: HowWorkConnection
  /**
   * Delete many Menu documents
   * @deprecated Please use the new paginated many mutation (deleteManyMenusConnection)
   */
  deleteManyMenus: BatchPayload
  /** Delete many Menu documents, return deleted documents */
  deleteManyMenusConnection: MenuConnection
  /**
   * Delete many Partnership documents
   * @deprecated Please use the new paginated many mutation (deleteManyPartnershipsConnection)
   */
  deleteManyPartnerships: BatchPayload
  /** Delete many Partnership documents, return deleted documents */
  deleteManyPartnershipsConnection: PartnershipConnection
  /**
   * Delete many Pricing documents
   * @deprecated Please use the new paginated many mutation (deleteManyPricingsConnection)
   */
  deleteManyPricings: BatchPayload
  /** Delete many Pricing documents, return deleted documents */
  deleteManyPricingsConnection: PricingConnection
  /**
   * Delete many SocialMedia documents
   * @deprecated Please use the new paginated many mutation (deleteManySocialMediasConnection)
   */
  deleteManySocialMedias: BatchPayload
  /** Delete many SocialMedia documents, return deleted documents */
  deleteManySocialMediasConnection: SocialMediaConnection
  /** Delete one menu from _all_ existing stages. Returns deleted document. */
  deleteMenu?: Maybe<Menu>
  /** Delete one partnership from _all_ existing stages. Returns deleted document. */
  deletePartnership?: Maybe<Partnership>
  /** Delete one pricing from _all_ existing stages. Returns deleted document. */
  deletePricing?: Maybe<Pricing>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one socialMedia from _all_ existing stages. Returns deleted document. */
  deleteSocialMedia?: Maybe<SocialMedia>
  /** Publish one about */
  publishAbout?: Maybe<About>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one banner */
  publishBanner?: Maybe<Banner>
  /** Publish one contact */
  publishContact?: Maybe<Contact>
  /** Publish one howWork */
  publishHowWork?: Maybe<HowWork>
  /**
   * Publish many About documents
   * @deprecated Please use the new paginated many mutation (publishManyAboutsConnection)
   */
  publishManyAbouts: BatchPayload
  /** Publish many About documents */
  publishManyAboutsConnection: AboutConnection
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many Banner documents
   * @deprecated Please use the new paginated many mutation (publishManyBannersConnection)
   */
  publishManyBanners: BatchPayload
  /** Publish many Banner documents */
  publishManyBannersConnection: BannerConnection
  /**
   * Publish many Contact documents
   * @deprecated Please use the new paginated many mutation (publishManyContactsConnection)
   */
  publishManyContacts: BatchPayload
  /** Publish many Contact documents */
  publishManyContactsConnection: ContactConnection
  /**
   * Publish many HowWork documents
   * @deprecated Please use the new paginated many mutation (publishManyHowWorksConnection)
   */
  publishManyHowWorks: BatchPayload
  /** Publish many HowWork documents */
  publishManyHowWorksConnection: HowWorkConnection
  /**
   * Publish many Menu documents
   * @deprecated Please use the new paginated many mutation (publishManyMenusConnection)
   */
  publishManyMenus: BatchPayload
  /** Publish many Menu documents */
  publishManyMenusConnection: MenuConnection
  /**
   * Publish many Partnership documents
   * @deprecated Please use the new paginated many mutation (publishManyPartnershipsConnection)
   */
  publishManyPartnerships: BatchPayload
  /** Publish many Partnership documents */
  publishManyPartnershipsConnection: PartnershipConnection
  /**
   * Publish many Pricing documents
   * @deprecated Please use the new paginated many mutation (publishManyPricingsConnection)
   */
  publishManyPricings: BatchPayload
  /** Publish many Pricing documents */
  publishManyPricingsConnection: PricingConnection
  /**
   * Publish many SocialMedia documents
   * @deprecated Please use the new paginated many mutation (publishManySocialMediasConnection)
   */
  publishManySocialMedias: BatchPayload
  /** Publish many SocialMedia documents */
  publishManySocialMediasConnection: SocialMediaConnection
  /** Publish one menu */
  publishMenu?: Maybe<Menu>
  /** Publish one partnership */
  publishPartnership?: Maybe<Partnership>
  /** Publish one pricing */
  publishPricing?: Maybe<Pricing>
  /** Publish one socialMedia */
  publishSocialMedia?: Maybe<SocialMedia>
  /** Schedule to publish one about */
  schedulePublishAbout?: Maybe<About>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one banner */
  schedulePublishBanner?: Maybe<Banner>
  /** Schedule to publish one contact */
  schedulePublishContact?: Maybe<Contact>
  /** Schedule to publish one howWork */
  schedulePublishHowWork?: Maybe<HowWork>
  /** Schedule to publish one menu */
  schedulePublishMenu?: Maybe<Menu>
  /** Schedule to publish one partnership */
  schedulePublishPartnership?: Maybe<Partnership>
  /** Schedule to publish one pricing */
  schedulePublishPricing?: Maybe<Pricing>
  /** Schedule to publish one socialMedia */
  schedulePublishSocialMedia?: Maybe<SocialMedia>
  /** Unpublish one about from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAbout?: Maybe<About>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one banner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBanner?: Maybe<Banner>
  /** Unpublish one contact from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishContact?: Maybe<Contact>
  /** Unpublish one howWork from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHowWork?: Maybe<HowWork>
  /** Unpublish one menu from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishMenu?: Maybe<Menu>
  /** Unpublish one partnership from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPartnership?: Maybe<Partnership>
  /** Unpublish one pricing from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPricing?: Maybe<Pricing>
  /** Unpublish one socialMedia from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSocialMedia?: Maybe<SocialMedia>
  /** Unpublish one about from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAbout?: Maybe<About>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one banner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBanner?: Maybe<Banner>
  /** Unpublish one contact from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishContact?: Maybe<Contact>
  /** Unpublish one howWork from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHowWork?: Maybe<HowWork>
  /**
   * Unpublish many About documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAboutsConnection)
   */
  unpublishManyAbouts: BatchPayload
  /** Find many About documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAboutsConnection: AboutConnection
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many Banner documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBannersConnection)
   */
  unpublishManyBanners: BatchPayload
  /** Find many Banner documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBannersConnection: BannerConnection
  /**
   * Unpublish many Contact documents
   * @deprecated Please use the new paginated many mutation (unpublishManyContactsConnection)
   */
  unpublishManyContacts: BatchPayload
  /** Find many Contact documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyContactsConnection: ContactConnection
  /**
   * Unpublish many HowWork documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHowWorksConnection)
   */
  unpublishManyHowWorks: BatchPayload
  /** Find many HowWork documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHowWorksConnection: HowWorkConnection
  /**
   * Unpublish many Menu documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMenusConnection)
   */
  unpublishManyMenus: BatchPayload
  /** Find many Menu documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMenusConnection: MenuConnection
  /**
   * Unpublish many Partnership documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPartnershipsConnection)
   */
  unpublishManyPartnerships: BatchPayload
  /** Find many Partnership documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPartnershipsConnection: PartnershipConnection
  /**
   * Unpublish many Pricing documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPricingsConnection)
   */
  unpublishManyPricings: BatchPayload
  /** Find many Pricing documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPricingsConnection: PricingConnection
  /**
   * Unpublish many SocialMedia documents
   * @deprecated Please use the new paginated many mutation (unpublishManySocialMediasConnection)
   */
  unpublishManySocialMedias: BatchPayload
  /** Find many SocialMedia documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySocialMediasConnection: SocialMediaConnection
  /** Unpublish one menu from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMenu?: Maybe<Menu>
  /** Unpublish one partnership from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPartnership?: Maybe<Partnership>
  /** Unpublish one pricing from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPricing?: Maybe<Pricing>
  /** Unpublish one socialMedia from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSocialMedia?: Maybe<SocialMedia>
  /** Update one about */
  updateAbout?: Maybe<About>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one banner */
  updateBanner?: Maybe<Banner>
  /** Update one contact */
  updateContact?: Maybe<Contact>
  /** Update one howWork */
  updateHowWork?: Maybe<HowWork>
  /**
   * Update many abouts
   * @deprecated Please use the new paginated many mutation (updateManyAboutsConnection)
   */
  updateManyAbouts: BatchPayload
  /** Update many About documents */
  updateManyAboutsConnection: AboutConnection
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many banners
   * @deprecated Please use the new paginated many mutation (updateManyBannersConnection)
   */
  updateManyBanners: BatchPayload
  /** Update many Banner documents */
  updateManyBannersConnection: BannerConnection
  /**
   * Update many contacts
   * @deprecated Please use the new paginated many mutation (updateManyContactsConnection)
   */
  updateManyContacts: BatchPayload
  /** Update many Contact documents */
  updateManyContactsConnection: ContactConnection
  /**
   * Update many howWorks
   * @deprecated Please use the new paginated many mutation (updateManyHowWorksConnection)
   */
  updateManyHowWorks: BatchPayload
  /** Update many HowWork documents */
  updateManyHowWorksConnection: HowWorkConnection
  /**
   * Update many menus
   * @deprecated Please use the new paginated many mutation (updateManyMenusConnection)
   */
  updateManyMenus: BatchPayload
  /** Update many Menu documents */
  updateManyMenusConnection: MenuConnection
  /**
   * Update many partnerships
   * @deprecated Please use the new paginated many mutation (updateManyPartnershipsConnection)
   */
  updateManyPartnerships: BatchPayload
  /** Update many Partnership documents */
  updateManyPartnershipsConnection: PartnershipConnection
  /**
   * Update many pricings
   * @deprecated Please use the new paginated many mutation (updateManyPricingsConnection)
   */
  updateManyPricings: BatchPayload
  /** Update many Pricing documents */
  updateManyPricingsConnection: PricingConnection
  /**
   * Update many socialMedias
   * @deprecated Please use the new paginated many mutation (updateManySocialMediasConnection)
   */
  updateManySocialMedias: BatchPayload
  /** Update many SocialMedia documents */
  updateManySocialMediasConnection: SocialMediaConnection
  /** Update one menu */
  updateMenu?: Maybe<Menu>
  /** Update one partnership */
  updatePartnership?: Maybe<Partnership>
  /** Update one pricing */
  updatePricing?: Maybe<Pricing>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Update one socialMedia */
  updateSocialMedia?: Maybe<SocialMedia>
  /** Upsert one about */
  upsertAbout?: Maybe<About>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one banner */
  upsertBanner?: Maybe<Banner>
  /** Upsert one contact */
  upsertContact?: Maybe<Contact>
  /** Upsert one howWork */
  upsertHowWork?: Maybe<HowWork>
  /** Upsert one menu */
  upsertMenu?: Maybe<Menu>
  /** Upsert one partnership */
  upsertPartnership?: Maybe<Partnership>
  /** Upsert one pricing */
  upsertPricing?: Maybe<Pricing>
  /** Upsert one socialMedia */
  upsertSocialMedia?: Maybe<SocialMedia>
}

export type MutationCreateAboutArgs = {
  data: AboutCreateInput
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateBannerArgs = {
  data: BannerCreateInput
}

export type MutationCreateContactArgs = {
  data: ContactCreateInput
}

export type MutationCreateHowWorkArgs = {
  data: HowWorkCreateInput
}

export type MutationCreateMenuArgs = {
  data: MenuCreateInput
}

export type MutationCreatePartnershipArgs = {
  data: PartnershipCreateInput
}

export type MutationCreatePricingArgs = {
  data: PricingCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationCreateSocialMediaArgs = {
  data: SocialMediaCreateInput
}

export type MutationDeleteAboutArgs = {
  where: AboutWhereUniqueInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteBannerArgs = {
  where: BannerWhereUniqueInput
}

export type MutationDeleteContactArgs = {
  where: ContactWhereUniqueInput
}

export type MutationDeleteHowWorkArgs = {
  where: HowWorkWhereUniqueInput
}

export type MutationDeleteManyAboutsArgs = {
  where?: InputMaybe<AboutManyWhereInput>
}

export type MutationDeleteManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AboutManyWhereInput>
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyBannersArgs = {
  where?: InputMaybe<BannerManyWhereInput>
}

export type MutationDeleteManyBannersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BannerManyWhereInput>
}

export type MutationDeleteManyContactsArgs = {
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationDeleteManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationDeleteManyHowWorksArgs = {
  where?: InputMaybe<HowWorkManyWhereInput>
}

export type MutationDeleteManyHowWorksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<HowWorkManyWhereInput>
}

export type MutationDeleteManyMenusArgs = {
  where?: InputMaybe<MenuManyWhereInput>
}

export type MutationDeleteManyMenusConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<MenuManyWhereInput>
}

export type MutationDeleteManyPartnershipsArgs = {
  where?: InputMaybe<PartnershipManyWhereInput>
}

export type MutationDeleteManyPartnershipsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PartnershipManyWhereInput>
}

export type MutationDeleteManyPricingsArgs = {
  where?: InputMaybe<PricingManyWhereInput>
}

export type MutationDeleteManyPricingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PricingManyWhereInput>
}

export type MutationDeleteManySocialMediasArgs = {
  where?: InputMaybe<SocialMediaManyWhereInput>
}

export type MutationDeleteManySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SocialMediaManyWhereInput>
}

export type MutationDeleteMenuArgs = {
  where: MenuWhereUniqueInput
}

export type MutationDeletePartnershipArgs = {
  where: PartnershipWhereUniqueInput
}

export type MutationDeletePricingArgs = {
  where: PricingWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteSocialMediaArgs = {
  where: SocialMediaWhereUniqueInput
}

export type MutationPublishAboutArgs = {
  to?: Array<Stage>
  where: AboutWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishBannerArgs = {
  to?: Array<Stage>
  where: BannerWhereUniqueInput
}

export type MutationPublishContactArgs = {
  to?: Array<Stage>
  where: ContactWhereUniqueInput
}

export type MutationPublishHowWorkArgs = {
  to?: Array<Stage>
  where: HowWorkWhereUniqueInput
}

export type MutationPublishManyAboutsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<AboutManyWhereInput>
}

export type MutationPublishManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<AboutManyWhereInput>
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationPublishManyBannersArgs = {
  to?: Array<Stage>
  where?: InputMaybe<BannerManyWhereInput>
}

export type MutationPublishManyBannersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<BannerManyWhereInput>
}

export type MutationPublishManyContactsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationPublishManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationPublishManyHowWorksArgs = {
  to?: Array<Stage>
  where?: InputMaybe<HowWorkManyWhereInput>
}

export type MutationPublishManyHowWorksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<HowWorkManyWhereInput>
}

export type MutationPublishManyMenusArgs = {
  to?: Array<Stage>
  where?: InputMaybe<MenuManyWhereInput>
}

export type MutationPublishManyMenusConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<MenuManyWhereInput>
}

export type MutationPublishManyPartnershipsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PartnershipManyWhereInput>
}

export type MutationPublishManyPartnershipsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<PartnershipManyWhereInput>
}

export type MutationPublishManyPricingsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PricingManyWhereInput>
}

export type MutationPublishManyPricingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<PricingManyWhereInput>
}

export type MutationPublishManySocialMediasArgs = {
  to?: Array<Stage>
  where?: InputMaybe<SocialMediaManyWhereInput>
}

export type MutationPublishManySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  to?: Array<Stage>
  where?: InputMaybe<SocialMediaManyWhereInput>
}

export type MutationPublishMenuArgs = {
  to?: Array<Stage>
  where: MenuWhereUniqueInput
}

export type MutationPublishPartnershipArgs = {
  to?: Array<Stage>
  where: PartnershipWhereUniqueInput
}

export type MutationPublishPricingArgs = {
  to?: Array<Stage>
  where: PricingWhereUniqueInput
}

export type MutationPublishSocialMediaArgs = {
  to?: Array<Stage>
  where: SocialMediaWhereUniqueInput
}

export type MutationSchedulePublishAboutArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: AboutWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>
}

export type MutationSchedulePublishBannerArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: BannerWhereUniqueInput
}

export type MutationSchedulePublishContactArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: ContactWhereUniqueInput
}

export type MutationSchedulePublishHowWorkArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: HowWorkWhereUniqueInput
}

export type MutationSchedulePublishMenuArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: MenuWhereUniqueInput
}

export type MutationSchedulePublishPartnershipArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: PartnershipWhereUniqueInput
}

export type MutationSchedulePublishPricingArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: PricingWhereUniqueInput
}

export type MutationSchedulePublishSocialMediaArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  to?: Array<Stage>
  where: SocialMediaWhereUniqueInput
}

export type MutationScheduleUnpublishAboutArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: AboutWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishBannerArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: BannerWhereUniqueInput
}

export type MutationScheduleUnpublishContactArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: ContactWhereUniqueInput
}

export type MutationScheduleUnpublishHowWorkArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: HowWorkWhereUniqueInput
}

export type MutationScheduleUnpublishMenuArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: MenuWhereUniqueInput
}

export type MutationScheduleUnpublishPartnershipArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: PartnershipWhereUniqueInput
}

export type MutationScheduleUnpublishPricingArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: PricingWhereUniqueInput
}

export type MutationScheduleUnpublishSocialMediaArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  releaseId?: InputMaybe<Scalars['String']>
  where: SocialMediaWhereUniqueInput
}

export type MutationUnpublishAboutArgs = {
  from?: Array<Stage>
  where: AboutWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishBannerArgs = {
  from?: Array<Stage>
  where: BannerWhereUniqueInput
}

export type MutationUnpublishContactArgs = {
  from?: Array<Stage>
  where: ContactWhereUniqueInput
}

export type MutationUnpublishHowWorkArgs = {
  from?: Array<Stage>
  where: HowWorkWhereUniqueInput
}

export type MutationUnpublishManyAboutsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<AboutManyWhereInput>
}

export type MutationUnpublishManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<AboutManyWhereInput>
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyBannersArgs = {
  from?: Array<Stage>
  where?: InputMaybe<BannerManyWhereInput>
}

export type MutationUnpublishManyBannersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<BannerManyWhereInput>
}

export type MutationUnpublishManyContactsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationUnpublishManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationUnpublishManyHowWorksArgs = {
  from?: Array<Stage>
  where?: InputMaybe<HowWorkManyWhereInput>
}

export type MutationUnpublishManyHowWorksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<HowWorkManyWhereInput>
}

export type MutationUnpublishManyMenusArgs = {
  from?: Array<Stage>
  where?: InputMaybe<MenuManyWhereInput>
}

export type MutationUnpublishManyMenusConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<MenuManyWhereInput>
}

export type MutationUnpublishManyPartnershipsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PartnershipManyWhereInput>
}

export type MutationUnpublishManyPartnershipsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PartnershipManyWhereInput>
}

export type MutationUnpublishManyPricingsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PricingManyWhereInput>
}

export type MutationUnpublishManyPricingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PricingManyWhereInput>
}

export type MutationUnpublishManySocialMediasArgs = {
  from?: Array<Stage>
  where?: InputMaybe<SocialMediaManyWhereInput>
}

export type MutationUnpublishManySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  first?: InputMaybe<Scalars['Int']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<SocialMediaManyWhereInput>
}

export type MutationUnpublishMenuArgs = {
  from?: Array<Stage>
  where: MenuWhereUniqueInput
}

export type MutationUnpublishPartnershipArgs = {
  from?: Array<Stage>
  where: PartnershipWhereUniqueInput
}

export type MutationUnpublishPricingArgs = {
  from?: Array<Stage>
  where: PricingWhereUniqueInput
}

export type MutationUnpublishSocialMediaArgs = {
  from?: Array<Stage>
  where: SocialMediaWhereUniqueInput
}

export type MutationUpdateAboutArgs = {
  data: AboutUpdateInput
  where: AboutWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateBannerArgs = {
  data: BannerUpdateInput
  where: BannerWhereUniqueInput
}

export type MutationUpdateContactArgs = {
  data: ContactUpdateInput
  where: ContactWhereUniqueInput
}

export type MutationUpdateHowWorkArgs = {
  data: HowWorkUpdateInput
  where: HowWorkWhereUniqueInput
}

export type MutationUpdateManyAboutsArgs = {
  data: AboutUpdateManyInput
  where?: InputMaybe<AboutManyWhereInput>
}

export type MutationUpdateManyAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: AboutUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AboutManyWhereInput>
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyBannersArgs = {
  data: BannerUpdateManyInput
  where?: InputMaybe<BannerManyWhereInput>
}

export type MutationUpdateManyBannersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: BannerUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<BannerManyWhereInput>
}

export type MutationUpdateManyContactsArgs = {
  data: ContactUpdateManyInput
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationUpdateManyContactsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: ContactUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ContactManyWhereInput>
}

export type MutationUpdateManyHowWorksArgs = {
  data: HowWorkUpdateManyInput
  where?: InputMaybe<HowWorkManyWhereInput>
}

export type MutationUpdateManyHowWorksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: HowWorkUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<HowWorkManyWhereInput>
}

export type MutationUpdateManyMenusArgs = {
  data: MenuUpdateManyInput
  where?: InputMaybe<MenuManyWhereInput>
}

export type MutationUpdateManyMenusConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: MenuUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<MenuManyWhereInput>
}

export type MutationUpdateManyPartnershipsArgs = {
  data: PartnershipUpdateManyInput
  where?: InputMaybe<PartnershipManyWhereInput>
}

export type MutationUpdateManyPartnershipsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: PartnershipUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PartnershipManyWhereInput>
}

export type MutationUpdateManyPricingsArgs = {
  data: PricingUpdateManyInput
  where?: InputMaybe<PricingManyWhereInput>
}

export type MutationUpdateManyPricingsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: PricingUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<PricingManyWhereInput>
}

export type MutationUpdateManySocialMediasArgs = {
  data: SocialMediaUpdateManyInput
  where?: InputMaybe<SocialMediaManyWhereInput>
}

export type MutationUpdateManySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>
  before?: InputMaybe<Scalars['ID']>
  data: SocialMediaUpdateManyInput
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<SocialMediaManyWhereInput>
}

export type MutationUpdateMenuArgs = {
  data: MenuUpdateInput
  where: MenuWhereUniqueInput
}

export type MutationUpdatePartnershipArgs = {
  data: PartnershipUpdateInput
  where: PartnershipWhereUniqueInput
}

export type MutationUpdatePricingArgs = {
  data: PricingUpdateInput
  where: PricingWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateSocialMediaArgs = {
  data: SocialMediaUpdateInput
  where: SocialMediaWhereUniqueInput
}

export type MutationUpsertAboutArgs = {
  upsert: AboutUpsertInput
  where: AboutWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertBannerArgs = {
  upsert: BannerUpsertInput
  where: BannerWhereUniqueInput
}

export type MutationUpsertContactArgs = {
  upsert: ContactUpsertInput
  where: ContactWhereUniqueInput
}

export type MutationUpsertHowWorkArgs = {
  upsert: HowWorkUpsertInput
  where: HowWorkWhereUniqueInput
}

export type MutationUpsertMenuArgs = {
  upsert: MenuUpsertInput
  where: MenuWhereUniqueInput
}

export type MutationUpsertPartnershipArgs = {
  upsert: PartnershipUpsertInput
  where: PartnershipWhereUniqueInput
}

export type MutationUpsertPricingArgs = {
  upsert: PricingUpsertInput
  where: PricingWhereUniqueInput
}

export type MutationUpsertSocialMediaArgs = {
  upsert: SocialMediaUpsertInput
  where: SocialMediaWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

export type Partnership = Node & {
  __typename?: 'Partnership'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Partnership>
  /** List of Partnership versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  image: Asset
  name: Scalars['String']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PartnershipCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PartnershipDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type PartnershipHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type PartnershipImageArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PartnershipPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PartnershipScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PartnershipUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PartnershipConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PartnershipWhereUniqueInput
}

/** A connection to a list of items. */
export type PartnershipConnection = {
  __typename?: 'PartnershipConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PartnershipEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PartnershipCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  image: AssetCreateOneInlineInput
  name: Scalars['String']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type PartnershipCreateManyInlineInput = {
  /** Connect multiple existing Partnership documents */
  connect?: InputMaybe<Array<PartnershipWhereUniqueInput>>
  /** Create and connect multiple existing Partnership documents */
  create?: InputMaybe<Array<PartnershipCreateInput>>
}

export type PartnershipCreateOneInlineInput = {
  /** Connect one existing Partnership document */
  connect?: InputMaybe<PartnershipWhereUniqueInput>
  /** Create and connect one Partnership document */
  create?: InputMaybe<PartnershipCreateInput>
}

/** An edge in a connection. */
export type PartnershipEdge = {
  __typename?: 'PartnershipEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Partnership
}

/** Identifies documents */
export type PartnershipManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PartnershipWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PartnershipWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PartnershipWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<PartnershipWhereStageInput>
  documentInStages_none?: InputMaybe<PartnershipWhereStageInput>
  documentInStages_some?: InputMaybe<PartnershipWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PartnershipOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PartnershipUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>
  name?: InputMaybe<Scalars['String']>
}

export type PartnershipUpdateManyInlineInput = {
  /** Connect multiple existing Partnership documents */
  connect?: InputMaybe<Array<PartnershipConnectInput>>
  /** Create and connect multiple Partnership documents */
  create?: InputMaybe<Array<PartnershipCreateInput>>
  /** Delete multiple Partnership documents */
  delete?: InputMaybe<Array<PartnershipWhereUniqueInput>>
  /** Disconnect multiple Partnership documents */
  disconnect?: InputMaybe<Array<PartnershipWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Partnership documents */
  set?: InputMaybe<Array<PartnershipWhereUniqueInput>>
  /** Update multiple Partnership documents */
  update?: InputMaybe<Array<PartnershipUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Partnership documents */
  upsert?: InputMaybe<Array<PartnershipUpsertWithNestedWhereUniqueInput>>
}

export type PartnershipUpdateManyInput = {
  name?: InputMaybe<Scalars['String']>
}

export type PartnershipUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PartnershipUpdateManyInput
  /** Document search */
  where: PartnershipWhereInput
}

export type PartnershipUpdateOneInlineInput = {
  /** Connect existing Partnership document */
  connect?: InputMaybe<PartnershipWhereUniqueInput>
  /** Create and connect one Partnership document */
  create?: InputMaybe<PartnershipCreateInput>
  /** Delete currently connected Partnership document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Partnership document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Partnership document */
  update?: InputMaybe<PartnershipUpdateWithNestedWhereUniqueInput>
  /** Upsert single Partnership document */
  upsert?: InputMaybe<PartnershipUpsertWithNestedWhereUniqueInput>
}

export type PartnershipUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PartnershipUpdateInput
  /** Unique document search */
  where: PartnershipWhereUniqueInput
}

export type PartnershipUpsertInput = {
  /** Create document if it didn't exist */
  create: PartnershipCreateInput
  /** Update document if it exists */
  update: PartnershipUpdateInput
}

export type PartnershipUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PartnershipUpsertInput
  /** Unique document search */
  where: PartnershipWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type PartnershipWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type PartnershipWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PartnershipWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PartnershipWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PartnershipWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<PartnershipWhereStageInput>
  documentInStages_none?: InputMaybe<PartnershipWhereStageInput>
  documentInStages_some?: InputMaybe<PartnershipWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PartnershipWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PartnershipWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PartnershipWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PartnershipWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PartnershipWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Partnership record uniquely */
export type PartnershipWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Pricing = Node & {
  __typename?: 'Pricing'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<Pricing>
  from?: Maybe<Scalars['Boolean']>
  /** List of Pricing versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']
  includedFeatures: Array<Scalars['String']>
  link: Scalars['String']
  name: Scalars['String']
  priceMonthly: Scalars['Float']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PricingCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PricingDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type PricingHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type PricingPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PricingScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PricingUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type PricingConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PricingWhereUniqueInput
}

/** A connection to a list of items. */
export type PricingConnection = {
  __typename?: 'PricingConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PricingEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PricingCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['Boolean']>
  includedFeatures?: InputMaybe<Array<Scalars['String']>>
  link: Scalars['String']
  name: Scalars['String']
  priceMonthly: Scalars['Float']
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type PricingCreateManyInlineInput = {
  /** Connect multiple existing Pricing documents */
  connect?: InputMaybe<Array<PricingWhereUniqueInput>>
  /** Create and connect multiple existing Pricing documents */
  create?: InputMaybe<Array<PricingCreateInput>>
}

export type PricingCreateOneInlineInput = {
  /** Connect one existing Pricing document */
  connect?: InputMaybe<PricingWhereUniqueInput>
  /** Create and connect one Pricing document */
  create?: InputMaybe<PricingCreateInput>
}

/** An edge in a connection. */
export type PricingEdge = {
  __typename?: 'PricingEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: Pricing
}

/** Identifies documents */
export type PricingManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PricingWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PricingWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PricingWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<PricingWhereStageInput>
  documentInStages_none?: InputMaybe<PricingWhereStageInput>
  documentInStages_some?: InputMaybe<PricingWhereStageInput>
  from?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  from_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  includedFeatures?: InputMaybe<Array<Scalars['String']>>
  /** Matches if the field array contains *all* items provided to the filter */
  includedFeatures_contains_all?: InputMaybe<Array<Scalars['String']>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  includedFeatures_contains_none?: InputMaybe<Array<Scalars['String']>>
  /** Matches if the field array contains at least one item provided to the filter */
  includedFeatures_contains_some?: InputMaybe<Array<Scalars['String']>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  includedFeatures_not?: InputMaybe<Array<Scalars['String']>>
  link?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  priceMonthly?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  priceMonthly_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  priceMonthly_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  priceMonthly_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  priceMonthly_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  priceMonthly_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  priceMonthly_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  priceMonthly_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PricingOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FromAsc = 'from_ASC',
  FromDesc = 'from_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IncludedFeaturesAsc = 'includedFeatures_ASC',
  IncludedFeaturesDesc = 'includedFeatures_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceMonthlyAsc = 'priceMonthly_ASC',
  PriceMonthlyDesc = 'priceMonthly_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PricingUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['Boolean']>
  includedFeatures?: InputMaybe<Array<Scalars['String']>>
  link?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  priceMonthly?: InputMaybe<Scalars['Float']>
}

export type PricingUpdateManyInlineInput = {
  /** Connect multiple existing Pricing documents */
  connect?: InputMaybe<Array<PricingConnectInput>>
  /** Create and connect multiple Pricing documents */
  create?: InputMaybe<Array<PricingCreateInput>>
  /** Delete multiple Pricing documents */
  delete?: InputMaybe<Array<PricingWhereUniqueInput>>
  /** Disconnect multiple Pricing documents */
  disconnect?: InputMaybe<Array<PricingWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Pricing documents */
  set?: InputMaybe<Array<PricingWhereUniqueInput>>
  /** Update multiple Pricing documents */
  update?: InputMaybe<Array<PricingUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Pricing documents */
  upsert?: InputMaybe<Array<PricingUpsertWithNestedWhereUniqueInput>>
}

export type PricingUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['Boolean']>
  includedFeatures?: InputMaybe<Array<Scalars['String']>>
  link?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  priceMonthly?: InputMaybe<Scalars['Float']>
}

export type PricingUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PricingUpdateManyInput
  /** Document search */
  where: PricingWhereInput
}

export type PricingUpdateOneInlineInput = {
  /** Connect existing Pricing document */
  connect?: InputMaybe<PricingWhereUniqueInput>
  /** Create and connect one Pricing document */
  create?: InputMaybe<PricingCreateInput>
  /** Delete currently connected Pricing document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected Pricing document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single Pricing document */
  update?: InputMaybe<PricingUpdateWithNestedWhereUniqueInput>
  /** Upsert single Pricing document */
  upsert?: InputMaybe<PricingUpsertWithNestedWhereUniqueInput>
}

export type PricingUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PricingUpdateInput
  /** Unique document search */
  where: PricingWhereUniqueInput
}

export type PricingUpsertInput = {
  /** Create document if it didn't exist */
  create: PricingCreateInput
  /** Update document if it exists */
  update: PricingUpdateInput
}

export type PricingUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PricingUpsertInput
  /** Unique document search */
  where: PricingWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type PricingWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type PricingWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PricingWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PricingWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PricingWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  documentInStages_every?: InputMaybe<PricingWhereStageInput>
  documentInStages_none?: InputMaybe<PricingWhereStageInput>
  documentInStages_some?: InputMaybe<PricingWhereStageInput>
  from?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  from_not?: InputMaybe<Scalars['Boolean']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  /** Matches if the field array contains *all* items provided to the filter and order does match */
  includedFeatures?: InputMaybe<Array<Scalars['String']>>
  /** Matches if the field array contains *all* items provided to the filter */
  includedFeatures_contains_all?: InputMaybe<Array<Scalars['String']>>
  /** Matches if the field array does not contain any of the items provided to the filter */
  includedFeatures_contains_none?: InputMaybe<Array<Scalars['String']>>
  /** Matches if the field array contains at least one item provided to the filter */
  includedFeatures_contains_some?: InputMaybe<Array<Scalars['String']>>
  /** Matches if the field array does not contains *all* items provided to the filter or order does not match */
  includedFeatures_not?: InputMaybe<Array<Scalars['String']>>
  link?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  priceMonthly?: InputMaybe<Scalars['Float']>
  /** All values greater than the given value. */
  priceMonthly_gt?: InputMaybe<Scalars['Float']>
  /** All values greater than or equal the given value. */
  priceMonthly_gte?: InputMaybe<Scalars['Float']>
  /** All values that are contained in given list. */
  priceMonthly_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  /** All values less than the given value. */
  priceMonthly_lt?: InputMaybe<Scalars['Float']>
  /** All values less than or equal the given value. */
  priceMonthly_lte?: InputMaybe<Scalars['Float']>
  /** All values that are not equal to given value. */
  priceMonthly_not?: InputMaybe<Scalars['Float']>
  /** All values that are not contained in given list. */
  priceMonthly_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PricingWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PricingWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PricingWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PricingWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PricingWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Pricing record uniquely */
export type PricingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single about */
  about?: Maybe<About>
  /** Retrieve document version */
  aboutVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple abouts */
  abouts: Array<About>
  /** Retrieve multiple abouts using the Relay connection interface */
  aboutsConnection: AboutConnection
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve a single banner */
  banner?: Maybe<Banner>
  /** Retrieve document version */
  bannerVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple banners */
  banners: Array<Banner>
  /** Retrieve multiple banners using the Relay connection interface */
  bannersConnection: BannerConnection
  /** Retrieve a single contact */
  contact?: Maybe<Contact>
  /** Retrieve document version */
  contactVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple contacts */
  contacts: Array<Contact>
  /** Retrieve multiple contacts using the Relay connection interface */
  contactsConnection: ContactConnection
  /** Retrieve a single howWork */
  howWork?: Maybe<HowWork>
  /** Retrieve document version */
  howWorkVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple howWorks */
  howWorks: Array<HowWork>
  /** Retrieve multiple howWorks using the Relay connection interface */
  howWorksConnection: HowWorkConnection
  /** Retrieve a single menu */
  menu?: Maybe<Menu>
  /** Retrieve document version */
  menuVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple menus */
  menus: Array<Menu>
  /** Retrieve multiple menus using the Relay connection interface */
  menusConnection: MenuConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single partnership */
  partnership?: Maybe<Partnership>
  /** Retrieve document version */
  partnershipVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple partnerships */
  partnerships: Array<Partnership>
  /** Retrieve multiple partnerships using the Relay connection interface */
  partnershipsConnection: PartnershipConnection
  /** Retrieve a single pricing */
  pricing?: Maybe<Pricing>
  /** Retrieve document version */
  pricingVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple pricings */
  pricings: Array<Pricing>
  /** Retrieve multiple pricings using the Relay connection interface */
  pricingsConnection: PricingConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single socialMedia */
  socialMedia?: Maybe<SocialMedia>
  /** Retrieve document version */
  socialMediaVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple socialMedias */
  socialMedias: Array<SocialMedia>
  /** Retrieve multiple socialMedias using the Relay connection interface */
  socialMediasConnection: SocialMediaConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
}

export type QueryAboutArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AboutWhereUniqueInput
}

export type QueryAboutVersionArgs = {
  where: VersionWhereInput
}

export type QueryAboutsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AboutOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AboutWhereInput>
}

export type QueryAboutsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AboutOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AboutWhereInput>
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryBannerArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: BannerWhereUniqueInput
}

export type QueryBannerVersionArgs = {
  where: VersionWhereInput
}

export type QueryBannersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<BannerOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<BannerWhereInput>
}

export type QueryBannersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<BannerOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<BannerWhereInput>
}

export type QueryContactArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ContactWhereUniqueInput
}

export type QueryContactVersionArgs = {
  where: VersionWhereInput
}

export type QueryContactsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ContactOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ContactWhereInput>
}

export type QueryContactsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ContactOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ContactWhereInput>
}

export type QueryHowWorkArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: HowWorkWhereUniqueInput
}

export type QueryHowWorkVersionArgs = {
  where: VersionWhereInput
}

export type QueryHowWorksArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<HowWorkOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<HowWorkWhereInput>
}

export type QueryHowWorksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<HowWorkOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<HowWorkWhereInput>
}

export type QueryMenuArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: MenuWhereUniqueInput
}

export type QueryMenuVersionArgs = {
  where: VersionWhereInput
}

export type QueryMenusArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<MenuOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<MenuWhereInput>
}

export type QueryMenusConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<MenuOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<MenuWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryPartnershipArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PartnershipWhereUniqueInput
}

export type QueryPartnershipVersionArgs = {
  where: VersionWhereInput
}

export type QueryPartnershipsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PartnershipOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PartnershipWhereInput>
}

export type QueryPartnershipsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PartnershipOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PartnershipWhereInput>
}

export type QueryPricingArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PricingWhereUniqueInput
}

export type QueryPricingVersionArgs = {
  where: VersionWhereInput
}

export type QueryPricingsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PricingOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PricingWhereInput>
}

export type QueryPricingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PricingOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<PricingWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QuerySocialMediaArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: SocialMediaWhereUniqueInput
}

export type QuerySocialMediaVersionArgs = {
  where: VersionWhereInput
}

export type QuerySocialMediasArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<SocialMediaOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<SocialMediaWhereInput>
}

export type QuerySocialMediasConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<SocialMediaOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<SocialMediaWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']
  b: Scalars['RGBAHue']
  g: Scalars['RGBAHue']
  r: Scalars['RGBAHue']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']
  /** Returns Markdown representation */
  markdown: Scalars['String']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation'
  affectedDocuments: Array<ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Operation description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>
  /** System stage field */
  stage: Stage
  /** operation Status */
  status: ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
  | About
  | Asset
  | Banner
  | Contact
  | HowWork
  | Menu
  | Partnership
  | Pricing
  | SocialMedia

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Release description */
  description?: Maybe<Scalars['String']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>
  /** The unique identifier */
  id: Scalars['ID']
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** Release Status */
  status: ScheduledReleaseStatus
  /** Release Title */
  title?: Maybe<Scalars['String']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  isActive?: InputMaybe<Scalars['Boolean']>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>
  errorMessage?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  isImplicit?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type SocialMedia = Node & {
  __typename?: 'SocialMedia'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<SocialMedia>
  /** List of SocialMedia versions */
  history: Array<Version>
  icon: SocialMedias
  /** The unique identifier */
  id: Scalars['ID']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  url: Scalars['String']
}

export type SocialMediaCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type SocialMediaDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type SocialMediaHistoryArgs = {
  limit?: Scalars['Int']
  skip?: Scalars['Int']
  stageOverride?: InputMaybe<Stage>
}

export type SocialMediaPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type SocialMediaScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type SocialMediaUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>
}

export type SocialMediaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: SocialMediaWhereUniqueInput
}

/** A connection to a list of items. */
export type SocialMediaConnection = {
  __typename?: 'SocialMediaConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<SocialMediaEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type SocialMediaCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  icon: SocialMedias
  updatedAt?: InputMaybe<Scalars['DateTime']>
  url: Scalars['String']
}

export type SocialMediaCreateManyInlineInput = {
  /** Connect multiple existing SocialMedia documents */
  connect?: InputMaybe<Array<SocialMediaWhereUniqueInput>>
  /** Create and connect multiple existing SocialMedia documents */
  create?: InputMaybe<Array<SocialMediaCreateInput>>
}

export type SocialMediaCreateOneInlineInput = {
  /** Connect one existing SocialMedia document */
  connect?: InputMaybe<SocialMediaWhereUniqueInput>
  /** Create and connect one SocialMedia document */
  create?: InputMaybe<SocialMediaCreateInput>
}

/** An edge in a connection. */
export type SocialMediaEdge = {
  __typename?: 'SocialMediaEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: SocialMedia
}

/** Identifies documents */
export type SocialMediaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialMediaWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialMediaWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialMediaWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<SocialMediaWhereStageInput>
  documentInStages_none?: InputMaybe<SocialMediaWhereStageInput>
  documentInStages_some?: InputMaybe<SocialMediaWhereStageInput>
  icon?: InputMaybe<SocialMedias>
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<SocialMedias>>>
  /** All values that are not equal to given value. */
  icon_not?: InputMaybe<SocialMedias>
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<SocialMedias>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  url?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>
}

export enum SocialMediaOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type SocialMediaUpdateInput = {
  icon?: InputMaybe<SocialMedias>
  url?: InputMaybe<Scalars['String']>
}

export type SocialMediaUpdateManyInlineInput = {
  /** Connect multiple existing SocialMedia documents */
  connect?: InputMaybe<Array<SocialMediaConnectInput>>
  /** Create and connect multiple SocialMedia documents */
  create?: InputMaybe<Array<SocialMediaCreateInput>>
  /** Delete multiple SocialMedia documents */
  delete?: InputMaybe<Array<SocialMediaWhereUniqueInput>>
  /** Disconnect multiple SocialMedia documents */
  disconnect?: InputMaybe<Array<SocialMediaWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing SocialMedia documents */
  set?: InputMaybe<Array<SocialMediaWhereUniqueInput>>
  /** Update multiple SocialMedia documents */
  update?: InputMaybe<Array<SocialMediaUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple SocialMedia documents */
  upsert?: InputMaybe<Array<SocialMediaUpsertWithNestedWhereUniqueInput>>
}

export type SocialMediaUpdateManyInput = {
  icon?: InputMaybe<SocialMedias>
  url?: InputMaybe<Scalars['String']>
}

export type SocialMediaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SocialMediaUpdateManyInput
  /** Document search */
  where: SocialMediaWhereInput
}

export type SocialMediaUpdateOneInlineInput = {
  /** Connect existing SocialMedia document */
  connect?: InputMaybe<SocialMediaWhereUniqueInput>
  /** Create and connect one SocialMedia document */
  create?: InputMaybe<SocialMediaCreateInput>
  /** Delete currently connected SocialMedia document */
  delete?: InputMaybe<Scalars['Boolean']>
  /** Disconnect currently connected SocialMedia document */
  disconnect?: InputMaybe<Scalars['Boolean']>
  /** Update single SocialMedia document */
  update?: InputMaybe<SocialMediaUpdateWithNestedWhereUniqueInput>
  /** Upsert single SocialMedia document */
  upsert?: InputMaybe<SocialMediaUpsertWithNestedWhereUniqueInput>
}

export type SocialMediaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SocialMediaUpdateInput
  /** Unique document search */
  where: SocialMediaWhereUniqueInput
}

export type SocialMediaUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialMediaCreateInput
  /** Update document if it exists */
  update: SocialMediaUpdateInput
}

export type SocialMediaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SocialMediaUpsertInput
  /** Unique document search */
  where: SocialMediaWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type SocialMediaWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type SocialMediaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialMediaWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialMediaWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialMediaWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<SocialMediaWhereStageInput>
  documentInStages_none?: InputMaybe<SocialMediaWhereStageInput>
  documentInStages_some?: InputMaybe<SocialMediaWhereStageInput>
  icon?: InputMaybe<SocialMedias>
  /** All values that are contained in given list. */
  icon_in?: InputMaybe<Array<InputMaybe<SocialMedias>>>
  /** All values that are not equal to given value. */
  icon_not?: InputMaybe<SocialMedias>
  /** All values that are not contained in given list. */
  icon_not_in?: InputMaybe<Array<InputMaybe<SocialMedias>>>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  url?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  url_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SocialMediaWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialMediaWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialMediaWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialMediaWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SocialMediaWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References SocialMedia record uniquely */
export type SocialMediaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export enum SocialMedias {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Whatsapp = 'whatsapp'
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Node & {
  __typename?: 'User'
  /** The time the document was created */
  createdAt: Scalars['DateTime']
  /** Get the document in other stages */
  documentInStages: Array<User>
  /** The unique identifier */
  id: Scalars['ID']
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind
  /** The username */
  name: Scalars['String']
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']
}

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']
  inheritLocale?: Scalars['Boolean']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>
  isActive?: InputMaybe<Scalars['Boolean']>
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>
  picture?: InputMaybe<Scalars['String']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>
  publishedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']
  revision: Scalars['Int']
  stage: Stage
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type HomepageQueryVariables = Exact<{ [key: string]: never }>

export type HomepageQuery = {
  __typename?: 'Query'
  menus: Array<{
    __typename?: 'Menu'
    links: Array<{ __typename?: 'Button'; name: string; url: string }>
  }>
  banners: Array<{
    __typename?: 'Banner'
    title?: string | null
    subtitle?: string | null
    image?: { __typename?: 'Asset'; url: string } | null
    button?: { __typename?: 'Button'; name: string; url: string } | null
  }>
  pricings: Array<{
    __typename?: 'Pricing'
    name: string
    link: string
    priceMonthly: number
    from?: boolean | null
    description?: string | null
    includedFeatures: Array<string>
  }>
  partnerships: Array<{
    __typename?: 'Partnership'
    name: string
    image: { __typename?: 'Asset'; url: string }
  }>
  contacts: Array<{
    __typename?: 'Contact'
    value: string
    icon?: Contacts | null
  }>
  abouts: Array<{
    __typename?: 'About'
    about?: string | null
    howWorks: string
    objetivo?: string | null
    visao?: string | null
    valores?: string | null
    name?: string | null
  }>
}

export const HomepageDocument = gql`
  query Homepage {
    menus {
      links(orderBy: order_ASC) {
        name
        url
      }
    }
    banners {
      title
      subtitle
      image {
        url
      }
      button {
        name
        url
      }
    }
    pricings {
      name
      link
      priceMonthly
      from
      description
      includedFeatures
    }
    partnerships {
      name
      image {
        url
      }
    }
    contacts {
      value
      icon
    }
    abouts {
      about
      howWorks
      objetivo
      visao
      valores
      name
    }
  }
`

export function useHomepageQuery(
  options?: Omit<Urql.UseQueryArgs<HomepageQueryVariables>, 'query'>
) {
  return Urql.useQuery<HomepageQuery, HomepageQueryVariables>({
    query: HomepageDocument,
    ...options
  })
}