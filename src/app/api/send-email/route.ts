import { SendEmailCommand } from "@aws-sdk/client-ses";
import { sesClient } from "../sesClient";
import { generateEmail } from "../emailTemplate";

interface EmailRequest {
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
  details?: {
    name?: string;
    message?: string;
    stack?: string;
  };
}

const createSendEmailCommand = (formData: EmailRequest) => {
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

export async function POST(request: Request): Promise<Response> {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers });
  }

  try {
    const formData: EmailRequest = await request.json();
    console.log('Received form data:', formData);
    
    // Log environment variables (without sensitive data)
    console.log('Environment variables:', {
      recipient: process.env.FORM_RESPONSE_RECIPIENT_EMAIL,
      sender: process.env.FORM_RESPONSE_SEND_AS_EMAIL,
      region: process.env.AWS_REGION,
      hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
      hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY
    });

    // Validate required environment variables
    if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
      throw new Error('AWS credentials are not properly configured');
    }

    if (!process.env.FORM_RESPONSE_RECIPIENT_EMAIL || !process.env.FORM_RESPONSE_SEND_AS_EMAIL) {
      throw new Error('Email addresses are not properly configured');
    }

    const sendEmailCommand = createSendEmailCommand(formData);
    console.log('Created email command:', sendEmailCommand);
    
    const result = await sesClient.send(sendEmailCommand);
    console.log('Email sent successfully:', result);
    
    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' } as EmailResponse),
      { headers }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send email';
    const errorDetails = error instanceof Error ? {
      name: error.name,
      message: error.message,
      stack: error.stack
    } : undefined;
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: errorMessage,
        details: errorDetails
      } as EmailResponse),
      { status: 500, headers }
    );
  }
} 