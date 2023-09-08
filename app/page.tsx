"use client";

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";

export default function Home() {

  const [isCheckMobile, setIsCheckMobile] = useState(false)

  const hanldeCheckMobile = () => {
    if (window.innerWidth < 768) {
      setIsCheckMobile(true)
    } else {
      setIsCheckMobile(false)
    }
  }

  useEffect(() => {
    hanldeCheckMobile()
    window.addEventListener('resize', hanldeCheckMobile)
    return () => {
      window.removeEventListener('resize', hanldeCheckMobile)
    }
  }, [])

  return (
    <>
      {
        isCheckMobile ? <Navigation /> : <Header />
      }
      <main className={
        `h-screen p-2 ${isCheckMobile ? 'background-image-mobile' : 'background-image-desktop'}`
      }>
        <div className="flex justify-between items-center">
          <Logo className="text-[1.2rem]" />
          <Search />
        </div>
      </main>
    </>
  )
}
