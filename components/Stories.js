import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker'

import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
  const [suggestions, setSuggestions] = useState([])
  const { data: session } = useSession()

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
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

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
