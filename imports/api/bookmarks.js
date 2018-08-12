import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { DefaultAllows } from './default-allows';

export const Bookmarks = new Mongo.Collection('bookmarks');

Bookmarks.schema = new SimpleSchema({
  position: {type: Number, defaultValue: 99},
  name: {type: String},
  url: {type: String},
  iconUrl: {type: String},
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
Bookmarks.attachSchema(Bookmarks.schema);
Bookmarks.allow(DefaultAllows);

if (Meteor.isServer) {
  Meteor.publish('bookmarks', function () {
    if (this.userId) {
      return Bookmarks.find({});
    }
  });
}
