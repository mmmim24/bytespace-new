import Link from 'next/link'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
                <h1 className='font-gradient text-[480px] font-semibold -mb-60'>404</h1>
                <div className='space-y-8 text-center flex flex-col items-center justify-center w-235'>
                    <h2 className='z-1 font-semibold text-7xl text-white  '>The page you are looking for doesn’t exist</h2>
                    <p className='font-body text-shuttle-gray-100'>Try to use a correct url or go back to homepage to start again</p>
                    <button className='font-label'>
                        <Link href="/">Back to Home</Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}
