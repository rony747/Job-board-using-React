import {BrowserRouter, Navigate,  Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage.jsx";
import JobsPage from "@/pages/JobsPage.jsx";
import {JobContextProvider} from "@/contexts/JobContext.jsx";
import JobLists from "@/components/JobLists.jsx";
import JobSingle from "@/components/JobSingle.jsx";
import ApplyForm from "@/components/ApplyForm.jsx";

function App() {

    return (

        <>
            <JobContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path={'/find-job'} element={<JobsPage /> }>
                            <Route path={'/find-job'} element={<Navigate replace to={'/find-job/all'} /> }/>
                            <Route index path={'/find-job/all'} element={<JobLists/>}/>
                            <Route path={'/find-job/all/:jobId'} element={<JobSingle/>}/>
                            <Route path={'/find-job/all/:jobId/apply'} element={<ApplyForm/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </JobContextProvider>

        </>
    );
}

export default App
