import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, timeline, description, referral } = body;

    console.log("Received form submission:", { name, email, company });

    // Create professional HTML email with inline CSS
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Project Inquiry</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 40px 20px;
            }
            .card {
              background: white;
              border-radius: 12px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
              padding: 40px;
              text-align: center;
            }
            .header h1 {
              color: white;
              margin: 0;
              font-size: 28px;
              font-weight: 700;
              letter-spacing: -0.5px;
            }
            .content {
              padding: 40px;
            }
            .section {
              margin-bottom: 30px;
            }
            .section-title {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 1px;
              color: #666;
              margin-bottom: 12px;
              font-weight: 600;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-size: 14px;
              color: #666;
              margin-bottom: 6px;
              font-weight: 500;
            }
            .field-value {
              font-size: 16px;
              color: #1a1a1a;
              font-weight: 500;
              padding: 12px;
              background: #f9f9f9;
              border-radius: 6px;
              border-left: 3px solid #1a1a1a;
            }
            .field-value.description {
              white-space: pre-wrap;
            }
            .footer {
              text-align: center;
              padding: 20px;
              background: #f9f9f9;
              color: #666;
              font-size: 14px;
            }
            .badge {
              display: inline-block;
              padding: 6px 12px;
              background: #1a1a1a;
              color: white;
              border-radius: 20px;
              font-size: 13px;
              font-weight: 500;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="header">
                <h1>New Project Inquiry</h1>
              </div>
              <div class="content">
                <div class="section">
                  <div class="section-title">Contact Information</div>
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
                    <div class="field-label">Company / Brand</div>
                    <div class="field-value">${company}</div>
                  </div>
                  ` : ''}
                </div>

                <div class="section">
                  <div class="section-title">Project Details</div>
                  <div class="field">
                    <div class="field-label">Project Type</div>
                    <div class="field-value">
                      <span class="badge">${projectType}</span>
                    </div>
                  </div>
                  <div class="field">
                    <div class="field-label">Budget Range</div>
                    <div class="field-value">${budget}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Timeline</div>
                    <div class="field-value">${timeline}</div>
                  </div>
                </div>

                <div class="section">
                  <div class="section-title">Project Description</div>
                  <div class="field">
                    <div class="field-value description">${description}</div>
                  </div>
                </div>

                ${referral ? `
                <div class="section">
                  <div class="section-title">Referral Source</div>
                  <div class="field">
                    <div class="field-value">${referral}</div>
                  </div>
                </div>
                ` : ''}
              </div>
              <div class="footer">
                This inquiry was submitted via the Digvian contact form
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    console.log("Attempting to send email via Resend...");
    console.log("API Key present:", !!process.env.RESEND_API_KEY);
    console.log("API Key length:", process.env.RESEND_API_KEY?.length);

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@digvian.com",
      subject: `New Project Inquiry from ${name}${company ? ` - ${company}` : ""}`,
      html: emailHtml,
      replyTo: email,
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      { error: "Failed to send email", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
