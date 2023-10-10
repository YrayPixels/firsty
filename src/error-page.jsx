import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="d-flex justify-content-center align-items-center mt-5">

      <div>

        <h1 className="display-1">Oops!</h1>
        <p className="display-3">Sorry, kindly<a className="text-primary" href="/"> headback </a> an error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>

    </div>
  );
}