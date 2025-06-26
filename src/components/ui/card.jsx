export function Card({ children, className = "" }) {
  return <div className={`rounded border p-2 shadow ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
