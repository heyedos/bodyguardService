//Packages
import { Outlet } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
//Components
import { Navbar } from "../Global/Navbar/Navbar"
import { PageContainerDiv } from "./PageContainer.style"
import { Footer } from "../Global/Footer/Footer"
//Styling
import { SlArrowUp } from "react-icons/sl";

export const PageContainer = () => {

  const [isAtTop,setIsAtTop] = useState<boolean>(true)
  const [scrollY, setScrollY] = useState<number>(window.scrollY);

  const navbarRef = useRef<HTMLDivElement>(null)
  const aboutUsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if (scrollY >= 120) setIsAtTop(false)
    else setIsAtTop(true)
  },[scrollY])

  useEffect(()=>{
    if (!isAtTop) {
      if(navbarRef && navbarRef.current){
        navbarRef.current.style.top = "0"
        navbarRef.current.style.transform = "translateY(0%)"
        navbarRef.current.style.transition = "transform 0.3s ease"
      }
    }else {
      if(navbarRef && navbarRef.current){
        navbarRef.current.style.top = "0"
        navbarRef.current.style.transform = "translateY(0%)"
      }
    }
  },[isAtTop])

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const scrollToItem = (itemName : string) => {
    if (itemName === "aboutUs" && aboutUsRef && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({behavior : "smooth"})
      console.log('aboutUs')
    }
    else if(itemName === "services" && servicesRef && servicesRef.current) {
      servicesRef.current.scrollIntoView({behavior : "smooth"})
      console.log('service')
    }
  }

  const scrollToTop =()=>{
    if(!isAtTop) window.scrollTo({top : 0,behavior : "smooth"})
  }

  window.addEventListener('scroll', handleScroll);

  return (
    <PageContainerDiv {...{isAtTop,scrollY}} >
        <Navbar {...{isAtTop,scrollToItem,navbarRef}} />
        <Outlet context={{aboutUsRef,servicesRef}} />
        <button className="scroll-to-top" onClick={scrollToTop} ><SlArrowUp /></button>
        <Footer />
    </PageContainerDiv>
  )
}

