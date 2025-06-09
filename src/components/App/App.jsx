import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import ResrtrictedRoute from "../ResrtrictedRoute/ResrtrictedRoute";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LogInPage = lazy(() => import("../../pages/LogInPage/LogInPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader isLoading={isRefreshing} />
  ) : (
    <>
      <Toaster position="top-right" />
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <ResrtrictedRoute
                  redirectTo={"/"}
                  component={<RegistrationPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <ResrtrictedRoute
                  redirectTo={"/contacts"}
                  component={<LogInPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo={"/login"}
                />
              }
            />
            <Route path="*" element={<div>Not found!</div>} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
