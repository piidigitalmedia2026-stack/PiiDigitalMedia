import { ServiceDetail, School, EducationSegment, InsightArticle, FAQItem } from "@/types";

export const AGENCY_NAME = "PII Digital Media";
export const BRAND_TAGLINE = "Great Schools Deserve to Be Seen.";
export const SECONDARY_TAGLINE = "Create. Connect. Grow.";
export const BRAND_SUBTITLE = "We manage digital marketing and digital presence for schools: websites, social media, creatives, reels, admission campaigns, ads, and SEO.";

export const CONTACT_PHONE_DISPLAY = "+91 79899 95014";
export const CONTACT_PHONE_E164 = "+917989995014";
export const WHATSAPP_URL = "https://wa.me/917989995014";

export const SERVICES: ServiceDetail[] = [
  {
    slug: "digital-marketing",
    title: "School Digital Marketing & Social Media Management",
    shortTitle: "Digital Marketing",
    category: "Digital Marketing",
    summary: "Complete digital marketing for schools: social media management, regular reels, campus event coverage, and creative design.",
    headline: "Active Social Channels, Reels & Visual Campus Storytelling",
    challenge: "School social channels often go silent for weeks or struggle to produce engaging reels, videos, and professional creatives that show prospective parents what school life is really like.",
    solution: "We manage your complete digital marketing pipeline: planning content, recording and editing reels, designing branded posters, and publishing consistently.",
    deliverables: [
      "Social media account management & scheduled publishing",
      "Instagram reels, short-form videos & event coverage",
      "Celebration, activity & student achievement posts",
      "Branded posters, carousels & admission announcement designs",
      "Captions written in the school's voice & coordination with staff"
    ],
    institutionalValue: "Parents see an energetic, active school that communicates clearly and showcases daily campus life across all major platforms.",
    process: [
      { step: "Plan", desc: "Agree the month's themes, events, and key milestones with the school." },
      { step: "Produce", desc: "Create engaging reels, campus videos, and branded posters." },
      { step: "Confirm", desc: "Confirm dates, student names, and circular details with school leadership." },
      { step: "Publish", desc: "Post consistently across Instagram, Facebook, and school channels." }
    ],
    icon: "Share2"
  },
  {
    slug: "social-media-management",
    title: "Social Media Management and Publishing",
    shortTitle: "Social Media",
    category: "Creative & Media",
    summary: "Day-to-day management of a school's social media accounts, from planning what to post to publishing it on schedule.",
    headline: "Keep Your School's Social Channels Active, Consistent, and On-Brand",
    challenge: "School social feeds often go quiet for weeks, or fill up with notices that say little about what daily life at the school is actually like.",
    solution: "We plan, prepare, and publish regular content for the school's accounts, covering celebrations, activities, achievements, announcements, and admission updates.",
    deliverables: [
      "Account management and scheduled publishing",
      "Posts for celebrations, activities, and achievements",
      "School announcements and admission updates",
      "Captions written in the school's voice",
      "Coordination with school staff for photos and information"
    ],
    institutionalValue: "Parents and prospective families see a school that is active and communicates clearly, in one consistent voice across platforms.",
    process: [
      { step: "Plan", desc: "Agree the month's themes, events, and announcements with the school." },
      { step: "Collect", desc: "Gather photos, videos, and details from school coordinators." },
      { step: "Create", desc: "Prepare designs, reels, and captions for approval." },
      { step: "Publish", desc: "Post on schedule and keep the accounts up to date." }
    ],
    icon: "Share2"
  },
  {
    slug: "creative-design",
    title: "Poster, Carousel, and Promotional Creative Design",
    shortTitle: "Creative Design",
    category: "Creative & Media",
    summary: "Posters, carousels, and promotional creatives designed for a school's social media, events, and admission announcements.",
    headline: "Clean, Education-Focused Creatives That Look Like Your School",
    challenge: "Creatives made in a hurry by different people end up with mismatched colours, fonts, and logo usage, which weakens the school's brand.",
    solution: "We design each creative within the school's brand guidelines, so every poster and carousel is recognisably from the same institution.",
    deliverables: [
      "Festival, celebration, and event posters",
      "Multi-slide carousels for social media",
      "Admission and promotional creatives",
      "Achievement and announcement designs",
      "Consistent use of the school's logo and colours"
    ],
    institutionalValue: "A consistent visual identity across social media, the website, advertisements, and presentations.",
    process: [
      { step: "Brief", desc: "Confirm the occasion, message, and details that must appear." },
      { step: "Design", desc: "Create the creative using the school's brand assets." },
      { step: "Review", desc: "Share with the school and apply corrections." },
      { step: "Deliver", desc: "Export in the sizes each platform needs." }
    ],
    icon: "Layers"
  },
  {
    slug: "reels-promotional-videos",
    title: "Reels, Promotional Videos, and Event Content",
    shortTitle: "Reels & Video",
    category: "Creative & Media",
    summary: "Short-form reels, school promotional videos, and coverage of school events and activities.",
    headline: "Show Parents What School Life Actually Looks Like",
    challenge: "A school's best moments, such as events, classroom activities, and student achievements, are rarely captured in a form parents will watch.",
    solution: "We produce reels and promotional videos from school events and everyday activities, edited for the platforms parents use.",
    deliverables: [
      "Reels for Instagram and other social platforms",
      "School promotional videos",
      "Event and celebration coverage",
      "Admission-season video content",
      "Edits sized for each platform"
    ],
    institutionalValue: "Video gives prospective parents a direct view of the school before they visit.",
    process: [
      { step: "Plan", desc: "Decide what to capture and the message of each video." },
      { step: "Capture", desc: "Collect or record footage from the event or activity." },
      { step: "Edit", desc: "Cut, caption, and format the video for its platform." },
      { step: "Publish", desc: "Release on the school's channels after approval." }
    ],
    icon: "Video"
  },
  {
    slug: "admission-campaigns",
    title: "Admission Marketing and Promotional Campaigns",
    shortTitle: "Admission Campaigns",
    category: "Growth Marketing",
    summary: "Targeted admission-season campaigns across Meta Ads, Google Ads, and GPT Ads that bring a school's creatives, videos, and inquiries together around one clear message.",
    headline: "One Coordinated Campaign for the Admission Season",
    challenge: "Admission promotion is often scattered: a poster here, an ad there, with no shared message or schedule.",
    solution: "We plan the admission campaign as a whole, with high-converting Meta Ads, Google Ads, and GPT Ads coordinated across creatives, video, and paid search.",
    deliverables: [
      "Meta Ads (Facebook & Instagram sponsored campaigns)",
      "Google Ads (High-intent search & local admission targeting)",
      "GPT Ads (AI search & conversational ad targeting)",
      "Admission campaign plan, schedule & creative direction",
      "Admissions Open creatives, reels & inquiry follow-ups"
    ],
    institutionalValue: "Parents see the same clear admission message wherever they come across the school.",
    process: [
      { step: "Confirm", desc: "Agree the admission year, classes open, and key dates with the school." },
      { step: "Prepare", desc: "Produce the campaign's creatives, videos, and copy." },
      { step: "Run", desc: "Publish and promote across the agreed channels." },
      { step: "Report", desc: "Summarise what ran and how it performed." }
    ],
    icon: "Users"
  },
  {
    slug: "google-ads",
    title: "Google Ads Coordination",
    shortTitle: "Google Ads",
    category: "Growth Marketing",
    summary: "Setting up and coordinating Google Ads campaigns so a school appears when parents search for admissions.",
    headline: "Reach Parents While They Are Searching for a School",
    challenge: "Parents search online when choosing a school, and a school that does not appear in those results is easy to overlook.",
    solution: "We coordinate Google Ads campaigns around the school's location, classes, and admission period, and keep the school informed on spend and results.",
    deliverables: [
      "Search campaign setup and coordination",
      "Ad copy aligned with the admission message",
      "Location targeting around the school",
      "Budget and schedule coordination",
      "Regular performance reporting"
    ],
    institutionalValue: "The school is visible to families who are actively looking for admissions in its area.",
    process: [
      { step: "Scope", desc: "Agree the budget, target area, and campaign period." },
      { step: "Build", desc: "Set up campaigns, keywords, and ad copy." },
      { step: "Monitor", desc: "Review performance and adjust during the campaign." },
      { step: "Report", desc: "Share spend and results with the school." }
    ],
    icon: "Target"
  },
  {
    slug: "meta-ads",
    title: "Meta Ads Coordination",
    shortTitle: "Meta Ads",
    category: "Growth Marketing",
    summary: "Coordinating Facebook and Instagram ad campaigns that put a school's creatives and reels in front of local parents.",
    headline: "Promote Your School to Parents on Facebook and Instagram",
    challenge: "Organic posts reach only part of a school's existing audience, so admission announcements often miss new families.",
    solution: "We coordinate Meta Ads campaigns that promote the school's creatives and videos to parents in the areas it serves.",
    deliverables: [
      "Facebook and Instagram campaign coordination",
      "Ad creatives and reels adapted for ads",
      "Location-based audience targeting",
      "Budget and schedule coordination",
      "Regular performance reporting"
    ],
    institutionalValue: "Admission messaging reaches parents beyond the school's existing followers.",
    process: [
      { step: "Scope", desc: "Agree the budget, audience area, and campaign period." },
      { step: "Build", desc: "Set up campaigns with the approved creatives." },
      { step: "Monitor", desc: "Review performance and refresh creatives as needed." },
      { step: "Report", desc: "Share spend and results with the school." }
    ],
    icon: "Megaphone"
  },
  {
    slug: "website-content-updates",
    title: "School Websites & Maintenance",
    shortTitle: "Websites & Maintenance",
    category: "Web & Tech",
    summary: "Modern, high-converting school websites and complete digital presence—keeping your admissions portal, parent updates, and online reputation accurate and compelling.",
    headline: "A Premium School Website & Digital Presence That Converts Visits into Admissions",
    challenge: "School websites often look outdated, load slowly on phones, or show obsolete admission information that turns parents away.",
    solution: "We build, manage, and continuously update modern school websites, inquiry forms, and online presence with verified information.",
    deliverables: [
      "Modern, mobile-responsive school website management",
      "Admission portals, inquiry forms, and prospectus downloads",
      "Regular updates for announcements, circulars, and events",
      "Campus photo galleries, faculty spotlights, and achievement banners",
      "Coordination with Google Maps, SEO, and social channels"
    ],
    institutionalValue: "Parents discover an authoritative, beautiful digital presence that reflects the true standard of your school.",
    process: [
      { step: "Design & Audit", desc: "Evaluate the school's digital presence and admission journey." },
      { step: "Develop & Refine", desc: "Structure modern pages, fast inquiry forms, and clear navigation." },
      { step: "Verify", desc: "Confirm all academic information, dates, and circulars with leadership." },
      { step: "Maintain", desc: "Keep the live website updated, secure, and fast year-round." }
    ],
    icon: "Globe"
  },
  {
    slug: "seo",
    title: "SEO Coordination for School Websites",
    shortTitle: "SEO",
    category: "Growth Marketing",
    summary: "SEO-related work that helps a school's website appear for relevant searches in its area.",
    headline: "Help Parents Find Your School Through Search",
    challenge: "A school website with thin or poorly structured content is hard for search engines to understand and for parents to find.",
    solution: "We coordinate SEO work on the school's website, including page titles, descriptions, content, and local search basics.",
    deliverables: [
      "Page titles and meta descriptions",
      "Content improvements for key pages",
      "Local search basics for the school's area",
      "Coordination with website content updates",
      "Search performance reporting"
    ],
    institutionalValue: "Steady improvement in how easily parents can find the school through search.",
    process: [
      { step: "Review", desc: "Check the current website content and search presence." },
      { step: "Prioritise", desc: "Agree which pages and searches matter most." },
      { step: "Improve", desc: "Update content and on-page elements." },
      { step: "Report", desc: "Share search performance with the school." }
    ],
    icon: "Search"
  },
  {
    slug: "content-calendars-reporting",
    title: "Content Calendars, Campaign Coordination, and Reporting",
    shortTitle: "Calendars & Reporting",
    category: "Strategy & Branding",
    summary: "Monthly content calendars, coordination across campaigns, and performance reports for the school's digital activity.",
    headline: "A Clear Plan for the Month and a Clear Report at the End",
    challenge: "Without a calendar, content is produced at the last minute and nobody can say afterwards what was done or how it performed.",
    solution: "We prepare a content calendar in advance, coordinate the work against it, and report on what was published and how it performed.",
    deliverables: [
      "Monthly content calendar",
      "Planning around school events and key dates",
      "Coordination across social, ads, and website work",
      "Performance reports",
      "Each school's content and reports kept separate"
    ],
    institutionalValue: "The school always knows what is planned, what has been published, and how it performed.",
    process: [
      { step: "Plan", desc: "Draft the calendar around the school's events and priorities." },
      { step: "Approve", desc: "Review and confirm the calendar with the school." },
      { step: "Coordinate", desc: "Track the work against the calendar through the month." },
      { step: "Report", desc: "Share a performance report for the period." }
    ],
    icon: "TrendingUp"
  }
];

