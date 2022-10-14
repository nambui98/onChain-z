import AppConfig from '~/AppConfig'
import { Clip } from '~/services/ContentService'

export default function RightContent({ clips }: { clips: Clip[] }) {
  const list = clips

  return (
    <div className="RightContent Widget w-2/5 flex flex-col gap-y-6 sm-max:w-full sm-max:mt-4">
      {list.map((r, idx) => (
        <RightWidgetListItem clip={r} />
      ))}
    </div>
  )
}

const RightWidgetListItem = ({ clip }: { clip: Clip }) => {
  return (
    <div className="group flex gap-x-4 items-center cursor-pointer">
      <a href={clip.url}>
        <div
          className="h-72px w-120px bg-no-repeat bg-cover relative rounded-2xl"
          style={{
            backgroundImage: `url(${clip?.thumbnail})`,
          }}
        >
          <div className="text-xl absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white font-semibold">
            <img className="w-40px h-40px m-0" src={AppConfig.DefaultVideoThumbnail} alt="Default Video Thumbnail" />
          </div>
        </div>
        <p className="flex-1 text-sm text-grey font-semibold transition duration-300 ease-out group-hover:text-primary">{clip?.title}</p>
      </a>
    </div>
  )
}
