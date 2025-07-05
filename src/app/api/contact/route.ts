import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'Design Labs Contact <onboarding@resend.dev>', // Use Resend's default from address
            to: ['drhythm365@gmail.com'],
            subject: `New Contact Form Submission from ${name}`,
            html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>New Contact Form Submission</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #ffffff;
        color: #222;
        margin: 0;
        padding: 40px 20px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      .header {
        background-color: #111;
        color: #fff;
        padding: 24px;
        text-align: left;
      }

      .header h1 {
        margin: 0 0 8px 0;
        font-size: 20px;
        font-weight: 600;
      }

      .header p {
        margin: 0;
        font-size: 14px;
        color: #ccc;
      }

      .content {
        background-color: #f4f4f4;
        padding: 24px;
        border-top: 1px solid #ddd;
      }

      .field {
        margin-bottom: 24px;
        padding: 0;
      }

      .field-label {
        font-size: 11px;
        font-weight: 600;
        color: #777;
        text-transform: uppercase;
        margin-bottom: 6px;
      }

      .field-value {
        font-size: 15px;
        color: #222;
        line-height: 1.5;
      }

      .message-field {
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      .footer {
        font-size: 12px;
        color: #888;
        text-align: center;
        margin-top: 40px;
        border-top: 1px solid #ddd;
        padding-top: 20px;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>You have received a new message through Design Labs contact form</p>
    </div>
    
    <div class="content">
      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${name}</div>
      </div>
      
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value">${email}</div>
      </div>
      
      ${company ? `
        <div class="field">
          <div class="field-label">Company</div>
          <div class="field-value">${company}</div>
        </div>
      ` : ''}

      <div class="field">
        <div class="field-label">Project Details</div>
        <div class="field-value message-field">${message}</div>
      </div>
    </div>
    
    <div class="footer">
      <p>This email was sent from the Design Labs website contact form.</p>
      <p>Reply directly to this email to respond to ${name}.</p>
    </div>
  </body>
</html>

      `,
            replyTo: email, // Allow replying directly to the sender
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: 'Email sent successfully',
                id: data?.id
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
