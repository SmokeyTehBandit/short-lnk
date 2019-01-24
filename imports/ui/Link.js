import React from 'react';
import {Accounts} from 'meteor/accounts-base';

export default class Link extends React.Component{
    logOut(){
        Accounts.logout();
    }
    render(){
        return(
            <div>
                <h1>Your Links</h1>
                <button onClick={this.logOut.bind(this)}>Log out</button>
            </div>
          );
    }
}