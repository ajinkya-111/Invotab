import React from 'react'

const ClientDetails = ({clientName,clientAddress}) => {
  return (
    <>
      <section className="mt-10">
          <p className="text-2xl uppercase font-bold mb-1">{clientName}</p>
          <h2>{clientAddress}</h2>
        </section>
    </>
  )
}

export default ClientDetails
