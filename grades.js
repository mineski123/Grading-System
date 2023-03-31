function Calculate()
{
    
    let a=Number(document.getElementById('bookOne').value);
    let b=Number(document.getElementById('bookTwo').value);
    let c=Number(document.getElementById('bookThree').value);
    let d=Number(document.getElementById('bookFour').value);
    let e=Number(document.getElementById('bookFive').value);
    let f=Number(document.getElementById('bookSix').value);
    let g=Number(document.getElementById('bookSeven').value);
    
    if (a > 100 , b > 100 , c > 100 , d > 100 , e > 100, f > 100, g > 100) {
        alert("Please Enter Correct Value");
    }

    else    { 
        let obtain = a + b + c + d + e + f + g ;

        document.getElementById('obtain').innerHTML=obtain;


        let per = obtain / 700 * 100  ;
        

        document.getElementById('per').innerHTML=per;

        if (a > 40 && b > 40 && c > 40 && d > 40 && e > 40) {

            document.getElementById('Remarks').innerHTML="<span style='color:#292'>Pass</span>";
        }

        else
        {
            document.getElementById('Remarks').innerHTML="<span style='color:red'>Fail</span>";

        }

        if (per < 100 && per > 90) { document.getElementById('gardy').textContent="Outstanding"; 

        }

        else if  (per < 89 && per > 85) { document.getElementById('gardy').textContent="Very Satisfactory"; 
        
        }

        else if  (per < 84 && per > 80) { document.getElementById('gardy').textContent="Satisfactory"; 
        
        }
        
        else if  (per < 79 && per > 75) { document.getElementById('gardy').textContent="Fairly Sastisfactory"; 
        
        }


        else if  (per < 74 && per > 1) { document.getElementById('gardy').textContent="Did Not Meet Expectations"; 
        

        }


        else if (per < 101 && per > 99999 ) { document.getElementById('gardy').textContent="Does Not Exist"; 
        
        }

        return false;  
     }    
    }