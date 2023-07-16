import {useJobs} from "@/contexts/JobContext.jsx";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Button} from "@/components/ui/button.jsx";
import {Label} from "@/components/ui/label.jsx";

function ApplyForm() {
    // const {jobs, isLoading,filteredJobs,dispatch,showApply,setShowApply} = useJobs()

    return (
        <>
            <form  className={'p-4 bg-gray-100 rounded-lg mt-6'}>
                <Input type="text" placeholder="Full Name" className={'mb-3'}/>
                <Input type="email" placeholder="Email" className={'mb-3'} />
                <Input type="text" placeholder="Phone" className={'mb-3'} />
                <Textarea placeholder="Type your message here." className={'mb-3 bg-white'} />
                <div className="grid w-full  items-center gap-1.5 mb-3">
                    <Label htmlFor="picture" className={'text-gray-500'}>Upload CV</Label>
                    <Input id="picture" type="file" />
                </div>
                <Button type={'submit'} className={'bg-blue-700 w-1/4'}>Submit</Button>
            </form>

        </>
    );
}

export default ApplyForm;