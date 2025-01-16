import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ClassCompExamplePropType {
  //define the prop types here
}

class ClassCompExample extends React.Component {
  constructor(props: ClassCompExamplePropType) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Comp Mounted");
  }

  componentWillUnmount() {
    console.log("Comp Unmounted");
  }

  render() {
    return (
      <div>
        <span>Class Component Example</span>
      </div>
    );
  }
}

export default ClassCompExample;
