import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Bookmarks = new Mongo.Collection('bookmarks');

Bookmarks.schema = new SimpleSchema({
  name: {type: String},
  url: {type: String},
  iconUrl: {type: String},
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
Bookmarks.attachSchema(Bookmarks.schema);

Meteor.methods({
  'bookmarks.insert'({name, url, iconUrl}) {
    Bookmarks.insert({name, url, iconUrl}, (error, result) => {
    });
  }
});

if (Meteor.isServer) {
  Meteor.publish('bookmarks', function () {
    return Bookmarks.find({});
  });
}