export const EDUCATION_SEGMENTS: EducationSegment[] = [
  {
    slug: "k12-schools",
    title: "K-12 Schools",
    subtitle: "Day schools from the primary years through high school",
    audience: "School management, principals, and admissions teams.",
    keyChallenges: [
      "Standing out among several schools in the same area.",
      "Keeping social media active throughout the academic year.",
      "Running admission promotion in a planned way rather than at the last minute.",
      "Keeping the website and public information accurate."
    ],
    strategicSolutions: [
      "Regular social media content built around school life.",
      "Admission campaigns planned ahead of the admission season.",
      "Consistent creatives and reels in the school's brand.",
      "Website content updates and SEO coordination."
    ],
    recommendedServices: [
      "Social Media Management and Publishing",
      "Admission Marketing and Promotional Campaigns",
      "Reels, Promotional Videos, and Event Content",
      "Website Content Updates"
    ],
    icon: "GraduationCap"
  },
  {
    slug: "pre-primary-early-years",
    title: "Pre-Primary and Early Years",
    subtitle: "Nursery and kindergarten sections",
    audience: "School management and early-years coordinators.",
    keyChallenges: [
      "Parents choosing a school for the first time need reassurance.",
      "Decisions are usually made close to home.",
      "Parents want to see the environment and the teachers, not just read about them.",
      "Admission enquiries arrive across a long period."
    ],
    strategicSolutions: [
      "Warm photo and video content from classrooms and activities.",
      "Location-focused ad campaigns around the school.",
      "Clear admission information on social media and the website.",
      "Regular updates on celebrations and events."
    ],
    recommendedServices: [
      "Reels, Promotional Videos, and Event Content",
      "Meta Ads Coordination",
      "Poster, Carousel, and Promotional Creative Design",
      "Social Media Management and Publishing"
    ],
    icon: "Baby"
  },
  {
    slug: "international-schools",
    title: "International Schools",
    subtitle: "Schools offering international programmes",
    audience: "School management, heads of school, and admissions teams.",
    keyChallenges: [
      "Explaining the curriculum and approach clearly to parents.",
      "Presenting the school consistently across the website and social media.",
      "Keeping website information accurate and current.",
      "Reaching families who are comparing several schools."
    ],
    strategicSolutions: [
      "A clear, accurate, and well-maintained website.",
      "Content that explains the school's programmes in plain language.",
      "Consistent branding across every channel.",
      "Search visibility for relevant queries."
    ],
    recommendedServices: [
      "Website Content Updates",
      "SEO Coordination for School Websites",
      "Poster, Carousel, and Promotional Creative Design",
      "Content Calendars, Campaign Coordination, and Reporting"
    ],
    icon: "Compass"
  }
];

