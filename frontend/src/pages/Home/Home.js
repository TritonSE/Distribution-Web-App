import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import {isAuthenticated} from "../../auth";
import OutlookCalendar from "../OutlookCalendar/OutlookCalendar";


/**
 * Landing page that contains a calender with corresponding events
 */
class Home extends Component {
  render() { 
    return ( (!isAuthenticated()) ? <Redirect to="/login" /> :
      (<div>
        <OutlookCalendar />
      </div>
    ));
  }
}

export default Home;