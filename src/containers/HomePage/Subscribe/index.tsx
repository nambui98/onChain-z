import { ButtonPrimary } from "~/components/Button";
import { CommonProp } from "~/types/ArticleComponentProps.type";

export default function Subscribe({ className }: CommonProp) {
    return (
        <div className={`Subscribe p-x-24 h-276px bg-no-repeat bg-center bg-cover flex justify-between items-center  ${className ?? ''}`} style={{
            backgroundImage: 'url("/assets/images/subscribe.png")'
        }}>
            <div className="text-40px w-369px font-semibold text-white leading-58px">
                Keep update about
                OnChainz!
            </div>
            <form>
                <label class="relative block">

                    <input placeholder="Your email adress" type="email" className="h-64px text-base font-semibold  w-448px rounded-[32px] px-6 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500" />
                    <ButtonPrimary className="absolute" onClick={() => { }}>
                        Subscribe
                    </ButtonPrimary>
                </label>

            </form>
        </div>
    )
}