import React from "react";
import Calendar from "rc-year-calendar";

const currentYear = new Date().getFullYear();

class MyCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        this.props.leaves.map((leave) => {
          return {
            name: leave.type,
            startDate: leave.duration_from,
            endDate: leave.duration_to,
          };
        }),
        // {
        //   name: "Google I/O",
        //   startDate: new Date(currentYear, 1, 28),
        //   endDate: new Date(currentYear, 4, 29),
        // },
        // {
        //   name: "Microsoft Convergence",
        //   startDate: new Date(currentYear, 2, 16),
        //   endDate: new Date(currentYear, 2, 19),
        // },
        // {
        //   name: "Microsoft Build Developer Conference",
        //   startDate: new Date(currentYear, 3, 29),
        //   endDate: new Date(currentYear, 4, 1),
        // },
        // {
        //   name: "Apple Special Event",
        //   startDate: new Date(currentYear, 8, 1),
        //   endDate: new Date(currentYear, 8, 1),
        // },
        // {
        //   name: "Apple Keynote",
        //   startDate: new Date(currentYear, 8, 9),
        //   endDate: new Date(currentYear, 8, 9),
        // },
        // {
        //   name: "Chrome Developer Summit",
        //   startDate: new Date(currentYear, 10, 17),
        //   endDate: new Date(currentYear, 10, 18),
        // },
        // {
        //   name: "F8 2015",
        //   startDate: new Date(currentYear, 2, 25),
        //   endDate: new Date(currentYear, 2, 26),
        // },
        // {
        //   name: "Yahoo Mobile Developer Conference",
        //   startDate: new Date(currentYear, 7, 25),
        //   endDate: new Date(currentYear, 7, 26),
        // },
        // {
        //   name: "Android Developer Conference",
        //   startDate: new Date(currentYear, 11, 1),
        //   endDate: new Date(currentYear, 11, 4),
        // },
        // {
        //   name: "LA Tech Summit",
        //   startDate: new Date(currentYear, 10, 17),
        //   endDate: new Date(currentYear, 10, 17),
        // },
      ],
      currentEvent: null,
    };
  }

  saveCurrentEvent() {
    if (this.state.currentEvent.id === undefined) {
      // Add event
      this.state.currentEvent.id =
        Math.max(...this.state.dataSource.map((evt) => evt.id)) + 1;
      this.setState({
        dataSource: this.state.dataSource.concat([this.state.currentEvent]),
        currentEvent: null,
      });
    } else {
      // Update event
      var ds = this.state.dataSource;
      var index = ds.findIndex((evt) => evt.id == this.state.currentEvent.id);
      ds[index] = this.state.currentEvent;
      this.setState({ dataSource: ds, currentEvent: null });
    }

    this.setState({ currentEvent: null });
  }

  componentDidMount() {
    console.log(this.props.leaves);

    const data = this.props.leaves.map((leave) => {
      return {
        name: leave.type,
        startDate: leave.duration_from,
        endDate: leave.duration_to,
      };
    });

    console.log(data);

    this.setState({
      dataSource: data,
    });
  }

  render() {
    return (
      <div>
        <Calendar
          //   minDate={new Date()}
          style="border"
          enableRangeSelection={true}
          enableContextMenu={true}
          contextMenuItems={[
            {
              text: "",
            },
            {
              text: "",
            },
          ]}
          onRangeSelected={(e) =>
            this.setState({
              currentEvent: { startDate: e.startDate, endDate: e.endDate },
            })
          }
          dataSource={this.state.dataSource}
        />
      </div>
    );
  }
}

export default MyCalendar;
