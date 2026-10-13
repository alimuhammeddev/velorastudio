export const site = {
  name: "Velora Studio",
  descriptor: "Architecture & Interiors",
  tagline: "Designing spaces that inspire living.",
  contact: {
    email: "velora@studio.org",
    location: "Abuja, Nigeria",
    instagram: "https://www.instagram.com/",
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export type ProjectCategory = "Architecture" | "Interior Design" | "Residential";

export type Project = {
  slug: string;
  name: string;
  category: string;
  filters: ProjectCategory[];
  location: string;
  image: string;
  alt: string;
  summary: string;
  introduction: string;
  concept: string;
  materials: string[];
  gallery: { image: string; alt: string; shape?: "wide" | "portrait" }[];
};

export const projects: Project[] = [
  {
    slug: "stillwater-residence",
    name: "The Stillwater Residence",
    category: "Residential Architecture",
    filters: ["Architecture", "Residential"],
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary home with a stone terrace and lush garden",
    summary: "A contemporary home shaped by shifting daylight and a quiet connection to the outdoors.",
    introduction: "The Stillwater Residence is a residential concept exploring how a home can feel both grounded and open. A restrained architectural language gives changing daylight and the landscape room to become part of everyday life.",
    concept: "Simple, confident volumes organise the home around moments of pause and connection. Long sightlines draw the garden inward, while shaded thresholds offer a gentle transition between sheltered interiors and open air.",
    materials: ["Pale natural stone", "Warm timber", "Lime-washed plaster", "Clear glazing"],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=85", alt: "Warm modern living area opening to the garden", shape: "wide" },
      { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85", alt: "Carefully composed contemporary residential interior", shape: "portrait" },
      { image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85", alt: "Softly lit living space with considered natural materials", shape: "wide" },
    ],
  },
  {
    slug: "olive-house",
    name: "The Olive House",
    category: "Interior Design",
    filters: ["Interior Design", "Residential"],
    location: "Abuja, Nigeria",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    alt: "Warm neutral living room with timber furniture and soft natural light",
    summary: "An understated interior study in tactility, ease, and a softer way of living.",
    introduction: "The Olive House is an interior concept imagined as a calm counterpoint to the pace of the city. Its rooms are composed around natural textures, useful gestures, and the rituals of daily life.",
    concept: "A muted palette allows form and texture to take the lead. Furniture sits in conversation with the architecture, creating flexible spaces for gathering as well as quieter moments alone.",
    materials: ["Textured linen", "Smoked oak", "Brushed stone", "Hand-finished plaster"],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1500&q=85", alt: "Neutral-toned living room with sculptural furniture", shape: "wide" },
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85", alt: "Natural materials and leafy outlook through generous glazing", shape: "portrait" },
      { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85", alt: "A quiet living space with tactile finishes", shape: "wide" },
    ],
  },
  {
    slug: "casa-solis",
    name: "Casa Solis",
    category: "Contemporary Residential",
    filters: ["Architecture", "Residential"],
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    alt: "Modern residence defined by crisp lines and warm afternoon light",
    summary: "A contemporary residence concept balancing clear geometry with a generous sense of light.",
    introduction: "Casa Solis is a residential concept that takes its cues from sun, shade, and the pleasure of gathering. A clear architectural framework supports a home that feels connected and unhurried.",
    concept: "Openings and overhangs are considered together to shape the quality of light throughout the day. Shared living spaces sit at the heart of the plan, with quieter rooms arranged around them.",
    materials: ["Warm-toned concrete", "Natural oak", "Soft white render", "Bronze detailing"],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1500&q=85", alt: "Contemporary architecture with clear, balanced lines", shape: "wide" },
      { image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85", alt: "Quietly detailed interior with warm natural finishes", shape: "portrait" },
      { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85", alt: "Indoor and outdoor spaces connected through broad glazing", shape: "wide" },
    ],
  },
  {
    slug: "limestone-retreat",
    name: "The Limestone Retreat",
    category: "Architecture & Interiors",
    filters: ["Architecture", "Interior Design", "Residential"],
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    alt: "Refined contemporary interior with stone, timber and garden views",
    summary: "A retreat imagined around elemental materials, calm proportions, and a close relationship to place.",
    introduction: "The Limestone Retreat is an architecture and interiors concept. It explores how a home can sit gently within its landscape, using a quiet material palette to create a sense of belonging.",
    concept: "The design brings the everyday into closer relationship with its surroundings. Balanced proportions, framed views, and a sequence of sheltered spaces offer variety without visual noise.",
    materials: ["Limestone", "Reclaimed timber", "Natural linen", "Aged metal"],
    gallery: [
      { image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=85", alt: "Minimal retreat interior with layered light", shape: "wide" },
      { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85", alt: "Tactile residential interior in a palette of warm neutrals", shape: "portrait" },
      { image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85", alt: "Thoughtful contemporary living space", shape: "wide" },
    ],
  },
];

export const services = [
  {
    title: "Architecture",
    summary: "Architectural design shaped by context, clarity, and a considered approach to space.",
    detail: "From early spatial planning to material considerations, we develop architectural ideas around their setting and intended use. Each decision supports a clear, cohesive vision for how a place can be experienced.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1500&q=85",
    alt: "Contemporary architecture framed by a garden",
  },
  {
    title: "Interior Design",
    summary: "Refined interior environments that balance materiality, functionality, comfort, and character.",
    detail: "We consider the whole interior: how rooms flow, how finishes and materials meet, and how lighting and furniture support the way a space is used. The result is a cohesive environment with a sense of ease.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85",
    alt: "Relaxed interior with considered furniture and warm natural textures",
  },
  {
    title: "Renovation & Transformation",
    summary: "Thoughtful transformations that reveal new potential in existing spaces.",
    detail: "Existing spaces hold possibilities. We help reconsider layouts, finishes, and connections to make better use of what is already there, with a design direction grounded in the character of the place.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1500&q=85",
    alt: "Updated living space with a quiet palette and natural finishes",
  },
  {
    title: "Design Consultation",
    summary: "Professional guidance to help define your vision, explore possibilities, and establish a clear design direction.",
    detail: "A focused conversation can bring clarity to a project. We can help define priorities, discuss opportunities, and shape practical next steps around your space, ideas, and aspirations.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=85",
    alt: "A considered architectural interior that invites reflection",
  },
];
