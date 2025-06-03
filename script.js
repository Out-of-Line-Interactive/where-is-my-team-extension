// City data with coordinates and standard timezones
const CITIES = {
  "New York": { lat: 40.7128, lng: -74.006, tz: -5, dst: true },
  "Los Angeles": { lat: 34.0522, lng: -118.2437, tz: -8, dst: true },
  Chicago: { lat: 41.8781, lng: -87.6298, tz: -6, dst: true },
  Miami: { lat: 25.7617, lng: -80.1918, tz: -5, dst: true },
  Denver: { lat: 39.7392, lng: -104.9903, tz: -7, dst: true },
  Seattle: { lat: 47.6062, lng: -122.3321, tz: -8, dst: true },
  Phoenix: { lat: 33.4484, lng: -112.074, tz: -7, dst: false }, // Arizona doesn't observe DST
  Atlanta: { lat: 33.749, lng: -84.388, tz: -5, dst: true },

  // Canadian Cities
  Toronto: { lat: 43.6532, lng: -79.3832, tz: -5, dst: true }, // EST/EDT
  Vancouver: { lat: 49.2827, lng: -123.1207, tz: -8, dst: true }, // PST/PDT
  Montreal: { lat: 45.5017, lng: -73.5673, tz: -5, dst: true }, // EST/EDT
  Ottawa: { lat: 45.4215, lng: -75.6972, tz: -5, dst: true }, // EST/EDT
  Calgary: { lat: 51.0447, lng: -114.0719, tz: -7, dst: true }, // MST/MDT
  Edmonton: { lat: 53.5461, lng: -113.4938, tz: -7, dst: true }, // MST/MDT
  "Quebec City": { lat: 46.8139, lng: -71.208, tz: -5, dst: true }, // EST/EDT
  Winnipeg: { lat: 49.8951, lng: -97.1384, tz: -6, dst: true }, // CST/CDT
  Halifax: { lat: 44.6488, lng: -63.5752, tz: -4, dst: true }, // AST/ADT
  Victoria: { lat: 48.4284, lng: -123.3656, tz: -8, dst: true }, // PST/PDT
  Saskatoon: { lat: 52.1332, lng: -106.67, tz: -6, dst: true }, // CST/CDT
  "St. John's": { lat: 47.5615, lng: -52.7126, tz: -3.5, dst: true }, // NST/NDT (Newfoundland)

  // European Cities
  London: { lat: 51.5074, lng: -0.1278, tz: 0, dst: true },
  Paris: { lat: 48.8566, lng: 2.3522, tz: 1, dst: true },
  Berlin: { lat: 52.52, lng: 13.405, tz: 1, dst: true },
  Madrid: { lat: 40.4168, lng: -3.7038, tz: 1, dst: true },
  Rome: { lat: 41.9028, lng: 12.4964, tz: 1, dst: true },
  Amsterdam: { lat: 52.3676, lng: 4.9041, tz: 1, dst: true },
  Stockholm: { lat: 59.3293, lng: 18.0686, tz: 1, dst: true },

  // Asian Cities
  Tokyo: { lat: 35.6762, lng: 139.6503, tz: 9, dst: false },
  Seoul: { lat: 37.5665, lng: 126.978, tz: 9, dst: false },
  Beijing: { lat: 39.9042, lng: 116.4074, tz: 8, dst: false },
  Shanghai: { lat: 31.2304, lng: 121.4737, tz: 8, dst: false },
  "Hong Kong": { lat: 22.3193, lng: 114.1694, tz: 8, dst: false },
  Mumbai: { lat: 19.076, lng: 72.8777, tz: 5.5, dst: false },
  Delhi: { lat: 28.7041, lng: 77.1025, tz: 5.5, dst: false },
  Singapore: { lat: 1.3521, lng: 103.8198, tz: 8, dst: false },
  Bangkok: { lat: 13.7563, lng: 100.5018, tz: 7, dst: false },
  Dubai: { lat: 25.2048, lng: 55.2708, tz: 4, dst: false },

  // Australian Cities
  Sydney: { lat: -33.8688, lng: 151.2093, tz: 11, dst: true },
  Melbourne: { lat: -37.8136, lng: 144.9631, tz: 11, dst: true },
  Brisbane: { lat: -27.4698, lng: 153.0251, tz: 10, dst: false }, // Queensland doesn't observe DST
  Perth: { lat: -31.9505, lng: 115.8605, tz: 8, dst: false }, // AWST (no DST)
  Adelaide: { lat: -34.9285, lng: 138.6007, tz: 10.5, dst: true }, // ACDT/ACST

  // South American Cities
  Bogotá: { lat: 4.711, lng: -74.0721, tz: -5, dst: false },
  Medellín: { lat: 6.2442, lng: -75.5812, tz: -5, dst: false },
  Cali: { lat: 3.4516, lng: -76.532, tz: -5, dst: false },
  Cartagena: { lat: 10.3997, lng: -75.5144, tz: -5, dst: false },
  "São Paulo": { lat: -23.5505, lng: -46.6333, tz: -3, dst: false },
  "Rio de Janeiro": { lat: -22.9068, lng: -43.1729, tz: -3, dst: false },
  Brasília: { lat: -15.8267, lng: -47.9218, tz: -3, dst: false },
  Salvador: { lat: -12.9714, lng: -38.5014, tz: -3, dst: false },
  "Belo Horizonte": { lat: -19.9167, lng: -43.9345, tz: -3, dst: false },
  Manaus: { lat: -3.119, lng: -60.0217, tz: -4, dst: false },
  Recife: { lat: -8.0476, lng: -34.877, tz: -3, dst: false },
  Fortaleza: { lat: -3.7172, lng: -38.5433, tz: -3, dst: false },
  "Buenos Aires": { lat: -34.6118, lng: -58.396, tz: -3, dst: false },
  Santiago: { lat: -33.4489, lng: -70.6693, tz: -3, dst: true }, // Chile observes DST
  Lima: { lat: -12.0464, lng: -77.0428, tz: -5, dst: false },
  Quito: { lat: -0.1807, lng: -78.4678, tz: -5, dst: false },
};

