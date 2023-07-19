import {useJobs} from "@/contexts/JobContext.jsx";
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button.jsx";
import {Label} from "@/components/ui/label.jsx";
import {useState} from "react";

function ApplyForm({jobid}) {
    const {dispatch, showApply, setShowApply} = useJobs()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: 'apply',
            payload: {id: jobid, data: {name, email, phone, message}}
        })
        setShowApply(false)
    }

    return (
        <>
            <form className={'p-4 bg-gray-100 rounded-lg mt-6'} onSubmit={handleSubmit}>
                <Input type="text" placeholder="Full Name" className={'mb-3'} value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <Input type="email" placeholder="Email" className={'mb-3'} value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}/>
                <Input type="text" placeholder="Phone" className={'mb-3'} value={phone} onChange={(e) => {
                    setPhone(e.target.value)
                }}/>
                <Textarea placeholder="Type your message here." className={'mb-3 bg-white'} value={message}
                          onChange={(e) => {
                              setMessage(e.target.value)
                          }}/>

                <Button type={'submit'} className={'bg-blue-700 w-1/4'}>Submit</Button>
            </form>

        </>
    );
}

export default ApplyForm;