import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch = (error) => {
    // We can somehow process error here
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return (
        <h2 style={{ color: "red", textAlign: "center" }}>
          Something went wrong!
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
