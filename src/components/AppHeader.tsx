'use client'

import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import classNames from 'classnames'

import {
  CContainer,
  CForm,
  CHeader,
  CHeaderToggler,
  CSidebarBrand,
  CButton,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cibInstagram, cibTiktok, cilEnvelopeClosed, cibWhatsapp } from '@coreui/icons'
import { hamburger, x } from '@/assets/icons'

import { useTypedSelector } from './../store'

import { logo } from '@/public/brand/logo'
import { sygnet } from '@/public/brand/sygnet'

const AppHeader = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const sidebarShow = useTypedSelector((state) => state.sidebarShow)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('navbar-gradient', document.documentElement.scrollTop > 0)
    })
  }, [])

  return (
    <CHeader position="sticky" className="navbar-dark p-0" ref={headerRef}>
      <CContainer className="px-4" fluid>
        <CHeaderToggler
          className={classNames('d-lg-none')}
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={hamburger} size="lg" />
        </CHeaderToggler>
        <CSidebarBrand as={Link} href="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <CForm className="ms-4 me-auto d-none d-lg-flex">
          <Link className="text-reset" href="/#about-me">
            <CButton color="nav" shape="rounded-pill">About Me</CButton>
          </Link>
          <Link className="text-reset" href="/#video-editing">
            <CButton color="nav" shape="rounded-pill">Video Editing</CButton>
          </Link>
          <Link className="text-reset" href="/#thumbnail-design">
            <CButton color="nav" shape="rounded-pill">Thumbnail Design</CButton>
          </Link>
          <Link className="text-reset" href="/#socmed-design">
            <CButton color="nav" shape="rounded-pill">Socmed Design</CButton>
          </Link>
          <Link className="text-reset" href="/#yearbook-design">
            <CButton color="nav" shape="rounded-pill">Yearbook Design</CButton>
          </Link>
          <Link className="text-reset" href="/#illustration">
            <CButton color="nav" shape="rounded-pill">Illustration</CButton>
          </Link>
        </CForm>
        <div className='d-none d-xl-flex align-items-center'>
          {/* Instagram */}
          <Link
            className="text-reset text-decoration-none mx-3"
            href="https://www.instagram.com/rellsgraphic?igsh=MXJ2dnd2aWUzM2JvcA%3D%3D&utm_source=qr"
            target="_blank"
          >
            <CIcon icon={cibInstagram} size="lg" />
          </Link>

          {/* Tiktok */}
          <Link
            className="text-reset text-decoration-none mx-3"
            href="https://www.tiktok.com/@rells.graphic?_t=8oYYy3Ofs9p&_r=1"
            target="_blank"
          >
            <CIcon icon={cibTiktok} size="lg" />
          </Link>

          {/* Twitter */}
          <Link
            className="text-reset text-decoration-none mx-3"
            href="https://x.com/RellsGraphic"
            target="_blank"
          >
            <CIcon icon={x} size="lg" />
          </Link>

          {/* Email */}
          <Link
            className="btn btn-light rounded-pill mx-3"
            href="mailto:asyrofiefarrell@gmail.com"
          >
            <CIcon icon={cilEnvelopeClosed} className='text-dark me-2' />Email me
          </Link>

          {/* WhatsApp */}
          <Link
            className="btn btn-success text-white rounded-pill mx-3"
            href="https://wa.me/6282182324543"
            target="_blank"
          >
            <CIcon icon={cibWhatsapp} />
          </Link>
        </div>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
