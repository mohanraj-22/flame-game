function playFlames() {
    let name1 = document.getElementById("name1").value
        .toLowerCase().replace(/\s/g, "");
    let name2 = document.getElementById("name2").value
        .toLowerCase().replace(/\s/g, "");

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerText = "Please enter both names ❗";
        return;
    }

    let arr1 = name1.split("");
    let arr2 = name2.split("");

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr1.splice(i, 1);
            arr2.splice(index, 1);
            i--;
        }
    }

    let count = arr1.length + arr2.length;

    let flames = ["Friends 🤝", "Love ❤️", "Affection 😊", "Marriage 💍", "Enemies 😈", "Siblings 👨‍👩‍👧"];

    let result = flames[(count - 1) % flames.length];

    document.getElementById("result").innerText =
        `Result: ${result}`;
}
