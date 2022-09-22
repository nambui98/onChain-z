import { ArticleListProp } from '~/types/ArticleComponentProps.type'

export default function MainNews({ articles, className }: ArticleListProp) {
  const list = articles

  return (
    <div className={`$MainNews grid grid-cols-main grid-rows-main sm-max:gap-y-4 sm-max:gap-x-9px sm-max:grid-cols-2 sm-max:grid-rows-mainMobile gap-x-8 sm-max:h-auto sm-max:px-4 ${className ?? ''}`}>
      <div
        className=" row-span-2 sm-max:col-span-2 sm-max:row-span-1  bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(${list[0]?.image})`,
        }}
      >
        <p className="text-xl absolute bottom-1.5rem  inset-x-1.5rem text-white font-semibold">{list[0]?.title}</p>
      </div>
      <div
        className=" row-span-2 sm-max:col-span-1 sm-max:row-span-1 bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(${list[1]?.image})`,
        }}
      >
        <p className="text-xl absolute bottom-1.5rem  sm-max:text-xs inset-x-1.5rem sm-max:inset-x-1rem text-white font-semibold">{list[1]?.title}</p>
      </div>

      <div
        className=" row-span-1 sm-max:row-span-1 sm-max:col-span-1 bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(${list[2]?.image})`,
        }}
      >
        <p className="text-xl absolute bottom-1.5rem sm-max:text-xs inset-x-1.5rem sm-max:inset-x-1rem text-white font-semibold">{list[2]?.title}</p>
      </div>

      <ul class=" mt-4 sm-max:mt-7px list-outside list-disc ml-5 row-span-1 sm-max:col-span-2">
        {/* // TODO: Nam: cần khai báo PostListItem component, rồi loop render với mock data ở đây */}
        <li class="text-primary">
          <span class="text-grey text-sm font-semibold transition duration-300 ease-out cursor-pointer hover:text-primary">{list[3]?.title}</span>
        </li>
        <li class="text-primary mt-4">
          <span class="text-grey text-sm font-semibold transition duration-300 ease-out cursor-pointer hover:text-primary">{list[4]?.title}</span>
        </li>
        <li class="text-primary mt-4">
          <span class="text-grey text-sm font-semibold transition duration-300 ease-out cursor-pointer hover:text-primary">{list[5]?.title}</span>
        </li>
      </ul>
    </div>
  )
}
