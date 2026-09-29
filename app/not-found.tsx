import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
            <h1 className='font-gradient text-[480px] font-semibold -mb-60'>404</h1>
            <div className='space-y-8 text-center flex flex-col items-center justify-center w-235'>
                <h2 className='z-1 font-semibold text-7xl text-white leading-22'>The page you are looking for doesn’t exist</h2>
                <p className='text-shuttle-gray-100'>Try to use a correct url or go back to homepage to start again</p>
                <Link className='flex justify-center items-center bg-electric-lime-400 text-shuttle-gray-950 font-semibold rounded-full h-12 w-40' href="/">Back to Home</Link>
            </div>
        </div>
    )
}
