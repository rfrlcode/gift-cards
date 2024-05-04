# Nextjs Deals Blog

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/rfrlcode/gift-cards)

This is a [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) deals blogging starter template. Its based on the Next App directory with [React Server Component](https://nextjs.org/docs/getting-started/react-essentials#server-components) and uses [Contentlayer](https://www.contentlayer.dev/) to manage markdown content.

Check out the documentation below to get started.

Facing issues? Check the [Issues page](https://github.com/rfrlcode/gift-cards/issues) and do a search on past issues. Feel free to open a new issue if none has been posted previously.

## Motivation

I wanted to create a deals website using Nextjs and Tailwind CSS but there was no easy out of the box template to use so I decided to create one.

I wanted it to be nearly as feature-rich as popular blogging templates like [beautiful-jekyll](https://github.com/daattali/beautiful-jekyll) and [Hugo Academic](https://github.com/wowchemy/wowchemy-hugo-modules) but with the best of React's ecosystem and current web development's best practices.

## Features

- Next.js with Typescript
- [Contentlayer](https://www.contentlayer.dev/) to manage content logic
- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Mobile-friendly view
- Light and dark theme
- Font optimization with [next/font](https://nextjs.org/docs/app/api-reference/components/font)
- Integration with [Umami](https://umami.is/) for analytics
- Command palette search with [cmdk](https://github.com/pacocoursey/cmdk)

## Quick Start Guide

1. Clone the repo

```bash
git clone https://github.com/rfrlcode/gift-cards
```

2. Change the .env.example to .env
3. Create a hosted mysql instance. Mine is hosted on [Aiven](https://console.aiven.io/signup?referral_code=lcd36dgpvwahrt2ck4x0). The have a generous free tier.
4. Copy and paste the connection url of your mysql instance in the .env file.
5. Install dependencies

```bash
npm install --legacy-peer-deps
```

6. Create and publish your prisma schema

```bash
npx prisma generate
```

```bash
npx prisma db push
```

7. Run locally or deploy on Vercel

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Note: If you do not have any content on in your database, you will not see any deals.

## Post

Content is modelled using [Contentlayer](https://www.contentlayer.dev/), which allows you to define your own content schema and use it to generate typed content objects. See [Contentlayer documentation](https://www.contentlayer.dev/docs/getting-started) for more information.

### Frontmatter

Frontmatter follows [Hugo's standards](https://gohugo.io/content-management/front-matter/).

Please refer to `contentlayer.config.ts` for an up to date list of supported fields. The following fields are supported:

```
title (required)
date (required)
summary (required)
tags (required)
coverImage (required)
```

## Deploy

**Vercel**  
The easiest way to deploy the template is to deploy on [Vercel](https://vercel.com). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Netlify**
[Netlify](https://www.netlify.com/)’s Next.js runtime configures enables key Next.js functionality on your website without the need for additional configurations. Netlify generates serverless functions that will handle Next.js functionalities such as server-side rendered (SSR) pages, incremental static regeneration (ISR), `next/images`, etc.

See [Next.js on Netlify](https://docs.netlify.com/integrations/frameworks/next-js/overview/#next-js-runtime) for suggested configuration values and more details.

## Contributing

I love contributors! Here's how you can contribute:

- [Open an issue](https://github.com/rfrlcode/gift-cards/issues) if you believe you've encountered a bug.
- Follow the above quick start guide to get your local dev environment set up.
- Make a [pull request](https://github.com/rfrlcode/gift-cards/pull) to add new features/make quality-of-life improvements/fix bugs.

## Licence

[MIT](https://github.com/rfrlcode/gift-cards/blob/main/LICENSE) © [Ritanshu Dokania](https://www.ritanshudokania.xyz/)
