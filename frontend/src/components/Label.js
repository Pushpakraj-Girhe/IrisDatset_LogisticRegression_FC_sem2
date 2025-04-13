export const Label = ({ children, htmlFor, className = "", ...props }) => {
    return (
      <label htmlFor={htmlFor} className={`block mb-2 ${className}`} {...props}>
        {children}
      </label>
    )
  }
  
  