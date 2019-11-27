console.log("understanding async")


setTimeout(() => {
    for(let index=0;index<4055;index++)
{
    const element= index;
    console.log("this is index number"+index);
}

    
}, 1000);

console.log("done printing");