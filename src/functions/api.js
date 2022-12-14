export const getMovies = (idUser) =>
  Array.from({ length: 15 }, (_, index) => {
    return {
      id: index,
      title: "Jumanji " + index,
      duration: "1h 35m",
      cover: "https://picsum.photos/240/160",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus. Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia. Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla posuere blandit sagittis. Aliquam erat volutpat. Maecenas vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci, sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor sapien tincidunt neque, id elementum urna sapien a risus. Integer sed vulputate nunc. In est ligula, porttitor sed imperdiet eget, sagittis quis ipsum.",
      otherInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus. Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia. Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla posuere blandit sagittis. Aliquam erat volutpat. Maecenas vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci, sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor sapien tincidunt neque, id elementum urna sapien a risus. Integer sed vulputate nunc. In est ligula, porttitor sed imperdiet eget, sagittis quis ipsum.",
    };
  });

  export const getRentedMovies = (idUser) =>
  Array.from({ length: 30 }, (_, index) => {
    return {
      id: index,
      title: "Jumanji " + index,
      duration: "1h 35m",
      cover: "https://picsum.photos/160/240",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus. Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia. Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla posuere blandit sagittis. Aliquam erat volutpat. Maecenas vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci, sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor sapien tincidunt neque, id elementum urna sapien a risus. Integer sed vulputate nunc. In est ligula, porttitor sed imperdiet eget, sagittis quis ipsum.",
      otherInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus. Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia. Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla posuere blandit sagittis. Aliquam erat volutpat. Maecenas vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci, sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor sapien tincidunt neque, id elementum urna sapien a risus. Integer sed vulputate nunc. In est ligula, porttitor sed imperdiet eget, sagittis quis ipsum.",
    };
  });

export const getMovie = (id) => ({
  id: id,
  title: "Jumanji " + id,
  duration: "1h 35m",
  cover: "https://picsum.photos/1920/1080",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus. Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia. Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla posuere blandit sagittis. Aliquam erat volutpat. Maecenas vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci, sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor sapien tincidunt neque, id elementum urna sapien a risus. Integer sed vulputate nunc. In est ligula, porttitor sed imperdiet eget, sagittis quis ipsum.",
  otherInfo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus. Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia. Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla posuere blandit sagittis. Aliquam erat volutpat. Maecenas vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci, sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor sapien tincidunt neque, id elementum urna sapien a risus. Integer sed vulputate nunc. In est ligula, porttitor sed imperdiet eget, sagittis quis ipsum.",
});

export const getRecommendations = (idGenre) =>
  Array.from({ length: 15 }, (_, index) => {
    return {
      id: index,
      title: "Jumanji " + index,
      duration: "1h 35m",
      cover: "https://picsum.photos/240/160",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus. Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia. Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla posuere blandit sagittis. Aliquam erat volutpat. Maecenas vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci, sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor sapien tincidunt neque, id elementum urna sapien a risus. Integer sed vulputate nunc. In est ligula, porttitor sed imperdiet eget, sagittis quis ipsum.",
      otherInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis fermentum dui, id gravida lectus. Ut vehicula commodo nunc vestibulum cursus. Suspendisse potenti. Nunc sagittis ornare metus. Sed vehicula turpis eu lacus faucibus, eget semper turpis lacinia. Donec tristique laoreet lacinia. Vestibulum nec dictum risus. Nulla posuere blandit sagittis. Aliquam erat volutpat. Maecenas vestibulum, enim mollis mattis vestibulum, nisi sem viverra orci, sit amet semper ligula lacus non nisi. Cras dapibus eget massa sit amet cursus. Maecenas dignissim, leo at ullamcorper tincidunt, dolor sapien tincidunt neque, id elementum urna sapien a risus. Integer sed vulputate nunc. In est ligula, porttitor sed imperdiet eget, sagittis quis ipsum.",
    };
  });
