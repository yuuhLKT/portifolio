import StackIcon from 'tech-stack-icons'
import { stacks } from '../data/Stacks'

export default function MyStacks() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-9 max-w-3xl">
            {stacks.map((stack) => (
                <div
                    key={stack}
                    className="w-10 h-10 flex justify-center items-center"
                >
                    <StackIcon name={stack} className="w-7 h-7" />
                </div>
            ))}
        </div>
    )
}
