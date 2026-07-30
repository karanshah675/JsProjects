let forWin = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]
let change = 0
function checkWin(arr){
    
}
document.querySelectorAll('.box').forEach((e)=>{
    e.addEventListener('click',(el)=>{
        // console.log((el.target.children[0].innerText));
        if(el.target.children[0].innerText === ""){
            if(change==0){
                el.target.children[0].innerText="X"
                change=1
            }else{
                el.target.children[0].innerText="O"
                change=0
            }
        }
        
    })
})