/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.vivermais.com.br',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/pdf'
      },
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },
  exclude: ['/pdf']
}
