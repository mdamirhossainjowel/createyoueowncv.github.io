function select_tamplate(){
    
    document.getElementById("Dummy").style.display = "block";
    document.getElementById("footer_div").style.display = "block";
  
    document.getElementById("Body_Content").style.display = "none";
    document.getElementById("tamplate").style.visibility = "visible";
    document.getElementById("create").style.display = "none"; 
    document.getElementById("Submit").style.display = "none"; 
    document.getElementById("tamplate").style.display = "block";
    document.getElementById("box").style.display = "none"; 


}

function home(){
  document.getElementById("tamplate").style.visibility = "hidden";
  document.getElementById("Dummy").style.display = "block";
  document.getElementById("Body_Content").style.display = "block";
  document.getElementById("footer_div").style.display = "block";
  document.getElementById("tamplate").style.display = "none"; 
  document.getElementById("Submit").style.display = "none"; 
  document.getElementById("box").style.display = "none"; 
  document.getElementById("create").style.display = "none"; 
}
function Data(){
  document.getElementById("box").style.visibility = "visible"; 
  document.getElementById("box").style.display = "block"; 
  document.getElementById("Submit").style.display = "none"; 
  document.getElementById("Dummy").style.display = "block";
  document.getElementById("Body_Content").style.display = "none";
  document.getElementById("footer_div").style.display = "block";
  document.getElementById("tamplate").style.display = "none"; 
  document.getElementById("create").style.display = "none"; 
}

function Displayimage(){
var modal = document.getElementById("myModal");
var img = document.getElementById("tamp");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
}
function Displayimage1(){
    var modal = document.getElementById("myModal");
    var img = document.getElementById("tamp1");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
      modal.style.display = "none";
    }
}
function Displayimage2(){
    var modal = document.getElementById("myModal");
    var img = document.getElementById("tamp2");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
    modal.style.display = "none";
}
}
function Displayimage3(){
    var modal = document.getElementById("myModal");
    var img = document.getElementById("tamp3");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
    modal.style.display = "none";
    }
}
function Displayimage4(){
    var modal = document.getElementById("myModal");
    var img = document.getElementById("tamp4");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;}
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
    modal.style.display = "none";
    }
}

function Create(){
  document.getElementById("form").style.visibility = "visible";
  document.getElementById("create").style.display = "block"; 
  document.getElementById("tamplate").style.visibility = "hidden";
  document.getElementById("Dummy").style.display = "block";
  document.getElementById("Body_Content").style.display = "none";
  document.getElementById("footer_div").style.display = "block";
  document.getElementById("tamplate").style.display = "none"; 
  document.getElementById("form").style.display = "block"; 
  document.getElementById("Submit").style.visibility = "visible";
  document.getElementById("Submit").style.display = "block"; 

    

}