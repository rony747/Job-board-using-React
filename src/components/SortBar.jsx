import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";

function SortBar({allJobs, dispatch}) {
    const handleSort = (e) => {
        dispatch({
            type: 'sort',
            payload: e
        })
    }
    return (
        <>
            <div className="job_sortBar flex justify-between mb-3">
                <div className="total_num"><h3
                    className={'font-bold text-xl text-gray-600'}>Showing {allJobs.length} Jobs</h3></div>
                <div className="job_sort">
                    <Select onValueChange={handleSort}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort By"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='newest'>Newest Job</SelectItem>
                            <SelectItem value='oldest'>Oldest Job</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </>
    );
}

export default SortBar;