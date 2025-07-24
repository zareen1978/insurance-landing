import { Car, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import ContactForm from './contact-form'

export default function ContactPage() {
   return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
         {/* Hero Section with Background */}
         <div className="relative overflow-hidden bg-primary text-primary-foreground">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70"></div>
            <div className="container relative mx-auto px-4 py-16 sm:py-24">
               <div className="max-w-2xl">
                  <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Get In Touch</h1>
                  <p className="text-xl text-primary-foreground/90 md:text-2xl">
                     We're here to help with all your insurance needs in Dubai.
                  </p>
               </div>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 right-0 hidden md:block">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 120"
                  className="text-slate-50 dark:text-slate-950 w-full h-[60px]"
               >
                  <path
                     fill="currentColor"
                     fillOpacity="1"
                     d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                  ></path>
               </svg>
            </div>
         </div>

         <div className="container mx-auto px-4 py-12">
            {/* Contact Cards Section */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
               {/* Quick Contact Card */}
               <Card className="overflow-hidden border-none bg-white shadow-lg dark:bg-slate-900">
                  <div className="bg-primary/10 p-6 text-center">
                     <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Phone className="h-8 w-8" />
                     </div>
                     <h3 className="text-xl font-semibold">Call Us</h3>
                     <p className="mt-2 text-muted-foreground">We're available 7 days a week</p>
                  </div>
                  <CardContent className="pb-8 px-6 text-center h-max">
                     <a href="tel:+971555797971">
                        <Button variant="secondary" className="mt-4 w-full">
                           Call Now
                        </Button>
                     </a>
                  </CardContent>
               </Card>

               {/* Email Card */}
               <Card className="overflow-hidden border-none bg-white shadow-lg dark:bg-slate-900">
                  <div className="bg-primary/10 p-6 text-center">
                     <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Mail className="h-8 w-8" />
                     </div>
                     <h3 className="text-xl font-semibold">Email Us</h3>
                     <p className="mt-2 text-muted-foreground">We reply within 24 hours</p>
                  </div>

                  <CardContent className="pb-8 px-6 text-center h-max">
                     <a href="mailto:zareen@carinsurancedxb.com">
                        <Button variant="secondary" className="mt-4 w-full">
                           Send Email
                        </Button>
                     </a>
                  </CardContent>
               </Card>

               {/* Visit Card */}
               <Card className="overflow-hidden border-none bg-white shadow-lg dark:bg-slate-900 md:col-span-2 lg:col-span-1">
                  <div className="bg-primary/10 p-6 text-center">
                     <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <MapPin className="h-8 w-8" />
                     </div>
                     <h3 className="text-xl font-semibold">Visit Us</h3>
                     <p className="mt-2 text-muted-foreground">Our office in Sharjah</p>
                  </div>

                  <CardContent className="pb-8 px-6 text-center h-max">
                     <a
                        href="https://www.google.com/maps/place/25%C2%B021'53.0%22N+55%C2%B024'03.2%22E/@25.364721,55.398315,15z/data=!4m4!3m3!8m2!3d25.3647222!4d55.4008889?hl=en&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                     >
                        <Button variant="secondary" className="mt-4 w-full">
                           Get Directions
                        </Button>
                     </a>
                  </CardContent>
               </Card>
            </div>

            {/* Main Content Section */}
            <div className="mt-16 grid gap-10 lg:grid-cols-5">
               {/* Contact Form */}
               <Card className="overflow-hidden border-none bg-white shadow-none dark:bg-slate-900 lg:col-span-3">
                  <div className="relative overflow-hidden bg-primary p-6 text-primary-foreground">
                     <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-foreground/10"></div>
                     <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-primary-foreground/10"></div>
                     <h2 className="relative text-2xl font-bold">Send us a message</h2>
                     <p className="relative mt-2 text-primary-foreground/80">
                        Fill out the form below and our team will get back to you as soon as possible.
                     </p>
                  </div>
                  <CardContent className="p-6 pt-8">
                     <ContactForm />
                  </CardContent>
               </Card>

               {/* Contact Information */}
               <div className="space-y-8 lg:col-span-2">
                  <Card className="overflow-hidden border-none bg-white shadow-none dark:bg-slate-900">
                     <div className="bg-primary/10 p-6">
                        <h2 className="flex items-center text-2xl font-bold">
                           <Clock className="mr-2 h-6 w-6 text-primary" />
                           Business Hours
                        </h2>
                     </div>
                     <CardContent className="p-6">
                        <div className="space-y-4">
                           <div className="flex justify-between border-b border-border pb-2">
                              <span className="font-medium">Monday - Thursday</span>
                              <span>8:00 AM - 6:00 PM</span>
                           </div>
                           <div className="flex justify-between border-b border-border pb-2">
                              <span className="font-medium">Friday</span>
                              <span>8:00 AM - 12:00 PM</span>
                           </div>
                           <div className="flex justify-between border-b border-border pb-2">
                              <span className="font-medium">Saturday</span>
                              <span>9:00 AM - 2:00 PM</span>
                           </div>
                           <div className="flex justify-between pb-2">
                              <span className="font-medium">Sunday</span>
                              <span>Closed</span>
                           </div>
                        </div>
                     </CardContent>
                  </Card>

                  {/* Map */}
                  <Card className="overflow-hidden border-none bg-white shadow-none dark:bg-slate-900">
                     <div className="bg-primary/10 p-6">
                        <h2 className="flex items-center text-2xl font-bold">
                           <MapPin className="mr-2 h-6 w-6 text-primary" />
                           Our Location
                        </h2>
                     </div>
                     <CardContent className="p-0">
                        <div className="aspect-video w-full">
                           <iframe
                              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3605.1967612213352!2d55.39831547538724!3d25.36472127760355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIxJzUzLjAiTiA1NcKwMjQnMDMuMiJF!5e0!3m2!1sen!2sae!4v1712596074750!5m2!1sen!2sae"
                              loading="lazy"
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              title="CarinsuranceDxb Location"
                              referrerPolicy="no-referrer-when-downgrade"
                           ></iframe>
                        </div>
                     </CardContent>
                  </Card>

                  {/* Social Media */}
                  <Card className="overflow-hidden border-none bg-white shadow-none dark:bg-slate-900">
                     <div className="bg-primary/10 p-6">
                        <h2 className="text-2xl font-bold">Connect With Us</h2>
                     </div>
                     <CardContent className="p-6">
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                           <a
                              target="_blank"
                              href="https://www.facebook.com/people/Carinsurancedxbcom/61555612810187/?mibextid=PlNXYD"
                              className="flex flex-col items-center justify-center rounded-lg bg-slate-100 p-4 transition-colors hover:bg-primary hover:text-primary-foreground dark:bg-slate-800"
                           >
                              <Facebook className="h-8 w-8" />
                              <span className="mt-2 text-sm font-medium">Facebook</span>
                           </a>

                           <a
                              target="_blank"
                              href="https://www.instagram.com/carinsurancedxbzareen/"
                              className="flex flex-col items-center justify-center rounded-lg bg-slate-100 p-4 transition-colors hover:bg-primary hover:text-primary-foreground dark:bg-slate-800"
                           >
                              <Instagram className="h-8 w-8" />
                              <span className="mt-2 text-sm font-medium">Instagram</span>
                           </a>
                           <a
                              target="_blank"
                              href="https://www.linkedin.com/in/zareen-javed-8a91a278/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                              className="flex flex-col items-center justify-center rounded-lg bg-slate-100 p-4 transition-colors hover:bg-primary hover:text-primary-foreground dark:bg-slate-800"
                           >
                              <Linkedin className="h-8 w-8" />
                              <span className="mt-2 text-sm font-medium">LinkedIn</span>
                           </a>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>

         {/* CTA Section */}
         <div className="mt-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-12">
               <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                  <div className="max-w-md">
                     <h2 className="text-2xl font-bold md:text-3xl">Need a quick quote?</h2>
                     <p className="mt-2 text-primary-foreground/80">
                        Get an instant car insurance quote online in just a few minutes.
                     </p>
                  </div>
                  <Link to="/">
                     <Button size="lg" variant="secondary" className="group relative overflow-hidden rounded-full px-8">
                        <span className="relative z-10">Get a Quote</span>
                        <span className="absolute inset-0 z-0 bg-gradient-to-r from-secondary/80 to-secondary transition-all duration-300 group-hover:opacity-80"></span>
                        <Car className="relative z-10 ml-2 h-5 w-5" />
                     </Button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
