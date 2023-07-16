import {Label} from "@/components/ui/label.jsx"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {useJobs} from "@/contexts/JobContext.jsx";
import {useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button.jsx";

function SideBar() {
    const {jobs, dispatch,getFilterItem,filteredJobs,currentFilter} = useJobs()
    const [currentCheck, setCurrentCheck] = useState('all')


const byEmployment = getFilterItem('employment_type')
const byLevel = getFilterItem('job_level')


    const handleChange = (e) => {
        dispatch({
            type: 'filter',
            payload: {
                toFilter:'employment_type',
                value:e.target.value
            }
        })
        setCurrentCheck(e.target.value)
    }
    const handleChangeLevel = (e) => {
        dispatch({
            type: 'filter',
            payload: {
                toFilter:'job_level',
                value:e.target.value
            }
        })
        setCurrentCheck(e.target.value)
    }

    return (
        <>
            <div className="sideBar basis-1/5">
                {filteredJobs.length > 0 && <Button variant={'link'} onClick={()=>dispatch({type:'reset'})} >Clear Filter</Button>}
                <div className="side_filter p-3 border-[1px] border-gray-200 bg-white mb-4 rounded-xl pb-5">
                    <h3 className={'text-xl font-semibold mb-4 text-gray-500'}>Type of Employment</h3>

                    <RadioGroup defaultValue="all">
                        <div key='all' className="flex items-center space-x-2">
                            <RadioGroupItem onClick={handleChange} value='all' id='all'
                                            checked={currentFilter === 'all' ? 'checked' : ''}/>
                            <Label className={'text-gray-500'} htmlFor='all'>All</Label>
                        </div>
                        {byEmployment?.map(job => {
                            return (
                                <div key={job} className="flex items-center space-x-2">
                                    <RadioGroupItem onClick={handleChange} value={job}
                                                    checked={currentFilter === job ? 'checked' : ''} id={job}/>
                                    <Label className={'text-gray-500'} htmlFor={job}>{job}</Label>
                                </div>
                            )
                        })}
                    </RadioGroup>

                </div>


                <div className="side_filter p-3 border-[1px] border-gray-200 bg-white mb-4 rounded-xl pb-5">
                    <h3 className={'text-xl font-semibold mb-4 text-gray-500'}>Level</h3>

                        <RadioGroup defaultValue="all">
                            <div key='all' className="flex items-center space-x-2">
                                <RadioGroupItem onClick={handleChange} value='all' id='all'
                                                checked={currentCheck === 'all' ? 'checked' : ''}/>
                                <Label className={'text-gray-500'} htmlFor='all'>All</Label>
                            </div>
                            {byLevel?.map(job => {
                                return (
                                    <div key={job} className="flex items-center space-x-2">
                                        <RadioGroupItem value={job} onClick={handleChangeLevel}
                                                        checked={currentCheck === job ? 'checked' : ''} id={job}/>
                                        <Label className={'text-gray-500'} htmlFor={job}>{job}</Label>
                                    </div>
                                )
                            })}
                        </RadioGroup>
                </div>


            </div>
        </>
    );
}

export default SideBar;