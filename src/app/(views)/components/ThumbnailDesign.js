import classNames from 'classnames'

import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { CCol, CContainer, CRow } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { googleDriveColored } from '@/assets/icons'

import { BASE_PATH } from '@/utils/prefix'

import laptopFull from '@/assets/images/laptop-full.png'
import SectionHeading from '@/components/SectionHeading'

const thumbnailDesigns = [
  {
    src: '/images/thumbnail-design/gorgi.png',
    width: 800,
    height: 800,
  },
  {
    src: '/images/thumbnail-design/Deve Talks.png',
    width: 600,
    height: 600,
  },
  {
    src: '/images/thumbnail-design/NicInspo.png',
    width: 400,
    height: 400,
  },
  {
    src: '/images/thumbnail-design/Roman Mossey.png',
    width: 871,
    height: 871,
  },
  {
    src: '/images/thumbnail-design/Sabri Suby.png',
    width: 590,
    height: 590,
  },
  {
    src: '/images/thumbnail-design/Sabri Suby 2.png',
    width: 370,
    height: 370,
  },
]

const ThumbnailDesign = () => {
  return (
    <div id="thumbnail-design" className="overflow-x-hidden">
      {/* Intro */}
      <div className="content-h-full py-5">
        <CContainer lg className="position-relative d-flex h-100">
          <div className="d-block d-md-none position-absolute bottom-0 end-0 h-50">
            <Image
              alt="Thumbnail Design"
              src={laptopFull}
              className="object-fit-contain img-fluid h-100"
            />
          </div>

          <div className="d-none d-md-block position-absolute top-50 start-0 translate-middle h-75">
            <Image
              alt="Thumbnail Design"
              src={laptopFull}
              className="object-fit-contain img-fluid h-100"
            />
          </div>

          <CRow className="my-md-auto">
            <CCol xs={12} md={6}>
              <SectionHeading className="text-center text-md-start">
                Thumbnail Design
              </SectionHeading>
              <p className="mb-4 text-center text-md-start">
                Client outreach is conducted through X (formerly Twitter), where initial samples are
                crafted for mid-sized creators and shared via comments on their posts. I have
                developed over 30 designs using Adobe Photoshop. Here are examples of my most
                notable work.
              </p>
              <div className="text-center text-md-start">
                <Link
                  className="btn btn-white-gradient rounded-4 p-3"
                  href={'https://drive.google.com/drive/folders/1-WvcndreMyaIiRfReDvZauRbUQRjlZ0U'}
                  target="_blank"
                >
                  <CIcon icon={googleDriveColored} className="me-2" />
                  More of My Works
                </Link>
              </div>
            </CCol>
            <CCol xs={12} md={6} className="order-md-first"></CCol>
          </CRow>
        </CContainer>
      </div>

      {/* Showcases */}
      <CContainer lg className="py-5">
        <CRow className="row-cols-1 g-0 g-md-5">
          {thumbnailDesigns.map((design, index) => (
            <CCol
              key={index}
              className={classNames(
                index % 3 === 0 ? 'text-start' : index % 3 === 1 ? 'text-center' : 'text-end',
                'px-3 py-3 py-md-5',
              )}
            >
              <FadeIn>
                <Image
                  alt="Thumbnail Design"
                  src={`${BASE_PATH}${design.src}`}
                  className="object-fit-cover img-fluid"
                  width={design.width}
                  height={design.height}
                />
              </FadeIn>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </div>
  )
}

export default ThumbnailDesign
