import Image from 'next/image'
import Link from 'next/link'
import { CCol, CContainer, CRow } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { googleDriveColored } from '@/assets/icons'

import { BASE_PATH } from '@/utils/prefix'

import socmedBannerImage from '@/assets/images/socmed-banner.png'
import socmedLeftImage from '@/assets/images/socmed-left.svg'
import socmedRightImage from '@/assets/images/socmed-right.svg'
import SectionHeading from '@/components/SectionHeading'

const socmedDesigns = [
  {
    feed: '/images/socmed-design/fatigon-feed.png',
    logo: '/images/socmed-design/fatigon-logo.png',
  },
  {
    feed: '/images/socmed-design/sakatonik-feed.png',
    logo: '/images/socmed-design/sakatonik-logo.png',
  },
  {
    feed: '/images/socmed-design/jipremium-feed.png',
    logo: '/images/socmed-design/jipremium-logo.png',
  },
  {
    feed: '/images/socmed-design/oriflame-feed.png',
    logo: '/images/socmed-design/oriflame-logo.png',
  },
  {
    feed: '/images/socmed-design/shifudo-feed.png',
    logo: '/images/socmed-design/shifudo-logo.png',
  },
  {
    feed: '/images/socmed-design/dnd-feed.png',
    logo: '/images/socmed-design/dnd-logo.png',
  },
  {
    feed: '/images/socmed-design/pnb-feed.png',
    logo: '/images/socmed-design/pnb-logo.png',
  },
  {
    feed: '/images/socmed-design/hiboo-feed.png',
    logo: '/images/socmed-design/hiboo-logo.png',
  },
]

const socmedDesignsMore = [
  '/images/socmed-design/drs-clinic.png',
  '/images/socmed-design/define.png',
  '/images/socmed-design/skinfirst.png',
  '/images/socmed-design/swissair.png',
  '/images/socmed-design/intirimbo.png',
  '/images/socmed-design/sprinkle.png',
  '/images/socmed-design/imagine.png',
  '/images/socmed-design/jellygum.png',
  '/images/socmed-design/noni-kolektiv.png',
  '/images/socmed-design/selected.png',
]

const SocmedDesign = () => {
  return (
    <div id="socmed-design" className="overflow-x-hidden py-5">
      {/* Banner */}
      <div className="position-relative d-flex py-5">
        <Image
          alt="Social Media Banner"
          src={socmedBannerImage}
          className="d-block img-fluid mx-auto my-auto"
        />

        <div className="d-none d-md-block position-absolute top-50 start-0 translate-middle-y user-select-none">
          <Image alt="Social Media Left" src={socmedLeftImage} className="img-fluid" />
        </div>

        <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y user-select-none">
          <Image alt="Social Media Right" src={socmedRightImage} className="img-fluid" />
        </div>
      </div>

      {/* Intro */}
      <div className="text-center py-5">
        <SectionHeading>Social Media Design</SectionHeading>
        <p className="mx-auto mb-0" style={{ maxWidth: '509px' }}>
          Throughout 2022 - 2024, I&apos;ve handled 21 brand&apos;s social media post design with a
          lot of design theme variety, from kids to Gen-Z design theme.
        </p>
      </div>

      {/* Works */}
      <CContainer lg className="py-5">
        <div id="hightlight-clients">
          <CRow className="g-3 g-md-5 row-cols-2 row-cols-md-4">
            {socmedDesigns.map((design, index) => (
              <CCol key={index}>
                <div className="client ratio ratio-1x1 border border-secondary overflow-hidden">
                  <Image
                    alt="Social Media Feed"
                    src={`${BASE_PATH}${design.feed}`}
                    className="client-feed object-fit-cover"
                    width={298}
                    height={298}
                  />
                  <Image
                    alt="Social Media Logo"
                    src={`${BASE_PATH}${design.logo}`}
                    className="client-logo object-fit-contain position-absolute top-50 start-50 translate-middle"
                    width={100}
                    height={100}
                  />
                </div>
              </CCol>
            ))}
          </CRow>
        </div>
      </CContainer>

      {/* More Works */}
      <CContainer lg className="text-center py-5">
        <h1 className="display-5 fw-bold mb-4">And Many More</h1>
        <div id="more-clients" className="w-100 overflow-x-hidden">
          <CRow className="row-cols-3 row-cols-md-6 g-4 align-items-center">
            {socmedDesignsMore.map((design, index) => (
              <CCol key={index}>
                <Image
                  alt="Socmed Design"
                  src={`${BASE_PATH}${design}`}
                  className="object-fit-contain"
                  width={100}
                  height={100}
                />
              </CCol>
            ))}
          </CRow>
        </div>
        <div className="py-4">
          <Link
            className="btn btn-white-gradient rounded-4 p-3"
            href={'https://drive.google.com/drive/folders/1Vhfdd79YLKCHOSjWCbh8-PHjQcD2qJps'}
            target="_blank"
          >
            <CIcon icon={googleDriveColored} className="me-2" />
            More of My Works
          </Link>
        </div>
      </CContainer>
    </div>
  )
}

export default SocmedDesign
