module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.SessionAPI.getSessions(args);
    },
    sessionById: (parent, { id }, { dataSources }, info) => {
      return dataSources.SessionAPI.getSessionById(id);
    },
  },
};
