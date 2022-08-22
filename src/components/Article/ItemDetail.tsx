import { formatDistance, format } from 'date-fns'
// import ReactMarkdown from "react-markdown"

export default function SingleBlog({ post }) {
  const { title, body, featuredImage, created_at = Date.now(), readingTime, author } = post || {}
  return (
    <>
      <div className="my-4 text-center">
        <h1 className="text-center text-4xl leading-tight text-gray-900 my-4 font-bold">{title}</h1>
        <div className="text-gray-500 flex justify-center items-center space-x-2">
          <span className="flex space-x-2 items-center overflow-hidden">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={author?.bioImage?.url ? author?.bioImage?.url : 'https://via.placeholder.com/200'} alt="author picture" />
            <p className="font-medium text-xs text-gray-600 cursor-pointer">{author?.name}</p>
          </span>

          <span>{format(new Date(created_at), 'MM/dd/yyyy')}</span>
          <span>{readingTime}</span>
        </div>
      </div>
      <div className="rounded-md h-56 w-full overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={
            featuredImage
              ? `http://localhost:1337${featuredImage.url}`
              : 'https://images.pexels.com/photos/13086249/pexels-photo-13086249.jpeg?auto=compress&bri=5&crop=bottom&cs=tinysrgb&fit=crop&h=500&w=2000'
          }
          alt={title}
        />
      </div>
      <article className="prose  max-w-full w-full my-4">
        {body}
        {/* <ReactMarkdown
          components={{
            img: (props) => {
              const copyProps = { ...props }
              if (!props?.src.includes("http")) {
                copyProps.src = `http://localhost:1337${props?.src}`
              }
              return <img {...copyProps} />
            },
          }}
        >
          {content}
        </ReactMarkdown> */}
      </article>
    </>
  )
}
