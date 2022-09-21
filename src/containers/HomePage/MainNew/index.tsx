import { ArticleListProp } from '~/types/ArticleComponentProps.type'

export default function MainNews({ articles, className }: ArticleListProp) {
  const list = articles

  return (
    <div className={`$MainNews flex gap-8 h-360px ${className ?? ''}`}>
      {/* {
                dataMainNew.map((item)=>{
                    if(item.order===1){
                        <div className="w-448px bg-no-repeat bg-cover relative rounded-2xl" style={{
                            backgroundImage: `url(${item.image}`,
                        }}>
                            <p className="text-xl absolute bottom-1.5rem  inset-x-1.5rem text-white font-semibold">
                                {item.title}
                            </p>
                        </div>
                    }else if(item.order===2){
                        <div className="w-256px bg-no-repeat bg-cover relative rounded-2xl" style={{
                            backgroundImage: `url(${item.image}`,
                        }}>
                            <p className="text-xl absolute bottom-1.5rem  inset-x-1.5rem text-white font-semibold">
                                {item.title}
                            </p>
                        </div>
                    }else if(item.order===3){

                    }
                })
            } */}

      <div
        className="w-448px bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(${list[0]?.image})`,
        }}
      >
        <p className="text-xl absolute bottom-1.5rem  inset-x-1.5rem text-white font-semibold">{list[0]?.title}</p>
      </div>
      <div
        className="w-256px bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(${list[1]?.image})`,
        }}
      >
        <p className="text-xl absolute bottom-1.5rem  inset-x-1.5rem text-white font-semibold">{list[1]?.title}</p>
      </div>
      <div className="flex-auto">
        <div
          className="h-180px bg-no-repeat bg-cover relative rounded-2xl"
          style={{
            backgroundImage: `url(${list[2]?.image})`,
          }}
        >
          <p className="text-xl absolute bottom-1.5rem  inset-x-1.5rem text-white font-semibold">{list[2]?.title}</p>
        </div>
        <ul class="list-outside list-disc ml-5">
          {/* // TODO: Nam: cần khai báo PostListItem component, rồi loop render với mock data ở đây */}
          <li class="text-primary mt-4">
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
    </div>
  )
}
