/* eslint-disable react/prop-types */
const Interest = ({ data, setData }) => {
  const { interests } = data;

  return (
    <div>
      <h2>Interests</h2>

      <div>
        <input
          type="checkbox"
          name="coding"
          checked={interests.includes("coding")}
        />
        <label htmlFor="coding">Coding</label>

        <input
          type="checkbox"
          name="music"
          checked={interests.includes("music")}
        />
        <label htmlFor="music">Music</label>

        <input
          type="checkbox"
          name="javascript"
          checked={interests.includes("javascript")}
        />
        <label htmlFor="javascript">Javascript</label>
      </div>
    </div>
  );
};

export default Interest;
