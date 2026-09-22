/* Cube.Media site configuration — edit these values, no other code changes needed. */
window.CUBE_CONFIG = {
  siteName: "Cube.Media",
  siteUrl: "https://webworksa1.github.io/cube-media/",
  // Google AdSense: set your publisher ID (e.g. "ca-pub-1234567890123456") and slot IDs.
  // Until set, ad slots show "Advertise here" house ads that link to advertise.html.
  adsenseClient: "",
  adSlots: { top: "", inArticle: "", sidebar: "", footer: "" },
  // Google Analytics 4 measurement ID, e.g. "G-XXXXXXX" (loads only after cookie consent).
  ga4: "",
  // Your YouTube channel URL (used by "Subscribe" buttons).
  youtubeChannel: "https://www.youtube.com/",
  // Donation / payment links. Leave "" to fall back to the pledge form (routes to the site inbox).
  donate: {
    paypal: "",        // e.g. https://www.paypal.com/donate/?hosted_button_id=XXXX
    buymeacoffee: "",  // e.g. https://buymeacoffee.com/yourname
    kofi: "",          // e.g. https://ko-fi.com/yourname
    stripe: "",        // Stripe Payment Link, e.g. https://buy.stripe.com/XXXX
    githubSponsors: "" // e.g. https://github.com/sponsors/yourname
  },
  // Support goal shown on the Support page.
  // Update "raised" and "supporters" manually as real support comes in.
  goal: { title: "Season 1: studio, contests & talent fund", raised: 0, target: 5000, supporters: 0 },
  // Top announcement bar (required on every page).
  contactUrl: "https://web.works/contact"
};
