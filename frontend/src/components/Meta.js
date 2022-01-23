import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Ace Fishing Gear",
  description: "We sell the best fishing gear for a good price",
  keywords: "fishing reels, fishing rods, fishing gears, cheap fishing products",
};

export default Meta;
