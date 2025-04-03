import Link from "next/link"

const ContactMe = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Contact Me</h1>
        <p className="text-base dark:text-gray-400 text-gray-700">
            Want to chat? Just shoot me a dm on <Link className="text-teal-600" href="https://www.linkedin.com/in/ethanbraum/">LinkedIn</Link> or 
            email me directly at <Link className="text-teal-600" href="ethan.braum@gmail.com">ethan.braum@gmail.com</Link>
        </p>
    </div>
  )
}

export default ContactMe
