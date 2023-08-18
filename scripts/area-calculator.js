function calculateTriangleArea() {
  // get triangle base value
  const baseField = document.getElementById('triangle-base');
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  // get triangle height value
  const heightField = document.getElementById('triangle-height');
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const area = 0.5 * base * height;

  // show triangle area
  const areaSpan = document.getElementById('triangle-area');
  areaSpan.innerText = area;

}

function calculateRectangleArea() {
  // get rectangle width value
  const widthField = document.getElementById('rectangle-width');
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);

  // get rectangle length value
  const lengthField = document.getElementById('rectangle-length');
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  const area = width * length;

  // show rectangle area
  const areaSpan = document.getElementById('rectangle-area');
  areaSpan.innerText = area;

}