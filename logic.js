const $buttons = document.querySelectorAll(".buttons div");

$buttons.forEach((node) => {
    node.addEventListener("click", (e => {
        e.preventDefault();
        const value = node.innerText.trim();
        const $results = document.querySelector(".results");

        const resultText = $results.innerText.trim();

        if(resultText == "0" || resultText == "undefined" || resultText == "Infinity"){
            $results.innerText = "";
        }

        if(value == "="){
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