const scriptURL = 'https://script.google.com/macros/s/AKfycbyDWBTUTPLq_H9hAS5JY_fgeyeGm9_8Yisx88tgDEgRWIHUa03LEZRUSuIcHag2WcpS/exec'

const form = document.forms['form-sheet']


form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


const scriptURL1 = 'https://script.google.com/macros/s/AKfycbyDWBTUTPLq_H9hAS5JY_fgeyeGm9_8Yisx88tgDEgRWIHUa03LEZRUSuIcHag2WcpS/exec'

const form1 = document.forms['form-sheet1']


form1.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})