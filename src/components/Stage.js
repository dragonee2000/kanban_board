import React, { useState } from "react";

import Task from "./Task";
import { Card, Button, InputGroup, Collapse } from "@blueprintjs/core";

const Stage = ({ name, stageId, tasks }) => {
  const [addTask, setAddTask] = useState(false);
  const stageTestId = `stage-${stageId}`;

  return (
    <div data-testid={stageTestId}>
      {name}
      {tasks.map((name, taskid) => (
        <Task key={taskid} 
        name={name} 
        />
      ))}
      {addTask ? 
      <InputGroup 
      placeholder="Task Name"
      rightElement={
        <Button text="Confirm" minimal/>
      }
      /> : 
      <Button 
      onClick={() => setAddTask(true)}
      text="Add Task" 
      />

      }
      
    </div>
  );
};

export default Stage;
