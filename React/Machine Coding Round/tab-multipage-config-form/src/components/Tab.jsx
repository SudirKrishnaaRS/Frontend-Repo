import { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: ["coding", "javascript"],
    darkTheme: "dark",
  });

  const [errors, setErrors] = useState({});

  const Tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};

        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }

        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }

        if (!data.email || data.email.length < 2) {
          err.email = "Email is not valid";
        }

        setErrors(err);
        return err.name || err.age || err.email;
      },
    },
    {
      name: "Interests",
      component: Interest,
      validate: () => {
        const err = {};

        if (!data.interests || data.interests.length < 1) {
          err.interests = "Select atleast one interest";
        }

        setErrors(err);
        return err.interests;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        // This tab has NO Form Validations so we just return TRUE
        return true;
      },
    },
  ];

  const ActiveTabComponent = Tabs[activeTab].component;

  //   console.log(activeTab, ActiveTabComponent);

  const handlePrevious = () => {
    // Enable if there's no Errors
    if (!Tabs[activeTab].validate()) {
      if (activeTab > 0 && activeTab <= Tabs.length - 1) {
        setActiveTab((currTab) => currTab - 1);
      }
    }
  };

  const handleNext = () => {
    // Enable if there's no Errors
    if (!Tabs[activeTab].validate()) {
      if (activeTab < Tabs.length - 1) {
        setActiveTab((currTab) => currTab + 1);
      }
    }
  };

  const handleSubmit = () => {
    // POST to an API endpoint

    console.log("Form Submitted", data);
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
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
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
        <button onClick={handleSubmit} disabled={activeTab !== Tabs.length - 1}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Tab;
