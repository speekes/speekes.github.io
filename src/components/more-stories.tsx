import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
  baseURL: string
}

const MoreStories = ({ posts, baseURL }: Props) => {
  return (
    <section>
      {/* <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 row-gap-10 mb-10">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            baseURL={baseURL}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
