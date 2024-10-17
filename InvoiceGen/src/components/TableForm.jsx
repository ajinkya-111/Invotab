import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { v4 as uuidv4 } from "uuid"
import React, { useEffect, useState } from 'react'

const TableForm = ({ description, setDescription, quantity, setQuantity,
  price, setPrice, amount, setAmount, list, setList, total, setTotal }) => {
  const [isEditing, setIsEditing] = useState(false)
  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0;

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className == "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })

  useEffect(() => {
    setAmount(quantity * price)

  }, [quantity, price])
  const handleSubmit = (e) => {
    e.preventDefault()

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      price,
      amount
    }
    setDescription("")
    setQuantity("")
    setPrice("")
    setAmount("")
    setList([...list, newItems])
    setIsEditing(false)
  }
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
    setAmount(editingRow.amount)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input type="text"
            id="description"
            name="description"
            value={description}
            placeholder="Item  description"
            onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='md:grid grid-cols-3 gap-10'>
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input type="text"
              id="quantity"
              name="quantity"
              value={quantity}
              placeholder="Quantity"
              onChange={(e) => setQuantity(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input type="text"
              id="price"
              name="price"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <p>{amount}</p>
          </div>
        </div>
        <button type='submit' className="mb-5 
            bg-blue-500 py-2 px-8 text-white 
            font-bold rounded shadow 
           order-2 border-blue-500 
           hover:bg-transparent hover:text-blue-500 
           transition-all duration-300">
          {isEditing ? "Editing the table" :
            "Add table item"}
        </button>
      </form>
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
                <td className="amount">{amount}</td>
                <td onClick={() => deleteRow(id)}><MdOutlineDelete className="text-red-500 text-xl font-bold" /></td>
                <td onClick={() => editRow(id)}><CiEdit className="text-green-500 text-xl font-bold" /></td>
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

export default TableForm
