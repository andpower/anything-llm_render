import { useCallback } from 'react';

export default function LLMItem({
  name,
  value,
  image,
  description,
  checked,
  onClick,
}) {
  const handleClick = useCallback(() => onClick(value), [onClick, value]);

  return (
    <div
      onClick={handleClick}
      className={`w-full hover:bg-white/10 p-2 rounded-md hover:cursor-pointer ${
        checked && "bg-white/10"
      }`}
    >
      ...
    </div>
  );
}
      <div className="flex gap-x-4 items-center">
        <img
          src={image}
          alt={`${name} logo`}
          className="w-10 h-10 rounded-md"
        />
        <div className="flex flex-col">
          <div className="text-sm font-semibold">{name}</div>
          <div className="mt-1 text-xs text-white/60">{description}</div>
        </div>
      </div>
    </div>
  );
}
