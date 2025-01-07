export const gridItems = [
	{
		id: "1",
		title: "Agile problem solver who remains composed under pressure.",
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
		title: "Rooted in fundamentals, focused on excellence!",
		description: "Software development expertise is rooted in proven concepts and design principles.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: "4",
		title: "Team player with a positive mindset and empathy for others.",
		description: "History of building meaningful relationships through respect, honesty, and integrity.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: "5",
		title: "Seasoned veteran with a breadth of professional experience in a variety of roles and industries.",
		description: "Experience in Software Development, Human Resources, and Project Management.",
		className: "md:col-span-3 md:row-span-3",
		imgClassName: "absolute right-0 bottom-0 w-60 mix-blend-overlay h-full md:w-96 sm:w-1/2",
		titleClassName: "justify-center",
		img: "/experience.png",
		spareImg: "",
	},
	{
		id: "6",
		title: "Excellent verbal, writing, and listening skills!",
		description: "Effective at articulating complex ideas to colleagues and clients at all levels of the organization.",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full",
		img: "",
		spareImg: "",
	},
	{
		id: "7",
		title: "Let's connect!",
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
		description: "A digital adaptation of the popular tabletop word-association game, <i>So Clover!</i>",
		img: "/p1.png",
		iconList: ["React", "Meteor.js", "TypeScript", "TailwindCSS", "Mocha", "MongoDB"],
		link: "https://mngatewood-keys-cogs.meteorapp.com/",
		linkTitle: "mngatewood-keys-cogs.meteorapp.com",
		repo: "https://github.com/mngatewood/keys-cogs"
	},
	{
		id: "2",
		title: "P.I. Link",
		description: "A companion app for the deduction and bluffing board game, <i>Detective Club</i>.",
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
		iconList: ["React", 'Node.js', "Express", "PostgreSQL"],
		link: "https://movie-tracker2-production.up.railway.app/",
		linkTitle: "movie-tracker2-production.up.railway.app",
		repo: "https://github.com/mngatewood/movie-tracker2"
	},
	{
		id: "4",
		title: "Michael N. Gatewood Portfolio",
		description: "My official website for potential clients, employers, and others to learn more about me.",
		img: "/p4.png",
		iconList: ["React", "Next.js", "TailwindCSS", "TypeScript"],
		link: "https://mngatewood.com",
		linkTitle: "mngatewood.com",
		repo: "https://github.com/mngatewood/portfolio-website"
	},
	{
		id: "5",
		title: "Gloomhaven Deck Builder",
		description: "A deck-builder for the role-playing board game, <i>Gloomhaven</i>.",
		img: "/p-gloomhaven.png",
		iconList: ["React", "Redux", "Express", "Firebase", "PostgreSQL"],
		link: "",
		linkTitle: "",
		repo: "https://github.com/mngatewood/gh-deckbuilder"
	},
{
		id: "6",
		title: "Trigger",
		description: "An app that relates ailments to their potential causes based on your personal habits.",
		img: "/p-trigger.png",
		iconList: ["React", "Redux"],
		link: "",
		linkTitle: "",
		repo: "https://github.com/Diazblack/trigger"
	},
	{
		id: "7",
		title: "Bar Builder",
		description: "Cocktail recipes that you can make with the ingredients you have at home.",
		img: "/p-barbuilder.png",
		iconList: ["React", "Redux"],
		link: "",
		linkTitle: "",
		repo: "https://github.com/mngatewood/bar-builder"
	},
	{
		id: "8",
		title: "Book Club",
		description: "A sortable collection of books, authors and reviews.",
		img: "/p-bookclub.png",
		iconList: ["Ruby on Rails", "PostgreSQL"],
		link: "",
		linkTitle: "",
		repo: "https://github.com/mngatewood/book_club"
	},
	{
		id: "9",
		title: "Pitcher",
		description: "Choose a nearby restaurant based on your first impression of food images.",
		img: "/p-pitcher.png",
		iconList: ["Ruby on Rails", "PostgreSQL"],
		link: "",
		linkTitle: "",
		repo: "https://github.com/Kate-v2/Pitcher"
	},
	{
		id: "10",
		title: "Tron Legacy",
		description: "An adaptation of the classic video game, <i>Tron</i>.",
		img: "/p-tron.png",
		iconList: ["Webpack", "Mocha"],
		link: "",
		linkTitle: "",
		repo: "https://github.com/mngatewood/book_club"
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
	{
		name: "Contact",
		link: "#footer",
	}
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
		quote: "I had the pleasure of working alongside Michael Gatewood, a remarkable full-stack developer and veteran who brings unparalleled dedication, technical expertise, and leadership to every project he touches.",
		name: "Philip Stenberg",
		title: "Systems Services NCOIC, Nevada Army National Guard",
		profile: "/profile3.jpeg",
	},
	{
		quote: "Mr. Gatewood was ordered to full-time military duty in October of 2013, yet continued to assist the Center in evenings and weekends.  He went above and beyond the highest expectations by always helping out during his free time in order to ensure that the Center continued to move forward.",
		name: "Joseph I. O'Brien, O.P.",
		title: "Executive Director, Saint Therese Center HIV Outreach",
		profile: "/profile4.jpg",
	},
	{
		quote: "I had the pleasure of working alongside Michael, a software engineer who truly stands out for his ability to quickly master new technologies and, even more impressively, share his knowledge with the team. Michael's eagerness to learn is matched by his enthusiasm to teach, making complex topics accessible to everyone, especially new team members.",
		name: "Quinn Krug",
		title: "Data Analyst, CI Web Group",
		profile: "/profile5.jpeg",
	},
];

