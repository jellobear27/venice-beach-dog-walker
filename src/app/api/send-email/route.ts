import { NextResponse } from 'next/server';
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../sesClient";
import { generateEmail } from "../emailTemplate";

const createSendEmailCommand = (formData: any) => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [process.env.FORM_RESPONSE_RECIPIENT_EMAIL!],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: generateEmail(formData),
        },
        Text: {
          Charset: "UTF-8",
          Data: `
New Booking Request - Venice Beach Dog Walker

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Time: ${formData.preferredTime}

Please respond to this request as soon as possible.

Best regards,
Venice Beach Dog Walker
          `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New Booking Request - Venice Beach Dog Walker",
      },
    },
    Source: process.env.FORM_RESPONSE_SEND_AS_EMAIL!,
    ReplyToAddresses: ['venicebeachdogwalker@gmail.com'],
  });
};

export async function POST(request: Request) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }

  try {
    const formData = await request.json();
    console.log('Received form data:', formData);
    console.log('Environment variables:', {
      recipient: process.env.FORM_RESPONSE_RECIPIENT_EMAIL,
      sender: process.env.FORM_RESPONSE_SEND_AS_EMAIL,
      region: process.env.AWS_REGION
    });

    const sendEmailCommand = createSendEmailCommand(formData);
    console.log('Created email command:', sendEmailCommand);
    
    const result = await sesClient.send(sendEmailCommand);
    console.log('Email sent successfully:', result);
    
    return NextResponse.json({ success: true }, { headers });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    
    // Extract the error message from AWS SES error
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      errorMessage = error.message;
      // If it's an AWS error, try to get more details
      if ('$metadata' in error) {
        const awsError = error as any;
        errorMessage = awsError.message || `AWS Error: ${awsError.$metadata?.httpStatusCode || 'Unknown'}`;
      }
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: error instanceof Error ? error.stack : 'Unknown error'
      },
      { status: 500, headers }
    );
  }
} 