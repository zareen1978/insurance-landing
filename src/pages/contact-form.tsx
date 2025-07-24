'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Loader2, Send, User, Mail, Phone, MessageSquare } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'

const formSchema = z.object({
   name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
   email: z.string().email({ message: 'Please enter a valid email address.' }),
   phone: z.string().min(8, { message: 'Please enter a valid phone number.' }),
   subject: z.string().min(1, { message: 'Please select a subject.' }),
   message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

export default function ContactForm() {
   const [isSubmitting, setIsSubmitting] = useState(false)

   const { toast } = useToast()

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: '',
         email: '',
         phone: '',
         subject: '',
         message: '',
      },
   })

   async function onSubmit(values: z.infer<typeof formSchema>) {
      setIsSubmitting(true)

      try {
         // Format the message for WhatsApp
         const message = `
*New Contact Form Submission*
---------------------------
*Name:* ${values.name}
*Email:* ${values.email}
*Phone:* ${values.phone}
*Subject:* ${values.subject}
*Message:* ${values.message}
---------------------------
Sent from CarinsuranceDxb website
    `

         // The WhatsApp business phone number (replace with your actual number)
         const phoneNumber = '+971555797971' // Example: 971501234567 (UAE format without the + sign)

         // Create the WhatsApp URL with the encoded message
         const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

         // Show success message
         toast({
            title: 'Redirecting to WhatsApp',
            description: 'Your message details are being sent via WhatsApp.',
         })

         // Short delay before redirecting
         await new Promise(resolve => setTimeout(resolve, 1000))

         // Open WhatsApp in a new tab
         window.open(whatsappUrl, '_blank')

         // Reset the form
         form.reset()
      } catch (error) {
         toast({
            title: 'Error',
            description: 'There was a problem sending your message. Please try again.',
            variant: 'destructive',
         })
         console.error('Error:', error)
      } finally {
         setIsSubmitting(false)
      }
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="flex items-center text-base">
                           <User className="mr-2 h-4 w-4 text-muted-foreground" />
                           Full Name
                        </FormLabel>
                        <FormControl>
                           <Input
                              placeholder="John Doe"
                              {...field}
                              className="rounded-md border-muted-foreground/20 bg-slate-50 transition-colors focus:border-primary focus-visible:ring-1 focus-visible:ring-primary dark:bg-slate-800/50"
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="flex items-center text-base">
                           <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                           Email
                        </FormLabel>
                        <FormControl>
                           <Input
                              type="email"
                              placeholder="john.doe@example.com"
                              {...field}
                              className="rounded-md border-muted-foreground/20 bg-slate-50 transition-colors focus:border-primary focus-visible:ring-1 focus-visible:ring-primary dark:bg-slate-800/50"
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
               <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="flex items-center text-base">
                           <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                           Phone Number
                        </FormLabel>
                        <FormControl>
                           <Input
                              placeholder="+971 50 123 4567"
                              {...field}
                              className="rounded-md border-muted-foreground/20 bg-slate-50 transition-colors focus:border-primary focus-visible:ring-1 focus-visible:ring-primary dark:bg-slate-800/50"
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="flex items-center text-base">
                           <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                           Subject
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                           <FormControl>
                              <SelectTrigger className="rounded-md border-muted-foreground/20 bg-slate-50 transition-colors focus:border-primary focus-visible:ring-1 focus-visible:ring-primary dark:bg-slate-800/50">
                                 <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                           </FormControl>
                           <SelectContent>
                              <SelectItem value="quote">Request a Quote</SelectItem>
                              <SelectItem value="claim">File a Claim</SelectItem>
                              <SelectItem value="policy">Policy Inquiry</SelectItem>
                              <SelectItem value="renewal">Renewal Information</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                           </SelectContent>
                        </Select>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <FormField
               control={form.control}
               name="message"
               render={({ field }) => (
                  <FormItem>
                     <FormLabel className="flex items-center text-base">
                        <MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
                        Message
                     </FormLabel>
                     <FormControl>
                        <Textarea
                           placeholder="Please provide details about your inquiry..."
                           className="min-h-[150px] rounded-md border-muted-foreground/20 bg-slate-50 transition-colors focus:border-primary focus-visible:ring-1 focus-visible:ring-primary dark:bg-slate-800/50"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button
               type="submit"
               className="group relative w-full overflow-hidden rounded-md text-base"
               size="lg"
               disabled={isSubmitting}
            >
               <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                     <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                     </>
                  ) : (
                     <>
                        Send via WhatsApp
                        <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                     </>
                  )}
               </span>
            </Button>
         </form>
      </Form>
   )
}
