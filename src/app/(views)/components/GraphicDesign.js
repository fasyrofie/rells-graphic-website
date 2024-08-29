import classNames from 'classnames'

import Image from 'next/image'
import { CCol, CContainer, CRow } from '@coreui/react-pro'

import { akiraExpanded } from '@/app/fonts'

import { BASE_PATH } from '@/utils/prefix'

const graphicDesigns = [
  {
    image: '/images/graphic-design/YT thumbnail 1.png',
    name: 'Thumbnail Design',
    description:
      'I secure freelance opportunities through platforms such as X (formerly Twitter). I proactively reach out to content creators via direct messages, presenting them with samples of my work.',
  },
  {
    image: '/images/graphic-design/sosmed 1.png',
    name: 'Social Media Design',
    description:
      'I have been employed with Selected Comm+ since 2022. In 2023, I transitioned to another agency, Noni Kolektiv, where I initially worked as a freelancer before advancing to the position of Design Lead.',
  },
  {
    image: '/images/graphic-design/buku graphic design 1.png',
    name: 'Yearbook Design',
    description:
      'This position at Paramata Studio has been my first role since graduation. An alumnus of my high school owns the agency.',
  },
  {
    image: '/images/graphic-design/ipad 1 1.png',
    name: 'Illustration',
    description:
      'I specialized in illustration in college and have competed in drawing contests organized by brands and gaming companies, though I have not yet held a professional role in this field.',
  },
]

const GraphicDesign = () => {
  return (
    <div id="graphic-design" className="bg-dark-gradient overflow-x-hidden py-5">
      <CContainer lg>
        <p className={classNames(akiraExpanded.className, 'py-4 display-2 lh-1 text-center')}>
          Graphic
          <br />
          design
        </p>
      </CContainer>
      <CContainer lg className="px-5 px-md-3">
        <CRow className="g-4">
          {graphicDesigns.map((design, index) => (
            <CCol key={index} xs={12} md={6} lg={3}>
              <div className="ratio ratio-1x1 bg-dark bg-gradient border border-secondary rounded-5 mb-4">
                <Image
                  alt="Graphic Design"
                  src={`${BASE_PATH}${design.image}`}
                  className="p-5 object-fit-contain"
                  width={300}
                  height={300}
                />
              </div>
              <h4 className="text-center fw-bold mb-3">{design.name}</h4>
              <p className="text-center">{design.description}</p>
            </CCol>
          ))}
        </CRow>
      </CContainer>
    </div>
  )
}

export default GraphicDesign
