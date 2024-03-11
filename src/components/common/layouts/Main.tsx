import { ReactNode } from 'react'
import clsx from 'clsx'


type Props = {
  sideMenu?: ReactNode,
  header?: ReactNode,
  children: ReactNode,
  className?: string
}

export default function Main({ sideMenu, header, children , className}: Props) {
  return (
    <div className="flex flex-col h-full sm:flex-row">
      {sideMenu && sideMenu}
      <div className="flex flex-col flex-1">
        {header && header}
        <div
          className={clsx(
            'flex-1 transition ease-in-out delay-75 opacity-100',
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
