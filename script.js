let tl = gsap.timeline({scrollTrigger:{
        trigger:".page2",
        // markers:true,
        start:'0 95%',
        end:'50% 50%',
        scrub:1 
}});
tl.to('.fanta', {
    width:'45%',
    top:"105%",
    left:'2%',
    // scrub:true,
}, 'eksaath')
tl.to('.orange',{
    top:'160%',
    left:'80%',
    rotate:'10deg'
},'eksaath')

tl.to('.orange-cut',{
    top:'160%',
    left:'26%',
},'eksaath')
tl.to('.leaf',{
    width:'15%',
    rotate:'175deg',
    top:'105%',
    left:'76%'
},'eksaath')
tl.to('.leaf3',{
    rotate:'90 deg',
    top:'105%',
    left:'0px',
},'eksaath')

let tl2 = gsap.timeline({scrollTrigger:{
    trigger:'.page3',
    // markers:true,
    start:'50% 90%',
    end:'50% 50%',
    scrub:1,
}})

tl2.from('.lemon',{
    top:'100%' ,
    left:'-80%',
},'cc')
tl2.from('#sprite',{
    rotate:'-20deg',
    top:'20%',
    left:'-100%'
},'cc')
tl2.from('.pep-lemon',{
    top:'100%' ,
    left:'80%',
},'cc')
tl2.from('#pepsi',{
    rotate:'20deg',
    top:'20%',
    left:'80%'
},'cc')

tl2.to('.orange-cut',{
    top:"200%",
    left:'35%',
    width: '30%',
},'cc')
tl2.to('.fanta',{
    width:'35%',
    top:'210%',
    left:"32%"
},'cc')
