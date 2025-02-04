/* eslint-disable react/prop-types */

const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  const handleChange = (e) => {
    // console.log(e.target.name, data);
    setData((prevData) => {
      return { ...prevData, [`${e.target.name}`]: e.target.value };
    });
  };

  console.log("first", data);
  return (
    <div>
      <h2>Profile</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="age">Age</label>
      <input
        id="age"
        name="age"
        type="number"
        value={age}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Profile;
