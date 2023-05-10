import Link from "next/link"
import React from "react"

type LinkTextProps = {
  href: string
  text: string
}
export const LinkText = ({ href, text }: LinkTextProps) => {
  return (
    <Link href={href} className="hover:text-brand underline underline-offset-4">
      {text}
    </Link>
  )
}
