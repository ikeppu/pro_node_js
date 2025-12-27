const getServerSideProps = async () => {
  const data = await Promise.resolve({
    json: () => ({
      title: "test",
    }),
  });

  const json: { title: string } = data.json();

  return {
    props: {
      json,
    },
  };
};

type InferPropsFromServerSideFn<T> = T extends () => Promise<{ props: infer P }>
  ? P
  : never;

type Props = InferPropsFromServerSideFn<typeof getServerSideProps>;

// --------------------------------------------------------------- //

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends {
  parse: () => infer TResult;
}
  ? TResult
  : T extends () => infer TResult
  ? TResult
  : T extends {
      extract: () => infer TResult;
    }
  ? TResult
  : never;
