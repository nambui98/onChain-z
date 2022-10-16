import React from 'react'
import { ButtonPrimary } from "~/components/Button";
import { CommonProp } from "~/types/ArticleComponentProps.type";

export default function Subscribe({ className }: CommonProp) {
    return (
        <div className={`Subscribe px-24 md:px-24 sm:px-10 sm-max:p-6 rounded-2xl sm-max:rounded-2xl h-276px sm-max:h-auto bg-no-repeat bg-center bg-cover flex justify-between items-center sm-max:flex-col sm-max:justify-center sm-max:mx-4  ${className ?? ''}`} style={{
            backgroundImage: 'url("/assets/images/subscribe.png")'
        }}>
            <div className="text-2.5rem sm-max:text-2rem sm-max:mb-6 w-369px sm-max:w-full font-semibold text-white !leading-58px !sm-max:leading-44px">
                Keep update about OnChainz!
            </div>
            <form className="sm-max:w-full">
                <label class="relative block">

                    <input placeholder="Your email address" type="email" className="h-3.875rem text-base font-semibold  w-448px md:w-448px sm:w-290px sm-max:w-full rounded-[32px] px-6 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500" />
                    {/* // TODO: Thach: em cần api subscribe param: email*/}
                    <ButtonPrimary className="absolute" onClick={() => { }}>
                        Subscribe
                    </ButtonPrimary>
                </label>

            </form>
        </div>
    )
}