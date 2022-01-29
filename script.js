let inp0 = document.getElementById('input0');
let inp1 = document.getElementById('input1');
let kaisu = 1;
let hensuName = [0];
let five = [5, 10, 15, 20, 25];
let mx = 0,
  my = 0;
let bairitu = 50;
const kugiri = (kazu, dan) => {
  let zatu = kazu / dan;
  zatu = Math.floor(zatu);
  return (zatu / dan) * dan ** 2;
};
const i = {
  plus: (a, b) => {
    let re = [a[0] + b[0], a[1] + b[1]];
    return re;
  },
  hang: (a, b) => {
    let re = [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
    return re;
  },
};
const mh = (arr) => {
  let z = arr;
  for (let a = 0; a <= 5; a++) {
    if (z[0] ** 2 + z[1] ** 2 < 4) {
      let jijo = i.hang(z, z);
      z = i.plus(jijo, arr);
    }
  }
  return z[0] ** 2 + z[1] ** 2 < 4;
};
window.addEventListener('keydown', (e) => {
  if (e.key === 'w') {
    my += 125 / bairitu;
  }
  if (e.key === 's') {
    my -= 125 / bairitu;
  }
  if (e.key === 'd') {
    mx += 125 / bairitu;
  }
  if (e.key === 'a') {
    mx -= 125 / bairitu;
  }
  if (e.key === 'e') {
    bairitu += 10;
  }
  if (e.key === 'q') {
    if (bairitu > 10) {
      bairitu -= 10;
    }
  }
  if (bairitu === 50) {
    mx = kugiri(mx, 125 / bairitu);
    my = kugiri(my, 125 / bairitu);
  }
});
inp1.addEventListener('click', () => {
  let hantei = 0;
  if (!hensuName.includes(inp0.value)) {
    if (inp0.value.length != 0) {
      eval('var ' + inp0.value + '=0');
      let elm = document.createElement('td');
      elm.innerText = inp0.value;
      hensuName.push(inp0.value);
      document.getElementById('rone').appendChild(elm);

      elm = document.createElement('td');
      elm.setAttribute('id', kaisu);
      document.getElementById('rtwe').appendChild(elm);

      elm = document.createElement('input');
      elm.setAttribute('id', kaisu * -1);
      elm.setAttribute('class', 'inp');
      elm.setAttribute('type', 'range');
      elm.setAttribute('min', '-10');
      elm.setAttribute('max', '10');
      elm.setAttribute('step', '0.01');
      elm.setAttribute('value', '0');
      document.getElementById(kaisu).appendChild(elm);

      elm = document.createElement('td');
      elm.innerText = eval(inp0.value);
      elm.setAttribute('id', hensuName[kaisu]);
      document.getElementById('rthree').appendChild(elm);

      elm = document.createElement('option');
      //elm.setAttribute("id",kaisu)
      elm.innerText = inp0.value;
      document.getElementById('movement').appendChild(elm);
      kaisu++;
    } else {
      alert('この変数名はすでに使われています');
    }
  }
  inp0.value = '';
});

document.getElementById('rtwe').addEventListener(
  'mousemove',
  (douki = () => {
    for (let sinji = 1; sinji < kaisu; sinji++) {
      document.getElementById(hensuName[sinji]).innerText =
        document.getElementById(sinji * -1).value;
      eval(
        'let ' +
          hensuName[sinji] +
          '=' +
          document.getElementById(sinji * -1).value
      );
      eval(
        hensuName[sinji] +
          '=' +
          parseFloat(document.getElementById(hensuName[sinji]).innerText)
      );
    }
  })
);

let sahen = 0,
  uhen = 0,
  sel0 = 0;
let x = 0,
  y = 0;
document.getElementById('input3').addEventListener('click', () => {
  sahen = document.getElementById('input2').value;
  uhen = document.getElementById('input4').value;
  sel0 = document.getElementById('sel0').value;
  if (sel0 === '=') {
    sel0 = 1;
  }
  if (sel0 === '<') {
    sel0 = 2;
  }
  if (sel0 === '>') {
    sel0 = 3;
  }
  if (sel0 === '≦') {
    sel0 = 4;
  }
  if (sel0 === '≧') {
    sel0 = 5;
  }
});

let ctx = document.getElementById('can1').getContext('2d');
let test = 0;
window.addEventListener(
  'mousemove',
  (main = () => {
    test = document.getElementById('inpt').value;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 600, 600);

    for (let Py = -250; Py <= 250; Py = Py + 5) {
      for (let Px = -250; Px <= 250; Px = Px + 5) {
        ctx.fillStyle = 'black';
        let x = Px / bairitu + mx,
          y = Py / bairitu + my;
        if (x === 0 || y === 0) {
          ctx.stokeStyle = 'black';
          ctx.lineWidth = '0.5';
          ctx.strokeRect(Px + 250, Py * -1 + 250, 5, 5);
        }
      }
    }

    if (sel0 === 1 || sel0 === 4 || sel0 === 5) {
      for (let Py = -250; Py <= 250; Py = Py + 5) {
        for (let Px = -250; Px <= 250; Px = Px + 5) {
          ctx.fillStyle = 'black';
          let x = Px / bairitu + mx,
            y = Py / bairitu + my;
          hantei = eval(document.getElementById('input2').value);
          if (
            eval(uhen) - eval(sahen) < test / bairitu &&
            eval(uhen) - eval(sahen) > -test / bairitu
          ) {
            ctx.stokeStyle = 'black';
            ctx.lineWidth = '1';
            ctx.strokeRect(Px + 250, Py * -1 + 250, 5, 5);
          }
        }
      }
    }

    if (sel0 === 2 || sel0 === 4) {
      for (let Py = -250; Py <= 250; Py = Py + 5) {
        for (let Px = -250; Px <= 250; Px = Px + 5) {
          ctx.fillStyle = 'black';
          let x = Px / bairitu + mx,
            y = Py / bairitu + my;
          hantei = eval(document.getElementById('input2').value);
          if (eval(uhen) < eval(sahen)) {
            ctx.stokeStyle = 'black';
            ctx.lineWidth = '1';
            ctx.strokeRect(Px + 250, Py * -1 + 250, 5, 5);
          }
        }
      }
    }

    if (sel0 === 3 || sel0 === 5) {
      for (let Py = -250; Py <= 250; Py = Py + 5) {
        for (let Px = -250; Px <= 250; Px = Px + 5) {
          ctx.fillStyle = 'black';
          let x = Px / bairitu + mx,
            y = Py / bairitu + my;
          hantei = eval(document.getElementById('input2').value);
          if (eval(uhen) > eval(sahen)) {
            ctx.stokeStyle = 'black';
            ctx.lineWidth = '1';
            ctx.strokeRect(Px + 250, Py * -1 + 250, 5, 5);
          }
        }
      }
    }

    if (true) {
      ctx.strokeRect(0, 0, 500, 500);
    }
  })
);

main();

document.getElementById('can1').addEventListener('mousemove', (e) => {
  let posx = Math.round(((e.offsetX - 250) * 100) / bairitu) / 100;
  let posy = Math.round(((e.offsetY - 250) * -100) / bairitu) / 100;
  document.getElementById('zahyo').innerText =
    '(' +
    Math.round((posx + mx) * 100) / 100 +
    ',' +
    Math.round((posy + my) * 100) / 100 +
    ')';
});

setInterval(main, 100);
let phase = 1,
  num = 0;

const movement = () => {
  if (
    document.getElementById('ch').checked &&
    document.getElementById('movement').value.length != 0
  ) {
    if (num >= 10) {
      phase = 2;
    }
    if (num <= -10) {
      phase = 1;
    }
    if (phase === 1) {
      num += 0.1;
    }
    if (phase === 2) {
      num -= 0.1;
    }
    document.getElementById(
      eval(hensuName.indexOf(document.getElementById('movement').value) * -1)
    ).value = num;
    douki();
    main();
  }
};

setInterval(movement, 1);
document.getElementById('shokika').addEventListener('click', () => {
  mx = 0;
  my = 0;
  bairitu = 50;
});
