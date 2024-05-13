
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
// import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import auditWizard from '@/images/clients/auditwizard.svg'
import guardianaudits from '@/images/clients/guardianaudits.svg'
import immunefi from '@/images/clients/immunefi.svg'
import immunefiDark from '@/images/clients/immunefi-dark.svg'

import olimpx from '@/images/clients/olimpx.svg'
import trustblock from '@/images/clients/trustblock.svg'

import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import Carousel from '@/components/Caroussel'
import HeroMockup from '@/components/HeroWithMockup'
import Header from '@/components/Header'
import Podcasts from '@/components/LatestVideos'
import MemberTestimonial from '@/components/MemberTestimonial'
import Stepped from '@/components/Stepped'
import Footer from '@/components/Footer'

const clients = [
  ['guardianAudits', guardianaudits, "https://guardianaudits.com/"],
  ['immunefi', immunefi, "https://immunefi.com/"],
  ['auditWizard', olimpx, "https://www.olympix.ai/"],
  ['auditWizard', trustblock, "https://trustblock.io/"],
  ['auditWizard', auditWizard, "https://www.auditwizard.io/"],
]

function Clients() {
  return (
    <div className="mt-12 max-w-7xl mx-2 px-2 md:mx-auto rounded-4xl bg-neutral-950 py-8 sm:mt-22 sm:py-12 lg:mt-12">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We're supported by
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-4 gap-y-10 lg:grid-cols-5"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className='mx-auto my-auto justify-center text-center'>
                <FadeIn>
                  <Link href="/">
                      <Image height={570} width={150} src={logo} alt={client} unoptimized />
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Community"
        title="We have all the Blockchain Content you may possible need."
        className="mt-12 sm:mt-22 lg:mt-32"
      >
        <p>
          We're a community of engineers, crypto enthusiasts, and blockchain researchers.
          </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-96 flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Education">
              We have a team of skilled developers who are experts in the latest
              Blockchain technologies, we exchange knowledge and learn from each other.
            </ListItem>
            <ListItem title="Science">
              The best researchers who are always looking for the latest
              blockchain technologies and how they can be used are here.
            </ListItem>
            <ListItem title="Security">
              
              We are in contact with audits and rewards for all the companies in the blockchain space so you can learn about and put into practice.
            </ListItem>
            <ListItem title="Community">
              We have daily calls and a community that is always active and ready to help you with any questions you may have.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
    <Header />
    <HeroMockup />
      <Clients />
      <Podcasts />
      <Testimonial
        className="mt-14 sm:mt-22 lg:mt-20"
        client={{ name: 'Phobia', logo: immunefiDark }}
      >
        Open sense has been the best place to find security specialists and also to share our content about deep blockchain and technichal stuff.
      </Testimonial>
      <Stepped />
      <Services />
      <MemberTestimonial />
      <Footer />
    </>
  )
}
