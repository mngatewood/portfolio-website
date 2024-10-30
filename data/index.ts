export const gridItems = [
	{
		id: "1",
		title: "Agile problem-solver who remains composed under pressure",
		description: "Strong analytical skills enable rapid diagnosis and resolution of code issues while delivering precise and effective solutions.",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4",
		imgClassName: "w-full h-full rounded-3xl",
		titleClassName: "justify-end",
		img: "/analytical.png",
		spareImg: "",
	},
	{
		id: "2",
		title: "My toolbox:",
		description: "Love of discovery and insatiable curiosity lead to continuous personal improvement.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2 pb-16 lg:pb-24",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: "3",
		title: "Yes, I can!",
		description: "Team player with a positive mindset and empathy for others.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: "4",
		title: "Advocate for test-driven development, modularity, version control and KISS!",
		description: "Familiar with fundamental software development concepts and design principles",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},

	{
		id: "5",
		title: "Seasoned veteran with a breadth of professional experience in a variety of roles and industries",
		description: "Experience in Software Development, Human Resources, and Project Management",
		className: "md:col-span-3 md:row-span-3",
		imgClassName: "absolute right-0 bottom-0 w-60 mix-blend-overlay h-full md:w-96 sm:w-1/2",
		titleClassName: "justify-center",
		img: "/experience.png",
		spareImg: "",
	},
	{
		id: "6",
		title: "Excellent verbal, written and listening skills!",
		description: "Effective at articulating complex ideas to colleagues and clients at all levels of the organization",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full",
		img: "",
		spareImg: "",
	},
	{
		id: "7",
		title: "Let's chat!",
		description: "Want to learn more?",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center max-w-full text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: "1",
		title: "Keys & Cogs",
		description: "Keys & Cogs is a digital adaptation of the popular tabletop game, So Clover!",
		img: "/p1.png",
		iconList: ["React", "Meteor.js", "TypeScript", "TailwindCSS", "Mocha"],
		link: "https://mngatewood-keys-cogs.meteorapp.com/",
		linkTitle: "mngatewood-keys-cogs.meteorapp.com",
		repo: "https://github.com/mngatewood/keys-cogs"
	},
	{
		id: "2",
		title: "P.I. Link",
		description: "PI Link is a digital reimplementation of the board game titled Detective Club.",
		img: "/p2.png",
		iconList: ["Svelte", "TypeScript", "TailwindCSS", "Pocketbase", "Playwright", "Docker"],
		link: "https://pi-link-web-production.up.railway.app/",
		linkTitle: "pi-link-web-production.up.railway.app",
		repo: "https://github.com/mngatewood/pi-link-web"
	},
	{
		id: "3",
		title: "My Movie Tracker",
		description: "A React app that displays movie data and allows users to save their favorite movies.",
		img: "/p3.png",
		iconList: ["React", "Express"],
		// TODO: rebuild backend, deploy, and update link
		link: "https://www.my-movie-tracker.com/",
		linkTitle: "my-movie-tracker.com",
		repo: "https://github.com/mngatewood/movie-tracker2"
	},
	{
		id: "4",
		title: "Michael N. Gatewood Portfolio",
		description: "This is the digital portfolio for Michael N. Gatewood.",
		img: "/p4.png",
		iconList: ["React", "Next.js", "TailwindCSS", "TypeScript"],
		link: "https://mngatewood.com",
		linkTitle: "mngatewood.com",
		repo: "https://github.com/mngatewood/portfolio-website"
	},
]

export const navItems = [
	{
		name: "About",
		link: "#about",
	},
	{
		name: "Projects",
		link: "#projects",
	},
	{
		name: "Testimonials",
		link: "#testimonials",
	},
	{
		name: "Experience",
		link: "#experience",
	},
]

