/**
 * Created by Ebisu on 5/30/2017.
 */

var mozliwosci = ["kamien", "papier", "nozyce"];



function kamienPapierNozyce(wyborGracza1, wyborGracza2) {

    if(typeof(wyborGracza1) != "string" || typeof(wyborGracza2) != "string") {
        return false;
    }

    if(!(wyborGracza1 in mozliwosci) || !(wyborGracza2 in mozliwosci)) {
        return false;
    }


    switch(wyborGracza1) {
        case "kamien":
            switch(wyborGracza1) {
                case "kamien":
                    return "remis"
                    break;
                case "papier":
                    return "gracz2"
                    break;
                case "nozyce":
                    return "gracz1"
                    break;
            }
            break;
        case "papier":
            switch(wyborGracza1) {
                case "kamien":
                    return "gracz1"
                    break;
                case "papier":
                    return "remis"
                    break;
                case "nozyce":
                    return "gracz2"
                    break;
            }
            break;
        case "nozyce":
            switch(wyborGracza1) {
                case "kamien":
                    return "gracz2"
                    break;
                case "papier":
                    return "gracz1"
                    break;
                case "nozyce":
                    return "remis"
                    break;
            }
            break;
    }

}