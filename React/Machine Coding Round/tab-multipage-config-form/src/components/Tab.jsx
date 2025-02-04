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
    interests: [],
    darkTheme: false,
  });
  const ActiveTabComponent = Tabs[activeTab].component;

  //   console.log(activeTab, ActiveTabComponent);

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
    </div>
  );
};

export default Tab;
