// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(emailAddress) {
    const beginEmailDomain = emailAddress.indexOf("@");
    const domainName = emailAddress.substring(beginEmailDomain + 1);

    return domainName;
}

const firstDomainName = getEmailDomain("n.eeken@novi-education.nl");
const secondDomainName = getEmailDomain("t.mellink@novi.nl");
const thirdDomainName = getEmailDomain("a.wiersma@outlook.com");

console.log(firstDomainName, secondDomainName, thirdDomainName);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail (emailAddress) {
    const beginEmailDomain = emailAddress.indexOf("@");
    const domainName = emailAddress.substring(beginEmailDomain + 1);

    console.log (domainName);

    if (domainName === "novi-education.nl") {
        console.log("Student");
    } else if (domainName === "novi.nl") {
        console.log("Medewerker");
    } else {
        console.log("Extern");
    }
}

const firstEmailType = typeOfEmail ("n.eeken@novi-education.nl");
const secondEmailType = typeOfEmail ("t.mellink@novi.nl");
const thirdEmailType = typeOfEmail ("novi.nlaapjesk@outlook.com");

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (emailAddress) {
    const hasApenstaartje = emailAddress.includes("@");
    const hasComma = emailAddress.includes(",");

    const indexOfLastDot = emailAddress.lastIndexOf(".");
    const containsNoDotAtEnd = indexOfLastDot !== emailAddress.length - 1;

    if (hasApenstaartje && !hasComma && containsNoDotAtEnd) {
        return true;
    } else {
        return false;
    }
}

const firstEmailValidityCheck = checkEmailValidity ("n.eeken@novi.nl");
const secondEmailValidityCheck = checkEmailValidity ("tessmellink@novi.nl");
const thirdEmailValidityCheck = checkEmailValidity ("n.eekenanovi.nl");
const fourthEmailValidityCheck = checkEmailValidity ("tessmellink@novi,nl");

console.log(firstEmailValidityCheck, secondEmailValidityCheck, thirdEmailValidityCheck, fourthEmailValidityCheck);