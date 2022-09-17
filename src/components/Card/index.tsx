import { ArticleProp } from '~/types/ArticleComponentProps.type'

export default function Card({ article }: ArticleProp) {
  const author = article?.author

  return (
    //   <div className="w-1/3">index</div>
    <div
      className="group transition duration-300 ease-out cursor-pointer  bg-no-repeat bg-cover relative rounded-2xl"
      style={
        {
          // backgroundImage: `url(https://s3-alpha-sig.figma.com/img/51ad/f561/3c6f7e0da8c01af4fd95da68ca862f89?Expires=1663545600&Signature=CpB6kZIgY9NAgpHrpXfz5mtndvEEcV-yG-yoiYIvk9K-UKlLiIYYjCW7fHgxQBoJmIemjml-lXpV0elGXhUS5KkUjZWiv4BrSDPphjf3TZkTmk2rAaz0ilAcax6NjzfkYXKpVaimn7n-W66Saxp2juOBaIhXgaRk5t~PwLy1YGjje7yf-R54RqRIJVZudID6uv1zVmIn7gCAVPXt0-HfxHfk~niotxtLTuVPW-3ThIg3WjCCDMxwWMKFbVZXkRQ5d3wZfImPHnAIXYXF1FJVj8lpJCwhoVbZRlBvrxX7N1Eo70nW78h0wch007HtH3lVX6UZc~pqFiCHZie8CvTDiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
        }
      }
    >
      <img className="rounded-2xl" src={article?.image} alt={article?.title?.substring(0, 20)} />
      <p className="mt-4 text-base  bottom-1.5rem  inset-x-1.5rem text-grey font-semibold transition duration-300 ease-out group-hover:text-primary">{article?.title}</p>

      {author ? (
        <div className="flex items-center mt-4">
          <img className="rounded-full w-8 h-8" src={author?.image} alt={author?.name} />
          <span className="text-base text-grey80 font-semibold ml-2">{author?.name}</span>
          <span className="text-base text-grey80 font-semibold text-sm ml-auto">{article?.publishedDate}</span>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
