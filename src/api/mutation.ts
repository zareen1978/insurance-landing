import {quoteSchemaType} from '@/schema'
import axios from 'axios'

export const postQuoteData = async (data: quoteSchemaType) => {
  try {
    const response = await axios.post(
      'https://v1.nocodeapi.com/faisal009/google_sheets/BueovoWiuTdBzdBG?tabId=Sheet1',
      JSON.stringify([Object.values(data)]),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    return response.data
  } catch (error) {
    console.error('Error:', error)
    return error
  }
}
