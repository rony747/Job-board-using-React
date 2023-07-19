import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {useNavigate} from "react-router-dom";

const JobContext = createContext()

const initialState = {
    jobs: [],
    isLoading: true,
    error: '',
    filteredJobs: [],
    currentFilter: '',
    applications:[]
}

function reducer(state, action) {
    switch (action.type) {
        case "loading":
            return {...state, isLoading: true};
        case 'loaded':
            return {...state, isLoading: false, jobs: action.payload}
        case 'rejected':
            return {...state, error: action.payload}
        case "filter":
            return {
                ...state,
                currentFilter: action.payload.value,
                filteredJobs: state.jobs.filter(job => job[action.payload.toFilter] === action.payload.value)
            }
        case "sort":
            return {
                ...state,
                filteredJobs: action.payload === 'newest' ? (state.jobs.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date))) : (state.jobs.sort((a, b) => new Date(a.posted_date) - new Date(b.posted_date)))
            }

        case "apply":
            console.log(state)
            return {
                ...state, applications: [...state.applications,{jobid:action.payload.id, data:{...action.payload.data}}]
            }
        
        
        case 'reset':

            return {...state, isLoading: false, currentFilter: '', jobs: state.jobs, filteredJobs: []}

        default:
            return state
    }
}

function JobContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {jobs, filteredJobs, isLoading, error, currentFilter,applications} = state
    const [showApply, setShowApply] = useState(false)
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


    /* get filter items  */
    const filterReduce = function (type) {
        return jobs?.reduce((acc, cur) => {
            if (!acc.includes(cur[type])) {
                acc.push(cur[type]);
            }
            return acc
        }, [])
    }

    function getFilterItem(name) {
        return filterReduce(name)
    }


    return (
        <>
            {<JobContext.Provider
                value={{jobs, filteredJobs, currentFilter, isLoading, dispatch, error, state, getFilterItem,showApply,setShowApply,applications}}>
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