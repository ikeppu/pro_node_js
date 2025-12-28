import { S } from "ts-toolbelt";

type UserPath = "/users/:id";

type UserOrganizationPath = "/users/:id/organizations/:organizationId";

// Array
// Without number it will be list
type ResultList = S.Split<UserOrganizationPath, "/">;

// Union
// With number at the end it will be union
type ResultUnion = S.Split<UserOrganizationPath, "/">[number];

type ExtractPathParams<TPath extends string> = {
  [K in S.Split<TPath, "/">[number] as K extends `:${infer P}`
    ? P
    : never]: string;
};

type ExtractPathParamsExample = ExtractPathParams<UserOrganizationPath>;

// ------------------------------------------------------------------ //

interface ExtractAttributes {
  id: string;
  email: string;
  username: string;
}

// K in keyof T
// Key from object

// [keyof T] convert from object to union
type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>;
}[keyof T];

type ExclusiveAttributes = MutuallyExclusive<ExtractAttributes>;

// ------------------------------------------------------------------ //

type ExtractsRoutes =
  | { route: "/"; search: { page: string; perPage: string } }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users" };

type RoutesObjects = {
  [R in ExtractsRoutes as R["route"]]: R extends { search: infer S }
    ? S
    : never;
};

// ------------------------------------------------------------------ //

// Deep example

type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : { [K in keyof T]?: DeepPartial<T[K]> };

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

type MyTypeResult = DeepPartial<MyType>;

// ------------------------------------------------------------------ //
