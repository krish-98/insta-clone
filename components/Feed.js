import React from 'react'
import Stories from './Stories'

const Feed = () => {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        {/* Stories */}
        <Stories />

        {/* Posts */}
      </section>
      <section>
        {/* Mini user profile */}
        {/* user suggestions */}
      </section>
    </main>
  )
}

export default Feed
