import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';

admin.initializeApp();

// Configure email transporter (using Gmail as example)
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: functions.config().email?.user || process.env.EMAIL_USER,
    pass: functions.config().email?.pass || process.env.EMAIL_PASS
  }
});

// Email notification for new contact submissions
export const sendContactNotification = functions.firestore
  .document('contact_submissions/{contactId}')
  .onCreate(async (snap, context) => {
    const contactData = snap.data();

    if (!contactData) return;

    const mailOptions = {
      from: `"AverIQ Contact Form" <${functions.config().email?.user || process.env.EMAIL_USER}>`,
      to: functions.config().email?.notification || process.env.NOTIFICATION_EMAIL || 'contact@averiq.ai',
      subject: `New Contact Form Submission from ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Contact Details:</h3>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
            <p><strong>Company:</strong> ${contactData.company || 'Not provided'}</p>
          </div>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${contactData.message}</p>
          </div>

          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #065f46;">
              <strong>📅 Submitted:</strong> ${contactData.submittedAt?.toDate()?.toLocaleString() || 'Unknown time'}
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from the AverIQ contact form.
            </p>
            <a href="https://console.firebase.google.com/project/backend-for-website-e2118/firestore/data/~2Fcontact_submissions~2F${context.params.contactId}"
               style="display: inline-block; background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px;">
              View in Admin Dashboard
            </a>
          </div>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Contact notification email sent successfully');
    } catch (error) {
      console.error('Error sending contact notification email:', error);
    }
  });

// Email notification for new career applications
export const sendCareerNotification = functions.firestore
  .document('career_applications/{applicationId}')
  .onCreate(async (snap, context) => {
    const applicationData = snap.data();

    if (!applicationData) return;

    const mailOptions = {
      from: `"AverIQ Career Application" <${functions.config().email?.user || process.env.EMAIL_USER}>`,
      to: functions.config().email?.notification || process.env.NOTIFICATION_EMAIL || 'careers@averiq.ai',
      subject: `New Career Application from ${applicationData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Career Application</h2>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1f2937;">Applicant Details:</h3>
            <p><strong>Name:</strong> ${applicationData.name}</p>
            <p><strong>Email:</strong> ${applicationData.email}</p>
            <p><strong>Phone:</strong> ${applicationData.phone}</p>
            <p><strong>Role:</strong> ${applicationData.role}</p>
            <p><strong>Experience:</strong> ${applicationData.experience} years</p>
            <p><strong>Skills:</strong> ${applicationData.skills}</p>
            <p><strong>Location:</strong> ${applicationData.location}, ${applicationData.city} ${applicationData.pincode}</p>
            ${applicationData.portfolio ? `<p><strong>Portfolio:</strong> ${applicationData.portfolio}</p>` : ''}
          </div>

          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #065f46;">
              <strong>📅 Applied:</strong> ${applicationData.createdAt?.toDate()?.toLocaleString() || 'Unknown time'}
            </p>
            <p style="margin: 5px 0 0 0; color: #065f46;">
              <strong>📎 Resume:</strong> <a href="${applicationData.resumeURL}" style="color: #2563eb;">Download Resume</a>
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This application was submitted through the AverIQ careers page.
            </p>
            <a href="https://console.firebase.google.com/project/backend-for-website-e2118/firestore/data/~2Fcareer_applications~2F${context.params.applicationId}"
               style="display: inline-block; background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px;">
              View in Admin Dashboard
            </a>
          </div>
        </div>
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Career application notification email sent successfully');
    } catch (error) {
      console.error('Error sending career application notification email:', error);
    }
  });