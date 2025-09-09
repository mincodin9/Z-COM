import {ReactNode} from "react";

export default function AfterLoginLayout({children}: {children: ReactNode}) {
  return (
    <div>
      애프터 로그인인 레이아웃
      {children}
    </div>
  )
}