import { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <li
        id={this.props.id}
        className={
          
          this.props.status
            ? "list-group-item list-group-item-action"
            : "list-group-item list-group-item-action list-group-item-primary text-decoration-line-through"
        }
      >
        {this.props.children}
      </li>
    );
  }
}
