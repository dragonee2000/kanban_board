import React, { useState } from "react";

import Task from "./Task";
import { Card, Button, InputGroup, Collapse } from "@blueprintjs/core";

const Stage = ({ name, stageId }) => {
  const stageTestId = `stage-${stageId}`;

  return <div data-testid={stageTestId}>Stage</div>;
};

export default Stage;
