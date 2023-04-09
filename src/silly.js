import React, { useState } from "react";
import Input from "./Input";
import Radio from "./Radio";

const storyText =
  "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

const randomValueFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const Form = () => {
  const [setName] = useState("");
  const [customName, setCustomName] = useState("");
  const [showStory, setShowStory] = useState(false);
  const [radioValue, setRadioValue] = useState("US");

  const handleCustomNameChange = (event) => {
    setCustomName(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowStory(true);

    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if (customName !== "") {
      const name = customName;
      newStory = newStory.replace("Bob", name);
    }

    if (radioValue === "UK") {
      const weight = Math.round(300 * 0.0714286) + " stone";
      const temperature = Math.round(((94 - 32) * 5) / 9) + " centigrade";
      newStory = newStory.replace("94 farenheit", temperature);
      newStory = newStory.replace("300 pounds", weight);
    }

    setStory(newStory);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const [story, setStory] = useState("");

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        label="Name"
        value={customName}
        onChange={handleCustomNameChange}
      />
      <Radio
        label="Location:"
        name="location"
        options={[
          { label: "US", value: "US" },
          { label: "UK", value: "UK" }
        ]}
        value={radioValue}
        onChange={handleRadioChange}
      />
      <button type="submit">Generate New Story!</button>
      {showStory && <p style={{ backgroundColor: "yellow" }}>{story}</p>}
    </form>
  );
};

export default Form;
