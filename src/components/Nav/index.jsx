import React from "react";
import Anchor from "../Anchor";

function Nav() {
  let data = [
    { href: "#", clase: "me-4 text-black", titulo: "My Tinerary" },
    { href: "home.html", clase: "me-4 text-black", titulo: "Home" },
    { href: "cities.html", clase: "me-4 text-black", titulo: "Cities" },
    {
      href: "login.html",
      clase: "btn btn-primary px-4 mb-1",
      titulo: "Login",
    },
  ];
  return (
    <nav>
      {data.map((each, key) => (
        <Anchor
          key={key}
          href={each.href}
          clase={each.clase}
          titulo={each.titulo}
        />
      ))}
    </nav>
  );
}

export default Nav;