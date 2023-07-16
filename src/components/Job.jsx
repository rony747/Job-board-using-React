import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {AlarmClock, Building2, ChevronLeft, DollarSign, MapPin} from "lucide-react";


function Job({job}) {

    return (
        <>
            <div className={'basis-1/3 p-3 border-[1px] border-gray-200 rounded-xl bg-white'}>
                <div className={'flex justify-around flex-col h-[100%]'}>

                    <div className="job_excerpt">
                        <h2 className={'font-bold text-xl'}>{job.job_title}</h2>
                        <div className={'my-2 border-t-[1px] border-gray-100 border-b-[1px]'}>
                            <div className={'text-base text-gray-500 flex justify-between'}><span
                                className={'font-bold flex items-center'}><Building2
                                className="h-4 w-4 text-blue-700 mr-1"/>: {job.company_name}</span> <span
                                className={'flex items-center'}> <MapPin
                                className="h-4 w-4 text-blue-700 mr-3"/> {job.location}</span></div>
                        </div>
                        <p>{job.job_description.substring(0, 100) + '...'}</p>
                        <div className={'flex gap-2 mt-3 mb-3'}>
                            <Badge
                                className={'bg-blue-100 text-blue-700 rounded-sm hover:bg-blue-300'}>{job.employment_type}</Badge>
                            <Badge
                                className={'bg-blue-100 text-blue-700 rounded-sm hover:bg-blue-300'}>Salary: {Math.round(job.salary / 1000) + 'k'}</Badge>
                            <Badge
                                className={'bg-blue-100 text-blue-700 rounded-sm hover:bg-blue-300'}>{job.job_level}</Badge>
                        </div>

                        <div className={'mt-3  bg-gray-100 px-2 py-1'}>
                            <div className={'text-sm text-gray-500 flex justify-between'}><span
                                className={'font-bold flex items-center'}><DollarSign
                                className="h-4 w-4 text-blue-700 mr-1"/>: {Math.round(job.salary / 1000) + 'k'}</span> <span
                                className={'flex items-center'}> <AlarmClock
                                className="h-4 w-4 text-blue-700 mr-3"/> {job.application_deadline}</span></div>
                        </div>

                    </div>

                    <div className="job_btn flex gap-3 mt-2">
                        <Button asChild className={'text-gray-700  w-1/2  bg-gray-200 hover:text-white'}>
                            <Link to={`/find-job/all/${job.id}`}>View Details</Link>
                        </Button>
                        <Button asChild className={'text-blue-100 w-1/2  bg-blue-700 hover:text-white'}>
                            <Link to={`/find-job/all/${job.id}/apply`}>Apply Now</Link>
                        </Button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Job;