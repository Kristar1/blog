import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'
const PostWidget = ({categories,slug}) => {
  const [realtedPosts, setRealtedPosts] = useState([])

useEffect(()=>{
if(slug){
  getSimilarPosts(categories,slug).then((result)=>setRealtedPosts(result))
}else{
 getRecentPosts().then((result)=>setRealtedPosts(result))

}
},[slug])
console.log(realtedPosts)
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
<h3 className='text-xl mb-8 font-semibold border-b pb-4'>{slug? 'Related Posts' :'Recent Posts'}</h3>
{realtedPosts.map((post)=>(
  <div key={post.title} className="flex items-center wifull mb-4">
    <div className='w-16 flex-none'>
 <img src={post.featuredImage.url} alt={post.title} height="60px" width='60px' className='align-middle rounded-full'/>
    </div>
    <div className="flex-grow ml-4">
      <p className='text-gray-500 font-xs'>{moment(post.createdAt).format('MMM DD, YYYY')}</p></div>
<Link href={`/posts/${post.slug}`}  key={post.title} className='text-md'>{post.title}</Link>
  </div>

))}
    </div>
  )
}

export default PostWidget