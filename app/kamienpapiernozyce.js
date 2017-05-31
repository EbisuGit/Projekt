/**
 * Created by Ebisu on 5/30/2017.
 */

var mozliwosci = ['kamien', 'papier', 'nozyce'];

function kamienPapierNozyce(wyborGracza1, wyborGracza2) {

    if(typeof(wyborGracza1) !== 'string') {
		    return false;
    }

    if(typeof(wyborGracza2) !== 'string') {
		    return false;
    }

    if((mozliwosci.indexOf(wyborGracza1) > -1) !== true) {
        return false;
    }

    if((mozliwosci.indexOf(wyborGracza2) > -1) !== true) {
        return false;
    }

    switch(wyborGracza1) {
        case 'kamien':
            switch(wyborGracza2) {
                case 'kamien':
                    return 'remis';
                case 'papier':
                    return 'gracz2';
                case 'nozyce':
                    return 'gracz1';
            }

        case 'papier':
            switch(wyborGracza2) {
                case 'kamien':
                    return 'gracz1';

                case 'papier':
                    return 'remis';

                case 'nozyce':
                    return 'gracz2';

            }

        case 'nozyce':
            switch(wyborGracza2) {
                case 'kamien':
                    return 'gracz2';

                case 'papier':
                    return 'gracz1';

                case 'nozyce':
                    return 'remis';

            }

    }

}

module.exports = {
    kamienPapierNozyce: kamienPapierNozyce
};