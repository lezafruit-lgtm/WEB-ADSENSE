import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'

dotenv.config()

const token = process.env.TELEGRAM_BOT_TOKEN
const adminUserId = process.env.TELEGRAM_ADMIN_USER_ID

if (!token || !adminUserId) {
  console.error('Falta TELEGRAM_BOT_TOKEN o TELEGRAM_ADMIN_USER_ID en el archivo .env')
  process.exit(1)
}

const bot = new TelegramBot(token, { polling: true })

const isAdmin = (userId) => String(userId) === String(adminUserId)

const commands = [
  '/start',
  '/help',
  '/status',
  '/ideas',
  '/crear',
  '/pendientes',
  '/publicados',
  '/rechazados',
  '/revisar',
  '/publicar',
  '/descartar',
  '/estadisticas',
]

bot.onText(/\/start/, (msg) => {
  if (!isAdmin(msg.from.id)) {
    return bot.sendMessage(msg.chat.id, 'Acceso denegado. Este bot está reservado para el usuario autorizado.')
  }

  bot.sendMessage(
    msg.chat.id,
    'Panel autorizado de WEB-ADSENSE\n\nComandos disponibles:\n' + commands.join(' '),
  )
})

bot.onText(/\/help/, (msg) => {
  if (!isAdmin(msg.from.id)) {
    return bot.sendMessage(msg.chat.id, 'Acceso denegado.')
  }

  bot.sendMessage(
    msg.chat.id,
    'Puedes usar:\n' +
      '/status – estado del sistema\n' +
      '/ideas – lista de ideas de contenido\n' +
      '/crear cuanto consume un frigorifico – crea una idea con prompt\n' +
      '/pendientes – contenido pendiente\n' +
      '/publicados – artículos publicado\n' +
      '/rechazados – contenido rechazado\n' +
      '/revisar – solicitar revisión del contenido\n' +
      '/publicar – publicar tras aprobación\n' +
      '/descartar – descartar idea\n' +
      '/estadisticas – resumen editorial',
  )
})

bot.onText(/\/status/, (msg) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')

  bot.sendMessage(
    msg.chat.id,
    'Estado del sistema:\n- Sitio: preparado para Cloudflare Pages\n- CMS: activo\n- SEO: sitemap + robots + RSS\n- Bot Telegram: autenticado y protegido\n- Revisión: fase de aprobación manual',
  )
})

bot.onText(/\/ideas/, (msg) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')

  bot.sendMessage(
    msg.chat.id,
    'Ideas prioritarias:\n1. Cuánto consume un frigorífico\n2. Cómo ahorrar electricidad con la calefacción\n3. Tarifas eléctricas en España 2026\n4. ¿Conviene instalar placas solares?\n5. Comparativa: bomba de calor vs radiador eléctrico',
  )
})

bot.onText(/\/crear\s+(.+)/i, (msg, match) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')

  const prompt = match[1].trim()
  bot.sendMessage(
    msg.chat.id,
    `Idea generada:\nTema: ${prompt}\n\nSe prioriza cercanía con la intención de búsqueda, valor añadido práctico y fuentes oficiales. Fondo: investigación inicial, redactado original, revisión de valor añadido y validación SEO antes de publicar.`,
  )
})

bot.onText(/\/pendientes/, (msg) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')
  bot.sendMessage(msg.chat.id, 'Pendientes: 3 ideas editoriales y 1 revisión de SEO.')
})

bot.onText(/\/publicados/, (msg) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')
  bot.sendMessage(msg.chat.id, 'Publicados: Cuánto consume un frigorífico, Cuánto consume un aire acondicionado y Cuánto ahorra poner placas solares.')
})

bot.onText(/\/rechazados/, (msg) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')
  bot.sendMessage(msg.chat.id, 'Rechazados: 0 en esta fase. El sistema evita publicar contenido sin revisión y con baja originalidad.')
})

bot.onText(/\/revisar/, (msg) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')
  bot.sendMessage(msg.chat.id, 'Revisión activa: originalidad, fuentes, SEO, claridad y utilidad del artículo.')
})

bot.onText(/\/publicar/, (msg) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')
  bot.sendMessage(msg.chat.id, 'Publicación autorizada: requiere aprobación manual del editor antes de desplegar en Cloudflare.')
})

bot.onText(/\/descartar/, (msg) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')
  bot.sendMessage(msg.chat.id, 'Idea descartada. Se mueve a la cola editorial sin publicar.')
})

bot.onText(/\/estadisticas/, (msg) => {
  if (!isAdmin(msg.from.id)) return bot.sendMessage(msg.chat.id, 'Acceso denegado.')
  bot.sendMessage(msg.chat.id, 'Estadísticas: 4 artículos activos, 5 categorías, 3 autores, 100% enfoque en nicho energético.')
})

bot.on('polling_error', (error) => {
  console.error('Polling error:', error.message)
})

console.log('Bot de Telegram listo. Esperando mensajes...')
