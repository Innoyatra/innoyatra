import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

interface HeaderProps {
  label: string
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn(
        "text-3xl font-semibold",
        font.className
      )}>
        <div className="flex items-center">
          <Image

            src="/Logo.svg"
            alt="Innoyatra Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold text-gray-600">Innoyatra</span>
        </div>
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  )
}
