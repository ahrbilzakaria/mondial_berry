import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { fullName, email, telephone, message } = await req.json();

    if (!fullName || !email || !telephone || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de contact de ${fullName}`,
      html: `<div style="font-family: Arial, sans-serif; padding: 30px; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #941936 0%, #c41e3a 100%); border-radius: 12px; color: white; box-shadow: 0 8px 20px rgba(148, 25, 54, 0.3);">
      <h2 style="color: white; margin-bottom: 20px;">📩 Nouveau message de contact</h2>
      <p style="margin: 10px 0;"><strong>Nom :</strong> ${fullName}</p>
      <p style="margin: 10px 0;"><strong>Email :</strong> ${email}</p>
      <p style="margin: 10px 0;"><strong>Téléphone :</strong> ${telephone}</p>
      <p style="margin: 10px 0;"><strong>Message :</strong></p>
      <div style="background-color: rgba(255, 255, 255, 0.1); padding: 15px; border-left: 4px solid white; border-radius: 4px; margin-top: 10px; backdrop-filter: blur(10px);">
      ${message.replace(/\n/g, "<br>")}
      </div>
      </div>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur d'envoi d'email:", error);
    return NextResponse.json(
      { message: "Échec de l'envoi de l'email", error },
      { status: 500 }
    );
  }
}
