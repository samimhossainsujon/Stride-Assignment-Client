import { Outlet } from "react-router-dom"
import Footer from "../components/common/NavigationBar/Footer"
import NavigationBar from "../components/common/NavigationBar/NavigationBar"


const MainLayout = () => {
    return (
        <div>
            <div>
                <NavigationBar />
            </div>
            <div className="min-h-screen">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout
