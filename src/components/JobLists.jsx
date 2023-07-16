import{ useJobs} from "@/contexts/JobContext.jsx";
import Job from "@/components/Job.jsx";
import SortBar from "@/components/SortBar.jsx";
import FilterBar from "@/components/parts/FilterBar.jsx";
import SideBar from "@/components/parts/SideBar.jsx";

function JobLists() {
    const {jobs, isLoading,filteredJobs,dispatch} = useJobs()

    let allJobs = filteredJobs.length > 0 ? filteredJobs :jobs

    return (
        <>
            <FilterBar/>
            <div className="jobsArea px-5 py-3 flex flex-row bg-gray-50 ">
                <SideBar/>
                <div className="contentArea basis-4/5 ml-5">
                    <SortBar allJobs={allJobs} dispatch={dispatch} />
                    <div className={'grid gap-4 grid-cols-3'}>
                        {allJobs?.map(job => {
                            return <Job key={job.contact_email} job={job}/>
                        })}
                    </div>
                </div>
            </div>




        </>
    );
}

export default JobLists;