import {z} from 'zod'

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)

export const QuoteSchema = z.object({
  fullName: z.string().min(1, {message: 'Please enter your full Name'}),
  phone: z
    .string()
    .min(1, {message: 'Please enter your Phone no'})
    .regex(phoneRegex, 'Invalid Number!'),
  email: z.string().min(1, {message: 'Please enter an valid email'}).email(),
  product: z.string().min(1, {message: 'Please select a product'}),
})

export type quoteSchemaType = z.infer<typeof QuoteSchema>
