import Link from "next/link"
import Image from "next/image"

import CustomButton from "./CustomButton"

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center
        sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
            <Image 
            src="/car-image.png"
            alt="CarQuest logo"
            width={118}
            height={118}
            className="object-contain"
            />
        </Link>

        <CustomButton 
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue 
                rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  )
}

export default NavBar
