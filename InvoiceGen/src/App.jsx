import ClientDetails from "./components/ClientDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Date from "./components/Date";
import TableForm from "./components/TableForm";
import {useState, useRef } from "react";
import ReactToPrint from "react-to-print";
function App() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankAccount, setBankAccount] = useState('')
  const [website, setWebsite] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientAddress, setClientAddress] = useState('')
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [invoiceDate, setInvoiceDate] = useState('')
  const [notes, setNotes] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [showInvoice, setShowInvoice] = useState(false)
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0)
  const componentRef = useRef();
  const handlePrint = () => {
    window.print();
  }


  return (

    <>

      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl bg-white rounded shadow">
         <ReactToPrint trigger={()=><button>Print/Download</button>}
          content={()=>componentRef.current}/>
        {showInvoice ?
          (<div ref={componentRef}>
            <Header handlePrint={handlePrint} />

            <MainDetails name={name} address={address} />

            <ClientDetails clientName={clientName} clientAddress={clientAddress} />

            <Date invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

            <Table list={list} total={total} setTotal={setTotal} />

            <Notes notes={notes} />

            <Footer name={name} email={email} bankName={bankName} bankAccount={bankAccount} phone={phone} website={website} />

            <button onClick={() => setShowInvoice(false)} className="mt-5 
            bg-blue-500 py-2 px-8 text-white 
            font-bold rounded shadow 
           order-2 border-blue-500 
           hover:bg-transparent hover:text-blue-500 
           transition-all duration-300">Edit Information</button>
          </div>
          ) : (
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="Off"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input type="text"
                    id="address"
                    name="address"
                    placeholder="Enter your address"
                    autoComplete="Off"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="Off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input type="url"
                    id="website"
                    name="website"
                    placeholder="Enter your website"
                    autoComplete="Off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your number</label>
                  <input type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    autoComplete="Off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />
                </div>

              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input type="text"
                    id="bankName"
                    name="bankName"
                    placeholder="Enter your bank name"
                    autoComplete="Off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">Enter your bank account number</label>
                  <input type="text"
                    id="bankAccount"
                    name="bankAccount"
                    placeholder="Enter your bankAccount"
                    autoComplete="Off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)} />
                </div>
              </article>

              <article className="grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input type="text"
                    id="clientName"
                    name="clientName"
                    placeholder="Enter your client's name"
                    autoComplete="Off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter your client's address</label>
                  <input type="text"
                    id="clientAddress"
                    name="clientAddress"
                    placeholder="Enter your client's address"
                    autoComplete="Off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)} />
                </div>
              </article>

              <article className="grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice number</label>
                  <input type="text"
                    id="invoiceNumber"
                    name="invoiceNumber"
                    placeholder="Invoice number"
                    autoComplete="Off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice date</label>
                  <input type="date"
                    id="invoiceDate"
                    name="invoiceDate"
                    placeholder="invoiceDate "
                    autoComplete="Off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due date</label>
                  <input type="date"
                    id="dueDate"
                    name="dueDate"
                    placeholder="dueDate"
                    autoComplete="Off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)} />
                </div>
              </article>

              <article>
                <TableForm description={description} setDescription={setDescription}
                  quantity={quantity} setQuantity={setQuantity}
                  price={price} setPrice={setPrice}
                  amount={amount} setAmount={setAmount} list={list} setList={setList}
                  total={total} setTotal={setTotal} />
              </article>

              <label htmlFor="notes">Additionl notes</label>
              <textarea name="notes" id="notes" cols="30" rows="10"
                placeholder="Additional notes for client" value={notes}
                onChange={(e) => setNotes(e.target.value)}></textarea>

              <button onClick={() => setShowInvoice(true)} className="mt-5 
            bg-blue-500 py-2 px-8 text-white 
            font-bold rounded shadow 
           order-2 border-blue-500 
           hover:bg-transparent hover:text-blue-500 
           transition-all duration-300">Preview</button>
            </div>
          )}

      </main>
    </>
  )
}

export default App
