type Props = {
  entry: any
}

export default function LeftContent({ entry }: Props) {
  return (
    <div className="w-3/5">
      <div
        className="h-414px bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(${entry?.image})`,
        }}
      >
        <div className="text-xl absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white font-semibold">
          <img className="w-120px h-120px m-0" src="/assets/icons/video-octagon.svg" alt="" />
        </div>
      </div>
      <p className="text-2xl text-grey font-semibold mt-6">{entry?.title}</p>
    </div>
  )
}
