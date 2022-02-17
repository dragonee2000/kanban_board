import React, { Component } from "react";
import { Card, Button, InputGroup } from "@blueprintjs/core";

import "./App.css";
import Stage from "./components/Stage";
import { taskNameToId } from "./components/Task";

export const NUM_STAGES = 4;
export const STAGE_NAMES = ["Backlog", "To Do", "Ongoing", "Done"];
export const SELECTED_TASK_COLOR = "rgb(16, 107, 163)";
export const TASK_NAME = [["task 1", "task 2"], ["task 3"], ["task 4"], []];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Kanban board</h1>
        <div
          style={{
            display: "flex"
          }}
        >
          {STAGE_NAMES.map((name, id) => (
            <Card key={id}>
              <Stage name={name} stageId={id} tasks={TASK_NAME[id]}/>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
