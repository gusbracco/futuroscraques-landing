import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = [
  {
    id: 'docs',
    label: 'Documentos Institucionais',
    icon: '📋',
    items: [
      { label: 'Estatuto Social', url: '#' },
      { label: 'Ata de Eleição da Diretoria', url: '#' },
      { label: 'CNPJ', url: '#' },
      { label: 'Certidão Negativa Federal', url: '#' },
      { label: 'Certidão Negativa Estadual', url: '#' },
      { label: 'Certidão Negativa Municipal', url: '#' },
      { label: 'Certidão Negativa FGTS', url: '#' },
      { label: 'Certidão Negativa INSS', url: '#' },
      { label: 'Certificado de Registro de Entidade (COMAS)', url: '#' },
      { label: 'Declaração de Utilidade Pública', url: '#' },
    ],
  },
  {
    id: 'relatorios',
    label: 'Relatórios de Atividades',
    icon: '📊',
    items: [
      { label: 'Relatório de Atividades 2024', url: '#' },
      { label: 'Relatório de Atividades 2023', url: '#' },
      { label: 'Relatório de Atividades 2022', url: '#' },
      { label: 'Relatório de Atividades 2021', url: '#' },
      { label: 'Relatório de Atividades 2020', url: '#' },
    ],
  },
  {
    id: 'contabil',
    label: 'Demonstrações Contábeis',
    icon: '💰',
    items: [
      { label: 'Contábeis 2025', url: '#' },
      { label: 'Contábeis 2024', url: '#' },
      { label: 'Contábeis 2023', url: '#' },
      { label: 'Contábeis 2022', url: '#' },
      { label: 'Contábeis 2021', url: '#' },
      { label: 'Contábeis 2020', url: '#' },
      { label: 'Contábeis 2019', url: '#' },
      { label: 'Contábeis 2017-2018', url: '#' },
    ],
  },
  {
    id: 'editais',
    label: 'Editais',
    icon: '📢',
    items: [
      { label: 'Editais de Contratação', url: '#' },
      { label: 'Editais de Parcerias', url: '#' },
      { label: 'Resultados de Editais', url: '#' },
    ],
  },
  {
    id: 'certificados',
    label: 'Certificados',
    icon: '🏅',
    items: [
      { label: 'Certificados e Premiações', url: '#' },
    ],
  },
  {
    id: 'planos',
    label: 'Planos Estratégicos',
    icon: '🎯',
    items: [
      { label: 'Plano Estratégico 2026–2030', url: '#' },
      { label: 'Plano Estratégico 2022–2026', url: '#' },
      { label: 'Plano Estratégico 2018–2022', url: '#' },
      { label: 'Plano Estratégico 2005–2007', url: '#' },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Transparencia() {
  const [activeTab, setActiveTab] = useState('docs')
  const activeData = tabs.find((t) => t.id === activeTab)

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="page-pretitle">Prestação de Contas</span>
          <h1>Transparência</h1>
          <p>
            Acreditamos que a transparência é fundamental para a confiança.
            Aqui você encontra todos os documentos institucionais, demonstrações
            contábeis, relatórios de atividades, editais e certificados do Instituto Futuros Craques.
          </p>
        </motion.div>
      </section>

      <section className="section transparency-section">
        <div className="transparency-tabs">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`transparency-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="transparency-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <h2>{activeData.icon} {activeData.label}</h2>
            <div className="doc-grid">
              {activeData.items.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.url}
                  className="doc-card"
                  target="_blank"
                  rel="noreferrer"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
                >
                  <span className="doc-icon">📄</span>
                  <span className="doc-label">{item.label}</span>
                  <span className="doc-action">Abrir ↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  )
}