// Timezone definitions - separate from cities for flexible assignment
const TIMEZONES = [
  { offset: -12, name: "UTC-12 (Baker Island)" },
  { offset: -11, name: "UTC-11 (Samoa)" },
  { offset: -10, name: "UTC-10 (Hawaii)" },
  { offset: -9, name: "UTC-9 (Alaska)" },
  { offset: -8, name: "UTC-8 (Pacific)" },
  { offset: -7, name: "UTC-7 (Mountain)" },
  { offset: -6, name: "UTC-6 (Central)" },
  { offset: -5, name: "UTC-5 (Eastern)" },
  { offset: -4, name: "UTC-4 (Atlantic)" },
  { offset: -3.5, name: "UTC-3:30 (Newfoundland)" },
  { offset: -3, name: "UTC-3 (Argentina/Brazil)" },
  { offset: -2, name: "UTC-2 (South Georgia)" },
  { offset: -1, name: "UTC-1 (Azores)" },
  { offset: 0, name: "UTC+0 (Greenwich)" },
  { offset: 1, name: "UTC+1 (Central Europe)" },
  { offset: 2, name: "UTC+2 (Eastern Europe)" },
  { offset: 3, name: "UTC+3 (Moscow)" },
  { offset: 3.5, name: "UTC+3:30 (Iran)" },
  { offset: 4, name: "UTC+4 (Gulf)" },
  { offset: 4.5, name: "UTC+4:30 (Afghanistan)" },
  { offset: 5, name: "UTC+5 (Pakistan)" },
  { offset: 5.5, name: "UTC+5:30 (India)" },
  { offset: 5.75, name: "UTC+5:45 (Nepal)" },
  { offset: 6, name: "UTC+6 (Bangladesh)" },
  { offset: 6.5, name: "UTC+6:30 (Myanmar)" },
  { offset: 7, name: "UTC+7 (Indochina)" },
  { offset: 8, name: "UTC+8 (China/Singapore)" },
  { offset: 9, name: "UTC+9 (Japan/Korea)" },
  { offset: 9.5, name: "UTC+9:30 (Australia Central)" },
  { offset: 10, name: "UTC+10 (Australia East)" },
  { offset: 10.5, name: "UTC+10:30 (Lord Howe/Adelaide)" },
  { offset: 11, name: "UTC+11 (Solomon Islands)" },
  { offset: 12, name: "UTC+12 (Fiji)" },
  { offset: 13, name: "UTC+13 (Tonga)" },
  { offset: 14, name: "UTC+14 (Line Islands)" },
];

let teamMembers = [];

// Proven Robinson projection implementation from GitHub (Public Domain)
// Source: https://gist.github.com/gr8bit/172584afeb738fd864d572b7cfbcc14d
var robinsonAA = [
  0.8487, 0.84751182, 0.84479598, 0.840213, 0.83359314, 0.8257851, 0.814752,
  0.80006949, 0.78216192, 0.76060494, 0.73658673, 0.7086645, 0.67777182,
  0.64475739, 0.60987582, 0.57134484, 0.52729731, 0.48562614, 0.45167814,
];

var robinsonBB = [
  0.0, 0.0838426, 0.1676852, 0.2515278, 0.3353704, 0.419213, 0.5030556,
  0.5868982, 0.67047034, 0.75336633, 0.83518048, 0.91537187, 0.99339958,
  1.06872269, 1.14066505, 1.20841528, 1.27035062, 1.31998003, 1.3523,
];

function robinsonProject(
  latitude,
  longitude,
  mapWidth,
  heightFactor,
  mapOffsetX,
  mapOffsetY
) {
  if (typeof heightFactor === "undefined") {
    heightFactor = 1;
  }
  if (typeof mapOffsetX === "undefined") {
    mapOffsetX = 0;
  }
  if (typeof mapOffsetY === "undefined") {
    mapOffsetY = 0;
  }

  // Robinson's latitude interpolation points are in 5-degree-steps
  var latitudeAbs = Math.abs(latitude);
  var latitudeStepFloor = Math.floor(latitudeAbs / 5);
  var latitudeStepCeil = Math.ceil(latitudeAbs / 5);

  // calc interpolation factor (>=0 to <1) between two steps
  var latitudeInterpolation = (latitudeAbs - latitudeStepFloor * 5) / 5;

  // interpolate robinson table values
  var AA =
    robinsonAA[latitudeStepFloor] +
    (robinsonAA[latitudeStepCeil] - robinsonAA[latitudeStepFloor]) *
      latitudeInterpolation;
  var BB =
    robinsonBB[latitudeStepFloor] +
    (robinsonBB[latitudeStepCeil] - robinsonBB[latitudeStepFloor]) *
      latitudeInterpolation;

  var robinsonWidth = 2 * Math.PI * robinsonAA[0];
  var widthFactor = mapWidth / robinsonWidth;
  var latitudeSign = Math.sign(latitude) || 1;

  var x = (widthFactor * AA * longitude * Math.PI) / 180 + mapOffsetX;
  var y = widthFactor * BB * latitudeSign * heightFactor + mapOffsetY;

  return { x: x, y: y };
}

function testCityPositions() {
  const testCases = [
    { city: "Vancouver", expectedDesc: "West coast of Canada" },
    { city: "Ottawa", expectedDesc: "Eastern Canada, inland" },
    {
      city: "Rio de Janeiro",
      expectedDesc: "East coast Brazil, near Tropic of Capricorn",
    },
    { city: "London", expectedDesc: "Southern UK" },
    { city: "Tokyo", expectedDesc: "East coast Japan" },
    { city: "Sydney", expectedDesc: "Southeast coast Australia" },
  ];

  console.log("Testing city positions:");
  testCases.forEach((test) => {
    const cityData = CITIES[test.city];
    if (cityData) {
      const pos = latLngToPixel(cityData.lat, cityData.lng);
      console.log(
        `${test.city}: (${cityData.lat}, ${cityData.lng}) -> (${pos.x.toFixed(
          0
        )}, ${pos.y.toFixed(0)}) - Should be at ${test.expectedDesc}`
      );
    }
  });
}

