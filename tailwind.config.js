/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "640px",
      tablet: "760px",
      wide: "900px",
      cards: "1000px",
      lg: "1024px"
    },
    extend: {
      colors: {
        primary: "#5b3fd6",
        "primary-hover": "#4a31b8",
        "primary-active": "#3b278f",
        "primary-soft": "#ede7ff",
        "secondary-strong": "#285f9e",
        "secondary-soft": "#e3effc",
        background: "#fbfaff",
        tint: "#f3f0ff",
        text: "#1f1b4d",
        muted: "#5f5b85",
        success: "#17694b",
        "success-bg": "#e6f6ef",
        warning: "#8a5a00",
        "warning-bg": "#fff4db",
        border: "#d9d3f2",
        "border-strong": "#7c73b4",
        focus: "#6d4fe8"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      fontSize: {
        caption: "0.75rem",
        small: "0.875rem",
        lead: "1.125rem",
        axis: "11px",
        heading1: ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "1.1" }],
        heading2: ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2" }],
        heading3: ["1.125rem", { lineHeight: "1.2" }],
        quote: ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.3" }]
      },
      maxWidth: {
        container: "1200px",
        section: "640px",
        copy: "560px",
        lead: "52ch",
        faq: "900px",
        cta: "22ch"
      },
      minHeight: {
        hero: "clamp(480px, 75vh, 680px)"
      },
      inset: {
        skip: "60px"
      },
      zIndex: {
        1: "1"
      },
      width: {
        pet: "154px"
      },
      height: {
        pet: "126px"
      },
      flex: {
        pet: "1 1 200px"
      },
      gridTemplateColumns: {
        features: "repeat(auto-fit, minmax(280px, 1fr))",
        steps: "repeat(auto-fit, minmax(240px, 1fr))",
        form: "repeat(auto-fit, minmax(160px, 1fr))",
        diary: "220px 1fr",
        story: "1fr 1.6fr",
        footer: "1fr auto"
      },
      scrollPadding: {
        24: "96px"
      },
      borderRadius: {
        card: "20px"
      },
      boxShadow: {
        card: "0 1px 3px rgba(31, 27, 77, 0.08)"
      },
      transitionDuration: {
        fast: "150ms"
      },
      transitionProperty: {
        card: "box-shadow, transform"
      },
      aspectRatio: {
        story: "5 / 4"
      },
      scale: {
        160: "1.6"
      },
      strokeWidth: {
        3: "3"
      }
    }
  },
  plugins: []
};
