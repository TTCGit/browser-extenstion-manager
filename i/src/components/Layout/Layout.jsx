import Header from "../Header/Header";

const Layout = ({ children, resetFilter }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--color-light-start)] to-[var(--color-light-end)] py-20">
      <div className="max-w-6xl mx-auto">
        <Header resetFilter={resetFilter} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
