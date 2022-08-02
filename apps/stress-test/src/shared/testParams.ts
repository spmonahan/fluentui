const testTypes = ['mount', 'inject-styles', 'prop-update', 'remove-node', 'add-node'] as const;

export type TestParams = {
  test: typeof testTypes[number];
};

export type GetTestParamsFn = () => TestParams;

let params: TestParams;
export const getTestParams: GetTestParamsFn = () => {
  if (params) {
    return params;
  }

  params = {} as TestParams;
  const searchParams = new URLSearchParams(location.search);

  const test = searchParams.get('test');
  if (!test || !testTypes.includes(test as TestParams['test'])) {
    throw new Error(`Invalid test type "${test}. Expected one of "${testTypes.join(', ')}`);
  }

  params.test = test as TestParams['test'];

  return params;
};
