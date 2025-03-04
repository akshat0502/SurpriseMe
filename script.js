function surprise() {
    const surprises = [
        "🎉 Yay! You won an imaginary prize!",
        "🤯 Did you know? Honey never spoils!",
        "🐱 Here’s a fun fact: Cats have 32 muscles in each ear!",
        "😂 Why don't skeletons fight each other? They don’t have the guts!",
        "🎶 *Music starts playing* Just kidding, I can't play music."
    ];
    alert(surprises[Math.floor(Math.random() * surprises.length)]);
}