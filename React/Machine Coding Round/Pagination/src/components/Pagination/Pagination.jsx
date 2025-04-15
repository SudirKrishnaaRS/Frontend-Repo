/* eslint-disable react/prop-types */
const Pagination = ({ pageNumber, currentPage, setCurrentPage }) => {
  const handlePageChange = (num) => {
    setCurrentPage(num);
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handlePrevClick} disabled={currentPage === 0}>
        ⬅️
      </button>
      {[...Array(pageNumber).keys()].map((num, index) => {
        return (
          <button key={index} onClick={() => handlePageChange(num)}>
            {num + 1}
          </button>
        );
      })}
      <button
        onClick={handleNextClick}
        disabled={currentPage === pageNumber - 1}
      >
        ➡️
      </button>
    </div>
  );
};

export default Pagination;
