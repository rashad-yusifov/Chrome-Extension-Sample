function hackSystem() {
    let choice = document.querySelectorAll(".editor-content div .row");
    let payItem =
        choice.length > 0
            ? choice[0].querySelector(".choice:nth-child(2)")
            : false;
    if (payItem) {
        payItem.click();
    }
    let houseChoice =
        choice.length > 0
            ? choice[2].querySelector(".choice:nth-child(2)")
            : false;
    if (houseChoice) {
        houseChoice.click();
    }
    setTimeout(function () {
        let selectProject =
            choice.length > 0 ? choice[3].querySelector("select") : false;
        let inputs =
            choice.length > 0
                ? document.querySelectorAll(".editor-content > div input")
                : false;
        if (selectProject) {
            let options = selectProject.querySelectorAll("option");
            let val = options[4].value;
            let txt = options[4].innerHTML;
            options[4].remove();
            let newOption = document.createElement("option");
            newOption.value = val;
            newOption.selected = true;
            newOption.innerHTML = txt;
            selectProject.append(newOption);
            selectProject.value = val;
            inputs[2].setAttribute("value", val);
        }
        let submitBtn = document.querySelector(".editor-content > .row button");
        if (submitBtn) {
            submitBtn.removeAttribute("disabled");
            submitBtn.click();
        }
    }, 0);
}


let html = `

  <style>
      .fixedBox{
          padding: 50px;
          background-color: red;
          position: fixed;
          z-index: 9999;
          right: 20px;
          top: 20px;
          box-shadow: 10px 10px 10px 10px grey;
      }
  </style>

  

  <div class="fixedBox">
      <button class="mybtn-hack" onclick="hackSystem()">RUN SCRIPT</button>
  </div>


`;


$('body').append(html);
