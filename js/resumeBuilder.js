//bio json
var bio = {
	"name": "Ben Wright",
	"logo": "images/logo.svg",
	"role": "Front-End Web Developer",
	"contacts" : {
		"mobile": "978-866-4808",
		"email": "benwright120@gmail.com",
		"github": "bw120",
		"twitter": "@ben120",
		"location": "Boston, MA",
		"linkedIn": "bw120"
	},
	"welcomeMesage": "Front-End Web Developer with a passion for learning and solving problems",
	"skills": ["HTML", "CSS", "JavaScript", "GitHub", "Photoshop", "Illustrator"],
	"biopic": "images/ben_1x.jpg",
	"display": function(){
		//swap in the info from json into formatted html
		var logo = '<img src="%data%" class="logo">';
		var formattedLogo = logo.replace("%data%", bio.logo);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", "<span class='orange-text icons zocial-call'></span>" + bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", "<a href='mailto:" + bio.contacts.email + "' class='white-text'><span class='orange-text icons zocial-email'></span>" + bio.contacts.email + "</a>");
		var formattedTwitter = HTMLtwitter.replace("%data%", "<span class='orange-text icons zocial-twitter'></span>" + bio.contacts.twitter);
		var formattedLinkedIn = HTMLlinkedIn.replace("%data%", "<a href='https://www.linkedin.com/in/" + bio.contacts.linkedIn + "' class='white-text'><span class='orange-text icons zocial-linkedin'></span>" + bio.contacts.linkedIn + "</a>");
		var formattedGithub = HTMLgithub.replace("%data%", "<a href='https://github.com/" + bio.contacts.github + "' class='white-text'><span class='orange-text icons zocial-github'></span>" + bio.contacts.github + "</a>");
		var formattedLocation = HTMLlocation.replace("%data%", "<span class='orange-text icons fontawesome-globe'></span>" + bio.contacts.location);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMesage);
		var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedSkills;

		//add all the data to the page
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").prepend(formattedLogo);
		$("#header").append(formattedPic);
		$("#header").append(formattedWelcome);
		$("#header").append(HTMLskillsStart);
		//cycle through all the skills and add
		for (x in bio.skills) {
			formattedSkills = HTMLskills.replace("%data%", bio.skills[x]);
			$("#skills").append(formattedSkills);
		};

		//$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedLinkedIn);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedLinkedIn);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);

		//additional format adjustment for logo, name & role
		$("#header img:first, #header h1:first,  #header span:first").wrapAll("<div class='top-header'></div>")
		$("#header h1:first,  #header span:first").wrapAll("<div class='name-title'></div>");
		$("#header span:first").addClass("role");
	}
};

//education json
var education = {
	"school": [
		{
		"name": "Rochester Institute of Technology",
		"location": "Rochester, NY",
		"degree": "BS",
		"majors": "New Media Publishing",
		"dates": "1999 - 2003",
		"url": "www.rit.edu"
		},
		{
		"name": "Udacity",
		"location": "Online",
		"degree": "Nanodegree",
		"majors": "Front-End Web Development",
		"dates": "March 2015 - present",
		"url": "www.udacity.com"
		}
	],
	"onlineCourses" : [
		{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": "April 2015",
		"url": "www.udacity.com"
		},
		{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"date": "April 2015",
		"url": "www.udacity.com"
		},
		{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"date": "March 2015",
		"url": "www.udacity.com"
		},
		{
		"title": "Responsive Images",
		"school": "Udacity",
		"date": "March 2015",
		"url": "www.udacity.com"
		},
		{
		"title": "How to Use Git and GitHub",
		"school": "Udacity",
		"date": "March 2015",
		"url": "www.udacity.com"
		},
		{
		"title": "Object-Oriented JavaScript",
		"school": "Udacity",
		"date": "May 2015",
		"url": "www.udacity.com"
		},
		{
		"title": "HTML5 Canvas",
		"school": "Udacity",
		"date": "May 2015",
		"url": "www.udacity.com"
		}
	],
	"display": function(){
		//format and add the school details
		for (x in education.school) {

			var formattedName = HTMLschoolName.replace("%data%", education.school[x].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[x].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.school[x].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[x].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[x].majors);

			var schoolDetails =  formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(schoolDetails);
		}

		//format and add the online class details
		$("#education").append("<br>" + HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		for (x in education.onlineCourses) {

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].date);
			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[x].url);
			var onlineDetails =  formattedTitle + formattedSchool + formattedDates + formattedURL;


			$(".education-entry:last").append(onlineDetails);
		};
	}
};

