import React, {Component} from 'react';
import './index.css';


function EventsForm(props)  {
    return (
      <form onSubmit={props.getEvents}>
        <div className="form-group">
          <label>Day</label>
          <input type="number" className="form-control" name="day" />
        </div>
        <div className="form-group">
          <label>Month</label>
          <input type="number" className="form-control" name="month" />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input type="number" className="form-control" name="year" />
        </div>
        <button type="submit" className="btn btn-primary" name="notes">Get Events</button>
      </form>
    );
  }


export default EventsForm;
