# Redação +900 — Landing Page React/Next.js

Landing page mobile-first para tráfego frio da Meta, com checkout direto na Cakto e eventos de Meta Pixel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Configuração

Crie `.env.local` a partir de `.env.example`:

```env
NEXT_PUBLIC_CHECKOUT_URL=https://pay.cakto.com.br/ckrkrt8_1105648
NEXT_PUBLIC_META_PIXEL_ID=1680729316724150
```

## Eventos Meta Pixel

- `PageView`: ao carregar a landing page
- `ViewContent`: ao carregar a landing page
- `InitiateCheckout`: ao clicar em qualquer CTA
- `Purchase`: deve continuar sendo registrado pela Cakto/página de confirmação

## Deploy gratuito na Vercel

1. Envie esta pasta para um repositório GitHub.
2. Importe o repositório na Vercel.
3. Adicione as duas variáveis de ambiente acima.
4. Deploy.

A Vercel fornecerá um endereço gratuito `*.vercel.app`, suficiente para validar o funil antes de comprar domínio.
