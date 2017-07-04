import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import events from './events';

import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

BigCalendar.momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(BigCalendar);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DragAndDropCalendar
          selectable
          events={events}
          onEventDrop={() => console.log('Dropped')}
          defaultView='work_week'
          views={['work_week']}
          defaultDate={new Date(2015, 3, 12)}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
