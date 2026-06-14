import { Link } from "react-router-dom";

import {
  FaHome,
  FaBook,
  FaGamepad,
  FaClock,
  FaChalkboardTeacher
} from "react-icons/fa";

export default function Sidebar() {

  const links = [
    {
      name: "Inicio",
      path: "/",
      icon: <FaHome />
    },

    {
      name: "Historia",
      path: "/historia",
      icon: <FaBook />
    },

    {
      name: "Timeline",
      path: "/timeline",
      icon: <FaClock />
    },

    {
      name: "Juegos",
      path: "/juegos",
      icon: <FaGamepad />
    },

    {
      name: "Docente",
      path: "/docente",
      icon: <FaChalkboardTeacher />
    },
  ];

  return (
    <aside className="w-72 bg-gray-900 border-r border-gray-800 p-6">

      <h1 className="text-3xl font-bold mb-10">
        Historia App
      </h1>

      <nav className="flex flex-col gap-4">

        {links.map((link, index) => (

          <Link
            key={index}
            to={link.path}
            className="
              flex items-center gap-4
              p-4 rounded-xl
              bg-gray-800 hover:bg-blue-600
              transition-all duration-300
            "
          >

            {link.icon}

            <span>{link.name}</span>

          </Link>

        ))}

      </nav>

    </aside>
  );
}