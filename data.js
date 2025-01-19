// data.js
const roadtripData = [
  {
    day: 1,
    from: "New York JFK Airport",
    to: "LAX Airport",
    stops: [
      { name: "Auto ophalen", coords: "", img: "images/auto.png" },
    ],
    hotel: { name: "Hampton Inn By Hilton Los Angeles Airport", coords: "33.942722, -118.369611", img: "images/hotel1.png" }
  },
  {
    day: 2,
    from: "Los Angeles, Californië",
    to: "Cambria, Californië",
    stops: [
      { name: "Malibu Beach", coords: "34.038628347593445, -118.65693679295518", img: "https://girlswhomagazine.nl/wp-content/uploads/Malibu-Beach-scaled.jpg" },
      { name: "Santa Barbara", coords: "34.41201633730142, -119.68893127147359", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/12/13/istock-134250006.jpg" },
      { name: "Vandenberg Space Force Base Visitor Cente", coords: "34.750843692843205, -120.52178266370682", img: "https://ewscripps.brightspotcdn.com/dims4/default/63c1a7e/2147483647/strip/true/crop/4032x2268+0+378/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F19%2F61%2Faf8f7fb044e4857f26f0370b33a1%2Fvandenberg-space-force-base.jpg" },
      { name: "Pismo Beach Pier", coords: "35.13913130009106, -120.64257528724231", img: "https://reddotpier.com/wp-content/webp-express/webp-images/uploads/2023/07/pismo-beach-pier-pismo-beach-pacific-ocean-california_25827.jpg.webp" },
    ],
    hotel: { name: "Cambria Pines Lodge", coords: "35.558722, -121.080111", img: "images/hotel2.png" }
  },
  {
    day: 3,
    from: "Cambria, Californië",
    to: "Monterey, Californië",
    stops: [
      { name: "McDonalds in King City", coords: "36.20300556518639, -121.13611903778286", img: "images/photo.png" },
      { name: "Starbucks in King City", coords: "36.20370271436367, -121.13651153725596", img: "images/photo.png" },
      { name: "Taco Bell in King City", coords: "36.20279636668757, -121.13543297976454", img: "images/photo.png" },
      { name: "Bixby Bridge Vista Point", coords: "36.37258158760908, -121.90306379229146", img: "images/photo.png" },
    ],
    hotel: { name: "Best Western De Anza Inn", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel3.png" }
  },
  {
    day: 4,
    from: "Monterey, Californië",
    to: "San Francisco, Californië",
    stops: [
      { name: "In-N-Out Burger", coords: "36.60569141608731, -121.85824136161531", img: "images/photo.png" },
      { name: "Starbucks", coords: "36.6079717617884, -121.85566637324806", img: "images/photo.png" },
      { name: "McDonald's", coords: "36.60831596177344, -121.85606584639598", img: "images/photo.png" },
      { name: "Shell Tankstation", coords: "36.609881040963025, -121.85721139773395", img: "images/photo.png" },
      { name: "Santa Cruz Pier", coords: "36.96241953478573, -122.02326661283821", img: "images/photo.png" },
      { name: "Henry Cowell Redwoods State Park", coords: "37.04027762099372, -122.06385193982027", img: "images/photo.png" },
    ],
    hotel: { name: "BEI San Francisco, Trademark Collection by Wyndham", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel4.png" }
  },
  {
    day: 5,
    from: "San Francisco, Californië",
    to: "San Francisco, Californië",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "BEI San Francisco, Trademark Collection by Wyndham", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel4.png" }
  },
  {
    day: 6,
    from: "San Francisco, Californië",
    to: "San Francisco, Californië",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "BEI San Francisco, Trademark Collection by Wyndham", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel4.png" }
  },
  {
    day: 7,
    from: "San Francisco, Californië",
    to: "Yosemite - El Portal, Californië",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Yosemite View Lodge", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel5.png" }
  },
  {
    day: 8,
    from: "Yosemite - El Portal, Californië",
    to: "Yosemite - El Portal, Californië",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Yosemite View Lodge", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel5.png" }
  },
  {
    day: 9,
    from: "Yosemite - El Portal, Californië",
    to: "Visalia, Californië",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Hampton Inn Visalia", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel6.png" }
  },
  {
    day: 10,
    from: "Visalia, Californië",
    to: "Furnace Creek, Californië",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "The Ranch at Death Valley", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel7.png" }
  },
  {
    day: 11,
    from: "Furnace Creek, Californië",
    to: "Las Vegas, Nevada",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "New York-New York Hotel & Casino", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel8.png" }
  },
  {
    day: 12,
    from: "Las Vegas, Nevada",
    to: "Las Vegas, Nevada",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "New York-New York Hotel & Casino", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel8.png" }
  },
  {
    day: 13,
    from: "Las Vegas, Nevada",
    to: "Zion National Park, Utah",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Zion Mountain Ranch", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel9.png" }
  },
  {
    day: 14,
    from: "Zion National Park, Utah",
    to: "Zion National Park, Uta",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Zion Mountain Ranch", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel9.png" }
  },
  {
    day: 15,
    from: "Zion National Park, Uta",
    to: "Bryce, Utah",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Bryce View Lodge", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel10.png" }
  },
  {
    day: 16,
    from: "Bryce, Utah",
    to: "Page, Arizona",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Super 8 by Wyndham Page/Lake Powell", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel11.png" }
  },
  {
    day: 17,
    from: "Page, Arizona",
    to: "Grand Canyon Village, Arizona",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Squire Resort at the Grand Canyon, BW Signature Collection", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel12.png" }
  },
  {
    day: 18,
    from: "Grand Canyon Village, Arizona",
    to: "Kingman, Arizona",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Best Western Plus A Wayfarer's Inn And Suites", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel13.png" }
  },
  {
    day: 19,
    from: "Kingman, Arizona",
    to: "Los Angeles, Californië",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Hotel MdR Marina del Rey - a DoubleTree by Hilton", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel14.png" }
  },
  {
    day: 20,
    from: "Los Angeles, Californië",
    to: "Los Angeles, Californië",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Hotel MdR Marina del Rey - a DoubleTree by Hilton", coords: "36.59689236341396, -121.86103710206167", img: "images/hotel14.png" }
  },
  {
    day: 21,
    from: "Los Angeles, Californië",
    to: "Los Angeles, Californië",
    stops: [
      { name: "NULL", coords: "NULL", img: "images/photo.png" },
    ],
    hotel: { name: "Plane", coords: "36.59689236341396, -121.86103710206167", img: "images/plane.png" }
  },
  // Voeg 20 extra dagen toe met dezelfde structuur...
];
