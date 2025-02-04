/* eslint-disable react/prop-types */
const Settings = ({ data, setData }) => {
  const { darkTheme } = data;

  const handleClick = (e) => {
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
          onChange={(e) => handleClick(e)}
        />
        <label htmlFor="dark">Dark</label>

        <input
          type="radio"
          name="light"
          checked={darkTheme === "light"}
          onChange={handleClick}
        />
        <label htmlFor="light">Light</label>
      </div>
    </div>
  );
};

export default Settings;
