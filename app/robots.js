export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: ['/', '/visit', '/believe', '/give'],
      },
      sitemap: 'https://pcachurchsydney.com/sitemap.xml',
    }
  }