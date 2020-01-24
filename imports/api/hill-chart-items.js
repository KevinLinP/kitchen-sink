import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { DefaultAllows } from './default-allows';

export const HillChartItems = new Mongo.Collection('hill-chart-items');

HillChartItems.schema = new SimpleSchema({
  hillChartId: {type: String},
  name: {type: String},
  xPos: {type: Number},
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
HillChartItems.attachSchema(HillChartItems.schema);
HillChartItems.allow({
  insert(userId, doc) {
    return true;
  },
  update(userId, doc, fields, modifier) {
    return true;
  },
  remove(userId, doc) {
    return true;
  }
});

if (Meteor.isServer) {
  Meteor.publish('hillChartItems', function (hillChartId) {
    return HillChartItems.find({hillChartId});
  });
}
