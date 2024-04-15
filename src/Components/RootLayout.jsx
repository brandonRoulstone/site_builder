import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import ReactStore from "./Store/StateSlice";
import NavbarLayout from "./NavigationBar";

const RootLayout = () => {
  return (
    <Provider store={ReactStore}>
        <NavbarLayout />
      <main>
        <Outlet />
      </main>
    </Provider>
  )
}

export default RootLayout
