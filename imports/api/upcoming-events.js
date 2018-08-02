import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const UpcomingEvents = new Mongo.Collection('upcomingEvents');

UpcomingEvents.schema = new SimpleSchema({
  name: {type: String},
  eventAt: {type: Date},
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
UpcomingEvents.attachSchema(UpcomingEvents.schema);

Meteor.methods({
  'upcomingEvents.insert'({name, eventAt}) {
    UpcomingEvents.insert({name, eventAt});
  },
  'upcomingEvents.remove'(id) {
    UpcomingEvents.remove(id);
  },
});

if (Meteor.isServer) {
  Meteor.publish('upcomingEvents', function () {
    return UpcomingEvents.find({});
  });
}
