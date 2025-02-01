import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
  return (
    <div>
        <h1>opps!</h1>
        <h2>oh oh something went wrong ~</h2>
        <h3>{err?.status ? `Error ${err.status}: ${err.statusText}` : "Unknown Error"}</h3>
        <p>{err?.message || "Please try again later."}</p>
    </div>
  );
};

export default Error;