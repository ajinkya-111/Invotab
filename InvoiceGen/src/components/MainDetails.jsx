 import React from 'react'
 
 const MainDetails = ({name, address}) => {
   return (
     <>
        <section className="flex flex-col items-end justify-end">
          <p className="font-bold text-xl uppercase mb-1 md:font-4xl">{name}</p>
          <p>{address}</p>
        </section>
     </>
   )
 }
 
 export default MainDetails
 