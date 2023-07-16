import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useJobs} from "@/contexts/JobContext.jsx";
import {useState} from "react";


function FilterBar() {
    const {jobs, dispatch,getFilterItem,currentFilter} = useJobs()
    const [currentCheck, setCurrentCheck] = useState('all')

    const byEmployment = getFilterItem('employment_type')
    const byLevel = getFilterItem('job_level')

    const handleChange = (e) => {
        dispatch({
            type: 'filter',
            payload: {
                toFilter:'employment_type',
                value:e
            }
        })
        setCurrentCheck(e)

    }

    return (
        <>
            <div className={'bg-gray-50 border-[1px] border-gray-100 p-2 '}>
                <form action="" className={'flex items-center gap-2 bg-white'}>

                    <Select onValueChange={handleChange}  >
                        <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder="Job Type" />
                        </SelectTrigger>
                        <SelectContent >
                        {byEmployment?.map(job => {
                            return (
                                <SelectItem key={job} value={job}  >{job}</SelectItem>
                            )
                        })}
                        </SelectContent>
                    </Select>

                    {/*<Input type="text" name="jobLocation" id="" placeholder={'Job Location'}/>*/}
                    {/*<Input type="text" name="salaryRange" id="" placeholder={'Salary Range'}/>*/}
                    {/*<Button className={'bg-blue-700 min-w-fit'}>Find Job</Button>*/}

                </form>
            </div>
        </>
    );
}

export default FilterBar;