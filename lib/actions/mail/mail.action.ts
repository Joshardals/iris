"use server";

import nodemailer from "nodemailer";

// export async function contactSupport({
//   from,
//   text,
// }: {
//   from: string;
//   text: string;
// }) {
//   const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

//   const transport = nodemailer.createTransport({
//     host: "smtp.zoho.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: SMTP_EMAIL,
//       pass: SMTP_PASSWORD,
//     },
//   });

//   try {
//     const testResult = await transport.verify();
//     console.log(testResult);
//   } catch (error: any) {
//     console.log("Error", error.message);
//     return;
//   }

//   try {
//     const sendResult = await transport.sendMail({
//       from: from,
//       to: SMTP_EMAIL,
//       subject: "Request for Assistance",
//       text,
//     });
//     console.log(sendResult);
//   } catch (error: any) {
//     console.log(error.message);
//   }
// }

export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    host: "smtp.zoho.eu", // Use the correct SMTP server
    port: 465, // Port 465 for SSL or 587 for TLS
    secure: true, // True for SSL
    auth: {
      user: SMTP_EMAIL, // Your Zoho email address
      pass: SMTP_PASSWORD, // The application-specific password you generated
    },
  });

  try {
    const testResult = await transport.verify();
    console.log("SMTP Connection Verified:", testResult);
  } catch (error: any) {
    console.error("Error verifying SMTP connection:", error.message);
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log("Email Sent:", sendResult);
  } catch (error: any) {
    console.error("Error sending email:", error.message);
  }
}
