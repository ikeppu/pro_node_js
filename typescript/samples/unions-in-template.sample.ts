type BreadType = "rye" | "brown" | "white";

type Filling = "cheese" | "ham" | "salami";

type Sandwich = `${BreadType} sandwitch with ${Filling}`;

const test: Sandwich = "rye sandwitch with ham";
