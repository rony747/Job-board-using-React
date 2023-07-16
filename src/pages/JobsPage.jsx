import PageLayout from "@/pages/PageLayout.jsx";
import FilterBar from "@/components/parts/FilterBar.jsx";
import SideBar from "@/components/parts/SideBar.jsx";
import {Outlet} from "react-router-dom";

function JobsPage() {

    return (
        <>
            <PageLayout>
                <FilterBar/>
                <div className="jobsArea px-5 py-3 flex flex-row bg-gray-50 ">
                    <SideBar/>
                    <div className="contentArea basis-4/5 ml-5">
                        <Outlet/>
                    </div>
                </div>

            </PageLayout>
        </>
    );
}

export default JobsPage;