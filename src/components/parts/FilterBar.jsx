import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"


function FilterBar() {
    return (
        <>
            <div className={'bg-gray-50 border-[1px] border-gray-100 p-2'}>
                <form action="" className={'flex items-center gap-2'}>
                    <Input type="text" name="jobType" id="" placeholder={'Job Type'}/>
                    <Input type="text" name="jobLocation" id="" placeholder={'Job Location'}/>
                    <Input type="text" name="salaryRange" id="" placeholder={'Salary Range'}/>
                    <Button className={'bg-blue-700 min-w-fit'}>Find Job</Button>

                </form>
            </div>
        </>
    );
}

export default FilterBar;