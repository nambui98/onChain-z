import Title from "~/components/Title"
import LeftContent from "./LeftContent"
import RightContent from "./RightContent"
type Props = {}

export default function Tivi({ }: Props) {
    return (
        <div className="mt-80px">
            <Title name="OnChainZ TV" />
            <div className="flex gap-x-8 mt-6">
                <LeftContent />
                <RightContent />
            </div>
        </div>
    )
}