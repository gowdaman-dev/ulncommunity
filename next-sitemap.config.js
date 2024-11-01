/** @type {import('next-sitemap').IConfig} */

const dev = process.env.NODE_ENV !== 'production';

export const siteUrl = dev ? 'http://localhost:3000' : 'ulncommunity.me';