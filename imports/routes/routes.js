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
import {Router, Route, browserHistory} from 'react-router';

import './../../client/main.html'; //I have no idea why it needs this when the last project didnt
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

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

const unauthenticatedPages = ['/','/signup'];
const authenticatedPages = ['/links'];
const onEnterPublicPage = () => {
  if(Meteor.userId()){
    browserHistory.replace('/links');
  }
};
const onEnterPrivatePage = () => {
  if(!Meteor.userId()){
    browserHistory.replace('/');
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  
  if(isUnauthenticatedPage && isAuthenticated){
    browserHistory.replace('/links');
  }else if(isAuthenticatedPage && !isAuthenticated){
    browserHistory.replace('/');
  }
};
export const routes = (
  <Router history={browserHistory}>
    <Route path = "/" component={Login} onEnter={onEnterPublicPage}/>
    <Route path = "/signup" component={Signup} onEnter={onEnterPublicPage}/>
    <Route path = "/links" component={Link} onEnter={onEnterPrivatePage}/>
    <Route path = "*" component={NotFound}/>
  </Router>
);