type Route = "/" | "/about" | "/admin" | "/admin/users";

type RouteObject = {
  [R in Route]: R;
};
