export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">NEXOVERSE&apos;26</p>
        <h1 id="page-title">Logo Hunt</h1>
        <p className="intro">
          A live, fast-paced logo quiz for teams and participants. Create a game,
          join a room, and race to identify the answer.
        </p>
        <div className="actions">
          <a className="button button-primary" href="/organiser">Organiser login</a>
          <a className="button button-secondary" href="#participant">Join a game</a>
        </div>
      </section>
      <section className="cards" aria-label="Game features">
        <article className="card"><span>01</span><h2>Live rounds</h2><p>Keep every question and score in sync without refreshing.</p></article>
        <article className="card"><span>02</span><h2>Fast buzzer</h2><p>Atomic buzzer priority makes the first response count.</p></article>
        <article className="card"><span>03</span><h2>Team play</h2><p>Organisers judge answers while participants compete in real time.</p></article>
      </section>
    </main>
  )
}
