function setup() {
createCanvas(500,500);
}

function draw() {
clear();
let s = 0;
let z = 0;
for (let i = 0; i<12; i++){
  for (let j = 0; j<12; j++){
    let r = HSVtoRGB(allSlicesSmall[s], 1, 1).r;
    let g = HSVtoRGB(allSlicesSmall[s], 1, 1).g;
    let b = HSVtoRGB(allSlicesSmall[s], 1, 1).b;

    if (z === 70 || z === 71 || z === 80 || z === 81 || z === 90 || z === 91 || z === 92 || z === 100 || z === 101 || z === 104 || z === 110 || z === 111 || z === 116 || z === 121 || z === 122 || z === 123 || z === 124 || z === 125 || z === 126 || z === 127 || z === 128 || z === 129 || z === 130 || z === 131){
      fill(255,255,255);
      stroke(255,255,255);
    } else {
      fill(r,g,b);
      stroke (0,0,0);
    }


    rect(i*40, j*40, 37, 37);
      if (s<32){
        s++;
      } else {
        s=0;
      }
      z++;
    }
  }
}
/*text(s,300,300);
let w = allSlices[0];
text(w,400,400);
let h = hash;
text(h,0,500);*/



function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
