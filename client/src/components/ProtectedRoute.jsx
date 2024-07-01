import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthenticate } from "../features/authentication/useAuthenticate";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { authenticatedUser } = useAuthenticate();

  useEffect(
    function () {
      if (!authenticatedUser) navigate("/login");
    },
    [authenticatedUser, navigate]
  );

  if (authenticatedUser) return children;
}

export default ProtectedRoute;
