const FooterSection = () => {
  return (
    <footer className="border-t border-neutral-700 mt-16 px-6 sm:px-6mx-auto">
        <h2 className="text-center text-xl mt-8">Links</h2>
        <div className="flex justify-center space-x-10 mt-3">
            <a 
                href='https://www.linkedin.com/in/rafaelmarcomanubay/' 
                target="_blank"
            >
                <img 
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'  
                    className="w-10 h-10"
                />
            </a>
            <a 
                href='https://www.linkedin.com/in/rafaelmarcomanubay/' 
                target="_blank"
            >
                <img 
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
                    className="w-10 h-10 bg-neutral-50 rounded"
                />
            </a>
        </div>
        <div className="mt-10 text-center">
            <h2 className="text-xl mb-5">
                This portfolio is made and powered by
            </h2>
            <div className="flex justify-center space-x-10 mb-10">
                <img 
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
                    className="w-10 h-10"
                />
                <img 
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
                    className="w-10 h-10"
                />
                <img 
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg'
                    className="w-10 h-10 bg-neutral-50 rounded"
                />
            </div>
        </div>
    </footer>
  )
}

export default FooterSection