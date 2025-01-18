import MyStacks from './MyStacks'

export default function About() {
    return (
        <div
            id="about"
            className="h-auto px-4 md:px-16 lg:px-64 py-6 flex flex-col justify-center items-center text-center"
        >
            <h1 className="text-black text-3xl md:text-4xl">About me</h1>

            <div className="w-full md:w-80 border-t-2 border-darkGrey my-8"></div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-5xl">
                I’m a Computer Science student at UVV, currently in my 4th
                semester, with a strong focus on backend development using Java.
                I’m passionate about solving challenges and continuously
                improving my skills. <br />
                I’m seeking an internship to gain hands-on experience and
                contribute to impactful projects. In addition to my studies, I’m
                completing a Fullstack Java course and have certifications in IT
                Essentials (Cisco) and Java Fundamentals (Oracle). My favorite
                tools include Java, React, and TypeScript, and I’m currently
                exploring Kotlin to expand my knowledge.
            </p>
            <MyStacks />
        </div>
    )
}
