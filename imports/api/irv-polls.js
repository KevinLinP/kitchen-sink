import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { DefaultAllows } from './default-allows';

export const IrvPolls = new Mongo.Collection('irvPolls');

IrvPolls.schema = new SimpleSchema({
  prompt: {type: String},
  options: {
    type: Object,
    blackbox: true
  },
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
IrvPolls.attachSchema(IrvPolls.schema);
IrvPolls.allow(DefaultAllows);

if (Meteor.isServer) {
  Meteor.publish('irvPolls', function () {
    return IrvPolls.find({});
  });
  Meteor.publish('irvPoll', function (id) {
    return IrvPolls.findOne(id);
  });
}
