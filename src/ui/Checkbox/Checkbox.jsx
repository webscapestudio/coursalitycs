import { useState } from "react"
import s from "./Checkbox.module.scss"

export const Checkbox = ({ label, value, onChange }) => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <div>
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    </div>
  )
}
