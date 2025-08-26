const ExtensionCard = ({ extensionsCardData, onRemove, onToggle }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {extensionsCardData.map((data) => {
        const { id, logo, name, description } = data;

        return (
          <div
            key={id}
            className="flex flex-col gap-10 rounded-lg shadow-md bg-[var(--color-soft-white)] p-4">
            <div className="flex items-start gap-4">
              <img
                src={logo}
                alt={name}
              />
              <div>
                <h3 className="font-bold text-lg mb-1">{name}</h3>
                <p className="font-light text-sm text-neutral-600">
                  {description}
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                className="rounded-xl border border-gray-300  px-2.5 py-1 text-sm font-light cursor-pointer flex items-center"
                onClick={() => onRemove(id)}>
                Remove
              </button>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={data.isActive}
                  onChange={() => onToggle(id)}
                />
                <div className="w-11 h-5 bg-gray-200 rounded-full peer-checked:bg-red-500 transition-colors"></div>
                <div className="absolute left-0.5 top-1.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExtensionCard;
