const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

// Function to send email
const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await resend.emails.send({
            from: 'Evolve With Rahul <support@evolvewithrahul.com>',
            to,
            subject,
            text,
            html,
        });
        console.log('Message sent:', info);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};


async function sendEmailToInstructor(formData) {
    const to = "yyadavrrahul@gmail.com"
    const subject = " New Yoga Registration";
    const text = `
        New Yoga Registration Received

        A new user has registered on Evolve With Rahul website.

        User Details:
          --------------------------------
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phoneNumber}
        Selected Plan: ${formData.plan}
        Message: ${formData.message}

        Please contact the user as soon as possible.

        Evolve With Rahul System
        `;
    const html = `
        <div style="font-family: Arial, sans-serif; background:#f4f8f7; padding:30px;">
  
        <div style="max-width:650px; margin:auto; background:white; border-radius:12px; padding:30px;">
    
        <h1 style="color:#2c7a7b; text-align:center;">
            Evolve With Rahul
        </h1>

        <h2 style="color:#333;">
            New Registration Alert 
        </h2>

        <p style="font-size:16px; color:#555;">
            A new user has registered on your yoga website.
        </p>

        <div style="background:#f0fffa; padding:20px; border-radius:10px; margin-top:20px;">
      
        <h3 style="margin-top:0; color:#2c7a7b;">User Details</h3>
      
        <p><b>Name:</b> ${formData.fullName}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Phone:</b> ${formData.phoneNumber}</p>
        <p><b>Selected Plan:</b> ${formData.plan}</p>
        <p><b>Message:</b> ${formData.message}</p>
      
      </div>

    <div style="margin-top:25px; padding:15px; background:#fff7ed; border-radius:8px;">
      <p style="margin:0; color:#9a3412;">
         Please contact the user soon to confirm session details.
      </p>
    </div>

    <hr style="margin:30px 0;"/>

    <p style="text-align:center; color:#777; font-size:14px;">
      This is an automated email from Evolve With Rahul Website
    </p>

  </div>
</div>
`;
    await sendEmail(to, subject, text, html)
}

