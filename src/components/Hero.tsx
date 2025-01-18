export default function Hero() {
    return (
        <div className="h-auto px-4 md:px-16 lg:px-64 py-6 flex flex-col justify-center items-center text-center">
            <h1 className="text-black text-3xl md:text-5xl">Yuri Luiz</h1>

            <div className="w-full md:w-80 border-t-2 border-darkGrey my-8"></div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                <b>Aspiring Java Developer | Tech Enthusiast</b> <br />
                Currently seeking a programming internship to turn challenges
                into solutions.
            </p>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-9">
                <a
                    href="#projects"
                    className="border-2 border-black text-black font-medium px-6 py-2 rounded"
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className="bg-black text-white font-medium px-6 py-2 rounded"
                >
                    Contact
                </a>
            </div>

            <div className="mt-4">
                <a
                    href="/cv.pdf"
                    download
                    className="bg-lightGrey text-dark font-bold px-6 py-2 rounded"
                >
                    Download CV
                </a>
            </div>
        </div>
    )
}
