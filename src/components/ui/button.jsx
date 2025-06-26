export function Button({ children, variant = "primary" }) {
  const base = "px-4 py-2 rounded font-semibold";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-black hover:bg-gray-200",
  };
  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}
