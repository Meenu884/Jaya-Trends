const PRODUCTS = [
    // Sarees
    {
      id: 1,
      name: "Kanjivaram Silk Saree",
      brand: "Jaya Ethnic",
      category: "saree",
      mrp: 4499,
      price: 1099,
      rating: 4.7,
      reviews: 382,
      image: "images/saree1.jpg",
      code: "JT-SAR-001",
      tags: ["trending", "festive", "offers"]
    },
    {
      id: 2,
      name: "Banarasi Zari Saree",
      brand: "Jaya Bridal",
      category: "saree",
      mrp: 5999,
      price: 1499,
      rating: 4.6,
      reviews: 241,
      image: "images/saree2.jpg",
      code: "JT-SAR-002",
      tags: ["bridal", "festive", "premium"]
    },
    {
      id: 3,
      name: "Cotton Daily Wear Saree",
      brand: "Jaya Basics",
      category: "saree",
      mrp: 1999,
      price: 599,
      rating: 4.3,
      reviews: 190,
      image: "images/saree3.jpg",
      code: "JT-SAR-003",
      tags: ["daily", "budget", "offers"]
    },
    {
      id: 4,
      name: "Georgette Party Wear Saree",
      brand: "Jaya Trends",
      category: "saree",
      mrp: 3499,
      price: 999,
      rating: 4.4,
      reviews: 220,
      image: "images/saree4.jpg",
      code: "JT-SAR-004",
      tags: ["party", "trending"]
    },
  
    // Kurtis / Ethnic
    {
      id: 5,
      name: "Printed Daily Wear Kurti",
      brand: "Jaya Trends",
      category: "ethnic",
      mrp: 1799,
      price: 549,
      rating: 4.2,
      reviews: 145,
      image: "images/kurti1.jpg",
      code: "JT-ETH-001",
      tags: ["daily", "budget", "offers"]
    },
    {
      id: 6,
      name: "Anarkali Floor Length Kurti",
      brand: "Jaya Ethnic",
      category: "ethnic",
      mrp: 3299,
      price: 999,
      rating: 4.5,
      reviews: 198,
      image: "images/kurti2.jpg",
      code: "JT-ETH-002",
      tags: ["festive", "party", "trending"]
    },
    {
      id: 7,
      name: "Straight Cut Office Kurti",
      brand: "Jaya Workwear",
      category: "ethnic",
      mrp: 2199,
      price: 699,
      rating: 4.1,
      reviews: 120,
      image: "images/kurti3.jpg",
      code: "JT-ETH-003",
      tags: ["office", "daily"]
    },
  
    // Leggings / Bottoms
    {
      id: 8,
      name: "Cotton Churidar Leggings",
      brand: "Jaya Basics",
      category: "leggings",
      mrp: 899,
      price: 299,
      rating: 4.4,
      reviews: 260,
      image: "images/leggings1.jpg",
      code: "JT-LEG-001",
      tags: ["daily", "musthave"]
    },
    {
      id: 9,
      name: "Ankle Length Leggings",
      brand: "Jaya Basics",
      category: "leggings",
      mrp: 999,
      price: 349,
      rating: 4.3,
      reviews: 175,
      image: "images/leggings2.jpg",
      code: "JT-LEG-002",
      tags: ["office", "daily"]
    },
    {
      id: 10,
      name: "Palazzo Pants",
      brand: "Jaya Trends",
      category: "leggings",
      mrp: 1599,
      price: 549,
      rating: 4.2,
      reviews: 130,
      image: "images/palazzo1.jpg",
      code: "JT-LEG-003",
      tags: ["ethnic", "trending"]
    },
  
    // Shawls / Stoles
    {
      id: 11,
      name: "Winter Wool Shawl",
      brand: "Jaya Comfort",
      category: "shawl",
      mrp: 2499,
      price: 799,
      rating: 4.5,
      reviews: 162,
      image: "images/shawl1.jpg",
      code: "JT-SHW-001",
      tags: ["winter", "premium"]
    },
    {
      id: 12,
      name: "Printed Cotton Stole",
      brand: "Jaya Trends",
      category: "shawl",
      mrp: 999,
      price: 349,
      rating: 4.1,
      reviews: 98,
      image: "images/shawl2.jpg",
      code: "JT-SHW-002",
      tags: ["daily", "budget"]
    },
    {
      id: 13,
      name: "Embroidered Dupatta",
      brand: "Jaya Ethnic",
      category: "shawl",
      mrp: 1599,
      price: 549,
      rating: 4.3,
      reviews: 110,
      image: "images/dupatta1.jpg",
      code: "JT-SHW-003",
      tags: ["festive", "ethnic"]
    },
  
    // Western tops / dresses
    {
      id: 14,
      name: "Casual Round Neck Top",
      brand: "Jaya Western",
      category: "modern",
      mrp: 1299,
      price: 399,
      rating: 4.2,
      reviews: 170,
      image: "images/top1.jpg",
      code: "JT-MOD-001",
      tags: ["daily", "trending"]
    },
    {
      id: 15,
      name: "Striped Office Shirt",
      brand: "Jaya Workwear",
      category: "modern",
      mrp: 1899,
      price: 649,
      rating: 4.3,
      reviews: 140,
      image: "images/top2.jpg",
      code: "JT-MOD-002",
      tags: ["office"]
    },
    {
      id: 16,
      name: "A-Line Midi Dress",
      brand: "Jaya Western",
      category: "modern",
      mrp: 2599,
      price: 899,
      rating: 4.4,
      reviews: 210,
      image: "images/dress1.jpg",
      code: "JT-MOD-003",
      tags: ["party", "trending"]
    },
  
    // Bridal / heavy ethnic
    {
      id: 17,
      name: "Bridal Lehenga Set",
      brand: "Jaya Bridal",
      category: "bridal",
      mrp: 14999,
      price: 3999,
      rating: 4.6,
      reviews: 95,
      image: "images/lehenga1.jpg",
      code: "JT-BRI-001",
      tags: ["bridal", "premium", "festive"]
    },
    {
      id: 18,
      name: "Embroidered Sharara Suit",
      brand: "Jaya Bridal",
      category: "bridal",
      mrp: 9999,
      price: 2999,
      rating: 4.5,
      reviews: 88,
      image: "images/lehenga2.jpg",
      code: "JT-BRI-002",
      tags: ["bridal", "party"]
    },
  
    // Trending / offer specials
    {
      id: 19,
      name: "Co-ord Set for Women",
      brand: "Jaya Trends",
      category: "modern",
      mrp: 3499,
      price: 1199,
      rating: 4.4,
      reviews: 160,
      image: "images/coord1.jpg",
      code: "JT-MOD-004",
      tags: ["trending", "offers"]
    },
    {
      id: 20,
      name: "Festive Combo: Kurti + Dupatta",
      brand: "Jaya Combo",
      category: "ethnic",
      mrp: 2999,
      price: 999,
      rating: 4.3,
      reviews: 135,
      image: "images/combo1.jpg",
      code: "JT-ETH-004",
      tags: ["offers", "festive"]
    }
  ];