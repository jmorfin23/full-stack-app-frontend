import React from 'react';
import './index.css';


function EventsItem(props)  {
    return (
      <tr>
        <td>{props.event.title}</td>
        <td>{props.event.month}/{props.event.day}/{props.event.year}</td>
        <td colSpan="2">{props.event.notes}</td>
        <td>Delete Events</td>
        <td>
          <button className="btn btn-danger" onClick={() => {props.deleteEvent(props.event.event_id)}}>X</button>
        </td>
      </tr>
    );

  }


export default EventsItem;
