// Lightweight SVG sprite icon component — replaces inline SVGs to reduce HTML size
export default function Icon({ id, className = 'w-5 h-5', ...props }) {
  return (
    <svg className={className} aria-hidden="true" {...props}>
      <use href={`/icons.svg#icon-${id}`} />
    </svg>
  );
}
