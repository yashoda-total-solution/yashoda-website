import React from "react";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Helmet>
        <title>404 - Page Not Found | Yashoda Total Solution</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>

      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  );
}

export default NotFound;