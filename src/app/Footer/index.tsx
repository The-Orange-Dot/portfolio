"use client";
import React from "react";

const Footer = () => {
  const [year, setYear] = React.useState(2025);

  React.useEffect(() => {
    const date = new Date();
    const fullYear = date.getFullYear();

    setYear(fullYear);
  }, []);

  return (
    <p className="max-sm:text-sm max-sm:px-6">{`Designed and built by Tom Le | © Copyright Tom Le ${year} | All Rights Reserved`}</p>
  );
};

export default Footer;
