function createIntro(title,description){
    return `
            <h2>${title}</h2>
            <p>${description}</p>
            <h3 class = 'centering'>Cabinet</h3>
    `;
}

function createMeetingTimes(day,time,room){
    return `
        <h3 class = 'centering'>Meeting Times</h3>
        <p>Every ${day} at ${time} in ${room}</p>
    `;
}
/*
function createBranch(title, name, img, description, side){
    if (side == "left"){
    return `
        <section>
        <div class="person">
            <h2>${title}</h2>
            <img src="${img}" alt="${name}" class = "profile-pic">
            <h2>${name}</h2>
        </div>

        <p class = "officer-bio">${description}</p>

        </section>
    `;
    } else {
         return `
        <section>

        <p class = "officer-bio">${description}</p>

        <div class="person">
            <h2>${title}</h2>
            <img src="${img}" alt="${name}" class = "profile-pic">
            <h2>${name}</h2>
        </div>

        </section>
        `;   
    }
}
*/

function createBranch(title, name, img, description, side){
    if (side == "left"){
    return `

        <h2 class="left">${title}</h2>

        <section>

        <div class="person">
            <img src="${img}" alt="${name}" class = "profile-pic right">
            <h2>${name}</h2>
        </div>

        <p class = "officer-bio right">${description}</p>

        </section>
    `;
    } else {
         return `
        <h2 class="right">${title}</h2>
        <section>

        <p class = "officer-bio left">${description}</p>

        <div class="person">
            <img src="${img}" alt="${name}" class = "profile-pic left">
            <h2>${name}</h2>
        </div>

        </section>
        `;   
    }
}
const mm = document.getElementById("mm-section");
const mv = document.getElementById("mv-section");
const chap = document.getElementById("chap-section");
const go = document.getElementById("go-section");
const vm = document.getElementById("vm-section");
const lc = document.getElementById("lc-section");
const ob = document.getElementById("ob-section");
const ad = document.getElementById("ad-section");

//MMHS creation
function createMMHS(){
    mm.innerHTML += createIntro("Murrieta Mesa", "Murrieta Mesa is the original branch of Yes! Club USA, founded in 2019. We have hosted over 50 events and impacted over 500 lives in our local community.");

    mm.innerHTML += createBranch( "President", "Akachi Oriji","../img/people/akachi.JPG", "Hi! My name is Akachi, and I am a senior! I am the President of Yes Club at Mesa this year. I love playing clarinet, spending time with my friends, and reading. I’ve been with Yes Club since sophomore year,  and it is super fun to be a part of!","left");
    mm.innerHTML += createBranch(
        "Vice President", 
        "Charles Tran",
        "../img/people/charles.jpg", 
        "Hello! I'm Charles and I'll be the vice president for the upcoming school year. As a senior, I am so excited to help the club this year at our school and our community. I love volleyball and vinyl records!",
        "right"
    );
    mm.innerHTML += createBranch(
        "Secretary", 
        "Angela Guo",
        "../img/people/angela.jpeg", 
        "I NNEEEDDESC",
        "left");
    mm.innerHTML += createBranch(
        "Treasurer", 
        "Ivy Wu",
        "../img/people/ivy.jpeg", 
        "INEEDDESCRITPION",
        "right");
    mm.innerHTML += createBranch(
        "Editor", 
        "Elizabeth Reda",
        "../img/people/elizabeth.jpeg", 
        "INEEDDESCRITPION",
        "left");

    mm.innerHTML += createMeetingTimes("Thursday", "2:30 PM", "Room 101");
}

//MV Creation
function createMV(){
    mv.innerHTML += createIntro("Murrieta Valley", "Murrieta Valley is a thriving branch of Yes! Club USA, founded in 2020. We have hosted over 30 events and impacted over 300 lives in our local community.");    
    
    mv.innerHTML += createBranch(
        "President", 
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "left");
    mv.innerHTML += createBranch(
        " Vice President", 
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "right");
    mv.innerHTML += createBranch(
        "Secretary", 
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "left");

    mv.innerHTML += createBranch(
        "Treasurer", 
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "left");
    mv.innerHTML += createBranch(
        "Editor", 
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "right");

    mv.innerHTML += createMeetingTimes("Thursday", "2:30 PM", "Room 101");

}

