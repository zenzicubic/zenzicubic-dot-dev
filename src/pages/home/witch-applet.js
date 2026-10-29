/**
 * This is the dynamic witch of Agnesi applet in the website's home page.
 * @author Zenzicubic
 * @license MIT
 */

// Constants
const timeFactor = 3e-4;
const scaleFac = 1.5;

// Curve drawing constants
const extent = 20,
      numCurveSegments = 250,
      invNumSegments = 1 / (numCurveSegments - 1);

// Graphics constants
const radOuter = 0.09, 
      radInner = 0.05,
      thickness = 0.04;

const curveCol = "#99c24d",
      constructionCol = "#ff6663",
      shapeAlpha = 0.4;

export default class WitchApplet {
    /**
     * Creates a new witch of Agnesi applet.
     * @param {HTMLCanvasElement} canvas Canvas to draw to.
     */
    constructor(canvas) {
        // Create canvas/context
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");

        // Initialize resize observer
        this.observer = new ResizeObserver(this.onResize.bind(this));
        this.observer.observe(this.canvas);
        this.time = 0;
    }

    /**
     * Resizes and updates the canvas transform when the canvas changes size.
     * @param {Array.<ResizeObserverEntry>} entries Resize observer entries to process. 
     */
    onResize(entries) {
        // Get width and height (take into account device pixel ratio)
        let bBox = entries[0].contentRect;
        let ratio = window.devicePixelRatio;
        this.width = bBox.width * ratio;
        this.height = bBox.height * ratio;

        // Compute scaling factors
        this.halfW = 0.5 * this.width;
        this.halfH = 0.5 * this.height;
        this.scale = Math.min(this.halfW, this.halfH) / scaleFac;

        // Resize canvas and transform canvas coordinate system
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        
        this.ctx.translate(this.halfW, this.halfH);
        this.ctx.scale(this.scale, -this.scale);
        this.ctx.translate(0, -1);

        // Start animation loop if it isn't already running
        if (!this.animFrame)
            this.mainLoop();
    }

    /**
     * Cleans up the applet when the parent component is unmounted.
     */
    dispose() {
        cancelAnimationFrame(this.animFrame);
        this.observer.unobserve(this.canvas);
    }

    /*
    Helper functions to shorten later code.
    */

    /**
     * Draws a vertical line with given Y-coordinate.
     * @param {Number} y Line's Y-coordinate. 
     */
    drawVerticalLine(y) {
        this.ctx.beginPath();
        this.ctx.moveTo(-extent, y);
        this.ctx.lineTo(extent, y);
        this.ctx.stroke();
    }

    /**
     * Draws a circle to the canvas.
     * @param {Number} x Circle's center X-coordinate. 
     * @param {Number} y Circle's center Y-coordinate.
     * @param {Number} r Circle's radius.
     * @param {Boolean} filled Whether it is filled; defaults to true.
     */
    drawCircle(x, y, r, filled = true) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        if (filled) {
            this.ctx.fill();
        } else {
            this.ctx.stroke();
        }
    }

    /**
     * Sets the canvas's fill and stroke color simultaneously, to shorten 
     * some of the drawing code.
     * @param {String} color Fill/stroke color to set.
     */
    setColor(color) {
        this.ctx.fillStyle = this.ctx.strokeStyle = color;
    }

    drawMarker(x, y, color) {
        this.setColor(color);
        this.drawCircle(x, y, radOuter);
        this.setColor("white");
        this.drawCircle(x, y, radInner);
    }

    /*
    Drawing the witch of Agnesi and its construction.
    */

    /**
     * Computes the geometric parameters of the curve's construction.
     */
    computeCurveParameters() {
        this.circPtX = Math.cos(this.time);
        this.circPtY = Math.sin(this.time) + 1;
        this.curvePtX = 2 * this.circPtX / this.circPtY;
    }

    /**
     * Draws the locus of the construction points, or in other words, the 
     * witch of Agnesi for the given circle.
     */
    drawLocus() {
        let x, y;
        this.setColor(curveCol);
        this.ctx.beginPath();
        for (let i = 0; i < numCurveSegments; i ++) {
            x = (2 * i * invNumSegments - 1) * extent;
            y = 8 / (4 + x * x);
            this.ctx.lineTo(x, y);
        }
        this.ctx.stroke();
    }

    /**
     * Draws the lines and points for the construction, as well as the locus 
     * of the points it produces.
     */
    drawConstruction() {
        // Fill in triangle
        this.setColor(constructionCol);
        this.ctx.globalAlpha = shapeAlpha;
        this.ctx.beginPath();
        this.ctx.moveTo(this.circPtX,  this.circPtY);
        this.ctx.lineTo(this.curvePtX, this.circPtY);
        this.ctx.lineTo(this.curvePtX, 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;

        // Draw lines of construction
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.curvePtX, 2);
        this.ctx.lineTo(this.curvePtX, this.circPtY);
        this.ctx.lineTo(this.circPtX,  this.circPtY);
        this.ctx.stroke();

        // Draw construction points
        this.drawMarker(0,             0,            constructionCol);
        this.drawMarker(this.circPtX,  this.circPtY, constructionCol);
        this.drawMarker(this.curvePtX, 2,            constructionCol);
        
        // Draw locus and tracing point
        this.drawLocus();
        this.drawMarker(this.curvePtX, this.circPtY, curveCol);
    }

    /**
     * This is the main animation loop.
     * @param {DOMHighResTimeStamp} currentTime Current frame time, in milliseconds.
     */
    mainLoop(currentTime) {
        this.ctx.clearRect(-this.halfW, -this.halfH, this.width, this.height);
        this.ctx.lineWidth = thickness;
        this.ctx.lineJoin = "round";

        // Draw unit circle
        this.setColor("white");
        this.ctx.globalAlpha = shapeAlpha;
        this.drawCircle(0, 1, 1);
        this.ctx.globalAlpha = 1;
        this.drawCircle(0, 1, 1, false);

        // Draw tangents
        this.drawVerticalLine(0);
        this.drawVerticalLine(2);

        // Compute curve parameters and draw construction/locus
        this.computeCurveParameters();
        this.drawConstruction();

        // Animate
        if (this.prevTime) 
            this.time += (currentTime - this.prevTime) * timeFactor;
        this.prevTime = currentTime;
        this.animFrame = requestAnimationFrame(this.mainLoop.bind(this));
    }
}