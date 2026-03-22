import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'contato@futuroscraques.org', href: 'mailto:contato@futuroscraques.org' },
  { icon: '📱', label: 'Telefone', value: '(11) 2532-5697', href: 'tel:+551125325697' },
  { icon: '📍', label: 'Localização', value: 'São Paulo, SP', href: '#' },
]

export default function Contato() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formsubmit.co/ajax/contato@futuroscraques.org', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          assunto: form.assunto,
          mensagem: form.mensagem,
          _subject: `[Site IFC] ${form.assunto || 'Nova mensagem'} — ${form.nome}`,
          _template: 'table',
        }),
      })
      const data = await res.json()
      if (data.success === 'true' || data.success === true) {
        setStatus('success')
        setForm({ nome: '', email: '', assunto: '', mensagem: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="page-pretitle">Fale Conosco</span>
          <h1>Contato</h1>
          <p>
            Entre em contato com o Instituto Futuros Craques. Estamos sempre abertos
            para parcerias, colaborações e novas oportunidades de transformação social.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <div className="contact-layout">
          <motion.div
            className="contact-info-cards"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                className="contact-info-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
              >
                <span className="contact-icon">{c.icon}</span>
                <div>
                  <div className="contact-label">{c.label}</div>
                  <div className="contact-value">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="contact-social">
              <h3>Redes Sociais</h3>
              <div className="social-links">
                <a href="https://www.facebook.com/futuroscraquesoficial" target="_blank" rel="noreferrer">📘 Facebook</a>
                <a href="https://www.instagram.com/institutofuturoscraques/" target="_blank" rel="noreferrer">📷 Instagram</a>
                <a href="https://www.youtube.com/@institutofuturoscraques" target="_blank" rel="noreferrer">🎬 YouTube</a>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <h2>Envie sua Mensagem</h2>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    textAlign: 'center', padding: '3rem 2rem',
                    background: 'rgba(34,197,94,0.08)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: '16px',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ color: '#16a34a', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>
                    Mensagem enviada!
                  </h3>
                  <p style={{ color: '#555', marginBottom: '1.5rem' }}>
                    Recebemos seu contato e responderemos em breve para <strong>{form.email || 'seu email'}</strong>.
                  </p>
                  <button
                    type="button"
                    className="cta-btn"
                    onClick={() => setStatus('idle')}
                    style={{ margin: '0 auto' }}
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="form-group">
                    <input
                      type="text" name="nome" placeholder="Seu Nome"
                      value={form.nome} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email" name="email" placeholder="Seu Email"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text" name="assunto" placeholder="Assunto"
                      value={form.assunto} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="mensagem" placeholder="Sua Mensagem" rows="6"
                      value={form.mensagem} onChange={handleChange} required
                    />
                  </div>

                  {status === 'error' && (
                    <p style={{
                      color: '#ef4444', fontSize: '0.88rem',
                      background: 'rgba(239,68,68,0.08)',
                      border: '1px solid rgba(239,68,68,0.2)',
                      borderRadius: '8px', padding: '0.75rem 1rem',
                      marginBottom: '1rem',
                    }}>
                      ⚠️ Erro ao enviar. Tente novamente ou escreva diretamente para contato@futuroscraques.org
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    className="cta-btn"
                    style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}
                    whileHover={status !== 'loading' ? { y: -3 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.97 } : {}}
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        Enviando...
                      </span>
                    ) : 'Enviar Mensagem'}
                  </motion.button>

                  <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </section>
    </div>
  )
}
