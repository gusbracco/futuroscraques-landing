import { motion } from 'framer-motion'

const ways = [
  {
    icon: '💰',
    title: 'Doação Direta',
    desc: 'Contribua com qualquer valor via PIX, transferência bancária ou boleto. Cada centavo é investido diretamente nos nossos projetos sociais.',
  },
  {
    icon: '🏢',
    title: 'Parceria Corporativa',
    desc: 'Sua empresa pode se tornar parceira oficial do Instituto, com visibilidade de marca, relatórios de impacto e benefícios fiscais via Lei de Incentivo ao Esporte.',
  },
  {
    icon: '📋',
    title: 'Lei de Incentivo ao Esporte',
    desc: 'Pessoas jurídicas podem destinar até 2% do IR e pessoas físicas até 7% para projetos aprovados pelo Ministério do Esporte.',
  },
  {
    icon: '🤝',
    title: 'Voluntariado',
    desc: 'Doe seu tempo e talento. Precisamos de profissionais de diversas áreas para apoiar nossos programas e eventos.',
  },
  {
    icon: '📦',
    title: 'Doação de Materiais',
    desc: 'Equipamentos esportivos, materiais escolares, uniformes e outros itens que fazem diferença no dia a dia dos nossos jovens.',
  },
  {
    icon: '📣',
    title: 'Divulgação',
    desc: 'Compartilhe nossa causa nas redes sociais, indique para amigos e empresas. A visibilidade também transforma vidas.',
  },
]

export default function ComoApoiar() {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <motion.div
          className="page-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="page-pretitle">Faça Parte</span>
          <h1>Como Apoiar</h1>
          <p>
            Existem diversas formas de contribuir com o Instituto Futuros Craques.
            Escolha a que mais combina com você e ajude a transformar a vida de
            milhares de jovens através do esporte e da educação.
          </p>
        </motion.div>
      </section>

      <section className="section">
        <div className="support-grid">
          {ways.map((w, i) => (
            <motion.div
              key={w.title}
              className="support-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
            >
              <span className="support-icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <motion.div
          className="pix-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Doe via PIX</h2>
          <p>Chave PIX (CNPJ):</p>
          <div className="pix-key">contato@futuroscraques.org</div>
          <p className="pix-note">Instituto Futuros Craques — CNPJ: consulte no site oficial</p>
        </motion.div>
      </section>
    </div>
  )
}
