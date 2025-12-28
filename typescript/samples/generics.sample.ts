// Generics

const returnWhatIPassIn = <T extends string>(t: T) => {
  return t;
};

// const one = <1>returnWhatIPassIn(1);
const matt = <"matt">returnWhatIPassIn("matt");

// ---------------------------- //
