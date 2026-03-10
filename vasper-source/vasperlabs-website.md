Role & Goal:
Act as a world-class Lead Frontend Engineer, Creative Developer (WebGL/Three.js expert), SEO/GEO Expert, and UI/UX designer. Your task is to architect and write the production-ready code for an Awwwards-level, ultra-minimalist, highly futuristic, pure dark-mode landing page for a deep-tech incubator called "Vasper Labs".

Brand Concept ("The Evening Star"):
"Vasper" derives from Venus, the Evening Star—the first light in the dark void. Vasper Labs guides deep-tech (Web3 & AI) projects. The aesthetic is "Cyber-Celestial / Twilight Void". 
Logo Implementation: The text is "VΛsper labs" (using the Greek Lambda). The 'V' and 'Λ' MUST have a CSS linear gradient applied to their text fill, transitioning from #13678A (Cosmic Teal) to #9AEBA3 (Starlight Green).

Use EXACTLY this custom "Twilight" color palette, anchored in absolute darkness:
- Pure Background: #00050A to #012030 (Pitch Black to Deep Twilight Blue gradient).
- Secondary Panels: #13678A (Cosmic Teal) -> Use with very low opacity (5% - 10%) for frosted glass (glassmorphism).
- Primary Accent: #45C4B0 (Venus Turquoise)
- Hover/Glows: #9AEBA3 (Starlight Green)
- Terminal Tags: #DAFDBA (Supernova Pale Green)
- Typography: #FFFFFF (Pure White) for stark contrast headings, and muted ice-blue/gray for body text.

Typography:
- Primary: Geometric sans-serif (e.g., Space Grotesk, Plus Jakarta Sans).
- Secondary: Monospace (e.g., JetBrains Mono) for technical details, telemetry, and coordinates.

Strict Technical Constraints & Premium Stack:
1. Core: Next.js (App Router), React 18+, and 100% Strict TypeScript. No `any` types.
2. Styling: Tailwind CSS, `clsx`, `tailwind-merge`, and Shadcn/UI for accessible base primitives.
3. Animation Engine (CRITICAL): 
   - GSAP & ScrollTrigger: For cinematic scroll-linked animations, pinning, and staggered text-reveals.
   - Lenis (Studio Freight): Buttery-smooth scroll hijacking.
   - React Three Fiber (R3F) & Drei: Lazy-loaded background canvas (`next/dynamic`). Render a vast dark void with a distant glowing focal point (Venus), surrounded by subtle, slow-moving orbital rings/stardust particles. Must be performant and pause when off-screen.
   - Framer Motion: For magnetic hover effects and micro-interactions.
4. Backend: React Hook Form + Zod. Next.js Route Handler (API route) via SendGrid/Resend forwarding to contact@vasperlabs.com.

Flawless SEO & GEO Architecture (CRITICAL):
- Metadata API: Implement dynamic Next.js Metadata with perfect Open Graph (OG) and Twitter Card tags to ensure the URL unfurls beautifully on social media and Slack/Discord.
- Global GEO Routing: Use Next.js Middleware to handle Geo-IP routing/localization.
- Hreflang & Canonical: Implement strict canonical URLs to prevent duplicate content, and `hreflang` tags to indicate the global target audience while establishing the UK base.
- Advanced JSON-LD Schema: Combine `Organization`, `LocalBusiness`, and `GeoCoordinates` schema to inject Vasper Labs into Google's Knowledge Graph, strictly defining the Headquarters in the United Kingdom and contact details.
- Core Web Vitals: Ensure 100/100 Lighthouse scores. Defer non-critical scripts, strictly optimize font loading (Next/Font), and heavily optimize the R3F Canvas to ensure LCP (Largest Contentful Paint) is < 2.5s. Include dynamic `sitemap.xml` and `robots.txt` generation.

Premium UI/UX Requirements:
- Custom Cursor: Hide default cursor. Create a glowing custom cursor that scales up/morphs when hovering over clickable elements.
- Noise Overlay: Add a fixed, pointer-events-none div over the entire site with a subtle (3% opacity) film grain/noise texture to add cinematic depth to the blacks.
- Magnetic Buttons: Buttons should slightly attract towards the mouse pointer on hover using Framer Motion.
- Mobile Responsiveness: R3F canvas must downscale gracefully. Bento grids must stack to a single column on mobile.

Page Architecture:

1. Header: Dark glassmorphism. Left: Gradient "VΛsper labs" logo. Center: Monospace "ORBIT.STATUS: [blinking green dot] STABLE". Right: "Initialize Contact" button. Smart hide/show on scroll via GSAP.

2. Hero Section (The Void & The Star): 100vh. 
   - Background: Interactive R3F WebGL canvas. 
   - Text: Massive headline in #FFFFFF: "Illuminating the Deep-Tech Void." (GSAP word-by-word reveal).
   - Sub-text: Monospace typing effect: "> THE FIRST LIGHT IN WEB3 & SCALABLE AI INFRASTRUCTURE."
   - Action: Pill-shaped glowing button.

3. Philosophy (The First Light Principle): Asymmetric "Bento Box" grid using dark, glassmorphic cards. Pinned/scaled via GSAP ScrollTrigger. Add subtle 3D tilt effect on mousemove for the cards. 

4. Ventures (Orbital Nodes): 2x2 Grid layout. Pure dark background. Tech tags like "[ ORBITAL_NODE_01 ]" in monospace. Hover: Dynamic celestial light beam traces the card border.

5. The Collective (Pioneers): 4 core members. Monochrome images. Hover state: Turns into a Teal/Green cyber-starlight Duotone effect.

6. Contact Terminal: Deep-space terminal-styled contact form. Strict Zod validation. Submit button text changes to "ENCRYPTING PAYLOAD..." on submit. On success: "> SYS.MSG: TRANSMISSION RECEIVED".

7. Footer: Fades into absolute pitch black (#000000). Monospace details: contact@vasperlabs.com, +1 (917) 695-5756, COORD: United Kingdom.

Deliverables:
Provide the core architectural setup, package.json dependencies, the main page structure (page.tsx), the dynamic SEO/Metadata/Schema configurations, the R3F background component, the Custom Cursor component, and the Next.js API route code. Ensure all code is production-ready, highly performant, and error-free.
