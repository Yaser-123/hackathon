function searchCourses() {
    var input, filter, courseList, courses, course, i, txtValue, foundCourse;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    courseList = document.getElementById('courseList');
    courses = courseList.getElementsByClassName('course');

    foundCourse = false;

    for (i = 0; i < courses.length; i++) {
        course = courses[i].getElementsByTagName("h3")[0];
        txtValue = course.textContent || course.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            courses[i].classList.add('highlight');
            if (!foundCourse) {
                courses[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                foundCourse = true;
            }
        } else {
            courses[i].classList.remove('highlight');
        }
    }
}

function redirectToExternalLink(courseName) {
    var courseLinks = {
        "Full Stack Web Development": "https://www.freecodecamp.org/learn/2022/responsive-web-design/#learn-css-variables-by-building-a-city-skyline",
        "Data Science and Machine Learning": "https://www.geeksforgeeks.org/courses/data-science-live",
        "Mobile App Development": "https://www.mygreatlearning.com/mobile-app-development/free-courses?p=1",
        "Cybersecurity": "https://www.udemy.com/topic/cyber-security/free/",
        "Cloud Computing":"https://www.simplilearn.com/introduction-to-cloud-computing-basics-skillup",
        "Artificial Intelligence":"https://www.udemy.com/topic/artificial-intelligence/free/",
        "Blockchain Development":"https://www.simplilearn.com/learn-blockchain-basics-skillup",
        "DevOps":"https://www.freecodecamp.org/news/devops-engineering-course-for-beginners/",
        "Game Development":"https://www.coursera.org/courses?query=game%20development&msockid=0084c07a0b4261dd2c05d4e80a9760ae",
        "Software Engineering and Development":"https://www.coursera.org/learn/introduction-to-software-engineering?msockid=0084c07a0b4261dd2c05d4e80a9760ae",
        "HTML, CSS, and JavaScript Basics":"https://www.educative.io/courses/learn-html-css-javascript-from-scratch",
        "Software Testing and Quality Assurance":"https://www.mygreatlearning.com/academy/learn-for-free/courses/software-testing-fundamentals1",
        "Front-End Frameworks (React, Angular, Vue)":"https://www.educative.io/blog/react-angular-vue-comparison",
        "Backend Development (Node.js, Django, Ruby on Rails)":"https://ifacet.iitk.ac.in/knowledge-hub/full-stack-web-development/back-end-web-development-server-side-programming-with-node-js-django-ruby-on-rails-and-other-frameworks/",
        "Database Management (SQL, NoSQL)":"https://onlinecourses.nptel.ac.in/noc21_cs04/preview",
        "Version Control with Git":"https://www.udacity.com/course/version-control-with-git--ud123",
        "Web Development Tools (Webpack, Babel)":"https://ultimatecourses.com/blog/modern-javascript-with-babel-webpack-and-eslint",
        "Full Stack Development Projects":"https://www.interviewbit.com/blog/full-stack-projects-with-source-code/",
        "Python Programming":"https://www.w3schools.com/python/",
        "Data Analysis with Pandas":"https://alison.com/course/data-science-working-with-data-revised?utm_source=bing&utm_medium=cpc&utm_campaign=531498932&utm_content=1351302328063315&utm_term=kwd-84457562245228:loc-90&msclkid=831275f0703a10651d8b1395243318e5",
        "Statistics for Data Science":"https://www.coursera.org/specializations/advanced-statistics-data-science",
        "Machine Learning Algorithms":"https://explore.skillbuilder.aws/learn/public/learning_plan/view/28/machine-learning-learning-plan?la=cta&cta=topbanner",
        "Deep Learning with TensorFlow and Keras":"https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187",
        "Big Data Technologies (Hadoop, Spark)":"https://www.simplilearn.com/free-big-data-hadoop-certification-skillup",
        "Data Visualization (Matplotlib, Seaborn, Tableau)":"https://www.geeksforgeeks.org/data-visualisation-in-python-using-matplotlib-and-seaborn/",
        "iOS Development with Swift":"https://www.hackingwithswift.com/learn",
        "Android Development with Kotlin":"https://developer.android.com/kotlin/campaign/learn",
        "Cross-Platform Development with Flutter":"https://www.classcentral.com/course/freecodecamp-flutter-course-for-beginners-37-hour-cross-platform-app-development-tutorial-104327",
        "React Native for Mobile Development":"https://www.youtube.com/watch?v=qSRrxpdMpVc&t=3s",
        "Mobile UI/UX Design":"https://www.mygreatlearning.com/academy/learn-for-free/courses/ui-ux",
        "Mobile App Testing":"https://www.udemy.com/course/mobile-testing-masterclass-from-the-beginning/?couponCode=IND21PM",
        "Publishing and Marketing Mobile Apps":"https://www.simplilearn.com/learn-mobile-marketing-free-training-course-skillup",
        "Introduction to Cybersecurity":"https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
        "Network Security Fundamentals":"https://alison.com/course/introduction-to-computer-network-security-revised?utm_source=bing&utm_medium=cpc&utm_campaign=531498932&utm_content=1352401840035604&utm_term=kwd-84526277266054:loc-90&msclkid=ba924d8c2a911580186c2be94c2870e4",
        "Ethical Hacking and Penetration Testing":"https://alison.com/course/ethical-hacking-information-security?utm_source=bing&utm_medium=cpc&utm_campaign=531498932&utm_content=1354600862946406&utm_term=kwd-84663718361163:loc-90&msclkid=a07ba7e91ef210d123ebc18c76c9af0d",
        "Security Information and Event Management (SIEM)":"https://www.classcentral.com/subject/siem",
        "Cryptography":"https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-cryptography",
        "Cybersecurity Compliance and Standards":"https://onlinecourses.nptel.ac.in/noc23_cs127/preview",
        "Incident Response and Risk Management":"https://www.classcentral.com/course/incident-response-25336",
        "Cloud Fundamentals (AWS, Azure, Google Cloud)":"https://www.simplilearn.com/introduction-to-cloud-computing-basics-skillup",
        "Cloud Architecture and Infrastructure":"https://www.mulesoft.com/sem/lp/whitepaper/api/top-microservices-patterns?d=7013y0000020GCvAAM&nc=7013y0000020HVoAAM&utm_content=7013y0000020GCvAAM&utm_source=google&utm_medium=paid_search&utm_campaign=21251053573&utm_adgroup=160456075894&utm_term=microservices&utm_matchtype=p&gad_source=1&gclid=Cj0KCQjwpZWzBhC0ARIsACvjWRMzxHOvM6pYIxQPaxK7tWofHmU_JCmyXfynQVzYsjuuAFha-q2odNMaAn-xEALw_wcB&gclsrc=aw.ds",
        "DevOps on Cloud (CI/CD, Jenkins, Kubernetes)":"https://www.udemy.com/course/valaxy-devops/?couponCode=IND21PM",
        "Cloud Security":"https://www.simplilearn.com/learn-cloud-security-basics-skillup",
        "Serverless Computing (AWS Lambda, Google Cloud Functions)":"https://cloudacademy.com/blog/google-cloud-functions-vs-aws-lambda-the-fight-for-serverless-cloud-domination/",
        "Cloud-native Development":"https://www.youtube.com/watch?v=fp9_ubiKqFU",
        "Introduction to AI and Python Programming":"https://www.mygreatlearning.com/academy/learn-for-free/courses/artificial-intelligence-with-python",
        "Machine Learning with Scikit-Learn":"https://www.freecodecamp.org/news/machine-learning-with-scikit-learn-full-course/",
        "Deep Learning with TensorFlow and Keras":"https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-tensorflow-and-keras",
        "Natural Language Processing (NLP)":"https://online.stanford.edu/courses/xcs224n-natural-language-processing-deep-learning",
        "Computer Vision":"https://www.udemy.com/course/computer-vision-a-z/?matchtype=p&msclkid=86dc1784a45d139e3b0c71e1d1b08e98&utm_campaign=BG-LongTail_la.EN_cc.INDIA&utm_content=deal4584&utm_medium=udemyads&utm_source=bing&utm_term=_._ag_1223756854759071_._ad__._kw_%2BComputer+%2BVision+%2BTutorial_._de_c_._dm__._pl__._ti_kwd-76485115574030%3Aloc-90_._li_155264_._pd__._&couponCode=IND21PM",
        "Reinforcement Learning":"https://huggingface.co/learn/deep-rl-course/unit0/introduction",
        "AI Ethics and Policy":"https://www.coursera.org/learn/ethics-of-artificial-intelligence?msockid=0084c07a0b4261dd2c05d4e80a9760ae",
        "Introduction to Blockchain and Cryptocurrency":"https://www.codecademy.com/learn/introduction-to-blockchain-and-crypto",
        "Developing Decentralized Applications (dApps)":"https://www.coursera.org/learn/decentralized-apps-on-blockchain?msockid=0084c07a0b4261dd2c05d4e80a9760ae",
        "Blockchain Security":"https://www.classcentral.com/course/blockchain-security-121428",
        "Introduction to DevOps":"https://www.upgrad.com/executive-pg-certification-in-cloud-computing-and-devops-iiit-bangalore/?utm_source=GOOGLE&utm_medium=NBSEARCH&utm_campaign=IND_ACQ_WEB_GOOGLE_NBSEARCH_TV_IIITB_EPCCDO_MSV_Phrase_KH_NEW_DEVOPS&utm_content=Devops_Course&utm_term=devops%20beginner%20course&gad_source=1&gclid=Cj0KCQjwpZWzBhC0ARIsACvjWRP7-4WLcetC2qI-DkCJT_9UCMM9K_uJM9YeVvHCj4wcSFQCkGZEJfYaArcUEALw_wcB",
        "Version Control with Git and GitHub":"https://www.udemy.com/course/learn-git-with-github-bitbucket-jenkins/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.INDIA&campaigntype=Search&portfolio=India&language=EN&product=Course&test=&audience=DSA&topic=&priority=&utm_content=deal4584&utm_term=_._ag_77882236223_._ad_533093955804_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171032_._li_9062144_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQjwpZWzBhC0ARIsACvjWRNBfC5RezwRv8sOZDza-d88xoGowTNm8g1a3NIu9fDg4NZ95GIU_Q0aAoMkEALw_wcB&couponCode=IND21PM",
        "Introduction to Game Development":"https://www.codecademy.com/learn/introduction-to-game-development",
        "Game Design Principles":"https://www.codecademy.com/?g_network=g&g_productchannel=&g_adid=528849220279&g_locinterest=&g_keyword=codecademy&g_acctid=243-039-7011&g_adtype=&g_keywordid=kwd-296880846182&g_ifcreative=&g_campaign=account&g_locphysical=9062144&g_adgroupid=128133970988&g_productid=&g_source={sourceid}&g_merchantid=&g_placement=&g_partition=&g_campaignid=12575778360&g_ifproduct=&utm_id=t_kwd-296880846182:ag_128133970988:cp_12575778360:n_g:d_c&utm_source=google&utm_medium=paid-search&utm_term=codecademy&utm_campaign=INTL_Brand_Phrase&utm_content=528849220279&g_adtype=search&g_acctid=243-039-7011&gad_source=1&gclid=Cj0KCQjwpZWzBhC0ARIsACvjWRPg5Ina2dJCKpXZ7f0UZI5cNpYeTHXLVoRSjdmd-KlC0d-Bl6ZRcowaAsh7EALw_wcB",
        "2D Game Development with Unity":"https://appinop.com/game-development?gad_source=1&gclid=Cj0KCQjwpZWzBhC0ARIsACvjWRP7grB4tVGeWiDvOsj8HTvIrsT1NTPCYksPoeWWb6sBe0LLb3Z1LZQaAtUREALw_wcB",
        "3D Game Development with Unreal Engine":"https://learn.unity.com/course/beginning-3d-game-development",
        "Mobile Game Development":"https://appinop.com/game-development?gad_source=1&gclid=Cj0KCQjwpZWzBhC0ARIsACvjWROZypycMzJvZ_-nrBH_uPhPSRO31GCMMku78loe1sMCGAHNGPUXrpIaAr2HEALw_wcB",
        "Introduction to Software Engineering":"https://www.geeksforgeeks.org/software-engineering-introduction-to-software-engineering/",
        "Object-Oriented Programming (OOP) with Java/C++":"https://www.w3schools.com/java/java_oop.asp",
        "Software Development Life Cycle (SDLC)":"https://www.mygreatlearning.com/academy/learn-for-free/courses/software-development-life-cycle-fundamentals-sdlc",
        "APIs and Web Services Development":"https://www.mygreatlearning.com/api/free-courses"
    };

    var url = courseLinks[courseName];
    if (url) {
        window.open(url, '_blank');
    } else {
        alert('Course link not found.');
    }
}

