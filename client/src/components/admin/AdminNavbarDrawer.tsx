import { NavLink } from "react-router-dom";

interface AdminNavDrawerProps {
  toggleAdminMenu: () => void;
}

const AdminNavbarDrawer: React.FC<AdminNavDrawerProps> = ({
  toggleAdminMenu,
}) => {
  return (
    <aside className="h-full w-full bg-charcoal-800 text-gray-400 text-base p-4 py-24 z-90">
      <ul className="flex flex-col items-left gap-4">

        <li onClick={toggleAdminMenu}>
          <div className="flex flex-col ">
            <h1 className="pb-2 text-xl">Movies</h1>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-gray-300 hover:text-red-500"
              }
              to="/admin/movies/edit"
            >
              Edit Movies
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-gray-300 hover:text-red-500"
              }
              to="/admin/movies/add"
            >
              Add Movie
            </NavLink>
            <hr className="border-t border-gray-400 my-2"/>
          </div>
        </li>

        <li onClick={toggleAdminMenu}>
          <div className="flex flex-col ">
            <h1 className="pb-2 text-xl">Users</h1>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-gray-300 hover:text-red-500"
              }
              to="/admin/users/edit"
            >
              Edit Users
            </NavLink>
            <hr className="border-t border-gray-400 my-2"/>
          </div>
        </li>

        <li onClick={toggleAdminMenu}>
          <div className="flex flex-col ">
            <h1 className="pb-2 text-xl">Orders</h1>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-gray-300 hover:text-red-500"
              }
              to="/admin/orders/edit"
            >
              Edit Orders
            </NavLink>
            
            <hr className="border-t border-gray-400 my-2"/>
          </div>
        </li>

        <li onClick={toggleAdminMenu}>
          <div className="flex flex-col ">
            <h1 className="pb-2 text-xl">Reviews</h1>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-gray-300 hover:text-red-500"
              }
              to="/admin/reviews/edit"
            >
              Edit Reviews
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-bold"
                  : "text-gray-300 hover:text-red-500"
              }
              to="/admin/reviews/add"
            >
              Add Review
            </NavLink>
            <hr className="border-t border-gray-400 my-2"/>
          </div>
        </li>

        <li onClick={toggleAdminMenu}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-bold"
                : "text-gray-300 hover:text-red-500"
            }
            to="/admin/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default AdminNavbarDrawer;
