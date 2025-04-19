import { Marker } from "./Marker";

// import clsx from " clsx ";
export default function Button({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) {
  const Inner = () => (
    // inside component
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="cirle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-poppins font-semibold text-p1 uppercase">
          {children}
        </span>
      </span>

      {/* border affect when hover */}
      <span className="glow-before glow-after" />
    </>
  );
  return href ? (
    <a
      className={` relative p-0.5 g5 rounded-2xl shadow-500 group ${containerClassName} `}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={` relative p-0.5 g5 rounded-2xl shadow-500 group ${containerClassName} `}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
}
