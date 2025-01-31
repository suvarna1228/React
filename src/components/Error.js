import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>opps!</h1>
        <h2>oh oh something went wrong ~</h2>
    </div>
  );
};

export default Error;