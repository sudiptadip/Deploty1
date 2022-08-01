import { GET_PROFILE_DETAILS_FAILURE, GET_PROFILE_DETAILS_REQUEST, GET_PROFILE_DETAILS_SUCCESS } from "./actionTypes"

export const Success =  (data) => {
    return {
        type: GET_PROFILE_DETAILS_SUCCESS, payload: data
    }
}

export const Request =  (data) => {
    return {
        type: GET_PROFILE_DETAILS_REQUEST,
    }
}

export const Failure =  (data) => {
    return {
        type: GET_PROFILE_DETAILS_FAILURE,
    }
}
