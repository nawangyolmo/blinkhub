function openGitHubLogIn(){
    var github = document.getElementById("github-login");
    github.style.display = "block";
}

function gitHubSubmit(){
    
}

const GitHubForm = document.getElementById("GitHubForm");
GitHubForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var githubcard = document.getElementById("github-card-1");
    var githubcard2 = document.getElementById("github-card-2")
    githubcard.style.display = "none";
    githubcard2.style.visibility = "visible";
    document.getElementById("github-head").style.display = "none";
    document.getElementById("github-img").style.display = "none";
});

function GitHubClose(){
    var github = document.getElementById("github-login");
    github.style.display = "none";
    // document.getElementById("data-type").style.display = "none";
    document.getElementById("github-url-card").style.display = "block";
    document.getElementById("data-flow-img").src = "assets/images/flow-2.svg";
    document.getElementById("data-flow-img").style.margin = "46px 0 0 -25px";

}

function closeUrl(){
    // document.getElementById("github-url-card").style.display = "none";
    document.getElementById("regulation").style.display = "block";
    document.getElementById("data-flow-img").src = "assets/images/flow-3.svg";
    document.getElementById("data-flow-img").style.margin = "46px 0 0 -25px";
}

function closeRegulation(){
    // document.getElementById("regulation").style.display = "none";
    document.getElementById("scanning-data").style.display = "block";
    document.getElementById("data-flow-img").src = "assets/images/flow-4.svg";
    document.getElementById("data-flow-img").style.margin = "46px 0 0 -25px";
}

function scanClose(){
    // document.getElementById("scanning-data").style.display = "none";
    document.getElementById("data-report").style.display = "block";
    document.getElementById("data-flow-img").src = "assets/images/flow-5.svg";
    document.getElementById("data-flow-img").style.margin = "46px 0 0 -25px";
}