import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p style={{textAlign:"center"}}>Sorry, the page you are looking for is not found.</p>
      <Link to="/" style={{textAlign:"center", display: "block"}}>Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;