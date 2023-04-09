import "./styles.css";
import { useState } from "react";
import Radio from "./Radio";

export default function RadioGroup(props) {
  const {
    values = ["Student", "Instructor"],
    groupName = "group",
    defaultCheckedIndex = 0
  } = props;
  return (
    <div>
      {values.map((value, i) => {
        return (
          <Radio
            className="custom-radio"
            value={value}
            groupName={groupName}
            defaultChecked={defaultCheckedIndex === i}
          />
        );
      })}
    </div>
  );
}
