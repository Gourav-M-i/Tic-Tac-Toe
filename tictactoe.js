console.log("tic-tac-toe");
let inp,scorex,score0;
score0=0;
scorex=0;
let val=document.querySelectorAll('input');
for (let i = 0; i < val.length; i++)
{
    val[i].addEventListener('click',function(){
        if(val[i].checked)
        {
            inp=val[i].value;
        }
        else{
            inp=val[i].value;
        }
    });
}
function change(inp) {
    return inp == 'X' ? '0' : 'X';
}
function iswin()
{
    store=document.querySelectorAll('.container span');
    if(store[0].innerText==store[1].innerText && store[0].innerText==store[2].innerText && store[0].innerText!='')
    {
        store[0].style.color='green';
        store[1].style.color='green';
        store[2].style.color='green';
        return store[0].innerText;
    }
    else if(store[3].innerText==store[4].innerText && store[3].innerText==store[5].innerText && store[3].innerText!='')
    {
        store[3].style.color='green';
        store[4].style.color='green';
        store[5].style.color='green';
        return store[3].innerText;
    }
    else if(store[6].innerText==store[7].innerText && store[6].innerText==store[8].innerText && store[6].innerText!='')
    {
        store[6].style.color='green';
        store[7].style.color='green';
        store[8].style.color='green';
        return store[6].innerText;
    }
    else if(store[0].innerText==store[3].innerText && store[0].innerText==store[6].innerText && store[0].innerText!='')
    {
        store[0].style.color='green';
        store[3].style.color='green';
        store[6].style.color='green';
        return store[0].innerText;
    }
    else if(store[1].innerText==store[4].innerText && store[1].innerText==store[7].innerText && store[1].innerText!='')
    {
        store[1].style.color='green';
        store[4].style.color='green';
        store[7].style.color='green';
        return store[1].innerText;
    }
    else if(store[2].innerText==store[5].innerText && store[2].innerText==store[8].innerText && store[2].innerText!='')
    {
        store[2].style.color='green';
        store[5].style.color='green';
        store[8].style.color='green';
        return store[2].innerText;
    }
    else if(store[0].innerText==store[4].innerText && store[0].innerText==store[8].innerText && store[0].innerText!='')
    {
        store[0].style.color='green';
        store[4].style.color='green';
        store[8].style.color='green';
        return store[0].innerText;
    }
    else if(store[2].innerText==store[4].innerText && store[2].innerText==store[6].innerText && store[2].innerText!='')
    {
        store[2].style.color='green';
        store[4].style.color='green';
        store[6].style.color='green';
        return store[2].innerText;
    }
}
function isdraw()
{
    //let position = document.querySelectorAll('span')
    for (let i = 0; i < position.length; i++) {   
        if(position[i].innerText=='')
        {
            return 0
        }
    }
    return 1
}

document.getElementById('reset').addEventListener('click',function(){
    //let position = document.querySelectorAll('span')
    for (let i = 0; i < position.length; i++) {
        position[i].innerText='';
        position[i].style.backgroundColor='black';
        position[i].style.color='white';
    }
    val[0].checked=false;
    val[1].checked=false;
})
let position = document.querySelectorAll('.container span')
for (let i = 0; i < position.length; i++) {
    position[i].addEventListener('click', function () {
        if (position[i].innerText == '' && (val[0].checked || val[1].checked)) {
            position[i].innerText = inp;
            inp = change(inp);
            if(iswin()=='X'){
                scorex=scorex+1;
                document.querySelector('.pointx').innerText=scorex
            }
            if(iswin()=='0'){
                score0=score0+1;
                document.querySelector('.point0').innerText=score0
            }
        }
        else
        {
            alert(`Please select between 'X' and '0'`);
        }
    });
}
