import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = false;

  return (
    <div>
      <h2>HOSGELDIN</h2>
      {user ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default PrivateRouter;
