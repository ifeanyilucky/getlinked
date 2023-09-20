const PATH_ROOT = '/';

const pathJoin = (root: string, path: string) => {
  return `${root}${path}`;
};

export const PATH = {
  index: PATH_ROOT,
  contacT: pathJoin(PATH_ROOT, 'contact'),
  register: pathJoin(PATH_ROOT, 'register'),
};
