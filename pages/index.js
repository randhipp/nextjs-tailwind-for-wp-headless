import BlogCaroussel from "../components/BlogCaroussel";

function Home({ posts, categories }) {
  return (
    <div className="container m-auto px-3">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">NextJS + Tailwind + Headless Wordpress</h1>
            <p className="leading-relaxed mt-4">Testing Fuctionality</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </input>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
      </section>
      <BlogCaroussel posts={posts} categories={categories}></BlogCaroussel>
    </div>
  )
}

export async function getStaticProps(context) {
  let res = await fetch(`https://headless-wp.primeracloud.com/wp-json/wp/v2/posts?per_page=3`)
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  res = await fetch(`https://headless-wp.primeracloud.com/wp-json/wp/v2/categories`)
  const categories = await res.json()
  if (!categories) {
    return {
      notFound: true,
    }
  }
  return {
    props: { posts: posts, categories: categories }, // will be passed to the page component as props
  }
}

export default Home