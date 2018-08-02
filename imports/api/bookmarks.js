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

// Bookmarks.update({_id: 'pqJ7kP5kPZdScZKpa'}, {$set: {iconUrl: 'https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png'}})
Meteor.methods({
  'bookmarks.insert'({name, url, iconUrl}) {
    Bookmarks.insert({name, url, iconUrl}, (error, result) => {
    });
  },
  'bookmarks.remove'(id) {
    Bookmarks.remove(id);
  },
});

if (Meteor.isServer) {
  Meteor.publish('bookmarks', function () {
    return Bookmarks.find({});
  });
}
