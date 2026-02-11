const GREETERS = [
  "Gdybyś była kanapką w MCD nazywałabyś się McBeuty ❤️❤️❤️ ",
  "Hejka! Wziąłbym Cię do kina, ale zakazali własnych słodyczy",
  "Twoje miejsce jest w moich ramionach!!",
  "Miłego dnia mój mały Bubusiu!!",
  "Z astronomii jestem słaby, ale twoje oczka to kosmos",
  "Zainteresowania są ważne, Ja interesuje się Tobą",
  "Jak ja się cieszę, że mam Kogoś takiego jak Ty!!",
  "Miłego dzionka Bubusiu!!",
  "Życzę Ci pięknego dzionka Bubusiu",
  "Hej Ty !! KOCHAM CIĘ Bubusiu !!",
  "Hejcia! Apetycznie dziś wyglądasz Bubusiu!!",
  "Słodziak z Ciebie! Życzę Ci miłego dnia!!",
  "Hejcia!! Zasługujesz na wszystko co najlepsze!!",
  "Dzień dobry, Słoneczko już wstało wstawaj i Ty!!",
  "Dzień dobry, Pięknego dnia życzę i smacznej kawusi",
  "Pamiętaj, Ten piesek patrzy tylko na piękne osoby",
  "Wiesz co? Pięknie wyglądasz gdy się uśmiechasz",
  "Ale Ty dziś PIĘKNIE wygładasz!!",
  "Jesteś ideałem",
  "Przytuptałem aby powiedzieć, że wygładasz idealnie!!",
  "Hejka ptysiu!!",
  "Mam nadzieję, że to będzie SUPER dzionek dla Ciebie!!",
  "WITAM PYSIU! SŁODZIAK Z CIEBIE! CIESZĘ SIĘ ŻE CIĘ MAM!!",
  "Hej piękna",
  "Gdy jest Ci smutno albo nie.. pamiętaj że masz mnie!!",
  "Buziaki dla Ciebie Bubulku!!",
  "Dzień dobry jesteś super!! Miłego dnia!!",
  "Fiu Fiu Niezły z Ciebie kąsek",
  "Myślę o zjedzeniu smaczka, ale.. smaczek właśnie to czyta",
  "No hejcia Słodziaku! Życzę Ci miłego dnia i pięknego dzionka",
  "WOOOW Wygładasz dzis olśniewająco! Jak ty to robisz??",
  "Manifestuje dla Ciebie piękny dzionek!!",
  "Dzień dobry! Miłego dnia, wykorzystaj go w 101%!",
  "Wyglądasz dziś jak milion dolarów Słodziaku!!",
  "Mam nadzieję, że będziesz miała wspaniały dzień Kwiatuszku!",
  "❤️❤️❤️ Pamiętaj aby dzisiaj wypić minimum 2.2l płynów !! ❤️❤️❤️",
  "Dbaj o Siebie!!",
  "Hejcia! Na świecie jest wiele mikrofalówek.. ale to Ty mnie kręcisz",
  "Jesteś moją playlistą? Mógłbym słuchać Cię przez cały dzień!!",
  "Co by nie mówić.. Pięknie wygładasz Bubulku!!"
]

const GREETS_COUNT = GREETERS.length

function notifyMe(msg) {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification(msg);
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        const notification = new Notification(msg);
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}

var previous_active_tab = false
var active_tab = false

TAB_TIME_ACTIVE = 5000
setInterval(function(){
  if(!document.hidden){
    previous_active_tab = active_tab;
    active_tab = true
  }
  else{
    previous_active_tab = active_tab;
    active_tab = false;
  }

  if(previous_active_tab == false && active_tab == true){
    notifyMe(GREETERS[getRandomInt(GREETS_COUNT)])
  }
}, TAB_TIME_ACTIVE);