"use client"

export const Slider = ({ id, min, max, step, value, onChange, className = "", ...props }) => {
  return (
    <input
      id={id}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number.parseFloat(e.target.value))}
      className={`w-full h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer ${className}`}
      {...props}
    />
  )
}

