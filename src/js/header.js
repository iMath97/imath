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
});

