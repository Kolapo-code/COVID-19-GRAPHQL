const { MetadatumList, Countries_summaryList, GlobalList, GlobalsList, Countries_summarysList } = require("../Metadata, Countries_summary, Global")

const resolvers = {
   Query: {
       countries_summary() {
                     return Countries_summaryList;
       },
       countries_summarys() {
                      return Countries_summarysList;
       },
       global() {
          return GlobalList;
       },
       globals() {
           return GlobalsList;
       },
       metadatum() {
             return MetadatumList;
       },
   },

};

module.exports = { resolvers };