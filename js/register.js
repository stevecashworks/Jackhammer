
const form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  const  body={}
  document.querySelectorAll("input").forEach(inp=>{
    alert(inp.id)
    // body[inp.id]=inp.value
  })
  if(body.password!=body.password2){
    alert("passwords don't match")
  }
  alert(body.userName)
  
})