import { ElementType } from 'react'
import Link from 'next/link'
import { CButton, CNavItem, CNavTitle } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cibInstagram, cibTiktok, cibWhatsapp, cilEnvelopeClosed } from '@coreui/icons'
import { x } from './assets/icons'

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
    name: '',
  },
  {
    component: CNavItem,
    name:
      <Link className="nav-link" href="mailto:asyrofiefarrell@gmail.com">
        <CButton className="px-4 py-3 w-100" color="light" shape="rounded-pill">
          <CIcon icon={cilEnvelopeClosed} className="me-2" />Email me
        </CButton>
      </Link>
    ,
  },
  {
    component: CNavItem,
    name:
      <Link className="nav-link" href="https://wa.me/6282182324543" target="_blank">
        <CButton className="px-4 py-3 w-100 bg-dark-subtle" color="light" shape="rounded-pill">
          <CIcon icon={cibWhatsapp} className="me-2" />Whatsapp
        </CButton>
      </Link>
    ,
  },
  {
    component: CNavItem,
    name:
      <Link className="nav-link" href="https://www.instagram.com/rellsgraphic?igsh=MXJ2dnd2aWUzM2JvcA%3D%3D&utm_source=qr" target="_blank">
        <CButton className="px-4 py-3 w-100 bg-secondary-subtle" color="light" shape="rounded-pill">
          <CIcon icon={cibInstagram} className="me-2" />Instagram
        </CButton>
      </Link>
    ,
  },
  {
    component: CNavItem,
    name:
      <Link className="nav-link" href="https://www.tiktok.com/@rells.graphic?_t=8oYYy3Ofs9p&_r=1" target="_blank">
        <CButton className="px-4 py-3 w-100" color="secondary" shape="rounded-pill">
          <CIcon icon={cibTiktok} className="me-2" />TikTok
        </CButton>
      </Link>
    ,
  },
  {
    component: CNavItem,
    name:
      <Link className="nav-link" href="https://x.com/RellsGraphic" target="_blank">
        <CButton className="px-4 py-3 w-100" color="dark" shape="rounded-pill">
          <CIcon icon={x} className="me-2" />X / Twitter
        </CButton>
      </Link>
    ,
  },
]

export default _nav
