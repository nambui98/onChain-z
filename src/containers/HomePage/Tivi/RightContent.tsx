import Video from '~/components/Video'
import { ArticleListProp, ArticleProp } from '~/types/ArticleComponentProps.type'

const RightWidgetListItem = ({ article }: ArticleProp) => {
  return (
    <div className="group flex gap-x-4 items-center cursor-pointer">
      <div
        className="h-72px w-120px bg-no-repeat bg-cover relative rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${article?.image})`,
        }}
      >
        {/* // TODO: Thach: video play*/}
        <Video classNameButtonPlay='!w-40px !h-40px !m-0' url='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' />
      </div>
      <p className="flex-1 text-sm text-grey font-semibold transition duration-300 ease-out group-hover:text-primary">{article?.title}</p>
    </div>
  )
}

export default function RightContent({ articles }: ArticleListProp) {
  const list = articles

  return (
    <div className="RightContent Widget w-2/5 flex flex-col gap-y-6 sm-max:w-full sm-max:mt-4">
      {list.map((r, idx) => (
        <RightWidgetListItem article={r} />
      ))}
    </div>
  )
}
