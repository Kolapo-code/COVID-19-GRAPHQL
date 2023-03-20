const { gql } = require('apollo-server');

const typeDefs = gql` 
   type Countries_summary {
       
       _id: ID

       combined_names: [String]

       confirmed: Int

       country: String

       country_codes: [Int]

       country_iso2s: [String]
       
       country_iso3s: [String]

       date: Int

       deaths: Int

       population: Int

       recovered: Int

       states: [String]

       uids: [Int]
   }
   
   type Global {
       
       _id: ID

       combined_name: String

       confirmed: Int

       country: String

       country_code: Int

       country_iso2: String

       country_iso3: String

       date: Int

       deaths: Int

       loc: GlobalLoc

       population: Int

       recovered: Int

       state: String

       uid: Int
   }

   type GlobalLoc {
        
        coordinates: [Float]

        type: String
   }

   input Countries_summaryQueryInput {
confirmed_lt: Int
_id_lte: ID
combined_names: [String]
country_iso3s_in: [String]
deaths_gte: Int
states: [String]
states_exists: Boolean
combined_names_exists: Boolean
country_codes: [Int]
country_iso2s_exists: Boolean
country_gte: String
confirmed_ne: Int
recovered_lt: Int
deaths_ne: Int
_id_ne: ID
states_in: [String]
recovered_ne: Int
population_lte: Int
country_iso3s_nin: [String]
population_ne: Int
confirmed_gt: Int
recovered_nin: [Int]
country_iso2s_nin: [String]
date_exists: Boolean
country_lte: String
AND: [Countries_summaryQueryInput!]
recovered_gte: Int
date_nin: [Int]
country_ne: String
_id: ID
country_codes_nin: [Int]
deaths_in: [Int]
deaths_nin: [Int]
country_iso3s: [String]
date_gte: Int
date_in: [Int]
deaths_gt: Int
date: Int
combined_names_nin: [String]
recovered: Int
recovered_exists: Boolean
_id_gt: ID
uids_exists: Boolean
_id_exists: Boolean
population_gte: Int
date_ne: Int
OR: [Countries_summaryQueryInput!]
confirmed: Int
country: String
_id_in: [ID]
country_gt: String
recovered_lte: Int
country_codes_exists: Boolean
confirmed_in: [Int]
states_nin: [String]
uids: [Int]
date_gt: Int
population_in: [Int]
country_iso3s_exists: Boolean
country_iso2s_in: [String]
country_in: [String]
confirmed_lte: Int
recovered_in: [Int]
deaths_lte: Int
country_exists: Boolean
_id_nin: [ID]
_id_lt: ID
_id_gte: ID
date_lt: Int
uids_in: [Int]
country_nin: [String]
recovered_gt: Int
population_exists: Boolean
deaths_exists: Boolean
country_iso2s: [String]
deaths_lt: Int
confirmed_nin: [Int]
combined_names_in: [String]
confirmed_exists: Boolean
population_lt: Int
deaths: Int
uids_nin: [Int]
population_nin: [Int]
date_lte: Int
country_codes_in: [Int]
population: Int
country_lt: String
confirmed_gte: Int
population_gt: Int
   }

   input GlobalLocQueryInput {
type_nin: [String]
type_lt: String
coordinates_nin: [Float]
OR: [GlobalLocQueryInput!]
coordinates_in: [Float]
type_gt: String
type_ne: String
type_exists: Boolean
coordinates_exists: Boolean
type_gte: String
coordinates: [Float]
type: String
type_lte: String
type_in: [String]
AND: [GlobalLocQueryInput!]
   }

   input GlobalQueryInput {
confirmed_exists: Boolean
state_lte: String
country_iso3: String
state_in: [String]
recovered_gt: Int
recovered_lte: Int
confirmed_gt: Int
deaths_gt: Int
date_in: [Int]
country_code_gte: Int
state_gt: String
confirmed_lte: Int
population_in: [Int]
country_iso3_lte: String
uid_nin: [Int]
uid_exists: Boolean
state: String
combined_name: String
deaths_lte: Int
state_ne: String
state_nin: [String]
_id_gte: ID
loc: GlobalLocQueryInput
combined_name_nin: [String]
confirmed_lt: Int
country_iso2_lt: String
country_iso3_ne: String
date_gte: Int
combined_name_in: [String]
combined_name_exists: Boolean
country_gt: String
combined_name_gt: String
AND: [GlobalQueryInput!]
state_gte: String
country_lte: String
_id_ne: ID
country_iso2_gte: String
population_lte: Int
country_iso3_gt: String
combined_name_lte: String
population_gte: Int
country_nin: [String]
recovered_in: [Int]
country_iso3_lt: String
combined_name_ne: String
confirmed_gte: Int
state_exists: Boolean
confirmed: Int
_id_lt: ID
uid_in: [Int]
country_code_nin: [Int]
deaths_gte: Int
uid_gte: Int
confirmed_ne: Int
deaths_exists: Boolean
country_iso2_lte: String
loc_exists: Boolean
country_iso3_exists: Boolean
deaths_ne: Int
country_iso3_in: [String]
date_nin: [Int]
uid_lt: Int
country_code_exists: Boolean
country_iso3_nin: [String]
confirmed_in: [Int]
recovered_exists: Boolean
_id: ID
state_lt: String
country_in: [String]
country_code_lt: Int
date_ne: Int
date: Int
country_iso2_exists: Boolean
country_ne: String
recovered_lt: Int
country_iso2_nin: [String]
population_nin: [Int]
population_lt: Int
recovered: Int
country_iso2_gt: String
recovered_nin: [Int]
deaths: Int
uid: Int
_id_gt: ID
deaths_lt: Int
country_lt: String
date_gt: Int
country_iso3_gte: String
country: String
combined_name_gte: String
OR: [GlobalQueryInput!]
confirmed_nin: [Int]
_id_in: [ID]
_id_nin: [ID]
country_exists: Boolean
recovered_gte: Int
_id_exists: Boolean
date_exists: Boolean
country_gte: String
country_code_ne: Int
deaths_nin: [Int]
country_iso2_ne: String
recovered_ne: Int
country_code: Int
country_iso2_in: [String]
date_lte: Int
population: Int
country_code_lte: Int
population_gt: Int
population_ne: Int
_id_lte: ID
population_exists: Boolean
uid_gt: Int
country_code_in: [Int]
country_code_gt: Int
uid_lte: Int
date_lt: Int
uid_ne: Int
deaths_in: [Int]
combined_name_lt: String
country_iso2: String
   }

   input MetadatumQueryInput {
iso3s: [String]
last_date: Int
OR: [MetadatumQueryInput!]
last_date_nin: [Int]
uids_in: [Int]
last_date_exists: Boolean
first_date_in: [Int]
states_nin: [String]
_id_exists: Boolean
countries_in: [String]
last_date_ne: Int
states_us_exists: Boolean
first_date_lt: Int
AND: [MetadatumQueryInput!]
_id_nin: [String]
uids_exists: Boolean
_id_gt: String
first_date_lte: Int
states_exists: Boolean
last_date_gt: Int
first_date_nin: [Int]
first_date: Int
counties_exists: Boolean
last_date_gte: Int
states: [String]
iso3s_nin: [String]
first_date_exists: Boolean
last_date_lte: Int
last_date_in: [Int]
states_us_nin: [String]
first_date_gt: Int
counties_in: [String]
first_date_gte: Int
countries_exists: Boolean
iso3s_exists: Boolean
states_us: [String]
states_in: [String]
iso3s_in: [String]
_id_lt: String
countries_nin: [String]
uids_nin: [Int]
uids: [Int]
last_date_lt: Int
first_date_ne: Int
counties_nin: [String]
_id: String
_id_in: [String]
_id_lte: String
countries: [String]
states_us_in: [String]
_id_gte: String
_id_ne: String
counties: [String]
   }

   type Metadatum {
       
       _id: String

        counties: [String]

        countries: [String]

        first_date: Int

        iso3s: [String]

        last_date: Int

        states: [String]

        states_us: [String]

        uids: [Int]
   }

   type __EnumValue {
       
       name: String!

       description: String
   }

   type __Field {
       
       name: String!

       description: String

       args: [__InputValue!]!

       type: __Type!
   }

   type __InputValue {
       
       name: String!

       description: String

       type: __Type!

       # A GraphQL-formatted string representing the default value for this input value.
       defaultValue: String
   }

   type __Schema {
       
       # A list of all types supported by this server.
       types: [__Type!]!

       # The type that query operations will be rooted at.
       queryType: __Type!

       # If this server supports mutation, the type that mutation operations will be
       # rooted at.
       mutationType: __Type

       # If this server support subscription, the type that subscription operations will
       # be rooted at.
       subscriptionType: __Type

       # A list of all directives supported by this server.
       directives: [__Directive!]!
   }

   type __Type {
       
       kind: __TypeKind!

       name: String

       description: String

       interfaces: [__Type!]

       possibleTypes: [__Type!]

       inputFields: [__InputValue!]

       ofType: __Type
   }

   type Query {

       # Arguments
       # query:
       countries_summary(query: Countries_summaryQueryInput): Countries_summary

       # Arguments
       # query:
       # limit:
       # sortBy:
       countries_summarys(
           query: Countries_summaryQueryInput,
           limit: Int
       ): [Countries_summary]!

       # Arguments
       # query:
       global(query: GlobalQueryInput): Global

       # Arguments
       # query:
       # limit:
       # sortBy:
       globals(query: GlobalQueryInput, limit: Int): [Global]!

       # Arguments
       # query:
       metadatum(query: MetadatumQueryInput): Metadatum
   }
`;

module.exports = { typeDefs };