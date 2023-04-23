import { urlFor } from "../library/sanity";
import Tag from "./Tag"
import { forwardRef } from "react";


const Card = forwardRef(({ onClick, href, post }, ref) => {
  const { title, publishedAt, mainImage, username, authorImage, categories} = post

  return (
      <div className="card-container" href={href} onClick={onClick} ref={ref}>
          <h2>{title}</h2>
      <p>Published on: {new Date(post.publishedAt).toDateString()}</p>
      <img
         className="main-image"
         alt={post.title + " image"}
         src={urlFor(post.mainImage)}
      />
      <hr />

      <div className="info-container">
        <p>Posted by: {post.username}</p>
        <img
           className="avatar"
           alt={post.username + " avatar"}
           src={urlFor(post.authorImage)}
        />
      </div>
      <div className="tag-container">
        {post.categories.map((category) => (
          <> 
          {category && <Tag key={category} title={category?.title}/>}
          </>
        ))}
      </div>
    </div>
  )
})

export default Card