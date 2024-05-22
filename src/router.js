import { ROUTERS } from "./utils/Router/router";
import HomePage from "./pages/homePage";
import {Route, Routes} from "react-router-dom";
import MasterLayout from "./pages/theme/masterLayout";
import Profile from "./pages/Profile";

function RenderRouter() {
    const pageRouter = [
        {
            path: ROUTERS.pages.home,
            component: <HomePage />,
        },
        {
            path: ROUTERS.pages.profile,
            component: <Profile />,
        },

    ]
    return (
        <MasterLayout>
            <Routes>
                {
                    pageRouter.map((item,key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </MasterLayout>
    );
}
const RouterCustom = () => {
    return RenderRouter();
};

export default RouterCustom;