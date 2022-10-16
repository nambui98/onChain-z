
// import { useState } from "preact/hooks";
import { ButtonOutline, ButtonOutlinePrimary, CopyButton } from "~/components/Button";
import { Heading1 } from "~/components/Heading";
import Modal from "~/components/Modal";
import { useState } from 'preact/hooks';
import {
    FacebookIcon, FacebookShareButton, TelegramIcon,
    TelegramShareButton, TwitterIcon,
    TwitterShareButton
} from "react-share";
import Tag from "~/components/Tag";
import { ArticleProp } from "~/types/ArticleComponentProps.type";
function createMarkup() {
    {/* // TODO: Thach: em cần data dạng text html cho bài viết*/ }
    return {
        __html: `<div class="news-item detail content_text" data-id="/news/blokcheyn/12716539/" data-image="https://cnews24.ru/uploads/7ae/7ae963900aba6143dcb027f42aeda32794350e75_80.jpg" data-title="How The Incentives Of Proof-Of-Work Are More Fair Than Proof-Of-Stake">
            <img src="https://cnews24.ru/uploads/7ae/7ae963900aba6143dcb027f42aeda32794350e75_80.jpg" />
            
            
        <br>
            <div class="info flex middle-xs between-xs info-news">
                <div class="col-xs" style="flex: 1 0 auto;">
                    <div class="row middle-xs">
                        <div class="rating-color" style="background-color: "></div>
                        <span style="flex-wrap: nowrap; white-space: nowrap;">bitcoinmagazine.com</span>
                        <span class="datetime flex middle-xs">
                            <span class="middle-marker"></span>2 h
                        </span>
                    </div>
                </div>
                &nbsp;&nbsp;
                <div class="flex middle-xs reading-time">
                    Reading time: ~4 m
                </div>
                <div class="share-links flex middle-xs ">
                    <span class="share-icon hover"></span>
                </div>
            </div>
            <hr>
                <div>
                    <p><em>This is an opinion editorial by Mickey Koss, a West Point graduate with a degree in economics. He spent four years in the infantry before transitioning to the Finance Corps.</em></p>
                    <p>As Ethereum completes its transition to proof-of-stake consensus, I can’t help but notice the plethora of articles citing a 99% reduction in energy usage. The claims, however true, are misguided and counterproductive.</p>
                    <h2>Proof-Of-Stake Incentives</h2>
                    <p>Proof-of-stake validators need to lock up a bunch of coins in order to earn the privilege of validating transactions. Though this does eliminate the need for mining and therefore reduces power consumption, the incentives are such that the Ethereum network will progressively become more and more centralized.</p>
                    <p>The stakers will receive a cut of the transaction fees, as well as the new ether issuance for essentially making a portion of their stack illiquid. The counterparty risk-free yield incentivizes staking. The more you stake, the more you earn.</p>
                    <p>However, the more you earn, the more you can stake. It’s a positive feedback loop ensuring the largest bag holders can always stay ahead of the pack in terms of accumulation. With the way proof-of-stake works, it will also ensure that the biggest holders can always exert more influence over the network. Staking ETH as a full validating node requires 32 ETH. The counterparty risk-free yield ensures that the biggest bag holders can and will have the most nodes to generate the most income. In doing so, they can slowly but surely accumulate more and more control.</p>
                    <p>Combined with the deflationary claims from their fee burning, the price may very well go up in fiat terms, however, the more expensive ETH gets, the more out of reach it will get for the average pleb to fire up a staking node.</p>
                    <p>In addition, the complexity and risks associated with staking will also ensure a steady stream of outsourcing demand for staking. According to EthHub, “Beacon nodes are intended to be high-performance, highly available platforms … As such, their hardware requirements are anticipated to be server-grade CPU/SSD/networking connections.”</p>
                    <p>Furthermore, slashing risk coupled with inactivity risk means that there are monetary penalties to your staked ETH for simply losing your internet connection.</p>
                    <p>This basically guarantees that the majority of staking will be sent to solutions like Coinbase and other big exchanges. I don’t have server grade equipment with 24/7 internet guaranteed. Do you?</p>
                    <p>The more the staking supply centralizes, the easier it will be for governments to co-opt and censor. Just because it doesn’t happen right away doesn’t mean that it won’t happen in the future. The possibility of such censorship alone is enough to give pause.</p>
                    <h2>Proof-Of-Work Incentives</h2>
                    <p>Proof-of-work requires real-world inputs. The cost of electricity breeds innovation as mining service providers find novel ways to harness electricity.</p>
                    <p>There is much to be said along these lines, but the proof is in the pudding. Companies are already working with landfills and gas companies to harness and cap methane and wasted gas sources, thus reducing greenhouse gas emissions. Miners are also being harnessed to unlock thermal energy trapped in the ocean, a technique which has been theoretical until now because of the economic viability. There are too many stories like this to be written about in one article, but the incentives are clear. Bitcoin mining economics are driving innovation towards a cleaner and more sustainable energy future.</p>
                    <p>Variable costs are also a blessing, not a curse. Where proof-of-stake holders may only have to pay taxes on income, proof-of-work companies are frequently forced to sell in order to cover a plethora of input costs and capital expenditures. This ensures a more consistent distribution of coins.</p>
                    <p>The truth is that Bitcoin's protocol is simply more fair. Anyone can run a node for about $250 and validate their own transactions. The 32 ETH required to spin up a node costs about $50,000 at the time of writing, putting it out of reach for basically anyone outside the Western 1%.</p>
                    <p>Proof-of-work is the innovation that drives energy innovation and novel ways to harness wasted resources. Proof-of-stake ensures the richest among us will continue to control the others who will never be able to catch up. To me, that sounds a lot like a more complex version of what we already have.</p>
                    <p><em>This is a guest post by Mickey Koss. Opinions expressed are entirely their own and do not necessarily reflect those of BTC Inc. or Bitcoin Magazine.</em></p>
                </div>
   
                </div>` };
}
export default function LeftDetail({ className, article, href }: ArticleProp & { href: string }) {
    {/* // TODO: Thach: em cần data bài viết article*/ }
    {/* // TODO: Thach: em cần data tag cho bài viết*/ }
    console.log(href);

    const tags = [
        { name: 'tin tức' },
        { name: 'blockchain' },
        { name: 'crypto' },
        { name: 'kiến thức' },
    ]

    const [openModal, setOpenModal] = useState(false);
    return (
        <di>
            <div className="pt-6 mt-6 border-t-1 border-gray40">
                {/* <Toaster /> */}
                <Heading1 text={article.title} className="leading-44px" />
                <div className="mt-6">

                    <div dangerouslySetInnerHTML={createMarkup()}>

                    </div>
                </div>
            </div>
            <div className="mt-10 flex gap-2 sm-max:flex-wrap">
                {tags.map((t) => (
                    <Tag text={t.name} />
                ))}
                <div className="ml-auto sm-max:ml-0">
                    <ButtonOutlinePrimary className="group w-162px h-38px sm-max:mt-6" onClick={() => {
                        debugger
                        setOpenModal(true)
                    }}>
                        <img src="/assets/icons/export.svg" className="mr-2 transition duration-300 ease-out filter group-hover:brightness-0 group-hover:invert" alt="" />
                        Chia sẻ bài viết
                    </ButtonOutlinePrimary>
                    <Modal open={openModal} setOpen={setOpenModal} title="Chia sẻ">
                        <div class="grid grid-cols-4 gap-4">
                            <FacebookShareButton url={href} quote={""} >  <  FacebookIcon /></FacebookShareButton>
                            <TelegramShareButton url={href} quote={""}>
                                <TelegramIcon />
                            </TelegramShareButton>
                            <TwitterShareButton url={href} quote={""}>
                                <TwitterIcon />
                            </TwitterShareButton>
                            <CopyButton href={href} />
                        </div>
                    </Modal>
                </div>
            </div>
        </di>
    )
}