import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="w-full bg-whatkom py-2">
            {/* <p className="text-white">WHATKOM</p> */}
            <Link href={'/'}>
                <a>
                    <img className="h-8" alt="logo" src={'/assets/logo_nobg.png'} />
                </a>
            </Link>
        </div>
    )
}

Header.getInitialProps = async ctx => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    console.log('json', json)
    return { stars: json.stargazers_count }
}

export default Header
