/* eslint-disable react/prop-types */
const Settings = ({ data, setData }) => {
  const { darkTheme } = data;

  const handleChange = (e) => {
    setData((prevData) => {
      return { ...prevData, darkTheme: e.target.name };
    });
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <input
          type="radio"
          name="dark"
          checked={darkTheme === "dark"}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="dark">Dark</label>

        <input
          type="radio"
          name="light"
          checked={darkTheme === "light"}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="light">Light</label>
      </div>
    </div>
  );
};

export default Settings;
