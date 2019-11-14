import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { DefaultAllows } from './default-allows';

export const Locations = new Mongo.Collection('bookmarks');

Locations.schema = new SimpleSchema({
  name: {type: String},
  lat: {type: String},
  long: {type: String},
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
Locations.attachSchema(Locations.schema);
Locations.allow(DefaultAllows);

if (Meteor.isServer) {
  Meteor.publish('locations', function () {
    if (this.userId) {
      return Locations.find({});
    }
  });
}
