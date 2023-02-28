import * as c from './ActionTypes'

export const getParksSuccess = (parks) => ({
 type: c.PARKS_CALL_SUCCESS,
 parks
})

export const getParksFailure = (error) => ({
 type: c.PARKS_CALL_FAILURE,
 error
})