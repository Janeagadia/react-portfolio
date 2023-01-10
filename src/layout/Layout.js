import Menu from "../layout/Menu";

function Layout(props) {
  return (
    <div>
      <div className="header-container">
        <Menu />
      </div>

      {props.children}
    </div>
  );
}

export default Layout;
