import { NextResponse } from "next/server";
import { Resend } from "resend";


export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { email, phone, message } = await request.json();

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email и описание задачи обязательны" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "IntDoc <onboarding@resend.dev>", // временный sender
      to: ["integramma.tech@gmail.com"], // куда отправлять
      replyTo: email,
      subject: `IntDoc AI: Новая заявка от ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            Новая заявка с сайта IntDoc AI
          </h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 0 0 10px;"><strong>Телефон:</strong> ${phone}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Описание задачи:</h3>
            <div style="background: #fff; border: 1px solid #e5e7eb; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
          <p style="color: #6b7280; font-size: 12px;">
            Это письмо отправлено автоматически с формы на сайте intdoc.ai
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Ошибка отправки письма" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Ошибка сервера" },
      { status: 500 }
    );
  }
}