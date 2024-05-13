"use client";
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { Button } from './MovingBorder'
import { RxDiscordLogo } from 'react-icons/rx'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Join us Now
            </h2>
            <div className="mt-6 flex">
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 font-display font-medium text-xl text-black dark:text-white border-slate-500 dark:border-slate-800"
                   >
                                  <Link href="https://discord.gg/opensense">

                        <RxDiscordLogo size={"25px"}/>

                       <span className="ml-2">Join Us</span>
                       <ArrowRightCircleIcon className="h-6 w-6 ml-2" />
                       </Link>

                    </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
