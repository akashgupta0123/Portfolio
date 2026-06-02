export const blogs = [
  {
    id: 1,
    title: "Building CollabZone — A Full Stack MERN Influencer Platform",
    image: "/gallery/Projects/collabzone.png",
    category: "Full Stack",
    date: "May 15, 2025",
    readTime: "8 min read",
    shortDesc:
      "How I designed and built a full-stack influencer collaboration platform using the MERN stack with JWT authentication, role-based dashboards, and campaign management.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    skills: ["Full Stack Development", "REST API Design", "Authentication", "Database Design"],
    github: "https://github.com/akashgupta0123",
    demo: "https://akash-portfolio-tsev.onrender.com/",
    content: `
## The Idea Behind CollabZone

Every great project starts with a problem worth solving. I noticed that brands and influencers had no clean, organized platform to manage their collaborations professionally. Most were relying on DMs, spreadsheets, and emails — which is chaotic.

That's where CollabZone was born.

CollabZone is a full-stack influencer collaboration platform where brands can discover influencers, launch campaigns, track analytics, and manage the entire collaboration workflow — all in one place.

---

## Planning the Architecture

Before writing a single line of code, I spent two days sketching the architecture.

The key decisions were:

- **Frontend**: React.js with component-based structure
- **Backend**: Node.js + Express.js REST API
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based with role separation (Brand / Influencer)
- **Styling**: Tailwind CSS for utility-first design

The most important early decision was **role-based access**. Brands and influencers needed completely different dashboards, permissions, and data views.

---

## Setting Up the Backend

I started with the backend because the entire frontend depends on having working APIs.

**Step 1 — Project Structure**

I organized the backend into:

\`\`\`
server/
├── controllers/
├── middleware/
├── models/
├── routes/
└── server.js
\`\`\`

**Step 2 — MongoDB Models**

I designed three core models:

- **User** (handles both Brand and Influencer with a role field)
- **Campaign** (created by brands, applied to by influencers)
- **Application** (tracks which influencer applied to which campaign)

**Step 3 — JWT Authentication**

One of the trickier parts was building secure JWT authentication.

I implemented:
- Register and Login routes
- Password hashing with bcrypt
- JWT token generation on login
- Protected middleware to verify tokens on every private route

The middleware checks for the Authorization header, verifies the token, and attaches the user object to req.user before passing control to the controller.

---

## Building the Frontend

With the backend running, I moved to React.

**Component Structure**

I kept the component tree clean and modular:

- **Auth pages**: Login, Register with role selection
- **Brand Dashboard**: Campaign creation, influencer discovery, analytics
- **Influencer Dashboard**: Browse campaigns, apply, track status
- **Shared components**: Navbar, Cards, Modals, Loaders

**State Management**

I used React Context for global auth state. Every protected page checks if the user is authenticated and redirects to login if not.

---

## The Challenges I Faced

**Challenge 1 — Role-Based Routing**

Getting React Router to handle role-based protected routes was tricky. I built a custom PrivateRoute component that checks both authentication status and user role before rendering the page.

**Challenge 2 — CORS in Development**

When my React frontend tried calling my Express backend during development, I kept hitting CORS errors. The fix was adding the cors package and configuring allowed origins properly.

**Challenge 3 — MongoDB Relationships**

MongoDB is schema-less, but I still needed relational logic. I used Mongoose's populate() method to link Campaign documents with User documents efficiently.

---

## What I Learned

Building CollabZone taught me more than any tutorial ever could:

- How to design RESTful APIs that are clean and scalable
- How JWT authentication actually works under the hood
- The importance of planning database schemas before coding
- How to debug CORS, token expiry, and async errors
- How to structure a full-stack project professionally

---

## What I Would Do Differently

If I rebuilt CollabZone today, I would:

- Add Redis for caching frequently accessed data
- Implement refresh tokens for better session management
- Add real-time notifications using Socket.io
- Write unit tests for critical API routes

---

## Final Thoughts

CollabZone is the project I am most proud of. It pushed me outside my comfort zone, forced me to think like a backend engineer, and taught me how real-world full-stack applications are built.

If you are a MERN developer looking for a challenging project — build something with real authentication, real roles, and real business logic. You will learn 10x more than any tutorial.
    `,
  },
  {
    id: 2,
    title: "My Frontend Development Journey — From Zero to React",
    image: "/gallery/Projects/frontend-journey.jpg",
    category: "Frontend",
    date: "April 10, 2025",
    readTime: "6 min read",
    shortDesc:
      "A personal story of how I went from knowing nothing about web development to building full React applications with modern UI practices.",
    techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    skills: ["Frontend Development", "Responsive Design", "Component Architecture", "UI/UX"],
    github: "https://github.com/akashgupta0123",
    demo: "https://akash-portfolio-tsev.onrender.com/",
    content: `
## Where It All Started

I still remember the first time I opened a code editor. I had no idea what I was doing. I typed my first HTML tag — a simple h1 — and saw it appear in the browser.

That moment hooked me.

---

## The HTML and CSS Phase

The first few weeks were pure HTML and CSS. I built static pages, practiced layouts, and slowly started understanding the box model, flexbox, and grid.

The biggest mindset shift was realizing that **CSS is not random** — it follows rules. Once I internalized flexbox, everything clicked.

Things I practiced:

- Semantic HTML structure
- CSS Flexbox layouts
- CSS Grid for complex designs
- Responsive design with media queries
- CSS animations and transitions

---

## JavaScript Changed Everything

Moving from CSS to JavaScript was a giant leap. JavaScript is a real programming language with logic, conditions, loops, and data manipulation.

I spent weeks on:

- DOM manipulation
- Event listeners
- Array and object methods
- Async programming (fetch, promises, async/await)
- ES6+ features (arrow functions, destructuring, spread)

The project that solidified my JavaScript was building the **Calculator App** — handling operator logic, chaining calculations, and building a clean UI from scratch.

---

## My 45-Day Frontend Training

The real turning point was my 45-day industrial training at Alpha IT Managed Services.

During the training I:

- Built 8 complete frontend projects from scratch
- Learned professional project structure
- Practiced responsive design daily
- Got feedback from industry mentors
- Learned to read documentation independently

This training transformed me from someone who knew HTML into a developer who could build real interfaces.

---

## Discovering React

React changed the way I think about building UIs.

Instead of thinking about pages, I started thinking about **components**. Every piece of UI is a reusable building block. State drives the interface. Props pass data down. Events bubble up.

The first React concepts that blew my mind:

- Virtual DOM diffing
- Component lifecycle
- useState and useEffect hooks
- Conditional rendering
- List rendering with keys

---

## Building My Portfolio

Once I was comfortable with React, I built my personal portfolio.

The portfolio was not just a project — it was a statement. I poured everything I knew into it:

- Smooth scroll animations with Framer Motion
- Dark and light theme toggle
- Responsive layout across all screen sizes
- Glassmorphism card design
- EmailJS contact form integration

Building the portfolio taught me that **details matter**. The difference between a good portfolio and a great one is the micro-interactions, the transitions, the consistency.

---

## Lessons for Beginners

If you are starting frontend development today, here is my honest advice:

1. Master HTML and CSS before touching JavaScript
2. Build projects — do not just watch tutorials
3. Read error messages carefully — they tell you exactly what is wrong
4. Embrace CSS frustration — it gets easier
5. Learn by copying good designs, then make them your own

---

## What Is Next

My frontend journey is far from over. I am currently exploring:

- TypeScript for type safety
- Next.js for server-side rendering
- Testing with Jest and React Testing Library
- Performance optimization techniques

The frontend world moves fast. The best developers are the ones who keep building, keep learning, and never stop being curious.
    `,
  },
  {
    id: 3,
    title: "What I Learned from Smart India Hackathon 2025",
    image: "/gallery/Projects/hackathon.png",
    category: "Hackathon",
    date: "March 5, 2025",
    readTime: "5 min read",
    shortDesc:
      "My experience participating in Smart India Hackathon 2025 with Team Aspire — the preparation, the pressure, the lessons, and why every developer should join a hackathon.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    skills: ["Team Collaboration", "Rapid Prototyping", "Problem Solving", "Presentation"],
    github: "https://github.com/akashgupta0123",
    demo: "",
    content: `
## Getting the Call

When our college announced Smart India Hackathon 2025 registrations, I signed up immediately. I had always wanted to test my skills under real pressure with real stakes.

Our team — Team Aspire — had 4 members. We had one week to prepare before the submission deadline.

---

## The Problem Statement

We were given a problem statement related to digital infrastructure and community services. Without going into specific details, the core challenge was:

**Build a solution that bridges government services and citizens using a digital platform.**

This was broad enough to be creative but specific enough to have real-world impact.

---

## The Preparation Week

We spent the first two days just brainstorming. No code. No design. Just ideas.

By day three, we had a clear plan:

- A React.js frontend with a clean, accessible UI
- A Node.js + Express backend with REST APIs
- MongoDB for flexible data storage
- A simple dashboard for both administrators and citizens

We divided responsibilities clearly:

- I handled the frontend and UI design
- My teammate handled backend APIs
- Two others handled research, documentation, and presentation

---

## The Build Days

The actual build was intense. We had around 72 hours to go from idea to working prototype.

**Day 1 — Setup and core structure**

We set up the repository, agreed on naming conventions, and built the core components. Communication was constant — every hour we synced on progress.

**Day 2 — Features and integration**

We connected the frontend to the backend. This is where the chaos began. CORS issues, API mismatches, and data formatting problems all hit at once.

The most valuable lesson: **document your API contracts before you build them**. We lost hours because the frontend expected one data shape and the backend returned another.

**Day 3 — Polish and presentation**

The final day was about making it presentable. We fixed bugs, improved the UI, wrote the documentation, and rehearsed the presentation.

---

## The Presentation

Presenting to the judges was nerve-wracking. They asked sharp questions:

- Why did you choose this tech stack?
- How does this scale?
- What are the security considerations?
- How would a real user interact with this?

We answered most questions confidently, but there were a few where we had to admit we had not thought about it. That honesty was important — judges can tell when you are bluffing.

---

## The Result

We secured second position.

But honestly, the position mattered less than what I took away from the experience.

---

## What Hackathons Teach You

Things I learned that no classroom can teach:

**1. Speed matters more than perfection**

In a hackathon, a working prototype beats a perfect design document every time. Ship something real.

**2. Communication is a technical skill**

The team that communicates clearly builds faster and breaks less. Daily standups, shared docs, and clear task ownership make all the difference.

**3. Scope aggressively**

We tried to build too many features in day one. By day two, we had to cut half of them. Start with the core feature that demonstrates your idea. Everything else is a bonus.

**4. Judges evaluate clarity, not complexity**

The most impressive presentations are not the ones with the most features. They are the ones that clearly explain the problem, the solution, and the impact in under two minutes.

---

## Should You Join a Hackathon?

Yes. Absolutely.

If you are a developer who has never joined a hackathon, sign up for the next one you find. It does not matter if you win. What matters is that you will build under pressure, work with a team, and come out knowing yourself as a developer better than you did before.

The best developers are not just good coders — they are good problem solvers, communicators, and builders. Hackathons train all three.
    `,
  },

  {
id: 4,
title: "Building CodeGuardian — My Journey Creating an AI-Powered Code Review Platform",
image: "/gallery/Projects/CodeGuardian.png",
category: "AI Project",
date: "June 2, 2026",
readTime: "8 min read",
shortDesc:
"The story behind CodeGuardian — an AI-powered code review platform that analyzes source code for security vulnerabilities, performance issues, maintainability concerns, and coding best practices using Google's Gemini AI.",

techStack: ["React.js", "Node.js", "Express.js", "Gemini AI", "Framer Motion", "PrismJS"],

skills: ["AI Integration", "Full Stack Development", "UI/UX Design", "Problem Solving"],

github: "https://github.com/akashgupta0123/CodeGuardian",

demo: "https://codeguardian-orpin.vercel.app",

content: `

## Why I Built CodeGuardian

As a student developer, I often faced the same problem after completing a project:

"How good is my code really?"

The application might work perfectly, but that doesn't mean the code is secure, scalable, or maintainable.

Professional developers usually have senior engineers who review their pull requests and provide feedback. As students and independent developers, we often don't have that luxury.

That idea led me to create CodeGuardian.

The goal was simple:

**Build an AI-powered platform that acts like a senior software engineer and reviews code automatically.**

---

## The Initial Idea

At first, the project was very basic.

The user could:

* Paste code
* Click a review button
* Receive AI-generated feedback

Technically it worked.

But the experience felt like a simple API wrapper.

I wanted something that felt like a real product rather than a college assignment.

That became the biggest challenge of the entire project.

---

## Defining the Vision

Before writing more code, I defined what CodeGuardian should actually be.

I wanted users to feel like they were interacting with a professional AI engineering tool.

Not just another chatbot.

The platform needed to:

* Analyze code quality
* Detect security vulnerabilities
* Suggest performance improvements
* Recommend best practices
* Provide maintainability feedback
* Present results in a professional way

Most importantly, the product needed to look and feel premium.

---

## Choosing the Tech Stack

I selected technologies that would allow rapid development while maintaining scalability.

Frontend:

* React.js
* Vite
* Framer Motion
* PrismJS
* React Markdown

Backend:

* Node.js
* Express.js

AI Layer:

* Google Gemini API

Deployment:

* Vercel
* Render

This stack allowed me to focus on product experience while leveraging modern development tools.

---

## Building the Frontend

The first version of the UI was extremely simple.

It contained:

* A code editor
* A review button
* An output section

It worked, but it lacked personality.

The platform did not feel like an AI product.

So I redesigned the entire interface.

The new version included:

* Modern SaaS-inspired layout
* Glassmorphism effects
* Dark professional theme
* Animated transitions
* Interactive score cards
* Syntax-highlighted editor

The goal was to create an interface that users would immediately trust.

---

## Creating the AI Review Workflow

One challenge was handling AI response times.

Nobody enjoys staring at a blank screen while waiting for an API response.

Instead of using a generic loading spinner, I designed a multi-step review workflow.

The system now simulates an AI analysis process:

* Initializing CodeGuardian
* Analyzing Code Structure
* Checking Security Vulnerabilities
* Evaluating Performance
* Generating Recommendations

This small change dramatically improved the user experience.

Users felt like the system was actively reviewing their code rather than simply waiting for an API response.

---

## Integrating Gemini AI

The most critical part of the platform was connecting it to Google's Gemini API.

I designed a detailed system prompt that instructs Gemini to behave like a senior software engineer with years of experience.

The AI reviews code based on:

* Security
* Performance
* Maintainability
* Readability
* Best Practices
* Scalability

Instead of generic answers, the platform generates structured developer-focused feedback.

This transformed CodeGuardian from a simple chatbot into a practical engineering tool.

---

## Challenges I Faced

No project is built without problems.

One of the biggest issues was API authentication.

I spent considerable time debugging API keys, environment variables, deployment settings, and authorization errors.

Another challenge was rate limiting.

The Gemini free tier allows only a limited number of requests.

When the limit was exceeded, users were presented with ugly backend errors.

This forced me to rethink error handling and create a better user experience for API failures.

Deployment also introduced new challenges.

What worked perfectly on localhost sometimes behaved differently in production environments.

Debugging Vercel, Render, environment variables, and CORS configurations taught me valuable lessons about real-world deployment.

---

## What I Learned

This project taught me far more than React or Node.js.

I learned:

**1. User Experience Matters**

A technically correct application can still feel unfinished if the user experience is poor.

The difference between a student project and a professional product is often the attention given to UX.

**2. Deployment Is Part of Development**

Building locally is only half the job.

Deploying, debugging production issues, and managing environment variables are essential development skills.

**3. AI Is a Tool, Not the Product**

Many developers simply wrap an AI model inside a UI.

The real challenge is creating a meaningful experience around that AI.

**4. Design Influences Trust**

Users judge a product within seconds.

A polished interface instantly makes the application feel more credible.

---

## Future Plans

CodeGuardian is not finished.

There are several features I plan to add in future versions:

* Review History
* Authentication System
* Export Reviews as PDF
* Saved Analysis Reports
* Dark and Light Themes
* Advanced Metrics Dashboard
* Repository Analysis
* GitHub Integration
* Improved Error Handling
* AI Model Fallback Support

The current version is the foundation.

The future goal is to evolve CodeGuardian into a complete AI-assisted engineering platform.

---

## Final Thoughts

CodeGuardian started as a simple idea:

"What if developers could have an AI senior engineer reviewing their code?"

What began as a small experiment became one of the most ambitious projects I have built.

More than the technology itself, the project taught me how to think like a product builder.

It forced me to focus not only on functionality but also on usability, deployment, design, and user experience.

For me, CodeGuardian is more than a portfolio project.

It represents my growth as a developer and my ability to turn an idea into a real product that people can use.

And honestly, that's the most valuable lesson of all.
,
`
},

];