interface EmailTemplate {
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
}

export const generateEmail = (formData: EmailTemplate) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Booking Request</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin-bottom: 20px;
          }
          .content {
            padding: 20px;
          }
          .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 0.9em;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h2>New Booking Request - Venice Beach Dog Walker</h2>
        </div>
        <div class="content">
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Preferred Time:</strong> ${formData.preferredTime}</p>
        </div>
        <div class="footer">
          <p>This is an automated message from Venice Beach Dog Walker's booking system.</p>
          <p>Please respond to this request as soon as possible.</p>
          <p>Best regards,<br>Venice Beach Dog Walker</p>
        </div>
      </body>
    </html>
  `;
}; 