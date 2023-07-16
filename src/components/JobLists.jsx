import{ useJobs} from "@/contexts/JobContext.jsx";
import Job from "@/components/Job.jsx";
import {useEffect} from "react";

function JobLists() {
    const {jobs, isLoading,filteredJobs} = useJobs()

    let allJobs = filteredJobs.length > 0 ? filteredJobs :jobs
    return (
        <>
            <div className={'grid gap-4 grid-cols-3'}>
                {allJobs?.map(job => {
                    return <Job key={job.contact_email} job={job}/>
                })}
            </div>


        </>
    );
}

export default JobLists;