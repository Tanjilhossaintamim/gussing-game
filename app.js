const startgamebtn = document.querySelector('#startbtn');
const mainpage = document.querySelector('.main');
const gamepage = document.querySelector('.gamepage');
const checkbtn = document.querySelector('#checkbtn');
const input = document.querySelector('input');
const display = document.querySelector('.display');
const tryagin = document.querySelector('.againbtn');
input.addEventListener('focusin', clear);
function clear() {
    display.innerHTML = "";
}

startgamebtn.onclick = () => {
    mainpage.style.display = 'none';
    gamepage.style.display = 'block';
    input.value = ''
}
let block = 'block'
let sum = 0;
checkbtn.onclick = () => {
    let uservalu = input.value;
    if (uservalu > 0 && uservalu < 11 && uservalu !== "") {
        sum += 1;

        let rendomvalue = parseInt(Math.random(1) * 10);
        if (sum <= 3) {

            if (uservalu == rendomvalue) {
                display.innerHTML = ""
                let h4 = document.createElement('h4');
                h4.innerText = 'অভিন্দন আপনি জিতেছেন !!';
                display.appendChild(h4)
                input.classList.add('opacity');
                checkbtn.classList.add('opacity');
                let tryaginbtn = document.createElement('button');
                tryaginbtn.classList.add('againbtn');
                tryaginbtn.innerText = 'আবার খেলুন';
                display.appendChild(tryaginbtn);
                tryaginbtn.onclick = () => {
                    window.location.reload();
                }


            }
            else {
                display.innerHTML = `<h4>আপনার দেওয়া নাম্বারটি সঠিক হয়নি সঠিক সংখ্যা টি ছিল <span style="color:blue;">${rendomvalue}</span> । আবার চেষ্টা করুন !</h4>`;
                input.value = ''
            }
        }
        else {

            display.innerHTML = ""
            let h4 = document.createElement('h4');
            h4.innerText = 'আপনি ব্যর্থ হয়েছেন পুনরায় চেষ্টা করুন!';
            display.appendChild(h4)
            input.classList.add('opacity');
            checkbtn.classList.add('opacity');
            let tryaginbtn = document.createElement('button');
            tryaginbtn.classList.add('againbtn');
            tryaginbtn.innerText = 'আবার চেষ্টা করুন';
            display.appendChild(tryaginbtn);
            tryaginbtn.onclick = () => {
                window.location.reload();
            }



        }

    }

    else if (uservalu < 0) {
        display.innerHTML = '<h4>আপনার দেওয়া নাম্বারটি অবশই ০ থেকে বড় হত হবে!</h4>';
        input.value = ''
    }
    else if (uservalu == "") {
        alert('অনুগ্রহ করে নাম্বার লিখুন')
    }
    else {
        display.innerHTML = '<h4>আপনার দেওয়া নাম্বারটি ১০ থেকে বড়। ১ থেকে ১০ এর মধ্যে নাম্বার দিন !</h4>';
        input.value = ''
    }

}
