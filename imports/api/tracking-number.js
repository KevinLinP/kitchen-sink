import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const TrackingNumbers = new Mongo.Collection('trackingNumbers');

TrackingNumbers.schema = new SimpleSchema({
  trackingId: {type: String},
  description: {type: String},
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
TrackingNumbers.attachSchema(TrackingNumbers.schema);

if (Meteor.isServer) {
  Meteor.publish('trackingNumbers', function () {
    return TrackingNumbers.find({});
  });
}
