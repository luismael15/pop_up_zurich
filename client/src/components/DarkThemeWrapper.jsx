export default function DarkThemeWrapper({ children }) {
  return <div className="dark:bg-[#1E1E1E] dark:text-white">{children}</div>;
}