// Only confirmed details belong here. Leave a field out rather than guess it.
export const SCHOOLS: School[] = [
  {
    slug: "cmr-school-kompally",
    name: "CMR School, Kompally",
    location: "Kompally",
    website: "https://cmrschoolkompally.com/",
    image: "/cmr-school-kompally.jpg",
    scope: [
      "Social media management",
      "Promotional creatives",
      "Reels",
      "School-related content",
      "Admission campaigns"
    ]
  },
  {
    slug: "cmr-school-kundapally",
    name: "CMR School, Kundanpally",
    location: "Kundanpally",
    website: "https://cmrschoolkundanpally.com/",
    image: "/cmr-school-kundanpally.jpg",
    scope: [
      "Digital marketing coordination",
      "Social media content",
      "Promotional creatives",
      "Reels",
      "Admission campaigns"
    ]
  },
  {
    slug: "malla-reddy-school-medchal",
    name: "Malla Reddy School, Medchal",
    location: "Medchal, Hyderabad, Telangana",
    curriculum: "CBSE curriculum",
    website: "https://mallareddyschool.com/",
    image: "/malla-reddy-school-medchal.jpg",
    scope: [
      "Social media content",
      "Admission campaigns",
      "Promotional videos",
      "Website content updates",
      "SEO coordination",
      "Digital advertising"
    ]
  },
  {
    slug: "wellspire-international-school",
    name: "Wellspire International School",
    location: "Hyderabad, Telangana",
    curriculum: "CBSE curriculum",
    website: "https://www.wellspireschool.com/",
    image: "/wellspire-international-school.jpg",
    scope: [
      "Website design & development",
      "Website maintenance & updates"
    ]
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    slug: "why-parents-reject-schools-digital-audit",
    title: "Why Modern Parents Reject Your School Before Ever Visiting the Campus",
    category: "Parent Psychology",
    readTime: "7 min read",
    publishDate: "October 2026",
    excerpt: "Many parents shortlist schools on their phones long before they call the admissions office. Here is what they look for—and what puts them off.",
    author: {
      name: "Saketh Rapaka",
      role: "Principal Growth Strategist, PII Digital Media",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    keyTakeaways: [
      "Millennial parents research schools in micro-moments late at night on their smartphones.",
      "A fee structure or admission criteria buried in a long PDF download is a common reason parents give up.",
      "Generic stock photography of foreign students creates immediate distrust.",
      "Parents evaluate student emotional safety and teacher warmth long before examining board exam percentages."
    ],
    contentSections: [
      {
        heading: "The Shift in Parent Evaluation Habits",
        body: "Ten years ago, parents relied primarily on apartment association word-of-mouth and driving past school gates. Today, many parents research a school thoroughly on their mobile devices before calling an admissions counselor. They inspect your Google Maps reviews, scan your Instagram reels for authentic classroom activity, and scrutinize your website on their phone while commuting."
      },
      {
        heading: "The Fatal Mistake: The Academic PDF Graveyard",
        body: "Nothing kills parent interest faster than clicking 'Admissions' and finding a non-responsive table or a multi-megabyte PDF that requires manual zoom on a phone screen. Modern parents expect interactive, transparent experiences: clear age eligibility calculators, transparent fee breakdown frameworks, and instant 1-click WhatsApp tour scheduling."
      },
      {
        heading: "Humanizing the Institution",
        body: "Show the humans behind the curriculum. Feature candid interviews with primary coordinators, show how the school handles cafeteria nutrition, and let existing parents talk about how their once-shy child bloomed on stage. Authenticity outperforms polish every single time."
      }
    ],
    tags: ["Parent Psychology", "School Admissions", "UX Design", "Conversion Rate"]
  },
  {
    slug: "school-admission-marketing-calendar-blueprint",
    title: "The 8-Month Admission Campaign Blueprint: Stop Panic Marketing in March",
    category: "Admissions Marketing",
    readTime: "9 min read",
    publishDate: "September 2026",
    excerpt: "The most successful schools don't start running ads in February. Learn how an orchestrated 4-phase calendar helps fill seats before the spring admission crunch begins.",
    author: {
      name: "Devendra Verma",
      role: "Head of Performance Marketing",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    keyTakeaways: [
      "Phase 1 (October-November): Brand Authority & Early Parent Awareness.",
      "Phase 2 (December-January): Campus Open Days & Early-Bird Priority Inquiries.",
      "Phase 3 (February-March): Retargeting & Closing Specific Grade Vacancies.",
      "Phase 4 (April-May): Sibling Enrollments & Orientation Nurturing."
    ],
    contentSections: [
      {
        heading: "The Pitfall of Last-Minute Panic Marketing",
        body: "Every year, school trustees experience the same anxiety: when application counters look thin in February, they hurriedly instruct their teams to print brochures, sponsor road dividers, and blast untargeted digital ads. This leads to high lead acquisition costs, overwhelmed counselors, and parents feeling that the school is desperate rather than prestigious."
      },
      {
        heading: "Phase 1: Plant the Seeds of Desire (October - November)",
        body: "During autumn, top schools run emotional brand films and pedagogical storytelling campaigns. No hard sell—just celebrating science exhibitions, sports day energy, and alumni achievements. This establishes top-of-mind brand recall when parents begin actively debating school changes over the winter holidays."
      },
      {
        heading: "Phase 2: The Open Day Blitz (December - January)",
        body: "Transition from awareness to action. Invite prospective families to structured campus discovery mornings where children take part in robotics, clay modeling, or sports clinics while parents interact with the principal over coffee. Experiential campus visits tend to convert far better than cold desk walk-ins."
      }
    ],
    tags: ["Admissions Strategy", "Campaign Planning", "Budget Allocation", "Open Days"]
  },
  {
    slug: "local-seo-google-map-pack-domination-schools",
    title: "How to Rank in the Top 3 on Google Maps for 'Best School Near Me'",
    category: "Search & Local SEO",
    readTime: "8 min read",
    publishDate: "August 2026",
    excerpt: "A large share of school searches happen on Google Maps. Here is a practical local SEO checklist for showing up in the Local 3-Pack.",
    author: {
      name: "Pooja Sundaram",
      role: "Senior SEO & Technical Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    keyTakeaways: [
      "Your Google Business Profile primary category must precisely match parent search intent.",
      "Review velocity and genuine photo updates matter more than backlink counts in local pack algorithms.",
      "Hyper-local catchment landing pages are necessary to capture queries beyond a 5km radius.",
      "Implementing structured EducationalOrganization schema markup provides search engines with verifiable campus data."
    ],
    contentSections: [
      {
        heading: "Why Google Maps is Your Highest ROI Marketing Asset",
        body: "When a family moves to a new residential apartment complex, their first action is opening Google Maps and typing 'CBSE school near me' or 'preschool within 5 km'. If your school is not featured prominently in the Top 3 Local Pack, you are invisible to many of those families."
      },
      {
        heading: "Optimizing the Google Business Profile (GBP)",
        body: "Ensure your primary category is accurately selected ('CBSE School', 'International School', 'Preschool', or 'College'). Add weekly photo updates showcasing authentic campus life—not just graphic banners. Geotagged campus images, completed service attributes (wheelchair accessible, sports facilities, transportation), and regular Q&A responses signal high institutional vitality to Google."
      },
      {
        heading: "Engineering Catchment Area Landing Pages",
        body: "Schools draw students along specific transport bus routes. Build dedicated indexable pages for key surrounding neighborhoods (e.g., 'Best ICSE School for families residing in Whitefield / HSR Layout'). Detail average bus commute times, pickup safety protocols, and student testimonials from those specific areas."
      }
    ],
    tags: ["Local SEO", "Google Maps", "School Ranking", "Schema Markup"]
  },
  {
    slug: "measuring-roi-in-education-marketing",
    title: "Cost Per Enquiry vs Cost Per Enrolment: The True Metrics of Education Marketing",
    category: "Digital Strategy",
    readTime: "6 min read",
    publishDate: "July 2026",
    excerpt: "Cheap leads that never answer phone calls are an expensive illusion. Learn how to align digital marketing spend directly with completed fee payments and classroom retention.",
    author: {
      name: "Saketh Rapaka",
      role: "Principal Growth Strategist, PII Digital Media",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    keyTakeaways: [
      "Never judge agency performance by click-through rates or raw leads alone.",
      "The 5 critical conversion gates: Impression → Lead → Qualified Lead → Campus Tour → Enrolment.",
      "Why counselor speed-to-lead matters for campus visit confirmations.",
      "Calculating Lifetime Student Value (LTV) to determine rational student acquisition budgets."
    ],
    contentSections: [
      {
        heading: "The Deception of the '₹50 Lead'",
        body: "Many digital agencies boast about delivering leads at ₹50 on social media by running misleading survey forms. However, when the school admission desk calls those numbers, many respondents state they clicked by accident or thought the school offered full scholarships. The true cost of bad leads is demoralized admissions staff and missed targets."
      },
      {
        heading: "The 5-Gate Educational Funnel",
        body: "At PII Digital Media, we measure performance through 5 disciplined checkpoints: 1) Verified Enquiry (correct student age and board intent), 2) Counselor Connect (meaningful 3-minute discussion), 3) Campus Tour Scheduled, 4) Campus Tour Completed, and 5) Application Form & Fee Deposit Completed. Marketing optimization must be governed by Step 4 and Step 5."
      }
    ],
    tags: ["Marketing ROI", "Admissions CRM", "Analytics", "Executive Advisory"]
  }
];

export const FREQUENT_QUESTIONS: FAQItem[] = [
  {
    category: "General",
    question: "What does PII Digital Media do?",
    answer: "We manage digital marketing for schools. Depending on what each school needs, that covers social media management, posters and carousels, reels and promotional videos, admission campaigns, Google Ads and Meta Ads coordination, website content updates, SEO-related work, content calendars, and performance reporting."
  },
  {
    category: "General",
    question: "Which schools do you work with?",
    answer: "We currently work with CMR School, Kompally; CMR School, Kundapally; Malla Reddy School, Medchal; and Wellspire International School."
  },
  {
    category: "Admissions",
    question: "Do you guarantee a specific number of admissions or enquiries?",
    answer: "No. Admissions depend on many things outside marketing, including the campus visit, fees, and the conversation with the school's team. We do not promise admission or enquiry numbers. We commit to the work itself: planned content, campaigns delivered on schedule, and honest reporting on how they performed."
  },
  {
    category: "Strategy",
    question: "How do you keep each school's work separate?",
    answer: "Each school's information, content, campaigns, assets, and performance reports are handled separately. We also confirm details such as names, dates, and admission information with the school before publishing them."
  },
  {
    category: "Pricing & Engagement",
    question: "What does an engagement look like?",
    answer: "The scope is agreed with each school based on its requirements. Some schools need social media and creatives, others also need ads, website updates, or SEO. Get in touch and we will discuss what your school needs."
  },
  {
    category: "General",
    question: "Can we engage you for a single piece of work, such as an admission campaign?",
    answer: "Yes. Tell us what you need through the contact form or on WhatsApp and we will discuss the scope with you."
  }
];

export const GROWTH_FRAMEWORK = [
  {
    step: "01",
    phase: "Discover",
    headline: "Be Visible Where Parents Start Looking",
    tagline: "Be found when families begin exploring schools in your area.",
    description: "Parents usually begin with a search or a recommendation, then look the school up online. We work on search visibility, ads, and social media content so the school is easier to find at that moment.",
    channels: ["Search Ads", "SEO", "Social Media Posts", "Reels"],
    metric: "Reach and awareness",
    color: "from-[#6C836F] to-[#0D151D]"
  },
  {
    step: "02",
    phase: "Trust",
    headline: "Show the School as It Really Is",
    tagline: "Build confidence with accurate information and real school life.",
    description: "When a parent looks at the school's website and social accounts, they want to see what school life is like. Regular content from celebrations, activities, and achievements does that better than slogans.",
    channels: ["Event Content", "Promotional Videos", "Achievement Posts", "Accurate Website Content"],
    metric: "Engagement with school content",
    color: "from-[#0D151D] to-[#6C836F]"
  },
  {
    step: "03",
    phase: "Enquire",
    headline: "Make It Easy to Ask",
    tagline: "A clear next step for an interested parent.",
    description: "An interested parent should be able to enquire in a moment. Admission creatives, ads, and website pages should all point to a clear way to contact the school.",
    channels: ["Admission Creatives", "Meta Ads", "Google Ads", "Website Admission Pages"],
    metric: "Enquiries received",
    color: "from-[#6C836F] to-[#10B981]"
  },
  {
    step: "04",
    phase: "Visit",
    headline: "Support the Campus Visit",
    tagline: "Turning online interest into a visit to the school.",
    description: "The campus visit is where most decisions are made. Marketing supports it with clear admission information and timely announcements; the visit itself is led by the school's team.",
    channels: ["Admission Announcements", "Event Promotion", "Social Media Updates", "Website Updates"],
    metric: "Campus visits",
    color: "from-[#10B981] to-[#0D151D]"
  },
  {
    step: "05",
    phase: "Enrol",
    headline: "Keep Communicating After Admission",
    tagline: "Current parents are part of the audience too.",
    description: "Marketing does not end at admission. Continuing to share celebrations, activities, and achievements keeps current parents informed and shows prospective parents an active school community.",
    channels: ["Celebration Content", "Activity Updates", "Achievement Posts", "Performance Reports"],
    metric: "Admissions, as reported by the school",
    color: "from-[#0D151D] to-[#6C836F]"
  }
];
