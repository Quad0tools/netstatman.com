# NetStatMan Roadmap & Feature Ideas

## Vision
**Become the go-to destination for network engineers** — the site you have bookmarked and open daily.

## Competitive Landscape

### Current Market
- **SolarWinds tools** — Expensive, enterprise-focused, bloated
- **subnet-calculator.com** — Basic, ad-ridden, outdated UI
- **MXToolbox** — Good DNS tools but limited scope
- **Online IP tools** — Scattered, inconsistent UX
- **Visio** — Expensive, overkill for quick diagrams

### Our Advantage
- **Free forever** (open source, no business model dependencies)
- **Modern, beautiful UI** (not stuck in 2005)
- **Runs locally** (privacy-conscious, works offline)
- **Network engineer perspective** (we build what we actually use)

---

## Tier 1: Essential Tools (Must Have)

### ✅ Subnet Calculator (DONE)
- [x] CIDR calculations
- [x] Binary breakdown
- [x] Subnet subdivision
- [x] VLSM planner
- [x] Quick reference table
- [ ] IPv6 support
- [ ] Export/share link with pre-filled values
- [ ] Save favorite subnets

### ✅ Config Scraper (DONE)
- [x] Multi-vendor support
- [x] Git version control
- [x] Web UI
- [x] Bulk import
- [ ] Config diff viewer
- [ ] Compliance checking (detect insecure configs)
- [ ] Template-based config generation

### 🔨 NetDiagram (In Progress)
- [ ] Drag-and-drop canvas
- [ ] Network device icons (routers, switches, firewalls, servers)
- [ ] Connection lines with auto-routing
- [ ] Labels and annotations
- [ ] Export PNG/SVG/PDF
- [ ] Templates (3-tier, hub-spoke, campus)
- [ ] Import from CSV (device list → auto-layout)

---

## Tier 2: High-Value Tools (Next 6 Months)

### MAC Address Lookup
- Offline OUI database (daily updates available)
- Bulk lookup (paste list, get vendors)
- API for programmatic access
- Historical vendor changes

### DNS Toolkit
- A/AAAA/MX/TXT/CNAME lookups
- Propagation checker (query multiple global resolvers)
- Reverse DNS lookup
- Zone file validator
- DNSSEC analyzer
- SPF/DKIM/DMARC validator

### Bandwidth Calculator
- File transfer time estimates
- Protocol overhead calculator (TCP, UDP, IPsec, GRE)
- Link capacity planning
- Burst vs sustained calculations
- Multi-link aggregation calculator

### IP Address Tools
- IP to decimal converter
- IP range generator
- CIDR to range converter
- Private/public IP checker
- Geolocation lookup (IP → location)

---

## Tier 3: Power User Tools (Future)

### ACL/Firewall Rule Builder
- Visual rule builder
- Multi-vendor export (Cisco, Juniper, Palo Alto, Fortinet)
- Rule conflict detection
- Rule optimization suggestions
- Import existing ACLs for visualization

### BGP Tools
- AS path lookup
- Prefix origin checker
- BGP hijack detector
- Looking glass queries
- AS relationship visualizer

### Network Documentation Generator
- Import device list
- Auto-generate network documentation
- Markdown/PDF/HTML export
- Keep docs in sync with configs

### Wireless Planning
- AP placement calculator
- Channel planner
- Interference analyzer
- Coverage estimator

### Cable Calculator
- Max cable lengths by type
- PoE budget calculator
- Patch panel planning

---

## Tier 4: Community & Content

### Knowledge Base
- Networking quick reference guides
- Protocol cheat sheets
- Vendor CLI comparison tables
- Troubleshooting flowcharts
- Best practices guides

### Community Features
- Tool request voting
- User-submitted templates
- Discord server for discussions
- Blog with networking tips

---

## Marketing & Growth Strategy

### SEO Targets
- "subnet calculator" — High volume, competitive but beatable
- "CIDR calculator" — Good volume
- "network diagram tool free" — Underserved
- "config backup tool" — Enterprise searches
- "[vendor] command cheat sheet" — Long tail, high intent

### Content Strategy
1. **Landing pages for each tool** with rich descriptions
2. **Blog posts** targeting long-tail keywords
3. **YouTube tutorials** showing tool usage
4. **LinkedIn posts** in network engineering groups
5. **Reddit presence** (r/networking, r/sysadmin)

### Virality Hooks
- **Share links** — Subnet calc with pre-filled values
- **Embeddable widgets** — Put our tools on your intranet
- **CLI versions** — `npx netstatman subnet 10.0.0.0/16`
- **VS Code extension** — Hover IP → see subnet info

---

## Technical Improvements

### Performance
- [ ] Service worker for offline access
- [ ] PWA installable
- [ ] Lighthouse score 100

### Developer Experience
- [ ] TypeScript migration
- [ ] Component library
- [ ] Automated testing
- [ ] CI/CD with preview deploys

### Accessibility
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] High contrast mode

---

## Success Metrics

### 6-Month Goals
- 10,000 monthly active users
- 3+ tools live
- First in search for "subnet calculator"
- 500+ GitHub stars

### 12-Month Goals
- 50,000 monthly active users
- 6+ tools live
- Community Discord with 1000+ members
- Featured in networking podcasts/blogs
