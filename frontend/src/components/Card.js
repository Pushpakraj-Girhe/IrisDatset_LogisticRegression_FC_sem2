export const Card = ({ children, className = "" }) => {
    return <div className={`floral-card ${className}`}>{children}</div>
  }
  
  export const CardContent = ({ children, className = "" }) => {
    return <div className={`pt-6 ${className}`}>{children}</div>
  }
  
  