// $(document).ready(() => {

//     $(".buttons .btn").click(e => {

//         e.preventDefault();

//         const node = e.currentTarget;
//         const value = node.innerText.trim();

//         $(".results").text(resultText => {

//             if(resultText == "0" || resultText == "undefined" || resultText == "Infinity"){
//                 $(".results").text("");
//             }

//             $(".results").text(t => {
//                 console.log(t + value);
//             })
//         });

//     });
// });


const $buttons = document.querySelectorAll(".buttons div");

$buttons.forEach((node) => {
    node.addEventListener("mousedown", (e => {
        e.preventDefault();
        const value = node.innerText.trim();
        const $results = document.querySelector(".results");

        const resultText = $results.innerText.trim();

        console.log(value);

        if (resultText == "0" || resultText == "undefined" || resultText == "Infinity") {
            $results.innerText = "";
        }

        if (value == "=") {
            let solution = eval(resultText);
            $results.innerText = solution;
            return true;
        }

        if (value.toLowerCase() === "c") {
            $results.innerText = "0";
            return true;
        }

        $results.innerText += value;
    }));
});