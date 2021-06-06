import { Component } from "react";
import ListGroup from "../todoList/ListGroup/ListGroup.js";
export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <h1 className='text-center mt-1 text-primary'>Todo List</h1>
        <div className="row justify-content-center">
          <ListGroup />
        </div>
        
      </div>
    );
  }
}
