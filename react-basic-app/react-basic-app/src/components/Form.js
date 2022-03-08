import React from 'react'

export default function Form({handleSubmit,value,handleChange}) {
  return (
    <div>
        <form onSubmit={handleSubmit} className="flex pt-2">
          <input className="w-full px-3 py-2 mr-4 textgray-500 border rounded shadow" type="text" name="value" placeholder="해야할 일 입력" value={value} onChange={handleChange}></input>
          <input className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-black hover:bg-blue-200"type="submit" value="입력"></input>
        </form>
    </div>
  )
}
