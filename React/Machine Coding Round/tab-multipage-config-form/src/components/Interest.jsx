/* eslint-disable react/prop-types */
const Interest = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleChange = (e) => {
    /* This handleChange snippet is updating the `interests` array in the state data based on whether a
      checkbox is:
        - checked -> spreads `prevData.interests` and pushes new `target.name`  into the arrau
        - unchecked -> removes the `target.name` from the array
    */
    setData((prevData) => {
      return {
        ...prevData,
        interests: e.target.checked
          ? [...prevData.interests, e.target.name]
          : prevData.interests.filter((intr) => intr !== e.target.name),
      };
    });
  };

  return (
    <div>
      <h2>Interests</h2>

      <div>
        <input
          type="checkbox"
          name="coding"
          checked={interests.includes("coding")}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="coding">Coding</label>

        <input
          type="checkbox"
          name="music"
          checked={interests.includes("music")}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="music">Music</label>

        <input
          type="checkbox"
          name="javascript"
          checked={interests.includes("javascript")}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="javascript">Javascript</label>
      </div>
      {errors?.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};

export default Interest;
