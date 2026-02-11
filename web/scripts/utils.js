
async function utils__countDown(interval)
{
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function wait() { 
        await sleep(interval); 
    }
    
    await wait();

    return true;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function isPrime(num){
    const s = Math.sqrt(num)
    for(let i = 2; i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}