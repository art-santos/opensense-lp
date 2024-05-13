'use client'

import { useState } from 'react'
import { allPosts } from 'contentlayer/generated'
import PostItem from './post-item'

export default function Podcasts() {

  const [category, setCategory] = useState<string>('All')

  // Sort posts by date
  allPosts.sort((a: { publishedAt: string | number | Date }, b: { publishedAt: string | number | Date }) => {
    return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
  })   

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="md:flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-hkgrotesk font-extrabold mb-4 md:mb-0">Latest Videos</h2>
            {/* Filters */}
            
          </div>

          {/* Podcasts */}
          <div>
            {allPosts.map((post: any, postIndex: any) => (
              <PostItem key={postIndex} selectedCategory={category} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}