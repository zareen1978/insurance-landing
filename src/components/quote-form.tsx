import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {useToast} from '@/components/ui/use-toast'
import {Button} from './ui/button'
import {Input} from './ui/input'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'

import {postQuoteData} from '@/api/mutation'
import {Form, FormControl, FormField, FormItem, FormMessage} from '@/components/ui/form'
import {QuoteSchema, quoteSchemaType} from '@/schema'
import {AxiosError} from 'axios'
import {format} from 'date-fns'

import {useMutation} from '@tanstack/react-query'

const QuoteForm = () => {
  const {toast} = useToast()

  const {mutate, isPending} = useMutation({
    mutationFn: (newRow: quoteSchemaType) => {
      return postQuoteData(newRow)
    },
  })

  const form = useForm<quoteSchemaType>({
    resolver: zodResolver(QuoteSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      product: '',
    },
  })

  function onSubmit(data: quoteSchemaType) {
    if (!data) return

    const currentDate = new Date()
    const formattedDate = format(currentDate, 'dd/MM/yyyy')
    const formattedTime12Hour = format(currentDate, 'hh:mm a')

    const quoteData = {
      '#': '=IF(ISBLANK(B2), "", ROW()-1)',
      date: formattedDate,
      time: formattedTime12Hour,
      fullName: data.fullName,
      phone: data.phone,
      email: data.email.toLowerCase(),
      product: data.product,
    }

    mutate(quoteData, {
      onSuccess: data => {
        if (data instanceof AxiosError) {
          toast({
            variant: 'destructive',
            title: data.name,
            description: data.message,
          })
          return
        }
        toast({
          title: 'Success!',
          description:
            'Your query has been submitted successfully. Our team will contact you shortly.',
        })
        form.reset()
      },
    })
  }

  return (
    <div className="h-full bg-white p-3 md:p-4 rounded-md shadow-md">
      <div className="text-center space-y-2">
        <h2 className="font-semibold text-xl md:text-2xl italic">Get a Free Quote Now</h2>
        <p className="text-sm md:text-md">
          Take the first step towards securing your best life today.{' '}
        </p>
      </div>

      <Form {...form}>
        <form
          className="mt-4 px-2 md:px-0 pb-2 md:pb-0 space-y-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" autoComplete="off" placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Phone No" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Email"
                    {...field}
                    className="lowercase placeholder:capitalize"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="product"
            render={({field}) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full text-[12.5px]">
                      <SelectValue placeholder="Choose Product" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Motor Insurance">Motor Insurance</SelectItem>
                    <SelectItem value="Medical Insurance">Medical Insurance</SelectItem>
                    <SelectItem value="Boat / Yacht Insurance">Boat / Yacht Insurance</SelectItem>
                    <SelectItem value="Property Insurance">Property Insurance</SelectItem>
                    <SelectItem value="Workmens compensation Insurance">
                      Workmens compensation Insurance
                    </SelectItem>
                    <SelectItem value="Bike Insurance">Bike Insurance</SelectItem>
                    <SelectItem value="Pet Insurance">Pet Insurance</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {isPending ? 'Please Wait...' : 'Get a Quote'}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default QuoteForm
