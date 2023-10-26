import React from 'react'
import { useDispatch } from 'react-redux';
import { filterChange } from './filterReducer';

function VisibilityFilter() {

    const dispatch = useDispatch();
    
    const filterSelected = (value) => {
        console.log(value); 
        dispatch(filterChange(value));
            
}

  return (
      <div>
            <div>
                <input type="radio" name='filter' onChange={()=> filterSelected('all')}/> all 
                <input type="radio" name='filter' onChange={() => filterSelected('important')} /> Important
                < input type="radio" name='filter' onChange={() => filterSelected('nonimportant')} /> nonimportant 
          </div>
    </div>
  )
}

export default VisibilityFilter;