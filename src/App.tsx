import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { articles, authors, categories, site, tools } from './data/site'

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title

    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = description
  }, [title, description])
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <Link to="/" className="brand" aria-label="Inicio de Energía Hogar España">
            <span className="brand-mark">⚡</span>
            <span>{site.name}</span>
          </Link>
        </div>
        <nav className="main-nav" aria-label="Navegación principal">
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/articles">Artículos</NavLink>
          <NavLink to="/categories">Categorías</NavLink>
          <NavLink to="/tools">Herramientas</NavLink>
          <NavLink to="/about">Sobre nosotros</NavLink>
          <NavLink to="/contact">Contacto</NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div>
          <strong>{site.name}</strong>
          <p>{site.description}</p>
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacidad</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/terms">Términos</Link>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  usePageMeta('Energía Hogar España | Guías y calculadoras para ahorrar electricidad', site.description)

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Contenido SEO especializado</span>
          <h1>Guías útiles para ahorrar en la factura de la luz y mejorar tu hogar.</h1>
          <p>
            Publicamos contenido orientado a electricidad doméstica, consumo de electrodomésticos,
            tarifas, autoconsumo y climatización con enfoque práctico y original.
          </p>
          <div className="cta-row">
            <Link to="/articles" className="button primary">Ver artículos</Link>
            <Link to="/tools" className="button secondary">Abrir herramientas</Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="metrics">
            <div>
              <strong>4+</strong>
              <span>categorías</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>ideas de contenido</span>
            </div>
            <div>
              <strong>SEO</strong>
              <span>estructurado</span>
            </div>
          </div>
          <div className="mini-card">
            <small>Último foco editorial</small>
            <h3>Cuánto consume un frigorífico</h3>
            <p>Una guía con datos prácticos y calculadora para estimar el coste anual.</p>
          </div>
        </div>
      </section>

      <section className="content-grid section-spacing">
        <div className="section-header">
          <p className="eyebrow">Especialización</p>
          <h2>Cobertura editorial por nicho</h2>
        </div>
        <div className="card-grid">
          {categories.map((category) => (
            <Link key={category.slug} to={`/categories/${category.slug}`} className="feature-card">
              <span className="card-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <p>{category.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-grid section-spacing">
        <div className="section-header">
          <p className="eyebrow">Publicaciones</p>
          <h2>Artículos destacados</h2>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <article key={article.slug} className="article-card">
              <div className="article-badge">{article.category.replace(/-/g, ' ')}</div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="meta-row">
                <span>{article.readingTime}</span>
                <span>{new Date(article.publishedAt).toLocaleDateString('es-ES')}</span>
              </div>
              <Link to={`/articles/${article.slug}`} className="text-link">Leer artículo →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid section-spacing">
        <div className="section-header">
          <p className="eyebrow">Herramientas</p>
          <h2>Valor añadido para usuarios</h2>
        </div>
        <div className="tool-grid">
          {tools.map((tool) => (
            <Link key={tool.name} to={tool.href} className="feature-card compact">
              <h3>{tool.name}</h3>
              <p>{tool.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

function ArticlesPage() {
  usePageMeta('Artículos de energía para el hogar en España', 'Listado de artículos especializados en electricidad doméstica, ahorro, tarifa y autoconsumo para hogares españoles.')

  return (
    <section className="page-section">
      <div className="section-header">
        <p className="eyebrow">Biblioteca editorial</p>
        <h1>Artículos especializados</h1>
      </div>
      <div className="article-grid">
        {articles.map((article) => (
          <article key={article.slug} className="article-card large">
            <div className="article-badge">{article.category.replace(/-/g, ' ')}</div>
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <div className="meta-row">
              <span>{article.readingTime}</span>
              <span>{new Date(article.publishedAt).toLocaleDateString('es-ES')}</span>
            </div>
            <Link to={`/articles/${article.slug}`} className="text-link">Abrir artículo →</Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function CategoriesPage() {
  usePageMeta('Categorías de contenido energético | Eficiencia, tarifa y autoconsumo', 'Consulta las categorías principales del sitio para encontrar guías útiles sobre electricidad doméstica, ahorro, climatización y autoconsumo.')

  return (
    <section className="page-section">
      <div className="section-header">
        <p className="eyebrow">Nicho editorial</p>
        <h1>Categorías</h1>
      </div>
      <div className="card-grid">
        {categories.map((category) => (
          <Link key={category.slug} to={`/categories/${category.slug}`} className="feature-card">
            <span className="card-icon">{category.icon}</span>
            <h3>{category.name}</h3>
            <p>{category.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find((item) => item.slug === slug)

  useEffect(() => {
    if (!category) return
    document.title = category.metaTitle
  }, [category])

  if (!category) {
    return <NotFoundPage />
  }

  const categoryArticles = articles.filter((article) => article.category === category.slug)

  return (
    <section className="page-section">
      <div className="section-header">
        <p className="eyebrow">Categoría</p>
        <h1>{category.name}</h1>
      </div>
      <div className="article-grid">
        {categoryArticles.map((article) => (
          <article key={article.slug} className="article-card large">
            <h3>{article.title}</h3>
            <p>{article.excerpt}</p>
            <Link to={`/articles/${article.slug}`} className="text-link">Leer ahora →</Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function AuthorsPage() {
  usePageMeta('Autores de Energía Hogar España', 'Conoce la estructura editorial y la experiencia de quienes investigan, revisan y validan la información del sitio.')

  return (
    <section className="page-section">
      <div className="section-header">
        <p className="eyebrow">Equipo editorial</p>
        <h1>Autores</h1>
      </div>
      <div className="card-grid mono-grid">
        {authors.map((author) => (
          <div key={author.slug} className="feature-card compact author-card">
            <h3>{author.name}</h3>
            <span>{author.role}</span>
            <p>{author.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function ToolsPage() {
  usePageMeta('Calculadoras y herramientas para ahorrar energía', 'Herramientas prácticas para estimar consumo, comparar tarifas y evaluar decisiones energéticas del hogar.')
  const [power, setPower] = useState(120)
  const [hours, setHours] = useState(8)
  const [price, setPrice] = useState(0.24)

  const calculation = useMemo(() => {
    const dailyKwh = (power * hours) / 1000
    const monthlyKwh = dailyKwh * 30
    const annualKwh = dailyKwh * 365
    const dailyCost = dailyKwh * price
    const monthlyCost = monthlyKwh * price
    const annualCost = annualKwh * price

    return { dailyKwh, monthlyKwh, annualKwh, dailyCost, monthlyCost, annualCost }
  }, [power, hours, price])

  return (
    <section className="page-section">
      <div className="section-header">
        <p className="eyebrow">Herramientas</p>
        <h1>Calculadora de consumo eléctrico</h1>
      </div>

      <div className="tools-layout">
        <div className="tool-form">
          <label>
            Potencia (W)
            <input type="number" value={power} onChange={(event) => setPower(Number(event.target.value || 0))} />
          </label>
          <label>
            Horas de uso diarias
            <input type="number" value={hours} onChange={(event) => setHours(Number(event.target.value || 0))} />
          </label>
          <label>
            Precio del kWh (€)
            <input type="number" step="0.01" value={price} onChange={(event) => setPrice(Number(event.target.value || 0))} />
          </label>
        </div>

        <div className="results-box">
          <div>
            <span>Consumo diario</span>
            <strong>{calculation.dailyKwh.toFixed(2)} kWh</strong>
          </div>
          <div>
            <span>Consumo mensual</span>
            <strong>{calculation.monthlyKwh.toFixed(2)} kWh</strong>
          </div>
          <div>
            <span>Consumo anual</span>
            <strong>{calculation.annualKwh.toFixed(2)} kWh</strong>
          </div>
          <div>
            <span>Coste diario</span>
            <strong>{calculation.dailyCost.toFixed(2)} €</strong>
          </div>
          <div>
            <span>Coste mensual</span>
            <strong>{calculation.monthlyCost.toFixed(2)} €</strong>
          </div>
          <div>
            <span>Coste anual</span>
            <strong>{calculation.annualCost.toFixed(2)} €</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)
  const author = article ? authors.find((person) => person.slug === article.author) : undefined
  const category = article ? categories.find((item) => item.slug === article.category) : undefined

  usePageMeta(article ? article.metaTitle : 'Artículo no encontrado', article ? article.metaDescription : 'El artículo solicitado no existe.')

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <article className="article-page">
      <div className="article-header">
        <p className="eyebrow">{category?.name ?? 'Artículo'}</p>
        <h1>{article.title}</h1>
        <p className="excerpt">{article.excerpt}</p>
        <div className="meta-row">
          <span>Por {author?.name ?? 'Equipo editorial'}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString('es-ES')}</span>
          <span>{article.readingTime}</span>
        </div>
        <div className="keyword-row">
          {article.keywords.map((keyword) => (
            <span key={keyword} className="keyword-tag">{keyword}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="Imagen destacada del artículo">
        <img src={article.heroImage} alt={article.title} />
      </div>

      <div className="article-body">
        {article.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="sources-box">
        <h3>Fuentes utilizadas</h3>
        <ul>
          {article.sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function AboutPage() {
  usePageMeta('Sobre nosotros', 'Información sobre la misión editorial, transparencia y enfoque educativo del proyecto para energía doméstica en España.')

  return (
    <section className="page-section narrow">
      <div className="section-header">
        <p className="eyebrow">Misión</p>
        <h1>Sobre nosotros</h1>
      </div>
      <p>
        Energía Hogar España nace para ayudar a las personas a entender la energía del hogar con
        un enfoque útil, original y basado en fuentes confiables. Priorizamos explicaciones claras,
        comparativas prácticas y herramientas que ayuden a tomar decisiones con menos ruido.
      </p>
    </section>
  )
}

function ContactPage() {
  usePageMeta('Contacto', 'Ponte en contacto con el equipo editorial para sugerencias, colaboraciones o dudas.')

  return (
    <section className="page-section narrow">
      <div className="section-header">
        <p className="eyebrow">Contacto</p>
        <h1>Hablemos</h1>
      </div>
      <p>Email: hola@energiahogarespana.com</p>
      <p>Telegram: @energiahogaradmin</p>
    </section>
  )
}

function PrivacyPage() {
  usePageMeta('Política de privacidad', 'Información sobre tratamiento de datos y privacidad del sitio web.')
  return <LegalPage title="Política de privacidad" text="Este sitio se compromete a recopilar únicamente datos necesarios para mejorar la experiencia del usuario y a no publicar secretos ni información sensible en público." />
}

function CookiesPage() {
  usePageMeta('Política de cookies', 'Información sobre el uso de cookies y tecnologías de seguimiento.')
  return <LegalPage title="Política de cookies" text="Usamos cookies técnicas para mejorar la experiencia de navegación, así como analíticas si el usuario las acepta. La configuración puede cambiarse en el navegador." />
}

function TermsPage() {
  usePageMeta('Términos y condiciones', 'Condiciones de uso del contenido y de la propiedad intelectual del sitio.')
  return <LegalPage title="Términos y condiciones" text="Todo el contenido editorial debe usarse con criterio de sentido común y no debe interpretarse como asesoramiento financiero ni profesional específico." />
}

function LegalPage({ title, text }: { title: string; text: string }) {
  return (
    <section className="page-section narrow">
      <div className="section-header">
        <p className="eyebrow">Legal</p>
        <h1>{title}</h1>
      </div>
      <p>{text}</p>
    </section>
  )
}

function NotFoundPage() {
  usePageMeta('Página no encontrada', 'La página que buscas no existe en esta web.')

  return (
    <section className="page-section narrow">
      <div className="section-header">
        <p className="eyebrow">Error 404</p>
        <h1>Página no encontrada</h1>
      </div>
      <p>La ruta indicada no existe o aún no ha sido publicada.</p>
      <Link to="/" className="button primary">Volver al inicio</Link>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
