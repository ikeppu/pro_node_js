type RouteSample = "/" | "/about" | "/admin" | "/admin/users";

type RouteObject = {
  [R in RouteSample]: R;
};

interface Attributes {
  firstName: string;
  lastName: string;
  age: number;
}

// type AttributesGetters = {
//   [K in keyof Attributes]: () => Attributes[K];
// };

type AttributesGetters = {
  [K in keyof Attributes]: Attributes[K];
};

type AttributesRemapGetters = {
  [K in keyof Attributes as `get${Capitalize<K>}`]: () => Attributes[K];
};

// ---------------------------------------------------------- //

interface MapExample {
  name: string;
  age: number;
  id: string;
  organizationId: string;
  groupId: string;
}

type SearchForId = `${string}${"id" | "Id"}${string}`;

type OnlyIdKeys<T> = {
  [K in keyof T as K extends SearchForId ? K : never]: T[K];
};

type OnlyIdKeysResult = OnlyIdKeys<MapExample>;

// ---------------------------------------------------------- //
type RouteExampleSecond =
  | { route: "/"; search: { page: string; perPage: string } }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

// type RoutesObjectExample = {
//   [R in RouteExampleSecond["route"]]: Extract<
//     RouteExampleSecond,
//     { route: R }
//   >["search"];
// };
type RoutesObjectExample = {
  [R in RouteExampleSecond as R["route"]]: R["search"];
};

type RoutesObjectResult = RoutesObjectExample;

// ---------------------------------------------------------- //

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesObjectValues = Values[keyof Values];

type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

// ---------------------------------------------------------- //

interface FruitMap {
  apple: "red";
  banana: "yellow";
  orange: "orange";
}

type TransformedFruit = {
  [K in keyof FruitMap]: `${K}:${FruitMap[K]}`;
};

// ---------------------------------------------------------- //

type Fruit =
  | { name: "apple"; color: "red" }
  | { name: "banana"; color: "yellow" }
  | { name: "orange"; color: "orange" };

// Works with objects

type TransformedFruitE = {
  [K in Fruit as K["name"]]: `${K["name"]}:${K["color"]}`;
}[Fruit["name"]];

// ---------------------------------------------------------- //
