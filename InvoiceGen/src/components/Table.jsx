import React from 'react'

const Table = ({ list, total, setTotal }) => {
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className='font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (

          <React.Fragment key={id}>

            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div className=" flex items-end justify-end text-gray-800 text-4xl font-bold">
        Rs.{total.toLocaleString()}</div>
    </>
  )
}

export default Table
