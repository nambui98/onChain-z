import { CommonProp } from "~/types/ArticleComponentProps.type"
import { ButtonOutline, ButtonPrimary } from "../Button"

type Props = CommonProp & {
    total: number
    currentIndex: number
    pageSize: number
}

export default function Pacing({ className }: Props) {
    return (
        <div className={`flex gap-2 justify-center ${className ?? ''}`}>
            {/* // TODO: Thach: panigation*/}
            <ButtonPrimary className="w-40px h-40px rounded-lg font-normal" onClick={() => { }}>
                1
            </ButtonPrimary>
            <ButtonOutline className="w-40px h-40px rounded-lg font-normal" onClick={() => { }}>
                2
            </ButtonOutline>
            <ButtonOutline className="w-40px h-40px rounded-lg font-normal" onClick={() => { }}>
                3
            </ButtonOutline>
            <ButtonOutline className="w-40px h-40px rounded-lg font-normal" onClick={() => { }}>
                ...
            </ButtonOutline>
            <ButtonOutline className="w-40px h-40px rounded-lg font-normal" onClick={() => { }}>
                50
            </ButtonOutline>
        </div>
    )
}