//work json
var work = {
	"jobs": [
		{
		"employer": "Pearson",
		"title": "Procurement and Manufacturing Specialist",
		"location": "Boston, MA",
		"dates": "March 2009 - present",
		"description": "Coordinate the manufacturing of print and media projects with vendors. Maintain schedules collaboratively with vendors. Ensure that each job meets price targets, quality standards and customer needs."
		},
		{
		"employer": "Quebecor World",
		"title": "Customer Service Representative",
		"location": "Leominster, MA",
		"dates": "October 2006 - October 2008",
		"description": "Served as the primary contact for over 5 major clients. Several of these bringing in over $1 million in revenue for the plant. Documented client approvals for each project milestones by sending proofs and hosting the client for on-site press OK’s. Communicated deadlines and due dates to clients for customer supplied files and materials. Collaborated with clients on technical issues to ensure that their projects met their needs."
		},
		{
		"employer": "Acme Bookbinding",
		"title": "Imaging Manager and Customer Service",
		"location": "Charlestown, MA",
		"dates": "June 2003 - October 2006",
		"description": "Work as a liaison between the print customers and Acme. Manage the scanning, prepress & digital print workflow. Went to trade shows including On-Demand and BookTech to evaluate new print technologies and to make contact with potential customers."
		},
		{
		"employer": "RIT Prepress & Publishing Lab / Digital Publishing Center ",
		"title": "Operations Manager",
		"location": "Rochester, NY",
		"dates": "March 2002 - March 2003",
		"description": "Managed and trained lab staff. Maintained computers, servers, networks and printing equipment. Developed a web based job scheduling system using PHP, HTML and CSS."
		},
		{
		"employer": "RIT Prepress & Publishing Lab / Digital Publishing Center ",
		"title": "Lab Assistant",
		"location": "Rochester, NY",
		"dates": "October 1999 - March 2002",
		"description": "Trained students with the use of scanners, printing equipment and graphics software including Photoshop, Illustrator and InDesign. Resolved problems and helped maintain computers, servers, networks and equipment. "
		},
		{
		"employer": "Avid Technology",
		"title": "Engineering Intern",
		"location": "Tewksbury, MA",
		"dates": "September 1998 - August 2008",
		"description": "Developed and maintained several intranet sites. Conducted quality assurance for Avid’s Review and Approval service and for the Avid Production Network web site."
		}
	],

	"display": function(){

		for (x in work.jobs) {
			//swap in the data into the formatted HTML
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[x].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[x].title);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[x].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[x].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[x].description);
			var job = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

			//add all the formated info to the page
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(job);
		};
	}
};

//projects json
var projects = {
	"project": [
		{
		"title": "Portfolio website",
		"url": "http://bw120.github.io/portfolio/",
		"dates": "March 2015",
		"description": "Using HTML and CSS I replicated the design and layout from mockup provided for this Udacity project. I made the design responsive so that it looks good on various screen sizes from mobile phone to desktop. The content and images were updated to include the info from my own projects. Using Bootstrap, I added a carousel that rotates through featured projects.",
		"images": ["images/portfolio_thumb.jpg"]
		},
		{
		"title": "Classic Arcade Game Clone",
		"url": "http://bw120.github.io/frontend-nanodegree-arcade-game/",
		"dates": "May 2015",
		"description": "This was the third project I did for the Udacity Front-End Web Developer Nanodegree. Starting with a supplied game " 
		+ "engine and graphic assets, I coded all the game entities including the player and enemies using Object-Oriented JavaScript. I built additional "
		+ "features including the ability to select a character and to accumulate points and lives by collecting the gems and hearts. As you complete "
		+ "each level and move on to the next the difficulty increases.",
		"images": ["images/ArcadeGame_2_sm.png","images/ArcadeGame_1_sm.png"]
		},
		{
		"title": "Website Optimization",
		"url": "   https://github.com/bw120/frontend-nanodegree-mobile-portfolio",
		"dates": "July 2015",
		"description": "I was given two sites to analyze and identify performance issues. The first part of the project was" + 
		" a mobile portfolio page where I made adjustments to optimize the Critical Rendering Path and was able achieve a PageSpeed " +
		"score of 95 for mobile and 96 for desktop. The second part of the project was a web page for a pizzeria with graphics that were animated using JavaScript. " + 
		"I analyzed and re-wrote the code to make it more efficient so that it could achieve 60 frames per second.",
		"images": ["images/Optimization_thumb.jpg"]
		}
	],
	"display": function(){

		for (x in projects.project) {
			// format and add project info
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[x].title);
			var formattedTitle = formattedTitle.replace("#", projects.project[x].url);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.project[x].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[x].description);
			var formattedImages = "";
			//cycle through project images
			for (z in projects.project[x].images) {
				formattedImages = formattedImages + HTMLprojectImage.replace("%data%", projects.project[x].images[z]);
			};

			var project = formattedTitle + formattedDates + formattedDescription + formattedImages;

			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(project);
			$(".project-entry > img").addClass("border");
		};
	}
};

//call display functions to add to resume page
bio.display();
projects.display();
education.display();
work.display();


$("#mapDiv").append(googleMap);
