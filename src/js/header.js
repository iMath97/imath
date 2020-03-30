$(document).ready(function () {
    
    function getTitle(){
        let fullTitle = document.title;
        let arrTitle = fullTitle.split(" ");
        
        return arrTitle[0].toLowerCase();
    }

    function setActive(){
        let title = getTitle();

        switch (title) {
            case "home":
                $("#home").addClass("active");
                break;
        }

    }

    setActive();
});

