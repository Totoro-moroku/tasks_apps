import { ReactNode } from 'react'

import type { ListItemProps } from '@material-tailwind/react';
import ListItem from '@material-tailwind/react/components/List/ListItem'
import ListItemPrefix from '@material-tailwind/react/components/List/ListItemPrefix'
import ListItemSuffix from '@material-tailwind/react/components/List/ListItemSuffix'
import clsx from 'clsx';

interface Props extends ListItemProps {
  prefixIcon?: ReactNode
  suffixIcon?: ReactNode
}

export default function DrawerItem({ prefixIcon, suffixIcon, ref, ...props }: Props) {
  const { children, className } = props
  return (
    <ListItem className={clsx('p-2 sm:min-h-[42px]', className)} {...props}>
      {prefixIcon && <ListItemPrefix>{prefixIcon}</ListItemPrefix>}
      {children}
      {suffixIcon && <ListItemSuffix>{suffixIcon}</ListItemSuffix>}
    </ListItem>
  )
}
