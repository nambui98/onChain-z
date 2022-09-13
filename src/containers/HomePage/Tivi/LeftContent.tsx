type Props = {}

export default function LeftContent({ }: Props) {
    return (
        <div className="w-3/5">
            <div className="h-414px bg-no-repeat bg-cover relative rounded-2xl" style={{
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/ee60/5d55/1f93f605f77188a9442e95076c5e382a?Expires=1664150400&Signature=GJeDue3P89~Mf0lnNYjQZ0dwBPpGYaGb-uVLVXVJCSAs80kulQNKyiAI6-V9cBlv7abLLKODvMOa5I8HrJU80rIYUlIzBM-qLwQsUIJoa-wbnMS5Z2LkzwXG5XCiS2unw1u11HvMQvSNSbgzmPaookRGG7DEXLz5FUdOUhB~2CajnaDn7O4D6NngRsUcAfIO6JHqA8-z-mmIlyOlEHOlFZ7APPZ2QOd7nk9Oc-ZWd38iFQjMQZUgppNFQFguV0wQrBQEmkG9LGFIBDqqjQupb9LTs2t9wYNOV3lRXGoebiCcB95JzrdqTc8VCXzGoZZ~OChUdP5FM-Egl7jpRdYzDA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
            }}>
                <div className="text-xl absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white font-semibold">
                    <img className="w-120px h-120px m-0" src="/assets/icons/video-octagon.svg" alt="" />
                </div>
            </div >
            <p className="text-2xl text-grey font-semibold mt-6">Sự kiện Web3 TOKEN2049 sẽ được diễn ra tại Singapore vào ngày 28/09</p>
        </div >
    )
}