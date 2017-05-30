
//ktos to odjebie
if(typeof(wyborGracza1) != "number" || typeof(wyborGracza2) != "number") {
    return false;
}

if(!(wyborGracza1 in mozliwosci) || !(wyborGracza2 in mozliwosci)) {
    return false;
}


//ktos to odjebie
switch(wyborGracza1) {
    case kamien:
        switch(wyborGracza1) {
            case kamien:
                return "remis"
                break;
            case papier:
                return "gracz2"
                break;
            case nozyce:
                return "gracz1"
                break;
        }
        break;
    case papier:
        switch(wyborGracza1) {
            case kamien:
                return "gracz1"
                break;
            case papier:
                return "remis"
                break;
            case nozyce:
                return "gracz2"
                break;
        }
        break;
    case nozyce:
        switch(wyborGracza1) {
            case kamien:
                return "gracz2"
                break;
            case papier:
                return "gracz1"
                break;
            case nozyce:
                return "remis"
                break;
        }
        break;
}