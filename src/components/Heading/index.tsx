type Props = {
  name: String
}

export function Heading1({ name }: Props) {
  return (
    <div className="flex items-baseline">
      <div>
        <img src="/assets/icons/rect.svg" className="align-baseline" alt="" />
      </div>
      <h2 className="text-32px font-bold text-grey ml-8px">{name}</h2>
    </div>
  )
}
export function Heading2({ name }: Props) {
  return (
    <div className="flex items-baseline">
      <div>
        <img src="/assets/icons/rect.svg" className="align-baseline" alt="" />
      </div>
      <h2 className="text-2xl font-bold text-grey ml-8px">{name}</h2>
    </div>
  )
}
