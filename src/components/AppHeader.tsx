import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import classNames from 'classnames'

import {
  CContainer,
  CForm,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CSidebarBrand,
  CButton,
} from '@coreui/react-pro'
import {
  cilMenu,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { useTypedSelector } from './../store'

import {
  AppHeaderDropdown,
} from './header/'

import { logo } from '@/public/brand/logo'
import { sygnet } from '@/public/brand/sygnet'

const AppHeader = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const sidebarShow = useTypedSelector((state) => state.sidebarShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  return (
    <CHeader position="sticky" className="bg-dark mb-4 p-0" ref={headerRef}>
      <CContainer className="px-4" fluid>
        <CHeaderToggler
          className={classNames('d-lg-none')}
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CSidebarBrand as={Link} href="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CForm className="ms-4 me-auto d-none d-md-flex">
          <CButton color="nav" shape="rounded-pill">About Me</CButton>
          <CButton color="nav" shape="rounded-pill">Video Editing</CButton>
          <CButton color="nav" shape="rounded-pill">Thumbnail Design</CButton>
          <CButton color="nav" shape="rounded-pill">Socmed Design</CButton>
          <CButton color="nav" shape="rounded-pill">Yearbook Design</CButton>
          <CButton color="nav" shape="rounded-pill">Illustration</CButton>
        </CForm>
        <CHeaderNav className="ms-auto ms-md-0 d-none d-md-flex">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
