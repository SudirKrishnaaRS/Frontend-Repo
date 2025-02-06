import { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

const Tabs = [
  {
    name: "Profile",
    component: Profile,
  },
  {
    name: "Interests",
    component: Interest,
  },
  {
    name: "Settings",
    component: Settings,
  },
];

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: ["coding", "javascript"],
    darkTheme: "dark",
  });
  const ActiveTabComponent = Tabs[activeTab].component;

  //   console.log(activeTab, ActiveTabComponent);

  const handlePrevious = () => {
    if (activeTab > 0 && activeTab <= Tabs.length - 1) {
      setActiveTab((currTab) => currTab - 1);
    }
  };

  const handleNext = () => {
    if (activeTab < Tabs.length - 1) {
      setActiveTab((currTab) => currTab + 1);
    }
  };

  return (
    <div>
      {Tabs.map((tab, index) => {
        return (
          <>
            <button key={index} onClick={() => setActiveTab(index)}>
              {tab.name}
            </button>
          </>
        );
      })}

      <div>
        <ActiveTabComponent data={data} setData={setData} />
      </div>

      <br />
      <br />
      <div>
        <button onClick={handlePrevious} disabled={activeTab < 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={activeTab >= Tabs.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Tab;
