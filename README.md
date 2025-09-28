# SandwichScan React frontend

Provide a visualization tool for sandwich attacks

## Goal

Build a simple, trustworthy, and open visualization tool that lets anyone:

- Inspect total and per-attacker metrics (revenues, profits, number of attacks).
- Inspect total harm to victims.
- Search and filter attacks by victim or attacker address.
- Sort results by timestamp, revenue, profit, or harm.
- See interactive charts of attacker revenue/profit vs victim harm.
- Access public API docs and call the API (historic window: from 2020).
- Source: swap & transaction logs from Ethereum via GCP BigQuery (only Uniswap V2, Sushiswap V2, PancakeSwap V2 are used for detection).

## Links

sandwichscan app  
https://app.sandwichscan.baltoon.jp

sandwichscan api docs  
https://api.sandwichscan.baltoon.jp/app/v1/scalar

docs repository  
https://github.com/PeterTakahashi/sandwich-scan-docs

fastapi backend api repository  
https://github.com/PeterTakahashi/sandwichscan-app-fastapi

react frontend repository  
https://github.com/PeterTakahashi/sandwichscan-app-react

## Definition / detection rule

A sandwich attack is detected when:

1. There is a _victim swap_.
2. Within one block before or after the victim’s swap, there are swaps from the _attacker_.
3. The attacker’s front-run swap is in the **same direction** as the victim’s swap.

## Data source & scope

- Source: Raw swaps + transactions in **Ethereum** collected by GCP BigQuery.
- Pools scanned: Uniswap v2, Sushiswap v2, PancakeSwap v2.
- Time range: since 2020.
- Only swaps on the Ethereum chain are considered.

## Get started

```sh
npm install
npm run dev
npm run storybook # if you want to see storybook
```

## openapi type rebuild

```sh
npx openapi-typescript config/openapi.json --output src/types/api/base.ts
```
