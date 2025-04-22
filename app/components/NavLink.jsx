import React from "react";

const NavLink = ({ href, title }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="text-white hover:text-gray-400">
      {title}
    </a>
  );
};

export default NavLink;
