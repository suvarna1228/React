import React from 'react'

const Contact = () => {
  return (
    <div >
    <h1 className='font-bold text-xl p-4 m-4'>Contact Us</h1>
    <form>
      <input type='text' className='border border-black p-2 m-2  ' placeholder='name'/>
      <input type='text' className='border border-black p-2 m-2  ' placeholder='message'/>
      <button className='border border-black p-2 m-2 rounded-md bg-slate-300'>Submit</button>
    </form>
    </div>
  )
}

export default Contact