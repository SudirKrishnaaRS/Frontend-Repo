const WithLoggerHoc = (WrappedComponent) => {
  return (props) => {
    console.log("Logger HOC Props:", props);

    return <WrappedComponent {...props} />;
  };
};

export default WithLoggerHoc;
