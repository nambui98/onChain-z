import rectangle from '../../../public/assets/icons/rectangle.svg'

type Props = {
    name: String
}

export default function Title({ name }: Props) {
    return (
        <div className="flex items-baseline">
            <div>
                <img src={rectangle} className="align-baseline" alt="" />
            </div>
            <h5 className="text-2xl font-bold text-secondary ml-8px">{name}</h5>
        </div>
    )
}