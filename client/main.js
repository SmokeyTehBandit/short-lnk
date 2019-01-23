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
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import './main.html'; //I have no idea why it needs this when the last project didnt
import Signup from '../imports/ui/Signup';
import Link from '../imports/ui/Link';
import NotFound from '../imports/ui/NotFound';
import Login from '../imports/ui/Login';

// const routes = (
//   <Router>
//     <Switch>
//       <Route exact path ="/" component={Login}/>
//       <Route exact path ="/signup" component={Signup}/>
//       <Route exact path ="/links" component={Link}/>
//       <Route exact path ="*" component={NotFound}/>
//     </Switch>
//   </Router>
// );

const routes = (
  <Router history={browserHistory}>
    <Route path = "/" component={Login}/>
    <Route path = "/signup" component={Signup}/>
    <Route path = "/links" component={Link}/>
    <Route path = "*" component={NotFound}/>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
