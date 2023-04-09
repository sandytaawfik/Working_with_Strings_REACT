import { useState } from "react";
import { motion } from "framer-motion";

export default function Input(props) {
  const { type = "text", label = "Label", value, onChange } = props;
  const [focused, setFocused] = useState(false);
  const [isFilledIn, setFilledIn] = useState(false);

  const checkFoucusAndFill =
    (focused && isFilledIn) ||
    (focused && !isFilledIn) ||
    (!focused && isFilledIn);

  return (
    <div>
      <motion.label
        style={labelStyle}
        initial={{ y: 22 }}
        animate={{
          y: checkFoucusAndFill ? 8 : 22,
          scale: checkFoucusAndFill ? 0.75 : 1
        }}
        whileHover={{ scale: 0.6 }}
      >
        {label}
      </motion.label>
      <input
        type={type}
        style={inputStyle}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

const labelStyle = {
  position: "absolute",
  marginLeft: 15,
  fontSize: 16,
  fontFamily: "Roboto-Italic",
  color: "#4b0082"
};

const inputStyle = {
  width: "50%",
  padding: "12px 20px",
  margin: "8px 0",
  display: "inline-block",
  background: "#e3e3e3",
  border: "none",
  borderRadius: "4px 4px 0 0",
  boxSizing: "border-box",
  fontSize: 16,
  fontFamily: "Roboto-Italic"
};
