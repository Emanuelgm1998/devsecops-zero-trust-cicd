import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'

const app = express()

app.disable('x-powered-by')
app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors())
app.use(compression())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/live', (_req, res) => res.status(200).send('OK'))
app.get('/ready', (_req, res) => res.json({ ok: true, uptime: process.uptime(), ts: Date.now() }))
app.get('/', (_req, res) => res.json({ name: 'devsecops-zero-trust-cicd', status: 'running' }))
app.use((req, res) => res.status(404).json({ error: 'not found', path: req.path }))
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => { console.error('[error]', err); res.status(500).json({ error: 'internal error' }) })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`[server] http://localhost:${PORT}`))
