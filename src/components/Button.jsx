import clsx from "clsx";

const Button = ({ children, icon, className, ...props }) => {
  // If icon is a string path, convert it to an imported variable in your actual implementation
  return (
    <button
      className={clsx(
        "group relative flex h-14 items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 text-p4 transition-colors duration-300 hover:text-p1",
        className
      )}
      {...props}
    >
      <div className="button-bg absolute inset-0 -z-1" />
      {icon && (
        <div className="relative z-1">
          <img src={icon} alt="icon" className="size-6" />
        </div>
      )}
      <div className="relative z-1 button-text">{children}</div>
    </button>
  );
};

export default Button;
