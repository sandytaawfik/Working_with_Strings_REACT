import { useState } from "react";

export default function CheckBox(props) {
  const { label = "Label" } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          onChange={() => setIsChecked((prev) => !prev)}
          label={label}
          type="checkbox"
          checked={isChecked}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
