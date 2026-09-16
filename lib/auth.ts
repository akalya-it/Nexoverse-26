import { SignJWT, jwtVerify } from "jose"

const SESSION_DURATION_SECONDS = 60 * 60 * 12

type OrganiserSession = {
  role: "organiser"
}

function getSecret() {
  const secret = process.env.SESSION_SECRET_3 || process.env.SESSION_SECRET
  if (!secret) {
    throw new Error("SESSION_SECRET is not configured on the server.")
  }

  return new TextEncoder().encode(secret)
}

export async function createSession(payload: OrganiserSession) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DURATION_SECONDS}s`)
    .sign(getSecret())
}

export async function verifySession(token: string | undefined) {
  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, getSecret())
    if (payload.role !== "organiser") return null

    return { role: "organiser" as const }
  } catch {
    return null
  }
}
