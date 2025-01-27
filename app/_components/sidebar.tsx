"use client";

import Image from "next/image"
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader } from "./ui/sidebar"
import { UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"
import { ArrowRightLeftIcon, LayoutDashboardIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SidebarDashboard = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="p-6">
      <SidebarHeader>
        <Image
          src="/logo.svg"
          alt="Finance App"
          width={173}
          height={39}
          className="mb-8"
        />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonTrigger: {
                  minWidth: 190,
                  justifyContent: "start"
                },
                userButtonBox: {
                  flexDirection: "row-reverse"
                },
                avatarBox: {
                  height: 40,
                  width: 40
                },
                userButtonOuterIdentifier: {
                  fontWeight: "bold",
                  fontSize: 14,
                  paddingLeft: 0
                }
              }
            }}
          />
        </SidebarGroup>

        <SidebarGroup className="mt-4 space-y-4">

          <Link href="/" >
            <Button
              className="justify-start"
              size="lg"
              variant={pathname === "/" ? "default" : "ghost"}
            >
              <LayoutDashboardIcon />
              Dashboard
            </Button>
          </Link>


          <Link href="/transactions">
            <Button
              className="justify-start"
              size="lg"
              variant={pathname === "/transactions" ? "default" : "ghost"}
            >
              <ArrowRightLeftIcon />
              Transações
            </Button>
          </Link>

        </SidebarGroup>

      </SidebarContent>
    </Sidebar >
  )
}

export default SidebarDashboard