import React from 'react'

import Link from 'next/link'
import { CCol, CFooter, CRow, CSidebarBrand } from '@coreui/react-pro'
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
    <CFooter>
      <CRow className="flex-grow-1 row row-cols-1 row-cols-lg-4 align-items-start py-5 mt-4 text-white">
        {/* Brand */}
        <CCol className="text-center text-lg-start py-4">
          <CSidebarBrand href="/" className="me-3">
            <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
            <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
          </CSidebarBrand>
          <b>Rell&apos;s Graphic</b>
        </CCol>
        {/* Address */}
        <CCol className="text-center text-lg-start py-4">
          <p className="d-none d-lg-block fw-bold">Address</p>
          <div className="d-flex justify-content-center justify-content-lg-start w-100">
            <div className="d-none d-lg-inline-block">
              <CIcon icon={cilLocationPin} className="me-2" />
            </div>

            <small className="fw-normal">
              Manunggal Street No.37, Kembangan,
              <br />
              South Meruya, West Jakarta,
              <br />
              Indonesia 11650
            </small>
          </div>
        </CCol>
        {/* Contact */}
        <CCol className="text-center text-lg-start py-4">
          <p className="d-none d-lg-block fw-bold">Let&apos;s Talk</p>
          <div className="d-flex justify-content-center justify-content-lg-start w-100">
            <Link
              className="text-reset text-decoration-none"
              href={'mailto:asyrofiefarrell@gmail.com'}
            >
              <small className="fw-normal">asyrofiefarrell@gmail.com</small>
            </Link>
          </div>
          <div className="d-flex justify-content-center justify-content-lg-start ">
            <div>
              <CIcon icon={cilScreenSmartphone} className="d-inline-block me-2" />
            </div>

            <small className="fw-normal">+62 821 8232 4543</small>
          </div>
        </CCol>
        {/* Social Media */}
        <CCol className="text-center text-lg-start py-4">
          <p className="d-none d-lg-block fw-bold">Social Media</p>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <CIcon icon={cibInstagram} className="me-3" />
            <CIcon icon={cibTiktok} className="me-3" />
            <CIcon icon={cibTwitter} />
          </div>
        </CCol>
      </CRow>
    </CFooter>
  )
}

export default React.memo(AppFooter)
