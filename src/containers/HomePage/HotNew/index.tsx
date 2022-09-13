// import Flicking from "@egjs/preact-flicking";
import { useState } from 'preact/hooks';
import Title from "~/components/Title";
import InfiniteFlicking from './InfiniteFlicking'

import Flicking from "@egjs/preact-flicking";
import { AutoPlay, Arrow } from "@egjs/flicking-plugins";
import './style.scss'
import Card from '~/components/Card';
type Props = {
}

export default function HotNew({ }: Props) {
    const [panels, setPanels] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    let plugins;
    if (typeof window !== 'undefined') {

        plugins = [new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }), new Arrow({ parentEl: document.body })];
    }
    return (
        <div className="mt-120px relative">
            <Title name="Tin tức nổi bật" />
            <Flicking className="mt-6" gap={20} bound={true} infinite={true} infiniteThreshold={50} plugins={plugins}>
                {panels.map(index => <div className="flicking-panel w-1/3 px-3" key={index}><Card /></div>)}
                {/* {panels.map(index => <Card className="flicking-panel w-500px" key={index}>{index + 1}</Card>)} */}
            </Flicking>
            <span className="flicking-arrow-prev bg-white flex items-center justify-center mt-[-20px]">
                <img className="w-24px h-24px m-0" src="/assets/icons/arrow-left.svg" alt="" />
            </span>
            <span className="flicking-arrow-next bg-white flex items-center justify-center mt-[-20px]">
                <img className="w-24px h-24px m-0" src="/assets/icons/arrow-right.svg" alt="" />
            </span>
        </div>
    )
}