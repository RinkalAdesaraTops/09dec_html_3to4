let alldata = []
const saveData = ()=>{
    // let nm = document.frm.uname.value
    let existUsers = JSON.parse(localStorage.getItem("userinfo"))
    let len = existUsers!=null? existUsers.length+1 : 1
    
    let nm = $("#uname").val()
    let age = $("#age").val()
    let obj = {
        id:len,
        name:nm,
        age:age
    }
    alldata.push(obj)
    console.log(alldata);
    localStorage.setItem("userinfo",JSON.stringify(alldata))
        // let nm = document.getElementById('uname').value
        // let age = document.getElementById('age').value
        // ["dfgdf","56"]
        // {
        //     name:"dfhg"
        // }
        // document.frm.reset()
    $("#frm").reset()
}