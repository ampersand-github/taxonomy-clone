import { Icons } from "@/components/icons"
import { Caption } from "@/components/caption"
import React from "react"

type AuthPageTitleProps = {
  title: string
  caption: string
}
export const AuthPageTitle = ({ title, caption }: AuthPageTitleProps) => {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <Icons.logo className="mx-auto h-6 w-6" />
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <Caption>{caption}</Caption>
    </div>
  )
}
