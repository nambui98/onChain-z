import { useEffect, useRef, useState } from "preact/hooks";


type Props = {
    url: string,
    classNameButtonPlay?: string,
}

export default function Video({ url, classNameButtonPlay }: Props) {
    const videoRef = useRef();
    const [open, setOpen] = useState(false)

    // const [open, setOpen] = useState(false)
    useEffect(() => {
        // (videoRef as any).current?.load();
    }, [url]);

    return (
        <>
            {!open && <div onMouseOver={() => {
                // console.log("aaaaaaaaaaa234234");

            }} onClick={() => {
                setOpen(true);
                (videoRef as any).current?.load();
                (videoRef as any).current?.play();
            }} className="text-xl absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white font-semibold">
                <img className={`w-120px h-120px m-0 ${classNameButtonPlay ?? ''}`} src="/assets/icons/video-octagon.svg" alt="" />
            </div>
            }
            {
                // open &&
                <video controls ref={videoRef} height="100%" width="100%" className={`w-full h-full object-cover ${open ? '' : 'hidden'}`}>
                    <source src={url} />
                    <source src={url} type="video/webm" />
                    <source src={url} type="video/mp4"
                    />
                </video>
            }

        </>

    );
}