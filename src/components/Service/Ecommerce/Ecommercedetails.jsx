// Ecommercedetails.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Ecommercedetails.css";

/* ---------- Inline SVG Icons (no external libs) ---------- */
const IconCatalog = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="10" width="16" height="12" rx="2" />
    <rect x="26" y="10" width="16" height="12" rx="2" />
    <rect x="6" y="26" width="16" height="12" rx="2" />
    <rect x="26" y="26" width="16" height="12" rx="2" />
  </svg>
);

const IconCartCheckout = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M8 12h6l4 18h18l4-12H18" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="22" cy="36" r="3" />
    <circle cx="36" cy="36" r="3" />
  </svg>
);

const IconPayments = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="8" y="14" width="32" height="20" rx="3" />
    <rect x="12" y="18" width="12" height="4" />
    <path d="M12 30h12M28 30h8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconOrders = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="10" y="8" width="28" height="32" rx="2" />
    <path d="M16 16h16M16 22h16M16 28h10" stroke="currentColor" strokeWidth="2" />
    <circle cx="28" cy="28" r="2" />
  </svg>
);

const IconInventory = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M8 16l16-8 16 8v16l-16 8-16-8V16z" />
    <path d="M24 8v32M8 16l16 8 16-8" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const IconAdminRBAC = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="16" cy="18" r="5" />
    <path d="M8 32c0-4 4-7 8-7s8 3 8 7" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="28" y="12" width="12" height="16" rx="2" />
    <path d="M31 20h6M31 16h6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconSalesReport = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="8" y="8" width="32" height="32" rx="3" />
    <rect x="12" y="30" width="6" height="8" rx="1" />
    <rect x="20" y="24" width="6" height="14" rx="1" />
    <rect x="28" y="18" width="6" height="20" rx="1" />
    <path d="M12 16h12" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconPromos = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="8" y="14" width="32" height="20" rx="3" />
    <circle cx="18" cy="24" r="3" />
    <circle cx="30" cy="24" r="3" />
    <path d="M18 24l12 0" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconTaxInvoice = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M12 8h20l8 8v24H12z" />
    <path d="M32 8v8h8" fill="white" />
    <path d="M16 26h16M16 32h12" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconShipping = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="16" width="20" height="14" rx="2" />
    <path d="M26 22h8l6 4v4H26z" />
    <circle cx="16" cy="34" r="3" />
    <circle cx="34" cy="34" r="3" />
  </svg>
);

const IconMarketplace = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M10 12h28l-3 8H13l-3-8z" />
    <rect x="12" y="20" width="24" height="16" rx="2" />
    <path d="M18 28h12" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconPerformanceSEO = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="18" cy="18" r="8" />
    <path d="M23 23l11 11" stroke="currentColor" strokeWidth="3" />
    <path d="M10 34h28" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconSecurity = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M24 8l14 6v8c0 9-7 14-14 16-7-2-14-7-14-16v-8l14-6z" />
    <rect x="18" y="20" width="12" height="10" rx="2" fill="white" />
    <path d="M20 25h8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconTesting = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="10" width="36" height="24" rx="3" />
    <path d="M10 16h10l3 6h15" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="16" cy="34" r="3" />
    <circle cx="32" cy="34" r="3" />
  </svg>
);

const IconCICD = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="12" cy="24" r="6" />
    <circle cx="36" cy="24" r="6" />
    <path d="M18 24h12M24 8v6M24 34v6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/* ---------- Content ---------- */
