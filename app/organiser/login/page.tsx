"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function OrganiserLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/organiser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.success) {
        setError(result?.error || "Unable to sign in. Please try again.")
        return
      }

      router.replace("/organiser/dashboard")
      router.refresh()
    } catch {
      setError("Unable to reach the organiser service. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="auth-shell">
      <section className="auth-card" aria-labelledby="organiser-title">
        <p className="eyebrow">NEXOVERSE&apos;26 / CONTROL</p>
        <h1 id="organiser-title">Organiser Access</h1>
        <p className="auth-intro">Sign in to manage live rounds, participants, and results.</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="username" required value={email} onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} />
          {error ? <p className="form-error" role="alert">{error}</p> : null}
          <button className="button button-primary submit-button" type="submit" disabled={isLoading}>
            {isLoading ? "Authenticating..." : "Login"}
          </button>
        </form>
        <a className="back-link" href="/">Return to home</a>
      </section>
    </main>
  )
}
