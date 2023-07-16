import {BarChart3, ChevronLeft, FactoryIcon, GraduationCap, LayoutDashboard, Mail, MapPin, MonitorUp} from "lucide-react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useJobs} from "@/contexts/JobContext.jsx";
import ApplyForm from "@/components/ApplyForm.jsx";

function SingleView() {
    const navigate = useNavigate()
    const {jobs, isLoading, filteredJobs, dispatch, showApply, setShowApply} = useJobs()

    let allJobs = filteredJobs.length > 0 ? filteredJobs : jobs
    const {jobId} = useParams()
    if (isLoading) return <h1>Loading...</h1>;
    const currentJob = jobs.filter(job => {
        return job.id === Number(jobId)
    })

    return (
        <>
            <div className={'grid gap-4 grid-cols-4 px-5 py-3'}>
                <div className={'col-span-1 single_left'}>
                    <div className={'basis-1/3 p-4  rounded-xl bg-blue-50'}>

                        <div className={'mb-3 font-bold text-xl'}>
                            <h2>Company Details</h2>
                        </div>
                        <div className={'flex justify-around flex-col h-[100%] bg-white p-3 rounded-xl'}>
                            <div className="job_excerpt">
                                <img className={'w-16 h-16 rounded-full border-gray-300 border-4'}
                                     src={currentJob[0].company_logo} alt=""/>
                                <h2 className={'font-bold text-xl my-3 text-blue-700'}>{currentJob[0].company_name}</h2>
                                <div className={'my-2 border-t-[1px] border-gray-300 border-b-[1px] py-2'}>
                                    <div className={'text-base text-gray-500'}>
                                        <span
                                            className={'flex items-center mb-1 text-blue-600'}>
                                            <Mail
                                                className="h-4 w-4 text-blue-700 mr-1"/>: {currentJob[0].contact_email}</span>
                                        <span
                                            className={'flex items-center'}>
                                            <MapPin className="h-4 w-4 text-blue-700 mr-3"/> {currentJob[0].location}</span>
                                    </div>
                                </div>
                                <p className={'text-gray-500 mb-2'}>
                                    <span
                                        className={'font-bold '}>Contact Name:</span> {currentJob[0].contact_name}
                                </p>
                                <p className={'text-gray-500'}>
                                    <span
                                        className={'font-bold'}>Contact Phone:</span> {currentJob[0].contact_phone}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'col-span-3 single_right'}>
                    <div className="flex flex-col">
                        <div className={'basis-1/4'}></div>
                        <div className={'basis-3/4'}>
                            <Card>
                                <CardHeader>
                                    <Button variant="link" className={'w-auto justify-start text-blue-700 text-md'}
                                            onClick={() => navigate(-1)}>
                                        <ChevronLeft className="h-6 w-6"/> Go Back
                                    </Button>

                                    <div className={'bg-gray-100 py-4 px-4 rounded-xl'}>
                                        <CardTitle>{currentJob[0].job_title}</CardTitle>
                                        <div className={'grid grid-cols-2'}>
                                            <div className={'text-base text-gray-500 '}>
                                                <h4 className={'mt-3'}>
                                        <span
                                            className={'font-bold '}>{currentJob[0].company_name}</span> , {currentJob[0].location}
                                                </h4>
                                            </div>
                                            <div className={'text-right'}>Posted On: {currentJob[0].posted_date}</div>
                                        </div>
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
                                            <h2 className={'text-xl font-semibold mb-2'}>Description</h2>
                                            <p className={'text-gray-700'}>{currentJob[0].job_description}</p>
                                        </div>
                                        <div className="job_row mt-4 ">

                                            {currentJob[0].industry && <p className={'text-gray-700 mb-1 flex items-center'}>
                                                <FactoryIcon className={'text-blue-700 mr-1  w-5 h-5'}/>
                                                <span
                                                    className={'font-bold mr-2'}> Industry: </span> {currentJob[0].industry}
                                            </p>}

                                            {currentJob[0].education_required &&
                                                <p className={'text-gray-700 mb-1 flex items-center'}><GraduationCap
                                                    className={'text-blue-700 mr-1  w-5 h-5'}/><span
                                                    className={'font-bold mr-2'}>Education Required:</span> {currentJob[0].education_required}
                                                </p>}

                                            {currentJob[0].skills_required &&
                                                <p className={'text-gray-700 mb-1 flex items-center'}><BarChart3
                                                    className={'text-blue-700 mr-1  w-5 h-5'}/><span
                                                    className={'font-bold mr-2'}>Skills Required:</span> {currentJob[0].skills_required}
                                                </p>}

                                            {currentJob[0].job_category &&
                                                <p className={'text-gray-700 mb-1 flex items-center'}><LayoutDashboard
                                                    className={'text-blue-700 mr-1  w-5 h-5'}/><span
                                                    className={'font-bold mr-2'}>Job Category:</span> {currentJob[0].job_category}
                                                </p>}

                                            {currentJob[0].remote_work &&
                                                <p className={'text-gray-700 mb-1 flex items-center'}><MonitorUp
                                                    className={'text-blue-700 mr-1 w-5 h-5'}/><span
                                                    className={'font-bold mr-2'}>Remote Work:</span> {currentJob[0].remote_work ? 'Yes' : 'False'}
                                                </p>}
                                        </div>
                                    </div>
                                    <div className={'mt-4'}>
                                        {!showApply &&
                                            <Button className={'text-blue-100 w-1/4  bg-blue-700 hover:text-white'}
                                                    onClick={() => {
                                                        setShowApply(true)
                                                    }}>
                                                Apply Now
                                            </Button>}
                                        {showApply && <ApplyForm/>}
                                    </div>
                                </CardContent>

                            </Card>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default SingleView;