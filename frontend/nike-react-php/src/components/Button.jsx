export default function Button({ className, children, ...props }) {
  let cssClasses = "button";
  if (className) {
    cssClasses += " " + className;
  }

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
