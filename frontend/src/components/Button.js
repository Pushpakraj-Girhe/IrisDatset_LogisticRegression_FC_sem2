"use client"

export const Button = ({ children, className = "", type = "button", disabled = false, onClick, ...props }) => {
  return (
    <button type={type} className={`btn-primary ${className}`} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

