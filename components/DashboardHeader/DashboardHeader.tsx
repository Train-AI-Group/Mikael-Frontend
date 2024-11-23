"use client"
import { ButtonLink } from "@/components/Button/ButtonLink"
import { SearchInput } from "@/components/SearchInput/SearchInput"
import { useConnection } from "arweave-wallet-kit"
import { Avatar } from "../Avatar/Avatar"
import { useEffect, useState } from "react"
import Drawer from "../Drawer/Drawer"
import ProfilePreviewPanel from "../Profile/SidePanel/ProfilePreviewPanel"

export const DashboardHeader = () => {
  const { connected } = useConnection()
  const [user, setUser] = useState(null)
  const [open, setOpen] = useState(false)

  const getRandomInfo = async () => {
    const response = await fetch("https://randomuser.me/api/")
    const data = await response.json()
    setUser(data.results[0])
  }
  useEffect(() => {
    if (connected) {
      getRandomInfo()
    }
  }, [connected])
  return (
    <>
      <div className="flex flex-row justify-between items-center mb-16 px-8 space-x-6">
        <SearchInput placeholder="Search" />
        {connected ? (
          <div onClick={() => setOpen(true)} className="hover:cursor-pointer">
            <Avatar src={user?.picture?.medium} alt="User" size="md" />
          </div>
        ) : (
          <AuthButtons />
        )}
      </div>

      <Drawer open={open} setOpen={setOpen} title="Profile">
        <ProfilePreviewPanel user={user} />
      </Drawer>
    </>
  )
}
const AuthButtons = () => {
  return (
    <>
      <ButtonLink href="/sign-in" variant="ghost">
        Sign in
      </ButtonLink>
      <ButtonLink href="/register">Register</ButtonLink>
    </>
  )
}
