export const caseStudies = [
  {
    slug: "stuxnet",
    title: "Stuxnet",
    category: "ICS Sabotage",
    summary:
      "A highly targeted cyber operation against Iranian nuclear enrichment infrastructure that demonstrated physical effects from malicious code.",
    impact:
      "Showed that cyber operations can create kinetic-style effects against industrial systems.",
    lessons: [
      "Cyber tools can produce real-world physical disruption",
      "ICS and OT environments require different defensive models",
      "Supply chain and removable media can become critical attack vectors"
    ]
  },
  {
    slug: "notpetya",
    title: "NotPetya",
    category: "Destructive Malware",
    summary:
      "A destructive campaign that spread globally under the appearance of ransomware and caused major operational and economic damage.",
    impact:
      "Highlighted how regional attacks can rapidly escalate into global disruption.",
    lessons: [
      "Wormable malware can create disproportionate strategic effects",
      "Software supply chain compromise is a major risk",
      "Recovery planning matters as much as prevention"
    ]
  },
  {
    slug: "ukraine-power-grid",
    title: "Ukraine Power Grid",
    category: "Critical Infrastructure Attack",
    summary:
      "A coordinated cyberattack that disrupted electrical service and illustrated adversary capability against operational infrastructure.",
    impact:
      "Demonstrated the military and civilian implications of cyber-enabled infrastructure disruption.",
    lessons: [
      "Critical infrastructure attacks can support broader campaigns",
      "Operational resilience and manual fallback procedures are essential",
      "Grid security must include both IT and OT defense"
    ]
  },
  {
    slug: "solarwinds",
    title: "SolarWinds",
    category: "Supply Chain Espionage",
    summary:
      "A large-scale compromise of trusted software distribution channels used for long-term access and espionage.",
    impact:
      "Revealed the strategic danger of compromising trusted update mechanisms.",
    lessons: [
      "Trusted vendors can become high-value attack paths",
      "Detection requires deep telemetry and threat hunting",
      "Zero-trust principles reduce blast radius"
    ]
  },
  {
    slug: "colonial-pipeline",
    title: "Colonial Pipeline",
    category: "Operational Disruption",
    summary:
      "A ransomware incident that led to major fuel distribution disruption and public impact in the United States.",
    impact:
      "Illustrated how business system compromise can cascade into national-level effects.",
    lessons: [
      "Business IT compromise can force OT-adjacent shutdown decisions",
      "Incident response has economic and political dimensions",
      "Resilience planning must include executive decision workflows"
    ]
  }
];