window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var scrollTopBtn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Light/Dark Mode Toggle
const modeToggleBtn = document.getElementById('modeToggleBtn');
const body = document.body;

modeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Light';
    } else {
        modeToggleBtn.textContent = 'Dark';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('searchInput');

    // Function to search courses
    function searchCourses() {
        var filter = searchInput.value.toUpperCase();
        var courseList = document.getElementById('courseList');
        var courses = courseList.getElementsByClassName('course');
        var foundCourse = false;

        for (var i = 0; i < courses.length; i++) {
            var course = courses[i].getElementsByTagName("h3")[0];
            var txtValue = course.textContent || course.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                courses[i].classList.add('highlight');
                if (!foundCourse) {
                    courses[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    foundCourse = true;
                }
            } else {
                courses[i].classList.remove('highlight');
            }
        }
    }

    // Trigger search when Enter key is pressed
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchCourses();
        }
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwJNF-_VCLXC1a3EOGmVGvEDThTt-6gBxSsdEniVQyD0IYgYx7Pp7vbOp5AeHnHkzKN0g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox .chat-messages");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".send-btn");

let userMessage = null; // Variable to store user's message
const API_KEY = "sk-proj-LtbE3maZHAstsJmcTn0QT3BlbkFJwffemNL1YKP01GF7iRm6"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5",
            messages: [{ role: "user", content: userMessage }],
        })
    }

    // Send POST request to API, get response and set the response as paragraph text
    fetch(API_URL, requestOptions)
        .then(res => res.json())
        .then(data => {
            if (data.choices && data.choices.length > 0) {
                messageElement.textContent = data.choices[0].message.content.trim();
            } else {
                messageElement.textContent = "No response from API.";
            }
        })
        .catch(error => {
            console.error("Error:", error);
            messageElement.classList.add("error");
            messageElement.textContent = "Oops! Something went wrong. Please try again.";
        })
        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user-entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));


    