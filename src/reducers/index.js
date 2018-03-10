import { combineReducers } from 'redux';
import SelectionReducer from './SelectionReducer';
import SampleBundleReducer from './SampleBundleReducer';


export default combineReducers({
	 libraries: SampleBundleReducer,
	 selectedLibraryId: SelectionReducer	
});