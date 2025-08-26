import Layout from "./components/Layout/Layout";
import FilterTabs from "./components/FilterTabs";
import data from "./data/data.json";
import { useState } from "react";
import ExtensionCard from "./components/ExtensionCard/ExtensionCard";

function App() {
  const [currentFilter, setCurrentFilter] = useState("all");
  const [extensions, setExtensions] = useState(data);

  const handleRemove = (id) => {
    const newArr = extensions.filter((ext) => ext.id !== id);
    setExtensions(newArr);
  };

  const handleFilterChange = (filterName) => {
    setCurrentFilter(filterName);
  };

  const handleToggle = (id) => {
    const newExt = extensions.map((ext) =>
      ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
    );

    setExtensions(newExt);
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (currentFilter === "all") return true;
    if (currentFilter === "active") return ext.isActive;
    if (currentFilter === "inactive") return !ext.isActive;
  });

  return (
    <Layout>
      <div className="text-center py-12">
        <FilterTabs
          extensions={extensions}
          onFilterChange={handleFilterChange}
        />
      </div>
      <ExtensionCard
        extensionsCardData={filteredExtensions}
        onRemove={handleRemove}
        onToggle={handleToggle}
      />
    </Layout>
  );
}

export default App;
