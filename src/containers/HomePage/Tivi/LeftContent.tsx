import AppConfig from '~/AppConfig'
import { Clip } from '~/services/ContentService'

export default function LeftContent({ clip }: { clip: Clip }) {
  return (
    <div className="w-3/5 sm-max:w-full">
      <a href={clip.url}>
        <div
          className="h-414px sm-max:h-193px bg-no-repeat bg-cover relative rounded-2xl"
          style={{
            backgroundImage: `url(${clip?.thumbnail ?? AppConfig.DefaultVideoThumbnail})`,
          }}
        >
          <div className="text-xl absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white font-semibold">
            {/* <img className="w-120px h-120px m-0" src={AppConfig.DefaultVideoThumbnail} alt="Default Video Thumbnail" /> */}
          </div>
        </div>
        <p className="text-2xl sm-max:text-xl text-grey font-semibold mt-6 sm-max:mt-4">{clip?.title}</p>
      </a>
    </div>
  )
}
