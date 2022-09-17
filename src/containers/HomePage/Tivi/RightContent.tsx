import PostService from '~/services/PostService'

type Props = {
  entries: any[]
}

const RightWidgetListItem = ({ entry }) => {
  return (
    <div className="group flex gap-x-4 items-center cursor-pointer">
      <div
        className="h-72px w-120px bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(${entry.image})`,
        }}
      >
        <div className="text-xl absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white font-semibold">
          <img className="w-40px h-40px m-0" src="/assets/icons/video-octagon.svg" alt="" />
        </div>
      </div>
      <p className="flex-1 text-sm text-grey font-semibold transition duration-300 ease-out group-hover:text-primary">{entry.title}</p>
    </div>
  )
}

export default function RightContent({ entries }: Props) {
  const list = entries

  return (
    <div className="RightContent Widget w-2/5 flex flex-col gap-y-6">
      {list.map((r, idx) => (
        <RightWidgetListItem entry={r} />
      ))}
    </div>
  )
}
