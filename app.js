const namePlace = document.querySelector("#name");
const descPlace = document.querySelector("#desc");
const genBtn = document.querySelector("#generateBtn");

const effects = [
    //this array will contain objects of key value pairs of effect names and what they do.
    {
    name: "Shrinking",
    effect: "This monster can will inflict rapid shrinking. One sip halves their growth. The whole can reduces them to an inch tall.",
    color: "Pink"
},
{
    name: "Growing",
    effect: "This monster can will cause rapid growth. The drinker will immediately grow in height. One can can double their growth",
    color: "Green"
},
{
    name: "Greedy",
    effect: "This monster allows the drinker to take attributes of anyone they want. One sip allows the drinker to take one attribute. Each can has about 10 sips so have fun.",
    color: "Green"
},
{
    name: "Futa",
    effect: "This can's effect will allow female consumers to grow a cock. Balls are optional but encouraged. A sip gives you a bit of a clitty and the entire can gives you approximately 6 inches. An entire case gives you a monster member!",
    color: "Yellow"
},
{
    name: "Mesmerizing",
    effect: "This can's effect will allow the user to control the minds of others. A small sip can control one person. Drinking the entire can can ensare an entire town. A whole case can capture the entire state.",
    color: "Yellow, Blue and Green"
},
{
    name: "Bulky",
    effect: "This can's effect will allow the drinker to enlarge their muscles. Drinking the can gives you the muscle mass of a professional athelete. The whole case gives you top body builder level of muscles.",
    color: "Dark Brown"
},
{
    name: "Compliant",
    effect: "This can's effect will force the drinker to obey the demands of their dom. Likely the one who gave them the drink in the first place. One sip, and any command tugs at the drinker until it is eventually obeyed. The entire can, and their dom is now their god. They say that if the can was stronger, the effect could allow the dom to impact their subs very reality.",
    color: "White"
},
{
    name: "Switching",
    effect: "This monster can will inflict a gender change to the opposite sex in the person who drinks the can. The amount drunk only effects the rate the change occurs. The stronger the effect, the more attractive the change.",
    color: "Pink and Blue"
},
{
    name: "Morphing",
    effect: "This monster can will inflict a rapid transformation into one of many random objects. Smaller sips result in safer objects to be like chairs or cushions. Half the can would result in something more dangerous such as socks or worn jewelry. The whole can result into extremely dangerous transformations like gum balls, condoms or hard candy. The transformation lasts 24 hours.",
    color: "Cyan"
},
{
    name: "Elastic",
    effect: "This monster causes the drinker to be able to stretch out to any dimension they desire, whether it be stretcing to pick things up, stretching to become paper flat, or whatever the user desires at the time. Drinking the entire can has the effect last 24 hours.",
    color: "White and Black"
},
{
    name: "Assimilating",
    effect: "This monster can causes the drinker to accumulate mass inside themselves to rearrange however they wish. Sentient matter can also be taken in with a tough. The mass can be distributed throughtout the body or even split off into a seperate entity connected to the drinker. One can allows the drinker to hold up to their own body weight in mass.",
    color: "Dark Green and Navy Brown"
},
{
    name: "Figure",
    effect: "Drinking this can turns the drinker into a miniature figure of themselves. The drinker is still alive within. The effect lasts for a week per can but can be extended if doused with more of the beverage.",
    color: "Pink and White"
},
{
    name: "Ecstatic",
    effect: "This can multiplies the sexual pleasure derived. One sip and fapping is better than the best sex you've ever had. Drinking the entire can can cause you to cum buckets from the slightest touch. The whole case and just a single word from your waifu will be like heaven.",
    color: "Cream Orange"
},
]

const extra = [
    //this array will contain a list of additional effects that may be tacked on to a monster can.
    {
        name: "Super",
        effect: "This can's effect will likely exceed the intended effect. Gives one can the power of an entire case. Meaning one can has 12x the power."
},
{
    name: "Sour",
    effect: "This can's effect only activates when the afflicted least expects or wants it to happen."
},
{
    name: "Hyper",
    effect: "This can's effect will wildly exceed your expectations. One sip gives the can the potency of the entire case. Making it effectively more than 100x as powerful."
},
{
    name: "Everlasting",
    effect: "This can's effect will never wear off."
},
{
    name: "Ramp Up",
    effect: "This can's effect will start off barely noticeable but will increase in intesity every time it activates. Doubling the effect each tick."
},

]

const flavor = [{
    name: "Strawberry",
    color: "Red."
},
{
    name: "Mango",
    color: "Yellow and Orange."
},
{
    name: "Blue Raspberry",
    color: "Blue."
},
{
    name: "Cherry",
    color: "Red and Black."
},
{
    name: "Raspberry",
    color: "Maroon."
},
{
    name: "Lemon",
    color: "Yellow."
},
{
    name: "Lime",
    color: "Green."
},
{
    name: "Grape",
    color: "Purple."
},
{
    name: "Passion Fruit",
    color: "Pink and Yellow."
},
{
    name: "Pineapple",
    color: "Yellow and Yellow/Green."
},
{
    name: "Kiwi",
    color: "Light Green."
},
{
    name: "Orange Cream",
    color: "Orange and White."
},
{
    name: "Cotton Candy",
    color: "Light Blue."
},
{
    name: "Watermelon",
    color: "Red and Green."
},
{
    name: "Wild Berry",
    color: "Magenta and Blue."
},
]

function ranSel(arr) {
    let randomIndex = Math.floor(Math.random()*arr.length)
    // console.log(randomIndex)
    return randomIndex
}

function generateMonster() {
    let extraSel = extra[ranSel(extra)] //selects a random extra
    let effectsSel = effects[ranSel(effects)] //selects a random main effect
    let flavorSel = flavor[ranSel(flavor)] //selects a flavor

    if (Math.floor(Math.random()*2) === 1) {
        // console.log(extraSel.name)
        let monsterName = `${extraSel.name} ${effectsSel.name} ${flavorSel.name}`
        let monsterEffect = ` ${effectsSel.effect} ${extraSel.effect} It's colors are ${effectsSel.color} and ${flavorSel.color}`
        // console.log(monsterName);
        namePlace.innerHTML = monsterName;
        // console.log(monsterEffect);
        descPlace.innerHTML = monsterEffect;
    } else {
        let monsterName = `${effectsSel.name} ${flavorSel.name}`
        let monsterEffect = ` ${effectsSel.effect} It's colors are ${effectsSel.color} and ${flavorSel.color}`
        // console.log(monsterName)
        // console.log(monsterEffect)
        namePlace.innerHTML = monsterName;
        descPlace.innerHTML = monsterEffect;
    }
    //the if statement is for the optional inclusion of the prefix extras
    


    // console.log(effectsSel.name)
    // console.log(flavorSel)
}

genBtn.addEventListener("click", generateMonster);