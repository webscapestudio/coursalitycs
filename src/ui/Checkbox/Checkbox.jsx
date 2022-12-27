import cn from "classnames";
import { useState } from "react";
import s from "./Checkbox.module.scss";

export const Checkbox = ({ label, value, onChange, className }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <label className={cn(s.wrap, className)}>
      <input type="checkbox" required checked={value} onChange={onChange} />
      <p> {label}</p>
    </label>
  );
};
