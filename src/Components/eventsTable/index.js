import React, {Component} from 'react';
import './index.css';
import EventsItem from '../eventsItem';

function EventsTable(props)  {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th colSpan="2">Notes</th>
            <th>Delete Events</th>
          </tr>
        </thead>
        <tbody>
          { props.events &&
              props.events.map( event =>
                <EventsItem
                  event={event}
                  key={event.event_id}
                  deleteEvent={props.deleteEvent}
                />
              )
          }
        </tbody>
      </table>
    );

  }


export default EventsTable;
