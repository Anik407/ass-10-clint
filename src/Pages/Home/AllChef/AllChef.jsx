import React from 'react';
import ChefCards from './ChefCards/ChefCards';


const AllChef = ({ chef }) => {
    
    return (
        <div>
          
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-red-200 '>
           {chef.map(cd => <ChefCards  cd={cd} key={cd.id}></ChefCards> )}
           </div>
        </div>
    );
};

export default AllChef;
