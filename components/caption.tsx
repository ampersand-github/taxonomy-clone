import React, { ReactNode } from "react"

type CaptionProps = {
  children: ReactNode | string
}
export const Caption = ({ children }: CaptionProps) => {
  return <p className="text-sm text-muted-foreground">{children}</p>
}
