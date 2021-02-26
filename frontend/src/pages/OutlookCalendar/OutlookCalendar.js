import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const customDayPropGetter = (date) => {
  if (date == moment().toDate()) { 
    return {
      className: 'special-day',
      style: {
        border: 'solid 3px #afa',
      },
    }
  }
  else {
    return {
      className: 'average-day',
      style: {
        border: 'solid 1px #D3D3D3',
      },
    }
  }
}

const testEvents = [
  {
    start: moment().toDate(),
    end: moment()
      .add(1, "days")
      .toDate(),
    title: "Some title",
    note: "Here is a note"
  }
]
const selectedEvent = (event, e) => {
    event.title = "wow"
    const res = prompt(`you tapped on an event with the title ${event.title}. \n
      Note is... ${event.note}. Please change the note to something.`)
    
    event.note = res
}

const changeBackgroundColor = (event, start, end, isSelected) => {
  let newStyle = {
    // changes the background color of the event
    backgroundColor: "yellow",
    //changes the color of the text
    color: "red"
  }
  return {
    style: newStyle
  }
}

class OutlookCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: testEvents
    }
  }

  render() {
    return (
      <div>
        { <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh", font_family: "roboto" }}
          dayPropGetter={customDayPropGetter}
          onSelectEvent={selectedEvent}
          eventPropGetter={changeBackgroundColor}
        /> }
      </div>
    );
  }
}

export default OutlookCalendar;