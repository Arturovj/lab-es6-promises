// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/* getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

*/

// Iteration 1 - using callbacks
// ...

getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>mashed potatoes are ready!</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 2 - using promises
// ...

/*
obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  obtainInstruction("steak", 1).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 2).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      obtainInstruction("steak", 3).then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        obtainInstruction("steak", 4).then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
          obtainInstruction("steak", 5).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            obtainInstruction("steak", 6).then((step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
              obtainInstruction("steak", 7).then((step7) => {
                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
                document.querySelector("#steak").innerHTML += `<li>steak is ready!</li>`;
                document.querySelector("#steakImg").removeAttribute("hidden");
              });
            });
          });
        });
      });
    });
  });
});
*/

// BETTER WAY TO USE PROMISES -->

obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  return obtainInstruction("steak", 1)}).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2)}).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      return obtainInstruction("steak", 3)}).then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        return obtainInstruction("steak", 4)}).then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
          return obtainInstruction("steak", 5)}).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            return obtainInstruction("steak", 6)}).then((step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
              document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
              document.querySelector("#steakImg").removeAttribute("hidden");
            });
   
// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  try {
    await obtainInstruction("broccoli", 0).then((step0) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;
    });
    await obtainInstruction("broccoli", 1).then((step1) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;
    });
    await obtainInstruction("broccoli", 2).then((step2) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;
    });
    await obtainInstruction("broccoli", 3).then((step3) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;
    });
    await obtainInstruction("broccoli", 4).then((step4) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;
    });
    await obtainInstruction("broccoli", 5).then((step5) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;
    });
    await obtainInstruction("broccoli", 6).then((step6) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>broccoli is ready!</li>`;
    });
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (err) {
    console.log(err);
  }
}
makeBroccoli();

// Bonus 2 - Promise all
// ... creamos 7 constantes
const b0 = obtainInstruction('brusselsSprouts', 0);
const b1 = obtainInstruction('brusselsSprouts', 1);
const b2 = obtainInstruction('brusselsSprouts', 2);
const b3 = obtainInstruction('brusselsSprouts', 3);
const b4 = obtainInstruction('brusselsSprouts', 4);
const b5 = obtainInstruction('brusselsSprouts', 5);
const b6 = obtainInstruction('brusselsSprouts', 6);
const b7 = obtainInstruction('brusselsSprouts', 7);

// utilizamos Promise.all y creamos un array con las constantes. usamos.then y luego un forEach para recorrer el array uno a uno

Promise.all([b0, b1, b2, b3, b4, b5, b6, b7])
.then((values) => {
  values.forEach((value) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${value}</li>`;
  });
})
.finally(()=> {
document.querySelector("#brusselsSprouts").innerHTML += `<li>brussels sprouts are ready!</li>`;
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
});
