$(document).ready(function () {
    
    function getTitle(){
        let fullTitle = document.title;
        let arrTitle = fullTitle.split(" ");
        
        return arrTitle[0].toLowerCase();
    }

    function setActive(){
        let title = getTitle();
        console.log(title);

        switch (title) {
            case "home":
                $("#home").addClass("active");
                break;
            case "backup-script":
                $("#home").addClass("active");
                $("#guides").addClass(" active");
                break;
            case "brickbreaker":
                $("#home").addClass("active");
                $("#guides").addClass(" active");
                $("#projects").addClass(" active");
                $("#games").addClass(" active");
                break;
            case "rain":
                $("#home").addClass("active");
                $("#guides").addClass(" active");
                $("#projects").addClass(" active");
                $("#games").addClass(" active");
                $("#javascript").addClass(" active");
                break;
            case "setup":
                $("#home").addClass("active");
                $("#guides").addClass(" active");
                $("#projects").addClass(" active");
                $("#games").addClass(" active");
                $("#javascript").addClass(" active");
                $("#info").addClass(" active");
                break;
        }

    }

    setActive();

    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        if(scrollPos == 0){
            $("#header").css("height", "10rem");
            $("#logo").css("display", "block");
            $(".dropbtn").css("padding", "3.98rem 5.6rem");
            $("#home").css("padding", "3.95rem 5.6rem");
        } else {
            $("#header").css("height", "5rem");
            $("#logo").css("display", "none");
            $(".dropbtn").css("padding", "1.48rem 5.6rem");
            $("#home").css("padding", "1.47rem 5.6rem");
        }
        
    });
});

