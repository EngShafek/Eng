let form = document.querySelector("form");
let x = document.querySelector("[type=text]").value;
form.onsubmit = function ahmed(e) {
  e.preventDefault();
  let x = document.querySelector("[type=text]").value;

  if (x != "") {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let btn = document.createElement("div");
    p1.textContent = "انت اشطر كتكوت🥺♥️";
    btn.textContent = "اضغط براحه";
    div.className = "div";
    btn.className = "btn btn-success";
    btn.addEventListener("click", () => {
      div.remove();
    });
    div.appendChild(p1);
    div.appendChild(btn);
    document.body.appendChild(div);
    document.querySelector("[type=text]").value = "";
    div.addEventListener("onblur", () => {
      div.remove();
    });
  } else {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let btn = document.createElement("div");
    p1.textContent = "متكتب حاجه يبني";
    btn.textContent = "اضغط يعم";
    div.className = "div";
    btn.className = "btn btn-danger";
    btn.addEventListener("click", () => {
      div.remove();
    });
    div.appendChild(p1);
    div.appendChild(btn);
    document.body.appendChild(div);
    document.querySelector("[type=text]").value = "";
    div.addEventListener("onblur", () => {
      div.remove();
    });
  }
};
