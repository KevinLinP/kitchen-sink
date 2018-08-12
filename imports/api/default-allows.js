export const DefaultAllows = {
  insert(userId, doc) {
    return !!userId;
  },
  update(userId, doc, fields, modifier) {
    return !!userId;
  },
  remove(userId, doc) {
    return !!userId;
  }
};
