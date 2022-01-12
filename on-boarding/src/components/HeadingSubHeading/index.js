import "./style.scss";
export default function HeadingSubHeading({ heading, subheading }) {
  return (
    <div className="heading-subheading-wrapper">
      <h2 className="heading">{heading}</h2>
      <h4 className="subheading">{subheading}</h4>
    </div>
  );
}
