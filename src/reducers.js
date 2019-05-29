/* The 3 principles of React-Redux
1.Single Source Of truth
2.State is Read only
3.Changes using Pure Function
*/
export CHANGE_SEARCH_FIELD='CHANGE_SEARCH_FIELD';
const initialState={
	searchField:''
}
//REducer --A function
export const searchRobots=(state=initialState,action={})=>{
switch(action.type){
	case:CHANGE_SEARCH_FIELD
	   //returning a new state {} old state+action
	   return Object.assign({},state,{searchField:action.payload});
}
}