export const experiences = [
	{
		id: "1",
		title: "Software Development Technical Lead",
		description: "Led a cross-functional team to deliver integrated software solutions on time and within scope.",
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
		description: "Earned rare distinction as first student to graduate from both front-end and back-end engineering programs.",
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
		description: "Led and mentored large team in overseas postal operations, ensuring accountability and efficiency.",
		company: "United States Army",
		companyLink: "https://www.army.mil/",
		location: "Southwest Asia & Fort Carson, CO",
		thumbnail: "/experience3w.jpeg",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		iconList: ["Microsoft Teams", "Microsoft Access", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Word", "Microsoft SharePoint"]
	},
	{
		id: "4",
		title: "Volunteer and Technical Consultant",
		description: "Designed and implemented comprehensive IT solutions for non-profit organization.",
		company: "Saint Therese Center",
		companyLink: "https://www.facebook.com/STCLV18/",
		location: "Henderson, NV",
		thumbnail: "/experience4.png",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		iconList: ["HTML", "CSS", "Windows Server", "Microsoft Exchange", "Microsoft Access", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Word"]
	},
]

export const alignment = [
	{
		id: "1",
		title: "Why You Want to Work with Me",
		list: [
			"Proficient in a number of programming languages, frameworks, and tools.",
			"Able to solve complex problems in a timely and efficient manner.",
			"Highly experienced professional with a strong foundation in multiple disciplines.",
			"Proven track record of building successful teams and delivering quality results.",
			"Excellent communication skills with positive energy and a friendly demeanor.",
			"Highly versatile and eager to contribute when and where needed.",
			"Always excited to learn new technologies and take on new challenges.",
			"Adaptable schedule and willing to relocate or work remotely.",
		],
		animationSpeed: 5.1,
		containerClassName: "bg-pink-900",
		colors: [[125, 211, 252]],
	},
	{
		id: "2",
		title: "Why I Want to Work with You",
		list: [
			"Opinions from all members of the team are valued, and processes are employee-driven.",
			"Excellence and dedication are rewarded by promoting from within the organization.",
			"Comradery and collaboration are promoted through trust, communication, and celebrating successes.",
			"Team members are commended and recognized for going above and beyond.",
			"The company demonstrates commitment to its employees by prioritizing professional development.",
			"The team exhibits a startup-like enthusiasm and is able to pivot when necessary.",
			"Every individual contributor is treated with respect and dignity.",
		],
		animationSpeed: 3,
		containerClassName:"bg-indigo-900",
		colors: [[125, 211, 252]],
	},
]

export const titles = [
	"Software Engineer",
	"Problem Solver",
	"Collaborator",
	"Army Veteran",
	"Communicator",
	"Learner",
	"Father & Husband",
	"Leader",
	"Craftsman",
	"Musician",
	"Team Builder",
	"Professional",
	"Contributor",
	"Go-Getter",
	"Tinkerer",
	"Boardgamer"
]
