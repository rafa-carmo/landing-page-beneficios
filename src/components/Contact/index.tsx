import axios from 'axios'
import {
  Buildings,
  DeviceMobile,
  EnvelopeSimple,
  MapPinLine,
  PaperPlaneTilt
} from 'phosphor-react'
import { useState } from 'react'

import { FieldErrors } from '../../utils/validations'
import { sendMessageValidate } from '../../utils/validations/messageValidate'
import { Input } from '../Input'

const icons = {
  celular: <DeviceMobile size={24} />,
  email: <EnvelopeSimple size={24} />,
  empresa: <Buildings size={24} />,
  map: <MapPinLine size={24} />
}
type Icons = keyof typeof icons
interface Contact {
  value: string
  icon: Icons
}
export interface ContactProps {
  description?: string
  contacts: Contact[]
}

export function Contact({ description, contacts }: ContactProps) {
  const [mailData, setMailData] = useState({
    name: '',
    telephone: '',
    email: '',
    subject: '',
    message: ''
  })
  const [sendingMessage, setSendingMessage] = useState(false)
  const [successSendMail, setSuccessSendEmail] = useState(false)
  const [errorOnSend, setErrorOnSend] = useState(false)

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>()

  async function handleSendMessate(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    setSendingMessage(true)
    const errors = sendMessageValidate(mailData)
    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setSendingMessage(false)
      return
    }
    await axios
      .post('/api/mailSend', mailData)
      .then(() => setSuccessSendEmail(true))
      .catch(() => {
        setSendingMessage(false)
        setErrorOnSend(true)
      })
    // await fetch('/api/mailSend', {
    //   method: 'POST',
    //   body: mailData
    // })

    setSendingMessage(false)
  }

  return (
    <div className="container mx-auto relative mb-14" id="contact">
      <h3 className="font-bold text-4xl text-center md:text-left">
        Entre em contato:
      </h3>
      <div className="px-5 xl:pl-5 mt-10 pt-10">
        <p className="xl:max-w-sm mb-10 text-sm line-clamp-3 overflow-hidden text-center xl:text-left">
          {description}
        </p>
        <div className="flex xl:flex-col gap-5 flex-wrap justify-center">
          {contacts.map((contact) => (
            <div key={contact.value} className="flex items-center gap-5">
              <div className="text-primary-500">{icons[contact.icon]}</div>
              {contact.value}
            </div>
          ))}
        </div>
      </div>
      <div className="relative xl:absolute right-0 top-8 xl:shadow-2xl mb-8 xl:mb-0 p-4 xl:p-14 bg-white">
        <form className="flex flex-col w-full xl:w-[668px]">
          <span className="font-semibold text-lg tracking-wide mb-10">
            Envie uma mensagem.{' '}
            {errorOnSend && (
              <p className="text-red-500">
                Desculpe, houve algum error, tente novamente em alguns instantes
              </p>
            )}
          </span>
          <div className="w-full flex flex-col gap-5">
            <Input
              type="text"
              name="name"
              id="name"
              mask="name"
              valueInput={mailData.name}
              setValue={(value) =>
                setMailData((state) => ({ ...state, name: value || '' }))
              }
              className={`w-full py-2 px-4 outline-0 border ${
                fieldErrors?.name ? 'border-red-500' : 'border-primary-500'
              } shadow rounded`}
              placeholder="Nome"
              error={fieldErrors?.name}
              disabled={sendingMessage ? sendingMessage : successSendMail}
            />
            <Input
              type="text"
              name="email"
              id="email"
              valueInput={mailData.email}
              setValue={(value) =>
                setMailData((state) => ({ ...state, email: value || '' }))
              }
              className={`w-full py-2 px-4 outline-0 border ${
                fieldErrors?.email ? 'border-red-500' : 'border-primary-500'
              } shadow rounded`}
              placeholder="E-mail"
              error={fieldErrors?.email}
              disabled={sendingMessage ? sendingMessage : successSendMail}
            />
            <Input
              type="text"
              name="telephone"
              id="telephone"
              mask="telephone"
              valueInput={mailData.telephone}
              setValue={(value) =>
                setMailData((state) => ({ ...state, telephone: value || '' }))
              }
              className="w-full py-2 px-4 outline-0 border shadow rounded border-primary-500"
              placeholder="Telefone"
              disabled={sendingMessage ? sendingMessage : successSendMail}
            />
            <Input
              type="text"
              name="subject"
              id="subject"
              valueInput={mailData.subject}
              setValue={(value) =>
                setMailData((state) => ({ ...state, subject: value || '' }))
              }
              className="w-full py-2 px-4 outline-0 border border-primary-500 shadow rounded"
              placeholder="Assunto"
              maxLength={50}
              disabled={sendingMessage ? sendingMessage : successSendMail}
            />

            <textarea
              name="message"
              id="message"
              className={`py-2 px-4 border outline-0 b ${
                fieldErrors?.message ? 'border-red-500' : 'border-primary-500'
              } shadow rounded resize-none`}
              placeholder="Digite sua mensagem"
              value={mailData.message}
              onChange={(e) =>
                setMailData((state) => ({
                  ...state,
                  message: e.target.value || ''
                }))
              }
              cols={30}
              rows={5}
              disabled={sendingMessage ? sendingMessage : successSendMail}
            ></textarea>
            {fieldErrors?.message && (
              <p className="text-red-500 text-xs pl-2">
                {fieldErrors?.message}
              </p>
            )}
          </div>
          <button
            className="w-full bg-primary-500 rounded mt-2 text-zinc-100 p-2 text-lg flex gap-2 items-center justify-center"
            disabled={sendingMessage ? sendingMessage : successSendMail}
            onClick={handleSendMessate}
          >
            {successSendMail ? (
              'Mensagem Enviada com sucesso'
            ) : (
              <>
                {sendingMessage ? (
                  <div>
                    <svg
                      aria-hidden="true"
                      className="mr-2 w-8 h-8 text-gray-200 animate-spin  fill-primary-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <PaperPlaneTilt size={22} weight="light" />
                )}
                Enviar
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
