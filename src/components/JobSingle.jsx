import {useNavigate, useParams} from "react-router-dom";
import {useJobs} from "@/contexts/JobContext.jsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {ChevronLeft} from "lucide-react"

function JobSingle() {
    const navigate = useNavigate()
    const {jobs, isLoading} = useJobs()
    const {jobId} = useParams()
    if (isLoading) return <h1>Loading...</h1>;
    const currentJob = jobs.filter(job => {
        return job.id === Number(jobId)
    })


    return (
        <>
            <div className="flex flex-col">
                <div className={'basis-1/4'}></div>
                <div className={'basis-3/4'}>
                    <Card>
                        <CardHeader>
                            <Button variant="outline" size={'icon'} onClick={()=>navigate(-1)}><ChevronLeft className="h-4 w-4" /></Button>

                            <CardTitle>{currentJob[0].job_title}</CardTitle>
                            <div className={'grid grid-cols-2'}>
                                <div>

                                    <h4 className={'text-base text-gray-500'}>
                                        <span
                                            className={'font-bold '}>{currentJob[0].company_name}</span> , {currentJob[0].location}
                                    </h4>
                                </div>
                                <div className={'text-right'}>Posted On: {currentJob[0].posted_date}</div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className={'grid gap-4 grid-cols-4 border-[1px] border-gray-200 rounded-xl'}>
                                <div className={'px-5 py-3 border-r-[1px] border-gray-200'}>
                                    <h4 className={'text-sm text-gray-400'}>Experience</h4>
                                    <p>Minimum {currentJob[0].experience_required} years</p>
                                </div>
                                <div className={'px-5 py-3 border-r-[1px] border-gray-200'}>
                                    <h4 className={'text-sm text-gray-400'}>Offer Salary </h4>
                                    <p>{Math.round(currentJob[0].salary / 1000) + 'k'} / Year </p>
                                </div>
                                <div className={'px-5 py-3 border-r-[1px] border-gray-200'}>
                                    <h4 className={'text-sm text-gray-400'}>Employee Type </h4>
                                    <p>{currentJob[0].employment_type} </p>
                                </div>
                                <div className={'px-5 py-3 '}>
                                    <h4 className={'text-sm text-gray-400'}>Apply Before</h4>
                                    <p>{currentJob[0].application_deadline}</p>
                                </div>
                            </div>

                            <div className="job_details">
                                <div className="job_row mt-4">
                                    <h2 className={'text-xl font-semibold'}>Description</h2>
                                    <p className={'text-gray-700'}>{currentJob[0].job_description}</p>
                                </div>
                                <div className="job_row  mt-2">
                                    <h2 className={'text-xl font-semibold'}>Requirements</h2>
                                    <p className={'text-gray-700'}>{currentJob[0].requirements}</p>
                                </div>

                            </div>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>

            </div>

        </>
    );
}

export default JobSingle;