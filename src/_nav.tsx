import { ElementType } from 'react'
import { CNavItem, CNavTitle } from '@coreui/react-pro'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  component: string | ElementType
  name: string | JSX.Element
  icon?: string | JSX.Element
  badge?: Badge
  href?: string
  items?: NavItem[]
}

const _nav = [
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'About Me',
    href: '/theme/colors',
  },
  {
    component: CNavItem,
    name: 'Video Editing',
    href: '/theme/colors',
  },
  {
    component: CNavItem,
    name: 'Thumbnail Design',
    href: '/theme/colors',
  },
  {
    component: CNavItem,
    name: 'Socmed Design',
    href: '/theme/colors',
  },
  {
    component: CNavItem,
    name: 'Yearbook Design',
    href: '/theme/colors',
  },
  {
    component: CNavItem,
    name: 'Illustration',
    href: '/theme/colors',
  },
  {
    component: CNavTitle,
    name: 'Plugins',
  },
  {
    component: CNavItem,
    name: 'Thumbnail Design',
    href: '/theme/colors',
  },
]

export default _nav