async function sendWelcomeEmailToUser(formData) {
    const to = formData.email;
    const subject = "Welcome to Evolve With Rahul 🧘";
    const text = `
Hi ${formData.fullName},

So glad you've signed up — welcome! Here's a quick rundown of what to expect before your first class.

Before you arrive:
If you have any injuries or medical conditions, please let me know. I can help you modify postures so you can practice safely.

The most important rule:
Yoga should never hurt. If something causes pain — stop and ease out of it. We'll always find a version that works for your body.

Arriving & leaving:
Please try to arrive a few minutes early and stay until the end of class. If you need to come late or leave early, just give me a heads-up beforehand.

What to wear:
Anything you'd comfortably exercise in. Bring a light layer — it can get cool at the start or end of class.

A few reassurances:
- Every body is different, and I'll offer modifications so the practice works for you.
- Nobody in the room is watching you. I'm the only one paying attention, and only to help.
- Props (blocks, straps, blankets) are your friends — not a sign of limitation.
- Questions are always welcome, anytime during class.
- I don't provide hands-on adjustments during the beginner course, so you'll never be touched without your consent.

What to Bring:
- Yoga Mat
- Water Bottle
- Comfortable Clothes
- Grip Socks (optional)
- Small Towel
- Phone on Silent

Take a breath — you're in the right place. See you soon!

Rahul
Yoga Instructor · Evolve With Rahul
    `;

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body style="margin:0; padding:0; background:#f4f8f7; font-family: Arial, sans-serif;">
  <div style="max-width:600px; margin:40px auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.08);">

    <div style="background:#2c7a7b; padding:28px 30px; text-align:center;">
      <h1 style="margin:0; color:#ffffff; font-size:22px; font-weight:600;">Evolve With Rahul</h1>
      <p style="margin:6px 0 0; color:#b2dfdf; font-size:13px;">Welcome to the journey 🧘</p>
    </div>

    <div style="padding:32px 30px;">

      <p style="font-size:16px; color:#333; margin:0 0 20px;">Hi <strong>${formData.fullName}</strong>,</p>

      <p style="font-size:15px; color:#444; line-height:1.7; margin:0 0 28px;">
        So glad you've signed up — welcome! Here's a quick rundown of what to expect before your first class.
      </p>

      <div style="margin-bottom:22px;">
        <p style="margin:0 0 8px; font-size:15px; font-weight:700; color:#2c7a7b;">🩺 Before you arrive</p>
        <p style="margin:0; font-size:14px; color:#555; line-height:1.7;">If you have any injuries or medical conditions, please let me know. I'm not a medical provider, but I can help you modify postures so you can practice safely.</p>
      </div>

      <div style="margin-bottom:22px; padding:16px 18px; background:#fff7ed; border-left:4px solid #f59e0b; border-radius:0 8px 8px 0;">
        <p style="margin:0 0 8px; font-size:15px; font-weight:700; color:#92400e;">⚠️ The most important rule</p>
        <p style="margin:0; font-size:14px; color:#555; line-height:1.7;">Yoga should never hurt. If something causes pain — not just challenge or discomfort, but actual pain — stop and ease out of it. We'll always find a version that works for your body.</p>
      </div>

      <div style="margin-bottom:22px;">
        <p style="margin:0 0 8px; font-size:15px; font-weight:700; color:#2c7a7b;">🕐 Arriving & leaving</p>
        <p style="margin:0; font-size:14px; color:#555; line-height:1.7;">Please try to arrive a few minutes early and stay until the end of class. If you need to come late or leave early, just give me a heads-up beforehand.</p>
      </div>

      <div style="margin-bottom:22px;">
        <p style="margin:0 0 8px; font-size:15px; font-weight:700; color:#2c7a7b;">🎽 What to wear</p>
        <p style="margin:0; font-size:14px; color:#555; line-height:1.7;">Anything you'd comfortably exercise in. No special yoga clothes needed. Bring a light layer — it can get cool at the start or end of class.</p>
      </div>

      <div style="margin-bottom:28px; background:#f0fffa; border-radius:10px; padding:20px;">
        <p style="margin:0 0 14px; font-size:15px; font-weight:700; color:#2c7a7b;">💬 A few reassurances</p>
        <p style="margin:0 0 10px; font-size:14px; color:#444; line-height:1.7;">— Every body is different, and I'll offer modifications so the practice works for <em>you</em>.</p>
        <p style="margin:0 0 10px; font-size:14px; color:#444; line-height:1.7;">— Nobody in the room is watching you. I'm the only one paying attention, and only to help.</p>
        <p style="margin:0 0 10px; font-size:14px; color:#444; line-height:1.7;">— Props (blocks, straps, blankets) are your friends — not a sign of limitation.</p>
        <p style="margin:0 0 10px; font-size:14px; color:#444; line-height:1.7;">— Questions are always welcome, anytime during class.</p>
        <p style="margin:0; font-size:14px; color:#444; line-height:1.7;">— I don't provide hands-on adjustments during the beginner course, so you'll never be touched without your consent.</p>
      </div>

      <p style="font-size:15px; color:#444; line-height:1.7; margin:0 0 28px;">Take a breath — you're in the right place. See you soon! 🙏</p>

      <div style="margin-bottom:32px; background:#f0fffa; border-radius:10px; padding:20px;">
        <p style="margin:0 0 14px; font-size:15px; font-weight:700; color:#2c7a7b;">🎒 What to Bring</p>
        <p style="margin:0 0 10px; font-size:14px; color:#444;">🧘 <strong>Yoga Mat</strong> — Your own mat for a comfortable practice</p>
        <p style="margin:0 0 10px; font-size:14px; color:#444;">💧 <strong>Water Bottle</strong> — Stay hydrated throughout the session</p>
        <p style="margin:0 0 10px; font-size:14px; color:#444;">🎽 <strong>Comfortable Clothes</strong> — Breathable & stretchable clothing</p>
        <p style="margin:0 0 10px; font-size:14px; color:#444;">🧦 <strong>Grip Socks (optional)</strong> — Helpful if you prefer not to be barefoot</p>
        <p style="margin:0 0 10px; font-size:14px; color:#444;">🧴 <strong>Small Towel</strong> — To wipe off sweat during class</p>
        <p style="margin:0; font-size:14px; color:#444;">📵 <strong>Phone on Silent</strong> — For a peaceful, distraction-free experience</p>
      </div>

      <div style="border-top:1px solid #eee; padding-top:24px;">
        <div style="display:inline-block; width:52px; height:52px; background:#2c7a7b; border-radius:50%; text-align:center; line-height:52px; font-size:22px; color:#fff; vertical-align:middle;">🧘</div>
        <div style="display:inline-block; vertical-align:middle; margin-left:14px;">
          <p style="margin:0; font-size:16px; font-weight:700; color:#1a1a1a;">Rahul</p>
          <p style="margin:3px 0 0; font-size:13px; color:#2c7a7b;">Yoga Instructor · Evolve With Rahul</p>
          <p style="margin:3px 0 0; font-size:12px; color:#999;"></p>
        </div>
      </div>

    </div>

    <div style="border-top:1px solid #eee; padding:16px 30px; text-align:center;">
      <p style="margin:0; font-size:12px; color:#999;">This is an automated email from <strong>Evolve With Rahul</strong> Website</p>
    </div>

  </div>
</body>
</html>
    `;

    await sendEmail(to, subject, text, html);
}

module.exports = { sendEmailToInstructor, sendWelcomeEmailToUser };