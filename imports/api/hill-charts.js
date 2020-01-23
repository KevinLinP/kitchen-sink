import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { DefaultAllows } from './default-allows';

export const HillCharts = new Mongo.Collection('hill-charts');

HillCharts.schema = new SimpleSchema({
  name: {type: String},
  createdAt: {type: Date, autoValue: () => {
    return new Date();
  }}
});
HillCharts.attachSchema(HillCharts.schema);
HillCharts.allow(DefaultAllows);

if (Meteor.isServer) {
  Meteor.publish('hill-charts', function () {
    if (this.userId) {
      return HillChartItems.find();
    }
  });

  Meteor.publish('hill-chart', function (id) {
    return HillChartItems.find(id);
  });
}