//Chap creation

function createChap(){
    chap.innerHTML += createIntro("Chapparal", "Chapparal is a thriving branch of Yes! Club USA, founded in 2020. We have hosted over 30 events and impacted over 300 lives in our local community.");    

    chap.innerHTML += createBranch(
        "President", 
        "Wyatt",
        "../img/people/wyat.png",
        "Hi I’m Wyatt, the current president of Chaparral High School’s YES Club. I am going to be a senior this upcoming school year, graduating in the class of 2027. Some things I like doing in my free time are playing games and watching TV shows or anime. I enjoy volunteering and helping others out as well. In school, I excel at math and sciences.",
        "left");
    chap.innerHTML += createBranch(
        "Vice President", 
        "Rafael",
        "../img/people/rafael.png",
        "Hi everyone I am the Vice President for YES! Club USA!. On my free time I like to volunteer in my community and making sure everybody gets the chance to show what their passionate about. ",
        "right");
    chap.innerHTML += createBranch(
        "Secretary",
        "Shambhavi Velmurugan",
        "../img/people/shambhavi.png",
        "Hi, my name is Shambhavi Velmurugan and I’m currently a Junior at Chap! I’m the Secretary for YES! Club at Chap and the President of YES! Club USA! A little bit about me is that I love playing tennis and volunteering!",
        "left");
    chap.innerHTML += createBranch(
        "Treasurer",
        "Samee Ramirez",
        "../img/people/samee.jpg",
        "Hi my name is Samee I’m going be a  senior next year, and I’m the current treasurer of yes club at Chaparral. I enjoy making a larger impact within my community through Yes club. Being able and learning how to help plan and lead especially through the financial side of the organization.",
        "right");
    chap.innerHTML += createBranch(
        "Connection Manager",
        "April Hwang",
        "../img/people/april.jpg",
        "Hi my name is April and I am the Connection Manager for YES! Club at Chaparral. I am currently a Junior and I love connecting with people and building relationships.",
        "left");

    chap.innerHTML += createMeetingTimes("Thursday", "2:30 PM", "Room 101");

}

//GO Creation
function createGO(){
    go.innerHTML += createIntro("Great Oak", "Murrieta Valley is a thriving branch of Yes! Club USA, founded in 2020. We have hosted over 30 events and impacted over 300 lives in our local community.");    

    go.innerHTML += createBranch( 
        "President",
        "Aaliyah Xu",
        "../img/people/aaliyah.png", 
        "INEEDDESCRIPTION",
        "left"
    );

    go.innerHTML += createBranch(
        "Vice President",
        "Dill Doe",
        "../img/officer.png", 
        "INEEDDESCRIPTION",
        "right"
    );
    go.innerHTML += createBranch(
        "Secretary",
        "Dill Doe",
        "../img/officer.png", 
        "INEEDDESCRIPTION",
        "right"
    );
    go.innerHTML += createBranch(
        "Treasurer",
        "Dill Doe",
        "../img/officer.png", 
        "INEEDDESCRIPTION",
        "right"
    );
    go.innerHTML += createBranch(
        "Editor",
        "Dill Doe",
        "../img/officer.png", 
        "INEEDDESCRIPTION",
        "right"
    );

    go.innerHTML += createMeetingTimes("Thursday", "2:30 PM", "Room 101");

}