function robinsonProjectAbsolute(
  latitude,
  longitude,
  mapWidth,
  heightFactor,
  mapOffsetX,
  mapOffsetY
) {
  if (typeof heightFactor === "undefined") {
    heightFactor = 1;
  }

  var relative = robinsonProject(
    latitude,
    longitude,
    mapWidth,
    heightFactor,
    mapOffsetX,
    mapOffsetY
  );
  var widthHeightRatio = (Math.PI * robinsonAA[0]) / robinsonBB[18];

  var x = mapWidth / 2 + relative.x;
  var y = ((mapWidth / widthHeightRatio) * heightFactor) / 2 - relative.y;

  return { x: x, y: y };
}

// Replace your latLngToPixel function with this precisely calibrated version

// Replace just the latLngToPixel function in your original script.js with this one:

// Replace just the latLngToPixel function in your original script.js with this one:

function latLngToPixel(lat, lng) {
  const mapContainer = document.getElementById("worldMap");
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;

  // The SVG map background is set to 80% size and centered
  const mapSizeFactor = 0.8;
  const mapWidth = containerWidth * mapSizeFactor;
  const mapHeight = containerHeight * mapSizeFactor;

  // Calculate map offset to center it in the container
  const mapOffsetX = (containerWidth - mapWidth) / 2;
  const mapOffsetY = (containerHeight - mapHeight) / 2;

  // Simple percentage-based positioning that matches the SimpleMaps SVG
  // Based on your diagnostic data, these percentages align with the actual map

  // Longitude to X conversion
  // The map seems to span from about -168° to 192° (slightly extended)
  let xPercent = ((lng + 180) / 360) * 100;

  // Apply horizontal adjustments
  xPercent = xPercent * 0.88 + 6;

  // Latitude to Y conversion with non-linear scaling
  // The SimpleMaps SVG has a modified projection with vertical stretching
  let yPercent;

  // Use polynomial interpolation based on known city positions
  if (lat >= 70) {
    yPercent = 15 + (90 - lat) * 0.75;
  } else if (lat >= 50) {
    // Canada/Northern Europe band (50-70°N)
    yPercent = 30 + (70 - lat) * 0.75;
  } else if (lat >= 30) {
    // USA/Europe/Asia band (30-50°N)
    yPercent = 35 + (50 - lat) * 0.65;
  } else if (lat >= 10) {
    // Subtropical band (10-30°N)
    yPercent = 45 + (30 - lat) * 0.5;
  } else if (lat >= -10) {
    // Equatorial band (10°S-10°N)
    yPercent = 50 + (10 - lat) * 0.4;
  } else if (lat >= -30) {
    // Southern subtropical (10-30°S)
    yPercent = 58 + (-10 - lat) * 0.4;
  } else if (lat >= -50) {
    // Southern temperate (30-50°S)
    yPercent = 66 + (-30 - lat) * 0.4;
  } else {
    // Antarctica (below 50°S)
    yPercent = 74 + (-50 - lat) * 0.5;
  }

  // Convert percentages to pixels
  const x = (containerWidth * xPercent) / 100;
  const y = (containerHeight * yPercent) / 100;

  return { x, y };
}

// Alternative version if the above still doesn't work well
// This one uses direct pixel mapping based on your test data
function latLngToPixelDirect(lat, lng) {
  const mapContainer = document.getElementById("worldMap");
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;

  // Direct mapping based on your click test data:
  // Vancouver (49.28°N, 123.12°W) -> (26.96%, 35.33%)
  // NYC (40.71°N, 74.00°W) -> (35.00%, 41.08%)
  // London (51.51°N, 0.13°W) -> (49.35%, 38.56%)
  // Rio (-22.91°S, 43.17°W) -> (40.76%, 57.60%)
  // Tokyo (35.68°N, 139.65°E) -> (79.35%, 42.99%)
  // Sydney (-33.87°S, 151.21°E) -> (82.39%, 62.63%)

  // Create interpolation based on these known points
  const knownPoints = [
    { lat: 49.28, lng: -123.12, xPct: 26.96, yPct: 35.33 }, // Vancouver
    { lat: 40.71, lng: -74.0, xPct: 35.0, yPct: 41.08 }, // NYC
    { lat: 51.51, lng: -0.13, xPct: 49.35, yPct: 38.56 }, // London
    { lat: -22.91, lng: -43.17, xPct: 40.76, yPct: 57.6 }, // Rio
    { lat: 35.68, lng: 139.65, xPct: 79.35, yPct: 42.99 }, // Tokyo
    { lat: -33.87, lng: 151.21, xPct: 82.39, yPct: 62.63 }, // Sydney
  ];

  // Longitude is roughly linear, so we can interpolate
  // Map spans approximately -170 to 190 degrees
  let xPct = ((lng + 170) / 360) * 88 + 6;

  // For latitude, find the two nearest known points and interpolate
  let yPct;
  if (lat > 45) {
    // Northern regions (use Vancouver/London)
    const t = (lat - 45) / 10;
    yPct = 38 + t * (35 - 38);
  } else if (lat > 25) {
    // Mid-northern (use NYC/Tokyo)
    const t = (lat - 25) / 20;
    yPct = 43 + t * (41 - 43);
  } else if (lat > 0) {
    // Tropical north
    yPct = 43 + (25 - lat) * 0.5;
  } else if (lat > -30) {
    // Tropical south (use Rio)
    const t = lat / -30;
    yPct = 50 + t * (58 - 50);
  } else {
    // Southern (use Sydney)
    const t = (lat + 30) / -20;
    yPct = 58 + t * (63 - 58);
  }

  return {
    x: (containerWidth * xPct) / 100,
    y: (containerHeight * yPct) / 100,
  };
}

