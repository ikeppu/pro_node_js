type Route = `/${string}`;

const goToRoute = (route: Route): void => {};

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");

// goToRoute("products/123/details");

type Routes =
  | "/users"
  | "/users:id"
  | "/products"
  | `/products/${string}/details`;

type DynamicRoutes = Extract<Routes, `${string}${string}${string}`>;

const routes: DynamicRoutes = "/products/123/details";
