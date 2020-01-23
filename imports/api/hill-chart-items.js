import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { DefaultAllows } from './default-allows';

export const HillChartItems = new Mongo.Collection('hill-chart-items');

HillChartItems.schema = new SimpleSchema({
  name: {type: String},
  xPosition: {type: Number}
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
HillChartItems.attachSchema(HillChartItems.schema);
HillChartItems.allow(DefaultAllows);

if (Meteor.isServer) {
  Meteor.publish('hill-chart-items', function (hillChartId) {
    return HillChartItems.find({hillChartId});
  });
}
