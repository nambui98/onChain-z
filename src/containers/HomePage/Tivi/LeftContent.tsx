import Video from '~/components/Video'
import { ArticleProp } from '~/types/ArticleComponentProps.type'

export default function LeftContent({ article }: ArticleProp) {
  return (
    <div className="w-3/5 sm-max:w-full">
      <div
        className="h-414px sm-max:h-193px bg-no-repeat bg-cover relative rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${article?.image})`,
        }}
      >
        {/* // TODO: Thach: video play*/}
        <Video url='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' />
      </div>
      <p className="text-2xl sm-max:text-xl text-grey font-semibold mt-6 sm-max:mt-4">{article?.title}</p>
    </div>
  )
}
