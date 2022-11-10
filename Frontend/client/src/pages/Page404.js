import "../styles/Page404.css";

function Page404() {
  return (
    <div class="notfound-container">
      <div class="text-center">
        <h1 class="notfound-title">404</h1>
        <p class="notfound-contents">
          <span class="text-danger">Opps!</span> Page not found.
        </p>
        <p class="lead">The page you’re looking for doesn’t exist.</p>
        <a href="/" class="btn-primary">
          Go Home
        </a>
      </div>
    </div>
  );
}

export default Page404;
