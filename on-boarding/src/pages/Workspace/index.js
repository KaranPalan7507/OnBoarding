import React, { useState } from "react";
import HeadingSubHeading from "./../../components/HeadingSubHeading";
import InputWithLabel from "./../../components/InputWithLabel";
import Button from "./../../components/Button";

export default function Workspace({ nextPage }) {
  const [workspaceName, setWorkspaceName] = useState("Steve Jobs");
  const [workspaceUrl, setWorkspaceUrl] = useState("Steve");
  const handleFormSubmit = () => {
    console.log("form submit - workspace details");
    console.log(
      "workspaceName - ",
      workspaceName,
      "workspaceUrl -  ",
      workspaceUrl
    );
    nextPage();
  };
  return (
    <div>
      <HeadingSubHeading
        heading="Let's set up a home for all our work"
        subheading="You can always create another workspace later."
      />
      <InputWithLabel
        label="Workspace Name"
        defaultValue="Eden"
        onChange={(value) => setWorkspaceName(value)}
      />
      <InputWithLabel
        label="Workspace URL"
        defaultValue="Example"
        optionalLabel={true}
        inputPrefix="www.eden.com/"
        onChange={(value) => setWorkspaceUrl(value)}
      />
      <Button text="Create Workspace" onClick={handleFormSubmit} />
    </div>
  );
}
