let submit= document.querySelector(".center-part1 button")
submit.addEventListener("click",function(){
        alert("Consultation Booked")
})

function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1",{
    opacity:0,
    y:-30,
    duration:0.2,
    delay:0.5
})
tl.from(".part2 h4,.buton",{
    opacity:0,
    y:-30,
    duration:0.2,
    stagger:0.15,
    delay:0.5
})
tl.from(".center-part1 h1,.center-part1 p",{
    opacity:0,
    x:-100,
    duration:0.3,
    stagger:0.5
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".center-part2 img",{
    opacity:0,
    duration:0.4,
    x:200
},"-=0.4")

tl.from(".page-bottom img",{
    opacity:0,
    y:40,
    duration:0.6,
    stagger:0.1
})
}
page1Animation()

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".services",
            scroller:"body",
            start:"top 70%",
            end:"top 0",
            scrub:2
        }
    })
    tl2.from(".services",{
        y:-50,
        opacity:0,
        duration:0.9,
    })
    tl2.from(".card.line1.left",{
        x:-100,
        opacity:0,
        duration:0.3,
    })
    tl2.from(".card.line1.right",{
        x:100,
        opacity:0,
        duration:0.3,
    },"-=0.3")
    
    tl2.from(".card.line2.left",{
        x:-100,
        opacity:0,
        duration:0.3,
    },"anime")
    tl2.from(".card.line2.right",{
        x:100,
        opacity:0,
        duration:0.3,
    },"anime")
}
page2Animation()

function page3Animation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".page3",
            scroller:"body",
            start:"top 40%",
            end:"top 100%",
            scrub:2
        }
    })
    tl3.from(".par h3",{
        opacity:0,
        y:-50,
        duration:0.8
    })
    tl3.from(".par p",{
        opacity:0,
        y:50,
        duration:0.8
    })
    tl3.from(".par button",{
        opacity:0,
    })
    tl3.from(".container img",{
        scale:0
    },"-=1")
}
page3Animation()
