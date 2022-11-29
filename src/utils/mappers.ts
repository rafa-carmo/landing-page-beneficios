import { HomepageQuery } from '../generated/graphql'

export function homeMapper(homeQuery: HomepageQuery) {
  return {
    base: {
      menu: {
        items: homeQuery.menus[0].links.map((menu) => ({
          name: menu.name,
          link: menu.url,
          icon: 'home'
        }))
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
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae arcu lorem cras lacus amet. In cras odio enim rhoncus consectetur.',
      contacts: homeQuery.contacts.map((contact) => ({
        value: contact.value,
        icon: contact.icon
      }))
    }
  }
}