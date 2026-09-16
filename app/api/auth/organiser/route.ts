import { NextResponse } from "next/server"
import { createSession } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = typeof body?.email === "string" ? body.email.trim() : ""
    const password = typeof body?.password === "string" ? body.password : ""
    const organiserEmail = process.env.ORGANISER_EMAIL_3 || process.env.ORGANISER_EMAIL
    const organiserPassword = process.env.ORGANISER_PASSWORD_3 || process.env.ORGANISER_PASSWORD

    if (!organiserEmail || !organiserPassword || !(process.env.SESSION_SECRET_3 || process.env.SESSION_SECRET)) {
      return NextResponse.json(
        { success: false, error: "Organiser login is not configured on the server." },
        { status: 500 },
      )
    }

    if (email !== organiserEmail || password !== organiserPassword) {
      return NextResponse.json(
        { success: false, error: "Incorrect email or password." },
        { status: 401 },
      )
    }

    const token = await createSession({ role: "organiser" })
    const response = NextResponse.json({ success: true, message: "Login successful." })

    response.cookies.set({
      name: "nx_session",
      value: token,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 12,
    })

    return response
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid login request." },
      { status: 400 },
    )
  }
}
