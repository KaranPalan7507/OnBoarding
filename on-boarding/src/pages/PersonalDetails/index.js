import React, { useState } from "react";
import HeadingSubHeading from "./../../components/HeadingSubHeading";
import InputWithLabel from "./../../components/InputWithLabel";
import Button from "./../../components/Button";

export default function PersonalDetails({ nextPage }) {
  const [name, setName] = useState("Steve Jobs");
  const [displayName, setDisplayName] = useState("Steve");
  const handleFormSubmit = () => {
    console.log("form submit - personal details");
    console.log("name - ", name, "displayname -  ", displayName);
    nextPage();
  };
  return (
    <div>
      <HeadingSubHeading
        heading="Welcome! First things first..."
        subheading="You can always change them later."
      />
      <InputWithLabel
        label="Full Name"
        defaultValue="Steve Jobs"
        onChange={(value) => setName(value)}
      />
      <InputWithLabel
        label="Display Name"
        defaultValue="Steve"
        onChange={(value) => setDisplayName(value)}
      />
      <Button text="Create Workspace" onClick={handleFormSubmit} />
    </div>
  );
}
