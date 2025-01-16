import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  // Static method to update state based on an error caught in the component tree
  static getDeriverStateFromError(error) {
    return { hasError: true };
  }

  // Lifecycle method to log error details
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback; // Render the fallback UI if an error occurred
    }

    return this.props.children; // Render the child components if no error occurred
  }
}

export default ErrorBoundary;
