import React, { useState, useEffect } from "react";

export const Stats = ({ stats }) => {
  const renderStats = () => {
    //Transform the object into an array in order iterate it
    stats = [...stats];

    return stats.map((item, i) => (
      <li key={i}>
        <span className="stat-name">{item?.stat?.name || "Not Found"}</span>
        <span className="stat-number">{item.base_stat || "Not Found"}</span>
      </li>
    ));
  };

  return (
    <div className="stats">
      <ul>{renderStats()}</ul>
    </div>
  );
};
