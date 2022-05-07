import React from 'react'

const MiniProfile = () => {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://muralikrishnan.netlify.app/assets/pro.7a7ac16e591417165bb41b19aca52620.jpg"
        alt=""
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">Murali Krishnan</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}

export default MiniProfile
