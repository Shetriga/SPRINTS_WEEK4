let DUMMY_DATA = [
  {
    id: 1,
    title: "Practical Granite Bacon",
    price: 268,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    images: [
      "https://picsum.photos/640/640?r=4038",
      "https://picsum.photos/640/640?r=428",
      "https://picsum.photos/640/640?r=753",
    ],
    creationAt: "2023-06-19T05:31:42.000Z",
    updatedAt: "2023-06-19T05:31:42.000Z",
    category: {
      id: 5,
      name: "Others",
      image: "https://picsum.photos/640/640?r=909",
      creationAt: "2023-06-19T05:31:42.000Z",
      updatedAt: "2023-06-19T05:31:42.000Z",
    },
  },
  {
    id: 2,
    title: "Elegant Plastic Chicken",
    price: 476,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    images: [
      "https://picsum.photos/640/640?r=1743",
      "https://picsum.photos/640/640?r=8494",
      "https://picsum.photos/640/640?r=9832",
    ],
    creationAt: "2023-06-19T05:31:42.000Z",
    updatedAt: "2023-06-19T05:31:42.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://picsum.photos/640/640?r=4736",
      creationAt: "2023-06-19T05:31:42.000Z",
      updatedAt: "2023-06-19T05:31:42.000Z",
    },
  },
  {
    id: 3,
    title: "Oriental Concrete Soap",
    price: 657,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    images: [
      "https://picsum.photos/640/640?r=236",
      "https://picsum.photos/640/640?r=3370",
      "https://picsum.photos/640/640?r=7041",
    ],
    creationAt: "2023-06-19T05:31:42.000Z",
    updatedAt: "2023-06-19T05:31:42.000Z",
    category: {
      id: 5,
      name: "Others",
      image: "https://picsum.photos/640/640?r=909",
      creationAt: "2023-06-19T05:31:42.000Z",
      updatedAt: "2023-06-19T05:31:42.000Z",
    },
  },
  {
    id: 4,
    title: "Ergonomic Plastic Computer",
    price: 729,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    images: [
      "https://picsum.photos/640/640?r=1768",
      "https://picsum.photos/640/640?r=1413",
      "https://picsum.photos/640/640?r=6284",
    ],
    creationAt: "2023-06-19T05:31:42.000Z",
    updatedAt: "2023-06-19T05:31:42.000Z",
    category: {
      id: 5,
      name: "Others",
      image: "https://picsum.photos/640/640?r=909",
      creationAt: "2023-06-19T05:31:42.000Z",
      updatedAt: "2023-06-19T05:31:42.000Z",
    },
  },
  {
    id: 5,
    title: "Ergonomic Steel Bike",
    price: 52,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    images: [
      "https://picsum.photos/640/640?r=3591",
      "https://picsum.photos/640/640?r=8649",
      "https://picsum.photos/640/640?r=324",
    ],
    creationAt: "2023-06-19T05:31:42.000Z",
    updatedAt: "2023-06-19T05:31:42.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://picsum.photos/640/640?r=4736",
      creationAt: "2023-06-19T05:31:42.000Z",
      updatedAt: "2023-06-19T05:31:42.000Z",
    },
  },
  {
    id: 6,
    title: "Unbranded Rubber Shirt",
    price: 98,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    images: [
      "https://picsum.photos/640/640?r=6303",
      "https://picsum.photos/640/640?r=3609",
      "https://picsum.photos/640/640?r=7253",
    ],
    creationAt: "2023-06-19T05:31:42.000Z",
    updatedAt: "2023-06-19T05:31:42.000Z",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://picsum.photos/640/640?r=7340",
      creationAt: "2023-06-19T05:31:42.000Z",
      updatedAt: "2023-06-19T05:31:42.000Z",
    },
  },
  {
    id: 7,
    title: "Unbranded Frozen Cheese",
    price: 619,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    images: [
      "https://picsum.photos/640/640?r=8999",
      "https://picsum.photos/640/640?r=3625",
      "https://picsum.photos/640/640?r=8691",
    ],
    creationAt: "2023-06-19T05:31:42.000Z",
    updatedAt: "2023-06-19T05:31:42.000Z",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://picsum.photos/640/640?r=4736",
      creationAt: "2023-06-19T05:31:42.000Z",
      updatedAt: "2023-06-19T05:31:42.000Z",
    },
  },
];

const getProducts = (req, res, next) => {
  res.json({
    products: DUMMY_DATA,
  });
};

const getProductById = (req, res, next) => {
  const productId = Number(req.params.pid);

  const product = DUMMY_DATA.find((d) => {
    return d.id === productId;
  });

  if (!product) {
    return res.status(404).json({
      message: "Could not find the product with provided Id",
    });
  }

  res.status(200).json({ product: product });
};

const updateProduct = (req, res, next) => {
  // Validate the data coming with request
  const { title, description, price, images, categoryId } = req.body;
  if (!title || !description || !price || !images || !categoryId) {
    return res.json({
      message: "Invalid Data",
    });
  }

  const productId = Number(req.params.pid);

  const productIndex = DUMMY_DATA.findIndex((d) => d.id === productId);

  if (!productIndex) {
    return res.status(404).json({
      message: "Could not find the product with provided Id",
    });
  }

  DUMMY_DATA[productIndex].title = title;
  DUMMY_DATA[productIndex].description = description;
  DUMMY_DATA[productIndex].price = price;
  DUMMY_DATA[productIndex].categoryId = categoryId;
  DUMMY_DATA[productIndex].images = images;

  res.json({
    message: "Updated successfully!",
  });
};

const addProduct = (req, res, next) => {
  // Validate the data coming with request
  const { title, description, price, images, categoryId } = req.body;
  if (!title || !description || !price || !images || !categoryId) {
    return res.json({
      message: "Invalid Data",
    });
  }

  const newProduct = {
    title,
    description,
    price,
    categoryId,
    images,
  };

  DUMMY_DATA.push(newProduct);

  res.json({
    message: "Created successfully!",
  });
};

const deleteProduct = (req, res, next) => {
  const productId = Number(req.params.pid);

  const found = DUMMY_DATA.find((d) => d.id === productId);

  if (!found) {
    return res.status(404).json({
      message: "Could not find the product with provided Id",
    });
  }

  DUMMY_DATA = DUMMY_DATA.filter((d) => d.id !== productId);

  res.json({
    message: "Deleted successfully!",
  });
};

exports.getProducts = getProducts;
exports.getProductById = getProductById;
exports.updateProduct = updateProduct;
exports.addProduct = addProduct;
exports.deleteProduct = deleteProduct;
