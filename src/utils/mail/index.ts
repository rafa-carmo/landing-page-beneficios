import nodemailer from 'nodemailer'
import path from 'path'

const host = process.env.MAIL_HOST
const port = Number(process.env.MAIL_PORT)
const user = process.env.MAIL_USER
const pass = process.env.MAIL_PASS
const defaultSender = process.env.MAIL_EMAIL

export const transporter = nodemailer.createTransport(
  {
    host,
    port,
    auth: {
      user,
      pass
    }
  },
  {
    from: defaultSender
  }
)

export const mailTemplateDirectory = path.join(process.cwd(), 'templates_mail')
