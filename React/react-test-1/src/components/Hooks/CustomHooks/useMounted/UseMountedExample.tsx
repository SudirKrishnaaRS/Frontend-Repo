import useMounted from "./useMounted";

const UseMountedExample = () => {
  const { isMounted } = useMounted();
  return <div>Component is {isMounted ? "Mounted" : "Not Mounted"}</div>;
};

export default UseMountedExample;