// Alternative version if the above still doesn't work well
// This one uses direct pixel mapping based on your test data
function latLngToPixelDirect(lat, lng) {
  const mapContainer = document.getElementById("worldMap");
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;

  // Direct mapping based on your click test data:
  // Vancouver (49.28°N, 123.12°W) -> (26.96%, 35.33%)
  // NYC (40.71°N, 74.00°W) -> (35.00%, 41.08%)
  // London (51.51°N, 0.13°W) -> (49.35%, 38.56%)
  // Rio (-22.91°S, 43.17°W) -> (40.76%, 57.60%)
  // Tokyo (35.68°N, 139.65°E) -> (79.35%, 42.99%)
  // Sydney (-33.87°S, 151.21°E) -> (82.39%, 62.63%)

  // Create interpolation based on these known points
  const knownPoints = [
    { lat: 49.28, lng: -123.12, xPct: 26.96, yPct: 35.33 }, // Vancouver
    { lat: 40.71, lng: -74.0, xPct: 35.0, yPct: 41.08 }, // NYC
    { lat: 51.51, lng: -0.13, xPct: 49.35, yPct: 38.56 }, // London
    { lat: -22.91, lng: -43.17, xPct: 40.76, yPct: 57.6 }, // Rio
    { lat: 35.68, lng: 139.65, xPct: 79.35, yPct: 42.99 }, // Tokyo
    { lat: -33.87, lng: 151.21, xPct: 82.39, yPct: 62.63 }, // Sydney
  ];

  // Longitude is roughly linear, so we can interpolate
  // Map spans approximately -170 to 190 degrees
  let xPct = ((lng + 170) / 360) * 88 + 6;

  // For latitude, find the two nearest known points and interpolate
  let yPct;
  if (lat > 45) {
    // Northern regions (use Vancouver/London)
    const t = (lat - 45) / 10;
    yPct = 38 + t * (35 - 38);
  } else if (lat > 25) {
    // Mid-northern (use NYC/Tokyo)
    const t = (lat - 25) / 20;
    yPct = 43 + t * (41 - 43);
  } else if (lat > 0) {
    // Tropical north
    yPct = 43 + (25 - lat) * 0.5;
  } else if (lat > -30) {
    // Tropical south (use Rio)
    const t = lat / -30;
    yPct = 50 + t * (58 - 50);
  } else {
    // Southern (use Sydney)
    const t = (lat + 30) / -20;
    yPct = 58 + t * (63 - 58);
  }

  return {
    x: (containerWidth * xPct) / 100,
    y: (containerHeight * yPct) / 100,
  };
}

// Verification function to check calibration accuracy
function verifyCityPositions() {
  const expectedPositions = {
    London: { xPct: 49.35, yPct: 38.56 },
    Vancouver: { xPct: 26.96, yPct: 35.33 },
    "New York": { xPct: 35.0, yPct: 41.08 },
    "Rio de Janeiro": { xPct: 40.76, yPct: 57.6 },
    Tokyo: { xPct: 79.35, yPct: 42.99 },
    Sydney: { xPct: 82.39, yPct: 62.63 },
  };

  console.log("=== CALIBRATION VERIFICATION ===");

  Object.entries(expectedPositions).forEach(([cityName, expected]) => {
    const city = CITIES[cityName];
    if (city) {
      const pos = latLngToPixel(city.lat, city.lng);
      const container = document.getElementById("worldMap");
      const actualXPct = ((pos.x / container.offsetWidth) * 100).toFixed(2);
      const actualYPct = ((pos.y / container.offsetHeight) * 100).toFixed(2);

      const xError = Math.abs(actualXPct - expected.xPct).toFixed(2);
      const yError = Math.abs(actualYPct - expected.yPct).toFixed(2);

      console.log(`${cityName}:`);
      console.log(`  Expected: ${expected.xPct}%, ${expected.yPct}%`);
      console.log(`  Actual: ${actualXPct}%, ${actualYPct}%`);
      console.log(`  Error: ${xError}%, ${yError}%`);

      // Visual feedback
      if (xError < 1 && yError < 1) {
        console.log(`  ✓ Excellent positioning!`);
      } else if (xError < 2 && yError < 2) {
        console.log(`  ✓ Good positioning`);
      } else {
        console.log(`  ⚠ Needs adjustment`);
      }
    }
  });
}

// Helper function to test any city
function testCity(cityName) {
  const city = CITIES[cityName];
  if (!city) {
    console.log(`City "${cityName}" not found`);
    return;
  }

  const pos = latLngToPixel(city.lat, city.lng);
  const container = document.getElementById("worldMap");
  const xPct = ((pos.x / container.offsetWidth) * 100).toFixed(2);
  const yPct = ((pos.y / container.offsetHeight) * 100).toFixed(2);

  console.log(`${cityName} (${city.lat}, ${city.lng}):`);
  console.log(`  Position: ${pos.x.toFixed(0)}, ${pos.y.toFixed(0)}`);
  console.log(`  Percentage: ${xPct}%, ${yPct}%`);

  // Add a temporary marker
  const marker = document.createElement("div");
  marker.style.position = "absolute";
  marker.style.width = "20px";
  marker.style.height = "20px";
  marker.style.background = "cyan";
  marker.style.border = "2px solid blue";
  marker.style.borderRadius = "50%";
  marker.style.left = `${pos.x - 11}px`;
  marker.style.top = `${pos.y - 11}px`;
  marker.style.zIndex = "1000";
  marker.title = cityName;
  container.appendChild(marker);

  // Add label
  const label = document.createElement("div");
  label.style.position = "absolute";
  label.style.left = `${pos.x + 15}px`;
  label.style.top = `${pos.y - 5}px`;
  label.style.color = "cyan";
  label.style.fontSize = "14px";
  label.style.fontWeight = "bold";
  label.style.textShadow = "1px 1px 2px black";
  label.style.zIndex = "1001";
  label.textContent = cityName;
  container.appendChild(label);

  setTimeout(() => {
    marker.remove();
    label.remove();
  }, 5000);
}
// Alternative version with per-region adjustments if needed
function latLngToPixelWithRegionalAdjustments(lat, lng) {
  const mapContainer = document.getElementById("worldMap");
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;

  const mapSizeFactor = 0.8;
  const mapWidth = containerWidth * mapSizeFactor;
  const mapHeight = containerHeight * mapSizeFactor;
  const mapOffsetX = (containerWidth - mapWidth) / 2;
  const mapOffsetY = (containerHeight - mapHeight) / 2;

  // Base equirectangular projection
  let x = ((lng + 180) / 360) * mapWidth;
  let y = ((90 - lat) / 180) * mapHeight;

  // Apply base scaling
  const baseScaleX = 0.92;
  const baseScaleY = 0.85;

  x = (x - mapWidth / 2) * baseScaleX + mapWidth / 2;
  y = (y - mapHeight / 2) * baseScaleY + mapHeight / 2;

  // Regional adjustments for better accuracy
  // These compensate for distortions in the SVG map

  // High latitudes need more adjustment
  if (Math.abs(lat) > 60) {
    const latFactor = (Math.abs(lat) - 60) / 30; // 0 to 1 for 60° to 90°
    y += mapHeight * 0.02 * latFactor * (lat > 0 ? 1 : -1);
  }

  // Far western longitudes (Americas)
  if (lng < -30 && lng > -170) {
    x += mapWidth * 0.01;
  }

  // Far eastern longitudes (Asia-Pacific)
  if (lng > 100 && lng < 180) {
    x -= mapWidth * 0.01;
  }

  // Equatorial regions
  if (Math.abs(lat) < 25) {
    y += mapHeight * 0.01;
  }

  // Apply final offsets
  x += mapOffsetX;
  y += mapOffsetY + mapHeight * 0.05;

  return { x, y };
}

