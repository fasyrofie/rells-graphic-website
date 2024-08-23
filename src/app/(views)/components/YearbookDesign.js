import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { CCol, CContainer, CRow } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { googleDriveColored } from '@/assets/icons'

import { BASE_PATH } from '@/utils/prefix'

const yearbookDesigns = [
  {
    image: '/images/yearbook-design/buta-1.png',
    name: 'Ciawi 1 Middle School',
    year: '2024',
  },
  {
    image: '/images/yearbook-design/buta-2.png',
    name: 'BCI Middle School',
    year: '2022',
  },
  {
    image: '/images/yearbook-design/buta-3.png',
    name: 'Citra Abiyasa Highschool',
    year: '2022',
  },
  {
    image: '/images/yearbook-design/buta-4.png',
    name: 'Ciawi 1 Middle School',
    year: '2022',
  },
  {
    image: '/images/yearbook-design/buta-5.png',
    name: 'Bogor 5 Middle School',
    year: '2022',
  },
]

const YearbookDesign = () => {
  return (
    <div id="yearbook-design" className="py-5">
      {/* Intro */}
      <div className="bg-dark">
        <CContainer lg className="py-4">
          <CRow className="g-4">
            <CCol xs={12} md={6} className="d-flex align-items-center">
              <div>
                <h1>Yearbook Design</h1>
                <p>
                  I have been employed with Selected Comm+ since 2022. In 2023, I transitioned to
                  another agency, Noni Kolektiv, where I initially worked as a freelancer before
                  advancing to the position of Design Lead.
                </p>
              </div>
            </CCol>
            <CCol xs={12} md={6}>
              <FadeIn>
                <Image
                  alt="Yearbook Design"
                  src={`${BASE_PATH}/images/yearbook-design/yearbook-intro.png`}
                  className="img-fluid"
                  width={650}
                  height={650}
                />
              </FadeIn>
            </CCol>
          </CRow>
        </CContainer>
      </div>

      {/* Showcase */}
      <CContainer lg className="py-4">
        <div className="py-4">
          <CRow className="g-4 py-4">
            <CCol xs={12} md={7}>
              <Image
                alt="Group Photo Page"
                src={`${BASE_PATH}/images/yearbook-design/group-1.png`}
                className="img-fluid"
                width={708}
                height={611}
              />
              <div className="py-3">
                <h5 className="fw-bold">Group Photo Page.</h5>
                <p>
                  The most crucial part of the book. This is where collaboration
                  <br />
                  require the most. Student&apos;s wild ideas have to come true with Art
                  <br />
                  director&apos;s guide and photographer&apos;s skill.
                </p>
              </div>
            </CCol>
            <CCol xs={12} md={5}>
              <Image
                alt="Drone Shoot"
                src={`${BASE_PATH}/images/yearbook-design/drone-1.png`}
                className="img-fluid"
                width={429}
                height={306}
              />
              <div className="py-3">
                <h5 className="fw-bold">Drone Shoot</h5>
                <p>Students lining up to form the name of their class.</p>
              </div>
            </CCol>
            <CCol xs={12} md={7}>
              <CRow>
                <CCol xs="auto">
                  <Image
                    alt="Portrait Photo"
                    src={`${BASE_PATH}/images/yearbook-design/portrait-1.png`}
                    className="img-fluid"
                    width={296}
                    height={683}
                  />
                </CCol>
                <CCol>
                  <CRow className="g-4 row-cols-1">
                    <CCol>
                      <Image
                        alt="Portrait Photo"
                        src={`${BASE_PATH}/images/yearbook-design/portrait-2.png`}
                        className="img-fluid"
                        width={263}
                        height={258}
                      />
                    </CCol>
                    <CCol>
                      <Image
                        alt="Portrait Photo"
                        src={`${BASE_PATH}/images/yearbook-design/portrait-3.png`}
                        className="img-fluid"
                        width={263}
                        height={258}
                      />
                    </CCol>
                    <CCol className="order-md-first">
                      <h5 className="fw-bold">Portrait Photo.</h5>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
            </CCol>
            <CCol xs={12} md={5}>
              <Image
                alt="Cover Design & Welcome Page"
                src={`${BASE_PATH}/images/yearbook-design/cover-1.png`}
                className="img-fluid"
                width={599}
                height={658}
              />
              <div className="py-3">
                <h5 className="fw-bold">Cover Design & Welcome Page</h5>
                <p>
                  These part is the part we first see. Everything has to be a same theme with the
                  request.
                </p>
              </div>
            </CCol>
          </CRow>
        </div>

        {/* Yearbook */}
        <div className="py-4">
          <CRow className="g-4 py-4 align-items-center">
            {yearbookDesigns.map((design, index) => (
              <CCol key={index} xs={12} md={4}>
                <div className="ratio ratio-1x1">
                  <Image
                    alt="Yearbook Design"
                    src={`${BASE_PATH}${design.image}`}
                    className="object-fit-contain"
                    width={300}
                    height={300}
                  />
                </div>
                <h4 className="mt-3">{design.name}</h4>
                <p className="">{design.year}</p>
              </CCol>
            ))}
            <CCol className="text-center">
              <Link
                className="btn btn-light bg-gradient rounded-4 p-3"
                href={'https://drive.google.com/drive/folders/1QKkqJhfl34nXFbuIzRn7VKQ0qQn46ON5'}
                target="_blank"
              >
                <CIcon icon={googleDriveColored} className="me-2" />
                More of My Works
              </Link>
            </CCol>
          </CRow>
        </div>
      </CContainer>
    </div>
  )
}

export default YearbookDesign
