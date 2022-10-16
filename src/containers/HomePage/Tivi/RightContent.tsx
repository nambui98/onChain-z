import React from 'react'
import Video from '~/components/Video'
import { TiviProps, TivisProps } from '~/types/video.type'

const RightWidgetListItem = ({ video, setVideoActive }: TiviProps & { setVideoActive: Function }) => {
  return (
    <div className="group flex gap-x-4 items-center cursor-pointer" onClick={() => { setVideoActive(video) }}>
      <div
        className="h-72px w-120px bg-no-repeat bg-cover relative rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${video?.thumbnail})`,
        }}
      >
        <Video classNameButtonPlay='!w-40px !h-40px !m-0' url={video.videoLink} />
      </div>
      <p className="flex-1 text-sm text-grey font-semibold transition duration-300 ease-out group-hover:text-primary">{video?.title}</p>
    </div>
  )
}

export default function RightContent({ videos, onClickVideo }: TivisProps & { onClickVideo: Function }) {
  return (
    <div className="RightContent Widget w-2/5 flex flex-col gap-y-6 sm-max:w-full sm-max:mt-4">
      {videos.map((r, idx) => (
        <RightWidgetListItem setVideoActive={() => onClickVideo(r)} video={r} />
      ))}
    </div>
  )
}
