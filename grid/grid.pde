color [] c;
PImage img;
void setup() {
  size(256, 256);
  noStroke();
  img = createImage(49, 33, ARGB);
  c = new color [16];
  float r=0, b=0;
  for (int i = 0; i < 16; i ++) {
    r += random(256) + 256;
    r %= 256;
    b += random(-256, 0) + 256;
    b %= 256;
    c[i] = color(
      r, 
      pow(random((i+1)/16.0), 1) * 256, //i%2 == 0 ? 0.1 : 10 
      b
    );
  } 
  img.loadPixels();
  for (int y = 0; y < img.height; y ++) {
    for (int x = 0; x < img.width; x ++) {
      if (x % 3 == 0 || y % 2 == 0)continue;
      if (x % 3 == 2) {
        img.pixels[x + y * img.width] = c[x/3];
      } else {
        img.pixels[x + y * img.width] = c[y/2];
      }
    }
  }
  img.updatePixels();
  img.save("grid.png");
  image(img, 0, 0, width, height);
}