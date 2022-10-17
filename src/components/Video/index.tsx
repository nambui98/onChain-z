import { useEffect, useRef, useState } from "preact/hooks";


type Props = {
    url: string,
    classNameButtonPlay?: string,
    allowClick?: boolean,
    isOpen?: boolean,
}

export default function Video({ url, classNameButtonPlay, allowClick, isOpen }: Props) {
    const videoRef = useRef();
    const [open, setOpen] = useState(false)
    useEffect(() => {
        setOpen(false);
        // (videoRef as any).current?.load();
        // (videoRef as any).current?.pause();
    }, [url]);

    return (
        <>
            {!open && <div onClick={() => {
                if (allowClick) {
                    debugger
                    setOpen(true);
                    // console.log((videoRef as any).current);

                    // (videoRef as any).current?.load();
                    // (videoRef as any).current?.play();
                }
            }} className="text-xl absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-white font-semibold">
                <img className={`w-120px h-120px m-0 ${classNameButtonPlay ?? ''}`} src="/assets/icons/video-octagon.svg" alt="" />
            </div>
            }
            {
                open &&
                <iframe className={`w-full h-full object-cover `} ref={videoRef}
                    title=''
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={url + '?autoplay=1'}>
                </iframe>
                // <video controls ref={videoRef} height="100%" width="100%" className={`w-full h-full object-cover ${open ? '' : 'hidden'}`}>
                //     <source src={url} />
                //     <source src={url} type="video/webm" />
                //     <source src={url} type="video/mp4"/>
                // </video>
            }

        </>

    );
}