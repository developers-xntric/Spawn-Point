import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

// Define the email sending function
async function sendEmail(to: string, subject: string, html: string) {
  // Use existing SMTP configuration from environment variables
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.warn('SMTP configuration not complete. In a real application, configure SMTP_HOST, SMTP_USER, and SMTP_PASS environment variables.');
    // For now, we'll just log the email to the console as a placeholder
    console.log(`Email would be sent to: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${html}`);
    return { success: true, message: 'Email logged to console (not sent due to missing configuration)' };
  }

  try {
    // Create transporter using existing SMTP configuration
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify connection configuration
    await transporter.verify();

    // Send mail
    const info = await transporter.sendMail({
      from: smtpUser, // sender address
      to, // recipient
      subject,
      html,
    });

    console.log('Email sent: ', info.response);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return Response.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Log the received email (for admin notification)
    console.log(`New newsletter subscription: ${email}`);

    // Send a confirmation email to the user
    const userConfirmation = await sendEmail(
      email,
      'Welcome to Our Newsletter!',
      `
        <h2>Welcome to Our Newsletter!</h2>
        <p>Thank you for subscribing to our newsletter. You'll receive updates and insights from us.</p>
        <p>If you subscribed by mistake, you can unsubscribe at any time.</p>
      `
    );

    // Send a notification to the admin (your email)
    const adminEmail = process.env.ADMIN_EMAIL || process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    if (adminEmail) {
      const adminNotification = await sendEmail(
        adminEmail,
        'New Newsletter Subscription',
        `
          <h2>New Newsletter Subscription</h2>
          <p>A new user has subscribed to the newsletter:</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Time:</strong> ${new Date().toISOString()}</p>
        `
      );
    } else {
      console.warn('ADMIN_EMAIL not configured. Cannot send admin notification.');
    }

    return Response.json({
      message: 'Successfully subscribed to the newsletter',
      email: email,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error processing subscription:', error);
    return Response.json(
      { error: 'Failed to process subscription' },
      { status: 500 }
    );
  }
}