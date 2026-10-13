# Velora Studio

A responsive architecture and interiors portfolio built with Next.js App Router,
React, TypeScript, and Tailwind CSS. The portfolio concepts and project stories
are fictional. Project copy, imagery, navigation, and studio contact placeholders
are centralized in `lib/site-data.ts`.

## Run locally

```bash
pnpm install
pnpm dev
```

Visit `http://localhost:3000`. Run `pnpm lint` and `pnpm build` to check the
project and create a production build.

## Enquiry form integration

The contact form currently performs browser-side required-field and email
validation only. It does not submit, store, or transmit enquiry information, and
its confirmation message explicitly says that nothing has been sent.

Before accepting enquiries, connect the form to a server-side route or trusted
form provider, validate and handle submissions on the server, and configure the
chosen email provider's credentials through environment variables. Then update
the form to show loading, success, and failure states based on the real response.
Replace the contact and social placeholders in `lib/site-data.ts` with details
approved by the studio. Do not expose provider credentials in client-side code.

## Images

Portfolio imagery is loaded from Unsplash and the host is configured in
`next.config.ts` for `next/image`.
