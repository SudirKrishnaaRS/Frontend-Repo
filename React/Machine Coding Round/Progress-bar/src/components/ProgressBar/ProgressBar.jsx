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
      <div
        className="inner"
        style={{ width: `${animatedProgressPercent}%` }}
        // ACCESSIBLITY
        role="progressbar" // better accessiblity by asigning the role as progressbar
        aria-valuenow={progress} // for current value
        aria-valuemin={0} // for minimum value
        aria-valuemax={100} // for maximum value
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
