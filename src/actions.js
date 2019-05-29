import {CHANGE_SEARCH_FIELD} from './constants.js'
export const setSearchField=(text)=>({
	type:CHANGE_SEARCH_FIELD,    //action no. 1
	payload:text 
})