export const userKeys = {
  profile: ["profile"],
};

export const productKeys = {
  all: (page) => ["product", "all", page],
  detail: () => ["product", "detail"],
  one: (id) => [...productKeys.detail(), id],
};
