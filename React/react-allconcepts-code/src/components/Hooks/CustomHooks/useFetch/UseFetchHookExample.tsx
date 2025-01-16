import React from "react";
import useFetch from "./useFetch";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const UseFetchHookExample: React.FC = () => {
  const [data, isLoading, hasError] = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Something went wrong!!</div>;
  }

  return (
    <div>
      UseFetchHookExample
      {data?.map((item: User) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default UseFetchHookExample;
