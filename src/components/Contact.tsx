import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            toast.error('All fields are required.')
            return
        }

        if (formData.message.length < 30 || formData.message.length > 255) {
            toast.error('Message must be between 30 and 255 characters.')
            return
        }

        setIsLoading(true)

        const emailData = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Yuri Luiz',
        }

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID!,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
                emailData,
                import.meta.env.VITE_EMAILJS_USER_ID!
            )
            .then(
                () => {
                    toast.success('Message sent successfully!')
                    setFormData({ name: '', email: '', message: '' })
                },
                () => {
                    toast.error('Failed to send message, please try again.')
                }
            )
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div
            id="contact"
            className="h-auto px-4 md:px-16 lg:px-64 py-6 flex flex-col justify-center items-center text-center"
        >
            <h1 className="text-black text-3xl md:text-4xl">Contact</h1>

            <div className="w-full md:w-80 border-t-2 border-darkGrey my-8"></div>

            <form
                className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col space-y-6">
                    <div className="px-3">
                        <label
                            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full text-darkGrey border rounded py-3 px-4 leading-tight focus:outline-none border-darkGrey"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                    </div>
                    <div className="px-3">
                        <label
                            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full text-darkGrey border rounded py-3 px-4 leading-tight focus:outline-none border-darkGrey"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            disabled={isLoading}
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="px-3">
                        <label
                            className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="appearance-none block w-full text-darkGrey border rounded py-3 px-4 leading-tight focus:outline-none border-darkGrey resize-none"
                            id="message"
                            placeholder="Your Message"
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            disabled={isLoading}
                        ></textarea>
                    </div>
                    <div className="px-3 flex justify-end">
                        <button
                            className="bg-black text-white font-medium px-6 py-2 rounded"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}
