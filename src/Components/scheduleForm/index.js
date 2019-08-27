import React, {Component} from 'react';
import './index.css';


function ScheduleForm(props)  {
    return (
      <form onSubmit={props.saveEvent}>
      <div className="form-group">
        <label>E-mail</label>
        <input type="email" className="form-control" name="email" />
      </div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" name="title" />
        </div>
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
        <div className="form-group">
          <label>Notes</label>
          <textarea type="text" className="form-control" name="notes" />
        </div>
        <button type="submit" className="btn btn-primary">Save Event</button>
      </form>
    );
  }


export default ScheduleForm;
