import Heading2 from '~/components/Heading'
import PostService from '~/services/PostService'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
type Props = {}

const postService = new PostService()

const list = postService.getHomeTVWidgetItems()

export default function Tivi({}: Props) {
  return (
    <div className="mt-80px">
      <Heading2 name="OnChainZ TV" />
      <div className="flex gap-x-8 mt-6">
        <LeftContent entry={list[0]} />
        <RightContent entries={list.slice(1, 6)} />
      </div>
    </div>
  )
}
