import { useEffect, useState } from "react";

const FilterTabs = ({ onFilterChange, extensions }) => {
  const [activeTabs, setActiveTabs] = useState("all");
  const [counts, setCounts] = useState({
    all: 0,
    active: 0,
    inactive: 0,
  });

  const handleClick = (filterName) => {
    console.log("CLICK PE: ", filterName);
    setActiveTabs(filterName);
    onFilterChange(filterName);
  };

  useEffect(() => {
    const activeCount = extensions.filter((ext) => ext.isActive).length;
    const inactiveCount = extensions.filter((ext) => !ext.isActive).length;

    setCounts({
      all: extensions.length,
      active: activeCount,
      inactive: inactiveCount,
    });
  }, [extensions]);

  const tabs = [
    {
      key: "all",
      label: "all",
      count: counts.all,
    },
    {
      key: "active",
      label: "active",
      count: counts.active,
    },
    {
      key: "inactive",
      label: "inactive",
      count: counts.inactive,
    },
  ];

  return (
    <div className="bg-transparent mb-4">
      <div className="flex items-center gap-2 justify-between">
        <h2 className="text-3xl">Extension list</h2>
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              className={`rounded-lg px-6 py-2 text-xl font-light shadow-sm cursor-pointer flex items-center ${
                activeTabs === tab.key
                  ? "bg-red-500 text-white"
                  : "text-neutral-900 bg-white"
              }`}
              key={tab.key}
              onClick={() => handleClick(tab.label)}>
              {tab.label}
              {tab.count && (
                <span className="ml-1 text-sm opacity-70 ">{tab.count}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