function createVM(){
    vm.innerHTML += createIntro("Vista Murrieta", "Vista Murrieta is a thriving branch of Yes! Club USA, founded in 2020. We have hosted over 30 events and impacted over 300 lives in our local community.");    

    vm.innerHTML += createBranch(
        "President",
        "Brooklynn Jurovich",
        "../img/people/brooklynn.png", 
        "Hello! My name is Brooklynn Jurovich and I am the president of YES Club at Vista Murrieta for the 2026-2027 school year. I am currently in the VMHS Golden Alliance and a black belt in taekwondo! I enjoy being apart of YES Club and I can’t wait to see what the future brings for our club",
        "left"
    );
   vm.innerHTML += createBranch(
        " Vice President", 
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "right");
    vm.innerHTML += createBranch(
        "Secretary", 
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "left");

    vm.innerHTML += createBranch(
        "Treasurer", 
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "left");
    vm.innerHTML += createBranch(
        "Editor", 
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "right");

    vm.innerHTML += createMeetingTimes("Thursday", "2:30 PM", "Room 101");
}

function createLC(){
    lc.innerHTML += createIntro("Linfield Christian", "Linfield Christian is a dedicated branch of Yes! Club USA, founded in 2024. We have hosted over 5 events and impacted over 50 lives in our local community.");       

    lc.innerHTML += createBranch(
        "President",
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "left"
    );
    lc.innerHTML += createBranch(
        "Vice President",
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "right"
    );
    lc.innerHTML += createBranch(
        "Secretary",
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "left"
    );
    lc.innerHTML += createBranch(
        "Treasurer",
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "right"
    );
    lc.innerHTML += createBranch(
        "Editor",
        "John Doe",
        "../img/officer.png", 
        "I am very glad to serve our niche community!",
        "right"
    );

    lc.innerHTML += createMeetingTimes("Thursday", "2:30 PM", "Room 101");

}

function createOB(){

    ob.innerHTML += createIntro("Official Branch", "Official Branch is a leading branch of Yes! Club USA, founded in 2025. We have hosted over 5 events and impacted over 50 lives in our local community.");

    ob.innerHTML += createBranch(
        "President",
        "Shambhavi Velmurugan",
        "../img/people/shambhavi.png", 
        "Hi! My name is Shambhavi and I’m currently a junior at Chaparral High School. Im so excited to be the president of YES! Club USA. I’ve been with Yes! Club since my first year of high school! A little bit about me is that I love playing tennis and volunteering!",
        "left"
    );

    ob.innerHTML += createBranch(
        "Vice President",
        "Rafael",
        "../img/people/rafael.png", 
        "Hi everyone my name is Rafael and I am a rising senior at Chaparral. I am the Vice President for chap and Vice President for YES! Club USA! On my free time I like to play music and learn more about different types of sciences.",
        "right"
    );
    ob.innerHTML += createBranch(
        "Secretary",
        "April Hwang",
        "../img/people/april.jpg", 
        "Hi, my name is April Hwang and I’m currently a Junior at Chap! I’m the Secretary for YES! Club at Chap and the President of YES! Club USA! A little bit about me is that I love playing tennis and volunteering!",
        "left"
    );
    ob.innerHTML += createBranch(
        "Treasurer",
        "Julie Tian",
        "../img/people/julie.jpg",
        "INEEDDESCRIPTION",
        "right"
    );
    ob.innerHTML += createBranch(
        "Social Media Manager",
        "Riley Schneider",
        "../img/people/riley.jpg", 
        "my name is Riley and I am the Social Media Manager of Yes Club USA! I will be a Junior next year at Chaparral High School. I enjoy watching movies, reading, music, and bike riding. I also play on varsity softball for my school.",
        "left"
    );

    ob.innerHTML += createBranch(
        "Social Media Manager",
        "Brooklynn Jurovich",
        "../img/people/brooklynn.png", 
        "Hello! My name is Brooklynn Jurovich and I am the second social media manager for YES Club. I love being apart of this community and making new friends; join YES Club!",
        "right"
    );

    ob.innerHTML += createBranch(
        "Technology Specialist",
        "Charles Tran",
        "../img/people/charles.png", 
        "I am very excited to work on the executive board of YES Club USA! I am a senior at Mesa High School and I love to play volleyball and listen to vinyl records. As the part of tech, I work with the website and help with the equipment for the club as well!",
        "left"
    );

    ob.innerHTML += createBranch(
        "Protocol",
        "Ivy Wu",
        "../img/people/ivy.jpeg",
        "PLS ADD DESCRIPTION",
        "right"
    );

    ob.innerHTML += createBranch(
        "Events",
        "Aaliyah Xu",
        "../img/people/aaliyah.png",
        "PLS ADD DESCRIPTION",
        "left"
    );
    ob.innerHTML += createBranch(
        "Leadership",
        "Brooklynn Jurovich",
        "../img/people/brooklynn.png",
        "PLS ADD DESCRIPTION",
        "right"
    );
}

