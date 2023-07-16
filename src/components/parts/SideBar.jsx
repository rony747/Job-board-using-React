import {Label} from "@/components/ui/label.jsx"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {useJobs} from "@/contexts/JobContext.jsx";
import {useEffect, useRef, useState} from "react";

function SideBar() {
    const {jobs, dispatch} = useJobs()
    const [currentCheck, setCurrentCheck] = useState('all')


    const filterReduce = function (type) {
        return jobs?.reduce((acc, cur) => {
            if (!acc.includes(cur[type])) {
                acc.push(cur[type]);
            }
            return acc
        }, [])
    }

    const byEmployment = filterReduce('employment_type')
    const byLavel = filterReduce('job_level')


    const handleChange = (e) => {
        dispatch({
            type: 'filter/employment',
            payload: e.target.value
        })
        setCurrentCheck(e.target.value)
    }
    const handleChangeLevel = (e) => {
        dispatch({
            type: 'filter/level',
            payload: e.target.value
        })
        setCurrentCheck(e.target.value)
    }

    return (
        <>
            <div className="sideBar basis-1/5">
                <h3 className={'text-xl font-semibold mb-4 text-gray-500'}>Type of Employment</h3>

                <RadioGroup defaultValue="all">
                    <div key='all' className="flex items-center space-x-2">
                        <RadioGroupItem onClick={handleChange} value='all' id='all'
                                        checked={currentCheck === 'all' ? 'checked' : ''}/>
                        <Label className={'text-gray-500'} htmlFor='all'>All</Label>
                    </div>
                    {byEmployment?.map(job => {
                        return (
                            <div key={job} className="flex items-center space-x-2">
                                <RadioGroupItem onClick={handleChange} value={job}
                                                checked={currentCheck === job ? 'checked' : ''} id={job}/>
                                <Label className={'text-gray-500'} htmlFor={job}>{job}</Label>
                            </div>
                        )
                    })}
                </RadioGroup>

                <hr className={'mt-8 mb-5'}/>
                <h3 className={'text-xl font-semibold mb-4 text-gray-500'}>Salary Range</h3>
                <form action="">

                    <RadioGroup defaultValue="all">
                        <div key='all' className="flex items-center space-x-2">
                            <RadioGroupItem onClick={handleChange} value='all' id='all'
                                            checked={currentCheck === 'all' ? 'checked' : ''}/>
                            <Label className={'text-gray-500'} htmlFor='all'>All</Label>
                        </div>
                        {byLavel?.map(job => {
                            return (
                                <div key={job} className="flex items-center space-x-2">
                                    <RadioGroupItem value={job} onClick={handleChangeLevel}
                                                    checked={currentCheck === job ? 'checked' : ''} id={job}/>
                                    <Label className={'text-gray-500'} htmlFor={job}>{job}</Label>
                                </div>
                            )
                        })}
                    </RadioGroup>

                </form>

            </div>
        </>
    );
}

export default SideBar;