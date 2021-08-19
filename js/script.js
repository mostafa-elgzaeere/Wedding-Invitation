let home=document.getElementById("home"),
    men=document.getElementById("men"),
    loc=document.getElementById("loc"),
    story=document.getElementById("story");


home.onclick=()=>{
    home.classList.add("active")
    men.classList.remove("active")
    loc.classList.remove("active")
    story.classList.remove("active")

}    
men.onclick=()=>{
    home.classList.remove("active")
    men.classList.add("active")
    loc.classList.remove("active")
    window.scrollTo({
        top:2520,
        left:0,
        behavior: 'smooth'
      })
    story.classList.remove("active")
}    
loc.onclick=()=>{
    home.classList.remove("active")
    men.classList.remove("active")
    loc.classList.add("active")
    story.classList.remove("active")
    window.scrollTo({
        top:1800,
        left:0,
        behavior: 'smooth'
      })
}    
var vid = document.getElementById("v");
vid.volume =0.1

story.onclick=()=>{
    window.scrollTo({
        top:1000,
        left:0,
        behavior: 'smooth'
      })
    home.classList.remove("active")
    men.classList.remove("active")
    loc.classList.remove("active")
    story.classList.add("active")
}    


AOS.init({
    offset: 120,
    duration: 700});


var countDownDate = new Date("Dec 25, 2021 16:37:52").getTime();
var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("mins").innerHTML = minutes
    document.getElementById("secs").innerHTML = seconds
    
    }, 1000)

    var type=new Typed("#elem",
    {
        strings:["","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis . <br><br>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse   ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis" ],
        typeSpeed:40
        }
    )    

