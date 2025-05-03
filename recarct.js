let inp_add = document.querySelector(".inp-add");
let bt_add = document.querySelector(".btn-add");
let ul = document.querySelector(".ul");
let p = document.querySelector(".p");
let todo_list = document.querySelector(".todo_list");
let eror = document.querySelector(".eror_p")
let check_tekrary = new Set();

ul.innerHTML = localStorage.getItem("list-item") || "";
setTimeout(
    function () {

        todo_list.classList.remove("d-none"); // حذف کلاس مخفی
        setTimeout(() => {
            todo_list.classList.add("show"); 
        }, 50); 
        
        // Event
bt_add.addEventListener("click", function () {
    //  check empty
    let inp_val = inp_add.value.trim();
    function empty_box() {
      if (inp_val === "") {
        inp_add.classList.add("shake");
        inp_add.value = "";
        inp_add.setAttribute("placeholder","empty!!")
  
        setTimeout(() => {
          inp_add.classList.remove("shake");
        }, 300);


        return true;
      }
      return false;
    }
    if (empty_box()) {
      return;
    }   
    inp_add.setAttribute("placeholder","Enter your priority")

    //  check tekrary
  
    function tekrary(x) {
      return check_tekrary.has(x);
    }
    if (tekrary(inp_val)) {
      inp_add.classList.add("shake");
      inp_add.value = "";
      inp_add.setAttribute("placeholder","Already entered)")
      setTimeout(() => {
        inp_add.classList.remove("shake");
      }, 300);
  
      return;
    }
    check_tekrary.add(inp_val);
    // E check empty
    // S createElement
    let item = document.createElement("li");
    item.innerHTML = `

 <div class=" item alert alert-danger list-unstyled mx-auto d-flex justify-content-between align-items-center  ">
               <p class="p d-flex p-0 m-0">${inp_val}</p>

               <div class="btns ">

                    <button onclick="done_item(this)" class="btn btn-secondary" type="submit"><i class="bi bi-x-diamond-fill"></i></button>
                    <button onclick="doing_item(this)" class="btn btn-secondary" type="submit"><i class="bi bi-x-diamond"></i></button>
                    <button onclick="edit_item(this)" class="btn btn-secondary" type="submit"><i class="bi bi-pencil-square"></i></button>
                    <button onclick="delete_item(this)" class="btn btn-secondary" type="submit"><i class="bi bi-trash3-fill"></i></button>
               </div>
               
            </div>

  
      `;
    ul.append(item);
  
    inp_add.value = "";
    localStorage.setItem("list-item", ul.innerHTML)
    // E createElement
  });

  
    }
, 3000);
  //  delete_Processing
  function delete_item(btn) {
    let item = btn.closest(".item");
    let text = item.querySelector("p").innerText;
    check_tekrary.delete(text);
    item.remove();
    localStorage.setItem("list-item", ul.innerHTML)
  }
  //  doing_Processing
  function doing_item(btn) {
    btn.closest(".item").classList.remove("alert-danger", "alert-success");
    btn.closest(".item").classList.add("alert-warning");
    localStorage.setItem("list-item", ul.innerHTML)
  }
  //  done_Processing
  function done_item(btn) {
    btn.closest(".item").classList.remove("alert-danger", "alert-warning");
    btn.closest(".item").classList.add("alert-success");
    localStorage.setItem("list-item", ul.innerHTML)

    let pElement = btn.closest(".item").querySelector(".p");
    let text = pElement.innerText; 
    pElement.innerHTML = `<del>${text}</del>`; 
  }
  //  edit_Processing
  function edit_item(btn) { 
    let currentText = btn.closest(".item").querySelector("p").innerText;
    let new_p = prompt("type your new item", currentText);

    
    if (new_p !== null && new_p.trim() !== "") {
        btn.closest(".item").querySelector("p").innerHTML = new_p;
      localStorage.setItem("list-item", ul.innerHTML)
}

    
  }
  setTimeout(() => {
    let icon =document.querySelector(".icon_box")
    let ring =document.querySelector(".loading_ring")
    let box = document.querySelector(".loading_box")
    
    icon.classList.add("d-none");
    box.classList.add("d-none");
    ring.classList.add("d-none");
  }, 3000);
  // انتخاب المان‌های مورد نیاز
const modeToggle1 = document.querySelector('.mod-border');
const modeToggle2 = document.querySelector('#mod-border-remot');
const moonIcon = document.querySelector('.moon-icon');
const body = document.body;

// بررسی حالت ذخیره‌شده در localStorage هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        moonIcon.classList.remove('bi-moon-fill');
        moonIcon.classList.add('bi-sun-fill');
    } else {
        body.classList.remove('dark-mode');
        moonIcon.classList.remove('bi-sun-fill');
        moonIcon.classList.add('bi-moon-fill');
    }
});

// افزودن رویداد کلیک برای تغییر حالت (modeToggle1)
modeToggle1.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        moonIcon.classList.remove('bi-moon-fill');
        moonIcon.classList.add('bi-sun-fill');
        localStorage.setItem('theme', 'dark');
    } else {
        moonIcon.classList.remove('bi-sun-fill');
        moonIcon.classList.add('bi-moon-fill');
        localStorage.setItem('theme', 'light');
    }
});

// افزودن رویداد کلیک برای تغییر حالت (modeToggle2)
modeToggle2.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        moonIcon.classList.remove('bi-moon-fill');
        moonIcon.classList.add('bi-sun-fill');
        localStorage.setItem('theme', 'dark');
    } else {
        moonIcon.classList.remove('bi-sun-fill');
        moonIcon.classList.add('bi-moon-fill');
        localStorage.setItem('theme', 'light');
    }
});

// کدهای تکراری برای بررسی حالت نایت مود در DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        moonIcon.classList.remove('bi-moon-fill');
        moonIcon.classList.add('bi-sun-fill');
    } else {
        body.classList.remove('dark-mode');
        moonIcon.classList.remove('bi-sun-fill');
        moonIcon.classList.add('bi-moon-fill');
    }
});

// بخش مربوط به مدیریت نایت مود در کد جامع‌تر
document.addEventListener('DOMContentLoaded', () => {
    const moonIcons = document.querySelectorAll('.moon-icon');
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        moonIcons.forEach(icon => {
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-sun-fill');
        });
    }
    const toggleMode = () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        moonIcons.forEach(icon => {
            icon.classList.toggle('bi-moon-fill', !isDark);
            icon.classList.toggle('bi-sun-fill', isDark);
        });
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };
    modeToggle1?.addEventListener('click', toggleMode);
    modeToggle2?.addEventListener('click', toggleMode);
});

// تغییر حالت برای آیکون‌های جداگانه
const moonIcon1 = document.querySelector('.mod-border .moon-icon');
const moonIcon2 = document.querySelector('#mod-border-remot .moon-icon');

modeToggle1.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        moonIcon1.classList.remove('bi-moon-fill');
        moonIcon1.classList.add('bi-sun-fill');
    } else {
        moonIcon1.classList.remove('bi-sun-fill');
        moonIcon1.classList.add('bi-moon-fill');
    }
});

modeToggle2.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        moonIcon2.classList.remove('bi-moon-fill');
        moonIcon2.classList.add('bi-sun-fill');
    } else {
        moonIcon2.classList.remove('bi-sun-fill');
        moonIcon2.classList.add('bi-moon-fill');
    }
});