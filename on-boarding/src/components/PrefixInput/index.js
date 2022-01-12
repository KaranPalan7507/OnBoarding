import "./style.scss";
export default function PrefixInput({ prefix, defaultValue, onChange }) {
  return (
    <div className="prefix-input">
      <div className="prefix-text">{prefix}</div>
      <input
        type="text"
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
