import React from 'react'

import Link from 'next/link'
import { CCol, CFooter, CSidebarBrand } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import {
  cibInstagram,
  cibTiktok,
  cibTwitter,
  cilLocationPin,
  cilScreenSmartphone,
} from '@coreui/icons'

import { logo } from '@/public/brand/logo'
import { sygnet } from '@/public/brand/sygnet'

const AppFooter = () => {
  return (
    <CFooter className="row align-items-start py-5 text-white">
      <CCol>
        <CSidebarBrand href="/" className="me-3">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>
        <b>Rell&apos;s Graphic</b>
      </CCol>
      <CCol>
        <p className="fw-bold">Address</p>
        <div className="d-flex">
          <div>
            <CIcon icon={cilLocationPin} className="d-inline-block me-2" />
          </div>

          <small className="fw-normal">
            Manunggal Street No.37, Kembangan, South Meruya, West Jakarta, Indonesia 11650
          </small>
        </div>
      </CCol>
      <CCol>
        <p className="fw-bold">Let&apos;s Talk</p>
        <div className="d-flex">
          <Link
            className="text-reset text-decoration-none"
            href={'mailto:asyrofiefarrell@gmail.com'}
          >
            <small className="fw-normal">asyrofiefarrell@gmail.com</small>
          </Link>
        </div>
        <div className="d-flex">
          <div>
            <CIcon icon={cilScreenSmartphone} className="d-inline-block me-2" />
          </div>

          <small className="fw-normal">+62 821 8232 4543</small>
        </div>
      </CCol>
      <CCol>
        <p className="fw-bold">Social Media</p>
        <div className="d-flex">
          <CIcon icon={cibInstagram} className="me-3" />
          <CIcon icon={cibTiktok} className="me-3" />
          <CIcon icon={cibTwitter} />
        </div>
      </CCol>
    </CFooter>
  )
}

export default React.memo(AppFooter)
