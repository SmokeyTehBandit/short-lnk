/* 
 * So I ended up having to follow a Q/A from sec 6 lec 54 which 
 * described how to set up routing with the newer version of react-router.
 * It also works if you go back and use the specific versions that he uses,
 * which I may end up doing if newer versions complicate things further
 * 
 * Update: Decided to go back and change to the version that Andrew uses,
 * was becoming too complicated in later videos
 */

import {Meteor} from 'meteor/meteor';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';

import './main.html'; //I have no idea why it needs this when the last project didnt
import {routes, onAuthChange} from '../imports/routes/routes';

Tracker.autorun(() =>{
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
