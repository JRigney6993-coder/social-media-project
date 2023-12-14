import React from 'react'
const Posts = ({post}) => {
  return (
    <article key={post["_id"]} className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time className="text-gray-500">{post["create_date"]}</time>
        <a href={post.category}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          {post.category}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <p><span className="absolute inset-0" />{post.title}</p>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.content}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src={post["author_pic"]} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={`/profile/${post["author_link"]}`}><span className="absolute inset-0" />{post.author}</a>
          </p>
        </div>
      </div>
    </article>
  )
}

export default Posts