import React from "react";
import HeadingSubHeading from "./../../components/HeadingSubHeading";
import Button from "./../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
export default function CompleteSetup({ nextPage }) {
  const handleFormSubmit = () => {
    console.log("form submit");
    nextPage();
  };
  return (
    <div>
      <FontAwesomeIcon icon={faCheckCircle} className="complete-steps-tick" />
      <HeadingSubHeading
        heading="Congratulations, Eren!"
        subheading="You have completed onboarding, you can start using the Eden!"
      />
      <Button text="Launch Eden" onClick={handleFormSubmit} />
    </div>
  );
}