// Function to check if a date is in Daylight Saving Time for Northern Hemisphere
function isDSTNorthern(date) {
  const year = date.getFullYear();
  // DST starts second Sunday in March
  const dstStart = new Date(year, 2, 1);
  dstStart.setDate(dstStart.getDate() + ((7 - dstStart.getDay()) % 7) + 7);
  // DST ends first Sunday in November
  const dstEnd = new Date(year, 10, 1);
  dstEnd.setDate(dstEnd.getDate() + ((7 - dstEnd.getDay()) % 7));
  return date >= dstStart && date < dstEnd;
}

// Function to check if a date is in Daylight Saving Time for Southern Hemisphere
function isDSTSouthern(date) {
  const year = date.getFullYear();
  // DST starts first Sunday in October
  const dstStart = new Date(year, 9, 1);
  dstStart.setDate(dstStart.getDate() + ((7 - dstStart.getDay()) % 7));
  // DST ends first Sunday in April
  const dstEnd = new Date(year + 1, 3, 1);
  dstEnd.setDate(dstEnd.getDate() + ((7 - dstEnd.getDay()) % 7));
  return date >= dstStart || date < dstEnd;
}

// Function to get current timezone offset for a member (city + custom timezone override)
function getCurrentTimezone(member) {
  // If member has a custom timezone set, use that
  if (member.customTimezone !== undefined && member.customTimezone !== null) {
    return member.customTimezone;
  }

  // Otherwise use the city's timezone with DST calculation
  const cityData = CITIES[member.city];
  if (!cityData) return 0;

  const now = new Date();
  let currentTz = cityData.tz;

  if (cityData.dst) {
    if (cityData.lat < 0) {
      // Southern Hemisphere
      if (isDSTSouthern(now)) {
        currentTz += 1;
      }
    } else {
      // Northern Hemisphere
      if (isDSTNorthern(now)) {
        currentTz += 1;
      }
    }
  }

  return currentTz;
}

function init() {
  loadTeamMembers();
  updateTime();
  setInterval(updateTime, 1000);

  document.getElementById("configBtn").addEventListener("click", showConfig);
  document.getElementById("closeBtn").addEventListener("click", hideConfig);
  document.getElementById("addBtn").addEventListener("click", addMember);

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(drawMap, 250);
  });

  if (window.ResizeObserver) {
    const mapContainer = document.getElementById("worldMap");
    const resizeObserver = new ResizeObserver(drawMap);
    resizeObserver.observe(mapContainer);
  }

  setTimeout(() => {
    runDiagnostics();
    compareProjections();
  }, 1000);
}

// Add this diagnostic function to your script.js temporarily
// This will help us understand the coordinate system

function runDiagnostics() {
  const mapContainer = document.getElementById("worldMap");
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;

  console.log("=== MAP DIAGNOSTICS ===");
  console.log(`Container dimensions: ${containerWidth}x${containerHeight}`);

  // Add click handler to get coordinates
  mapContainer.addEventListener("click", function (e) {
    const rect = mapContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate percentages
    const xPercent = ((x / containerWidth) * 100).toFixed(2);
    const yPercent = ((y / containerHeight) * 100).toFixed(2);

    console.log(`Clicked at: ${x}, ${y} (${xPercent}%, ${yPercent}%)`);

    // Add a temporary marker at click position
    const marker = document.createElement("div");
    marker.style.position = "absolute";
    marker.style.width = "10px";
    marker.style.height = "10px";
    marker.style.background = "yellow";
    marker.style.border = "2px solid red";
    marker.style.borderRadius = "50%";
    marker.style.left = `${x - 6}px`;
    marker.style.top = `${y - 6}px`;
    marker.style.zIndex = "1000";
    mapContainer.appendChild(marker);

    // Remove marker after 3 seconds
    setTimeout(() => marker.remove(), 3000);
  });

  // Test specific cities with known positions
  const testCities = [
    { name: "London", expected: "Center of UK" },
    { name: "New York", expected: "East coast USA" },
    { name: "Vancouver", expected: "West coast Canada" },
    { name: "Rio de Janeiro", expected: "East coast Brazil" },
    { name: "Tokyo", expected: "East coast Japan" },
    { name: "Sydney", expected: "Southeast Australia" },
  ];

  console.log("\n=== CITY POSITION TEST ===");
  testCities.forEach((test) => {
    if (CITIES[test.name]) {
      const city = CITIES[test.name];
      const pixel = latLngToPixel(city.lat, city.lng);
      const xPercent = ((pixel.x / containerWidth) * 100).toFixed(2);
      const yPercent = ((pixel.y / containerHeight) * 100).toFixed(2);

      console.log(
        `${test.name}: ${pixel.x.toFixed(0)}, ${pixel.y.toFixed(
          0
        )} (${xPercent}%, ${yPercent}%) - Should be at ${test.expected}`
      );

      // Add labeled test marker
      const testMarker = document.createElement("div");
      testMarker.style.position = "absolute";
      testMarker.style.left = `${pixel.x}px`;
      testMarker.style.top = `${pixel.y}px`;
      testMarker.style.color = "yellow";
      testMarker.style.fontSize = "12px";
      testMarker.style.fontWeight = "bold";
      testMarker.style.textShadow = "1px 1px 2px black";
      testMarker.style.zIndex = "1001";
      testMarker.textContent = test.name;
      mapContainer.appendChild(testMarker);
    }
  });

  console.log(
    "\nClick anywhere on the map to see coordinates. Yellow markers will appear at click positions."
  );
  console.log(
    "Compare where cities appear vs where they should be on the SVG map."
  );
}

