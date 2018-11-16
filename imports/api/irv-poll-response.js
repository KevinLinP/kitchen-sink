import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const IrvPollResponses = new Mongo.Collection('irvPollResponses');

IrvPollResponses.schema = new SimpleSchema({
  pollId: {type: String},
  name: {type: String},
  ranking: {type: Array},
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
IrvPollResponses.attachSchema(IrvPollResponses.schema);

if (Meteor.isServer) {
  Meteor.publish('irvPollResponses', function (pollId) {
    return IrvPollResponses.find({
      pollId
    });
  });
}
