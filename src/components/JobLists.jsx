import{ useJobs} from "@/contexts/JobContext.jsx";
import Job from "@/components/Job.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import SortBar from "@/components/SortBar.jsx";

function JobLists() {
    const {jobs, isLoading,filteredJobs,dispatch} = useJobs()

    let allJobs = filteredJobs.length > 0 ? filteredJobs :jobs

    return (
        <>
           <SortBar allJobs={allJobs} dispatch={dispatch} />
            <div className={'grid gap-4 grid-cols-3'}>
                {allJobs?.map(job => {
                    return <Job key={job.contact_email} job={job}/>
                })}
            </div>


        </>
    );
}

export default JobLists;