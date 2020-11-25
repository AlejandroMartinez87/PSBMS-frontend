import React, { Component, useState } from "react";
import DateTime from "../Data/DateTime";
import EventForm from "../Components/EventForm";
import EventList from "../Components/EventList";
import Controls from "../Components/Controls";
import {db} from '../firebase';

const style = {
  backgroundColor: "rgb(93,93,93)",
  color: "#ccc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  padding: "0em 1em"
};

// const [name,setName]=useState("");
// const [dtstart,setDtstart]=useState("");
// const [message,setMessage]=useState("");

class EventContainer extends Component {
// function EventContainer(){
  constructor (props) {
    super(props);
    this.state = {
      dt: "",
      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {},
      events: [
        {
          uid: 1578710655009,
          dtstart: new Date("09/01/2021 23:00"),
          dtend: new Date("09/01/2021 23:45"),
          title: "Doctor's Appointment",
          location: "ParkLand",
          description: "My annual physical exam"
        },
        {
          uid: 1578710655011,
          dtstart: new Date("7/15/2021 17:15"),
          dtend: new Date("7/15/2021 19:15"),
          title: "Dinner Date",
          location: "Dallas",
          description: "Dinner with Jeef"
        },
        {
          uid: 1578710655005,
          dtstart: new Date("5/15/2021 17:15"),
          dtend: new Date("5/15/2021 19:15"),
          title: "Business Summit",
          location: "New York",
          description: "Amazon Future"
        }
      ]
    };
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
  }
  handleShowFormClick() {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }
  handleFormCancel() {
    this.setState({
      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {}
    });
  }
  handleFormSubmit(event) {
    let events = this.state.events;
    const eventIndex = events.findIndex(obj => {
      return obj.uid === event.uid;
    });
    if (eventIndex === -1) {
      events.push(event);
    } else {
      events[eventIndex] = event;
    }
    this.setState({
      events: events,
      formVisible: false
    });
  }
  removeEvent(array, uid) {
    const index = array.findIndex(obj => {
      return obj.uid === uid;
    });
    return index >= 0
      ? [...array.slice(0, index), ...array.slice(index + 1)]
      : array;
  }
  handleRemoveItem(uid) {
    const events = this.removeEvent(this.state.events, uid);
    this.setState({ events: events });
  }
  handleEditItem(node) {
    this.setState({
      selectedEvent: node,
      hasSelectedEvent: true,
      formVisible: true
    });
  }
  componentDidMount() {
    const dt = new DateTime();
    const currentDateTime = dt.getCurrentDateTime();
    this.setState({
      dt: currentDateTime
    });
  }
  render() {
    return (
      <div id={this.props.id} style={style}>
        <Controls
          onShowFormClick={this.handleShowFormClick}
          formVisible={this.state.formVisible}
        />
        {this.state.formVisible ? (
          <EventForm
            formVisible={this.state.formVisible}
            formTitle="Schedule an Event"
            onFormCancel={this.handleFormCancel}
            onFormSubmit={this.handleFormSubmit}
            selectedEvent={this.state.selectedEvent}
            hasSelectedEvent={this.state.hasSelectedEvent}
          />
        ) : null}
        <EventList
          events={this.state.events}
          onRemoveItem={this.handleRemoveItem}
          onEditItem={this.handleEditItem}
        />
      </div>
    );
  }
}

export default EventContainer;
