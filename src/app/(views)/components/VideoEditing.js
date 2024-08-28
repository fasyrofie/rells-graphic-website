import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import {
  CBadge,
  CCarousel,
  CCarouselItem,
  CCol,
  CContainer,
  CRating,
  CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilArrowRight } from '@coreui/icons'
import { discord, videoCamera } from '@/assets/icons'

import { BASE_PATH } from '@/utils/prefix'

import DandZSpeaksAvatar from '@/assets/images/DandZSpeaks-avatar.png'
import capcutLogo from '@/assets/images/capcut-logo.svg'
import afterEffectsLogo from '@/assets/images/after-effects-logo.svg'
import otherVideosText from '@/assets/images/other-videos-text.svg'

const dnzspeaksVideos = [
  'https://www.youtube.com/embed/NrNkjhXB6ek',
  'https://www.youtube.com/embed/F18LvmSif-A',
  'https://www.youtube.com/embed/jmr_dBWS-zI',
  'https://www.youtube.com/embed/jJ8Kos60bXo',
]

const longFormContents = [
  {
    video: 'https://www.youtube.com/embed/ESURkeqSC1Y?si=5b8laAH2qwDfjOBc',
    title: 'Long Form Content',
    caption:
      'Your content idea is strong, but enhancing the editing quality can significantly boost viewer engagement. By refining the first two minutes of your video to serve as a compelling hook, you can increase viewer retention and ensure your content is watched through to the end.',
  },
  {
    video: 'https://www.youtube.com/embed/UhP2wphlaHw',
    title: 'Long Form Content',
    caption:
      'Your content idea is strong, but enhancing the editing quality can significantly boost viewer engagement. By refining the first two minutes of your video to serve as a compelling hook, you can increase viewer retention and ensure your content is watched through to the end.',
  },
  {
    video: 'https://www.youtube.com/embed/LvqI1Rz2NXo',
    title: 'Long Form Content',
    caption:
      'Your content idea is strong, but enhancing the editing quality can significantly boost viewer engagement. By refining the first two minutes of your video to serve as a compelling hook, you can increase viewer retention and ensure your content is watched through to the end.',
  },
  {
    video: 'https://www.youtube.com/embed/Kw2VZCH2-yQ',
    title: 'Long Form Content',
    caption:
      'Your content idea is strong, but enhancing the editing quality can significantly boost viewer engagement. By refining the first two minutes of your video to serve as a compelling hook, you can increase viewer retention and ensure your content is watched through to the end.',
  },
]

const dnzspeaksOtherVideos = [
  'https://www.youtube.com/embed/OwehzKVYJr8',
  'https://www.youtube.com/embed/0-zp5pxFDPk',
  'https://www.youtube.com/embed/0IEGjT4i4sE',
  'https://www.youtube.com/embed/3lkdsxqjRt0',
]

