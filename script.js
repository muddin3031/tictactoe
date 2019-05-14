let grid=new Array(8);
let trigger=true;


function hover(x)
{
   let img=document.getElementById(x);
    img.src="x-img.png";
}
function nohover(x)
{
   let img2=document.getElementById(x);
    img2.src="white square.png";
}

function Turn(y)
{
    

    //guess = Math.floor((Math.random() * 3));
    let img=document.getElementById(y);
    img.onmouseover="";
    img.onmouseout="";
    img.src="x-img.png";
    grid[y]='x';
    trigger = true;
  while(trigger)
    {
    // let choice
    // choice=Math.floor((Math.random() * 2));
    if(grid[0]=='x'&& grid[3]=='x'&& grid[6]==null)
    {
      grid[6]= 'o';
         let img3= document.getElementById(6);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    }
    else if(grid[0]=='x'&& grid[6]=='x'&& grid[3]==null)
    {
      grid[3]= 'o';
         let img3= document.getElementById(3);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    } 
    else if(grid[3]=='x'&& grid[6]=='x'&& grid[0]==null)
    {
      grid[0]= 'o';
         let img3= document.getElementById(0);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    } 
     else  if(grid[0]=='x'&& grid[1]=='x'&& grid[2]==null)
    {
      grid[2]= 'o';
         let img3= document.getElementById(2);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    }
    else if(grid[0]=='x'&& grid[2]=='x'&& grid[1]==null)
    {
      grid[1]= 'o';
         let img3= document.getElementById(1);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    } 
    else if(grid[1]=='x'&& grid[2]=='x'&& grid[0]==null)
    {
      grid[0]= 'o';
         let img3= document.getElementById(0);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    }
    else if(grid[0]=='x'&& grid[4]=='x'&& grid[8]==null)
    {
      grid[8]= 'o';
         let img3= document.getElementById(8);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    } 
    else if(grid[0]=='x'&& grid[8]=='x'&& grid[4]==null)
    {
      grid[4]= 'o';
         let img3= document.getElementById(4);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    } else if(grid[8]=='x'&& grid[4]=='x'&& grid[0]==null)
    {
      grid[0]= 'o';
         let img3= document.getElementById(0);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    } 
    else if(grid[2]=='x'&& grid[4]=='x'&& grid[6]==null)
    {
      grid[6]= 'o';
         let img3= document.getElementById(6);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    } 
    else if(grid[6]=='x'&& grid[2]=='x'&& grid[4]==null)
    {
      grid[4]= 'o';
         let img3= document.getElementById(4);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    } 
    else if(grid[6]=='x'&& grid[4]=='x'&& grid[2]==null)
    {
      grid[2]= 'o';
         let img3= document.getElementById(2);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;  
    } 
    else{
    
    
    
    
     let y2
     y2 = Math.floor((Math.random() * 9));
     if(grid[y2]!=='x')
     {
         grid[y2]= 'o';
         let img3= document.getElementById(y2);
         img3.onmouseover="";
         img3.onmouseout="";
         img3.src="o-img.png";
         trigger= false;
         
     }
    }
         
     
    }
  checkresult();
  return;
    
    
    
}

function checkresult()
{
    if(grid[0]=='x'&& grid[3]=='x' && grid[6]=='x')
    {
        alert('You Won');
         refresh();
    }
    if(grid[1]=='x'&& grid[4]=='x' && grid[7]=='x')
    {
        alert('You Won');
         refresh();
    }
    if(grid[2]=='x'&& grid[5]=='x' && grid[8]=='x')
    {
        alert('You Won');
         refresh();
    }
    
    if(grid[0]=='x'&& grid[1]=='x' && grid[2]=='x')
    {
        alert('You Won');
         refresh();
    }
    if(grid[3]=='x'&& grid[4]=='x' && grid[5]=='x')
    {
        alert('You Won');
         refresh();
    }
    if(grid[6]=='x'&& grid[7]=='x' && grid[8]=='x')
    {
        alert('You Won');
         refresh();
    }  
    
    if(grid[0]=='x'&& grid[4]=='x' && grid[8]=='x')
    {
        alert('You Won');
         refresh();
    }
    if(grid[2]=='x'&& grid[4]=='x' && grid[6]=='x')
    {
        alert('You Won');
         refresh();
    }
// AI CHECKER
    if(grid[0]=='o'&& grid[3]=='o' && grid[6]=='o')
    {
        alert('You Lost');
         refresh();
    }
    if(grid[1]=='o'&& grid[4]=='o' && grid[7]=='o')
    {
        alert('You Lost');
         refresh();
    }
    if(grid[2]=='o'&& grid[5]=='o' && grid[8]=='o')
    {
        alert('You Lost');
         refresh();
    }
    if(grid[0]=='o'&& grid[1]=='o' && grid[2]=='o')
    {
        alert('You Lost');
         refresh();
    }
    if(grid[3]=='o'&& grid[4]=='o' && grid[5]=='o')
    {
        alert('You Lost');
         refresh();
    }
    if(grid[6]=='o'&& grid[7]=='o' && grid[8]=='o')
    {
        alert('You Lost');
         refresh();
    }
    if(grid[0]=='o'&& grid[4]=='o' && grid[8]=='o')
    {
        alert('You Lost');
         refresh();
    }
    if(grid[2]=='o'&& grid[4]=='o' && grid[6]=='o')
    {
        alert('You Lost');
         refresh();
    }
  
}

function refresh(){
    location.reload();
}