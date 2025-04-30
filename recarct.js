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
  