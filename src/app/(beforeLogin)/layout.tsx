import {ReactNode} from "react";
import styles from '@/app/page.module.css';

type Props = {
  children: ReactNode, 
  modal: ReactNode,
};

export default function RootLayout({children, modal}: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  )
}

//주소가 localhost:3000일 때, children -> page.tsx, modal -> @modal/default.tsx
//주소가 localhost:3000/i/flow/login일 때, children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx