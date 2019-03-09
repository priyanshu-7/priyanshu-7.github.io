var counter = 1;
var x_score = 0;
var o_score = 0;
var game_end = 0;
document.getElementById("box1").onclick = function()
{
  if(counter%2!=0 && document.getElementById("box1").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box1").innerHTML = 'X';
    counter++; counterCheck();

  }
  else if(counter%2==0 && document.getElementById("box1").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box1").innerHTML = 'O';
    counter++; counterCheck();
  }
}

document.getElementById("box2").onclick = function()
{
  if(counter%2!=0 && document.getElementById("box2").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box2").innerHTML = 'X';
    counter++; counterCheck();

  }
  else if(counter%2==0 && document.getElementById("box2").innerHTML == '' && game_end == 0)
   {
    document.getElementById("box2").innerHTML = 'O';
    counter++; counterCheck();
  }
}
document.getElementById("box3").onclick = function()
{
  if(counter%2!=0 && document.getElementById("box3").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box3").innerHTML = 'X';
    counter++; counterCheck();

  }
  else if(counter%2==0 && document.getElementById("box3").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box3").innerHTML = 'O';
    counter++; counterCheck();
  }
}
document.getElementById("box4").onclick = function()
{
  if(counter%2!=0 && document.getElementById("box4").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box4").innerHTML = 'X';
    counter++; counterCheck();

  }
  else if(counter%2==0 && document.getElementById("box4").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box4").innerHTML = 'O';
    counter++; counterCheck();
  }
}
document.getElementById("box5").onclick = function()
{
  if(counter%2!=0 && document.getElementById("box5").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box5").innerHTML = 'X';
    counter++; counterCheck();

  }
  else if(counter%2==0 && document.getElementById("box5").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box5").innerHTML = 'O';
    counter++; counterCheck();
  }
}
document.getElementById("box6").onclick = function()
{
  if(counter%2!=0 && document.getElementById("box6").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box6").innerHTML = 'X';
    counter++; counterCheck();

  }
  else if(counter%2==0 && document.getElementById("box6").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box6").innerHTML = 'O';
    counter++; counterCheck();
  }
}
document.getElementById("box7").onclick = function()
{
  if(counter%2!=0 && document.getElementById("box7").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box7").innerHTML = 'X';
    counter++; counterCheck();

  }
  else if(counter%2==0 && document.getElementById("box7").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box7").innerHTML = 'O';
    counter++; counterCheck();
  }
}
document.getElementById("box8").onclick = function()
{
  if(counter%2!=0 && document.getElementById("box8").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box8").innerHTML = 'X';
    counter++; counterCheck();

  }
  else if(counter%2==0 && document.getElementById("box8").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box8").innerHTML = 'O';
    counter++; counterCheck();
  }
}
document.getElementById("box9").onclick = function()
{
  if(counter%2!=0 && document.getElementById("box9").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box9").innerHTML = 'X';
    counter++; counterCheck();

  }
  else if(counter%2==0 && document.getElementById("box9").innerHTML == '' && game_end == 0)
  {
    document.getElementById("box9").innerHTML = 'O';
    counter++; counterCheck();
  }
}

function counterCheck()
{
  if(counter == 10)
  {
    document.getElementById("turn").innerHTML = '<center><h1>Game Over - No Winner</h1></center>';
  }
  if(counter%2!=0 && counter<10)
  {
    console.log(counter);
    document.getElementById("turn").innerHTML = '<center><h1>Xs turn</h1></center>';
  }
  if(counter%2==0 && counter<10)
  {
    console.log(counter);
    document.getElementById("turn").innerHTML = '<center><h1>Os turn</h1></center>';
  }
     if(document.getElementById("box1").innerHTML === 'X' &&
     document.getElementById("box5").innerHTML === 'X' &&
     document.getElementById("box9").innerHTML === 'X')
     {
       document.getElementById("turn").innerHTML = '<center><h1>X won</h1></center>';
       x_score++; game_end = 1;
     }
     if(document.getElementById("box1").innerHTML === 'O' &&
     document.getElementById("box5").innerHTML === 'O' &&
     document.getElementById("box9").innerHTML === 'O')
     {
        document.getElementById("turn").innerHTML = '<center><h1>O won</h1></center>';
        o_score++; game_end = 1;
     }
     if(document.getElementById("box3").innerHTML === 'X' &&
        document.getElementById("box5").innerHTML === 'X' &&
        document.getElementById("box7").innerHTML === 'X')
        {
          document.getElementById("turn").innerHTML = '<center><h1>X won</h1></center>';
          x_score++; game_end = 1;
        }
     if(document.getElementById("box3").innerHTML === 'O' &&
        document.getElementById("box5").innerHTML === 'O' &&
        document.getElementById("box7").innerHTML === 'O')
        {
           document.getElementById("turn").innerHTML = '<center><h1>O won</h1></center>';
           o_score++; game_end = 1;
        }
     if(document.getElementById("box1").innerHTML === 'X' &&
        document.getElementById("box2").innerHTML === 'X' &&
        document.getElementById("box3").innerHTML === 'X')
        {
            document.getElementById("turn").innerHTML = '<center><h1>X won</h1></center>';
            x_score++
        }
     if(document.getElementById("box1").innerHTML === 'O' &&
        document.getElementById("box2").innerHTML === 'O' &&
        document.getElementById("box3").innerHTML === 'O')
        {
            document.getElementById("turn").innerHTML = '<center><h1>O won</h1></center>';
            o_score++; game_end = 1;
        }
     if(document.getElementById("box4").innerHTML === 'X' &&
        document.getElementById("box5").innerHTML === 'X' &&
        document.getElementById("box6").innerHTML === 'X')
        {
            document.getElementById("turn").innerHTML = '<center><h1>X won</h1></center>';
            x_score++; game_end = 1;
        }
     if(document.getElementById("box4").innerHTML === 'O' &&
        document.getElementById("box5").innerHTML === 'O' &&
        document.getElementById("box6").innerHTML === 'O')
        {
            document.getElementById("turn").innerHTML = '<center><h1>O won</h1></center>';
            o_score++; game_end = 1;
        }
     if(document.getElementById("box7").innerHTML === 'X' &&
        document.getElementById("box8").innerHTML === 'X' &&
        document.getElementById("box9").innerHTML === 'X')
        {
             document.getElementById("turn").innerHTML = '<center><h1>X won</h1></center>';
             x_score++; game_end = 1;
        }
     if(document.getElementById("box7").innerHTML === 'O' &&
        document.getElementById("box8").innerHTML === 'O' &&
        document.getElementById("box9").innerHTML === 'O')
        {
              document.getElementById("turn").innerHTML = '<center><h1>O won</h1></center>';
              o_score++; game_end = 1;
        }
     if(document.getElementById("box1").innerHTML === 'X' &&
        document.getElementById("box4").innerHTML === 'X' &&
        document.getElementById("box7").innerHTML === 'X')
        {
              document.getElementById("turn").innerHTML = '<center><h1>X won</h1></center>';
              x_score++; game_end = 1;
        }
     if(document.getElementById("box1").innerHTML === 'O' &&
        document.getElementById("box4").innerHTML === 'O' &&
        document.getElementById("box7").innerHTML === 'O')
        {
              document.getElementById("turn").innerHTML = '<center><h1>O won</h1></center>';
              o_score++; game_end = 1;
        }
     if(document.getElementById("box2").innerHTML === 'X' &&
        document.getElementById("box5").innerHTML === 'X' &&
        document.getElementById("box8").innerHTML === 'X')
        {
              document.getElementById("turn").innerHTML = '<center><h1>X won</h1></center>';
              x_score++; game_end = 1;
        }
     if(document.getElementById("box2").innerHTML === 'O' &&
        document.getElementById("box5").innerHTML === 'O' &&
        document.getElementById("box8").innerHTML === 'O')
        {
              document.getElementById("turn").innerHTML = '<center><h1>O won</h1></center>';
              o_score++; game_end = 1;
        }
     if(document.getElementById("box3").innerHTML === 'X' &&
        document.getElementById("box6").innerHTML === 'X' &&
        document.getElementById("box9").innerHTML === 'X')
        {
              document.getElementById("turn").innerHTML = '<center><h1>X won</h1></center>';
              x_score++; game_end = 1;
        }
     if(document.getElementById("box3").innerHTML === 'O' &&
        document.getElementById("box6").innerHTML === 'O' &&
        document.getElementById("box9").innerHTML === 'O')
        {
              document.getElementById("turn").innerHTML = '<center><h1>O won</h1></center>';
              o_score++; game_end = 1;
        }
}

function reset()
{
  document.getElementById("box1").innerHTML = ''
  document.getElementById("box2").innerHTML = ''
  document.getElementById("box3").innerHTML = ''
  document.getElementById("box4").innerHTML = ''
  document.getElementById("box5").innerHTML = ''
  document.getElementById("box6").innerHTML = ''
  document.getElementById("box7").innerHTML = ''
  document.getElementById("box8").innerHTML = ''
  document.getElementById("box9").innerHTML = ''
  counter = 1;
  game_end = 0;
  document.getElementById("turn").innerHTML = '<center><h1>Xs turn</h1></center>';
}
