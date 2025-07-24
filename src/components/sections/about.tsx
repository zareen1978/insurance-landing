import InfoBox from '../info-box'
import {Separator} from '@/components/ui/separator'

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen section-grid ">
      <div className="relative">
        <div className="size-32 sm:size-44 bg-white p-3 absolute -top-[45px] left-[-12px] rounded-br-md">
          <div className="bg-primary size-full rounded-md grid place-content-center">
            <div className="space-y-0 sm:space-y-1 text-white text-center text-2xl sm:text-4xl font-black">
              <h2 className="sm:text-5xl italic">12</h2>
              <p>Years</p>
              <p className="text-base sm:text-2xl">Experience</p>
            </div>
          </div>
        </div>
        <img src="/about.jpg" className="w-full rounded-md" />
      </div>

      <div className="space-y-5 md:space-y-10">
        <h2 className="font-medium text-[22px] md:text-4xl">
          We're Here To Assist You With Exploring Protection
        </h2>
        <p className="text-sm md:text-base">
          Our team is dedicated to assisting you in navigating the intricacies of insurance,
          ensuring peace of mind and security every step of the way
        </p>

        <div className="flex items-center justify-between sm:justify-start gap-4 md:gap-8 !my-8">
          <InfoBox image="/flexbible.png">
            Flexible <br /> Insurance Plans
          </InfoBox>

          <InfoBox image="/money.png">
            Money <br /> Back Guarantee
          </InfoBox>
        </div>

        <p className="text-sm md:text-base">
          Whether you're seeking insurance coverage for your home, vehicle, health, or other assets,
          Trust us to help you find the right protection tailored to your unique needs and
          circumstances.
        </p>

        <Separator />
        <h4 className="text-lg font-bold">Call us at: +971555797971</h4>
      </div>
    </section>
  )
}

export default AboutSection