// Alternative simplified coordinate conversion for testing
function simpleLatLngToPixel(lat, lng) {
  const mapContainer = document.getElementById("worldMap");
  const containerWidth = mapContainer.offsetWidth;
  const containerHeight = mapContainer.offsetHeight;

  // SVG map is 80% of container size and centered
  const mapSizeFactor = 0.8;
  const mapWidth = containerWidth * mapSizeFactor;
  const mapHeight = containerHeight * mapSizeFactor;
  const mapOffsetX = (containerWidth - mapWidth) / 2;
  const mapOffsetY = (containerHeight - mapHeight) / 2;

  // Simple equirectangular projection
  // Longitude: -180 to 180 maps to 0 to mapWidth
  // Latitude: 90 to -90 maps to 0 to mapHeight

  const x = mapOffsetX + ((lng + 180) / 360) * mapWidth;
  const y = mapOffsetY + ((90 - lat) / 180) * mapHeight;

  return { x, y };
}

// Test both projection methods
function compareProjections() {
  console.log("\n=== PROJECTION COMPARISON ===");
  const testCities = ["London", "Vancouver", "Rio de Janeiro", "Tokyo"];

  testCities.forEach((cityName) => {
    const city = CITIES[cityName];
    if (city) {
      const robinson = latLngToPixel(city.lat, city.lng);
      const simple = simpleLatLngToPixel(city.lat, city.lng);

      console.log(`${cityName} (${city.lat}, ${city.lng}):`);
      console.log(
        `  Robinson: ${robinson.x.toFixed(0)}, ${robinson.y.toFixed(0)}`
      );
      console.log(`  Simple: ${simple.x.toFixed(0)}, ${simple.y.toFixed(0)}`);
    }
  });
}

// Add this to your init() function or run it separately:
// setTimeout(() => {
//   runDiagnostics();
//   compareProjections();
// }, 1000);

// INSTRUCTIONS:
// 1. Add these functions to your script.js
// 2. In your init() function, add: setTimeout(() => { runDiagnostics(); compareProjections(); }, 1000);
// 3. Open the browser console (F12)
// 4. Reload the extension
// 5. Click on the map where cities SHOULD be and note the coordinates
// 6. Compare with where the cities are actually appearing
// 7. Share the console output so we can calibrate the projection correctly

function updateTime() {
  const now = new Date();
  const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  document.getElementById(
    "timeInfo"
  ).textContent = `Local: ${now.toLocaleTimeString()} | UTC: ${utc.toLocaleTimeString()}`;
}

function loadTeamMembers() {
  if (typeof chrome !== "undefined" && chrome.storage) {
    chrome.storage.sync.get(["teamMembers"], (result) => {
      teamMembers = result.teamMembers || getDefaultMembers();
      drawMap();
    });
  } else {
    teamMembers = getDefaultMembers();
    drawMap();
  }
}

function getDefaultMembers() {
  return [
    {
      name: "John Doe",
      role: "Frontend Developer",
      city: "New York",
      customTimezone: null,
    },
    {
      name: "Jane Smith",
      role: "Backend Engineer",
      city: "London",
      customTimezone: null,
    },
    {
      name: "Mike Johnson",
      role: "DevOps Engineer",
      city: "Tokyo",
      customTimezone: null,
    },
  ];
}

function saveTeamMembers() {
  if (typeof chrome !== "undefined" && chrome.storage) {
    chrome.storage.sync.set({ teamMembers });
  }
}

