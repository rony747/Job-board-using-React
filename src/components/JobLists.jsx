import{ useJobs} from "@/contexts/JobContext.jsx";
import Job from "@/components/Job.jsx";
import {useEffect} from "react";

function JobLists() {
    const {jobs, isLoading,filteredJobs} = useJobs()

    let allJobs = filteredJobs.length > 0 ? filteredJobs :jobs
    return (
        <>
            <div className="job_sortBar flex justify-between mb-3">
                <div className="total_num"><h3 className={'font-bold text-xl text-gray-600'}>Showing {allJobs.length} Jobs</h3></div>
            </div>
            <div className={'grid gap-4 grid-cols-3'}>
                {allJobs?.map(job => {
                    return <Job key={job.contact_email} job={job}/>
                })}
            </div>


        </>
    );
}

export default JobLists;