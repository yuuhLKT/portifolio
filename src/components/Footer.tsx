import GithubIcon from '../icons/GithubIcon'
import LinkedinIcon from '../icons/LinkedinIcon'

export default function Footer() {
    return (
        <footer className="bg-black1 text-white py-6">
            <div className="container mx-auto flex flex-row items-center justify-center space-x-6">
                <a
                    href="https://www.linkedin.com/in/yurilkt/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinIcon />
                </a>
                <a
                    href="https://github.com/yuuhlkt"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon />
                </a>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm text-black">
                    &copy; {new Date().getFullYear()} Yuri Luiz. All rights
                    reserved.
                </p>
            </div>
        </footer>
    )
}
