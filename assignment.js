let score = prompt("Enter your score")

function grade(score) {
    if (score >= 70 && score <= 100) {
        alert(' Your Grade is A');
    } else if (score >= 60 && score <= 69) {
        alert(' Your Grade is B');
    } else if (score >= 50 && score <= 59) {
        alert(' Your Grade is C');
    } else if (score >= 40 && score <= 49) {
        alert(' Your Grade is D');
    } else if (score >= 30 && score <= 39) {
        alert(' Your Grade is E');
    } else if (score >= 0 && score <=29){
        alert(' Your Grade is F');
    }else{
        alert(`Your Grade is Not Available`)
    }
}

grade(score);
