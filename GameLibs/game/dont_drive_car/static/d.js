﻿var __extends, CarState, Car, GameState, GameScene, LouFang, XianJing, Explosion, LoadingState, Game; !
function() {
	var c, d, e, a = this,
	b = b || {};
	for (b.WEBGL_RENDERER = 0, b.CANVAS_RENDERER = 1, b.VERSION = "v1.6.1", b.blendModes = {
		NORMAL: 0,
		ADD: 1,
		MULTIPLY: 2,
		SCREEN: 3,
		OVERLAY: 4,
		DARKEN: 5,
		LIGHTEN: 6,
		COLOR_DODGE: 7,
		COLOR_BURN: 8,
		HARD_LIGHT: 9,
		SOFT_LIGHT: 10,
		DIFFERENCE: 11,
		EXCLUSION: 12,
		HUE: 13,
		SATURATION: 14,
		COLOR: 15,
		LUMINOSITY: 16
	},
	b.scaleModes = {
		DEFAULT: 0,
		LINEAR: 0,
		NEAREST: 1
	},
	b._UID = 0, "undefined" != typeof Float32Array ? (b.Float32Array = Float32Array, b.Uint16Array = Uint16Array) : (b.Float32Array = Array, b.Uint16Array = Array), b.INTERACTION_FREQUENCY = 30, b.AUTO_PREVENT_DEFAULT = !0, b.RAD_TO_DEG = 180 / Math.PI, b.DEG_TO_RAD = Math.PI / 180, b.dontSayHello = !1, b.sayHello = function(a) {
		if (!b.dontSayHello) {
			if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
				var c = ["%c %c %c Pixi.js " + b.VERSION + " - " + a + " %c  %c  http://www.pixijs.com/ %c %c ♥%c♥%c♥ ", "background: #ff66a5", "background: #ff66a5", "color: #ff66a5; background: #030307;", "background: #ff66a5", "background: #ffc3dc", "background: #ff66a5", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff"];
				console.log.apply(console, c)
			} else window["console"] && console.log("Pixi.js " + b.VERSION + " - http://www.pixijs.com/");
			b.dontSayHello = !0
		}
	},
	b.Point = function(a, b) {
		this.x = a || 0,
		this.y = b || 0
	},
	b.Point.prototype.clone = function() {
		return new b.Point(this.x, this.y)
	},
	b.Point.prototype.set = function(a, b) {
		this.x = a || 0,
		this.y = b || (0 !== b ? this.x: 0)
	},
	b.Point.prototype.constructor = b.Point, b.Rectangle = function(a, b, c, d) {
		this.x = a || 0,
		this.y = b || 0,
		this.width = c || 0,
		this.height = d || 0
	},
	b.Rectangle.prototype.clone = function() {
		return new b.Rectangle(this.x, this.y, this.width, this.height)
	},
	b.Rectangle.prototype.contains = function(a, b) {
		var c, d;
		return this.width <= 0 || this.height <= 0 ? !1 : (c = this.x, a >= c && a <= c + this.width && (d = this.y, b >= d && b <= d + this.height) ? !0 : !1)
	},
	b.Rectangle.prototype.constructor = b.Rectangle, b.EmptyRectangle = new b.Rectangle(0, 0, 0, 0), b.Polygon = function(a) {
		var c, d, e;
		if (a instanceof Array || (a = Array.prototype.slice.call(arguments)), "number" == typeof a[0]) {
			for (c = [], d = 0, e = a.length; e > d; d += 2) c.push(new b.Point(a[d], a[d + 1]));
			a = c
		}
		this.points = a
	},
	b.Polygon.prototype.clone = function() {
		var c, a = [];
		for (c = 0; c < this.points.length; c++) a.push(this.points[c].clone());
		return new b.Polygon(a)
	},
	b.Polygon.prototype.contains = function(a, b) {
		var d, e, f, g, h, i, j, c = !1;
		for (d = 0, e = this.points.length - 1; d < this.points.length; e = d++) f = this.points[d].x,
		g = this.points[d].y,
		h = this.points[e].x,
		i = this.points[e].y,
		j = g > b != i > b && (h - f) * (b - g) / (i - g) + f > a,
		j && (c = !c);
		return c
	},
	b.Polygon.prototype.constructor = b.Polygon, b.Circle = function(a, b, c) {
		this.x = a || 0,
		this.y = b || 0,
		this.radius = c || 0
	},
	b.Circle.prototype.clone = function() {
		return new b.Circle(this.x, this.y, this.radius)
	},
	b.Circle.prototype.contains = function(a, b) {
		if (this.radius <= 0) return ! 1;
		var c = this.x - a,
		d = this.y - b,
		e = this.radius * this.radius;
		return c *= c,
		d *= d,
		e >= c + d
	},
	b.Circle.prototype.getBounds = function() {
		return new b.Rectangle(this.x - this.radius, this.y - this.radius, this.width, this.height)
	},
	b.Circle.prototype.constructor = b.Circle, b.Ellipse = function(a, b, c, d) {
		this.x = a || 0,
		this.y = b || 0,
		this.width = c || 0,
		this.height = d || 0
	},
	b.Ellipse.prototype.clone = function() {
		return new b.Ellipse(this.x, this.y, this.width, this.height)
	},
	b.Ellipse.prototype.contains = function(a, b) {
		if (this.width <= 0 || this.height <= 0) return ! 1;
		var c = (a - this.x) / this.width,
		d = (b - this.y) / this.height;
		return c *= c,
		d *= d,
		1 >= c + d
	},
	b.Ellipse.prototype.getBounds = function() {
		return new b.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height)
	},
	b.Ellipse.prototype.constructor = b.Ellipse, b.Matrix = function() {
		this.a = 1,
		this.b = 0,
		this.c = 0,
		this.d = 1,
		this.tx = 0,
		this.ty = 0
	},
	b.Matrix.prototype.fromArray = function(a) {
		this.a = a[0],
		this.b = a[1],
		this.c = a[3],
		this.d = a[4],
		this.tx = a[2],
		this.ty = a[5]
	},
	b.Matrix.prototype.toArray = function(a) {
		this.array || (this.array = new Float32Array(9));
		var b = this.array;
		return a ? (b[0] = this.a, b[1] = this.c, b[2] = 0, b[3] = this.b, b[4] = this.d, b[5] = 0, b[6] = this.tx, b[7] = this.ty, b[8] = 1) : (b[0] = this.a, b[1] = this.b, b[2] = this.tx, b[3] = this.c, b[4] = this.d, b[5] = this.ty, b[6] = 0, b[7] = 0, b[8] = 1),
		b
	},
	b.identityMatrix = new b.Matrix, b.determineMatrixArrayType = function() {
		return "undefined" != typeof Float32Array ? Float32Array: Array
	},
	b.Matrix2 = b.determineMatrixArrayType(), b.DisplayObject = function() {
		this.position = new b.Point,
		this.scale = new b.Point(1, 1),
		this.pivot = new b.Point(0, 0),
		this.rotation = 0,
		this.alpha = 1,
		this.visible = !0,
		this.hitArea = null,
		this.buttonMode = !1,
		this.renderable = !1,
		this.parent = null,
		this.stage = null,
		this.worldAlpha = 1,
		this._interactive = !1,
		this.defaultCursor = "pointer",
		this.worldTransform = new b.Matrix,
		this.color = [],
		this.dynamic = !0,
		this._sr = 0,
		this._cr = 1,
		this.filterArea = null,
		this._bounds = new b.Rectangle(0, 0, 1, 1),
		this._currentBounds = null,
		this._mask = null,
		this._cacheAsBitmap = !1,
		this._cacheIsDirty = !1
	},
	b.DisplayObject.prototype.constructor = b.DisplayObject, b.DisplayObject.prototype.setInteractive = function(a) {
		this.interactive = a
	},
	Object.defineProperty(b.DisplayObject.prototype, "interactive", {
		get: function() {
			return this._interactive
		},
		set: function(a) {
			this._interactive = a,
			this.stage && (this.stage.dirty = !0)
		}
	}), Object.defineProperty(b.DisplayObject.prototype, "worldVisible", {
		get: function() {
			var a = this;
			do {
				if (!a.visible) return ! 1;
				a = a.parent
			} while ( a );
			return ! 0
		}
	}), Object.defineProperty(b.DisplayObject.prototype, "mask", {
		get: function() {
			return this._mask
		},
		set: function(a) {
			this._mask && (this._mask.isMask = !1),
			this._mask = a,
			this._mask && (this._mask.isMask = !0)
		}
	}), Object.defineProperty(b.DisplayObject.prototype, "filters", {
		get: function() {
			return this._filters
		},
		set: function(a) {
			var b, c, d, e;
			if (a) {
				for (b = [], c = 0; c < a.length; c++) for (d = a[c].passes, e = 0; e < d.length; e++) b.push(d[e]);
				this._filterBlock = {
					target: this,
					filterPasses: b
				}
			}
			this._filters = a
		}
	}), Object.defineProperty(b.DisplayObject.prototype, "cacheAsBitmap", {
		get: function() {
			return this._cacheAsBitmap
		},
		set: function(a) {
			this._cacheAsBitmap !== a && (a ? this._generateCachedSprite() : this._destroyCachedSprite(), this._cacheAsBitmap = a)
		}
	}), b.DisplayObject.prototype.updateTransform = function() {
		var a, b, c, d, e, f, g, h, i, j, k, l, m, n;
		this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation)),
		a = this.parent.worldTransform,
		b = this.worldTransform,
		c = this.pivot.x,
		d = this.pivot.y,
		e = this._cr * this.scale.x,
		f = -this._sr * this.scale.y,
		g = this._sr * this.scale.x,
		h = this._cr * this.scale.y,
		i = this.position.x - e * c - d * f,
		j = this.position.y - h * d - c * g,
		k = a.a,
		l = a.b,
		m = a.c,
		n = a.d,
		b.a = k * e + l * g,
		b.b = k * f + l * h,
		b.tx = k * i + l * j + a.tx,
		b.c = m * e + n * g,
		b.d = m * f + n * h,
		b.ty = m * i + n * j + a.ty,
		this.worldAlpha = this.alpha * this.parent.worldAlpha
	},
	b.DisplayObject.prototype.getBounds = function(a) {
		return a = a,
		b.EmptyRectangle
	},
	b.DisplayObject.prototype.getLocalBounds = function() {
		return this.getBounds(b.identityMatrix)
	},
	b.DisplayObject.prototype.setStageReference = function(a) {
		this.stage = a,
		this._interactive && (this.stage.dirty = !0)
	},
	b.DisplayObject.prototype.generateTexture = function(a) {
		var c = this.getLocalBounds(),
		d = new b.RenderTexture(0 | c.width, 0 | c.height, a);
		return d.render(this, new b.Point( - c.x, -c.y)),
		d
	},
	b.DisplayObject.prototype.updateCache = function() {
		this._generateCachedSprite()
	},
	b.DisplayObject.prototype._renderCachedSprite = function(a) {
		this._cachedSprite.worldAlpha = this.worldAlpha,
		a.gl ? b.Sprite.prototype._renderWebGL.call(this._cachedSprite, a) : b.Sprite.prototype._renderCanvas.call(this._cachedSprite, a)
	},
	b.DisplayObject.prototype._generateCachedSprite = function() {
		var a, c, d;
		this._cacheAsBitmap = !1,
		a = this.getLocalBounds(),
		this._cachedSprite ? this._cachedSprite.texture.resize(0 | a.width, 0 | a.height) : (c = new b.RenderTexture(0 | a.width, 0 | a.height), this._cachedSprite = new b.Sprite(c), this._cachedSprite.worldTransform = this.worldTransform),
		d = this._filters,
		this._filters = null,
		this._cachedSprite.filters = d,
		this._cachedSprite.texture.render(this, new b.Point( - a.x, -a.y)),
		this._cachedSprite.anchor.x = -(a.x / a.width),
		this._cachedSprite.anchor.y = -(a.y / a.height),
		this._filters = d,
		this._cacheAsBitmap = !0
	},
	b.DisplayObject.prototype._destroyCachedSprite = function() {
		this._cachedSprite && (this._cachedSprite.texture.destroy(!0), this._cachedSprite = null)
	},
	b.DisplayObject.prototype._renderWebGL = function(a) {
		a = a
	},
	b.DisplayObject.prototype._renderCanvas = function(a) {
		a = a
	},
	Object.defineProperty(b.DisplayObject.prototype, "x", {
		get: function() {
			return this.position.x
		},
		set: function(a) {
			this.position.x = a
		}
	}), Object.defineProperty(b.DisplayObject.prototype, "y", {
		get: function() {
			return this.position.y
		},
		set: function(a) {
			this.position.y = a
		}
	}), b.DisplayObjectContainer = function() {
		b.DisplayObject.call(this),
		this.children = []
	},
	b.DisplayObjectContainer.prototype = Object.create(b.DisplayObject.prototype), b.DisplayObjectContainer.prototype.constructor = b.DisplayObjectContainer, Object.defineProperty(b.DisplayObjectContainer.prototype, "width", {
		get: function() {
			return this.scale.x * this.getLocalBounds().width
		},
		set: function(a) {
			var b = this.getLocalBounds().width;
			this.scale.x = 0 !== b ? a / (b / this.scale.x) : 1,
			this._width = a
		}
	}), Object.defineProperty(b.DisplayObjectContainer.prototype, "height", {
		get: function() {
			return this.scale.y * this.getLocalBounds().height
		},
		set: function(a) {
			var b = this.getLocalBounds().height;
			this.scale.y = 0 !== b ? a / (b / this.scale.y) : 1,
			this._height = a
		}
	}), b.DisplayObjectContainer.prototype.addChild = function(a) {
		return this.addChildAt(a, this.children.length)
	},
	b.DisplayObjectContainer.prototype.addChildAt = function(a, b) {
		if (b >= 0 && b <= this.children.length) return a.parent && a.parent.removeChild(a),
		a.parent = this,
		this.children.splice(b, 0, a),
		this.stage && a.setStageReference(this.stage),
		a;
		throw new Error(a + " The index " + b + " supplied is out of bounds " + this.children.length)
	},
	b.DisplayObjectContainer.prototype.swapChildren = function(a, b) {
		var c, d;
		if (a !== b) {
			if (c = this.children.indexOf(a), d = this.children.indexOf(b), 0 > c || 0 > d) throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
			this.children[c] = b,
			this.children[d] = a
		}
	},
	b.DisplayObjectContainer.prototype.getChildAt = function(a) {
		if (a >= 0 && a < this.children.length) return this.children[a];
		throw new Error("Supplied index does not exist in the child list, or the supplied DisplayObject must be a child of the caller")
	},
	b.DisplayObjectContainer.prototype.removeChild = function(a) {
		return this.removeChildAt(this.children.indexOf(a))
	},
	b.DisplayObjectContainer.prototype.removeChildAt = function(a) {
		var b = this.getChildAt(a);
		return this.stage && b.removeStageReference(),
		b.parent = void 0,
		this.children.splice(a, 1),
		b
	},
	b.DisplayObjectContainer.prototype.removeChildren = function(a, b) {
		var f, g, h, c = a || 0,
		d = "number" == typeof b ? b: this.children.length,
		e = d - c;
		if (e > 0 && d >= e) {
			for (f = this.children.splice(c, e), g = 0; g < f.length; g++) h = f[g],
			this.stage && h.removeStageReference(),
			h.parent = void 0;
			return f
		}
		throw new Error("Range Error, numeric values are outside the acceptable range")
	},
	b.DisplayObjectContainer.prototype.updateTransform = function() {
		if (this.visible && (b.DisplayObject.prototype.updateTransform.call(this), !this._cacheAsBitmap)) for (var a = 0,
		c = this.children.length; c > a; a++) this.children[a].updateTransform()
	},
	b.DisplayObjectContainer.prototype.getBounds = function(a) {
		var c, d, e, f, g, h, i, j, k, l, m, n, o;
		if (0 === this.children.length) return b.EmptyRectangle;
		for (a && (c = this.worldTransform, this.worldTransform = a, this.updateTransform(), this.worldTransform = c), d = 1 / 0, e = 1 / 0, f = -1 / 0, g = -1 / 0, k = !1, l = 0, m = this.children.length; m > l; l++) n = this.children[l],
		n.visible && (k = !0, h = this.children[l].getBounds(a), d = d < h.x ? d: h.x, e = e < h.y ? e: h.y, i = h.width + h.x, j = h.height + h.y, f = f > i ? f: i, g = g > j ? g: j);
		return k ? (o = this._bounds, o.x = d, o.y = e, o.width = f - d, o.height = g - e, o) : b.EmptyRectangle
	},
	b.DisplayObjectContainer.prototype.getLocalBounds = function() {
		var c, d, e, a = this.worldTransform;
		for (this.worldTransform = b.identityMatrix, c = 0, d = this.children.length; d > c; c++) this.children[c].updateTransform();
		return e = this.getBounds(),
		this.worldTransform = a,
		e
	},
	b.DisplayObjectContainer.prototype.setStageReference = function(a) {
		var b, c, d;
		for (this.stage = a, this._interactive && (this.stage.dirty = !0), b = 0, c = this.children.length; c > b; b++) d = this.children[b],
		d.setStageReference(a)
	},
	b.DisplayObjectContainer.prototype.removeStageReference = function() {
		var a, b, c;
		for (a = 0, b = this.children.length; b > a; a++) c = this.children[a],
		c.removeStageReference();
		this._interactive && (this.stage.dirty = !0),
		this.stage = null
	},
	b.DisplayObjectContainer.prototype._renderWebGL = function(a) {
		if (this.visible && !(this.alpha <= 0)) {
			if (this._cacheAsBitmap) return this._renderCachedSprite(a),
			void 0;
			var b, c;
			if (this._mask || this._filters) {
				for (this._filters && (a.spriteBatch.flush(), a.filterManager.pushFilter(this._filterBlock)), this._mask && (a.spriteBatch.stop(), a.maskManager.pushMask(this.mask, a), a.spriteBatch.start()), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a);
				a.spriteBatch.stop(),
				this._mask && a.maskManager.popMask(this._mask, a),
				this._filters && a.filterManager.popFilter(),
				a.spriteBatch.start()
			} else for (b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a)
		}
	},
	b.DisplayObjectContainer.prototype._renderCanvas = function(a) {
		var b, c, d;
		if (this.visible !== !1 && 0 !== this.alpha) {
			if (this._cacheAsBitmap) return this._renderCachedSprite(a),
			void 0;
			for (this._mask && a.maskManager.pushMask(this._mask, a.context), b = 0, c = this.children.length; c > b; b++) d = this.children[b],
			d._renderCanvas(a);
			this._mask && a.maskManager.popMask(a.context)
		}
	},
	b.Sprite = function(a) {
		b.DisplayObjectContainer.call(this),
		this.anchor = new b.Point,
		this.texture = a,
		this._width = 0,
		this._height = 0,
		this.tint = 16777215,
		this.blendMode = b.blendModes.NORMAL,
		a.baseTexture.hasLoaded ? this.onTextureUpdate() : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind)),
		this.renderable = !0
	},
	b.Sprite.prototype = Object.create(b.DisplayObjectContainer.prototype), b.Sprite.prototype.constructor = b.Sprite, Object.defineProperty(b.Sprite.prototype, "width", {
		get: function() {
			return this.scale.x * this.texture.frame.width
		},
		set: function(a) {
			this.scale.x = a / this.texture.frame.width,
			this._width = a
		}
	}), Object.defineProperty(b.Sprite.prototype, "height", {
		get: function() {
			return this.scale.y * this.texture.frame.height
		},
		set: function(a) {
			this.scale.y = a / this.texture.frame.height,
			this._height = a
		}
	}), b.Sprite.prototype.setTexture = function(a) {
		this.texture = a,
		this.cachedTint = 16777215
	},
	b.Sprite.prototype.onTextureUpdate = function() {
		this._width && (this.scale.x = this._width / this.texture.frame.width),
		this._height && (this.scale.y = this._height / this.texture.frame.height)
	},
	b.Sprite.prototype.getBounds = function(a) {
		var A, b = this.texture.frame.width,
		c = this.texture.frame.height,
		d = b * (1 - this.anchor.x),
		e = b * -this.anchor.x,
		f = c * (1 - this.anchor.y),
		g = c * -this.anchor.y,
		h = a || this.worldTransform,
		i = h.a,
		j = h.c,
		k = h.b,
		l = h.d,
		m = h.tx,
		n = h.ty,
		o = i * e + k * g + m,
		p = l * g + j * e + n,
		q = i * d + k * g + m,
		r = l * g + j * d + n,
		s = i * d + k * f + m,
		t = l * f + j * d + n,
		u = i * e + k * f + m,
		v = l * f + j * e + n,
		w = -1 / 0,
		x = -1 / 0,
		y = 1 / 0,
		z = 1 / 0;
		return y = y > o ? o: y,
		y = y > q ? q: y,
		y = y > s ? s: y,
		y = y > u ? u: y,
		z = z > p ? p: z,
		z = z > r ? r: z,
		z = z > t ? t: z,
		z = z > v ? v: z,
		w = o > w ? o: w,
		w = q > w ? q: w,
		w = s > w ? s: w,
		w = u > w ? u: w,
		x = p > x ? p: x,
		x = r > x ? r: x,
		x = t > x ? t: x,
		x = v > x ? v: x,
		A = this._bounds,
		A.x = y,
		A.width = w - y,
		A.y = z,
		A.height = x - z,
		this._currentBounds = A,
		A
	},
	b.Sprite.prototype._renderWebGL = function(a) {
		var b, c, d;
		if (this.visible && !(this.alpha <= 0)) if (this._mask || this._filters) {
			for (d = a.spriteBatch, this._filters && (d.flush(), a.filterManager.pushFilter(this._filterBlock)), this._mask && (d.stop(), a.maskManager.pushMask(this.mask, a), d.start()), d.render(this), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a);
			d.stop(),
			this._mask && a.maskManager.popMask(this._mask, a),
			this._filters && a.filterManager.popFilter(),
			d.start()
		} else for (a.spriteBatch.render(this), b = 0, c = this.children.length; c > b; b++) this.children[b]._renderWebGL(a)
	},
	b.Sprite.prototype._renderCanvas = function(a) {
		var c, d, e, f;
		if (this.visible !== !1 && 0 !== this.alpha) {
			for (this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, a.context.globalCompositeOperation = b.blendModesCanvas[a.currentBlendMode]), this._mask && a.maskManager.pushMask(this._mask, a.context), this.texture.valid && (a.context.globalAlpha = this.worldAlpha, a.roundPixels ? a.context.setTransform(this.worldTransform.a, this.worldTransform.c, this.worldTransform.b, this.worldTransform.d, 0 | this.worldTransform.tx, 0 | this.worldTransform.ty) : a.context.setTransform(this.worldTransform.a, this.worldTransform.c, this.worldTransform.b, this.worldTransform.d, this.worldTransform.tx, this.worldTransform.ty), a.smoothProperty && a.scaleMode !== this.texture.baseTexture.scaleMode && (a.scaleMode = this.texture.baseTexture.scaleMode, a.context[a.smoothProperty] = a.scaleMode === b.scaleModes.LINEAR), c = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width: this.anchor.x * -this.texture.frame.width, d = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height: this.anchor.y * -this.texture.frame.height, 16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = b.CanvasTinter.getTintedTexture(this, this.tint)), a.context.drawImage(this.tintedTexture, 0, 0, this.texture.crop.width, this.texture.crop.height, c, d, this.texture.crop.width, this.texture.crop.height)) : a.context.drawImage(this.texture.baseTexture.source, this.texture.crop.x, this.texture.crop.y, this.texture.crop.width, this.texture.crop.height, c, d, this.texture.crop.width, this.texture.crop.height)), e = 0, f = this.children.length; f > e; e++) this.children[e]._renderCanvas(a);
			this._mask && a.maskManager.popMask(a.context)
		}
	},
	b.Sprite.fromFrame = function(a) {
		var c = b.TextureCache[a];
		if (!c) throw new Error('The frameId "' + a + '" does not exist in the texture cache' + this);
		return new b.Sprite(c)
	},
	b.Sprite.fromImage = function(a, c, d) {
		var e = b.Texture.fromImage(a, c, d);
		return new b.Sprite(e)
	},
	b.SpriteBatch = function(a) {
		b.DisplayObjectContainer.call(this),
		this.textureThing = a,
		this.ready = !1
	},
	b.SpriteBatch.prototype = Object.create(b.DisplayObjectContainer.prototype), b.SpriteBatch.constructor = b.SpriteBatch, b.SpriteBatch.prototype.initWebGL = function(a) {
		this.fastSpriteBatch = new b.WebGLFastSpriteBatch(a),
		this.ready = !0
	},
	b.SpriteBatch.prototype.updateTransform = function() {
		b.DisplayObject.prototype.updateTransform.call(this)
	},
	b.SpriteBatch.prototype._renderWebGL = function(a) { ! this.visible || this.alpha <= 0 || !this.children.length || (this.ready || this.initWebGL(a.gl), a.spriteBatch.stop(), a.shaderManager.setShader(a.shaderManager.fastShader), this.fastSpriteBatch.begin(this, a), this.fastSpriteBatch.render(this), a.spriteBatch.start())
	},
	b.SpriteBatch.prototype._renderCanvas = function(a) {
		var d, e, f, g, h, i, j, c = a.context;
		for (c.globalAlpha = this.worldAlpha, b.DisplayObject.prototype.updateTransform.call(this), d = this.worldTransform, e = !0, f = 0; f < this.children.length; f++) g = this.children[f],
		g.visible && (h = g.texture, i = h.frame, c.globalAlpha = this.worldAlpha * g.alpha, 0 === g.rotation % (2 * Math.PI) ? (e && (c.setTransform(d.a, d.c, d.b, d.d, d.tx, d.ty), e = !1), c.drawImage(h.baseTexture.source, i.x, i.y, i.width, i.height, 0 | g.anchor.x * -i.width * g.scale.x + g.position.x + .5, 0 | g.anchor.y * -i.height * g.scale.y + g.position.y + .5, i.width * g.scale.x, i.height * g.scale.y)) : (e || (e = !0), b.DisplayObject.prototype.updateTransform.call(g), j = g.worldTransform, a.roundPixels ? c.setTransform(j.a, j.c, j.b, j.d, 0 | j.tx, 0 | j.ty) : c.setTransform(j.a, j.c, j.b, j.d, j.tx, j.ty), c.drawImage(h.baseTexture.source, i.x, i.y, i.width, i.height, 0 | g.anchor.x * -i.width + .5, 0 | g.anchor.y * -i.height + .5, i.width, i.height)))
	},
	b.AbstractFilter = function(a, b) {
		this.passes = [this],
		this.shaders = [],
		this.dirty = !0,
		this.padding = 0,
		this.uniforms = b || {},
		this.fragmentSrc = a || []
	},
	b.FilterBlock = function() {
		this.visible = !0,
		this.renderable = !0
	},
	b.Text = function(a, c) {
		this.canvas = document.createElement("canvas"),
		this.context = this.canvas.getContext("2d"),
		b.Sprite.call(this, b.Texture.fromCanvas(this.canvas)),
		this.setText(a),
		this.setStyle(c)
	},
	b.Text.prototype = Object.create(b.Sprite.prototype), b.Text.prototype.constructor = b.Text, Object.defineProperty(b.Text.prototype, "width", {
		get: function() {
			return this.dirty && (this.updateText(), this.dirty = !1),
			this.scale.x * this.texture.frame.width
		},
		set: function(a) {
			this.scale.x = a / this.texture.frame.width,
			this._width = a
		}
	}), Object.defineProperty(b.Text.prototype, "height", {
		get: function() {
			return this.dirty && (this.updateText(), this.dirty = !1),
			this.scale.y * this.texture.frame.height
		},
		set: function(a) {
			this.scale.y = a / this.texture.frame.height,
			this._height = a
		}
	}), b.Text.prototype.setStyle = function(a) {
		a = a || {},
		a.font = a.font || "bold 20pt Arial",
		a.fill = a.fill || "black",
		a.align = a.align || "left",
		a.stroke = a.stroke || "black",
		a.strokeThickness = a.strokeThickness || 0,
		a.wordWrap = a.wordWrap || !1,
		a.wordWrapWidth = a.wordWrapWidth || 100,
		a.wordWrapWidth = a.wordWrapWidth || 100,
		a.dropShadow = a.dropShadow || !1,
		a.dropShadowAngle = a.dropShadowAngle || Math.PI / 6,
		a.dropShadowDistance = a.dropShadowDistance || 4,
		a.dropShadowColor = a.dropShadowColor || "black",
		this.style = a,
		this.dirty = !0
	},
	b.Text.prototype.setText = function(a) {
		this.text = a.toString() || " ",
		this.dirty = !0
	},
	b.Text.prototype.updateText = function() {
		var a, b, c, d, e, f, g, h, i, j, k, l, m;
		for (this.context.font = this.style.font, a = this.text, this.style.wordWrap && (a = this.wordWrap(this.text)), b = a.split(/(?:\r\n|\r|\n)/), c = [], d = 0, e = 0; e < b.length; e++) f = this.context.measureText(b[e]).width,
		c[e] = f,
		d = Math.max(d, f);
		if (g = d + this.style.strokeThickness, this.style.dropShadow && (g += this.style.dropShadowDistance), this.canvas.width = g + this.context.lineWidth, h = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness, i = h * b.length, this.style.dropShadow && (i += this.style.dropShadowDistance), this.canvas.height = i, navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "top", this.style.dropShadow) for (this.context.fillStyle = this.style.dropShadowColor, l = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance, m = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance, e = 0; e < b.length; e++) j = this.style.strokeThickness / 2,
		k = this.style.strokeThickness / 2 + e * h,
		"right" === this.style.align ? j += d - c[e] : "center" === this.style.align && (j += (d - c[e]) / 2),
		this.style.fill && this.context.fillText(b[e], j + l, k + m);
		for (this.context.fillStyle = this.style.fill, e = 0; e < b.length; e++) j = this.style.strokeThickness / 2,
		k = this.style.strokeThickness / 2 + e * h,
		"right" === this.style.align ? j += d - c[e] : "center" === this.style.align && (j += (d - c[e]) / 2),
		this.style.stroke && this.style.strokeThickness && this.context.strokeText(b[e], j, k),
		this.style.fill && this.context.fillText(b[e], j, k);
		this.updateTexture()
	},
	b.Text.prototype.updateTexture = function() {
		this.texture.baseTexture.width = this.canvas.width,
		this.texture.baseTexture.height = this.canvas.height,
		this.texture.crop.width = this.texture.frame.width = this.canvas.width,
		this.texture.crop.height = this.texture.frame.height = this.canvas.height,
		this._width = this.canvas.width,
		this._height = this.canvas.height,
		this.requiresUpdate = !0
	},
	b.Text.prototype._renderWebGL = function(a) {
		this.requiresUpdate && (this.requiresUpdate = !1, b.updateWebGLTexture(this.texture.baseTexture, a.gl)),
		b.Sprite.prototype._renderWebGL.call(this, a)
	},
	b.Text.prototype.updateTransform = function() {
		this.dirty && (this.updateText(), this.dirty = !1),
		b.Sprite.prototype.updateTransform.call(this)
	},
	b.Text.prototype.determineFontHeight = function(a) {
		var d, e, f, c = b.Text.heightCache[a];
		return c || (d = document.getElementsByTagName("body")[0], e = document.createElement("div"), f = document.createTextNode("M"), e.appendChild(f), e.setAttribute("style", a + ";position:absolute;top:0;left:0"), d.appendChild(e), c = e.offsetHeight, b.Text.heightCache[a] = c, d.removeChild(e)),
		c
	},
	b.Text.prototype.wordWrap = function(a) {
		var d, e, f, g, h, i, b = "",
		c = a.split("\n");
		for (d = 0; d < c.length; d++) {
			for (e = this.style.wordWrapWidth, f = c[d].split(" "), g = 0; g < f.length; g++) h = this.context.measureText(f[g]).width,
			i = h + this.context.measureText(" ").width,
			0 === g || i > e ? (g > 0 && (b += "\n"), b += f[g], e = this.style.wordWrapWidth - h) : (e -= i, b += " " + f[g]);
			d < c.length - 1 && (b += "\n")
		}
		return b
	},
	b.Text.prototype.destroy = function(a) {
		this.context = null,
		this.canvas = null,
		this.texture.destroy(void 0 === a ? !0 : a)
	},
	b.Text.heightCache = {},
	b.BitmapText = function(a, c) {
		b.DisplayObjectContainer.call(this),
		this._pool = [],
		this.setText(a),
		this.setStyle(c),
		this.updateText(),
		this.dirty = !1
	},
	b.BitmapText.prototype = Object.create(b.DisplayObjectContainer.prototype), b.BitmapText.prototype.constructor = b.BitmapText, b.BitmapText.prototype.setText = function(a) {
		this.text = a || " ",
		this.dirty = !0
	},
	b.BitmapText.prototype.setStyle = function(a) {
		a = a || {},
		a.align = a.align || "left",
		this.style = a;
		var c = a.font.split(" ");
		this.fontName = c[c.length - 1],
		this.fontSize = c.length >= 2 ? parseInt(c[c.length - 2], 10) : b.BitmapText.fonts[this.fontName].size,
		this.dirty = !0,
		this.tint = a.tint
	},
	b.BitmapText.prototype.updateText = function() {
		var j, k, l, m, n, o, p, q, r, s, a = b.BitmapText.fonts[this.fontName],
		c = new b.Point,
		d = null,
		e = [],
		f = 0,
		g = [],
		h = 0,
		i = this.fontSize / a.size;
		for (j = 0; j < this.text.length; j++) k = this.text.charCodeAt(j),
		/(?:\r\n|\r|\n)/.test(this.text.charAt(j)) ? (g.push(c.x), f = Math.max(f, c.x), h++, c.x = 0, c.y += a.lineHeight, d = null) : (l = a.chars[k], l && (d && l[d] && (c.x += l.kerning[d]), e.push({
			texture: l.texture,
			line: h,
			charCode: k,
			position: new b.Point(c.x + l.xOffset, c.y + l.yOffset)
		}), c.x += l.xAdvance, d = k));
		for (g.push(c.x), f = Math.max(f, c.x), m = [], j = 0; h >= j; j++) n = 0,
		"right" === this.style.align ? n = f - g[j] : "center" === this.style.align && (n = (f - g[j]) / 2),
		m.push(n);
		for (o = this.children.length, p = e.length, q = this.tint || 16777215, j = 0; p > j; j++) r = o > j ? this.children[j] : this._pool.pop(),
		r ? r.setTexture(e[j].texture) : r = new b.Sprite(e[j].texture),
		r.position.x = (e[j].position.x + m[e[j].line]) * i,
		r.position.y = e[j].position.y * i,
		r.scale.x = r.scale.y = i,
		r.tint = q,
		r.parent || this.addChild(r);
		for (; this.children.length > p;) s = this.getChildAt(this.children.length - 1),
		this._pool.push(s),
		this.removeChild(s);
		this.textWidth = f * i,
		this.textHeight = (c.y + a.lineHeight) * i
	},
	b.BitmapText.prototype.updateTransform = function() {
		this.dirty && (this.updateText(), this.dirty = !1),
		b.DisplayObjectContainer.prototype.updateTransform.call(this)
	},
	b.BitmapText.fonts = {},
	b.Stage = function(a) {
		b.DisplayObjectContainer.call(this),
		this.worldTransform = new b.Matrix,
		this.interactive = !0,
		this.interactionManager = new b.InteractionManager(this),
		this.dirty = !0,
		this.stage = this,
		this.stage.hitArea = new b.Rectangle(0, 0, 1e5, 1e5),
		this.setBackgroundColor(a)
	},
	b.Stage.prototype = Object.create(b.DisplayObjectContainer.prototype), b.Stage.prototype.constructor = b.Stage, b.Stage.prototype.setInteractionDelegate = function(a) {
		this.interactionManager.setTargetDomElement(a)
	},
	b.Stage.prototype.updateTransform = function() {
		this.worldAlpha = 1;
		for (var a = 0,
		b = this.children.length; b > a; a++) this.children[a].updateTransform();
		this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0),
		this.interactive && this.interactionManager.update()
	},
	b.Stage.prototype.setBackgroundColor = function(a) {
		this.backgroundColor = a || 0,
		this.backgroundColorSplit = b.hex2rgb(this.backgroundColor);
		var c = this.backgroundColor.toString(16);
		c = "000000".substr(0, 6 - c.length) + c,
		this.backgroundColorString = "#" + c
	},
	b.Stage.prototype.getMousePosition = function() {
		return this.interactionManager.mouse.global
	},
	c = 0, d = ["ms", "moz", "webkit", "o"], e = 0; e < d.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[d[e] + "RequestAnimationFrame"],
	window.cancelAnimationFrame = window[d[e] + "CancelAnimationFrame"] || window[d[e] + "CancelRequestAnimationFrame"];
	window.requestAnimationFrame || (window.requestAnimationFrame = function(a) {
		var b = (new Date).getTime(),
		d = Math.max(0, 16 - (b - c)),
		e = window.setTimeout(function() {
			a(b + d)
		},
		d);
		return c = b + d,
		e
	}),
	window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
		clearTimeout(a)
	}),
	window.requestAnimFrame = window.requestAnimationFrame,
	b.hex2rgb = function(a) {
		return [(255 & a >> 16) / 255, (255 & a >> 8) / 255, (255 & a) / 255]
	},
	b.rgb2hex = function(a) {
		return (255 * a[0] << 16) + (255 * a[1] << 8) + 255 * a[2]
	},
	"function" != typeof Function.prototype.bind && (Function.prototype.bind = function() {
		var a = Array.prototype.slice;
		return function(b) {
			function e() {
				var f = d.concat(a.call(arguments));
				c.apply(this instanceof e ? this: b, f)
			}
			var c = this,
			d = a.call(arguments, 1);
			if ("function" != typeof c) throw new TypeError;
			return e.prototype = function f(a) {
				return a && (f.prototype = a),
				this instanceof f ? void 0 : new f
			} (c.prototype),
			e
		}
	} ()),
	b.AjaxRequest = function() {
		var b, a = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
		if (!window.ActiveXObject) return window.XMLHttpRequest ? new window.XMLHttpRequest: !1;
		for (b = 0; b < a.length; b++) try {
			return new window.ActiveXObject(a[b])
		} catch(c) {}
	},
	b.canUseNewCanvasBlendModes = function() {
		var b, a = document.createElement("canvas");
		return a.width = 1,
		a.height = 1,
		b = a.getContext("2d"),
		b.fillStyle = "#000",
		b.fillRect(0, 0, 1, 1),
		b.globalCompositeOperation = "multiply",
		b.fillStyle = "#fff",
		b.fillRect(0, 0, 1, 1),
		0 === b.getImageData(0, 0, 1, 1).data[0]
	},
	b.getNextPowerOfTwo = function(a) {
		if (a > 0 && 0 === (a & a - 1)) return a;
		for (var b = 1; a > b;) b <<= 1;
		return b
	},
	b.EventTarget = function() {
		var a = {};
		this.addEventListener = this.on = function(b, c) {
			void 0 === a[b] && (a[b] = []),
			-1 === a[b].indexOf(c) && a[b].unshift(c)
		},
		this.dispatchEvent = this.emit = function(b) {
			if (a[b.type] && a[b.type].length) for (var c = a[b.type].length - 1; c >= 0; c--) a[b.type][c](b)
		},
		this.removeEventListener = this.off = function(b, c) {
			if (void 0 !== a[b]) {
				var d = a[b].indexOf(c); - 1 !== d && a[b].splice(d, 1)
			}
		},
		this.removeAllEventListeners = function(b) {
			var c = a[b];
			c && (c.length = 0)
		}
	},
	b.PolyK = {},
	b.PolyK.Triangulate = function(a) {
		var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, c = !0,
		d = a.length >> 1;
		if (3 > d) return [];
		for (e = [], f = [], g = 0; d > g; g++) f.push(g);
		for (g = 0, h = d; h > 3;) {
			if (i = f[(g + 0) % h], j = f[(g + 1) % h], k = f[(g + 2) % h], l = a[2 * i], m = a[2 * i + 1], n = a[2 * j], o = a[2 * j + 1], p = a[2 * k], q = a[2 * k + 1], r = !1, b.PolyK._convex(l, m, n, o, p, q, c)) for (r = !0, s = 0; h > s; s++) if (t = f[s], t !== i && t !== j && t !== k && b.PolyK._PointInTriangle(a[2 * t], a[2 * t + 1], l, m, n, o, p, q)) {
				r = !1;
				break
			}
			if (r) e.push(i, j, k),
			f.splice((g + 1) % h, 1),
			h--,
			g = 0;
			else if (g++>3 * h) {
				if (!c) return window.console.log("PIXI Warning: shape too complex to fill"),
				[];
				for (e = [], f = [], g = 0; d > g; g++) f.push(g);
				g = 0,
				h = d,
				c = !1
			}
		}
		return e.push(f[0], f[1], f[2]),
		e
	},
	b.PolyK._PointInTriangle = function(a, b, c, d, e, f, g, h) {
		var i = g - c,
		j = h - d,
		k = e - c,
		l = f - d,
		m = a - c,
		n = b - d,
		o = i * i + j * j,
		p = i * k + j * l,
		q = i * m + j * n,
		r = k * k + l * l,
		s = k * m + l * n,
		t = 1 / (o * r - p * p),
		u = (r * q - p * s) * t,
		v = (o * s - p * q) * t;
		return u >= 0 && v >= 0 && 1 > u + v
	},
	b.PolyK._convex = function(a, b, c, d, e, f, g) {
		return (b - d) * (e - c) + (c - a) * (f - d) >= 0 === g
	},
	b.initDefaultShaders = function() {},
	b.CompileVertexShader = function(a, c) {
		return b._CompileShader(a, c, a.VERTEX_SHADER)
	},
	b.CompileFragmentShader = function(a, c) {
		return b._CompileShader(a, c, a.FRAGMENT_SHADER)
	},
	b._CompileShader = function(a, b, c) {
		var d = b.join("\n"),
		e = a.createShader(c);
		return a.shaderSource(e, d),
		a.compileShader(e),
		a.getShaderParameter(e, a.COMPILE_STATUS) ? e: (window.console.log(a.getShaderInfoLog(e)), null)
	},
	b.compileProgram = function(a, c, d) {
		var e = b.CompileFragmentShader(a, d),
		f = b.CompileVertexShader(a, c),
		g = a.createProgram();
		return a.attachShader(g, f),
		a.attachShader(g, e),
		a.linkProgram(g),
		a.getProgramParameter(g, a.LINK_STATUS) || window.console.log("Could not initialise shaders"),
		g
	},
	b.PixiShader = function(a) {
		this._UID = b._UID++,
		this.gl = a,
		this.program = null,
		this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", " gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"],
		this.textureCount = 0,
		this.attributes = [],
		this.init()
	},
	b.PixiShader.prototype.init = function() {
		var d, a = this.gl,
		c = b.compileProgram(a, this.vertexSrc || b.PixiShader.defaultVertexSrc, this.fragmentSrc);
		a.useProgram(c),
		this.uSampler = a.getUniformLocation(c, "uSampler"),
		this.projectionVector = a.getUniformLocation(c, "projectionVector"),
		this.offsetVector = a.getUniformLocation(c, "offsetVector"),
		this.dimensions = a.getUniformLocation(c, "dimensions"),
		this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition"),
		this.aTextureCoord = a.getAttribLocation(c, "aTextureCoord"),
		this.colorAttribute = a.getAttribLocation(c, "aColor"),
		-1 === this.colorAttribute && (this.colorAttribute = 2),
		this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
		for (d in this.uniforms) this.uniforms[d].uniformLocation = a.getUniformLocation(c, d);
		this.initUniforms(),
		this.program = c
	},
	b.PixiShader.prototype.initUniforms = function() {
		var a, b, c, d;
		this.textureCount = 1,
		a = this.gl;
		for (c in this.uniforms) b = this.uniforms[c],
		d = b.type,
		"sampler2D" === d ? (b._init = !1, null !== b.value && this.initSampler2D(b)) : "mat2" === d || "mat3" === d || "mat4" === d ? (b.glMatrix = !0, b.glValueLength = 1, "mat2" === d ? b.glFunc = a.uniformMatrix2fv: "mat3" === d ? b.glFunc = a.uniformMatrix3fv: "mat4" === d && (b.glFunc = a.uniformMatrix4fv)) : (b.glFunc = a["uniform" + d], b.glValueLength = "2f" === d || "2i" === d ? 2 : "3f" === d || "3i" === d ? 3 : "4f" === d || "4i" === d ? 4 : 1)
	},
	b.PixiShader.prototype.initSampler2D = function(a) {
		var b, c, d, e, f, g, h, i, j, k;
		a.value && a.value.baseTexture && a.value.baseTexture.hasLoaded && (b = this.gl, b.activeTexture(b["TEXTURE" + this.textureCount]), b.bindTexture(b.TEXTURE_2D, a.value.baseTexture._glTextures[b.id]), a.textureData && (c = a.textureData, d = c.magFilter ? c.magFilter: b.LINEAR, e = c.minFilter ? c.minFilter: b.LINEAR, f = c.wrapS ? c.wrapS: b.CLAMP_TO_EDGE, g = c.wrapT ? c.wrapT: b.CLAMP_TO_EDGE, h = c.luminance ? b.LUMINANCE: b.RGBA, c.repeat && (f = b.REPEAT, g = b.REPEAT), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !!c.flipY), c.width ? (i = c.width ? c.width: 512, j = c.height ? c.height: 2, k = c.border ? c.border: 0, b.texImage2D(b.TEXTURE_2D, 0, h, i, j, k, h, b.UNSIGNED_BYTE, null)) : b.texImage2D(b.TEXTURE_2D, 0, h, b.RGBA, b.UNSIGNED_BYTE, a.value.baseTexture.source), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, d), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, e), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, f), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, g)), b.uniform1i(a.uniformLocation, this.textureCount), a._init = !0, this.textureCount++)
	},
	b.PixiShader.prototype.syncUniforms = function() {
		var a, c, d;
		this.textureCount = 1,
		c = this.gl;
		for (d in this.uniforms) a = this.uniforms[d],
		1 === a.glValueLength ? a.glMatrix === !0 ? a.glFunc.call(c, a.uniformLocation, a.transpose, a.value) : a.glFunc.call(c, a.uniformLocation, a.value) : 2 === a.glValueLength ? a.glFunc.call(c, a.uniformLocation, a.value.x, a.value.y) : 3 === a.glValueLength ? a.glFunc.call(c, a.uniformLocation, a.value.x, a.value.y, a.value.z) : 4 === a.glValueLength ? a.glFunc.call(c, a.uniformLocation, a.value.x, a.value.y, a.value.z, a.value.w) : "sampler2D" === a.type && (a._init ? (c.activeTexture(c["TEXTURE" + this.textureCount]), c.bindTexture(c.TEXTURE_2D, a.value.baseTexture._glTextures[c.id] || b.createWebGLTexture(a.value.baseTexture, c)), c.uniform1i(a.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(a))
	},
	b.PixiShader.prototype.destroy = function() {
		this.gl.deleteProgram(this.program),
		this.uniforms = null,
		this.gl = null,
		this.attributes = null
	},
	b.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec2 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", " gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", " vTextureCoord = aTextureCoord;", " vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;", " vColor = vec4(color * aColor.x, aColor.x);", "}"],
	b.PixiFastShader = function(a) {
		this._UID = b._UID++,
		this.gl = a,
		this.program = null,
		this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", " gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"],
		this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", " vec2 v;", " vec2 sv = aVertexPosition * aScale;", " v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", " v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", " v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", " gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", " vTextureCoord = aTextureCoord;", " vColor = aColor;", "}"],
		this.textureCount = 0,
		this.init()
	},
	b.PixiFastShader.prototype.init = function() {
		var a = this.gl,
		c = b.compileProgram(a, this.vertexSrc, this.fragmentSrc);
		a.useProgram(c),
		this.uSampler = a.getUniformLocation(c, "uSampler"),
		this.projectionVector = a.getUniformLocation(c, "projectionVector"),
		this.offsetVector = a.getUniformLocation(c, "offsetVector"),
		this.dimensions = a.getUniformLocation(c, "dimensions"),
		this.uMatrix = a.getUniformLocation(c, "uMatrix"),
		this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition"),
		this.aPositionCoord = a.getAttribLocation(c, "aPositionCoord"),
		this.aScale = a.getAttribLocation(c, "aScale"),
		this.aRotation = a.getAttribLocation(c, "aRotation"),
		this.aTextureCoord = a.getAttribLocation(c, "aTextureCoord"),
		this.colorAttribute = a.getAttribLocation(c, "aColor"),
		-1 === this.colorAttribute && (this.colorAttribute = 2),
		this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute],
		this.program = c
	},
	b.PixiFastShader.prototype.destroy = function() {
		this.gl.deleteProgram(this.program),
		this.uniforms = null,
		this.gl = null,
		this.attributes = null
	},
	b.StripShader = function(a) {
		this._UID = b._UID++,
		this.gl = a,
		this.program = null,
		this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", " gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "}"],
		this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", " vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", " v -= offsetVector.xyx;", " gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", " vTextureCoord = aTextureCoord;", "}"],
		this.init()
	},
	b.StripShader.prototype.init = function() {
		var a = this.gl,
		c = b.compileProgram(a, this.vertexSrc, this.fragmentSrc);
		a.useProgram(c),
		this.uSampler = a.getUniformLocation(c, "uSampler"),
		this.projectionVector = a.getUniformLocation(c, "projectionVector"),
		this.offsetVector = a.getUniformLocation(c, "offsetVector"),
		this.colorAttribute = a.getAttribLocation(c, "aColor"),
		this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition"),
		this.aTextureCoord = a.getAttribLocation(c, "aTextureCoord"),
		this.attributes = [this.aVertexPosition, this.aTextureCoord],
		this.translationMatrix = a.getUniformLocation(c, "translationMatrix"),
		this.alpha = a.getUniformLocation(c, "alpha"),
		this.program = c
	},
	b.PrimitiveShader = function(a) {
		this._UID = b._UID++,
		this.gl = a,
		this.program = null,
		this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", " gl_FragColor = vColor;", "}"],
		this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", " vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", " v -= offsetVector.xyx;", " gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", " vColor = aColor * vec4(tint * alpha, alpha);", "}"],
		this.init()
	},
	b.PrimitiveShader.prototype.init = function() {
		var a = this.gl,
		c = b.compileProgram(a, this.vertexSrc, this.fragmentSrc);
		a.useProgram(c),
		this.projectionVector = a.getUniformLocation(c, "projectionVector"),
		this.offsetVector = a.getUniformLocation(c, "offsetVector"),
		this.tintColor = a.getUniformLocation(c, "tint"),
		this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition"),
		this.colorAttribute = a.getAttribLocation(c, "aColor"),
		this.attributes = [this.aVertexPosition, this.colorAttribute],
		this.translationMatrix = a.getUniformLocation(c, "translationMatrix"),
		this.alpha = a.getUniformLocation(c, "alpha"),
		this.program = c
	},
	b.PrimitiveShader.prototype.destroy = function() {
		this.gl.deleteProgram(this.program),
		this.uniforms = null,
		this.gl = null,
		this.attribute = null
	},
	b.ComplexPrimitiveShader = function(a) {
		this._UID = b._UID++,
		this.gl = a,
		this.program = null,
		this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", " gl_FragColor = vColor;", "}"],
		this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void) {", " vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", " v -= offsetVector.xyx;", " gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", " vColor = vec4(color * alpha * tint, alpha);", "}"],
		this.init()
	},
	b.ComplexPrimitiveShader.prototype.init = function() {
		var a = this.gl,
		c = b.compileProgram(a, this.vertexSrc, this.fragmentSrc);
		a.useProgram(c),
		this.projectionVector = a.getUniformLocation(c, "projectionVector"),
		this.offsetVector = a.getUniformLocation(c, "offsetVector"),
		this.tintColor = a.getUniformLocation(c, "tint"),
		this.color = a.getUniformLocation(c, "color"),
		this.aVertexPosition = a.getAttribLocation(c, "aVertexPosition"),
		this.attributes = [this.aVertexPosition, this.colorAttribute],
		this.translationMatrix = a.getUniformLocation(c, "translationMatrix"),
		this.alpha = a.getUniformLocation(c, "alpha"),
		this.program = c
	},
	b.ComplexPrimitiveShader.prototype.destroy = function() {
		this.gl.deleteProgram(this.program),
		this.uniforms = null,
		this.gl = null,
		this.attribute = null
	},
	b.WebGLGraphics = function() {},
	b.WebGLGraphics.renderGraphics = function(a, c) {
		var h, i, j, d = c.gl,
		e = c.projection,
		f = c.offset,
		g = c.shaderManager.primitiveShader;
		for (a.dirty && b.WebGLGraphics.updateGraphics(a, d), i = a._webGL[d.id], j = 0; j < i.data.length; j++) 1 === i.data[j].mode ? (h = i.data[j], c.stencilManager.pushStencil(a, h, c), d.drawElements(d.TRIANGLE_FAN, 4, d.UNSIGNED_SHORT, 2 * (h.indices.length - 4)), c.stencilManager.popStencil(a, h, c), this.last = h.mode) : (h = i.data[j], c.shaderManager.setShader(g), g = c.shaderManager.primitiveShader, d.uniformMatrix3fv(g.translationMatrix, !1, a.worldTransform.toArray(!0)), d.uniform2f(g.projectionVector, e.x, -e.y), d.uniform2f(g.offsetVector, -f.x, -f.y), d.uniform3fv(g.tintColor, b.hex2rgb(a.tint)), d.uniform1f(g.alpha, a.worldAlpha), d.bindBuffer(d.ARRAY_BUFFER, h.buffer), d.vertexAttribPointer(g.aVertexPosition, 2, d.FLOAT, !1, 24, 0), d.vertexAttribPointer(g.colorAttribute, 4, d.FLOAT, !1, 24, 8), d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, h.indexBuffer), d.drawElements(d.TRIANGLE_STRIP, h.indices.length, d.UNSIGNED_SHORT, 0))
	},
	b.WebGLGraphics.updateGraphics = function(a, c) {
		var e, f, g, h, d = a._webGL[c.id];
		if (d || (d = a._webGL[c.id] = {
			lastIndex: 0,
			data: [],
			gl: c
		}), a.dirty = !1, a.clearDirty) {
			for (a.clearDirty = !1, e = 0; e < d.data.length; e++) f = d.data[e],
			f.reset(),
			b.WebGLGraphics.graphicsDataPool.push(f);
			d.data = [],
			d.lastIndex = 0
		}
		for (e = d.lastIndex; e < a.graphicsData.length; e++) h = a.graphicsData[e],
		h.type === b.Graphics.POLY ? (h.fill && h.points.length > 6 && (h.points.length > 10 ? (g = b.WebGLGraphics.switchMode(d, 1), b.WebGLGraphics.buildComplexPoly(h, g)) : (g = b.WebGLGraphics.switchMode(d, 0), b.WebGLGraphics.buildPoly(h, g))), h.lineWidth > 0 && (g = b.WebGLGraphics.switchMode(d, 0), b.WebGLGraphics.buildLine(h, g))) : (g = b.WebGLGraphics.switchMode(d, 0), h.type === b.Graphics.RECT ? b.WebGLGraphics.buildRectangle(h, g) : h.type === b.Graphics.CIRC || h.type === b.Graphics.ELIP ? b.WebGLGraphics.buildCircle(h, g) : h.type === b.Graphics.RREC && b.WebGLGraphics.buildRoundedRectangle(h, g)),
		d.lastIndex++;
		for (e = 0; e < d.data.length; e++) g = d.data[e],
		g.dirty && g.upload()
	},
	b.WebGLGraphics.switchMode = function(a, c) {
		var d;
		return a.data.length ? (d = a.data[a.data.length - 1], (d.mode !== c || 1 === c) && (d = b.WebGLGraphics.graphicsDataPool.pop() || new b.WebGLGraphicsData(a.gl), d.mode = c, a.data.push(d))) : (d = b.WebGLGraphics.graphicsDataPool.pop() || new b.WebGLGraphicsData(a.gl), d.mode = c, a.data.push(d)),
		d.dirty = !0,
		d
	},
	b.WebGLGraphics.buildRectangle = function(a, c) {
		var i, j, k, l, m, n, o, p, q, d = a.points,
		e = d[0],
		f = d[1],
		g = d[2],
		h = d[3];
		a.fill && (i = b.hex2rgb(a.fillColor), j = a.fillAlpha, k = i[0] * j, l = i[1] * j, m = i[2] * j, n = c.points, o = c.indices, p = n.length / 6, n.push(e, f), n.push(k, l, m, j), n.push(e + g, f), n.push(k, l, m, j), n.push(e, f + h), n.push(k, l, m, j), n.push(e + g, f + h), n.push(k, l, m, j), o.push(p, p, p + 1, p + 2, p + 3, p + 3)),
		a.lineWidth && (q = a.points, a.points = [e, f, e + g, f, e + g, f + h, e, f + h, e, f], b.WebGLGraphics.buildLine(a, c), a.points = q)
	},
	b.WebGLGraphics.buildRoundedRectangle = function(a, c) {
		var k, l, m, n, o, p, q, r, s, t, u, d = a.points,
		e = d[0],
		f = d[1],
		g = d[2],
		h = d[3],
		i = d[4],
		j = [];
		if (j.push(e, f + i), j = j.concat(b.WebGLGraphics.quadraticBezierCurve(e, f + h - i, e, f + h, e + i, f + h)), j = j.concat(b.WebGLGraphics.quadraticBezierCurve(e + g - i, f + h, e + g, f + h, e + g, f + h - i)), j = j.concat(b.WebGLGraphics.quadraticBezierCurve(e + g, f + i, e + g, f, e + g - i, f)), j = j.concat(b.WebGLGraphics.quadraticBezierCurve(e + i, f, e, f, e, f + i)), a.fill) {
			for (k = b.hex2rgb(a.fillColor), l = a.fillAlpha, m = k[0] * l, n = k[1] * l, o = k[2] * l, p = c.points, q = c.indices, r = p.length / 6, s = b.PolyK.Triangulate(j), t = 0, t = 0; t < s.length; t += 3) q.push(s[t] + r),
			q.push(s[t] + r),
			q.push(s[t + 1] + r),
			q.push(s[t + 2] + r),
			q.push(s[t + 2] + r);
			for (t = 0; t < j.length; t++) p.push(j[t], j[++t], m, n, o, l)
		}
		a.lineWidth && (u = a.points, a.points = j, b.WebGLGraphics.buildLine(a, c), a.points = u)
	},
	b.WebGLGraphics.quadraticBezierCurve = function(a, b, c, d, e, f) {
		function o(a, b, c) {
			var d = b - a;
			return a + d * c
		}
		var g, h, i, j, k, l, q, m = 20,
		n = [],
		p = 0;
		for (q = 0; m >= q; q++) p = q / m,
		g = o(a, c, p),
		h = o(b, d, p),
		i = o(c, e, p),
		j = o(d, f, p),
		k = o(g, i, p),
		l = o(h, j, p),
		n.push(k, l);
		return n
	},
	b.WebGLGraphics.buildCircle = function(a, c) {
		var l, m, n, o, p, q, r, s, t, d = a.points,
		e = d[0],
		f = d[1],
		g = d[2],
		h = d[3],
		i = 40,
		j = 2 * Math.PI / i,
		k = 0;
		if (a.fill) {
			for (l = b.hex2rgb(a.fillColor), m = a.fillAlpha, n = l[0] * m, o = l[1] * m, p = l[2] * m, q = c.points, r = c.indices, s = q.length / 6, r.push(s), k = 0; i + 1 > k; k++) q.push(e, f, n, o, p, m),
			q.push(e + Math.sin(j * k) * g, f + Math.cos(j * k) * h, n, o, p, m),
			r.push(s++, s++);
			r.push(s - 1)
		}
		if (a.lineWidth) {
			for (t = a.points, a.points = [], k = 0; i + 1 > k; k++) a.points.push(e + Math.sin(j * k) * g, f + Math.cos(j * k) * h);
			b.WebGLGraphics.buildLine(a, c),
			a.points = t
		}
	},
	b.WebGLGraphics.buildLine = function(a, c) {
		var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, d = 0,
		e = a.points;
		if (0 !== e.length) {
			if (a.lineWidth % 2) for (d = 0; d < e.length; d++) e[d] += .5;
			for (f = new b.Point(e[0], e[1]), g = new b.Point(e[e.length - 2], e[e.length - 1]), f.x === g.x && f.y === g.y && (e = e.slice(), e.pop(), e.pop(), g = new b.Point(e[e.length - 2], e[e.length - 1]), h = g.x + .5 * (f.x - g.x), i = g.y + .5 * (f.y - g.y), e.unshift(h, i), e.push(h, i)), j = c.points, k = c.indices, l = e.length / 2, m = e.length, n = j.length / 6, o = a.lineWidth / 2, p = b.hex2rgb(a.lineColor), q = a.lineAlpha, r = p[0] * q, s = p[1] * q, t = p[2] * q, w = e[0], x = e[1], y = e[2], z = e[3], C = -(x - z), D = w - y, Q = Math.sqrt(C * C + D * D), C /= Q, D /= Q, C *= o, D *= o, j.push(w - C, x - D, r, s, t, q), j.push(w + C, x + D, r, s, t, q), d = 1; l - 1 > d; d++) w = e[2 * (d - 1)],
			x = e[2 * (d - 1) + 1],
			y = e[2 * d],
			z = e[2 * d + 1],
			A = e[2 * (d + 1)],
			B = e[2 * (d + 1) + 1],
			C = -(x - z),
			D = w - y,
			Q = Math.sqrt(C * C + D * D),
			C /= Q,
			D /= Q,
			C *= o,
			D *= o,
			E = -(z - B),
			F = y - A,
			Q = Math.sqrt(E * E + F * F),
			E /= Q,
			F /= Q,
			E *= o,
			F *= o,
			I = -D + x - ( - D + z),
			J = -C + y - ( - C + w),
			K = ( - C + w) * ( - D + z) - ( - C + y) * ( - D + x),
			L = -F + B - ( - F + z),
			M = -E + y - ( - E + A),
			N = ( - E + A) * ( - F + z) - ( - E + y) * ( - F + B),
			O = I * M - L * J,
			Math.abs(O) < .1 ? (O += 10.1, j.push(y - C, z - D, r, s, t, q), j.push(y + C, z + D, r, s, t, q)) : (u = (J * N - M * K) / O, v = (L * K - I * N) / O, P = (u - y) * (u - y) + (v - z) + (v - z), P > 19600 ? (G = C - E, H = D - F, Q = Math.sqrt(G * G + H * H), G /= Q, H /= Q, G *= o, H *= o, j.push(y - G, z - H), j.push(r, s, t, q), j.push(y + G, z + H), j.push(r, s, t, q), j.push(y - G, z - H), j.push(r, s, t, q), m++) : (j.push(u, v), j.push(r, s, t, q), j.push(y - (u - y), z - (v - z)), j.push(r, s, t, q)));
			for (w = e[2 * (l - 2)], x = e[2 * (l - 2) + 1], y = e[2 * (l - 1)], z = e[2 * (l - 1) + 1], C = -(x - z), D = w - y, Q = Math.sqrt(C * C + D * D), C /= Q, D /= Q, C *= o, D *= o, j.push(y - C, z - D), j.push(r, s, t, q), j.push(y + C, z + D), j.push(r, s, t, q), k.push(n), d = 0; m > d; d++) k.push(n++);
			k.push(n - 1)
		}
	},
	b.WebGLGraphics.buildComplexPoly = function(a, c) {
		var e, f, g, h, i, j, k, l, m, d = a.points.slice();
		if (! (d.length < 6)) {
			for (e = c.indices, c.points = d, c.alpha = a.fillAlpha, c.color = b.hex2rgb(a.fillColor), f = 1 / 0, g = -1 / 0, h = 1 / 0, i = -1 / 0, l = 0; l < d.length; l += 2) j = d[l],
			k = d[l + 1],
			f = f > j ? j: f,
			g = j > g ? j: g,
			h = h > k ? k: h,
			i = k > i ? k: i;
			for (d.push(f, h, g, h, g, i, f, i), m = d.length / 2, l = 0; m > l; l++) e.push(l)
		}
	},
	b.WebGLGraphics.buildPoly = function(a, c) {
		var e, f, g, h, i, j, k, l, m, n, o, d = a.points;
		if (! (d.length < 6)) {
			for (e = c.points, f = c.indices, g = d.length / 2, h = b.hex2rgb(a.fillColor), i = a.fillAlpha, j = h[0] * i, k = h[1] * i, l = h[2] * i, m = b.PolyK.Triangulate(d), n = e.length / 6, o = 0, o = 0; o < m.length; o += 3) f.push(m[o] + n),
			f.push(m[o] + n),
			f.push(m[o + 1] + n),
			f.push(m[o + 2] + n),
			f.push(m[o + 2] + n);
			for (o = 0; g > o; o++) e.push(d[2 * o], d[2 * o + 1], j, k, l, i)
		}
	},
	b.WebGLGraphics.graphicsDataPool = [],
	b.WebGLGraphicsData = function(a) {
		this.gl = a,
		this.color = [0, 0, 0],
		this.points = [],
		this.indices = [],
		this.lastIndex = 0,
		this.buffer = a.createBuffer(),
		this.indexBuffer = a.createBuffer(),
		this.mode = 1,
		this.alpha = 1,
		this.dirty = !0
	},
	b.WebGLGraphicsData.prototype.reset = function() {
		this.points = [],
		this.indices = [],
		this.lastIndex = 0
	},
	b.WebGLGraphicsData.prototype.upload = function() {
		var a = this.gl;
		this.glPoints = new Float32Array(this.points),
		a.bindBuffer(a.ARRAY_BUFFER, this.buffer),
		a.bufferData(a.ARRAY_BUFFER, this.glPoints, a.STATIC_DRAW),
		this.glIndicies = new Uint16Array(this.indices),
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
		a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.glIndicies, a.STATIC_DRAW),
		this.dirty = !1
	},
	b.glContexts = [],
	b.WebGLRenderer = function(a, c, d, e, f, g) {
		b.defaultRenderer || (b.sayHello("webGL"), b.defaultRenderer = this),
		this.type = b.WEBGL_RENDERER,
		this.transparent = !!e,
		this.preserveDrawingBuffer = g,
		this.width = a || 800,
		this.height = c || 600,
		this.view = d || document.createElement("canvas"),
		this.view.width = this.width,
		this.view.height = this.height,
		this.contextLost = this.handleContextLost.bind(this),
		this.contextRestoredLost = this.handleContextRestored.bind(this),
		this.view.addEventListener("webglcontextlost", this.contextLost, !1),
		this.view.addEventListener("webglcontextrestored", this.contextRestoredLost, !1),
		this.options = {
			alpha: this.transparent,
			antialias: !!f,
			premultipliedAlpha: !!e,
			stencil: !0,
			preserveDrawingBuffer: g
		};
		var h = null;
		if (["experimental-webgl", "webgl"].forEach(function(a) {
			try {
				h = h || this.view.getContext(a, this.options)
			} catch(b) {}
		},
		this), !h) throw new Error("This browser does not support webGL. Try using the canvas renderer" + this);
		this.gl = h,
		this.glContextId = h.id = b.WebGLRenderer.glContextId++,
		b.glContexts[this.glContextId] = h,
		b.blendModesWebGL || (b.blendModesWebGL = [], b.blendModesWebGL[b.blendModes.NORMAL] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.ADD] = [h.SRC_ALPHA, h.DST_ALPHA], b.blendModesWebGL[b.blendModes.MULTIPLY] = [h.DST_COLOR, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.SCREEN] = [h.SRC_ALPHA, h.ONE], b.blendModesWebGL[b.blendModes.OVERLAY] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.DARKEN] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.LIGHTEN] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.COLOR_DODGE] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.COLOR_BURN] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.HARD_LIGHT] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.SOFT_LIGHT] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.DIFFERENCE] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.EXCLUSION] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.HUE] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.SATURATION] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.COLOR] = [h.ONE, h.ONE_MINUS_SRC_ALPHA], b.blendModesWebGL[b.blendModes.LUMINOSITY] = [h.ONE, h.ONE_MINUS_SRC_ALPHA]),
		this.projection = new b.Point,
		this.projection.x = this.width / 2,
		this.projection.y = -this.height / 2,
		this.offset = new b.Point(0, 0),
		this.resize(this.width, this.height),
		this.contextLost = !1,
		this.shaderManager = new b.WebGLShaderManager(h),
		this.spriteBatch = new b.WebGLSpriteBatch(h),
		this.maskManager = new b.WebGLMaskManager(h),
		this.filterManager = new b.WebGLFilterManager(h, this.transparent),
		this.stencilManager = new b.WebGLStencilManager(h),
		this.blendModeManager = new b.WebGLBlendModeManager(h),
		this.renderSession = {},
		this.renderSession.gl = this.gl,
		this.renderSession.drawCount = 0,
		this.renderSession.shaderManager = this.shaderManager,
		this.renderSession.maskManager = this.maskManager,
		this.renderSession.filterManager = this.filterManager,
		this.renderSession.blendModeManager = this.blendModeManager,
		this.renderSession.spriteBatch = this.spriteBatch,
		this.renderSession.stencilManager = this.stencilManager,
		this.renderSession.renderer = this,
		h.useProgram(this.shaderManager.defaultShader.program),
		h.disable(h.DEPTH_TEST),
		h.disable(h.CULL_FACE),
		h.enable(h.BLEND),
		h.colorMask(!0, !0, !0, this.transparent)
	},
	b.WebGLRenderer.prototype.constructor = b.WebGLRenderer,
	b.WebGLRenderer.prototype.render = function(a) {
		if (!this.contextLost) {
			this.__stage !== a && (a.interactive && a.interactionManager.removeEvents(), this.__stage = a),
			b.WebGLRenderer.updateTextures(),
			a.updateTransform(),
			a._interactive && (a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this)));
			var c = this.gl;
			c.viewport(0, 0, this.width, this.height),
			c.bindFramebuffer(c.FRAMEBUFFER, null),
			this.transparent ? c.clearColor(0, 0, 0, 0) : c.clearColor(a.backgroundColorSplit[0], a.backgroundColorSplit[1], a.backgroundColorSplit[2], 1),
			c.clear(c.COLOR_BUFFER_BIT),
			this.renderDisplayObject(a, this.projection),
			a.interactive ? a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this)) : a._interactiveEventsAdded && (a._interactiveEventsAdded = !1, a.interactionManager.setTarget(this))
		}
	},
	b.WebGLRenderer.prototype.renderDisplayObject = function(a, c, d) {
		this.renderSession.blendModeManager.setBlendMode(b.blendModes.NORMAL),
		this.renderSession.drawCount = 0,
		this.renderSession.currentBlendMode = 9999,
		this.renderSession.projection = c,
		this.renderSession.offset = this.offset,
		this.spriteBatch.begin(this.renderSession),
		this.filterManager.begin(this.renderSession, d),
		a._renderWebGL(this.renderSession),
		this.spriteBatch.end()
	},
	b.WebGLRenderer.updateTextures = function() {
		var a = 0;
		for (a = 0; a < b.Texture.frameUpdates.length; a++) b.WebGLRenderer.updateTextureFrame(b.Texture.frameUpdates[a]);
		for (a = 0; a < b.texturesToDestroy.length; a++) b.WebGLRenderer.destroyTexture(b.texturesToDestroy[a]);
		b.texturesToUpdate.length = 0,
		b.texturesToDestroy.length = 0,
		b.Texture.frameUpdates.length = 0
	},
	b.WebGLRenderer.destroyTexture = function(a) {
		var c, d, e;
		for (c = a._glTextures.length - 1; c >= 0; c--) d = a._glTextures[c],
		e = b.glContexts[c],
		e && d && e.deleteTexture(d);
		a._glTextures.length = 0
	},
	b.WebGLRenderer.updateTextureFrame = function(a) {
		a._updateWebGLuvs()
	},
	b.WebGLRenderer.prototype.resize = function(a, b) {
		this.width = a,
		this.height = b,
		this.view.width = a,
		this.view.height = b,
		this.gl.viewport(0, 0, this.width, this.height),
		this.projection.x = this.width / 2,
		this.projection.y = -this.height / 2
	},
	b.createWebGLTexture = function(a, c) {
		return a.hasLoaded && (a._glTextures[c.id] = c.createTexture(), c.bindTexture(c.TEXTURE_2D, a._glTextures[c.id]), c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultipliedAlpha), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, a.source), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, a.scaleMode === b.scaleModes.LINEAR ? c.LINEAR: c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, a.scaleMode === b.scaleModes.LINEAR ? c.LINEAR: c.NEAREST), a._powerOf2 ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.REPEAT), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.REPEAT)) : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE)), c.bindTexture(c.TEXTURE_2D, null), a._dirty[c.id] = !1),
		a._glTextures[c.id]
	},
	b.updateWebGLTexture = function(a, c) {
		a._glTextures[c.id] && (c.bindTexture(c.TEXTURE_2D, a._glTextures[c.id]), c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a.premultipliedAlpha), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, a.source), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, a.scaleMode === b.scaleModes.LINEAR ? c.LINEAR: c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, a.scaleMode === b.scaleModes.LINEAR ? c.LINEAR: c.NEAREST), a._powerOf2 ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.REPEAT), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.REPEAT)) : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE)), a._dirty[c.id] = !1)
	},
	b.WebGLRenderer.prototype.handleContextLost = function(a) {
		a.preventDefault(),
		this.contextLost = !0
	},
	b.WebGLRenderer.prototype.handleContextRestored = function() {
		var d, e, f;
		try {
			this.gl = this.view.getContext("experimental-webgl", this.options)
		} catch(a) {
			try {
				this.gl = this.view.getContext("webgl", this.options)
			} catch(c) {
				throw new Error(" This browser does not support webGL. Try using the canvas renderer" + this)
			}
		}
		d = this.gl,
		d.id = b.WebGLRenderer.glContextId++,
		this.shaderManager.setContext(d),
		this.spriteBatch.setContext(d),
		this.primitiveBatch.setContext(d),
		this.maskManager.setContext(d),
		this.filterManager.setContext(d),
		this.renderSession.gl = this.gl,
		d.disable(d.DEPTH_TEST),
		d.disable(d.CULL_FACE),
		d.enable(d.BLEND),
		d.colorMask(!0, !0, !0, this.transparent),
		this.gl.viewport(0, 0, this.width, this.height);
		for (e in b.TextureCache) f = b.TextureCache[e].baseTexture,
		f._glTextures = [];
		this.contextLost = !1
	},
	b.WebGLRenderer.prototype.destroy = function() {
		this.view.removeEventListener("webglcontextlost", this.contextLost),
		this.view.removeEventListener("webglcontextrestored", this.contextRestoredLost),
		b.glContexts[this.glContextId] = null,
		this.projection = null,
		this.offset = null,
		this.shaderManager.destroy(),
		this.spriteBatch.destroy(),
		this.primitiveBatch.destroy(),
		this.maskManager.destroy(),
		this.filterManager.destroy(),
		this.shaderManager = null,
		this.spriteBatch = null,
		this.maskManager = null,
		this.filterManager = null,
		this.gl = null,
		this.renderSession = null
	},
	b.WebGLRenderer.glContextId = 0,
	b.WebGLBlendModeManager = function(a) {
		this.gl = a,
		this.currentBlendMode = 99999
	},
	b.WebGLBlendModeManager.prototype.setBlendMode = function(a) {
		if (this.currentBlendMode === a) return ! 1;
		this.currentBlendMode = a;
		var c = b.blendModesWebGL[this.currentBlendMode];
		return this.gl.blendFunc(c[0], c[1]),
		!0
	},
	b.WebGLBlendModeManager.prototype.destroy = function() {
		this.gl = null
	},
	b.WebGLMaskManager = function(a) {
		this.maskStack = [],
		this.maskPosition = 0,
		this.setContext(a),
		this.reverse = !1,
		this.count = 0
	},
	b.WebGLMaskManager.prototype.setContext = function(a) {
		this.gl = a
	},
	b.WebGLMaskManager.prototype.pushMask = function(a, c) {
		var d = c.gl;
		a.dirty && b.WebGLGraphics.updateGraphics(a, d),
		a._webGL[d.id].data.length && c.stencilManager.pushStencil(a, a._webGL[d.id].data[0], c)
	},
	b.WebGLMaskManager.prototype.popMask = function(a, b) {
		var c = this.gl;
		b.stencilManager.popStencil(a, a._webGL[c.id].data[0], b)
	},
	b.WebGLMaskManager.prototype.destroy = function() {
		this.maskStack = null,
		this.gl = null
	},
	b.WebGLStencilManager = function(a) {
		this.stencilStack = [],
		this.setContext(a),
		this.reverse = !0,
		this.count = 0
	},
	b.WebGLStencilManager.prototype.setContext = function(a) {
		this.gl = a
	},
	b.WebGLStencilManager.prototype.pushStencil = function(a, b, c) {
		var e, d = this.gl;
		this.bindGraphics(a, b, c),
		0 === this.stencilStack.length && (d.enable(d.STENCIL_TEST), d.clear(d.STENCIL_BUFFER_BIT), this.reverse = !0, this.count = 0),
		this.stencilStack.push(b),
		e = this.count,
		d.colorMask(!1, !1, !1, !1),
		d.stencilFunc(d.ALWAYS, 0, 255),
		d.stencilOp(d.KEEP, d.KEEP, d.INVERT),
		1 === b.mode ? (d.drawElements(d.TRIANGLE_FAN, b.indices.length - 4, d.UNSIGNED_SHORT, 0), this.reverse ? (d.stencilFunc(d.EQUAL, 255 - e, 255), d.stencilOp(d.KEEP, d.KEEP, d.DECR)) : (d.stencilFunc(d.EQUAL, e, 255), d.stencilOp(d.KEEP, d.KEEP, d.INCR)), d.drawElements(d.TRIANGLE_FAN, 4, d.UNSIGNED_SHORT, 2 * (b.indices.length - 4)), this.reverse ? d.stencilFunc(d.EQUAL, 255 - (e + 1), 255) : d.stencilFunc(d.EQUAL, e + 1, 255), this.reverse = !this.reverse) : (this.reverse ? (d.stencilFunc(d.EQUAL, e, 255), d.stencilOp(d.KEEP, d.KEEP, d.INCR)) : (d.stencilFunc(d.EQUAL, 255 - e, 255), d.stencilOp(d.KEEP, d.KEEP, d.DECR)), d.drawElements(d.TRIANGLE_STRIP, b.indices.length, d.UNSIGNED_SHORT, 0), this.reverse ? d.stencilFunc(d.EQUAL, e + 1, 255) : d.stencilFunc(d.EQUAL, 255 - (e + 1), 255)),
		d.colorMask(!0, !0, !0, !0),
		d.stencilOp(d.KEEP, d.KEEP, d.KEEP),
		this.count++
	},
	b.WebGLStencilManager.prototype.bindGraphics = function(a, c, d) {
		var e, h, f, g;
		this._currentGraphics = a,
		e = this.gl,
		f = d.projection,
		g = d.offset,
		1 === c.mode ? (h = d.shaderManager.complexPrimativeShader, d.shaderManager.setShader(h), e.uniformMatrix3fv(h.translationMatrix, !1, a.worldTransform.toArray(!0)), e.uniform2f(h.projectionVector, f.x, -f.y), e.uniform2f(h.offsetVector, -g.x, -g.y), e.uniform3fv(h.tintColor, b.hex2rgb(a.tint)), e.uniform3fv(h.color, c.color), e.uniform1f(h.alpha, a.worldAlpha * c.alpha), e.bindBuffer(e.ARRAY_BUFFER, c.buffer), e.vertexAttribPointer(h.aVertexPosition, 2, e.FLOAT, !1, 8, 0), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, c.indexBuffer)) : (h = d.shaderManager.primitiveShader, d.shaderManager.setShader(h), e.uniformMatrix3fv(h.translationMatrix, !1, a.worldTransform.toArray(!0)), e.uniform2f(h.projectionVector, f.x, -f.y), e.uniform2f(h.offsetVector, -g.x, -g.y), e.uniform3fv(h.tintColor, b.hex2rgb(a.tint)), e.uniform1f(h.alpha, a.worldAlpha), e.bindBuffer(e.ARRAY_BUFFER, c.buffer), e.vertexAttribPointer(h.aVertexPosition, 2, e.FLOAT, !1, 24, 0), e.vertexAttribPointer(h.colorAttribute, 4, e.FLOAT, !1, 24, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, c.indexBuffer))
	},
	b.WebGLStencilManager.prototype.popStencil = function(a, b, c) {
		var e, d = this.gl;
		this.stencilStack.pop(),
		this.count--,
		0 === this.stencilStack.length ? d.disable(d.STENCIL_TEST) : (e = this.count, this.bindGraphics(a, b, c), d.colorMask(!1, !1, !1, !1), 1 === b.mode ? (this.reverse = !this.reverse, this.reverse ? (d.stencilFunc(d.EQUAL, 255 - (e + 1), 255), d.stencilOp(d.KEEP, d.KEEP, d.INCR)) : (d.stencilFunc(d.EQUAL, e + 1, 255), d.stencilOp(d.KEEP, d.KEEP, d.DECR)), d.drawElements(d.TRIANGLE_FAN, 4, d.UNSIGNED_SHORT, 2 * (b.indices.length - 4)), d.stencilFunc(d.ALWAYS, 0, 255), d.stencilOp(d.KEEP, d.KEEP, d.INVERT), d.drawElements(d.TRIANGLE_FAN, b.indices.length - 4, d.UNSIGNED_SHORT, 0), this.reverse ? d.stencilFunc(d.EQUAL, e, 255) : d.stencilFunc(d.EQUAL, 255 - e, 255)) : (this.reverse ? (d.stencilFunc(d.EQUAL, e + 1, 255), d.stencilOp(d.KEEP, d.KEEP, d.DECR)) : (d.stencilFunc(d.EQUAL, 255 - (e + 1), 255), d.stencilOp(d.KEEP, d.KEEP, d.INCR)), d.drawElements(d.TRIANGLE_STRIP, b.indices.length, d.UNSIGNED_SHORT, 0), this.reverse ? d.stencilFunc(d.EQUAL, e, 255) : d.stencilFunc(d.EQUAL, 255 - e, 255)), d.colorMask(!0, !0, !0, !0), d.stencilOp(d.KEEP, d.KEEP, d.KEEP))
	},
	b.WebGLStencilManager.prototype.destroy = function() {
		this.maskStack = null,
		this.gl = null
	},
	b.WebGLShaderManager = function(a) {
		this.maxAttibs = 10,
		this.attribState = [],
		this.tempAttribState = [],
		this.shaderMap = [];
		for (var b = 0; b < this.maxAttibs; b++) this.attribState[b] = !1;
		this.setContext(a)
	},
	b.WebGLShaderManager.prototype.setContext = function(a) {
		this.gl = a,
		this.primitiveShader = new b.PrimitiveShader(a),
		this.complexPrimativeShader = new b.ComplexPrimitiveShader(a),
		this.defaultShader = new b.PixiShader(a),
		this.fastShader = new b.PixiFastShader(a),
		this.stripShader = new b.StripShader(a),
		this.setShader(this.defaultShader)
	},
	b.WebGLShaderManager.prototype.setAttribs = function(a) {
		var b, c, d;
		for (b = 0; b < this.tempAttribState.length; b++) this.tempAttribState[b] = !1;
		for (b = 0; b < a.length; b++) c = a[b],
		this.tempAttribState[c] = !0;
		for (d = this.gl, b = 0; b < this.attribState.length; b++) this.attribState[b] !== this.tempAttribState[b] && (this.attribState[b] = this.tempAttribState[b], this.tempAttribState[b] ? d.enableVertexAttribArray(b) : d.disableVertexAttribArray(b))
	},
	b.WebGLShaderManager.prototype.setShader = function(a) {
		return this._currentId === a._UID ? !1 : (this._currentId = a._UID, this.currentShader = a, this.gl.useProgram(a.program), this.setAttribs(a.attributes), !0)
	},
	b.WebGLShaderManager.prototype.destroy = function() {
		this.attribState = null,
		this.tempAttribState = null,
		this.primitiveShader.destroy(),
		this.defaultShader.destroy(),
		this.fastShader.destroy(),
		this.stripShader.destroy(),
		this.gl = null
	},
	b.WebGLSpriteBatch = function(a) {
		var b, c, d, e;
		for (this.vertSize = 6, this.size = 2e3, b = 4 * this.size * this.vertSize, c = 6 * this.size, this.vertices = new Float32Array(b), this.indices = new Uint16Array(c), this.lastIndexCount = 0, d = 0, e = 0; c > d; d += 6, e += 4) this.indices[d + 0] = e + 0,
		this.indices[d + 1] = e + 1,
		this.indices[d + 2] = e + 2,
		this.indices[d + 3] = e + 0,
		this.indices[d + 4] = e + 2,
		this.indices[d + 5] = e + 3;
		this.drawing = !1,
		this.currentBatchSize = 0,
		this.currentBaseTexture = null,
		this.setContext(a),
		this.dirty = !0,
		this.textures = [],
		this.blendModes = []
	},
	b.WebGLSpriteBatch.prototype.setContext = function(a) {
		this.gl = a,
		this.vertexBuffer = a.createBuffer(),
		this.indexBuffer = a.createBuffer(),
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
		a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW),
		a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
		a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW),
		this.currentBlendMode = 99999
	},
	b.WebGLSpriteBatch.prototype.begin = function(a) {
		this.renderSession = a,
		this.shader = this.renderSession.shaderManager.defaultShader,
		this.start()
	},
	b.WebGLSpriteBatch.prototype.end = function() {
		this.flush()
	},
	b.WebGLSpriteBatch.prototype.render = function(a) {
		var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, b = a.texture;
		this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = b.baseTexture),
		c = b._uvs,
		c && (d = a.worldAlpha, e = a.tint, f = this.vertices, g = a.anchor.x, h = a.anchor.y, b.trim ? (m = b.trim, j = m.x - g * m.width, i = j + b.crop.width, l = m.y - h * m.height, k = l + b.crop.height) : (i = b.frame.width * (1 - g), j = b.frame.width * -g, k = b.frame.height * (1 - h), l = b.frame.height * -h), n = 4 * this.currentBatchSize * this.vertSize, o = a.worldTransform, p = o.a, q = o.c, r = o.b, s = o.d, t = o.tx, u = o.ty, f[n++] = p * j + r * l + t, f[n++] = s * l + q * j + u, f[n++] = c.x0, f[n++] = c.y0, f[n++] = d, f[n++] = e, f[n++] = p * i + r * l + t, f[n++] = s * l + q * i + u, f[n++] = c.x1, f[n++] = c.y1, f[n++] = d, f[n++] = e, f[n++] = p * i + r * k + t, f[n++] = s * k + q * i + u, f[n++] = c.x2, f[n++] = c.y2, f[n++] = d, f[n++] = e, f[n++] = p * j + r * k + t, f[n++] = s * k + q * j + u, f[n++] = c.x3, f[n++] = c.y3, f[n++] = d, f[n++] = e, this.textures[this.currentBatchSize] = a.texture.baseTexture, this.blendModes[this.currentBatchSize] = a.blendMode, this.currentBatchSize++)
	},
	b.WebGLSpriteBatch.prototype.renderTilingSprite = function(a) {
		var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, c = a.tilingTexture;
		this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = c.baseTexture),
		a._uvs || (a._uvs = new b.TextureUvs),
		d = a._uvs,
		a.tilePosition.x %= c.baseTexture.width * a.tileScaleOffset.x,
		a.tilePosition.y %= c.baseTexture.height * a.tileScaleOffset.y,
		e = a.tilePosition.x / (c.baseTexture.width * a.tileScaleOffset.x),
		f = a.tilePosition.y / (c.baseTexture.height * a.tileScaleOffset.y),
		g = a.width / c.baseTexture.width / (a.tileScale.x * a.tileScaleOffset.x),
		h = a.height / c.baseTexture.height / (a.tileScale.y * a.tileScaleOffset.y),
		d.x0 = 0 - e,
		d.y0 = 0 - f,
		d.x1 = 1 * g - e,
		d.y1 = 0 - f,
		d.x2 = 1 * g - e,
		d.y2 = 1 * h - f,
		d.x3 = 0 - e,
		d.y3 = 1 * h - f,
		i = a.worldAlpha,
		j = a.tint,
		k = this.vertices,
		l = a.width,
		m = a.height,
		n = a.anchor.x,
		o = a.anchor.y,
		p = l * (1 - n),
		q = l * -n,
		r = m * (1 - o),
		s = m * -o,
		t = 4 * this.currentBatchSize * this.vertSize,
		u = a.worldTransform,
		v = u.a,
		w = u.c,
		x = u.b,
		y = u.d,
		z = u.tx,
		A = u.ty,
		k[t++] = v * q + x * s + z,
		k[t++] = y * s + w * q + A,
		k[t++] = d.x0,
		k[t++] = d.y0,
		k[t++] = i,
		k[t++] = j,
		k[t++] = v * p + x * s + z,
		k[t++] = y * s + w * p + A,
		k[t++] = d.x1,
		k[t++] = d.y1,
		k[t++] = i,
		k[t++] = j,
		k[t++] = v * p + x * r + z,
		k[t++] = y * r + w * p + A,
		k[t++] = d.x2,
		k[t++] = d.y2,
		k[t++] = i,
		k[t++] = j,
		k[t++] = v * q + x * r + z,
		k[t++] = y * r + w * q + A,
		k[t++] = d.x3,
		k[t++] = d.y3,
		k[t++] = i,
		k[t++] = j,
		this.textures[this.currentBatchSize] = c.baseTexture,
		this.blendModes[this.currentBatchSize] = a.blendMode,
		this.currentBatchSize++
	},
	b.WebGLSpriteBatch.prototype.flush = function() {
		var a, b, c, d, e, f, g, h, i, j, k, l;
		if (0 !== this.currentBatchSize) {
			for (a = this.gl, this.renderSession.shaderManager.setShader(this.renderSession.shaderManager.defaultShader), this.dirty && (this.dirty = !1, a.activeTexture(a.TEXTURE0), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer), b = this.renderSession.projection, a.uniform2f(this.shader.projectionVector, b.x, b.y), c = 4 * this.vertSize, a.vertexAttribPointer(this.shader.aVertexPosition, 2, a.FLOAT, !1, c, 0), a.vertexAttribPointer(this.shader.aTextureCoord, 2, a.FLOAT, !1, c, 8), a.vertexAttribPointer(this.shader.colorAttribute, 2, a.FLOAT, !1, c, 16)), this.currentBatchSize > .5 * this.size ? a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertices) : (d = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize), a.bufferSubData(a.ARRAY_BUFFER, 0, d)), g = 0, h = 0, i = null, j = this.renderSession.blendModeManager.currentBlendMode, k = 0, l = this.currentBatchSize; l > k; k++) e = this.textures[k],
			f = this.blendModes[k],
			(i !== e || j !== f) && (this.renderBatch(i, g, h), h = k, g = 0, i = e, j = f, this.renderSession.blendModeManager.setBlendMode(j)),
			g++;
			this.renderBatch(i, g, h),
			this.currentBatchSize = 0
		}
	},
	b.WebGLSpriteBatch.prototype.renderBatch = function(a, c, d) {
		if (0 !== c) {
			var e = this.gl;
			e.bindTexture(e.TEXTURE_2D, a._glTextures[e.id] || b.createWebGLTexture(a, e)),
			a._dirty[e.id] && b.updateWebGLTexture(this.currentBaseTexture, e),
			e.drawElements(e.TRIANGLES, 6 * c, e.UNSIGNED_SHORT, 2 * 6 * d),
			this.renderSession.drawCount++
		}
	},
	b.WebGLSpriteBatch.prototype.stop = function() {
		this.flush()
	},
	b.WebGLSpriteBatch.prototype.start = function() {
		this.dirty = !0
	},
	b.WebGLSpriteBatch.prototype.destroy = function() {
		this.vertices = null,
		this.indices = null,
		this.gl.deleteBuffer(this.vertexBuffer),
		this.gl.deleteBuffer(this.indexBuffer),
		this.currentBaseTexture = null,
		this.gl = null
	},
	b.WebGLFastSpriteBatch = function(a) {
		var b, c, d, e;
		for (this.vertSize = 10, this.maxSize = 6e3, this.size = this.maxSize, b = 4 * this.size * this.vertSize, c = 6 * this.maxSize, this.vertices = new Float32Array(b), this.indices = new Uint16Array(c), this.vertexBuffer = null, this.indexBuffer = null, this.lastIndexCount = 0, d = 0, e = 0; c > d; d += 6, e += 4) this.indices[d + 0] = e + 0,
		this.indices[d + 1] = e + 1,
		this.indices[d + 2] = e + 2,
		this.indices[d + 3] = e + 0,
		this.indices[d + 4] = e + 2,
		this.indices[d + 5] = e + 3;
		this.drawing = !1,
		this.currentBatchSize = 0,
		this.currentBaseTexture = null,
		this.currentBlendMode = 0,
		this.renderSession = null,
		this.shader = null,
		this.matrix = null,
		this.setContext(a)
	},
	b.WebGLFastSpriteBatch.prototype.setContext = function(a) {
		this.gl = a,
		this.vertexBuffer = a.createBuffer(),
		this.indexBuffer = a.createBuffer(),
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
		a.bufferData(a.ELEMENT_ARRAY_BUFFER, this.indices, a.STATIC_DRAW),
		a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
		a.bufferData(a.ARRAY_BUFFER, this.vertices, a.DYNAMIC_DRAW)
	},
	b.WebGLFastSpriteBatch.prototype.begin = function(a, b) {
		this.renderSession = b,
		this.shader = this.renderSession.shaderManager.fastShader,
		this.matrix = a.worldTransform.toArray(!0),
		this.start()
	},
	b.WebGLFastSpriteBatch.prototype.end = function() {
		this.flush()
	},
	b.WebGLFastSpriteBatch.prototype.render = function(a) {
		var d, e, b = a.children,
		c = b[0];
		if (c.texture._uvs) {
			for (this.currentBaseTexture = c.texture.baseTexture, c.blendMode !== this.renderSession.blendModeManager.currentBlendMode && (this.flush(), this.renderSession.blendModeManager.setBlendMode(c.blendMode)), d = 0, e = b.length; e > d; d++) this.renderSprite(b[d]);
			this.flush()
		}
	},
	b.WebGLFastSpriteBatch.prototype.renderSprite = function(a) {
		var b, d, e, f, g, h, i, j, c, k;
		a.visible && (a.texture.baseTexture === this.currentBaseTexture || (this.flush(), this.currentBaseTexture = a.texture.baseTexture, a.texture._uvs)) && (c = this.vertices, b = a.texture._uvs, d = a.texture.frame.width, e = a.texture.frame.height, a.texture.trim ? (k = a.texture.trim, g = k.x - a.anchor.x * k.width, f = g + a.texture.crop.width, i = k.y - a.anchor.y * k.height, h = i + a.texture.crop.height) : (f = a.texture.frame.width * (1 - a.anchor.x), g = a.texture.frame.width * -a.anchor.x, h = a.texture.frame.height * (1 - a.anchor.y), i = a.texture.frame.height * -a.anchor.y), j = 4 * this.currentBatchSize * this.vertSize, c[j++] = g, c[j++] = i, c[j++] = a.position.x, c[j++] = a.position.y, c[j++] = a.scale.x, c[j++] = a.scale.y, c[j++] = a.rotation, c[j++] = b.x0, c[j++] = b.y1, c[j++] = a.alpha, c[j++] = f, c[j++] = i, c[j++] = a.position.x, c[j++] = a.position.y, c[j++] = a.scale.x, c[j++] = a.scale.y, c[j++] = a.rotation, c[j++] = b.x1, c[j++] = b.y1, c[j++] = a.alpha, c[j++] = f, c[j++] = h, c[j++] = a.position.x, c[j++] = a.position.y, c[j++] = a.scale.x, c[j++] = a.scale.y, c[j++] = a.rotation, c[j++] = b.x2, c[j++] = b.y2, c[j++] = a.alpha, c[j++] = g, c[j++] = h, c[j++] = a.position.x, c[j++] = a.position.y, c[j++] = a.scale.x, c[j++] = a.scale.y, c[j++] = a.rotation, c[j++] = b.x3, c[j++] = b.y3, c[j++] = a.alpha, this.currentBatchSize++, this.currentBatchSize >= this.size && this.flush())
	},
	b.WebGLFastSpriteBatch.prototype.flush = function() {
		var a, c;
		0 !== this.currentBatchSize && (a = this.gl, this.currentBaseTexture._glTextures[a.id] || b.createWebGLTexture(this.currentBaseTexture, a), a.bindTexture(a.TEXTURE_2D, this.currentBaseTexture._glTextures[a.id]), this.currentBatchSize > .5 * this.size ? a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertices) : (c = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize), a.bufferSubData(a.ARRAY_BUFFER, 0, c)), a.drawElements(a.TRIANGLES, 6 * this.currentBatchSize, a.UNSIGNED_SHORT, 0), this.currentBatchSize = 0, this.renderSession.drawCount++)
	},
	b.WebGLFastSpriteBatch.prototype.stop = function() {
		this.flush()
	},
	b.WebGLFastSpriteBatch.prototype.start = function() {
		var b, c, a = this.gl;
		a.activeTexture(a.TEXTURE0),
		a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
		b = this.renderSession.projection,
		a.uniform2f(this.shader.projectionVector, b.x, b.y),
		a.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix),
		c = 4 * this.vertSize,
		a.vertexAttribPointer(this.shader.aVertexPosition, 2, a.FLOAT, !1, c, 0),
		a.vertexAttribPointer(this.shader.aPositionCoord, 2, a.FLOAT, !1, c, 8),
		a.vertexAttribPointer(this.shader.aScale, 2, a.FLOAT, !1, c, 16),
		a.vertexAttribPointer(this.shader.aRotation, 1, a.FLOAT, !1, c, 24),
		a.vertexAttribPointer(this.shader.aTextureCoord, 2, a.FLOAT, !1, c, 28),
		a.vertexAttribPointer(this.shader.colorAttribute, 1, a.FLOAT, !1, c, 36)
	},
	b.WebGLFilterManager = function(a, b) {
		this.transparent = b,
		this.filterStack = [],
		this.offsetX = 0,
		this.offsetY = 0,
		this.setContext(a)
	},
	b.WebGLFilterManager.prototype.setContext = function(a) {
		this.gl = a,
		this.texturePool = [],
		this.initShaderBuffers()
	},
	b.WebGLFilterManager.prototype.begin = function(a, b) {
		this.renderSession = a,
		this.defaultShader = a.shaderManager.defaultShader;
		var c = this.renderSession.projection;
		this.width = 2 * c.x,
		this.height = 2 * -c.y,
		this.buffer = b
	},
	b.WebGLFilterManager.prototype.pushFilter = function(a) {
		var f, g, h, i, c = this.gl,
		d = this.renderSession.projection,
		e = this.renderSession.offset;
		a._filterArea = a.target.filterArea || a.target.getBounds(),
		this.filterStack.push(a),
		f = a.filterPasses[0],
		this.offsetX += a._filterArea.x,
		this.offsetY += a._filterArea.y,
		g = this.texturePool.pop(),
		g ? g.resize(this.width, this.height) : g = new b.FilterTexture(this.gl, this.width, this.height),
		c.bindTexture(c.TEXTURE_2D, g.texture),
		h = a._filterArea,
		i = f.padding,
		h.x -= i,
		h.y -= i,
		h.width += 2 * i,
		h.height += 2 * i,
		h.x < 0 && (h.x = 0),
		h.width > this.width && (h.width = this.width),
		h.y < 0 && (h.y = 0),
		h.height > this.height && (h.height = this.height),
		c.bindFramebuffer(c.FRAMEBUFFER, g.frameBuffer),
		c.viewport(0, 0, h.width, h.height),
		d.x = h.width / 2,
		d.y = -h.height / 2,
		e.x = -h.x,
		e.y = -h.y,
		this.renderSession.shaderManager.setShader(this.defaultShader),
		c.uniform2f(this.defaultShader.projectionVector, h.width / 2, -h.height / 2),
		c.uniform2f(this.defaultShader.offsetVector, -h.x, -h.y),
		c.colorMask(!0, !0, !0, !0),
		c.clearColor(0, 0, 0, 0),
		c.clear(c.COLOR_BUFFER_BIT),
		a._glFilterTexture = g
	},
	b.WebGLFilterManager.prototype.popFilter = function() {
		var h, i, j, k, l, m, n, o, p, q, r, s, t, u, a = this.gl,
		c = this.filterStack.pop(),
		d = c._filterArea,
		e = c._glFilterTexture,
		f = this.renderSession.projection,
		g = this.renderSession.offset;
		if (c.filterPasses.length > 1) {
			for (a.viewport(0, 0, d.width, d.height), a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = 0, this.vertexArray[1] = d.height, this.vertexArray[2] = d.width, this.vertexArray[3] = d.height, this.vertexArray[4] = 0, this.vertexArray[5] = 0, this.vertexArray[6] = d.width, this.vertexArray[7] = 0, a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray), a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = d.width / this.width, this.uvArray[5] = d.height / this.height, this.uvArray[6] = d.width / this.width, this.uvArray[7] = d.height / this.height, a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray), h = e, i = this.texturePool.pop(), i || (i = new b.FilterTexture(this.gl, this.width, this.height)), i.resize(this.width, this.height), a.bindFramebuffer(a.FRAMEBUFFER, i.frameBuffer), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.BLEND), j = 0; j < c.filterPasses.length - 1; j++) k = c.filterPasses[j],
			a.bindFramebuffer(a.FRAMEBUFFER, i.frameBuffer),
			a.activeTexture(a.TEXTURE0),
			a.bindTexture(a.TEXTURE_2D, h.texture),
			this.applyFilterPass(k, d, d.width, d.height),
			l = h,
			h = i,
			i = l;
			a.enable(a.BLEND),
			e = h,
			this.texturePool.push(i)
		}
		m = c.filterPasses[c.filterPasses.length - 1],
		this.offsetX -= d.x,
		this.offsetY -= d.y,
		n = this.width,
		o = this.height,
		p = 0,
		q = 0,
		r = this.buffer,
		0 === this.filterStack.length ? a.colorMask(!0, !0, !0, !0) : (s = this.filterStack[this.filterStack.length - 1], d = s._filterArea, n = d.width, o = d.height, p = d.x, q = d.y, r = s._glFilterTexture.frameBuffer),
		f.x = n / 2,
		f.y = -o / 2,
		g.x = p,
		g.y = q,
		d = c._filterArea,
		t = d.x - p,
		u = d.y - q,
		a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
		this.vertexArray[0] = t,
		this.vertexArray[1] = u + d.height,
		this.vertexArray[2] = t + d.width,
		this.vertexArray[3] = u + d.height,
		this.vertexArray[4] = t,
		this.vertexArray[5] = u,
		this.vertexArray[6] = t + d.width,
		this.vertexArray[7] = u,
		a.bufferSubData(a.ARRAY_BUFFER, 0, this.vertexArray),
		a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer),
		this.uvArray[2] = d.width / this.width,
		this.uvArray[5] = d.height / this.height,
		this.uvArray[6] = d.width / this.width,
		this.uvArray[7] = d.height / this.height,
		a.bufferSubData(a.ARRAY_BUFFER, 0, this.uvArray),
		a.viewport(0, 0, n, o),
		a.bindFramebuffer(a.FRAMEBUFFER, r),
		a.activeTexture(a.TEXTURE0),
		a.bindTexture(a.TEXTURE_2D, e.texture),
		this.applyFilterPass(m, d, n, o),
		this.renderSession.shaderManager.setShader(this.defaultShader),
		a.uniform2f(this.defaultShader.projectionVector, n / 2, -o / 2),
		a.uniform2f(this.defaultShader.offsetVector, -p, -q),
		this.texturePool.push(e),
		c._glFilterTexture = null
	},
	b.WebGLFilterManager.prototype.applyFilterPass = function(a, c, d, e) {
		var f = this.gl,
		g = a.shaders[f.id];
		g || (g = new b.PixiShader(f), g.fragmentSrc = a.fragmentSrc, g.uniforms = a.uniforms, g.init(), a.shaders[f.id] = g),
		this.renderSession.shaderManager.setShader(g),
		f.uniform2f(g.projectionVector, d / 2, -e / 2),
		f.uniform2f(g.offsetVector, 0, 0),
		a.uniforms.dimensions && (a.uniforms.dimensions.value[0] = this.width, a.uniforms.dimensions.value[1] = this.height, a.uniforms.dimensions.value[2] = this.vertexArray[0], a.uniforms.dimensions.value[3] = this.vertexArray[5]),
		g.syncUniforms(),
		f.bindBuffer(f.ARRAY_BUFFER, this.vertexBuffer),
		f.vertexAttribPointer(g.aVertexPosition, 2, f.FLOAT, !1, 0, 0),
		f.bindBuffer(f.ARRAY_BUFFER, this.uvBuffer),
		f.vertexAttribPointer(g.aTextureCoord, 2, f.FLOAT, !1, 0, 0),
		f.bindBuffer(f.ARRAY_BUFFER, this.colorBuffer),
		f.vertexAttribPointer(g.colorAttribute, 2, f.FLOAT, !1, 0, 0),
		f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
		f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0),
		this.renderSession.drawCount++
	},
	b.WebGLFilterManager.prototype.initShaderBuffers = function() {
		var a = this.gl;
		this.vertexBuffer = a.createBuffer(),
		this.uvBuffer = a.createBuffer(),
		this.colorBuffer = a.createBuffer(),
		this.indexBuffer = a.createBuffer(),
		this.vertexArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
		a.bindBuffer(a.ARRAY_BUFFER, this.vertexBuffer),
		a.bufferData(a.ARRAY_BUFFER, this.vertexArray, a.STATIC_DRAW),
		this.uvArray = new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]),
		a.bindBuffer(a.ARRAY_BUFFER, this.uvBuffer),
		a.bufferData(a.ARRAY_BUFFER, this.uvArray, a.STATIC_DRAW),
		this.colorArray = new Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]),
		a.bindBuffer(a.ARRAY_BUFFER, this.colorBuffer),
		a.bufferData(a.ARRAY_BUFFER, this.colorArray, a.STATIC_DRAW),
		a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
		a.bufferData(a.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), a.STATIC_DRAW)
	},
	b.WebGLFilterManager.prototype.destroy = function() {
		var b, a = this.gl;
		for (this.filterStack = null, this.offsetX = 0, this.offsetY = 0, b = 0; b < this.texturePool.length; b++) this.texturePool[b].destroy();
		this.texturePool = null,
		a.deleteBuffer(this.vertexBuffer),
		a.deleteBuffer(this.uvBuffer),
		a.deleteBuffer(this.colorBuffer),
		a.deleteBuffer(this.indexBuffer)
	},
	b.FilterTexture = function(a, c, d, e) {
		this.gl = a,
		this.frameBuffer = a.createFramebuffer(),
		this.texture = a.createTexture(),
		e = e || b.scaleModes.DEFAULT,
		a.bindTexture(a.TEXTURE_2D, this.texture),
		a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, e === b.scaleModes.LINEAR ? a.LINEAR: a.NEAREST),
		a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, e === b.scaleModes.LINEAR ? a.LINEAR: a.NEAREST),
		a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
		a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
		a.bindFramebuffer(a.FRAMEBUFFER, this.framebuffer),
		a.bindFramebuffer(a.FRAMEBUFFER, this.frameBuffer),
		a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.texture, 0),
		this.renderBuffer = a.createRenderbuffer(),
		a.bindRenderbuffer(a.RENDERBUFFER, this.renderBuffer),
		a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_STENCIL_ATTACHMENT, a.RENDERBUFFER, this.renderBuffer),
		this.resize(c, d)
	},
	b.FilterTexture.prototype.clear = function() {
		var a = this.gl;
		a.clearColor(0, 0, 0, 0),
		a.clear(a.COLOR_BUFFER_BIT)
	},
	b.FilterTexture.prototype.resize = function(a, b) {
		if (this.width !== a || this.height !== b) {
			this.width = a,
			this.height = b;
			var c = this.gl;
			c.bindTexture(c.TEXTURE_2D, this.texture),
			c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, a, b, 0, c.RGBA, c.UNSIGNED_BYTE, null),
			c.bindRenderbuffer(c.RENDERBUFFER, this.renderBuffer),
			c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_STENCIL, a, b)
		}
	},
	b.FilterTexture.prototype.destroy = function() {
		var a = this.gl;
		a.deleteFramebuffer(this.frameBuffer),
		a.deleteTexture(this.texture),
		this.frameBuffer = null,
		this.texture = null
	},
	b.CanvasMaskManager = function() {},
	b.CanvasMaskManager.prototype.pushMask = function(a, c) {
		var d, e;
		c.save(),
		d = a.alpha,
		e = a.worldTransform,
		c.setTransform(e.a, e.c, e.b, e.d, e.tx, e.ty),
		b.CanvasGraphics.renderGraphicsMask(a, c),
		c.clip(),
		a.worldAlpha = d
	},
	b.CanvasMaskManager.prototype.popMask = function(a) {
		a.restore()
	},
	b.CanvasTinter = function() {},
	b.CanvasTinter.getTintedTexture = function(a, c) {
		var e, f, g, d = a.texture;
		return c = b.CanvasTinter.roundColor(c),
		e = "#" + ("00000" + (0 | c).toString(16)).substr( - 6),
		d.tintCache = d.tintCache || {},
		d.tintCache[e] ? d.tintCache[e] : (f = b.CanvasTinter.canvas || document.createElement("canvas"), b.CanvasTinter.tintMethod(d, c, f), b.CanvasTinter.convertTintToImage ? (g = new Image, g.src = f.toDataURL(), d.tintCache[e] = g) : (d.tintCache[e] = f, b.CanvasTinter.canvas = null), f)
	},
	b.CanvasTinter.tintWithMultiply = function(a, b, c) {
		var d = c.getContext("2d"),
		e = a.frame;
		c.width = e.width,
		c.height = e.height,
		d.fillStyle = "#" + ("00000" + (0 | b).toString(16)).substr( - 6),
		d.fillRect(0, 0, e.width, e.height),
		d.globalCompositeOperation = "multiply",
		d.drawImage(a.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height),
		d.globalCompositeOperation = "destination-atop",
		d.drawImage(a.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height)
	},
	b.CanvasTinter.tintWithOverlay = function(a, b, c) {
		var d = c.getContext("2d"),
		e = a.frame;
		c.width = e.width,
		c.height = e.height,
		d.globalCompositeOperation = "copy",
		d.fillStyle = "#" + ("00000" + (0 | b).toString(16)).substr( - 6),
		d.fillRect(0, 0, e.width, e.height),
		d.globalCompositeOperation = "destination-atop",
		d.drawImage(a.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height)
	},
	b.CanvasTinter.tintWithPerPixel = function(a, c, d) {
		var g, h, i, j, k, l, m, e = d.getContext("2d"),
		f = a.frame;
		for (d.width = f.width, d.height = f.height, e.globalCompositeOperation = "copy", e.drawImage(a.baseTexture.source, f.x, f.y, f.width, f.height, 0, 0, f.width, f.height), g = b.hex2rgb(c), h = g[0], i = g[1], j = g[2], k = e.getImageData(0, 0, f.width, f.height), l = k.data, m = 0; m < l.length; m += 4) l[m + 0] *= h,
		l[m + 1] *= i,
		l[m + 2] *= j;
		e.putImageData(k, 0, 0)
	},
	b.CanvasTinter.roundColor = function(a) {
		var c = b.CanvasTinter.cacheStepsPerColorChannel,
		d = b.hex2rgb(a);
		return d[0] = Math.min(255, d[0] / c * c),
		d[1] = Math.min(255, d[1] / c * c),
		d[2] = Math.min(255, d[2] / c * c),
		b.rgb2hex(d)
	},
	b.CanvasTinter.cacheStepsPerColorChannel = 8,
	b.CanvasTinter.convertTintToImage = !1,
	b.CanvasTinter.canUseMultiply = b.canUseNewCanvasBlendModes(),
	b.CanvasTinter.tintMethod = b.CanvasTinter.canUseMultiply ? b.CanvasTinter.tintWithMultiply: b.CanvasTinter.tintWithPerPixel,
	b.CanvasRenderer = function(a, c, d, e) {
		b.defaultRenderer || (b.sayHello("Canvas"), b.defaultRenderer = this),
		this.type = b.CANVAS_RENDERER,
		this.clearBeforeRender = !0,
		this.transparent = !!e,
		b.blendModesCanvas || (b.blendModesCanvas = [], b.canUseNewCanvasBlendModes() ? (b.blendModesCanvas[b.blendModes.NORMAL] = "source-over", b.blendModesCanvas[b.blendModes.ADD] = "lighter", b.blendModesCanvas[b.blendModes.MULTIPLY] = "multiply", b.blendModesCanvas[b.blendModes.SCREEN] = "screen", b.blendModesCanvas[b.blendModes.OVERLAY] = "overlay", b.blendModesCanvas[b.blendModes.DARKEN] = "darken", b.blendModesCanvas[b.blendModes.LIGHTEN] = "lighten", b.blendModesCanvas[b.blendModes.COLOR_DODGE] = "color-dodge", b.blendModesCanvas[b.blendModes.COLOR_BURN] = "color-burn", b.blendModesCanvas[b.blendModes.HARD_LIGHT] = "hard-light", b.blendModesCanvas[b.blendModes.SOFT_LIGHT] = "soft-light", b.blendModesCanvas[b.blendModes.DIFFERENCE] = "difference", b.blendModesCanvas[b.blendModes.EXCLUSION] = "exclusion", b.blendModesCanvas[b.blendModes.HUE] = "hue", b.blendModesCanvas[b.blendModes.SATURATION] = "saturation", b.blendModesCanvas[b.blendModes.COLOR] = "color", b.blendModesCanvas[b.blendModes.LUMINOSITY] = "luminosity") : (b.blendModesCanvas[b.blendModes.NORMAL] = "source-over", b.blendModesCanvas[b.blendModes.ADD] = "lighter", b.blendModesCanvas[b.blendModes.MULTIPLY] = "source-over", b.blendModesCanvas[b.blendModes.SCREEN] = "source-over", b.blendModesCanvas[b.blendModes.OVERLAY] = "source-over", b.blendModesCanvas[b.blendModes.DARKEN] = "source-over", b.blendModesCanvas[b.blendModes.LIGHTEN] = "source-over", b.blendModesCanvas[b.blendModes.COLOR_DODGE] = "source-over", b.blendModesCanvas[b.blendModes.COLOR_BURN] = "source-over", b.blendModesCanvas[b.blendModes.HARD_LIGHT] = "source-over", b.blendModesCanvas[b.blendModes.SOFT_LIGHT] = "source-over", b.blendModesCanvas[b.blendModes.DIFFERENCE] = "source-over", b.blendModesCanvas[b.blendModes.EXCLUSION] = "source-over", b.blendModesCanvas[b.blendModes.HUE] = "source-over", b.blendModesCanvas[b.blendModes.SATURATION] = "source-over", b.blendModesCanvas[b.blendModes.COLOR] = "source-over", b.blendModesCanvas[b.blendModes.LUMINOSITY] = "source-over")),
		this.width = a || 800,
		this.height = c || 600,
		this.view = d || document.createElement("canvas"),
		this.context = this.view.getContext("2d", {
			alpha: this.transparent
		}),
		this.refresh = !0,
		this.view.width = this.width,
		this.view.height = this.height,
		this.count = 0,
		this.maskManager = new b.CanvasMaskManager,
		this.renderSession = {
			context: this.context,
			maskManager: this.maskManager,
			scaleMode: null,
			smoothProperty: null,
			roundPixels: !1
		},
		"imageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "imageSmoothingEnabled": "webkitImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "webkitImageSmoothingEnabled": "mozImageSmoothingEnabled" in this.context ? this.renderSession.smoothProperty = "mozImageSmoothingEnabled": "oImageSmoothingEnabled" in this.context && (this.renderSession.smoothProperty = "oImageSmoothingEnabled")
	},
	b.CanvasRenderer.prototype.constructor = b.CanvasRenderer,
	b.CanvasRenderer.prototype.render = function(a) {
		b.texturesToUpdate.length = 0,
		b.texturesToDestroy.length = 0,
		a.updateTransform(),
		this.context.setTransform(1, 0, 0, 1, 0, 0),
		this.context.globalAlpha = 1,
		navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()),
		!this.transparent && this.clearBeforeRender ? (this.context.fillStyle = a.backgroundColorString, this.context.fillRect(0, 0, this.width, this.height)) : this.transparent && this.clearBeforeRender && this.context.clearRect(0, 0, this.width, this.height),
		this.renderDisplayObject(a),
		a.interactive && (a._interactiveEventsAdded || (a._interactiveEventsAdded = !0, a.interactionManager.setTarget(this))),
		b.Texture.frameUpdates.length > 0 && (b.Texture.frameUpdates.length = 0)
	},
	b.CanvasRenderer.prototype.resize = function(a, b) {
		this.width = a,
		this.height = b,
		this.view.width = a,
		this.view.height = b
	},
	b.CanvasRenderer.prototype.renderDisplayObject = function(a, b) {
		this.renderSession.context = b || this.context,
		a._renderCanvas(this.renderSession)
	},
	b.CanvasRenderer.prototype.renderStripFlat = function(a) {
		var e, f, g, h, i, j, k, l, b = this.context,
		c = a.verticies,
		d = c.length / 2;
		for (this.count++, b.beginPath(), e = 1; d - 2 > e; e++) f = 2 * e,
		g = c[f],
		h = c[f + 2],
		i = c[f + 4],
		j = c[f + 1],
		k = c[f + 3],
		l = c[f + 5],
		b.moveTo(g, j),
		b.lineTo(h, k),
		b.lineTo(i, l);
		b.fillStyle = "#FF0000",
		b.fill(),
		b.closePath()
	},
	b.CanvasRenderer.prototype.renderStrip = function(a) {
		var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, b = this.context,
		c = a.verticies,
		d = a.uvs,
		e = c.length / 2;
		for (this.count++, f = 1; e - 2 > f; f++) g = 2 * f,
		h = c[g],
		i = c[g + 2],
		j = c[g + 4],
		k = c[g + 1],
		l = c[g + 3],
		m = c[g + 5],
		n = d[g] * a.texture.width,
		o = d[g + 2] * a.texture.width,
		p = d[g + 4] * a.texture.width,
		q = d[g + 1] * a.texture.height,
		r = d[g + 3] * a.texture.height,
		s = d[g + 5] * a.texture.height,
		b.save(),
		b.beginPath(),
		b.moveTo(h, k),
		b.lineTo(i, l),
		b.lineTo(j, m),
		b.closePath(),
		b.clip(),
		t = n * r + q * p + o * s - r * p - q * o - n * s,
		u = h * r + q * j + i * s - r * j - q * i - h * s,
		v = n * i + h * p + o * j - i * p - h * o - n * j,
		w = n * r * j + q * i * p + h * o * s - h * r * p - q * o * j - n * i * s,
		x = k * r + q * m + l * s - r * m - q * l - k * s,
		y = n * l + k * p + o * m - l * p - k * o - n * m,
		z = n * r * m + q * l * p + k * o * s - k * r * p - q * o * m - n * l * s,
		b.transform(u / t, x / t, v / t, y / t, w / t, z / t),
		b.drawImage(a.texture.baseTexture.source, 0, 0),
		b.restore()
	},
	b.CanvasBuffer = function(a, b) {
		this.width = a,
		this.height = b,
		this.canvas = document.createElement("canvas"),
		this.context = this.canvas.getContext("2d"),
		this.canvas.width = a,
		this.canvas.height = b
	},
	b.CanvasBuffer.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height)
	},
	b.CanvasBuffer.prototype.resize = function(a, b) {
		this.width = this.canvas.width = a,
		this.height = this.canvas.height = b
	},
	b.CanvasGraphics = function() {},
	b.CanvasGraphics.renderGraphics = function(a, c) {
		var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, d = a.worldAlpha,
		e = "";
		for (f = 0; f < a.graphicsData.length; f++) if (g = a.graphicsData[f], h = g.points, c.strokeStyle = e = "#" + ("00000" + (0 | g.lineColor).toString(16)).substr( - 6), c.lineWidth = g.lineWidth, g.type === b.Graphics.POLY) {
			for (c.beginPath(), c.moveTo(h[0], h[1]), i = 1; i < h.length / 2; i++) c.lineTo(h[2 * i], h[2 * i + 1]);
			h[0] === h[h.length - 2] && h[1] === h[h.length - 1] && c.closePath(),
			g.fill && (c.globalAlpha = g.fillAlpha * d, c.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr( - 6), c.fill()),
			g.lineWidth && (c.globalAlpha = g.lineAlpha * d, c.stroke())
		} else g.type === b.Graphics.RECT ? ((g.fillColor || 0 === g.fillColor) && (c.globalAlpha = g.fillAlpha * d, c.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr( - 6), c.fillRect(h[0], h[1], h[2], h[3])), g.lineWidth && (c.globalAlpha = g.lineAlpha * d, c.strokeRect(h[0], h[1], h[2], h[3]))) : g.type === b.Graphics.CIRC ? (c.beginPath(), c.arc(h[0], h[1], h[2], 0, 2 * Math.PI), c.closePath(), g.fill && (c.globalAlpha = g.fillAlpha * d, c.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr( - 6), c.fill()), g.lineWidth && (c.globalAlpha = g.lineAlpha * d, c.stroke())) : g.type === b.Graphics.ELIP ? (j = g.points, k = 2 * j[2], l = 2 * j[3], m = j[0] - k / 2, n = j[1] - l / 2, c.beginPath(), o = .5522848, p = k / 2 * o, q = l / 2 * o, r = m + k, s = n + l, t = m + k / 2, u = n + l / 2, c.moveTo(m, u), c.bezierCurveTo(m, u - q, t - p, n, t, n), c.bezierCurveTo(t + p, n, r, u - q, r, u), c.bezierCurveTo(r, u + q, t + p, s, t, s), c.bezierCurveTo(t - p, s, m, u + q, m, u), c.closePath(), g.fill && (c.globalAlpha = g.fillAlpha * d, c.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr( - 6), c.fill()), g.lineWidth && (c.globalAlpha = g.lineAlpha * d, c.stroke())) : g.type === b.Graphics.RREC && (v = h[0], w = h[1], x = h[2], y = h[3], z = h[4], A = 0 | Math.min(x, y) / 2, z = z > A ? A: z, c.beginPath(), c.moveTo(v, w + z), c.lineTo(v, w + y - z), c.quadraticCurveTo(v, w + y, v + z, w + y), c.lineTo(v + x - z, w + y), c.quadraticCurveTo(v + x, w + y, v + x, w + y - z), c.lineTo(v + x, w + z), c.quadraticCurveTo(v + x, w, v + x - z, w), c.lineTo(v + z, w), c.quadraticCurveTo(v, w, v, w + z), c.closePath(), (g.fillColor || 0 === g.fillColor) && (c.globalAlpha = g.fillAlpha * d, c.fillStyle = e = "#" + ("00000" + (0 | g.fillColor).toString(16)).substr( - 6), c.fill()), g.lineWidth && (c.globalAlpha = g.lineAlpha * d, c.stroke()))
	},
	b.CanvasGraphics.renderGraphicsMask = function(a, c) {
		var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, d = a.graphicsData.length;
		if (0 !== d) for (d > 1 && (d = 1, window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object")), e = 0; 1 > e; e++) if (f = a.graphicsData[e], g = f.points, f.type === b.Graphics.POLY) {
			for (c.beginPath(), c.moveTo(g[0], g[1]), h = 1; h < g.length / 2; h++) c.lineTo(g[2 * h], g[2 * h + 1]);
			g[0] === g[g.length - 2] && g[1] === g[g.length - 1] && c.closePath()
		} else f.type === b.Graphics.RECT ? (c.beginPath(), c.rect(g[0], g[1], g[2], g[3]), c.closePath()) : f.type === b.Graphics.CIRC ? (c.beginPath(), c.arc(g[0], g[1], g[2], 0, 2 * Math.PI), c.closePath()) : f.type === b.Graphics.ELIP ? (i = f.points, j = 2 * i[2], k = 2 * i[3], l = i[0] - j / 2, m = i[1] - k / 2, c.beginPath(), n = .5522848, o = j / 2 * n, p = k / 2 * n, q = l + j, r = m + k, s = l + j / 2, t = m + k / 2, c.moveTo(l, t), c.bezierCurveTo(l, t - p, s - o, m, s, m), c.bezierCurveTo(s + o, m, q, t - p, q, t), c.bezierCurveTo(q, t + p, s + o, r, s, r), c.bezierCurveTo(s - o, r, l, t + p, l, t), c.closePath()) : f.type === b.Graphics.RREC && (u = g[0], v = g[1], w = g[2], x = g[3], y = g[4], z = 0 | Math.min(w, x) / 2, y = y > z ? z: y, c.beginPath(), c.moveTo(u, v + y), c.lineTo(u, v + x - y), c.quadraticCurveTo(u, v + x, u + y, v + x), c.lineTo(u + w - y, v + x), c.quadraticCurveTo(u + w, v + x, u + w, v + x - y), c.lineTo(u + w, v + y), c.quadraticCurveTo(u + w, v, u + w - y, v), c.lineTo(u + y, v), c.quadraticCurveTo(u, v, u, v + y), c.closePath())
	},
	b.Graphics = function() {
		b.DisplayObjectContainer.call(this),
		this.renderable = !0,
		this.fillAlpha = 1,
		this.lineWidth = 0,
		this.lineColor = "black",
		this.graphicsData = [],
		this.tint = 16777215,
		this.blendMode = b.blendModes.NORMAL,
		this.currentPath = {
			points: []
		},
		this._webGL = [],
		this.isMask = !1,
		this.bounds = null,
		this.boundsPadding = 10,
		this.dirty = !0
	},
	b.Graphics.prototype = Object.create(b.DisplayObjectContainer.prototype),
	b.Graphics.prototype.constructor = b.Graphics,
	Object.defineProperty(b.Graphics.prototype, "cacheAsBitmap", {
		get: function() {
			return this._cacheAsBitmap
		},
		set: function(a) {
			this._cacheAsBitmap = a,
			this._cacheAsBitmap ? this._generateCachedSprite() : (this.destroyCachedSprite(), this.dirty = !0)
		}
	}),
	b.Graphics.prototype.lineStyle = function(a, c, d) {
		return this.currentPath.points.length || this.graphicsData.pop(),
		this.lineWidth = a || 0,
		this.lineColor = c || 0,
		this.lineAlpha = arguments.length < 3 ? 1 : d,
		this.currentPath = {
			lineWidth: this.lineWidth,
			lineColor: this.lineColor,
			lineAlpha: this.lineAlpha,
			fillColor: this.fillColor,
			fillAlpha: this.fillAlpha,
			fill: this.filling,
			points: [],
			type: b.Graphics.POLY
		},
		this.graphicsData.push(this.currentPath),
		this
	},
	b.Graphics.prototype.moveTo = function(a, c) {
		return this.currentPath.points.length || this.graphicsData.pop(),
		this.currentPath = this.currentPath = {
			lineWidth: this.lineWidth,
			lineColor: this.lineColor,
			lineAlpha: this.lineAlpha,
			fillColor: this.fillColor,
			fillAlpha: this.fillAlpha,
			fill: this.filling,
			points: [],
			type: b.Graphics.POLY
		},
		this.currentPath.points.push(a, c),
		this.graphicsData.push(this.currentPath),
		this
	},
	b.Graphics.prototype.lineTo = function(a, b) {
		return this.currentPath.points.push(a, b),
		this.dirty = !0,
		this
	},
	b.Graphics.prototype.quadraticCurveTo = function(a, b, c, d) {
		var e, f, g, h, i, j, k, l;
		for (0 === this.currentPath.points.length && this.moveTo(0, 0), g = 20, h = this.currentPath.points, 0 === h.length && this.moveTo(0, 0), i = h[h.length - 2], j = h[h.length - 1], k = 0, l = 1; g >= l; l++) k = l / g,
		e = i + (a - i) * k,
		f = j + (b - j) * k,
		h.push(e + (a + (c - a) * k - e) * k, f + (b + (d - b) * k - f) * k);
		return this.dirty = !0,
		this
	},
	b.Graphics.prototype.bezierCurveTo = function(a, b, c, d, e, f) {
		var h, i, j, k, l, g, m, n, o, p, q;
		for (0 === this.currentPath.points.length && this.moveTo(0, 0), g = 20, m = this.currentPath.points, n = m[m.length - 2], o = m[m.length - 1], p = 0, q = 1; g > q; q++) p = q / g,
		h = 1 - p,
		i = h * h,
		j = i * h,
		k = p * p,
		l = k * p,
		m.push(j * n + 3 * i * p * a + 3 * h * k * c + l * e, j * o + 3 * i * p * b + 3 * h * k * d + l * f);
		return this.dirty = !0,
		this
	},
	b.Graphics.prototype.arcTo = function(a, b, c, d, e) {
		var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B;
		return 0 === this.currentPath.points.length && this.moveTo(a, b),
		f = this.currentPath.points,
		g = f[f.length - 2],
		h = f[f.length - 1],
		i = h - b,
		j = g - a,
		k = d - b,
		l = c - a,
		m = Math.abs(i * l - j * k),
		1e-8 > m || 0 === e ? f.push(a, b) : (n = i * i + j * j, o = k * k + l * l, p = i * k + j * l, q = e * Math.sqrt(n) / m, r = e * Math.sqrt(o) / m, s = q * p / n, t = r * p / o, u = q * l + r * j, v = q * k + r * i, w = j * (r + s), x = i * (r + s), y = l * (q + t), z = k * (q + t), A = Math.atan2(x - v, w - u), B = Math.atan2(z - v, y - u), this.arc(u + a, v + b, e, A, B, j * k > l * i)),
		this.dirty = !0,
		this
	},
	b.Graphics.prototype.arc = function(a, b, c, d, e, f) {
		var j, k, l, m, n, o, p, q, r, s, t, u, v, g = a + Math.cos(d) * c,
		h = b + Math.sin(d) * c,
		i = this.currentPath.points;
		if ((0 !== i.length && i[i.length - 2] !== g || i[i.length - 1] !== h) && (this.moveTo(g, h), i = this.currentPath.points), d === e) return this;
		if (!f && d >= e ? e += 2 * Math.PI: f && e >= d && (d += 2 * Math.PI), j = f ? -1 * (d - e) : e - d, k = 40 * (Math.abs(j) / (2 * Math.PI)), 0 === j) return this;
		for (l = j / (2 * k), m = 2 * l, n = Math.cos(l), o = Math.sin(l), p = k - 1, q = p % 1 / p, r = 0; p >= r; r++) s = r + q * r,
		t = l + d + m * s,
		u = Math.cos(t),
		v = -Math.sin(t),
		i.push((n * u + o * v) * c + a, (n * -v + o * u) * c + b);
		return this.dirty = !0,
		this
	},
	b.Graphics.prototype.drawPath = function(a) {
		return this.currentPath.points.length || this.graphicsData.pop(),
		this.currentPath = this.currentPath = {
			lineWidth: this.lineWidth,
			lineColor: this.lineColor,
			lineAlpha: this.lineAlpha,
			fillColor: this.fillColor,
			fillAlpha: this.fillAlpha,
			fill: this.filling,
			points: [],
			type: b.Graphics.POLY
		},
		this.graphicsData.push(this.currentPath),
		this.currentPath.points = this.currentPath.points.concat(a),
		this.dirty = !0,
		this
	},
	b.Graphics.prototype.beginFill = function(a, b) {
		return this.filling = !0,
		this.fillColor = a || 0,
		this.fillAlpha = arguments.length < 2 ? 1 : b,
		this
	},
	b.Graphics.prototype.endFill = function() {
		return this.filling = !1,
		this.fillColor = null,
		this.fillAlpha = 1,
		this
	},
	b.Graphics.prototype.drawRect = function(a, c, d, e) {
		return this.currentPath.points.length || this.graphicsData.pop(),
		this.currentPath = {
			lineWidth: this.lineWidth,
			lineColor: this.lineColor,
			lineAlpha: this.lineAlpha,
			fillColor: this.fillColor,
			fillAlpha: this.fillAlpha,
			fill: this.filling,
			points: [a, c, d, e],
			type: b.Graphics.RECT
		},
		this.graphicsData.push(this.currentPath),
		this.dirty = !0,
		this
	},
	b.Graphics.prototype.drawRoundedRect = function(a, c, d, e, f) {
		return this.currentPath.points.length || this.graphicsData.pop(),
		this.currentPath = {
			lineWidth: this.lineWidth,
			lineColor: this.lineColor,
			lineAlpha: this.lineAlpha,
			fillColor: this.fillColor,
			fillAlpha: this.fillAlpha,
			fill: this.filling,
			points: [a, c, d, e, f],
			type: b.Graphics.RREC
		},
		this.graphicsData.push(this.currentPath),
		this.dirty = !0,
		this
	},
	b.Graphics.prototype.drawCircle = function(a, c, d) {
		return this.currentPath.points.length || this.graphicsData.pop(),
		this.currentPath = {
			lineWidth: this.lineWidth,
			lineColor: this.lineColor,
			lineAlpha: this.lineAlpha,
			fillColor: this.fillColor,
			fillAlpha: this.fillAlpha,
			fill: this.filling,
			points: [a, c, d, d],
			type: b.Graphics.CIRC
		},
		this.graphicsData.push(this.currentPath),
		this.dirty = !0,
		this
	},
	b.Graphics.prototype.drawEllipse = function(a, c, d, e) {
		return this.currentPath.points.length || this.graphicsData.pop(),
		this.currentPath = {
			lineWidth: this.lineWidth,
			lineColor: this.lineColor,
			lineAlpha: this.lineAlpha,
			fillColor: this.fillColor,
			fillAlpha: this.fillAlpha,
			fill: this.filling,
			points: [a, c, d, e],
			type: b.Graphics.ELIP
		},
		this.graphicsData.push(this.currentPath),
		this.dirty = !0,
		this
	},
	b.Graphics.prototype.clear = function() {
		return this.lineWidth = 0,
		this.filling = !1,
		this.dirty = !0,
		this.clearDirty = !0,
		this.graphicsData = [],
		this.bounds = null,
		this
	},
	b.Graphics.prototype.generateTexture = function() {
		var a = this.getBounds(),
		c = new b.CanvasBuffer(a.width, a.height),
		d = b.Texture.fromCanvas(c.canvas);
		return c.context.translate( - a.x, -a.y),
		b.CanvasGraphics.renderGraphics(this, c.context),
		d
	},
	b.Graphics.prototype._renderWebGL = function(a) {
		var c, d, e;
		if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
			if (this._cacheAsBitmap) return this.dirty && (this._generateCachedSprite(), b.updateWebGLTexture(this._cachedSprite.texture.baseTexture, a.gl), this.dirty = !1),
			this._cachedSprite.alpha = this.alpha,
			b.Sprite.prototype._renderWebGL.call(this._cachedSprite, a),
			void 0;
			if (a.spriteBatch.stop(), a.blendModeManager.setBlendMode(this.blendMode), this._mask && a.maskManager.pushMask(this._mask, a), this._filters && a.filterManager.pushFilter(this._filterBlock), this.blendMode !== a.spriteBatch.currentBlendMode && (a.spriteBatch.currentBlendMode = this.blendMode, c = b.blendModesWebGL[a.spriteBatch.currentBlendMode], a.spriteBatch.gl.blendFunc(c[0], c[1])), b.WebGLGraphics.renderGraphics(this, a), this.children.length) {
				for (a.spriteBatch.start(), d = 0, e = this.children.length; e > d; d++) this.children[d]._renderWebGL(a);
				a.spriteBatch.stop()
			}
			this._filters && a.filterManager.popFilter(),
			this._mask && a.maskManager.popMask(this.mask, a),
			a.drawCount++,
			a.spriteBatch.start()
		}
	},
	b.Graphics.prototype._renderCanvas = function(a) {
		var c, d, e, f;
		if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
			for (c = a.context, d = this.worldTransform, this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, c.globalCompositeOperation = b.blendModesCanvas[a.currentBlendMode]), this._mask && a.maskManager.pushMask(this._mask, a.context), c.setTransform(d.a, d.c, d.b, d.d, d.tx, d.ty), b.CanvasGraphics.renderGraphics(this, c), e = 0, f = this.children.length; f > e; e++) this.children[e]._renderCanvas(a);
			this._mask && a.maskManager.popMask(a.context)
		}
	},
	b.Graphics.prototype.getBounds = function(a) {
		var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
		return this.bounds || this.updateBounds(),
		b = this.bounds.x,
		c = this.bounds.width + this.bounds.x,
		d = this.bounds.y,
		e = this.bounds.height + this.bounds.y,
		f = a || this.worldTransform,
		g = f.a,
		h = f.c,
		i = f.b,
		j = f.d,
		k = f.tx,
		l = f.ty,
		m = g * c + i * e + k,
		n = j * e + h * c + l,
		o = g * b + i * e + k,
		p = j * e + h * b + l,
		q = g * b + i * d + k,
		r = j * d + h * b + l,
		s = g * c + i * d + k,
		t = j * d + h * c + l,
		u = m,
		v = n,
		w = m,
		x = n,
		w = w > o ? o: w,
		w = w > q ? q: w,
		w = w > s ? s: w,
		x = x > p ? p: x,
		x = x > r ? r: x,
		x = x > t ? t: x,
		u = o > u ? o: u,
		u = q > u ? q: u,
		u = s > u ? s: u,
		v = p > v ? p: v,
		v = r > v ? r: v,
		v = t > v ? t: v,
		y = this._bounds,
		y.x = w,
		y.width = u - w,
		y.y = x,
		y.height = v - x,
		y
	},
	b.Graphics.prototype.updateBounds = function() {
		var f, g, h, i, j, k, l, m, n, o, p, a = 1 / 0,
		c = -1 / 0,
		d = 1 / 0,
		e = -1 / 0;
		for (k = 0; k < this.graphicsData.length; k++) if (l = this.graphicsData[k], m = l.type, n = l.lineWidth, f = l.points, m === b.Graphics.RECT) g = f[0] - n / 2,
		h = f[1] - n / 2,
		i = f[2] + n,
		j = f[3] + n,
		a = a > g ? g: a,
		c = g + i > c ? g + i: c,
		d = d > h ? g: d,
		e = h + j > e ? h + j: e;
		else if (m === b.Graphics.CIRC || m === b.Graphics.ELIP) g = f[0],
		h = f[1],
		i = f[2] + n / 2,
		j = f[3] + n / 2,
		a = a > g - i ? g - i: a,
		c = g + i > c ? g + i: c,
		d = d > h - j ? h - j: d,
		e = h + j > e ? h + j: e;
		else for (o = 0; o < f.length; o += 2) g = f[o],
		h = f[o + 1],
		a = a > g - n ? g - n: a,
		c = g + n > c ? g + n: c,
		d = d > h - n ? h - n: d,
		e = h + n > e ? h + n: e;
		p = this.boundsPadding,
		this.bounds = new b.Rectangle(a - p, d - p, c - a + 2 * p, e - d + 2 * p)
	},
	b.Graphics.prototype._generateCachedSprite = function() {
		var c, d, a = this.getLocalBounds();
		this._cachedSprite ? this._cachedSprite.buffer.resize(a.width, a.height) : (c = new b.CanvasBuffer(a.width, a.height), d = b.Texture.fromCanvas(c.canvas), this._cachedSprite = new b.Sprite(d), this._cachedSprite.buffer = c, this._cachedSprite.worldTransform = this.worldTransform),
		this._cachedSprite.anchor.x = -(a.x / a.width),
		this._cachedSprite.anchor.y = -(a.y / a.height),
		this._cachedSprite.buffer.context.translate( - a.x, -a.y),
		b.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context),
		this._cachedSprite.alpha = this.alpha
	},
	b.Graphics.prototype.destroyCachedSprite = function() {
		this._cachedSprite.texture.destroy(!0),
		this._cachedSprite = null
	},
	b.Graphics.POLY = 0,
	b.Graphics.RECT = 1,
	b.Graphics.CIRC = 2,
	b.Graphics.ELIP = 3,
	b.Graphics.RREC = 4,
	b.Strip = function(a) {
		b.DisplayObjectContainer.call(this),
		this.texture = a,
		this.uvs = new b.Float32Array([0, 1, 1, 1, 1, 0, 0, 1]),
		this.verticies = new b.Float32Array([0, 0, 100, 0, 100, 100, 0, 100]),
		this.colors = new b.Float32Array([1, 1, 1, 1]),
		this.indices = new b.Uint16Array([0, 1, 2, 3]),
		this.dirty = !0
	},
	b.Strip.prototype = Object.create(b.DisplayObjectContainer.prototype),
	b.Strip.prototype.constructor = b.Strip,
	b.Strip.prototype._renderWebGL = function(a) { ! this.visible || this.alpha <= 0 || (a.spriteBatch.stop(), this._vertexBuffer || this._initWebGL(a), a.shaderManager.setShader(a.shaderManager.stripShader), this._renderStrip(a), a.spriteBatch.start())
	},
	b.Strip.prototype._initWebGL = function(a) {
		var b = a.gl;
		this._vertexBuffer = b.createBuffer(),
		this._indexBuffer = b.createBuffer(),
		this._uvBuffer = b.createBuffer(),
		this._colorBuffer = b.createBuffer(),
		b.bindBuffer(b.ARRAY_BUFFER, this._vertexBuffer),
		b.bufferData(b.ARRAY_BUFFER, this.verticies, b.DYNAMIC_DRAW),
		b.bindBuffer(b.ARRAY_BUFFER, this._uvBuffer),
		b.bufferData(b.ARRAY_BUFFER, this.uvs, b.STATIC_DRAW),
		b.bindBuffer(b.ARRAY_BUFFER, this._colorBuffer),
		b.bufferData(b.ARRAY_BUFFER, this.colors, b.STATIC_DRAW),
		b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this._indexBuffer),
		b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.indices, b.STATIC_DRAW)
	},
	b.Strip.prototype._renderStrip = function(a) {
		var c = a.gl,
		d = a.projection,
		e = a.offset,
		f = a.shaderManager.stripShader;
		c.blendFunc(c.ONE, c.ONE_MINUS_SRC_ALPHA),
		c.uniformMatrix3fv(f.translationMatrix, !1, this.worldTransform.toArray(!0)),
		c.uniform2f(f.projectionVector, d.x, -d.y),
		c.uniform2f(f.offsetVector, -e.x, -e.y),
		c.uniform1f(f.alpha, 1),
		this.dirty ? (this.dirty = !1, c.bindBuffer(c.ARRAY_BUFFER, this._vertexBuffer), c.bufferData(c.ARRAY_BUFFER, this.verticies, c.STATIC_DRAW), c.vertexAttribPointer(f.aVertexPosition, 2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, this._uvBuffer), c.bufferData(c.ARRAY_BUFFER, this.uvs, c.STATIC_DRAW), c.vertexAttribPointer(f.aTextureCoord, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, this.texture.baseTexture._glTextures[c.id] || b.createWebGLTexture(this.texture.baseTexture, c)), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this._indexBuffer), c.bufferData(c.ELEMENT_ARRAY_BUFFER, this.indices, c.STATIC_DRAW)) : (c.bindBuffer(c.ARRAY_BUFFER, this._vertexBuffer), c.bufferSubData(c.ARRAY_BUFFER, 0, this.verticies), c.vertexAttribPointer(f.aVertexPosition, 2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, this._uvBuffer), c.vertexAttribPointer(f.aTextureCoord, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, this.texture.baseTexture._glTextures[c.id] || b.createWebGLTexture(this.texture.baseTexture, c)), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, this._indexBuffer)),
		c.drawElements(c.TRIANGLE_STRIP, this.indices.length, c.UNSIGNED_SHORT, 0)
	},
	b.Strip.prototype._renderCanvas = function(a) {
		var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, b = a.context,
		c = this.worldTransform;
		for (a.roundPixels ? b.setTransform(c.a, c.c, c.b, c.d, 0 | c.tx, 0 | c.ty) : b.setTransform(c.a, c.c, c.b, c.d, c.tx, c.ty), d = this, e = d.verticies, f = d.uvs, g = e.length / 2, this.count++, h = 0; g - 2 > h; h++) i = 2 * h,
		j = e[i],
		k = e[i + 2],
		l = e[i + 4],
		m = e[i + 1],
		n = e[i + 3],
		o = e[i + 5],
		p = (j + k + l) / 3,
		q = (m + n + o) / 3,
		r = j - p,
		s = m - q,
		t = Math.sqrt(r * r + s * s),
		j = p + r / t * (t + 3),
		m = q + s / t * (t + 3),
		r = k - p,
		s = n - q,
		t = Math.sqrt(r * r + s * s),
		k = p + r / t * (t + 3),
		n = q + s / t * (t + 3),
		r = l - p,
		s = o - q,
		t = Math.sqrt(r * r + s * s),
		l = p + r / t * (t + 3),
		o = q + s / t * (t + 3),
		u = f[i] * d.texture.width,
		v = f[i + 2] * d.texture.width,
		w = f[i + 4] * d.texture.width,
		x = f[i + 1] * d.texture.height,
		y = f[i + 3] * d.texture.height,
		z = f[i + 5] * d.texture.height,
		b.save(),
		b.beginPath(),
		b.moveTo(j, m),
		b.lineTo(k, n),
		b.lineTo(l, o),
		b.closePath(),
		b.clip(),
		A = u * y + x * w + v * z - y * w - x * v - u * z,
		B = j * y + x * l + k * z - y * l - x * k - j * z,
		C = u * k + j * w + v * l - k * w - j * v - u * l,
		D = u * y * l + x * k * w + j * v * z - j * y * w - x * v * l - u * k * z,
		E = m * y + x * o + n * z - y * o - x * n - m * z,
		F = u * n + m * w + v * o - n * w - m * v - u * o,
		G = u * y * o + x * n * w + m * v * z - m * y * w - x * v * o - u * n * z,
		b.transform(B / A, E / A, C / A, F / A, D / A, G / A),
		b.drawImage(d.texture.baseTexture.source, 0, 0),
		b.restore()
	},
	b.Strip.prototype.onTextureUpdate = function() {
		this.updateFrame = !0
	},
	b.Rope = function(a, c) {
		b.Strip.call(this, a),
		this.points = c,
		this.verticies = new b.Float32Array(4 * c.length),
		this.uvs = new b.Float32Array(4 * c.length),
		this.colors = new b.Float32Array(2 * c.length),
		this.indices = new b.Uint16Array(2 * c.length),
		this.refresh()
	},
	b.Rope.prototype = Object.create(b.Strip.prototype),
	b.Rope.prototype.constructor = b.Rope,
	b.Rope.prototype.refresh = function() {
		var b, c, d, e, g, h, i, f, j, a = this.points;
		if (! (a.length < 1)) for (b = this.uvs, c = a[0], d = this.indices, e = this.colors, this.count -= .2, b[0] = 0, b[1] = 0, b[2] = 0, b[3] = 1, e[0] = 1, e[1] = 1, d[0] = 0, d[1] = 1, f = a.length, j = 1; f > j; j++) g = a[j],
		h = 4 * j,
		i = j / (f - 1),
		j % 2 ? (b[h] = i, b[h + 1] = 0, b[h + 2] = i, b[h + 3] = 1) : (b[h] = i, b[h + 1] = 0, b[h + 2] = i, b[h + 3] = 1),
		h = 2 * j,
		e[h] = 1,
		e[h + 1] = 1,
		h = 2 * j,
		d[h] = h,
		d[h + 1] = h + 1,
		c = g
	},
	b.Rope.prototype.updateTransform = function() {
		var c, d, e, f, h, i, j, k, l, g, m, a = this.points;
		if (! (a.length < 1)) {
			for (c = a[0], e = {
				x: 0,
				y: 0
			},
			this.count -= .2, f = this.verticies, g = a.length, m = 0; g > m; m++) h = a[m],
			i = 4 * m,
			d = m < a.length - 1 ? a[m + 1] : h,
			e.y = -(d.x - c.x),
			e.x = d.y - c.y,
			j = 10 * (1 - m / (g - 1)),
			j > 1 && (j = 1),
			k = Math.sqrt(e.x * e.x + e.y * e.y),
			l = this.texture.height / 2,
			e.x /= k,
			e.y /= k,
			e.x *= l,
			e.y *= l,
			f[i] = h.x + e.x,
			f[i + 1] = h.y + e.y,
			f[i + 2] = h.x - e.x,
			f[i + 3] = h.y - e.y,
			c = h;
			b.DisplayObjectContainer.prototype.updateTransform.call(this)
		}
	},
	b.Rope.prototype.setTexture = function(a) {
		this.texture = a
	},
	b.TilingSprite = function(a, c, d) {
		b.Sprite.call(this, a),
		this._width = c || 100,
		this._height = d || 100,
		this.tileScale = new b.Point(1, 1),
		this.tileScaleOffset = new b.Point(1, 1),
		this.tilePosition = new b.Point(0, 0),
		this.renderable = !0,
		this.tint = 16777215,
		this.blendMode = b.blendModes.NORMAL
	},
	b.TilingSprite.prototype = Object.create(b.Sprite.prototype),
	b.TilingSprite.prototype.constructor = b.TilingSprite,
	Object.defineProperty(b.TilingSprite.prototype, "width", {
		get: function() {
			return this._width
		},
		set: function(a) {
			this._width = a
		}
	}),
	Object.defineProperty(b.TilingSprite.prototype, "height", {
		get: function() {
			return this._height
		},
		set: function(a) {
			this._height = a
		}
	}),
	b.TilingSprite.prototype.setTexture = function(a) {
		this.texture !== a && (this.texture = a, this.refreshTexture = !0, this.cachedTint = 16777215)
	},
	b.TilingSprite.prototype._renderWebGL = function(a) {
		if (this.visible !== !1 && 0 !== this.alpha) {
			var c, d;
			for (this._mask && (a.spriteBatch.stop(), a.maskManager.pushMask(this.mask, a), a.spriteBatch.start()), this._filters && (a.spriteBatch.flush(), a.filterManager.pushFilter(this._filterBlock)), !this.tilingTexture || this.refreshTexture ? (this.generateTilingTexture(!0), this.tilingTexture && this.tilingTexture.needsUpdate && (b.updateWebGLTexture(this.tilingTexture.baseTexture, a.gl), this.tilingTexture.needsUpdate = !1)) : a.spriteBatch.renderTilingSprite(this), c = 0, d = this.children.length; d > c; c++) this.children[c]._renderWebGL(a);
			a.spriteBatch.stop(),
			this._filters && a.filterManager.popFilter(),
			this._mask && a.maskManager.popMask(a),
			a.spriteBatch.start()
		}
	},
	b.TilingSprite.prototype._renderCanvas = function(a) {
		var c, d, e, f, g, h;
		if (this.visible !== !1 && 0 !== this.alpha) {
			if (c = a.context, this._mask && a.maskManager.pushMask(this._mask, c), c.globalAlpha = this.worldAlpha, d = this.worldTransform, c.setTransform(d.a, d.c, d.b, d.d, d.tx, d.ty), !this.__tilePattern || this.refreshTexture) {
				if (this.generateTilingTexture(!1), !this.tilingTexture) return;
				this.__tilePattern = c.createPattern(this.tilingTexture.baseTexture.source, "repeat")
			}
			for (this.blendMode !== a.currentBlendMode && (a.currentBlendMode = this.blendMode, c.globalCompositeOperation = b.blendModesCanvas[a.currentBlendMode]), g = this.tilePosition, h = this.tileScale, g.x %= this.tilingTexture.baseTexture.width, g.y %= this.tilingTexture.baseTexture.height, c.scale(h.x, h.y), c.translate(g.x, g.y), c.fillStyle = this.__tilePattern, c.fillRect( - g.x + this.anchor.x * -this._width, -g.y + this.anchor.y * -this._height, this._width / h.x, this._height / h.y), c.scale(1 / h.x, 1 / h.y), c.translate( - g.x, -g.y), this._mask && a.maskManager.popMask(a.context), e = 0, f = this.children.length; f > e; e++) this.children[e]._renderCanvas(a)
		}
	},
	b.TilingSprite.prototype.getBounds = function() {
		var z, a = this._width,
		b = this._height,
		c = a * (1 - this.anchor.x),
		d = a * -this.anchor.x,
		e = b * (1 - this.anchor.y),
		f = b * -this.anchor.y,
		g = this.worldTransform,
		h = g.a,
		i = g.c,
		j = g.b,
		k = g.d,
		l = g.tx,
		m = g.ty,
		n = h * d + j * f + l,
		o = k * f + i * d + m,
		p = h * c + j * f + l,
		q = k * f + i * c + m,
		r = h * c + j * e + l,
		s = k * e + i * c + m,
		t = h * d + j * e + l,
		u = k * e + i * d + m,
		v = -1 / 0,
		w = -1 / 0,
		x = 1 / 0,
		y = 1 / 0;
		return x = x > n ? n: x,
		x = x > p ? p: x,
		x = x > r ? r: x,
		x = x > t ? t: x,
		y = y > o ? o: y,
		y = y > q ? q: y,
		y = y > s ? s: y,
		y = y > u ? u: y,
		v = n > v ? n: v,
		v = p > v ? p: v,
		v = r > v ? r: v,
		v = t > v ? t: v,
		w = o > w ? o: w,
		w = q > w ? q: w,
		w = s > w ? s: w,
		w = u > w ? u: w,
		z = this._bounds,
		z.x = x,
		z.width = v - x,
		z.y = y,
		z.height = w - y,
		this._currentBounds = z,
		z
	},
	b.TilingSprite.prototype.onTextureUpdate = function() {},
	b.TilingSprite.prototype.generateTilingTexture = function(a) {
		var c, d, e, f, g, h, i;
		this.texture.baseTexture.hasLoaded && (c = this.texture, d = c.frame, g = d.width !== c.baseTexture.width || d.height !== c.baseTexture.height, h = !1, a ? (e = b.getNextPowerOfTwo(d.width), f = b.getNextPowerOfTwo(d.height), (d.width !== e || d.height !== f) && (h = !0)) : g && (e = d.width, f = d.height, h = !0), h ? (this.tilingTexture && this.tilingTexture.isTiling ? (i = this.tilingTexture.canvasBuffer, i.resize(e, f), this.tilingTexture.baseTexture.width = e, this.tilingTexture.baseTexture.height = f, this.tilingTexture.needsUpdate = !0) : (i = new b.CanvasBuffer(e, f), this.tilingTexture = b.Texture.fromCanvas(i.canvas), this.tilingTexture.canvasBuffer = i, this.tilingTexture.isTiling = !0), i.context.drawImage(c.baseTexture.source, c.crop.x, c.crop.y, c.crop.width, c.crop.height, 0, 0, e, f), this.tileScaleOffset.x = d.width / e, this.tileScaleOffset.y = d.height / f) : (this.tilingTexture && this.tilingTexture.isTiling && this.tilingTexture.destroy(!0), this.tileScaleOffset.x = 1, this.tileScaleOffset.y = 1, this.tilingTexture = c), this.refreshTexture = !1, this.tilingTexture.baseTexture._powerOf2 = !0)
	},
	b.BaseTextureCache = {},
	b.texturesToUpdate = [],
	b.texturesToDestroy = [],
	b.BaseTextureCacheIdGenerator = 0,
	b.BaseTexture = function(a, c) {
		if (b.EventTarget.call(this), this.width = 100, this.height = 100, this.scaleMode = c || b.scaleModes.DEFAULT, this.hasLoaded = !1, this.source = a, this.id = b.BaseTextureCacheIdGenerator++, this.premultipliedAlpha = !0, this._glTextures = [], this._dirty = [], a) {
			if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) this.hasLoaded = !0,
			this.width = this.source.width,
			this.height = this.source.height,
			b.texturesToUpdate.push(this);
			else {
				var d = this;
				this.source.onload = function() {
					d.hasLoaded = !0,
					d.width = d.source.width,
					d.height = d.source.height;
					for (var a = 0; a < d._glTextures.length; a++) d._dirty[a] = !0;
					d.dispatchEvent({
						type: "loaded",
						content: d
					})
				},
				this.source.onerror = function() {
					d.dispatchEvent({
						type: "error",
						content: d
					})
				}
			}
			this.imageUrl = null,
			this._powerOf2 = !1
		}
	},
	b.BaseTexture.prototype.constructor = b.BaseTexture,
	b.BaseTexture.prototype.destroy = function() {
		this.imageUrl ? (delete b.BaseTextureCache[this.imageUrl], delete b.TextureCache[this.imageUrl], this.imageUrl = null, this.source.src = null) : this.source && this.source._pixiId && delete b.BaseTextureCache[this.source._pixiId],
		this.source = null,
		b.texturesToDestroy.push(this)
	},
	b.BaseTexture.prototype.updateSourceImage = function(a) {
		this.hasLoaded = !1,
		this.source.src = null,
		this.source.src = a
	},
	b.BaseTexture.fromImage = function(a, c, d) {
		var f, e = b.BaseTextureCache[a];
		return void 0 === c && -1 === a.indexOf("data:") && (c = !0),
		e || (f = new Image, c && (f.crossOrigin = ""), f.src = a, e = new b.BaseTexture(f, d), e.imageUrl = a, b.BaseTextureCache[a] = e),
		e
	},
	b.BaseTexture.fromCanvas = function(a, c) {
		a._pixiId || (a._pixiId = "canvas_" + b.TextureCacheIdGenerator++);
		var d = b.BaseTextureCache[a._pixiId];
		return d || (d = new b.BaseTexture(a, c), b.BaseTextureCache[a._pixiId] = d),
		d
	},
	b.TextureCache = {},
	b.FrameCache = {},
	b.TextureCacheIdGenerator = 0,
	b.Texture = function(a, c) {
		if (b.EventTarget.call(this), this.noFrame = !1, c || (this.noFrame = !0, c = new b.Rectangle(0, 0, 1, 1)), a instanceof b.Texture && (a = a.baseTexture), this.baseTexture = a, this.frame = c, this.trim = null, this.valid = !1, this.scope = this, this._uvs = null, this.width = 0, this.height = 0, this.crop = new b.Rectangle(0, 0, 1, 1), a.hasLoaded) this.noFrame && (c = new b.Rectangle(0, 0, a.width, a.height)),
		this.setFrame(c);
		else {
			var d = this;
			a.addEventListener("loaded",
			function() {
				d.onBaseTextureLoaded()
			})
		}
	},
	b.Texture.prototype.constructor = b.Texture,
	b.Texture.prototype.onBaseTextureLoaded = function() {
		var a = this.baseTexture;
		a.removeEventListener("loaded", this.onLoaded),
		this.noFrame && (this.frame = new b.Rectangle(0, 0, a.width, a.height)),
		this.setFrame(this.frame),
		this.scope.dispatchEvent({
			type: "update",
			content: this
		})
	},
	b.Texture.prototype.destroy = function(a) {
		a && this.baseTexture.destroy(),
		this.valid = !1
	},
	b.Texture.prototype.setFrame = function(a) {
		if (this.noFrame = !1, this.frame = a, this.width = a.width, this.height = a.height, this.crop.x = a.x, this.crop.y = a.y, this.crop.width = a.width, this.crop.height = a.height, !this.trim && (a.x + a.width > this.baseTexture.width || a.y + a.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
		this.valid = a && a.width && a.height && this.baseTexture.source && this.baseTexture.hasLoaded,
		this.trim && (this.width = this.trim.width, this.height = this.trim.height, this.frame.width = this.trim.width, this.frame.height = this.trim.height),
		this.valid && b.Texture.frameUpdates.push(this)
	},
	b.Texture.prototype._updateWebGLuvs = function() {
		var a, c, d;
		this._uvs || (this._uvs = new b.TextureUvs),
		a = this.crop,
		c = this.baseTexture.width,
		d = this.baseTexture.height,
		this._uvs.x0 = a.x / c,
		this._uvs.y0 = a.y / d,
		this._uvs.x1 = (a.x + a.width) / c,
		this._uvs.y1 = a.y / d,
		this._uvs.x2 = (a.x + a.width) / c,
		this._uvs.y2 = (a.y + a.height) / d,
		this._uvs.x3 = a.x / c,
		this._uvs.y3 = (a.y + a.height) / d
	},
	b.Texture.fromImage = function(a, c, d) {
		var e = b.TextureCache[a];
		return e || (e = new b.Texture(b.BaseTexture.fromImage(a, c, d)), b.TextureCache[a] = e),
		e
	},
	b.Texture.fromFrame = function(a) {
		var c = b.TextureCache[a];
		if (!c) throw new Error('The frameId "' + a + '" does not exist in the texture cache ');
		return c
	},
	b.Texture.fromCanvas = function(a, c) {
		var d = b.BaseTexture.fromCanvas(a, c);
		return new b.Texture(d)
	},
	b.Texture.addTextureToCache = function(a, c) {
		b.TextureCache[c] = a
	},
	b.Texture.removeTextureFromCache = function(a) {
		var c = b.TextureCache[a];
		return delete b.TextureCache[a],
		delete b.BaseTextureCache[a],
		c
	},
	b.Texture.frameUpdates = [],
	b.TextureUvs = function() {
		this.x0 = 0,
		this.y0 = 0,
		this.x1 = 0,
		this.y1 = 0,
		this.x2 = 0,
		this.y2 = 0,
		this.x3 = 0,
		this.y3 = 0
	},
	b.RenderTexture = function(a, c, d, e) {
		if (b.EventTarget.call(this), this.width = a || 100, this.height = c || 100, this.frame = new b.Rectangle(0, 0, this.width, this.height), this.crop = new b.Rectangle(0, 0, this.width, this.height), this.baseTexture = new b.BaseTexture, this.baseTexture.width = this.width, this.baseTexture.height = this.height, this.baseTexture._glTextures = [], this.baseTexture.scaleMode = e || b.scaleModes.DEFAULT, this.baseTexture.hasLoaded = !0, this.renderer = d || b.defaultRenderer, this.renderer.type === b.WEBGL_RENDERER) {
			var f = this.renderer.gl;
			this.textureBuffer = new b.FilterTexture(f, this.width, this.height, this.baseTexture.scaleMode),
			this.baseTexture._glTextures[f.id] = this.textureBuffer.texture,
			this.render = this.renderWebGL,
			this.projection = new b.Point(this.width / 2, -this.height / 2)
		} else this.render = this.renderCanvas,
		this.textureBuffer = new b.CanvasBuffer(this.width, this.height),
		this.baseTexture.source = this.textureBuffer.canvas;
		this.valid = !0,
		b.Texture.frameUpdates.push(this)
	},
	b.RenderTexture.prototype = Object.create(b.Texture.prototype),
	b.RenderTexture.prototype.constructor = b.RenderTexture,
	b.RenderTexture.prototype.resize = function(a, c, d) { (a !== this.width || c !== this.height) && (this.width = this.frame.width = this.crop.width = a, this.height = this.frame.height = this.crop.height = c, d && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.renderer.type === b.WEBGL_RENDERER && (this.projection.x = this.width / 2, this.projection.y = -this.height / 2), this.textureBuffer.resize(this.width, this.height))
	},
	b.RenderTexture.prototype.clear = function() {
		this.renderer.type === b.WEBGL_RENDERER && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer),
		this.textureBuffer.clear()
	},
	b.RenderTexture.prototype.renderWebGL = function(a, c, d) {
		var f, g, h, i, e = this.renderer.gl;
		for (e.colorMask(!0, !0, !0, !0), e.viewport(0, 0, this.width, this.height), e.bindFramebuffer(e.FRAMEBUFFER, this.textureBuffer.frameBuffer), d && this.textureBuffer.clear(), f = a.children, g = a.worldTransform, a.worldTransform = b.RenderTexture.tempMatrix, a.worldTransform.d = -1, a.worldTransform.ty = -2 * this.projection.y, c && (a.worldTransform.tx = c.x, a.worldTransform.ty -= c.y), h = 0, i = f.length; i > h; h++) f[h].updateTransform();
		b.WebGLRenderer.updateTextures(),
		this.renderer.spriteBatch.dirty = !0,
		this.renderer.renderDisplayObject(a, this.projection, this.textureBuffer.frameBuffer),
		a.worldTransform = g,
		this.renderer.spriteBatch.dirty = !0
	},
	b.RenderTexture.prototype.renderCanvas = function(a, c, d) {
		var g, h, i, e = a.children,
		f = a.worldTransform;
		for (a.worldTransform = b.RenderTexture.tempMatrix, c ? (a.worldTransform.tx = c.x, a.worldTransform.ty = c.y) : (a.worldTransform.tx = 0, a.worldTransform.ty = 0), g = 0, h = e.length; h > g; g++) e[g].updateTransform();
		d && this.textureBuffer.clear(),
		i = this.textureBuffer.context,
		this.renderer.renderDisplayObject(a, i),
		i.setTransform(1, 0, 0, 1, 0, 0),
		a.worldTransform = f
	},
	b.RenderTexture.tempMatrix = new b.Matrix,
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = b), exports.PIXI = b) : "undefined" != typeof define && define.amd ? define("PIXI",
	function() {
		return a.PIXI = b
	} ()) : a.PIXI = b
}.call(this),
function() {
	var c, a = this,
	b = b || {
		VERSION: "2.0.7",
		GAMES: [],
		AUTO: 0,
		CANVAS: 1,
		WEBGL: 2,
		HEADLESS: 3,
		NONE: 0,
		LEFT: 1,
		RIGHT: 2,
		UP: 3,
		DOWN: 4,
		SPRITE: 0,
		BUTTON: 1,
		IMAGE: 2,
		GRAPHICS: 3,
		TEXT: 4,
		TILESPRITE: 5,
		BITMAPTEXT: 6,
		GROUP: 7,
		RENDERTEXTURE: 8,
		TILEMAP: 9,
		TILEMAPLAYER: 10,
		EMITTER: 11,
		POLYGON: 12,
		BITMAPDATA: 13,
		CANVAS_FILTER: 14,
		WEBGL_FILTER: 15,
		ELLIPSE: 16,
		SPRITEBATCH: 17,
		RETROFONT: 18,
		POINTER: 19,
		blendModes: {
			NORMAL: 0,
			ADD: 1,
			MULTIPLY: 2,
			SCREEN: 3,
			OVERLAY: 4,
			DARKEN: 5,
			LIGHTEN: 6,
			COLOR_DODGE: 7,
			COLOR_BURN: 8,
			HARD_LIGHT: 9,
			SOFT_LIGHT: 10,
			DIFFERENCE: 11,
			EXCLUSION: 12,
			HUE: 13,
			SATURATION: 14,
			COLOR: 15,
			LUMINOSITY: 16
		},
		scaleModes: {
			DEFAULT: 0,
			LINEAR: 0,
			NEAREST: 1
		}
	};
	PIXI.InteractionManager = PIXI.InteractionManager ||
	function() {},
	PIXI.dontSayHello = !0,
	b.Utils = {
		getProperty: function(a, b) {
			for (var c = b.split("."), d = c.pop(), e = c.length, f = 1, g = c[0]; e > f && (a = a[g]);) g = c[f],
			f++;
			return a ? a[d] : null
		},
		setProperty: function(a, b, c) {
			for (var d = b.split("."), e = d.pop(), f = d.length, g = 1, h = d[0]; f > g && (a = a[h]);) h = d[g],
			g++;
			return a && (a[e] = c),
			a
		},
		transposeArray: function(a) {
			var c, d, b = new Array(a[0].length);
			for (c = 0; c < a[0].length; c++) for (b[c] = new Array(a.length - 1), d = a.length - 1; d > -1; d--) b[c][d] = a[d][c];
			return b
		},
		rotateArray: function(a, c) {
			if ("string" != typeof c && (c = (c % 360 + 360) % 360), 90 === c || -270 === c || "rotateLeft" === c) a = b.Utils.transposeArray(a),
			a = a.reverse();
			else if ( - 90 === c || 270 === c || "rotateRight" === c) a = a.reverse(),
			a = b.Utils.transposeArray(a);
			else if (180 === Math.abs(c) || "rotate180" === c) {
				for (var d = 0; d < a.length; d++) a[d].reverse();
				a = a.reverse()
			}
			return a
		},
		parseDimension: function(a, b) {
			var c = 0,
			d = 0;
			return "string" == typeof a ? "%" === a.substr( - 1) ? (c = parseInt(a, 10) / 100, d = 0 === b ? window.innerWidth * c: window.innerHeight * c) : d = parseInt(a, 10) : d = a,
			d
		},
		shuffle: function(a) {
			var b, c, d;
			for (b = a.length - 1; b > 0; b--) c = Math.floor(Math.random() * (b + 1)),
			d = a[b],
			a[b] = a[c],
			a[c] = d;
			return a
		},
		pad: function(a, b, c, d) {
			var e, f, g;
			if ("undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = " "), "undefined" == typeof d && (d = 3), e = 0, b + 1 >= a.length) switch (d) {
			case 1:
				a = new Array(b + 1 - a.length).join(c) + a;
				break;
			case 3:
				f = Math.ceil((e = b - a.length) / 2),
				g = e - f,
				a = new Array(g + 1).join(c) + a + new Array(f + 1).join(c);
				break;
			default:
				a += new Array(b + 1 - a.length).join(c)
			}
			return a
		},
		isPlainObject: function(a) {
			if ("object" != typeof a || a.nodeType || a === a.window) return ! 1;
			try {
				if (a.constructor && !{}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
			} catch(b) {
				return ! 1
			}
			return ! 0
		},
		extend: function() {
			var a, c, d, e, f, g, h = arguments[0] || {},
			i = 1,
			j = arguments.length,
			k = !1;
			for ("boolean" == typeof h && (k = h, h = arguments[1] || {},
			i = 2), j === i && (h = this, --i); j > i; i++) if (null != (a = arguments[i])) for (c in a) d = h[c],
			e = a[c],
			h !== e && (k && e && (b.Utils.isPlainObject(e) || (f = Array.isArray(e))) ? (f ? (f = !1, g = d && Array.isArray(d) ? d: []) : g = d && b.Utils.isPlainObject(d) ? d: {},
			h[c] = b.Utils.extend(k, g, e)) : void 0 !== e && (h[c] = e));
			return h
		},
		mixin: function(a, c) {
			var d, e, f;
			if (!a || "object" != typeof a) return c;
			for (d in a) e = a[d],
			e.childNodes || e.cloneNode || (f = typeof a[d], c[d] = a[d] && "object" === f ? typeof c[d] === f ? b.Utils.mixin(a[d], c[d]) : b.Utils.mixin(a[d], new e.constructor) : a[d]);
			return c
		}
	},
	"function" != typeof Function.prototype.bind && (Function.prototype.bind = function() {
		var a = Array.prototype.slice;
		return function(b) {
			function e() {
				var f = d.concat(a.call(arguments));
				c.apply(this instanceof e ? this: b, f)
			}
			var c = this,
			d = a.call(arguments, 1);
			if ("function" != typeof c) throw new TypeError;
			return e.prototype = function f(a) {
				return a && (f.prototype = a),
				this instanceof f ? void 0 : new f
			} (c.prototype),
			e
		}
	} ()),
	Array.isArray || (Array.isArray = function(a) {
		return "[object Array]" == Object.prototype.toString.call(a)
	}),
	Array.prototype.forEach || (Array.prototype.forEach = function(a) {
		"use strict";
		var b, c, d, e;
		if (void 0 === this || null === this) throw new TypeError;
		if (b = Object(this), c = b.length >>> 0, "function" != typeof a) throw new TypeError;
		for (d = arguments.length >= 2 ? arguments[1] : void 0, e = 0; c > e; e++) e in b && a.call(d, b[e], e, b)
	}),
	"function" != typeof window.Uint32Array && (c = function(a) {
		var b = new Array;
		window[a] = function(a) {
			var b;
			if ("number" == typeof a) for (Array.call(this, a), this.length = a, b = 0; b < this.length; b++) this[b] = 0;
			else for (Array.call(this, a.length), this.length = a.length, b = 0; b < this.length; b++) this[b] = a[b]
		},
		window[a].prototype = b,
		window[a].constructor = window[a]
	},
	c("Uint32Array"), c("Int16Array")),
	window.console || (window.console = {},
	window.console.log = window.console.assert = function() {},
	window.console.warn = window.console.assert = function() {}),
	b.Circle = function(a, b, c) {
		a = a || 0,
		b = b || 0,
		c = c || 0,
		this.x = a,
		this.y = b,
		this._diameter = c,
		this._radius = c > 0 ? .5 * c: 0
	},
	b.Circle.prototype = {
		circumference: function() {
			return 2 * Math.PI * this._radius
		},
		setTo: function(a, b, c) {
			return this.x = a,
			this.y = b,
			this._diameter = c,
			this._radius = .5 * c,
			this
		},
		copyFrom: function(a) {
			return this.setTo(a.x, a.y, a.diameter)
		},
		copyTo: function(a) {
			return a.x = this.x,
			a.y = this.y,
			a.diameter = this._diameter,
			a
		},
		distance: function(a, c) {
			return "undefined" == typeof c && (c = !1),
			c ? b.Math.distanceRounded(this.x, this.y, a.x, a.y) : b.Math.distance(this.x, this.y, a.x, a.y)
		},
		clone: function(a) {
			return "undefined" == typeof a ? a = new b.Circle(this.x, this.y, this.diameter) : a.setTo(this.x, this.y, this.diameter),
			a
		},
		contains: function(a, c) {
			return b.Circle.contains(this, a, c)
		},
		circumferencePoint: function(a, c, d) {
			return b.Circle.circumferencePoint(this, a, c, d)
		},
		offset: function(a, b) {
			return this.x += a,
			this.y += b,
			this
		},
		offsetPoint: function(a) {
			return this.offset(a.x, a.y)
		},
		toString: function() {
			return "[{Phaser.Circle (x=" + this.x + " y=" + this.y + " diameter=" + this.diameter + " radius=" + this.radius + ")}]"
		}
	},
	b.Circle.prototype.constructor = b.Circle,
	Object.defineProperty(b.Circle.prototype, "diameter", {
		get: function() {
			return this._diameter
		},
		set: function(a) {
			a > 0 && (this._diameter = a, this._radius = .5 * a)
		}
	}),
	Object.defineProperty(b.Circle.prototype, "radius", {
		get: function() {
			return this._radius
		},
		set: function(a) {
			a > 0 && (this._radius = a, this._diameter = 2 * a)
		}
	}),
	Object.defineProperty(b.Circle.prototype, "left", {
		get: function() {
			return this.x - this._radius
		},
		set: function(a) {
			a > this.x ? (this._radius = 0, this._diameter = 0) : this.radius = this.x - a
		}
	}),
	Object.defineProperty(b.Circle.prototype, "right", {
		get: function() {
			return this.x + this._radius
		},
		set: function(a) {
			a < this.x ? (this._radius = 0, this._diameter = 0) : this.radius = a - this.x
		}
	}),
	Object.defineProperty(b.Circle.prototype, "top", {
		get: function() {
			return this.y - this._radius
		},
		set: function(a) {
			a > this.y ? (this._radius = 0, this._diameter = 0) : this.radius = this.y - a
		}
	}),
	Object.defineProperty(b.Circle.prototype, "bottom", {
		get: function() {
			return this.y + this._radius
		},
		set: function(a) {
			a < this.y ? (this._radius = 0, this._diameter = 0) : this.radius = a - this.y
		}
	}),
	Object.defineProperty(b.Circle.prototype, "area", {
		get: function() {
			return this._radius > 0 ? Math.PI * this._radius * this._radius: 0
		}
	}),
	Object.defineProperty(b.Circle.prototype, "empty", {
		get: function() {
			return 0 === this._diameter
		},
		set: function(a) {
			a === !0 && this.setTo(0, 0, 0)
		}
	}),
	b.Circle.contains = function(a, b, c) {
		var d, e;
		return a.radius > 0 && b >= a.left && b <= a.right && c >= a.top && c <= a.bottom ? (d = (a.x - b) * (a.x - b), e = (a.y - c) * (a.y - c), d + e <= a.radius * a.radius) : !1
	},
	b.Circle.equals = function(a, b) {
		return a.x == b.x && a.y == b.y && a.diameter == b.diameter
	},
	b.Circle.intersects = function(a, c) {
		return b.Math.distance(a.x, a.y, c.x, c.y) <= a.radius + c.radius
	},
	b.Circle.circumferencePoint = function(a, c, d, e) {
		return "undefined" == typeof d && (d = !1),
		"undefined" == typeof e && (e = new b.Point),
		d === !0 && (c = b.Math.degToRad(c)),
		e.x = a.x + a.radius * Math.cos(c),
		e.y = a.y + a.radius * Math.sin(c),
		e
	},
	b.Circle.intersectsRectangle = function(a, b) {
		var e, f, g, h, i, j, k, c = Math.abs(a.x - b.x - b.halfWidth),
		d = b.halfWidth + a.radius;
		return c > d ? !1 : (e = Math.abs(a.y - b.y - b.halfHeight), f = b.halfHeight + a.radius, e > f ? !1 : c <= b.halfWidth || e <= b.halfHeight ? !0 : (g = c - b.halfWidth, h = e - b.halfHeight, i = g * g, j = h * h, k = a.radius * a.radius, k >= i + j))
	},
	PIXI.Circle = b.Circle,
	b.Point = function(a, b) {
		a = a || 0,
		b = b || 0,
		this.x = a,
		this.y = b
	},
	b.Point.prototype = {
		copyFrom: function(a) {
			return this.setTo(a.x, a.y)
		},
		invert: function() {
			return this.setTo(this.y, this.x)
		},
		setTo: function(a, b) {
			return this.x = a || 0,
			this.y = b || (0 !== b ? this.x: 0),
			this
		},
		set: function(a, b) {
			return this.x = a || 0,
			this.y = b || (0 !== b ? this.x: 0),
			this
		},
		add: function(a, b) {
			return this.x += a,
			this.y += b,
			this
		},
		subtract: function(a, b) {
			return this.x -= a,
			this.y -= b,
			this
		},
		multiply: function(a, b) {
			return this.x *= a,
			this.y *= b,
			this
		},
		divide: function(a, b) {
			return this.x /= a,
			this.y /= b,
			this
		},
		clampX: function(a, c) {
			return this.x = b.Math.clamp(this.x, a, c),
			this
		},
		clampY: function(a, c) {
			return this.y = b.Math.clamp(this.y, a, c),
			this
		},
		clamp: function(a, c) {
			return this.x = b.Math.clamp(this.x, a, c),
			this.y = b.Math.clamp(this.y, a, c),
			this
		},
		clone: function(a) {
			return "undefined" == typeof a ? a = new b.Point(this.x, this.y) : a.setTo(this.x, this.y),
			a
		},
		copyTo: function(a) {
			return a.x = this.x,
			a.y = this.y,
			a
		},
		distance: function(a, c) {
			return b.Point.distance(this, a, c)
		},
		equals: function(a) {
			return a.x === this.x && a.y === this.y
		},
		angle: function(a, c) {
			return "undefined" == typeof c && (c = !1),
			c ? b.Math.radToDeg(Math.atan2(a.y - this.y, a.x - this.x)) : Math.atan2(a.y - this.y, a.x - this.x)
		},
		angleSq: function(a) {
			return this.subtract(a).angle(a.subtract(this))
		},
		rotate: function(a, c, d, e, f) {
			return b.Point.rotate(this, a, c, d, e, f)
		},
		getMagnitude: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		getMagnitudeSq: function() {
			return this.x * this.x + this.y * this.y
		},
		setMagnitude: function(a) {
			return this.normalize().multiply(a, a)
		},
		normalize: function() {
			if (!this.isZero()) {
				var a = this.getMagnitude();
				this.x /= a,
				this.y /= a
			}
			return this
		},
		isZero: function() {
			return 0 === this.x && 0 === this.y
		},
		dot: function(a) {
			return this.x * a.x + this.y * a.y
		},
		cross: function(a) {
			return this.x * a.y - this.y * a.x
		},
		perp: function() {
			return this.setTo( - this.y, this.x)
		},
		rperp: function() {
			return this.setTo(this.y, -this.x)
		},
		normalRightHand: function() {
			return this.setTo( - 1 * this.y, this.x)
		},
		toString: function() {
			return "[{Point (x=" + this.x + " y=" + this.y + ")}]"
		}
	},
	b.Point.prototype.constructor = b.Point,
	b.Point.add = function(a, c, d) {
		return "undefined" == typeof d && (d = new b.Point),
		d.x = a.x + c.x,
		d.y = a.y + c.y,
		d
	},
	b.Point.subtract = function(a, c, d) {
		return "undefined" == typeof d && (d = new b.Point),
		d.x = a.x - c.x,
		d.y = a.y - c.y,
		d
	},
	b.Point.multiply = function(a, c, d) {
		return "undefined" == typeof d && (d = new b.Point),
		d.x = a.x * c.x,
		d.y = a.y * c.y,
		d
	},
	b.Point.divide = function(a, c, d) {
		return "undefined" == typeof d && (d = new b.Point),
		d.x = a.x / c.x,
		d.y = a.y / c.y,
		d
	},
	b.Point.equals = function(a, b) {
		return a.x === b.x && a.y === b.y
	},
	b.Point.angle = function(a, b) {
		return Math.atan2(a.y - b.y, a.x - b.x)
	},
	b.Point.angleSq = function(a, b) {
		return a.subtract(b).angle(b.subtract(a))
	},
	b.Point.negative = function(a, c) {
		return "undefined" == typeof c && (c = new b.Point),
		c.setTo( - a.x, -a.y)
	},
	b.Point.multiplyAdd = function(a, c, d, e) {
		return "undefined" == typeof e && (e = new b.Point),
		e.setTo(a.x + c.x * d, a.y + c.y * d)
	},
	b.Point.interpolate = function(a, c, d, e) {
		return "undefined" == typeof e && (e = new b.Point),
		e.setTo(a.x + (c.x - a.x) * d, a.y + (c.y - a.y) * d)
	},
	b.Point.perp = function(a, c) {
		return "undefined" == typeof c && (c = new b.Point),
		c.setTo( - a.y, a.x)
	},
	b.Point.rperp = function(a, c) {
		return "undefined" == typeof c && (c = new b.Point),
		c.setTo(a.y, -a.x)
	},
	b.Point.distance = function(a, c, d) {
		return "undefined" == typeof d && (d = !1),
		d ? b.Math.distanceRounded(a.x, a.y, c.x, c.y) : b.Math.distance(a.x, a.y, c.x, c.y)
	},
	b.Point.project = function(a, c, d) {
		"undefined" == typeof d && (d = new b.Point);
		var e = a.dot(c) / c.getMagnitudeSq();
		return 0 !== e && d.setTo(e * c.x, e * c.y),
		d
	},
	b.Point.projectUnit = function(a, c, d) {
		"undefined" == typeof d && (d = new b.Point);
		var e = a.dot(c);
		return 0 !== e && d.setTo(e * c.x, e * c.y),
		d
	},
	b.Point.normalRightHand = function(a, c) {
		return "undefined" == typeof c && (c = new b.Point),
		c.setTo( - 1 * a.y, a.x)
	},
	b.Point.normalize = function(a, c) {
		"undefined" == typeof c && (c = new b.Point);
		var d = a.getMagnitude();
		return 0 !== d && c.setTo(a.x / d, a.y / d),
		c
	},
	b.Point.rotate = function(a, c, d, e, f, g) {
		return f = f || !1,
		g = g || null,
		f && (e = b.Math.degToRad(e)),
		null === g && (g = Math.sqrt((c - a.x) * (c - a.x) + (d - a.y) * (d - a.y))),
		a.setTo(c + g * Math.cos(e), d + g * Math.sin(e))
	},
	b.Point.centroid = function(a, c) {
		var d, e;
		if ("undefined" == typeof c && (c = new b.Point), "[object Array]" !== Object.prototype.toString.call(a)) throw new Error("Phaser.Point. Parameter 'points' must be an array");
		if (d = a.length, 1 > d) throw new Error("Phaser.Point. Parameter 'points' array must not be empty");
		if (1 === d) return c.copyFrom(a[0]),
		c;
		for (e = 0; d > e; e++) b.Point.add(c, a[e], c);
		return c.divide(d, d),
		c
	},
	PIXI.Point = b.Point,
	b.Rectangle = function(a, b, c, d) {
		a = a || 0,
		b = b || 0,
		c = c || 0,
		d = d || 0,
		this.x = a,
		this.y = b,
		this.width = c,
		this.height = d
	},
	b.Rectangle.prototype = {
		offset: function(a, b) {
			return this.x += a,
			this.y += b,
			this
		},
		offsetPoint: function(a) {
			return this.offset(a.x, a.y)
		},
		setTo: function(a, b, c, d) {
			return this.x = a,
			this.y = b,
			this.width = c,
			this.height = d,
			this
		},
		floor: function() {
			this.x = Math.floor(this.x),
			this.y = Math.floor(this.y)
		},
		floorAll: function() {
			this.x = Math.floor(this.x),
			this.y = Math.floor(this.y),
			this.width = Math.floor(this.width),
			this.height = Math.floor(this.height)
		},
		copyFrom: function(a) {
			return this.setTo(a.x, a.y, a.width, a.height)
		},
		copyTo: function(a) {
			return a.x = this.x,
			a.y = this.y,
			a.width = this.width,
			a.height = this.height,
			a
		},
		inflate: function(a, c) {
			return b.Rectangle.inflate(this, a, c)
		},
		size: function(a) {
			return b.Rectangle.size(this, a)
		},
		clone: function(a) {
			return b.Rectangle.clone(this, a)
		},
		contains: function(a, c) {
			return b.Rectangle.contains(this, a, c)
		},
		containsRect: function(a) {
			return b.Rectangle.containsRect(this, a)
		},
		equals: function(a) {
			return b.Rectangle.equals(this, a)
		},
		intersection: function(a, c) {
			return b.Rectangle.intersection(this, a, c)
		},
		intersects: function(a, c) {
			return b.Rectangle.intersects(this, a, c)
		},
		intersectsRaw: function(a, c, d, e, f) {
			return b.Rectangle.intersectsRaw(this, a, c, d, e, f)
		},
		union: function(a, c) {
			return b.Rectangle.union(this, a, c)
		},
		toString: function() {
			return "[{Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + " empty=" + this.empty + ")}]"
		}
	},
	Object.defineProperty(b.Rectangle.prototype, "halfWidth", {
		get: function() {
			return Math.round(this.width / 2)
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "halfHeight", {
		get: function() {
			return Math.round(this.height / 2)
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "bottom", {
		get: function() {
			return this.y + this.height
		},
		set: function(a) {
			this.height = a <= this.y ? 0 : this.y - a
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "bottomRight", {
		get: function() {
			return new b.Point(this.right, this.bottom)
		},
		set: function(a) {
			this.right = a.x,
			this.bottom = a.y
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "left", {
		get: function() {
			return this.x
		},
		set: function(a) {
			this.width = a >= this.right ? 0 : this.right - a,
			this.x = a
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "right", {
		get: function() {
			return this.x + this.width
		},
		set: function(a) {
			this.width = a <= this.x ? 0 : a - this.x
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "volume", {
		get: function() {
			return this.width * this.height
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "perimeter", {
		get: function() {
			return 2 * this.width + 2 * this.height
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "centerX", {
		get: function() {
			return this.x + this.halfWidth
		},
		set: function(a) {
			this.x = a - this.halfWidth
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "centerY", {
		get: function() {
			return this.y + this.halfHeight
		},
		set: function(a) {
			this.y = a - this.halfHeight
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "randomX", {
		get: function() {
			return this.x + Math.random() * this.width
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "randomY", {
		get: function() {
			return this.y + Math.random() * this.height
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "top", {
		get: function() {
			return this.y
		},
		set: function(a) {
			a >= this.bottom ? (this.height = 0, this.y = a) : this.height = this.bottom - a
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "topLeft", {
		get: function() {
			return new b.Point(this.x, this.y)
		},
		set: function(a) {
			this.x = a.x,
			this.y = a.y
		}
	}),
	Object.defineProperty(b.Rectangle.prototype, "empty", {
		get: function() {
			return ! this.width || !this.height
		},
		set: function(a) {
			a === !0 && this.setTo(0, 0, 0, 0)
		}
	}),
	b.Rectangle.prototype.constructor = b.Rectangle,
	b.Rectangle.inflate = function(a, b, c) {
		return a.x -= b,
		a.width += 2 * b,
		a.y -= c,
		a.height += 2 * c,
		a
	},
	b.Rectangle.inflatePoint = function(a, c) {
		return b.Rectangle.inflate(a, c.x, c.y)
	},
	b.Rectangle.size = function(a, c) {
		return "undefined" == typeof c || null === c ? c = new b.Point(a.width, a.height) : c.setTo(a.width, a.height),
		c
	},
	b.Rectangle.clone = function(a, c) {
		return "undefined" == typeof c || null === c ? c = new b.Rectangle(a.x, a.y, a.width, a.height) : c.setTo(a.x, a.y, a.width, a.height),
		c
	},
	b.Rectangle.contains = function(a, b, c) {
		return a.width <= 0 || a.height <= 0 ? !1 : b >= a.x && b <= a.right && c >= a.y && c <= a.bottom
	},
	b.Rectangle.containsRaw = function(a, b, c, d, e, f) {
		return e >= a && a + c >= e && f >= b && b + d >= f
	},
	b.Rectangle.containsPoint = function(a, c) {
		return b.Rectangle.contains(a, c.x, c.y)
	},
	b.Rectangle.containsRect = function(a, b) {
		return a.volume > b.volume ? !1 : a.x >= b.x && a.y >= b.y && a.right <= b.right && a.bottom <= b.bottom
	},
	b.Rectangle.equals = function(a, b) {
		return a.x == b.x && a.y == b.y && a.width == b.width && a.height == b.height
	},
	b.Rectangle.intersection = function(a, c, d) {
		return "undefined" == typeof d && (d = new b.Rectangle),
		b.Rectangle.intersects(a, c) && (d.x = Math.max(a.x, c.x), d.y = Math.max(a.y, c.y), d.width = Math.min(a.right, c.right) - d.x, d.height = Math.min(a.bottom, c.bottom) - d.y),
		d
	},
	b.Rectangle.intersects = function(a, b) {
		return a.width <= 0 || a.height <= 0 || b.width <= 0 || b.height <= 0 ? !1 : !(a.right < b.x || a.bottom < b.y || a.x > b.right || a.y > b.bottom)
	},
	b.Rectangle.intersectsRaw = function(a, b, c, d, e, f) {
		return "undefined" == typeof f && (f = 0),
		!(b > a.right + f || c < a.left - f || d > a.bottom + f || e < a.top - f)
	},
	b.Rectangle.union = function(a, c, d) {
		return "undefined" == typeof d && (d = new b.Rectangle),
		d.setTo(Math.min(a.x, c.x), Math.min(a.y, c.y), Math.max(a.right, c.right) - Math.min(a.left, c.left), Math.max(a.bottom, c.bottom) - Math.min(a.top, c.top))
	},
	PIXI.Rectangle = b.Rectangle,
	PIXI.EmptyRectangle = new b.Rectangle(0, 0, 0, 0),
	b.Line = function(a, c, d, e) {
		a = a || 0,
		c = c || 0,
		d = d || 0,
		e = e || 0,
		this.start = new b.Point(a, c),
		this.end = new b.Point(d, e)
	},
	b.Line.prototype = {
		setTo: function(a, b, c, d) {
			return this.start.setTo(a, b),
			this.end.setTo(c, d),
			this
		},
		fromSprite: function(a, b, c) {
			return "undefined" == typeof c && (c = !1),
			c ? this.setTo(a.center.x, a.center.y, b.center.x, b.center.y) : this.setTo(a.x, a.y, b.x, b.y)
		},
		intersects: function(a, c, d) {
			return b.Line.intersectsPoints(this.start, this.end, a.start, a.end, c, d)
		},
		pointOnLine: function(a, b) {
			return (a - this.start.x) * (this.end.y - this.start.y) === (this.end.x - this.start.x) * (b - this.start.y)
		},
		pointOnSegment: function(a, b) {
			var c = Math.min(this.start.x, this.end.x),
			d = Math.max(this.start.x, this.end.x),
			e = Math.min(this.start.y, this.end.y),
			f = Math.max(this.start.y, this.end.y);
			return this.pointOnLine(a, b) && a >= c && d >= a && b >= e && f >= b
		},
		coordinatesOnLine: function(a, b) {
			var c, d, e, f, g, h, i, j, k, l, m;
			for ("undefined" == typeof a && (a = 1), "undefined" == typeof b && (b = []), c = Math.round(this.start.x), d = Math.round(this.start.y), e = Math.round(this.end.x), f = Math.round(this.end.y), g = Math.abs(e - c), h = Math.abs(f - d), i = e > c ? 1 : -1, j = f > d ? 1 : -1, k = g - h, b.push([c, d]), l = 1; c != e || d != f;) m = k << 1,
			m > -h && (k -= h, c += i),
			g > m && (k += g, d += j),
			0 === l % a && b.push([c, d]),
			l++;
			return b
		}
	},
	Object.defineProperty(b.Line.prototype, "length", {
		get: function() {
			return Math.sqrt((this.end.x - this.start.x) * (this.end.x - this.start.x) + (this.end.y - this.start.y) * (this.end.y - this.start.y))
		}
	}),
	Object.defineProperty(b.Line.prototype, "angle", {
		get: function() {
			return Math.atan2(this.end.y - this.start.y, this.end.x - this.start.x)
		}
	}),
	Object.defineProperty(b.Line.prototype, "slope", {
		get: function() {
			return (this.end.y - this.start.y) / (this.end.x - this.start.x)
		}
	}),
	Object.defineProperty(b.Line.prototype, "perpSlope", {
		get: function() {
			return - ((this.end.x - this.start.x) / (this.end.y - this.start.y))
		}
	}),
	Object.defineProperty(b.Line.prototype, "x", {
		get: function() {
			return Math.min(this.start.x, this.end.x)
		}
	}),
	Object.defineProperty(b.Line.prototype, "y", {
		get: function() {
			return Math.min(this.start.y, this.end.y)
		}
	}),
	Object.defineProperty(b.Line.prototype, "left", {
		get: function() {
			return Math.min(this.start.x, this.end.x)
		}
	}),
	Object.defineProperty(b.Line.prototype, "right", {
		get: function() {
			return Math.max(this.start.x, this.end.x)
		}
	}),
	Object.defineProperty(b.Line.prototype, "top", {
		get: function() {
			return Math.min(this.start.y, this.end.y)
		}
	}),
	Object.defineProperty(b.Line.prototype, "bottom", {
		get: function() {
			return Math.max(this.start.y, this.end.y)
		}
	}),
	Object.defineProperty(b.Line.prototype, "width", {
		get: function() {
			return Math.abs(this.start.x - this.end.x)
		}
	}),
	Object.defineProperty(b.Line.prototype, "height", {
		get: function() {
			return Math.abs(this.start.y - this.end.y)
		}
	}),
	b.Line.intersectsPoints = function(a, c, d, e, f, g) {
		var h, i, j, k, l, m, n, o, p, q;
		return "undefined" == typeof f && (f = !0),
		"undefined" == typeof g && (g = new b.Point),
		h = c.y - a.y,
		i = e.y - d.y,
		j = a.x - c.x,
		k = d.x - e.x,
		l = c.x * a.y - a.x * c.y,
		m = e.x * d.y - d.x * e.y,
		n = h * k - i * j,
		0 === n ? null: (g.x = (j * m - k * l) / n, g.y = (i * l - h * m) / n, f ? (o = (e.y - d.y) * (c.x - a.x) - (e.x - d.x) * (c.y - a.y), p = ((e.x - d.x) * (a.y - d.y) - (e.y - d.y) * (a.x - d.x)) / o, q = ((c.x - a.x) * (a.y - d.y) - (c.y - a.y) * (a.x - d.x)) / o, p >= 0 && 1 >= p && q >= 0 && 1 >= q ? g: null) : g)
	},
	b.Line.intersects = function(a, c, d, e) {
		return b.Line.intersectsPoints(a.start, a.end, c.start, c.end, d, e)
	},
	b.Ellipse = function(a, c, d, e) {
		this.type = b.ELLIPSE,
		a = a || 0,
		c = c || 0,
		d = d || 0,
		e = e || 0,
		this.x = a,
		this.y = c,
		this.width = d,
		this.height = e
	},
	b.Ellipse.prototype = {
		setTo: function(a, b, c, d) {
			return this.x = a,
			this.y = b,
			this.width = c,
			this.height = d,
			this
		},
		copyFrom: function(a) {
			return this.setTo(a.x, a.y, a.width, a.height)
		},
		copyTo: function(a) {
			return a.x = this.x,
			a.y = this.y,
			a.width = this.width,
			a.height = this.height,
			a
		},
		clone: function(a) {
			return "undefined" == typeof a ? a = new b.Ellipse(this.x, this.y, this.width, this.height) : a.setTo(this.x, this.y, this.width, this.height),
			a
		},
		contains: function(a, c) {
			return b.Ellipse.contains(this, a, c)
		},
		toString: function() {
			return "[{Phaser.Ellipse (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")}]"
		}
	},
	b.Ellipse.prototype.constructor = b.Ellipse,
	Object.defineProperty(b.Ellipse.prototype, "left", {
		get: function() {
			return this.x
		},
		set: function(a) {
			this.x = a
		}
	}),
	Object.defineProperty(b.Ellipse.prototype, "right", {
		get: function() {
			return this.x + this.width
		},
		set: function(a) {
			this.width = a < this.x ? 0 : this.x + a
		}
	}),
	Object.defineProperty(b.Ellipse.prototype, "top", {
		get: function() {
			return this.y
		},
		set: function(a) {
			this.y = a
		}
	}),
	Object.defineProperty(b.Ellipse.prototype, "bottom", {
		get: function() {
			return this.y + this.height
		},
		set: function(a) {
			this.height = a < this.y ? 0 : this.y + a
		}
	}),
	Object.defineProperty(b.Ellipse.prototype, "empty", {
		get: function() {
			return 0 === this.width || 0 === this.height
		},
		set: function(a) {
			a === !0 && this.setTo(0, 0, 0, 0)
		}
	}),
	b.Ellipse.contains = function(a, b, c) {
		var d, e;
		return a.width <= 0 || a.height <= 0 ? !1 : (d = (b - a.x) / a.width - .5, e = (c - a.y) / a.height - .5, d *= d, e *= e, .25 > d + e)
	},
	b.Ellipse.prototype.getBounds = function() {
		return new b.Rectangle(this.x, this.y, this.width, this.height)
	},
	PIXI.Ellipse = b.Ellipse,
	b.Polygon = function(a) {
		var c, d, e;
		if (this.type = b.POLYGON, a instanceof Array || (a = Array.prototype.slice.call(arguments)), "number" == typeof a[0]) {
			for (c = [], d = 0, e = a.length; e > d; d += 2) c.push(new b.Point(a[d], a[d + 1]));
			a = c
		}
		this._points = a
	},
	b.Polygon.prototype = {
		clone: function() {
			var c, a = [];
			for (c = 0; c < this.points.length; c++) a.push(this.points[c].clone());
			return new b.Polygon(a)
		},
		contains: function(a, b) {
			var d, e, f, g, h, i, j, c = !1;
			for (d = 0, e = this.points.length - 1; d < this.points.length; e = d++) f = this.points[d].x,
			g = this.points[d].y,
			h = this.points[e].x,
			i = this.points[e].y,
			j = g > b != i > b && (h - f) * (b - g) / (i - g) + f > a,
			j && (c = !c);
			return c
		}
	},
	b.Polygon.prototype.constructor = b.Polygon,
	Object.defineProperty(b.Polygon.prototype, "points", {
		get: function() {
			return this._points
		},
		set: function(a) {
			var c, d, e;
			if (a instanceof Array || (a = Array.prototype.slice.call(arguments)), "number" == typeof a[0]) {
				for (c = [], d = 0, e = a.length; e > d; d += 2) c.push(new b.Point(a[d], a[d + 1]));
				a = c
			}
			this._points = a
		}
	}),
	Object.defineProperty(b.Polygon.prototype, "area", {
		get: function() {
			var a, b, c, d, e, f = Number.MAX_VALUE,
			g = 0;
			for (e = 0; e < this.points.length; e++) this.points[e].y < f && (f = this.points[e].y);
			for (e = 0; e < this.points.length; e++) a = this.points[e],
			b = e === this.points.length - 1 ? this.points[0] : this.points[e + 1],
			c = (a.y - f + (b.y - f)) / 2,
			d = a.x - b.x,
			g += c * d;
			return g
		}
	}),
	PIXI.Polygon = b.Polygon,
	b.Camera = function(a, c, d, e, f, g) {
		this.game = a,
		this.world = a.world,
		this.id = 0,
		this.view = new b.Rectangle(d, e, f, g),
		this.screenView = new b.Rectangle(d, e, f, g),
		this.bounds = new b.Rectangle(d, e, f, g),
		this.deadzone = null,
		this.visible = !0,
		this.atLimit = {
			x: !1,
			y: !1
		},
		this.target = null,
		this._edge = 0,
		this.displayObject = null,
		this.scale = null
	},
	b.Camera.FOLLOW_LOCKON = 0,
	b.Camera.FOLLOW_PLATFORMER = 1,
	b.Camera.FOLLOW_TOPDOWN = 2,
	b.Camera.FOLLOW_TOPDOWN_TIGHT = 3,
	b.Camera.prototype = {
		follow: function(a, c) {
			var d, e, f;
			switch ("undefined" == typeof c && (c = b.Camera.FOLLOW_LOCKON), this.target = a, c) {
			case b.Camera.FOLLOW_PLATFORMER:
				e = this.width / 8,
				f = this.height / 3,
				this.deadzone = new b.Rectangle((this.width - e) / 2, (this.height - f) / 2 - .25 * f, e, f);
				break;
			case b.Camera.FOLLOW_TOPDOWN:
				d = Math.max(this.width, this.height) / 4,
				this.deadzone = new b.Rectangle((this.width - d) / 2, (this.height - d) / 2, d, d);
				break;
			case b.Camera.FOLLOW_TOPDOWN_TIGHT:
				d = Math.max(this.width, this.height) / 8,
				this.deadzone = new b.Rectangle((this.width - d) / 2, (this.height - d) / 2, d, d);
				break;
			case b.Camera.FOLLOW_LOCKON:
				this.deadzone = null;
				break;
			default:
				this.deadzone = null
			}
		},
		unfollow: function() {
			this.target = null
		},
		focusOn: function(a) {
			this.setPosition(Math.round(a.x - this.view.halfWidth), Math.round(a.y - this.view.halfHeight))
		},
		focusOnXY: function(a, b) {
			this.setPosition(Math.round(a - this.view.halfWidth), Math.round(b - this.view.halfHeight))
		},
		update: function() {
			this.target && this.updateTarget(),
			this.bounds && this.checkBounds(),
			this.displayObject.position.x = -this.view.x,
			this.displayObject.position.y = -this.view.y
		},
		updateTarget: function() {
			this.deadzone ? (this._edge = this.target.x - this.view.x, this._edge < this.deadzone.left ? this.view.x = this.target.x - this.deadzone.left: this._edge > this.deadzone.right && (this.view.x = this.target.x - this.deadzone.right), this._edge = this.target.y - this.view.y, this._edge < this.deadzone.top ? this.view.y = this.target.y - this.deadzone.top: this._edge > this.deadzone.bottom && (this.view.y = this.target.y - this.deadzone.bottom)) : (this.view.x = this.target.x - this.view.halfWidth, this.view.y = this.target.y - this.view.halfHeight)
		},
		setBoundsToWorld: function() {
			this.bounds.setTo(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height)
		},
		checkBounds: function() {
			this.atLimit.x = !1,
			this.atLimit.y = !1,
			this.view.x <= this.bounds.x && (this.atLimit.x = !0, this.view.x = this.bounds.x),
			this.view.right >= this.bounds.right && (this.atLimit.x = !0, this.view.x = this.bounds.right - this.width),
			this.view.y <= this.bounds.top && (this.atLimit.y = !0, this.view.y = this.bounds.top),
			this.view.bottom >= this.bounds.bottom && (this.atLimit.y = !0, this.view.y = this.bounds.bottom - this.height),
			this.view.floor()
		},
		setPosition: function(a, b) {
			this.view.x = a,
			this.view.y = b,
			this.bounds && this.checkBounds()
		},
		setSize: function(a, b) {
			this.view.width = a,
			this.view.height = b
		},
		reset: function() {
			this.target = null,
			this.view.x = 0,
			this.view.y = 0
		}
	},
	b.Camera.prototype.constructor = b.Camera,
	Object.defineProperty(b.Camera.prototype, "x", {
		get: function() {
			return this.view.x
		},
		set: function(a) {
			this.view.x = a,
			this.bounds && this.checkBounds()
		}
	}),
	Object.defineProperty(b.Camera.prototype, "y", {
		get: function() {
			return this.view.y
		},
		set: function(a) {
			this.view.y = a,
			this.bounds && this.checkBounds()
		}
	}),
	Object.defineProperty(b.Camera.prototype, "width", {
		get: function() {
			return this.view.width
		},
		set: function(a) {
			this.view.width = a
		}
	}),
	Object.defineProperty(b.Camera.prototype, "height", {
		get: function() {
			return this.view.height
		},
		set: function(a) {
			this.view.height = a
		}
	}),
	b.State = function() {
		this.game = null,
		this.add = null,
		this.make = null,
		this.camera = null,
		this.cache = null,
		this.input = null,
		this.load = null,
		this.math = null,
		this.sound = null,
		this.scale = null,
		this.stage = null,
		this.time = null,
		this.tweens = null,
		this.world = null,
		this.particles = null,
		this.physics = null,
		this.rnd = null
	},
	b.State.prototype = {
		preload: function() {},
		loadUpdate: function() {},
		loadRender: function() {},
		create: function() {},
		update: function() {},
		render: function() {},
		paused: function() {},
		pauseUpdate: function() {},
		shutdown: function() {}
	},
	b.State.prototype.constructor = b.State,
	b.StateManager = function(a, b) {
		this.game = a,
		this.states = {},
		this._pendingState = null,
		"undefined" != typeof b && null !== b && (this._pendingState = b),
		this._clearWorld = !1,
		this._clearCache = !1,
		this._created = !1,
		this._args = [],
		this.current = "",
		this.onInitCallback = null,
		this.onPreloadCallback = null,
		this.onCreateCallback = null,
		this.onUpdateCallback = null,
		this.onRenderCallback = null,
		this.onPreRenderCallback = null,
		this.onLoadUpdateCallback = null,
		this.onLoadRenderCallback = null,
		this.onPausedCallback = null,
		this.onResumedCallback = null,
		this.onPauseUpdateCallback = null,
		this.onShutDownCallback = null
	},
	b.StateManager.prototype = {
		boot: function() {
			this.game.onPause.add(this.pause, this),
			this.game.onResume.add(this.resume, this),
			this.game.load.onLoadComplete.add(this.loadComplete, this),
			null !== this._pendingState && ("string" == typeof this._pendingState ? this.start(this._pendingState, !1, !1) : this.add("default", this._pendingState, !0))
		},
		add: function(a, c, d) {
			"undefined" == typeof d && (d = !1);
			var e;
			return c instanceof b.State ? e = c: "object" == typeof c ? (e = c, e.game = this.game) : "function" == typeof c && (e = new c(this.game)),
			this.states[a] = e,
			d && (this.game.isBooted ? this.start(a) : this._pendingState = a),
			e
		},
		remove: function(a) {
			this.current === a && (this.callbackContext = null, this.onInitCallback = null, this.onShutDownCallback = null, this.onPreloadCallback = null, this.onLoadRenderCallback = null, this.onLoadUpdateCallback = null, this.onCreateCallback = null, this.onUpdateCallback = null, this.onRenderCallback = null, this.onPausedCallback = null, this.onResumedCallback = null, this.onPauseUpdateCallback = null),
			delete this.states[a]
		},
		start: function(a, b, c) {
			"undefined" == typeof b && (b = !0),
			"undefined" == typeof c && (c = !1),
			this.checkState(a) && (this._pendingState = a, this._clearWorld = b, this._clearCache = c, arguments.length > 3 && (this._args = Array.prototype.splice.call(arguments, 3)))
		},
		restart: function(a, b) {
			"undefined" == typeof a && (a = !0),
			"undefined" == typeof b && (b = !1),
			this._pendingState = this.current,
			this._clearWorld = a,
			this._clearCache = b,
			arguments.length > 2 && (this._args = Array.prototype.splice.call(arguments, 2))
		},
		dummy: function() {},
		preUpdate: function() {
			this._pendingState && this.game.isBooted && (this.current && (this.onShutDownCallback && this.onShutDownCallback.call(this.callbackContext, this.game), this.game.tweens.removeAll(), this.game.camera.reset(), this.game.input.reset(!0), this.game.physics.clear(), this.game.time.removeAll(), this._clearWorld && (this.game.world.shutdown(), this._clearCache === !0 && this.game.cache.destroy())), this.setCurrentState(this._pendingState), this.onPreloadCallback ? (this.game.load.reset(), this.onPreloadCallback.call(this.callbackContext, this.game), 0 === this.game.load.totalQueuedFiles() && 0 === this.game.load.totalQueuedPacks() ? this.loadComplete() : this.game.load.start()) : this.loadComplete(), this.current === this._pendingState && (this._pendingState = null))
		},
		checkState: function(a) {
			if (this.states[a]) {
				var b = !1;
				return this.states[a]["preload"] && (b = !0),
				this.states[a]["create"] && (b = !0),
				this.states[a]["update"] && (b = !0),
				this.states[a]["render"] && (b = !0),
				b === !1 ? (console.warn("Invalid Phaser State object given. Must contain at least a one of the required functions: preload, create, update or render"), !1) : !0
			}
			return console.warn("Phaser.StateManager - No state found with the key: " + a),
			!1
		},
		link: function(a) {
			this.states[a].game = this.game,
			this.states[a].add = this.game.add,
			this.states[a].make = this.game.make,
			this.states[a].camera = this.game.camera,
			this.states[a].cache = this.game.cache,
			this.states[a].input = this.game.input,
			this.states[a].load = this.game.load,
			this.states[a].math = this.game.math,
			this.states[a].sound = this.game.sound,
			this.states[a].scale = this.game.scale,
			this.states[a].state = this,
			this.states[a].stage = this.game.stage,
			this.states[a].time = this.game.time,
			this.states[a].tweens = this.game.tweens,
			this.states[a].world = this.game.world,
			this.states[a].particles = this.game.particles,
			this.states[a].rnd = this.game.rnd,
			this.states[a].physics = this.game.physics
		},
		setCurrentState: function(a) {
			this.callbackContext = this.states[a],
			this.link(a),
			this.onInitCallback = this.states[a]["init"] || this.dummy,
			this.onPreloadCallback = this.states[a]["preload"] || null,
			this.onLoadRenderCallback = this.states[a]["loadRender"] || null,
			this.onLoadUpdateCallback = this.states[a]["loadUpdate"] || null,
			this.onCreateCallback = this.states[a]["create"] || null,
			this.onUpdateCallback = this.states[a]["update"] || null,
			this.onPreRenderCallback = this.states[a]["preRender"] || null,
			this.onRenderCallback = this.states[a]["render"] || null,
			this.onPausedCallback = this.states[a]["paused"] || null,
			this.onResumedCallback = this.states[a]["resumed"] || null,
			this.onPauseUpdateCallback = this.states[a]["pauseUpdate"] || null,
			this.onShutDownCallback = this.states[a]["shutdown"] || this.dummy,
			this.current = a,
			this._created = !1,
			this.onInitCallback.apply(this.callbackContext, this._args),
			this._args = []
		},
		getCurrentState: function() {
			return this.states[this.current]
		},
		loadComplete: function() {
			this._created === !1 && this.onCreateCallback ? (this._created = !0, this.onCreateCallback.call(this.callbackContext, this.game)) : this._created = !0
		},
		pause: function() {
			this._created && this.onPausedCallback && this.onPausedCallback.call(this.callbackContext, this.game)
		},
		resume: function() {
			this._created && this.onResumedCallback && this.onResumedCallback.call(this.callbackContext, this.game)
		},
		update: function() {
			this._created && this.onUpdateCallback ? this.onUpdateCallback.call(this.callbackContext, this.game) : this.onLoadUpdateCallback && this.onLoadUpdateCallback.call(this.callbackContext, this.game)
		},
		pauseUpdate: function() {
			this._created && this.onPauseUpdateCallback ? this.onPauseUpdateCallback.call(this.callbackContext, this.game) : this.onLoadUpdateCallback && this.onLoadUpdateCallback.call(this.callbackContext, this.game)
		},
		preRender: function() {
			this.onPreRenderCallback && this.onPreRenderCallback.call(this.callbackContext, this.game)
		},
		render: function() {
			this._created && this.onRenderCallback ? (this.game.renderType === b.CANVAS && (this.game.context.save(), this.game.context.setTransform(1, 0, 0, 1, 0, 0)), this.onRenderCallback.call(this.callbackContext, this.game), this.game.renderType === b.CANVAS && this.game.context.restore()) : this.onLoadRenderCallback && this.onLoadRenderCallback.call(this.callbackContext, this.game)
		},
		destroy: function() {
			this.callbackContext = null,
			this.onInitCallback = null,
			this.onShutDownCallback = null,
			this.onPreloadCallback = null,
			this.onLoadRenderCallback = null,
			this.onLoadUpdateCallback = null,
			this.onCreateCallback = null,
			this.onUpdateCallback = null,
			this.onRenderCallback = null,
			this.onPausedCallback = null,
			this.onResumedCallback = null,
			this.onPauseUpdateCallback = null,
			this.game = null,
			this.states = {},
			this._pendingState = null
		}
	},
	b.StateManager.prototype.constructor = b.StateManager,
	b.LinkedList = function() {
		this.next = null,
		this.prev = null,
		this.first = null,
		this.last = null,
		this.total = 0
	},
	b.LinkedList.prototype = {
		add: function(a) {
			return 0 === this.total && null === this.first && null === this.last ? (this.first = a, this.last = a, this.next = a, a.prev = this, this.total++, a) : (this.last.next = a, a.prev = this.last, this.last = a, this.total++, a)
		},
		reset: function() {
			this.first = null,
			this.last = null,
			this.next = null,
			this.prev = null,
			this.total = 0
		},
		remove: function(a) {
			return 1 === this.total ? (this.reset(), a.next = a.prev = null, void 0) : (a === this.first ? this.first = this.first.next: a === this.last && (this.last = this.last.prev), a.prev && (a.prev.next = a.next), a.next && (a.next.prev = a.prev), a.next = a.prev = null, null === this.first && (this.last = null), this.total--, void 0)
		},
		callAll: function(a) {
			if (this.first && this.last) {
				var b = this.first;
				do b && b[a] && b[a].call(b),
				b = b.next;
				while (b != this.last.next)
			}
		}
	},
	b.LinkedList.prototype.constructor = b.LinkedList,
	b.ArrayList = function() {
		this.total = 0,
		this.position = 0,
		this.list = []
	},
	b.ArrayList.prototype = {
		add: function(a) {
			return this.exists(a) || (this.list.push(a), this.total++),
			a
		},
		getIndex: function(a) {
			return this.list.indexOf(a)
		},
		exists: function(a) {
			return this.list.indexOf(a) > -1
		},
		reset: function() {
			this.list.length = 0,
			this.total = 0
		},
		remove: function(a) {
			var b = this.list.indexOf(a);
			return b > -1 ? (this.list.splice(b, 1), this.total--, a) : void 0
		},
		setAll: function(a, b) {
			for (var c = this.list.length; c--;) this.list[c] && this.list[c][a] && (this.list[c][a] = b)
		},
		callAll: function(a) {
			for (var b = Array.prototype.splice.call(arguments, 1), c = this.list.length; c--;) this.list[c] && this.list[c][a] && this.list[c][a].apply(this.list[c], b)
		}
	},
	Object.defineProperty(b.ArrayList.prototype, "first", {
		get: function() {
			return this.position = 0,
			this.total > 0 ? this.list[0] : null
		}
	}),
	Object.defineProperty(b.ArrayList.prototype, "next", {
		get: function() {
			return this.position < this.total ? (this.position++, this.list[this.position]) : null
		}
	}),
	b.ArrayList.prototype.constructor = b.ArrayList,
	b.Signal = function() {
		this._bindings = [],
		this._prevParams = null;
		var a = this;
		this.dispatch = function() {
			b.Signal.prototype.dispatch.apply(a, arguments)
		}
	},
	b.Signal.prototype = {
		memorize: !1,
		_shouldPropagate: !0,
		active: !0,
		validateListener: function(a, b) {
			if ("function" != typeof a) throw new Error("Phaser.Signal: listener is a required param of {fn}() and should be a Function.".replace("{fn}", b))
		},
		_registerListener: function(a, c, d, e) {
			var g, f = this._indexOfListener(a, d);
			if ( - 1 !== f) {
				if (g = this._bindings[f], g.isOnce() !== c) throw new Error("You cannot add" + (c ? "": "Once") + "() then add" + (c ? "Once": "") + "() the same listener without removing the relationship first.")
			} else g = new b.SignalBinding(this, a, c, d, e),
			this._addBinding(g);
			return this.memorize && this._prevParams && g.execute(this._prevParams),
			g
		},
		_addBinding: function(a) {
			var b = this._bindings.length;
			do b--;
			while (this._bindings[b] && a._priority <= this._bindings[b]._priority);
			this._bindings.splice(b + 1, 0, a)
		},
		_indexOfListener: function(a, b) {
			for (var d, c = this._bindings.length; c--;) if (d = this._bindings[c], d._listener === a && d.context === b) return c;
			return - 1
		},
		has: function(a, b) {
			return - 1 !== this._indexOfListener(a, b)
		},
		add: function(a, b, c) {
			return this.validateListener(a, "add"),
			this._registerListener(a, !1, b, c)
		},
		addOnce: function(a, b, c) {
			return this.validateListener(a, "addOnce"),
			this._registerListener(a, !0, b, c)
		},
		remove: function(a, b) {
			this.validateListener(a, "remove");
			var c = this._indexOfListener(a, b);
			return - 1 !== c && (this._bindings[c]._destroy(), this._bindings.splice(c, 1)),
			a
		},
		removeAll: function(a) {
			"undefined" == typeof a && (a = null);
			for (var b = this._bindings.length; b--;) a ? this._bindings[b].context === a && (this._bindings[b]._destroy(), this._bindings.splice(b, 1)) : this._bindings[b]._destroy();
			this._bindings.length = 0
		},
		getNumListeners: function() {
			return this._bindings.length
		},
		halt: function() {
			this._shouldPropagate = !1
		},
		dispatch: function() {
			var a, b, c;
			if (this.active && (a = Array.prototype.slice.call(arguments), b = this._bindings.length, this.memorize && (this._prevParams = a), b)) {
				c = this._bindings.slice(),
				this._shouldPropagate = !0;
				do b--;
				while (c[b] && this._shouldPropagate && c[b].execute(a) !== !1)
			}
		},
		forget: function() {
			this._prevParams = null
		},
		dispose: function() {
			this.removeAll(),
			delete this._bindings,
			delete this._prevParams
		},
		toString: function() {
			return "[Phaser.Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
		}
	},
	b.Signal.prototype.constructor = b.Signal,
	b.SignalBinding = function(a, b, c, d, e) {
		this._listener = b,
		this._isOnce = c,
		this.context = d,
		this._signal = a,
		this._priority = e || 0
	},
	b.SignalBinding.prototype = {
		active: !0,
		params: null,
		execute: function(a) {
			var b, c;
			return this.active && this._listener && (c = this.params ? this.params.concat(a) : a, b = this._listener.apply(this.context, c), this._isOnce && this.detach()),
			b
		},
		detach: function() {
			return this.isBound() ? this._signal.remove(this._listener, this.context) : null
		},
		isBound: function() {
			return !! this._signal && !!this._listener
		},
		isOnce: function() {
			return this._isOnce
		},
		getListener: function() {
			return this._listener
		},
		getSignal: function() {
			return this._signal
		},
		_destroy: function() {
			delete this._signal,
			delete this._listener,
			delete this.context
		},
		toString: function() {
			return "[Phaser.SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
		}
	},
	b.SignalBinding.prototype.constructor = b.SignalBinding,
	b.Filter = function(a, c, d) {
		this.game = a,
		this.type = b.WEBGL_FILTER,
		this.passes = [this],
		this.shaders = [],
		this.dirty = !0,
		this.padding = 0,
		this.uniforms = {
			time: {
				type: "1f",
				value: 0
			},
			resolution: {
				type: "2f",
				value: {
					x: 256,
					y: 256
				}
			},
			mouse: {
				type: "2f",
				value: {
					x: 0,
					y: 0
				}
			}
		},
		this.fragmentSrc = d || []
	},
	b.Filter.prototype = {
		init: function() {},
		setResolution: function(a, b) {
			this.uniforms.resolution.value.x = a,
			this.uniforms.resolution.value.y = b
		},
		update: function(a) {
			"undefined" != typeof a && (a.x > 0 && (this.uniforms.mouse.x = a.x.toFixed(2)), a.y > 0 && (this.uniforms.mouse.y = a.y.toFixed(2))),
			this.uniforms.time.value = this.game.time.totalElapsedSeconds()
		},
		destroy: function() {
			this.game = null
		}
	},
	b.Filter.prototype.constructor = b.Filter,
	Object.defineProperty(b.Filter.prototype, "width", {
		get: function() {
			return this.uniforms.resolution.value.x
		},
		set: function(a) {
			this.uniforms.resolution.value.x = a
		}
	}),
	Object.defineProperty(b.Filter.prototype, "height", {
		get: function() {
			return this.uniforms.resolution.value.y
		},
		set: function(a) {
			this.uniforms.resolution.value.y = a
		}
	}),
	b.Plugin = function(a, b) {
		"undefined" == typeof b && (b = null),
		this.game = a,
		this.parent = b,
		this.active = !1,
		this.visible = !1,
		this.hasPreUpdate = !1,
		this.hasUpdate = !1,
		this.hasPostUpdate = !1,
		this.hasRender = !1,
		this.hasPostRender = !1
	},
	b.Plugin.prototype = {
		preUpdate: function() {},
		update: function() {},
		render: function() {},
		postRender: function() {},
		destroy: function() {
			this.game = null,
			this.parent = null,
			this.active = !1,
			this.visible = !1
		}
	},
	b.Plugin.prototype.constructor = b.Plugin,
	b.PluginManager = function(a) {
		this.game = a,
		this.plugins = [],
		this._len = 0,
		this._i = 0
	},
	b.PluginManager.prototype = {
		add: function(a) {
			var b = Array.prototype.splice.call(arguments, 1),
			c = !1;
			return "function" == typeof a ? a = new a(this.game, this) : (a.game = this.game, a.parent = this),
			"function" == typeof a["preUpdate"] && (a.hasPreUpdate = !0, c = !0),
			"function" == typeof a["update"] && (a.hasUpdate = !0, c = !0),
			"function" == typeof a["postUpdate"] && (a.hasPostUpdate = !0, c = !0),
			"function" == typeof a["render"] && (a.hasRender = !0, c = !0),
			"function" == typeof a["postRender"] && (a.hasPostRender = !0, c = !0),
			c ? ((a.hasPreUpdate || a.hasUpdate || a.hasPostUpdate) && (a.active = !0), (a.hasRender || a.hasPostRender) && (a.visible = !0), this._len = this.plugins.push(a), "function" == typeof a["init"] && a.init.apply(a, b), a) : null
		},
		remove: function(a) {
			for (this._i = this._len; this._i--;) if (this.plugins[this._i] === a) return a.destroy(),
			this.plugins.splice(this._i, 1),
			this._len--,
			void 0
		},
		removeAll: function() {
			for (this._i = this._len; this._i--;) this.plugins[this._i].destroy();
			this.plugins.length = 0,
			this._len = 0
		},
		preUpdate: function() {
			for (this._i = this._len; this._i--;) this.plugins[this._i].active && this.plugins[this._i].hasPreUpdate && this.plugins[this._i].preUpdate()
		},
		update: function() {
			for (this._i = this._len; this._i--;) this.plugins[this._i].active && this.plugins[this._i].hasUpdate && this.plugins[this._i].update()
		},
		postUpdate: function() {
			for (this._i = this._len; this._i--;) this.plugins[this._i].active && this.plugins[this._i].hasPostUpdate && this.plugins[this._i].postUpdate()
		},
		render: function() {
			for (this._i = this._len; this._i--;) this.plugins[this._i].visible && this.plugins[this._i].hasRender && this.plugins[this._i].render()
		},
		postRender: function() {
			for (this._i = this._len; this._i--;) this.plugins[this._i].visible && this.plugins[this._i].hasPostRender && this.plugins[this._i].postRender()
		},
		destroy: function() {
			this.removeAll(),
			this.game = null
		}
	},
	b.PluginManager.prototype.constructor = b.PluginManager,
	b.Stage = function(a, c, d) {
		this.game = a,
		this.offset = new b.Point,
		this.bounds = new b.Rectangle(0, 0, c, d),
		PIXI.Stage.call(this, 0),
		this.name = "_stage_root",
		this.interactive = !1,
		this.disableVisibilityChange = !1,
		this.checkOffsetInterval = 2500,
		this.exists = !0,
		this.currentRenderOrderID = 0,
		this._hiddenVar = "hidden",
		this._nextOffsetCheck = 0,
		this._backgroundColor = 0,
		a.config && this.parseConfig(a.config)
	},
	b.Stage.prototype = Object.create(PIXI.Stage.prototype),
	b.Stage.prototype.constructor = b.Stage,
	b.Stage.prototype.preUpdate = function() {
		var a, b;
		for (this.currentRenderOrderID = 0, a = this.children.length, b = 0; a > b; b++) this.children[b].preUpdate()
	},
	b.Stage.prototype.update = function() {
		for (var a = this.children.length; a--;) this.children[a].update()
	},
	b.Stage.prototype.postUpdate = function() {
		var a;
		if (this.game.world.camera.target) for (this.game.world.camera.target.postUpdate(), this.game.world.camera.update(), a = this.children.length; a--;) this.children[a] !== this.game.world.camera.target && this.children[a].postUpdate();
		else for (this.game.world.camera.update(), a = this.children.length; a--;) this.children[a].postUpdate();
		this.checkOffsetInterval !== !1 && this.game.time.now > this._nextOffsetCheck && (b.Canvas.getOffset(this.game.canvas, this.offset), this.bounds.x = this.offset.x, this.bounds.y = this.offset.y, this._nextOffsetCheck = this.game.time.now + this.checkOffsetInterval)
	},
	b.Stage.prototype.parseConfig = function(a) {
		a["checkOffsetInterval"] && (this.checkOffsetInterval = a["checkOffsetInterval"]),
		a["disableVisibilityChange"] && (this.disableVisibilityChange = a["disableVisibilityChange"]),
		a["fullScreenScaleMode"] && (this.fullScreenScaleMode = a["fullScreenScaleMode"]),
		a["scaleMode"] && (this.scaleMode = a["scaleMode"]),
		a["backgroundColor"] && (this.backgroundColor = a["backgroundColor"])
	},
	b.Stage.prototype.boot = function() {
		b.Canvas.getOffset(this.game.canvas, this.offset),
		this.bounds.setTo(this.offset.x, this.offset.y, this.game.width, this.game.height);
		var a = this;
		this._onChange = function(b) {
			return a.visibilityChange(b)
		},
		b.Canvas.setUserSelect(this.game.canvas, "none"),
		b.Canvas.setTouchAction(this.game.canvas, "none"),
		this.checkVisibility()
	},
	b.Stage.prototype.checkVisibility = function() {
		this._hiddenVar = void 0 !== document.webkitHidden ? "webkitvisibilitychange": void 0 !== document.mozHidden ? "mozvisibilitychange": void 0 !== document.msHidden ? "msvisibilitychange": void 0 !== document.hidden ? "visibilitychange": null,
		this._hiddenVar && document.addEventListener(this._hiddenVar, this._onChange, !1),
		window.onpagehide = this._onChange,
		window.onpageshow = this._onChange,
		window.onblur = this._onChange,
		window.onfocus = this._onChange
	},
	b.Stage.prototype.visibilityChange = function(a) {
		return "pagehide" === a.type || "blur" === a.type || "pageshow" === a.type || "focus" === a.type ? ("pagehide" === a.type || "blur" === a.type ? this.game.focusLoss(a) : ("pageshow" === a.type || "focus" === a.type) && this.game.focusGain(a), void 0) : (this.disableVisibilityChange || (document.hidden || document.mozHidden || document.msHidden || document.webkitHidden ? this.game.gamePaused(a) : this.game.gameResumed(a)), void 0)
	},
	b.Stage.prototype.setBackgroundColor = function(a) {
		var c;
		"string" == typeof a ? (c = b.Color.hexToColor(a), this._backgroundColor = b.Color.getColor(c.r, c.g, c.b)) : (c = b.Color.getRGB(a), this._backgroundColor = a),
		this.backgroundColorSplit = [c.r / 255, c.g / 255, c.b / 255],
		this.backgroundColorString = b.Color.RGBtoString(c.r, c.g, c.b, 255, "#")
	},
	Object.defineProperty(b.Stage.prototype, "backgroundColor", {
		get: function() {
			return this._backgroundColor
		},
		set: function(a) {
			this.game.transparent || this.setBackgroundColor(a)
		}
	}),
	Object.defineProperty(b.Stage.prototype, "smoothed", {
		get: function() {
			return ! PIXI.scaleModes.LINEAR
		},
		set: function(a) {
			PIXI.scaleModes.LINEAR = a ? 0 : 1
		}
	}),
	b.Group = function(a, c, d, e, f, g) {
		"undefined" == typeof e && (e = !1),
		"undefined" == typeof f && (f = !1),
		"undefined" == typeof g && (g = b.Physics.ARCADE),
		this.game = a,
		"undefined" == typeof c && (c = a.world),
		this.name = d || "group",
		PIXI.DisplayObjectContainer.call(this),
		e ? this.game.stage.addChild(this) : c && c.addChild(this),
		this.z = 0,
		this.type = b.GROUP,
		this.alive = !0,
		this.exists = !0,
		this.classType = b.Sprite,
		this.scale = new b.Point(1, 1),
		this.cursor = null,
		this.cameraOffset = new b.Point,
		this.enableBody = f,
		this.enableBodyDebug = !1,
		this.physicsBodyType = g,
		this._sortProperty = "z",
		this._cache = [0, 0, 0, 0, 1, 0, 1, 0, 0, 0]
	},
	b.Group.prototype = Object.create(PIXI.DisplayObjectContainer.prototype),
	b.Group.prototype.constructor = b.Group,
	b.Group.RETURN_NONE = 0,
	b.Group.RETURN_TOTAL = 1,
	b.Group.RETURN_CHILD = 2,
	b.Group.SORT_ASCENDING = -1,
	b.Group.SORT_DESCENDING = 1,
	b.Group.prototype.add = function(a, b) {
		return "undefined" == typeof b && (b = !1),
		a.parent !== this && (this.enableBody && this.game.physics.enable(a, this.physicsBodyType), this.addChild(a), a.z = this.children.length, !b && a.events && a.events.onAddedToGroup.dispatch(a, this), null === this.cursor && (this.cursor = a)),
		a
	},
	b.Group.prototype.addAt = function(a, b, c) {
		return "undefined" == typeof c && (c = !1),
		a.parent !== this && (this.enableBody && this.game.physics.enable(a, this.physicsBodyType), this.addChildAt(a, b), this.updateZ(), !c && a.events && a.events.onAddedToGroup.dispatch(a, this), null === this.cursor && (this.cursor = a)),
		a
	},
	b.Group.prototype.getAt = function(a) {
		return 0 > a || a >= this.children.length ? -1 : this.getChildAt(a)
	},
	b.Group.prototype.create = function(a, b, c, d, e) {
		"undefined" == typeof e && (e = !0);
		var f = new this.classType(this.game, a, b, c, d);
		return this.enableBody && this.game.physics.enable(f, this.physicsBodyType, this.enableBodyDebug),
		f.exists = e,
		f.visible = e,
		f.alive = e,
		this.addChild(f),
		f.z = this.children.length,
		f.events && f.events.onAddedToGroup.dispatch(f, this),
		null === this.cursor && (this.cursor = f),
		f
	},
	b.Group.prototype.createMultiple = function(a, b, c, d) {
		"undefined" == typeof d && (d = !1);
		for (var e = 0; a > e; e++) this.create(0, 0, b, c, d)
	},
	b.Group.prototype.updateZ = function() {
		for (var a = this.children.length; a--;) this.children[a].z = a
	},
	b.Group.prototype.resetCursor = function(a) {
		return "undefined" == typeof a && (a = 0),
		a > this.children.length - 1 && (a = 0),
		this.cursor ? (this._cache[8] = a, this.cursor = this.children[this._cache[8]], this.cursor) : void 0
	},
	b.Group.prototype.next = function() {
		return this.cursor ? (this._cache[8] >= this.children.length - 1 ? this._cache[8] = 0 : this._cache[8]++, this.cursor = this.children[this._cache[8]], this.cursor) : void 0
	},
	b.Group.prototype.previous = function() {
		return this.cursor ? (0 === this._cache[8] ? this._cache[8] = this.children.length - 1 : this._cache[8]--, this.cursor = this.children[this._cache[8]], this.cursor) : void 0
	},
	b.Group.prototype.swap = function(a, b) {
		var c = this.swapChildren(a, b);
		return c && this.updateZ(),
		c
	},
	b.Group.prototype.bringToTop = function(a) {
		return a.parent === this && this.getIndex(a) < this.children.length && (this.remove(a, !1, !0), this.add(a, !0)),
		a
	},
	b.Group.prototype.sendToBack = function(a) {
		return a.parent === this && this.getIndex(a) > 0 && (this.remove(a, !1, !0), this.addAt(a, 0, !0)),
		a
	},
	b.Group.prototype.moveUp = function(a) {
		var b, c;
		return a.parent === this && this.getIndex(a) < this.children.length - 1 && (b = this.getIndex(a), c = this.getAt(b + 1), c && this.swap(a, c)),
		a
	},
	b.Group.prototype.moveDown = function(a) {
		var b, c;
		return a.parent === this && this.getIndex(a) > 0 && (b = this.getIndex(a), c = this.getAt(b - 1), c && this.swap(a, c)),
		a
	},
	b.Group.prototype.xy = function(a, b, c) {
		return 0 > a || a > this.children.length ? -1 : (this.getChildAt(a).x = b, this.getChildAt(a).y = c, void 0)
	},
	b.Group.prototype.reverse = function() {
		this.children.reverse(),
		this.updateZ()
	},
	b.Group.prototype.getIndex = function(a) {
		return this.children.indexOf(a)
	},
	b.Group.prototype.replace = function(a, c) {
		var e, d = this.getIndex(a);
		return - 1 !== d ? (void 0 !== c.parent && (c.events.onRemovedFromGroup.dispatch(c, this), c.parent.removeChild(c), c.parent instanceof b.Group && c.parent.updateZ()), e = a, this.remove(e), this.addAt(c, d), e) : void 0
	},
	b.Group.prototype.hasProperty = function(a, b) {
		var c = b.length;
		return 1 === c && b[0] in a ? !0 : 2 === c && b[0] in a && b[1] in a[b[0]] ? !0 : 3 === c && b[0] in a && b[1] in a[b[0]] && b[2] in a[b[0]][b[1]] ? !0 : 4 === c && b[0] in a && b[1] in a[b[0]] && b[2] in a[b[0]][b[1]] && b[3] in a[b[0]][b[1]][b[2]] ? !0 : !1
	},
	b.Group.prototype.setProperty = function(a, b, c, d, e) {
		if ("undefined" == typeof e && (e = !1), d = d || 0, !this.hasProperty(a, b) && (!e || d > 0)) return ! 1;
		var f = b.length;
		return 1 === f ? 0 === d ? a[b[0]] = c: 1 == d ? a[b[0]] += c: 2 == d ? a[b[0]] -= c: 3 == d ? a[b[0]] *= c: 4 == d && (a[b[0]] /= c) : 2 === f ? 0 === d ? a[b[0]][b[1]] = c: 1 == d ? a[b[0]][b[1]] += c: 2 == d ? a[b[0]][b[1]] -= c: 3 == d ? a[b[0]][b[1]] *= c: 4 == d && (a[b[0]][b[1]] /= c) : 3 === f ? 0 === d ? a[b[0]][b[1]][b[2]] = c: 1 == d ? a[b[0]][b[1]][b[2]] += c: 2 == d ? a[b[0]][b[1]][b[2]] -= c: 3 == d ? a[b[0]][b[1]][b[2]] *= c: 4 == d && (a[b[0]][b[1]][b[2]] /= c) : 4 === f && (0 === d ? a[b[0]][b[1]][b[2]][b[3]] = c: 1 == d ? a[b[0]][b[1]][b[2]][b[3]] += c: 2 == d ? a[b[0]][b[1]][b[2]][b[3]] -= c: 3 == d ? a[b[0]][b[1]][b[2]][b[3]] *= c: 4 == d && (a[b[0]][b[1]][b[2]][b[3]] /= c)),
		!0
	},
	b.Group.prototype.checkProperty = function(a, c, d, e) {
		return "undefined" == typeof e && (e = !1),
		!b.Utils.getProperty(a, c) && e ? !1 : b.Utils.getProperty(a, c) !== d ? !1 : !0
	},
	b.Group.prototype.set = function(a, b, c, d, e, f, g) {
		return "undefined" == typeof g && (g = !1),
		b = b.split("."),
		"undefined" == typeof d && (d = !1),
		"undefined" == typeof e && (e = !1),
		(d === !1 || d && a.alive) && (e === !1 || e && a.visible) ? this.setProperty(a, b, c, f, g) : void 0
	},
	b.Group.prototype.setAll = function(a, b, c, d, e, f) {
		"undefined" == typeof c && (c = !1),
		"undefined" == typeof d && (d = !1),
		"undefined" == typeof f && (f = !1),
		a = a.split("."),
		e = e || 0;
		for (var g = 0,
		h = this.children.length; h > g; g++)(!c || c && this.children[g].alive) && (!d || d && this.children[g].visible) && this.setProperty(this.children[g], a, b, e, f)
	},
	b.Group.prototype.setAllChildren = function(a, c, d, e, f, g) {
		"undefined" == typeof d && (d = !1),
		"undefined" == typeof e && (e = !1),
		"undefined" == typeof g && (g = !1),
		f = f || 0;
		for (var h = 0,
		i = this.children.length; i > h; h++)(!d || d && this.children[h].alive) && (!e || e && this.children[h].visible) && (this.children[h] instanceof b.Group ? this.children[h].setAllChildren(a, c, d, e, f, g) : this.setProperty(this.children[h], a.split("."), c, f, g))
	},
	b.Group.prototype.checkAll = function(a, b, c, d, e) {
		"undefined" == typeof c && (c = !1),
		"undefined" == typeof d && (d = !1),
		"undefined" == typeof e && (e = !1);
		for (var f = 0,
		g = this.children.length; g > f; f++) if ((!c || c && this.children[f].alive) && (!d || d && this.children[f].visible) && !this.checkProperty(this.children[f], a, b, e)) return ! 1;
		return ! 0
	},
	b.Group.prototype.addAll = function(a, b, c, d) {
		this.setAll(a, b, c, d, 1)
	},
	b.Group.prototype.subAll = function(a, b, c, d) {
		this.setAll(a, b, c, d, 2)
	},
	b.Group.prototype.multiplyAll = function(a, b, c, d) {
		this.setAll(a, b, c, d, 3)
	},
	b.Group.prototype.divideAll = function(a, b, c, d) {
		this.setAll(a, b, c, d, 4)
	},
	b.Group.prototype.callAllExists = function(a, b) {
		var d, e, c = Array.prototype.splice.call(arguments, 2);
		for (d = 0, e = this.children.length; e > d; d++) this.children[d].exists === b && this.children[d][a] && this.children[d][a].apply(this.children[d], c)
	},
	b.Group.prototype.callbackFromArray = function(a, b, c) {
		if (1 == c) {
			if (a[b[0]]) return a[b[0]]
		} else if (2 == c) {
			if (a[b[0]][b[1]]) return a[b[0]][b[1]]
		} else if (3 == c) {
			if (a[b[0]][b[1]][b[2]]) return a[b[0]][b[1]][b[2]]
		} else if (4 == c) {
			if (a[b[0]][b[1]][b[2]][b[3]]) return a[b[0]][b[1]][b[2]][b[3]]
		} else if (a[b]) return a[b];
		return ! 1
	},
	b.Group.prototype.callAll = function(a, b) {
		var c, d, e, f, g, h, i;
		if ("undefined" != typeof a) for (a = a.split("."), c = a.length, "undefined" == typeof b || null === b || "" === b ? b = null: "string" == typeof b && (b = b.split("."), d = b.length), e = Array.prototype.splice.call(arguments, 2), f = null, g = null, h = 0, i = this.children.length; i > h; h++) f = this.callbackFromArray(this.children[h], a, c),
		b && f ? (g = this.callbackFromArray(this.children[h], b, d), f && f.apply(g, e)) : f && f.apply(this.children[h], e)
	},
	b.Group.prototype.preUpdate = function() {
		if (!this.exists || !this.parent.exists) return this.renderOrderID = -1,
		!1;
		for (var a = this.children.length; a--;) this.children[a].preUpdate();
		return ! 0
	},
	b.Group.prototype.update = function() {
		for (var a = this.children.length; a--;) this.children[a].update()
	},
	b.Group.prototype.postUpdate = function() {
		1 === this._cache[7] && (this.x = this.game.camera.view.x + this.cameraOffset.x, this.y = this.game.camera.view.y + this.cameraOffset.y);
		for (var a = this.children.length; a--;) this.children[a].postUpdate()
	},
	b.Group.prototype.forEach = function(a, b, c) {
		var d, e, f;
		for ("undefined" == typeof c && (c = !1), d = Array.prototype.splice.call(arguments, 3), d.unshift(null), e = 0, f = this.children.length; f > e; e++)(!c || c && this.children[e].exists) && (d[0] = this.children[e], a.apply(b, d))
	},
	b.Group.prototype.forEachExists = function(a, c) {
		var d = Array.prototype.splice.call(arguments, 2);
		d.unshift(null),
		this.iterate("exists", !0, b.Group.RETURN_TOTAL, a, c, d)
	},
	b.Group.prototype.forEachAlive = function(a, c) {
		var d = Array.prototype.splice.call(arguments, 2);
		d.unshift(null),
		this.iterate("alive", !0, b.Group.RETURN_TOTAL, a, c, d)
	},
	b.Group.prototype.forEachDead = function(a, c) {
		var d = Array.prototype.splice.call(arguments, 2);
		d.unshift(null),
		this.iterate("alive", !1, b.Group.RETURN_TOTAL, a, c, d)
	},
	b.Group.prototype.sort = function(a, c) {
		this.children.length < 2 || ("undefined" == typeof a && (a = "z"), "undefined" == typeof c && (c = b.Group.SORT_ASCENDING), this._sortProperty = a, c === b.Group.SORT_ASCENDING ? this.children.sort(this.ascendingSortHandler.bind(this)) : this.children.sort(this.descendingSortHandler.bind(this)), this.updateZ())
	},
	b.Group.prototype.customSort = function(a, b) {
		this.children.length < 2 || (this.children.sort(a.bind(b)), this.updateZ())
	},
	b.Group.prototype.ascendingSortHandler = function(a, b) {
		return a[this._sortProperty] < b[this._sortProperty] ? -1 : a[this._sortProperty] > b[this._sortProperty] ? 1 : a.z < b.z ? -1 : 1
	},
	b.Group.prototype.descendingSortHandler = function(a, b) {
		return a[this._sortProperty] < b[this._sortProperty] ? 1 : a[this._sortProperty] > b[this._sortProperty] ? -1 : 0
	},
	b.Group.prototype.iterate = function(a, c, d, e, f, g) {
		var h, i, j;
		if (d === b.Group.RETURN_TOTAL && 0 === this.children.length) return 0;
		for ("undefined" == typeof e && (e = !1), h = 0, i = 0, j = this.children.length; j > i; i++) if (this.children[i][a] === c && (h++, e && (g[0] = this.children[i], e.apply(f, g)), d === b.Group.RETURN_CHILD)) return this.children[i];
		return d === b.Group.RETURN_TOTAL ? h: d === b.Group.RETURN_CHILD ? null: void 0
	},
	b.Group.prototype.getFirstExists = function(a) {
		return "boolean" != typeof a && (a = !0),
		this.iterate("exists", a, b.Group.RETURN_CHILD)
	},
	b.Group.prototype.getFirstAlive = function() {
		return this.iterate("alive", !0, b.Group.RETURN_CHILD)
	},
	b.Group.prototype.getFirstDead = function() {
		return this.iterate("alive", !1, b.Group.RETURN_CHILD)
	},
	b.Group.prototype.getTop = function() {
		return this.children.length > 0 ? this.children[this.children.length - 1] : void 0
	},
	b.Group.prototype.getBottom = function() {
		return this.children.length > 0 ? this.children[0] : void 0
	},
	b.Group.prototype.countLiving = function() {
		return this.iterate("alive", !0, b.Group.RETURN_TOTAL)
	},
	b.Group.prototype.countDead = function() {
		return this.iterate("alive", !1, b.Group.RETURN_TOTAL)
	},
	b.Group.prototype.getRandom = function(a, b) {
		return 0 === this.children.length ? null: (a = a || 0, b = b || this.children.length, this.game.math.getRandom(this.children, a, b))
	},
	b.Group.prototype.remove = function(a, b, c) {
		if ("undefined" == typeof b && (b = !1), "undefined" == typeof c && (c = !1), 0 === this.children.length || -1 === this.children.indexOf(a)) return ! 1;
		c || !a.events || a.destroyPhase || a.events.onRemovedFromGroup.dispatch(a, this);
		var d = this.removeChild(a);
		return this.updateZ(),
		this.cursor === a && this.next(),
		b && d && d.destroy(!0),
		!0
	},
	b.Group.prototype.removeAll = function(a, b) {
		if ("undefined" == typeof a && (a = !1), "undefined" == typeof b && (b = !1), 0 !== this.children.length) {
			do { ! b && this.children[0].events && this.children[0].events.onRemovedFromGroup.dispatch(this.children[0], this);
				var c = this.removeChild(this.children[0]);
				a && c && c.destroy(!0)
			} while ( this . children . length > 0 );
			this.cursor = null
		}
	},
	b.Group.prototype.removeBetween = function(a, b, c, d) {
		var e, f;
		if ("undefined" == typeof b && (b = this.children.length), "undefined" == typeof c && (c = !1), "undefined" == typeof d && (d = !1), 0 !== this.children.length) {
			if (a > b || 0 > a || b > this.children.length) return ! 1;
			for (e = b; e >= a;) ! d && this.children[e].events && this.children[e].events.onRemovedFromGroup.dispatch(this.children[e], this),
			f = this.removeChild(this.children[e]),
			c && f && f.destroy(!0),
			this.cursor === this.children[e] && (this.cursor = null),
			e--;
			this.updateZ()
		}
	},
	b.Group.prototype.destroy = function(a, b) {
		null !== this.game && ("undefined" == typeof a && (a = !0), "undefined" == typeof b && (b = !1), this.removeAll(a), this.cursor = null, this.filters = null, b || (this.parent && this.parent.removeChild(this), this.game = null, this.exists = !1))
	},
	Object.defineProperty(b.Group.prototype, "total", {
		get: function() {
			return this.iterate("exists", !0, b.Group.RETURN_TOTAL)
		}
	}),
	Object.defineProperty(b.Group.prototype, "length", {
		get: function() {
			return this.children.length
		}
	}),
	Object.defineProperty(b.Group.prototype, "angle", {
		get: function() {
			return b.Math.radToDeg(this.rotation)
		},
		set: function(a) {
			this.rotation = b.Math.degToRad(a)
		}
	}),
	Object.defineProperty(b.Group.prototype, "fixedToCamera", {
		get: function() {
			return !! this._cache[7]
		},
		set: function(a) {
			a ? (this._cache[7] = 1, this.cameraOffset.set(this.x, this.y)) : this._cache[7] = 0
		}
	}),
	b.World = function(a) {
		b.Group.call(this, a, null, "__world", !1),
		this.bounds = new b.Rectangle(0, 0, a.width, a.height),
		this.camera = null
	},
	b.World.prototype = Object.create(b.Group.prototype),
	b.World.prototype.constructor = b.World,
	b.World.prototype.boot = function() {
		this.camera = new b.Camera(this.game, 0, 0, 0, this.game.width, this.game.height),
		this.camera.displayObject = this,
		this.camera.scale = this.scale,
		this.game.camera = this.camera,
		this.game.stage.addChild(this)
	},
	b.World.prototype.setBounds = function(a, b, c, d) {
		c < this.game.width && (c = this.game.width),
		d < this.game.height && (d = this.game.height),
		this.bounds.setTo(a, b, c, d),
		this.camera.bounds && this.camera.bounds.setTo(a, b, c, d),
		this.game.physics.setBoundsToWorld()
	},
	b.World.prototype.shutdown = function() {
		this.destroy(!0, !0)
	},
	b.World.prototype.wrap = function(a, b, c, d, e) {
		"undefined" == typeof b && (b = 0),
		"undefined" == typeof c && (c = !1),
		"undefined" == typeof d && (d = !0),
		"undefined" == typeof e && (e = !0),
		c ? (a.getBounds(), d && (a.x + a._currentBounds.width < this.bounds.x ? a.x = this.bounds.right: a.x > this.bounds.right && (a.x = this.bounds.left)), e && (a.y + a._currentBounds.height < this.bounds.top ? a.y = this.bounds.bottom: a.y > this.bounds.bottom && (a.y = this.bounds.top))) : (d && a.x + b < this.bounds.x ? a.x = this.bounds.right + b: d && a.x - b > this.bounds.right && (a.x = this.bounds.left - b), e && a.y + b < this.bounds.top ? a.y = this.bounds.bottom + b: e && a.y - b > this.bounds.bottom && (a.y = this.bounds.top - b))
	},
	Object.defineProperty(b.World.prototype, "width", {
		get: function() {
			return this.bounds.width
		},
		set: function(a) {
			this.bounds.width = a
		}
	}),
	Object.defineProperty(b.World.prototype, "height", {
		get: function() {
			return this.bounds.height
		},
		set: function(a) {
			this.bounds.height = a
		}
	}),
	Object.defineProperty(b.World.prototype, "centerX", {
		get: function() {
			return this.bounds.halfWidth
		}
	}),
	Object.defineProperty(b.World.prototype, "centerY", {
		get: function() {
			return this.bounds.halfHeight
		}
	}),
	Object.defineProperty(b.World.prototype, "randomX", {
		get: function() {
			return this.bounds.x < 0 ? this.game.rnd.integerInRange(this.bounds.x, this.bounds.width - Math.abs(this.bounds.x)) : this.game.rnd.integerInRange(this.bounds.x, this.bounds.width)
		}
	}),
	Object.defineProperty(b.World.prototype, "randomY", {
		get: function() {
			return this.bounds.y < 0 ? this.game.rnd.integerInRange(this.bounds.y, this.bounds.height - Math.abs(this.bounds.y)) : this.game.rnd.integerInRange(this.bounds.y, this.bounds.height)
		}
	}),
	b.ScaleManager = function(a, c, d) {
		this.game = a,
		this.width = c,
		this.height = d,
		this.minWidth = null,
		this.maxWidth = null,
		this.minHeight = null,
		this.maxHeight = null,
		this.forceLandscape = !1,
		this.forcePortrait = !1,
		this.incorrectOrientation = !1,
		this.pageAlignHorizontally = !1,
		this.pageAlignVertically = !1,
		this.maxIterations = 5,
		this.orientationSprite = null,
		this.enterLandscape = new b.Signal,
		this.enterPortrait = new b.Signal,
		this.enterIncorrectOrientation = new b.Signal,
		this.leaveIncorrectOrientation = new b.Signal,
		this.hasResized = new b.Signal,
		this.fullScreenTarget = this.game.canvas,
		this.enterFullScreen = new b.Signal,
		this.leaveFullScreen = new b.Signal,
		this.orientation = 0,
		window["orientation"] ? this.orientation = window["orientation"] : window.outerWidth > window.outerHeight && (this.orientation = 90),
		this.scaleFactor = new b.Point(1, 1),
		this.scaleFactorInversed = new b.Point(1, 1),
		this.margin = new b.Point(0, 0),
		this.bounds = new b.Rectangle(0, 0, c, d),
		this.aspectRatio = 0,
		this.sourceAspectRatio = c / d,
		this.event = null,
		this.scaleMode = b.ScaleManager.NO_SCALE,
		this.fullScreenScaleMode = b.ScaleManager.NO_SCALE,
		this._startHeight = 0,
		this._width = 0,
		this._height = 0,
		this._check = null;
		var e = this;
		window.addEventListener("orientationchange",
		function(a) {
			return e.checkOrientation(a)
		},
		!1),
		window.addEventListener("resize",
		function(a) {
			return e.checkResize(a)
		},
		!1),
		this.game.device.cocoonJS || (document.addEventListener("webkitfullscreenchange",
		function(a) {
			return e.fullScreenChange(a)
		},
		!1), document.addEventListener("mozfullscreenchange",
		function(a) {
			return e.fullScreenChange(a)
		},
		!1), document.addEventListener("fullscreenchange",
		function(a) {
			return e.fullScreenChange(a)
		},
		!1))
	},
	b.ScaleManager.EXACT_FIT = 0,
	b.ScaleManager.NO_SCALE = 1,
	b.ScaleManager.SHOW_ALL = 2,
	b.ScaleManager.prototype = {
		startFullScreen: function(a) { ! this.isFullScreen && this.game.device.fullscreen && ("undefined" != typeof a && this.game.renderType === b.CANVAS && (this.game.stage.smoothed = a), this._width = this.width, this._height = this.height, this.game.device.fullscreenKeyboard ? this.fullScreenTarget[this.game.device.requestFullscreen](Element.ALLOW_KEYBOARD_INPUT) : this.fullScreenTarget[this.game.device.requestFullscreen]())
		},
		stopFullScreen: function() {
			document[this.game.device.cancelFullscreen]()
		},
		fullScreenChange: function(a) {
			this.event = a,
			this.isFullScreen ? (this.fullScreenScaleMode === b.ScaleManager.EXACT_FIT ? (this.fullScreenTarget.style["width"] = "100%", this.fullScreenTarget.style["height"] = "100%", this.width = window.outerWidth, this.height = window.outerHeight, this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height), this.aspectRatio = this.width / this.height, this.scaleFactor.x = this.game.width / this.width, this.scaleFactor.y = this.game.height / this.height, this.checkResize()) : this.fullScreenScaleMode === b.ScaleManager.SHOW_ALL && (this.setShowAll(), this.refresh()), this.enterFullScreen.dispatch(this.width, this.height)) : (this.fullScreenTarget.style["width"] = this.game.width + "px", this.fullScreenTarget.style["height"] = this.game.height + "px", this.width = this._width, this.height = this._height, this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height), this.aspectRatio = this.width / this.height, this.scaleFactor.x = this.game.width / this.width, this.scaleFactor.y = this.game.height / this.height, this.leaveFullScreen.dispatch(this.width, this.height))
		},
		forceOrientation: function(a, c, d) {
			"undefined" == typeof c && (c = !1),
			this.forceLandscape = a,
			this.forcePortrait = c,
			"undefined" != typeof d && ((null === d || this.game.cache.checkImageKey(d) === !1) && (d = "__default"), this.orientationSprite = new b.Image(this.game, this.game.width / 2, this.game.height / 2, d), this.orientationSprite.anchor.set(.5), this.checkOrientationState(), this.incorrectOrientation ? (this.orientationSprite.visible = !0, this.game.world.visible = !1) : (this.orientationSprite.visible = !1, this.game.world.visible = !0), this.game.stage.addChild(this.orientationSprite))
		},
		checkOrientationState: function() {
			this.incorrectOrientation ? (this.forceLandscape && window.innerWidth > window.innerHeight || this.forcePortrait && window.innerHeight > window.innerWidth) && (this.incorrectOrientation = !1, this.leaveIncorrectOrientation.dispatch(), this.orientationSprite && (this.orientationSprite.visible = !1, this.game.world.visible = !0), this.scaleMode !== b.ScaleManager.NO_SCALE && this.refresh()) : (this.forceLandscape && window.innerWidth < window.innerHeight || this.forcePortrait && window.innerHeight < window.innerWidth) && (this.incorrectOrientation = !0, this.enterIncorrectOrientation.dispatch(), this.orientationSprite && this.orientationSprite.visible === !1 && (this.orientationSprite.visible = !0, this.game.world.visible = !1), this.scaleMode !== b.ScaleManager.NO_SCALE && this.refresh())
		},
		checkOrientation: function(a) {
			this.event = a,
			this.orientation = window["orientation"],
			this.isLandscape ? this.enterLandscape.dispatch(this.orientation, !0, !1) : this.enterPortrait.dispatch(this.orientation, !1, !0),
			this.scaleMode !== b.ScaleManager.NO_SCALE && this.refresh()
		},
		checkResize: function(a) {
			this.event = a,
			this.orientation = window.outerWidth > window.outerHeight ? 90 : 0,
			this.isLandscape ? this.enterLandscape.dispatch(this.orientation, !0, !1) : this.enterPortrait.dispatch(this.orientation, !1, !0),
			this.scaleMode !== b.ScaleManager.NO_SCALE && this.refresh(),
			this.checkOrientationState()
		},
		refresh: function() {
			if (this.game.device.iPad || this.game.device.webApp || this.game.device.desktop || (this.game.device.android && !this.game.device.chrome ? window.scrollTo(0, 1) : window.scrollTo(0, 0)), null === this._check && this.maxIterations > 0) {
				this._iterations = this.maxIterations;
				var a = this;
				this._check = window.setInterval(function() {
					return a.setScreenSize()
				},
				10),
				this.setScreenSize()
			}
		},
		setScreenSize: function(a) {
			"undefined" == typeof a && (a = !1),
			this.game.device.iPad || this.game.device.webApp || this.game.device.desktop || (this.game.device.android && !this.game.device.chrome ? window.scrollTo(0, 1) : window.scrollTo(0, 0)),
			this._iterations--,
			(a || window.innerHeight > this._startHeight || this._iterations < 0) && (document.documentElement["style"].minHeight = window.innerHeight + "px", this.incorrectOrientation ? this.setMaximum() : this.isFullScreen ? this.fullScreenScaleMode === b.ScaleManager.EXACT_FIT ? this.setExactFit() : this.fullScreenScaleMode === b.ScaleManager.SHOW_ALL && this.setShowAll() : this.scaleMode === b.ScaleManager.EXACT_FIT ? this.setExactFit() : this.scaleMode === b.ScaleManager.SHOW_ALL && this.setShowAll(), this.setSize(), clearInterval(this._check), this._check = null)
		},
		setSize: function() {
			this.incorrectOrientation || (this.maxWidth && this.width > this.maxWidth && (this.width = this.maxWidth), this.maxHeight && this.height > this.maxHeight && (this.height = this.maxHeight), this.minWidth && this.width < this.minWidth && (this.width = this.minWidth), this.minHeight && this.height < this.minHeight && (this.height = this.minHeight)),
			this.game.canvas.style.width = this.width + "px",
			this.game.canvas.style.height = this.height + "px",
			this.game.input.scale.setTo(this.game.width / this.width, this.game.height / this.height),
			this.pageAlignHorizontally && (this.width < window.innerWidth && !this.incorrectOrientation ? (this.margin.x = Math.round((window.innerWidth - this.width) / 2), this.game.canvas.style.marginLeft = this.margin.x + "px") : (this.margin.x = 0, this.game.canvas.style.marginLeft = "0px")),
			this.pageAlignVertically && (this.height < window.innerHeight && !this.incorrectOrientation ? (this.margin.y = Math.round((window.innerHeight - this.height) / 2), this.game.canvas.style.marginTop = this.margin.y + "px") : (this.margin.y = 0, this.game.canvas.style.marginTop = "0px")),
			b.Canvas.getOffset(this.game.canvas, this.game.stage.offset),
			this.bounds.setTo(this.game.stage.offset.x, this.game.stage.offset.y, this.width, this.height),
			this.aspectRatio = this.width / this.height,
			this.scaleFactor.x = this.game.width / this.width,
			this.scaleFactor.y = this.game.height / this.height,
			this.scaleFactorInversed.x = this.width / this.game.width,
			this.scaleFactorInversed.y = this.height / this.game.height,
			this.hasResized.dispatch(this.width, this.height),
			this.checkOrientationState()
		},
		setMaximum: function() {
			this.width = window.innerWidth,
			this.height = window.innerHeight
		},
		setShowAll: function() {
			var a = Math.min(window.innerHeight / this.game.height, window.innerWidth / this.game.width);
			this.width = Math.round(this.game.width * a),
			this.height = Math.round(this.game.height * a)
		},
		setExactFit: function() {
			var a = window.innerWidth,
			b = window.innerHeight;
			this.width = this.maxWidth && a > this.maxWidth ? this.maxWidth: a,
			this.height = this.maxHeight && b > this.maxHeight ? this.maxHeight: b
		}
	},
	b.ScaleManager.prototype.constructor = b.ScaleManager,
	Object.defineProperty(b.ScaleManager.prototype, "isFullScreen", {
		get: function() {
			return document["fullscreenElement"] || document["mozFullScreenElement"] || document["webkitFullscreenElement"]
		}
	}),
	Object.defineProperty(b.ScaleManager.prototype, "isPortrait", {
		get: function() {
			return 0 === this.orientation || 180 === this.orientation
		}
	}),
	Object.defineProperty(b.ScaleManager.prototype, "isLandscape", {
		get: function() {
			return 90 === this.orientation || -90 === this.orientation
		}
	}),
	b.Game = function(a, c, d, e, f, g, h, i) {
		this.id = b.GAMES.push(this) - 1,
		this.config = null,
		this.physicsConfig = i,
		this.parent = "",
		this.width = 800,
		this.height = 600,
		this.transparent = !1,
		this.antialias = !0,
		this.preserveDrawingBuffer = !1,
		this.renderer = null,
		this.renderType = b.AUTO,
		this.state = null,
		this.isBooted = !1,
		this.isRunning = !1,
		this.raf = null,
		this.add = null,
		this.make = null,
		this.cache = null,
		this.input = null,
		this.load = null,
		this.math = null,
		this.net = null,
		this.scale = null,
		this.sound = null,
		this.stage = null,
		this.time = null,
		this.tweens = null,
		this.world = null,
		this.physics = null,
		this.rnd = null,
		this.device = null,
		this.camera = null,
		this.canvas = null,
		this.context = null,
		this.debug = null,
		this.particles = null,
		this.stepping = !1,
		this.pendingStep = !1,
		this.stepCount = 0,
		this.onPause = null,
		this.onResume = null,
		this.onBlur = null,
		this.onFocus = null,
		this._paused = !1,
		this._codePaused = !1,
		1 === arguments.length && "object" == typeof arguments[0] ? this.parseConfig(arguments[0]) : (this.config = {
			enableDebug: !0
		},
		"undefined" != typeof a && (this.width = a), "undefined" != typeof c && (this.height = c), "undefined" != typeof d && (this.renderer = d, this.renderType = d), "undefined" != typeof e && (this.parent = e), "undefined" != typeof g && (this.transparent = g), "undefined" != typeof h && (this.antialias = h), this.rnd = new b.RandomDataGenerator([(Date.now() * Math.random()).toString()]), this.state = new b.StateManager(this, f));
		var j = this;
		return this._onBoot = function() {
			return j.boot()
		},
		"complete" === document.readyState || "interactive" === document.readyState ? window.setTimeout(this._onBoot, 0) : (document.addEventListener("DOMContentLoaded", this._onBoot, !1), window.addEventListener("load", this._onBoot, !1)),
		this
	},
	b.Game.prototype = {
		parseConfig: function(a) {
			var c, d;
			this.config = a,
			a["width"] && (this.width = b.Utils.parseDimension(a["width"], 0)),
			a["height"] && (this.height = b.Utils.parseDimension(a["height"], 1)),
			a["renderer"] && (this.renderer = a["renderer"], this.renderType = a["renderer"]),
			a["parent"] && (this.parent = a["parent"]),
			a["transparent"] && (this.transparent = a["transparent"]),
			a["antialias"] && (this.antialias = a["antialias"]),
			a["preserveDrawingBuffer"] && (this.preserveDrawingBuffer = a["preserveDrawingBuffer"]),
			a["physicsConfig"] && (this.physicsConfig = a["physicsConfig"]),
			c = [(Date.now() * Math.random()).toString()],
			a["seed"] && (c = a["seed"]),
			this.rnd = new b.RandomDataGenerator(c),
			d = null,
			a["state"] && (d = a["state"]),
			this.state = new b.StateManager(this, d)
		},
		boot: function() {
			this.isBooted || (document.body ? (document.removeEventListener("DOMContentLoaded", this._onBoot), window.removeEventListener("load", this._onBoot), this.onPause = new b.Signal, this.onResume = new b.Signal, this.onBlur = new b.Signal, this.onFocus = new b.Signal, this.isBooted = !0, this.device = new b.Device(this), this.math = b.Math, this.stage = new b.Stage(this, this.width, this.height), this.setUpRenderer(), this.scale = new b.ScaleManager(this, this.width, this.height), this.device.checkFullScreenSupport(), this.world = new b.World(this), this.add = new b.GameObjectFactory(this), this.make = new b.GameObjectCreator(this), this.cache = new b.Cache(this), this.load = new b.Loader(this), this.time = new b.Time(this), this.tweens = new b.TweenManager(this), this.input = new b.Input(this), this.sound = new b.SoundManager(this), this.physics = new b.Physics(this, this.physicsConfig), this.particles = new b.Particles(this), this.plugins = new b.PluginManager(this), this.net = new b.Net(this), this.time.boot(), this.stage.boot(), this.world.boot(), this.input.boot(), this.sound.boot(), this.state.boot(), this.config["enableDebug"] && (this.debug = new b.Utils.Debug(this), this.debug.boot()), this.showDebugHeader(), this.isRunning = !0, this.raf = this.config && this.config["forceSetTimeOut"] ? new b.RequestAnimationFrame(this, this.config["forceSetTimeOut"]) : new b.RequestAnimationFrame(this, !1), this.raf.start()) : window.setTimeout(this._onBoot, 20))
		},
		showDebugHeader: function() {
			var f, g, a = b.VERSION,
			c = "Canvas",
			d = "HTML Audio",
			e = 1;
			if (this.renderType === b.WEBGL ? (c = "WebGL", e++) : this.renderType == b.HEADLESS && (c = "Headless"), this.device.webAudio && (d = "WebAudio", e++), this.device.chrome) {
				for (f = ["%c %c %c Phaser v" + a + " | Pixi.js " + PIXI.VERSION + " | " + c + " | " + d + " %c %c  http://phaser.io %c %c ♥%c♥%c♥ ", "background: #0cf300", "background: #00bc17", "color: #ffffff; background: #00711f;", "background: #00bc17", "background: #0cf300", "background: #00bc17"], g = 0; 3 > g; g++) e > g ? f.push("color: #ff2424; background: #fff") : f.push("color: #959595; background: #fff");
				console.log.apply(console, f)
			} else window["console"] && console.log("Phaser v" + a + " | Pixi.js " + PIXI.VERSION + " | " + c + " | " + d + " | http://phaser.io")
		},
		setUpRenderer: function() {
			if (this.device.trident && (this.renderType = b.CANVAS), this.canvas = this.config["canvasID"] ? b.Canvas.create(this.width, this.height, this.config["canvasID"]) : b.Canvas.create(this.width, this.height), this.config["canvasStyle"] ? this.canvas.style = this.config["canvasStyle"] : this.canvas.style["-webkit-full-screen"] = "width: 100%; height: 100%", this.device.cocoonJS && (this.canvas.screencanvas = !0), this.renderType === b.HEADLESS || this.renderType === b.CANVAS || this.renderType === b.AUTO && this.device.webGL === !1) {
				if (!this.device.canvas) throw new Error("Phaser.Game - cannot create Canvas or WebGL context, aborting.");
				this.renderType === b.AUTO && (this.renderType = b.CANVAS),
				this.renderer = new PIXI.CanvasRenderer(this.width, this.height, this.canvas, this.transparent),
				this.context = this.renderer.context
			} else this.renderType = b.WEBGL,
			this.renderer = new PIXI.WebGLRenderer(this.width, this.height, this.canvas, this.transparent, this.antialias, this.preserveDrawingBuffer),
			this.context = null;
			this.renderType !== b.HEADLESS && (this.stage.smoothed = this.antialias, b.Canvas.addToDOM(this.canvas, this.parent, !1), b.Canvas.setTouchAction(this.canvas))
		},
		update: function(a) {
			this.time.update(a),
			this._paused || this.pendingStep ? (this.state.pauseUpdate(), this.config["enableDebug"] && this.debug.preUpdate()) : (this.stepping && (this.pendingStep = !0), this.config["enableDebug"] && this.debug.preUpdate(), this.physics.preUpdate(), this.state.preUpdate(), this.plugins.preUpdate(), this.stage.preUpdate(), this.state.update(), this.stage.update(), this.tweens.update(), this.sound.update(), this.input.update(), this.physics.update(), this.particles.update(), this.plugins.update(), this.stage.postUpdate(), this.plugins.postUpdate()),
			this.renderType != b.HEADLESS && (this.state.preRender(), this.renderer.render(this.stage), this.plugins.render(), this.state.render(), this.plugins.postRender(), this.device.cocoonJS && this.renderType === b.CANVAS && 1 === this.stage.currentRenderOrderID && this.context.fillRect(0, 0, 0, 0))
		},
		enableStep: function() {
			this.stepping = !0,
			this.pendingStep = !1,
			this.stepCount = 0
		},
		disableStep: function() {
			this.stepping = !1,
			this.pendingStep = !1
		},
		step: function() {
			this.pendingStep = !1,
			this.stepCount++
		},
		destroy: function() {
			this.raf.stop(),
			this.input.destroy(),
			this.state.destroy(),
			this.physics.destroy(),
			this.state = null,
			this.cache = null,
			this.input = null,
			this.load = null,
			this.sound = null,
			this.stage = null,
			this.time = null,
			this.world = null,
			this.isBooted = !1
		},
		gamePaused: function(a) {
			this._paused || (this._paused = !0, this.time.gamePaused(), this.sound.setMute(), this.onPause.dispatch(a))
		},
		gameResumed: function(a) {
			this._paused && !this._codePaused && (this._paused = !1, this.time.gameResumed(), this.input.reset(), this.sound.unsetMute(), this.onResume.dispatch(a))
		},
		focusLoss: function(a) {
			this.onBlur.dispatch(a),
			this.stage.disableVisibilityChange || this.gamePaused(a)
		},
		focusGain: function(a) {
			this.onFocus.dispatch(a),
			this.stage.disableVisibilityChange || this.gameResumed(a)
		}
	},
	b.Game.prototype.constructor = b.Game,
	Object.defineProperty(b.Game.prototype, "paused", {
		get: function() {
			return this._paused
		},
		set: function(a) {
			a === !0 ? (this._paused === !1 && (this._paused = !0, this.sound.setMute(), this.time.gamePaused(), this.onPause.dispatch(this)), this._codePaused = !0) : (this._paused && (this._paused = !1, this.input.reset(), this.sound.unsetMute(), this.time.gameResumed(), this.onResume.dispatch(this)), this._codePaused = !1)
		}
	}),
	b.Input = function(a) {
		this.game = a,
		this.hitCanvas = null,
		this.hitContext = null,
		this.moveCallbacks = [],
		this.moveCallback = null,
		this.moveCallbackContext = this,
		this.pollRate = 0,
		this.disabled = !1,
		this.multiInputOverride = b.Input.MOUSE_TOUCH_COMBINE,
		this.position = null,
		this.speed = null,
		this.circle = null,
		this.scale = null,
		this.maxPointers = 10,
		this.currentPointers = 0,
		this.tapRate = 200,
		this.doubleTapRate = 300,
		this.holdRate = 2e3,
		this.justPressedRate = 200,
		this.justReleasedRate = 200,
		this.recordPointerHistory = !1,
		this.recordRate = 100,
		this.recordLimit = 100,
		this.pointer1 = null,
		this.pointer2 = null,
		this.pointer3 = null,
		this.pointer4 = null,
		this.pointer5 = null,
		this.pointer6 = null,
		this.pointer7 = null,
		this.pointer8 = null,
		this.pointer9 = null,
		this.pointer10 = null,
		this.activePointer = null,
		this.mousePointer = null,
		this.mouse = null,
		this.keyboard = null,
		this.touch = null,
		this.mspointer = null,
		this.gamepad = null,
		this.resetLocked = !1,
		this.onDown = null,
		this.onUp = null,
		this.onTap = null,
		this.onHold = null,
		this.minPriorityID = 0,
		this.interactiveItems = new b.ArrayList,
		this._localPoint = new b.Point,
		this._pollCounter = 0,
		this._oldPosition = null,
		this._x = 0,
		this._y = 0
	},
	b.Input.MOUSE_OVERRIDES_TOUCH = 0,
	b.Input.TOUCH_OVERRIDES_MOUSE = 1,
	b.Input.MOUSE_TOUCH_COMBINE = 2,
	b.Input.prototype = {
		boot: function() {
			this.mousePointer = new b.Pointer(this.game, 0),
			this.pointer1 = new b.Pointer(this.game, 1),
			this.pointer2 = new b.Pointer(this.game, 2),
			this.mouse = new b.Mouse(this.game),
			this.keyboard = new b.Keyboard(this.game),
			this.touch = new b.Touch(this.game),
			this.mspointer = new b.MSPointer(this.game),
			this.gamepad = new b.Gamepad(this.game),
			this.onDown = new b.Signal,
			this.onUp = new b.Signal,
			this.onTap = new b.Signal,
			this.onHold = new b.Signal,
			this.scale = new b.Point(1, 1),
			this.speed = new b.Point,
			this.position = new b.Point,
			this._oldPosition = new b.Point,
			this.circle = new b.Circle(0, 0, 44),
			this.activePointer = this.mousePointer,
			this.currentPointers = 0,
			this.hitCanvas = document.createElement("canvas"),
			this.hitCanvas.width = 1,
			this.hitCanvas.height = 1,
			this.hitContext = this.hitCanvas.getContext("2d"),
			this.mouse.start(),
			this.keyboard.start(),
			this.touch.start(),
			this.mspointer.start(),
			this.mousePointer.active = !0
		},
		destroy: function() {
			this.mouse.stop(),
			this.keyboard.stop(),
			this.touch.stop(),
			this.mspointer.stop(),
			this.gamepad.stop(),
			this.moveCallbacks = [],
			this.moveCallback = null
		},
		setMoveCallback: function(a, b) {
			this.moveCallback = a,
			this.moveCallbackContext = b
		},
		addMoveCallback: function(a, b) {
			return this.moveCallbacks.push({
				callback: a,
				context: b
			}) - 1
		},
		deleteMoveCallback: function(a) {
			this.moveCallbacks[a] && this.moveCallbacks.splice(a, 1)
		},
		addPointer: function() {
			var c, a = 0;
			for (c = 10; c > 0; c--) null === this["pointer" + c] && (a = c);
			return 0 === a ? (console.warn("You can only have 10 Pointer objects"), null) : (this["pointer" + a] = new b.Pointer(this.game, a), this["pointer" + a])
		},
		update: function() {
			return this.keyboard.update(),
			this.pollRate > 0 && this._pollCounter < this.pollRate ? (this._pollCounter++, void 0) : (this.speed.x = this.position.x - this._oldPosition.x, this.speed.y = this.position.y - this._oldPosition.y, this._oldPosition.copyFrom(this.position), this.mousePointer.update(), this.gamepad.active && this.gamepad.update(), this.pointer1.update(), this.pointer2.update(), this.pointer3 && this.pointer3.update(), this.pointer4 && this.pointer4.update(), this.pointer5 && this.pointer5.update(), this.pointer6 && this.pointer6.update(), this.pointer7 && this.pointer7.update(), this.pointer8 && this.pointer8.update(), this.pointer9 && this.pointer9.update(), this.pointer10 && this.pointer10.update(), this._pollCounter = 0, void 0)
		},
		reset: function(a) {
			if (this.game.isBooted && !this.resetLocked) {
				"undefined" == typeof a && (a = !1),
				this.keyboard.reset(a),
				this.mousePointer.reset(),
				this.gamepad.reset();
				for (var c = 1; 10 >= c; c++) this["pointer" + c] && this["pointer" + c].reset();
				this.currentPointers = 0,
				"none" !== this.game.canvas.style.cursor && (this.game.canvas.style.cursor = "inherit"),
				a && (this.onDown.dispose(), this.onUp.dispose(), this.onTap.dispose(), this.onHold.dispose(), this.onDown = new b.Signal, this.onUp = new b.Signal, this.onTap = new b.Signal, this.onHold = new b.Signal, this.moveCallbacks = []),
				this._pollCounter = 0
			}
		},
		resetSpeed: function(a, b) {
			this._oldPosition.setTo(a, b),
			this.speed.setTo(0, 0)
		},
		startPointer: function(a) {
			if (this.maxPointers < 10 && this.totalActivePointers == this.maxPointers) return null;
			if (this.pointer1.active === !1) return this.pointer1.start(a);
			if (this.pointer2.active === !1) return this.pointer2.start(a);
			for (var b = 3; 10 >= b; b++) if (this["pointer" + b] && this["pointer" + b].active === !1) return this["pointer" + b].start(a);
			return null
		},
		updatePointer: function(a) {
			if (this.pointer1.active && this.pointer1.identifier == a.identifier) return this.pointer1.move(a);
			if (this.pointer2.active && this.pointer2.identifier == a.identifier) return this.pointer2.move(a);
			for (var b = 3; 10 >= b; b++) if (this["pointer" + b] && this["pointer" + b].active && this["pointer" + b].identifier == a.identifier) return this["pointer" + b].move(a);
			return null
		},
		stopPointer: function(a) {
			if (this.pointer1.active && this.pointer1.identifier == a.identifier) return this.pointer1.stop(a);
			if (this.pointer2.active && this.pointer2.identifier == a.identifier) return this.pointer2.stop(a);
			for (var b = 3; 10 >= b; b++) if (this["pointer" + b] && this["pointer" + b].active && this["pointer" + b].identifier == a.identifier) return this["pointer" + b].stop(a);
			return null
		},
		getPointer: function(a) {
			if (a = a || !1, this.pointer1.active == a) return this.pointer1;
			if (this.pointer2.active == a) return this.pointer2;
			for (var b = 3; 10 >= b; b++) if (this["pointer" + b] && this["pointer" + b].active == a) return this["pointer" + b];
			return null
		},
		getPointerFromIdentifier: function(a) {
			if (this.pointer1.identifier === a) return this.pointer1;
			if (this.pointer2.identifier === a) return this.pointer2;
			for (var b = 3; 10 >= b; b++) if (this["pointer" + b] && this["pointer" + b].identifier === a) return this["pointer" + b];
			return null
		},
		getPointerFromId: function(a) {
			if (this.pointer1.pointerId === a) return this.pointer1;
			if (this.pointer2.pointerId === a) return this.pointer2;
			for (var b = 3; 10 >= b; b++) if (this["pointer" + b] && this["pointer" + b].pointerId === a) return this["pointer" + b];
			return null
		},
		getLocalPosition: function(a, c, d) {
			var e, f;
			return "undefined" == typeof d && (d = new b.Point),
			e = a.worldTransform,
			f = 1 / (e.a * e.d + e.b * -e.c),
			d.setTo(e.d * f * c.x + -e.b * f * c.y + (e.ty * e.b - e.tx * e.d) * f, e.a * f * c.y + -e.c * f * c.x + ( - e.ty * e.a + e.tx * e.c) * f)
		},
		hitTest: function(a, c, d) {
			var e, f, g, h, i, j;
			if (!a.worldVisible) return ! 1;
			if (this.getLocalPosition(a, c, this._localPoint), d.copyFrom(this._localPoint), a.hitArea && a.hitArea.contains) return a.hitArea.contains(this._localPoint.x, this._localPoint.y) ? !0 : !1;
			if (a instanceof b.TileSprite) {
				if (e = a.width, f = a.height, g = -e * a.anchor.x, this._localPoint.x > g && this._localPoint.x < g + e && (h = -f * a.anchor.y, this._localPoint.y > h && this._localPoint.y < h + f)) return ! 0
			} else if (a instanceof PIXI.Sprite && (e = a.texture.frame.width, f = a.texture.frame.height, g = -e * a.anchor.x, this._localPoint.x > g && this._localPoint.x < g + e && (h = -f * a.anchor.y, this._localPoint.y > h && this._localPoint.y < h + f))) return ! 0;
			for (i = 0, j = a.children.length; j > i; i++) if (this.hitTest(a.children[i], c, d)) return ! 0;
			return ! 1
		}
	},
	b.Input.prototype.constructor = b.Input,
	Object.defineProperty(b.Input.prototype, "x", {
		get: function() {
			return this._x
		},
		set: function(a) {
			this._x = Math.floor(a)
		}
	}),
	Object.defineProperty(b.Input.prototype, "y", {
		get: function() {
			return this._y
		},
		set: function(a) {
			this._y = Math.floor(a)
		}
	}),
	Object.defineProperty(b.Input.prototype, "pollLocked", {
		get: function() {
			return this.pollRate > 0 && this._pollCounter < this.pollRate
		}
	}),
	Object.defineProperty(b.Input.prototype, "totalInactivePointers", {
		get: function() {
			return 10 - this.currentPointers
		}
	}),
	Object.defineProperty(b.Input.prototype, "totalActivePointers", {
		get: function() {
			this.currentPointers = 0;
			for (var a = 1; 10 >= a; a++) this["pointer" + a] && this["pointer" + a].active && this.currentPointers++;
			return this.currentPointers
		}
	}),
	Object.defineProperty(b.Input.prototype, "worldX", {
		get: function() {
			return this.game.camera.view.x + this.x
		}
	}),
	Object.defineProperty(b.Input.prototype, "worldY", {
		get: function() {
			return this.game.camera.view.y + this.y
		}
	}),
	b.Key = function(a, c) {
		this.game = a,
		this.enabled = !0,
		this.event = null,
		this.isDown = !1,
		this.isUp = !0,
		this.altKey = !1,
		this.ctrlKey = !1,
		this.shiftKey = !1,
		this.timeDown = 0,
		this.duration = 0,
		this.timeUp = -2500,
		this.repeats = 0,
		this.keyCode = c,
		this.onDown = new b.Signal,
		this.onHoldCallback = null,
		this.onHoldContext = null,
		this.onUp = new b.Signal
	},
	b.Key.prototype = {
		update: function() {
			this.enabled && this.isDown && (this.duration = this.game.time.now - this.timeDown, this.repeats++, this.onHoldCallback && this.onHoldCallback.call(this.onHoldContext, this))
		},
		processKeyDown: function(a) {
			this.enabled && (this.event = a, this.isDown || (this.altKey = a.altKey, this.ctrlKey = a.ctrlKey, this.shiftKey = a.shiftKey, this.isDown = !0, this.isUp = !1, this.timeDown = this.game.time.now, this.duration = 0, this.repeats = 0, this.onDown.dispatch(this)))
		},
		processKeyUp: function(a) {
			this.enabled && (this.event = a, this.isUp || (this.isDown = !1, this.isUp = !0, this.timeUp = this.game.time.now, this.duration = this.game.time.now - this.timeDown, this.onUp.dispatch(this)))
		},
		reset: function(a) {
			"undefined" == typeof a && (a = !0),
			this.isDown = !1,
			this.isUp = !0,
			this.timeUp = this.game.time.now,
			this.duration = 0,
			this.enabled = !0,
			a && (this.onDown.removeAll(), this.onUp.removeAll(), this.onHoldCallback = null, this.onHoldContext = null)
		},
		justPressed: function(a) {
			return "undefined" == typeof a && (a = 50),
			this.isDown && this.duration < a
		},
		justReleased: function(a) {
			return "undefined" == typeof a && (a = 50),
			!this.isDown && this.game.time.now - this.timeUp < a
		}
	},
	b.Key.prototype.constructor = b.Key,
	b.Keyboard = function(a) {
		this.game = a,
		this.disabled = !1,
		this.event = null,
		this.pressEvent = null,
		this.callbackContext = this,
		this.onDownCallback = null,
		this.onPressCallback = null,
		this.onUpCallback = null,
		this._keys = [],
		this._capture = [],
		this._onKeyDown = null,
		this._onKeyPress = null,
		this._onKeyUp = null,
		this._i = 0,
		this._k = 0
	},
	b.Keyboard.prototype = {
		addCallbacks: function(a, b, c, d) {
			this.callbackContext = a,
			"undefined" != typeof b && (this.onDownCallback = b),
			"undefined" != typeof c && (this.onUpCallback = c),
			"undefined" != typeof d && (this.onPressCallback = d)
		},
		addKey: function(a) {
			return this._keys[a] || (this._keys[a] = new b.Key(this.game, a), this.addKeyCapture(a)),
			this._keys[a]
		},
		removeKey: function(a) {
			this._keys[a] && (this._keys[a] = null, this.removeKeyCapture(a))
		},
		createCursorKeys: function() {
			return {
				up: this.addKey(b.Keyboard.UP),
				down: this.addKey(b.Keyboard.DOWN),
				left: this.addKey(b.Keyboard.LEFT),
				right: this.addKey(b.Keyboard.RIGHT)
			}
		},
		start: function() {
			if (!this.game.device.cocoonJS && null === this._onKeyDown) {
				var a = this;
				this._onKeyDown = function(b) {
					return a.processKeyDown(b)
				},
				this._onKeyUp = function(b) {
					return a.processKeyUp(b)
				},
				this._onKeyPress = function(b) {
					return a.processKeyPress(b)
				},
				window.addEventListener("keydown", this._onKeyDown, !1),
				window.addEventListener("keyup", this._onKeyUp, !1),
				window.addEventListener("keypress", this._onKeyPress, !1)
			}
		},
		stop: function() {
			window.removeEventListener("keydown", this._onKeyDown),
			window.removeEventListener("keyup", this._onKeyUp),
			window.removeEventListener("keypress", this._onKeyPress),
			this._onKeyDown = null,
			this._onKeyUp = null,
			this._onKeyPress = null
		},
		destroy: function() {
			this.stop(),
			this.clearCaptures(),
			this._keys.length = 0,
			this._i = 0
		},
		addKeyCapture: function(a) {
			if ("object" == typeof a) for (var b in a) this._capture[a[b]] = !0;
			else this._capture[a] = !0
		},
		removeKeyCapture: function(a) {
			delete this._capture[a]
		},
		clearCaptures: function() {
			this._capture = {}
		},
		update: function() {
			for (this._i = this._keys.length; this._i--;) this._keys[this._i] && this._keys[this._i].update()
		},
		processKeyDown: function(a) {
			this.event = a,
			this.game.input.disabled || this.disabled || (this._capture[a.keyCode] && a.preventDefault(), this._keys[a.keyCode] || (this._keys[a.keyCode] = new b.Key(this.game, a.keyCode)), this._keys[a.keyCode].processKeyDown(a), this._k = a.keyCode, this.onDownCallback && this.onDownCallback.call(this.callbackContext, a))
		},
		processKeyPress: function(a) {
			this.pressEvent = a,
			this.game.input.disabled || this.disabled || this.onPressCallback && this.onPressCallback.call(this.callbackContext, String.fromCharCode(a.charCode), a)
		},
		processKeyUp: function(a) {
			this.event = a,
			this.game.input.disabled || this.disabled || (this._capture[a.keyCode] && a.preventDefault(), this._keys[a.keyCode] || (this._keys[a.keyCode] = new b.Key(this.game, a.keyCode)), this._keys[a.keyCode].processKeyUp(a), this.onUpCallback && this.onUpCallback.call(this.callbackContext, a))
		},
		reset: function(a) {
			"undefined" == typeof a && (a = !0),
			this.event = null;
			for (var b = this._keys.length; b--;) this._keys[b] && this._keys[b].reset(a)
		},
		justPressed: function(a, b) {
			return "undefined" == typeof b && (b = 50),
			this._keys[a] ? this._keys[a].justPressed(b) : !1
		},
		justReleased: function(a, b) {
			return "undefined" == typeof b && (b = 50),
			this._keys[a] ? this._keys[a].justReleased(b) : !1
		},
		isDown: function(a) {
			return this._keys[a] ? this._keys[a].isDown: !1
		}
	},
	Object.defineProperty(b.Keyboard.prototype, "lastChar", {
		get: function() {
			return 32 === this.event.charCode ? "": String.fromCharCode(this.pressEvent.charCode)
		}
	}),
	Object.defineProperty(b.Keyboard.prototype, "lastKey", {
		get: function() {
			return this._keys[this._k]
		}
	}),
	b.Keyboard.prototype.constructor = b.Keyboard,
	b.Keyboard.A = "A".charCodeAt(0),
	b.Keyboard.B = "B".charCodeAt(0),
	b.Keyboard.C = "C".charCodeAt(0),
	b.Keyboard.D = "D".charCodeAt(0),
	b.Keyboard.E = "E".charCodeAt(0),
	b.Keyboard.F = "F".charCodeAt(0),
	b.Keyboard.G = "G".charCodeAt(0),
	b.Keyboard.H = "H".charCodeAt(0),
	b.Keyboard.I = "I".charCodeAt(0),
	b.Keyboard.J = "J".charCodeAt(0),
	b.Keyboard.K = "K".charCodeAt(0),
	b.Keyboard.L = "L".charCodeAt(0),
	b.Keyboard.M = "M".charCodeAt(0),
	b.Keyboard.N = "N".charCodeAt(0),
	b.Keyboard.O = "O".charCodeAt(0),
	b.Keyboard.P = "P".charCodeAt(0),
	b.Keyboard.Q = "Q".charCodeAt(0),
	b.Keyboard.R = "R".charCodeAt(0),
	b.Keyboard.S = "S".charCodeAt(0),
	b.Keyboard.T = "T".charCodeAt(0),
	b.Keyboard.U = "U".charCodeAt(0),
	b.Keyboard.V = "V".charCodeAt(0),
	b.Keyboard.W = "W".charCodeAt(0),
	b.Keyboard.X = "X".charCodeAt(0),
	b.Keyboard.Y = "Y".charCodeAt(0),
	b.Keyboard.Z = "Z".charCodeAt(0),
	b.Keyboard.ZERO = "0".charCodeAt(0),
	b.Keyboard.ONE = "1".charCodeAt(0),
	b.Keyboard.TWO = "2".charCodeAt(0),
	b.Keyboard.THREE = "3".charCodeAt(0),
	b.Keyboard.FOUR = "4".charCodeAt(0),
	b.Keyboard.FIVE = "5".charCodeAt(0),
	b.Keyboard.SIX = "6".charCodeAt(0),
	b.Keyboard.SEVEN = "7".charCodeAt(0),
	b.Keyboard.EIGHT = "8".charCodeAt(0),
	b.Keyboard.NINE = "9".charCodeAt(0),
	b.Keyboard.NUMPAD_0 = 96,
	b.Keyboard.NUMPAD_1 = 97,
	b.Keyboard.NUMPAD_2 = 98,
	b.Keyboard.NUMPAD_3 = 99,
	b.Keyboard.NUMPAD_4 = 100,
	b.Keyboard.NUMPAD_5 = 101,
	b.Keyboard.NUMPAD_6 = 102,
	b.Keyboard.NUMPAD_7 = 103,
	b.Keyboard.NUMPAD_8 = 104,
	b.Keyboard.NUMPAD_9 = 105,
	b.Keyboard.NUMPAD_MULTIPLY = 106,
	b.Keyboard.NUMPAD_ADD = 107,
	b.Keyboard.NUMPAD_ENTER = 108,
	b.Keyboard.NUMPAD_SUBTRACT = 109,
	b.Keyboard.NUMPAD_DECIMAL = 110,
	b.Keyboard.NUMPAD_DIVIDE = 111,
	b.Keyboard.F1 = 112,
	b.Keyboard.F2 = 113,
	b.Keyboard.F3 = 114,
	b.Keyboard.F4 = 115,
	b.Keyboard.F5 = 116,
	b.Keyboard.F6 = 117,
	b.Keyboard.F7 = 118,
	b.Keyboard.F8 = 119,
	b.Keyboard.F9 = 120,
	b.Keyboard.F10 = 121,
	b.Keyboard.F11 = 122,
	b.Keyboard.F12 = 123,
	b.Keyboard.F13 = 124,
	b.Keyboard.F14 = 125,
	b.Keyboard.F15 = 126,
	b.Keyboard.COLON = 186,
	b.Keyboard.EQUALS = 187,
	b.Keyboard.UNDERSCORE = 189,
	b.Keyboard.QUESTION_MARK = 191,
	b.Keyboard.TILDE = 192,
	b.Keyboard.OPEN_BRACKET = 219,
	b.Keyboard.BACKWARD_SLASH = 220,
	b.Keyboard.CLOSED_BRACKET = 221,
	b.Keyboard.QUOTES = 222,
	b.Keyboard.BACKSPACE = 8,
	b.Keyboard.TAB = 9,
	b.Keyboard.CLEAR = 12,
	b.Keyboard.ENTER = 13,
	b.Keyboard.SHIFT = 16,
	b.Keyboard.CONTROL = 17,
	b.Keyboard.ALT = 18,
	b.Keyboard.CAPS_LOCK = 20,
	b.Keyboard.ESC = 27,
	b.Keyboard.SPACEBAR = 32,
	b.Keyboard.PAGE_UP = 33,
	b.Keyboard.PAGE_DOWN = 34,
	b.Keyboard.END = 35,
	b.Keyboard.HOME = 36,
	b.Keyboard.LEFT = 37,
	b.Keyboard.UP = 38,
	b.Keyboard.RIGHT = 39,
	b.Keyboard.DOWN = 40,
	b.Keyboard.INSERT = 45,
	b.Keyboard.DELETE = 46,
	b.Keyboard.HELP = 47,
	b.Keyboard.NUM_LOCK = 144,
	b.Mouse = function(a) {
		this.game = a,
		this.callbackContext = this.game,
		this.mouseDownCallback = null,
		this.mouseMoveCallback = null,
		this.mouseUpCallback = null,
		this.mouseOutCallback = null,
		this.mouseOverCallback = null,
		this.mouseWheelCallback = null,
		this.capture = !1,
		this.button = -1,
		this.wheelDelta = 0,
		this.disabled = !1,
		this.locked = !1,
		this.stopOnGameOut = !1,
		this.pointerLock = new b.Signal,
		this.event = null,
		this._onMouseDown = null,
		this._onMouseMove = null,
		this._onMouseUp = null,
		this._onMouseOut = null,
		this._onMouseOver = null,
		this._onMouseWheel = null
	},
	b.Mouse.NO_BUTTON = -1,
	b.Mouse.LEFT_BUTTON = 0,
	b.Mouse.MIDDLE_BUTTON = 1,
	b.Mouse.RIGHT_BUTTON = 2,
	b.Mouse.WHEEL_UP = 1,
	b.Mouse.WHEEL_DOWN = -1,
	b.Mouse.prototype = {
		start: function() {
			if ((!this.game.device.android || this.game.device.chrome !== !1) && null === this._onMouseDown) {
				var a = this;
				this._onMouseDown = function(b) {
					return a.onMouseDown(b)
				},
				this._onMouseMove = function(b) {
					return a.onMouseMove(b)
				},
				this._onMouseUp = function(b) {
					return a.onMouseUp(b)
				},
				this._onMouseOut = function(b) {
					return a.onMouseOut(b)
				},
				this._onMouseOver = function(b) {
					return a.onMouseOver(b)
				},
				this._onMouseWheel = function(b) {
					return a.onMouseWheel(b)
				},
				this.game.canvas.addEventListener("mousedown", this._onMouseDown, !0),
				this.game.canvas.addEventListener("mousemove", this._onMouseMove, !0),
				this.game.canvas.addEventListener("mouseup", this._onMouseUp, !0),
				this.game.canvas.addEventListener("mousewheel", this._onMouseWheel, !0),
				this.game.canvas.addEventListener("DOMMouseScroll", this._onMouseWheel, !0),
				this.game.device.cocoonJS || (this.game.canvas.addEventListener("mouseover", this._onMouseOver, !0), this.game.canvas.addEventListener("mouseout", this._onMouseOut, !0))
			}
		},
		onMouseDown: function(a) {
			this.event = a,
			this.capture && a.preventDefault(),
			this.button = a.button,
			this.mouseDownCallback && this.mouseDownCallback.call(this.callbackContext, a),
			this.game.input.disabled || this.disabled || (a["identifier"] = 0, this.game.input.mousePointer.start(a))
		},
		onMouseMove: function(a) {
			this.event = a,
			this.capture && a.preventDefault(),
			this.mouseMoveCallback && this.mouseMoveCallback.call(this.callbackContext, a),
			this.game.input.disabled || this.disabled || (a["identifier"] = 0, this.game.input.mousePointer.move(a))
		},
		onMouseUp: function(a) {
			this.event = a,
			this.capture && a.preventDefault(),
			this.button = b.Mouse.NO_BUTTON,
			this.mouseUpCallback && this.mouseUpCallback.call(this.callbackContext, a),
			this.game.input.disabled || this.disabled || (a["identifier"] = 0, this.game.input.mousePointer.stop(a))
		},
		onMouseOut: function(a) {
			this.event = a,
			this.capture && a.preventDefault(),
			this.mouseOutCallback && this.mouseOutCallback.call(this.callbackContext, a),
			this.game.input.disabled || this.disabled || (this.game.input.mousePointer.withinGame = !1, this.stopOnGameOut && (a["identifier"] = 0, this.game.input.mousePointer.stop(a)))
		},
		onMouseWheel: function(a) {
			this.event = a,
			this.capture && a.preventDefault(),
			this.wheelDelta = Math.max( - 1, Math.min(1, a.wheelDelta || -a.detail)),
			this.mouseWheelCallback && this.mouseWheelCallback.call(this.callbackContext, a)
		},
		onMouseOver: function(a) {
			this.event = a,
			this.capture && a.preventDefault(),
			this.mouseOverCallback && this.mouseOverCallback.call(this.callbackContext, a),
			this.game.input.disabled || this.disabled || (this.game.input.mousePointer.withinGame = !0)
		},
		requestPointerLock: function() {
			var a, b;
			this.game.device.pointerLock && (a = this.game.canvas, a.requestPointerLock = a.requestPointerLock || a.mozRequestPointerLock || a.webkitRequestPointerLock, a.requestPointerLock(), b = this, this._pointerLockChange = function(a) {
				return b.pointerLockChange(a)
			},
			document.addEventListener("pointerlockchange", this._pointerLockChange, !0), document.addEventListener("mozpointerlockchange", this._pointerLockChange, !0), document.addEventListener("webkitpointerlockchange", this._pointerLockChange, !0))
		},
		pointerLockChange: function(a) {
			var b = this.game.canvas;
			document.pointerLockElement === b || document.mozPointerLockElement === b || document.webkitPointerLockElement === b ? (this.locked = !0, this.pointerLock.dispatch(!0, a)) : (this.locked = !1, this.pointerLock.dispatch(!1, a))
		},
		releasePointerLock: function() {
			document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock,
			document.exitPointerLock(),
			document.removeEventListener("pointerlockchange", this._pointerLockChange, !0),
			document.removeEventListener("mozpointerlockchange", this._pointerLockChange, !0),
			document.removeEventListener("webkitpointerlockchange", this._pointerLockChange, !0)
		},
		stop: function() {
			this.game.canvas.removeEventListener("mousedown", this._onMouseDown, !0),
			this.game.canvas.removeEventListener("mousemove", this._onMouseMove, !0),
			this.game.canvas.removeEventListener("mouseup", this._onMouseUp, !0),
			this.game.canvas.removeEventListener("mouseover", this._onMouseOver, !0),
			this.game.canvas.removeEventListener("mouseout", this._onMouseOut, !0),
			this.game.canvas.removeEventListener("mousewheel", this._onMouseWheel, !0),
			this.game.canvas.removeEventListener("DOMMouseScroll", this._onMouseWheel, !0)
		}
	},
	b.Mouse.prototype.constructor = b.Mouse,
	b.MSPointer = function(a) {
		this.game = a,
		this.callbackContext = this.game,
		this.disabled = !1,
		this._onMSPointerDown = null,
		this._onMSPointerMove = null,
		this._onMSPointerUp = null
	},
	b.MSPointer.prototype = {
		start: function() {
			if (null === this._onMSPointerDown) {
				var a = this;
				this.game.device.mspointer === !0 && (this._onMSPointerDown = function(b) {
					return a.onPointerDown(b)
				},
				this._onMSPointerMove = function(b) {
					return a.onPointerMove(b)
				},
				this._onMSPointerUp = function(b) {
					return a.onPointerUp(b)
				},
				this.game.renderer.view.addEventListener("MSPointerDown", this._onMSPointerDown, !1), this.game.renderer.view.addEventListener("MSPointerMove", this._onMSPointerMove, !1), this.game.renderer.view.addEventListener("MSPointerUp", this._onMSPointerUp, !1), this.game.renderer.view.addEventListener("pointerDown", this._onMSPointerDown, !1), this.game.renderer.view.addEventListener("pointerMove", this._onMSPointerMove, !1), this.game.renderer.view.addEventListener("pointerUp", this._onMSPointerUp, !1), this.game.renderer.view.style["-ms-content-zooming"] = "none", this.game.renderer.view.style["-ms-touch-action"] = "none")
			}
		},
		onPointerDown: function(a) {
			this.game.input.disabled || this.disabled || (a.preventDefault(), a.identifier = a.pointerId, this.game.input.startPointer(a))
		},
		onPointerMove: function(a) {
			this.game.input.disabled || this.disabled || (a.preventDefault(), a.identifier = a.pointerId, this.game.input.updatePointer(a))
		},
		onPointerUp: function(a) {
			this.game.input.disabled || this.disabled || (a.preventDefault(), a.identifier = a.pointerId, this.game.input.stopPointer(a))
		},
		stop: function() {
			this.game.canvas.removeEventListener("MSPointerDown", this._onMSPointerDown),
			this.game.canvas.removeEventListener("MSPointerMove", this._onMSPointerMove),
			this.game.canvas.removeEventListener("MSPointerUp", this._onMSPointerUp),
			this.game.canvas.removeEventListener("pointerDown", this._onMSPointerDown),
			this.game.canvas.removeEventListener("pointerMove", this._onMSPointerMove),
			this.game.canvas.removeEventListener("pointerUp", this._onMSPointerUp)
		}
	},
	b.MSPointer.prototype.constructor = b.MSPointer,
	b.Pointer = function(a, c) {
		this.game = a,
		this.id = c,
		this.type = b.POINTER,
		this.exists = !0,
		this.identifier = 0,
		this.pointerId = null,
		this.target = null,
		this.button = null,
		this._holdSent = !1,
		this._history = [],
		this._nextDrop = 0,
		this._stateReset = !1,
		this.withinGame = !1,
		this.clientX = -1,
		this.clientY = -1,
		this.pageX = -1,
		this.pageY = -1,
		this.screenX = -1,
		this.screenY = -1,
		this.rawMovementX = 0,
		this.rawMovementY = 0,
		this.movementX = 0,
		this.movementY = 0,
		this.x = -1,
		this.y = -1,
		this.isMouse = !1,
		this.isDown = !1,
		this.isUp = !0,
		this.timeDown = 0,
		this.timeUp = 0,
		this.previousTapTime = 0,
		this.totalTouches = 0,
		this.msSinceLastClick = Number.MAX_VALUE,
		this.targetObject = null,
		this.active = !1,
		this.position = new b.Point,
		this.positionDown = new b.Point,
		this.positionUp = new b.Point,
		this.circle = new b.Circle(0, 0, 44),
		0 === c && (this.isMouse = !0)
	},
	b.Pointer.prototype = {
		start: function(a) {
			return a["pointerId"] && (this.pointerId = a.pointerId),
			this.identifier = a.identifier,
			this.target = a.target,
			"undefined" != typeof a.button && (this.button = a.button),
			this._history = [],
			this.active = !0,
			this.withinGame = !0,
			this.isDown = !0,
			this.isUp = !1,
			this.msSinceLastClick = this.game.time.now - this.timeDown,
			this.timeDown = this.game.time.now,
			this._holdSent = !1,
			this.move(a, !0),
			this.positionDown.setTo(this.x, this.y),
			(this.game.input.multiInputOverride === b.Input.MOUSE_OVERRIDES_TOUCH || this.game.input.multiInputOverride === b.Input.MOUSE_TOUCH_COMBINE || this.game.input.multiInputOverride === b.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers) && (this.game.input.x = this.x, this.game.input.y = this.y, this.game.input.position.setTo(this.x, this.y), this.game.input.onDown.dispatch(this, a), this.game.input.resetSpeed(this.x, this.y)),
			this._stateReset = !1,
			this.totalTouches++,
			this.isMouse || this.game.input.currentPointers++,
			null !== this.targetObject && this.targetObject._touchedHandler(this),
			this
		},
		update: function() {
			this.active && (this._holdSent === !1 && this.duration >= this.game.input.holdRate && ((this.game.input.multiInputOverride == b.Input.MOUSE_OVERRIDES_TOUCH || this.game.input.multiInputOverride == b.Input.MOUSE_TOUCH_COMBINE || this.game.input.multiInputOverride == b.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers) && this.game.input.onHold.dispatch(this), this._holdSent = !0), this.game.input.recordPointerHistory && this.game.time.now >= this._nextDrop && (this._nextDrop = this.game.time.now + this.game.input.recordRate, this._history.push({
				x: this.position.x,
				y: this.position.y
			}), this._history.length > this.game.input.recordLimit && this._history.shift()))
		},
		move: function(a, c) {
			if (!this.game.input.pollLocked) {
				if ("undefined" == typeof c && (c = !1), "undefined" != typeof a.button && (this.button = a.button), this.clientX = a.clientX, this.clientY = a.clientY, this.pageX = a.pageX, this.pageY = a.pageY, this.screenX = a.screenX, this.screenY = a.screenY, this.isMouse && this.game.input.mouse.locked && !c && (this.rawMovementX = a.movementX || a.mozMovementX || a.webkitMovementX || 0, this.rawMovementY = a.movementY || a.mozMovementY || a.webkitMovementY || 0, this.movementX += this.rawMovementX, this.movementY += this.rawMovementY), this.x = (this.pageX - this.game.stage.offset.x) * this.game.input.scale.x, this.y = (this.pageY - this.game.stage.offset.y) * this.game.input.scale.y, this.position.setTo(this.x, this.y), this.circle.x = this.x, this.circle.y = this.y, (this.game.input.multiInputOverride === b.Input.MOUSE_OVERRIDES_TOUCH || this.game.input.multiInputOverride === b.Input.MOUSE_TOUCH_COMBINE || this.game.input.multiInputOverride === b.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers) && (this.game.input.activePointer = this, this.game.input.x = this.x, this.game.input.y = this.y, this.game.input.position.setTo(this.game.input.x, this.game.input.y), this.game.input.circle.x = this.game.input.x, this.game.input.circle.y = this.game.input.y), this.withinGame = this.game.scale.bounds.contains(this.pageX, this.pageY), this.game.paused) return this;
				this.game.input.moveCallback && this.game.input.moveCallback.call(this.game.input.moveCallbackContext, this, this.x, this.y);
				for (var d = this.game.input.moveCallbacks.length; d--;) this.game.input.moveCallbacks[d].callback.call(this.game.input.moveCallbacks[d].context, this, this.x, this.y);
				return null !== this.targetObject && this.targetObject.isDragged === !0 ? (this.targetObject.update(this) === !1 && (this.targetObject = null), this) : (this.game.input.interactiveItems.total > 0 && this.processInteractiveObjects(c), this)
			}
		},
		processInteractiveObjects: function(a) {
			var b;
			this.game.input.interactiveItems.setAll("checked", !1),
			this._highestRenderOrderID = Number.MAX_SAFE_INTEGER,
			this._highestRenderObject = null,
			this._highestInputPriorityID = -1,
			b = this.game.input.interactiveItems.first;
			do b && b.validForInput(this._highestInputPriorityID, this._highestRenderOrderID, !1) && (b.checked = !0, (a && b.checkPointerDown(this, !0) || !a && b.checkPointerOver(this, !0)) && (this._highestRenderOrderID = b.sprite._cache[3], this._highestInputPriorityID = b.priorityID, this._highestRenderObject = b)),
			b = this.game.input.interactiveItems.next;
			while (null !== b);
			b = this.game.input.interactiveItems.first;
			do b && !b.checked && b.validForInput(this._highestInputPriorityID, this._highestRenderOrderID, !0) && (a && b.checkPointerDown(this, !1) || !a && b.checkPointerOver(this, !1)) && (this._highestRenderOrderID = b.sprite._cache[3], this._highestInputPriorityID = b.priorityID, this._highestRenderObject = b),
			b = this.game.input.interactiveItems.next;
			while (null !== b);
			null === this._highestRenderObject ? this.targetObject && (this.targetObject._pointerOutHandler(this), this.targetObject = null) : null === this.targetObject ? (this.targetObject = this._highestRenderObject, this._highestRenderObject._pointerOverHandler(this)) : this.targetObject === this._highestRenderObject ? this._highestRenderObject.update(this) === !1 && (this.targetObject = null) : (this.targetObject._pointerOutHandler(this), this.targetObject = this._highestRenderObject, this.targetObject._pointerOverHandler(this))
		},
		leave: function(a) {
			this.withinGame = !1,
			this.move(a, !1)
		},
		stop: function(a) {
			return this._stateReset ? (a.preventDefault(), void 0) : (this.timeUp = this.game.time.now, (this.game.input.multiInputOverride === b.Input.MOUSE_OVERRIDES_TOUCH || this.game.input.multiInputOverride === b.Input.MOUSE_TOUCH_COMBINE || this.game.input.multiInputOverride === b.Input.TOUCH_OVERRIDES_MOUSE && 0 === this.game.input.currentPointers) && (this.game.input.onUp.dispatch(this, a), this.duration >= 0 && this.duration <= this.game.input.tapRate && (this.timeUp - this.previousTapTime < this.game.input.doubleTapRate ? this.game.input.onTap.dispatch(this, !0) : this.game.input.onTap.dispatch(this, !1), this.previousTapTime = this.timeUp)), this.id > 0 && (this.active = !1), this.withinGame = !1, this.isDown = !1, this.isUp = !0, this.pointerId = null, this.identifier = null, this.positionUp.setTo(this.x, this.y), this.isMouse === !1 && this.game.input.currentPointers--, this.game.input.interactiveItems.callAll("_releasedHandler", this), this.targetObject = null, this)
		},
		justPressed: function(a) {
			return a = a || this.game.input.justPressedRate,
			this.isDown === !0 && this.timeDown + a > this.game.time.now
		},
		justReleased: function(a) {
			return a = a || this.game.input.justReleasedRate,
			this.isUp === !0 && this.timeUp + a > this.game.time.now
		},
		reset: function() {
			this.isMouse === !1 && (this.active = !1),
			this.pointerId = null,
			this.identifier = null,
			this.isDown = !1,
			this.isUp = !0,
			this.totalTouches = 0,
			this._holdSent = !1,
			this._history.length = 0,
			this._stateReset = !0,
			this.targetObject && this.targetObject._releasedHandler(this),
			this.targetObject = null
		},
		resetMovement: function() {
			this.movementX = 0,
			this.movementY = 0
		}
	},
	b.Pointer.prototype.constructor = b.Pointer,
	Object.defineProperty(b.Pointer.prototype, "duration", {
		get: function() {
			return this.isUp ? -1 : this.game.time.now - this.timeDown
		}
	}),
	Object.defineProperty(b.Pointer.prototype, "worldX", {
		get: function() {
			return this.game.world.camera.x + this.x
		}
	}),
	Object.defineProperty(b.Pointer.prototype, "worldY", {
		get: function() {
			return this.game.world.camera.y + this.y
		}
	}),
	b.Touch = function(a) {
		this.game = a,
		this.disabled = !1,
		this.callbackContext = this.game,
		this.touchStartCallback = null,
		this.touchMoveCallback = null,
		this.touchEndCallback = null,
		this.touchEnterCallback = null,
		this.touchLeaveCallback = null,
		this.touchCancelCallback = null,
		this.preventDefault = !0,
		this.event = null,
		this._onTouchStart = null,
		this._onTouchMove = null,
		this._onTouchEnd = null,
		this._onTouchEnter = null,
		this._onTouchLeave = null,
		this._onTouchCancel = null,
		this._onTouchMove = null
	},
	b.Touch.prototype = {
		start: function() {
			if (null === this._onTouchStart) {
				var a = this;
				this.game.device.touch && (this._onTouchStart = function(b) {
					return a.onTouchStart(b)
				},
				this._onTouchMove = function(b) {
					return a.onTouchMove(b)
				},
				this._onTouchEnd = function(b) {
					return a.onTouchEnd(b)
				},
				this._onTouchEnter = function(b) {
					return a.onTouchEnter(b)
				},
				this._onTouchLeave = function(b) {
					return a.onTouchLeave(b)
				},
				this._onTouchCancel = function(b) {
					return a.onTouchCancel(b)
				},
				this.game.canvas.addEventListener("touchstart", this._onTouchStart, !1), this.game.canvas.addEventListener("touchmove", this._onTouchMove, !1), this.game.canvas.addEventListener("touchend", this._onTouchEnd, !1), this.game.canvas.addEventListener("touchcancel", this._onTouchCancel, !1), this.game.device.cocoonJS || (this.game.canvas.addEventListener("touchenter", this._onTouchEnter, !1), this.game.canvas.addEventListener("touchleave", this._onTouchLeave, !1)))
			}
		},
		consumeDocumentTouches: function() {
			this._documentTouchMove = function(a) {
				a.preventDefault()
			},
			document.addEventListener("touchmove", this._documentTouchMove, !1)
		},
		onTouchStart: function(a) {
			if (this.event = a, this.touchStartCallback && this.touchStartCallback.call(this.callbackContext, a), !this.game.input.disabled && !this.disabled) {
				this.preventDefault && a.preventDefault();
				for (var b = 0; b < a.changedTouches.length; b++) this.game.input.startPointer(a.changedTouches[b])
			}
		},
		onTouchCancel: function(a) {
			if (this.event = a, this.touchCancelCallback && this.touchCancelCallback.call(this.callbackContext, a), !this.game.input.disabled && !this.disabled) {
				this.preventDefault && a.preventDefault();
				for (var b = 0; b < a.changedTouches.length; b++) this.game.input.stopPointer(a.changedTouches[b])
			}
		},
		onTouchEnter: function(a) {
			this.event = a,
			this.touchEnterCallback && this.touchEnterCallback.call(this.callbackContext, a),
			this.game.input.disabled || this.disabled || this.preventDefault && a.preventDefault()
		},
		onTouchLeave: function(a) {
			this.event = a,
			this.touchLeaveCallback && this.touchLeaveCallback.call(this.callbackContext, a),
			this.preventDefault && a.preventDefault()
		},
		onTouchMove: function(a) {
			this.event = a,
			this.touchMoveCallback && this.touchMoveCallback.call(this.callbackContext, a),
			this.preventDefault && a.preventDefault();
			for (var b = 0; b < a.changedTouches.length; b++) this.game.input.updatePointer(a.changedTouches[b])
		},
		onTouchEnd: function(a) {
			this.event = a,
			this.touchEndCallback && this.touchEndCallback.call(this.callbackContext, a),
			this.preventDefault && a.preventDefault();
			for (var b = 0; b < a.changedTouches.length; b++) this.game.input.stopPointer(a.changedTouches[b])
		},
		stop: function() {
			this.game.device.touch && (this.game.canvas.removeEventListener("touchstart", this._onTouchStart), this.game.canvas.removeEventListener("touchmove", this._onTouchMove), this.game.canvas.removeEventListener("touchend", this._onTouchEnd), this.game.canvas.removeEventListener("touchenter", this._onTouchEnter), this.game.canvas.removeEventListener("touchleave", this._onTouchLeave), this.game.canvas.removeEventListener("touchcancel", this._onTouchCancel))
		}
	},
	b.Touch.prototype.constructor = b.Touch,
	b.Gamepad = function(a) {
		this.game = a,
		this._gamepads = [new b.SinglePad(a, this), new b.SinglePad(a, this), new b.SinglePad(a, this), new b.SinglePad(a, this)],
		this._gamepadIndexMap = {},
		this._rawPads = [],
		this._active = !1,
		this.disabled = !1,
		this._gamepadSupportAvailable = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads || -1 != navigator.userAgent.indexOf("Firefox/") || !!navigator.getGamepads,
		this._prevRawGamepadTypes = [],
		this._prevTimestamps = [],
		this.callbackContext = this,
		this.onConnectCallback = null,
		this.onDisconnectCallback = null,
		this.onDownCallback = null,
		this.onUpCallback = null,
		this.onAxisCallback = null,
		this.onFloatCallback = null,
		this._ongamepadconnected = null,
		this._gamepaddisconnected = null
	},
	b.Gamepad.prototype = {
		addCallbacks: function(a, b) {
			"undefined" != typeof b && (this.onConnectCallback = "function" == typeof b.onConnect ? b.onConnect: this.onConnectCallback, this.onDisconnectCallback = "function" == typeof b.onDisconnect ? b.onDisconnect: this.onDisconnectCallback, this.onDownCallback = "function" == typeof b.onDown ? b.onDown: this.onDownCallback, this.onUpCallback = "function" == typeof b.onUp ? b.onUp: this.onUpCallback, this.onAxisCallback = "function" == typeof b.onAxis ? b.onAxis: this.onAxisCallback, this.onFloatCallback = "function" == typeof b.onFloat ? b.onFloat: this.onFloatCallback)
		},
		start: function() {
			if (!this._active) {
				this._active = !0;
				var a = this;
				this._ongamepadconnected = function(b) {
					var c = b.gamepad;
					a._rawPads.push(c),
					a._gamepads[c.index].connect(c)
				},
				window.addEventListener("gamepadconnected", this._ongamepadconnected, !1),
				this._ongamepaddisconnected = function(b) {
					var d, c = b.gamepad;
					for (d in a._rawPads) a._rawPads[d].index === c.index && a._rawPads.splice(d, 1);
					a._gamepads[c.index].disconnect()
				},
				window.addEventListener("gamepaddisconnected", this._ongamepaddisconnected, !1)
			}
		},
		update: function() {
			this._pollGamepads(),
			this.pad1.pollStatus(),
			this.pad2.pollStatus(),
			this.pad3.pollStatus(),
			this.pad4.pollStatus()
		},
		_pollGamepads: function() {
			var a, b, c, d, e, f, g, h, i, j;
			if (navigator["getGamepads"] ? a = navigator.getGamepads() : navigator["webkitGetGamepads"] ? a = navigator.webkitGetGamepads() : navigator["webkitGamepads"] && (a = navigator.webkitGamepads()), a) {
				for (this._rawPads = [], b = !1, c = 0; c < a.length && (typeof a[c] !== this._prevRawGamepadTypes[c] && (b = !0, this._prevRawGamepadTypes[c] = typeof a[c]), a[c] && this._rawPads.push(a[c]), 3 !== c); c++);
				if (b) {
					for (d = {
						rawIndices: {},
						padIndices: {}
					},
					f = 0; f < this._gamepads.length; f++) if (e = this._gamepads[f], e.connected) for (g = 0; g < this._rawPads.length; g++) this._rawPads[g].index === e.index && (d.rawIndices[e.index] = !0, d.padIndices[f] = !0);
					for (h = 0; h < this._gamepads.length; h++) if (e = this._gamepads[h], !d.padIndices[h]) for (this._rawPads.length < 1 && e.disconnect(), i = 0; i < this._rawPads.length && !d.padIndices[h]; i++) if (j = this._rawPads[i]) {
						if (d.rawIndices[j.index]) {
							e.disconnect();
							continue
						}
						e.connect(j),
						d.rawIndices[j.index] = !0,
						d.padIndices[h] = !0
					} else e.disconnect()
				}
			}
		},
		setDeadZones: function(a) {
			for (var b = 0; b < this._gamepads.length; b++) this._gamepads[b].deadZone = a
		},
		stop: function() {
			this._active = !1,
			window.removeEventListener("gamepadconnected", this._ongamepadconnected),
			window.removeEventListener("gamepaddisconnected", this._ongamepaddisconnected)
		},
		reset: function() {
			this.update();
			for (var a = 0; a < this._gamepads.length; a++) this._gamepads[a].reset()
		},
		justPressed: function(a, b) {
			for (var c = 0; c < this._gamepads.length; c++) if (this._gamepads[c].justPressed(a, b) === !0) return ! 0;
			return ! 1
		},
		justReleased: function(a, b) {
			for (var c = 0; c < this._gamepads.length; c++) if (this._gamepads[c].justReleased(a, b) === !0) return ! 0;
			return ! 1
		},
		isDown: function(a) {
			for (var b = 0; b < this._gamepads.length; b++) if (this._gamepads[b].isDown(a) === !0) return ! 0;
			return ! 1
		}
	},
	b.Gamepad.prototype.constructor = b.Gamepad,
	Object.defineProperty(b.Gamepad.prototype, "active", {
		get: function() {
			return this._active
		}
	}),
	Object.defineProperty(b.Gamepad.prototype, "supported", {
		get: function() {
			return this._gamepadSupportAvailable
		}
	}),
	Object.defineProperty(b.Gamepad.prototype, "padsConnected", {
		get: function() {
			return this._rawPads.length
		}
	}),
	Object.defineProperty(b.Gamepad.prototype, "pad1", {
		get: function() {
			return this._gamepads[0]
		}
	}),
	Object.defineProperty(b.Gamepad.prototype, "pad2", {
		get: function() {
			return this._gamepads[1]
		}
	}),
	Object.defineProperty(b.Gamepad.prototype, "pad3", {
		get: function() {
			return this._gamepads[2]
		}
	}),
	Object.defineProperty(b.Gamepad.prototype, "pad4", {
		get: function() {
			return this._gamepads[3]
		}
	}),
	b.Gamepad.BUTTON_0 = 0,
	b.Gamepad.BUTTON_1 = 1,
	b.Gamepad.BUTTON_2 = 2,
	b.Gamepad.BUTTON_3 = 3,
	b.Gamepad.BUTTON_4 = 4,
	b.Gamepad.BUTTON_5 = 5,
	b.Gamepad.BUTTON_6 = 6,
	b.Gamepad.BUTTON_7 = 7,
	b.Gamepad.BUTTON_8 = 8,
	b.Gamepad.BUTTON_9 = 9,
	b.Gamepad.BUTTON_10 = 10,
	b.Gamepad.BUTTON_11 = 11,
	b.Gamepad.BUTTON_12 = 12,
	b.Gamepad.BUTTON_13 = 13,
	b.Gamepad.BUTTON_14 = 14,
	b.Gamepad.BUTTON_15 = 15,
	b.Gamepad.AXIS_0 = 0,
	b.Gamepad.AXIS_1 = 1,
	b.Gamepad.AXIS_2 = 2,
	b.Gamepad.AXIS_3 = 3,
	b.Gamepad.AXIS_4 = 4,
	b.Gamepad.AXIS_5 = 5,
	b.Gamepad.AXIS_6 = 6,
	b.Gamepad.AXIS_7 = 7,
	b.Gamepad.AXIS_8 = 8,
	b.Gamepad.AXIS_9 = 9,
	b.Gamepad.XBOX360_A = 0,
	b.Gamepad.XBOX360_B = 1,
	b.Gamepad.XBOX360_X = 2,
	b.Gamepad.XBOX360_Y = 3,
	b.Gamepad.XBOX360_LEFT_BUMPER = 4,
	b.Gamepad.XBOX360_RIGHT_BUMPER = 5,
	b.Gamepad.XBOX360_LEFT_TRIGGER = 6,
	b.Gamepad.XBOX360_RIGHT_TRIGGER = 7,
	b.Gamepad.XBOX360_BACK = 8,
	b.Gamepad.XBOX360_START = 9,
	b.Gamepad.XBOX360_STICK_LEFT_BUTTON = 10,
	b.Gamepad.XBOX360_STICK_RIGHT_BUTTON = 11,
	b.Gamepad.XBOX360_DPAD_LEFT = 14,
	b.Gamepad.XBOX360_DPAD_RIGHT = 15,
	b.Gamepad.XBOX360_DPAD_UP = 12,
	b.Gamepad.XBOX360_DPAD_DOWN = 13,
	b.Gamepad.XBOX360_STICK_LEFT_X = 0,
	b.Gamepad.XBOX360_STICK_LEFT_Y = 1,
	b.Gamepad.XBOX360_STICK_RIGHT_X = 2,
	b.Gamepad.XBOX360_STICK_RIGHT_Y = 3,
	b.Gamepad.PS3XC_X = 0,
	b.Gamepad.PS3XC_CIRCLE = 1,
	b.Gamepad.PS3XC_SQUARE = 2,
	b.Gamepad.PS3XC_TRIANGLE = 3,
	b.Gamepad.PS3XC_L1 = 4,
	b.Gamepad.PS3XC_R1 = 5,
	b.Gamepad.PS3XC_L2 = 6,
	b.Gamepad.PS3XC_R2 = 7,
	b.Gamepad.PS3XC_SELECT = 8,
	b.Gamepad.PS3XC_START = 9,
	b.Gamepad.PS3XC_STICK_LEFT_BUTTON = 10,
	b.Gamepad.PS3XC_STICK_RIGHT_BUTTON = 11,
	b.Gamepad.PS3XC_DPAD_UP = 12,
	b.Gamepad.PS3XC_DPAD_DOWN = 13,
	b.Gamepad.PS3XC_DPAD_LEFT = 14,
	b.Gamepad.PS3XC_DPAD_RIGHT = 15,
	b.Gamepad.PS3XC_STICK_LEFT_X = 0,
	b.Gamepad.PS3XC_STICK_LEFT_Y = 1,
	b.Gamepad.PS3XC_STICK_RIGHT_X = 2,
	b.Gamepad.PS3XC_STICK_RIGHT_Y = 3,
	b.SinglePad = function(a, b) {
		this.game = a,
		this.index = null,
		this.connected = !1,
		this.callbackContext = this,
		this.onConnectCallback = null,
		this.onDisconnectCallback = null,
		this.onDownCallback = null,
		this.onUpCallback = null,
		this.onAxisCallback = null,
		this.onFloatCallback = null,
		this.deadZone = .26,
		this._padParent = b,
		this._rawPad = null,
		this._prevTimestamp = null,
		this._buttons = [],
		this._buttonsLen = 0,
		this._axes = [],
		this._axesLen = 0
	},
	b.SinglePad.prototype = {
		addCallbacks: function(a, b) {
			"undefined" != typeof b && (this.onConnectCallback = "function" == typeof b.onConnect ? b.onConnect: this.onConnectCallback, this.onDisconnectCallback = "function" == typeof b.onDisconnect ? b.onDisconnect: this.onDisconnectCallback, this.onDownCallback = "function" == typeof b.onDown ? b.onDown: this.onDownCallback, this.onUpCallback = "function" == typeof b.onUp ? b.onUp: this.onUpCallback, this.onAxisCallback = "function" == typeof b.onAxis ? b.onAxis: this.onAxisCallback, this.onFloatCallback = "function" == typeof b.onFloat ? b.onFloat: this.onFloatCallback)
		},
		addButton: function(a) {
			return this.getButton(a)
		},
		getButton: function(a) {
			return this._buttons[a] ? this._buttons[a] : null
		},
		pollStatus: function() {
			var a, b, c, d;
			if (! (!this.connected || this.game.input.disabled || this.game.input.gamepad.disabled || this._rawPad.timestamp && this._rawPad.timestamp === this._prevTimestamp)) {
				for (a = 0; a < this._buttonsLen; a++) b = isNaN(this._rawPad.buttons[a]) ? this._rawPad.buttons[a].value: this._rawPad.buttons[a],
				b !== this._buttons[a].value && (1 === b ? this.processButtonDown(a, b) : 0 === b ? this.processButtonUp(a, b) : this.processButtonFloat(a, b));
				for (c = 0; c < this._axesLen; c++) d = this._rawPad.axes[c],
				d > 0 && d > this.deadZone || 0 > d && d < -this.deadZone ? this.processAxisChange({
					axis: c,
					value: d
				}) : this.processAxisChange({
					axis: c,
					value: 0
				});
				this._prevTimestamp = this._rawPad.timestamp
			}
		},
		connect: function(a) {
			var d, c = !this.connected;
			this.connected = !0,
			this.index = a.index,
			this._rawPad = a,
			this._buttons = [],
			this._buttonsLen = a.buttons.length,
			this._axes = a.axes,
			this._axesLen = a.axes.length;
			for (d in a.buttons) d = parseInt(d, 10),
			this._buttons[d] = new b.GamepadButton(this, d);
			c && this._padParent.onConnectCallback && this._padParent.onConnectCallback.call(this._padParent.callbackContext, this.index),
			c && this.onConnectCallback && this.onConnectCallback.call(this.callbackContext)
		},
		disconnect: function() {
			var c, a = this.connected,
			b = this.index;
			for (this.connected = !1, this.index = null, this._rawPad = void 0, c = 0; c < this._buttonsLen; c++) this._buttons[c].destroy();
			this._buttons = [],
			this._buttonsLen = 0,
			this._axes = [],
			this._axesLen = 0,
			a && this._padParent.onDisconnectCallback && this._padParent.onDisconnectCallback.call(this._padParent.callbackContext, b),
			a && this.onDisconnectCallback && this.onDisconnectCallback.call(this.callbackContext)
		},
		processAxisChange: function(a) {
			this._axes[a.axis] !== a.value && (this._axes[a.axis] = a.value, this._padParent.onAxisCallback && this._padParent.onAxisCallback.call(this._padParent.callbackContext, a, this.index), this.onAxisCallback && this.onAxisCallback.call(this.callbackContext, a))
		},
		processButtonDown: function(a, b) {
			this._padParent.onDownCallback && this._padParent.onDownCallback.call(this._padParent.callbackContext, a, b, this.index),
			this.onDownCallback && this.onDownCallback.call(this.callbackContext, a, b),
			this._buttons[a] && this._buttons[a].processButtonDown(b)
		},
		processButtonUp: function(a, b) {
			this._padParent.onUpCallback && this._padParent.onUpCallback.call(this._padParent.callbackContext, a, b, this.index),
			this.onUpCallback && this.onUpCallback.call(this.callbackContext, a, b),
			this._buttons[a] && this._buttons[a].processButtonUp(b)
		},
		processButtonFloat: function(a, b) {
			this._padParent.onFloatCallback && this._padParent.onFloatCallback.call(this._padParent.callbackContext, a, b, this.index),
			this.onFloatCallback && this.onFloatCallback.call(this.callbackContext, a, b),
			this._buttons[a] && this._buttons[a].processButtonFloat(b)
		},
		axis: function(a) {
			return this._axes[a] ? this._axes[a] : !1
		},
		isDown: function(a) {
			return this._buttons[a] ? this._buttons[a].isDown: !1
		},
		isUp: function(a) {
			return this._buttons[a] ? this._buttons[a].isUp: !1
		},
		justReleased: function(a, b) {
			return this._buttons[a] ? this._buttons[a].justReleased(b) : void 0
		},
		justPressed: function(a, b) {
			return this._buttons[a] ? this._buttons[a].justPressed(b) : void 0
		},
		buttonValue: function(a) {
			return this._buttons[a] ? this._buttons[a].value: null
		},
		reset: function() {
			for (var a = 0; a < this._axes.length; a++) this._axes[a] = 0
		}
	},
	b.SinglePad.prototype.constructor = b.SinglePad,
	b.GamepadButton = function(a, c) {
		this.pad = a,
		this.game = a.game,
		this.isDown = !1,
		this.isUp = !0,
		this.timeDown = 0,
		this.duration = 0,
		this.timeUp = 0,
		this.repeats = 0,
		this.value = 0,
		this.buttonCode = c,
		this.onDown = new b.Signal,
		this.onUp = new b.Signal,
		this.onFloat = new b.Signal
	},
	b.GamepadButton.prototype = {
		processButtonDown: function(a) {
			this.isDown ? (this.duration = this.game.time.now - this.timeDown, this.repeats++) : (this.isDown = !0, this.isUp = !1, this.timeDown = this.game.time.now, this.duration = 0, this.repeats = 0, this.value = a, this.onDown.dispatch(this, a))
		},
		processButtonUp: function(a) {
			this.isDown && (this.isDown = !1, this.isUp = !0, this.timeUp = this.game.time.now, this.value = a, this.onUp.dispatch(this, a))
		},
		processButtonFloat: function(a) {
			this.value = a,
			this.onFloat.dispatch(this, a)
		},
		justPressed: function(a) {
			return "undefined" == typeof a && (a = 250),
			this.isDown && this.duration < a
		},
		justReleased: function(a) {
			return "undefined" == typeof a && (a = 250),
			this.isDown === !1 && this.game.time.now - this.timeUp < a
		},
		reset: function() {
			this.isDown = !1,
			this.isUp = !0,
			this.timeDown = this.game.time.now,
			this.duration = 0,
			this.repeats = 0
		},
		destroy: function() {
			this.onDown.dispose(),
			this.onUp.dispose(),
			this.onFloat.dispose(),
			this.pad = null,
			this.game = null
		}
	},
	b.GamepadButton.prototype.constructor = b.GamepadButton,
	b.InputHandler = function(a) {
		this.sprite = a,
		this.game = a.game,
		this.enabled = !1,
		this.checked = !1,
		this.priorityID = 0,
		this.useHandCursor = !1,
		this._setHandCursor = !1,
		this.isDragged = !1,
		this.allowHorizontalDrag = !0,
		this.allowVerticalDrag = !0,
		this.bringToTop = !1,
		this.snapOffset = null,
		this.snapOnDrag = !1,
		this.snapOnRelease = !1,
		this.snapX = 0,
		this.snapY = 0,
		this.snapOffsetX = 0,
		this.snapOffsetY = 0,
		this.pixelPerfectOver = !1,
		this.pixelPerfectClick = !1,
		this.pixelPerfectAlpha = 255,
		this.draggable = !1,
		this.boundsRect = null,
		this.boundsSprite = null,
		this.consumePointerEvent = !1,
		this._dragPhase = !1,
		this._wasEnabled = !1,
		this._tempPoint = new b.Point,
		this._pointerData = [],
		this._pointerData.push({
			id: 0,
			x: 0,
			y: 0,
			isDown: !1,
			isUp: !1,
			isOver: !1,
			isOut: !1,
			timeOver: 0,
			timeOut: 0,
			timeDown: 0,
			timeUp: 0,
			downDuration: 0,
			isDragged: !1
		})
	},
	b.InputHandler.prototype = {
		start: function(a, c) {
			if (a = a || 0, "undefined" == typeof c && (c = !1), this.enabled === !1) {
				this.game.input.interactiveItems.add(this),
				this.useHandCursor = c,
				this.priorityID = a;
				for (var d = 0; 10 > d; d++) this._pointerData[d] = {
					id: d,
					x: 0,
					y: 0,
					isDown: !1,
					isUp: !1,
					isOver: !1,
					isOut: !1,
					timeOver: 0,
					timeOut: 0,
					timeDown: 0,
					timeUp: 0,
					downDuration: 0,
					isDragged: !1
				};
				this.snapOffset = new b.Point,
				this.enabled = !0,
				this._wasEnabled = !0,
				this.sprite.events && null === this.sprite.events.onInputOver && (this.sprite.events.onInputOver = new b.Signal, this.sprite.events.onInputOut = new b.Signal, this.sprite.events.onInputDown = new b.Signal, this.sprite.events.onInputUp = new b.Signal, this.sprite.events.onDragStart = new b.Signal, this.sprite.events.onDragStop = new b.Signal)
			}
			return this.sprite.events.onAddedToGroup.add(this.addedToGroup, this),
			this.sprite.events.onRemovedFromGroup.add(this.removedFromGroup, this),
			this.flagged = !1,
			this.sprite
		},
		addedToGroup: function() {
			this._dragPhase || this._wasEnabled && !this.enabled && this.start()
		},
		removedFromGroup: function() {
			this._dragPhase || (this.enabled ? (this._wasEnabled = !0, this.stop()) : this._wasEnabled = !1)
		},
		reset: function() {
			this.enabled = !1,
			this.flagged = !1;
			for (var a = 0; 10 > a; a++) this._pointerData[a] = {
				id: a,
				x: 0,
				y: 0,
				isDown: !1,
				isUp: !1,
				isOver: !1,
				isOut: !1,
				timeOver: 0,
				timeOut: 0,
				timeDown: 0,
				timeUp: 0,
				downDuration: 0,
				isDragged: !1
			}
		},
		stop: function() {
			this.enabled !== !1 && (this.enabled = !1, this.game.input.interactiveItems.remove(this))
		},
		destroy: function() {
			this.sprite && (this._setHandCursor && (this.game.canvas.style.cursor = "default", this._setHandCursor = !1), this.enabled = !1, this.game.input.interactiveItems.remove(this), this._pointerData.length = 0, this.boundsRect = null, this.boundsSprite = null, this.sprite = null)
		},
		validForInput: function(a, b, c) {
			return "undefined" == typeof c && (c = !0),
			0 === this.sprite.scale.x || 0 === this.sprite.scale.y || this.priorityID < this.game.input.minPriorityID ? !1 : c || !this.pixelPerfectClick && !this.pixelPerfectOver ? this.priorityID > a || this.priorityID === a && this.sprite._cache[3] < b ? !0 : !1 : !1
		},
		isPixelPerfect: function() {
			return this.pixelPerfectClick || this.pixelPerfectOver
		},
		pointerX: function(a) {
			return a = a || 0,
			this._pointerData[a].x
		},
		pointerY: function(a) {
			return a = a || 0,
			this._pointerData[a].y
		},
		pointerDown: function(a) {
			return a = a || 0,
			this._pointerData[a].isDown
		},
		pointerUp: function(a) {
			return a = a || 0,
			this._pointerData[a].isUp
		},
		pointerTimeDown: function(a) {
			return a = a || 0,
			this._pointerData[a].timeDown
		},
		pointerTimeUp: function(a) {
			return a = a || 0,
			this._pointerData[a].timeUp
		},
		pointerOver: function(a) {
			if (this.enabled) {
				if ("undefined" != typeof a) return this._pointerData[a].isOver;
				for (var b = 0; 10 > b; b++) if (this._pointerData[b].isOver) return ! 0
			}
			return ! 1
		},
		pointerOut: function(a) {
			if (this.enabled) {
				if ("undefined" != typeof a) return this._pointerData[a].isOut;
				for (var b = 0; 10 > b; b++) if (this._pointerData[b].isOut) return ! 0
			}
			return ! 1
		},
		pointerTimeOver: function(a) {
			return a = a || 0,
			this._pointerData[a].timeOver
		},
		pointerTimeOut: function(a) {
			return a = a || 0,
			this._pointerData[a].timeOut
		},
		pointerDragged: function(a) {
			return a = a || 0,
			this._pointerData[a].isDragged
		},
		checkPointerDown: function(a, b) {
			return a.isDown && this.enabled && this.sprite && this.sprite.parent && this.sprite.visible && this.sprite.parent.visible ? this.game.input.hitTest(this.sprite, a, this._tempPoint) ? ("undefined" == typeof b && (b = !1), !b && this.pixelPerfectClick ? this.checkPixel(this._tempPoint.x, this._tempPoint.y) : !0) : !1 : !1
		},
		checkPointerOver: function(a, b) {
			return this.enabled && this.sprite && this.sprite.parent && this.sprite.visible && this.sprite.parent.visible ? this.game.input.hitTest(this.sprite, a, this._tempPoint) ? ("undefined" == typeof b && (b = !1), !b && this.pixelPerfectOver ? this.checkPixel(this._tempPoint.x, this._tempPoint.y) : !0) : !1 : !1
		},
		checkPixel: function(a, b, c) {
			var d;
			return this.sprite.texture.baseTexture.source && (this.game.input.hitContext.clearRect(0, 0, 1, 1), null === a && null === b && (this.game.input.getLocalPosition(this.sprite, c, this._tempPoint), a = this._tempPoint.x, b = this._tempPoint.y), 0 !== this.sprite.anchor.x && (a -= -this.sprite.texture.frame.width * this.sprite.anchor.x), 0 !== this.sprite.anchor.y && (b -= -this.sprite.texture.frame.height * this.sprite.anchor.y), a += this.sprite.texture.frame.x, b += this.sprite.texture.frame.y, this.game.input.hitContext.drawImage(this.sprite.texture.baseTexture.source, a, b, 1, 1, 0, 0, 1, 1), d = this.game.input.hitContext.getImageData(0, 0, 1, 1), d.data[3] >= this.pixelPerfectAlpha) ? !0 : !1
		},
		update: function(a) {
			return null !== this.sprite && void 0 !== this.sprite.parent ? this.enabled && this.sprite.visible && this.sprite.parent.visible ? this.draggable && this._draggedPointerID == a.id ? this.updateDrag(a) : this._pointerData[a.id].isOver === !0 ? this.checkPointerOver(a) ? (this._pointerData[a.id].x = a.x - this.sprite.x, this._pointerData[a.id].y = a.y - this.sprite.y, !0) : (this._pointerOutHandler(a), !1) : void 0 : (this._pointerOutHandler(a), !1) : void 0
		},
		_pointerOverHandler: function(a) {
			null !== this.sprite && this._pointerData[a.id].isOver === !1 && (this._pointerData[a.id].isOver = !0, this._pointerData[a.id].isOut = !1, this._pointerData[a.id].timeOver = this.game.time.now, this._pointerData[a.id].x = a.x - this.sprite.x, this._pointerData[a.id].y = a.y - this.sprite.y, this.useHandCursor && this._pointerData[a.id].isDragged === !1 && (this.game.canvas.style.cursor = "pointer", this._setHandCursor = !0), this.sprite && this.sprite.events && this.sprite.events.onInputOver.dispatch(this.sprite, a))
		},
		_pointerOutHandler: function(a) {
			null !== this.sprite && (this._pointerData[a.id].isOver = !1, this._pointerData[a.id].isOut = !0, this._pointerData[a.id].timeOut = this.game.time.now, this.useHandCursor && this._pointerData[a.id].isDragged === !1 && (this.game.canvas.style.cursor = "default", this._setHandCursor = !1), this.sprite && this.sprite.events && this.sprite.events.onInputOut.dispatch(this.sprite, a))
		},
		_touchedHandler: function(a) {
			if (null !== this.sprite) {
				if (this._pointerData[a.id].isDown === !1 && this._pointerData[a.id].isOver === !0) {
					if (this.pixelPerfectClick && !this.checkPixel(null, null, a)) return;
					this._pointerData[a.id].isDown = !0,
					this._pointerData[a.id].isUp = !1,
					this._pointerData[a.id].timeDown = this.game.time.now,
					this.sprite && this.sprite.events && this.sprite.events.onInputDown.dispatch(this.sprite, a),
					this.draggable && this.isDragged === !1 && this.startDrag(a),
					this.bringToTop && this.sprite.bringToTop()
				}
				return this.consumePointerEvent
			}
		},
		_releasedHandler: function(a) {
			null !== this.sprite && this._pointerData[a.id].isDown && a.isUp && (this._pointerData[a.id].isDown = !1, this._pointerData[a.id].isUp = !0, this._pointerData[a.id].timeUp = this.game.time.now, this._pointerData[a.id].downDuration = this._pointerData[a.id].timeUp - this._pointerData[a.id].timeDown, this.checkPointerOver(a) ? this.sprite && this.sprite.events && this.sprite.events.onInputUp.dispatch(this.sprite, a, !0) : (this.sprite && this.sprite.events && this.sprite.events.onInputUp.dispatch(this.sprite, a, !1), this.useHandCursor && (this.game.canvas.style.cursor = "default", this._setHandCursor = !1)), this.draggable && this.isDragged && this._draggedPointerID === a.id && this.stopDrag(a))
		},
		updateDrag: function(a) {
			return a.isUp ? (this.stopDrag(a), !1) : (this.sprite.fixedToCamera ? (this.allowHorizontalDrag && (this.sprite.cameraOffset.x = a.x + this._dragPoint.x + this.dragOffset.x), this.allowVerticalDrag && (this.sprite.cameraOffset.y = a.y + this._dragPoint.y + this.dragOffset.y), this.boundsRect && this.checkBoundsRect(), this.boundsSprite && this.checkBoundsSprite(), this.snapOnDrag && (this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY)) : (this.allowHorizontalDrag && (this.sprite.x = a.x + this._dragPoint.x + this.dragOffset.x), this.allowVerticalDrag && (this.sprite.y = a.y + this._dragPoint.y + this.dragOffset.y), this.boundsRect && this.checkBoundsRect(), this.boundsSprite && this.checkBoundsSprite(), this.snapOnDrag && (this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY)), !0)
		},
		justOver: function(a, b) {
			return a = a || 0,
			b = b || 500,
			this._pointerData[a].isOver && this.overDuration(a) < b
		},
		justOut: function(a, b) {
			return a = a || 0,
			b = b || 500,
			this._pointerData[a].isOut && this.game.time.now - this._pointerData[a].timeOut < b
		},
		justPressed: function(a, b) {
			return a = a || 0,
			b = b || 500,
			this._pointerData[a].isDown && this.downDuration(a) < b
		},
		justReleased: function(a, b) {
			return a = a || 0,
			b = b || 500,
			this._pointerData[a].isUp && this.game.time.now - this._pointerData[a].timeUp < b
		},
		overDuration: function(a) {
			return a = a || 0,
			this._pointerData[a].isOver ? this.game.time.now - this._pointerData[a].timeOver: -1
		},
		downDuration: function(a) {
			return a = a || 0,
			this._pointerData[a].isDown ? this.game.time.now - this._pointerData[a].timeDown: -1
		},
		enableDrag: function(a, c, d, e, f, g) {
			"undefined" == typeof a && (a = !1),
			"undefined" == typeof c && (c = !1),
			"undefined" == typeof d && (d = !1),
			"undefined" == typeof e && (e = 255),
			"undefined" == typeof f && (f = null),
			"undefined" == typeof g && (g = null),
			this._dragPoint = new b.Point,
			this.draggable = !0,
			this.bringToTop = c,
			this.dragOffset = new b.Point,
			this.dragFromCenter = a,
			this.pixelPerfectClick = d,
			this.pixelPerfectAlpha = e,
			f && (this.boundsRect = f),
			g && (this.boundsSprite = g)
		},
		disableDrag: function() {
			if (this._pointerData) for (var a = 0; 10 > a; a++) this._pointerData[a].isDragged = !1;
			this.draggable = !1,
			this.isDragged = !1,
			this._draggedPointerID = -1
		},
		startDrag: function(a) {
			if (this.isDragged = !0, this._draggedPointerID = a.id, this._pointerData[a.id].isDragged = !0, this.sprite.fixedToCamera) this.dragFromCenter ? (this.sprite.centerOn(a.x, a.y), this._dragPoint.setTo(this.sprite.cameraOffset.x - a.x, this.sprite.cameraOffset.y - a.y)) : this._dragPoint.setTo(this.sprite.cameraOffset.x - a.x, this.sprite.cameraOffset.y - a.y);
			else if (this.dragFromCenter) {
				var b = this.sprite.getBounds();
				this.sprite.x = a.x + (this.sprite.x - b.centerX),
				this.sprite.y = a.y + (this.sprite.y - b.centerY),
				this._dragPoint.setTo(this.sprite.x - a.x, this.sprite.y - a.y)
			} else this._dragPoint.setTo(this.sprite.x - a.x, this.sprite.y - a.y);
			this.updateDrag(a),
			this.bringToTop && (this._dragPhase = !0, this.sprite.bringToTop()),
			this.sprite.events.onDragStart.dispatch(this.sprite, a)
		},
		stopDrag: function(a) {
			this.isDragged = !1,
			this._draggedPointerID = -1,
			this._pointerData[a.id].isDragged = !1,
			this._dragPhase = !1,
			this.snapOnRelease && (this.sprite.fixedToCamera ? (this.sprite.cameraOffset.x = Math.round((this.sprite.cameraOffset.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.cameraOffset.y = Math.round((this.sprite.cameraOffset.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY) : (this.sprite.x = Math.round((this.sprite.x - this.snapOffsetX % this.snapX) / this.snapX) * this.snapX + this.snapOffsetX % this.snapX, this.sprite.y = Math.round((this.sprite.y - this.snapOffsetY % this.snapY) / this.snapY) * this.snapY + this.snapOffsetY % this.snapY)),
			this.sprite.events.onDragStop.dispatch(this.sprite, a),
			this.checkPointerOver(a) === !1 && this._pointerOutHandler(a)
		},
		setDragLock: function(a, b) {
			"undefined" == typeof a && (a = !0),
			"undefined" == typeof b && (b = !0),
			this.allowHorizontalDrag = a,
			this.allowVerticalDrag = b
		},
		enableSnap: function(a, b, c, d, e, f) {
			"undefined" == typeof c && (c = !0),
			"undefined" == typeof d && (d = !1),
			"undefined" == typeof e && (e = 0),
			"undefined" == typeof f && (f = 0),
			this.snapX = a,
			this.snapY = b,
			this.snapOffsetX = e,
			this.snapOffsetY = f,
			this.snapOnDrag = c,
			this.snapOnRelease = d
		},
		disableSnap: function() {
			this.snapOnDrag = !1,
			this.snapOnRelease = !1
		},
		checkBoundsRect: function() {
			this.sprite.fixedToCamera ? (this.sprite.cameraOffset.x < this.boundsRect.left ? this.sprite.cameraOffset.x = this.boundsRect.cameraOffset.x: this.sprite.cameraOffset.x + this.sprite.width > this.boundsRect.right && (this.sprite.cameraOffset.x = this.boundsRect.right - this.sprite.width), this.sprite.cameraOffset.y < this.boundsRect.top ? this.sprite.cameraOffset.y = this.boundsRect.top: this.sprite.cameraOffset.y + this.sprite.height > this.boundsRect.bottom && (this.sprite.cameraOffset.y = this.boundsRect.bottom - this.sprite.height)) : (this.sprite.x < this.boundsRect.left ? this.sprite.x = this.boundsRect.x: this.sprite.x + this.sprite.width > this.boundsRect.right && (this.sprite.x = this.boundsRect.right - this.sprite.width), this.sprite.y < this.boundsRect.top ? this.sprite.y = this.boundsRect.top: this.sprite.y + this.sprite.height > this.boundsRect.bottom && (this.sprite.y = this.boundsRect.bottom - this.sprite.height))
		},
		checkBoundsSprite: function() {
			this.sprite.fixedToCamera && this.boundsSprite.fixedToCamera ? (this.sprite.cameraOffset.x < this.boundsSprite.camerOffset.x ? this.sprite.cameraOffset.x = this.boundsSprite.camerOffset.x: this.sprite.cameraOffset.x + this.sprite.width > this.boundsSprite.camerOffset.x + this.boundsSprite.width && (this.sprite.cameraOffset.x = this.boundsSprite.camerOffset.x + this.boundsSprite.width - this.sprite.width), this.sprite.cameraOffset.y < this.boundsSprite.camerOffset.y ? this.sprite.cameraOffset.y = this.boundsSprite.camerOffset.y: this.sprite.cameraOffset.y + this.sprite.height > this.boundsSprite.camerOffset.y + this.boundsSprite.height && (this.sprite.cameraOffset.y = this.boundsSprite.camerOffset.y + this.boundsSprite.height - this.sprite.height)) : (this.sprite.x < this.boundsSprite.x ? this.sprite.x = this.boundsSprite.x: this.sprite.x + this.sprite.width > this.boundsSprite.x + this.boundsSprite.width && (this.sprite.x = this.boundsSprite.x + this.boundsSprite.width - this.sprite.width), this.sprite.y < this.boundsSprite.y ? this.sprite.y = this.boundsSprite.y: this.sprite.y + this.sprite.height > this.boundsSprite.y + this.boundsSprite.height && (this.sprite.y = this.boundsSprite.y + this.boundsSprite.height - this.sprite.height))
		}
	},
	b.InputHandler.prototype.constructor = b.InputHandler,
	b.Events = function(a) {
		this.parent = a,
		this.onAddedToGroup = new b.Signal,
		this.onRemovedFromGroup = new b.Signal,
		this.onKilled = new b.Signal,
		this.onRevived = new b.Signal,
		this.onOutOfBounds = new b.Signal,
		this.onEnterBounds = new b.Signal,
		this.onInputOver = null,
		this.onInputOut = null,
		this.onInputDown = null,
		this.onInputUp = null,
		this.onDragStart = null,
		this.onDragStop = null,
		this.onAnimationStart = null,
		this.onAnimationComplete = null,
		this.onAnimationLoop = null
	},
	b.Events.prototype = {
		destroy: function() {
			this.parent = null,
			this.onAddedToGroup.dispose(),
			this.onRemovedFromGroup.dispose(),
			this.onKilled.dispose(),
			this.onRevived.dispose(),
			this.onOutOfBounds.dispose(),
			this.onInputOver && (this.onInputOver.dispose(), this.onInputOut.dispose(), this.onInputDown.dispose(), this.onInputUp.dispose(), this.onDragStart.dispose(), this.onDragStop.dispose()),
			this.onAnimationStart && (this.onAnimationStart.dispose(), this.onAnimationComplete.dispose(), this.onAnimationLoop.dispose())
		}
	},
	b.Events.prototype.constructor = b.Events,
	b.GameObjectFactory = function(a) {
		this.game = a,
		this.world = this.game.world
	},
	b.GameObjectFactory.prototype = {
		existing: function(a) {
			return this.world.add(a)
		},
		image: function(a, c, d, e, f) {
			return "undefined" == typeof f && (f = this.world),
			f.add(new b.Image(this.game, a, c, d, e))
		},
		sprite: function(a, b, c, d, e) {
			return "undefined" == typeof e && (e = this.world),
			e.create(a, b, c, d)
		},
		tween: function(a) {
			return this.game.tweens.create(a)
		},
		group: function(a, c, d, e, f) {
			return new b.Group(this.game, a, c, d, e, f)
		},
		physicsGroup: function(a, c, d, e) {
			return new b.Group(this.game, c, d, e, !0, a)
		},
		spriteBatch: function(a, c, d) {
			return "undefined" == typeof a && (a = null),
			"undefined" == typeof c && (c = "group"),
			"undefined" == typeof d && (d = !1),
			new b.SpriteBatch(this.game, a, c, d)
		},
		audio: function(a, b, c, d) {
			return this.game.sound.add(a, b, c, d)
		},
		sound: function(a, b, c, d) {
			return this.game.sound.add(a, b, c, d)
		},
		tileSprite: function(a, c, d, e, f, g, h) {
			return "undefined" == typeof h && (h = this.world),
			h.add(new b.TileSprite(this.game, a, c, d, e, f, g))
		},
		text: function(a, c, d, e, f) {
			return "undefined" == typeof f && (f = this.world),
			f.add(new b.Text(this.game, a, c, d, e))
		},
		button: function(a, c, d, e, f, g, h, i, j, k) {
			return "undefined" == typeof k && (k = this.world),
			k.add(new b.Button(this.game, a, c, d, e, f, g, h, i, j))
		},
		graphics: function(a, c, d) {
			return "undefined" == typeof d && (d = this.world),
			d.add(new b.Graphics(this.game, a, c))
		},
		emitter: function(a, c, d) {
			return this.game.particles.add(new b.Particles.Arcade.Emitter(this.game, a, c, d))
		},
		retroFont: function(a, c, d, e, f, g, h, i, j) {
			return new b.RetroFont(this.game, a, c, d, e, f, g, h, i, j)
		},
		bitmapText: function(a, c, d, e, f, g) {
			return "undefined" == typeof g && (g = this.world),
			g.add(new b.BitmapText(this.game, a, c, d, e, f))
		},
		tilemap: function(a, c, d, e, f) {
			return new b.Tilemap(this.game, a, c, d, e, f)
		},
		renderTexture: function(a, c, d, e) { ("undefined" == typeof d || "" === d) && (d = this.game.rnd.uuid()),
			"undefined" == typeof e && (e = !1);
			var f = new b.RenderTexture(this.game, a, c, d);
			return e && this.game.cache.addRenderTexture(d, f),
			f
		},
		bitmapData: function(a, c, d, e) {
			"undefined" == typeof e && (e = !1),
			("undefined" == typeof d || "" === d) && (d = this.game.rnd.uuid());
			var f = new b.BitmapData(this.game, d, a, c);
			return e && this.game.cache.addBitmapData(d, f),
			f
		},
		filter: function(a) {
			var c = Array.prototype.splice.call(arguments, 1);
			return a = new b.Filter[a](this.game),
			a.init.apply(a, c),
			a
		},
		plugin: function(a) {
			return this.game.plugins.add(a)
		}
	},
	b.GameObjectFactory.prototype.constructor = b.GameObjectFactory,
	b.GameObjectCreator = function(a) {
		this.game = a,
		this.world = this.game.world
	},
	b.GameObjectCreator.prototype = {
		image: function(a, c, d, e) {
			return new b.Image(this.game, a, c, d, e)
		},
		sprite: function(a, c, d, e) {
			return new b.Sprite(this.game, a, c, d, e)
		},
		tween: function(a) {
			return new b.Tween(a, this.game)
		},
		group: function(a, c, d, e, f) {
			return new b.Group(this.game, null, c, d, e, f)
		},
		spriteBatch: function(a, c, d) {
			return "undefined" == typeof c && (c = "group"),
			"undefined" == typeof d && (d = !1),
			new b.SpriteBatch(this.game, a, c, d)
		},
		audio: function(a, b, c, d) {
			return this.game.sound.add(a, b, c, d)
		},
		sound: function(a, b, c, d) {
			return this.game.sound.add(a, b, c, d)
		},
		tileSprite: function(a, c, d, e, f, g) {
			return new b.TileSprite(this.game, a, c, d, e, f, g)
		},
		text: function(a, c, d, e) {
			return new b.Text(this.game, a, c, d, e)
		},
		button: function(a, c, d, e, f, g, h, i, j) {
			return new b.Button(this.game, a, c, d, e, f, g, h, i, j)
		},
		graphics: function(a, c) {
			return new b.Graphics(this.game, a, c)
		},
		emitter: function(a, c, d) {
			return new b.Particles.Arcade.Emitter(this.game, a, c, d)
		},
		retroFont: function(a, c, d, e, f, g, h, i, j) {
			return new b.RetroFont(this.game, a, c, d, e, f, g, h, i, j)
		},
		bitmapText: function(a, c, d, e, f) {
			return new b.BitmapText(this.game, a, c, d, e, f)
		},
		tilemap: function(a, c, d, e, f) {
			return new b.Tilemap(this.game, a, c, d, e, f)
		},
		renderTexture: function(a, c, d, e) { ("undefined" == typeof d || "" === d) && (d = this.game.rnd.uuid()),
			"undefined" == typeof e && (e = !1);
			var f = new b.RenderTexture(this.game, a, c, d);
			return e && this.game.cache.addRenderTexture(d, f),
			f
		},
		bitmapData: function(a, c, d, e) {
			"undefined" == typeof e && (e = !1),
			("undefined" == typeof d || "" === d) && (d = this.game.rnd.uuid());
			var f = new b.BitmapData(this.game, d, a, c);
			return e && this.game.cache.addBitmapData(d, f),
			f
		},
		filter: function(a) {
			var c = Array.prototype.splice.call(arguments, 1);
			return a = new b.Filter[a](this.game),
			a.init.apply(a, c),
			a
		}
	},
	b.GameObjectCreator.prototype.constructor = b.GameObjectCreator,
	b.BitmapData = function(a, c, d, e) {
		"undefined" == typeof d && (d = 100),
		"undefined" == typeof e && (e = 100),
		this.game = a,
		this.key = c,
		this.width = d,
		this.height = e,
		this.canvas = b.Canvas.create(d, e, "", !0),
		this.context = this.canvas.getContext("2d"),
		this.ctx = this.context,
		this.imageData = this.context.getImageData(0, 0, d, e),
		this.data = this.imageData.data,
		this.pixels = null,
		this.imageData.data.buffer ? (this.buffer = this.imageData.data.buffer, this.pixels = new Uint32Array(this.buffer)) : window["ArrayBuffer"] ? (this.buffer = new ArrayBuffer(this.imageData.data.length), this.pixels = new Uint32Array(this.buffer)) : this.pixels = this.imageData.data,
		this.baseTexture = new PIXI.BaseTexture(this.canvas),
		this.texture = new PIXI.Texture(this.baseTexture),
		this.textureFrame = new b.Frame(0, 0, 0, d, e, "bitmapData", a.rnd.uuid()),
		this.texture.frame = this.textureFrame,
		this.type = b.BITMAPDATA,
		this.disableTextureUpload = !1,
		this.dirty = !1,
		this.cls = this.clear,
		this.update = this.refreshBuffer,
		this._tempR = 0,
		this._tempG = 0,
		this._tempB = 0
	},
	b.BitmapData.prototype = {
		add: function(a) {
			if (Array.isArray(a)) for (var b = 0; b < a.length; b++) a[b]["loadTexture"] && a[b].loadTexture(this);
			else a.loadTexture(this)
		},
		load: function(a) {
			"string" == typeof a && (a = this.game.cache.getImage(a)),
			this.resize(a.width, a.height),
			this.cls(),
			a instanceof b.Image || a instanceof b.Sprite ? this.drawSprite(a, 0, 0) : this.draw(a, 0, 0),
			this.update()
		},
		clear: function() {
			this.context.clearRect(0, 0, this.width, this.height),
			this.dirty = !0
		},
		fill: function(a, b, c, d) {
			"undefined" == typeof d && (d = 1),
			this.context.fillStyle = "rgba(" + a + "," + b + "," + c + "," + d + ")",
			this.context.fillRect(0, 0, this.width, this.height),
			this.dirty = !0
		},
		resize: function(a, b) { (a !== this.width || b !== this.height) && (this.width = a, this.height = b, this.canvas.width = a, this.canvas.height = b, this.baseTexture.width = a, this.baseTexture.height = b, this.textureFrame.width = a, this.textureFrame.height = b, this.texture.width = a, this.texture.height = b, this.texture.crop.width = a, this.texture.crop.height = b, this.refreshBuffer(), this.dirty = !0)
		},
		refreshBuffer: function(a, b, c, d) {
			"undefined" == typeof a && (a = 0),
			"undefined" == typeof b && (b = 0),
			"undefined" == typeof c && (c = this.width),
			"undefined" == typeof d && (d = this.height),
			this.imageData = this.context.getImageData(a, b, c, d),
			this.data = this.imageData.data,
			this.imageData.data.buffer ? (this.buffer = this.imageData.data.buffer, this.pixels = new Uint32Array(this.buffer)) : window["ArrayBuffer"] ? (this.buffer = new ArrayBuffer(this.imageData.data.length), this.pixels = new Uint32Array(this.buffer)) : this.pixels = this.imageData.data
		},
		processPixelRGB: function(a, c, d, e, f, g) {
			var h, i, j, k, l, m, n;
			for ("undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = this.width), "undefined" == typeof g && (g = this.height), h = d + f, i = e + g, j = b.Color.createColor(), k = {
				r: 0,
				g: 0,
				b: 0,
				a: 0
			},
			l = !1, m = e; i > m; m++) for (n = d; h > n; n++) b.Color.unpackPixel(this.getPixel32(n, m), j),
			k = a.call(c, j, n, m),
			k !== !1 && null !== k && void 0 !== k && (this.setPixel32(n, m, k.r, k.g, k.b, k.a, !1), l = !0);
			l && (this.context.putImageData(this.imageData, 0, 0), this.dirty = !0)
		},
		processPixel: function(a, b, c, d, e, f) {
			var g, h, i, j, k, l, m;
			for ("undefined" == typeof c && (c = 0), "undefined" == typeof d && (d = 0), "undefined" == typeof e && (e = this.width), "undefined" == typeof f && (f = this.height), g = c + e, h = d + f, i = 0, j = 0, k = !1, l = d; h > l; l++) for (m = c; g > m; m++) i = this.getPixel32(m, l),
			j = a.call(b, i, m, l),
			j !== i && (this.pixels[l * this.width + m] = j, k = !0);
			k && (this.context.putImageData(this.imageData, 0, 0), this.dirty = !0)
		},
		replaceRGB: function(a, c, d, e, f, g, h, i, j) {
			var p, q, k = 0,
			l = 0,
			m = this.width,
			n = this.height,
			o = b.Color.packPixel(a, c, d, e);
			for (void 0 !== j && j instanceof b.Rectangle && (k = j.x, l = j.y, m = j.width, n = j.height), p = 0; n > p; p++) for (q = 0; m > q; q++) this.getPixel32(k + q, l + p) === o && this.setPixel32(k + q, l + p, f, g, h, i, !1);
			this.context.putImageData(this.imageData, 0, 0),
			this.dirty = !0
		},
		setHSL: function(a, c, d, e) {
			var f, g, h;
			if (("undefined" == typeof a || null === a) && (a = !1), ("undefined" == typeof c || null === c) && (c = !1), ("undefined" == typeof d || null === d) && (d = !1), a || c || d) {
				for ("undefined" == typeof e && (e = new b.Rectangle(0, 0, this.width, this.height)), f = b.Color.createColor(), g = e.y; g < e.bottom; g++) for (h = e.x; h < e.right; h++) b.Color.unpackPixel(this.getPixel32(h, g), f, !0),
				a && (f.h = a),
				c && (f.s = c),
				d && (f.l = d),
				b.Color.HSLtoRGB(f.h, f.s, f.l, f),
				this.setPixel32(h, g, f.r, f.g, f.b, f.a, !1);
				this.context.putImageData(this.imageData, 0, 0),
				this.dirty = !0
			}
		},
		shiftHSL: function(a, c, d, e) {
			var f, g, h;
			if (("undefined" == typeof a || null === a) && (a = !1), ("undefined" == typeof c || null === c) && (c = !1), ("undefined" == typeof d || null === d) && (d = !1), a || c || d) {
				for ("undefined" == typeof e && (e = new b.Rectangle(0, 0, this.width, this.height)), f = b.Color.createColor(), g = e.y; g < e.bottom; g++) for (h = e.x; h < e.right; h++) b.Color.unpackPixel(this.getPixel32(h, g), f, !0),
				a && (f.h = this.game.math.wrap(f.h + a, 0, 1)),
				c && (f.s = this.game.math.limitValue(f.s + c, 0, 1)),
				d && (f.l = this.game.math.limitValue(f.l + d, 0, 1)),
				b.Color.HSLtoRGB(f.h, f.s, f.l, f),
				this.setPixel32(h, g, f.r, f.g, f.b, f.a, !1);
				this.context.putImageData(this.imageData, 0, 0),
				this.dirty = !0
			}
		},
		setPixel32: function(a, c, d, e, f, g, h) {
			"undefined" == typeof h && (h = !0),
			a >= 0 && a <= this.width && c >= 0 && c <= this.height && (this.pixels[c * this.width + a] = b.Device.LITTLE_ENDIAN ? g << 24 | f << 16 | e << 8 | d: d << 24 | e << 16 | f << 8 | g, h && (this.context.putImageData(this.imageData, 0, 0), this.dirty = !0))
		},
		setPixel: function(a, b, c, d, e, f) {
			this.setPixel32(a, b, c, d, e, 255, f)
		},
		getPixel: function(a, c, d) {
			d || (d = b.Color.createColor());
			var e = ~~ (a + c * this.width);
			return e *= 4,
			d.r = this.data[e],
			d.g = this.data[++e],
			d.b = this.data[++e],
			d.a = this.data[++e],
			d
		},
		getPixel32: function(a, b) {
			return a >= 0 && a <= this.width && b >= 0 && b <= this.height ? this.pixels[b * this.width + a] : void 0
		},
		getPixelRGB: function(a, c, d, e, f) {
			return b.Color.unpackPixel(this.getPixel32(a, c), d, e, f)
		},
		getPixels: function(a) {
			return this.context.getImageData(a.x, a.y, a.width, a.height)
		},
		addToWorld: function(a, b) {
			return this.game.add.image(a, b, this)
		},
		copyPixels: function(a, c, d, e) {
			var f, g, h, i;
			"string" == typeof a && (a = this.game.cache.getImage(a)),
			f = a,
			g = 0,
			h = 0,
			a instanceof b.Image || a instanceof b.Sprite ? (f = a.texture.baseTexture.source, i = a.texture.frame, g = i.x, h = i.y) : a instanceof b.BitmapData && (f = a.canvas),
			this.context.drawImage(f, g + c.x, h + c.y, c.width, c.height, d, e, c.width, c.height),
			this.dirty = !0
		},
		draw: function(a, c, d, e, f) {
			var g, h, i, j, k, l;
			"undefined" == typeof c && (c = 0),
			"undefined" == typeof d && (d = 0),
			"string" == typeof a && (a = this.game.cache.getImage(a)),
			g = a,
			h = 0,
			i = 0,
			j = 0,
			k = 0,
			a instanceof b.Image || a instanceof b.Sprite ? (g = a.texture.baseTexture.source, l = a.texture.frame, h = l.x, i = l.y, j = l.width, k = l.height) : (a instanceof b.BitmapData && (g = a.canvas), j = a.width, k = a.height),
			"undefined" == typeof e && (e = j),
			"undefined" == typeof f && (f = k),
			this.context.drawImage(g, h, i, j, k, c, d, e, f),
			this.dirty = !0
		},
		drawSprite: function(a, b, c) {
			"undefined" == typeof b && (b = 0),
			"undefined" == typeof c && (c = 0),
			this.draw(a, b, c)
		},
		alphaMask: function(a, b, c, d) { ("undefined" == typeof b || null === b) && (b = this);
			var e = this.context.globalCompositeOperation;
			"undefined" == typeof d || null === d ? this.draw(b) : this.draw(b, d.x, d.y, d.width, d.height),
			this.context.globalCompositeOperation = "source-atop",
			"undefined" == typeof c || null === c ? this.draw(a) : this.draw(a, c.x, c.y, c.width, c.height),
			this.context.globalCompositeOperation = e,
			this.update(),
			this.dirty = !0
		},
		extract: function(a, b, c, d, e, f, g, h, i) {
			return "undefined" == typeof e && (e = 255),
			"undefined" == typeof f && (f = !1),
			"undefined" == typeof g && (g = b),
			"undefined" == typeof h && (h = c),
			"undefined" == typeof i && (i = d),
			f && a.resize(this.width, this.height),
			this.processPixelRGB(function(f, j, k) {
				return f.r === b && f.g === c && f.b === d && a.setPixel32(j, k, g, h, i, e, !1),
				!1
			},
			this),
			a.context.putImageData(a.imageData, 0, 0),
			a.dirty = !0,
			a
		},
		rect: function(a, b, c, d, e) {
			"undefined" != typeof e && (this.context.fillStyle = e),
			this.context.fillRect(a, b, c, d)
		},
		circle: function(a, b, c, d) {
			"undefined" != typeof d && (this.context.fillStyle = d),
			this.context.beginPath(),
			this.context.arc(a, b, c, 0, 2 * Math.PI, !1),
			this.context.closePath(),
			this.context.fill()
		},
		render: function() { ! this.disableTextureUpload && this.game.renderType === b.WEBGL && this.dirty && (PIXI.updateWebGLTexture(this.baseTexture, this.game.renderer.gl), this.dirty = !1)
		}
	},
	b.BitmapData.prototype.constructor = b.BitmapData,
	b.Sprite = function(a, c, d, e, f) {
		c = c || 0,
		d = d || 0,
		e = e || null,
		f = f || null,
		this.game = a,
		this.name = "",
		this.type = b.SPRITE,
		this.z = 0,
		this.events = new b.Events(this),
		this.animations = new b.AnimationManager(this),
		this.key = e,
		PIXI.Sprite.call(this, PIXI.TextureCache["__default"]),
		this.position.set(c, d),
		this.world = new b.Point(c, d),
		this.autoCull = !1,
		this.input = null,
		this.body = null,
		this.alive = !0,
		this.health = 1,
		this.lifespan = 0,
		this.checkWorldBounds = !1,
		this.outOfBoundsKill = !1,
		this.debug = !1,
		this.cameraOffset = new b.Point,
		this.cropRect = null,
		this._cache = [0, 0, 0, 0, 1, 0, 1, 0],
		this._crop = null,
		this._frame = null,
		this._bounds = new b.Rectangle,
		this.loadTexture(e, f)
	},
	b.Sprite.prototype = Object.create(PIXI.Sprite.prototype),
	b.Sprite.prototype.constructor = b.Sprite,
	b.Sprite.prototype.preUpdate = function() {
		if (1 === this._cache[4] && this.exists) return this.world.setTo(this.parent.position.x + this.position.x, this.parent.position.y + this.position.y),
		this.worldTransform.tx = this.world.x,
		this.worldTransform.ty = this.world.y,
		this._cache[0] = this.world.x,
		this._cache[1] = this.world.y,
		this._cache[2] = this.rotation,
		this.body && this.body.preUpdate(),
		this._cache[4] = 0,
		!1;
		if (this._cache[0] = this.world.x, this._cache[1] = this.world.y, this._cache[2] = this.rotation, !this.exists || !this.parent.exists) return this._cache[3] = -1,
		!1;
		if (this.lifespan > 0 && (this.lifespan -= this.game.time.elapsed, this.lifespan <= 0)) return this.kill(),
		!1;
		if ((this.autoCull || this.checkWorldBounds) && this._bounds.copyFrom(this.getBounds()), this.autoCull && (this.renderable = this.game.world.camera.screenView.intersects(this._bounds)), this.checkWorldBounds) if (1 === this._cache[5] && this.game.world.bounds.intersects(this._bounds)) this._cache[5] = 0,
		this.events.onEnterBounds.dispatch(this);
		else if (0 === this._cache[5] && !this.game.world.bounds.intersects(this._bounds) && (this._cache[5] = 1, this.events.onOutOfBounds.dispatch(this), this.outOfBoundsKill)) return this.kill(),
		!1;
		this.world.setTo(this.game.camera.x + this.worldTransform.tx, this.game.camera.y + this.worldTransform.ty),
		this.visible && (this._cache[3] = this.game.stage.currentRenderOrderID++),
		this.animations.update(),
		this.body && this.body.preUpdate();
		for (var a = 0,
		b = this.children.length; b > a; a++) this.children[a].preUpdate();
		return ! 0
	},
	b.Sprite.prototype.update = function() {},
	b.Sprite.prototype.postUpdate = function() {
		this.key instanceof b.BitmapData && this.key.render(),
		this.exists && this.body && this.body.postUpdate(),
		1 === this._cache[7] && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y);
		for (var a = 0,
		c = this.children.length; c > a; a++) this.children[a].postUpdate()
	},
	b.Sprite.prototype.loadTexture = function(a, c, d) {
		var e, f;
		c = c || 0,
		(d || "undefined" == typeof d) && this.animations.stop(),
		this.key = a,
		e = !0,
		f = this.smoothed,
		a instanceof b.RenderTexture ? (this.key = a.key, this.setTexture(a)) : a instanceof b.BitmapData ? this.setTexture(a.texture) : a instanceof PIXI.Texture ? this.setTexture(a) : null === a || "undefined" == typeof a ? (this.key = "__default", this.setTexture(PIXI.TextureCache[this.key])) : "string" != typeof a || this.game.cache.checkImageKey(a) ? (this.setTexture(new PIXI.Texture(PIXI.BaseTextureCache[a])), e = !this.animations.loadFrameData(this.game.cache.getFrameData(a), c)) : (console.warn("Texture with key '" + a + "' not found."), this.key = "__missing", this.setTexture(PIXI.TextureCache[this.key])),
		e && (this._frame = b.Rectangle.clone(this.texture.frame)),
		f || (this.smoothed = !1)
	},
	b.Sprite.prototype.setFrame = function(a) {
		this._frame = a,
		this.texture.frame.x = a.x,
		this.texture.frame.y = a.y,
		this.texture.frame.width = a.width,
		this.texture.frame.height = a.height,
		this.texture.crop.x = a.x,
		this.texture.crop.y = a.y,
		this.texture.crop.width = a.width,
		this.texture.crop.height = a.height,
		a.trimmed && (this.texture.trim ? (this.texture.trim.x = a.spriteSourceSizeX, this.texture.trim.y = a.spriteSourceSizeY, this.texture.trim.width = a.sourceSizeW, this.texture.trim.height = a.sourceSizeH) : this.texture.trim = {
			x: a.spriteSourceSizeX,
			y: a.spriteSourceSizeY,
			width: a.sourceSizeW,
			height: a.sourceSizeH
		},
		this.texture.width = a.sourceSizeW, this.texture.height = a.sourceSizeH, this.texture.frame.width = a.sourceSizeW, this.texture.frame.height = a.sourceSizeH),
		this.cropRect ? this.updateCrop() : this.game.renderType === b.WEBGL && PIXI.WebGLRenderer.updateTextureFrame(this.texture)
	},
	b.Sprite.prototype.resetFrame = function() {
		this._frame && this.setFrame(this._frame)
	},
	b.Sprite.prototype.crop = function(a, c) {
		"undefined" == typeof c && (c = !1),
		a ? (c && null !== this.cropRect ? this.cropRect.setTo(a.x, a.y, a.width, a.height) : this.cropRect = c && null === this.cropRect ? new b.Rectangle(a.x, a.y, a.width, a.height) : a, this.updateCrop()) : (this._crop = null, this.cropRect = null, this.resetFrame())
	},
	b.Sprite.prototype.updateCrop = function() {
		var a, c, d, e;
		this.cropRect && (this._crop = b.Rectangle.clone(this.cropRect, this._crop), this._crop.x += this._frame.x, this._crop.y += this._frame.y, a = Math.max(this._frame.x, this._crop.x), c = Math.max(this._frame.y, this._crop.y), d = Math.min(this._frame.right, this._crop.right) - a, e = Math.min(this._frame.bottom, this._crop.bottom) - c, this.texture.crop.x = a, this.texture.crop.y = c, this.texture.crop.width = d, this.texture.crop.height = e, this.texture.frame.width = Math.min(d, this.cropRect.width), this.texture.frame.height = Math.min(e, this.cropRect.height), this.texture.width = this.texture.frame.width, this.texture.height = this.texture.frame.height, this.game.renderType === b.WEBGL && PIXI.WebGLRenderer.updateTextureFrame(this.texture))
	},
	b.Sprite.prototype.revive = function(a) {
		return "undefined" == typeof a && (a = 1),
		this.alive = !0,
		this.exists = !0,
		this.visible = !0,
		this.health = a,
		this.events && this.events.onRevived.dispatch(this),
		this
	},
	b.Sprite.prototype.kill = function() {
		return this.alive = !1,
		this.exists = !1,
		this.visible = !1,
		this.events && this.events.onKilled.dispatch(this),
		this
	},
	b.Sprite.prototype.destroy = function(a) {
		if (null !== this.game && 1 !== this._cache[8]) {
			"undefined" == typeof a && (a = !0),
			this._cache[8] = 1,
			this.parent && (this.parent instanceof b.Group ? this.parent.remove(this) : this.parent.removeChild(this)),
			this.input && this.input.destroy(),
			this.animations && this.animations.destroy(),
			this.body && this.body.destroy(),
			this.events && this.events.destroy();
			var c = this.children.length;
			if (a) for (; c--;) this.children[c].destroy(a);
			else for (; c--;) this.removeChild(this.children[c]);
			this._crop && (this._crop = null),
			this._frame && (this._frame = null),
			this.alive = !1,
			this.exists = !1,
			this.visible = !1,
			this.filters = null,
			this.mask = null,
			this.game = null,
			this._cache[8] = 0
		}
	},
	b.Sprite.prototype.damage = function(a) {
		return this.alive && (this.health -= a, this.health <= 0 && this.kill()),
		this
	},
	b.Sprite.prototype.reset = function(a, b, c) {
		return "undefined" == typeof c && (c = 1),
		this.world.setTo(a, b),
		this.position.x = a,
		this.position.y = b,
		this.alive = !0,
		this.exists = !0,
		this.visible = !0,
		this.renderable = !0,
		this._outOfBoundsFired = !1,
		this.health = c,
		this.body && this.body.reset(a, b, !1, !1),
		this._cache[4] = 1,
		this
	},
	b.Sprite.prototype.bringToTop = function() {
		return this.parent && this.parent.bringToTop(this),
		this
	},
	b.Sprite.prototype.play = function(a, b, c, d) {
		return this.animations ? this.animations.play(a, b, c, d) : void 0
	},
	b.Sprite.prototype.overlap = function(a) {
		return b.Rectangle.intersects(this.getBounds(), a.getBounds())
	},
	Object.defineProperty(b.Sprite.prototype, "angle", {
		get: function() {
			return b.Math.wrapAngle(b.Math.radToDeg(this.rotation))
		},
		set: function(a) {
			this.rotation = b.Math.degToRad(b.Math.wrapAngle(a))
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "deltaX", {
		get: function() {
			return this.world.x - this._cache[0]
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "deltaY", {
		get: function() {
			return this.world.y - this._cache[1]
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "deltaZ", {
		get: function() {
			return this.rotation - this._cache[2]
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "inWorld", {
		get: function() {
			return this.game.world.bounds.intersects(this.getBounds())
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "inCamera", {
		get: function() {
			return this.game.world.camera.screenView.intersects(this.getBounds())
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "frame", {
		get: function() {
			return this.animations.frame
		},
		set: function(a) {
			this.animations.frame = a
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "frameName", {
		get: function() {
			return this.animations.frameName
		},
		set: function(a) {
			this.animations.frameName = a
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "renderOrderID", {
		get: function() {
			return this._cache[3]
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "inputEnabled", {
		get: function() {
			return this.input && this.input.enabled
		},
		set: function(a) {
			a ? null === this.input ? (this.input = new b.InputHandler(this), this.input.start()) : this.input && !this.input.enabled && this.input.start() : this.input && this.input.enabled && this.input.stop()
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "exists", {
		get: function() {
			return !! this._cache[6]
		},
		set: function(a) {
			a ? (this._cache[6] = 1, this.body && this.body.type === b.Physics.P2JS && this.body.addToWorld(), this.visible = !0) : (this._cache[6] = 0, this.body && this.body.type === b.Physics.P2JS && this.body.removeFromWorld(), this.visible = !1)
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "fixedToCamera", {
		get: function() {
			return !! this._cache[7]
		},
		set: function(a) {
			a ? (this._cache[7] = 1, this.cameraOffset.set(this.x, this.y)) : this._cache[7] = 0
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "smoothed", {
		get: function() {
			return ! this.texture.baseTexture.scaleMode
		},
		set: function(a) {
			a ? this.texture && (this.texture.baseTexture.scaleMode = 0) : this.texture && (this.texture.baseTexture.scaleMode = 1)
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "x", {
		get: function() {
			return this.position.x
		},
		set: function(a) {
			this.position.x = a,
			this.body && this.body.type === b.Physics.ARCADE && 2 === this.body.phase && (this.body._reset = 1)
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "y", {
		get: function() {
			return this.position.y
		},
		set: function(a) {
			this.position.y = a,
			this.body && this.body.type === b.Physics.ARCADE && 2 === this.body.phase && (this.body._reset = 1)
		}
	}),
	Object.defineProperty(b.Sprite.prototype, "destroyPhase", {
		get: function() {
			return !! this._cache[8]
		}
	}),
	b.Image = function(a, c, d, e, f) {
		c = c || 0,
		d = d || 0,
		e = e || null,
		f = f || null,
		this.game = a,
		this.exists = !0,
		this.name = "",
		this.type = b.IMAGE,
		this.z = 0,
		this.events = new b.Events(this),
		this.key = e,
		this._frame = 0,
		this._frameName = "",
		PIXI.Sprite.call(this, PIXI.TextureCache["__default"]),
		this.loadTexture(e, f),
		this.position.set(c, d),
		this.world = new b.Point(c, d),
		this.autoCull = !1,
		this.input = null,
		this.cameraOffset = new b.Point,
		this._cache = [0, 0, 0, 0, 1, 0, 1, 0, 0]
	},
	b.Image.prototype = Object.create(PIXI.Sprite.prototype),
	b.Image.prototype.constructor = b.Image,
	b.Image.prototype.preUpdate = function() {
		if (this._cache[0] = this.world.x, this._cache[1] = this.world.y, this._cache[2] = this.rotation, !this.exists || !this.parent.exists) return this._cache[3] = -1,
		!1;
		this.autoCull && (this.renderable = this.game.world.camera.screenView.intersects(this.getBounds())),
		this.world.setTo(this.game.camera.x + this.worldTransform.tx, this.game.camera.y + this.worldTransform.ty),
		this.visible && (this._cache[3] = this.game.stage.currentRenderOrderID++);
		for (var a = 0,
		b = this.children.length; b > a; a++) this.children[a].preUpdate();
		return ! 0
	},
	b.Image.prototype.update = function() {},
	b.Image.prototype.postUpdate = function() {
		this.key instanceof b.BitmapData && this.key.render(),
		1 === this._cache[7] && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y);
		for (var a = 0,
		c = this.children.length; c > a; a++) this.children[a].postUpdate()
	},
	b.Image.prototype.loadTexture = function(a, c) {
		if (c = c || 0, a instanceof b.RenderTexture) return this.key = a.key,
		this.setTexture(a),
		void 0;
		if (a instanceof b.BitmapData) return this.key = a,
		this.setTexture(a.texture),
		void 0;
		if (a instanceof PIXI.Texture) return this.key = a,
		this.setTexture(a),
		void 0;
		if (null === a || "undefined" == typeof a) return this.key = "__default",
		this.setTexture(PIXI.TextureCache[this.key]),
		void 0;
		if ("string" == typeof a && !this.game.cache.checkImageKey(a)) return this.key = "__missing",
		this.setTexture(PIXI.TextureCache[this.key]),
		void 0;
		if (this.game.cache.isSpriteSheet(a)) {
			this.key = a;
			var d = this.game.cache.getFrameData(a);
			return "string" == typeof c ? (this._frame = 0, this._frameName = c, this.setTexture(PIXI.TextureCache[d.getFrameByName(c).uuid]), void 0) : (this._frame = c, this._frameName = "", this.setTexture(PIXI.TextureCache[d.getFrame(c).uuid]), void 0)
		}
		return this.key = a,
		this.setTexture(PIXI.TextureCache[a]),
		void 0
	},
	b.Image.prototype.crop = function(a) {
		if ("undefined" == typeof a || null === a) this.texture.hasOwnProperty("sourceWidth") && this.texture.setFrame(new b.Rectangle(0, 0, this.texture.sourceWidth, this.texture.sourceHeight));
		else if (this.texture instanceof PIXI.Texture) {
			var c = {};
			b.Utils.extend(!0, c, this.texture),
			c.sourceWidth = c.width,
			c.sourceHeight = c.height,
			c.frame = a,
			c.width = a.width,
			c.height = a.height,
			this.texture = c,
			this.texture.updateFrame = !0,
			PIXI.Texture.frameUpdates.push(this.texture)
		} else this.texture.setFrame(a)
	},
	b.Image.prototype.revive = function() {
		return this.alive = !0,
		this.exists = !0,
		this.visible = !0,
		this.events && this.events.onRevived.dispatch(this),
		this
	},
	b.Image.prototype.kill = function() {
		return this.alive = !1,
		this.exists = !1,
		this.visible = !1,
		this.events && this.events.onKilled.dispatch(this),
		this
	},
	b.Image.prototype.destroy = function(a) {
		if (null !== this.game && !this.destroyPhase) {
			"undefined" == typeof a && (a = !0),
			this._cache[8] = 1,
			this.parent && (this.parent instanceof b.Group ? this.parent.remove(this) : this.parent.removeChild(this)),
			this.events && this.events.destroy(),
			this.input && this.input.destroy();
			var c = this.children.length;
			if (a) for (; c--;) this.children[c].destroy(a);
			else for (; c--;) this.removeChild(this.children[c]);
			this.alive = !1,
			this.exists = !1,
			this.visible = !1,
			this.filters = null,
			this.mask = null,
			this.game = null,
			this._cache[8] = 0
		}
	},
	b.Image.prototype.reset = function(a, b) {
		return this.world.setTo(a, b),
		this.position.x = a,
		this.position.y = b,
		this.alive = !0,
		this.exists = !0,
		this.visible = !0,
		this.renderable = !0,
		this
	},
	b.Image.prototype.bringToTop = function() {
		return this.parent && this.parent.bringToTop(this),
		this
	},
	Object.defineProperty(b.Image.prototype, "angle", {
		get: function() {
			return b.Math.wrapAngle(b.Math.radToDeg(this.rotation))
		},
		set: function(a) {
			this.rotation = b.Math.degToRad(b.Math.wrapAngle(a))
		}
	}),
	Object.defineProperty(b.Image.prototype, "deltaX", {
		get: function() {
			return this.world.x - this._cache[0]
		}
	}),
	Object.defineProperty(b.Image.prototype, "deltaY", {
		get: function() {
			return this.world.y - this._cache[1]
		}
	}),
	Object.defineProperty(b.Image.prototype, "deltaZ", {
		get: function() {
			return this.rotation - this._cache[2]
		}
	}),
	Object.defineProperty(b.Image.prototype, "inWorld", {
		get: function() {
			return this.game.world.bounds.intersects(this.getBounds())
		}
	}),
	Object.defineProperty(b.Image.prototype, "inCamera", {
		get: function() {
			return this.game.world.camera.screenView.intersects(this.getBounds())
		}
	}),
	Object.defineProperty(b.Image.prototype, "frame", {
		get: function() {
			return this._frame
		},
		set: function(a) {
			if (a !== this.frame && this.game.cache.isSpriteSheet(this.key)) {
				var b = this.game.cache.getFrameData(this.key);
				b && a < b.total && b.getFrame(a) && (this.setTexture(PIXI.TextureCache[b.getFrame(a).uuid]), this._frame = a)
			}
		}
	}),
	Object.defineProperty(b.Image.prototype, "frameName", {
		get: function() {
			return this._frameName
		},
		set: function(a) {
			if (a !== this.frameName && this.game.cache.isSpriteSheet(this.key)) {
				var b = this.game.cache.getFrameData(this.key);
				b && b.getFrameByName(a) && (this.setTexture(PIXI.TextureCache[b.getFrameByName(a).uuid]), this._frameName = a)
			}
		}
	}),
	Object.defineProperty(b.Image.prototype, "renderOrderID", {
		get: function() {
			return this._cache[3]
		}
	}),
	Object.defineProperty(b.Image.prototype, "inputEnabled", {
		get: function() {
			return this.input && this.input.enabled
		},
		set: function(a) {
			a ? null === this.input ? (this.input = new b.InputHandler(this), this.input.start()) : this.input && !this.input.enabled && this.input.start() : this.input && this.input.enabled && this.input.stop()
		}
	}),
	Object.defineProperty(b.Image.prototype, "fixedToCamera", {
		get: function() {
			return !! this._cache[7]
		},
		set: function(a) {
			a ? (this._cache[7] = 1, this.cameraOffset.set(this.x, this.y)) : this._cache[7] = 0
		}
	}),
	Object.defineProperty(b.Image.prototype, "smoothed", {
		get: function() {
			return ! this.texture.baseTexture.scaleMode
		},
		set: function(a) {
			a ? this.texture && (this.texture.baseTexture.scaleMode = 0) : this.texture && (this.texture.baseTexture.scaleMode = 1)
		}
	}),
	Object.defineProperty(b.Image.prototype, "destroyPhase", {
		get: function() {
			return !! this._cache[8]
		}
	}),
	b.TileSprite = function(a, c, d, e, f, g, h) {
		c = c || 0,
		d = d || 0,
		e = e || 256,
		f = f || 256,
		g = g || null,
		h = h || null,
		this.game = a,
		this.name = "",
		this.type = b.TILESPRITE,
		this.z = 0,
		this.events = new b.Events(this),
		this.animations = new b.AnimationManager(this),
		this.key = g,
		this._frame = 0,
		this._frameName = "",
		this._scroll = new b.Point,
		PIXI.TilingSprite.call(this, PIXI.TextureCache["__default"], e, f),
		this.position.set(c, d),
		this.input = null,
		this.world = new b.Point(c, d),
		this.autoCull = !1,
		this.checkWorldBounds = !1,
		this.cameraOffset = new b.Point,
		this.body = null,
		this._cache = [0, 0, 0, 0, 1, 0, 1, 0, 0],
		this.loadTexture(g, h)
	},
	b.TileSprite.prototype = Object.create(PIXI.TilingSprite.prototype),
	b.TileSprite.prototype.constructor = b.TileSprite,
	b.TileSprite.prototype.preUpdate = function() {
		if (1 === this._cache[4] && this.exists) return this.world.setTo(this.parent.position.x + this.position.x, this.parent.position.y + this.position.y),
		this.worldTransform.tx = this.world.x,
		this.worldTransform.ty = this.world.y,
		this._cache[0] = this.world.x,
		this._cache[1] = this.world.y,
		this._cache[2] = this.rotation,
		this.body && this.body.preUpdate(),
		this._cache[4] = 0,
		!1;
		if (this._cache[0] = this.world.x, this._cache[1] = this.world.y, this._cache[2] = this.rotation, !this.exists || !this.parent.exists) return this._cache[3] = -1,
		!1; (this.autoCull || this.checkWorldBounds) && this._bounds.copyFrom(this.getBounds()),
		this.autoCull && (this.renderable = this.game.world.camera.screenView.intersects(this._bounds)),
		this.checkWorldBounds && (1 === this._cache[5] && this.game.world.bounds.intersects(this._bounds) ? (this._cache[5] = 0, this.events.onEnterBounds.dispatch(this)) : 0 !== this._cache[5] || this.game.world.bounds.intersects(this._bounds) || (this._cache[5] = 1, this.events.onOutOfBounds.dispatch(this))),
		this.world.setTo(this.game.camera.x + this.worldTransform.tx, this.game.camera.y + this.worldTransform.ty),
		this.visible && (this._cache[3] = this.game.stage.currentRenderOrderID++),
		this.animations.update(),
		0 !== this._scroll.x && (this.tilePosition.x += this._scroll.x * this.game.time.physicsElapsed),
		0 !== this._scroll.y && (this.tilePosition.y += this._scroll.y * this.game.time.physicsElapsed),
		this.body && this.body.preUpdate();
		for (var a = 0,
		b = this.children.length; b > a; a++) this.children[a].preUpdate();
		return ! 0
	},
	b.TileSprite.prototype.update = function() {},
	b.TileSprite.prototype.postUpdate = function() {
		this.exists && this.body && this.body.postUpdate(),
		1 === this._cache[7] && (this.position.x = this.game.camera.view.x + this.cameraOffset.x, this.position.y = this.game.camera.view.y + this.cameraOffset.y);
		for (var a = 0,
		b = this.children.length; b > a; a++) this.children[a].postUpdate()
	},
	b.TileSprite.prototype.autoScroll = function(a, b) {
		this._scroll.set(a, b)
	},
	b.TileSprite.prototype.stopScroll = function() {
		this._scroll.set(0, 0)
	},
	b.TileSprite.prototype.loadTexture = function(a, c) {
		c = c || 0,
		this.key = a,
		a instanceof b.RenderTexture ? (this.key = a.key, this.setTexture(a)) : a instanceof b.BitmapData ? this.setTexture(a.texture) : a instanceof PIXI.Texture ? this.setTexture(a) : null === a || "undefined" == typeof a ? (this.key = "__default", this.setTexture(PIXI.TextureCache[this.key])) : "string" != typeof a || this.game.cache.checkImageKey(a) ? (this.setTexture(new PIXI.Texture(PIXI.BaseTextureCache[a])), this.animations.loadFrameData(this.game.cache.getFrameData(a), c)) : (console.warn("Texture with key '" + a + "' not found."), this.key = "__missing", this.setTexture(PIXI.TextureCache[this.key]))
	},
	b.TileSprite.prototype.setFrame = function(a) {
		this.texture.frame.x = a.x,
		this.texture.frame.y = a.y,
		this.texture.frame.width = a.width,
		this.texture.frame.height = a.height,
		this.texture.crop.x = a.x,
		this.texture.crop.y = a.y,
		this.texture.crop.width = a.width,
		this.texture.crop.height = a.height,
		a.trimmed && (this.texture.trim ? (this.texture.trim.x = a.spriteSourceSizeX, this.texture.trim.y = a.spriteSourceSizeY, this.texture.trim.width = a.sourceSizeW, this.texture.trim.height = a.sourceSizeH) : this.texture.trim = {
			x: a.spriteSourceSizeX,
			y: a.spriteSourceSizeY,
			width: a.sourceSizeW,
			height: a.sourceSizeH
		},
		this.texture.width = a.sourceSizeW, this.texture.height = a.sourceSizeH, this.texture.frame.width = a.sourceSizeW, this.texture.frame.height = a.sourceSizeH),
		this.game.renderType === b.WEBGL && PIXI.WebGLRenderer.updateTextureFrame(this.texture)
	},
	b.TileSprite.prototype.destroy = function(a) {
		if (null !== this.game && !this.destroyPhase) {
			"undefined" == typeof a && (a = !0),
			this._cache[8] = 1,
			this.filters && (this.filters = null),
			this.parent && (this.parent instanceof b.Group ? this.parent.remove(this) : this.parent.removeChild(this)),
			this.animations.destroy(),
			this.events.destroy();
			var c = this.children.length;
			if (a) for (; c--;) this.children[c].destroy(a);
			else for (; c--;) this.removeChild(this.children[c]);
			this.exists = !1,
			this.visible = !1,
			this.filters = null,
			this.mask = null,
			this.game = null,
			this._cache[8] = 0
		}
	},
	b.TileSprite.prototype.play = function(a, b, c, d) {
		return this.animations.play(a, b, c, d)
	},
	b.TileSprite.prototype.reset = function(a, b) {
		return this.world.setTo(a, b),
		this.position.x = a,
		this.position.y = b,
		this.alive = !0,
		this.exists = !0,
		this.visible = !0,
		this.renderable = !0,
		this._outOfBoundsFired = !1,
		this.tilePosition.x = 0,
		this.tilePosition.y = 0,
		this.body && this.body.reset(a, b, !1, !1),
		this._cache[4] = 1,
		this
	},
	Object.defineProperty(b.TileSprite.prototype, "angle", {
		get: function() {
			return b.Math.wrapAngle(b.Math.radToDeg(this.rotation))
		},
		set: function(a) {
			this.rotation = b.Math.degToRad(b.Math.wrapAngle(a))
		}
	}),
	Object.defineProperty(b.TileSprite.prototype, "frame", {
		get: function() {
			return this.animations.frame
		},
		set: function(a) {
			a !== this.animations.frame && (this.animations.frame = a)
		}
	}),
	Object.defineProperty(b.TileSprite.prototype, "frameName", {
		get: function() {
			return this.animations.frameName
		},
		set: function(a) {
			a !== this.animations.frameName && (this.animations.frameName = a)
		}
	}),
	Object.defineProperty(b.TileSprite.prototype, "fixedToCamera", {
		get: function() {
			return !! this._cache[7]
		},
		set: function(a) {
			a ? (this._cache[7] = 1, this.cameraOffset.set(this.x, this.y)) : this._cache[7] = 0
		}
	}),
	Object.defineProperty(b.TileSprite.prototype, "exists", {
		get: function() {
			return !! this._cache[6]
		},
		set: function(a) {
			a ? (this._cache[6] = 1, this.body && this.body.type === b.Physics.P2JS && this.body.addToWorld(), this.visible = !0) : (this._cache[6] = 0, this.body && this.body.type === b.Physics.P2JS && (this.body.safeRemove = !0), this.visible = !1)
		}
	}),
	Object.defineProperty(b.TileSprite.prototype, "inputEnabled", {
		get: function() {
			return this.input && this.input.enabled
		},
		set: function(a) {
			a ? null === this.input ? (this.input = new b.InputHandler(this), this.input.start()) : this.input && !this.input.enabled && this.input.start() : this.input && this.input.enabled && this.input.stop()
		}
	}),
	Object.defineProperty(b.TileSprite.prototype, "x", {
		get: function() {
			return this.position.x
		},
		set: function(a) {
			this.position.x = a,
			this.body && this.body.type === b.Physics.ARCADE && 2 === this.body.phase && (this.body._reset = 1)
		}
	}),
	Object.defineProperty(b.TileSprite.prototype, "y", {
		get: function() {
			return this.position.y
		},
		set: function(a) {
			this.position.y = a,
			this.body && this.body.type === b.Physics.ARCADE && 2 === this.body.phase && (this.body._reset = 1)
		}
	}),
	Object.defineProperty(b.TileSprite.prototype, "destroyPhase", {
		get: function() {
			return !! this._cache[8]
		}
	}),
	b.Text = function(a, c, d, e, f) {
		c = c || 0,
		d = d || 0,
		e = e || " ",
		f = f || {},
		e = 0 === e.length ? " ": e.toString(),
		this.game = a,
		this.exists = !0,
		this.name = "",
		this.type = b.TEXT,
		this.z = 0,
		this.world = new b.Point(c, d),
		this._text = e,
		this._font = "",
		this._fontSize = 32,
		this._fontWeight = "normal",
		this._lineSpacing = 0,
		this.events = new b.Events(this),
		this.input = null,
		this.cameraOffset = new b.Point,
		this.setStyle(f),
		PIXI.Text.call(this, e, this.style),
		this.position.set(c, d),
		this._cache = [0, 0, 0, 0, 1, 0, 1, 0, 0]
	},
	b.Text.prototype = Object.create(PIXI.Text.prototype),
	b.Text.prototype.constructor = b.Text,
	b.Text.prototype.preUpdate = function() {
		if (this._cache[0] = this.world.x, this._cache[1] = this.world.y, this._cache[2] = this.rotation, !this.exists || !this.parent.exists) return this.renderOrderID = -1,
		!1;
		this.autoCull && (this.renderable = this.game.world.camera.screenView.intersects(this.getBounds())),
		this.world.setTo(this.game.camera.x + this.worldTransform.tx, this.game.camera.y + this.worldTransform.ty),
		this.visible && (this._cache[3] = this.game.stage.currentRenderOrderID++);
		for (var a = 0,
		b = this.children.length; b > a; a++) this.children[a].preUpdate();
		return ! 0
	},
	b.Text.prototype.update = function() {},
	b.Text.prototype.postUpdate = function() {
		1 === this._cache[7] && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y);
		for (var a = 0,
		b = this.children.length; b > a; a++) this.children[a].postUpdate()
	},
	b.Text.prototype.destroy = function(a) {
		if (null !== this.game && !this.destroyPhase) {
			"undefined" == typeof a && (a = !0),
			this._cache[8] = 1,
			this.parent && (this.parent instanceof b.Group ? this.parent.remove(this) : this.parent.removeChild(this)),
			this.texture.destroy(),
			this.canvas.parentNode ? this.canvas.parentNode.removeChild(this.canvas) : (this.canvas = null, this.context = null);
			var c = this.children.length;
			if (a) for (; c--;) this.children[c].destroy(a);
			else for (; c--;) this.removeChild(this.children[c]);
			this.exists = !1,
			this.visible = !1,
			this.filters = null,
			this.mask = null,
			this.game = null,
			this._cache[8] = 0
		}
	},
	b.Text.prototype.setShadow = function(a, b, c, d) {
		this.style.shadowOffsetX = a || 0,
		this.style.shadowOffsetY = b || 0,
		this.style.shadowColor = c || "rgba(0,0,0,0)",
		this.style.shadowBlur = d || 0,
		this.dirty = !0
	},
	b.Text.prototype.setStyle = function(a) {
		a = a || {},
		a.font = a.font || "bold 20pt Arial",
		a.fill = a.fill || "black",
		a.align = a.align || "left",
		a.stroke = a.stroke || "black",
		a.strokeThickness = a.strokeThickness || 0,
		a.wordWrap = a.wordWrap || !1,
		a.wordWrapWidth = a.wordWrapWidth || 100,
		a.shadowOffsetX = a.shadowOffsetX || 0,
		a.shadowOffsetY = a.shadowOffsetY || 0,
		a.shadowColor = a.shadowColor || "rgba(0,0,0,0)",
		a.shadowBlur = a.shadowBlur || 0,
		this.style = a,
		this.dirty = !0
	},
	b.Text.prototype.updateText = function() {
		var a, b, c, d, e, f, g, h;
		for (this.context.font = this.style.font, a = this.text, this.style.wordWrap && (a = this.runWordWrap(this.text)), b = a.split(/(?:\r\n|\r|\n)/), c = [], d = 0, e = 0; e < b.length; e++) f = this.context.measureText(b[e]).width,
		c[e] = f,
		d = Math.max(d, f);
		for (this.canvas.width = d + this.style.strokeThickness, g = this.determineFontHeight("font: " + this.style.font + ";") + this.style.strokeThickness + this._lineSpacing + this.style.shadowOffsetY, this.canvas.height = g * b.length, navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.fillStyle = this.style.fill, this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.shadowOffsetX = this.style.shadowOffsetX, this.context.shadowOffsetY = this.style.shadowOffsetY, this.context.shadowColor = this.style.shadowColor, this.context.shadowBlur = this.style.shadowBlur, this.context.textBaseline = "top", this.context.lineCap = "round", this.context.lineJoin = "round", e = 0; e < b.length; e++) h = new PIXI.Point(this.style.strokeThickness / 2, this.style.strokeThickness / 2 + e * g),
		"right" === this.style.align ? h.x += d - c[e] : "center" === this.style.align && (h.x += (d - c[e]) / 2),
		h.y += this._lineSpacing,
		this.style.stroke && this.style.strokeThickness && this.context.strokeText(b[e], h.x, h.y),
		this.style.fill && this.context.fillText(b[e], h.x, h.y);
		this.updateTexture()
	},
	b.Text.prototype.runWordWrap = function(a) {
		var d, e, f, g, h, i, b = "",
		c = a.split("\n");
		for (d = 0; d < c.length; d++) {
			for (e = this.style.wordWrapWidth, f = c[d].split(" "), g = 0; g < f.length; g++) h = this.context.measureText(f[g]).width,
			i = h + this.context.measureText(" ").width,
			i > e ? (g > 0 && (b += "\n"), b += f[g] + " ", e = this.style.wordWrapWidth - h) : (e -= i, b += f[g] + " ");
			d < c.length - 1 && (b += "\n")
		}
		return b
	},
	Object.defineProperty(b.Text.prototype, "angle", {
		get: function() {
			return b.Math.radToDeg(this.rotation)
		},
		set: function(a) {
			this.rotation = b.Math.degToRad(a)
		}
	}),
	Object.defineProperty(b.Text.prototype, "text", {
		get: function() {
			return this._text
		},
		set: function(a) {
			a !== this._text && (this._text = a.toString() || " ", this.dirty = !0, this.updateTransform())
		}
	}),
	Object.defineProperty(b.Text.prototype, "font", {
		get: function() {
			return this._font
		},
		set: function(a) {
			a !== this._font && (this._font = a.trim(), this.style.font = this._fontWeight + " " + this._fontSize + "px '" + this._font + "'", this.dirty = !0, this.updateTransform())
		}
	}),
	Object.defineProperty(b.Text.prototype, "fontSize", {
		get: function() {
			return this._fontSize
		},
		set: function(a) {
			a = parseInt(a, 10),
			a !== this._fontSize && (this._fontSize = a, this.style.font = this._fontWeight + " " + this._fontSize + "px '" + this._font + "'", this.dirty = !0, this.updateTransform())
		}
	}),
	Object.defineProperty(b.Text.prototype, "fontWeight", {
		get: function() {
			return this._fontWeight
		},
		set: function(a) {
			a !== this._fontWeight && (this._fontWeight = a, this.style.font = this._fontWeight + " " + this._fontSize + "px '" + this._font + "'", this.dirty = !0, this.updateTransform())
		}
	}),
	Object.defineProperty(b.Text.prototype, "fill", {
		get: function() {
			return this.style.fill
		},
		set: function(a) {
			a !== this.style.fill && (this.style.fill = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "align", {
		get: function() {
			return this.style.align
		},
		set: function(a) {
			a !== this.style.align && (this.style.align = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "stroke", {
		get: function() {
			return this.style.stroke
		},
		set: function(a) {
			a !== this.style.stroke && (this.style.stroke = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "strokeThickness", {
		get: function() {
			return this.style.strokeThickness
		},
		set: function(a) {
			a !== this.style.strokeThickness && (this.style.strokeThickness = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "wordWrap", {
		get: function() {
			return this.style.wordWrap
		},
		set: function(a) {
			a !== this.style.wordWrap && (this.style.wordWrap = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "wordWrapWidth", {
		get: function() {
			return this.style.wordWrapWidth
		},
		set: function(a) {
			a !== this.style.wordWrapWidth && (this.style.wordWrapWidth = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "lineSpacing", {
		get: function() {
			return this._lineSpacing
		},
		set: function(a) {
			a !== this._lineSpacing && (this._lineSpacing = parseFloat(a), this.dirty = !0, this.updateTransform())
		}
	}),
	Object.defineProperty(b.Text.prototype, "shadowOffsetX", {
		get: function() {
			return this.style.shadowOffsetX
		},
		set: function(a) {
			a !== this.style.shadowOffsetX && (this.style.shadowOffsetX = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "shadowOffsetY", {
		get: function() {
			return this.style.shadowOffsetY
		},
		set: function(a) {
			a !== this.style.shadowOffsetY && (this.style.shadowOffsetY = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "shadowColor", {
		get: function() {
			return this.style.shadowColor
		},
		set: function(a) {
			a !== this.style.shadowColor && (this.style.shadowColor = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "shadowBlur", {
		get: function() {
			return this.style.shadowBlur
		},
		set: function(a) {
			a !== this.style.shadowBlur && (this.style.shadowBlur = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.Text.prototype, "inputEnabled", {
		get: function() {
			return this.input && this.input.enabled
		},
		set: function(a) {
			a ? null === this.input ? (this.input = new b.InputHandler(this), this.input.start()) : this.input && !this.input.enabled && this.input.start() : this.input && this.input.enabled && this.input.stop()
		}
	}),
	Object.defineProperty(b.Text.prototype, "fixedToCamera", {
		get: function() {
			return !! this._cache[7]
		},
		set: function(a) {
			a ? (this._cache[7] = 1, this.cameraOffset.set(this.x, this.y)) : this._cache[7] = 0
		}
	}),
	Object.defineProperty(b.Text.prototype, "destroyPhase", {
		get: function() {
			return !! this._cache[8]
		}
	}),
	b.BitmapText = function(a, c, d, e, f, g) {
		c = c || 0,
		d = d || 0,
		e = e || "",
		f = f || "",
		g = g || 32,
		this.game = a,
		this.exists = !0,
		this.name = "",
		this.type = b.BITMAPTEXT,
		this.z = 0,
		this.world = new b.Point(c, d),
		this._text = f,
		this._font = e,
		this._fontSize = g,
		this._align = "left",
		this._tint = 16777215,
		this.events = new b.Events(this),
		this.input = null,
		this.cameraOffset = new b.Point,
		PIXI.BitmapText.call(this, f),
		this.position.set(c, d),
		this._cache = [0, 0, 0, 0, 1, 0, 1, 0, 0]
	},
	b.BitmapText.prototype = Object.create(PIXI.BitmapText.prototype),
	b.BitmapText.prototype.constructor = b.BitmapText,
	b.BitmapText.prototype.setStyle = function() {
		this.style = {
			align: this._align
		},
		this.fontName = this._font,
		this.fontSize = this._fontSize,
		this.dirty = !0
	},
	b.BitmapText.prototype.preUpdate = function() {
		return this._cache[0] = this.world.x,
		this._cache[1] = this.world.y,
		this._cache[2] = this.rotation,
		this.exists && this.parent.exists ? (this.autoCull && (this.renderable = this.game.world.camera.screenView.intersects(this.getBounds())), this.world.setTo(this.game.camera.x + this.worldTransform.tx, this.game.camera.y + this.worldTransform.ty), this.visible && (this._cache[3] = this.game.stage.currentRenderOrderID++), !0) : (this.renderOrderID = -1, !1)
	},
	b.BitmapText.prototype.update = function() {},
	b.BitmapText.prototype.postUpdate = function() {
		1 === this._cache[7] && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y)
	},
	b.BitmapText.prototype.destroy = function(a) {
		if (null !== this.game && !this.destroyPhase) {
			"undefined" == typeof a && (a = !0),
			this._cache[8] = 1,
			this.parent && (this.parent instanceof b.Group ? this.parent.remove(this) : this.parent.removeChild(this));
			var c = this.children.length;
			if (a) for (; c--;) this.children[c].destroy ? this.children[c].destroy(a) : this.removeChild(this.children[c]);
			else for (; c--;) this.removeChild(this.children[c]);
			this.exists = !1,
			this.visible = !1,
			this.filters = null,
			this.mask = null,
			this.game = null,
			this._cache[8] = 0
		}
	},
	Object.defineProperty(b.BitmapText.prototype, "align", {
		get: function() {
			return this._align
		},
		set: function(a) {
			a !== this._align && (this._align = a, this.setStyle())
		}
	}),
	Object.defineProperty(b.BitmapText.prototype, "tint", {
		get: function() {
			return this._tint
		},
		set: function(a) {
			a !== this._tint && (this._tint = a, this.dirty = !0)
		}
	}),
	Object.defineProperty(b.BitmapText.prototype, "angle", {
		get: function() {
			return b.Math.radToDeg(this.rotation)
		},
		set: function(a) {
			this.rotation = b.Math.degToRad(a)
		}
	}),
	Object.defineProperty(b.BitmapText.prototype, "font", {
		get: function() {
			return this._font
		},
		set: function(a) {
			a !== this._font && (this._font = a.trim(), this.style.font = this._fontSize + "px '" + this._font + "'", this.dirty = !0)
		}
	}),
	Object.defineProperty(b.BitmapText.prototype, "fontSize", {
		get: function() {
			return this._fontSize
		},
		set: function(a) {
			a = parseInt(a, 10),
			a !== this._fontSize && (this._fontSize = a, this.style.font = this._fontSize + "px '" + this._font + "'", this.dirty = !0)
		}
	}),
	Object.defineProperty(b.BitmapText.prototype, "text", {
		get: function() {
			return this._text
		},
		set: function(a) {
			a !== this._text && (this._text = a.toString() || " ", this.dirty = !0)
		}
	}),
	Object.defineProperty(b.BitmapText.prototype, "inputEnabled", {
		get: function() {
			return this.input && this.input.enabled
		},
		set: function(a) {
			a ? null === this.input ? (this.input = new b.InputHandler(this), this.input.start()) : this.input && !this.input.enabled && this.input.start() : this.input && this.input.enabled && this.input.stop()
		}
	}),
	Object.defineProperty(b.BitmapText.prototype, "fixedToCamera", {
		get: function() {
			return !! this._cache[7]
		},
		set: function(a) {
			a ? (this._cache[7] = 1, this.cameraOffset.set(this.x, this.y)) : this._cache[7] = 0
		}
	}),
	Object.defineProperty(b.BitmapText.prototype, "destroyPhase", {
		get: function() {
			return !! this._cache[8]
		}
	}),
	b.Button = function(a, c, d, e, f, g, h, i, j, k) {
		c = c || 0,
		d = d || 0,
		e = e || null,
		f = f || null,
		g = g || this,
		b.Image.call(this, a, c, d, e, i),
		this.type = b.BUTTON,
		this._onOverFrameName = null,
		this._onOutFrameName = null,
		this._onDownFrameName = null,
		this._onUpFrameName = null,
		this._onOverFrameID = null,
		this._onOutFrameID = null,
		this._onDownFrameID = null,
		this._onUpFrameID = null,
		this.onOverMouseOnly = !1,
		this.onOverSound = null,
		this.onOutSound = null,
		this.onDownSound = null,
		this.onUpSound = null,
		this.onOverSoundMarker = "",
		this.onOutSoundMarker = "",
		this.onDownSoundMarker = "",
		this.onUpSoundMarker = "",
		this.onInputOver = new b.Signal,
		this.onInputOut = new b.Signal,
		this.onInputDown = new b.Signal,
		this.onInputUp = new b.Signal,
		this.freezeFrames = !1,
		this.forceOut = !1,
		this.inputEnabled = !0,
		this.input.start(0, !0),
		this.setFrames(h, i, j, k),
		null !== f && this.onInputUp.add(f, g),
		this.events.onInputOver.add(this.onInputOverHandler, this),
		this.events.onInputOut.add(this.onInputOutHandler, this),
		this.events.onInputDown.add(this.onInputDownHandler, this),
		this.events.onInputUp.add(this.onInputUpHandler, this)
	},
	b.Button.prototype = Object.create(b.Image.prototype),
	b.Button.prototype.constructor = b.Button,
	b.Button.prototype.clearFrames = function() {
		this._onOverFrameName = null,
		this._onOverFrameID = null,
		this._onOutFrameName = null,
		this._onOutFrameID = null,
		this._onDownFrameName = null,
		this._onDownFrameID = null,
		this._onUpFrameName = null,
		this._onUpFrameID = null
	},
	b.Button.prototype.setFrames = function(a, b, c, d) {
		this.clearFrames(),
		null !== a && ("string" == typeof a ? (this._onOverFrameName = a, this.input.pointerOver() && (this.frameName = a)) : (this._onOverFrameID = a, this.input.pointerOver() && (this.frame = a))),
		null !== b && ("string" == typeof b ? (this._onOutFrameName = b, this.input.pointerOver() === !1 && (this.frameName = b)) : (this._onOutFrameID = b, this.input.pointerOver() === !1 && (this.frame = b))),
		null !== c && ("string" == typeof c ? (this._onDownFrameName = c, this.input.pointerDown() && (this.frameName = c)) : (this._onDownFrameID = c, this.input.pointerDown() && (this.frame = c))),
		null !== d && ("string" == typeof d ? (this._onUpFrameName = d, this.input.pointerUp() && (this.frameName = d)) : (this._onUpFrameID = d, this.input.pointerUp() && (this.frame = d)))
	},
	b.Button.prototype.setSounds = function(a, b, c, d, e, f, g, h) {
		this.setOverSound(a, b),
		this.setOutSound(e, f),
		this.setDownSound(c, d),
		this.setUpSound(g, h)
	},
	b.Button.prototype.setOverSound = function(a, c) {
		this.onOverSound = null,
		this.onOverSoundMarker = "",
		a instanceof b.Sound && (this.onOverSound = a),
		"string" == typeof c && (this.onOverSoundMarker = c)
	},
	b.Button.prototype.setOutSound = function(a, c) {
		this.onOutSound = null,
		this.onOutSoundMarker = "",
		a instanceof b.Sound && (this.onOutSound = a),
		"string" == typeof c && (this.onOutSoundMarker = c)
	},
	b.Button.prototype.setDownSound = function(a, c) {
		this.onDownSound = null,
		this.onDownSoundMarker = "",
		a instanceof b.Sound && (this.onDownSound = a),
		"string" == typeof c && (this.onDownSoundMarker = c)
	},
	b.Button.prototype.setUpSound = function(a, c) {
		this.onUpSound = null,
		this.onUpSoundMarker = "",
		a instanceof b.Sound && (this.onUpSound = a),
		"string" == typeof c && (this.onUpSoundMarker = c)
	},
	b.Button.prototype.onInputOverHandler = function(a, b) {
		this.freezeFrames === !1 && this.setState(1),
		(!this.onOverMouseOnly || b.isMouse) && (this.onOverSound && this.onOverSound.play(this.onOverSoundMarker), this.onInputOver && this.onInputOver.dispatch(this, b))
	},
	b.Button.prototype.onInputOutHandler = function(a, b) {
		this.freezeFrames === !1 && this.setState(2),
		this.onOutSound && this.onOutSound.play(this.onOutSoundMarker),
		this.onInputOut && this.onInputOut.dispatch(this, b)
	},
	b.Button.prototype.onInputDownHandler = function(a, b) {
		this.freezeFrames === !1 && this.setState(3),
		this.onDownSound && this.onDownSound.play(this.onDownSoundMarker),
		this.onInputDown && this.onInputDown.dispatch(this, b)
	},
	b.Button.prototype.onInputUpHandler = function(a, b, c) {
		this.onUpSound && this.onUpSound.play(this.onUpSoundMarker),
		this.onInputUp && this.onInputUp.dispatch(this, b, c),
		this.freezeFrames || (this.forceOut ? this.setState(2) : null !== this._onUpFrameName || null !== this._onUpFrameID ? this.setState(4) : c ? this.setState(1) : this.setState(2))
	},
	b.Button.prototype.setState = function(a) {
		1 === a ? null != this._onOverFrameName ? this.frameName = this._onOverFrameName: null != this._onOverFrameID && (this.frame = this._onOverFrameID) : 2 === a ? null != this._onOutFrameName ? this.frameName = this._onOutFrameName: null != this._onOutFrameID && (this.frame = this._onOutFrameID) : 3 === a ? null != this._onDownFrameName ? this.frameName = this._onDownFrameName: null != this._onDownFrameID && (this.frame = this._onDownFrameID) : 4 === a && (null != this._onUpFrameName ? this.frameName = this._onUpFrameName: null != this._onUpFrameID && (this.frame = this._onUpFrameID))
	},
	b.Graphics = function(a, c, d) {
		c = c || 0,
		d = d || 0,
		this.game = a,
		this.exists = !0,
		this.name = "",
		this.type = b.GRAPHICS,
		this.z = 0,
		this.world = new b.Point(c, d),
		this.cameraOffset = new b.Point,
		PIXI.Graphics.call(this),
		this.position.set(c, d),
		this._cache = [0, 0, 0, 0, 1, 0, 1, 0, 0]
	},
	b.Graphics.prototype = Object.create(PIXI.Graphics.prototype),
	b.Graphics.prototype.constructor = b.Graphics,
	b.Graphics.prototype.preUpdate = function() {
		return this._cache[0] = this.world.x,
		this._cache[1] = this.world.y,
		this._cache[2] = this.rotation,
		this.exists && this.parent.exists ? (this.autoCull && (this.renderable = this.game.world.camera.screenView.intersects(this.getBounds())), this.world.setTo(this.game.camera.x + this.worldTransform.tx, this.game.camera.y + this.worldTransform.ty), this.visible && (this._cache[3] = this.game.stage.currentRenderOrderID++), !0) : (this.renderOrderID = -1, !1)
	},
	b.Graphics.prototype.update = function() {},
	b.Graphics.prototype.postUpdate = function() {
		1 === this._cache[7] && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y)
	},
	b.Graphics.prototype.destroy = function(a) {
		if (null !== this.game && !this.destroyPhase) {
			"undefined" == typeof a && (a = !0),
			this._cache[8] = 1,
			this.clear(),
			this.parent && (this.parent instanceof b.Group ? this.parent.remove(this) : this.parent.removeChild(this));
			var c = this.children.length;
			if (a) for (; c--;) this.children[c].destroy(a);
			else for (; c--;) this.removeChild(this.children[c]);
			this.exists = !1,
			this.visible = !1,
			this.game = null,
			this._cache[8] = 0
		}
	},
	b.Graphics.prototype.drawPolygon = function(a) {
		this.moveTo(a.points[0].x, a.points[0].y);
		for (var b = 1; b < a.points.length; b += 1) this.lineTo(a.points[b].x, a.points[b].y);
		this.lineTo(a.points[0].x, a.points[0].y)
	},
	b.Graphics.prototype.drawTriangle = function(a, c) {
		var d, e, f, g, h;
		"undefined" == typeof c && (c = !1),
		d = new b.Polygon(a),
		c ? (e = new b.Point(this.game.camera.x - a[0].x, this.game.camera.y - a[0].y), f = new b.Point(a[1].x - a[0].x, a[1].y - a[0].y), g = new b.Point(a[1].x - a[2].x, a[1].y - a[2].y), h = g.cross(f), e.dot(h) > 0 && this.drawPolygon(d)) : this.drawPolygon(d)
	},
	b.Graphics.prototype.drawTriangles = function(a, c, d) {
		var e, f, g, h, i;
		if ("undefined" == typeof d && (d = !1), e = new b.Point, f = new b.Point, g = new b.Point, h = [], c) if (a[0] instanceof b.Point) for (i = 0; i < c.length / 3; i++) h.push(a[c[3 * i]]),
		h.push(a[c[3 * i + 1]]),
		h.push(a[c[3 * i + 2]]),
		3 === h.length && (this.drawTriangle(h, d), h = []);
		else for (i = 0; i < c.length; i++) e.x = a[2 * c[i]],
		e.y = a[2 * c[i] + 1],
		h.push(e.copyTo({})),
		3 === h.length && (this.drawTriangle(h, d), h = []);
		else if (a[0] instanceof b.Point) for (i = 0; i < a.length / 3; i++) this.drawTriangle([a[3 * i], a[3 * i + 1], a[3 * i + 2]], d);
		else for (i = 0; i < a.length / 6; i++) e.x = a[6 * i + 0],
		e.y = a[6 * i + 1],
		f.x = a[6 * i + 2],
		f.y = a[6 * i + 3],
		g.x = a[6 * i + 4],
		g.y = a[6 * i + 5],
		this.drawTriangle([e, f, g], d)
	},
	Object.defineProperty(b.Graphics.prototype, "angle", {
		get: function() {
			return b.Math.radToDeg(this.rotation)
		},
		set: function(a) {
			this.rotation = b.Math.degToRad(a)
		}
	}),
	Object.defineProperty(b.Graphics.prototype, "fixedToCamera", {
		get: function() {
			return !! this._cache[7]
		},
		set: function(a) {
			a ? (this._cache[7] = 1, this.cameraOffset.set(this.x, this.y)) : this._cache[7] = 0
		}
	}),
	Object.defineProperty(b.Graphics.prototype, "destroyPhase", {
		get: function() {
			return !! this._cache[8]
		}
	}),
	b.RenderTexture = function(a, c, d, e, f) {
		"undefined" == typeof e && (e = ""),
		"undefined" == typeof f && (f = b.scaleModes.DEFAULT),
		this.game = a,
		this.key = e,
		this.type = b.RENDERTEXTURE,
		this._temp = new b.Point,
		PIXI.RenderTexture.call(this, c, d, this.game.renderer, f)
	},
	b.RenderTexture.prototype = Object.create(PIXI.RenderTexture.prototype),
	b.RenderTexture.prototype.constructor = b.RenderTexture,
	b.RenderTexture.prototype.renderXY = function(a, b, c, d) {
		this._temp.set(b, c),
		this.render(a, this._temp, d)
	},
	b.SpriteBatch = function(a, c, d, e) { ("undefined" == typeof c || null === c) && (c = a.world),
		PIXI.SpriteBatch.call(this),
		b.Group.call(this, a, c, d, e),
		this.type = b.SPRITEBATCH
	},
	b.SpriteBatch.prototype = b.Utils.extend(!0, b.SpriteBatch.prototype, b.Group.prototype, PIXI.SpriteBatch.prototype),
	b.SpriteBatch.prototype.constructor = b.SpriteBatch,
	b.RetroFont = function(a, c, d, e, f, g, h, i, j, k) {
		var l, m, n, o, p, q, r;
		if (!a.cache.checkImageKey(c)) return ! 1;
		for (("undefined" == typeof g || null === g) && (g = a.cache.getImage(c).width / d), this.characterWidth = d, this.characterHeight = e, this.characterSpacingX = h || 0, this.characterSpacingY = i || 0, this.characterPerRow = g, this.offsetX = j || 0, this.offsetY = k || 0, this.align = "left", this.multiLine = !1, this.autoUpperCase = !0, this.customSpacingX = 0, this.customSpacingY = 0, this.fixedWidth = 0, this.fontSet = a.cache.getImage(c), this._text = "", this.grabData = [], l = this.offsetX, m = this.offsetY, n = 0, o = new b.FrameData, p = 0; p < f.length; p++) q = a.rnd.uuid(),
		r = o.addFrame(new b.Frame(p, l, m, this.characterWidth, this.characterHeight, "", q)),
		this.grabData[f.charCodeAt(p)] = r.index,
		PIXI.TextureCache[q] = new PIXI.Texture(PIXI.BaseTextureCache[c], {
			x: l,
			y: m,
			width: this.characterWidth,
			height: this.characterHeight
		}),
		n++,
		n == this.characterPerRow ? (n = 0, l = this.offsetX, m += this.characterHeight + this.characterSpacingY) : l += this.characterWidth + this.characterSpacingX;
		a.cache.updateFrameData(c, o),
		this.stamp = new b.Image(a, 0, 0, c, 0),
		b.RenderTexture.call(this, a, 100, 100, "", b.scaleModes.NEAREST),
		this.type = b.RETROFONT
	},
	b.RetroFont.prototype = Object.create(b.RenderTexture.prototype),
	b.RetroFont.prototype.constructor = b.RetroFont,
	b.RetroFont.ALIGN_LEFT = "left",
	b.RetroFont.ALIGN_RIGHT = "right",
	b.RetroFont.ALIGN_CENTER = "center",
	b.RetroFont.TEXT_SET1 = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
	b.RetroFont.TEXT_SET2 = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	b.RetroFont.TEXT_SET3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ",
	b.RetroFont.TEXT_SET4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",
	b.RetroFont.TEXT_SET5 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,/() '!?-*:0123456789",
	b.RetroFont.TEXT_SET6 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!?:;0123456789\"(),-.' ",
	b.RetroFont.TEXT_SET7 = "AGMSY+:4BHNTZ!;5CIOU.?06DJPV,(17EKQW\")28FLRX-'39",
	b.RetroFont.TEXT_SET8 = "0123456789 .ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	b.RetroFont.TEXT_SET9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ()-0123456789.:,'\"?!",
	b.RetroFont.TEXT_SET10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	b.RetroFont.TEXT_SET11 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ.,\"-+!?()':;0123456789",
	b.RetroFont.prototype.setFixedWidth = function(a, b) {
		"undefined" == typeof b && (b = "left"),
		this.fixedWidth = a,
		this.align = b
	},
	b.RetroFont.prototype.setText = function(a, b, c, d, e, f) {
		this.multiLine = b || !1,
		this.customSpacingX = c || 0,
		this.customSpacingY = d || 0,
		this.align = e || "left",
		this.autoUpperCase = f ? !1 : !0,
		a.length > 0 && (this.text = a)
	},
	b.RetroFont.prototype.buildRetroFontText = function() {
		var d, e, a = 0,
		c = 0;
		if (this.clear(), this.multiLine) for (d = this._text.split("\n"), this.fixedWidth > 0 ? this.resize(this.fixedWidth, d.length * (this.characterHeight + this.customSpacingY) - this.customSpacingY, !0) : this.resize(this.getLongestLine() * (this.characterWidth + this.customSpacingX), d.length * (this.characterHeight + this.customSpacingY) - this.customSpacingY, !0), e = 0; e < d.length; e++) {
			switch (this.align) {
			case b.RetroFont.ALIGN_LEFT:
				a = 0;
				break;
			case b.RetroFont.ALIGN_RIGHT:
				a = this.width - d[e].length * (this.characterWidth + this.customSpacingX);
				break;
			case b.RetroFont.ALIGN_CENTER:
				a = this.width / 2 - d[e].length * (this.characterWidth + this.customSpacingX) / 2,
				a += this.customSpacingX / 2
			}
			0 > a && (a = 0),
			this.pasteLine(d[e], a, c, this.customSpacingX),
			c += this.characterHeight + this.customSpacingY
		} else {
			switch (this.fixedWidth > 0 ? this.resize(this.fixedWidth, this.characterHeight, !0) : this.resize(this._text.length * (this.characterWidth + this.customSpacingX), this.characterHeight, !0), this.align) {
			case b.RetroFont.ALIGN_LEFT:
				a = 0;
				break;
			case b.RetroFont.ALIGN_RIGHT:
				a = this.width - this._text.length * (this.characterWidth + this.customSpacingX);
				break;
			case b.RetroFont.ALIGN_CENTER:
				a = this.width / 2 - this._text.length * (this.characterWidth + this.customSpacingX) / 2,
				a += this.customSpacingX / 2
			}
			this.textureBuffer.clear(),
			this.pasteLine(this._text, a, 0, this.customSpacingX)
		}
	},
	b.RetroFont.prototype.pasteLine = function(a, c, d, e) {
		var g, f = new b.Point;
		for (g = 0; g < a.length; g++) if (" " == a.charAt(g)) c += this.characterWidth + e;
		else if (this.grabData[a.charCodeAt(g)] >= 0 && (this.stamp.frame = this.grabData[a.charCodeAt(g)], f.set(c, d), this.render(this.stamp, f, !1), c += this.characterWidth + e, c > this.width)) break
	},
	b.RetroFont.prototype.getLongestLine = function() {
		var b, c, a = 0;
		if (this._text.length > 0) for (b = this._text.split("\n"), c = 0; c < b.length; c++) b[c].length > a && (a = b[c].length);
		return a
	},
	b.RetroFont.prototype.removeUnsupportedCharacters = function(a) {
		var c, d, e, b = "";
		for (c = 0; c < this._text.length; c++) d = this._text[c],
		e = d.charCodeAt(0),
		(this.grabData[e] >= 0 || !a && "\n" === d) && (b = b.concat(d));
		return b
	},
	b.RetroFont.prototype.updateOffset = function(a, b) {
		var c, d, e, f;
		if (this.offsetX !== a || this.offsetY !== b) {
			for (c = a - this.offsetX, d = b - this.offsetY, e = this.game.cache.getFrameData(this.stamp.key).getFrames(), f = e.length; f--;) e[f].x += c,
			e[f].y += d,
			PIXI.TextureCache[e[f].uuid].frame.x = e[f].x,
			PIXI.TextureCache[e[f].uuid].frame.y = e[f].y;
			this.buildRetroFontText()
		}
	},
	Object.defineProperty(b.RetroFont.prototype, "text", {
		get: function() {
			return this._text
		},
		set: function(a) {
			var b;
			b = this.autoUpperCase ? a.toUpperCase() : a,
			b !== this._text && (this._text = b, this.removeUnsupportedCharacters(this.multiLine), this.buildRetroFontText())
		}
	}),
	Object.defineProperty(b.RetroFont.prototype, "smoothed", {
		get: function() {
			return this.stamp.smoothed
		},
		set: function(a) {
			this.stamp.smoothed = a,
			this.buildRetroFontText()
		}
	}),
	b.Particle = function(a, c, d, e, f) {
		b.Sprite.call(this, a, c, d, e, f),
		this.autoScale = !1,
		this.scaleData = null,
		this._s = 0,
		this.autoAlpha = !1,
		this.alphaData = null,
		this._a = 0
	},
	b.Particle.prototype = Object.create(b.Sprite.prototype),
	b.Particle.prototype.constructor = b.Particle,
	b.Particle.prototype.update = function() {
		this.autoScale && (this._s--, this._s ? this.scale.set(this.scaleData[this._s].x, this.scaleData[this._s].y) : this.autoScale = !1),
		this.autoAlpha && (this._a--, this._a ? this.alpha = this.alphaData[this._a].v: this.autoAlpha = !1)
	},
	b.Particle.prototype.onEmit = function() {},
	b.Particle.prototype.setAlphaData = function(a) {
		this.alphaData = a,
		this._a = a.length - 1,
		this.alpha = this.alphaData[this._a].v,
		this.autoAlpha = !0
	},
	b.Particle.prototype.setScaleData = function(a) {
		this.scaleData = a,
		this._s = a.length - 1,
		this.scale.set(this.scaleData[this._s].x, this.scaleData[this._s].y),
		this.autoScale = !0
	},
	b.Particle.prototype.reset = function(a, b, c) {
		return "undefined" == typeof c && (c = 1),
		this.world.setTo(a, b),
		this.position.x = a,
		this.position.y = b,
		this.alive = !0,
		this.exists = !0,
		this.visible = !0,
		this.renderable = !0,
		this._outOfBoundsFired = !1,
		this.health = c,
		this.body && this.body.reset(a, b, !1, !1),
		this._cache[4] = 1,
		this.alpha = 1,
		this.scale.set(1),
		this.autoScale = !1,
		this.autoAlpha = !1,
		this
	},
	b.Canvas = {
		create: function(a, b, c, d) {
			"undefined" == typeof d && (d = !1),
			a = a || 256,
			b = b || 256;
			var e = document.createElement("canvas");
			return "string" == typeof c && "" !== c && (e.id = c),
			e.width = a,
			e.height = b,
			e.style.display = "block",
			e
		},
		getOffset: function(a, c) {
			var d, e, f, g, h;
			return c = c || new b.Point,
			d = a.getBoundingClientRect(),
			e = a.clientTop || document.body.clientTop || 0,
			f = a.clientLeft || document.body.clientLeft || 0,
			g = 0,
			h = 0,
			"CSS1Compat" === document.compatMode ? (g = window.pageYOffset || document.documentElement.scrollTop || a.scrollTop || 0, h = window.pageXOffset || document.documentElement.scrollLeft || a.scrollLeft || 0) : (g = window.pageYOffset || document.body.scrollTop || a.scrollTop || 0, h = window.pageXOffset || document.body.scrollLeft || a.scrollLeft || 0),
			c.x = d.left + h - f,
			c.y = d.top + g - e,
			c
		},
		getAspectRatio: function(a) {
			return a.width / a.height
		},
		setBackgroundColor: function(a, b) {
			return b = b || "rgb(0,0,0)",
			a.style.backgroundColor = b,
			a
		},
		setTouchAction: function(a, b) {
			return b = b || "none",
			a.style.msTouchAction = b,
			a.style["ms-touch-action"] = b,
			a.style["touch-action"] = b,
			a
		},
		setUserSelect: function(a, b) {
			return b = b || "none",
			a.style["-webkit-touch-callout"] = b,
			a.style["-webkit-user-select"] = b,
			a.style["-khtml-user-select"] = b,
			a.style["-moz-user-select"] = b,
			a.style["-ms-user-select"] = b,
			a.style["user-select"] = b,
			a.style["-webkit-tap-highlight-color"] = "rgba(0, 0, 0, 0)",
			a
		},
		addToDOM: function(a, b, c) {
			var d;
			return "undefined" == typeof c && (c = !0),
			b && ("string" == typeof b ? d = document.getElementById(b) : "object" == typeof b && 1 === b.nodeType && (d = b)),
			d || (d = document.body),
			c && d.style && (d.style.overflow = "hidden"),
			d.appendChild(a),
			a
		},
		setTransform: function(a, b, c, d, e, f, g) {
			return a.setTransform(d, f, g, e, b, c),
			a
		},
		setSmoothingEnabled: function(a, b) {
			return a["imageSmoothingEnabled"] = b,
			a["mozImageSmoothingEnabled"] = b,
			a["oImageSmoothingEnabled"] = b,
			a["webkitImageSmoothingEnabled"] = b,
			a["msImageSmoothingEnabled"] = b,
			a
		},
		setImageRenderingCrisp: function(a) {
			return a.style["image-rendering"] = "optimizeSpeed",
			a.style["image-rendering"] = "crisp-edges",
			a.style["image-rendering"] = "-moz-crisp-edges",
			a.style["image-rendering"] = "-webkit-optimize-contrast",
			a.style["image-rendering"] = "optimize-contrast",
			a.style.msInterpolationMode = "nearest-neighbor",
			a
		},
		setImageRenderingBicubic: function(a) {
			return a.style["image-rendering"] = "auto",
			a.style.msInterpolationMode = "bicubic",
			a
		}
	},
	b.Device = function(a) {
		this.game = a,
		this.desktop = !1,
		this.iOS = !1,
		this.cocoonJS = !1,
		this.ejecta = !1,
		this.crosswalk = !1,
		this.android = !1,
		this.chromeOS = !1,
		this.linux = !1,
		this.macOS = !1,
		this.windows = !1,
		this.windowsPhone = !1,
		this.canvas = !1,
		this.file = !1,
		this.fileSystem = !1,
		this.localStorage = !1,
		this.webGL = !1,
		this.worker = !1,
		this.touch = !1,
		this.mspointer = !1,
		this.css3D = !1,
		this.pointerLock = !1,
		this.typedArray = !1,
		this.vibration = !1,
		this.getUserMedia = !1,
		this.quirksMode = !1,
		this.arora = !1,
		this.chrome = !1,
		this.epiphany = !1,
		this.firefox = !1,
		this.ie = !1,
		this.ieVersion = 0,
		this.trident = !1,
		this.tridentVersion = 0,
		this.mobileSafari = !1,
		this.midori = !1,
		this.opera = !1,
		this.safari = !1,
		this.webApp = !1,
		this.silk = !1,
		this.audioData = !1,
		this.webAudio = !1,
		this.ogg = !1,
		this.opus = !1,
		this.mp3 = !1,
		this.wav = !1,
		this.m4a = !1,
		this.webm = !1,
		this.iPhone = !1,
		this.iPhone4 = !1,
		this.iPad = !1,
		this.pixelRatio = 0,
		this.littleEndian = !1,
		this.support32bit = !1,
		this.fullscreen = !1,
		this.requestFullscreen = "",
		this.cancelFullscreen = "",
		this.fullscreenKeyboard = !1,
		this._checkOS(),
		this._checkAudio(),
		this._checkBrowser(),
		this._checkCSS3D(),
		this._checkDevice(),
		this._checkFeatures()
	},
	b.Device.LITTLE_ENDIAN = !1,
	b.Device.prototype = {
		_checkOS: function() {
			var a = navigator.userAgent;
			/Android/.test(a) ? this.android = !0 : /CrOS/.test(a) ? this.chromeOS = !0 : /iP[ao]d|iPhone/i.test(a) ? this.iOS = !0 : /Linux/.test(a) ? this.linux = !0 : /Mac OS/.test(a) ? this.macOS = !0 : /Windows/.test(a) && (this.windows = !0, /Windows Phone/i.test(a) && (this.windowsPhone = !0)),
			(this.windows || this.macOS || this.linux && this.silk === !1) && (this.desktop = !0),
			(this.windowsPhone || /Windows NT/i.test(a) && /Touch/i.test(a)) && (this.desktop = !1)
		},
		_checkFeatures: function() {
			this.canvas = !!window["CanvasRenderingContext2D"] || this.cocoonJS;
			try {
				this.localStorage = !!localStorage.getItem
			} catch(a) {
				this.localStorage = !1
			}
			this.file = !!(window["File"] && window["FileReader"] && window["FileList"] && window["Blob"]),
			this.fileSystem = !!window["requestFileSystem"],
			this.webGL = function() {
				try {
					var a = document.createElement("canvas");
					return !! window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))
				} catch(b) {
					return ! 1
				}
			} (),
			this.webGL = null === this.webGL || this.webGL === !1 ? !1 : !0,
			this.worker = !!window["Worker"],
			("ontouchstart" in document.documentElement || window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1) && (this.touch = !0),
			(window.navigator.msPointerEnabled || window.navigator.pointerEnabled) && (this.mspointer = !0),
			this.pointerLock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document,
			this.quirksMode = "CSS1Compat" === document.compatMode ? !1 : !0,
			this.getUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)
		},
		checkFullScreenSupport: function() {
			var b, c, a = ["requestFullscreen", "requestFullScreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "msRequestFullscreen", "msRequestFullScreen", "mozRequestFullScreen", "mozRequestFullscreen"];
			for (b = 0; b < a.length; b++) if (this.game.canvas[a[b]]) {
				this.fullscreen = !0,
				this.requestFullscreen = a[b];
				break
			}
			if (c = ["cancelFullScreen", "exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "msCancelFullScreen", "msExitFullscreen", "mozCancelFullScreen", "mozExitFullscreen"], this.fullscreen) for (b = 0; b < c.length; b++) if (document[c[b]]) {
				this.cancelFullscreen = c[b];
				break
			}
			window["Element"] && Element["ALLOW_KEYBOARD_INPUT"] && (this.fullscreenKeyboard = !0)
		},
		_checkBrowser: function() {
			var a = navigator.userAgent;
			/Arora/.test(a) ? this.arora = !0 : /Chrome/.test(a) ? this.chrome = !0 : /Epiphany/.test(a) ? this.epiphany = !0 : /Firefox/.test(a) ? this.firefox = !0 : /AppleWebKit/.test(a) && this.iOS ? this.mobileSafari = !0 : /MSIE(\d+\.\d+);/.test(a) ? (this.ie = !0, this.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(a) ? this.midori = !0 : /Opera/.test(a) ? this.opera = !0 : /Safari/.test(a) ? this.safari = !0 : /Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(a) && (this.ie = !0, this.trident = !0, this.tridentVersion = parseInt(RegExp.$1, 10), this.ieVersion = parseInt(RegExp.$3, 10)),
			/Silk/.test(a) && (this.silk = !0),
			navigator["standalone"] && (this.webApp = !0),
			navigator["isCocoonJS"] && (this.cocoonJS = !0),
			"undefined" != typeof window.ejecta && (this.ejecta = !0),
			/Crosswalk/.test(a) && (this.crosswalk = !0)
		},
		_checkAudio: function() {
			var a, b;
			this.audioData = !!window["Audio"],
			this.webAudio = !(!window["webkitAudioContext"] && !window["AudioContext"]),
			a = document.createElement("audio"),
			b = !1;
			try { (b = !!a.canPlayType) && (a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0), a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, "") && (this.opus = !0), a.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0), a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0), (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0), a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") && (this.webm = !0))
			} catch(c) {}
		},
		_checkDevice: function() {
			this.pixelRatio = window["devicePixelRatio"] || 1,
			this.iPhone = -1 != navigator.userAgent.toLowerCase().indexOf("iphone"),
			this.iPhone4 = 2 == this.pixelRatio && this.iPhone,
			this.iPad = -1 != navigator.userAgent.toLowerCase().indexOf("ipad"),
			this.typedArray = "undefined" != typeof Int8Array ? !0 : !1,
			"undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && "undefined" != typeof Uint32Array && (this.littleEndian = this._checkIsLittleEndian(), b.Device.LITTLE_ENDIAN = this.littleEndian),
			this.support32bit = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8ClampedArray && "undefined" != typeof Int32Array && null !== this.littleEndian && this._checkIsUint8ClampedImageData(),
			navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate,
			navigator.vibrate && (this.vibration = !0)
		},
		_checkIsLittleEndian: function() {
			var a = new ArrayBuffer(4),
			b = new Uint8Array(a),
			c = new Uint32Array(a);
			return b[0] = 161,
			b[1] = 178,
			b[2] = 195,
			b[3] = 212,
			3569595041 == c[0] ? !0 : 2712847316 == c[0] ? !1 : null
		},
		_checkIsUint8ClampedImageData: function() {
			var a, b, c;
			return "undefined" == typeof Uint8ClampedArray ? !1 : (a = document.createElement("canvas"), (b = a.getContext("2d")) ? (c = b.createImageData(1, 1), c.data instanceof Uint8ClampedArray) : !1)
		},
		_checkCSS3D: function() {
			var b, d, a = document.createElement("p"),
			c = {
				webkitTransform: "-webkit-transform",
				OTransform: "-o-transform",
				msTransform: "-ms-transform",
				MozTransform: "-moz-transform",
				transform: "transform"
			};
			document.body.insertBefore(a, null);
			for (d in c) void 0 !== a.style[d] && (a.style[d] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(c[d]));
			document.body.removeChild(a),
			this.css3D = void 0 !== b && b.length > 0 && "none" !== b
		},
		canPlayAudio: function(a) {
			return "mp3" == a && this.mp3 ? !0 : "ogg" == a && (this.ogg || this.opus) ? !0 : "m4a" == a && this.m4a ? !0 : "wav" == a && this.wav ? !0 : "webm" == a && this.webm ? !0 : !1
		},
		isConsoleOpen: function() {
			return window.console && window.console["firebug"] ? !0 : window.console && (console.profile(), console.profileEnd(), console.clear && console.clear(), console["profiles"]) ? console["profiles"].length > 0 : !1
		}
	},
	b.Device.prototype.constructor = b.Device,
	b.RequestAnimationFrame = function(a, b) {
		var c, d;
		for ("undefined" == typeof b && (b = !1), this.game = a, this.isRunning = !1, this.forceSetTimeOut = b, c = ["ms", "moz", "webkit", "o"], d = 0; d < c.length && !window.requestAnimationFrame; d++) window.requestAnimationFrame = window[c[d] + "RequestAnimationFrame"],
		window.cancelAnimationFrame = window[c[d] + "CancelAnimationFrame"];
		this._isSetTimeOut = !1,
		this._onLoop = null,
		this._timeOutID = null
	},
	b.RequestAnimationFrame.prototype = {
		start: function() {
			this.isRunning = !0;
			var a = this; ! window.requestAnimationFrame || this.forceSetTimeOut ? (this._isSetTimeOut = !0, this._onLoop = function() {
				return a.updateSetTimeout()
			},
			this._timeOutID = window.setTimeout(this._onLoop, 0)) : (this._isSetTimeOut = !1, this._onLoop = function(b) {
				return a.updateRAF(b)
			},
			this._timeOutID = window.requestAnimationFrame(this._onLoop))
		},
		updateRAF: function() {
			this.game.update(Date.now()),
			this._timeOutID = window.requestAnimationFrame(this._onLoop)
		},
		updateSetTimeout: function() {
			this.game.update(Date.now()),
			this._timeOutID = window.setTimeout(this._onLoop, this.game.time.timeToCall)
		},
		stop: function() {
			this._isSetTimeOut ? clearTimeout(this._timeOutID) : window.cancelAnimationFrame(this._timeOutID),
			this.isRunning = !1
		},
		isSetTimeOut: function() {
			return this._isSetTimeOut
		},
		isRAF: function() {
			return this._isSetTimeOut === !1
		}
	},
	b.RequestAnimationFrame.prototype.constructor = b.RequestAnimationFrame,
	b.Math = {
		PI2: 2 * Math.PI,
		fuzzyEqual: function(a, b, c) {
			return "undefined" == typeof c && (c = 1e-4),
			Math.abs(a - b) < c
		},
		fuzzyLessThan: function(a, b, c) {
			return "undefined" == typeof c && (c = 1e-4),
			b + c > a
		},
		fuzzyGreaterThan: function(a, b, c) {
			return "undefined" == typeof c && (c = 1e-4),
			a > b - c
		},
		fuzzyCeil: function(a, b) {
			return "undefined" == typeof b && (b = 1e-4),
			Math.ceil(a - b)
		},
		fuzzyFloor: function(a, b) {
			return "undefined" == typeof b && (b = 1e-4),
			Math.floor(a + b)
		},
		average: function() {
			var b, c, d, a = [];
			for (b = 0; b < arguments.length - 0; b++) a[b] = arguments[b + 0];
			for (c = 0, d = 0; d < a.length; d++) c += a[d];
			return c / a.length
		},
		truncate: function(a) {
			return a > 0 ? Math.floor(a) : Math.ceil(a)
		},
		shear: function(a) {
			return a % 1
		},
		snapTo: function(a, b, c) {
			return "undefined" == typeof c && (c = 0),
			0 === b ? a: (a -= c, a = b * Math.round(a / b), c + a)
		},
		snapToFloor: function(a, b, c) {
			return "undefined" == typeof c && (c = 0),
			0 === b ? a: (a -= c, a = b * Math.floor(a / b), c + a)
		},
		snapToCeil: function(a, b, c) {
			return "undefined" == typeof c && (c = 0),
			0 === b ? a: (a -= c, a = b * Math.ceil(a / b), c + a)
		},
		snapToInArray: function(a, b, c) {
			var d, e, f;
			if ("undefined" == typeof c && (c = !0), c && b.sort(), a < b[0]) return b[0];
			for (d = 1; b[d] < a;) d++;
			return e = b[d - 1],
			f = d < b.length ? b[d] : Number.POSITIVE_INFINITY,
			a - e >= f - a ? f: e
		},
		roundTo: function(a, b, c) {
			"undefined" == typeof b && (b = 0),
			"undefined" == typeof c && (c = 10);
			var d = Math.pow(c, -b);
			return Math.round(a * d) / d
		},
		floorTo: function(a, b, c) {
			"undefined" == typeof b && (b = 0),
			"undefined" == typeof c && (c = 10);
			var d = Math.pow(c, -b);
			return Math.floor(a * d) / d
		},
		ceilTo: function(a, b, c) {
			"undefined" == typeof b && (b = 0),
			"undefined" == typeof c && (c = 10);
			var d = Math.pow(c, -b);
			return Math.ceil(a * d) / d
		},
		interpolateFloat: function(a, b, c) {
			return (b - a) * c + a
		},
		angleBetween: function(a, b, c, d) {
			return Math.atan2(d - b, c - a)
		},
		angleBetweenPoints: function(a, b) {
			return Math.atan2(b.y - a.y, b.x - a.x)
		},
		reverseAngle: function(a) {
			return this.normalizeAngle(a + Math.PI, !0)
		},
		normalizeAngle: function(a) {
			return a %= 2 * Math.PI,
			a >= 0 ? a: a + 2 * Math.PI
		},
		normalizeLatitude: function(a) {
			return Math.max( - 90, Math.min(90, a))
		},
		normalizeLongitude: function(a) {
			return 180 == a % 360 ? 180 : (a %= 360, -180 > a ? a + 360 : a > 180 ? a - 360 : a)
		},
		chanceRoll: function(a) {
			return "undefined" == typeof a && (a = 50),
			0 >= a ? !1 : a >= 100 ? !0 : 100 * Math.random() >= a ? !1 : !0
		},
		numberArray: function(a, b) {
			var d, c = [];
			for (d = a; b >= d; d++) c.push(d);
			return c
		},
		maxAdd: function(a, b, c) {
			return a += b,
			a > c && (a = c),
			a
		},
		minSub: function(a, b, c) {
			return a -= b,
			c > a && (a = c),
			a
		},
		wrap: function(a, b, c) {
			var e, d = c - b;
			return 0 >= d ? 0 : (e = (a - b) % d, 0 > e && (e += d), e + b)
		},
		wrapValue: function(a, b, c) {
			var d;
			return a = Math.abs(a),
			b = Math.abs(b),
			c = Math.abs(c),
			d = (a + b) % c
		},
		limitValue: function(a, b, c) {
			return b > a ? b: a > c ? c: a
		},
		randomSign: function() {
			return Math.random() > .5 ? 1 : -1
		},
		isOdd: function(a) {
			return 1 & a
		},
		isEven: function(a) {
			return 1 & a ? !1 : !0
		},
		min: function() {
			var a, b, c, d;
			for (a = 1 === arguments.length && "object" == typeof arguments[0] ? arguments[0] : arguments, b = 1, c = 0, d = a.length; d > b; b++) a[b] < a[c] && (c = b);
			return a[c]
		},
		max: function() {
			var a, b, c, d;
			for (a = 1 === arguments.length && "object" == typeof arguments[0] ? arguments[0] : arguments, b = 1, c = 0, d = a.length; d > b; b++) a[b] > a[c] && (c = b);
			return a[c]
		},
		minProperty: function(a) {
			var b, c, d, e;
			for (b = 2 === arguments.length && "object" == typeof arguments[1] ? arguments[1] : arguments.slice(1), c = 1, d = 0, e = b.length; e > c; c++) b[c][a] < b[d][a] && (d = c);
			return b[d][a]
		},
		maxProperty: function(a) {
			var b, c, d, e;
			for (b = 2 === arguments.length && "object" == typeof arguments[1] ? arguments[1] : arguments.slice(1), c = 1, d = 0, e = b.length; e > c; c++) b[c][a] > b[d][a] && (d = c);
			return b[d][a]
		},
		wrapAngle: function(a, b) {
			var c = b ? Math.PI / 180 : 1;
			return this.wrap(a, -180 * c, 180 * c)
		},
		angleLimit: function(a, b, c) {
			var d = a;
			return a > c ? d = c: b > a && (d = b),
			d
		},
		linearInterpolation: function(a, b) {
			var c = a.length - 1,
			d = c * b,
			e = Math.floor(d);
			return 0 > b ? this.linear(a[0], a[1], d) : b > 1 ? this.linear(a[c], a[c - 1], c - d) : this.linear(a[e], a[e + 1 > c ? c: e + 1], d - e)
		},
		bezierInterpolation: function(a, b) {
			var e, c = 0,
			d = a.length - 1;
			for (e = 0; d >= e; e++) c += Math.pow(1 - b, d - e) * Math.pow(b, e) * a[e] * this.bernstein(d, e);
			return c
		},
		catmullRomInterpolation: function(a, b) {
			var c = a.length - 1,
			d = c * b,
			e = Math.floor(d);
			return a[0] === a[c] ? (0 > b && (e = Math.floor(d = c * (1 + b))), this.catmullRom(a[(e - 1 + c) % c], a[e], a[(e + 1) % c], a[(e + 2) % c], d - e)) : 0 > b ? a[0] - (this.catmullRom(a[0], a[0], a[1], a[1], -d) - a[0]) : b > 1 ? a[c] - (this.catmullRom(a[c], a[c], a[c - 1], a[c - 1], d - c) - a[c]) : this.catmullRom(a[e ? e - 1 : 0], a[e], a[e + 1 > c ? c: e + 1], a[e + 2 > c ? c: e + 2], d - e)
		},
		linear: function(a, b, c) {
			return (b - a) * c + a
		},
		bernstein: function(a, b) {
			return this.factorial(a) / this.factorial(b) / this.factorial(a - b)
		},
		factorial: function(a) {
			if (0 === a) return 1;
			for (var b = a; --a;) b *= a;
			return b
		},
		catmullRom: function(a, b, c, d, e) {
			var f = .5 * (c - a),
			g = .5 * (d - b),
			h = e * e,
			i = e * h;
			return (2 * b - 2 * c + f + g) * i + ( - 3 * b + 3 * c - 2 * f - g) * h + f * e + b
		},
		difference: function(a, b) {
			return Math.abs(a - b)
		},
		getRandom: function(a, b, c) {
			if ("undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = 0), null != a) {
				var d = c;
				if ((0 === d || d > a.length - b) && (d = a.length - b), d > 0) return a[b + Math.floor(Math.random() * d)]
			}
			return null
		},
		removeRandom: function(a, b, c) {
			var d, e, f;
			return "undefined" == typeof b && (b = 0),
			"undefined" == typeof c && (c = 0),
			null != a && (d = c, (0 === d || d > a.length - b) && (d = a.length - b), d > 0) ? (e = b + Math.floor(Math.random() * d), f = a.splice(e, 1), f[0]) : null
		},
		floor: function(a) {
			var b = 0 | a;
			return a > 0 ? b: b != a ? b - 1 : b
		},
		ceil: function(a) {
			var b = 0 | a;
			return a > 0 ? b != a ? b + 1 : b: b
		},
		sinCosGenerator: function(a, b, c, d) {
			var e, f, g, h, i, j;
			for ("undefined" == typeof b && (b = 1), "undefined" == typeof c && (c = 1), "undefined" == typeof d && (d = 1), e = b, f = c, g = d * Math.PI / a, h = [], i = [], j = 0; a > j; j++) f -= e * g,
			e += f * g,
			h[j] = f,
			i[j] = e;
			return {
				sin: i,
				cos: h,
				length: a
			}
		},
		shift: function(a) {
			var b = a.shift();
			return a.push(b),
			b
		},
		shuffleArray: function(a) {
			var b, c, d;
			for (b = a.length - 1; b > 0; b--) c = Math.floor(Math.random() * (b + 1)),
			d = a[b],
			a[b] = a[c],
			a[c] = d;
			return a
		},
		distance: function(a, b, c, d) {
			var e = a - c,
			f = b - d;
			return Math.sqrt(e * e + f * f)
		},
		distancePow: function(a, b, c, d, e) {
			return "undefined" == typeof e && (e = 2),
			Math.sqrt(Math.pow(c - a, e) + Math.pow(d - b, e))
		},
		distanceRounded: function(a, c, d, e) {
			return Math.round(b.Math.distance(a, c, d, e))
		},
		clamp: function(a, b, c) {
			return b > a ? b: a > c ? c: a
		},
		clampBottom: function(a, b) {
			return b > a ? b: a
		},
		within: function(a, b, c) {
			return Math.abs(a - b) <= c
		},
		mapLinear: function(a, b, c, d, e) {
			return d + (a - b) * (e - d) / (c - b)
		},
		smoothstep: function(a, b, c) {
			return a = Math.max(0, Math.min(1, (a - b) / (c - b))),
			a * a * (3 - 2 * a)
		},
		smootherstep: function(a, b, c) {
			return a = Math.max(0, Math.min(1, (a - b) / (c - b))),
			a * a * a * (a * (6 * a - 15) + 10)
		},
		sign: function(a) {
			return 0 > a ? -1 : a > 0 ? 1 : 0
		},
		percent: function(a, b, c) {
			return "undefined" == typeof c && (c = 0),
			a > b || c > b ? 1 : c > a || c > a ? 0 : (a - c) / b
		},
		degToRad: function() {
			var a = Math.PI / 180;
			return function(b) {
				return b * a
			}
		} (),
		radToDeg: function() {
			var a = 180 / Math.PI;
			return function(b) {
				return b * a
			}
		} ()
	},
	b.RandomDataGenerator = function(a) {
		"undefined" == typeof a && (a = []),
		this.c = 1,
		this.s0 = 0,
		this.s1 = 0,
		this.s2 = 0,
		this.sow(a)
	},
	b.RandomDataGenerator.prototype = {
		rnd: function() {
			var a = 2091639 * this.s0 + 2.3283064365386963e-10 * this.c;
			return this.c = 0 | a,
			this.s0 = this.s1,
			this.s1 = this.s2,
			this.s2 = a - this.c,
			this.s2
		},
		sow: function(a) {
			var b, c;
			for ("undefined" == typeof a && (a = []), this.s0 = this.hash(" "), this.s1 = this.hash(this.s0), this.s2 = this.hash(this.s1), this.c = 1, c = 0; b = a[c++];) this.s0 -= this.hash(b),
			this.s0 += ~~ (this.s0 < 0),
			this.s1 -= this.hash(b),
			this.s1 += ~~ (this.s1 < 0),
			this.s2 -= this.hash(b),
			this.s2 += ~~ (this.s2 < 0)
		},
		hash: function(a) {
			var b, c, d;
			for (d = 4022871197, a = a.toString(), c = 0; c < a.length; c++) d += a.charCodeAt(c),
			b = .02519603282416938 * d,
			d = b >>> 0,
			b -= d,
			b *= d,
			d = b >>> 0,
			b -= d,
			d += 4294967296 * b;
			return 2.3283064365386963e-10 * (d >>> 0)
		},
		integer: function() {
			return 4294967296 * this.rnd.apply(this)
		},
		frac: function() {
			return this.rnd.apply(this) + 1.1102230246251565e-16 * (0 | 2097152 * this.rnd.apply(this))
		},
		real: function() {
			return this.integer() + this.frac()
		},
		integerInRange: function(a, b) {
			return Math.floor(this.realInRange(0, b - a + 1) + a)
		},
		between: function(a, b) {
			return this.integerInRange(a, b)
		},
		realInRange: function(a, b) {
			return this.frac() * (b - a) + a
		},
		normal: function() {
			return 1 - 2 * this.frac()
		},
		uuid: function() {
			var a = "",
			b = "";
			for (b = a = ""; a++<36; b += ~a % 5 | 4 & 3 * a ? (15 ^ a ? 8 ^ this.frac() * (20 ^ a ? 16 : 4) : 4).toString(16) : "-");
			return b
		},
		pick: function(a) {
			return a[this.integerInRange(0, a.length - 1)]
		},
		weightedPick: function(a) {
			return a[~~ (Math.pow(this.frac(), 2) * (a.length - 1))]
		},
		timestamp: function(a, b) {
			return this.realInRange(a || 9466848e5, b || 1577862e6)
		},
		angle: function() {
			return this.integerInRange( - 180, 180)
		}
	},
	b.RandomDataGenerator.prototype.constructor = b.RandomDataGenerator,
	b.QuadTree = function(a, b, c, d, e, f, g) {
		this.maxObjects = 10,
		this.maxLevels = 4,
		this.level = 0,
		this.bounds = {},
		this.objects = [],
		this.nodes = [],
		this._empty = [],
		this.reset(a, b, c, d, e, f, g)
	},
	b.QuadTree.prototype = {
		reset: function(a, b, c, d, e, f, g) {
			this.maxObjects = e || 10,
			this.maxLevels = f || 4,
			this.level = g || 0,
			this.bounds = {
				x: Math.round(a),
				y: Math.round(b),
				width: c,
				height: d,
				subWidth: Math.floor(c / 2),
				subHeight: Math.floor(d / 2),
				right: Math.round(a) + Math.floor(c / 2),
				bottom: Math.round(b) + Math.floor(d / 2)
			},
			this.objects.length = 0,
			this.nodes.length = 0
		},
		populate: function(a) {
			a.forEach(this.populateHandler, this, !0)
		},
		populateHandler: function(a) {
			a.body && a.exists && this.insert(a.body)
		},
		split: function() {
			this.nodes[0] = new b.QuadTree(this.bounds.right, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1),
			this.nodes[1] = new b.QuadTree(this.bounds.x, this.bounds.y, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1),
			this.nodes[2] = new b.QuadTree(this.bounds.x, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1),
			this.nodes[3] = new b.QuadTree(this.bounds.right, this.bounds.bottom, this.bounds.subWidth, this.bounds.subHeight, this.maxObjects, this.maxLevels, this.level + 1)
		},
		insert: function(a) {
			var c, b = 0;
			if (null != this.nodes[0] && (c = this.getIndex(a), -1 !== c)) return this.nodes[c].insert(a),
			void 0;
			if (this.objects.push(a), this.objects.length > this.maxObjects && this.level < this.maxLevels) for (null == this.nodes[0] && this.split(); b < this.objects.length;) c = this.getIndex(this.objects[b]),
			-1 !== c ? this.nodes[c].insert(this.objects.splice(b, 1)[0]) : b++
		},
		getIndex: function(a) {
			var b = -1;
			return a.x < this.bounds.right && a.right < this.bounds.right ? a.y < this.bounds.bottom && a.bottom < this.bounds.bottom ? b = 1 : a.y > this.bounds.bottom && (b = 2) : a.x > this.bounds.right && (a.y < this.bounds.bottom && a.bottom < this.bounds.bottom ? b = 0 : a.y > this.bounds.bottom && (b = 3)),
			b
		},
		retrieve: function(a) {
			var c, d;
			if (a instanceof b.Rectangle) c = this.objects,
			d = this.getIndex(a);
			else {
				if (!a.body) return this._empty;
				c = this.objects,
				d = this.getIndex(a.body)
			}
			return this.nodes[0] && ( - 1 !== d ? c = c.concat(this.nodes[d].retrieve(a)) : (c = c.concat(this.nodes[0].retrieve(a)), c = c.concat(this.nodes[1].retrieve(a)), c = c.concat(this.nodes[2].retrieve(a)), c = c.concat(this.nodes[3].retrieve(a)))),
			c
		},
		clear: function() {
			this.objects.length = 0;
			for (var a = this.nodes.length; a--;) this.nodes[a].clear(),
			this.nodes.splice(a, 1);
			this.nodes.length = 0
		}
	},
	b.QuadTree.prototype.constructor = b.QuadTree,
	b.Net = function(a) {
		this.game = a
	},
	b.Net.prototype = {
		getHostName: function() {
			return window.location && window.location.hostname ? window.location.hostname: null
		},
		checkDomainName: function(a) {
			return - 1 !== window.location.hostname.indexOf(a)
		},
		updateQueryString: function(a, b, c, d) {
			var e, f, g, h;
			return "undefined" == typeof c && (c = !1),
			("undefined" == typeof d || "" === d) && (d = window.location.href),
			e = "",
			f = new RegExp("([?|&])" + a + "=.*?(&|#|$)(.*)", "gi"),
			f.test(d) ? e = "undefined" != typeof b && null !== b ? d.replace(f, "$1" + a + "=" + b + "$2$3") : d.replace(f, "$1$3").replace(/(&|\?)$/, "") : "undefined" != typeof b && null !== b ? (g = -1 !== d.indexOf("?") ? "&": "?", h = d.split("#"), d = h[0] + g + a + "=" + b, h[1] && (d += "#" + h[1]), e = d) : e = d,
			c ? (window.location.href = e, void 0) : e
		},
		getQueryString: function(a) {
			var b, c, d, e;
			"undefined" == typeof a && (a = ""),
			b = {},
			c = location.search.substring(1).split("&");
			for (d in c) if (e = c[d].split("="), e.length > 1) {
				if (a && a == this.decodeURI(e[0])) return this.decodeURI(e[1]);
				b[this.decodeURI(e[0])] = this.decodeURI(e[1])
			}
			return b
		},
		decodeURI: function(a) {
			return decodeURIComponent(a.replace(/\+/g, " "))
		}
	},
	b.Net.prototype.constructor = b.Net,
	b.TweenManager = function(a) {
		this.game = a,
		this._tweens = [],
		this._add = [],
		this.game.onPause.add(this._pauseAll, this),
		this.game.onResume.add(this._resumeAll, this)
	},
	b.TweenManager.prototype = {
		getAll: function() {
			return this._tweens
		},
		removeAll: function() {
			for (var a = 0; a < this._tweens.length; a++) this._tweens[a].pendingDelete = !0;
			this._add = []
		},
		add: function(a) {
			a._manager = this,
			this._add.push(a)
		},
		create: function(a) {
			return new b.Tween(a, this.game, this)
		},
		remove: function(a) {
			var b = this._tweens.indexOf(a); - 1 !== b ? this._tweens[b].pendingDelete = !0 : (b = this._add.indexOf(a), -1 !== b && (this._add[b].pendingDelete = !0))
		},
		update: function() {
			var c, a = this._add.length,
			b = this._tweens.length;
			if (0 === b && 0 === a) return ! 1;
			for (c = 0; b > c;) this._tweens[c].update(this.game.time.now) ? c++:(this._tweens.splice(c, 1), b--);
			return a > 0 && (this._tweens = this._tweens.concat(this._add), this._add.length = 0),
			!0
		},
		isTweening: function(a) {
			return this._tweens.some(function(b) {
				return b._object === a
			})
		},
		_pauseAll: function() {
			for (var a = this._tweens.length - 1; a >= 0; a--) this._tweens[a]._pause()
		},
		_resumeAll: function() {
			for (var a = this._tweens.length - 1; a >= 0; a--) this._tweens[a]._resume()
		},
		pauseAll: function() {
			for (var a = this._tweens.length - 1; a >= 0; a--) this._tweens[a].pause()
		},
		resumeAll: function() {
			for (var a = this._tweens.length - 1; a >= 0; a--) this._tweens[a].resume(!0)
		}
	},
	b.TweenManager.prototype.constructor = b.TweenManager,
	b.Tween = function(a, c, d) {
		this._object = a,
		this.game = c,
		this._manager = d,
		this._valuesStart = {},
		this._valuesEnd = {},
		this._valuesStartRepeat = {},
		this._duration = 1e3,
		this._repeat = 0,
		this._yoyo = !1,
		this._reversed = !1,
		this._delayTime = 0,
		this._startTime = null,
		this._easingFunction = b.Easing.Linear.None,
		this._interpolationFunction = b.Math.linearInterpolation,
		this._chainedTweens = [],
		this._onStartCallbackFired = !1,
		this._onUpdateCallback = null,
		this._onUpdateCallbackContext = null,
		this._paused = !1,
		this._pausedTime = 0,
		this._codePaused = !1,
		this.pendingDelete = !1,
		this.onStart = new b.Signal,
		this.onLoop = new b.Signal,
		this.onComplete = new b.Signal,
		this.isRunning = !1
	},
	b.Tween.prototype = {
		to: function(a, b, c, d, e, f, g) {
			b = b || 1e3,
			c = c || null,
			d = d || !1,
			e = e || 0,
			f = f || 0,
			g = g || !1,
			g && 0 === f && (f = 1);
			var h;
			return this._parent ? (h = this._manager.create(this._object), this._lastChild.chain(h), this._lastChild = h) : (h = this, this._parent = this, this._lastChild = this),
			h._repeat = f,
			h._duration = b,
			h._valuesEnd = a,
			null !== c && (h._easingFunction = c),
			e > 0 && (h._delayTime = e),
			h._yoyo = g,
			d ? this.start() : this
		},
		from: function(a, b, c, d, e, f, g) {
			var i, h = {};
			for (i in a) h[i] = this._object[i],
			this._object[i] = a[i];
			return this.to(h, b, c, d, e, f, g)
		},
		start: function() {
			if (null !== this.game && null !== this._object) {
				this._manager.add(this),
				this.isRunning = !0,
				this._onStartCallbackFired = !1,
				this._startTime = this.game.time.now + this._delayTime;
				for (var a in this._valuesEnd) {
					if (Array.isArray(this._valuesEnd[a])) {
						if (0 === this._valuesEnd[a].length) continue;
						this._valuesEnd[a] = [this._object[a]].concat(this._valuesEnd[a])
					}
					this._valuesStart[a] = this._object[a],
					Array.isArray(this._valuesStart[a]) || (this._valuesStart[a] *= 1),
					this._valuesStartRepeat[a] = this._valuesStart[a] || 0
				}
				return this
			}
		},
		generateData: function(a, b) {
			var c, d, e, f, g, h, i, j, k, l, m;
			if (null === this.game || null === this._object) return null;
			this._startTime = 0;
			for (c in this._valuesEnd) {
				if (Array.isArray(this._valuesEnd[c])) {
					if (0 === this._valuesEnd[c].length) continue;
					this._valuesEnd[c] = [this._object[c]].concat(this._valuesEnd[c])
				}
				this._valuesStart[c] = this._object[c],
				Array.isArray(this._valuesStart[c]) || (this._valuesStart[c] *= 1),
				this._valuesStartRepeat[c] = this._valuesStart[c] || 0
			}
			for (d = 0, e = Math.floor(a * (this._duration / 1e3)), f = this._duration / e, g = []; e--;) {
				h = (d - this._startTime) / this._duration,
				h = h > 1 ? 1 : h,
				i = this._easingFunction(h),
				j = {};
				for (c in this._valuesEnd) k = this._valuesStart[c] || 0,
				l = this._valuesEnd[c],
				l instanceof Array ? j[c] = this._interpolationFunction(l, i) : ("string" == typeof l && (l = k + parseFloat(l, 10)), "number" == typeof l && (j[c] = k + (l - k) * i));
				g.push(j),
				d += f
			}
			return this._yoyo && (m = g.slice(), m.reverse(), g = g.concat(m)),
			"undefined" != typeof b ? b = b.concat(g) : g
		},
		stop: function() {
			return this.isRunning = !1,
			this._onUpdateCallback = null,
			this._manager.remove(this),
			this
		},
		delay: function(a) {
			return this._delayTime = a,
			this
		},
		repeat: function(a) {
			return this._repeat = a,
			this
		},
		yoyo: function(a) {
			return this._yoyo = a,
			a && 0 === this._repeat && (this._repeat = 1),
			this
		},
		easing: function(a) {
			return this._easingFunction = a,
			this
		},
		interpolation: function(a) {
			return this._interpolationFunction = a,
			this
		},
		chain: function() {
			return this._chainedTweens = arguments,
			this
		},
		loop: function() {
			return this._lastChild.chain(this),
			this
		},
		onUpdateCallback: function(a, b) {
			return this._onUpdateCallback = a,
			this._onUpdateCallbackContext = b,
			this
		},
		pause: function() {
			this._codePaused = !0,
			this._paused = !0,
			this._pausedTime = this.game.time.now
		},
		_pause: function() {
			this._codePaused || (this._paused = !0, this._pausedTime = this.game.time.now)
		},
		resume: function() {
			this._paused && (this._paused = !1, this._codePaused = !1, this._startTime += this.game.time.now - this._pausedTime)
		},
		_resume: function() {
			this._codePaused || (this._startTime += this.game.time.pauseDuration, this._paused = !1)
		},
		update: function(a) {
			var b, c, d, e, f, g, h, i;
			if (this.pendingDelete) return ! 1;
			if (this._paused || a < this._startTime) return ! 0;
			if (a < this._startTime) return ! 0;
			this._onStartCallbackFired === !1 && (this.onStart.dispatch(this._object), this._onStartCallbackFired = !0),
			c = (a - this._startTime) / this._duration,
			c = c > 1 ? 1 : c,
			d = this._easingFunction(c);
			for (b in this._valuesEnd) e = this._valuesStart[b] || 0,
			f = this._valuesEnd[b],
			f instanceof Array ? this._object[b] = this._interpolationFunction(f, d) : ("string" == typeof f && (f = e + parseFloat(f, 10)), "number" == typeof f && (this._object[b] = e + (f - e) * d));
			if (null !== this._onUpdateCallback && (this._onUpdateCallback.call(this._onUpdateCallbackContext, this, d), !this.isRunning)) return ! 1;
			if (1 == c) {
				if (this._repeat > 0) {
					isFinite(this._repeat) && this._repeat--;
					for (b in this._valuesStartRepeat)"string" == typeof this._valuesEnd[b] && (this._valuesStartRepeat[b] = this._valuesStartRepeat[b] + parseFloat(this._valuesEnd[b], 10)),
					this._yoyo && (g = this._valuesStartRepeat[b], this._valuesStartRepeat[b] = this._valuesEnd[b], this._valuesEnd[b] = g),
					this._valuesStart[b] = this._valuesStartRepeat[b];
					return this._yoyo && (this._reversed = !this._reversed),
					this._startTime = a + this._delayTime,
					this.onLoop.dispatch(this._object),
					!0
				}
				for (this.isRunning = !1, this.onComplete.dispatch(this._object), h = 0, i = this._chainedTweens.length; i > h; h++) this._chainedTweens[h].start(a);
				return ! 1
			}
			return ! 0
		}
	},
	b.Tween.prototype.constructor = b.Tween,
	b.Easing = {
		Linear: {
			None: function(a) {
				return a
			}
		},
		Quadratic: {
			In: function(a) {
				return a * a
			},
			Out: function(a) {
				return a * (2 - a)
			},
			InOut: function(a) {
				return (a *= 2) < 1 ? .5 * a * a: -.5 * (--a * (a - 2) - 1)
			}
		},
		Cubic: {
			In: function(a) {
				return a * a * a
			},
			Out: function(a) {
				return--a * a * a + 1
			},
			InOut: function(a) {
				return (a *= 2) < 1 ? .5 * a * a * a: .5 * ((a -= 2) * a * a + 2)
			}
		},
		Quartic: {
			In: function(a) {
				return a * a * a * a
			},
			Out: function(a) {
				return 1 - --a * a * a * a
			},
			InOut: function(a) {
				return (a *= 2) < 1 ? .5 * a * a * a * a: -.5 * ((a -= 2) * a * a * a - 2)
			}
		},
		Quintic: {
			In: function(a) {
				return a * a * a * a * a
			},
			Out: function(a) {
				return--a * a * a * a * a + 1
			},
			InOut: function(a) {
				return (a *= 2) < 1 ? .5 * a * a * a * a * a: .5 * ((a -= 2) * a * a * a * a + 2)
			}
		},
		Sinusoidal: {
			In: function(a) {
				return 1 - Math.cos(a * Math.PI / 2)
			},
			Out: function(a) {
				return Math.sin(a * Math.PI / 2)
			},
			InOut: function(a) {
				return.5 * (1 - Math.cos(Math.PI * a))
			}
		},
		Exponential: {
			In: function(a) {
				return 0 === a ? 0 : Math.pow(1024, a - 1)
			},
			Out: function(a) {
				return 1 === a ? 1 : 1 - Math.pow(2, -10 * a)
			},
			InOut: function(a) {
				return 0 === a ? 0 : 1 === a ? 1 : (a *= 2) < 1 ? .5 * Math.pow(1024, a - 1) : .5 * ( - Math.pow(2, -10 * (a - 1)) + 2)
			}
		},
		Circular: {
			In: function(a) {
				return 1 - Math.sqrt(1 - a * a)
			},
			Out: function(a) {
				return Math.sqrt(1 - --a * a)
			},
			InOut: function(a) {
				return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
			}
		},
		Elastic: {
			In: function(a) {
				var b, c = .1,
				d = .4;
				return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), -(c * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * 2 * Math.PI / d)))
			},
			Out: function(a) {
				var b, c = .1,
				d = .4;
				return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), c * Math.pow(2, -10 * a) * Math.sin((a - b) * 2 * Math.PI / d) + 1)
			},
			InOut: function(a) {
				var b, c = .1,
				d = .4;
				return 0 === a ? 0 : 1 === a ? 1 : (!c || 1 > c ? (c = 1, b = d / 4) : b = d * Math.asin(1 / c) / (2 * Math.PI), (a *= 2) < 1 ? -.5 * c * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - b) * 2 * Math.PI / d) : .5 * c * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - b) * 2 * Math.PI / d) + 1)
			}
		},
		Back: {
			In: function(a) {
				var b = 1.70158;
				return a * a * ((b + 1) * a - b)
			},
			Out: function(a) {
				var b = 1.70158;
				return--a * a * ((b + 1) * a + b) + 1
			},
			InOut: function(a) {
				var b = 2.5949095;
				return (a *= 2) < 1 ? .5 * a * a * ((b + 1) * a - b) : .5 * ((a -= 2) * a * ((b + 1) * a + b) + 2)
			}
		},
		Bounce: {
			In: function(a) {
				return 1 - b.Easing.Bounce.Out(1 - a)
			},
			Out: function(a) {
				return 1 / 2.75 > a ? 7.5625 * a * a: 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
			},
			InOut: function(a) {
				return.5 > a ? .5 * b.Easing.Bounce.In(2 * a) : .5 * b.Easing.Bounce.Out(2 * a - 1) + .5
			}
		}
	},
	b.Time = function(a) {
		this.game = a,
		this.time = 0,
		this.now = 0,
		this.elapsed = 0,
		this.pausedTime = 0,
		this.advancedTiming = !1,
		this.fps = 0,
		this.fpsMin = 1e3,
		this.fpsMax = 0,
		this.msMin = 1e3,
		this.msMax = 0,
		this.physicsElapsed = 0,
		this.deltaCap = 0,
		this.timeCap = 1e3,
		this.frames = 0,
		this.pauseDuration = 0,
		this.timeToCall = 0,
		this.lastTime = 0,
		this.events = new b.Timer(this.game, !1),
		this._started = 0,
		this._timeLastSecond = 0,
		this._pauseStarted = 0,
		this._justResumed = !1,
		this._timers = [],
		this._len = 0,
		this._i = 0
	},
	b.Time.prototype = {
		boot: function() {
			this._started = Date.now(),
			this.events.start()
		},
		add: function(a) {
			return this._timers.push(a),
			a
		},
		create: function(a) {
			"undefined" == typeof a && (a = !0);
			var c = new b.Timer(this.game, a);
			return this._timers.push(c),
			c
		},
		removeAll: function() {
			for (var a = 0; a < this._timers.length; a++) this._timers[a].destroy();
			this._timers = [],
			this.events.removeAll()
		},
		update: function(a) {
			if (this.now = a, this.timeToCall = this.game.math.max(0, 16 - (a - this.lastTime)), this.elapsed = this.now - this.time, this.elapsed > this.timeCap && (this.elapsed = 1 / 60), this.physicsElapsed = this.elapsed / 1e3 || 1 / 60, this.deltaCap > 0 && this.physicsElapsed > this.deltaCap && (this.physicsElapsed = this.deltaCap), this.advancedTiming && (this.msMin = this.game.math.min(this.msMin, this.elapsed), this.msMax = this.game.math.max(this.msMax, this.elapsed), this.frames++, this.now > this._timeLastSecond + 1e3 && (this.fps = Math.round(1e3 * this.frames / (this.now - this._timeLastSecond)), this.fpsMin = this.game.math.min(this.fpsMin, this.fps), this.fpsMax = this.game.math.max(this.fpsMax, this.fps), this._timeLastSecond = this.now, this.frames = 0)), this.time = this.now, this.lastTime = a + this.timeToCall, !this.game.paused) for (this.events.update(this.now), this._i = 0, this._len = this._timers.length; this._i < this._len;) this._timers[this._i].update(this.now) ? this._i++:(this._timers.splice(this._i, 1), this._len--)
		},
		gamePaused: function() {
			this._pauseStarted = this.now,
			this.events.pause();
			for (var a = this._timers.length; a--;) this._timers[a]._pause()
		},
		gameResumed: function() {
			this.time = this.now = Date.now(),
			this.pauseDuration = this.time - this._pauseStarted,
			this.events.resume();
			for (var a = this._timers.length; a--;) this._timers[a]._resume()
		},
		totalElapsedSeconds: function() {
			return.001 * (this.now - this._started)
		},
		elapsedSince: function(a) {
			return this.now - a
		},
		elapsedSecondsSince: function(a) {
			return.001 * (this.now - a)
		},
		reset: function() {
			this._started = this.now,
			this.removeAll()
		}
	},
	b.Time.prototype.constructor = b.Time,
	b.Timer = function(a, c) {
		"undefined" == typeof c && (c = !0),
		this.game = a,
		this.running = !1,
		this.autoDestroy = c,
		this.expired = !1,
		this.elapsed = 0,
		this.events = [],
		this.onComplete = new b.Signal,
		this.nextTick = 0,
		this.timeCap = 1e3,
		this.paused = !1,
		this._codePaused = !1,
		this._started = 0,
		this._pauseStarted = 0,
		this._pauseTotal = 0,
		this._now = Date.now(),
		this._len = 0,
		this._marked = 0,
		this._i = 0,
		this._diff = 0,
		this._newTick = 0
	},
	b.Timer.MINUTE = 6e4,
	b.Timer.SECOND = 1e3,
	b.Timer.HALF = 500,
	b.Timer.QUARTER = 250,
	b.Timer.prototype = {
		create: function(a, c, d, e, f, g) {
			var i, h = a;
			return h += 0 === this._now ? this.game.time.now: this._now,
			i = new b.TimerEvent(this, a, h, d, c, e, f, g),
			this.events.push(i),
			this.order(),
			this.expired = !1,
			i
		},
		add: function(a, b, c) {
			return this.create(a, !1, 0, b, c, Array.prototype.splice.call(arguments, 3))
		},
		repeat: function(a, b, c, d) {
			return this.create(a, !1, b, c, d, Array.prototype.splice.call(arguments, 4))
		},
		loop: function(a, b, c) {
			return this.create(a, !0, 0, b, c, Array.prototype.splice.call(arguments, 3))
		},
		start: function(a) {
			if (!this.running) {
				this._started = this.game.time.now + (a || 0),
				this.running = !0;
				for (var b = 0; b < this.events.length; b++) this.events[b].tick = this.events[b].delay + this._started
			}
		},
		stop: function(a) {
			this.running = !1,
			"undefined" == typeof a && (a = !0),
			a && (this.events.length = 0)
		},
		remove: function(a) {
			for (var b = 0; b < this.events.length; b++) if (this.events[b] === a) return this.events[b].pendingDelete = !0,
			!0;
			return ! 1
		},
		order: function() {
			this.events.length > 0 && (this.events.sort(this.sortHandler), this.nextTick = this.events[0].tick)
		},
		sortHandler: function(a, b) {
			return a.tick < b.tick ? -1 : a.tick > b.tick ? 1 : 0
		},
		clearPendingEvents: function() {
			for (this._i = this.events.length; this._i--;) this.events[this._i].pendingDelete && this.events.splice(this._i, 1);
			this._len = this.events.length,
			this._i = 0
		},
		update: function(a) {
			if (this.paused) return ! 0;
			if (this.elapsed = a - this._now, this._now = a, this.elapsed > this.timeCap && this.adjustEvents(a - this.elapsed), this._marked = 0, this.clearPendingEvents(), this.running && this._now >= this.nextTick && this._len > 0) {
				for (; this._i < this._len && this.running && this._now >= this.events[this._i].tick;) this._newTick = this._now + this.events[this._i].delay - (this._now - this.events[this._i].tick),
				this._newTick < 0 && (this._newTick = this._now + this.events[this._i].delay),
				this.events[this._i].loop === !0 ? (this.events[this._i].tick = this._newTick, this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)) : this.events[this._i].repeatCount > 0 ? (this.events[this._i].repeatCount--, this.events[this._i].tick = this._newTick, this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)) : (this._marked++, this.events[this._i].pendingDelete = !0, this.events[this._i].callback.apply(this.events[this._i].callbackContext, this.events[this._i].args)),
				this._i++;
				this.events.length > this._marked ? this.order() : (this.expired = !0, this.onComplete.dispatch(this))
			}
			return this.expired && this.autoDestroy ? !1 : !0
		},
		pause: function() {
			this.running && (this._codePaused = !0, this.paused || (this._pauseStarted = this.game.time.now, this.paused = !0))
		},
		_pause: function() { ! this.paused && this.running && (this._pauseStarted = this.game.time.now, this.paused = !0)
		},
		adjustEvents: function(a) {
			var b, c, d;
			for (b = 0; b < this.events.length; b++) this.events[b].pendingDelete || (c = this.events[b].tick - a, 0 > c && (c = 0), this.events[b].tick = this._now + c);
			d = this.nextTick - a,
			this.nextTick = 0 > d ? this._now: this._now + d
		},
		resume: function() {
			if (this.paused) {
				var a = this.game.time.now;
				this._pauseTotal += a - this._now,
				this._now = a,
				this.adjustEvents(this._pauseStarted),
				this.paused = !1,
				this._codePaused = !1
			}
		},
		_resume: function() {
			this._codePaused || this.resume()
		},
		removeAll: function() {
			this.onComplete.removeAll(),
			this.events.length = 0,
			this._len = 0,
			this._i = 0
		},
		destroy: function() {
			this.onComplete.removeAll(),
			this.running = !1,
			this.events = [],
			this._len = 0,
			this._i = 0
		}
	},
	Object.defineProperty(b.Timer.prototype, "next", {
		get: function() {
			return this.nextTick
		}
	}),
	Object.defineProperty(b.Timer.prototype, "duration", {
		get: function() {
			return this.running && this.nextTick > this._now ? this.nextTick - this._now: 0
		}
	}),
	Object.defineProperty(b.Timer.prototype, "length", {
		get: function() {
			return this.events.length
		}
	}),
	Object.defineProperty(b.Timer.prototype, "ms", {
		get: function() {
			return this.running ? this._now - this._started - this._pauseTotal: 0
		}
	}),
	Object.defineProperty(b.Timer.prototype, "seconds", {
		get: function() {
			return this.running ? .001 * this.ms: 0
		}
	}),
	b.Timer.prototype.constructor = b.Timer,
	b.TimerEvent = function(a, b, c, d, e, f, g, h) {
		this.timer = a,
		this.delay = b,
		this.tick = c,
		this.repeatCount = d - 1,
		this.loop = e,
		this.callback = f,
		this.callbackContext = g,
		this.args = h,
		this.pendingDelete = !1
	},
	b.TimerEvent.prototype.constructor = b.TimerEvent,
	b.AnimationManager = function(a) {
		this.sprite = a,
		this.game = a.game,
		this.currentFrame = null,
		this.currentAnim = null,
		this.updateIfVisible = !0,
		this.isLoaded = !1,
		this._frameData = null,
		this._anims = {},
		this._outputFrames = []
	},
	b.AnimationManager.prototype = {
		loadFrameData: function(a, b) {
			if (this.isLoaded) for (var c in this._anims) this._anims[c].updateFrameData(a);
			return this._frameData = a,
			"undefined" == typeof b || null === b ? this.frame = 0 : "string" == typeof b ? this.frameName = b: this.frame = b,
			this.isLoaded = !0,
			this._frameData ? !0 : !1
		},
		add: function(a, c, d, e, f) {
			return null === this._frameData ? (console.warn("No FrameData available for Phaser.Animation " + a), void 0) : (c = c || [], d = d || 60, "undefined" == typeof e && (e = !1), "undefined" == typeof f && (f = c && "number" == typeof c[0] ? !0 : !1), null === this.sprite.events.onAnimationStart && (this.sprite.events.onAnimationStart = new b.Signal, this.sprite.events.onAnimationComplete = new b.Signal, this.sprite.events.onAnimationLoop = new b.Signal), this._outputFrames.length = 0, this._frameData.getFrameIndexes(c, f, this._outputFrames), this._anims[a] = new b.Animation(this.game, this.sprite, a, this._frameData, this._outputFrames, d, e), this.currentAnim = this._anims[a], this.currentFrame = this.currentAnim.currentFrame, this.sprite.__tilePattern && (this.sprite.__tilePattern = !1, this.tilingTexture = !1), this._anims[a])
		},
		validateFrames: function(a, b) {
			"undefined" == typeof b && (b = !0);
			for (var c = 0; c < a.length; c++) if (b === !0) {
				if (a[c] > this._frameData.total) return ! 1
			} else if (this._frameData.checkFrameName(a[c]) === !1) return ! 1;
			return ! 0
		},
		play: function(a, b, c, d) {
			return this._anims[a] ? this.currentAnim === this._anims[a] ? this.currentAnim.isPlaying === !1 ? (this.currentAnim.paused = !1, this.currentAnim.play(b, c, d)) : this.currentAnim: (this.currentAnim && this.currentAnim.isPlaying && this.currentAnim.stop(), this.currentAnim = this._anims[a], this.currentAnim.paused = !1, this.currentFrame = this.currentAnim.currentFrame, this.currentAnim.play(b, c, d)) : void 0
		},
		stop: function(a, b) {
			"undefined" == typeof b && (b = !1),
			"string" == typeof a ? this._anims[a] && (this.currentAnim = this._anims[a], this.currentAnim.stop(b)) : this.currentAnim && this.currentAnim.stop(b)
		},
		update: function() {
			return this.updateIfVisible && !this.sprite.visible ? !1 : this.currentAnim && this.currentAnim.update() === !0 ? (this.currentFrame = this.currentAnim.currentFrame, !0) : !1
		},
		next: function(a) {
			this.currentAnim && (this.currentAnim.next(a), this.currentFrame = this.currentAnim.currentFrame)
		},
		previous: function(a) {
			this.currentAnim && (this.currentAnim.previous(a), this.currentFrame = this.currentAnim.currentFrame)
		},
		getAnimation: function(a) {
			return "string" == typeof a && this._anims[a] ? this._anims[a] : null
		},
		refreshFrame: function() {
			this.sprite.setTexture(PIXI.TextureCache[this.currentFrame.uuid]),
			this.sprite.__tilePattern && (this.__tilePattern = !1, this.tilingTexture = !1)
		},
		destroy: function() {
			var a = null;
			for (a in this._anims) this._anims.hasOwnProperty(a) && this._anims[a].destroy();
			this._anims = {},
			this._frameData = null,
			this._frameIndex = 0,
			this.currentAnim = null,
			this.currentFrame = null
		}
	},
	b.AnimationManager.prototype.constructor = b.AnimationManager,
	Object.defineProperty(b.AnimationManager.prototype, "frameData", {
		get: function() {
			return this._frameData
		}
	}),
	Object.defineProperty(b.AnimationManager.prototype, "frameTotal", {
		get: function() {
			return this._frameData ? this._frameData.total: -1
		}
	}),
	Object.defineProperty(b.AnimationManager.prototype, "paused", {
		get: function() {
			return this.currentAnim.isPaused
		},
		set: function(a) {
			this.currentAnim.paused = a
		}
	}),
	Object.defineProperty(b.AnimationManager.prototype, "frame", {
		get: function() {
			return this.currentFrame ? this._frameIndex: void 0
		},
		set: function(a) {
			"number" == typeof a && this._frameData && null !== this._frameData.getFrame(a) && (this.currentFrame = this._frameData.getFrame(a), this.currentFrame && (this._frameIndex = a, this.sprite.setFrame(this.currentFrame), this.sprite.__tilePattern && (this.__tilePattern = !1, this.tilingTexture = !1)))
		}
	}),
	Object.defineProperty(b.AnimationManager.prototype, "frameName", {
		get: function() {
			return this.currentFrame ? this.currentFrame.name: void 0
		},
		set: function(a) {
			"string" == typeof a && this._frameData && null !== this._frameData.getFrameByName(a) ? (this.currentFrame = this._frameData.getFrameByName(a), this.currentFrame && (this._frameIndex = this.currentFrame.index, this.sprite.setFrame(this.currentFrame), this.sprite.__tilePattern && (this.__tilePattern = !1, this.tilingTexture = !1))) : console.warn("Cannot set frameName: " + a)
		}
	}),
	b.Animation = function(a, c, d, e, f, g, h) {
		this.game = a,
		this._parent = c,
		this._frameData = e,
		this.name = d,
		this._frames = [],
		this._frames = this._frames.concat(f),
		this.delay = 1e3 / g,
		this.loop = h,
		this.loopCount = 0,
		this.killOnComplete = !1,
		this.isFinished = !1,
		this.isPlaying = !1,
		this.isPaused = !1,
		this._pauseStartTime = 0,
		this._frameIndex = 0,
		this._frameDiff = 0,
		this._frameSkip = 1,
		this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]),
		this.onStart = new b.Signal,
		this.onComplete = new b.Signal,
		this.onLoop = new b.Signal,
		this.game.onPause.add(this.onPause, this),
		this.game.onResume.add(this.onResume, this)
	},
	b.Animation.prototype = {
		play: function(a, b, c) {
			return "number" == typeof a && (this.delay = 1e3 / a),
			"boolean" == typeof b && (this.loop = b),
			"undefined" != typeof c && (this.killOnComplete = c),
			this.isPlaying = !0,
			this.isFinished = !1,
			this.paused = !1,
			this.loopCount = 0,
			this._timeLastFrame = this.game.time.now,
			this._timeNextFrame = this.game.time.now + this.delay,
			this._frameIndex = 0,
			this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]),
			this._parent.setFrame(this.currentFrame),
			this._parent.__tilePattern && (this._parent.__tilePattern = !1, this._parent.tilingTexture = !1),
			this._parent.events.onAnimationStart.dispatch(this._parent, this),
			this.onStart.dispatch(this._parent, this),
			this
		},
		restart: function() {
			this.isPlaying = !0,
			this.isFinished = !1,
			this.paused = !1,
			this.loopCount = 0,
			this._timeLastFrame = this.game.time.now,
			this._timeNextFrame = this.game.time.now + this.delay,
			this._frameIndex = 0,
			this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]),
			this._parent.setFrame(this.currentFrame),
			this.onStart.dispatch(this._parent, this)
		},
		setFrame: function(a, b) {
			var c, d;
			if ("undefined" == typeof b && (b = !1), "string" == typeof a) for (d = 0; d < this._frames.length; d++) this._frameData.getFrame(this._frames[d]).name === a && (c = d);
			else if ("number" == typeof a) if (b) c = a;
			else for (d = 0; d < this._frames.length; d++) this.frames[d] === c && (c = d);
			c && (this._frameIndex = c - 1, this._timeNextFrame = this.game.time.now, this.update())
		},
		stop: function(a, b) {
			"undefined" == typeof a && (a = !1),
			"undefined" == typeof b && (b = !1),
			this.isPlaying = !1,
			this.isFinished = !0,
			this.paused = !1,
			a && (this.currentFrame = this._frameData.getFrame(this._frames[0]), this._parent.setFrame(this.currentFrame)),
			b && (this._parent.events.onAnimationComplete.dispatch(this._parent, this), this.onComplete.dispatch(this._parent, this))
		},
		onPause: function() {
			this.isPlaying && (this._frameDiff = this._timeNextFrame - this.game.time.now)
		},
		onResume: function() {
			this.isPlaying && (this._timeNextFrame = this.game.time.now + this._frameDiff)
		},
		update: function() {
			return this.isPaused ? !1 : this.isPlaying && this.game.time.now >= this._timeNextFrame ? (this._frameSkip = 1, this._frameDiff = this.game.time.now - this._timeNextFrame, this._timeLastFrame = this.game.time.now, this._frameDiff > this.delay && (this._frameSkip = Math.floor(this._frameDiff / this.delay), this._frameDiff -= this._frameSkip * this.delay), this._timeNextFrame = this.game.time.now + (this.delay - this._frameDiff), this._frameIndex += this._frameSkip, this._frameIndex >= this._frames.length && (this.loop ? (this._frameIndex %= this._frames.length, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.loopCount++, this._parent.events.onAnimationLoop.dispatch(this._parent, this), this.onLoop.dispatch(this._parent, this)) : this.complete()), this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.currentFrame && (this._parent.setFrame(this.currentFrame), this._parent.__tilePattern && (this._parent.__tilePattern = !1, this._parent.tilingTexture = !1)), !0) : !1
		},
		next: function(a) {
			"undefined" == typeof a && (a = 1);
			var b = this._frameIndex + a;
			b >= this._frames.length && (this.loop ? b %= this._frames.length: b = this._frames.length - 1),
			b !== this._frameIndex && (this._frameIndex = b, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.currentFrame && (this._parent.setFrame(this.currentFrame), this._parent.__tilePattern && (this._parent.__tilePattern = !1, this._parent.tilingTexture = !1)))
		},
		previous: function(a) {
			"undefined" == typeof a && (a = 1);
			var b = this._frameIndex - a;
			0 > b && (this.loop ? b = this._frames.length + b: b++),
			b !== this._frameIndex && (this._frameIndex = b, this.currentFrame = this._frameData.getFrame(this._frames[this._frameIndex]), this.currentFrame && (this._parent.setFrame(this.currentFrame), this._parent.__tilePattern && (this._parent.__tilePattern = !1, this._parent.tilingTexture = !1)))
		},
		updateFrameData: function(a) {
			this._frameData = a,
			this.currentFrame = this._frameData ? this._frameData.getFrame(this._frames[this._frameIndex % this._frames.length]) : null
		},
		destroy: function() {
			this.game.onPause.remove(this.onPause, this),
			this.game.onResume.remove(this.onResume, this),
			this.game = null,
			this._parent = null,
			this._frames = null,
			this._frameData = null,
			this.currentFrame = null,
			this.isPlaying = !1,
			this.onStart.dispose(),
			this.onLoop.dispose(),
			this.onComplete.dispose()
		},
		complete: function() {
			this.isPlaying = !1,
			this.isFinished = !0,
			this.paused = !1,
			this._parent.events.onAnimationComplete.dispatch(this._parent, this),
			this.onComplete.dispatch(this._parent, this),
			this.killOnComplete && this._parent.kill()
		}
	},
	b.Animation.prototype.constructor = b.Animation,
	Object.defineProperty(b.Animation.prototype, "paused", {
		get: function() {
			return this.isPaused
		},
		set: function(a) {
			this.isPaused = a,
			a ? this._pauseStartTime = this.game.time.now: this.isPlaying && (this._timeNextFrame = this.game.time.now + this.delay)
		}
	}),
	Object.defineProperty(b.Animation.prototype, "frameTotal", {
		get: function() {
			return this._frames.length
		}
	}),
	Object.defineProperty(b.Animation.prototype, "frame", {
		get: function() {
			return null !== this.currentFrame ? this.currentFrame.index: this._frameIndex
		},
		set: function(a) {
			this.currentFrame = this._frameData.getFrame(this._frames[a]),
			null !== this.currentFrame && (this._frameIndex = a, this._parent.setFrame(this.currentFrame))
		}
	}),
	Object.defineProperty(b.Animation.prototype, "speed", {
		get: function() {
			return Math.round(1e3 / this.delay)
		},
		set: function(a) {
			a >= 1 && (this.delay = 1e3 / a)
		}
	}),
	b.Animation.generateFrameNames = function(a, c, d, e, f) {
		var g, h, i;
		if ("undefined" == typeof e && (e = ""), g = [], h = "", d > c) for (i = c; d >= i; i++) h = "number" == typeof f ? b.Utils.pad(i.toString(), f, "0", 1) : i.toString(),
		h = a + h + e,
		g.push(h);
		else for (i = c; i >= d; i--) h = "number" == typeof f ? b.Utils.pad(i.toString(), f, "0", 1) : i.toString(),
		h = a + h + e,
		g.push(h);
		return g
	},
	b.Frame = function(a, c, d, e, f, g, h) {
		this.index = a,
		this.x = c,
		this.y = d,
		this.width = e,
		this.height = f,
		this.name = g,
		this.uuid = h,
		this.centerX = Math.floor(e / 2),
		this.centerY = Math.floor(f / 2),
		this.distance = b.Math.distance(0, 0, e, f),
		this.rotated = !1,
		this.rotationDirection = "cw",
		this.trimmed = !1,
		this.sourceSizeW = e,
		this.sourceSizeH = f,
		this.spriteSourceSizeX = 0,
		this.spriteSourceSizeY = 0,
		this.spriteSourceSizeW = 0,
		this.spriteSourceSizeH = 0,
		this.right = this.x + this.width,
		this.bottom = this.y + this.height
	},
	b.Frame.prototype = {
		setTrim: function(a, b, c, d, e, f, g) {
			this.trimmed = a,
			a && (this.sourceSizeW = b, this.sourceSizeH = c, this.centerX = Math.floor(b / 2), this.centerY = Math.floor(c / 2), this.spriteSourceSizeX = d, this.spriteSourceSizeY = e, this.spriteSourceSizeW = f, this.spriteSourceSizeH = g)
		},
		getRect: function(a) {
			return "undefined" == typeof a ? a = new b.Rectangle(this.x, this.y, this.width, this.height) : a.setTo(this.x, this.y, this.width, this.height),
			a
		}
	},
	b.Frame.prototype.constructor = b.Frame,
	b.FrameData = function() {
		this._frames = [],
		this._frameNames = []
	},
	b.FrameData.prototype = {
		addFrame: function(a) {
			return a.index = this._frames.length,
			this._frames.push(a),
			"" !== a.name && (this._frameNames[a.name] = a.index),
			a
		},
		getFrame: function(a) {
			return a > this._frames.length && (a = 0),
			this._frames[a]
		},
		getFrameByName: function(a) {
			return "number" == typeof this._frameNames[a] ? this._frames[this._frameNames[a]] : null
		},
		checkFrameName: function(a) {
			return null == this._frameNames[a] ? !1 : !0
		},
		getFrameRange: function(a, b, c) {
			"undefined" == typeof c && (c = []);
			for (var d = a; b >= d; d++) c.push(this._frames[d]);
			return c
		},
		getFrames: function(a, b, c) {
			var d, e;
			if ("undefined" == typeof b && (b = !0), "undefined" == typeof c && (c = []), "undefined" == typeof a || 0 === a.length) for (d = 0; d < this._frames.length; d++) c.push(this._frames[d]);
			else for (d = 0, e = a.length; e > d; d++) b ? c.push(this.getFrame(a[d])) : c.push(this.getFrameByName(a[d]));
			return c
		},
		getFrameIndexes: function(a, b, c) {
			var d, e;
			if ("undefined" == typeof b && (b = !0), "undefined" == typeof c && (c = []), "undefined" == typeof a || 0 === a.length) for (d = 0, e = this._frames.length; e > d; d++) c.push(this._frames[d].index);
			else for (d = 0, e = a.length; e > d; d++) b ? c.push(a[d]) : this.getFrameByName(a[d]) && c.push(this.getFrameByName(a[d]).index);
			return c
		}
	},
	b.FrameData.prototype.constructor = b.FrameData,
	Object.defineProperty(b.FrameData.prototype, "total", {
		get: function() {
			return this._frames.length
		}
	}),
	b.AnimationParser = {
		spriteSheet: function(a, c, d, e, f, g, h) {
			var j, k, l, m, n, o, p, q, r, s, i = a.cache.getImage(c);
			if (null == i) return null;
			if (j = i.width, k = i.height, 0 >= d && (d = Math.floor( - j / Math.min( - 1, d))), 0 >= e && (e = Math.floor( - k / Math.min( - 1, e))), l = Math.floor((j - g) / (d + h)), m = Math.floor((k - g) / (e + h)), n = l * m, -1 !== f && (n = f), 0 === j || 0 === k || d > j || e > k || 0 === n) return console.warn("Phaser.AnimationParser.spriteSheet: '" + c + "'s width/height zero or width/height < given frameWidth/frameHeight"),
			null;
			for (o = new b.FrameData, p = g, q = g, r = 0; n > r; r++) s = a.rnd.uuid(),
			o.addFrame(new b.Frame(r, p, q, d, e, "", s)),
			PIXI.TextureCache[s] = new PIXI.Texture(PIXI.BaseTextureCache[c], {
				x: p,
				y: q,
				width: d,
				height: e
			}),
			p += d + h,
			p + d > j && (p = g, q += e + h);
			return o
		},
		JSONData: function(a, c, d) {
			var e, f, g, h, i;
			if (!c["frames"]) return console.warn("Phaser.AnimationParser.JSONData: Invalid Texture Atlas JSON given, missing 'frames' array"),
			console.log(c),
			void 0;
			for (e = new b.FrameData, f = c["frames"], h = 0; h < f.length; h++) i = a.rnd.uuid(),
			g = e.addFrame(new b.Frame(h, f[h].frame.x, f[h].frame.y, f[h].frame.w, f[h].frame.h, f[h].filename, i)),
			PIXI.TextureCache[i] = new PIXI.Texture(PIXI.BaseTextureCache[d], {
				x: f[h].frame.x,
				y: f[h].frame.y,
				width: f[h].frame.w,
				height: f[h].frame.h
			}),
			f[h].trimmed && g.setTrim(f[h].trimmed, f[h].sourceSize.w, f[h].sourceSize.h, f[h].spriteSourceSize.x, f[h].spriteSourceSize.y, f[h].spriteSourceSize.w, f[h].spriteSourceSize.h);
			return e
		},
		JSONDataHash: function(a, c, d) {
			var e, f, g, h, i, j;
			if (!c["frames"]) return console.warn("Phaser.AnimationParser.JSONDataHash: Invalid Texture Atlas JSON given, missing 'frames' object"),
			console.log(c),
			void 0;
			e = new b.FrameData,
			f = c["frames"],
			h = 0;
			for (i in f) j = a.rnd.uuid(),
			g = e.addFrame(new b.Frame(h, f[i].frame.x, f[i].frame.y, f[i].frame.w, f[i].frame.h, i, j)),
			PIXI.TextureCache[j] = new PIXI.Texture(PIXI.BaseTextureCache[d], {
				x: f[i].frame.x,
				y: f[i].frame.y,
				width: f[i].frame.w,
				height: f[i].frame.h
			}),
			f[i].trimmed && g.setTrim(f[i].trimmed, f[i].sourceSize.w, f[i].sourceSize.h, f[i].spriteSourceSize.x, f[i].spriteSourceSize.y, f[i].spriteSourceSize.w, f[i].spriteSourceSize.h),
			h++;
			return e
		},
		XMLData: function(a, c, d) {
			var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
			if (!c.getElementsByTagName("TextureAtlas")) return console.warn("Phaser.AnimationParser.XMLData: Invalid Texture Atlas XML given, missing <TextureAtlas> tag"),
			void 0;
			for (e = new b.FrameData, f = c.getElementsByTagName("SubTexture"), s = 0; s < f.length; s++) h = a.rnd.uuid(),
			j = f[s].attributes,
			i = j.name.nodeValue,
			k = parseInt(j.x.nodeValue, 10),
			l = parseInt(j.y.nodeValue, 10),
			m = parseInt(j.width.nodeValue, 10),
			n = parseInt(j.height.nodeValue, 10),
			o = null,
			p = null,
			j.frameX && (o = Math.abs(parseInt(j.frameX.nodeValue, 10)), p = Math.abs(parseInt(j.frameY.nodeValue, 10)), q = parseInt(j.frameWidth.nodeValue, 10), r = parseInt(j.frameHeight.nodeValue, 10)),
			g = e.addFrame(new b.Frame(s, k, l, m, n, i, h)),
			PIXI.TextureCache[h] = new PIXI.Texture(PIXI.BaseTextureCache[d], {
				x: k,
				y: l,
				width: m,
				height: n
			}),
			(null !== o || null !== p) && g.setTrim(!0, m, n, o, p, q, r);
			return e
		}
	},
	b.Cache = function(a) {
		this.game = a,
		this._canvases = {},
		this._images = {},
		this._textures = {},
		this._sounds = {},
		this._text = {},
		this._json = {},
		this._physics = {},
		this._tilemaps = {},
		this._binary = {},
		this._bitmapDatas = {},
		this._bitmapFont = {},
		this.addDefaultImage(),
		this.addMissingImage(),
		this.onSoundUnlock = new b.Signal,
		this._cacheMap = [],
		this._cacheMap[b.Cache.CANVAS] = this._canvases,
		this._cacheMap[b.Cache.IMAGE] = this._images,
		this._cacheMap[b.Cache.TEXTURE] = this._textures,
		this._cacheMap[b.Cache.SOUND] = this._sounds,
		this._cacheMap[b.Cache.TEXT] = this._text,
		this._cacheMap[b.Cache.PHYSICS] = this._physics,
		this._cacheMap[b.Cache.TILEMAP] = this._tilemaps,
		this._cacheMap[b.Cache.BINARY] = this._binary,
		this._cacheMap[b.Cache.BITMAPDATA] = this._bitmapDatas,
		this._cacheMap[b.Cache.BITMAPFONT] = this._bitmapFont,
		this._cacheMap[b.Cache.JSON] = this._json
	},
	b.Cache.CANVAS = 1,
	b.Cache.IMAGE = 2,
	b.Cache.TEXTURE = 3,
	b.Cache.SOUND = 4,
	b.Cache.TEXT = 5,
	b.Cache.PHYSICS = 6,
	b.Cache.TILEMAP = 7,
	b.Cache.BINARY = 8,
	b.Cache.BITMAPDATA = 9,
	b.Cache.BITMAPFONT = 10,
	b.Cache.JSON = 11,
	b.Cache.prototype = {
		addCanvas: function(a, b, c) {
			this._canvases[a] = {
				canvas: b,
				context: c
			}
		},
		addBinary: function(a, b) {
			this._binary[a] = b
		},
		addBitmapData: function(a, b) {
			return this._bitmapDatas[a] = b,
			b
		},
		addRenderTexture: function(a, c) {
			var d = new b.Frame(0, 0, 0, c.width, c.height, "", "");
			this._textures[a] = {
				texture: c,
				frame: d
			}
		},
		addSpriteSheet: function(a, c, d, e, f, g, h, i) {
			this._images[a] = {
				url: c,
				data: d,
				spriteSheet: !0,
				frameWidth: e,
				frameHeight: f,
				margin: h,
				spacing: i
			},
			PIXI.BaseTextureCache[a] = new PIXI.BaseTexture(d),
			PIXI.TextureCache[a] = new PIXI.Texture(PIXI.BaseTextureCache[a]),
			this._images[a].frameData = b.AnimationParser.spriteSheet(this.game, a, e, f, g, h, i)
		},
		addTilemap: function(a, b, c, d) {
			this._tilemaps[a] = {
				url: b,
				data: c,
				format: d
			}
		},
		addTextureAtlas: function(a, c, d, e, f) {
			this._images[a] = {
				url: c,
				data: d,
				spriteSheet: !0
			},
			PIXI.BaseTextureCache[a] = new PIXI.BaseTexture(d),
			PIXI.TextureCache[a] = new PIXI.Texture(PIXI.BaseTextureCache[a]),
			f == b.Loader.TEXTURE_ATLAS_JSON_ARRAY ? this._images[a].frameData = b.AnimationParser.JSONData(this.game, e, a) : f == b.Loader.TEXTURE_ATLAS_JSON_HASH ? this._images[a].frameData = b.AnimationParser.JSONDataHash(this.game, e, a) : f == b.Loader.TEXTURE_ATLAS_XML_STARLING && (this._images[a].frameData = b.AnimationParser.XMLData(this.game, e, a))
		},
		addBitmapFont: function(a, c, d, e, f, g) {
			this._images[a] = {
				url: c,
				data: d,
				spriteSheet: !0
			},
			PIXI.BaseTextureCache[a] = new PIXI.BaseTexture(d),
			PIXI.TextureCache[a] = new PIXI.Texture(PIXI.BaseTextureCache[a]),
			b.LoaderParser.bitmapFont(this.game, e, a, f, g)
		},
		addPhysicsData: function(a, b, c, d) {
			this._physics[a] = {
				url: b,
				data: c,
				format: d
			}
		},
		addDefaultImage: function() {
			var a = new Image;
			a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==",
			this._images["__default"] = {
				url: null,
				data: a,
				spriteSheet: !1
			},
			this._images["__default"].frame = new b.Frame(0, 0, 0, 32, 32, "", ""),
			PIXI.BaseTextureCache["__default"] = new PIXI.BaseTexture(a),
			PIXI.TextureCache["__default"] = new PIXI.Texture(PIXI.BaseTextureCache["__default"])
		},
		addMissingImage: function() {
			var a = new Image;
			a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJ9JREFUeNq01ssOwyAMRFG46v//Mt1ESmgh+DFmE2GPOBARKb2NVjo+17PXLD8a1+pl5+A+wSgFygymWYHBb0FtsKhJDdZlncG2IzJ4ayoMDv20wTmSMzClEgbWYNTAkQ0Z+OJ+A/eWnAaR9+oxCF4Os0H8htsMUp+pwcgBBiMNnAwF8GqIgL2hAzaGFFgZauDPKABmowZ4GL369/0rwACp2yA/ttmvsQAAAABJRU5ErkJggg==",
			this._images["__missing"] = {
				url: null,
				data: a,
				spriteSheet: !1
			},
			this._images["__missing"].frame = new b.Frame(0, 0, 0, 32, 32, "", ""),
			PIXI.BaseTextureCache["__missing"] = new PIXI.BaseTexture(a),
			PIXI.TextureCache["__missing"] = new PIXI.Texture(PIXI.BaseTextureCache["__missing"])
		},
		addText: function(a, b, c) {
			this._text[a] = {
				url: b,
				data: c
			}
		},
		addJSON: function(a, b, c) {
			this._json[a] = {
				url: b,
				data: c
			}
		},
		addImage: function(a, c, d) {
			this._images[a] = {
				url: c,
				data: d,
				spriteSheet: !1
			},
			this._images[a].frame = new b.Frame(0, 0, 0, d.width, d.height, a, this.game.rnd.uuid()),
			PIXI.BaseTextureCache[a] = new PIXI.BaseTexture(d),
			PIXI.TextureCache[a] = new PIXI.Texture(PIXI.BaseTextureCache[a])
		},
		addSound: function(a, b, c, d, e) {
			d = d || !0,
			e = e || !1;
			var f = !1;
			e && (f = !0),
			this._sounds[a] = {
				url: b,
				data: c,
				isDecoding: !1,
				decoded: f,
				webAudio: d,
				audioTag: e,
				locked: this.game.sound.touchLocked
			}
		},
		reloadSound: function(a) {
			var b = this;
			this._sounds[a] && (this._sounds[a].data.src = this._sounds[a].url, this._sounds[a].data.addEventListener("canplaythrough",
			function() {
				return b.reloadSoundComplete(a)
			},
			!1), this._sounds[a].data.load())
		},
		reloadSoundComplete: function(a) {
			this._sounds[a] && (this._sounds[a].locked = !1, this.onSoundUnlock.dispatch(a))
		},
		updateSound: function(a, b, c) {
			this._sounds[a] && (this._sounds[a][b] = c)
		},
		decodedSound: function(a, b) {
			this._sounds[a].data = b,
			this._sounds[a].decoded = !0,
			this._sounds[a].isDecoding = !1
		},
		getCanvas: function(a) {
			return this._canvases[a] ? this._canvases[a].canvas: (console.warn('Phaser.Cache.getCanvas: Invalid key: "' + a + '"'), void 0)
		},
		getBitmapData: function(a) {
			return this._bitmapDatas[a] ? this._bitmapDatas[a] : (console.warn('Phaser.Cache.getBitmapData: Invalid key: "' + a + '"'), void 0)
		},
		getBitmapFont: function(a) {
			return this._bitmapFont[a] ? this._bitmapFont[a] : (console.warn('Phaser.Cache.getBitmapFont: Invalid key: "' + a + '"'), void 0)
		},
		getPhysicsData: function(a, b, c) {
			var d, e;
			if ("undefined" == typeof b || null === b) {
				if (this._physics[a]) return this._physics[a].data;
				console.warn('Phaser.Cache.getPhysicsData: Invalid key: "' + a + '"')
			} else if (this._physics[a] && this._physics[a].data[b]) {
				if (d = this._physics[a].data[b], !d || !c) return d;
				for (e in d) if (e = d[e], e.fixtureKey === c) return e;
				console.warn('Phaser.Cache.getPhysicsData: Could not find given fixtureKey: "' + c + " in " + a + '"')
			} else console.warn('Phaser.Cache.getPhysicsData: Invalid key/object: "' + a + " / " + b + '"');
			return null
		},
		checkKey: function(a, b) {
			return this._cacheMap[a][b] ? !0 : !1
		},
		checkCanvasKey: function(a) {
			return this.checkKey(b.Cache.CANVAS, a)
		},
		checkImageKey: function(a) {
			return this.checkKey(b.Cache.IMAGE, a)
		},
		checkTextureKey: function(a) {
			return this.checkKey(b.Cache.TEXTURE, a)
		},
		checkSoundKey: function(a) {
			return this.checkKey(b.Cache.SOUND, a)
		},
		checkTextKey: function(a) {
			return this.checkKey(b.Cache.TEXT, a)
		},
		checkPhysicsKey: function(a) {
			return this.checkKey(b.Cache.PHYSICS, a)
		},
		checkTilemapKey: function(a) {
			return this.checkKey(b.Cache.TILEMAP, a)
		},
		checkBinaryKey: function(a) {
			return this.checkKey(b.Cache.BINARY, a)
		},
		checkBitmapDataKey: function(a) {
			return this.checkKey(b.Cache.BITMAPDATA, a)
		},
		checkBitmapFontKey: function(a) {
			return this.checkKey(b.Cache.BITMAPFONT, a)
		},
		checkJSONKey: function(a) {
			return this.checkKey(b.Cache.JSON, a)
		},
		getImage: function(a) {
			return this._images[a] ? this._images[a].data: (console.warn('Phaser.Cache.getImage: Invalid key: "' + a + '"'), void 0)
		},
		getTilemapData: function(a) {
			return this._tilemaps[a] ? this._tilemaps[a] : (console.warn('Phaser.Cache.getTilemapData: Invalid key: "' + a + '"'), void 0)
		},
		getFrameData: function(a) {
			return this._images[a] && this._images[a].frameData ? this._images[a].frameData: null
		},
		updateFrameData: function(a, b) {
			this._images[a] && (this._images[a].spriteSheet = !0, this._images[a].frameData = b)
		},
		getFrameByIndex: function(a, b) {
			return this._images[a] && this._images[a].frameData ? this._images[a].frameData.getFrame(b) : null
		},
		getFrameByName: function(a, b) {
			return this._images[a] && this._images[a].frameData ? this._images[a].frameData.getFrameByName(b) : null
		},
		getFrame: function(a) {
			return this._images[a] && this._images[a].spriteSheet === !1 ? this._images[a].frame: null
		},
		getTextureFrame: function(a) {
			return this._textures[a] ? this._textures[a].frame: null
		},
		getTexture: function(a) {
			return this._textures[a] ? this._textures[a] : (console.warn('Phaser.Cache.getTexture: Invalid key: "' + a + '"'), void 0)
		},
		getSound: function(a) {
			return this._sounds[a] ? this._sounds[a] : (console.warn('Phaser.Cache.getSound: Invalid key: "' + a + '"'), void 0)
		},
		getSoundData: function(a) {
			return this._sounds[a] ? this._sounds[a].data: (console.warn('Phaser.Cache.getSoundData: Invalid key: "' + a + '"'), void 0)
		},
		isSoundDecoded: function(a) {
			return this._sounds[a] ? this._sounds[a].decoded: void 0
		},
		isSoundReady: function(a) {
			return this._sounds[a] && this._sounds[a].decoded && this.game.sound.touchLocked === !1
		},
		isSpriteSheet: function(a) {
			return this._images[a] ? this._images[a].spriteSheet: !1
		},
		getText: function(a) {
			return this._text[a] ? this._text[a].data: (console.warn('Phaser.Cache.getText: Invalid key: "' + a + '"'), void 0)
		},
		getJSON: function(a) {
			return this._json[a] ? this._json[a].data: (console.warn('Phaser.Cache.getJSON: Invalid key: "' + a + '"'), void 0)
		},
		getBinary: function(a) {
			return this._binary[a] ? this._binary[a] : (console.warn('Phaser.Cache.getBinary: Invalid key: "' + a + '"'), void 0)
		},
		getKeys: function(a) {
			var d, e, c = null;
			switch (a) {
			case b.Cache.CANVAS:
				c = this._canvases;
				break;
			case b.Cache.IMAGE:
				c = this._images;
				break;
			case b.Cache.TEXTURE:
				c = this._textures;
				break;
			case b.Cache.SOUND:
				c = this._sounds;
				break;
			case b.Cache.TEXT:
				c = this._text;
				break;
			case b.Cache.PHYSICS:
				c = this._physics;
				break;
			case b.Cache.TILEMAP:
				c = this._tilemaps;
				break;
			case b.Cache.BINARY:
				c = this._binary;
				break;
			case b.Cache.BITMAPDATA:
				c = this._bitmapDatas;
				break;
			case b.Cache.BITMAPFONT:
				c = this._bitmapFont;
				break;
			case b.Cache.JSON:
				c = this._json
			}
			if (c) {
				d = [];
				for (e in c)"__default" !== e && "__missing" !== e && d.push(e);
				return d
			}
		},
		removeCanvas: function(a) {
			delete this._canvases[a]
		},
		removeImage: function(a) {
			delete this._images[a]
		},
		removeSound: function(a) {
			delete this._sounds[a]
		},
		removeText: function(a) {
			delete this._text[a]
		},
		removeJSON: function(a) {
			delete this._json[a]
		},
		removePhysics: function(a) {
			delete this._physics[a]
		},
		removeTilemap: function(a) {
			delete this._tilemaps[a]
		},
		removeBinary: function(a) {
			delete this._binary[a]
		},
		removeBitmapData: function(a) {
			delete this._bitmapDatas[a]
		},
		removeBitmapFont: function(a) {
			delete this._bitmapFont[a]
		},
		destroy: function() {
			var a;
			for (a in this._canvases) delete this._canvases[a];
			for (a in this._images)"__default" !== a && "__missing" !== a && delete this._images[a];
			for (a in this._sounds) delete this._sounds[a];
			for (a in this._text) delete this._text[a];
			for (a in this._json) delete this._json[a];
			for (a in this._textures) delete this._textures[a];
			for (a in this._physics) delete this._physics[a];
			for (a in this._tilemaps) delete this._tilemaps[a];
			for (a in this._binary) delete this._binary[a];
			for (a in this._bitmapDatas) delete this._bitmapDatas[a];
			for (a in this._bitmapFont) delete this._bitmapFont[a]
		}
	},
	b.Cache.prototype.constructor = b.Cache,
	b.Loader = function(a) {
		this.game = a,
		this.isLoading = !1,
		this.hasLoaded = !1,
		this.progress = 0,
		this.progressFloat = 0,
		this.preloadSprite = null,
		this.crossOrigin = !1,
		this.baseURL = "",
		this.onLoadStart = new b.Signal,
		this.onFileStart = new b.Signal,
		this.onFileComplete = new b.Signal,
		this.onFileError = new b.Signal,
		this.onLoadComplete = new b.Signal,
		this.onPackComplete = new b.Signal,
		this._packList = [],
		this._packIndex = 0,
		this._fileList = [],
		this._fileIndex = 0,
		this._progressChunk = 0,
		this._xhr = new XMLHttpRequest,
		this._ajax = null
	},
	b.Loader.TEXTURE_ATLAS_JSON_ARRAY = 0,
	b.Loader.TEXTURE_ATLAS_JSON_HASH = 1,
	b.Loader.TEXTURE_ATLAS_XML_STARLING = 2,
	b.Loader.PHYSICS_LIME_CORONA_JSON = 3,
	b.Loader.PHYSICS_PHASER_JSON = 4,
	b.Loader.prototype = {
		setPreloadSprite: function(a, c) {
			c = c || 0,
			this.preloadSprite = {
				sprite: a,
				direction: c,
				width: a.width,
				height: a.height,
				rect: null
			},
			this.preloadSprite.rect = 0 === c ? new b.Rectangle(0, 0, 1, a.height) : new b.Rectangle(0, 0, a.width, 1),
			a.crop(this.preloadSprite.rect),
			a.visible = !0
		},
		checkKeyExists: function(a, b) {
			if (this._fileList.length > 0) for (var c = 0; c < this._fileList.length; c++) if (this._fileList[c].type === a && this._fileList[c].key === b) return ! 0;
			return ! 1
		},
		getAssetIndex: function(a, b) {
			if (this._fileList.length > 0) for (var c = 0; c < this._fileList.length; c++) if (this._fileList[c].type === a && this._fileList[c].key === b) return c;
			return - 1
		},
		getAsset: function(a, b) {
			if (this._fileList.length > 0) for (var c = 0; c < this._fileList.length; c++) if (this._fileList[c].type === a && this._fileList[c].key === b) return {
				index: c,
				file: this._fileList[c]
			};
			return ! 1
		},
		reset: function() {
			this.preloadSprite = null,
			this.isLoading = !1,
			this._packList.length = 0,
			this._packIndex = 0,
			this._fileList.length = 0,
			this._fileIndex = 0
		},
		addToFileList: function(a, b, c, d) {
			var f, e = {
				type: a,
				key: b,
				url: c,
				data: null,
				error: !1,
				loaded: !1
			};
			if ("undefined" != typeof d) for (f in d) e[f] = d[f];
			this.checkKeyExists(a, b) === !1 && this._fileList.push(e)
		},
		replaceInFileList: function(a, b, c, d) {
			var f, g, e = {
				type: a,
				key: b,
				url: c,
				data: null,
				error: !1,
				loaded: !1
			};
			if ("undefined" != typeof d) for (f in d) e[f] = d[f];
			g = this.getAssetIndex(a, b),
			-1 === g ? this._fileList.push(e) : this._fileList[g] = e
		},
		pack: function(a, b, c, d) {
			return "undefined" == typeof b && (b = null),
			"undefined" == typeof c && (c = null),
			"undefined" == typeof d && (d = this),
			null === b && null === c ? (console.warn("Phaser.Loader.pack - Both url and data are null. One must be set."), this) : (c && "string" == typeof c && (c = JSON.parse(c)), this._packList.push({
				key: a,
				url: b,
				data: c,
				loaded: !1,
				error: !1,
				callbackContext: d
			}), this)
		},
		image: function(a, b, c) {
			return "undefined" == typeof c && (c = !1),
			c ? this.replaceInFileList("image", a, b) : this.addToFileList("image", a, b),
			this
		},
		text: function(a, b, c) {
			return "undefined" == typeof c && (c = !1),
			c ? this.replaceInFileList("text", a, b) : this.addToFileList("text", a, b),
			this
		},
		json: function(a, b, c) {
			return "undefined" == typeof c && (c = !1),
			c ? this.replaceInFileList("json", a, b) : this.addToFileList("json", a, b),
			this
		},
		script: function(a, b, c, d) {
			return "undefined" == typeof c && (c = !1),
			c !== !1 && "undefined" == typeof d && (d = c),
			this.addToFileList("script", a, b, {
				callback: c,
				callbackContext: d
			}),
			this
		},
		binary: function(a, b, c, d) {
			return "undefined" == typeof c && (c = !1),
			c !== !1 && "undefined" == typeof d && (d = c),
			this.addToFileList("binary", a, b, {
				callback: c,
				callbackContext: d
			}),
			this
		},
		spritesheet: function(a, b, c, d, e, f, g) {
			return "undefined" == typeof e && (e = -1),
			"undefined" == typeof f && (f = 0),
			"undefined" == typeof g && (g = 0),
			this.addToFileList("spritesheet", a, b, {
				frameWidth: c,
				frameHeight: d,
				frameMax: e,
				margin: f,
				spacing: g
			}),
			this
		},
		audio: function(a, b, c) {
			return "undefined" == typeof c && (c = !0),
			this.addToFileList("audio", a, b, {
				buffer: null,
				autoDecode: c
			}),
			this
		},
		tilemap: function(a, c, d, e) {
			if ("undefined" == typeof c && (c = null), "undefined" == typeof d && (d = null), "undefined" == typeof e && (e = b.Tilemap.CSV), null == c && null == d) return console.warn("Phaser.Loader.tilemap - Both url and data are null. One must be set."),
			this;
			if (d) {
				switch (e) {
				case b.Tilemap.CSV:
					break;
				case b.Tilemap.TILED_JSON:
					"string" == typeof d && (d = JSON.parse(d))
				}
				this.game.cache.addTilemap(a, null, d, e)
			} else this.addToFileList("tilemap", a, c, {
				format: e
			});
			return this
		},
		physics: function(a, c, d, e) {
			return "undefined" == typeof c && (c = null),
			"undefined" == typeof d && (d = null),
			"undefined" == typeof e && (e = b.Physics.LIME_CORONA_JSON),
			null == c && null == d ? (console.warn("Phaser.Loader.physics - Both url and data are null. One must be set."), this) : (d ? ("string" == typeof d && (d = JSON.parse(d)), this.game.cache.addPhysicsData(a, null, d, e)) : this.addToFileList("physics", a, c, {
				format: e
			}), this)
		},
		bitmapFont: function(a, b, c, d, e, f) {
			var g, h;
			if ("undefined" == typeof c && (c = null), "undefined" == typeof d && (d = null), "undefined" == typeof e && (e = 0), "undefined" == typeof f && (f = 0), c) this.addToFileList("bitmapfont", a, b, {
				xmlURL: c,
				xSpacing: e,
				ySpacing: f
			});
			else if ("string" == typeof d) {
				try {
					window["DOMParser"] ? (h = new DOMParser, g = h.parseFromString(d, "text/xml")) : (g = new ActiveXObject("Microsoft.XMLDOM"), g.async = "false", g.loadXML(d))
				} catch(i) {
					g = void 0
				}
				if (!g || !g.documentElement || g.getElementsByTagName("parsererror").length) throw new Error("Phaser.Loader. Invalid Bitmap Font XML given");
				this.addToFileList("bitmapfont", a, b, {
					xmlURL: null,
					xmlData: g,
					xSpacing: e,
					ySpacing: f
				})
			}
			return this
		},
		atlasJSONArray: function(a, c, d, e) {
			return this.atlas(a, c, d, e, b.Loader.TEXTURE_ATLAS_JSON_ARRAY)
		},
		atlasJSONHash: function(a, c, d, e) {
			return this.atlas(a, c, d, e, b.Loader.TEXTURE_ATLAS_JSON_HASH)
		},
		atlasXML: function(a, c, d, e) {
			return this.atlas(a, c, d, e, b.Loader.TEXTURE_ATLAS_XML_STARLING)
		},
		atlas: function(a, c, d, e, f) {
			var g, h;
			if ("undefined" == typeof d && (d = null), "undefined" == typeof e && (e = null), "undefined" == typeof f && (f = b.Loader.TEXTURE_ATLAS_JSON_ARRAY), d) this.addToFileList("textureatlas", a, c, {
				atlasURL: d,
				format: f
			});
			else {
				switch (f) {
				case b.Loader.TEXTURE_ATLAS_JSON_ARRAY:
					"string" == typeof e && (e = JSON.parse(e));
					break;
				case b.Loader.TEXTURE_ATLAS_XML_STARLING:
					if ("string" == typeof e) {
						try {
							window["DOMParser"] ? (h = new DOMParser, g = h.parseFromString(e, "text/xml")) : (g = new ActiveXObject("Microsoft.XMLDOM"), g.async = "false", g.loadXML(e))
						} catch(i) {
							g = void 0
						}
						if (!g || !g.documentElement || g.getElementsByTagName("parsererror").length) throw new Error("Phaser.Loader. Invalid Texture Atlas XML given");
						e = g
					}
				}
				this.addToFileList("textureatlas", a, c, {
					atlasURL: null,
					atlasData: e,
					format: f
				})
			}
			return this
		},
		removeFile: function(a, b) {
			var c = this.getAsset(a, b);
			c !== !1 && this._fileList.splice(c.index, 1)
		},
		removeAll: function() {
			this._fileList.length = 0
		},
		start: function() {
			this.isLoading || (this._packList.length > 0 ? (this._packIndex = 0, this.loadPack()) : this.beginLoad())
		},
		beginLoad: function() {
			this.progress = 0,
			this.progressFloat = 0,
			this.hasLoaded = !1,
			this.isLoading = !0,
			this.onLoadStart.dispatch(this._fileList.length),
			this._fileList.length > 0 ? (this._fileIndex = 0, this._progressChunk = 100 / this._fileList.length, this.loadFile()) : (this.progress = 100, this.progressFloat = 100, this.hasLoaded = !0, this.isLoading = !1, this.onLoadComplete.dispatch())
		},
		loadPack: function() {
			if (!this._packList[this._packIndex]) return console.warn("Phaser.Loader loadPackList invalid index " + this._packIndex),
			void 0;
			var a = this._packList[this._packIndex];
			null !== a.data ? this.packLoadComplete(this._packIndex, !1) : this.xhrLoad(this._packIndex, this.baseURL + a.url, "text", "packLoadComplete", "packLoadError")
		},
		packLoadComplete: function(a, c) {
			var d, e, f, g;
			if ("undefined" == typeof c && (c = !0), !this._packList[a]) return console.warn("Phaser.Loader packLoadComplete invalid index " + a),
			void 0;
			if (d = this._packList[a], d.loaded = !0, e = c ? JSON.parse(this._xhr.responseText) : this._packList[a].data, e[d.key]) for (g = 0; g < e[d.key].length; g++) switch (f = e[d.key][g], f.type) {
			case "image":
				this.image(f.key, f.url, f.overwrite);
				break;
			case "text":
				this.text(f.key, f.url, f.overwrite);
				break;
			case "json":
				this.json(f.key, f.url, f.overwrite);
				break;
			case "script":
				this.script(f.key, f.url, f.callback, d.callbackContext);
				break;
			case "binary":
				this.binary(f.key, f.url, f.callback, d.callbackContext);
				break;
			case "spritesheet":
				this.spritesheet(f.key, f.url, f.frameWidth, f.frameHeight, f.frameMax, f.margin, f.spacing);
				break;
			case "audio":
				this.audio(f.key, f.urls, f.autoDecode);
				break;
			case "tilemap":
				this.tilemap(f.key, f.url, f.data, b.Tilemap[f.format]);
				break;
			case "physics":
				this.physics(f.key, f.url, f.data, b.Loader[f.format]);
				break;
			case "bitmapFont":
				this.bitmapFont(f.key, f.textureURL, f.xmlURL, f.xmlData, f.xSpacing, f.ySpacing);
				break;
			case "atlasJSONArray":
				this.atlasJSONArray(f.key, f.textureURL, f.atlasURL, f.atlasData);
				break;
			case "atlasJSONHash":
				this.atlasJSONHash(f.key, f.textureURL, f.atlasURL, f.atlasData);
				break;
			case "atlasXML":
				this.atlasXML(f.key, f.textureURL, f.atlasURL, f.atlasData);
				break;
			case "atlas":
				this.atlas(f.key, f.textureURL, f.atlasURL, f.atlasData, b.Loader[f.format])
			}
			this.nextPack(a, !0)
		},
		packError: function(a) {
			this._packList[a].loaded = !0,
			this._packList[a].error = !0,
			this.onFileError.dispatch(this._packList[a].key, this._packList[a]),
			console.warn("Phaser.Loader error loading pack file: " + this._packList[a].key + " from URL " + this._packList[a].url),
			this.nextPack(a, !1)
		},
		nextPack: function(a, b) {
			this.onPackComplete.dispatch(this._packList[a].key, b, this.totalLoadedPacks(), this._packList.length),
			this._packIndex++,
			this._packIndex < this._packList.length ? this.loadPack() : this.beginLoad()
		},
		loadFile: function() {
			var a, c;
			if (!this._fileList[this._fileIndex]) return console.warn("Phaser.Loader loadFile invalid index " + this._fileIndex),
			void 0;
			switch (a = this._fileList[this._fileIndex], c = this, this.onFileStart.dispatch(this.progress, a.key), a.type) {
			case "image":
			case "spritesheet":
			case "textureatlas":
			case "bitmapfont":
				a.data = new Image,
				a.data.name = a.key,
				a.data.onload = function() {
					return c.fileComplete(c._fileIndex)
				},
				a.data.onerror = function() {
					return c.fileError(c._fileIndex)
				},
				this.crossOrigin && (a.data.crossOrigin = this.crossOrigin),
				a.data.src = this.baseURL + a.url;
				break;
			case "audio":
				a.url = this.getAudioURL(a.url),
				null !== a.url ? this.game.sound.usingWebAudio ? this.xhrLoad(this._fileIndex, this.baseURL + a.url, "arraybuffer", "fileComplete", "fileError") : this.game.sound.usingAudioTag && (this.game.sound.touchLocked ? (a.data = new Audio, a.data.name = a.key, a.data.preload = "auto", a.data.src = this.baseURL + a.url, this.fileComplete(this._fileIndex)) : (a.data = new Audio, a.data.name = a.key, a.data.onerror = function() {
					return c.fileError(c._fileIndex)
				},
				a.data.preload = "auto", a.data.src = this.baseURL + a.url, a.data.addEventListener("canplaythrough", b.GAMES[this.game.id].load.fileComplete(this._fileIndex), !1), a.data.load())) : this.fileError(this._fileIndex);
				break;
			case "json":
				window.XDomainRequest ? (this._ajax = new window.XDomainRequest, this._ajax.timeout = 3e3, this._ajax.onerror = function() {
					return c.dataLoadError(c._fileIndex)
				},
				this._ajax.ontimeout = function() {
					return c.dataLoadError(c._fileIndex)
				},
				this._ajax.onprogress = function() {},
				this._ajax.onload = function() {
					return c.jsonLoadComplete(c._fileIndex)
				},
				this._ajax.open("GET", this.baseURL + a.url, !0), this._ajax.send()) : this.xhrLoad(this._fileIndex, this.baseURL + a.url, "text", "jsonLoadComplete", "dataLoadError");
				break;
			case "tilemap":
				if (a.format === b.Tilemap.TILED_JSON) this.xhrLoad(this._fileIndex, this.baseURL + a.url, "text", "jsonLoadComplete", "dataLoadError");
				else {
					if (a.format !== b.Tilemap.CSV) throw new Error("Phaser.Loader. Invalid Tilemap format: " + a.format);
					this.xhrLoad(this._fileIndex, this.baseURL + a.url, "text", "csvLoadComplete", "dataLoadError")
				}
				break;
			case "text":
			case "script":
			case "physics":
				this.xhrLoad(this._fileIndex, this.baseURL + a.url, "text", "fileComplete", "fileError");
				break;
			case "binary":
				this.xhrLoad(this._fileIndex, this.baseURL + a.url, "arraybuffer", "fileComplete", "fileError")
			}
		},
		xhrLoad: function(a, b, c, d, e) {
			this._xhr.open("GET", b, !0),
			this._xhr.responseType = c;
			var f = this;
			this._xhr.onload = function() {
				return f[d](a)
			},
			this._xhr.onerror = function() {
				return f[e](a)
			},
			this._xhr.send()
		},
		getAudioURL: function(a) {
			var b, c;
			for ("string" == typeof a && (a = [a]), c = 0; c < a.length; c++) if (b = a[c].toLowerCase(), b = b.substr((Math.max(0, b.lastIndexOf(".")) || 1 / 0) + 1), this.game.device.canPlayAudio(b)) return a[c];
			return null
		},
		fileError: function(a) {
			this._fileList[a].loaded = !0,
			this._fileList[a].error = !0,
			this.onFileError.dispatch(this._fileList[a].key, this._fileList[a]),
			console.warn("Phaser.Loader error loading file: " + this._fileList[a].key + " from URL " + this._fileList[a].url),
			this.nextFile(a, !1)
		},
		fileComplete: function(a) {
			var c, d, e, f, g;
			if (!this._fileList[a]) return console.warn("Phaser.Loader fileComplete invalid index " + a),
			void 0;
			switch (c = this._fileList[a], c.loaded = !0, d = !0, c.type) {
			case "image":
				this.game.cache.addImage(c.key, c.url, c.data);
				break;
			case "spritesheet":
				this.game.cache.addSpriteSheet(c.key, c.url, c.data, c.frameWidth, c.frameHeight, c.frameMax, c.margin, c.spacing);
				break;
			case "textureatlas":
				if (null == c.atlasURL) this.game.cache.addTextureAtlas(c.key, c.url, c.data, c.atlasData, c.format);
				else if (d = !1, c.format == b.Loader.TEXTURE_ATLAS_JSON_ARRAY || c.format == b.Loader.TEXTURE_ATLAS_JSON_HASH) this.xhrLoad(this._fileIndex, this.baseURL + c.atlasURL, "text", "jsonLoadComplete", "dataLoadError");
				else {
					if (c.format != b.Loader.TEXTURE_ATLAS_XML_STARLING) throw new Error("Phaser.Loader. Invalid Texture Atlas format: " + c.format);
					this.xhrLoad(this._fileIndex, this.baseURL + c.atlasURL, "text", "xmlLoadComplete", "dataLoadError")
				}
				break;
			case "bitmapfont":
				null == c.xmlURL ? this.game.cache.addBitmapFont(c.key, c.url, c.data, c.xmlData, c.xSpacing, c.ySpacing) : (d = !1, this.xhrLoad(this._fileIndex, this.baseURL + c.xmlURL, "text", "xmlLoadComplete", "dataLoadError"));
				break;
			case "audio":
				this.game.sound.usingWebAudio ? (c.data = this._xhr.response, this.game.cache.addSound(c.key, c.url, c.data, !0, !1), c.autoDecode && (e = this, f = c.key, this.game.cache.updateSound(f, "isDecoding", !0), this.game.sound.context.decodeAudioData(c.data,
				function(a) {
					a && (e.game.cache.decodedSound(f, a), e.game.sound.onSoundDecode.dispatch(f, e.game.cache.getSound(f)))
				}))) : (c.data.removeEventListener("canplaythrough", b.GAMES[this.game.id].load.fileComplete), this.game.cache.addSound(c.key, c.url, c.data, !1, !0));
				break;
			case "text":
				c.data = this._xhr.responseText,
				this.game.cache.addText(c.key, c.url, c.data);
				break;
			case "physics":
				g = JSON.parse(this._xhr.responseText),
				this.game.cache.addPhysicsData(c.key, c.url, g, c.format);
				break;
			case "script":
				c.data = document.createElement("script"),
				c.data.language = "javascript",
				c.data.type = "text/javascript",
				c.data.defer = !1,
				c.data.text = this._xhr.responseText,
				document.head.appendChild(c.data),
				c.callback && (c.data = c.callback.call(c.callbackContext, c.key, this._xhr.responseText));
				break;
			case "binary":
				c.data = c.callback ? c.callback.call(c.callbackContext, c.key, this._xhr.response) : this._xhr.response,
				this.game.cache.addBinary(c.key, c.data)
			}
			d && this.nextFile(a, !0)
		},
		jsonLoadComplete: function(a) {
			var b, c;
			return this._fileList[a] ? (b = this._fileList[a], c = JSON.parse(this._xhr.responseText), b.loaded = !0, "tilemap" === b.type ? this.game.cache.addTilemap(b.key, b.url, c, b.format) : "json" === b.type ? this.game.cache.addJSON(b.key, b.url, c) : this.game.cache.addTextureAtlas(b.key, b.url, b.data, c, b.format), this.nextFile(a, !0), void 0) : (console.warn("Phaser.Loader jsonLoadComplete invalid index " + a), void 0)
		},
		csvLoadComplete: function(a) {
			var b, c;
			return this._fileList[a] ? (b = this._fileList[a], c = this._xhr.responseText, b.loaded = !0, this.game.cache.addTilemap(b.key, b.url, c, b.format), this.nextFile(a, !0), void 0) : (console.warn("Phaser.Loader csvLoadComplete invalid index " + a), void 0)
		},
		dataLoadError: function(a) {
			var b = this._fileList[a];
			b.loaded = !0,
			b.error = !0,
			console.warn("Phaser.Loader dataLoadError: " + b.key),
			this.nextFile(a, !0)
		},
		xmlLoadComplete: function(a) {
			var c, d, f, b = this._xhr.responseText;
			try {
				window["DOMParser"] ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
			} catch(e) {
				c = void 0
			}
			if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length) throw new Error("Phaser.Loader. Invalid XML given");
			f = this._fileList[a],
			f.loaded = !0,
			"bitmapfont" == f.type ? this.game.cache.addBitmapFont(f.key, f.url, f.data, c, f.xSpacing, f.ySpacing) : "textureatlas" == f.type && this.game.cache.addTextureAtlas(f.key, f.url, f.data, c, f.format),
			this.nextFile(a, !0)
		},
		nextFile: function(a, b) {
			this.progressFloat += this._progressChunk,
			this.progress = Math.round(this.progressFloat),
			this.progress > 100 && (this.progress = 100),
			null !== this.preloadSprite && (0 === this.preloadSprite.direction ? (this.preloadSprite.rect.width = Math.floor(this.preloadSprite.width / 100 * this.progress), this.preloadSprite.sprite.crop(this.preloadSprite.rect)) : (this.preloadSprite.rect.height = Math.floor(this.preloadSprite.height / 100 * this.progress), this.preloadSprite.sprite.crop(this.preloadSprite.rect))),
			this.onFileComplete.dispatch(this.progress, this._fileList[a].key, b, this.totalLoadedFiles(), this._fileList.length),
			this.totalQueuedFiles() > 0 ? (this._fileIndex++, this.loadFile()) : (this.hasLoaded = !0, this.isLoading = !1, this.removeAll(), this.onLoadComplete.dispatch())
		},
		totalLoadedFiles: function() {
			var b, a = 0;
			for (b = 0; b < this._fileList.length; b++) this._fileList[b].loaded && a++;
			return a
		},
		totalQueuedFiles: function() {
			var b, a = 0;
			for (b = 0; b < this._fileList.length; b++) this._fileList[b].loaded === !1 && a++;
			return a
		},
		totalLoadedPacks: function() {
			var b, a = 0;
			for (b = 0; b < this._packList.length; b++) this._packList[b].loaded && a++;
			return a
		},
		totalQueuedPacks: function() {
			var b, a = 0;
			for (b = 0; b < this._packList.length; b++) this._packList[b].loaded === !1 && a++;
			return a
		}
	},
	b.Loader.prototype.constructor = b.Loader,
	b.LoaderParser = {
		bitmapFont: function(a, b, c, d, e) {
			var i, j, k, l, m, n, o, p, f = {},
			g = b.getElementsByTagName("info")[0],
			h = b.getElementsByTagName("common")[0];
			for (f.font = g.getAttribute("face"), f.size = parseInt(g.getAttribute("size"), 10), f.lineHeight = parseInt(h.getAttribute("lineHeight"), 10) + e, f.chars = {},
			i = b.getElementsByTagName("char"), j = 0; j < i.length; j++) k = parseInt(i[j].getAttribute("id"), 10),
			l = new PIXI.Rectangle(parseInt(i[j].getAttribute("x"), 10), parseInt(i[j].getAttribute("y"), 10), parseInt(i[j].getAttribute("width"), 10), parseInt(i[j].getAttribute("height"), 10)),
			f.chars[k] = {
				xOffset: parseInt(i[j].getAttribute("xoffset"), 10),
				yOffset: parseInt(i[j].getAttribute("yoffset"), 10),
				xAdvance: parseInt(i[j].getAttribute("xadvance"), 10) + d,
				kerning: {},
				texture: PIXI.TextureCache[c] = new PIXI.Texture(PIXI.BaseTextureCache[c], l)
			};
			for (m = b.getElementsByTagName("kerning"), j = 0; j < m.length; j++) n = parseInt(m[j].getAttribute("first"), 10),
			o = parseInt(m[j].getAttribute("second"), 10),
			p = parseInt(m[j].getAttribute("amount"), 10),
			f.chars[o].kerning[n] = p;
			PIXI.BitmapText.fonts[c] = f
		}
	},
	b.Sound = function(a, c, d, e, f) {
		"undefined" == typeof d && (d = 1),
		"undefined" == typeof e && (e = !1),
		"undefined" == typeof f && (f = a.sound.connectToMaster),
		this.game = a,
		this.name = c,
		this.key = c,
		this.loop = e,
		this.volume = d,
		this.markers = {},
		this.context = null,
		this.autoplay = !1,
		this.totalDuration = 0,
		this.startTime = 0,
		this.currentTime = 0,
		this.duration = 0,
		this.durationMS = 0,
		this.position = 0,
		this.stopTime = 0,
		this.paused = !1,
		this.pausedPosition = 0,
		this.pausedTime = 0,
		this.isPlaying = !1,
		this.currentMarker = "",
		this.pendingPlayback = !1,
		this.override = !1,
		this.usingWebAudio = this.game.sound.usingWebAudio,
		this.usingAudioTag = this.game.sound.usingAudioTag,
		this.externalNode = null,
		this.masterGainNode = null,
		this.gainNode = null,
		this.usingWebAudio ? (this.context = this.game.sound.context, this.masterGainNode = this.game.sound.masterGain, this.gainNode = "undefined" == typeof this.context.createGain ? this.context.createGainNode() : this.context.createGain(), this.gainNode.gain.value = d * this.game.sound.volume, f && this.gainNode.connect(this.masterGainNode)) : this.game.cache.getSound(c) && this.game.cache.isSoundReady(c) ? (this._sound = this.game.cache.getSoundData(c), this.totalDuration = 0, this._sound.duration && (this.totalDuration = this._sound.duration)) : this.game.cache.onSoundUnlock.add(this.soundHasUnlocked, this),
		this.onDecoded = new b.Signal,
		this.onPlay = new b.Signal,
		this.onPause = new b.Signal,
		this.onResume = new b.Signal,
		this.onLoop = new b.Signal,
		this.onStop = new b.Signal,
		this.onMute = new b.Signal,
		this.onMarkerComplete = new b.Signal,
		this._volume = d,
		this._buffer = null,
		this._muted = !1,
		this._tempMarker = 0,
		this._tempPosition = 0,
		this._tempVolume = 0,
		this._tempLoop = 0,
		this._paused = !1,
		this._onDecodedEventDispatched = !1
	},
	b.Sound.prototype = {
		soundHasUnlocked: function(a) {
			a == this.key && (this._sound = this.game.cache.getSoundData(this.key), this.totalDuration = this._sound.duration)
		},
		addMarker: function(a, b, c, d, e) {
			"undefined" == typeof d && (d = 1),
			"undefined" == typeof e && (e = !1),
			this.markers[a] = {
				name: a,
				start: b,
				stop: b + c,
				volume: d,
				duration: c,
				durationMS: 1e3 * c,
				loop: e
			}
		},
		removeMarker: function(a) {
			delete this.markers[a]
		},
		update: function() {
			this.isDecoded && !this._onDecodedEventDispatched && (this.onDecoded.dispatch(this), this._onDecodedEventDispatched = !0),
			this.pendingPlayback && this.game.cache.isSoundReady(this.key) && (this.pendingPlayback = !1, this.play(this._tempMarker, this._tempPosition, this._tempVolume, this._tempLoop)),
			this.isPlaying && (this.currentTime = this.game.time.now - this.startTime, this.currentTime >= this.durationMS && (this.usingWebAudio ? this.loop ? (this.onLoop.dispatch(this), "" === this.currentMarker ? (this.currentTime = 0, this.startTime = this.game.time.now) : (this.onMarkerComplete.dispatch(this.currentMarker, this), this.play(this.currentMarker, 0, this.volume, !0, !0))) : this.stop() : this.loop ? (this.onLoop.dispatch(this), this.play(this.currentMarker, 0, this.volume, !0, !0)) : this.stop()))
		},
		play: function(a, b, c, d, e) {
			if ("undefined" == typeof a && (a = ""), "undefined" == typeof e && (e = !0), this.isPlaying === !0 && e === !1 && this.override === !1) return this;
			if (this.isPlaying && this.override && (this.usingWebAudio ? "undefined" == typeof this._sound.stop ? this._sound.noteOff(0) : this._sound.stop(0) : this.usingAudioTag && (this._sound.pause(), this._sound.currentTime = 0)), this.currentMarker = a, "" !== a) {
				if (!this.markers[a]) return console.warn("Phaser.Sound.play: audio marker " + a + " doesn't exist"),
				this;
				this.position = this.markers[a].start,
				this.volume = this.markers[a].volume,
				this.loop = this.markers[a].loop,
				this.duration = this.markers[a].duration,
				this.durationMS = this.markers[a].durationMS,
				"undefined" != typeof c && (this.volume = c),
				"undefined" != typeof d && (this.loop = d),
				this._tempMarker = a,
				this._tempPosition = this.position,
				this._tempVolume = this.volume,
				this._tempLoop = this.loop
			} else b = b || 0,
			"undefined" == typeof c && (c = this._volume),
			"undefined" == typeof d && (d = this.loop),
			this.position = b,
			this.volume = c,
			this.loop = d,
			this.duration = 0,
			this.durationMS = 0,
			this._tempMarker = a,
			this._tempPosition = b,
			this._tempVolume = c,
			this._tempLoop = d;
			return this.usingWebAudio ? this.game.cache.isSoundDecoded(this.key) ? (null == this._buffer && (this._buffer = this.game.cache.getSoundData(this.key)), this._sound = this.context.createBufferSource(), this._sound.buffer = this._buffer, this.externalNode ? this._sound.connect(this.externalNode) : this._sound.connect(this.gainNode), this.totalDuration = this._sound.buffer.duration, 0 === this.duration && (this.duration = this.totalDuration, this.durationMS = 1e3 * this.totalDuration), this.loop && "" === a && (this._sound.loop = !0), "undefined" == typeof this._sound.start ? this._sound.noteGrainOn(0, this.position, this.duration) : this._sound.start(0, this.position, this.duration), this.isPlaying = !0, this.startTime = this.game.time.now, this.currentTime = 0, this.stopTime = this.startTime + this.durationMS, this.onPlay.dispatch(this)) : (this.pendingPlayback = !0, this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).isDecoding === !1 && this.game.sound.decode(this.key, this)) : this.game.cache.getSound(this.key) && this.game.cache.getSound(this.key).locked ? (this.game.cache.reloadSound(this.key), this.pendingPlayback = !0) : this._sound && (this.game.device.cocoonJS || 4 === this._sound.readyState) ? (this._sound.play(), this.totalDuration = this._sound.duration, 0 === this.duration && (this.duration = this.totalDuration, this.durationMS = 1e3 * this.totalDuration), this._sound.currentTime = this.position, this._sound.muted = this._muted, this._sound.volume = this._muted ? 0 : this._volume, this.isPlaying = !0, this.startTime = this.game.time.now, this.currentTime = 0, this.stopTime = this.startTime + this.durationMS, this.onPlay.dispatch(this)) : this.pendingPlayback = !0,
			this
		},
		restart: function(a, b, c, d) {
			a = a || "",
			b = b || 0,
			c = c || 1,
			"undefined" == typeof d && (d = !1),
			this.play(a, b, c, d, !0)
		},
		pause: function() {
			this.isPlaying && this._sound && (this.paused = !0, this.pausedPosition = this.currentTime, this.pausedTime = this.game.time.now, this.onPause.dispatch(this), this.stop())
		},
		resume: function() {
			if (this.paused && this._sound) {
				if (this.usingWebAudio) {
					var a = this.position + this.pausedPosition / 1e3;
					this._sound = this.context.createBufferSource(),
					this._sound.buffer = this._buffer,
					this.externalNode ? this._sound.connect(this.externalNode) : this._sound.connect(this.gainNode),
					this.loop && (this._sound.loop = !0),
					"undefined" == typeof this._sound.start ? this._sound.noteGrainOn(0, a, this.duration) : this._sound.start(0, a, this.duration)
				} else this._sound.play();
				this.isPlaying = !0,
				this.paused = !1,
				this.startTime += this.game.time.now - this.pausedTime,
				this.onResume.dispatch(this)
			}
		},
		stop: function() {
			if (this.isPlaying && this._sound) if (this.usingWebAudio) if ("undefined" == typeof this._sound.stop) this._sound.noteOff(0);
			else try {
				this._sound.stop(0)
			} catch(a) {} else this.usingAudioTag && (this._sound.pause(), this._sound.currentTime = 0);
			this.isPlaying = !1;
			var b = this.currentMarker;
			"" !== this.currentMarker && this.onMarkerComplete.dispatch(this.currentMarker, this),
			this.currentMarker = "",
			this.paused || this.onStop.dispatch(this, b)
		},
		destroy: function(a) {
			"undefined" == typeof a && (a = !0),
			this.stop(),
			a ? this.game.sound.remove(this) : (this.markers = {},
			this.context = null, this._buffer = null, this.externalNode = null, this.onDecoded.dispose(), this.onPlay.dispose(), this.onPause.dispose(), this.onResume.dispose(), this.onLoop.dispose(), this.onStop.dispose(), this.onMute.dispose(), this.onMarkerComplete.dispose())
		}
	},
	b.Sound.prototype.constructor = b.Sound,
	Object.defineProperty(b.Sound.prototype, "isDecoding", {
		get: function() {
			return this.game.cache.getSound(this.key).isDecoding
		}
	}),
	Object.defineProperty(b.Sound.prototype, "isDecoded", {
		get: function() {
			return this.game.cache.isSoundDecoded(this.key)
		}
	}),
	Object.defineProperty(b.Sound.prototype, "mute", {
		get: function() {
			return this._muted || this.game.sound.mute
		},
		set: function(a) {
			a = a || null,
			a ? (this._muted = !0, this.usingWebAudio ? (this._muteVolume = this.gainNode.gain.value, this.gainNode.gain.value = 0) : this.usingAudioTag && this._sound && (this._muteVolume = this._sound.volume, this._sound.volume = 0)) : (this._muted = !1, this.usingWebAudio ? this.gainNode.gain.value = this._muteVolume: this.usingAudioTag && this._sound && (this._sound.volume = this._muteVolume)),
			this.onMute.dispatch(this)
		}
	}),
	Object.defineProperty(b.Sound.prototype, "volume", {
		get: function() {
			return this._volume
		},
		set: function(a) {
			this.usingWebAudio ? (this._volume = a, this.gainNode.gain.value = a) : this.usingAudioTag && this._sound && a >= 0 && 1 >= a && (this._volume = a, this._sound.volume = a)
		}
	}),
	b.SoundManager = function(a) {
		this.game = a,
		this.onSoundDecode = new b.Signal,
		this._codeMuted = !1,
		this._muted = !1,
		this._unlockSource = null,
		this._volume = 1,
		this._sounds = [],
		this.context = null,
		this.usingWebAudio = !0,
		this.usingAudioTag = !1,
		this.noAudio = !1,
		this.connectToMaster = !0,
		this.touchLocked = !1,
		this.channels = 32
	},
	b.SoundManager.prototype = {
		boot: function() {
			if (this.game.device.iOS && this.game.device.webAudio === !1 && (this.channels = 1), !this.game.device.cocoonJS && this.game.device.iOS || window["PhaserGlobal"] && window["PhaserGlobal"].fakeiOSTouchLock ? (this.game.input.touch.callbackContext = this, this.game.input.touch.touchStartCallback = this.unlock, this.game.input.mouse.callbackContext = this, this.game.input.mouse.mouseDownCallback = this.unlock, this.touchLocked = !0) : this.touchLocked = !1, window["PhaserGlobal"]) {
				if (window["PhaserGlobal"].disableAudio === !0) return this.usingWebAudio = !1,
				this.noAudio = !0,
				void 0;
				if (window["PhaserGlobal"].disableWebAudio === !0) return this.usingWebAudio = !1,
				this.usingAudioTag = !0,
				this.noAudio = !1,
				void 0
			}
			if (window["AudioContext"]) try {
				this.context = new window["AudioContext"]
			} catch(a) {
				this.context = null,
				this.usingWebAudio = !1,
				this.noAudio = !0
			} else if (window["webkitAudioContext"]) try {
				this.context = new window["webkitAudioContext"]
			} catch(a) {
				this.context = null,
				this.usingWebAudio = !1,
				this.noAudio = !0
			}
			window["Audio"] && null === this.context && (this.usingWebAudio = !1, this.usingAudioTag = !0, this.noAudio = !1),
			null !== this.context && (this.masterGain = "undefined" == typeof this.context.createGain ? this.context.createGainNode() : this.context.createGain(), this.masterGain.gain.value = 1, this.masterGain.connect(this.context.destination))
		},
		unlock: function() {
			if (this.touchLocked !== !1) if (this.game.device.webAudio === !1 || window["PhaserGlobal"] && window["PhaserGlobal"].disableWebAudio === !0) this.touchLocked = !1,
			this._unlockSource = null,
			this.game.input.touch.callbackContext = null,
			this.game.input.touch.touchStartCallback = null,
			this.game.input.mouse.callbackContext = null,
			this.game.input.mouse.mouseDownCallback = null;
			else {
				var a = this.context.createBuffer(1, 1, 22050);
				this._unlockSource = this.context.createBufferSource(),
				this._unlockSource.buffer = a,
				this._unlockSource.connect(this.context.destination);
				//this._unlockSource.noteOn(0)
			}
		},
		stopAll: function() {
			for (var a = 0; a < this._sounds.length; a++) this._sounds[a] && this._sounds[a].stop()
		},
		pauseAll: function() {
			for (var a = 0; a < this._sounds.length; a++) this._sounds[a] && this._sounds[a].pause()
		},
		resumeAll: function() {
			for (var a = 0; a < this._sounds.length; a++) this._sounds[a] && this._sounds[a].resume()
		},
		decode: function(a, b) {
			var c, d;
			b = b || null,
			c = this.game.cache.getSoundData(a),
			c && this.game.cache.isSoundDecoded(a) === !1 && (this.game.cache.updateSound(a, "isDecoding", !0), d = this, this.context.decodeAudioData(c,
			function(c) {
				d.game.cache.decodedSound(a, c),
				b && d.onSoundDecode.dispatch(a, b)
			}))
		},
		update: function() {
			this.touchLocked && this.game.device.webAudio && null !== this._unlockSource && (this._unlockSource.playbackState === this._unlockSource.PLAYING_STATE || this._unlockSource.playbackState === this._unlockSource.FINISHED_STATE) && (this.touchLocked = !1, this._unlockSource = null, this.game.input.touch.callbackContext = null, this.game.input.touch.touchStartCallback = null);
			for (var a = 0; a < this._sounds.length; a++) this._sounds[a].update()
		},
		add: function(a, c, d, e) {
			"undefined" == typeof c && (c = 1),
			"undefined" == typeof d && (d = !1),
			"undefined" == typeof e && (e = this.connectToMaster);
			var f = new b.Sound(this.game, a, c, d, e);
			return this._sounds.push(f),
			f
		},
		remove: function(a) {
			for (var b = this._sounds.length; b--;) if (this._sounds[b] === a) return this._sounds[b].destroy(!1),
			this._sounds.splice(b, 1),
			!0;
			return ! 1
		},
		removeByKey: function(a) {
			for (var b = this._sounds.length,
			c = 0; b--;) this._sounds[b].key === a && (this._sounds[b].destroy(!1), this._sounds.splice(b, 1), c++);
			return c
		},
		play: function(a, b, c) {
			var d = this.add(a, b, c);
			return d.play(),
			d
		},
		setMute: function() {
			if (!this._muted) {
				this._muted = !0,
				this.usingWebAudio && (this._muteVolume = this.masterGain.gain.value, this.masterGain.gain.value = 0);
				for (var a = 0; a < this._sounds.length; a++) this._sounds[a].usingAudioTag && (this._sounds[a].mute = !0)
			}
		},
		unsetMute: function() {
			if (this._muted && !this._codeMuted) {
				this._muted = !1,
				this.usingWebAudio && (this.masterGain.gain.value = this._muteVolume);
				for (var a = 0; a < this._sounds.length; a++) this._sounds[a].usingAudioTag && (this._sounds[a].mute = !1)
			}
		}
	},
	b.SoundManager.prototype.constructor = b.SoundManager,
	Object.defineProperty(b.SoundManager.prototype, "mute", {
		get: function() {
			return this._muted
		},
		set: function(a) {
			if (a = a || null) {
				if (this._muted) return;
				this._codeMuted = !0,
				this.setMute()
			} else {
				if (!this._muted) return;
				this._codeMuted = !1,
				this.unsetMute()
			}
		}
	}),
	Object.defineProperty(b.SoundManager.prototype, "volume", {
		get: function() {
			return this.usingWebAudio ? this.masterGain.gain.value: this._volume
		},
		set: function(a) {
			if (this._volume = a, this.usingWebAudio) this.masterGain.gain.value = a;
			else for (var b = 0; b < this._sounds.length; b++) this._sounds[b].usingAudioTag && (this._sounds[b].volume = this._sounds[b].volume * a)
		}
	}),
	b.Utils.Debug = function(a) {
		this.game = a,
		this.sprite = null,
		this.canvas = null,
		this.baseTexture = null,
		this.texture = null,
		this.textureFrame = null,
		this.context = null,
		this.font = "14px Courier",
		this.columnWidth = 100,
		this.lineHeight = 16,
		this.renderShadow = !0,
		this.currentX = 0,
		this.currentY = 0,
		this.currentAlpha = 1,
		this.dirty = !1
	},
	b.Utils.Debug.prototype = {
		boot: function() {
			this.game.renderType === b.CANVAS ? this.context = this.game.context: (this.canvas = b.Canvas.create(this.game.width, this.game.height, "", !0), this.context = this.canvas.getContext("2d"), this.baseTexture = new PIXI.BaseTexture(this.canvas), this.texture = new PIXI.Texture(this.baseTexture), this.textureFrame = new b.Frame(0, 0, 0, this.game.width, this.game.height, "debug", this.game.rnd.uuid()), this.sprite = this.game.make.image(0, 0, this.texture, this.textureFrame), this.game.stage.addChild(this.sprite))
		},
		preUpdate: function() {
			this.dirty && this.sprite && (this.context.clearRect(0, 0, this.game.width, this.game.height), this.dirty = !1)
		},
		start: function(a, b, c, d) {
			"number" != typeof a && (a = 0),
			"number" != typeof b && (b = 0),
			c = c || "rgb(255,255,255)",
			"undefined" == typeof d && (d = 0),
			this.currentX = a,
			this.currentY = b,
			this.currentColor = c,
			this.currentAlpha = this.context.globalAlpha,
			this.columnWidth = d,
			this.sprite && (this.dirty = !0),
			this.context.save(),
			this.context.setTransform(1, 0, 0, 1, 0, 0),
			this.context.strokeStyle = c,
			this.context.fillStyle = c,
			this.context.font = this.font,
			this.context.globalAlpha = 1
		},
		stop: function() {
			this.context.restore(),
			this.context.globalAlpha = this.currentAlpha,
			this.sprite && PIXI.updateWebGLTexture(this.baseTexture, this.game.renderer.gl)
		},
		line: function() {
			var b, a = this.currentX;
			for (b = 0; b < arguments.length; b++) this.renderShadow && (this.context.fillStyle = "rgb(0,0,0)", this.context.fillText(arguments[b], a + 1, this.currentY + 1), this.context.fillStyle = this.currentColor),
			this.context.fillText(arguments[b], a, this.currentY),
			a += this.columnWidth;
			this.currentY += this.lineHeight
		},
		soundInfo: function(a, b, c, d) {
			this.start(b, c, d),
			this.line("Sound: " + a.key + " Locked: " + a.game.sound.touchLocked),
			this.line("Is Ready?: " + this.game.cache.isSoundReady(a.key) + " Pending Playback: " + a.pendingPlayback),
			this.line("Decoded: " + a.isDecoded + " Decoding: " + a.isDecoding),
			this.line("Total Duration: " + a.totalDuration + " Playing: " + a.isPlaying),
			this.line("Time: " + a.currentTime),
			this.line("Volume: " + a.volume + " Muted: " + a.mute),
			this.line("WebAudio: " + a.usingWebAudio + " Audio: " + a.usingAudioTag),
			"" !== a.currentMarker && (this.line("Marker: " + a.currentMarker + " Duration: " + a.duration + " (ms: " + a.durationMS + ")"), this.line("Start: " + a.markers[a.currentMarker].start + " Stop: " + a.markers[a.currentMarker].stop), this.line("Position: " + a.position)),
			this.stop()
		},
		cameraInfo: function(a, b, c, d) {
			this.start(b, c, d),
			this.line("Camera (" + a.width + " x " + a.height + ")"),
			this.line("X: " + a.x + " Y: " + a.y),
			this.line("Bounds x: " + a.bounds.x + " Y: " + a.bounds.y + " w: " + a.bounds.width + " h: " + a.bounds.height),
			this.line("View x: " + a.view.x + " Y: " + a.view.y + " w: " + a.view.width + " h: " + a.view.height),
			this.stop()
		},
		timer: function(a, b, c, d) {
			this.start(b, c, d),
			this.line("Timer (running: " + a.running + " expired: " + a.expired + ")"),
			this.line("Next Tick: " + a.next + " Duration: " + a.duration),
			this.line("Paused: " + a.paused + " Length: " + a.length),
			this.stop()
		},
		pointer: function(a, b, c, d, e) {
			null != a && ("undefined" == typeof b && (b = !1), c = c || "rgba(0,255,0,0.5)", d = d || "rgba(255,0,0,0.5)", (b !== !0 || a.isUp !== !0) && (this.start(a.x, a.y - 100, e), this.context.beginPath(), this.context.arc(a.x, a.y, a.circle.radius, 0, 2 * Math.PI), this.context.fillStyle = a.active ? c: d, this.context.fill(), this.context.closePath(), this.context.beginPath(), this.context.moveTo(a.positionDown.x, a.positionDown.y), this.context.lineTo(a.position.x, a.position.y), this.context.lineWidth = 2, this.context.stroke(), this.context.closePath(), this.line("ID: " + a.id + " Active: " + a.active), this.line("World X: " + a.worldX + " World Y: " + a.worldY), this.line("Screen X: " + a.x + " Screen Y: " + a.y), this.line("Duration: " + a.duration + " ms"), this.line("is Down: " + a.isDown + " is Up: " + a.isUp), this.stop()))
		},
		spriteInputInfo: function(a, b, c, d) {
			this.start(b, c, d),
			this.line("Sprite Input: (" + a.width + " x " + a.height + ")"),
			this.line("x: " + a.input.pointerX().toFixed(1) + " y: " + a.input.pointerY().toFixed(1)),
			this.line("over: " + a.input.pointerOver() + " duration: " + a.input.overDuration().toFixed(0)),
			this.line("down: " + a.input.pointerDown() + " duration: " + a.input.downDuration().toFixed(0)),
			this.line("just over: " + a.input.justOver() + " just out: " + a.input.justOut()),
			this.stop()
		},
		key: function(a, b, c, d) {
			this.start(b, c, d, 150),
			this.line("Key:", a.keyCode, "isDown:", a.isDown),
			this.line("justPressed:", a.justPressed(), "justReleased:", a.justReleased()),
			this.line("Time Down:", a.timeDown.toFixed(0), "duration:", a.duration.toFixed(0)),
			this.stop()
		},
		inputInfo: function(a, b, c) {
			this.start(a, b, c),
			this.line("Input"),
			this.line("X: " + this.game.input.x + " Y: " + this.game.input.y),
			this.line("World X: " + this.game.input.worldX + " World Y: " + this.game.input.worldY),
			this.line("Scale X: " + this.game.input.scale.x.toFixed(1) + " Scale Y: " + this.game.input.scale.x.toFixed(1)),
			this.line("Screen X: " + this.game.input.activePointer.screenX + " Screen Y: " + this.game.input.activePointer.screenY),
			this.stop()
		},
		spriteBounds: function(a, b, c) {
			var d = a.getBounds();
			d.x += this.game.camera.x,
			d.y += this.game.camera.y,
			this.rectangle(d, b, c)
		},
		spriteInfo: function(a, b, c, d) {
			this.start(b, c, d),
			this.line("Sprite: (" + a.width + " x " + a.height + ") anchor: " + a.anchor.x + " x " + a.anchor.y),
			this.line("x: " + a.x.toFixed(1) + " y: " + a.y.toFixed(1)),
			this.line("angle: " + a.angle.toFixed(1) + " rotation: " + a.rotation.toFixed(1)),
			this.line("visible: " + a.visible + " in camera: " + a.inCamera),
			this.stop()
		},
		spriteCoords: function(a, b, c, d) {
			this.start(b, c, d, 100),
			a.name && this.line(a.name),
			this.line("x:", a.x.toFixed(2), "y:", a.y.toFixed(2)),
			this.line("pos x:", a.position.x.toFixed(2), "pos y:", a.position.y.toFixed(2)),
			this.line("world x:", a.world.x.toFixed(2), "world y:", a.world.y.toFixed(2)),
			this.stop()
		},
		lineInfo: function(a, b, c, d) {
			this.start(b, c, d, 80),
			this.line("start.x:", a.start.x.toFixed(2), "start.y:", a.start.y.toFixed(2)),
			this.line("end.x:", a.end.x.toFixed(2), "end.y:", a.end.y.toFixed(2)),
			this.line("length:", a.length.toFixed(2), "angle:", a.angle),
			this.stop()
		},
		pixel: function(a, b, c, d) {
			d = d || 2,
			this.start(),
			this.context.fillStyle = c,
			this.context.fillRect(a, b, d, d),
			this.stop()
		},
		geom: function(a, c, d, e) {
			"undefined" == typeof d && (d = !0),
			"undefined" == typeof e && (e = 0),
			c = c || "rgba(0,255,0,0.4)",
			this.start(),
			this.context.fillStyle = c,
			this.context.strokeStyle = c,
			a instanceof b.Rectangle || 1 === e ? d ? this.context.fillRect(a.x - this.game.camera.x, a.y - this.game.camera.y, a.width, a.height) : this.context.strokeRect(a.x - this.game.camera.x, a.y - this.game.camera.y, a.width, a.height) : a instanceof b.Circle || 2 === e ? (this.context.beginPath(), this.context.arc(a.x - this.game.camera.x, a.y - this.game.camera.y, a.radius, 0, 2 * Math.PI, !1), this.context.closePath(), d ? this.context.fill() : this.context.stroke()) : a instanceof b.Point || 3 === e ? this.context.fillRect(a.x - this.game.camera.x, a.y - this.game.camera.y, 4, 4) : (a instanceof b.Line || 4 === e) && (this.context.lineWidth = 1, this.context.beginPath(), this.context.moveTo(a.start.x + .5 - this.game.camera.x, a.start.y + .5 - this.game.camera.y), this.context.lineTo(a.end.x + .5 - this.game.camera.x, a.end.y + .5 - this.game.camera.y), this.context.closePath(), this.context.stroke()),
			this.stop()
		},
		rectangle: function(a, b, c) {
			"undefined" == typeof c && (c = !0),
			b = b || "rgba(0, 255, 0, 0.4)",
			this.start(),
			c ? (this.context.fillStyle = b, this.context.fillRect(a.x - this.game.camera.x, a.y - this.game.camera.y, a.width, a.height)) : (this.context.strokeStyle = b, this.context.strokeRect(a.x - this.game.camera.x, a.y - this.game.camera.y, a.width, a.height)),
			this.stop()
		},
		text: function(a, b, c, d, e) {
			d = d || "rgb(255,255,255)",
			e = e || "16px Courier",
			this.start(),
			this.context.font = e,
			this.renderShadow && (this.context.fillStyle = "rgb(0,0,0)", this.context.fillText(a, b + 1, c + 1)),
			this.context.fillStyle = d,
			this.context.fillText(a, b, c),
			this.stop()
		},
		quadTree: function(a, b) {
			var c, d;
			if (b = b || "rgba(255,0,0,0.3)", this.start(), c = a.bounds, 0 === a.nodes.length) for (this.context.strokeStyle = b, this.context.strokeRect(c.x, c.y, c.width, c.height), this.text("size: " + a.objects.length, c.x + 4, c.y + 16, "rgb(0,200,0)", "12px Courier"), this.context.strokeStyle = "rgb(0,255,0)", d = 0; d < a.objects.length; d++) this.context.strokeRect(a.objects[d].x, a.objects[d].y, a.objects[d].width, a.objects[d].height);
			else for (d = 0; d < a.nodes.length; d++) this.quadTree(a.nodes[d]);
			this.stop()
		},
		body: function(a, c, d) {
			a.body && (a.body.type === b.Physics.ARCADE ? (this.start(), b.Physics.Arcade.Body.render(this.context, a.body, c, d), this.stop()) : a.body.type === b.Physics.NINJA && (this.start(), b.Physics.Ninja.Body.render(this.context, a.body, c, d), this.stop()))
		},
		bodyInfo: function(a, c, d, e) {
			a.body && a.body.type === b.Physics.ARCADE && (this.start(c, d, e, 210), b.Physics.Arcade.Body.renderBodyInfo(this, a.body), this.stop())
		}
	},
	b.Utils.Debug.prototype.constructor = b.Utils.Debug,
	b.Color = {
		packPixel: function(a, c, d, e) {
			return b.Device.LITTLE_ENDIAN ? (e << 24 | d << 16 | c << 8 | a) >>> 0 : (a << 24 | c << 16 | d << 8 | e) >>> 0
		},
		unpackPixel: function(a, c, d, e) {
			return ("undefined" == typeof c || null === c) && (c = b.Color.createColor()),
			("undefined" == typeof d || null === d) && (d = !1),
			("undefined" == typeof e || null === e) && (e = !1),
			b.Device.LITTLE_ENDIAN ? (c.a = (4278190080 & a) >>> 24, c.b = (16711680 & a) >>> 16, c.g = (65280 & a) >>> 8, c.r = 255 & a) : (c.r = (4278190080 & a) >>> 24, c.g = (16711680 & a) >>> 16, c.b = (65280 & a) >>> 8, c.a = 255 & a),
			c.color = a,
			c.rgba = "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a / 255 + ")",
			d && b.Color.RGBtoHSL(c.r, c.g, c.b, c),
			e && b.Color.RGBtoHSV(c.r, c.g, c.b, c),
			c
		},
		fromRGBA: function(a, c) {
			return c || (c = b.Color.createColor()),
			c.r = (4278190080 & a) >>> 24,
			c.g = (16711680 & a) >>> 16,
			c.b = (65280 & a) >>> 8,
			c.a = 255 & a,
			c.rgba = "rgba(" + c.r + "," + c.g + "," + c.b + "," + c.a + ")",
			c
		},
		toRGBA: function(a, b, c, d) {
			return a << 24 | b << 16 | c << 8 | d
		},
		RGBtoHSL: function(a, c, d, e) {
			var f, g, h;
			return e || (e = b.Color.createColor(a, c, d, 1)),
			a /= 255,
			c /= 255,
			d /= 255,
			f = Math.min(a, c, d),
			g = Math.max(a, c, d),
			e.h = 0,
			e.s = 0,
			e.l = (g + f) / 2,
			g !== f && (h = g - f, e.s = e.l > .5 ? h / (2 - g - f) : h / (g + f), g === a ? e.h = (c - d) / h + (d > c ? 6 : 0) : g === c ? e.h = (d - a) / h + 2 : g === d && (e.h = (a - c) / h + 4), e.h /= 6),
			e
		},
		HSLtoRGB: function(a, c, d, e) {
			var f, g;
			return e ? (e.r = d, e.g = d, e.b = d) : e = b.Color.createColor(d, d, d),
			0 !== c && (f = .5 > d ? d * (1 + c) : d + c - d * c, g = 2 * d - f, e.r = b.Color.hueToColor(g, f, a + 1 / 3), e.g = b.Color.hueToColor(g, f, a), e.b = b.Color.hueToColor(g, f, a - 1 / 3)),
			e.r = Math.floor(0 | 255 * e.r),
			e.g = Math.floor(0 | 255 * e.g),
			e.b = Math.floor(0 | 255 * e.b),
			b.Color.updateColor(e),
			e
		},
		RGBtoHSV: function(a, c, d, e) {
			var f, g, h;
			return e || (e = b.Color.createColor(a, c, d, 255)),
			a /= 255,
			c /= 255,
			d /= 255,
			f = Math.min(a, c, d),
			g = Math.max(a, c, d),
			h = g - f,
			e.h = 0,
			e.s = 0 === g ? 0 : h / g,
			e.v = g,
			g !== f && (g === a ? e.h = (c - d) / h + (d > c ? 6 : 0) : g === c ? e.h = (d - a) / h + 2 : g === d && (e.h = (a - c) / h + 4), e.h /= 6),
			e
		},
		HSVtoRGB: function(a, c, d, e) {
			var f, g, h, i, j, k, l, m;
			switch ("undefined" == typeof e && (e = b.Color.createColor(0, 0, 0, 1, a, c, 0, d)), i = Math.floor(6 * a), j = 6 * a - i, k = d * (1 - c), l = d * (1 - j * c), m = d * (1 - (1 - j) * c), i % 6) {
			case 0:
				f = d,
				g = m,
				h = k;
				break;
			case 1:
				f = l,
				g = d,
				h = k;
				break;
			case 2:
				f = k,
				g = d,
				h = m;
				break;
			case 3:
				f = k,
				g = l,
				h = d;
				break;
			case 4:
				f = m,
				g = k,
				h = d;
				break;
			case 5:
				f = d,
				g = k,
				h = l
			}
			return e.r = Math.floor(255 * f),
			e.g = Math.floor(255 * g),
			e.b = Math.floor(255 * h),
			b.Color.updateColor(e),
			e
		},
		hueToColor: function(a, b, c) {
			return 0 > c && (c += 1),
			c > 1 && (c -= 1),
			1 / 6 > c ? a + 6 * (b - a) * c: .5 > c ? b: 2 / 3 > c ? a + 6 * (b - a) * (2 / 3 - c) : a
		},
		createColor: function(a, b, c, d, e, f, g, h) {
			var i = {
				r: a || 0,
				g: b || 0,
				b: c || 0,
				a: d || 1,
				h: e || 0,
				s: f || 0,
				l: g || 0,
				v: h || 0,
				color: 0
			};
			return i.rgba = "rgba(" + i.r + "," + i.g + "," + i.b + "," + i.a + ")",
			i
		},
		updateColor: function(a) {
			return a.rgba = "rgba(" + a.r + "," + a.g + "," + a.b + "," + a.a + ")",
			a
		},
		getColor32: function(a, b, c, d) {
			return a << 24 | b << 16 | c << 8 | d
		},
		getColor: function(a, b, c) {
			return a << 16 | b << 8 | c
		},
		RGBtoString: function(a, c, d, e, f) {
			return "undefined" == typeof e && (e = 255),
			"undefined" == typeof f && (f = "#"),
			"#" === f ? "#" + ((1 << 24) + (a << 16) + (c << 8) + d).toString(16).slice(1) : "0x" + b.Color.componentToHex(e) + b.Color.componentToHex(a) + b.Color.componentToHex(c) + b.Color.componentToHex(d)
		},
		hexToRGB: function(a) {
			var c = b.Color.hexToColor(a);
			return c ? b.Color.getColor32(c.a, c.r, c.g, c.b) : void 0
		},
		hexToColor: function(a, c) {
			var d, e;
			return c || (c = b.Color.createColor()),
			d = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
			a = a.replace(d,
			function(a, b, c, d) {
				return b + b + c + c + d + d
			}),
			e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a),
			e && (c.r = parseInt(e[1], 16), c.g = parseInt(e[2], 16), c.b = parseInt(e[3], 16)),
			c
		},
		componentToHex: function(a) {
			var b = a.toString(16);
			return 1 == b.length ? "0" + b: b
		},
		HSVColorWheel: function(a, c) {
			var d, e;
			for ("undefined" == typeof a && (a = 1), "undefined" == typeof c && (c = 1), d = [], e = 0; 359 >= e; e++) d.push(b.Color.HSVtoRGB(e / 359, a, c));
			return d
		},
		HSLColorWheel: function(a, c) {
			var d, e;
			for ("undefined" == typeof a && (a = .5), "undefined" == typeof c && (c = .5), d = [], e = 0; 359 >= e; e++) d.push(b.Color.HSLtoRGB(e / 359, a, c));
			return d
		},
		interpolateColor: function(a, c, d, e, f) {
			var g, h, i, j, k;
			return "undefined" == typeof f && (f = 255),
			g = b.Color.getRGB(a),
			h = b.Color.getRGB(c),
			i = (h.red - g.red) * e / d + g.red,
			j = (h.green - g.green) * e / d + g.green,
			k = (h.blue - g.blue) * e / d + g.blue,
			b.Color.getColor32(f, i, j, k)
		},
		interpolateColorWithRGB: function(a, c, d, e, f, g) {
			var h = b.Color.getRGB(a),
			i = (c - h.red) * g / f + h.red,
			j = (d - h.green) * g / f + h.green,
			k = (e - h.blue) * g / f + h.blue;
			return b.Color.getColor(i, j, k)
		},
		interpolateRGB: function(a, c, d, e, f, g, h, i) {
			var j = (e - a) * i / h + a,
			k = (f - c) * i / h + c,
			l = (g - d) * i / h + d;
			return b.Color.getColor(j, k, l)
		},
		getRandomColor: function(a, c, d) {
			var e, f, g;
			return "undefined" == typeof a && (a = 0),
			"undefined" == typeof c && (c = 255),
			"undefined" == typeof d && (d = 255),
			c > 255 || a > c ? b.Color.getColor(255, 255, 255) : (e = a + Math.round(Math.random() * (c - a)), f = a + Math.round(Math.random() * (c - a)), g = a + Math.round(Math.random() * (c - a)), b.Color.getColor32(d, e, f, g))
		},
		getRGB: function(a) {
			return a > 16777215 ? {
				alpha: a >>> 24,
				red: 255 & a >> 16,
				green: 255 & a >> 8,
				blue: 255 & a,
				a: a >>> 24,
				r: 255 & a >> 16,
				g: 255 & a >> 8,
				b: 255 & a
			}: {
				alpha: 255,
				red: 255 & a >> 16,
				green: 255 & a >> 8,
				blue: 255 & a,
				a: 255,
				r: 255 & a >> 16,
				g: 255 & a >> 8,
				b: 255 & a
			}
		},
		getWebRGB: function(a) {
			if ("object" == typeof a) return "rgba(" + a.r.toString() + "," + a.g.toString() + "," + a.b.toString() + "," + (a.a / 255).toString() + ")";
			var c = b.Color.getRGB(a);
			return "rgba(" + c.r.toString() + "," + c.g.toString() + "," + c.b.toString() + "," + (c.a / 255).toString() + ")"
		},
		getAlpha: function(a) {
			return a >>> 24
		},
		getAlphaFloat: function(a) {
			return (a >>> 24) / 255
		},
		getRed: function(a) {
			return 255 & a >> 16
		},
		getGreen: function(a) {
			return 255 & a >> 8
		},
		getBlue: function(a) {
			return 255 & a
		},
		getColorInfo: function(a) {
			var c = b.Color.getRGB(a),
			d = b.Color.RGBtoHexstring(a) + "\n";
			return d = d.concat("Alpha: " + c.alpha + " Red: " + c.red + " Green: " + c.green + " Blue: " + c.blue) + "\n"
		},
		RGBtoHexstring: function(a) {
			var c = b.Color.getRGB(a);
			return "0x" + b.Color.colorToHexstring(c.alpha) + b.Color.colorToHexstring(c.red) + b.Color.colorToHexstring(c.green) + b.Color.colorToHexstring(c.blue)
		},
		RGBtoWebstring: function(a) {
			var c = b.Color.getRGB(a);
			return "#" + b.Color.colorToHexstring(c.red) + b.Color.colorToHexstring(c.green) + b.Color.colorToHexstring(c.blue)
		},
		colorToHexstring: function(a) {
			var b = "0123456789ABCDEF",
			c = a % 16,
			d = (a - c) / 16,
			e = b.charAt(d) + b.charAt(c);
			return e
		}
	},
	b.Physics = function(a, b) {
		b = b || {},
		this.game = a,
		this.config = b,
		this.arcade = null,
		this.p2 = null,
		this.ninja = null,
		this.box2d = null,
		this.chipmunk = null,
		this.parseConfig()
	},
	b.Physics.ARCADE = 0,
	b.Physics.P2JS = 1,
	b.Physics.NINJA = 2,
	b.Physics.BOX2D = 3,
	b.Physics.CHIPMUNK = 5,
	b.Physics.prototype = {
		parseConfig: function() {
			this.config.hasOwnProperty("arcade") && this.config["arcade"] !== !0 || !b.Physics.hasOwnProperty("Arcade") || (this.arcade = new b.Physics.Arcade(this.game), this.game.time.deltaCap = .2),
			this.config.hasOwnProperty("ninja") && this.config["ninja"] === !0 && b.Physics.hasOwnProperty("Ninja") && (this.ninja = new b.Physics.Ninja(this.game)),
			this.config.hasOwnProperty("p2") && this.config["p2"] === !0 && b.Physics.hasOwnProperty("P2") && (this.p2 = new b.Physics.P2(this.game, this.config))
		},
		startSystem: function(a) {
			if (a === b.Physics.ARCADE ? this.arcade = new b.Physics.Arcade(this.game) : a === b.Physics.P2JS && (this.p2 = new b.Physics.P2(this.game, this.config)), a === b.Physics.NINJA) this.ninja = new b.Physics.Ninja(this.game);
			else {
				if (a === b.Physics.BOX2D && null === this.box2d) throw new Error("The Box2D physics system has not been implemented yet.");
				if (a === b.Physics.CHIPMUNK && null === this.chipmunk) throw new Error("The Chipmunk physics system has not been implemented yet.")
			}
			this.setBoundsToWorld()
		},
		enable: function(a, c, d) {
			"undefined" == typeof c && (c = b.Physics.ARCADE),
			"undefined" == typeof d && (d = !1),
			c === b.Physics.ARCADE ? this.arcade.enable(a) : c === b.Physics.P2JS && this.p2 ? this.p2.enable(a, d) : c === b.Physics.NINJA && this.ninja && this.ninja.enableAABB(a)
		},
		preUpdate: function() {
			this.p2 && this.p2.preUpdate()
		},
		update: function() {
			this.p2 && this.p2.update()
		},
		setBoundsToWorld: function() {
			this.arcade && this.arcade.setBoundsToWorld(),
			this.ninja && this.ninja.setBoundsToWorld(),
			this.p2 && this.p2.setBoundsToWorld()
		},
		clear: function() {
			this.p2 && this.p2.clear()
		},
		destroy: function() {
			this.p2 && this.p2.destroy(),
			this.arcade = null,
			this.ninja = null,
			this.p2 = null
		}
	},
	b.Physics.prototype.constructor = b.Physics,
	b.Physics.Arcade = function(a) {
		this.game = a,
		this.gravity = new b.Point,
		this.bounds = new b.Rectangle(0, 0, a.world.width, a.world.height),
		this.checkCollision = {
			up: !0,
			down: !0,
			left: !0,
			right: !0
		},
		this.maxObjects = 10,
		this.maxLevels = 4,
		this.OVERLAP_BIAS = 4,
		this.TILE_BIAS = 16,
		this.forceX = !1,
		this.quadTree = new b.QuadTree(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels),
		this._overlap = 0,
		this._maxOverlap = 0,
		this._velocity1 = 0,
		this._velocity2 = 0,
		this._newVelocity1 = 0,
		this._newVelocity2 = 0,
		this._average = 0,
		this._mapData = [],
		this._result = !1,
		this._total = 0,
		this._angle = 0,
		this._dx = 0,
		this._dy = 0
	},
	b.Physics.Arcade.prototype.constructor = b.Physics.Arcade,
	b.Physics.Arcade.prototype = {
		setBounds: function(a, b, c, d) {
			this.bounds.setTo(a, b, c, d)
		},
		setBoundsToWorld: function() {
			this.bounds.setTo(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height)
		},
		enable: function(a, c) {
			"undefined" == typeof c && (c = !0);
			var d = 1;
			if (Array.isArray(a)) for (d = a.length; d--;) a[d] instanceof b.Group ? this.enable(a[d].children, c) : (this.enableBody(a[d]), c && a[d].hasOwnProperty("children") && a[d].children.length > 0 && this.enable(a[d], !0));
			else a instanceof b.Group ? this.enable(a.children, c) : (this.enableBody(a), c && a.hasOwnProperty("children") && a.children.length > 0 && this.enable(a.children, !0))
		},
		enableBody: function(a) {
			a.hasOwnProperty("body") && null === a.body && (a.body = new b.Physics.Arcade.Body(a))
		},
		updateMotion: function(a) {
			this._velocityDelta = this.computeVelocity(0, a, a.angularVelocity, a.angularAcceleration, a.angularDrag, a.maxAngular) - a.angularVelocity,
			a.angularVelocity += this._velocityDelta,
			a.rotation += a.angularVelocity * this.game.time.physicsElapsed,
			a.velocity.x = this.computeVelocity(1, a, a.velocity.x, a.acceleration.x, a.drag.x, a.maxVelocity.x),
			a.velocity.y = this.computeVelocity(2, a, a.velocity.y, a.acceleration.y, a.drag.y, a.maxVelocity.y)
		},
		computeVelocity: function(a, b, c, d, e, f) {
			return f = f || 1e4,
			1 == a && b.allowGravity ? c += (this.gravity.x + b.gravity.x) * this.game.time.physicsElapsed: 2 == a && b.allowGravity && (c += (this.gravity.y + b.gravity.y) * this.game.time.physicsElapsed),
			d ? c += d * this.game.time.physicsElapsed: e && (this._drag = e * this.game.time.physicsElapsed, c - this._drag > 0 ? c -= this._drag: c + this._drag < 0 ? c += this._drag: c = 0),
			c > f ? c = f: -f > c && (c = -f),
			c
		},
		overlap: function(a, b, c, d, e) {
			if (c = c || null, d = d || null, e = e || c, this._result = !1, this._total = 0, Array.isArray(b)) for (var f = 0,
			g = b.length; g > f; f++) this.collideHandler(a, b[f], c, d, e, !0);
			else this.collideHandler(a, b, c, d, e, !0);
			return this._total > 0
		},
		collide: function(a, b, c, d, e) {
			if (c = c || null, d = d || null, e = e || c, this._result = !1, this._total = 0, Array.isArray(b)) for (var f = 0,
			g = b.length; g > f; f++) this.collideHandler(a, b[f], c, d, e, !1);
			else this.collideHandler(a, b, c, d, e, !1);
			return this._total > 0
		},
		collideHandler: function(a, c, d, e, f, g) {
			return "undefined" != typeof c || a.type !== b.GROUP && a.type !== b.EMITTER ? (a && c && a.exists && c.exists && (a.type == b.SPRITE || a.type == b.TILESPRITE ? c.type == b.SPRITE || c.type == b.TILESPRITE ? this.collideSpriteVsSprite(a, c, d, e, f, g) : c.type == b.GROUP || c.type == b.EMITTER ? this.collideSpriteVsGroup(a, c, d, e, f, g) : c.type == b.TILEMAPLAYER && this.collideSpriteVsTilemapLayer(a, c, d, e, f) : a.type == b.GROUP ? c.type == b.SPRITE || c.type == b.TILESPRITE ? this.collideSpriteVsGroup(c, a, d, e, f, g) : c.type == b.GROUP || c.type == b.EMITTER ? this.collideGroupVsGroup(a, c, d, e, f, g) : c.type == b.TILEMAPLAYER && this.collideGroupVsTilemapLayer(a, c, d, e, f) : a.type == b.TILEMAPLAYER ? c.type == b.SPRITE || c.type == b.TILESPRITE ? this.collideSpriteVsTilemapLayer(c, a, d, e, f) : (c.type == b.GROUP || c.type == b.EMITTER) && this.collideGroupVsTilemapLayer(c, a, d, e, f) : a.type == b.EMITTER && (c.type == b.SPRITE || c.type == b.TILESPRITE ? this.collideSpriteVsGroup(c, a, d, e, f, g) : c.type == b.GROUP || c.type == b.EMITTER ? this.collideGroupVsGroup(a, c, d, e, f, g) : c.type == b.TILEMAPLAYER && this.collideGroupVsTilemapLayer(a, c, d, e, f))), void 0) : (this.collideGroupVsSelf(a, d, e, f, g), void 0)
		},
		collideSpriteVsSprite: function(a, b, c, d, e, f) {
			return a.body && b.body ? (this.separate(a.body, b.body, d, e, f) && (c && c.call(e, a, b), this._total++), !0) : !1
		},
		collideSpriteVsGroup: function(a, b, c, d, e, f) {
			if (0 !== b.length && a.body) {
				this.quadTree.clear(),
				this.quadTree.reset(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels),
				this.quadTree.populate(b),
				this._potentials = this.quadTree.retrieve(a);
				for (var g = 0,
				h = this._potentials.length; h > g; g++) this.separate(a.body, this._potentials[g], d, e, f) && (c && c.call(e, a, this._potentials[g].sprite), this._total++)
			}
		},
		collideGroupVsSelf: function(a, b, c, d, e) {
			var f, g, h;
			if (0 !== a.length) for (f = a.children.length, g = 0; f > g; g++) for (h = g + 1; f >= h; h++) a.children[g] && a.children[h] && a.children[g].exists && a.children[h].exists && this.collideSpriteVsSprite(a.children[g], a.children[h], b, c, d, e)
		},
		collideGroupVsGroup: function(a, b, c, d, e, f) {
			if (0 !== a.length && 0 !== b.length) for (var g = 0,
			h = a.children.length; h > g; g++) a.children[g].exists && this.collideSpriteVsGroup(a.children[g], b, c, d, e, f)
		},
		collideSpriteVsTilemapLayer: function(a, b, c, d, e) {
			if (a.body && (this._mapData = b.getTiles(a.body.position.x - a.body.tilePadding.x, a.body.position.y - a.body.tilePadding.y, a.body.width + a.body.tilePadding.x, a.body.height + a.body.tilePadding.y, !1, !1), 0 !== this._mapData.length)) for (var f = 0; f < this._mapData.length; f++) d ? d.call(e, a, this._mapData[f]) && this.separateTile(f, a.body, this._mapData[f]) && (this._total++, c && c.call(e, a, this._mapData[f])) : this.separateTile(f, a.body, this._mapData[f]) && (this._total++, c && c.call(e, a, this._mapData[f]))
		},
		collideGroupVsTilemapLayer: function(a, b, c, d, e) {
			if (0 !== a.length) for (var f = 0,
			g = a.children.length; g > f; f++) a.children[f].exists && this.collideSpriteVsTilemapLayer(a.children[f], b, c, d, e)
		},
		separate: function(a, b, c, d, e) {
			return a.enable && b.enable && this.intersects(a, b) ? c && c.call(d, a.sprite, b.sprite) === !1 ? !1 : e ? !0 : (this._result = this.forceX || Math.abs(this.gravity.y + a.gravity.y) < Math.abs(this.gravity.x + a.gravity.x) ? this.separateX(a, b, e) || this.separateY(a, b, e) : this.separateY(a, b, e) || this.separateX(a, b, e), this._result) : !1
		},
		intersects: function(a, b) {
			return a.right <= b.position.x ? !1 : a.bottom <= b.position.y ? !1 : a.position.x >= b.right ? !1 : a.position.y >= b.bottom ? !1 : !0
		},
		separateX: function(a, b, c) {
			return a.immovable && b.immovable ? !1 : (this._overlap = 0, this.intersects(a, b) && (this._maxOverlap = a.deltaAbsX() + b.deltaAbsX() + this.OVERLAP_BIAS, 0 === a.deltaX() && 0 === b.deltaX() ? (a.embedded = !0, b.embedded = !0) : a.deltaX() > b.deltaX() ? (this._overlap = a.right - b.x, this._overlap > this._maxOverlap || a.checkCollision.right === !1 || b.checkCollision.left === !1 ? this._overlap = 0 : (a.touching.none = !1, a.touching.right = !0, b.touching.none = !1, b.touching.left = !0)) : a.deltaX() < b.deltaX() && (this._overlap = a.x - b.width - b.x, -this._overlap > this._maxOverlap || a.checkCollision.left === !1 || b.checkCollision.right === !1 ? this._overlap = 0 : (a.touching.none = !1, a.touching.left = !0, b.touching.none = !1, b.touching.right = !0)), 0 !== this._overlap) ? (a.overlapX = this._overlap, b.overlapX = this._overlap, c || a.customSeparateX || b.customSeparateX ? !0 : (this._velocity1 = a.velocity.x, this._velocity2 = b.velocity.x, a.immovable || b.immovable ? a.immovable ? b.immovable || (b.x += this._overlap, b.velocity.x = this._velocity1 - this._velocity2 * b.bounce.x) : (a.x = a.x - this._overlap, a.velocity.x = this._velocity2 - this._velocity1 * a.bounce.x) : (this._overlap *= .5, a.x = a.x - this._overlap, b.x += this._overlap, this._newVelocity1 = Math.sqrt(this._velocity2 * this._velocity2 * b.mass / a.mass) * (this._velocity2 > 0 ? 1 : -1), this._newVelocity2 = Math.sqrt(this._velocity1 * this._velocity1 * a.mass / b.mass) * (this._velocity1 > 0 ? 1 : -1), this._average = .5 * (this._newVelocity1 + this._newVelocity2), this._newVelocity1 -= this._average, this._newVelocity2 -= this._average, a.velocity.x = this._average + this._newVelocity1 * a.bounce.x, b.velocity.x = this._average + this._newVelocity2 * b.bounce.x), !0)) : !1)
		},
		separateY: function(a, b, c) {
			return a.immovable && b.immovable ? !1 : (this._overlap = 0, this.intersects(a, b) && (this._maxOverlap = a.deltaAbsY() + b.deltaAbsY() + this.OVERLAP_BIAS, 0 === a.deltaY() && 0 === b.deltaY() ? (a.embedded = !0, b.embedded = !0) : a.deltaY() > b.deltaY() ? (this._overlap = a.bottom - b.y, this._overlap > this._maxOverlap || a.checkCollision.down === !1 || b.checkCollision.up === !1 ? this._overlap = 0 : (a.touching.none = !1, a.touching.down = !0, b.touching.none = !1, b.touching.up = !0)) : a.deltaY() < b.deltaY() && (this._overlap = a.y - b.bottom, -this._overlap > this._maxOverlap || a.checkCollision.up === !1 || b.checkCollision.down === !1 ? this._overlap = 0 : (a.touching.none = !1, a.touching.up = !0, b.touching.none = !1, b.touching.down = !0)), 0 !== this._overlap) ? (a.overlapY = this._overlap, b.overlapY = this._overlap, c || a.customSeparateY || b.customSeparateY ? !0 : (this._velocity1 = a.velocity.y, this._velocity2 = b.velocity.y, a.immovable || b.immovable ? a.immovable ? b.immovable || (b.y += this._overlap, b.velocity.y = this._velocity1 - this._velocity2 * b.bounce.y, a.moves && (b.x += a.x - a.prev.x)) : (a.y = a.y - this._overlap, a.velocity.y = this._velocity2 - this._velocity1 * a.bounce.y, b.moves && (a.x += b.x - b.prev.x)) : (this._overlap *= .5, a.y = a.y - this._overlap, b.y += this._overlap, this._newVelocity1 = Math.sqrt(this._velocity2 * this._velocity2 * b.mass / a.mass) * (this._velocity2 > 0 ? 1 : -1), this._newVelocity2 = Math.sqrt(this._velocity1 * this._velocity1 * a.mass / b.mass) * (this._velocity1 > 0 ? 1 : -1), this._average = .5 * (this._newVelocity1 + this._newVelocity2), this._newVelocity1 -= this._average, this._newVelocity2 -= this._average, a.velocity.y = this._average + this._newVelocity1 * a.bounce.y, b.velocity.y = this._average + this._newVelocity2 * b.bounce.y), !0)) : !1)
		},
		separateTile: function(a, b, c) {
			var d, e, f, g;
			if (!b.enable || !c.intersects(b.position.x, b.position.y, b.right, b.bottom)) return ! 1;
			if (c.collisionCallback && !c.collisionCallback.call(c.collisionCallbackContext, b.sprite, c)) return ! 1;
			if (c.layer.callbacks[c.index] && !c.layer.callbacks[c.index].callback.call(c.layer.callbacks[c.index].callbackContext, b.sprite, c)) return ! 1;
			if (! (c.faceLeft || c.faceRight || c.faceTop || c.faceBottom)) return ! 1;
			if (d = 0, e = 0, f = 0, g = 1, b.deltaAbsX() > b.deltaAbsY() ? f = -1 : b.deltaAbsX() < b.deltaAbsY() && (g = -1), 0 !== b.deltaX() && 0 !== b.deltaY() && (c.faceLeft || c.faceRight) && (c.faceTop || c.faceBottom) && (f = Math.min(Math.abs(b.position.x - c.right), Math.abs(b.right - c.left)), g = Math.min(Math.abs(b.position.y - c.bottom), Math.abs(b.bottom - c.top))), g > f) {
				if ((c.faceLeft || c.faceRight) && (d = this.tileCheckX(b, c), 0 !== d && !c.intersects(b.position.x, b.position.y, b.right, b.bottom))) return ! 0; (c.faceTop || c.faceBottom) && (e = this.tileCheckY(b, c))
			} else {
				if ((c.faceTop || c.faceBottom) && (e = this.tileCheckY(b, c), 0 !== e && !c.intersects(b.position.x, b.position.y, b.right, b.bottom))) return ! 0; (c.faceLeft || c.faceRight) && (d = this.tileCheckX(b, c))
			}
			return 0 !== d || 0 !== e
		},
		tileCheckX: function(a, b) {
			var c = 0;
			return a.deltaX() < 0 && !a.blocked.left && b.collideRight && a.checkCollision.left ? b.faceRight && a.x < b.right && (c = a.x - b.right, c < -this.TILE_BIAS && (c = 0)) : a.deltaX() > 0 && !a.blocked.right && b.collideLeft && a.checkCollision.right && b.faceLeft && a.right > b.left && (c = a.right - b.left, c > this.TILE_BIAS && (c = 0)),
			0 !== c && this.processTileSeparationX(a, c),
			c
		},
		tileCheckY: function(a, b) {
			var c = 0;
			return a.deltaY() < 0 && !a.blocked.up && b.collideDown && a.checkCollision.up ? b.faceBottom && a.y < b.bottom && (c = a.y - b.bottom, c < -this.TILE_BIAS && (c = 0)) : a.deltaY() > 0 && !a.blocked.down && b.collideUp && a.checkCollision.down && b.faceTop && a.bottom > b.top && (c = a.bottom - b.top, c > this.TILE_BIAS && (c = 0)),
			0 !== c && this.processTileSeparationY(a, c),
			c
		},
		processTileSeparationX: function(a, b) {
			0 > b ? a.blocked.left = !0 : b > 0 && (a.blocked.right = !0),
			a.position.x -= b,
			a.velocity.x = 0 === a.bounce.x ? 0 : -a.velocity.x * a.bounce.x
		},
		processTileSeparationY: function(a, b) {
			0 > b ? a.blocked.up = !0 : b > 0 && (a.blocked.down = !0),
			a.position.y -= b,
			a.velocity.y = 0 === a.bounce.y ? 0 : -a.velocity.y * a.bounce.y
		},
		getObjectsUnderPointer: function(a, c, d, e) {
			var f, g, h, i;
			if (0 !== c.length && a.exists) {
				for (this.quadTree.clear(), this.quadTree.reset(this.game.world.bounds.x, this.game.world.bounds.y, this.game.world.bounds.width, this.game.world.bounds.height, this.maxObjects, this.maxLevels), this.quadTree.populate(c), f = new b.Rectangle(a.x, a.y, 1, 1), g = [], this._potentials = this.quadTree.retrieve(f), h = 0, i = this._potentials.length; i > h; h++) this._potentials[h].hitTest(a.x, a.y) && (d && d.call(e, a, this._potentials[h].sprite), g.push(this._potentials[h].sprite));
				return g
			}
		},
		moveToObject: function(a, b, c, d) {
			return "undefined" == typeof c && (c = 60),
			"undefined" == typeof d && (d = 0),
			this._angle = Math.atan2(b.y - a.y, b.x - a.x),
			d > 0 && (c = this.distanceBetween(a, b) / (d / 1e3)),
			a.body.velocity.x = Math.cos(this._angle) * c,
			a.body.velocity.y = Math.sin(this._angle) * c,
			this._angle
		},
		moveToPointer: function(a, b, c, d) {
			return "undefined" == typeof b && (b = 60),
			c = c || this.game.input.activePointer,
			"undefined" == typeof d && (d = 0),
			this._angle = this.angleToPointer(a, c),
			d > 0 && (b = this.distanceToPointer(a, c) / (d / 1e3)),
			a.body.velocity.x = Math.cos(this._angle) * b,
			a.body.velocity.y = Math.sin(this._angle) * b,
			this._angle
		},
		moveToXY: function(a, b, c, d, e) {
			return "undefined" == typeof d && (d = 60),
			"undefined" == typeof e && (e = 0),
			this._angle = Math.atan2(c - a.y, b - a.x),
			e > 0 && (d = this.distanceToXY(a, b, c) / (e / 1e3)),
			a.body.velocity.x = Math.cos(this._angle) * d,
			a.body.velocity.y = Math.sin(this._angle) * d,
			this._angle
		},
		velocityFromAngle: function(a, c, d) {
			return "undefined" == typeof c && (c = 60),
			d = d || new b.Point,
			d.setTo(Math.cos(this.game.math.degToRad(a)) * c, Math.sin(this.game.math.degToRad(a)) * c)
		},
		velocityFromRotation: function(a, c, d) {
			return "undefined" == typeof c && (c = 60),
			d = d || new b.Point,
			d.setTo(Math.cos(a) * c, Math.sin(a) * c)
		},
		accelerationFromRotation: function(a, c, d) {
			return "undefined" == typeof c && (c = 60),
			d = d || new b.Point,
			d.setTo(Math.cos(a) * c, Math.sin(a) * c)
		},
		accelerateToObject: function(a, b, c, d, e) {
			return "undefined" == typeof c && (c = 60),
			"undefined" == typeof d && (d = 1e3),
			"undefined" == typeof e && (e = 1e3),
			this._angle = this.angleBetween(a, b),
			a.body.acceleration.setTo(Math.cos(this._angle) * c, Math.sin(this._angle) * c),
			a.body.maxVelocity.setTo(d, e),
			this._angle
		},
		accelerateToPointer: function(a, b, c, d, e) {
			return "undefined" == typeof c && (c = 60),
			"undefined" == typeof b && (b = this.game.input.activePointer),
			"undefined" == typeof d && (d = 1e3),
			"undefined" == typeof e && (e = 1e3),
			this._angle = this.angleToPointer(a, b),
			a.body.acceleration.setTo(Math.cos(this._angle) * c, Math.sin(this._angle) * c),
			a.body.maxVelocity.setTo(d, e),
			this._angle
		},
		accelerateToXY: function(a, b, c, d, e, f) {
			return "undefined" == typeof d && (d = 60),
			"undefined" == typeof e && (e = 1e3),
			"undefined" == typeof f && (f = 1e3),
			this._angle = this.angleToXY(a, b, c),
			a.body.acceleration.setTo(Math.cos(this._angle) * d, Math.sin(this._angle) * d),
			a.body.maxVelocity.setTo(e, f),
			this._angle
		},
		distanceBetween: function(a, b) {
			return this._dx = a.x - b.x,
			this._dy = a.y - b.y,
			Math.sqrt(this._dx * this._dx + this._dy * this._dy)
		},
		distanceToXY: function(a, b, c) {
			return this._dx = a.x - b,
			this._dy = a.y - c,
			Math.sqrt(this._dx * this._dx + this._dy * this._dy)
		},
		distanceToPointer: function(a, b) {
			return b = b || this.game.input.activePointer,
			this._dx = a.x - b.x,
			this._dy = a.y - b.y,
			Math.sqrt(this._dx * this._dx + this._dy * this._dy)
		},
		angleBetween: function(a, b) {
			return this._dx = b.x - a.x,
			this._dy = b.y - a.y,
			Math.atan2(this._dy, this._dx)
		},
		angleToXY: function(a, b, c) {
			return this._dx = b - a.x,
			this._dy = c - a.y,
			Math.atan2(this._dy, this._dx)
		},
		angleToPointer: function(a, b) {
			return b = b || this.game.input.activePointer,
			this._dx = b.worldX - a.x,
			this._dy = b.worldY - a.y,
			Math.atan2(this._dy, this._dx)
		}
	},
	b.Physics.Arcade.Body = function(a) {
		this.sprite = a,
		this.game = a.game,
		this.type = b.Physics.ARCADE,
		this.enable = !0,
		this.offset = new b.Point,
		this.position = new b.Point(a.x, a.y),
		this.prev = new b.Point(this.position.x, this.position.y),
		this.allowRotation = !0,
		this.rotation = a.rotation,
		this.preRotation = a.rotation,
		this.sourceWidth = a.texture.frame.width,
		this.sourceHeight = a.texture.frame.height,
		this.width = a.width,
		this.height = a.height,
		this.halfWidth = Math.abs(a.width / 2),
		this.halfHeight = Math.abs(a.height / 2),
		this.center = new b.Point(a.x + this.halfWidth, a.y + this.halfHeight),
		this.velocity = new b.Point,
		this.newVelocity = new b.Point(0, 0),
		this.deltaMax = new b.Point(0, 0),
		this.acceleration = new b.Point,
		this.drag = new b.Point,
		this.allowGravity = !0,
		this.gravity = new b.Point(0, 0),
		this.bounce = new b.Point,
		this.maxVelocity = new b.Point(1e4, 1e4),
		this.angularVelocity = 0,
		this.angularAcceleration = 0,
		this.angularDrag = 0,
		this.maxAngular = 1e3,
		this.mass = 1,
		this.angle = 0,
		this.speed = 0,
		this.facing = b.NONE,
		this.immovable = !1,
		this.moves = !0,
		this.customSeparateX = !1,
		this.customSeparateY = !1,
		this.overlapX = 0,
		this.overlapY = 0,
		this.embedded = !1,
		this.collideWorldBounds = !1,
		this.checkCollision = {
			none: !1,
			any: !0,
			up: !0,
			down: !0,
			left: !0,
			right: !0
		},
		this.touching = {
			none: !0,
			up: !1,
			down: !1,
			left: !1,
			right: !1
		},
		this.wasTouching = {
			none: !0,
			up: !1,
			down: !1,
			left: !1,
			right: !1
		},
		this.blocked = {
			up: !1,
			down: !1,
			left: !1,
			right: !1
		},
		this.tilePadding = new b.Point,
		this.phase = 0,
		this._reset = !0,
		this._sx = a.scale.x,
		this._sy = a.scale.y,
		this._dx = 0,
		this._dy = 0
	},
	b.Physics.Arcade.Body.prototype = {
		updateBounds: function() {
			var a = Math.abs(this.sprite.scale.x),
			b = Math.abs(this.sprite.scale.y); (a !== this._sx || b !== this._sy) && (this.width = this.sourceWidth * a, this.height = this.sourceHeight * b, this.halfWidth = Math.floor(this.width / 2), this.halfHeight = Math.floor(this.height / 2), this._sx = a, this._sy = b, this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight), this._reset = !0)
		},
		preUpdate: function() {
			this.enable && (this.phase = 1, this.wasTouching.none = this.touching.none, this.wasTouching.up = this.touching.up, this.wasTouching.down = this.touching.down, this.wasTouching.left = this.touching.left, this.wasTouching.right = this.touching.right, this.touching.none = !0, this.touching.up = !1, this.touching.down = !1, this.touching.left = !1, this.touching.right = !1, this.blocked.up = !1, this.blocked.down = !1, this.blocked.left = !1, this.blocked.right = !1, this.embedded = !1, this.updateBounds(), this.position.x = this.sprite.world.x - this.sprite.anchor.x * this.width + this.offset.x, this.position.y = this.sprite.world.y - this.sprite.anchor.y * this.height + this.offset.y, this.rotation = this.sprite.angle, this.preRotation = this.rotation, (this._reset || 1 === this.sprite._cache[4]) && (this.prev.x = this.position.x, this.prev.y = this.position.y), this.moves && (this.game.physics.arcade.updateMotion(this), this.newVelocity.set(this.velocity.x * this.game.time.physicsElapsed, this.velocity.y * this.game.time.physicsElapsed), this.position.x += this.newVelocity.x, this.position.y += this.newVelocity.y, (this.position.x !== this.prev.x || this.position.y !== this.prev.y) && (this.speed = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y), this.angle = Math.atan2(this.velocity.y, this.velocity.x)), this.collideWorldBounds && this.checkWorldBounds()), this._dx = this.deltaX(), this._dy = this.deltaY(), this._reset = !1)
		},
		postUpdate: function() {
			this.enable && 2 !== this.phase && (this.phase = 2, this.deltaX() < 0 ? this.facing = b.LEFT: this.deltaX() > 0 && (this.facing = b.RIGHT), this.deltaY() < 0 ? this.facing = b.UP: this.deltaY() > 0 && (this.facing = b.DOWN), this.moves && (this._dx = this.deltaX(), this._dy = this.deltaY(), 0 !== this.deltaMax.x && 0 !== this._dx && (this._dx < 0 && this._dx < -this.deltaMax.x ? this._dx = -this.deltaMax.x: this._dx > 0 && this._dx > this.deltaMax.x && (this._dx = this.deltaMax.x)), 0 !== this.deltaMax.y && 0 !== this._dy && (this._dy < 0 && this._dy < -this.deltaMax.y ? this._dy = -this.deltaMax.y: this._dy > 0 && this._dy > this.deltaMax.y && (this._dy = this.deltaMax.y)), this.sprite.x += this._dx, this.sprite.y += this._dy), this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight), this.allowRotation && (this.sprite.angle += this.deltaZ()), this.prev.x = this.position.x, this.prev.y = this.position.y)
		},
		destroy: function() {
			this.sprite = null
		},
		checkWorldBounds: function() {
			this.position.x < this.game.physics.arcade.bounds.x && this.game.physics.arcade.checkCollision.left ? (this.position.x = this.game.physics.arcade.bounds.x, this.velocity.x *= -this.bounce.x, this.blocked.left = !0) : this.right > this.game.physics.arcade.bounds.right && this.game.physics.arcade.checkCollision.right && (this.position.x = this.game.physics.arcade.bounds.right - this.width, this.velocity.x *= -this.bounce.x, this.blocked.right = !0),
			this.position.y < this.game.physics.arcade.bounds.y && this.game.physics.arcade.checkCollision.up ? (this.position.y = this.game.physics.arcade.bounds.y, this.velocity.y *= -this.bounce.y, this.blocked.up = !0) : this.bottom > this.game.physics.arcade.bounds.bottom && this.game.physics.arcade.checkCollision.down && (this.position.y = this.game.physics.arcade.bounds.bottom - this.height, this.velocity.y *= -this.bounce.y, this.blocked.down = !0)
		},
		setSize: function(a, b, c, d) {
			"undefined" == typeof c && (c = this.offset.x),
			"undefined" == typeof d && (d = this.offset.y),
			this.sourceWidth = a,
			this.sourceHeight = b,
			this.width = this.sourceWidth * this._sx,
			this.height = this.sourceHeight * this._sy,
			this.halfWidth = Math.floor(this.width / 2),
			this.halfHeight = Math.floor(this.height / 2),
			this.offset.setTo(c, d),
			this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight)
		},
		reset: function(a, b) {
			this.velocity.set(0),
			this.acceleration.set(0),
			this.angularVelocity = 0,
			this.angularAcceleration = 0,
			this.position.x = a - this.sprite.anchor.x * this.width + this.offset.x,
			this.position.y = b - this.sprite.anchor.y * this.height + this.offset.y,
			this.prev.x = this.position.x,
			this.prev.y = this.position.y,
			this.rotation = this.sprite.angle,
			this.preRotation = this.rotation,
			this._sx = this.sprite.scale.x,
			this._sy = this.sprite.scale.y,
			this.center.setTo(this.position.x + this.halfWidth, this.position.y + this.halfHeight)
		},
		hitTest: function(a, c) {
			return b.Rectangle.contains(this, a, c)
		},
		onFloor: function() {
			return this.blocked.down
		},
		onWall: function() {
			return this.blocked.left || this.blocked.right
		},
		deltaAbsX: function() {
			return this.deltaX() > 0 ? this.deltaX() : -this.deltaX()
		},
		deltaAbsY: function() {
			return this.deltaY() > 0 ? this.deltaY() : -this.deltaY()
		},
		deltaX: function() {
			return this.position.x - this.prev.x
		},
		deltaY: function() {
			return this.position.y - this.prev.y
		},
		deltaZ: function() {
			return this.rotation - this.preRotation
		}
	},
	Object.defineProperty(b.Physics.Arcade.Body.prototype, "bottom", {
		get: function() {
			return this.position.y + this.height
		}
	}),
	Object.defineProperty(b.Physics.Arcade.Body.prototype, "right", {
		get: function() {
			return this.position.x + this.width
		}
	}),
	Object.defineProperty(b.Physics.Arcade.Body.prototype, "x", {
		get: function() {
			return this.position.x
		},
		set: function(a) {
			this.position.x = a
		}
	}),
	Object.defineProperty(b.Physics.Arcade.Body.prototype, "y", {
		get: function() {
			return this.position.y
		},
		set: function(a) {
			this.position.y = a
		}
	}),
	b.Physics.Arcade.Body.render = function(a, b, c, d) {
		"undefined" == typeof d && (d = !0),
		c = c || "rgba(0,255,0,0.4)",
		d ? (a.fillStyle = c, a.fillRect(b.position.x - b.game.camera.x, b.position.y - b.game.camera.y, b.width, b.height)) : (a.strokeStyle = c, a.strokeRect(b.position.x - b.game.camera.x, b.position.y - b.game.camera.y, b.width, b.height))
	},
	b.Physics.Arcade.Body.renderBodyInfo = function(a, b) {
		a.line("x: " + b.x.toFixed(2), "y: " + b.y.toFixed(2), "width: " + b.width, "height: " + b.height),
		a.line("velocity x: " + b.velocity.x.toFixed(2), "y: " + b.velocity.y.toFixed(2), "deltaX: " + b._dx.toFixed(2), "deltaY: " + b._dy.toFixed(2)),
		a.line("acceleration x: " + b.acceleration.x.toFixed(2), "y: " + b.acceleration.y.toFixed(2), "speed: " + b.speed.toFixed(2), "angle: " + b.angle.toFixed(2)),
		a.line("gravity x: " + b.gravity.x, "y: " + b.gravity.y, "bounce x: " + b.bounce.x.toFixed(2), "y: " + b.bounce.y.toFixed(2)),
		a.line("touching left: " + b.touching.left, "right: " + b.touching.right, "up: " + b.touching.up, "down: " + b.touching.down),
		a.line("blocked left: " + b.blocked.left, "right: " + b.blocked.right, "up: " + b.blocked.up, "down: " + b.blocked.down)
	},
	b.Physics.Arcade.Body.prototype.constructor = b.Physics.Arcade.Body,
	b.Particles = function(a) {
		this.game = a,
		this.emitters = {},
		this.ID = 0
	},
	b.Particles.prototype = {
		add: function(a) {
			return this.emitters[a.name] = a,
			a
		},
		remove: function(a) {
			delete this.emitters[a.name]
		},
		update: function() {
			for (var a in this.emitters) this.emitters[a].exists && this.emitters[a].update()
		}
	},
	b.Particles.prototype.constructor = b.Particles,
	b.Particles.Arcade = {},
	b.Particles.Arcade.Emitter = function(a, c, d, e) {
		this.maxParticles = e || 50,
		b.Group.call(this, a),
		this.name = "emitter" + this.game.particles.ID++,
		this.type = b.EMITTER,
		this.area = new b.Rectangle(c, d, 1, 1),
		this.minParticleSpeed = new b.Point( - 100, -100),
		this.maxParticleSpeed = new b.Point(100, 100),
		this.minParticleScale = 1,
		this.maxParticleScale = 1,
		this.scaleData = null,
		this.minRotation = -360,
		this.maxRotation = 360,
		this.minParticleAlpha = 1,
		this.maxParticleAlpha = 1,
		this.alphaData = null,
		this.gravity = 100,
		this.particleClass = b.Particle,
		this.particleDrag = new b.Point,
		this.angularDrag = 0,
		this.frequency = 100,
		this.lifespan = 2e3,
		this.bounce = new b.Point,
		this.on = !1,
		this.particleAnchor = new b.Point(.5, .5),
		this.blendMode = b.blendModes.NORMAL,
		this.emitX = c,
		this.emitY = d,
		this.autoScale = !1,
		this.autoAlpha = !1,
		this.particleBringToTop = !1,
		this.particleSendToBack = !1,
		this._minParticleScale = new b.Point(1, 1),
		this._maxParticleScale = new b.Point(1, 1),
		this._quantity = 0,
		this._timer = 0,
		this._counter = 0,
		this._explode = !0,
		this._frames = null
	},
	b.Particles.Arcade.Emitter.prototype = Object.create(b.Group.prototype),
	b.Particles.Arcade.Emitter.prototype.constructor = b.Particles.Arcade.Emitter,
	b.Particles.Arcade.Emitter.prototype.update = function() {
		if (this.on) if (this._explode) {
			this._counter = 0;
			do this.emitParticle(),
			this._counter++;
			while (this._counter < this._quantity);
			this.on = !1
		} else this.game.time.now >= this._timer && (this.emitParticle(), this._counter++, this._quantity > 0 && this._counter >= this._quantity && (this.on = !1), this._timer = this.game.time.now + this.frequency);
		for (var a = this.children.length; a--;) this.children[a].exists && this.children[a].update()
	},
	b.Particles.Arcade.Emitter.prototype.makeParticles = function(a, b, c, d, e) {
		var f, g, h, i;
		for ("undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = this.maxParticles), "undefined" == typeof d && (d = !1), "undefined" == typeof e && (e = !1), g = 0, h = a, i = b, this._frames = b; c > g;) Array.isArray(a) && (h = this.game.rnd.pick(a)),
		Array.isArray(b) && (i = this.game.rnd.pick(b)),
		f = new this.particleClass(this.game, 0, 0, h, i),
		this.game.physics.arcade.enable(f, !1),
		d ? (f.body.checkCollision.any = !0, f.body.checkCollision.none = !1) : f.body.checkCollision.none = !0,
		f.body.collideWorldBounds = e,
		f.exists = !1,
		f.visible = !1,
		f.anchor.copyFrom(this.particleAnchor),
		this.add(f),
		g++;
		return this
	},
	b.Particles.Arcade.Emitter.prototype.kill = function() {
		this.on = !1,
		this.alive = !1,
		this.exists = !1
	},
	b.Particles.Arcade.Emitter.prototype.revive = function() {
		this.alive = !0,
		this.exists = !0
	},
	b.Particles.Arcade.Emitter.prototype.explode = function(a, b) {
		this.start(!0, a, 0, b, !1)
	},
	b.Particles.Arcade.Emitter.prototype.flow = function(a, b, c) {
		this.start(!1, a, b, c, !0)
	},
	b.Particles.Arcade.Emitter.prototype.start = function(a, b, c, d, e) {
		"undefined" == typeof a && (a = !0),
		"undefined" == typeof b && (b = 0),
		("undefined" == typeof c || null === c) && (c = 250),
		"undefined" == typeof d && (d = 0),
		"undefined" == typeof e && (e = !1),
		this.revive(),
		this.visible = !0,
		this.on = !0,
		this._explode = a,
		this.lifespan = b,
		this.frequency = c,
		a || e ? this._quantity = d: this._quantity += d,
		this._counter = 0,
		this._timer = this.game.time.now + c
	},
	b.Particles.Arcade.Emitter.prototype.emitParticle = function() {
		var a = this.getFirstExists(!1);
		null !== a && (this.width > 1 || this.height > 1 ? a.reset(this.game.rnd.integerInRange(this.left, this.right), this.game.rnd.integerInRange(this.top, this.bottom)) : a.reset(this.emitX, this.emitY), a.angle = 0, a.lifespan = this.lifespan, this.particleBringToTop ? this.bringToTop(a) : this.particleSendToBack && this.sendToBack(a), this.autoScale ? a.setScaleData(this.scaleData) : 1 !== this.minParticleScale || 1 !== this.maxParticleScale ? a.scale.set(this.game.rnd.realInRange(this.minParticleScale, this.maxParticleScale)) : (this._minParticleScale.x !== this._maxParticleScale.x || this._minParticleScale.y !== this._maxParticleScale.y) && a.scale.set(this.game.rnd.realInRange(this._minParticleScale.x, this._maxParticleScale.x), this.game.rnd.realInRange(this._minParticleScale.y, this._maxParticleScale.y)), a.frame = Array.isArray("object" === this._frames) ? this.game.rnd.pick(this._frames) : this._frames, this.autoAlpha ? a.setAlphaData(this.alphaData) : a.alpha = this.game.rnd.realInRange(this.minParticleAlpha, this.maxParticleAlpha), a.blendMode = this.blendMode, a.body.updateBounds(), a.body.bounce.setTo(this.bounce.x, this.bounce.y), a.body.velocity.x = this.game.rnd.integerInRange(this.minParticleSpeed.x, this.maxParticleSpeed.x), a.body.velocity.y = this.game.rnd.integerInRange(this.minParticleSpeed.y, this.maxParticleSpeed.y), a.body.angularVelocity = this.game.rnd.integerInRange(this.minRotation, this.maxRotation), a.body.gravity.y = this.gravity, a.body.drag.x = this.particleDrag.x, a.body.drag.y = this.particleDrag.y, a.body.angularDrag = this.angularDrag, a.onEmit())
	},
	b.Particles.Arcade.Emitter.prototype.setSize = function(a, b) {
		this.area.width = a,
		this.area.height = b
	},
	b.Particles.Arcade.Emitter.prototype.setXSpeed = function(a, b) {
		a = a || 0,
		b = b || 0,
		this.minParticleSpeed.x = a,
		this.maxParticleSpeed.x = b
	},
	b.Particles.Arcade.Emitter.prototype.setYSpeed = function(a, b) {
		a = a || 0,
		b = b || 0,
		this.minParticleSpeed.y = a,
		this.maxParticleSpeed.y = b
	},
	b.Particles.Arcade.Emitter.prototype.setRotation = function(a, b) {
		a = a || 0,
		b = b || 0,
		this.minRotation = a,
		this.maxRotation = b
	},
	b.Particles.Arcade.Emitter.prototype.setAlpha = function(a, c, d, e, f) {
		var g, h;
		"undefined" == typeof a && (a = 1),
		"undefined" == typeof c && (c = 1),
		"undefined" == typeof d && (d = 0),
		"undefined" == typeof e && (e = b.Easing.Linear.None),
		"undefined" == typeof f && (f = !1),
		this.minParticleAlpha = a,
		this.maxParticleAlpha = c,
		this.autoAlpha = !1,
		d > 0 && a !== c && (g = {
			v: a
		},
		h = this.game.make.tween(g).to({
			v: c
		},
		d, e), h.yoyo(f), this.alphaData = h.generateData(60), this.alphaData.reverse(), this.autoAlpha = !0)
	},
	b.Particles.Arcade.Emitter.prototype.setScale = function(a, c, d, e, f, g, h) {
		var i, j;
		"undefined" == typeof a && (a = 1),
		"undefined" == typeof c && (c = 1),
		"undefined" == typeof d && (d = 1),
		"undefined" == typeof e && (e = 1),
		"undefined" == typeof f && (f = 0),
		"undefined" == typeof g && (g = b.Easing.Linear.None),
		"undefined" == typeof h && (h = !1),
		this.minParticleScale = 1,
		this.maxParticleScale = 1,
		this._minParticleScale.set(a, d),
		this._maxParticleScale.set(c, e),
		this.autoScale = !1,
		(f > 0 && a !== c || d !== e) && (i = {
			x: a,
			y: d
		},
		j = this.game.make.tween(i).to({
			x: c,
			y: e
		},
		f, g), j.yoyo(h), this.scaleData = j.generateData(60), this.scaleData.reverse(), this.autoScale = !0)
	},
	b.Particles.Arcade.Emitter.prototype.at = function(a) {
		a.center ? (this.emitX = a.center.x, this.emitY = a.center.y) : (this.emitX = a.world.x + a.anchor.x * a.width, this.emitY = a.world.y + a.anchor.y * a.height)
	},
	Object.defineProperty(b.Particles.Arcade.Emitter.prototype, "width", {
		get: function() {
			return this.area.width
		},
		set: function(a) {
			this.area.width = a
		}
	}),
	Object.defineProperty(b.Particles.Arcade.Emitter.prototype, "height", {
		get: function() {
			return this.area.height
		},
		set: function(a) {
			this.area.height = a
		}
	}),
	Object.defineProperty(b.Particles.Arcade.Emitter.prototype, "x", {
		get: function() {
			return this.emitX
		},
		set: function(a) {
			this.emitX = a
		}
	}),
	Object.defineProperty(b.Particles.Arcade.Emitter.prototype, "y", {
		get: function() {
			return this.emitY
		},
		set: function(a) {
			this.emitY = a
		}
	}),
	Object.defineProperty(b.Particles.Arcade.Emitter.prototype, "left", {
		get: function() {
			return Math.floor(this.x - this.area.width / 2)
		}
	}),
	Object.defineProperty(b.Particles.Arcade.Emitter.prototype, "right", {
		get: function() {
			return Math.floor(this.x + this.area.width / 2)
		}
	}),
	Object.defineProperty(b.Particles.Arcade.Emitter.prototype, "top", {
		get: function() {
			return Math.floor(this.y - this.area.height / 2)
		}
	}),
	Object.defineProperty(b.Particles.Arcade.Emitter.prototype, "bottom", {
		get: function() {
			return Math.floor(this.y + this.area.height / 2)
		}
	}),
	b.Tile = function(a, b, c, d, e, f) {
		this.layer = a,
		this.index = b,
		this.x = c,
		this.y = d,
		this.worldX = c * e,
		this.worldY = d * f,
		this.width = e,
		this.height = f,
		this.centerX = Math.abs(e / 2),
		this.centerY = Math.abs(f / 2),
		this.alpha = 1,
		this.properties = {},
		this.scanned = !1,
		this.faceTop = !1,
		this.faceBottom = !1,
		this.faceLeft = !1,
		this.faceRight = !1,
		this.collideLeft = !1,
		this.collideRight = !1,
		this.collideUp = !1,
		this.collideDown = !1,
		this.collisionCallback = null,
		this.collisionCallbackContext = this
	},
	b.Tile.prototype = {
		containsPoint: function(a, b) {
			return ! (a < this.worldX || b < this.worldY || a > this.right || b > this.bottom)
		},
		intersects: function(a, b, c, d) {
			return c <= this.worldX ? !1 : d <= this.worldY ? !1 : a >= this.worldX + this.width ? !1 : b >= this.worldY + this.height ? !1 : !0
		},
		setCollisionCallback: function(a, b) {
			this.collisionCallback = a,
			this.collisionCallbackContext = b
		},
		destroy: function() {
			this.collisionCallback = null,
			this.collisionCallbackContext = null,
			this.properties = null
		},
		setCollision: function(a, b, c, d) {
			this.collideLeft = a,
			this.collideRight = b,
			this.collideUp = c,
			this.collideDown = d
		},
		resetCollision: function() {
			this.collideLeft = !1,
			this.collideRight = !1,
			this.collideUp = !1,
			this.collideDown = !1,
			this.faceTop = !1,
			this.faceBottom = !1,
			this.faceLeft = !1,
			this.faceRight = !1
		},
		isInteresting: function(a, b) {
			return a && b ? this.collideLeft || this.collideRight || this.collideUp || this.collideDown || this.faceTop || this.faceBottom || this.faceLeft || this.faceRight || this.collisionCallback: a ? this.collideLeft || this.collideRight || this.collideUp || this.collideDown: b ? this.faceTop || this.faceBottom || this.faceLeft || this.faceRight: !1
		},
		copy: function(a) {
			this.index = a.index,
			this.alpha = a.alpha,
			this.properties = a.properties,
			this.collideUp = a.collideUp,
			this.collideDown = a.collideDown,
			this.collideLeft = a.collideLeft,
			this.collideRight = a.collideRight,
			this.collisionCallback = a.collisionCallback,
			this.collisionCallbackContext = a.collisionCallbackContext
		}
	},
	b.Tile.prototype.constructor = b.Tile,
	Object.defineProperty(b.Tile.prototype, "collides", {
		get: function() {
			return this.collideLeft || this.collideRight || this.collideUp || this.collideDown
		}
	}),
	Object.defineProperty(b.Tile.prototype, "canCollide", {
		get: function() {
			return this.collideLeft || this.collideRight || this.collideUp || this.collideDown || this.collisionCallback
		}
	}),
	Object.defineProperty(b.Tile.prototype, "left", {
		get: function() {
			return this.worldX
		}
	}),
	Object.defineProperty(b.Tile.prototype, "right", {
		get: function() {
			return this.worldX + this.width
		}
	}),
	Object.defineProperty(b.Tile.prototype, "top", {
		get: function() {
			return this.worldY
		}
	}),
	Object.defineProperty(b.Tile.prototype, "bottom", {
		get: function() {
			return this.worldY + this.height
		}
	}),
	b.Tilemap = function(a, c, d, e, f, g) {
		this.game = a,
		this.key = c;
		var h = b.TilemapParser.parse(this.game, c, d, e, f, g);
		null !== h && (this.width = h.width, this.height = h.height, this.tileWidth = h.tileWidth, this.tileHeight = h.tileHeight, this.orientation = h.orientation, this.format = h.format, this.version = h.version, this.properties = h.properties, this.widthInPixels = h.widthInPixels, this.heightInPixels = h.heightInPixels, this.layers = h.layers, this.tilesets = h.tilesets, this.tiles = h.tiles, this.objects = h.objects, this.collideIndexes = [], this.collision = h.collision, this.images = h.images, this.currentLayer = 0, this.debugMap = [], this._results = [], this._tempA = 0, this._tempB = 0)
	},
	b.Tilemap.CSV = 0,
	b.Tilemap.TILED_JSON = 1,
	b.Tilemap.NORTH = 0,
	b.Tilemap.EAST = 1,
	b.Tilemap.SOUTH = 2,
	b.Tilemap.WEST = 3,
	b.Tilemap.prototype = {
		create: function(a, b, c, d, e, f) {
			return "undefined" == typeof f && (f = this.game.world),
			this.width = b,
			this.height = c,
			this.setTileSize(d, e),
			this.layers.length = 0,
			this.createBlankLayer(a, b, c, d, e, f)
		},
		setTileSize: function(a, b) {
			this.tileWidth = a,
			this.tileHeight = b,
			this.widthInPixels = this.width * a,
			this.heightInPixels = this.height * b
		},
		addTilesetImage: function(a, c, d, e, f, g, h) {
			var i, j, k, l, m, n, o, p;
			if ("undefined" == typeof d && (d = this.tileWidth), "undefined" == typeof e && (e = this.tileHeight), "undefined" == typeof f && (f = 0), "undefined" == typeof g && (g = 0), "undefined" == typeof h && (h = 0), 0 === d && (d = 32), 0 === e && (e = 32), "undefined" == typeof c) {
				if ("string" != typeof a) return null;
				if (c = a, !this.game.cache.checkImageKey(c)) return console.warn('Phaser.Tilemap.addTilesetImage: Invalid image key given: "' + c + '"'),
				null
			}
			if ("string" == typeof a && (a = this.getTilesetIndex(a), null === a && this.format === b.Tilemap.TILED_JSON)) return console.warn('Phaser.Tilemap.addTilesetImage: No data found in the JSON matching the tileset name: "' + c + '"'),
			null;
			if (this.tilesets[a]) return this.tilesets[a].setImage(this.game.cache.getImage(c)),
			this.tilesets[a];
			for (i = new b.Tileset(c, h, d, e, f, g, {}), i.setImage(this.game.cache.getImage(c)), this.tilesets.push(i), j = this.tilesets.length - 1, k = f, l = f, m = 0, n = 0, o = 0, p = h; p < h + i.total && (this.tiles[p] = [k, l, j], k += d + g, m++, m !== i.total) && (n++, n !== i.columns || (k = f, l += e + g, n = 0, o++, o !== i.rows)); p++);
			return i
		},
		createFromObjects: function(a, c, d, e, f, g, h, i, j) {
			var k, l, m, n;
			if ("undefined" == typeof f && (f = !0), "undefined" == typeof g && (g = !1), "undefined" == typeof h && (h = this.game.world), "undefined" == typeof i && (i = b.Sprite), "undefined" == typeof j && (j = !0), !this.objects[a]) return console.warn("Tilemap.createFromObjects: Invalid objectgroup name given: " + a),
			void 0;
			for (l = 0, m = this.objects[a].length; m > l; l++) if (this.objects[a][l].gid === c) {
				k = new i(this.game, this.objects[a][l].x, this.objects[a][l].y, d, e),
				k.name = this.objects[a][l].name,
				k.visible = this.objects[a][l].visible,
				k.autoCull = g,
				k.exists = f,
				j && (k.y -= k.height),
				h.add(k);
				for (n in this.objects[a][l].properties) h.set(k, n, this.objects[a][l].properties[n], !1, !1, 0, !0)
			}
		},
		createLayer: function(a, c, d, e) {
			"undefined" == typeof c && (c = this.game.width),
			"undefined" == typeof d && (d = this.game.height),
			"undefined" == typeof e && (e = this.game.world);
			var f = a;
			return "string" == typeof a && (f = this.getLayerIndex(a)),
			null === f || f > this.layers.length ? (console.warn("Tilemap.createLayer: Invalid layer ID given: " + f), void 0) : e.add(new b.TilemapLayer(this.game, this, f, c, d))
		},
		createBlankLayer: function(a, c, d, e, f, g) {
			var h, i, j, k, l, m, n;
			if ("undefined" == typeof g && (g = this.game.world), null !== this.getLayerIndex(a)) return console.warn("Tilemap.createBlankLayer: Layer with matching name already exists"),
			void 0;
			for (h = {
				name: a,
				x: 0,
				y: 0,
				width: c,
				height: d,
				widthInPixels: c * e,
				heightInPixels: d * f,
				alpha: 1,
				visible: !0,
				properties: {},
				indexes: [],
				callbacks: [],
				bodies: [],
				data: null
			},
			j = [], k = 0; d > k; k++) {
				for (i = [], l = 0; c > l; l++) i.push(new b.Tile(h, -1, l, k, e, f));
				j.push(i)
			}
			return h.data = j,
			this.layers.push(h),
			this.currentLayer = this.layers.length - 1,
			m = h.widthInPixels,
			n = h.heightInPixels,
			m > this.game.width && (m = this.game.width),
			n > this.game.height && (n = this.game.height),
			j = new b.TilemapLayer(this.game, this, this.layers.length - 1, m, n),
			j.name = a,
			g.add(j)
		},
		getIndex: function(a, b) {
			for (var c = 0; c < a.length; c++) if (a[c].name === b) return c;
			return null
		},
		getLayerIndex: function(a) {
			return this.getIndex(this.layers, a)
		},
		getTilesetIndex: function(a) {
			return this.getIndex(this.tilesets, a)
		},
		getImageIndex: function(a) {
			return this.getIndex(this.images, a)
		},
		getObjectIndex: function(a) {
			return this.getIndex(this.objects, a)
		},
		setTileIndexCallback: function(a, b, c, d) {
			if (d = this.getLayer(d), "number" == typeof a) this.layers[d].callbacks[a] = {
				callback: b,
				callbackContext: c
			};
			else for (var e = 0,
			f = a.length; f > e; e++) this.layers[d].callbacks[a[e]] = {
				callback: b,
				callbackContext: c
			}
		},
		setTileLocationCallback: function(a, b, c, d, e, f, g) {
			if (g = this.getLayer(g), this.copy(a, b, c, d, g), !(this._results.length < 2)) for (var h = 1; h < this._results.length; h++) this._results[h].setCollisionCallback(e, f)
		},
		setCollision: function(a, b, c, d) {
			if ("undefined" == typeof b && (b = !0), "undefined" == typeof d && (d = !0), c = this.getLayer(c), "number" == typeof a) return this.setCollisionByIndex(a, b, c, !0);
			for (var e = 0,
			f = a.length; f > e; e++) this.setCollisionByIndex(a[e], b, c, !1);
			d && this.calculateFaces(c)
		},
		setCollisionBetween: function(a, b, c, d, e) {
			if ("undefined" == typeof c && (c = !0), "undefined" == typeof e && (e = !0), d = this.getLayer(d), !(a > b)) {
				for (var f = a; b >= f; f++) this.setCollisionByIndex(f, c, d, !1);
				e && this.calculateFaces(d)
			}
		},
		setCollisionByExclusion: function(a, b, c, d) {
			"undefined" == typeof b && (b = !0),
			"undefined" == typeof d && (d = !0),
			c = this.getLayer(c);
			for (var e = 0,
			f = this.tiles.length; f > e; e++) - 1 === a.indexOf(e) && this.setCollisionByIndex(e, b, c, !1);
			d && this.calculateFaces(c)
		},
		setCollisionByIndex: function(a, b, c, d) {
			var e, f, g, h;
			for ("undefined" == typeof b && (b = !0), "undefined" == typeof c && (c = this.currentLayer), "undefined" == typeof d && (d = !0), b ? this.collideIndexes.push(a) : (e = this.collideIndexes.indexOf(a), e > -1 && this.collideIndexes.splice(e, 1)), f = 0; f < this.layers[c].height; f++) for (g = 0; g < this.layers[c].width; g++) h = this.layers[c].data[f][g],
			h && h.index === a && (b ? h.setCollision(!0, !0, !0, !0) : h.resetCollision(), h.faceTop = b, h.faceBottom = b, h.faceLeft = b, h.faceRight = b);
			return d && this.calculateFaces(c),
			c
		},
		getLayer: function(a) {
			return "undefined" == typeof a ? a = this.currentLayer: "string" == typeof a ? a = this.getLayerIndex(a) : a instanceof b.TilemapLayer && (a = a.index),
			a
		},
		setPreventRecalculate: function(a) {
			if (a === !0 && this.preventingRecalculate !== !0 && (this.preventingRecalculate = !0, this.needToRecalculate = {}), a === !1 && this.preventingRecalculate === !0) {
				this.preventingRecalculate = !1;
				for (var b in this.needToRecalculate) this.calculateFaces(b);
				this.needToRecalculate = !1
			}
		},
		calculateFaces: function(a) {
			var b, c, d, e, f, g, h, i, j;
			if (this.preventingRecalculate === !0) return this.needToRecalculate[a] = !0,
			void 0;
			for (b = null, c = null, d = null, e = null, f = 0, g = this.layers[a].height; g > f; f++) for (h = 0, i = this.layers[a].width; i > h; h++) j = this.layers[a].data[f][h],
			j && (b = this.getTileAbove(a, h, f), c = this.getTileBelow(a, h, f), d = this.getTileLeft(a, h, f), e = this.getTileRight(a, h, f), j.collides && (j.faceTop = !0, j.faceBottom = !0, j.faceLeft = !0, j.faceRight = !0), b && b.collides && (j.faceTop = !1), c && c.collides && (j.faceBottom = !1), d && d.collides && (j.faceLeft = !1), e && e.collides && (j.faceRight = !1))
		},
		getTileAbove: function(a, b, c) {
			return c > 0 ? this.layers[a].data[c - 1][b] : null
		},
		getTileBelow: function(a, b, c) {
			return c < this.layers[a].height - 1 ? this.layers[a].data[c + 1][b] : null
		},
		getTileLeft: function(a, b, c) {
			return b > 0 ? this.layers[a].data[c][b - 1] : null
		},
		getTileRight: function(a, b, c) {
			return b < this.layers[a].width - 1 ? this.layers[a].data[c][b + 1] : null
		},
		setLayer: function(a) {
			a = this.getLayer(a),
			this.layers[a] && (this.currentLayer = a)
		},
		hasTile: function(a, b, c) {
			return c = this.getLayer(c),
			null !== this.layers[c].data[b] && null !== this.layers[c].data[b][a]
		},
		removeTile: function(a, c, d) {
			if (d = this.getLayer(d), a >= 0 && a < this.layers[d].width && c >= 0 && c < this.layers[d].height && this.hasTile(a, c, d)) {
				var e = this.layers[d].data[c][a];
				return this.layers[d].data[c][a] = new b.Tile(this.layers[d], -1, a, c, this.tileWidth, this.tileHeight),
				this.layers[d].dirty = !0,
				this.calculateFaces(d),
				e
			}
		},
		removeTileWorldXY: function(a, b, c, d, e) {
			return e = this.getLayer(e),
			a = this.game.math.snapToFloor(a, c) / c,
			b = this.game.math.snapToFloor(b, d) / d,
			this.removeTile(a, b, e)
		},
		putTile: function(a, c, d, e) {
			if (null === a) return this.removeTile(c, d, e);
			if (e = this.getLayer(e), c >= 0 && c < this.layers[e].width && d >= 0 && d < this.layers[e].height) {
				var f;
				return a instanceof b.Tile ? (f = a.index, this.hasTile(c, d, e) ? this.layers[e].data[d][c].copy(a) : this.layers[e].data[d][c] = new b.Tile(e, f, c, d, a.width, a.height)) : (f = a, this.hasTile(c, d, e) ? this.layers[e].data[d][c].index = f: this.layers[e].data[d][c] = new b.Tile(this.layers[e], f, c, d, this.tileWidth, this.tileHeight)),
				this.collideIndexes.indexOf(f) > -1 ? this.layers[e].data[d][c].setCollision(!0, !0, !0, !0) : this.layers[e].data[d][c].resetCollision(),
				this.layers[e].dirty = !0,
				this.calculateFaces(e),
				this.layers[e].data[d][c]
			}
			return null
		},
		putTileWorldXY: function(a, b, c, d, e, f) {
			return f = this.getLayer(f),
			b = this.game.math.snapToFloor(b, d) / d,
			c = this.game.math.snapToFloor(c, e) / e,
			this.putTile(a, b, c, f)
		},
		searchTileIndex: function(a, b, c, d) {
			var e, f, g;
			if ("undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = !1), d = this.getLayer(d), e = 0, c) {
				for (f = this.layers[d].height - 1; f >= 0; f--) for (g = this.layers[d].width - 1; g >= 0; g--) if (this.layers[d].data[f][g].index === a) {
					if (e === b) return this.layers[d].data[f][g];
					e++
				}
			} else for (f = 0; f < this.layers[d].height; f++) for (g = 0; g < this.layers[d].width; g++) if (this.layers[d].data[f][g].index === a) {
				if (e === b) return this.layers[d].data[f][g];
				e++
			}
			return null
		},
		getTile: function(a, b, c, d) {
			return "undefined" == typeof d && (d = !1),
			c = this.getLayer(c),
			a >= 0 && a < this.layers[c].width && b >= 0 && b < this.layers[c].height ? -1 === this.layers[c].data[b][a].index ? d ? this.layers[c].data[b][a] : null: this.layers[c].data[b][a] : null
		},
		getTileWorldXY: function(a, b, c, d, e) {
			return "undefined" == typeof c && (c = this.tileWidth),
			"undefined" == typeof d && (d = this.tileHeight),
			e = this.getLayer(e),
			a = this.game.math.snapToFloor(a, c) / c,
			b = this.game.math.snapToFloor(b, d) / d,
			this.getTile(a, b, e)
		},
		copy: function(a, b, c, d, e) {
			var f, g;
			if (e = this.getLayer(e), !this.layers[e]) return this._results.length = 0,
			void 0;
			for ("undefined" == typeof a && (a = 0), "undefined" == typeof b && (b = 0), "undefined" == typeof c && (c = this.layers[e].width), "undefined" == typeof d && (d = this.layers[e].height), 0 > a && (a = 0), 0 > b && (b = 0), c > this.layers[e].width && (c = this.layers[e].width), d > this.layers[e].height && (d = this.layers[e].height), this._results.length = 0, this._results.push({
				x: a,
				y: b,
				width: c,
				height: d,
				layer: e
			}), f = b; b + d > f; f++) for (g = a; a + c > g; g++) this._results.push(this.layers[e].data[f][g]);
			return this._results
		},
		paste: function(a, b, c, d) {
			var e, f, g;
			if ("undefined" == typeof a && (a = 0), "undefined" == typeof b && (b = 0), d = this.getLayer(d), c && !(c.length < 2)) {
				for (e = c[1].x - a, f = c[1].y - b, g = 1; g < c.length; g++) this.layers[d].data[f + c[g].y][e + c[g].x].copy(c[g]);
				this.layers[d].dirty = !0,
				this.calculateFaces(d)
			}
		},
		swap: function(a, b, c, d, e, f, g) {
			g = this.getLayer(g),
			this.copy(c, d, e, f, g),
			this._results.length < 2 || (this._tempA = a, this._tempB = b, this._results.forEach(this.swapHandler, this), this.paste(c, d, this._results, g))
		},
		swapHandler: function(a) {
			a.index === this._tempA ? a.index = this._tempB: a.index === this._tempB && (a.index = this._tempA)
		},
		forEach: function(a, b, c, d, e, f, g) {
			g = this.getLayer(g),
			this.copy(c, d, e, f, g),
			this._results.length < 2 || (this._results.forEach(a, b), this.paste(c, d, this._results, g))
		},
		replace: function(a, b, c, d, e, f, g) {
			if (g = this.getLayer(g), this.copy(c, d, e, f, g), !(this._results.length < 2)) {
				for (var h = 1; h < this._results.length; h++) this._results[h].index === a && (this._results[h].index = b);
				this.paste(c, d, this._results, g)
			}
		},
		random: function(a, b, c, d, e) {
			var f, g, h, i;
			if (e = this.getLayer(e), this.copy(a, b, c, d, e), !(this._results.length < 2)) {
				for (f = [], g = 1; g < this._results.length; g++) this._results[g].index && (h = this._results[g].index, -1 === f.indexOf(h) && f.push(h));
				for (i = 1; i < this._results.length; i++) this._results[i].index = this.game.rnd.pick(f);
				this.paste(a, b, this._results, e)
			}
		},
		shuffle: function(a, c, d, e, f) {
			var g, h, i;
			if (f = this.getLayer(f), this.copy(a, c, d, e, f), !(this._results.length < 2)) {
				for (g = [], h = 1; h < this._results.length; h++) this._results[h].index && g.push(this._results[h].index);
				for (b.Utils.shuffle(g), i = 1; i < this._results.length; i++) this._results[i].index = g[i - 1];
				this.paste(a, c, this._results, f)
			}
		},
		fill: function(a, b, c, d, e, f) {
			if (f = this.getLayer(f), this.copy(b, c, d, e, f), !(this._results.length < 2)) {
				for (var g = 1; g < this._results.length; g++) this._results[g].index = a;
				this.paste(b, c, this._results, f)
			}
		},
		removeAllLayers: function() {
			this.layers.length = 0,
			this.currentLayer = 0
		},
		dump: function() {
			var c, d, a = "",
			b = [""];
			for (c = 0; c < this.layers[this.currentLayer].height; c++) {
				for (d = 0; d < this.layers[this.currentLayer].width; d++) a += "%c ",
				this.layers[this.currentLayer].data[c][d] > 1 ? this.debugMap[this.layers[this.currentLayer].data[c][d]] ? b.push("background: " + this.debugMap[this.layers[this.currentLayer].data[c][d]]) : b.push("background: #ffffff") : b.push("background: rgb(0, 0, 0)");
				a += "\n"
			}
			b[0] = a,
			console.log.apply(console, b)
		},
		destroy: function() {
			this.removeAllLayers(),
			this.data = [],
			this.game = null
		}
	},
	b.Tilemap.prototype.constructor = b.Tilemap,
	Object.defineProperty(b.Tilemap.prototype, "layer", {
		get: function() {
			return this.layers[this.currentLayer]
		},
		set: function(a) {
			a !== this.currentLayer && this.setLayer(a)
		}
	}),
	b.TilemapLayer = function(a, c, d, e, f) {
		this.game = a,
		this.map = c,
		this.index = d,
		this.layer = c.layers[d],
		this.canvas = b.Canvas.create(e, f, "", !0),
		this.context = this.canvas.getContext("2d"),
		this.baseTexture = new PIXI.BaseTexture(this.canvas),
		this.texture = new PIXI.Texture(this.baseTexture),
		this.textureFrame = new b.Frame(0, 0, 0, e, f, "tilemapLayer", a.rnd.uuid()),
		b.Image.call(this, this.game, 0, 0, this.texture, this.textureFrame),
		this.name = "",
		this.type = b.TILEMAPLAYER,
		this.fixedToCamera = !0,
		this.cameraOffset = new b.Point(0, 0),
		this.tileColor = "rgb(255, 255, 255)",
		this.debug = !1,
		this.debugAlpha = .5,
		this.debugColor = "rgba(0, 255, 0, 1)",
		this.debugFill = !1,
		this.debugFillColor = "rgba(0, 255, 0, 0.2)",
		this.debugCallbackColor = "rgba(255, 0, 0, 1)",
		this.scrollFactorX = 1,
		this.scrollFactorY = 1,
		this.dirty = !0,
		this.rayStepRate = 4,
		this.wrap = !1,
		this._mc = {
			cw: c.tileWidth,
			ch: c.tileHeight,
			ga: 1,
			dx: 0,
			dy: 0,
			dw: 0,
			dh: 0,
			tx: 0,
			ty: 0,
			tw: 0,
			th: 0,
			tl: 0,
			maxX: 0,
			maxY: 0,
			startX: 0,
			startY: 0,
			x: 0,
			y: 0,
			prevX: 0,
			prevY: 0
		},
		this._results = [],
		this.updateMax()
	},
	b.TilemapLayer.prototype = Object.create(b.Image.prototype),
	b.TilemapLayer.prototype.constructor = b.TilemapLayer,
	b.TilemapLayer.prototype.postUpdate = function() {
		b.Image.prototype.postUpdate.call(this),
		this.scrollX = this.game.camera.x * this.scrollFactorX,
		this.scrollY = this.game.camera.y * this.scrollFactorY,
		this.render(),
		1 === this._cache[7] && (this.position.x = (this.game.camera.view.x + this.cameraOffset.x) / this.game.camera.scale.x, this.position.y = (this.game.camera.view.y + this.cameraOffset.y) / this.game.camera.scale.y)
	},
	b.TilemapLayer.prototype.resizeWorld = function() {
		this.game.world.setBounds(0, 0, this.layer.widthInPixels, this.layer.heightInPixels)
	},
	b.TilemapLayer.prototype._fixX = function(a) {
		return 0 > a && (a = 0),
		1 === this.scrollFactorX ? a: this._mc.x + (a - this._mc.x / this.scrollFactorX)
	},
	b.TilemapLayer.prototype._unfixX = function(a) {
		return 1 === this.scrollFactorX ? a: this._mc.x / this.scrollFactorX + (a - this._mc.x)
	},
	b.TilemapLayer.prototype._fixY = function(a) {
		return 0 > a && (a = 0),
		1 === this.scrollFactorY ? a: this._mc.y + (a - this._mc.y / this.scrollFactorY)
	},
	b.TilemapLayer.prototype._unfixY = function(a) {
		return 1 === this.scrollFactorY ? a: this._mc.y / this.scrollFactorY + (a - this._mc.y)
	},
	b.TilemapLayer.prototype.getTileX = function(a) {
		return this.game.math.snapToFloor(this._fixX(a), this.map.tileWidth) / this.map.tileWidth
	},
	b.TilemapLayer.prototype.getTileY = function(a) {
		return this.game.math.snapToFloor(this._fixY(a), this.map.tileHeight) / this.map.tileHeight
	},
	b.TilemapLayer.prototype.getTileXY = function(a, b, c) {
		return c.x = this.getTileX(a),
		c.y = this.getTileY(b),
		c
	},
	b.TilemapLayer.prototype.getRayCastTiles = function(a, b, c, d) {
		var e, f, g, h, i, j;
		if (("undefined" == typeof b || null === b) && (b = this.rayStepRate), "undefined" == typeof c && (c = !1), "undefined" == typeof d && (d = !1), e = this.getTiles(a.x, a.y, a.width, a.height, c, d), 0 === e.length) return [];
		for (f = a.coordinatesOnLine(b), g = f.length, h = [], i = 0; i < e.length; i++) for (j = 0; g > j; j++) if (e[i].containsPoint(f[j][0], f[j][1])) {
			h.push(e[i]);
			break
		}
		return h
	},
	b.TilemapLayer.prototype.getTiles = function(a, b, c, d, e, f) {
		var g, h;
		for ("undefined" == typeof e && (e = !1), "undefined" == typeof f && (f = !1), a = this._fixX(a), b = this._fixY(b), c > this.layer.widthInPixels && (c = this.layer.widthInPixels), d > this.layer.heightInPixels && (d = this.layer.heightInPixels), this._mc.tx = this.game.math.snapToFloor(a, this._mc.cw) / this._mc.cw, this._mc.ty = this.game.math.snapToFloor(b, this._mc.ch) / this._mc.ch, this._mc.tw = (this.game.math.snapToCeil(c, this._mc.cw) + this._mc.cw) / this._mc.cw, this._mc.th = (this.game.math.snapToCeil(d, this._mc.ch) + this._mc.ch) / this._mc.ch, this._results.length = 0, g = this._mc.ty; g < this._mc.ty + this._mc.th; g++) for (h = this._mc.tx; h < this._mc.tx + this._mc.tw; h++) this.layer.data[g] && this.layer.data[g][h] && (!e && !f || this.layer.data[g][h].isInteresting(e, f)) && this._results.push(this.layer.data[g][h]);
		return this._results
	},
	b.TilemapLayer.prototype.updateMax = function() {
		this._mc.maxX = this.game.math.ceil(this.canvas.width / this.map.tileWidth) + 1,
		this._mc.maxY = this.game.math.ceil(this.canvas.height / this.map.tileHeight) + 1,
		this.dirty = !0
	},
	b.TilemapLayer.prototype.render = function() {
		var a, c, d, e, f, g;
		if (this.layer.dirty && (this.dirty = !0), this.dirty && this.visible) {
			for (this._mc.prevX = this._mc.dx, this._mc.prevY = this._mc.dy, this._mc.dx = -(this._mc.x - this._mc.startX * this.map.tileWidth), this._mc.dy = -(this._mc.y - this._mc.startY * this.map.tileHeight), this._mc.tx = this._mc.dx, this._mc.ty = this._mc.dy, this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.fillStyle = this.tileColor, this.debug && (this.context.globalAlpha = this.debugAlpha), d = this._mc.startY, e = this._mc.startY + this._mc.maxY; e > d; d++) {
				if (this._column = null, 0 > d && this.wrap ? this._column = this.layer.data[d + this.map.height] : d >= this.map.height && this.wrap ? this._column = this.layer.data[d - this.map.height] : this.layer.data[d] && (this._column = this.layer.data[d]), this._column) for (f = this._mc.startX, g = this._mc.startX + this._mc.maxX; g > f; f++) a = null,
				0 > f && this.wrap ? a = this._column[f + this.map.width] : f >= this.map.width && this.wrap ? a = this._column[f - this.map.width] : this._column[f] && (a = this._column[f]),
				a && a.index > -1 && (c = this.map.tilesets[this.map.tiles[a.index][2]], this.debug === !1 && a.alpha !== this.context.globalAlpha && (this.context.globalAlpha = a.alpha), c.draw(this.context, Math.floor(this._mc.tx), Math.floor(this._mc.ty), a.index), a.debug && (this.context.fillStyle = "rgba(0, 255, 0, 0.4)", this.context.fillRect(Math.floor(this._mc.tx), Math.floor(this._mc.ty), this.map.tileWidth, this.map.tileHeight))),
				this._mc.tx += this.map.tileWidth;
				this._mc.tx = this._mc.dx,
				this._mc.ty += this.map.tileHeight
			}
			return this.debug && (this.context.globalAlpha = 1, this.renderDebug()),
			this.game.renderType === b.WEBGL && PIXI.updateWebGLTexture(this.baseTexture, this.game.renderer.gl),
			this.dirty = !1,
			this.layer.dirty = !1,
			!0
		}
	},
	b.TilemapLayer.prototype.renderDebug = function() {
		var a, b, c, d, e;
		for (this._mc.tx = this._mc.dx, this._mc.ty = this._mc.dy, this.context.strokeStyle = this.debugColor, this.context.fillStyle = this.debugFillColor, a = this._mc.startY, b = this._mc.startY + this._mc.maxY; b > a; a++) {
			if (this._column = null, 0 > a && this.wrap ? this._column = this.layer.data[a + this.map.height] : a >= this.map.height && this.wrap ? this._column = this.layer.data[a - this.map.height] : this.layer.data[a] && (this._column = this.layer.data[a]), this._column) for (c = this._mc.startX, d = this._mc.startX + this._mc.maxX; d > c; c++) e = null,
			0 > c && this.wrap ? e = this._column[c + this.map.width] : c >= this.map.width && this.wrap ? e = this._column[c - this.map.width] : this._column[c] && (e = this._column[c]),
			e && (e.faceTop || e.faceBottom || e.faceLeft || e.faceRight) && (this._mc.tx = Math.floor(this._mc.tx), this.debugFill && this.context.fillRect(this._mc.tx, this._mc.ty, this._mc.cw, this._mc.ch), this.context.beginPath(), e.faceTop && (this.context.moveTo(this._mc.tx, this._mc.ty), this.context.lineTo(this._mc.tx + this._mc.cw, this._mc.ty)), e.faceBottom && (this.context.moveTo(this._mc.tx, this._mc.ty + this._mc.ch), this.context.lineTo(this._mc.tx + this._mc.cw, this._mc.ty + this._mc.ch)), e.faceLeft && (this.context.moveTo(this._mc.tx, this._mc.ty), this.context.lineTo(this._mc.tx, this._mc.ty + this._mc.ch)), e.faceRight && (this.context.moveTo(this._mc.tx + this._mc.cw, this._mc.ty), this.context.lineTo(this._mc.tx + this._mc.cw, this._mc.ty + this._mc.ch)), this.context.stroke()),
			this._mc.tx += this.map.tileWidth;
			this._mc.tx = this._mc.dx,
			this._mc.ty += this.map.tileHeight
		}
	},
	Object.defineProperty(b.TilemapLayer.prototype, "scrollX", {
		get: function() {
			return this._mc.x
		},
		set: function(a) {
			a !== this._mc.x && (this._mc.x = a, this._mc.startX = this.game.math.floor(this._mc.x / this.map.tileWidth), this.dirty = !0)
		}
	}),
	Object.defineProperty(b.TilemapLayer.prototype, "scrollY", {
		get: function() {
			return this._mc.y
		},
		set: function(a) {
			a !== this._mc.y && (this._mc.y = a, this._mc.startY = this.game.math.floor(this._mc.y / this.map.tileHeight), this.dirty = !0)
		}
	}),
	Object.defineProperty(b.TilemapLayer.prototype, "collisionWidth", {
		get: function() {
			return this._mc.cw
		},
		set: function(a) {
			this._mc.cw = a,
			this.dirty = !0
		}
	}),
	Object.defineProperty(b.TilemapLayer.prototype, "collisionHeight", {
		get: function() {
			return this._mc.ch
		},
		set: function(a) {
			this._mc.ch = a,
			this.dirty = !0
		}
	}),
	b.TilemapParser = {
		parse: function(a, c, d, e, f, g) {
			if ("undefined" == typeof d && (d = 32), "undefined" == typeof e && (e = 32), "undefined" == typeof f && (f = 10), "undefined" == typeof g && (g = 10), "undefined" == typeof c) return this.getEmptyData();
			if (null === c) return this.getEmptyData(d, e, f, g);
			var h = a.cache.getTilemapData(c);
			if (h) {
				if (h.format === b.Tilemap.CSV) return this.parseCSV(c, h.data, d, e);
				if (!h.format || h.format === b.Tilemap.TILED_JSON) return this.parseTiledJSON(h.data)
			} else console.warn("Phaser.TilemapParser.parse - No map data found for key " + c)
		},
		parseCSV: function(a, c, d, e) {
			var g, h, i, j, k, l, m, f = this.getEmptyData();
			for (c = c.trim(), g = [], h = c.split("\n"), i = h.length, j = 0, k = 0; k < h.length; k++) {
				for (g[k] = [], l = h[k].split(","), m = 0; m < l.length; m++) g[k][m] = new b.Tile(f.layers[0], parseInt(l[m], 10), m, k, d, e);
				0 === j && (j = l.length)
			}
			return f.format = b.Tilemap.CSV,
			f.name = a,
			f.width = j,
			f.height = i,
			f.tileWidth = d,
			f.tileHeight = e,
			f.widthInPixels = j * d,
			f.heightInPixels = i * e,
			f.layers[0].width = j,
			f.layers[0].height = i,
			f.layers[0].widthInPixels = f.widthInPixels,
			f.layers[0].heightInPixels = f.heightInPixels,
			f.layers[0].data = g,
			f
		},
		getEmptyData: function(a, b, c, d) {
			var f, g, e = {};
			return e.width = 0,
			e.height = 0,
			e.tileWidth = 0,
			e.tileHeight = 0,
			"undefined" != typeof a && null !== a && (e.tileWidth = a),
			"undefined" != typeof b && null !== b && (e.tileHeight = b),
			"undefined" != typeof c && null !== c && (e.width = c),
			"undefined" != typeof d && null !== d && (e.height = d),
			e.orientation = "orthogonal",
			e.version = "1",
			e.properties = {},
			e.widthInPixels = 0,
			e.heightInPixels = 0,
			f = [],
			g = {
				name: "layer",
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				widthInPixels: 0,
				heightInPixels: 0,
				alpha: 1,
				visible: !0,
				properties: {},
				indexes: [],
				callbacks: [],
				data: []
			},
			f.push(g),
			e.layers = f,
			e.images = [],
			e.objects = {},
			e.collision = {},
			e.tilesets = [],
			e.tiles = [],
			e
		},
		parseTiledJSON: function(a) {
			function s(a, b) {
				var d, e, c = {};
				for (d in b) e = b[d],
				c[e] = a[e];
				return c
			}
			var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, t, u, v, w, x, y, z;
			if ("orthogonal" !== a.orientation) return console.warn("TilemapParser.parseTiledJSON: Only orthogonal map types are supported in this version of Phaser"),
			null;
			for (c = {},
			c.width = a.width, c.height = a.height, c.tileWidth = a.tilewidth, c.tileHeight = a.tileheight, c.orientation = a.orientation, c.format = b.Tilemap.TILED_JSON, c.version = a.version, c.properties = a.properties, c.widthInPixels = c.width * c.tileWidth, c.heightInPixels = c.height * c.tileHeight, d = [], e = 0; e < a.layers.length; e++) if ("tilelayer" === a.layers[e].type) {
				for (f = {
					name: a.layers[e].name,
					x: a.layers[e].x,
					y: a.layers[e].y,
					width: a.layers[e].width,
					height: a.layers[e].height,
					widthInPixels: a.layers[e].width * a.tilewidth,
					heightInPixels: a.layers[e].height * a.tileheight,
					alpha: a.layers[e].opacity,
					visible: a.layers[e].visible,
					properties: {},
					indexes: [],
					callbacks: [],
					bodies: []
				},
				a.layers[e].properties && (f.properties = a.layers[e].properties), g = 0, h = [], i = [], j = 0, k = a.layers[e].data.length; k > j; j++) a.layers[e].data[j] > 0 ? h.push(new b.Tile(f, a.layers[e].data[j], g, i.length, a.tilewidth, a.tileheight)) : h.push(new b.Tile(f, -1, g, i.length, a.tilewidth, a.tileheight)),
				g++,
				g === a.layers[e].width && (i.push(h), g = 0, h = []);
				f.data = i,
				d.push(f)
			}
			for (c.layers = d, l = [], e = 0; e < a.layers.length; e++)"imagelayer" === a.layers[e].type && (m = {
				name: a.layers[e].name,
				image: a.layers[e].image,
				x: a.layers[e].x,
				y: a.layers[e].y,
				alpha: a.layers[e].opacity,
				visible: a.layers[e].visible,
				properties: {}
			},
			a.layers[e].properties && (m.properties = a.layers[e].properties), l.push(m));
			for (c.images = l, n = [], e = 0; e < a.tilesets.length; e++) o = a.tilesets[e],
			p = new b.Tileset(o.name, o.firstgid, o.tilewidth, o.tileheight, o.margin, o.spacing, o.properties),
			o.tileproperties && (p.tileProperties = o.tileproperties),
			p.rows = Math.round((o.imageheight - o.margin) / (o.tileheight + o.spacing)),
			p.columns = Math.round((o.imagewidth - o.margin) / (o.tilewidth + o.spacing)),
			p.total = p.rows * p.columns,
			0 !== p.rows % 1 || 0 !== p.columns % 1 ? console.warn("TileSet image dimensions do not match expected dimensions. Tileset width/height must be evenly divisible by Tilemap tile width/height.") : n.push(p);
			for (c.tilesets = n, q = {},
			r = {},
			e = 0; e < a.layers.length; e++) if ("objectgroup" === a.layers[e].type) for (q[a.layers[e].name] = [], r[a.layers[e].name] = [], t = 0, k = a.layers[e].objects.length; k > t; t++) if (a.layers[e].objects[t].gid) u = {
				gid: a.layers[e].objects[t].gid,
				name: a.layers[e].objects[t].name,
				x: a.layers[e].objects[t].x,
				y: a.layers[e].objects[t].y,
				visible: a.layers[e].objects[t].visible,
				properties: a.layers[e].objects[t].properties
			},
			q[a.layers[e].name].push(u);
			else if (a.layers[e].objects[t].polyline) {
				for (u = {
					name: a.layers[e].objects[t].name,
					x: a.layers[e].objects[t].x,
					y: a.layers[e].objects[t].y,
					width: a.layers[e].objects[t].width,
					height: a.layers[e].objects[t].height,
					visible: a.layers[e].objects[t].visible,
					properties: a.layers[e].objects[t].properties
				},
				u.polyline = [], v = 0; v < a.layers[e].objects[t].polyline.length; v++) u.polyline.push([a.layers[e].objects[t].polyline[v].x, a.layers[e].objects[t].polyline[v].y]);
				r[a.layers[e].name].push(u)
			} else if (a.layers[e].objects[t].polygon) {
				for (u = s(a.layers[e].objects[t], ["name", "x", "y", "visible", "properties"]), u.polygon = [], v = 0; v < a.layers[e].objects[t].polygon.length; v++) u.polygon.push([a.layers[e].objects[t].polygon[v].x, a.layers[e].objects[t].polygon[v].y]);
				q[a.layers[e].name].push(u)
			} else a.layers[e].objects[t].ellipse ? (u = s(a.layers[e].objects[t], ["name", "ellipse", "x", "y", "width", "height", "visible", "properties"]), q[a.layers[e].name].push(u)) : (u = s(a.layers[e].objects[t], ["name", "x", "y", "width", "height", "visible", "properties"]), u.rectangle = !0, q[a.layers[e].name].push(u));
			for (c.objects = q, c.collision = r, c.tiles = [], e = 0; e < c.tilesets.length; e++) for (o = c.tilesets[e], g = o.tileMargin, w = o.tileMargin, x = 0, y = 0, z = 0, j = o.firstgid; j < o.firstgid + o.total && (c.tiles[j] = [g, w, e], g += o.tileWidth + o.tileSpacing, x++, x !== o.total) && (y++, y !== o.columns || (g = o.tileMargin, w += o.tileHeight + o.tileSpacing, y = 0, z++, z !== o.rows)); j++);
			return c
		}
	},
	b.Tileset = function(a, b, c, d, e, f, g) { ("undefined" == typeof c || 0 >= c) && (c = 32),
		("undefined" == typeof d || 0 >= d) && (d = 32),
		"undefined" == typeof e && (e = 0),
		"undefined" == typeof f && (f = 0),
		this.name = a,
		this.firstgid = b,
		this.tileWidth = c,
		this.tileHeight = d,
		this.tileMargin = e,
		this.tileSpacing = f,
		this.properties = g,
		this.image = null,
		this.rows = 0,
		this.columns = 0,
		this.total = 0,
		this.drawCoords = []
	},
	b.Tileset.prototype = {
		draw: function(a, b, c, d) {
			this.image && this.drawCoords[d] && a.drawImage(this.image, this.drawCoords[d][0], this.drawCoords[d][1], this.tileWidth, this.tileHeight, b, c, this.tileWidth, this.tileHeight)
		},
		setImage: function(a) {
			var b, c, d, e, f;
			for (this.image = a, this.rows = Math.round((a.height - this.tileMargin) / (this.tileHeight + this.tileSpacing)), this.columns = Math.round((a.width - this.tileMargin) / (this.tileWidth + this.tileSpacing)), this.total = this.rows * this.columns, this.drawCoords.length = 0, b = this.tileMargin, c = this.tileMargin, d = this.firstgid, e = 0; e < this.rows; e++) {
				for (f = 0; f < this.columns; f++) this.drawCoords[d] = [b, c],
				b += this.tileWidth + this.tileSpacing,
				d++;
				b = this.tileMargin,
				c += this.tileHeight + this.tileSpacing
			}
		},
		setSpacing: function(a, b) {
			this.tileMargin = a,
			this.tileSpacing = b,
			this.setImage(this.image)
		}
	},
	b.Tileset.prototype.constructor = b.Tileset,
	"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = b), exports.Phaser = b) : "undefined" != typeof define && define.amd ? define("Phaser",
	function() {
		return a.Phaser = b
	} ()) : a.Phaser = b
}.call(this),
__extends = this.__extends ||
function(a, b) {
	function d() {
		this.constructor = a
	}
	for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
	d.prototype = b.prototype,
	a.prototype = new d
},
function(a) {
	a[a["Wait"] = 0] = "Wait",
	a[a["Left"] = 1] = "Left",
	a[a["Right"] = 2] = "Right",
	a[a["Crash"] = 3] = "Crash"
} (CarState || (CarState = {})),
Car = function(a) {
	function b(b, c, d) {
		a.call(this, b, c, d, "Car"),
		this.m_Speed = 500,
		this.m_AngularSpeed = 4,
		this.m_Angle = -90,
		this.m_CarState = 0,
		this.anchor.setTo(.5, .5),
		b.physics.arcade.enable(this),
		this.body.allowRotation = !1,
		this.body.setSize(40, 40),
		this.animations.add("Car", ["Car01.png"], 10, !1),
		this.animations.add("CarCrash", ["CarCrash01.png"], 10, !1),
		this.animations.play("Car"),
		this.wait()
	}
	return __extends(b, a),
	b.prototype.update = function() {
		var a;
		switch (this.m_AngularSpeed += 1e-4, this.m_Speed += .02, this.m_CarState) {
		case 1:
			this.m_Angle -= this.m_AngularSpeed,
			this.rotation = Phaser.Math.degToRad(this.m_Angle),
			a = this.game.physics.arcade.velocityFromAngle(this.m_Angle, this.m_Speed),
			this.x += a.x / 60,
			this.y += a.y / 60;
			break;
		case 2:
			this.m_Angle += this.m_AngularSpeed,
			this.rotation = Phaser.Math.degToRad(this.m_Angle),
			a = this.game.physics.arcade.velocityFromAngle(this.m_Angle, this.m_Speed),
			this.x += a.x / 60,
			this.y += a.y / 60
		}
	},
	b.prototype.turnLeft = function() {
		this.m_CarState = 1
	},
	b.prototype.turnRight = function() {
		this.m_CarState = 2
	},
	b.prototype.crash = function() {
		this.m_CarState = 3,
		this.animations.play("CarCrash"),
		this.body.velocity.setTo(0, 0)
	},
	b.prototype.wait = function() {
		this.m_CarState = 0,
		this.rotation = Phaser.Math.degToRad( - 90),
		this.body.velocity.setTo(0, 0)
	},
	b
} (Phaser.Sprite),
function(a) {
	a[a["Ready"] = 0] = "Ready",
	a[a["Run"] = 1] = "Run",
	a[a["Over"] = 2] = "Over"
} (GameState || (GameState = {})),
GameScene = function(a) {
	function b() {
		a.call(this),
		this.m_Car = null,
		this.m_AdvanceLine = -630,
		this.m_StartDistance = 240,
		this.m_StepDistance = 600,
		this._maxScore = 2e3,
		this._maxPlayerCount = 9917356
	}
	return __extends(b, a),
	b.prototype.create = function() {
		this.game.device.desktop || this.scale.forceOrientation(!1, !0, "orientationTips"),
		this.stage.backgroundColor = 11250603,
		this.input.onDown.add(this.onDown, this),
		this.camera.bounds = null,
		this.m_Group = this.add.group(),
		this.m_JieSuanFrame = this.add.sprite(70, 150, "JieSuanFrame"),
		this.m_JieSuanFrame.fixedToCamera = !0,
		this.m_ScoreText = this.add.text(330, 216, "12300", {
			font: "36px Arial",
			fill: "#FF0000",
			align: "center"
		}),
		this.m_ScoreText.anchor.set(.5, .5),
		this.m_JieSuanFrame.addChild(this.m_ScoreText),
		this.m_PaiMinText = this.add.text(294, 300, "12345678", {
			font: "36px Arial",
			fill: "#FF0000",
			align: "center"
		}),
		this.m_PaiMinText.anchor.set(.5, .5),
		this.m_JieSuanFrame.addChild(this.m_PaiMinText),
		this._chengHao = this.add.sprite(234, 358, "ChengHao5"),
		this.m_JieSuanFrame.addChild(this._chengHao),
		this.m_ButtonMoreGames = this.add.sprite(20, 460, "ButtonMoreGames"),
		this.m_ButtonMoreGames.inputEnabled = !0,
		this.m_ButtonMoreGames.events.onInputUp.add(this.onButtonMoreGamesUp, this),
		this.m_JieSuanFrame.addChild(this.m_ButtonMoreGames),
		this.m_ButtonPlayAgain = this.add.sprite(290, 460, "ButtonPlayAgain"),
		this.m_ButtonPlayAgain.inputEnabled = !0,
		this.m_ButtonPlayAgain.events.onInputUp.add(this.onButtonPlayAgainUp, this),
		this.m_JieSuanFrame.addChild(this.m_ButtonPlayAgain),
		-1 != navigator.userAgent.toUpperCase().indexOf("MICROMESSENGER") && (this.m_ButtonShare = this.add.sprite(153, 560, "ButtonShare"), this.m_ButtonShare.inputEnabled = !0, this.m_ButtonShare.events.onInputUp.add(this.onButtonShareUp, this), this.m_JieSuanFrame.addChild(this.m_ButtonShare)),
		this.m_ScoreLeftTopDes = this.add.sprite(414, 10, "ScoreLeftTopDes"),
		this.m_ScoreLeftTopDes.fixedToCamera = !0,
		this.m_ScoreLeftTopText = this.add.text(556, 10, "0", {
			font: "36px Arial",
			fill: "#C000B2",
			align: "center"
		}),
		this.m_ScoreLeftTopText.anchor.set(.5, 0),
		this.m_ScoreLeftTopText.fixedToCamera = !0,
		this.m_Title = this.add.sprite(80, 60, "Title"),
		this.m_Title.fixedToCamera = !0,
		this.m_Guide = this.add.sprite(128, 400, "Guide"),
		this.m_Guide.fixedToCamera = !0,
		this.ready()
	},
	b.prototype.onButtonPlayAgainUp = function() {
		this.ready();
	},
	b.prototype.onButtonShareUp = function() {
		try {
			share()
		} catch(a) {}
	},
	b.prototype.onButtonMoreGamesUp = function() {
		try {
			moreGame();
		} catch(a) {}
	},
	b.prototype.onDown = function() {
		switch (this.m_GameState) {
		case 0:
			this.input.activePointer.x < 320 && (this.m_Car.turnLeft(), this.run()),
			this.input.activePointer.x > 320 && (this.m_Car.turnRight(), this.run());
			break;
		case 1:
			this.input.activePointer.x < 320 && this.m_Car.turnLeft(),
			this.input.activePointer.x > 320 && this.m_Car.turnRight();
			break;
		case 2:
		}
	},
	b.prototype.ready = function() {
		this.m_GameState = 0,
		null != this.m_Car && this.m_Car.destroy(),
		this.m_Car = new Car(this.game, 320, 700),
		this.m_Car.rotation = Phaser.Math.degToRad( - 90),
		this.add.existing(this.m_Car),
		this.m_JieSuanFrame.visible = !1,
		this.m_ScoreLeftTopDes.visible = !1,
		this.m_ScoreLeftTopText.visible = !1,
		this.m_Group.removeAll(!0, !0),
		this.camera.y = 0,
		this.m_Guide.visible = !0,
		this.m_Count = 0
	},
	b.prototype.run = function() {
		this.m_GameState = 1,
		this.m_NextDistance = this.m_StartDistance,
		this.m_Title.visible = !1,
		this.m_Guide.visible = !1,
		this.m_ScoreLeftTopDes.visible = !0,
		this.m_ScoreLeftTopText.visible = !0
	},
	b.prototype.over = function() {
		var a, b, c, d;
		this.m_Score = this.camera.y / -10,
		this.m_ScoreLeftTopText.text = this.m_Score.toFixed(0),
		this.m_GameState = 2,
		this.m_ScoreText.text = this.m_Score.toFixed(0),
		a = this.getRank(this.m_Score),
		this.m_PaiMinText.text = a.toString(),
		b = this.getRankPercents(a),
		c = "“玩出BUG了”",
		this.m_Score >= this._maxScore ? (this._chengHao.loadTexture("ChengHao0", null), c = "“极品飞车”") : b >= 90 ? (this._chengHao.loadTexture("ChengHao1", null), c = "“极速传说”") : b >= 70 ? (this._chengHao.loadTexture("ChengHao2", null), c = "“一路向西…天”") : b >= 30 ? (this._chengHao.loadTexture("ChengHao3", null), c = "“喝死当睡着”") : b >= 10 ? (this._chengHao.loadTexture("ChengHao4", null), c = "“赛过女司机”") : (this._chengHao.loadTexture("ChengHao5", null), c = "“无证驾驶”"),
		title = "我酒后驾车行驶了" + this.m_ScoreText.text + "米，全球排名第" + a.toString() + "名,获得称号" + c,
		d = this.time.create(!0),
		d.add(1e3, this.showJieSuan, this),
		d.start();
		setGameResult(this.m_ScoreText.text, title);
		try{gameAs.show();}catch(e){};
	},
	b.prototype.showJieSuan = function() {
		this.m_JieSuanFrame.bringToTop(),
		this.m_JieSuanFrame.visible = !0
	},
	b.prototype.generateLouFang = function(a) {
		var e, f, h, b = this.rnd.integerInRange(130, 510),
		c = new LouFang(this.game, b - 360, a),
		d = new LouFang(this.game, b + 360, a);
		d.scale.setTo( - 1, 1),
		this.m_Group.add(c),
		this.m_Group.add(d),
		this.m_Count > 4 && (e = this.rnd.integerInRange( - 140, 140) + b, f = new XianJing(this.game, e, a - 200), this.m_Group.add(f)),
		this.m_Count > 10 && (this.rnd.integerInRange( - 140, 140) + b, h = new XianJing(this.game, e, a + 200), this.m_Group.add(h)),
		this.m_Count++
	},
	b.prototype.update = function() {
		switch (this.m_GameState) {
		case 1:
			if (this.m_Car.y < this.camera.y - this.m_AdvanceLine && (this.camera.y = this.m_Car.y + this.m_AdvanceLine), this.camera.y < this.m_NextDistance && (this.generateLouFang(this.m_NextDistance - 300), this.m_NextDistance -= this.m_StepDistance), this.game.physics.arcade.overlap(this.m_Car, this.m_Group, this.overlapCallback, null, this), this.m_Score = this.camera.y / -10, this.m_ScoreLeftTopText.text = this.m_Score.toFixed(0), this.m_Car.x < -30 || this.m_Car.x > 670 || this.m_Car.y > this.camera.y + 990) {
				var a = new Explosion(this.game, this.m_Car.x, this.m_Car.y);
				this.add.existing(a),
				this.m_Car.crash(),
				this.over()
			}
		}
	},
	b.prototype.overlapCallback = function(a) {
		var c = new Explosion(this.game, a.x, a.y);
		this.add.existing(c),
		this.m_Car.crash(),
		this.over()
	},
	b.prototype.getRank = function(a) {
		var b, c;
		return a >= this._maxScore ? 1 : 0 === a ? this._maxPlayerCount: (b = this._maxPlayerCount * a / this._maxScore, c = this._maxPlayerCount * (a + 1) / this._maxScore, this._maxPlayerCount - Math.round(b + Math.random() * (c - b)))
	},
	b.prototype.getRankPercents = function(a) {
		return 100 - Math.round(100 * (a / this._maxPlayerCount))
	},
	b
} (Phaser.State),
LouFang = function(a) {
	function b(b, c, d) {
		a.call(this, b, c, d, "LouFang"),
		this.anchor.setTo(.5, .5),
		b.physics.arcade.enable(this),
		this.body.allowRotation = !1,
		this.body.setSize(502, 100, 0, 13)
	}
	return __extends(b, a),
	b.prototype.update = function() {
		this.y > this.game.camera.y + 980 && this.destroy()
	},
	b
} (Phaser.Sprite),
XianJing = function(a) {
	function b(b, c, d) {
		a.call(this, b, c, d, "XianJing"),
		this.anchor.setTo(.5, .5),
		b.physics.arcade.enable(this),
		this.body.allowRotation = !1,
		this.body.setSize(43, 43)
	}
	return __extends(b, a),
	b.prototype.update = function() {
		this.y > this.game.camera.y + 980 && this.destroy()
	},
	b
} (Phaser.Sprite),
Explosion = function(a) {
	function b(b, c, d) {
		a.call(this, b, c, d, "Explosion"),
		this.anchor.setTo(.5, .5),
		this.rotation = b.rnd.realInRange(0, Phaser.Math.PI2),
		this.animations.add("Explosion", Phaser.Animation.generateFrameNames("Explosion", 1, 4, ".png", 2), 10, !1),
		this.events.onAnimationComplete.addOnce(this.onAnimationComplete, this),
		this.animations.play("Explosion")
	}
	return __extends(b, a),
	b.prototype.onAnimationComplete = function() {
		this.kill()
	},
	b
} (Phaser.Sprite),
LoadingState = function(a) {
	function b() {
		a.apply(this, arguments)
	}
	return __extends(b, a),
	b.prototype.preload = function() {
		this.scale.pageAlignHorizontally = !0,
		this.scale.pageAlignVertically = !0,
		this.scale.scaleMode = this.game.device.desktop ? Phaser.ScaleManager.SHOW_ALL: Phaser.ScaleManager.EXACT_FIT,
		this.scale.refresh(),
		this.stage.backgroundColor = 16777215,
		this._text = this.add.text(this.world.width / 2, this.world.height / 2 + 100, "Loading……", {
			font: "48px Arial",
			fill: "#000000",
			align: "center"
		}),
		this._info = this.add.text(this.world.width / 2, this.world.height / 2, "", {
			font: "48px Arial",
			fill: "#000000",
			align: "center"
		}),
		this._text.anchor.set(.5, .5),
		this._info.anchor.set(.5, .5),
		this.game.load.baseURL = "static/",
		this.game.load.onFileComplete.add(this.onFileComplete, this),
		this.game.load.onLoadComplete.add(this.onLoadComplete, this),
		this.game.load.image("orientationTips", "orientationTips.png"),
		this.game.load.image("LouFang", "LouFang.png"),
		this.game.load.image("XianJing", "XianJing.png"),
		this.game.load.atlasJSONHash("Car", "Car.png", "Car.xml"),
		this.game.load.atlasJSONHash("Explosion", "Explosion.png", "Explosion.xml"),
		this.game.load.image("JieSuanFrame", "JieSuanFrame.png"),
		this.game.load.image("ButtonMoreGames", "ButtonMoreGames.png"),
		this.game.load.image("ButtonPlayAgain", "ButtonPlayAgain.png"),
		this.game.load.image("ButtonShare", "ButtonShare.png"),
		this.game.load.image("Guide", "Guide.png"),
		this.game.load.image("ScoreLeftTopDes", "ScoreLeftTopDes.png"),
		this.game.load.image("Title", "Title.png"),
		this.game.load.image("ChengHao0", "ChengHao0.png"),
		this.game.load.image("ChengHao1", "ChengHao1.png"),
		this.game.load.image("ChengHao2", "ChengHao2.png"),
		this.game.load.image("ChengHao3", "ChengHao3.png"),
		this.game.load.image("ChengHao4", "ChengHao4.png"),
		this.game.load.image("ChengHao5", "ChengHao5.png")
	},
	b.prototype.onFileComplete = function(a, b, c, d, e) {
		this._loadedFileCount = d,
		this._totalFileCount = e,
		this._info.text = this._loadedFileCount.toString() + "/" + this._totalFileCount.toString()
	},
	b.prototype.onLoadComplete = function() {
		this.game.state.start("GameScene", !0, !1)
	},
	b
} (Phaser.State),
Game = function(a) {
	function b() {
		a.call(this, 640, 960, Phaser.CANVAS, "gameDiv"),
		this.state.add("LoadingState", LoadingState, !0),
		this.state.add("GameScene", GameScene, !1)
	}
	return __extends(b, a),
	b
} (Phaser.Game),
window.onload = function() {
	new Game
};