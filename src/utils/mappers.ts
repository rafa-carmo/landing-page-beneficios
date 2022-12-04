import { HomepageQuery, MedicOnlinePageQuery } from '../generated/graphql'
import { MedicinaOnlineTemplateProps } from '../templates/MedicinaOnline/index'

export function homeMapper(homeQuery: HomepageQuery) {
  return {
    base: {
      menu: {
        items: homeQuery.menus[0].links.map((menu) => ({
          name: menu.name,
          link: menu.url,
          icon: 'home'
        })),
        socialMedias: homeQuery.socialMedias.map((media) => ({
          icon: media.icon,
          url: media.url
        }))
      },
      footer: {
        values: homeQuery.abouts[0].valores,
        about: homeQuery.abouts[0].about,
        socialMedias: homeQuery.socialMedias.map((media) => ({
          icon: media.icon,
          url: media.url
        }))
      },
      meta: {
        description: homeQuery.metaTag?.description,
        image: homeQuery.metaTag?.image?.url || null
      }
    },
    slider: {
      sliders: homeQuery.banners.map((slider) => ({
        title: slider.title,
        subtitle: slider.subtitle,
        image: slider.image?.url,
        button: {
          title: slider.button?.name,
          url: slider.button?.url
        }
      }))
    },
    pricing: {
      tiers: homeQuery.pricings.map((price) => ({
        name: price.name,
        href: price.link,
        priceMonthly: price.priceMonthly,
        from: price.from,
        description: price.description,
        includedFeatures: price.includedFeatures
      }))
    },
    partnership: {
      partners: homeQuery.partnerships.map((partner) => ({
        name: partner.name,
        image: partner.image.url
      }))
    },
    howWorks: {
      title: 'Simples e facil de usar',
      text: homeQuery.abouts[0].howWorks
    },
    contact: {
      description: homeQuery.abouts[0].about,
      contacts: homeQuery.contacts.map((contact) => ({
        value: contact.value,
        icon: contact.icon
      }))
    },
    about: {
      mission: homeQuery.abouts[0].about,
      vision: homeQuery.abouts[0].visao,
      values: homeQuery.abouts[0].valores,
      image: homeQuery.abouts[0]?.image.url || '/images/maps.jpg'
    }
  }
}

export function medicOnlineMapper(homeQuery: MedicOnlinePageQuery) {
  const medicPage = homeQuery.medicoOnlinePages[0]
  return {
    base: {
      menu: {
        items: homeQuery.menus[0].links.map((menu) => ({
          name: menu.name,
          link: menu.url,
          icon: 'home'
        })),
        socialMedias: homeQuery.socialMedias.map((media) => ({
          icon: media.icon,
          url: media.url
        }))
      },
      footer: {
        values: homeQuery.abouts[0].valores,
        about: homeQuery.abouts[0].about,
        socialMedias: homeQuery.socialMedias.map((media) => ({
          icon: media.icon,
          url: media.url
        }))
      },
      meta: {
        description: homeQuery.metaTag?.description,
        image: homeQuery.metaTag?.image?.url || null
      },
      title: 'Viver Mais - Medico na tela 24 hrs.'
    },
    title: medicPage.title,
    subtitle: medicPage.subtitle,
    planItems: medicPage.include,
    cards: medicPage.cards.map((card) => ({
      title: card.title,
      text: card.description,
      image: card.localImage || card.image.url,
      alt: card.alternativeTextImage || card.title
    })),
    priceArea: 'Médico na Tela sem burocracia!',
    cardsPrice: medicPage.medicPlans.map((price) => ({
      id: price.idGalaxPay,
      title: price.name,
      value: price.value,
      inclidesItems: price.itens
    }))
  } as MedicinaOnlineTemplateProps
}
