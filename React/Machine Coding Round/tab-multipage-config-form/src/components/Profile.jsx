/* eslint-disable react/prop-types */

const Profile = ({ data, setData, errors }) => {
  const { name, age, email } = data;

  const handleChange = (e) => {
    // console.log(e.target.name, data);
    setData((prevData) => {
      return { ...prevData, [`${e.target.name}`]: e.target.value };
    });
  };

  // console.log("first", data);

  return (
    <div className="tab-content-container">
      <h2>Profile</h2>

      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        {errors?.name && <span className="error">{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          value={age}
          onChange={(e) => handleChange(e)}
        />
        {errors?.age && <span className="error">{errors.age}</span>}
      </div>

      <div>
        <label htmlFor="email">email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        {errors?.email && <span className="error">{errors.email}</span>}
      </div>
    </div>
  );
};

export default Profile;
