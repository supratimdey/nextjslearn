import React from 'react'

function page({ params }: { params: { blogId: string } }) {
  return (
      <div>blog page id : { params.blogId}</div>
  )
}

export default page