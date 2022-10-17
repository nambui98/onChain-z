
import AppConfig from '~/AppConfig'
import Video from '~/components/Video';
import { Clip } from '~/services/ContentService'

export default function LeftContent({ clip }: { clip: Clip }) {
  return (
    <div className="w-3/5 sm-max:w-full">
      <div
        className="h-414px sm-max:h-193px bg-no-repeat bg-cover relative rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${clip?.thumbnail ?? AppConfig.DefaultVideoThumbnail})`,
        }}
      >
        <Video allowClick={true} url={clip.url} />
      </div>
      <p className="text-2xl sm-max:text-xl text-grey font-semibold mt-6 sm-max:mt-4">{clip?.title}</p>
    </div>
  )
}
