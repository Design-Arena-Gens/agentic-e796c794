export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <span className="badge">FR</span>
        <h1>Salut</h1>
        <p>Bienvenue sur notre petite d?mo d?ploy?e sur Vercel.</p>
      </header>
      <section className="content">
        <a className="button" href="https://nextjs.org" target="_blank" rel="noreferrer">D?couvrir Next.js</a>
      </section>
      <footer className="footer">Made with ?? ? {new Date().getFullYear()}</footer>
    </main>
  );
}
