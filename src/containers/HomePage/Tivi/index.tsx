import React from 'react'
import { useEffect, useState } from 'preact/hooks'
import { Heading2 } from '~/components/Heading'
import { ArticleListProp } from '~/types/ArticleComponentProps.type'
import { TiviProps, TivisProps } from '~/types/video.type'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

export default function Tivi({ videos, className }: TivisProps) {
  // const list = articles
  const [videoActive, setVideoActive] = useState(videos[0]);
  const [isOpen, setIsOpen] = useState(false);
  //   useEffect(() => {
  //     setVideoActive((prev)=>{
  //       if()
  // return prev;
  //     })
  //     if ((videoActive as any).uuid)
  //   }, [videoActive])

  console.log(videos);
  debugger
  const onClickVideo = (video) => {
    setIsOpen(false);
    // video.videoLink = "https://youtu.be/B2BZAslYyTY";
    setVideoActive(video);
    setTimeout(() => {

      setIsOpen(true);
    }, 500);
  }
  return (
    <div className={`Tivi sm-max:px-4 ${className ?? ''}`}>
      <Heading2 text="OnChainZ TV" />
      <div className="flex gap-x-8 mt-6 sm-max:flex-col">
        <LeftContent isOpen={isOpen} video={videoActive} />
        <RightContent onClickVideo={onClickVideo} videos={videos.filter(video => (video as any).uuid !== (videoActive as any).uuid).slice(1, 6)} />
      </div>
    </div>
  )
}
