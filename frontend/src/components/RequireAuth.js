import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const user = useSelector((state) => state.user.currentUser);

  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );

  // return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
  //   <Outlet />
  // ) : auth?.user ? (
  //   <Navigate to="/unauthorized" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} replace />
  // );
};

export default RequireAuth;
