import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/*">NoPage</Link>
          </li>
        </ul>
      </nav> */}



            <ui-nav-menu>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/*">NoPage</Link>
            </ui-nav-menu>

            <Outlet />

        </>
    )
};

export default Layout;