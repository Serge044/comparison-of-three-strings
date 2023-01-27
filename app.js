const targetDiv1 = document.getElementById("target-div1");
const targetDiv2 = document.getElementById("target-div2");
const targetDiv3 = document.getElementById("target-div3");

const resultOfOutput1 = document.getElementById("output1");
const resultOfOutput2 = document.getElementById("output2");
const resultOfOutput3 = document.getElementById("output3");

const howUnique = document.getElementById("how-unique");

function doIt() {
  // -------------------- 1 --------------------
  let output1 = document.getElementById("input1").value;
  output1ToLoverCase = output1.toLowerCase();

  let output1New = output1ToLoverCase.split(".").join("");
  output1New = output1New.split(",").join("");
  output1New = output1New.split("!").join("");
  output1New = output1New.split("–").join("");
  output1New = output1New.split("-").join("");
  output1New = output1New.split(":").join("");
  output1New = output1New.split(":").join("");

  const parsedOutput1 = output1New.split(" ");
  // console.log(parsedOutput1);

  // -------------------- 2 --------------------
  let output2 = document.getElementById("input2").value;
  output2ToLoverCase = output2.toLowerCase();

  let output2New = output2ToLoverCase.split(".").join("");
  output2New = output2New.split(",").join("");
  output2New = output2New.split("!").join("");
  output2New = output2New.split("–").join("");
  output2New = output2New.split("-").join("");
  output2New = output2New.split(":").join("");
  output2New = output2New.split(":").join("");

  const parsedOutput2 = output2New.split(" ");
  // console.log(parsedOutput2);

  // -------------------- 3 --------------------
  let output3 = document.getElementById("input3").value;
  output3ToLoverCase = output3.toLowerCase();

  let output3New = output3ToLoverCase.split(".").join("");
  output3New = output3New.split(",").join("");
  output3New = output3New.split("!").join("");
  output3New = output3New.split("–").join("");
  output3New = output3New.split("-").join("");
  output3New = output3New.split(":").join("");
  output3New = output3New.split(":").join("");

  const parsedOutput3 = output3New.split(" ");
  // console.log(parsedOutput3);

  let array1 = parsedOutput1;
  let array2 = parsedOutput2;
  let array3 = parsedOutput3;

  let uniqueElements1 = array1.filter(function (element) {
    return !array2.includes(element) && !array3.includes(element);
  });
  numberOfUniqueWordsOne = uniqueElements1.length;
  // console.log(
  //   "Output One has",
  //   numberOfUniqueWordsOne,
  //   "unique words.",
  //   uniqueElements1
  // );
  resultOfOutput1.innerHTML = `Input One has ${numberOfUniqueWordsOne} unique words. [ ${uniqueElements1} ]`;

  let uniqueElements2 = array2.filter(function (element) {
    return !array1.includes(element) && !array3.includes(element);
  });
  numberOfUniqueWordsTwo = uniqueElements2.length;
  // console.log(
  //   "Output Two has",
  //   numberOfUniqueWordsTwo,
  //   "unique words.",
  //   uniqueElements2
  // );
  resultOfOutput2.innerHTML = `Input Two has ${numberOfUniqueWordsTwo} unique words. [ ${uniqueElements2} ]`;

  let uniqueElements3 = array3.filter(function (element) {
    return !array1.includes(element) && !array2.includes(element);
  });
  numberOfUniqueWordsThree = uniqueElements3.length;
  // console.log(
  //   "Output Three has",
  //   numberOfUniqueWordsThree,
  //   "unique words.",
  //   uniqueElements3
  // );
  resultOfOutput3.innerHTML = `Input Three has ${numberOfUniqueWordsThree} unique words. [ ${uniqueElements3} ]`;

  // --------------------- checking for uniqueness ---------------------------

  if (output1 === output2 && output2 === output3 && output2 === output3) {
    // console.log("All outputs are the SAME!");
    howUnique.innerHTML = `<h3 style="color:red;">All inputs are the SAME!</h3>`;
  } else if (output1 === output2) {
    // console.log("output1 === output2, but output3 is UNIQUE.");
    howUnique.innerHTML = `<h3 style="color:brown;">input1 === input2, but input3 is UNIQUE.</h3>`;
  } else if (output1 === output3) {
    // console.log("output1 === output3, but output2 is UNIQUE.");
    howUnique.innerHTML = `<h3 style="color:brown;">input1 === input3, but input2 is UNIQUE.</h3>`;
  } else if (output2 === output3) {
    // console.log("output2 === output3, but output1 is UNIQUE.");
    howUnique.innerHTML = `<h3 style="color:brown;">input2 === input3, but input1 is UNIQUE.</h3>`;
  } else {
    // console.log("All outputs are unique.");
    howUnique.innerHTML = `<h3 style="color:green;">All inputs are unique.</h3>`;
  }

  // --------------------- Levenshtein Distance ---------------------------

  let output1TEST = output1;
  let output2TEST = output2;
  let output3TEST = output3;

  // output 1 and 2

  const str1_1 = output1TEST;
  const str1_2 = output2TEST;
  const levenshteinDistance1 = (str1_1 = "", str1_2 = "") => {
    const track = Array(str1_2.length + 1)
      .fill(null)
      .map(() => Array(str1_1.length + 1).fill(null));
    for (let i = 0; i <= str1_1.length; i += 1) {
      track[0][i] = i;
    }
    for (let j = 0; j <= str1_2.length; j += 1) {
      track[j][0] = j;
    }
    for (let j = 1; j <= str1_2.length; j += 1) {
      for (let i = 1; i <= str1_1.length; i += 1) {
        const indicator = str1_1[i - 1] === str1_2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1, // deletion
          track[j - 1][i] + 1, // insertion
          track[j - 1][i - 1] + indicator // substitution
        );
      }
    }
    return track[str1_2.length][str1_1.length];
  };
  // console.log(
  //   "Levenshtein Distance 1 and 2: ",
  //   levenshteinDistance1(str1_1, str1_2)
  // );
  targetDiv1.innerHTML = `<h5>Levenshtein Distance 1 and 2: </h5><h3>${levenshteinDistance1(
    str1_1,
    str1_2
  )}</h3>`;

  // output 1 and 3

  const str2_1 = output1TEST;
  const str2_2 = output3TEST;
  const levenshteinDistance2 = (str2_1 = "", str2_2 = "") => {
    const track = Array(str2_2.length + 1)
      .fill(null)
      .map(() => Array(str2_1.length + 1).fill(null));
    for (let i = 0; i <= str2_1.length; i += 1) {
      track[0][i] = i;
    }
    for (let j = 0; j <= str2_2.length; j += 1) {
      track[j][0] = j;
    }
    for (let j = 1; j <= str2_2.length; j += 1) {
      for (let i = 1; i <= str2_1.length; i += 1) {
        const indicator = str2_1[i - 1] === str2_2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1, // deletion
          track[j - 1][i] + 1, // insertion
          track[j - 1][i - 1] + indicator // substitution
        );
      }
    }
    return track[str2_2.length][str2_1.length];
  };
  // console.log(
  //   "Levenshtein Distance 1 and 3: ",
  //   levenshteinDistance2(str2_1, str2_2)
  // );
  targetDiv2.innerHTML = `<h5>Levenshtein Distance 1 and 3: </h5><h3>${levenshteinDistance2(
    str2_1,
    str2_2
  )}</h3>`;

  // output 2 and 3

  const str3_1 = output2TEST;
  const str3_2 = output3TEST;
  const levenshteinDistance3 = (str3_1 = "", str3_2 = "") => {
    const track = Array(str3_2.length + 1)
      .fill(null)
      .map(() => Array(str3_1.length + 1).fill(null));
    for (let i = 0; i <= str3_1.length; i += 1) {
      track[0][i] = i;
    }
    for (let j = 0; j <= str3_2.length; j += 1) {
      track[j][0] = j;
    }
    for (let j = 1; j <= str3_2.length; j += 1) {
      for (let i = 1; i <= str3_1.length; i += 1) {
        const indicator = str3_1[i - 1] === str3_2[j - 1] ? 0 : 1;
        track[j][i] = Math.min(
          track[j][i - 1] + 1, // deletion
          track[j - 1][i] + 1, // insertion
          track[j - 1][i - 1] + indicator // substitution
        );
      }
    }
    return track[str3_2.length][str3_1.length];
  };
  // console.log(
  //   "Levenshtein Distance 2 and 3: ",
  //   levenshteinDistance3(str3_1, str3_2)
  // );
  targetDiv3.innerHTML = `<h5>Levenshtein Distance 2 and 3: </h5><h3>${levenshteinDistance3(
    str3_1,
    str3_2
  )}</h2>`;
}

// button Start

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", doIt);

// clear form

function clearForm() {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";

  targetDiv1.innerHTML = "";
  targetDiv2.innerHTML = "";
  targetDiv3.innerHTML = "";

  resultOfOutput1.innerHTML = "";
  resultOfOutput2.innerHTML = "";
  resultOfOutput3.innerHTML = "";

  howUnique.innerHTML = "";
}

const clearFormBTN = document.getElementById("clear-form");
clearFormBTN.addEventListener("click", clearForm);

// https://www.tutorialspoint.com/levenshtein-distance-in-javascript#:~:text=The%20Levenshtein%20distance%20is%20a,one%20word%20into%20the%20other.&text=We%20are%20required%20to%20write,the%20Levenshtein%20distance%20between%20them.
