import BlogPostCard from "./BlogPostCard";

export default function BlogCaroussel({ posts, categories }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            posts.map((post, key) => (
              <BlogPostCard key={key} post={post} categories={categories}></BlogPostCard>
            )
            )
          }
        </div>
      </div>
    </section >
  )
}
