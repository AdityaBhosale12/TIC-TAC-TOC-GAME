let Boxes = document.querySelectorAll(".Box");
let Reset_Button = document.querySelector("#Reset_Button");
let Message = document.querySelector("#Message");
let Message_container = document.querySelector(".Message_container");
let New_Game_Button = document.querySelector("#New_Game_Button");

let Turn_O = true;

const Winning_Pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const Reset_Game_Button = () => {
  Turn_O = true;
  Enable_Boxes();
  Message_container.classList.add("Hide");
};

Boxes.forEach((Box) => {
  Box.addEventListener("click", () => {
    if (Turn_O === true) {
      Box.innerText = "O";
      Turn_O = false;
    } else {
      Box.innerText = "X";
      Turn_O = true;
    }
    Box.disabled = true;
    Check_Winner();
  });
});

const Disable_Boxes = () => {
  for (let Box of Boxes) {
    Box.disabled = true;
  }
};

const Enable_Boxes = () => {
  for (let Box of Boxes) {
    Box.disabled = false;
    Box.innerText = "";
  }
};

const Show_Winner = (Winner) => {
  Message.innerText = `Congratulations, Winner Is ${Winner}`;
  Message_container.classList.remove("Hide");
  Disable_Boxes();
};

const Check_Winner = () => {
  for (Pattern of Winning_Pattern) {
    let Position0_Value = Boxes[Pattern[0]].innerText;
    let Position1_Value = Boxes[Pattern[1]].innerText;
    let Position2_Value = Boxes[Pattern[2]].innerText;

    if (
      Position0_Value != "" &&
      Position1_Value != "" &&
      Position2_Value != ""
    ) {
      if (
        Position0_Value === Position1_Value &&
        Position1_Value === Position2_Value
      ) {
        Show_Winner(Position0_Value);
      }
    }
  }
};

New_Game_Button.addEventListener("click", Reset_Game_Button);
Reset_Button.addEventListener("click", Reset_Game_Button);
