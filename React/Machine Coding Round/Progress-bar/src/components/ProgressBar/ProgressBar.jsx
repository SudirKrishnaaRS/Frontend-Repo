import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgressPercent, setAnimatedProgressPercent] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgressPercent(progress), 200);
  }, [progress]);

  return (
    // OUTER is the PROGRESS BAR CONTAINER
    <div className="outer">
      {/* INNER is the PROGRESS BAR */}
      <div className="inner" style={{ width: `${animatedProgressPercent}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