function drawMap() {
  const mapContainer = document.getElementById("worldMap");
  mapContainer.innerHTML = "";

  // Get current timezones with team members
  const teamTimezones = [];
  const cityTimezoneMap = {};

  teamMembers.forEach((member) => {
    const currentTz = getCurrentTimezone(member);
    if (!teamTimezones.includes(currentTz)) {
      teamTimezones.push(currentTz);
    }
    if (!cityTimezoneMap[currentTz]) {
      cityTimezoneMap[currentTz] = [];
    }
    cityTimezoneMap[currentTz].push(member.city);
  });

  // Draw timezone lines
  for (let tz = -12; tz <= 14; tz += 0.5) {
    // Support half-hour timezones
    const mapContainer = document.getElementById("worldMap");
    const containerWidth = mapContainer.offsetWidth;
    const mapSizeFactor = 0.8;
    const mapWidth = containerWidth * mapSizeFactor;
    const mapOffsetX = (containerWidth - mapWidth) / 2;

    const longitudeForTimezone = tz * 15;
    const normalizedX = (longitudeForTimezone + 180) / 360;
    const x = mapOffsetX + normalizedX * mapWidth;

    const line = document.createElement("div");
    line.className = "timezone-line";
    line.style.left = `${x}px`;
    line.setAttribute("data-timezone", tz);

    let shouldHighlight = false;
    let citiesTooltip = [];

    teamTimezones.forEach((teamTz) => {
      if (Math.abs(teamTz - tz) < 0.1) {
        // Allow for floating point comparison
        shouldHighlight = true;
        if (cityTimezoneMap[teamTz]) {
          citiesTooltip = citiesTooltip.concat(cityTimezoneMap[teamTz]);
        }
      }
    });

    if (shouldHighlight) {
      line.classList.add("has-team");
    }

    line.addEventListener("mouseenter", (e) => {
      showTimezoneTooltip(e, tz, citiesTooltip);
    });

    mapContainer.appendChild(line);

    // Add timezone label only for whole hour timezones and important half-hours
    if (tz % 1 === 0 || [3.5, 5.5, 9.5, 10.5].includes(tz) || shouldHighlight) {
      const label = document.createElement("div");
      label.className = "timezone-label";
      label.style.left = `${x}px`;
      label.setAttribute("data-timezone", tz);

      const now = new Date();
      const localOffset = now.getTimezoneOffset() / -60;
      const timeDiff = tz - localOffset;
      let diffText = "";

      if (timeDiff > 0) {
        diffText = `+${timeDiff}h`;
      } else if (timeDiff < 0) {
        diffText = `${timeDiff}h`;
      } else {
        diffText = "Local";
      }

      let labelText = `UTC${
        tz >= 0 ? "+" : ""
      }${tz}<span class="utc-offset">${diffText}</span>`;
      if (citiesTooltip.length > 0) {
        labelText += `<span class="cities-info">${citiesTooltip
          .slice(0, 2)
          .join(", ")}${citiesTooltip.length > 2 ? "..." : ""}</span>`;
      }

      label.innerHTML = labelText;

      if (shouldHighlight) {
        label.classList.add("has-team");
      }

      mapContainer.appendChild(label);
    }
  }

  // Draw city markers
  const citiesWithMembers = {};
  teamMembers.forEach((member) => {
    if (CITIES[member.city]) {
      if (!citiesWithMembers[member.city]) {
        citiesWithMembers[member.city] = [];
      }
      citiesWithMembers[member.city].push(member);
    }
  });

  Object.entries(citiesWithMembers).forEach(([cityName, members], index) => {
    const cityData = CITIES[cityName];
    const pixel = latLngToPixel(cityData.lat, cityData.lng);
    const marker = document.createElement("div");
    marker.className = "city-marker";
    marker.id = `city-marker-${index}`;

    marker.style.position = "absolute";
    marker.style.width = "16px";
    marker.style.height = "16px";
    marker.style.borderRadius = "50%";
    marker.style.cursor = "pointer";
    marker.style.zIndex = "500";
    marker.style.display = "block";
    marker.style.visibility = "visible";
    marker.style.left = `${pixel.x - 8}px`;
    marker.style.top = `${pixel.y - 8}px`;

    marker.setAttribute("data-city", cityName);

    marker.addEventListener("mouseenter", (e) => {
      const firstMemberTz = getCurrentTimezone(members[0]);
      highlightTimezoneBar(firstMemberTz);
      showMemberCard(e, members, cityName, cityData);
    });

    marker.addEventListener("mouseleave", () => {
      clearTimezoneBarHighlight();
      hideMemberCard();
    });

    mapContainer.appendChild(marker);
  });
}

function showTimezoneTooltip(event, tz, citiesTooltip = []) {
  const existingTooltip = document.getElementById("timezoneTooltip");
  if (existingTooltip) {
    existingTooltip.remove();
  }

  const tooltip = document.createElement("div");
  tooltip.id = "timezoneTooltip";
  tooltip.style.position = "absolute";
  tooltip.style.top = "120px";
  tooltip.style.left = `${event.pageX}px`;
  tooltip.style.transform = "translateX(-50%)";
  tooltip.style.background = "rgba(0, 0, 0, 0.9)";
  tooltip.style.color = "#fff";
  tooltip.style.padding = "8px 12px";
  tooltip.style.borderRadius = "6px";
  tooltip.style.fontSize = "12px";
  tooltip.style.zIndex = "15";
  tooltip.style.pointerEvents = "none";
  tooltip.style.border = "1px solid rgba(255, 105, 180, 0.3)";
  tooltip.style.maxWidth = "200px";

  const currentTime = new Date();
  const utcTime = new Date(
    currentTime.getTime() + currentTime.getTimezoneOffset() * 60000
  );
  const timezoneTime = new Date(utcTime.getTime() + tz * 60 * 60 * 1000);

  let tooltipContent = `UTC${
    tz >= 0 ? "+" : ""
  }${tz}: ${timezoneTime.toLocaleTimeString()}`;

  if (citiesTooltip.length > 0) {
    tooltipContent += `<br><small style="color: #ff69b4;">Team cities: ${citiesTooltip.join(
      ", "
    )}</small>`;
  }

  tooltip.innerHTML = tooltipContent;
  document.getElementById("worldMap").appendChild(tooltip);

  setTimeout(() => {
    if (tooltip && tooltip.parentNode) {
      tooltip.remove();
    }
  }, 3000);
}

function showMemberCard(event, members, cityName, cityData) {
  const card = document.getElementById("memberCard");

  let cardContent = `<div class="member-city">${cityName}</div>`;

  members.forEach((member, index) => {
    const currentTz = getCurrentTimezone(member);
    const now = new Date();
    const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    const memberTime = new Date(utcTime.getTime() + currentTz * 60 * 60 * 1000);

    let timezoneDisplay = `UTC${currentTz >= 0 ? "+" : ""}${currentTz}`;
    if (member.customTimezone !== null && member.customTimezone !== undefined) {
      timezoneDisplay += " (Custom)";
    }

    cardContent += `
        <div style="margin-bottom: ${
          index < members.length - 1 ? "15px" : "0"
        }; padding-bottom: ${index < members.length - 1 ? "15px" : "0"}; ${
      index < members.length - 1 ? "border-bottom: 1px solid #444;" : ""
    }">
          <div class="member-photo">${member.name.charAt(0)}</div>
          <div class="member-info">
            <h3>${member.name}</h3>
            <div class="member-role">${member.role}</div>
            <div class="member-time">${memberTime.toLocaleTimeString()}</div>
            <div style="font-size: 10px; color: #888; margin-top: 2px;">${timezoneDisplay}</div>
          </div>
          <div style="clear: both;"></div>
        </div>
      `;
  });

  card.innerHTML = cardContent;

  const cardWidth = 250;
  const cardHeight = 140;
  const totalCardHeight = cardHeight * members.length;

  let cardX = event.pageX + 15;
  let cardY = event.pageY - 30;

  if (cardX + cardWidth > window.innerWidth) {
    cardX = event.pageX - cardWidth - 15;
  }
  if (cardY + totalCardHeight > window.innerHeight) {
    cardY = window.innerHeight - totalCardHeight - 20;
  }
  if (cardY < 0) {
    cardY = 20;
  }

  card.style.left = `${cardX}px`;
  card.style.top = `${cardY}px`;
  card.style.display = "block";
}

