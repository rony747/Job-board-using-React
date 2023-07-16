import {createContext, useContext, useEffect, useReducer} from "react";

const JobContext = createContext()

const initialState = {
    jobs: [],
    isLoading: true,
    error: '',
    filteredJobs:[]
}

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return {...state, isLoading: true};
        case 'loaded':
            return {...state, isLoading: false, jobs: action.payload}
        case 'rejected':
            return {...state, error: action.payload}
        case "filter/employment":
            return {...state, filteredJobs: state.jobs.filter(job => job.employment_type === action.payload)}
        case "filter/level":
            return {...state, filteredJobs: state.jobs.filter(job => job.job_level === action.payload)}

        default:
            return  state
    }
}

function JobContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {jobs,filteredJobs, isLoading, error} = state

    useEffect(function () {
        async function jobsFetch() {
            dispatch({type: 'loading'})
            try {
                const res = await fetch('http://localhost:9000/jobs')
                const data = await res.json()
                dispatch({
                    type: 'loaded',
                    payload: data
                })

            } catch {
                dispatch({
                    type: 'rejected',
                    payload: "There is an error loading JobsPage"
                })
            }
        }

        jobsFetch()
    }, [])

    return (
        <>
            {<JobContext.Provider value={{jobs,filteredJobs, isLoading, dispatch, error, state}}>
                {children}
            </JobContext.Provider>}
        </>
    );
}

function useJobs() {
    const context = useContext(JobContext);
    if (context === undefined) throw new Error("Context called out side of provider")
    return context
}

export {useJobs, JobContextProvider};