const features = [
  {
    icon: <IconCatalog className="Ecommercedetails__feature-icon" />,
    title: "Catalog, PDP & Collections",
    description:
      "Product listings, variants, attributes, and rich PDP content. Filters, facets, search, and SEO-friendly URLs for discoverability.",
  },
  {
    icon: <IconCartCheckout className="Ecommercedetails__feature-icon" />,
    title: "Cart & Checkout",
    description:
      "Guest/registered carts, addresses, saved payment methods, and frictionless checkout with validation and error recovery.",
  },
  {
    icon: <IconPayments className="Ecommercedetails__feature-icon" />,
    title: "Payments & Subscriptions",
    description:
      "Stripe/Razorpay with webhooks, 3-D Secure, refunds, partial captures, and subscription billing with proration and dunning.",
  },
  {
    icon: <IconOrders className="Ecommercedetails__feature-icon" />,
    title: "Orders & Fulfillment",
    description:
      "Order lifecycle, statuses, RMA/returns, exchanges, and notifications. Pick/pack/ship workflows that scale with your ops.",
  },
  {
    icon: <IconInventory className="Ecommercedetails__feature-icon" />,
    title: "Inventory & SKUs",
    description:
      "Multi-warehouse stock, safety buffers, batch/lot tracking, and low-stock alerts. Atomic updates to avoid oversells.",
  },
  {
    icon: <IconAdminRBAC className="Ecommercedetails__feature-icon" />,
    title: "Custom Admin & RBAC",
    description:
      "Role-based dashboards for staff, with permissions by module (orders, products, pricing). Audit logs and activity trails.",
  },
  {
    icon: <IconSalesReport className="Ecommercedetails__feature-icon" />,
    title: "Sales Reports & Analytics",
    description:
      "Revenue, AOV, conversion, cohort retention, and product performance. CSV exports and scheduled report emails.",
  },
  {
    icon: <IconPromos className="Ecommercedetails__feature-icon" />,
    title: "Promotions & Coupons",
    description:
      "Discount rules, bundles, buy-X-get-Y, coupon pools, and eligibility by customer group, channel, or catalog.",
  },
  {
    icon: <IconTaxInvoice className="Ecommercedetails__feature-icon" />,
    title: "Taxes & Invoicing",
    description:
      "Configurable GST/VAT, tax-inclusive pricing, credit notes, and compliant invoices with sequential numbering.",
  },
  {
    icon: <IconShipping className="Ecommercedetails__feature-icon" />,
    title: "Shipping & Logistics",
    description:
      "Zones, rates, carriers, labels, and tracking. Integrations with Shippo/EasyPost; automated notifications to customers.",
  },
  {
    icon: <IconMarketplace className="Ecommercedetails__feature-icon" />,
    title: "Channels & Marketplace",
    description:
      "Multi-storefront, B2B tiers, and optional multi-vendor flows (seller onboarding, commission, and payouts).",
  },
  {
    icon: <IconPerformanceSEO className="Ecommercedetails__feature-icon" />,
    title: "Performance & SEO",
    description:
      "Next.js ISR/SSG, image optimization, structured data, and Core Web Vitals tuning to keep pages speedy and visible.",
  },
  {
    icon: <IconSecurity className="Ecommercedetails__feature-icon" />,
    title: "Security & Compliance",
    description:
      "OWASP best practices, secure sessions/tokens, access controls, and PCI-aware payment flows with least-privilege design.",
  },
  {
    icon: <IconTesting className="Ecommercedetails__feature-icon" />,
    title: "Testing & QA",
    description:
      "Unit, E2E, and contract tests. Visual diffing for PDP/cart. Seed data for repeatable test fixtures across environments.",
  },
  {
    icon: <IconCICD className="Ecommercedetails__feature-icon" />,
    title: "CI/CD & Deployment",
    description:
      "Vercel/Docker/Kubernetes, preview deployments, smoke tests, and blue-green or canary releases with observability.",
  },
];

/* ---------- Animations ---------- */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 0.77, 0.47, 0.97] } },
};

const cardHover = {
  hover: { y: -10, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Ecommercedetails() {
  return (
    <section className="Ecommercedetails" aria-labelledby="ecommercedetails-title">
      <div className="Ecommercedetails__decorative-circle" />
      <div className="Ecommercedetails__container">
        <motion.div
          className="Ecommercedetails__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 id="ecommercedetails-title" className="Ecommercedetails__title" variants={item}>
            <span className="Ecommercedetails__title-gradient" aria-hidden="true"></span>
            Ecommerce Development
          </motion.h2>
          <motion.p className="Ecommercedetails__subtitle" variants={item}>
            MERN + Next.js storefronts with custom admin panels, role-based permissions, real-time inventory, and
            actionable sales reports—built for scale and reliability.
          </motion.p>
          <motion.div className="Ecommercedetails__header-divider" variants={item} />
        </motion.div>

        <motion.div
          className="Ecommercedetails__features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          role="list"
        >
          {features.map((feature, idx) => (
            <motion.div
              className="Ecommercedetails__feature-card"
              key={idx}
              variants={item}
              whileHover="hover"
              role="listitem"
            >
              <motion.div className="Ecommercedetails__card-inner" variants={cardHover}>
                <div className="Ecommercedetails__card-icon-container">
                  <div className="Ecommercedetails__card-icon-bg" />
                  <div className="Ecommercedetails__card-icon">{feature.icon}</div>
                </div>

                <h3 className="Ecommercedetails__card-title">{feature.title}</h3>
                <p className="Ecommercedetails__card-description">{feature.description}</p>

                <div className="Ecommercedetails__card-hover-effect" />
                <div className="Ecommercedetails__card-accent" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
