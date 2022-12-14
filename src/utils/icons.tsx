import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  WhatsappLogo
} from 'phosphor-react'
import { SVGProps } from 'react'

export const socialMediaIcons = {
  facebook: <FacebookLogo size={35} />,
  instagram: <InstagramLogo size={35} />,
  linkedin: <LinkedinLogo size={35} />,
  whatsapp: <WhatsappLogo size={35} />
}
export type socialMediasProps = keyof typeof socialMediaIcons
