import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
export default function Header() {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faDice} className="app-logo" />
      <span>Eden</span>
    </header>
  );
}
