import { Component } from "react";

import ListItem from "../ListItem/ListItem";
export default class ListGroup extends Component {
  state = {
    textTask: "",
    list: [],
  };
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.textTask) {
      this.setState({
        list: [
          ...this.state.list,
          { key: Date.now(), textTask: this.state.textTask, status: false },
        ],
      });
    }

    this.setState({
      textTask: "",
    });
  };

  handleListClick = (e) => {
    let index = this.state.list.findIndex(
      (item) => item.key === +e.target.closest("li").id
    );

    this.setState({
      list: [
        ...this.state.list.slice(0, index),

        {
          key: this.state.list[index].key,
          textTask: this.state.list[index].textTask,
          status: !this.state.list[index].status,
        },
        ...this.state.list.slice(index + 1),
      ],
    });
  };
 
  render() {
    return (
      <div>
        <ul className="list-group p-1" onClick={this.handleListClick}>
          {this.state.list.map((item) => {
            return (
              <ListItem key={item.key} status={item.status} id={item.key}>
                {item.textTask}
              </ListItem>
            );
          })}
        </ul>
        <form className="row mt-5" onSubmit={this.handleFormSubmit}>
          <div className="col">
            <input
              onChange={this.handleInputChange}
              name="textTask"
              type="text"
              className="form-control"
              placeholder="Task"
              value={this.state.textTask}
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              add Task
            </button>
          </div>
        </form>
      </div>
    );
  }
}
