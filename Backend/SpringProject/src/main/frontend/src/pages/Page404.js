import "../styles/Page404.css";

function Page404() {
  return (
    <div className="notfound-container">
      <div className="text-center">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-contents">
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <a href="/" className="btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default Page404;
