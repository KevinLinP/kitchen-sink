import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { DefaultAllows } from './default-allows';

export const UpcomingEvents = new Mongo.Collection('upcomingEvents');

UpcomingEvents.schema = new SimpleSchema({
  name: {type: String},
  eventAt: {type: Date},
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
UpcomingEvents.attachSchema(UpcomingEvents.schema);
UpcomingEvents.allow(DefaultAllows);

if (Meteor.isServer) {
  Meteor.publish('upcomingEvents', function () {
    if (this.userId) {
      return UpcomingEvents.find({});
    }
  });
}