function hideMemberCard() {
  document.getElementById("memberCard").style.display = "none";
}

function highlightTimezoneBar(timezone) {
  clearTimezoneBarHighlight();

  const timezoneLines = document.querySelectorAll(".timezone-line");
  timezoneLines.forEach((line) => {
    const lineTimezone = parseFloat(line.getAttribute("data-timezone"));
    if (Math.abs(lineTimezone - timezone) < 0.01) {
      line.classList.add("highlighted-bar");
    }
  });

  const timezoneLabels = document.querySelectorAll(".timezone-label");
  timezoneLabels.forEach((label) => {
    const labelTimezone = parseFloat(label.getAttribute("data-timezone"));
    if (Math.abs(labelTimezone - timezone) < 0.01) {
      label.classList.add("highlighted-label");
    }
  });
}

function clearTimezoneBarHighlight() {
  const highlightedBars = document.querySelectorAll(
    ".timezone-line.highlighted-bar"
  );
  const highlightedLabels = document.querySelectorAll(
    ".timezone-label.highlighted-label"
  );

  highlightedBars.forEach((bar) => bar.classList.remove("highlighted-bar"));
  highlightedLabels.forEach((label) =>
    label.classList.remove("highlighted-label")
  );
}

function showConfig() {
  document.getElementById("configPanel").style.display = "block";
  renderMembersList();
}

function hideConfig() {
  document.getElementById("configPanel").style.display = "none";
  drawMap();
}

function renderMembersList() {
  const container = document.getElementById("membersList");
  container.innerHTML = "";

  teamMembers.forEach((member, index) => {
    const memberForm = document.createElement("div");
    memberForm.className = "member-form";

    const cityOptions = Object.keys(CITIES)
      .map((cityName) => {
        const selected = member.city === cityName ? "selected" : "";
        return `<option value="${cityName}" ${selected}>${cityName}</option>`;
      })
      .join("");

    const timezoneOptions = TIMEZONES.map((tz) => {
      const selected = member.customTimezone === tz.offset ? "selected" : "";
      return `<option value="${tz.offset}" ${selected}>${tz.name}</option>`;
    }).join("");

    memberForm.innerHTML = `
        <div class="form-group">
          <label>Name:</label>
          <input type="text" value="${
            member.name
          }" data-index="${index}" data-field="name" class="member-input">
        </div>
        <div class="form-group">
          <label>Role:</label>
          <input type="text" value="${
            member.role
          }" data-index="${index}" data-field="role" class="member-input">
        </div>
        <div class="form-group">
          <label>City (for map location):</label>
          <select data-index="${index}" data-field="city" class="member-select">${cityOptions}</select>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" ${
              member.customTimezone !== null &&
              member.customTimezone !== undefined
                ? "checked"
                : ""
            } 
                   data-index="${index}" class="custom-timezone-checkbox"> 
            Override timezone:
          </label>
          <select data-index="${index}" data-field="customTimezone" class="timezone-select" 
                  ${
                    member.customTimezone === null ||
                    member.customTimezone === undefined
                      ? "disabled"
                      : ""
                  }>
            <option value="null">Use city's timezone</option>
            ${timezoneOptions}
          </select>
        </div>
        <button class="delete-btn" data-index="${index}">Delete</button>
      `;

    container.appendChild(memberForm);
  });

  // Add event listeners
  const inputs = container.querySelectorAll(".member-input");
  inputs.forEach((input) => {
    input.addEventListener("change", function () {
      const index = parseInt(this.getAttribute("data-index"));
      const field = this.getAttribute("data-field");
      updateMember(index, field, this.value);
    });
  });

  const selects = container.querySelectorAll(".member-select");
  selects.forEach((select) => {
    select.addEventListener("change", function () {
      const index = parseInt(this.getAttribute("data-index"));
      const field = this.getAttribute("data-field");
      updateMember(index, field, this.value);
    });
  });

  const timezoneSelects = container.querySelectorAll(".timezone-select");
  timezoneSelects.forEach((select) => {
    select.addEventListener("change", function () {
      const index = parseInt(this.getAttribute("data-index"));
      const value = this.value === "null" ? null : parseFloat(this.value);
      updateMember(index, "customTimezone", value);
    });
  });

  const checkboxes = container.querySelectorAll(".custom-timezone-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const index = parseInt(this.getAttribute("data-index"));
      const timezoneSelect = container.querySelector(
        `select[data-index="${index}"][data-field="customTimezone"]`
      );

      if (this.checked) {
        timezoneSelect.disabled = false;
        // Set to current city timezone as starting point
        const member = teamMembers[index];
        const cityData = CITIES[member.city];
        if (cityData) {
          const currentTz = getCurrentTimezone(member);
          timezoneSelect.value = currentTz;
          updateMember(index, "customTimezone", currentTz);
        }
      } else {
        timezoneSelect.disabled = true;
        timezoneSelect.value = "null";
        updateMember(index, "customTimezone", null);
      }
    });
  });

  const deleteButtons = container.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      deleteMember(index);
    });
  });
}

function addMember() {
  teamMembers.push({
    name: "New Member",
    role: "Role",
    city: "New York",
    customTimezone: null,
  });
  saveTeamMembers();
  renderMembersList();
}

function updateMember(index, field, value) {
  teamMembers[index][field] = value;
  saveTeamMembers();
}

function deleteMember(index) {
  teamMembers.splice(index, 1);
  saveTeamMembers();
  renderMembersList();
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", init);
