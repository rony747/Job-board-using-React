import PageLayout from "@/pages/PageLayout.jsx";
import FilterBar from "@/components/parts/FilterBar.jsx";
import SideBar from "@/components/parts/SideBar.jsx";
import {Outlet} from "react-router-dom";

function JobsPage() {

    return (
        <>
            <PageLayout>

                <Outlet/>
            </PageLayout>
        </>
    );
}

export default JobsPage;