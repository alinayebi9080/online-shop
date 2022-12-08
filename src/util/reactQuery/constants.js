export const userKeys = {
  profile: ["profile"],
};

export const productKeys = {
  all: (page) => ["product", "all", page],
  one: (id) => ["product", id],
};
