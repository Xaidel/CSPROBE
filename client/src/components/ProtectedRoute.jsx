import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

function ProtectedRoute({ children }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const queryCache = queryClient.getQueryCache();
  const query = queryCache.find({ queryKey: ["current-user"] });
  const authenticatedUser = query?.state?.data;
  useEffect(
    function () {
      if (!authenticatedUser) navigate("/login");
    },
    [authenticatedUser, navigate]
  );

  if (authenticatedUser) return children;
}

export default ProtectedRoute;
