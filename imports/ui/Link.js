import React from 'react';
import {browserHistory} from 'react-router';

export default class Link extends React.Component{
    logOut(){
        browserHistory.push("/");
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