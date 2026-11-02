ONLINE FOOD ORDERING SYSTEM
============================

Technology:
- React
- React Router
- CSS
- Vite

Run locally:

1. Run `npm install`.
2. Run `npm run dev`.
3. Open the localhost URL shown in the terminal.

Build for production with `npm run build`. The generated site is in `dist`.

GitHub Pages deployment:

1. Push changes to the `main` branch.
2. In the repository settings, open Pages and set the source to GitHub Actions.
3. The workflow builds and deploys the site. Its URL is
   `https://surf2108.github.io/WT-3/`.

The app uses hash-based routes so menu, cart, and checkout navigation works on
GitHub Pages without server-side route configuration.

Features:
- Home page and food menu
- Add food to cart, adjust quantities, and remove items
- Checkout validation for name, delivery address, and Indian mobile number
- Inline validation errors and an order confirmation message
