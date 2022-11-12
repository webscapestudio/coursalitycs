import { useState } from "react";
import s from "./Checkbox.module.scss";

export const Checkbox = ({ label, value, onChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <label className={s.wrap}>
        <input type="checkbox" required checked={value} onChange={onChange} />
        <p> {label}</p>
      </label>
    </div>
  );
};
