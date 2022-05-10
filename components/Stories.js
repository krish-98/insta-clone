import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

import Story from './Story'

const Stories = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      // ...faker.helpers.contextualCard(),
      ...faker,
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.image.avatar()}
          username={profile.name.firstName() + profile.name.lastName()}
        />
      ))}
    </div>
  )
}

export default Stories
