import React from "react";
import { Callout, Card, Button } from "@blueprintjs/core";

const taskNameToId = name => {
  return `task-${name
    .toLowerCase()
    .split(" ")
    .join("-")}`;
};

const Task = ({ name }) => {

  return (
    <div data-testid={taskNameToId(name)}>{name}</div>
  );
};

export default Task;
