import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema'; 
//Had to update to simpl-schema@1.5.0
//His version was causing weird errors

Meteor.startup(() => {
  // code to run on server at startup

  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //   },
  //   hourlyWage: {
  //     type: Number,
  //     min: 0
  //   },
  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // });
});