function createAD(){

    ad.innerHTML += createIntro("Advisory Board", "The advisory board consists of previous volunteers that are now out of high school but are still devoted to the mission to serve our community.");

    ad.innerHTML += createBranch(
        "Advisor",
        "Sabrina Cheng",
        "../img/people/sabrina.jpg",
        "PLS ADD DESCRIPTION",
        "left"
    );
    ad.innerHTML += createBranch(
        "Advisor",
        "Stephanie Wu",
        "../img/people/stephanie.jpg",
        "Hi I’m Stephanie! I am one of the founder of Yes club and had serve as yes club USA official president/director of program for the past two years. I am an incoming freshman at UC Berkeley. Some fun facts about me is I been to 3 concerts, I love playing golf, and have 900+ community service hours :)", 
        "right"
    );
    ad.innerHTML += createBranch(
        "Advisor",
        "Addie Harmon",
        "../img/people/addie.jpg",
        "Hello, I’m Addie! I served Yes Club all 4 years of high school and had the honor of co-creating Yes Club Official. I graduated in 2026 and now serve as an advisor! As a now-alumni and incoming college Freshman at Montana State University, I’m so excited about our new leadership and the things they will achieve in Yes Club and I can’t wait to continue serving with them. Say yes to the world!", 
        "left"
    );

    ad.innerHTML += createBranch(
        "Advisor",
        "Salim",
        "../img/people/salim.jpg",
        "INEEDDESC", 
        "right"
    );

    ad.innerHTML += createBranch(
        "Advisor",
        "Ashley",
        "../img/people/ashley.jpg",
        "Hi I’m Ashley and I am an advisor for YES club camp. This is my 2nd year of being apart of this club. I have enjoyed help set up activities and help people in need through volunteering.  I am excited to take what I learned as a YES club advisor to college and throughout adulthood.", 
        "left"
    );
}


function showBranch(branch){
    var branch = document.getElementById(branch);
    const slides = document.getElementsByClassName("branch-info");

    for (var i = 0; i < slides.length; i++) {
        slides[i].innerHTML ="";
        //slides[i].style.display = "none";
    }   
    
        //branch.style.display = "block";

        branch.innerHTML+= `<section>`;
        switch(branch) {
        case mm:
            createMMHS();
            break;
        case mv:
            createMV();
            break;
        case chap:
            createChap();
            break;
        case go:
            createGO();
            break;
        case vm:
            createVM();
            break;
        case lc:
            createLC();
            break;
        case ob:
            createOB();
            break;
        case ad:
            createAD();
            break;
        default:
            document.innerHTML = "Error: Branch not found.";
            break;
    }
        branch.innerHTML+= `</section>`;
}

window.addEventListener("load", () => {
    createOB();
});


/*  might us4

<h4 class = 'centering'>Secretary: Chloe Kim</h4>
<p class = "officer-bio">Hello! My name is Chloe Kim, and I am the secretary for “Yes Club” at Great Oak High School. 
    Fun fact about me is: I love to bake pastries (as well as eat all of them) ;)</p
    
    = 'centering'>Treasurer: Aaliyah Xu</h4>
<p class = "officer-bio">Hello, my name is Aaliyah Xu and I am the treasurer for Yes club GOHS. I like to 
    dance and make new friends! Join yes club for opportunities!</p>


<h4 class = 'centering'>Public Relations Manager: Ayden Carlson</h4>
<p class = "officer-bio">Hi! My name is Ayden Carlson and I am the PR manager at GOHS Yes Club. 
    I know how to play 7 different instruments and I like food. Join Yes Club please!</p>


*/