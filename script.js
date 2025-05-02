const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// let gradient = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
let gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 100, canvas.width / 2, canvas.height / 2, 800);

// let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, 'cyan');
gradient.addColorStop(0.2, 'blue');
gradient.addColorStop(0.4, 'cyan');
gradient.addColorStop(0.6, 'blue');
gradient.addColorStop(0.8, 'cyan');
gradient.addColorStop(1, 'blue');

class Symbol {
    constructor(x, y, fontSize, canvasHeight) {
        // this.characters = '0123456789DENNIS';
        this.characters = '0123456789';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
    }
    draw(context) {
        this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
            this.y = 0;
        } else {
            this.y += 1;
        }
    }
}

class Effect {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        // number of columns depends on width of canvas and font size
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();
        console.log(this.symbols);
    }
    #initialize() { // the hashtag makes the method private (ABSTRACTION)
        for (let i = 0; i < this.columns; i++) {
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
    }
    resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();

    }
}

const effect = new Effect(canvas.width, canvas.height);
let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / (fps);
let timer = 0;

function animate(timeStamp) {
    const timeChange = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame) {
        // ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.textAlign = 'center';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // ctx.fillStyle = 'green';
        ctx.fillStyle = gradient;
        ctx.font = effect.fontSize + 'px monospace';
        effect.symbols.forEach(sym => sym.draw(ctx));
    } else {
        timer += timeChange;
    }

    requestAnimationFrame(animate);
}
animate(0);

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect.resize(canvas.width, canvas.height);
})