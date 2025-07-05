# Resend Email Setup

This project uses [Resend](https://resend.com) for sending contact form emails.

## Setup Instructions

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Get your API key** from the [API Keys page](https://resend.com/api-keys)
3. **Add your API key** to the `.env.local` file:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```
4. **Restart your development server** after adding the environment variable

## How it works

- Contact form submissions are sent to `/api/contact`
- The API route validates the form data and sends an email using Resend
- Emails are sent to `drhythm365@gmail.com`
- The sender's email is set as the reply-to address for easy responses

## Email Template

The email includes:
- Sender's name and email
- Company (if provided)
- Project details/message
- Professional HTML formatting
- Reply-to functionality

## Domain Setup (Optional)

For production, you may want to:
1. Set up a custom domain in Resend
2. Update the `from` address in `/src/app/api/contact/route.ts`
3. Configure SPF/DKIM records for better deliverability

## Troubleshooting

- Make sure your API key is correct and active
- Check the console for any error messages
- Verify that the environment variable is loaded (restart dev server)
- For production, ensure environment variables are set in your hosting platform
