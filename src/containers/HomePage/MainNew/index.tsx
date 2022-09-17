import { ArticleListProp } from '~/types/ArticleComponentProps.type'

export default function MainNews({ articles }: ArticleListProp) {
  const list = articles

  return (
    <div className="MainNews flex gap-8 h-360px mt-12">
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
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/51ad/f561/3c6f7e0da8c01af4fd95da68ca862f89?Expires=1663545600&Signature=CpB6kZIgY9NAgpHrpXfz5mtndvEEcV-yG-yoiYIvk9K-UKlLiIYYjCW7fHgxQBoJmIemjml-lXpV0elGXhUS5KkUjZWiv4BrSDPphjf3TZkTmk2rAaz0ilAcax6NjzfkYXKpVaimn7n-W66Saxp2juOBaIhXgaRk5t~PwLy1YGjje7yf-R54RqRIJVZudID6uv1zVmIn7gCAVPXt0-HfxHfk~niotxtLTuVPW-3ThIg3WjCCDMxwWMKFbVZXkRQ5d3wZfImPHnAIXYXF1FJVj8lpJCwhoVbZRlBvrxX7N1Eo70nW78h0wch007HtH3lVX6UZc~pqFiCHZie8CvTDiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
        }}
      >
        <p className="text-xl absolute bottom-1.5rem  inset-x-1.5rem text-white font-semibold">{list[0]?.title}</p>
      </div>
      <div
        className="w-256px bg-no-repeat bg-cover relative rounded-2xl"
        style={{
          backgroundImage: `url(https://s3-alpha-sig.figma.com/img/c267/144d/6b407ddd11738c4820fc7ce666a3c3c0?Expires=1663545600&Signature=GPEcxyWDq1vWtoePcGY2wBJxRgQKus3kOdqKGRluU8tVvIcS1OrzDTpCXOHzZnMFm8a23SdXyp550UNNr8cRkGZ~Zi0u7K4KeRKVSUd5LVHC4u4GqLlJxKt39x~EKLz1SaJ~0FAvZq1iKNt9woaBqflGwKIci62OL4H8Bhzc9fQ5YTlrT9RQLEmE~LSIeG5~FVYf3gu6wbLzQ~bH2q0jUaxECKe-u1fB9F0sU96iOhNVmleVnD2NW8deXK6-41CbmkDGJ44bgUECx9vbYAOhg0brvjFoNswo0RGRUrNmKENsPaxjcQEKZ3ZcWUbn4vOCAYaUe-U9Nk9rMPMi0zwpgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
        }}
      >
        <p className="text-xl absolute bottom-1.5rem  inset-x-1.5rem text-white font-semibold">{list[1]?.title}</p>
      </div>
      <div className="flex-auto">
        <div
          className="h-180px bg-no-repeat bg-cover relative rounded-2xl"
          style={{
            backgroundImage: `url(https://s3-alpha-sig.figma.com/img/2b24/f41b/10030f8933732cfbe5290a422b4bb391?Expires=1663545600&Signature=hZJLLpStoasZKC4YM5XUTh~1A0LrowNFl1somt0vOf0nj-~utFeRSIMaNJAoeOyhPH4wGsFWHRPUtE95UPgcKmx1fSJtv1HE6GtWHfsCXUMyp0rOFAT9TCTDoIPFyb~0onsCerzMVLMaL0BSGTv00vqQAV71vSPBAm1MxxSKayuQEk9ANqr1pxbfZn34QvZUAZKiyWlqaOAOUjBcMlIk7ClH58OsP4wUY4GielJiWpUsBYKpmQY6gioplDrZOc4syTIqj7gX-gLTc2WkFQt3n3OZHcvRqNZMgwse~C0VIRr4AFzMKSjpY8STEx86~nYrh62ux3zV457ql09CSoOj~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)`,
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
