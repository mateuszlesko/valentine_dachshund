
const DOGGY_STATES_IMGS = {
    "IDLE" : "../imgs/DOGGY_IDLE.png",
    "WALK" : "../imgs/DOGGY_WALK.png",
    "SLEEP" : "../imgs/DOGGY_SLEEP.png",
    "SAD" : "../imgs/DOGGY_SAD.png",
    "SNACK": "../imgs/DOGGY_EAT.png",
    "FUN_IDLE" : "../imgs/DOGGY_FUN_IDLE.png",
    "FUN_FUN": "../imgs/DOGGY_FUN_FUN.png",
    "POOP": "../imgs/DOGGY_POOP.png"
};



class DoggyImgStateManager{

    constructor(){
        this.state = "IDLE"
        this.imageObject = document.getElementById("doggyImage");
        this.imageObject.src = DOGGY_STATES_IMGS["IDLE"];
        this.WalkActionButtonClicked = false;
        this.ActionButtonClicked = false;

    }
}

class DoggyStateManager{
    constructor(){
        this.state = "IDLE";
        this.food = 100;
        this.sleep = 100;
        this.fun = 100;
        this.poop = 100;
        this.imgStateManager = new DoggyImgStateManager()
    }
}

const doggy = new DoggyStateManager()

function changeDogImage(state, newState){
    const doggyImageObject = document.getElementById("doggyImage");
    const doggyImgSM = doggy.imgStateManager
    if(doggyImgSM.ActionButtonClicked == false){
        doggyImgSM.ActionButtonClicked = true
        doggyImageObject.src = DOGGY_STATES_IMGS[state];
    }
    else{
        doggyImgSM.ActionButtonClicked = false
        doggyImageObject.src = DOGGY_STATES_IMGS["IDLE"];
    }
}


async function doggySleeps(){

    const overlay = document.getElementById("overlay");
    const sleepCounterObject = document.getElementById("sleepcounter");

    overlay.style.display = "block";
    const SLEEP_DURATION = 15;
    await displayCountDown(sleepCounterObject, SLEEP_DURATION);
    await changeDogImageInterval('SLEEP','IDLE', SLEEP_DURATION);
   
   
    overlay.style.display = "none";

    doggy.sleep = 100;
    
   
}

async function doggyEats(){
    await changeDogImageInterval('SNACK','IDLE', 5);
    
    doggy.food = 100;
    console.log(doggy.food);
    document.getElementById("foodLevel").innerHTML = doggy.food + "%";

}

async function doggyHasFun(e) {
    if (doggy.state == "IDLE"){
        changeDogImage("FUN_IDLE","IDLE");
        doggy.state = "FUN_IDLE"
    }
    else if(doggy.state == "FUN_IDLE"){
        
        await changeDogImageInterval('FUN_IDLE','FUN_FUN', 5);
        doggy.state = "FUN_FUN";
        if(doggy.fun < 100){
            doggy.fun += 25;
        }

    }
    else{
        changeDogImage('IDLE');
        doggy.state = "IDLE";
    }
    document.getElementById("funLevel").innerHTML = doggy.fun+"%";
}

async function doggyWalk(){
    
    changeDogImage("WALK");
    doggy.state = "WALK";
} 

async function changeDogImageInterval(begin_state, target_state, interval){
    const doggyImageObject = document.getElementById("doggyImage");

    doggyImageObject.src = DOGGY_STATES_IMGS[begin_state];
    const doggyImgSM = doggy.imgStateManager
    doggyImgSM.state = begin_state;
    doggy.state = begin_state
    
    // count to intervals [s]
    timeToCount = interval * 1000

    if(true == await utils__countDown(timeToCount)){
        doggyImageObject.src = DOGGY_STATES_IMGS[target_state];
        doggyImgSM.state = target_state;
        doggy.state = target_state;
    }

    return true;
}



const DOGGY_SLEEP_NEED_INTERVAL = ( 60 * 60 * 1000)
setInterval(doggySleepNeedController, DOGGY_SLEEP_NEED_INTERVAL);

function doggySleepNeedController()
{
    const DOGGY_ENERGY_REDUCTION_PER_H = 12.5

    if(("SLEEP" != doggy.state) 
        && (doggy.sleep >= DOGGY_ENERGY_REDUCTION_PER_H)){
        doggy.sleep -= DOGGY_ENERGY_REDUCTION_PER_H
    }
    else{
        doggy.sleep = 0;
    }
    document.getElementById("energyLevel").innerHTML = doggy.sleep + "%"
    console.log("ENERGY LEVEL = "+doggy.sleep + "%")
}

const DOGGY_EAT_NEED_INTERVAL = ( 60 * 60 * 1000)

setInterval(doggyFoodNeedController, DOGGY_EAT_NEED_INTERVAL);
function doggyFoodNeedController()
{
    const DOGGY_FOOD_REDUCTION_PER_H = 25

    if(("EAT" != doggy.state) 
        && (doggy.food >= DOGGY_FOOD_REDUCTION_PER_H)){
        doggy.food -= DOGGY_FOOD_REDUCTION_PER_H
    }
    else{
        doggy.food = 0;
    }
    document.getElementById("foodLevel").innerHTML = doggy.food + "%"
    console.log("FOOD LEVEL = "+doggy.sleep + "%")
}


document.getElementById("doggyImage").onclick = doggyHasFun


const DOGGY_FUN_NEED_INTERVAL = ( 60 * 60 * 1000)

setInterval(()=>{
    const DOGGY_FUN_REDUCTION_PER_H = 25

    if( (!['IDLE_FUN','FUN_FUN'].includes(doggy.state)) && doggy.fun > 0){
        console.log(doggy.state)
        doggy.fun -= DOGGY_FUN_REDUCTION_PER_H;
    }
    document.getElementById("funLevel").innerHTML = doggy.fun + "%"
}, DOGGY_FUN_NEED_INTERVAL);


const DOGGY_POOP_NEED_INTERVAL = (60 * 60 * 1000)

function doggyPoopNeedController(){

    const DOGGY_POOP_REDUCTION_PER_H = 25

    if(doggy.poop > 0){
        doggy.poop -= DOGGY_POOP_REDUCTION_PER_H
    }
    document.getElementById("poopLevel").innerHTML = doggy.poop + "%";

}

setInterval(doggyPoopNeedController, DOGGY_POOP_NEED_INTERVAL);

function doggyPoop(){
    if (doggy.state == "WALK" && isPrime(getRandomInt(15))){
        doggy.state = "POOP";
        changeDogImage("WALK");
    }
    if(doggy.state == "POOP"){
        changeDogImage("POOP");
        console.log(doggy.state)
        doggy.poop = 100;
    }
}


setInterval(doggyPoop, 5000);