const VideoEditing = () => {
  return (
    <div id="video-editing" className="overflow-x-hidden">
      {/* DandZSpeaks */}
      {/* Intro */}
      <div className="position-relative bg-dark py-5">
        <CContainer lg>
          <FadeIn>
            <div className="mx-auto w-100 text-center py-4" style={{ maxWidth: '816px' }}>
              <div className="py-4">
                <Image
                  alt="DandZSpeaks Avatar"
                  src={DandZSpeaksAvatar}
                  className="img-fluid rounded-circle"
                  width={80}
                  height={80}
                />

                <div className="display-3 fw-bold mt-3 text-center fade-in">
                  I help DandZSpeaks Level Up Their Content.
                </div>

                <p className="mt-4 mb-0 mx-auto text-center" style={{ maxWidth: '537px' }}>
                  For a beginner creator, they generate decent views with their short content. This
                  is why <b>I can help you as a small creator to get decent amount of views</b> with
                  great editing!
                </p>
              </div>
            </div>
          </FadeIn>
        </CContainer>

        <div className="position-absolute top-50 start-0 translate-middle-y user-select-none">
          <Image alt="Capcut" src={capcutLogo} />
        </div>

        <div className="position-absolute top-50 end-0 translate-middle-y user-select-none">
          <Image alt="After Effects" src={afterEffectsLogo} />
        </div>
      </div>

      {/* Showcases 1 */}
      <div className="bg-dark">
        {/* <CContainer lg> */}
        <div className="ratio ratio-16x9">
          <video className="object-fit-cover" controls>
            <source src={`${BASE_PATH}/videos/DandZSpeaks-video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* </CContainer> */}
      </div>

      {/* Showcases 2 */}
      <CContainer lg className="py-5 px-5 px-md-3" style={{ maxWidth: '720px' }}>
        <CRow className="row-cols-1 row-cols-md-2 g-4">
          {dnzspeaksVideos.map((video, index) => (
            <CCol key={index}>
              <div className="ratio ratio-9x16">
                <iframe
                  src={video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </CCol>
          ))}
        </CRow>
      </CContainer>

      {/* Review */}
      <CContainer lg className="py-5">
        <div className="testimony rounded-5 px-xl-5 py-xl-3">
          <div className="p-2 p-md-4 p-lg-5">
            <div className="px-4 py-2">
              <CRow className="gx-lg-5 align-items-center">
                <CCol xs={12} lg="auto" className="py-3 text-center">
                  <Image
                    alt="DandZSpeaks Avatar"
                    src={DandZSpeaksAvatar}
                    className="img-fluid rounded-circle"
                    width={114}
                    height={114}
                  />
                </CCol>
                <CCol xs={12} lg="auto" className="py-3 d-flex flex-column align-items-center">
                  <h1 className="fw-bold">DandZSpeaks</h1>
                  <CRating readOnly size="lg" value={5} />
                </CCol>
                <CCol xs={12} lg className="py-3 text-center text-lg-start">
                  <p>
                    “You did a really great job! You really are{' '}
                    <b>consistent with the quality of the video</b>. Hell, even you are getting
                    better each video! The greatest quality of yours is <b>your speed</b>. I am
                    surprised that <b>you can produce these videos in such short of time!</b>”
                  </p>
                </CCol>
                <CCol xs={12} lg="auto" className="py-3 text-center">
                  <CIcon icon={discord} height={28} />
                </CCol>
              </CRow>
            </div>
          </div>
        </div>
      </CContainer>

      {/* Other Videos */}
      <CContainer lg className="py-5">
        <FadeIn className="d-block mx-auto ">
          <Image alt="Text" src={otherVideosText} className="img-fluid" />
        </FadeIn>
      </CContainer>

      {/* Carousel */}
      <CCarousel controls indicators pause="hover">
        {longFormContents.map((carousel, index) => (
          <CCarouselItem key={index}>
            <div className="ratio ratio-16x9">
              <iframe
                src={carousel.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </CCarouselItem>
        ))}
      </CCarousel>

      {/* Showcases 2 */}
      <CContainer lg className="py-5 px-5 px-md-3">
        <CRow className="row-cols-1 row-cols-md-4 g-4 py-4">
          {dnzspeaksOtherVideos.map((video, index) => (
            <CCol key={index}>
              <div className="ratio ratio-9x16">
                <iframe
                  src={video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </CCol>
          ))}
        </CRow>

        <CRow className="g-4 justify-content-center align-items-center py-4">
          <CCol xs="auto">
            <h1>
              Order Your
              <br />
              Video Now!
            </h1>
          </CCol>
          <CCol xs="auto">
            <CIcon icon={cilArrowRight} size="5xl" />
          </CCol>
          <CCol xs="auto">
            <Link
              className="btn btn-white-gradient rounded-4 p-3"
              href="mailto:asyrofiefarrell@gmail.com"
            >
              <CIcon icon={videoCamera} className="me-2" />I want Rell&apos;s Graphic&apos;s Video
            </Link>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default VideoEditing
