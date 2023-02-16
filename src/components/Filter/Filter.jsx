import React from "react";

const Filter = ({filter, onChange}) => {
   return  <div className="flex flex-col gap-3">
       
        <label  
         htmlFor="filter"
          className="block text-sm font-medium text-gray-700"> Find contacts by name </label>
           <input type="text" name="filter" value={filter}onChange={onChange}
      
           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
           placeholder="Enter some name"/>
       

</div>
}

export default Filter;