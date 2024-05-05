import React from 'react'

function page({ params }: {
    params:
    {
        commentId: string 
        blogId: string 
    }
}) {
  return (
    <div>comment id: {params.commentId} for blog id: {params.blogId}</div>
  )
}

export default page