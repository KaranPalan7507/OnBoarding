import PrefixInput from "./../PrefixInput";
import "./style.scss";
export default function InputWithLabel({
  label,
  defaultValue,
  optionalLabel,
  inputPrefix,
  onChange,
}) {
  return (
    <div className="input-with-label-wrapper">
      <label className="label">
        {label}{" "}
        {optionalLabel ? (
          <span className="optional-label">(optional)</span>
        ) : null}
      </label>
      {inputPrefix ? (
        <PrefixInput
          prefix={inputPrefix}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      ) : (
        <input
          className="input"
          type="text"
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