export const testimonials = [
	{
		quote: "Michael is conscientious, skilled in project management methods, and is a terrific person to have in your team. He's essentially a force multiplier when it comes to helping keep a group's projects on track. He helped me in particular with a project involving the development of a psychological assessment for use in the K-12 market.",
		name: "Drew Carson, Ph.D.",
		title: "Founder and CEO, Insta Report Assessment",
		profile: "/profile1.jpeg",
	},
	{
		quote: "Michael is a dedicated team player who possesses the skills and knowledge needed to achieve excellent results.",
		name: "Kimberly Block",
		title: "Senior Program Manager, Data Recognition Corporation",
		profile: "/profile2.jpeg",
	},
	{
		quote: "I had the pleasure of working alongside Micheal Gatewood, a remarkable full-stack developer and veteran who brings unparalleled dedication, technical expertise, and leadership to every project he touches.",
		name: "Philip Stenberg",
		title: "Systems Services NCOIC, Nevada Army National Guard",
		profile: "/profile3.jpeg",
	},
	{
		quote: "Mr. Gatewood was ordered to full-time military duty in October of 2013, yet continued to assist the center in evenings and weekends.  He went above and beyond the highest expectations by always helping out during his free time in order to ensure that the Center continued to move forward. In September of 2014, the Saint Therese Center HIV Outreach presented Mr. Gatewood the Blue Rose of Safety and Prevention Award.",
		name: "Joseph I. O'Brien, O.P.",
		title: "Executive Director, Saint Therese Center HIV Outreach",
		profile: "/profile4.jpg",
	}
];

export const experiences = [
	{
		id: "1",
		title: "Full-Stack Developer",
		description: "Designed and implemented software solutions that integrated across multiple applications within a complex technology stack.  Managed a team of developers to deliver high quality products on-time and within scope. Worked closely with cross-functional Product team to assess project feasibility, define technical specifications, and establish project timelines and milestones.",
		company: "Coin Cloud Inc.",
		companyLink: "https://coincloudatm.com/",
		location: "Las Vegas, NV",
		thumbnail: "/experience1w.jpeg",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		iconList: ["AngularJS", "Meteor.js", "MongoDB", "TypeScript", "Node.js", "AWS", "Docker", "Jira", "Git", "GitHub", "Postman"]
	},
	{
		id: "2",
		title: "Software Engineering Student",
		description: "Applied fundamental software engineering principles and best practices in an intense course of study spanning more than fourteen months.  First student ever to be inducted into the '14er' club by graduating from both Front-End and Back-End Engineering programs.",
		company: "Turing School of Software and Design",
		companyLink: "https://turing.edu/",
		location: "Denver, CO",
		thumbnail: "/experience2.jpeg",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		iconList: ["React", "PostgreSQL", "Mocha", "Chai", "GraphQL", "jQuery", "Ruby on Rails", "Sinatra", "Git", "GitHub", "Postman"]
	},
	{
		id: "3",
		title: "Human Resources Manager",
		description: "Trained, supervised, and mentored staff in oversight and management of postal operations and personnel accountability for entire U.S. Central Command at Camp Arifjan, Kuwait. Provided direction and support to subordinate postal and accountability teams of more than 300 personnel and reported daily status to Brigade and Theater command staff.",
		company: "United States Army",
		companyLink: "https://www.army.mil/",
		location: "Southwest Asia & Fort Carson, CO",
		thumbnail: "/experience3w.jpeg",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		iconList: ["Microsoft Teams", "Microsoft Access", "Microsoft Excel", "Microsoft Powerpoint", "Microsoft Word", "Microsoft SharePoint"]
	},
	{
		id: "4",
		title: "Volunteer and Technical Consultant",
		description: "Developed a responsive e-commerce website for marketing and processing donations. Established, installed, and maintained an organizational standard for software, hardware and telephony, including a corporate network and server. Installed and monitored security camera system. Provided desktop support to staff and volunteers.",
		company: "Saint Therese Center",
		companyLink: "https://www.facebook.com/STCLV18/",
		location: "Henderson, NV",
		thumbnail: "/experience4.png",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		iconList: ["HTML", "CSS", "Windows Server", "Microsoft Exchange","Microsoft Access", "Microsoft Excel", "Microsoft Powerpoint", "Microsoft Word"]
	},
]