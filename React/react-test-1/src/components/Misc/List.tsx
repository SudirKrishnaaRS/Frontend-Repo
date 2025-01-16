import React from "react";

const List: React.FC = () => {
  const items: string[] = ["book", "apple", "pen"];

  return (
    <>
      {/* Approach 1: With return */}
      <div>
        <h4>Rendering a List Approach 1</h4>
        <ol>
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ol>
      </div>

      {/* Approach 2: Without return */}
      <div>
        <h4>Rendering a List Approach 2</h4>
        <ol>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default List;
