import React, { useState, useEffect } from 'react'
import { faker } from '@faker-js/faker'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker,
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold">Suggestion for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            className="h-10 w-10 rounded-full border p-[2px]"
            src={profile.image.avatar()}
            alt=""
          />

          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">
              {`${profile.name.firstName()} ${profile.name.lastName()}`}
            </h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.companyName()}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
