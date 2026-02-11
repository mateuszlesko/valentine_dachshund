const DOGGYNAMECOOKIE = "doggyName"
const DOGGYDATACOOKIE = "doggyData"

const DOGGYNAME_H1_ID = "doggyName"
function checkCookie(name) {
    let cookie = getCookie(name);
    if (cookie != "") {
        return true;
    } else {
        return false;
    }
  }

function main()
{
    doggyNameCookieExist = checkCookie(DOGGYNAMECOOKIE);
    const doggyNameH1Object = document.getElementById(DOGGYNAME_H1_ID);
    
    if(doggyNameCookieExist)
    {
        const doggyName = getCookie(DOGGYNAMECOOKIE).split("=")[1];
        console.log(doggyName)
        doggyNameH1Object.textContent = doggyName
    }
    else
    {
        doggyName = prompt("Nazwij pieska:", "");
        if (doggyName != "" && doggyName != null) {
            doggyNameH1Object.textContent = doggyName
            setCookie(DOGGYNAMECOOKIE, doggyName, 1);

            document.title = doggyName
        }
    }
    FEMALE_NAME_LAST_LETTER = 'a'
    if(FEMALE_NAME_LAST_LETTER == doggyName[doggyName.length - 1]){
        document.getElementsByClassName("topbar")[0].style.backgroundColor = "hotPink";
    }
    else{
        document.getElementsByClassName("topbar")[0].style.backgroundColor = "cyan";
    }

    doggyNameCookieExist = checkCookie(DOGGYDATACOOKIE);
    document.getElementById("energyLevel").innerHTML = 100 + "%";
    document.getElementById("funLevel").innerHTML = 100 + "%";
    document.getElementById("foodLevel").innerHTML = 100 + "%";
    document.getElementById("poopLevel").innerHTML = 100 + "%";
    
}