(window.webpackJsonp = window.webpackJsonp || []).push([
    [22],
    {
        1777: function(e, t, r) {
            (function(e) {
                !(function(e, t) {
                    "use strict";
                    function i(e, t) {
                        if (!e) throw new Error(t || "Assertion failed");
                    }
                    function n(e, t) {
                        e.super_ = t;
                        var r = function() {};
                        (r.prototype = t.prototype),
                            (e.prototype = new r()),
                            (e.prototype.constructor = e);
                    }
                    function o(e, t, r) {
                        if (o.isBN(e)) return e;
                        (this.negative = 0),
                            (this.words = null),
                            (this.length = 0),
                            (this.red = null),
                            null !== e &&
                                (("le" !== t && "be" !== t) ||
                                    ((r = t), (t = 10)),
                                this._init(e || 0, t || 10, r || "be"));
                    }
                    var f;
                    "object" == typeof e ? (e.exports = o) : (t.BN = o),
                        (o.BN = o),
                        (o.wordSize = 26);
                    try {
                        f = r(1983).Buffer;
                    } catch (e) {}
                    function a(e, t, r) {
                        for (
                            var i = 0, n = Math.min(e.length, r), o = t;
                            o < n;
                            o++
                        ) {
                            var f = e.charCodeAt(o) - 48;
                            (i <<= 4),
                                (i |=
                                    f >= 49 && f <= 54
                                        ? f - 49 + 10
                                        : f >= 17 && f <= 22
                                            ? f - 17 + 10
                                            : 15 & f);
                        }
                        return i;
                    }
                    function s(e, t, r, i) {
                        for (
                            var n = 0, o = Math.min(e.length, r), f = t;
                            f < o;
                            f++
                        ) {
                            var a = e.charCodeAt(f) - 48;
                            (n *= i),
                                (n +=
                                    a >= 49
                                        ? a - 49 + 10
                                        : a >= 17
                                            ? a - 17 + 10
                                            : a);
                        }
                        return n;
                    }
                    (o.isBN = function(e) {
                        return (
                            e instanceof o ||
                            (null !== e &&
                                "object" == typeof e &&
                                e.constructor.wordSize === o.wordSize &&
                                Array.isArray(e.words))
                        );
                    }),
                        (o.max = function(e, t) {
                            return e.cmp(t) > 0 ? e : t;
                        }),
                        (o.min = function(e, t) {
                            return e.cmp(t) < 0 ? e : t;
                        }),
                        (o.prototype._init = function(e, t, r) {
                            if ("number" == typeof e)
                                return this._initNumber(e, t, r);
                            if ("object" == typeof e)
                                return this._initArray(e, t, r);
                            "hex" === t && (t = 16),
                                i(t === (0 | t) && t >= 2 && t <= 36);
                            var n = 0;
                            "-" === (e = e.toString().replace(/\s+/g, ""))[0] &&
                                n++,
                                16 === t
                                    ? this._parseHex(e, n)
                                    : this._parseBase(e, t, n),
                                "-" === e[0] && (this.negative = 1),
                                this.strip(),
                                "le" === r &&
                                    this._initArray(this.toArray(), t, r);
                        }),
                        (o.prototype._initNumber = function(e, t, r) {
                            e < 0 && ((this.negative = 1), (e = -e)),
                                e < 67108864
                                    ? ((this.words = [67108863 & e]),
                                      (this.length = 1))
                                    : e < 4503599627370496
                                        ? ((this.words = [
                                              67108863 & e,
                                              (e / 67108864) & 67108863
                                          ]),
                                          (this.length = 2))
                                        : (i(e < 9007199254740992),
                                          (this.words = [
                                              67108863 & e,
                                              (e / 67108864) & 67108863,
                                              1
                                          ]),
                                          (this.length = 3)),
                                "le" === r &&
                                    this._initArray(this.toArray(), t, r);
                        }),
                        (o.prototype._initArray = function(e, t, r) {
                            if ((i("number" == typeof e.length), e.length <= 0))
                                return (
                                    (this.words = [0]), (this.length = 1), this
                                );
                            (this.length = Math.ceil(e.length / 3)),
                                (this.words = new Array(this.length));
                            for (var n = 0; n < this.length; n++)
                                this.words[n] = 0;
                            var o,
                                f,
                                a = 0;
                            if ("be" === r)
                                for (n = e.length - 1, o = 0; n >= 0; n -= 3)
                                    (f =
                                        e[n] |
                                        (e[n - 1] << 8) |
                                        (e[n - 2] << 16)),
                                        (this.words[o] |= (f << a) & 67108863),
                                        (this.words[o + 1] =
                                            (f >>> (26 - a)) & 67108863),
                                        (a += 24) >= 26 && ((a -= 26), o++);
                            else if ("le" === r)
                                for (n = 0, o = 0; n < e.length; n += 3)
                                    (f =
                                        e[n] |
                                        (e[n + 1] << 8) |
                                        (e[n + 2] << 16)),
                                        (this.words[o] |= (f << a) & 67108863),
                                        (this.words[o + 1] =
                                            (f >>> (26 - a)) & 67108863),
                                        (a += 24) >= 26 && ((a -= 26), o++);
                            return this.strip();
                        }),
                        (o.prototype._parseHex = function(e, t) {
                            (this.length = Math.ceil((e.length - t) / 6)),
                                (this.words = new Array(this.length));
                            for (var r = 0; r < this.length; r++)
                                this.words[r] = 0;
                            var i,
                                n,
                                o = 0;
                            for (r = e.length - 6, i = 0; r >= t; r -= 6)
                                (n = a(e, r, r + 6)),
                                    (this.words[i] |= (n << o) & 67108863),
                                    (this.words[i + 1] |=
                                        (n >>> (26 - o)) & 4194303),
                                    (o += 24) >= 26 && ((o -= 26), i++);
                            r + 6 !== t &&
                                ((n = a(e, t, r + 6)),
                                (this.words[i] |= (n << o) & 67108863),
                                (this.words[i + 1] |=
                                    (n >>> (26 - o)) & 4194303)),
                                this.strip();
                        }),
                        (o.prototype._parseBase = function(e, t, r) {
                            (this.words = [0]), (this.length = 1);
                            for (var i = 0, n = 1; n <= 67108863; n *= t) i++;
                            i--, (n = (n / t) | 0);
                            for (
                                var o = e.length - r,
                                    f = o % i,
                                    a = Math.min(o, o - f) + r,
                                    c = 0,
                                    h = r;
                                h < a;
                                h += i
                            )
                                (c = s(e, h, h + i, t)),
                                    this.imuln(n),
                                    this.words[0] + c < 67108864
                                        ? (this.words[0] += c)
                                        : this._iaddn(c);
                            if (0 !== f) {
                                var d = 1;
                                for (
                                    c = s(e, h, e.length, t), h = 0;
                                    h < f;
                                    h++
                                )
                                    d *= t;
                                this.imuln(d),
                                    this.words[0] + c < 67108864
                                        ? (this.words[0] += c)
                                        : this._iaddn(c);
                            }
                        }),
                        (o.prototype.copy = function(e) {
                            e.words = new Array(this.length);
                            for (var t = 0; t < this.length; t++)
                                e.words[t] = this.words[t];
                            (e.length = this.length),
                                (e.negative = this.negative),
                                (e.red = this.red);
                        }),
                        (o.prototype.clone = function() {
                            var e = new o(null);
                            return this.copy(e), e;
                        }),
                        (o.prototype._expand = function(e) {
                            for (; this.length < e; )
                                this.words[this.length++] = 0;
                            return this;
                        }),
                        (o.prototype.strip = function() {
                            for (
                                ;
                                this.length > 1 &&
                                0 === this.words[this.length - 1];

                            )
                                this.length--;
                            return this._normSign();
                        }),
                        (o.prototype._normSign = function() {
                            return (
                                1 === this.length &&
                                    0 === this.words[0] &&
                                    (this.negative = 0),
                                this
                            );
                        }),
                        (o.prototype.inspect = function() {
                            return (
                                (this.red ? "<BN-R: " : "<BN: ") +
                                this.toString(16) +
                                ">"
                            );
                        });
                    var c = [
                            "",
                            "0",
                            "00",
                            "000",
                            "0000",
                            "00000",
                            "000000",
                            "0000000",
                            "00000000",
                            "000000000",
                            "0000000000",
                            "00000000000",
                            "000000000000",
                            "0000000000000",
                            "00000000000000",
                            "000000000000000",
                            "0000000000000000",
                            "00000000000000000",
                            "000000000000000000",
                            "0000000000000000000",
                            "00000000000000000000",
                            "000000000000000000000",
                            "0000000000000000000000",
                            "00000000000000000000000",
                            "000000000000000000000000",
                            "0000000000000000000000000"
                        ],
                        h = [
                            0,
                            0,
                            25,
                            16,
                            12,
                            11,
                            10,
                            9,
                            8,
                            8,
                            7,
                            7,
                            7,
                            7,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            6,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5,
                            5
                        ],
                        d = [
                            0,
                            0,
                            33554432,
                            43046721,
                            16777216,
                            48828125,
                            60466176,
                            40353607,
                            16777216,
                            43046721,
                            1e7,
                            19487171,
                            35831808,
                            62748517,
                            7529536,
                            11390625,
                            16777216,
                            24137569,
                            34012224,
                            47045881,
                            64e6,
                            4084101,
                            5153632,
                            6436343,
                            7962624,
                            9765625,
                            11881376,
                            14348907,
                            17210368,
                            20511149,
                            243e5,
                            28629151,
                            33554432,
                            39135393,
                            45435424,
                            52521875,
                            60466176
                        ];
                    function u(e, t, r) {
                        r.negative = t.negative ^ e.negative;
                        var i = (e.length + t.length) | 0;
                        (r.length = i), (i = (i - 1) | 0);
                        var n = 0 | e.words[0],
                            o = 0 | t.words[0],
                            f = n * o,
                            a = 67108863 & f,
                            s = (f / 67108864) | 0;
                        r.words[0] = a;
                        for (var c = 1; c < i; c++) {
                            for (
                                var h = s >>> 26,
                                    d = 67108863 & s,
                                    u = Math.min(c, t.length - 1),
                                    p = Math.max(0, c - e.length + 1);
                                p <= u;
                                p++
                            ) {
                                var l = (c - p) | 0;
                                (h +=
                                    ((f =
                                        (n = 0 | e.words[l]) *
                                            (o = 0 | t.words[p]) +
                                        d) /
                                        67108864) |
                                    0),
                                    (d = 67108863 & f);
                            }
                            (r.words[c] = 0 | d), (s = 0 | h);
                        }
                        return (
                            0 !== s ? (r.words[c] = 0 | s) : r.length--,
                            r.strip()
                        );
                    }
                    (o.prototype.toString = function(e, t) {
                        var r;
                        if (
                            ((e = e || 10),
                            (t = 0 | t || 1),
                            16 === e || "hex" === e)
                        ) {
                            r = "";
                            for (
                                var n = 0, o = 0, f = 0;
                                f < this.length;
                                f++
                            ) {
                                var a = this.words[f],
                                    s = (16777215 & ((a << n) | o)).toString(
                                        16
                                    );
                                (r =
                                    0 !== (o = (a >>> (24 - n)) & 16777215) ||
                                    f !== this.length - 1
                                        ? c[6 - s.length] + s + r
                                        : s + r),
                                    (n += 2) >= 26 && ((n -= 26), f--);
                            }
                            for (
                                0 !== o && (r = o.toString(16) + r);
                                r.length % t != 0;

                            )
                                r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r;
                        }
                        if (e === (0 | e) && e >= 2 && e <= 36) {
                            var u = h[e],
                                p = d[e];
                            r = "";
                            var l = this.clone();
                            for (l.negative = 0; !l.isZero(); ) {
                                var b = l.modn(p).toString(e);
                                r = (l = l.idivn(p)).isZero()
                                    ? b + r
                                    : c[u - b.length] + b + r;
                            }
                            for (
                                this.isZero() && (r = "0" + r);
                                r.length % t != 0;

                            )
                                r = "0" + r;
                            return 0 !== this.negative && (r = "-" + r), r;
                        }
                        i(!1, "Base should be between 2 and 36");
                    }),
                        (o.prototype.toNumber = function() {
                            var e = this.words[0];
                            return (
                                2 === this.length
                                    ? (e += 67108864 * this.words[1])
                                    : 3 === this.length && 1 === this.words[2]
                                        ? (e +=
                                              4503599627370496 +
                                              67108864 * this.words[1])
                                        : this.length > 2 &&
                                          i(
                                              !1,
                                              "Number can only safely store up to 53 bits"
                                          ),
                                0 !== this.negative ? -e : e
                            );
                        }),
                        (o.prototype.toJSON = function() {
                            return this.toString(16);
                        }),
                        (o.prototype.toBuffer = function(e, t) {
                            return i(void 0 !== f), this.toArrayLike(f, e, t);
                        }),
                        (o.prototype.toArray = function(e, t) {
                            return this.toArrayLike(Array, e, t);
                        }),
                        (o.prototype.toArrayLike = function(e, t, r) {
                            var n = this.byteLength(),
                                o = r || Math.max(1, n);
                            i(n <= o, "byte array longer than desired length"),
                                i(o > 0, "Requested array length <= 0"),
                                this.strip();
                            var f,
                                a,
                                s = "le" === t,
                                c = new e(o),
                                h = this.clone();
                            if (s) {
                                for (a = 0; !h.isZero(); a++)
                                    (f = h.andln(255)), h.iushrn(8), (c[a] = f);
                                for (; a < o; a++) c[a] = 0;
                            } else {
                                for (a = 0; a < o - n; a++) c[a] = 0;
                                for (a = 0; !h.isZero(); a++)
                                    (f = h.andln(255)),
                                        h.iushrn(8),
                                        (c[o - a - 1] = f);
                            }
                            return c;
                        }),
                        Math.clz32
                            ? (o.prototype._countBits = function(e) {
                                  return 32 - Math.clz32(e);
                              })
                            : (o.prototype._countBits = function(e) {
                                  var t = e,
                                      r = 0;
                                  return (
                                      t >= 4096 && ((r += 13), (t >>>= 13)),
                                      t >= 64 && ((r += 7), (t >>>= 7)),
                                      t >= 8 && ((r += 4), (t >>>= 4)),
                                      t >= 2 && ((r += 2), (t >>>= 2)),
                                      r + t
                                  );
                              }),
                        (o.prototype._zeroBits = function(e) {
                            if (0 === e) return 26;
                            var t = e,
                                r = 0;
                            return (
                                0 == (8191 & t) && ((r += 13), (t >>>= 13)),
                                0 == (127 & t) && ((r += 7), (t >>>= 7)),
                                0 == (15 & t) && ((r += 4), (t >>>= 4)),
                                0 == (3 & t) && ((r += 2), (t >>>= 2)),
                                0 == (1 & t) && r++,
                                r
                            );
                        }),
                        (o.prototype.bitLength = function() {
                            var e = this.words[this.length - 1],
                                t = this._countBits(e);
                            return 26 * (this.length - 1) + t;
                        }),
                        (o.prototype.zeroBits = function() {
                            if (this.isZero()) return 0;
                            for (var e = 0, t = 0; t < this.length; t++) {
                                var r = this._zeroBits(this.words[t]);
                                if (((e += r), 26 !== r)) break;
                            }
                            return e;
                        }),
                        (o.prototype.byteLength = function() {
                            return Math.ceil(this.bitLength() / 8);
                        }),
                        (o.prototype.toTwos = function(e) {
                            return 0 !== this.negative
                                ? this.abs()
                                      .inotn(e)
                                      .iaddn(1)
                                : this.clone();
                        }),
                        (o.prototype.fromTwos = function(e) {
                            return this.testn(e - 1)
                                ? this.notn(e)
                                      .iaddn(1)
                                      .ineg()
                                : this.clone();
                        }),
                        (o.prototype.isNeg = function() {
                            return 0 !== this.negative;
                        }),
                        (o.prototype.neg = function() {
                            return this.clone().ineg();
                        }),
                        (o.prototype.ineg = function() {
                            return this.isZero() || (this.negative ^= 1), this;
                        }),
                        (o.prototype.iuor = function(e) {
                            for (; this.length < e.length; )
                                this.words[this.length++] = 0;
                            for (var t = 0; t < e.length; t++)
                                this.words[t] = this.words[t] | e.words[t];
                            return this.strip();
                        }),
                        (o.prototype.ior = function(e) {
                            return (
                                i(0 == (this.negative | e.negative)),
                                this.iuor(e)
                            );
                        }),
                        (o.prototype.or = function(e) {
                            return this.length > e.length
                                ? this.clone().ior(e)
                                : e.clone().ior(this);
                        }),
                        (o.prototype.uor = function(e) {
                            return this.length > e.length
                                ? this.clone().iuor(e)
                                : e.clone().iuor(this);
                        }),
                        (o.prototype.iuand = function(e) {
                            var t;
                            t = this.length > e.length ? e : this;
                            for (var r = 0; r < t.length; r++)
                                this.words[r] = this.words[r] & e.words[r];
                            return (this.length = t.length), this.strip();
                        }),
                        (o.prototype.iand = function(e) {
                            return (
                                i(0 == (this.negative | e.negative)),
                                this.iuand(e)
                            );
                        }),
                        (o.prototype.and = function(e) {
                            return this.length > e.length
                                ? this.clone().iand(e)
                                : e.clone().iand(this);
                        }),
                        (o.prototype.uand = function(e) {
                            return this.length > e.length
                                ? this.clone().iuand(e)
                                : e.clone().iuand(this);
                        }),
                        (o.prototype.iuxor = function(e) {
                            var t, r;
                            this.length > e.length
                                ? ((t = this), (r = e))
                                : ((t = e), (r = this));
                            for (var i = 0; i < r.length; i++)
                                this.words[i] = t.words[i] ^ r.words[i];
                            if (this !== t)
                                for (; i < t.length; i++)
                                    this.words[i] = t.words[i];
                            return (this.length = t.length), this.strip();
                        }),
                        (o.prototype.ixor = function(e) {
                            return (
                                i(0 == (this.negative | e.negative)),
                                this.iuxor(e)
                            );
                        }),
                        (o.prototype.xor = function(e) {
                            return this.length > e.length
                                ? this.clone().ixor(e)
                                : e.clone().ixor(this);
                        }),
                        (o.prototype.uxor = function(e) {
                            return this.length > e.length
                                ? this.clone().iuxor(e)
                                : e.clone().iuxor(this);
                        }),
                        (o.prototype.inotn = function(e) {
                            i("number" == typeof e && e >= 0);
                            var t = 0 | Math.ceil(e / 26),
                                r = e % 26;
                            this._expand(t), r > 0 && t--;
                            for (var n = 0; n < t; n++)
                                this.words[n] = 67108863 & ~this.words[n];
                            return (
                                r > 0 &&
                                    (this.words[n] =
                                        ~this.words[n] &
                                        (67108863 >> (26 - r))),
                                this.strip()
                            );
                        }),
                        (o.prototype.notn = function(e) {
                            return this.clone().inotn(e);
                        }),
                        (o.prototype.setn = function(e, t) {
                            i("number" == typeof e && e >= 0);
                            var r = (e / 26) | 0,
                                n = e % 26;
                            return (
                                this._expand(r + 1),
                                (this.words[r] = t
                                    ? this.words[r] | (1 << n)
                                    : this.words[r] & ~(1 << n)),
                                this.strip()
                            );
                        }),
                        (o.prototype.iadd = function(e) {
                            var t, r, i;
                            if (0 !== this.negative && 0 === e.negative)
                                return (
                                    (this.negative = 0),
                                    (t = this.isub(e)),
                                    (this.negative ^= 1),
                                    this._normSign()
                                );
                            if (0 === this.negative && 0 !== e.negative)
                                return (
                                    (e.negative = 0),
                                    (t = this.isub(e)),
                                    (e.negative = 1),
                                    t._normSign()
                                );
                            this.length > e.length
                                ? ((r = this), (i = e))
                                : ((r = e), (i = this));
                            for (var n = 0, o = 0; o < i.length; o++)
                                (t = (0 | r.words[o]) + (0 | i.words[o]) + n),
                                    (this.words[o] = 67108863 & t),
                                    (n = t >>> 26);
                            for (; 0 !== n && o < r.length; o++)
                                (t = (0 | r.words[o]) + n),
                                    (this.words[o] = 67108863 & t),
                                    (n = t >>> 26);
                            if (((this.length = r.length), 0 !== n))
                                (this.words[this.length] = n), this.length++;
                            else if (r !== this)
                                for (; o < r.length; o++)
                                    this.words[o] = r.words[o];
                            return this;
                        }),
                        (o.prototype.add = function(e) {
                            var t;
                            return 0 !== e.negative && 0 === this.negative
                                ? ((e.negative = 0),
                                  (t = this.sub(e)),
                                  (e.negative ^= 1),
                                  t)
                                : 0 === e.negative && 0 !== this.negative
                                    ? ((this.negative = 0),
                                      (t = e.sub(this)),
                                      (this.negative = 1),
                                      t)
                                    : this.length > e.length
                                        ? this.clone().iadd(e)
                                        : e.clone().iadd(this);
                        }),
                        (o.prototype.isub = function(e) {
                            if (0 !== e.negative) {
                                e.negative = 0;
                                var t = this.iadd(e);
                                return (e.negative = 1), t._normSign();
                            }
                            if (0 !== this.negative)
                                return (
                                    (this.negative = 0),
                                    this.iadd(e),
                                    (this.negative = 1),
                                    this._normSign()
                                );
                            var r,
                                i,
                                n = this.cmp(e);
                            if (0 === n)
                                return (
                                    (this.negative = 0),
                                    (this.length = 1),
                                    (this.words[0] = 0),
                                    this
                                );
                            n > 0
                                ? ((r = this), (i = e))
                                : ((r = e), (i = this));
                            for (var o = 0, f = 0; f < i.length; f++)
                                (o =
                                    (t =
                                        (0 | r.words[f]) -
                                        (0 | i.words[f]) +
                                        o) >> 26),
                                    (this.words[f] = 67108863 & t);
                            for (; 0 !== o && f < r.length; f++)
                                (o = (t = (0 | r.words[f]) + o) >> 26),
                                    (this.words[f] = 67108863 & t);
                            if (0 === o && f < r.length && r !== this)
                                for (; f < r.length; f++)
                                    this.words[f] = r.words[f];
                            return (
                                (this.length = Math.max(this.length, f)),
                                r !== this && (this.negative = 1),
                                this.strip()
                            );
                        }),
                        (o.prototype.sub = function(e) {
                            return this.clone().isub(e);
                        });
                    var p = function(e, t, r) {
                        var i,
                            n,
                            o,
                            f = e.words,
                            a = t.words,
                            s = r.words,
                            c = 0,
                            h = 0 | f[0],
                            d = 8191 & h,
                            u = h >>> 13,
                            p = 0 | f[1],
                            l = 8191 & p,
                            b = p >>> 13,
                            m = 0 | f[2],
                            y = 8191 & m,
                            v = m >>> 13,
                            g = 0 | f[3],
                            _ = 8191 & g,
                            w = g >>> 13,
                            S = 0 | f[4],
                            E = 8191 & S,
                            M = S >>> 13,
                            A = 0 | f[5],
                            I = 8191 & A,
                            k = A >>> 13,
                            B = 0 | f[6],
                            x = 8191 & B,
                            O = B >>> 13,
                            P = 0 | f[7],
                            T = 8191 & P,
                            D = P >>> 13,
                            R = 0 | f[8],
                            N = 8191 & R,
                            C = R >>> 13,
                            L = 0 | f[9],
                            q = 8191 & L,
                            j = L >>> 13,
                            U = 0 | a[0],
                            z = 8191 & U,
                            K = U >>> 13,
                            G = 0 | a[1],
                            H = 8191 & G,
                            F = G >>> 13,
                            V = 0 | a[2],
                            $ = 8191 & V,
                            Y = V >>> 13,
                            X = 0 | a[3],
                            W = 8191 & X,
                            Z = X >>> 13,
                            J = 0 | a[4],
                            Q = 8191 & J,
                            ee = J >>> 13,
                            te = 0 | a[5],
                            re = 8191 & te,
                            ie = te >>> 13,
                            ne = 0 | a[6],
                            oe = 8191 & ne,
                            fe = ne >>> 13,
                            ae = 0 | a[7],
                            se = 8191 & ae,
                            ce = ae >>> 13,
                            he = 0 | a[8],
                            de = 8191 & he,
                            ue = he >>> 13,
                            pe = 0 | a[9],
                            le = 8191 & pe,
                            be = pe >>> 13;
                        (r.negative = e.negative ^ t.negative), (r.length = 19);
                        var me =
                            (((c + (i = Math.imul(d, z))) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = Math.imul(d, K)) +
                                            Math.imul(u, z)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = Math.imul(u, K)) + (n >>> 13)) | 0) +
                                (me >>> 26)) |
                            0),
                            (me &= 67108863),
                            (i = Math.imul(l, z)),
                            (n = ((n = Math.imul(l, K)) + Math.imul(b, z)) | 0),
                            (o = Math.imul(b, K));
                        var ye =
                            (((c + (i = (i + Math.imul(d, H)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(d, F)) | 0) +
                                            Math.imul(u, H)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(u, F)) | 0) + (n >>> 13)) |
                                0) +
                                (ye >>> 26)) |
                            0),
                            (ye &= 67108863),
                            (i = Math.imul(y, z)),
                            (n = ((n = Math.imul(y, K)) + Math.imul(v, z)) | 0),
                            (o = Math.imul(v, K)),
                            (i = (i + Math.imul(l, H)) | 0),
                            (n =
                                ((n = (n + Math.imul(l, F)) | 0) +
                                    Math.imul(b, H)) |
                                0),
                            (o = (o + Math.imul(b, F)) | 0);
                        var ve =
                            (((c + (i = (i + Math.imul(d, $)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(d, Y)) | 0) +
                                            Math.imul(u, $)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(u, Y)) | 0) + (n >>> 13)) |
                                0) +
                                (ve >>> 26)) |
                            0),
                            (ve &= 67108863),
                            (i = Math.imul(_, z)),
                            (n = ((n = Math.imul(_, K)) + Math.imul(w, z)) | 0),
                            (o = Math.imul(w, K)),
                            (i = (i + Math.imul(y, H)) | 0),
                            (n =
                                ((n = (n + Math.imul(y, F)) | 0) +
                                    Math.imul(v, H)) |
                                0),
                            (o = (o + Math.imul(v, F)) | 0),
                            (i = (i + Math.imul(l, $)) | 0),
                            (n =
                                ((n = (n + Math.imul(l, Y)) | 0) +
                                    Math.imul(b, $)) |
                                0),
                            (o = (o + Math.imul(b, Y)) | 0);
                        var ge =
                            (((c + (i = (i + Math.imul(d, W)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(d, Z)) | 0) +
                                            Math.imul(u, W)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(u, Z)) | 0) + (n >>> 13)) |
                                0) +
                                (ge >>> 26)) |
                            0),
                            (ge &= 67108863),
                            (i = Math.imul(E, z)),
                            (n = ((n = Math.imul(E, K)) + Math.imul(M, z)) | 0),
                            (o = Math.imul(M, K)),
                            (i = (i + Math.imul(_, H)) | 0),
                            (n =
                                ((n = (n + Math.imul(_, F)) | 0) +
                                    Math.imul(w, H)) |
                                0),
                            (o = (o + Math.imul(w, F)) | 0),
                            (i = (i + Math.imul(y, $)) | 0),
                            (n =
                                ((n = (n + Math.imul(y, Y)) | 0) +
                                    Math.imul(v, $)) |
                                0),
                            (o = (o + Math.imul(v, Y)) | 0),
                            (i = (i + Math.imul(l, W)) | 0),
                            (n =
                                ((n = (n + Math.imul(l, Z)) | 0) +
                                    Math.imul(b, W)) |
                                0),
                            (o = (o + Math.imul(b, Z)) | 0);
                        var _e =
                            (((c + (i = (i + Math.imul(d, Q)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(d, ee)) | 0) +
                                            Math.imul(u, Q)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(u, ee)) | 0) + (n >>> 13)) |
                                0) +
                                (_e >>> 26)) |
                            0),
                            (_e &= 67108863),
                            (i = Math.imul(I, z)),
                            (n = ((n = Math.imul(I, K)) + Math.imul(k, z)) | 0),
                            (o = Math.imul(k, K)),
                            (i = (i + Math.imul(E, H)) | 0),
                            (n =
                                ((n = (n + Math.imul(E, F)) | 0) +
                                    Math.imul(M, H)) |
                                0),
                            (o = (o + Math.imul(M, F)) | 0),
                            (i = (i + Math.imul(_, $)) | 0),
                            (n =
                                ((n = (n + Math.imul(_, Y)) | 0) +
                                    Math.imul(w, $)) |
                                0),
                            (o = (o + Math.imul(w, Y)) | 0),
                            (i = (i + Math.imul(y, W)) | 0),
                            (n =
                                ((n = (n + Math.imul(y, Z)) | 0) +
                                    Math.imul(v, W)) |
                                0),
                            (o = (o + Math.imul(v, Z)) | 0),
                            (i = (i + Math.imul(l, Q)) | 0),
                            (n =
                                ((n = (n + Math.imul(l, ee)) | 0) +
                                    Math.imul(b, Q)) |
                                0),
                            (o = (o + Math.imul(b, ee)) | 0);
                        var we =
                            (((c + (i = (i + Math.imul(d, re)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(d, ie)) | 0) +
                                            Math.imul(u, re)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(u, ie)) | 0) + (n >>> 13)) |
                                0) +
                                (we >>> 26)) |
                            0),
                            (we &= 67108863),
                            (i = Math.imul(x, z)),
                            (n = ((n = Math.imul(x, K)) + Math.imul(O, z)) | 0),
                            (o = Math.imul(O, K)),
                            (i = (i + Math.imul(I, H)) | 0),
                            (n =
                                ((n = (n + Math.imul(I, F)) | 0) +
                                    Math.imul(k, H)) |
                                0),
                            (o = (o + Math.imul(k, F)) | 0),
                            (i = (i + Math.imul(E, $)) | 0),
                            (n =
                                ((n = (n + Math.imul(E, Y)) | 0) +
                                    Math.imul(M, $)) |
                                0),
                            (o = (o + Math.imul(M, Y)) | 0),
                            (i = (i + Math.imul(_, W)) | 0),
                            (n =
                                ((n = (n + Math.imul(_, Z)) | 0) +
                                    Math.imul(w, W)) |
                                0),
                            (o = (o + Math.imul(w, Z)) | 0),
                            (i = (i + Math.imul(y, Q)) | 0),
                            (n =
                                ((n = (n + Math.imul(y, ee)) | 0) +
                                    Math.imul(v, Q)) |
                                0),
                            (o = (o + Math.imul(v, ee)) | 0),
                            (i = (i + Math.imul(l, re)) | 0),
                            (n =
                                ((n = (n + Math.imul(l, ie)) | 0) +
                                    Math.imul(b, re)) |
                                0),
                            (o = (o + Math.imul(b, ie)) | 0);
                        var Se =
                            (((c + (i = (i + Math.imul(d, oe)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(d, fe)) | 0) +
                                            Math.imul(u, oe)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(u, fe)) | 0) + (n >>> 13)) |
                                0) +
                                (Se >>> 26)) |
                            0),
                            (Se &= 67108863),
                            (i = Math.imul(T, z)),
                            (n = ((n = Math.imul(T, K)) + Math.imul(D, z)) | 0),
                            (o = Math.imul(D, K)),
                            (i = (i + Math.imul(x, H)) | 0),
                            (n =
                                ((n = (n + Math.imul(x, F)) | 0) +
                                    Math.imul(O, H)) |
                                0),
                            (o = (o + Math.imul(O, F)) | 0),
                            (i = (i + Math.imul(I, $)) | 0),
                            (n =
                                ((n = (n + Math.imul(I, Y)) | 0) +
                                    Math.imul(k, $)) |
                                0),
                            (o = (o + Math.imul(k, Y)) | 0),
                            (i = (i + Math.imul(E, W)) | 0),
                            (n =
                                ((n = (n + Math.imul(E, Z)) | 0) +
                                    Math.imul(M, W)) |
                                0),
                            (o = (o + Math.imul(M, Z)) | 0),
                            (i = (i + Math.imul(_, Q)) | 0),
                            (n =
                                ((n = (n + Math.imul(_, ee)) | 0) +
                                    Math.imul(w, Q)) |
                                0),
                            (o = (o + Math.imul(w, ee)) | 0),
                            (i = (i + Math.imul(y, re)) | 0),
                            (n =
                                ((n = (n + Math.imul(y, ie)) | 0) +
                                    Math.imul(v, re)) |
                                0),
                            (o = (o + Math.imul(v, ie)) | 0),
                            (i = (i + Math.imul(l, oe)) | 0),
                            (n =
                                ((n = (n + Math.imul(l, fe)) | 0) +
                                    Math.imul(b, oe)) |
                                0),
                            (o = (o + Math.imul(b, fe)) | 0);
                        var Ee =
                            (((c + (i = (i + Math.imul(d, se)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(d, ce)) | 0) +
                                            Math.imul(u, se)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(u, ce)) | 0) + (n >>> 13)) |
                                0) +
                                (Ee >>> 26)) |
                            0),
                            (Ee &= 67108863),
                            (i = Math.imul(N, z)),
                            (n = ((n = Math.imul(N, K)) + Math.imul(C, z)) | 0),
                            (o = Math.imul(C, K)),
                            (i = (i + Math.imul(T, H)) | 0),
                            (n =
                                ((n = (n + Math.imul(T, F)) | 0) +
                                    Math.imul(D, H)) |
                                0),
                            (o = (o + Math.imul(D, F)) | 0),
                            (i = (i + Math.imul(x, $)) | 0),
                            (n =
                                ((n = (n + Math.imul(x, Y)) | 0) +
                                    Math.imul(O, $)) |
                                0),
                            (o = (o + Math.imul(O, Y)) | 0),
                            (i = (i + Math.imul(I, W)) | 0),
                            (n =
                                ((n = (n + Math.imul(I, Z)) | 0) +
                                    Math.imul(k, W)) |
                                0),
                            (o = (o + Math.imul(k, Z)) | 0),
                            (i = (i + Math.imul(E, Q)) | 0),
                            (n =
                                ((n = (n + Math.imul(E, ee)) | 0) +
                                    Math.imul(M, Q)) |
                                0),
                            (o = (o + Math.imul(M, ee)) | 0),
                            (i = (i + Math.imul(_, re)) | 0),
                            (n =
                                ((n = (n + Math.imul(_, ie)) | 0) +
                                    Math.imul(w, re)) |
                                0),
                            (o = (o + Math.imul(w, ie)) | 0),
                            (i = (i + Math.imul(y, oe)) | 0),
                            (n =
                                ((n = (n + Math.imul(y, fe)) | 0) +
                                    Math.imul(v, oe)) |
                                0),
                            (o = (o + Math.imul(v, fe)) | 0),
                            (i = (i + Math.imul(l, se)) | 0),
                            (n =
                                ((n = (n + Math.imul(l, ce)) | 0) +
                                    Math.imul(b, se)) |
                                0),
                            (o = (o + Math.imul(b, ce)) | 0);
                        var Me =
                            (((c + (i = (i + Math.imul(d, de)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(d, ue)) | 0) +
                                            Math.imul(u, de)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(u, ue)) | 0) + (n >>> 13)) |
                                0) +
                                (Me >>> 26)) |
                            0),
                            (Me &= 67108863),
                            (i = Math.imul(q, z)),
                            (n = ((n = Math.imul(q, K)) + Math.imul(j, z)) | 0),
                            (o = Math.imul(j, K)),
                            (i = (i + Math.imul(N, H)) | 0),
                            (n =
                                ((n = (n + Math.imul(N, F)) | 0) +
                                    Math.imul(C, H)) |
                                0),
                            (o = (o + Math.imul(C, F)) | 0),
                            (i = (i + Math.imul(T, $)) | 0),
                            (n =
                                ((n = (n + Math.imul(T, Y)) | 0) +
                                    Math.imul(D, $)) |
                                0),
                            (o = (o + Math.imul(D, Y)) | 0),
                            (i = (i + Math.imul(x, W)) | 0),
                            (n =
                                ((n = (n + Math.imul(x, Z)) | 0) +
                                    Math.imul(O, W)) |
                                0),
                            (o = (o + Math.imul(O, Z)) | 0),
                            (i = (i + Math.imul(I, Q)) | 0),
                            (n =
                                ((n = (n + Math.imul(I, ee)) | 0) +
                                    Math.imul(k, Q)) |
                                0),
                            (o = (o + Math.imul(k, ee)) | 0),
                            (i = (i + Math.imul(E, re)) | 0),
                            (n =
                                ((n = (n + Math.imul(E, ie)) | 0) +
                                    Math.imul(M, re)) |
                                0),
                            (o = (o + Math.imul(M, ie)) | 0),
                            (i = (i + Math.imul(_, oe)) | 0),
                            (n =
                                ((n = (n + Math.imul(_, fe)) | 0) +
                                    Math.imul(w, oe)) |
                                0),
                            (o = (o + Math.imul(w, fe)) | 0),
                            (i = (i + Math.imul(y, se)) | 0),
                            (n =
                                ((n = (n + Math.imul(y, ce)) | 0) +
                                    Math.imul(v, se)) |
                                0),
                            (o = (o + Math.imul(v, ce)) | 0),
                            (i = (i + Math.imul(l, de)) | 0),
                            (n =
                                ((n = (n + Math.imul(l, ue)) | 0) +
                                    Math.imul(b, de)) |
                                0),
                            (o = (o + Math.imul(b, ue)) | 0);
                        var Ae =
                            (((c + (i = (i + Math.imul(d, le)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(d, be)) | 0) +
                                            Math.imul(u, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(u, be)) | 0) + (n >>> 13)) |
                                0) +
                                (Ae >>> 26)) |
                            0),
                            (Ae &= 67108863),
                            (i = Math.imul(q, H)),
                            (n = ((n = Math.imul(q, F)) + Math.imul(j, H)) | 0),
                            (o = Math.imul(j, F)),
                            (i = (i + Math.imul(N, $)) | 0),
                            (n =
                                ((n = (n + Math.imul(N, Y)) | 0) +
                                    Math.imul(C, $)) |
                                0),
                            (o = (o + Math.imul(C, Y)) | 0),
                            (i = (i + Math.imul(T, W)) | 0),
                            (n =
                                ((n = (n + Math.imul(T, Z)) | 0) +
                                    Math.imul(D, W)) |
                                0),
                            (o = (o + Math.imul(D, Z)) | 0),
                            (i = (i + Math.imul(x, Q)) | 0),
                            (n =
                                ((n = (n + Math.imul(x, ee)) | 0) +
                                    Math.imul(O, Q)) |
                                0),
                            (o = (o + Math.imul(O, ee)) | 0),
                            (i = (i + Math.imul(I, re)) | 0),
                            (n =
                                ((n = (n + Math.imul(I, ie)) | 0) +
                                    Math.imul(k, re)) |
                                0),
                            (o = (o + Math.imul(k, ie)) | 0),
                            (i = (i + Math.imul(E, oe)) | 0),
                            (n =
                                ((n = (n + Math.imul(E, fe)) | 0) +
                                    Math.imul(M, oe)) |
                                0),
                            (o = (o + Math.imul(M, fe)) | 0),
                            (i = (i + Math.imul(_, se)) | 0),
                            (n =
                                ((n = (n + Math.imul(_, ce)) | 0) +
                                    Math.imul(w, se)) |
                                0),
                            (o = (o + Math.imul(w, ce)) | 0),
                            (i = (i + Math.imul(y, de)) | 0),
                            (n =
                                ((n = (n + Math.imul(y, ue)) | 0) +
                                    Math.imul(v, de)) |
                                0),
                            (o = (o + Math.imul(v, ue)) | 0);
                        var Ie =
                            (((c + (i = (i + Math.imul(l, le)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(l, be)) | 0) +
                                            Math.imul(b, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(b, be)) | 0) + (n >>> 13)) |
                                0) +
                                (Ie >>> 26)) |
                            0),
                            (Ie &= 67108863),
                            (i = Math.imul(q, $)),
                            (n = ((n = Math.imul(q, Y)) + Math.imul(j, $)) | 0),
                            (o = Math.imul(j, Y)),
                            (i = (i + Math.imul(N, W)) | 0),
                            (n =
                                ((n = (n + Math.imul(N, Z)) | 0) +
                                    Math.imul(C, W)) |
                                0),
                            (o = (o + Math.imul(C, Z)) | 0),
                            (i = (i + Math.imul(T, Q)) | 0),
                            (n =
                                ((n = (n + Math.imul(T, ee)) | 0) +
                                    Math.imul(D, Q)) |
                                0),
                            (o = (o + Math.imul(D, ee)) | 0),
                            (i = (i + Math.imul(x, re)) | 0),
                            (n =
                                ((n = (n + Math.imul(x, ie)) | 0) +
                                    Math.imul(O, re)) |
                                0),
                            (o = (o + Math.imul(O, ie)) | 0),
                            (i = (i + Math.imul(I, oe)) | 0),
                            (n =
                                ((n = (n + Math.imul(I, fe)) | 0) +
                                    Math.imul(k, oe)) |
                                0),
                            (o = (o + Math.imul(k, fe)) | 0),
                            (i = (i + Math.imul(E, se)) | 0),
                            (n =
                                ((n = (n + Math.imul(E, ce)) | 0) +
                                    Math.imul(M, se)) |
                                0),
                            (o = (o + Math.imul(M, ce)) | 0),
                            (i = (i + Math.imul(_, de)) | 0),
                            (n =
                                ((n = (n + Math.imul(_, ue)) | 0) +
                                    Math.imul(w, de)) |
                                0),
                            (o = (o + Math.imul(w, ue)) | 0);
                        var ke =
                            (((c + (i = (i + Math.imul(y, le)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(y, be)) | 0) +
                                            Math.imul(v, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(v, be)) | 0) + (n >>> 13)) |
                                0) +
                                (ke >>> 26)) |
                            0),
                            (ke &= 67108863),
                            (i = Math.imul(q, W)),
                            (n = ((n = Math.imul(q, Z)) + Math.imul(j, W)) | 0),
                            (o = Math.imul(j, Z)),
                            (i = (i + Math.imul(N, Q)) | 0),
                            (n =
                                ((n = (n + Math.imul(N, ee)) | 0) +
                                    Math.imul(C, Q)) |
                                0),
                            (o = (o + Math.imul(C, ee)) | 0),
                            (i = (i + Math.imul(T, re)) | 0),
                            (n =
                                ((n = (n + Math.imul(T, ie)) | 0) +
                                    Math.imul(D, re)) |
                                0),
                            (o = (o + Math.imul(D, ie)) | 0),
                            (i = (i + Math.imul(x, oe)) | 0),
                            (n =
                                ((n = (n + Math.imul(x, fe)) | 0) +
                                    Math.imul(O, oe)) |
                                0),
                            (o = (o + Math.imul(O, fe)) | 0),
                            (i = (i + Math.imul(I, se)) | 0),
                            (n =
                                ((n = (n + Math.imul(I, ce)) | 0) +
                                    Math.imul(k, se)) |
                                0),
                            (o = (o + Math.imul(k, ce)) | 0),
                            (i = (i + Math.imul(E, de)) | 0),
                            (n =
                                ((n = (n + Math.imul(E, ue)) | 0) +
                                    Math.imul(M, de)) |
                                0),
                            (o = (o + Math.imul(M, ue)) | 0);
                        var Be =
                            (((c + (i = (i + Math.imul(_, le)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(_, be)) | 0) +
                                            Math.imul(w, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(w, be)) | 0) + (n >>> 13)) |
                                0) +
                                (Be >>> 26)) |
                            0),
                            (Be &= 67108863),
                            (i = Math.imul(q, Q)),
                            (n =
                                ((n = Math.imul(q, ee)) + Math.imul(j, Q)) | 0),
                            (o = Math.imul(j, ee)),
                            (i = (i + Math.imul(N, re)) | 0),
                            (n =
                                ((n = (n + Math.imul(N, ie)) | 0) +
                                    Math.imul(C, re)) |
                                0),
                            (o = (o + Math.imul(C, ie)) | 0),
                            (i = (i + Math.imul(T, oe)) | 0),
                            (n =
                                ((n = (n + Math.imul(T, fe)) | 0) +
                                    Math.imul(D, oe)) |
                                0),
                            (o = (o + Math.imul(D, fe)) | 0),
                            (i = (i + Math.imul(x, se)) | 0),
                            (n =
                                ((n = (n + Math.imul(x, ce)) | 0) +
                                    Math.imul(O, se)) |
                                0),
                            (o = (o + Math.imul(O, ce)) | 0),
                            (i = (i + Math.imul(I, de)) | 0),
                            (n =
                                ((n = (n + Math.imul(I, ue)) | 0) +
                                    Math.imul(k, de)) |
                                0),
                            (o = (o + Math.imul(k, ue)) | 0);
                        var xe =
                            (((c + (i = (i + Math.imul(E, le)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(E, be)) | 0) +
                                            Math.imul(M, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(M, be)) | 0) + (n >>> 13)) |
                                0) +
                                (xe >>> 26)) |
                            0),
                            (xe &= 67108863),
                            (i = Math.imul(q, re)),
                            (n =
                                ((n = Math.imul(q, ie)) + Math.imul(j, re)) |
                                0),
                            (o = Math.imul(j, ie)),
                            (i = (i + Math.imul(N, oe)) | 0),
                            (n =
                                ((n = (n + Math.imul(N, fe)) | 0) +
                                    Math.imul(C, oe)) |
                                0),
                            (o = (o + Math.imul(C, fe)) | 0),
                            (i = (i + Math.imul(T, se)) | 0),
                            (n =
                                ((n = (n + Math.imul(T, ce)) | 0) +
                                    Math.imul(D, se)) |
                                0),
                            (o = (o + Math.imul(D, ce)) | 0),
                            (i = (i + Math.imul(x, de)) | 0),
                            (n =
                                ((n = (n + Math.imul(x, ue)) | 0) +
                                    Math.imul(O, de)) |
                                0),
                            (o = (o + Math.imul(O, ue)) | 0);
                        var Oe =
                            (((c + (i = (i + Math.imul(I, le)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(I, be)) | 0) +
                                            Math.imul(k, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(k, be)) | 0) + (n >>> 13)) |
                                0) +
                                (Oe >>> 26)) |
                            0),
                            (Oe &= 67108863),
                            (i = Math.imul(q, oe)),
                            (n =
                                ((n = Math.imul(q, fe)) + Math.imul(j, oe)) |
                                0),
                            (o = Math.imul(j, fe)),
                            (i = (i + Math.imul(N, se)) | 0),
                            (n =
                                ((n = (n + Math.imul(N, ce)) | 0) +
                                    Math.imul(C, se)) |
                                0),
                            (o = (o + Math.imul(C, ce)) | 0),
                            (i = (i + Math.imul(T, de)) | 0),
                            (n =
                                ((n = (n + Math.imul(T, ue)) | 0) +
                                    Math.imul(D, de)) |
                                0),
                            (o = (o + Math.imul(D, ue)) | 0);
                        var Pe =
                            (((c + (i = (i + Math.imul(x, le)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(x, be)) | 0) +
                                            Math.imul(O, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(O, be)) | 0) + (n >>> 13)) |
                                0) +
                                (Pe >>> 26)) |
                            0),
                            (Pe &= 67108863),
                            (i = Math.imul(q, se)),
                            (n =
                                ((n = Math.imul(q, ce)) + Math.imul(j, se)) |
                                0),
                            (o = Math.imul(j, ce)),
                            (i = (i + Math.imul(N, de)) | 0),
                            (n =
                                ((n = (n + Math.imul(N, ue)) | 0) +
                                    Math.imul(C, de)) |
                                0),
                            (o = (o + Math.imul(C, ue)) | 0);
                        var Te =
                            (((c + (i = (i + Math.imul(T, le)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(T, be)) | 0) +
                                            Math.imul(D, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(D, be)) | 0) + (n >>> 13)) |
                                0) +
                                (Te >>> 26)) |
                            0),
                            (Te &= 67108863),
                            (i = Math.imul(q, de)),
                            (n =
                                ((n = Math.imul(q, ue)) + Math.imul(j, de)) |
                                0),
                            (o = Math.imul(j, ue));
                        var De =
                            (((c + (i = (i + Math.imul(N, le)) | 0)) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = (n + Math.imul(N, be)) | 0) +
                                            Math.imul(C, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        (c =
                            ((((o = (o + Math.imul(C, be)) | 0) + (n >>> 13)) |
                                0) +
                                (De >>> 26)) |
                            0),
                            (De &= 67108863);
                        var Re =
                            (((c + (i = Math.imul(q, le))) | 0) +
                                ((8191 &
                                    (n =
                                        ((n = Math.imul(q, be)) +
                                            Math.imul(j, le)) |
                                        0)) <<
                                    13)) |
                            0;
                        return (
                            (c =
                                ((((o = Math.imul(j, be)) + (n >>> 13)) | 0) +
                                    (Re >>> 26)) |
                                0),
                            (Re &= 67108863),
                            (s[0] = me),
                            (s[1] = ye),
                            (s[2] = ve),
                            (s[3] = ge),
                            (s[4] = _e),
                            (s[5] = we),
                            (s[6] = Se),
                            (s[7] = Ee),
                            (s[8] = Me),
                            (s[9] = Ae),
                            (s[10] = Ie),
                            (s[11] = ke),
                            (s[12] = Be),
                            (s[13] = xe),
                            (s[14] = Oe),
                            (s[15] = Pe),
                            (s[16] = Te),
                            (s[17] = De),
                            (s[18] = Re),
                            0 !== c && ((s[19] = c), r.length++),
                            r
                        );
                    };
                    function l(e, t, r) {
                        return new b().mulp(e, t, r);
                    }
                    function b(e, t) {
                        (this.x = e), (this.y = t);
                    }
                    Math.imul || (p = u),
                        (o.prototype.mulTo = function(e, t) {
                            var r = this.length + e.length;
                            return 10 === this.length && 10 === e.length
                                ? p(this, e, t)
                                : r < 63
                                    ? u(this, e, t)
                                    : r < 1024
                                        ? (function(e, t, r) {
                                              (r.negative =
                                                  t.negative ^ e.negative),
                                                  (r.length =
                                                      e.length + t.length);
                                              for (
                                                  var i = 0, n = 0, o = 0;
                                                  o < r.length - 1;
                                                  o++
                                              ) {
                                                  var f = n;
                                                  n = 0;
                                                  for (
                                                      var a = 67108863 & i,
                                                          s = Math.min(
                                                              o,
                                                              t.length - 1
                                                          ),
                                                          c = Math.max(
                                                              0,
                                                              o - e.length + 1
                                                          );
                                                      c <= s;
                                                      c++
                                                  ) {
                                                      var h = o - c,
                                                          d =
                                                              (0 | e.words[h]) *
                                                              (0 | t.words[c]),
                                                          u = 67108863 & d;
                                                      (a =
                                                          67108863 &
                                                          (u = (u + a) | 0)),
                                                          (n +=
                                                              (f =
                                                                  ((f =
                                                                      (f +
                                                                          ((d /
                                                                              67108864) |
                                                                              0)) |
                                                                      0) +
                                                                      (u >>>
                                                                          26)) |
                                                                  0) >>> 26),
                                                          (f &= 67108863);
                                                  }
                                                  (r.words[o] = a),
                                                      (i = f),
                                                      (f = n);
                                              }
                                              return (
                                                  0 !== i
                                                      ? (r.words[o] = i)
                                                      : r.length--,
                                                  r.strip()
                                              );
                                          })(this, e, t)
                                        : l(this, e, t);
                        }),
                        (b.prototype.makeRBT = function(e) {
                            for (
                                var t = new Array(e),
                                    r = o.prototype._countBits(e) - 1,
                                    i = 0;
                                i < e;
                                i++
                            )
                                t[i] = this.revBin(i, r, e);
                            return t;
                        }),
                        (b.prototype.revBin = function(e, t, r) {
                            if (0 === e || e === r - 1) return e;
                            for (var i = 0, n = 0; n < t; n++)
                                (i |= (1 & e) << (t - n - 1)), (e >>= 1);
                            return i;
                        }),
                        (b.prototype.permute = function(e, t, r, i, n, o) {
                            for (var f = 0; f < o; f++)
                                (i[f] = t[e[f]]), (n[f] = r[e[f]]);
                        }),
                        (b.prototype.transform = function(e, t, r, i, n, o) {
                            this.permute(o, e, t, r, i, n);
                            for (var f = 1; f < n; f <<= 1)
                                for (
                                    var a = f << 1,
                                        s = Math.cos((2 * Math.PI) / a),
                                        c = Math.sin((2 * Math.PI) / a),
                                        h = 0;
                                    h < n;
                                    h += a
                                )
                                    for (var d = s, u = c, p = 0; p < f; p++) {
                                        var l = r[h + p],
                                            b = i[h + p],
                                            m = r[h + p + f],
                                            y = i[h + p + f],
                                            v = d * m - u * y;
                                        (y = d * y + u * m),
                                            (m = v),
                                            (r[h + p] = l + m),
                                            (i[h + p] = b + y),
                                            (r[h + p + f] = l - m),
                                            (i[h + p + f] = b - y),
                                            p !== a &&
                                                ((v = s * d - c * u),
                                                (u = s * u + c * d),
                                                (d = v));
                                    }
                        }),
                        (b.prototype.guessLen13b = function(e, t) {
                            var r = 1 | Math.max(t, e),
                                i = 1 & r,
                                n = 0;
                            for (r = (r / 2) | 0; r; r >>>= 1) n++;
                            return 1 << (n + 1 + i);
                        }),
                        (b.prototype.conjugate = function(e, t, r) {
                            if (!(r <= 1))
                                for (var i = 0; i < r / 2; i++) {
                                    var n = e[i];
                                    (e[i] = e[r - i - 1]),
                                        (e[r - i - 1] = n),
                                        (n = t[i]),
                                        (t[i] = -t[r - i - 1]),
                                        (t[r - i - 1] = -n);
                                }
                        }),
                        (b.prototype.normalize13b = function(e, t) {
                            for (var r = 0, i = 0; i < t / 2; i++) {
                                var n =
                                    8192 * Math.round(e[2 * i + 1] / t) +
                                    Math.round(e[2 * i] / t) +
                                    r;
                                (e[i] = 67108863 & n),
                                    (r = n < 67108864 ? 0 : (n / 67108864) | 0);
                            }
                            return e;
                        }),
                        (b.prototype.convert13b = function(e, t, r, n) {
                            for (var o = 0, f = 0; f < t; f++)
                                (o += 0 | e[f]),
                                    (r[2 * f] = 8191 & o),
                                    (o >>>= 13),
                                    (r[2 * f + 1] = 8191 & o),
                                    (o >>>= 13);
                            for (f = 2 * t; f < n; ++f) r[f] = 0;
                            i(0 === o), i(0 == (-8192 & o));
                        }),
                        (b.prototype.stub = function(e) {
                            for (var t = new Array(e), r = 0; r < e; r++)
                                t[r] = 0;
                            return t;
                        }),
                        (b.prototype.mulp = function(e, t, r) {
                            var i = 2 * this.guessLen13b(e.length, t.length),
                                n = this.makeRBT(i),
                                o = this.stub(i),
                                f = new Array(i),
                                a = new Array(i),
                                s = new Array(i),
                                c = new Array(i),
                                h = new Array(i),
                                d = new Array(i),
                                u = r.words;
                            (u.length = i),
                                this.convert13b(e.words, e.length, f, i),
                                this.convert13b(t.words, t.length, c, i),
                                this.transform(f, o, a, s, i, n),
                                this.transform(c, o, h, d, i, n);
                            for (var p = 0; p < i; p++) {
                                var l = a[p] * h[p] - s[p] * d[p];
                                (s[p] = a[p] * d[p] + s[p] * h[p]), (a[p] = l);
                            }
                            return (
                                this.conjugate(a, s, i),
                                this.transform(a, s, u, o, i, n),
                                this.conjugate(u, o, i),
                                this.normalize13b(u, i),
                                (r.negative = e.negative ^ t.negative),
                                (r.length = e.length + t.length),
                                r.strip()
                            );
                        }),
                        (o.prototype.mul = function(e) {
                            var t = new o(null);
                            return (
                                (t.words = new Array(this.length + e.length)),
                                this.mulTo(e, t)
                            );
                        }),
                        (o.prototype.mulf = function(e) {
                            var t = new o(null);
                            return (
                                (t.words = new Array(this.length + e.length)),
                                l(this, e, t)
                            );
                        }),
                        (o.prototype.imul = function(e) {
                            return this.clone().mulTo(e, this);
                        }),
                        (o.prototype.imuln = function(e) {
                            i("number" == typeof e), i(e < 67108864);
                            for (var t = 0, r = 0; r < this.length; r++) {
                                var n = (0 | this.words[r]) * e,
                                    o = (67108863 & n) + (67108863 & t);
                                (t >>= 26),
                                    (t += (n / 67108864) | 0),
                                    (t += o >>> 26),
                                    (this.words[r] = 67108863 & o);
                            }
                            return (
                                0 !== t && ((this.words[r] = t), this.length++),
                                this
                            );
                        }),
                        (o.prototype.muln = function(e) {
                            return this.clone().imuln(e);
                        }),
                        (o.prototype.sqr = function() {
                            return this.mul(this);
                        }),
                        (o.prototype.isqr = function() {
                            return this.imul(this.clone());
                        }),
                        (o.prototype.pow = function(e) {
                            var t = (function(e) {
                                for (
                                    var t = new Array(e.bitLength()), r = 0;
                                    r < t.length;
                                    r++
                                ) {
                                    var i = (r / 26) | 0,
                                        n = r % 26;
                                    t[r] = (e.words[i] & (1 << n)) >>> n;
                                }
                                return t;
                            })(e);
                            if (0 === t.length) return new o(1);
                            for (
                                var r = this, i = 0;
                                i < t.length && 0 === t[i];
                                i++, r = r.sqr()
                            );
                            if (++i < t.length)
                                for (
                                    var n = r.sqr();
                                    i < t.length;
                                    i++, n = n.sqr()
                                )
                                    0 !== t[i] && (r = r.mul(n));
                            return r;
                        }),
                        (o.prototype.iushln = function(e) {
                            i("number" == typeof e && e >= 0);
                            var t,
                                r = e % 26,
                                n = (e - r) / 26,
                                o = (67108863 >>> (26 - r)) << (26 - r);
                            if (0 !== r) {
                                var f = 0;
                                for (t = 0; t < this.length; t++) {
                                    var a = this.words[t] & o,
                                        s = ((0 | this.words[t]) - a) << r;
                                    (this.words[t] = s | f),
                                        (f = a >>> (26 - r));
                                }
                                f && ((this.words[t] = f), this.length++);
                            }
                            if (0 !== n) {
                                for (t = this.length - 1; t >= 0; t--)
                                    this.words[t + n] = this.words[t];
                                for (t = 0; t < n; t++) this.words[t] = 0;
                                this.length += n;
                            }
                            return this.strip();
                        }),
                        (o.prototype.ishln = function(e) {
                            return i(0 === this.negative), this.iushln(e);
                        }),
                        (o.prototype.iushrn = function(e, t, r) {
                            var n;
                            i("number" == typeof e && e >= 0),
                                (n = t ? (t - (t % 26)) / 26 : 0);
                            var o = e % 26,
                                f = Math.min((e - o) / 26, this.length),
                                a = 67108863 ^ ((67108863 >>> o) << o),
                                s = r;
                            if (((n -= f), (n = Math.max(0, n)), s)) {
                                for (var c = 0; c < f; c++)
                                    s.words[c] = this.words[c];
                                s.length = f;
                            }
                            if (0 === f);
                            else if (this.length > f)
                                for (
                                    this.length -= f, c = 0;
                                    c < this.length;
                                    c++
                                )
                                    this.words[c] = this.words[c + f];
                            else (this.words[0] = 0), (this.length = 1);
                            var h = 0;
                            for (
                                c = this.length - 1;
                                c >= 0 && (0 !== h || c >= n);
                                c--
                            ) {
                                var d = 0 | this.words[c];
                                (this.words[c] = (h << (26 - o)) | (d >>> o)),
                                    (h = d & a);
                            }
                            return (
                                s && 0 !== h && (s.words[s.length++] = h),
                                0 === this.length &&
                                    ((this.words[0] = 0), (this.length = 1)),
                                this.strip()
                            );
                        }),
                        (o.prototype.ishrn = function(e, t, r) {
                            return i(0 === this.negative), this.iushrn(e, t, r);
                        }),
                        (o.prototype.shln = function(e) {
                            return this.clone().ishln(e);
                        }),
                        (o.prototype.ushln = function(e) {
                            return this.clone().iushln(e);
                        }),
                        (o.prototype.shrn = function(e) {
                            return this.clone().ishrn(e);
                        }),
                        (o.prototype.ushrn = function(e) {
                            return this.clone().iushrn(e);
                        }),
                        (o.prototype.testn = function(e) {
                            i("number" == typeof e && e >= 0);
                            var t = e % 26,
                                r = (e - t) / 26,
                                n = 1 << t;
                            return !(this.length <= r) && !!(this.words[r] & n);
                        }),
                        (o.prototype.imaskn = function(e) {
                            i("number" == typeof e && e >= 0);
                            var t = e % 26,
                                r = (e - t) / 26;
                            if (
                                (i(
                                    0 === this.negative,
                                    "imaskn works only with positive numbers"
                                ),
                                this.length <= r)
                            )
                                return this;
                            if (
                                (0 !== t && r++,
                                (this.length = Math.min(r, this.length)),
                                0 !== t)
                            ) {
                                var n = 67108863 ^ ((67108863 >>> t) << t);
                                this.words[this.length - 1] &= n;
                            }
                            return this.strip();
                        }),
                        (o.prototype.maskn = function(e) {
                            return this.clone().imaskn(e);
                        }),
                        (o.prototype.iaddn = function(e) {
                            return (
                                i("number" == typeof e),
                                i(e < 67108864),
                                e < 0
                                    ? this.isubn(-e)
                                    : 0 !== this.negative
                                        ? 1 === this.length &&
                                          (0 | this.words[0]) < e
                                            ? ((this.words[0] =
                                                  e - (0 | this.words[0])),
                                              (this.negative = 0),
                                              this)
                                            : ((this.negative = 0),
                                              this.isubn(e),
                                              (this.negative = 1),
                                              this)
                                        : this._iaddn(e)
                            );
                        }),
                        (o.prototype._iaddn = function(e) {
                            this.words[0] += e;
                            for (
                                var t = 0;
                                t < this.length && this.words[t] >= 67108864;
                                t++
                            )
                                (this.words[t] -= 67108864),
                                    t === this.length - 1
                                        ? (this.words[t + 1] = 1)
                                        : this.words[t + 1]++;
                            return (
                                (this.length = Math.max(this.length, t + 1)),
                                this
                            );
                        }),
                        (o.prototype.isubn = function(e) {
                            if (
                                (i("number" == typeof e),
                                i(e < 67108864),
                                e < 0)
                            )
                                return this.iaddn(-e);
                            if (0 !== this.negative)
                                return (
                                    (this.negative = 0),
                                    this.iaddn(e),
                                    (this.negative = 1),
                                    this
                                );
                            if (
                                ((this.words[0] -= e),
                                1 === this.length && this.words[0] < 0)
                            )
                                (this.words[0] = -this.words[0]),
                                    (this.negative = 1);
                            else
                                for (
                                    var t = 0;
                                    t < this.length && this.words[t] < 0;
                                    t++
                                )
                                    (this.words[t] += 67108864),
                                        (this.words[t + 1] -= 1);
                            return this.strip();
                        }),
                        (o.prototype.addn = function(e) {
                            return this.clone().iaddn(e);
                        }),
                        (o.prototype.subn = function(e) {
                            return this.clone().isubn(e);
                        }),
                        (o.prototype.iabs = function() {
                            return (this.negative = 0), this;
                        }),
                        (o.prototype.abs = function() {
                            return this.clone().iabs();
                        }),
                        (o.prototype._ishlnsubmul = function(e, t, r) {
                            var n,
                                o,
                                f = e.length + r;
                            this._expand(f);
                            var a = 0;
                            for (n = 0; n < e.length; n++) {
                                o = (0 | this.words[n + r]) + a;
                                var s = (0 | e.words[n]) * t;
                                (a =
                                    ((o -= 67108863 & s) >> 26) -
                                    ((s / 67108864) | 0)),
                                    (this.words[n + r] = 67108863 & o);
                            }
                            for (; n < this.length - r; n++)
                                (a = (o = (0 | this.words[n + r]) + a) >> 26),
                                    (this.words[n + r] = 67108863 & o);
                            if (0 === a) return this.strip();
                            for (
                                i(-1 === a), a = 0, n = 0;
                                n < this.length;
                                n++
                            )
                                (a = (o = -(0 | this.words[n]) + a) >> 26),
                                    (this.words[n] = 67108863 & o);
                            return (this.negative = 1), this.strip();
                        }),
                        (o.prototype._wordDiv = function(e, t) {
                            var r = (this.length, e.length),
                                i = this.clone(),
                                n = e,
                                f = 0 | n.words[n.length - 1];
                            0 !== (r = 26 - this._countBits(f)) &&
                                ((n = n.ushln(r)),
                                i.iushln(r),
                                (f = 0 | n.words[n.length - 1]));
                            var a,
                                s = i.length - n.length;
                            if ("mod" !== t) {
                                ((a = new o(null)).length = s + 1),
                                    (a.words = new Array(a.length));
                                for (var c = 0; c < a.length; c++)
                                    a.words[c] = 0;
                            }
                            var h = i.clone()._ishlnsubmul(n, 1, s);
                            0 === h.negative &&
                                ((i = h), a && (a.words[s] = 1));
                            for (var d = s - 1; d >= 0; d--) {
                                var u =
                                    67108864 * (0 | i.words[n.length + d]) +
                                    (0 | i.words[n.length + d - 1]);
                                for (
                                    u = Math.min((u / f) | 0, 67108863),
                                        i._ishlnsubmul(n, u, d);
                                    0 !== i.negative;

                                )
                                    u--,
                                        (i.negative = 0),
                                        i._ishlnsubmul(n, 1, d),
                                        i.isZero() || (i.negative ^= 1);
                                a && (a.words[d] = u);
                            }
                            return (
                                a && a.strip(),
                                i.strip(),
                                "div" !== t && 0 !== r && i.iushrn(r),
                                {div: a || null, mod: i}
                            );
                        }),
                        (o.prototype.divmod = function(e, t, r) {
                            return (
                                i(!e.isZero()),
                                this.isZero()
                                    ? {div: new o(0), mod: new o(0)}
                                    : 0 !== this.negative && 0 === e.negative
                                        ? ((a = this.neg().divmod(e, t)),
                                          "mod" !== t && (n = a.div.neg()),
                                          "div" !== t &&
                                              ((f = a.mod.neg()),
                                              r &&
                                                  0 !== f.negative &&
                                                  f.iadd(e)),
                                          {div: n, mod: f})
                                        : 0 === this.negative &&
                                          0 !== e.negative
                                            ? ((a = this.divmod(e.neg(), t)),
                                              "mod" !== t && (n = a.div.neg()),
                                              {div: n, mod: a.mod})
                                            : 0 != (this.negative & e.negative)
                                                ? ((a = this.neg().divmod(
                                                      e.neg(),
                                                      t
                                                  )),
                                                  "div" !== t &&
                                                      ((f = a.mod.neg()),
                                                      r &&
                                                          0 !== f.negative &&
                                                          f.isub(e)),
                                                  {div: a.div, mod: f})
                                                : e.length > this.length ||
                                                  this.cmp(e) < 0
                                                    ? {div: new o(0), mod: this}
                                                    : 1 === e.length
                                                        ? "div" === t
                                                            ? {
                                                                  div: this.divn(
                                                                      e.words[0]
                                                                  ),
                                                                  mod: null
                                                              }
                                                            : "mod" === t
                                                                ? {
                                                                      div: null,
                                                                      mod: new o(
                                                                          this.modn(
                                                                              e
                                                                                  .words[0]
                                                                          )
                                                                      )
                                                                  }
                                                                : {
                                                                      div: this.divn(
                                                                          e
                                                                              .words[0]
                                                                      ),
                                                                      mod: new o(
                                                                          this.modn(
                                                                              e
                                                                                  .words[0]
                                                                          )
                                                                      )
                                                                  }
                                                        : this._wordDiv(e, t)
                            );
                            var n, f, a;
                        }),
                        (o.prototype.div = function(e) {
                            return this.divmod(e, "div", !1).div;
                        }),
                        (o.prototype.mod = function(e) {
                            return this.divmod(e, "mod", !1).mod;
                        }),
                        (o.prototype.umod = function(e) {
                            return this.divmod(e, "mod", !0).mod;
                        }),
                        (o.prototype.divRound = function(e) {
                            var t = this.divmod(e);
                            if (t.mod.isZero()) return t.div;
                            var r =
                                    0 !== t.div.negative
                                        ? t.mod.isub(e)
                                        : t.mod,
                                i = e.ushrn(1),
                                n = e.andln(1),
                                o = r.cmp(i);
                            return o < 0 || (1 === n && 0 === o)
                                ? t.div
                                : 0 !== t.div.negative
                                    ? t.div.isubn(1)
                                    : t.div.iaddn(1);
                        }),
                        (o.prototype.modn = function(e) {
                            i(e <= 67108863);
                            for (
                                var t = (1 << 26) % e,
                                    r = 0,
                                    n = this.length - 1;
                                n >= 0;
                                n--
                            )
                                r = (t * r + (0 | this.words[n])) % e;
                            return r;
                        }),
                        (o.prototype.idivn = function(e) {
                            i(e <= 67108863);
                            for (var t = 0, r = this.length - 1; r >= 0; r--) {
                                var n = (0 | this.words[r]) + 67108864 * t;
                                (this.words[r] = (n / e) | 0), (t = n % e);
                            }
                            return this.strip();
                        }),
                        (o.prototype.divn = function(e) {
                            return this.clone().idivn(e);
                        }),
                        (o.prototype.egcd = function(e) {
                            i(0 === e.negative), i(!e.isZero());
                            var t = this,
                                r = e.clone();
                            t = 0 !== t.negative ? t.umod(e) : t.clone();
                            for (
                                var n = new o(1),
                                    f = new o(0),
                                    a = new o(0),
                                    s = new o(1),
                                    c = 0;
                                t.isEven() && r.isEven();

                            )
                                t.iushrn(1), r.iushrn(1), ++c;
                            for (
                                var h = r.clone(), d = t.clone();
                                !t.isZero();

                            ) {
                                for (
                                    var u = 0, p = 1;
                                    0 == (t.words[0] & p) && u < 26;
                                    ++u, p <<= 1
                                );
                                if (u > 0)
                                    for (t.iushrn(u); u-- > 0; )
                                        (n.isOdd() || f.isOdd()) &&
                                            (n.iadd(h), f.isub(d)),
                                            n.iushrn(1),
                                            f.iushrn(1);
                                for (
                                    var l = 0, b = 1;
                                    0 == (r.words[0] & b) && l < 26;
                                    ++l, b <<= 1
                                );
                                if (l > 0)
                                    for (r.iushrn(l); l-- > 0; )
                                        (a.isOdd() || s.isOdd()) &&
                                            (a.iadd(h), s.isub(d)),
                                            a.iushrn(1),
                                            s.iushrn(1);
                                t.cmp(r) >= 0
                                    ? (t.isub(r), n.isub(a), f.isub(s))
                                    : (r.isub(t), a.isub(n), s.isub(f));
                            }
                            return {a: a, b: s, gcd: r.iushln(c)};
                        }),
                        (o.prototype._invmp = function(e) {
                            i(0 === e.negative), i(!e.isZero());
                            var t = this,
                                r = e.clone();
                            t = 0 !== t.negative ? t.umod(e) : t.clone();
                            for (
                                var n,
                                    f = new o(1),
                                    a = new o(0),
                                    s = r.clone();
                                t.cmpn(1) > 0 && r.cmpn(1) > 0;

                            ) {
                                for (
                                    var c = 0, h = 1;
                                    0 == (t.words[0] & h) && c < 26;
                                    ++c, h <<= 1
                                );
                                if (c > 0)
                                    for (t.iushrn(c); c-- > 0; )
                                        f.isOdd() && f.iadd(s), f.iushrn(1);
                                for (
                                    var d = 0, u = 1;
                                    0 == (r.words[0] & u) && d < 26;
                                    ++d, u <<= 1
                                );
                                if (d > 0)
                                    for (r.iushrn(d); d-- > 0; )
                                        a.isOdd() && a.iadd(s), a.iushrn(1);
                                t.cmp(r) >= 0
                                    ? (t.isub(r), f.isub(a))
                                    : (r.isub(t), a.isub(f));
                            }
                            return (
                                (n = 0 === t.cmpn(1) ? f : a).cmpn(0) < 0 &&
                                    n.iadd(e),
                                n
                            );
                        }),
                        (o.prototype.gcd = function(e) {
                            if (this.isZero()) return e.abs();
                            if (e.isZero()) return this.abs();
                            var t = this.clone(),
                                r = e.clone();
                            (t.negative = 0), (r.negative = 0);
                            for (var i = 0; t.isEven() && r.isEven(); i++)
                                t.iushrn(1), r.iushrn(1);
                            for (;;) {
                                for (; t.isEven(); ) t.iushrn(1);
                                for (; r.isEven(); ) r.iushrn(1);
                                var n = t.cmp(r);
                                if (n < 0) {
                                    var o = t;
                                    (t = r), (r = o);
                                } else if (0 === n || 0 === r.cmpn(1)) break;
                                t.isub(r);
                            }
                            return r.iushln(i);
                        }),
                        (o.prototype.invm = function(e) {
                            return this.egcd(e).a.umod(e);
                        }),
                        (o.prototype.isEven = function() {
                            return 0 == (1 & this.words[0]);
                        }),
                        (o.prototype.isOdd = function() {
                            return 1 == (1 & this.words[0]);
                        }),
                        (o.prototype.andln = function(e) {
                            return this.words[0] & e;
                        }),
                        (o.prototype.bincn = function(e) {
                            i("number" == typeof e);
                            var t = e % 26,
                                r = (e - t) / 26,
                                n = 1 << t;
                            if (this.length <= r)
                                return (
                                    this._expand(r + 1),
                                    (this.words[r] |= n),
                                    this
                                );
                            for (
                                var o = n, f = r;
                                0 !== o && f < this.length;
                                f++
                            ) {
                                var a = 0 | this.words[f];
                                (o = (a += o) >>> 26),
                                    (a &= 67108863),
                                    (this.words[f] = a);
                            }
                            return (
                                0 !== o && ((this.words[f] = o), this.length++),
                                this
                            );
                        }),
                        (o.prototype.isZero = function() {
                            return 1 === this.length && 0 === this.words[0];
                        }),
                        (o.prototype.cmpn = function(e) {
                            var t,
                                r = e < 0;
                            if (0 !== this.negative && !r) return -1;
                            if (0 === this.negative && r) return 1;
                            if ((this.strip(), this.length > 1)) t = 1;
                            else {
                                r && (e = -e),
                                    i(e <= 67108863, "Number is too big");
                                var n = 0 | this.words[0];
                                t = n === e ? 0 : n < e ? -1 : 1;
                            }
                            return 0 !== this.negative ? 0 | -t : t;
                        }),
                        (o.prototype.cmp = function(e) {
                            if (0 !== this.negative && 0 === e.negative)
                                return -1;
                            if (0 === this.negative && 0 !== e.negative)
                                return 1;
                            var t = this.ucmp(e);
                            return 0 !== this.negative ? 0 | -t : t;
                        }),
                        (o.prototype.ucmp = function(e) {
                            if (this.length > e.length) return 1;
                            if (this.length < e.length) return -1;
                            for (var t = 0, r = this.length - 1; r >= 0; r--) {
                                var i = 0 | this.words[r],
                                    n = 0 | e.words[r];
                                if (i !== n) {
                                    i < n ? (t = -1) : i > n && (t = 1);
                                    break;
                                }
                            }
                            return t;
                        }),
                        (o.prototype.gtn = function(e) {
                            return 1 === this.cmpn(e);
                        }),
                        (o.prototype.gt = function(e) {
                            return 1 === this.cmp(e);
                        }),
                        (o.prototype.gten = function(e) {
                            return this.cmpn(e) >= 0;
                        }),
                        (o.prototype.gte = function(e) {
                            return this.cmp(e) >= 0;
                        }),
                        (o.prototype.ltn = function(e) {
                            return -1 === this.cmpn(e);
                        }),
                        (o.prototype.lt = function(e) {
                            return -1 === this.cmp(e);
                        }),
                        (o.prototype.lten = function(e) {
                            return this.cmpn(e) <= 0;
                        }),
                        (o.prototype.lte = function(e) {
                            return this.cmp(e) <= 0;
                        }),
                        (o.prototype.eqn = function(e) {
                            return 0 === this.cmpn(e);
                        }),
                        (o.prototype.eq = function(e) {
                            return 0 === this.cmp(e);
                        }),
                        (o.red = function(e) {
                            return new S(e);
                        }),
                        (o.prototype.toRed = function(e) {
                            return (
                                i(
                                    !this.red,
                                    "Already a number in reduction context"
                                ),
                                i(
                                    0 === this.negative,
                                    "red works only with positives"
                                ),
                                e.convertTo(this)._forceRed(e)
                            );
                        }),
                        (o.prototype.fromRed = function() {
                            return (
                                i(
                                    this.red,
                                    "fromRed works only with numbers in reduction context"
                                ),
                                this.red.convertFrom(this)
                            );
                        }),
                        (o.prototype._forceRed = function(e) {
                            return (this.red = e), this;
                        }),
                        (o.prototype.forceRed = function(e) {
                            return (
                                i(
                                    !this.red,
                                    "Already a number in reduction context"
                                ),
                                this._forceRed(e)
                            );
                        }),
                        (o.prototype.redAdd = function(e) {
                            return (
                                i(
                                    this.red,
                                    "redAdd works only with red numbers"
                                ),
                                this.red.add(this, e)
                            );
                        }),
                        (o.prototype.redIAdd = function(e) {
                            return (
                                i(
                                    this.red,
                                    "redIAdd works only with red numbers"
                                ),
                                this.red.iadd(this, e)
                            );
                        }),
                        (o.prototype.redSub = function(e) {
                            return (
                                i(
                                    this.red,
                                    "redSub works only with red numbers"
                                ),
                                this.red.sub(this, e)
                            );
                        }),
                        (o.prototype.redISub = function(e) {
                            return (
                                i(
                                    this.red,
                                    "redISub works only with red numbers"
                                ),
                                this.red.isub(this, e)
                            );
                        }),
                        (o.prototype.redShl = function(e) {
                            return (
                                i(
                                    this.red,
                                    "redShl works only with red numbers"
                                ),
                                this.red.shl(this, e)
                            );
                        }),
                        (o.prototype.redMul = function(e) {
                            return (
                                i(
                                    this.red,
                                    "redMul works only with red numbers"
                                ),
                                this.red._verify2(this, e),
                                this.red.mul(this, e)
                            );
                        }),
                        (o.prototype.redIMul = function(e) {
                            return (
                                i(
                                    this.red,
                                    "redMul works only with red numbers"
                                ),
                                this.red._verify2(this, e),
                                this.red.imul(this, e)
                            );
                        }),
                        (o.prototype.redSqr = function() {
                            return (
                                i(
                                    this.red,
                                    "redSqr works only with red numbers"
                                ),
                                this.red._verify1(this),
                                this.red.sqr(this)
                            );
                        }),
                        (o.prototype.redISqr = function() {
                            return (
                                i(
                                    this.red,
                                    "redISqr works only with red numbers"
                                ),
                                this.red._verify1(this),
                                this.red.isqr(this)
                            );
                        }),
                        (o.prototype.redSqrt = function() {
                            return (
                                i(
                                    this.red,
                                    "redSqrt works only with red numbers"
                                ),
                                this.red._verify1(this),
                                this.red.sqrt(this)
                            );
                        }),
                        (o.prototype.redInvm = function() {
                            return (
                                i(
                                    this.red,
                                    "redInvm works only with red numbers"
                                ),
                                this.red._verify1(this),
                                this.red.invm(this)
                            );
                        }),
                        (o.prototype.redNeg = function() {
                            return (
                                i(
                                    this.red,
                                    "redNeg works only with red numbers"
                                ),
                                this.red._verify1(this),
                                this.red.neg(this)
                            );
                        }),
                        (o.prototype.redPow = function(e) {
                            return (
                                i(this.red && !e.red, "redPow(normalNum)"),
                                this.red._verify1(this),
                                this.red.pow(this, e)
                            );
                        });
                    var m = {k256: null, p224: null, p192: null, p25519: null};
                    function y(e, t) {
                        (this.name = e),
                            (this.p = new o(t, 16)),
                            (this.n = this.p.bitLength()),
                            (this.k = new o(1).iushln(this.n).isub(this.p)),
                            (this.tmp = this._tmp());
                    }
                    function v() {
                        y.call(
                            this,
                            "k256",
                            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
                        );
                    }
                    function g() {
                        y.call(
                            this,
                            "p224",
                            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
                        );
                    }
                    function _() {
                        y.call(
                            this,
                            "p192",
                            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
                        );
                    }
                    function w() {
                        y.call(
                            this,
                            "25519",
                            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
                        );
                    }
                    function S(e) {
                        if ("string" == typeof e) {
                            var t = o._prime(e);
                            (this.m = t.p), (this.prime = t);
                        } else
                            i(e.gtn(1), "modulus must be greater than 1"),
                                (this.m = e),
                                (this.prime = null);
                    }
                    function E(e) {
                        S.call(this, e),
                            (this.shift = this.m.bitLength()),
                            this.shift % 26 != 0 &&
                                (this.shift += 26 - (this.shift % 26)),
                            (this.r = new o(1).iushln(this.shift)),
                            (this.r2 = this.imod(this.r.sqr())),
                            (this.rinv = this.r._invmp(this.m)),
                            (this.minv = this.rinv
                                .mul(this.r)
                                .isubn(1)
                                .div(this.m)),
                            (this.minv = this.minv.umod(this.r)),
                            (this.minv = this.r.sub(this.minv));
                    }
                    (y.prototype._tmp = function() {
                        var e = new o(null);
                        return (e.words = new Array(Math.ceil(this.n / 13))), e;
                    }),
                        (y.prototype.ireduce = function(e) {
                            var t,
                                r = e;
                            do {
                                this.split(r, this.tmp),
                                    (t = (r = (r = this.imulK(r)).iadd(
                                        this.tmp
                                    )).bitLength());
                            } while (t > this.n);
                            var i = t < this.n ? -1 : r.ucmp(this.p);
                            return (
                                0 === i
                                    ? ((r.words[0] = 0), (r.length = 1))
                                    : i > 0
                                        ? r.isub(this.p)
                                        : r.strip(),
                                r
                            );
                        }),
                        (y.prototype.split = function(e, t) {
                            e.iushrn(this.n, 0, t);
                        }),
                        (y.prototype.imulK = function(e) {
                            return e.imul(this.k);
                        }),
                        n(v, y),
                        (v.prototype.split = function(e, t) {
                            for (
                                var r = Math.min(e.length, 9), i = 0;
                                i < r;
                                i++
                            )
                                t.words[i] = e.words[i];
                            if (((t.length = r), e.length <= 9))
                                return (e.words[0] = 0), void (e.length = 1);
                            var n = e.words[9];
                            for (
                                t.words[t.length++] = 4194303 & n, i = 10;
                                i < e.length;
                                i++
                            ) {
                                var o = 0 | e.words[i];
                                (e.words[i - 10] =
                                    ((4194303 & o) << 4) | (n >>> 22)),
                                    (n = o);
                            }
                            (n >>>= 22),
                                (e.words[i - 10] = n),
                                0 === n && e.length > 10
                                    ? (e.length -= 10)
                                    : (e.length -= 9);
                        }),
                        (v.prototype.imulK = function(e) {
                            (e.words[e.length] = 0),
                                (e.words[e.length + 1] = 0),
                                (e.length += 2);
                            for (var t = 0, r = 0; r < e.length; r++) {
                                var i = 0 | e.words[r];
                                (t += 977 * i),
                                    (e.words[r] = 67108863 & t),
                                    (t = 64 * i + ((t / 67108864) | 0));
                            }
                            return (
                                0 === e.words[e.length - 1] &&
                                    (e.length--,
                                    0 === e.words[e.length - 1] && e.length--),
                                e
                            );
                        }),
                        n(g, y),
                        n(_, y),
                        n(w, y),
                        (w.prototype.imulK = function(e) {
                            for (var t = 0, r = 0; r < e.length; r++) {
                                var i = 19 * (0 | e.words[r]) + t,
                                    n = 67108863 & i;
                                (i >>>= 26), (e.words[r] = n), (t = i);
                            }
                            return 0 !== t && (e.words[e.length++] = t), e;
                        }),
                        (o._prime = function(e) {
                            if (m[e]) return m[e];
                            var t;
                            if ("k256" === e) t = new v();
                            else if ("p224" === e) t = new g();
                            else if ("p192" === e) t = new _();
                            else {
                                if ("p25519" !== e)
                                    throw new Error("Unknown prime " + e);
                                t = new w();
                            }
                            return (m[e] = t), t;
                        }),
                        (S.prototype._verify1 = function(e) {
                            i(
                                0 === e.negative,
                                "red works only with positives"
                            ),
                                i(e.red, "red works only with red numbers");
                        }),
                        (S.prototype._verify2 = function(e, t) {
                            i(
                                0 == (e.negative | t.negative),
                                "red works only with positives"
                            ),
                                i(
                                    e.red && e.red === t.red,
                                    "red works only with red numbers"
                                );
                        }),
                        (S.prototype.imod = function(e) {
                            return this.prime
                                ? this.prime.ireduce(e)._forceRed(this)
                                : e.umod(this.m)._forceRed(this);
                        }),
                        (S.prototype.neg = function(e) {
                            return e.isZero()
                                ? e.clone()
                                : this.m.sub(e)._forceRed(this);
                        }),
                        (S.prototype.add = function(e, t) {
                            this._verify2(e, t);
                            var r = e.add(t);
                            return (
                                r.cmp(this.m) >= 0 && r.isub(this.m),
                                r._forceRed(this)
                            );
                        }),
                        (S.prototype.iadd = function(e, t) {
                            this._verify2(e, t);
                            var r = e.iadd(t);
                            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
                        }),
                        (S.prototype.sub = function(e, t) {
                            this._verify2(e, t);
                            var r = e.sub(t);
                            return (
                                r.cmpn(0) < 0 && r.iadd(this.m),
                                r._forceRed(this)
                            );
                        }),
                        (S.prototype.isub = function(e, t) {
                            this._verify2(e, t);
                            var r = e.isub(t);
                            return r.cmpn(0) < 0 && r.iadd(this.m), r;
                        }),
                        (S.prototype.shl = function(e, t) {
                            return this._verify1(e), this.imod(e.ushln(t));
                        }),
                        (S.prototype.imul = function(e, t) {
                            return this._verify2(e, t), this.imod(e.imul(t));
                        }),
                        (S.prototype.mul = function(e, t) {
                            return this._verify2(e, t), this.imod(e.mul(t));
                        }),
                        (S.prototype.isqr = function(e) {
                            return this.imul(e, e.clone());
                        }),
                        (S.prototype.sqr = function(e) {
                            return this.mul(e, e);
                        }),
                        (S.prototype.sqrt = function(e) {
                            if (e.isZero()) return e.clone();
                            var t = this.m.andln(3);
                            if ((i(t % 2 == 1), 3 === t)) {
                                var r = this.m.add(new o(1)).iushrn(2);
                                return this.pow(e, r);
                            }
                            for (
                                var n = this.m.subn(1), f = 0;
                                !n.isZero() && 0 === n.andln(1);

                            )
                                f++, n.iushrn(1);
                            i(!n.isZero());
                            var a = new o(1).toRed(this),
                                s = a.redNeg(),
                                c = this.m.subn(1).iushrn(1),
                                h = this.m.bitLength();
                            for (
                                h = new o(2 * h * h).toRed(this);
                                0 !== this.pow(h, c).cmp(s);

                            )
                                h.redIAdd(s);
                            for (
                                var d = this.pow(h, n),
                                    u = this.pow(e, n.addn(1).iushrn(1)),
                                    p = this.pow(e, n),
                                    l = f;
                                0 !== p.cmp(a);

                            ) {
                                for (var b = p, m = 0; 0 !== b.cmp(a); m++)
                                    b = b.redSqr();
                                i(m < l);
                                var y = this.pow(d, new o(1).iushln(l - m - 1));
                                (u = u.redMul(y)),
                                    (d = y.redSqr()),
                                    (p = p.redMul(d)),
                                    (l = m);
                            }
                            return u;
                        }),
                        (S.prototype.invm = function(e) {
                            var t = e._invmp(this.m);
                            return 0 !== t.negative
                                ? ((t.negative = 0), this.imod(t).redNeg())
                                : this.imod(t);
                        }),
                        (S.prototype.pow = function(e, t) {
                            if (t.isZero()) return new o(1).toRed(this);
                            if (0 === t.cmpn(1)) return e.clone();
                            var r = new Array(16);
                            (r[0] = new o(1).toRed(this)), (r[1] = e);
                            for (var i = 2; i < r.length; i++)
                                r[i] = this.mul(r[i - 1], e);
                            var n = r[0],
                                f = 0,
                                a = 0,
                                s = t.bitLength() % 26;
                            for (
                                0 === s && (s = 26), i = t.length - 1;
                                i >= 0;
                                i--
                            ) {
                                for (
                                    var c = t.words[i], h = s - 1;
                                    h >= 0;
                                    h--
                                ) {
                                    var d = (c >> h) & 1;
                                    n !== r[0] && (n = this.sqr(n)),
                                        0 !== d || 0 !== f
                                            ? ((f <<= 1),
                                              (f |= d),
                                              (4 === ++a ||
                                                  (0 === i && 0 === h)) &&
                                                  ((n = this.mul(n, r[f])),
                                                  (a = 0),
                                                  (f = 0)))
                                            : (a = 0);
                                }
                                s = 26;
                            }
                            return n;
                        }),
                        (S.prototype.convertTo = function(e) {
                            var t = e.umod(this.m);
                            return t === e ? t.clone() : t;
                        }),
                        (S.prototype.convertFrom = function(e) {
                            var t = e.clone();
                            return (t.red = null), t;
                        }),
                        (o.mont = function(e) {
                            return new E(e);
                        }),
                        n(E, S),
                        (E.prototype.convertTo = function(e) {
                            return this.imod(e.ushln(this.shift));
                        }),
                        (E.prototype.convertFrom = function(e) {
                            var t = this.imod(e.mul(this.rinv));
                            return (t.red = null), t;
                        }),
                        (E.prototype.imul = function(e, t) {
                            if (e.isZero() || t.isZero())
                                return (e.words[0] = 0), (e.length = 1), e;
                            var r = e.imul(t),
                                i = r
                                    .maskn(this.shift)
                                    .mul(this.minv)
                                    .imaskn(this.shift)
                                    .mul(this.m),
                                n = r.isub(i).iushrn(this.shift),
                                o = n;
                            return (
                                n.cmp(this.m) >= 0
                                    ? (o = n.isub(this.m))
                                    : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
                                o._forceRed(this)
                            );
                        }),
                        (E.prototype.mul = function(e, t) {
                            if (e.isZero() || t.isZero())
                                return new o(0)._forceRed(this);
                            var r = e.mul(t),
                                i = r
                                    .maskn(this.shift)
                                    .mul(this.minv)
                                    .imaskn(this.shift)
                                    .mul(this.m),
                                n = r.isub(i).iushrn(this.shift),
                                f = n;
                            return (
                                n.cmp(this.m) >= 0
                                    ? (f = n.isub(this.m))
                                    : n.cmpn(0) < 0 && (f = n.iadd(this.m)),
                                f._forceRed(this)
                            );
                        }),
                        (E.prototype.invm = function(e) {
                            return this.imod(
                                e._invmp(this.m).mul(this.r2)
                            )._forceRed(this);
                        });
                })(void 0 === e || e, this);
            }.call(this, r(248)(e)));
        },
        1780: function(e, t, r) {
            "use strict";
            var i = t;
            (i.version = r(1989).version),
                (i.utils = r(1990)),
                (i.rand = r(1861)),
                (i.curve = r(1820)),
                (i.curves = r(1995)),
                (i.ec = r(2003)),
                (i.eddsa = r(2007));
        },
        1782: function(e, t, r) {
            (function(t) {
                r(1786);
                (e.exports.linebrk = function(e, t) {
                    for (var r = "", i = 0; i + t < e.length; )
                        (r += e.substring(i, i + t) + "\n"), (i += t);
                    return r + e.substring(i, e.length);
                }),
                    (e.exports.detectEnvironment = function() {
                        return (t && "browser" === t.title) ||
                            ("undefined" != typeof window && window)
                            ? "browser"
                            : "node";
                    }),
                    (e.exports.get32IntFromBuffer = function(e, t) {
                        t = t || 0;
                        var r;
                        if ((r = e.length - t) > 0) {
                            if (r >= 4) return e.readUInt32BE(t);
                            for (
                                var i = 0, n = t + r, o = 0;
                                n > t;
                                n--, o += 2
                            )
                                i += e[n - 1] * Math.pow(16, o);
                            return i;
                        }
                        return NaN;
                    }),
                    (e.exports._ = {
                        isObject: function(e) {
                            var t = typeof e;
                            return !!e && ("object" == t || "function" == t);
                        },
                        isString: function(e) {
                            return "string" == typeof e || e instanceof String;
                        },
                        isNumber: function(e) {
                            return (
                                "number" == typeof e ||
                                (!isNaN(parseFloat(e)) && isFinite(e))
                            );
                        },
                        omit: function(e, t) {
                            var r = {};
                            for (var i in e)
                                e.hasOwnProperty(i) && i !== t && (r[i] = e[i]);
                            return r;
                        }
                    });
            }.call(this, r(108)));
        },
        1783: function(e, t) {
            function r(e, t) {
                if (!e) throw new Error(t || "Assertion failed");
            }
            (e.exports = r),
                (r.equal = function(e, t, r) {
                    if (e != t)
                        throw new Error(
                            r || "Assertion failed: " + e + " != " + t
                        );
                });
        },
        1786: function(e, t, r) {
            "use strict";
            (t.randomBytes = t.rng = t.pseudoRandomBytes = t.prng = r(1803)),
                (t.createHash = t.Hash = r(302)),
                (t.createHmac = t.Hmac = r(533));
            var i = r(1963),
                n = Object.keys(i),
                o = [
                    "sha1",
                    "sha224",
                    "sha256",
                    "sha384",
                    "sha512",
                    "md5",
                    "rmd160"
                ].concat(n);
            t.getHashes = function() {
                return o;
            };
            var f = r(1850);
            (t.pbkdf2 = f.pbkdf2), (t.pbkdf2Sync = f.pbkdf2Sync);
            var a = r(1965);
            (t.Cipher = a.Cipher),
                (t.createCipher = a.createCipher),
                (t.Cipheriv = a.Cipheriv),
                (t.createCipheriv = a.createCipheriv),
                (t.Decipher = a.Decipher),
                (t.createDecipher = a.createDecipher),
                (t.Decipheriv = a.Decipheriv),
                (t.createDecipheriv = a.createDecipheriv),
                (t.getCiphers = a.getCiphers),
                (t.listCiphers = a.listCiphers);
            var s = r(1982);
            (t.DiffieHellmanGroup = s.DiffieHellmanGroup),
                (t.createDiffieHellmanGroup = s.createDiffieHellmanGroup),
                (t.getDiffieHellman = s.getDiffieHellman),
                (t.createDiffieHellman = s.createDiffieHellman),
                (t.DiffieHellman = s.DiffieHellman);
            var c = r(1987);
            (t.createSign = c.createSign),
                (t.Sign = c.Sign),
                (t.createVerify = c.createVerify),
                (t.Verify = c.Verify),
                (t.createECDH = r(2024));
            var h = r(2025);
            (t.publicEncrypt = h.publicEncrypt),
                (t.privateEncrypt = h.privateEncrypt),
                (t.publicDecrypt = h.publicDecrypt),
                (t.privateDecrypt = h.privateDecrypt);
            var d = r(2028);
            (t.randomFill = d.randomFill),
                (t.randomFillSync = d.randomFillSync),
                (t.createCredentials = function() {
                    throw new Error(
                        [
                            "sorry, createCredentials is not implemented yet",
                            "we accept pull requests",
                            "https://github.com/crypto-browserify/crypto-browserify"
                        ].join("\n")
                    );
                }),
                (t.constants = {
                    DH_CHECK_P_NOT_SAFE_PRIME: 2,
                    DH_CHECK_P_NOT_PRIME: 1,
                    DH_UNABLE_TO_CHECK_GENERATOR: 4,
                    DH_NOT_SUITABLE_GENERATOR: 8,
                    NPN_ENABLED: 1,
                    ALPN_ENABLED: 1,
                    RSA_PKCS1_PADDING: 1,
                    RSA_SSLV23_PADDING: 2,
                    RSA_NO_PADDING: 3,
                    RSA_PKCS1_OAEP_PADDING: 4,
                    RSA_X931_PADDING: 5,
                    RSA_PKCS1_PSS_PADDING: 6,
                    POINT_CONVERSION_COMPRESSED: 2,
                    POINT_CONVERSION_UNCOMPRESSED: 4,
                    POINT_CONVERSION_HYBRID: 6
                });
        },
        1787: function(e, t, r) {
            "use strict";
            var i = r(1783),
                n = r(86);
            function o(e) {
                return (
                    ((e >>> 24) |
                        ((e >>> 8) & 65280) |
                        ((e << 8) & 16711680) |
                        ((255 & e) << 24)) >>>
                    0
                );
            }
            function f(e) {
                return 1 === e.length ? "0" + e : e;
            }
            function a(e) {
                return 7 === e.length
                    ? "0" + e
                    : 6 === e.length
                        ? "00" + e
                        : 5 === e.length
                            ? "000" + e
                            : 4 === e.length
                                ? "0000" + e
                                : 3 === e.length
                                    ? "00000" + e
                                    : 2 === e.length
                                        ? "000000" + e
                                        : 1 === e.length
                                            ? "0000000" + e
                                            : e;
            }
            (t.inherits = n),
                (t.toArray = function(e, t) {
                    if (Array.isArray(e)) return e.slice();
                    if (!e) return [];
                    var r = [];
                    if ("string" == typeof e)
                        if (t) {
                            if ("hex" === t)
                                for (
                                    (e = e.replace(/[^a-z0-9]+/gi, "")).length %
                                        2 !=
                                        0 && (e = "0" + e),
                                        i = 0;
                                    i < e.length;
                                    i += 2
                                )
                                    r.push(parseInt(e[i] + e[i + 1], 16));
                        } else
                            for (var i = 0; i < e.length; i++) {
                                var n = e.charCodeAt(i),
                                    o = n >> 8,
                                    f = 255 & n;
                                o ? r.push(o, f) : r.push(f);
                            }
                    else for (i = 0; i < e.length; i++) r[i] = 0 | e[i];
                    return r;
                }),
                (t.toHex = function(e) {
                    for (var t = "", r = 0; r < e.length; r++)
                        t += f(e[r].toString(16));
                    return t;
                }),
                (t.htonl = o),
                (t.toHex32 = function(e, t) {
                    for (var r = "", i = 0; i < e.length; i++) {
                        var n = e[i];
                        "little" === t && (n = o(n)), (r += a(n.toString(16)));
                    }
                    return r;
                }),
                (t.zero2 = f),
                (t.zero8 = a),
                (t.join32 = function(e, t, r, n) {
                    var o = r - t;
                    i(o % 4 == 0);
                    for (
                        var f = new Array(o / 4), a = 0, s = t;
                        a < f.length;
                        a++, s += 4
                    ) {
                        var c;
                        (c =
                            "big" === n
                                ? (e[s] << 24) |
                                  (e[s + 1] << 16) |
                                  (e[s + 2] << 8) |
                                  e[s + 3]
                                : (e[s + 3] << 24) |
                                  (e[s + 2] << 16) |
                                  (e[s + 1] << 8) |
                                  e[s]),
                            (f[a] = c >>> 0);
                    }
                    return f;
                }),
                (t.split32 = function(e, t) {
                    for (
                        var r = new Array(4 * e.length), i = 0, n = 0;
                        i < e.length;
                        i++, n += 4
                    ) {
                        var o = e[i];
                        "big" === t
                            ? ((r[n] = o >>> 24),
                              (r[n + 1] = (o >>> 16) & 255),
                              (r[n + 2] = (o >>> 8) & 255),
                              (r[n + 3] = 255 & o))
                            : ((r[n + 3] = o >>> 24),
                              (r[n + 2] = (o >>> 16) & 255),
                              (r[n + 1] = (o >>> 8) & 255),
                              (r[n] = 255 & o));
                    }
                    return r;
                }),
                (t.rotr32 = function(e, t) {
                    return (e >>> t) | (e << (32 - t));
                }),
                (t.rotl32 = function(e, t) {
                    return (e << t) | (e >>> (32 - t));
                }),
                (t.sum32 = function(e, t) {
                    return (e + t) >>> 0;
                }),
                (t.sum32_3 = function(e, t, r) {
                    return (e + t + r) >>> 0;
                }),
                (t.sum32_4 = function(e, t, r, i) {
                    return (e + t + r + i) >>> 0;
                }),
                (t.sum32_5 = function(e, t, r, i, n) {
                    return (e + t + r + i + n) >>> 0;
                }),
                (t.sum64 = function(e, t, r, i) {
                    var n = e[t],
                        o = (i + e[t + 1]) >>> 0,
                        f = (o < i ? 1 : 0) + r + n;
                    (e[t] = f >>> 0), (e[t + 1] = o);
                }),
                (t.sum64_hi = function(e, t, r, i) {
                    return (((t + i) >>> 0 < t ? 1 : 0) + e + r) >>> 0;
                }),
                (t.sum64_lo = function(e, t, r, i) {
                    return (t + i) >>> 0;
                }),
                (t.sum64_4_hi = function(e, t, r, i, n, o, f, a) {
                    var s = 0,
                        c = t;
                    return (
                        (s += (c = (c + i) >>> 0) < t ? 1 : 0),
                        (s += (c = (c + o) >>> 0) < o ? 1 : 0),
                        (e +
                            r +
                            n +
                            f +
                            (s += (c = (c + a) >>> 0) < a ? 1 : 0)) >>>
                            0
                    );
                }),
                (t.sum64_4_lo = function(e, t, r, i, n, o, f, a) {
                    return (t + i + o + a) >>> 0;
                }),
                (t.sum64_5_hi = function(e, t, r, i, n, o, f, a, s, c) {
                    var h = 0,
                        d = t;
                    return (
                        (h += (d = (d + i) >>> 0) < t ? 1 : 0),
                        (h += (d = (d + o) >>> 0) < o ? 1 : 0),
                        (h += (d = (d + a) >>> 0) < a ? 1 : 0),
                        (e +
                            r +
                            n +
                            f +
                            s +
                            (h += (d = (d + c) >>> 0) < c ? 1 : 0)) >>>
                            0
                    );
                }),
                (t.sum64_5_lo = function(e, t, r, i, n, o, f, a, s, c) {
                    return (t + i + o + a + c) >>> 0;
                }),
                (t.rotr64_hi = function(e, t, r) {
                    return ((t << (32 - r)) | (e >>> r)) >>> 0;
                }),
                (t.rotr64_lo = function(e, t, r) {
                    return ((e << (32 - r)) | (t >>> r)) >>> 0;
                }),
                (t.shr64_hi = function(e, t, r) {
                    return e >>> r;
                }),
                (t.shr64_lo = function(e, t, r) {
                    return ((e << (32 - r)) | (t >>> r)) >>> 0;
                });
        },
        1796: function(e, t, r) {
            var i = r(29),
                n = r(1797),
                o = {},
                f = {},
                a = {};
            function s(e, t, r, i) {
                o[e] || (o[e] = []),
                    f[e] || (f[e] = []),
                    o[e].push(t),
                    f[e].push([r, t, new Date(i)]),
                    a[e] || (a[e] = {}),
                    a[e][r] || (a[e][r] = {deposit: [], withdrawal: []}),
                    a[e][r][t > 0 ? "deposit" : "withdrawal"].push(t);
            }
            function c(e, t, r, i, o, f, a, c, h) {
                return (
                    r || (r = {amount: "", currency: ""}),
                    i || (i = {amount: "", currency: ""}),
                    o || (o = {amount: "", currency: ""}),
                    r.amount && s(r.currency, r.amount, a, f),
                    i.amount && s(i.currency, -i.amount, a, f),
                    o.amount && s(o.currency, -o.amount, a, f),
                    e.push([
                        t,
                        n.printAmount(r),
                        r.currency,
                        n.printAmount(i),
                        i.currency,
                        n.printAmount(o),
                        o.currency,
                        "BTS-DEX",
                        h || "",
                        c || "",
                        f
                    ]),
                    e
                );
            }
            e.exports = {
                parseData: function(e, t, r) {
                    var i = [];
                    i.push([
                        "Type",
                        "Buy Amount",
                        "Buy Currency",
                        "Sell Amount",
                        "Sell Currency",
                        "Fee Amount",
                        "Fee Currency",
                        "Exchange",
                        "Trade Group",
                        "Comment",
                        "Date"
                    ]);
                    var o = {};
                    function f(e) {
                        o[e] || (o[e] = 0), o[e]++;
                    }
                    var a = Object.keys(e),
                        s = Array.isArray(a),
                        h = 0;
                    for (a = s ? a : a[Symbol.iterator](); ; ) {
                        var d;
                        if (s) {
                            if (h >= a.length) break;
                            d = a[h++];
                        } else {
                            if ((h = a.next()).done) break;
                            d = h.value;
                        }
                        var u = e[d],
                            p = u.timestamp,
                            l = u.type,
                            b = u.data,
                            m = null;
                        switch (l) {
                            case "vesting_balance_withdraw":
                                var y = n.parseCurrency(b.amount);
                                (m = n.parseCurrency(b.fee)),
                                    (i = c(
                                        i,
                                        "1.2.30665" === b.owner &&
                                        y.amount > 1e4
                                            ? "Income"
                                            : "Deposit",
                                        y,
                                        null,
                                        m,
                                        p,
                                        l,
                                        r + " : Vesting balance withdraw"
                                    )),
                                    f(l);
                                break;
                            case "balance_claim":
                                (i = c(
                                    i,
                                    "Deposit",
                                    n.parseCurrency(b.total_claimed),
                                    null,
                                    null,
                                    p,
                                    l,
                                    r + " : Balance claim"
                                )),
                                    f(l);
                                break;
                            case "transfer":
                                var v = n.parseCurrency(b.amount);
                                (m = n.parseCurrency(b.fee)),
                                    (i =
                                        b.to == t
                                            ? c(
                                                  i,
                                                  "1.2.391938" === b.to &&
                                                  "1.2.381086" === b.from
                                                      ? "Income"
                                                      : "Deposit",
                                                  v,
                                                  null,
                                                  null,
                                                  p,
                                                  l,
                                                  r + " : From " + b.from
                                              )
                                            : c(
                                                  i,
                                                  "Withdrawal",
                                                  null,
                                                  v,
                                                  m,
                                                  p,
                                                  l,
                                                  r + ": To " + b.to
                                              )),
                                    f(l);
                                break;
                            case "fill_order":
                                var g = n.parseCurrency(b.pays),
                                    _ = n.parseCurrency(b.receives);
                                "BTS" !==
                                    (m = n.parseCurrency(b.fee)).currency &&
                                    (_.currency === m.currency
                                        ? ((_.amount -= m.amount),
                                          (m.amount = 0))
                                        : g.currency === m.currency &&
                                          ((g.amount -= m.amount),
                                          (m.amount = 0))),
                                    (i = c(i, "Trade", _, g, m, p, l)),
                                    f(l);
                                break;
                            case "asset_issue":
                                var w = n.parseCurrency(b.asset_to_issue);
                                (m =
                                    b.issuer === t
                                        ? n.parseCurrency(b.fee)
                                        : null),
                                    b.issue_to_account === t &&
                                        (i = c(
                                            i,
                                            "Deposit",
                                            w,
                                            null,
                                            m,
                                            p,
                                            l,
                                            r + " : Issued to account"
                                        )),
                                    f(l);
                                break;
                            case "account_update":
                            case "proposal_create":
                            case "proposal_update":
                            case "account_whitelist":
                            case "worker_create":
                            case "limit_order_create":
                            case "limit_order_cancel":
                            case "call_order_update":
                                (m = n.parseCurrency(b.fee)).amount > 0 &&
                                    ((i = c(
                                        i,
                                        "Withdrawal",
                                        null,
                                        m,
                                        null,
                                        p,
                                        l,
                                        l + " fee"
                                    )),
                                    f(l));
                                break;
                            case "account_create":
                                b.registrar === t &&
                                    ((i = c(
                                        i,
                                        "Withdrawal",
                                        null,
                                        (m = n.parseCurrency(b.fee)),
                                        null,
                                        p,
                                        l,
                                        l + " fee"
                                    )),
                                    f(l));
                                break;
                            case "asset_fund_fee_pool":
                                (m = n.parseCurrency(b.fee)),
                                    (i = c(
                                        i,
                                        "Withdrawal",
                                        null,
                                        n.parseCurrency({
                                            amount: b.amount,
                                            asset_id: "1.3.0"
                                        }),
                                        m,
                                        p,
                                        l,
                                        "" + l
                                    )),
                                    f(l);
                                break;
                            default:
                                console.log("Unhandled type:", l, b);
                        }
                    }
                    return i;
                },
                filterEntries: function(e, t, r) {
                    if (!t && !r) return e;
                    for (
                        var i = Object.keys(e), n = i.length - 1;
                        n >= 0;
                        n--
                    ) {
                        var o = i[n],
                            f = e[o],
                            a = f.timestamp,
                            s = f.type;
                        f.data,
                            t && s !== t
                                ? delete e[o]
                                : r && new Date(a).getTime() < r && delete e[o];
                    }
                    return (
                        console.log(
                            "Removed " +
                                (i.length - Object.keys(e).length) +
                                " entries by filtering"
                        ),
                        e
                    );
                },
                groupEntries: function(e) {
                    for (
                        var t = {}, r = Object.keys(e), n = r.length - 1;
                        n >= 0;
                        n--
                    ) {
                        var o = r[n],
                            f = e[o],
                            a = f.timestamp,
                            s = f.type,
                            c = f.data;
                        switch (s) {
                            case "fill_order":
                                var h = i(a),
                                    d =
                                        c.receives.asset_id +
                                        "_" +
                                        c.pays.asset_id,
                                    u = t[d],
                                    p = u ? i(u.timestamp) : null;
                                u &&
                                    h.isSame(p, "day") &&
                                    u.data.pays.asset_id === c.pays.asset_id &&
                                    u.data.receives.asset_id ===
                                        c.receives.asset_id &&
                                    ((c.pays.amount =
                                        parseInt(c.pays.amount, 10) +
                                        parseInt(u.data.pays.amount, 10)),
                                    (c.receives.amount =
                                        parseInt(c.receives.amount, 10) +
                                        parseInt(u.data.receives.amount, 10)),
                                    (c.fee.amount =
                                        parseInt(c.fee.amount, 10) +
                                        parseInt(u.data.fee.amount, 10)),
                                    (e[o].data = c),
                                    delete e[u.trx_id]),
                                    (t[d] = {data: c, timestamp: a, trx_id: o});
                        }
                    }
                    return (
                        console.log(
                            "Removed " +
                                (r.length - Object.keys(e).length) +
                                " fill_order entries by grouping"
                        ),
                        e
                    );
                }
            };
        },
        1797: function(e, t, r) {
            var i = r(10).ChainStore;
            e.exports = {
                parseCurrency: function(e) {
                    var t = i.getAsset(e.asset_id),
                        r = (function(e) {
                            if ("number" != typeof e)
                                throw new Error("Input must be a number");
                            return Math.pow(10, e);
                        })((t = t ? t.toJS() : {precision: 5}).precision);
                    return {
                        amount: e.amount / r,
                        currency: t.symbol,
                        asset_id: e.asset_id
                    };
                },
                printAmount: function(e) {
                    if (!e.amount || !e.currency) return "";
                    var t = i.getAsset(e.asset_id);
                    return (
                        (t = t ? t.toJS() : {precision: 5}),
                        e.amount.toFixed(t.precision)
                    );
                },
                getIndex: function(e) {
                    var t = e.split(".");
                    return parseInt(t[2], 10);
                }
            };
        },
        1798: function(e, t, r) {
            var i = r(1799),
                n = r(13),
                o = r(10),
                f = o.ChainTypes,
                a = o.ChainStore,
                s = o.FetchChain,
                c = f.operations,
                h = Object.keys(c),
                d = {},
                u = {};
            function p(e) {
                return new Promise(function(t, r) {
                    if (d[e]) return t(d[e]);
                    n.Apis.instance()
                        .db_api()
                        .exec("get_block", [e])
                        .then(function(r) {
                            (d[e] = new Date(r.timestamp + "Z")), t(d[e]);
                        })
                        .catch(r);
                });
            }
            function l(e) {
                return new Promise(function(t, r) {
                    var i;
                    if (u[e]) return t(u[e]);
                    s("getObject", e, void 0, ((i = {}), (i[e] = !1), i))
                        .then(function(r) {
                            var i = r.toJS();
                            (u[e] = {
                                symbol: i.symbol.replace(
                                    /OPEN\.|BRIDGE\.|RUDEX\.|GDEX\.|BLOCK\./,
                                    ""
                                ),
                                precision: i.precision
                            }),
                                t(u[e]);
                        })
                        .catch(function(e) {
                            r();
                        });
                });
            }
            e.exports = {
                connect: function() {
                    return new Promise(function(e) {
                        n.Apis.instance(i.apiNode, !0)
                            .init_promise.then(function(t) {
                                a.init(!1).then(function() {
                                    e(t);
                                });
                            })
                            .catch(function(e) {
                                console.error("Error connection to node:", e);
                            });
                    });
                },
                disconnect: function() {
                    n.Apis.instance().close();
                },
                getUser: function(e) {
                    return new Promise(function(t, r) {
                        var i;
                        s("getAccount", e, void 0, ((i = {}), (i[e] = !1), i))
                            .then(function(e) {
                                var r = e.toJS();
                                r.balances || (r.balances = {}),
                                    r.call_orders || (r.call_orders = []);
                                var i = Object.keys(r.balances);
                                t({
                                    accountId: r.id,
                                    assets: i,
                                    balances: r.balances
                                });
                            })
                            .catch(r);
                    });
                },
                getBlockTime: p,
                getAssetData: l,
                resolveAssets: function(e, t) {
                    return new Promise(function(r, i) {
                        var n = [],
                            o = {};
                        e &&
                            e.forEach(function(e) {
                                switch (h[e.op[0]]) {
                                    case "transfer":
                                        (o[e.op[1].amount.asset_id] = !0),
                                            (o[e.op[1].fee.asset_id] = !0);
                                        break;
                                    case "fill_order":
                                        (o[e.op[1].pays.asset_id] = !0),
                                            (o[e.op[1].receives.asset_id] = !0),
                                            (o[e.op[1].fee.asset_id] = !0);
                                        break;
                                    case "asset_issue":
                                        (o[
                                            e.op[1].asset_to_issue.asset_id
                                        ] = !0),
                                            (o[e.op[1].fee.asset_id] = !0);
                                }
                            }),
                            t &&
                                t.forEach(function(e) {
                                    o[e] = !0;
                                }),
                            Object.keys(o).forEach(function(e) {
                                !u[e] && e && n.push(l(e));
                            }),
                            Promise.all(n)
                                .then(r)
                                .catch(i);
                    });
                },
                resolveBlockTimes: function(e) {
                    return new Promise(function(t, r) {
                        var i = e.map(function(e) {
                            return (
                                e.block_time &&
                                    (d[e.block_num] = new Date(e.block_time)),
                                p(e.block_num)
                            );
                        });
                        Promise.all(i)
                            .then(t)
                            .catch(r);
                    });
                },
                getAsset: function(e) {
                    return u[e];
                },
                getBlock: function(e) {
                    return d[e];
                }
            };
        },
        1799: function(e, t) {
            e.exports = {
                apiNode: "wss://eu.nodes.bitshares.ws",
                useES: !0,
                esNode: "https://eswrapper.bitshares.eu",
                botPaymentAccounts: []
            };
        },
        1800: function(e, t, r) {
            var i = r(13),
                n = void 0;
            e.exports = function(e) {
                return (
                    (n = e ? fetch : r(1801)),
                    {
                        getAccountHistory: function(e, t, r, n) {
                            return new Promise(function(o, f) {
                                i.Apis.instance()
                                    .history_api()
                                    .exec("get_account_history", [e, t, r, n])
                                    .then(function(e) {
                                        o(e);
                                    })
                                    .catch(f);
                            });
                        },
                        getAccountHistoryES: function(e, t, r) {
                            var i =
                                arguments.length > 3 && void 0 !== arguments[3]
                                    ? arguments[3]
                                    : "https://eswrapper.bitshares.eu";
                            return (
                                console.log(
                                    "query",
                                    i +
                                        "/get_account_history?account_id=" +
                                        e +
                                        "&from_=" +
                                        r +
                                        "&size=" +
                                        t +
                                        "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
                                ),
                                new Promise(function(o, f) {
                                    n(
                                        i +
                                            "/get_account_history?account_id=" +
                                            e +
                                            "&from_=" +
                                            r +
                                            "&size=" +
                                            t +
                                            "&sort_by=block_data.block_time&type=data&agg_field=operation_type"
                                    )
                                        .then(function(e) {
                                            return e.json();
                                        })
                                        .then(function(e) {
                                            var t = e.map(function(e) {
                                                return {
                                                    id:
                                                        e.account_history
                                                            .operation_id,
                                                    op: JSON.parse(
                                                        e.operation_history.op
                                                    ),
                                                    result: JSON.parse(
                                                        e.operation_history
                                                            .operation_result
                                                    ),
                                                    block_num:
                                                        e.block_data.block_num,
                                                    block_time:
                                                        e.block_data
                                                            .block_time + "Z"
                                                };
                                            });
                                            o(t);
                                        })
                                        .catch(function() {
                                            o([]);
                                        });
                                })
                            );
                        }
                    }
                );
            };
        },
        1801: function(e, t) {},
        1803: function(e, t, r) {
            "use strict";
            (function(t, i) {
                var n = r(60).Buffer,
                    o = t.crypto || t.msCrypto;
                o && o.getRandomValues
                    ? (e.exports = function(e, r) {
                          if (e > 65536)
                              throw new Error(
                                  "requested too many random bytes"
                              );
                          var f = new t.Uint8Array(e);
                          e > 0 && o.getRandomValues(f);
                          var a = n.from(f.buffer);
                          if ("function" == typeof r)
                              return i.nextTick(function() {
                                  r(null, a);
                              });
                          return a;
                      })
                    : (e.exports = function() {
                          throw new Error(
                              "Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11"
                          );
                      });
            }.call(this, r(53), r(108)));
        },
        1804: function(e, t, r) {
            e.exports = {
                pkcs1: r(2029),
                pkcs1_oaep: r(2030),
                pss: r(2031),
                isEncryption: function(t) {
                    return e.exports[t] && e.exports[t].isEncryption;
                },
                isSignature: function(t) {
                    return e.exports[t] && e.exports[t].isSignature;
                }
            };
        },
        1807: function(e, t, r) {
            var i = r(1796),
                n = i.groupEntries,
                o = i.parseData,
                f = r(1798),
                a = f.resolveBlockTimes,
                s = f.resolveAssets,
                c = r(1800)(!0),
                h = c.getAccountHistoryES,
                d = c.getAccountHistory;
            e.exports = {
                groupEntries: n,
                parseData: o,
                getAccountHistoryES: h,
                getAccountHistory: d,
                resolveBlockTimes: a,
                resolveAssets: s
            };
        },
        1808: function(e, t, r) {
            (function(t) {
                e.exports = function(e, r) {
                    for (
                        var i = Math.min(e.length, r.length),
                            n = new t(i),
                            o = 0;
                        o < i;
                        ++o
                    )
                        n[o] = e[o] ^ r[o];
                    return n;
                };
            }.call(this, r(114).Buffer));
        },
        1809: function(e, t, r) {
            "use strict";
            var i = r(1787),
                n = r(1783);
            function o() {
                (this.pending = null),
                    (this.pendingTotal = 0),
                    (this.blockSize = this.constructor.blockSize),
                    (this.outSize = this.constructor.outSize),
                    (this.hmacStrength = this.constructor.hmacStrength),
                    (this.padLength = this.constructor.padLength / 8),
                    (this.endian = "big"),
                    (this._delta8 = this.blockSize / 8),
                    (this._delta32 = this.blockSize / 32);
            }
            (t.BlockHash = o),
                (o.prototype.update = function(e, t) {
                    if (
                        ((e = i.toArray(e, t)),
                        this.pending
                            ? (this.pending = this.pending.concat(e))
                            : (this.pending = e),
                        (this.pendingTotal += e.length),
                        this.pending.length >= this._delta8)
                    ) {
                        var r = (e = this.pending).length % this._delta8;
                        (this.pending = e.slice(e.length - r, e.length)),
                            0 === this.pending.length && (this.pending = null),
                            (e = i.join32(e, 0, e.length - r, this.endian));
                        for (var n = 0; n < e.length; n += this._delta32)
                            this._update(e, n, n + this._delta32);
                    }
                    return this;
                }),
                (o.prototype.digest = function(e) {
                    return (
                        this.update(this._pad()),
                        n(null === this.pending),
                        this._digest(e)
                    );
                }),
                (o.prototype._pad = function() {
                    var e = this.pendingTotal,
                        t = this._delta8,
                        r = t - ((e + this.padLength) % t),
                        i = new Array(r + this.padLength);
                    i[0] = 128;
                    for (var n = 1; n < r; n++) i[n] = 0;
                    if (((e <<= 3), "big" === this.endian)) {
                        for (var o = 8; o < this.padLength; o++) i[n++] = 0;
                        (i[n++] = 0),
                            (i[n++] = 0),
                            (i[n++] = 0),
                            (i[n++] = 0),
                            (i[n++] = (e >>> 24) & 255),
                            (i[n++] = (e >>> 16) & 255),
                            (i[n++] = (e >>> 8) & 255),
                            (i[n++] = 255 & e);
                    } else
                        for (
                            i[n++] = 255 & e,
                                i[n++] = (e >>> 8) & 255,
                                i[n++] = (e >>> 16) & 255,
                                i[n++] = (e >>> 24) & 255,
                                i[n++] = 0,
                                i[n++] = 0,
                                i[n++] = 0,
                                i[n++] = 0,
                                o = 8;
                            o < this.padLength;
                            o++
                        )
                            i[n++] = 0;
                    return i;
                });
        },
        1810: function(e, t, r) {
            var i = t;
            (i.bignum = r(1777)),
                (i.define = r(2011).define),
                (i.base = r(1811)),
                (i.constants = r(1867)),
                (i.decoders = r(2016)),
                (i.encoders = r(2018));
        },
        1811: function(e, t, r) {
            var i = t;
            (i.Reporter = r(2013).Reporter),
                (i.DecoderBuffer = r(1866).DecoderBuffer),
                (i.EncoderBuffer = r(1866).EncoderBuffer),
                (i.Node = r(2014));
        },
        1812: function(e, t, r) {
            (function(t) {
                var i = r(1786),
                    n = r(1782)._;
                function o(e, r) {
                    null != e &&
                        ("number" == typeof e
                            ? this.fromNumber(e, r)
                            : t.isBuffer(e)
                                ? this.fromBuffer(e)
                                : null == r && "string" != typeof e
                                    ? this.fromByteArray(e)
                                    : this.fromString(e, r));
                }
                function f() {
                    return new o(null);
                }
                (o.prototype.am = function(e, t, r, i, n, o) {
                    for (var f = 16383 & t, a = t >> 14; --o >= 0; ) {
                        var s = 16383 & this[e],
                            c = this[e++] >> 14,
                            h = a * s + c * f;
                        (n =
                            ((s = f * s + ((16383 & h) << 14) + r[i] + n) >>
                                28) +
                            (h >> 14) +
                            a * c),
                            (r[i++] = 268435455 & s);
                    }
                    return n;
                }),
                    (o.prototype.DB = 28),
                    (o.prototype.DM = 268435455),
                    (o.prototype.DV = 1 << 28);
                (o.prototype.FV = Math.pow(2, 52)),
                    (o.prototype.F1 = 24),
                    (o.prototype.F2 = 4);
                var a,
                    s,
                    c = "0123456789abcdefghijklmnopqrstuvwxyz",
                    h = new Array();
                for (a = "0".charCodeAt(0), s = 0; s <= 9; ++s) h[a++] = s;
                for (a = "a".charCodeAt(0), s = 10; s < 36; ++s) h[a++] = s;
                for (a = "A".charCodeAt(0), s = 10; s < 36; ++s) h[a++] = s;
                function d(e) {
                    return c.charAt(e);
                }
                function u(e, t) {
                    var r = h[e.charCodeAt(t)];
                    return null == r ? -1 : r;
                }
                function p(e) {
                    var t = f();
                    return t.fromInt(e), t;
                }
                function l(e) {
                    var t,
                        r = 1;
                    return (
                        0 != (t = e >>> 16) && ((e = t), (r += 16)),
                        0 != (t = e >> 8) && ((e = t), (r += 8)),
                        0 != (t = e >> 4) && ((e = t), (r += 4)),
                        0 != (t = e >> 2) && ((e = t), (r += 2)),
                        0 != (t = e >> 1) && ((e = t), (r += 1)),
                        r
                    );
                }
                function b(e) {
                    this.m = e;
                }
                function m(e) {
                    (this.m = e),
                        (this.mp = e.invDigit()),
                        (this.mpl = 32767 & this.mp),
                        (this.mph = this.mp >> 15),
                        (this.um = (1 << (e.DB - 15)) - 1),
                        (this.mt2 = 2 * e.t);
                }
                function y(e, t) {
                    return e & t;
                }
                function v(e, t) {
                    return e | t;
                }
                function g(e, t) {
                    return e ^ t;
                }
                function _(e, t) {
                    return e & ~t;
                }
                function w(e) {
                    if (0 === e) return -1;
                    var t = 0;
                    return (
                        0 == (65535 & e) && ((e >>= 16), (t += 16)),
                        0 == (255 & e) && ((e >>= 8), (t += 8)),
                        0 == (15 & e) && ((e >>= 4), (t += 4)),
                        0 == (3 & e) && ((e >>= 2), (t += 2)),
                        0 == (1 & e) && ++t,
                        t
                    );
                }
                function S(e) {
                    for (var t = 0; 0 != e; ) (e &= e - 1), ++t;
                    return t;
                }
                function E() {}
                function M(e) {
                    return e;
                }
                function A(e) {
                    (this.r2 = f()),
                        (this.q3 = f()),
                        o.ONE.dlShiftTo(2 * e.t, this.r2),
                        (this.mu = this.r2.divide(e)),
                        (this.m = e);
                }
                (b.prototype.convert = function(e) {
                    return e.s < 0 || e.compareTo(this.m) >= 0
                        ? e.mod(this.m)
                        : e;
                }),
                    (b.prototype.revert = function(e) {
                        return e;
                    }),
                    (b.prototype.reduce = function(e) {
                        e.divRemTo(this.m, null, e);
                    }),
                    (b.prototype.mulTo = function(e, t, r) {
                        e.multiplyTo(t, r), this.reduce(r);
                    }),
                    (b.prototype.sqrTo = function(e, t) {
                        e.squareTo(t), this.reduce(t);
                    }),
                    (m.prototype.convert = function(e) {
                        var t = f();
                        return (
                            e.abs().dlShiftTo(this.m.t, t),
                            t.divRemTo(this.m, null, t),
                            e.s < 0 &&
                                t.compareTo(o.ZERO) > 0 &&
                                this.m.subTo(t, t),
                            t
                        );
                    }),
                    (m.prototype.revert = function(e) {
                        var t = f();
                        return e.copyTo(t), this.reduce(t), t;
                    }),
                    (m.prototype.reduce = function(e) {
                        for (; e.t <= this.mt2; ) e[e.t++] = 0;
                        for (var t = 0; t < this.m.t; ++t) {
                            var r = 32767 & e[t],
                                i =
                                    (r * this.mpl +
                                        (((r * this.mph +
                                            (e[t] >> 15) * this.mpl) &
                                            this.um) <<
                                            15)) &
                                    e.DM;
                            for (
                                e[(r = t + this.m.t)] += this.m.am(
                                    0,
                                    i,
                                    e,
                                    t,
                                    0,
                                    this.m.t
                                );
                                e[r] >= e.DV;

                            )
                                (e[r] -= e.DV), e[++r]++;
                        }
                        e.clamp(),
                            e.drShiftTo(this.m.t, e),
                            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
                    }),
                    (m.prototype.mulTo = function(e, t, r) {
                        e.multiplyTo(t, r), this.reduce(r);
                    }),
                    (m.prototype.sqrTo = function(e, t) {
                        e.squareTo(t), this.reduce(t);
                    }),
                    (E.prototype.convert = M),
                    (E.prototype.revert = M),
                    (E.prototype.mulTo = function(e, t, r) {
                        e.multiplyTo(t, r);
                    }),
                    (E.prototype.sqrTo = function(e, t) {
                        e.squareTo(t);
                    }),
                    (A.prototype.convert = function(e) {
                        if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
                        if (e.compareTo(this.m) < 0) return e;
                        var t = f();
                        return e.copyTo(t), this.reduce(t), t;
                    }),
                    (A.prototype.revert = function(e) {
                        return e;
                    }),
                    (A.prototype.reduce = function(e) {
                        for (
                            e.drShiftTo(this.m.t - 1, this.r2),
                                e.t > this.m.t + 1 &&
                                    ((e.t = this.m.t + 1), e.clamp()),
                                this.mu.multiplyUpperTo(
                                    this.r2,
                                    this.m.t + 1,
                                    this.q3
                                ),
                                this.m.multiplyLowerTo(
                                    this.q3,
                                    this.m.t + 1,
                                    this.r2
                                );
                            e.compareTo(this.r2) < 0;

                        )
                            e.dAddOffset(1, this.m.t + 1);
                        for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
                            e.subTo(this.m, e);
                    }),
                    (A.prototype.mulTo = function(e, t, r) {
                        e.multiplyTo(t, r), this.reduce(r);
                    }),
                    (A.prototype.sqrTo = function(e, t) {
                        e.squareTo(t), this.reduce(t);
                    });
                var I = [
                        2,
                        3,
                        5,
                        7,
                        11,
                        13,
                        17,
                        19,
                        23,
                        29,
                        31,
                        37,
                        41,
                        43,
                        47,
                        53,
                        59,
                        61,
                        67,
                        71,
                        73,
                        79,
                        83,
                        89,
                        97,
                        101,
                        103,
                        107,
                        109,
                        113,
                        127,
                        131,
                        137,
                        139,
                        149,
                        151,
                        157,
                        163,
                        167,
                        173,
                        179,
                        181,
                        191,
                        193,
                        197,
                        199,
                        211,
                        223,
                        227,
                        229,
                        233,
                        239,
                        241,
                        251,
                        257,
                        263,
                        269,
                        271,
                        277,
                        281,
                        283,
                        293,
                        307,
                        311,
                        313,
                        317,
                        331,
                        337,
                        347,
                        349,
                        353,
                        359,
                        367,
                        373,
                        379,
                        383,
                        389,
                        397,
                        401,
                        409,
                        419,
                        421,
                        431,
                        433,
                        439,
                        443,
                        449,
                        457,
                        461,
                        463,
                        467,
                        479,
                        487,
                        491,
                        499,
                        503,
                        509,
                        521,
                        523,
                        541,
                        547,
                        557,
                        563,
                        569,
                        571,
                        577,
                        587,
                        593,
                        599,
                        601,
                        607,
                        613,
                        617,
                        619,
                        631,
                        641,
                        643,
                        647,
                        653,
                        659,
                        661,
                        673,
                        677,
                        683,
                        691,
                        701,
                        709,
                        719,
                        727,
                        733,
                        739,
                        743,
                        751,
                        757,
                        761,
                        769,
                        773,
                        787,
                        797,
                        809,
                        811,
                        821,
                        823,
                        827,
                        829,
                        839,
                        853,
                        857,
                        859,
                        863,
                        877,
                        881,
                        883,
                        887,
                        907,
                        911,
                        919,
                        929,
                        937,
                        941,
                        947,
                        953,
                        967,
                        971,
                        977,
                        983,
                        991,
                        997
                    ],
                    k = (1 << 26) / I[I.length - 1];
                (o.prototype.copyTo = function(e) {
                    for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
                    (e.t = this.t), (e.s = this.s);
                }),
                    (o.prototype.fromInt = function(e) {
                        (this.t = 1),
                            (this.s = e < 0 ? -1 : 0),
                            e > 0
                                ? (this[0] = e)
                                : e < -1
                                    ? (this[0] = e + DV)
                                    : (this.t = 0);
                    }),
                    (o.prototype.fromString = function(e, t, r) {
                        var i;
                        switch (t) {
                            case 2:
                                i = 1;
                                break;
                            case 4:
                                i = 2;
                                break;
                            case 8:
                                i = 3;
                                break;
                            case 16:
                                i = 4;
                                break;
                            case 32:
                                i = 5;
                                break;
                            case 256:
                                i = 8;
                                break;
                            default:
                                return void this.fromRadix(e, t);
                        }
                        (this.t = 0), (this.s = 0);
                        for (var n = e.length, f = !1, a = 0; --n >= 0; ) {
                            var s = 8 == i ? 255 & e[n] : u(e, n);
                            s < 0
                                ? "-" == e.charAt(n) && (f = !0)
                                : ((f = !1),
                                  0 === a
                                      ? (this[this.t++] = s)
                                      : a + i > this.DB
                                          ? ((this[this.t - 1] |=
                                                (s &
                                                    ((1 << (this.DB - a)) -
                                                        1)) <<
                                                a),
                                            (this[this.t++] =
                                                s >> (this.DB - a)))
                                          : (this[this.t - 1] |= s << a),
                                  (a += i) >= this.DB && (a -= this.DB));
                        }
                        r ||
                            8 != i ||
                            0 == (128 & e[0]) ||
                            ((this.s = -1),
                            a > 0 &&
                                (this[this.t - 1] |=
                                    ((1 << (this.DB - a)) - 1) << a)),
                            this.clamp(),
                            f && o.ZERO.subTo(this, this);
                    }),
                    (o.prototype.fromByteArray = function(e, t) {
                        this.fromString(e, 256, t);
                    }),
                    (o.prototype.fromBuffer = function(e) {
                        this.fromString(e, 256, !0);
                    }),
                    (o.prototype.clamp = function() {
                        for (
                            var e = this.s & this.DM;
                            this.t > 0 && this[this.t - 1] == e;

                        )
                            --this.t;
                    }),
                    (o.prototype.dlShiftTo = function(e, t) {
                        var r;
                        for (r = this.t - 1; r >= 0; --r) t[r + e] = this[r];
                        for (r = e - 1; r >= 0; --r) t[r] = 0;
                        (t.t = this.t + e), (t.s = this.s);
                    }),
                    (o.prototype.drShiftTo = function(e, t) {
                        for (var r = e; r < this.t; ++r) t[r - e] = this[r];
                        (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
                    }),
                    (o.prototype.lShiftTo = function(e, t) {
                        var r,
                            i = e % this.DB,
                            n = this.DB - i,
                            o = (1 << n) - 1,
                            f = Math.floor(e / this.DB),
                            a = (this.s << i) & this.DM;
                        for (r = this.t - 1; r >= 0; --r)
                            (t[r + f + 1] = (this[r] >> n) | a),
                                (a = (this[r] & o) << i);
                        for (r = f - 1; r >= 0; --r) t[r] = 0;
                        (t[f] = a),
                            (t.t = this.t + f + 1),
                            (t.s = this.s),
                            t.clamp();
                    }),
                    (o.prototype.rShiftTo = function(e, t) {
                        t.s = this.s;
                        var r = Math.floor(e / this.DB);
                        if (r >= this.t) t.t = 0;
                        else {
                            var i = e % this.DB,
                                n = this.DB - i,
                                o = (1 << i) - 1;
                            t[0] = this[r] >> i;
                            for (var f = r + 1; f < this.t; ++f)
                                (t[f - r - 1] |= (this[f] & o) << n),
                                    (t[f - r] = this[f] >> i);
                            i > 0 && (t[this.t - r - 1] |= (this.s & o) << n),
                                (t.t = this.t - r),
                                t.clamp();
                        }
                    }),
                    (o.prototype.subTo = function(e, t) {
                        for (
                            var r = 0, i = 0, n = Math.min(e.t, this.t);
                            r < n;

                        )
                            (i += this[r] - e[r]),
                                (t[r++] = i & this.DM),
                                (i >>= this.DB);
                        if (e.t < this.t) {
                            for (i -= e.s; r < this.t; )
                                (i += this[r]),
                                    (t[r++] = i & this.DM),
                                    (i >>= this.DB);
                            i += this.s;
                        } else {
                            for (i += this.s; r < e.t; )
                                (i -= e[r]),
                                    (t[r++] = i & this.DM),
                                    (i >>= this.DB);
                            i -= e.s;
                        }
                        (t.s = i < 0 ? -1 : 0),
                            i < -1
                                ? (t[r++] = this.DV + i)
                                : i > 0 && (t[r++] = i),
                            (t.t = r),
                            t.clamp();
                    }),
                    (o.prototype.multiplyTo = function(e, t) {
                        var r = this.abs(),
                            i = e.abs(),
                            n = r.t;
                        for (t.t = n + i.t; --n >= 0; ) t[n] = 0;
                        for (n = 0; n < i.t; ++n)
                            t[n + r.t] = r.am(0, i[n], t, n, 0, r.t);
                        (t.s = 0),
                            t.clamp(),
                            this.s != e.s && o.ZERO.subTo(t, t);
                    }),
                    (o.prototype.squareTo = function(e) {
                        for (
                            var t = this.abs(), r = (e.t = 2 * t.t);
                            --r >= 0;

                        )
                            e[r] = 0;
                        for (r = 0; r < t.t - 1; ++r) {
                            var i = t.am(r, t[r], e, 2 * r, 0, 1);
                            (e[r + t.t] += t.am(
                                r + 1,
                                2 * t[r],
                                e,
                                2 * r + 1,
                                i,
                                t.t - r - 1
                            )) >= t.DV &&
                                ((e[r + t.t] -= t.DV), (e[r + t.t + 1] = 1));
                        }
                        e.t > 0 &&
                            (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)),
                            (e.s = 0),
                            e.clamp();
                    }),
                    (o.prototype.divRemTo = function(e, t, r) {
                        var i = e.abs();
                        if (!(i.t <= 0)) {
                            var n = this.abs();
                            if (n.t < i.t)
                                return (
                                    null != t && t.fromInt(0),
                                    void (null != r && this.copyTo(r))
                                );
                            null == r && (r = f());
                            var a = f(),
                                s = this.s,
                                c = e.s,
                                h = this.DB - l(i[i.t - 1]);
                            h > 0
                                ? (i.lShiftTo(h, a), n.lShiftTo(h, r))
                                : (i.copyTo(a), n.copyTo(r));
                            var d = a.t,
                                u = a[d - 1];
                            if (0 !== u) {
                                var p =
                                        u * (1 << this.F1) +
                                        (d > 1 ? a[d - 2] >> this.F2 : 0),
                                    b = this.FV / p,
                                    m = (1 << this.F1) / p,
                                    y = 1 << this.F2,
                                    v = r.t,
                                    g = v - d,
                                    _ = null == t ? f() : t;
                                for (
                                    a.dlShiftTo(g, _),
                                        r.compareTo(_) >= 0 &&
                                            ((r[r.t++] = 1), r.subTo(_, r)),
                                        o.ONE.dlShiftTo(d, _),
                                        _.subTo(a, a);
                                    a.t < d;

                                )
                                    a[a.t++] = 0;
                                for (; --g >= 0; ) {
                                    var w =
                                        r[--v] == u
                                            ? this.DM
                                            : Math.floor(
                                                  r[v] * b + (r[v - 1] + y) * m
                                              );
                                    if ((r[v] += a.am(0, w, r, g, 0, d)) < w)
                                        for (
                                            a.dlShiftTo(g, _), r.subTo(_, r);
                                            r[v] < --w;

                                        )
                                            r.subTo(_, r);
                                }
                                null != t &&
                                    (r.drShiftTo(d, t),
                                    s != c && o.ZERO.subTo(t, t)),
                                    (r.t = d),
                                    r.clamp(),
                                    h > 0 && r.rShiftTo(h, r),
                                    s < 0 && o.ZERO.subTo(r, r);
                            }
                        }
                    }),
                    (o.prototype.invDigit = function() {
                        if (this.t < 1) return 0;
                        var e = this[0];
                        if (0 == (1 & e)) return 0;
                        var t = 3 & e;
                        return (t =
                            ((t =
                                ((t =
                                    ((t = (t * (2 - (15 & e) * t)) & 15) *
                                        (2 - (255 & e) * t)) &
                                    255) *
                                    (2 - (((65535 & e) * t) & 65535))) &
                                65535) *
                                (2 - ((e * t) % this.DV))) %
                            this.DV) > 0
                            ? this.DV - t
                            : -t;
                    }),
                    (o.prototype.isEven = function() {
                        return 0 === (this.t > 0 ? 1 & this[0] : this.s);
                    }),
                    (o.prototype.exp = function(e, t) {
                        if (e > 4294967295 || e < 1) return o.ONE;
                        var r = f(),
                            i = f(),
                            n = t.convert(this),
                            a = l(e) - 1;
                        for (n.copyTo(r); --a >= 0; )
                            if ((t.sqrTo(r, i), (e & (1 << a)) > 0))
                                t.mulTo(i, n, r);
                            else {
                                var s = r;
                                (r = i), (i = s);
                            }
                        return t.revert(r);
                    }),
                    (o.prototype.chunkSize = function(e) {
                        return Math.floor((Math.LN2 * this.DB) / Math.log(e));
                    }),
                    (o.prototype.toRadix = function(e) {
                        if (
                            (null == e && (e = 10),
                            0 === this.signum() || e < 2 || e > 36)
                        )
                            return "0";
                        var t = this.chunkSize(e),
                            r = Math.pow(e, t),
                            i = p(r),
                            n = f(),
                            o = f(),
                            a = "";
                        for (this.divRemTo(i, n, o); n.signum() > 0; )
                            (a = (r + o.intValue()).toString(e).substr(1) + a),
                                n.divRemTo(i, n, o);
                        return o.intValue().toString(e) + a;
                    }),
                    (o.prototype.fromRadix = function(e, t) {
                        this.fromInt(0), null == t && (t = 10);
                        for (
                            var r = this.chunkSize(t),
                                i = Math.pow(t, r),
                                n = !1,
                                f = 0,
                                a = 0,
                                s = 0;
                            s < e.length;
                            ++s
                        ) {
                            var c = u(e, s);
                            c < 0
                                ? "-" == e.charAt(s) &&
                                  0 === this.signum() &&
                                  (n = !0)
                                : ((a = t * a + c),
                                  ++f >= r &&
                                      (this.dMultiply(i),
                                      this.dAddOffset(a, 0),
                                      (f = 0),
                                      (a = 0)));
                        }
                        f > 0 &&
                            (this.dMultiply(Math.pow(t, f)),
                            this.dAddOffset(a, 0)),
                            n && o.ZERO.subTo(this, this);
                    }),
                    (o.prototype.fromNumber = function(e, t) {
                        if ("number" == typeof t)
                            if (e < 2) this.fromInt(1);
                            else
                                for (
                                    this.fromNumber(e),
                                        this.testBit(e - 1) ||
                                            this.bitwiseTo(
                                                o.ONE.shiftLeft(e - 1),
                                                v,
                                                this
                                            ),
                                        this.isEven() && this.dAddOffset(1, 0);
                                    !this.isProbablePrime(t);

                                )
                                    this.dAddOffset(2, 0),
                                        this.bitLength() > e &&
                                            this.subTo(
                                                o.ONE.shiftLeft(e - 1),
                                                this
                                            );
                        else {
                            var r = i.randomBytes(1 + (e >> 3)),
                                n = 7 & e;
                            n > 0 ? (r[0] &= (1 << n) - 1) : (r[0] = 0),
                                this.fromByteArray(r);
                        }
                    }),
                    (o.prototype.bitwiseTo = function(e, t, r) {
                        var i,
                            n,
                            o = Math.min(e.t, this.t);
                        for (i = 0; i < o; ++i) r[i] = t(this[i], e[i]);
                        if (e.t < this.t) {
                            for (n = e.s & this.DM, i = o; i < this.t; ++i)
                                r[i] = t(this[i], n);
                            r.t = this.t;
                        } else {
                            for (n = this.s & this.DM, i = o; i < e.t; ++i)
                                r[i] = t(n, e[i]);
                            r.t = e.t;
                        }
                        (r.s = t(this.s, e.s)), r.clamp();
                    }),
                    (o.prototype.changeBit = function(e, t) {
                        var r = o.ONE.shiftLeft(e);
                        return this.bitwiseTo(r, t, r), r;
                    }),
                    (o.prototype.addTo = function(e, t) {
                        for (
                            var r = 0, i = 0, n = Math.min(e.t, this.t);
                            r < n;

                        )
                            (i += this[r] + e[r]),
                                (t[r++] = i & this.DM),
                                (i >>= this.DB);
                        if (e.t < this.t) {
                            for (i += e.s; r < this.t; )
                                (i += this[r]),
                                    (t[r++] = i & this.DM),
                                    (i >>= this.DB);
                            i += this.s;
                        } else {
                            for (i += this.s; r < e.t; )
                                (i += e[r]),
                                    (t[r++] = i & this.DM),
                                    (i >>= this.DB);
                            i += e.s;
                        }
                        (t.s = i < 0 ? -1 : 0),
                            i > 0
                                ? (t[r++] = i)
                                : i < -1 && (t[r++] = this.DV + i),
                            (t.t = r),
                            t.clamp();
                    }),
                    (o.prototype.dMultiply = function(e) {
                        (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
                            ++this.t,
                            this.clamp();
                    }),
                    (o.prototype.dAddOffset = function(e, t) {
                        if (0 !== e) {
                            for (; this.t <= t; ) this[this.t++] = 0;
                            for (this[t] += e; this[t] >= this.DV; )
                                (this[t] -= this.DV),
                                    ++t >= this.t && (this[this.t++] = 0),
                                    ++this[t];
                        }
                    }),
                    (o.prototype.multiplyLowerTo = function(e, t, r) {
                        var i,
                            n = Math.min(this.t + e.t, t);
                        for (r.s = 0, r.t = n; n > 0; ) r[--n] = 0;
                        for (i = r.t - this.t; n < i; ++n)
                            r[n + this.t] = this.am(0, e[n], r, n, 0, this.t);
                        for (i = Math.min(e.t, t); n < i; ++n)
                            this.am(0, e[n], r, n, 0, t - n);
                        r.clamp();
                    }),
                    (o.prototype.multiplyUpperTo = function(e, t, r) {
                        --t;
                        var i = (r.t = this.t + e.t - t);
                        for (r.s = 0; --i >= 0; ) r[i] = 0;
                        for (i = Math.max(t - this.t, 0); i < e.t; ++i)
                            r[this.t + i - t] = this.am(
                                t - i,
                                e[i],
                                r,
                                0,
                                0,
                                this.t + i - t
                            );
                        r.clamp(), r.drShiftTo(1, r);
                    }),
                    (o.prototype.modInt = function(e) {
                        if (e <= 0) return 0;
                        var t = this.DV % e,
                            r = this.s < 0 ? e - 1 : 0;
                        if (this.t > 0)
                            if (0 === t) r = this[0] % e;
                            else
                                for (var i = this.t - 1; i >= 0; --i)
                                    r = (t * r + this[i]) % e;
                        return r;
                    }),
                    (o.prototype.millerRabin = function(e) {
                        var t = this.subtract(o.ONE),
                            r = t.getLowestSetBit();
                        if (r <= 0) return !1;
                        var i = t.shiftRight(r);
                        (e = (e + 1) >> 1) > I.length && (e = I.length);
                        for (var n = f(), a = 0; a < e; ++a) {
                            n.fromInt(I[Math.floor(Math.random() * I.length)]);
                            var s = n.modPow(i, this);
                            if (
                                0 != s.compareTo(o.ONE) &&
                                0 != s.compareTo(t)
                            ) {
                                for (
                                    var c = 1;
                                    c++ < r && 0 != s.compareTo(t);

                                )
                                    if (
                                        0 ===
                                        (s = s.modPowInt(2, this)).compareTo(
                                            o.ONE
                                        )
                                    )
                                        return !1;
                                if (0 != s.compareTo(t)) return !1;
                            }
                        }
                        return !0;
                    }),
                    (o.prototype.toString = function(e) {
                        if (this.s < 0) return "-" + this.negate().toString(e);
                        var t;
                        if (16 == e) t = 4;
                        else if (8 == e) t = 3;
                        else if (2 == e) t = 1;
                        else if (32 == e) t = 5;
                        else {
                            if (4 != e) return this.toRadix(e);
                            t = 2;
                        }
                        var r,
                            i = (1 << t) - 1,
                            n = !1,
                            o = "",
                            f = this.t,
                            a = this.DB - ((f * this.DB) % t);
                        if (f-- > 0)
                            for (
                                a < this.DB &&
                                (r = this[f] >> a) > 0 &&
                                ((n = !0), (o = d(r)));
                                f >= 0;

                            )
                                a < t
                                    ? ((r =
                                          (this[f] & ((1 << a) - 1)) <<
                                          (t - a)),
                                      (r |= this[--f] >> (a += this.DB - t)))
                                    : ((r = (this[f] >> (a -= t)) & i),
                                      a <= 0 && ((a += this.DB), --f)),
                                    r > 0 && (n = !0),
                                    n && (o += d(r));
                        return n ? o : "0";
                    }),
                    (o.prototype.negate = function() {
                        var e = f();
                        return o.ZERO.subTo(this, e), e;
                    }),
                    (o.prototype.abs = function() {
                        return this.s < 0 ? this.negate() : this;
                    }),
                    (o.prototype.compareTo = function(e) {
                        var t = this.s - e.s;
                        if (0 != t) return t;
                        var r = this.t;
                        if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
                        for (; --r >= 0; )
                            if (0 != (t = this[r] - e[r])) return t;
                        return 0;
                    }),
                    (o.prototype.bitLength = function() {
                        return this.t <= 0
                            ? 0
                            : this.DB * (this.t - 1) +
                                  l(this[this.t - 1] ^ (this.s & this.DM));
                    }),
                    (o.prototype.mod = function(e) {
                        var t = f();
                        return (
                            this.abs().divRemTo(e, null, t),
                            this.s < 0 &&
                                t.compareTo(o.ZERO) > 0 &&
                                e.subTo(t, t),
                            t
                        );
                    }),
                    (o.prototype.modPowInt = function(e, t) {
                        var r;
                        return (
                            (r = e < 256 || t.isEven() ? new b(t) : new m(t)),
                            this.exp(e, r)
                        );
                    }),
                    (o.prototype.clone = function() {
                        var e = f();
                        return this.copyTo(e), e;
                    }),
                    (o.prototype.intValue = function() {
                        if (this.s < 0) {
                            if (1 == this.t) return this[0] - this.DV;
                            if (0 === this.t) return -1;
                        } else {
                            if (1 == this.t) return this[0];
                            if (0 === this.t) return 0;
                        }
                        return (
                            ((this[1] & ((1 << (32 - this.DB)) - 1)) <<
                                this.DB) |
                            this[0]
                        );
                    }),
                    (o.prototype.byteValue = function() {
                        return 0 == this.t ? this.s : (this[0] << 24) >> 24;
                    }),
                    (o.prototype.shortValue = function() {
                        return 0 == this.t ? this.s : (this[0] << 16) >> 16;
                    }),
                    (o.prototype.signum = function() {
                        return this.s < 0
                            ? -1
                            : this.t <= 0 || (1 == this.t && this[0] <= 0)
                                ? 0
                                : 1;
                    }),
                    (o.prototype.toByteArray = function() {
                        var e = this.t,
                            t = new Array();
                        t[0] = this.s;
                        var r,
                            i = this.DB - ((e * this.DB) % 8),
                            n = 0;
                        if (e-- > 0)
                            for (
                                i < this.DB &&
                                (r = this[e] >> i) != (this.s & this.DM) >> i &&
                                (t[n++] = r | (this.s << (this.DB - i)));
                                e >= 0;

                            )
                                i < 8
                                    ? ((r =
                                          (this[e] & ((1 << i) - 1)) <<
                                          (8 - i)),
                                      (r |= this[--e] >> (i += this.DB - 8)))
                                    : ((r = (this[e] >> (i -= 8)) & 255),
                                      i <= 0 && ((i += this.DB), --e)),
                                    0 != (128 & r) && (r |= -256),
                                    0 === n &&
                                        (128 & this.s) != (128 & r) &&
                                        ++n,
                                    (n > 0 || r != this.s) && (t[n++] = r);
                        return t;
                    }),
                    (o.prototype.toBuffer = function(e) {
                        var r = new t(this.toByteArray());
                        if (!0 === e && 0 === r[0]) r = r.slice(1);
                        else if (n.isNumber(e)) {
                            if (r.length > e) {
                                for (var i = 0; i < r.length - e; i++)
                                    if (0 !== r[i]) return null;
                                return r.slice(r.length - e);
                            }
                            if (r.length < e) {
                                var o = new t(e);
                                return (
                                    o.fill(0, 0, e - r.length),
                                    r.copy(o, e - r.length),
                                    o
                                );
                            }
                        }
                        return r;
                    }),
                    (o.prototype.equals = function(e) {
                        return 0 == this.compareTo(e);
                    }),
                    (o.prototype.min = function(e) {
                        return this.compareTo(e) < 0 ? this : e;
                    }),
                    (o.prototype.max = function(e) {
                        return this.compareTo(e) > 0 ? this : e;
                    }),
                    (o.prototype.and = function(e) {
                        var t = f();
                        return this.bitwiseTo(e, y, t), t;
                    }),
                    (o.prototype.or = function(e) {
                        var t = f();
                        return this.bitwiseTo(e, v, t), t;
                    }),
                    (o.prototype.xor = function(e) {
                        var t = f();
                        return this.bitwiseTo(e, g, t), t;
                    }),
                    (o.prototype.andNot = function(e) {
                        var t = f();
                        return this.bitwiseTo(e, _, t), t;
                    }),
                    (o.prototype.not = function() {
                        for (var e = f(), t = 0; t < this.t; ++t)
                            e[t] = this.DM & ~this[t];
                        return (e.t = this.t), (e.s = ~this.s), e;
                    }),
                    (o.prototype.shiftLeft = function(e) {
                        var t = f();
                        return (
                            e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t),
                            t
                        );
                    }),
                    (o.prototype.shiftRight = function(e) {
                        var t = f();
                        return (
                            e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t),
                            t
                        );
                    }),
                    (o.prototype.getLowestSetBit = function() {
                        for (var e = 0; e < this.t; ++e)
                            if (0 != this[e]) return e * this.DB + w(this[e]);
                        return this.s < 0 ? this.t * this.DB : -1;
                    }),
                    (o.prototype.bitCount = function() {
                        for (
                            var e = 0, t = this.s & this.DM, r = 0;
                            r < this.t;
                            ++r
                        )
                            e += S(this[r] ^ t);
                        return e;
                    }),
                    (o.prototype.testBit = function(e) {
                        var t = Math.floor(e / this.DB);
                        return t >= this.t
                            ? 0 != this.s
                            : 0 != (this[t] & (1 << e % this.DB));
                    }),
                    (o.prototype.setBit = function(e) {
                        return this.changeBit(e, v);
                    }),
                    (o.prototype.clearBit = function(e) {
                        return this.changeBit(e, _);
                    }),
                    (o.prototype.flipBit = function(e) {
                        return this.changeBit(e, g);
                    }),
                    (o.prototype.add = function(e) {
                        var t = f();
                        return this.addTo(e, t), t;
                    }),
                    (o.prototype.subtract = function(e) {
                        var t = f();
                        return this.subTo(e, t), t;
                    }),
                    (o.prototype.multiply = function(e) {
                        var t = f();
                        return this.multiplyTo(e, t), t;
                    }),
                    (o.prototype.divide = function(e) {
                        var t = f();
                        return this.divRemTo(e, t, null), t;
                    }),
                    (o.prototype.remainder = function(e) {
                        var t = f();
                        return this.divRemTo(e, null, t), t;
                    }),
                    (o.prototype.divideAndRemainder = function(e) {
                        var t = f(),
                            r = f();
                        return this.divRemTo(e, t, r), new Array(t, r);
                    }),
                    (o.prototype.modPow = function(e, t) {
                        var r,
                            i,
                            n = e.bitLength(),
                            o = p(1);
                        if (n <= 0) return o;
                        (r =
                            n < 18
                                ? 1
                                : n < 48
                                    ? 3
                                    : n < 144
                                        ? 4
                                        : n < 768
                                            ? 5
                                            : 6),
                            (i =
                                n < 8
                                    ? new b(t)
                                    : t.isEven()
                                        ? new A(t)
                                        : new m(t));
                        var a = new Array(),
                            s = 3,
                            c = r - 1,
                            h = (1 << r) - 1;
                        if (((a[1] = i.convert(this)), r > 1)) {
                            var d = f();
                            for (i.sqrTo(a[1], d); s <= h; )
                                (a[s] = f()),
                                    i.mulTo(d, a[s - 2], a[s]),
                                    (s += 2);
                        }
                        var u,
                            y,
                            v = e.t - 1,
                            g = !0,
                            _ = f();
                        for (n = l(e[v]) - 1; v >= 0; ) {
                            for (
                                n >= c
                                    ? (u = (e[v] >> (n - c)) & h)
                                    : ((u =
                                          (e[v] & ((1 << (n + 1)) - 1)) <<
                                          (c - n)),
                                      v > 0 &&
                                          (u |= e[v - 1] >> (this.DB + n - c))),
                                    s = r;
                                0 == (1 & u);

                            )
                                (u >>= 1), --s;
                            if (((n -= s) < 0 && ((n += this.DB), --v), g))
                                a[u].copyTo(o), (g = !1);
                            else {
                                for (; s > 1; )
                                    i.sqrTo(o, _), i.sqrTo(_, o), (s -= 2);
                                s > 0
                                    ? i.sqrTo(o, _)
                                    : ((y = o), (o = _), (_ = y)),
                                    i.mulTo(_, a[u], o);
                            }
                            for (; v >= 0 && 0 == (e[v] & (1 << n)); )
                                i.sqrTo(o, _),
                                    (y = o),
                                    (o = _),
                                    (_ = y),
                                    --n < 0 && ((n = this.DB - 1), --v);
                        }
                        return i.revert(o);
                    }),
                    (o.prototype.modInverse = function(e) {
                        var t = e.isEven();
                        if ((this.isEven() && t) || 0 === e.signum())
                            return o.ZERO;
                        for (
                            var r = e.clone(),
                                i = this.clone(),
                                n = p(1),
                                f = p(0),
                                a = p(0),
                                s = p(1);
                            0 != r.signum();

                        ) {
                            for (; r.isEven(); )
                                r.rShiftTo(1, r),
                                    t
                                        ? ((n.isEven() && f.isEven()) ||
                                              (n.addTo(this, n), f.subTo(e, f)),
                                          n.rShiftTo(1, n))
                                        : f.isEven() || f.subTo(e, f),
                                    f.rShiftTo(1, f);
                            for (; i.isEven(); )
                                i.rShiftTo(1, i),
                                    t
                                        ? ((a.isEven() && s.isEven()) ||
                                              (a.addTo(this, a), s.subTo(e, s)),
                                          a.rShiftTo(1, a))
                                        : s.isEven() || s.subTo(e, s),
                                    s.rShiftTo(1, s);
                            r.compareTo(i) >= 0
                                ? (r.subTo(i, r),
                                  t && n.subTo(a, n),
                                  f.subTo(s, f))
                                : (i.subTo(r, i),
                                  t && a.subTo(n, a),
                                  s.subTo(f, s));
                        }
                        return 0 != i.compareTo(o.ONE)
                            ? o.ZERO
                            : s.compareTo(e) >= 0
                                ? s.subtract(e)
                                : s.signum() < 0
                                    ? (s.addTo(e, s),
                                      s.signum() < 0 ? s.add(e) : s)
                                    : s;
                    }),
                    (o.prototype.pow = function(e) {
                        return this.exp(e, new E());
                    }),
                    (o.prototype.gcd = function(e) {
                        var t = this.s < 0 ? this.negate() : this.clone(),
                            r = e.s < 0 ? e.negate() : e.clone();
                        if (t.compareTo(r) < 0) {
                            var i = t;
                            (t = r), (r = i);
                        }
                        var n = t.getLowestSetBit(),
                            o = r.getLowestSetBit();
                        if (o < 0) return t;
                        for (
                            n < o && (o = n),
                                o > 0 && (t.rShiftTo(o, t), r.rShiftTo(o, r));
                            t.signum() > 0;

                        )
                            (n = t.getLowestSetBit()) > 0 && t.rShiftTo(n, t),
                                (n = r.getLowestSetBit()) > 0 &&
                                    r.rShiftTo(n, r),
                                t.compareTo(r) >= 0
                                    ? (t.subTo(r, t), t.rShiftTo(1, t))
                                    : (r.subTo(t, r), r.rShiftTo(1, r));
                        return o > 0 && r.lShiftTo(o, r), r;
                    }),
                    (o.prototype.isProbablePrime = function(e) {
                        var t,
                            r = this.abs();
                        if (1 == r.t && r[0] <= I[I.length - 1]) {
                            for (t = 0; t < I.length; ++t)
                                if (r[0] == I[t]) return !0;
                            return !1;
                        }
                        if (r.isEven()) return !1;
                        for (t = 1; t < I.length; ) {
                            for (
                                var i = I[t], n = t + 1;
                                n < I.length && i < k;

                            )
                                i *= I[n++];
                            for (i = r.modInt(i); t < n; )
                                if (i % I[t++] == 0) return !1;
                        }
                        return r.millerRabin(e);
                    }),
                    (o.int2char = d),
                    (o.ZERO = p(0)),
                    (o.ONE = p(1)),
                    (o.prototype.square = function() {
                        var e = f();
                        return this.squareTo(e), e;
                    }),
                    (e.exports = o);
            }.call(this, r(114).Buffer));
        },
        1817: function(e) {
            e.exports = {
                O_RDONLY: 0,
                O_WRONLY: 1,
                O_RDWR: 2,
                S_IFMT: 61440,
                S_IFREG: 32768,
                S_IFDIR: 16384,
                S_IFCHR: 8192,
                S_IFBLK: 24576,
                S_IFIFO: 4096,
                S_IFLNK: 40960,
                S_IFSOCK: 49152,
                O_CREAT: 512,
                O_EXCL: 2048,
                O_NOCTTY: 131072,
                O_TRUNC: 1024,
                O_APPEND: 8,
                O_DIRECTORY: 1048576,
                O_NOFOLLOW: 256,
                O_SYNC: 128,
                O_SYMLINK: 2097152,
                O_NONBLOCK: 4,
                S_IRWXU: 448,
                S_IRUSR: 256,
                S_IWUSR: 128,
                S_IXUSR: 64,
                S_IRWXG: 56,
                S_IRGRP: 32,
                S_IWGRP: 16,
                S_IXGRP: 8,
                S_IRWXO: 7,
                S_IROTH: 4,
                S_IWOTH: 2,
                S_IXOTH: 1,
                E2BIG: 7,
                EACCES: 13,
                EADDRINUSE: 48,
                EADDRNOTAVAIL: 49,
                EAFNOSUPPORT: 47,
                EAGAIN: 35,
                EALREADY: 37,
                EBADF: 9,
                EBADMSG: 94,
                EBUSY: 16,
                ECANCELED: 89,
                ECHILD: 10,
                ECONNABORTED: 53,
                ECONNREFUSED: 61,
                ECONNRESET: 54,
                EDEADLK: 11,
                EDESTADDRREQ: 39,
                EDOM: 33,
                EDQUOT: 69,
                EEXIST: 17,
                EFAULT: 14,
                EFBIG: 27,
                EHOSTUNREACH: 65,
                EIDRM: 90,
                EILSEQ: 92,
                EINPROGRESS: 36,
                EINTR: 4,
                EINVAL: 22,
                EIO: 5,
                EISCONN: 56,
                EISDIR: 21,
                ELOOP: 62,
                EMFILE: 24,
                EMLINK: 31,
                EMSGSIZE: 40,
                EMULTIHOP: 95,
                ENAMETOOLONG: 63,
                ENETDOWN: 50,
                ENETRESET: 52,
                ENETUNREACH: 51,
                ENFILE: 23,
                ENOBUFS: 55,
                ENODATA: 96,
                ENODEV: 19,
                ENOENT: 2,
                ENOEXEC: 8,
                ENOLCK: 77,
                ENOLINK: 97,
                ENOMEM: 12,
                ENOMSG: 91,
                ENOPROTOOPT: 42,
                ENOSPC: 28,
                ENOSR: 98,
                ENOSTR: 99,
                ENOSYS: 78,
                ENOTCONN: 57,
                ENOTDIR: 20,
                ENOTEMPTY: 66,
                ENOTSOCK: 38,
                ENOTSUP: 45,
                ENOTTY: 25,
                ENXIO: 6,
                EOPNOTSUPP: 102,
                EOVERFLOW: 84,
                EPERM: 1,
                EPIPE: 32,
                EPROTO: 100,
                EPROTONOSUPPORT: 43,
                EPROTOTYPE: 41,
                ERANGE: 34,
                EROFS: 30,
                ESPIPE: 29,
                ESRCH: 3,
                ESTALE: 70,
                ETIME: 101,
                ETIMEDOUT: 60,
                ETXTBSY: 26,
                EWOULDBLOCK: 35,
                EXDEV: 18,
                SIGHUP: 1,
                SIGINT: 2,
                SIGQUIT: 3,
                SIGILL: 4,
                SIGTRAP: 5,
                SIGABRT: 6,
                SIGIOT: 6,
                SIGBUS: 10,
                SIGFPE: 8,
                SIGKILL: 9,
                SIGUSR1: 30,
                SIGSEGV: 11,
                SIGUSR2: 31,
                SIGPIPE: 13,
                SIGALRM: 14,
                SIGTERM: 15,
                SIGCHLD: 20,
                SIGCONT: 19,
                SIGSTOP: 17,
                SIGTSTP: 18,
                SIGTTIN: 21,
                SIGTTOU: 22,
                SIGURG: 16,
                SIGXCPU: 24,
                SIGXFSZ: 25,
                SIGVTALRM: 26,
                SIGPROF: 27,
                SIGWINCH: 28,
                SIGIO: 23,
                SIGSYS: 12,
                SSL_OP_ALL: 2147486719,
                SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION: 262144,
                SSL_OP_CIPHER_SERVER_PREFERENCE: 4194304,
                SSL_OP_CISCO_ANYCONNECT: 32768,
                SSL_OP_COOKIE_EXCHANGE: 8192,
                SSL_OP_CRYPTOPRO_TLSEXT_BUG: 2147483648,
                SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS: 2048,
                SSL_OP_EPHEMERAL_RSA: 0,
                SSL_OP_LEGACY_SERVER_CONNECT: 4,
                SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER: 32,
                SSL_OP_MICROSOFT_SESS_ID_BUG: 1,
                SSL_OP_MSIE_SSLV2_RSA_PADDING: 0,
                SSL_OP_NETSCAPE_CA_DN_BUG: 536870912,
                SSL_OP_NETSCAPE_CHALLENGE_BUG: 2,
                SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG: 1073741824,
                SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG: 8,
                SSL_OP_NO_COMPRESSION: 131072,
                SSL_OP_NO_QUERY_MTU: 4096,
                SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION: 65536,
                SSL_OP_NO_SSLv2: 16777216,
                SSL_OP_NO_SSLv3: 33554432,
                SSL_OP_NO_TICKET: 16384,
                SSL_OP_NO_TLSv1: 67108864,
                SSL_OP_NO_TLSv1_1: 268435456,
                SSL_OP_NO_TLSv1_2: 134217728,
                SSL_OP_PKCS1_CHECK_1: 0,
                SSL_OP_PKCS1_CHECK_2: 0,
                SSL_OP_SINGLE_DH_USE: 1048576,
                SSL_OP_SINGLE_ECDH_USE: 524288,
                SSL_OP_SSLEAY_080_CLIENT_DH_BUG: 128,
                SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG: 0,
                SSL_OP_TLS_BLOCK_PADDING_BUG: 512,
                SSL_OP_TLS_D5_BUG: 256,
                SSL_OP_TLS_ROLLBACK_BUG: 8388608,
                ENGINE_METHOD_DSA: 2,
                ENGINE_METHOD_DH: 4,
                ENGINE_METHOD_RAND: 8,
                ENGINE_METHOD_ECDH: 16,
                ENGINE_METHOD_ECDSA: 32,
                ENGINE_METHOD_CIPHERS: 64,
                ENGINE_METHOD_DIGESTS: 128,
                ENGINE_METHOD_STORE: 256,
                ENGINE_METHOD_PKEY_METHS: 512,
                ENGINE_METHOD_PKEY_ASN1_METHS: 1024,
                ENGINE_METHOD_ALL: 65535,
                ENGINE_METHOD_NONE: 0,
                DH_CHECK_P_NOT_SAFE_PRIME: 2,
                DH_CHECK_P_NOT_PRIME: 1,
                DH_UNABLE_TO_CHECK_GENERATOR: 4,
                DH_NOT_SUITABLE_GENERATOR: 8,
                NPN_ENABLED: 1,
                RSA_PKCS1_PADDING: 1,
                RSA_SSLV23_PADDING: 2,
                RSA_NO_PADDING: 3,
                RSA_PKCS1_OAEP_PADDING: 4,
                RSA_X931_PADDING: 5,
                RSA_PKCS1_PSS_PADDING: 6,
                POINT_CONVERSION_COMPRESSED: 2,
                POINT_CONVERSION_UNCOMPRESSED: 4,
                POINT_CONVERSION_HYBRID: 6,
                F_OK: 0,
                R_OK: 4,
                W_OK: 2,
                X_OK: 1,
                UV_UDP_REUSEADDR: 4
            };
        },
        1818: function(e, t, r) {
            var i = r(60).Buffer;
            function n(e) {
                i.isBuffer(e) || (e = i.from(e));
                for (
                    var t = (e.length / 4) | 0, r = new Array(t), n = 0;
                    n < t;
                    n++
                )
                    r[n] = e.readUInt32BE(4 * n);
                return r;
            }
            function o(e) {
                for (; 0 < e.length; e++) e[0] = 0;
            }
            function f(e, t, r, i, n) {
                for (
                    var o,
                        f,
                        a,
                        s,
                        c = r[0],
                        h = r[1],
                        d = r[2],
                        u = r[3],
                        p = e[0] ^ t[0],
                        l = e[1] ^ t[1],
                        b = e[2] ^ t[2],
                        m = e[3] ^ t[3],
                        y = 4,
                        v = 1;
                    v < n;
                    v++
                )
                    (o =
                        c[p >>> 24] ^
                        h[(l >>> 16) & 255] ^
                        d[(b >>> 8) & 255] ^
                        u[255 & m] ^
                        t[y++]),
                        (f =
                            c[l >>> 24] ^
                            h[(b >>> 16) & 255] ^
                            d[(m >>> 8) & 255] ^
                            u[255 & p] ^
                            t[y++]),
                        (a =
                            c[b >>> 24] ^
                            h[(m >>> 16) & 255] ^
                            d[(p >>> 8) & 255] ^
                            u[255 & l] ^
                            t[y++]),
                        (s =
                            c[m >>> 24] ^
                            h[(p >>> 16) & 255] ^
                            d[(l >>> 8) & 255] ^
                            u[255 & b] ^
                            t[y++]),
                        (p = o),
                        (l = f),
                        (b = a),
                        (m = s);
                return (
                    (o =
                        ((i[p >>> 24] << 24) |
                            (i[(l >>> 16) & 255] << 16) |
                            (i[(b >>> 8) & 255] << 8) |
                            i[255 & m]) ^
                        t[y++]),
                    (f =
                        ((i[l >>> 24] << 24) |
                            (i[(b >>> 16) & 255] << 16) |
                            (i[(m >>> 8) & 255] << 8) |
                            i[255 & p]) ^
                        t[y++]),
                    (a =
                        ((i[b >>> 24] << 24) |
                            (i[(m >>> 16) & 255] << 16) |
                            (i[(p >>> 8) & 255] << 8) |
                            i[255 & l]) ^
                        t[y++]),
                    (s =
                        ((i[m >>> 24] << 24) |
                            (i[(p >>> 16) & 255] << 16) |
                            (i[(l >>> 8) & 255] << 8) |
                            i[255 & b]) ^
                        t[y++]),
                    [(o >>>= 0), (f >>>= 0), (a >>>= 0), (s >>>= 0)]
                );
            }
            var a = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                s = (function() {
                    for (var e = new Array(256), t = 0; t < 256; t++)
                        e[t] = t < 128 ? t << 1 : (t << 1) ^ 283;
                    for (
                        var r = [],
                            i = [],
                            n = [[], [], [], []],
                            o = [[], [], [], []],
                            f = 0,
                            a = 0,
                            s = 0;
                        s < 256;
                        ++s
                    ) {
                        var c = a ^ (a << 1) ^ (a << 2) ^ (a << 3) ^ (a << 4);
                        (c = (c >>> 8) ^ (255 & c) ^ 99),
                            (r[f] = c),
                            (i[c] = f);
                        var h = e[f],
                            d = e[h],
                            u = e[d],
                            p = (257 * e[c]) ^ (16843008 * c);
                        (n[0][f] = (p << 24) | (p >>> 8)),
                            (n[1][f] = (p << 16) | (p >>> 16)),
                            (n[2][f] = (p << 8) | (p >>> 24)),
                            (n[3][f] = p),
                            (p =
                                (16843009 * u) ^
                                (65537 * d) ^
                                (257 * h) ^
                                (16843008 * f)),
                            (o[0][c] = (p << 24) | (p >>> 8)),
                            (o[1][c] = (p << 16) | (p >>> 16)),
                            (o[2][c] = (p << 8) | (p >>> 24)),
                            (o[3][c] = p),
                            0 === f
                                ? (f = a = 1)
                                : ((f = h ^ e[e[e[u ^ h]]]), (a ^= e[e[a]]));
                    }
                    return {SBOX: r, INV_SBOX: i, SUB_MIX: n, INV_SUB_MIX: o};
                })();
            function c(e) {
                (this._key = n(e)), this._reset();
            }
            (c.blockSize = 16),
                (c.keySize = 32),
                (c.prototype.blockSize = c.blockSize),
                (c.prototype.keySize = c.keySize),
                (c.prototype._reset = function() {
                    for (
                        var e = this._key,
                            t = e.length,
                            r = t + 6,
                            i = 4 * (r + 1),
                            n = [],
                            o = 0;
                        o < t;
                        o++
                    )
                        n[o] = e[o];
                    for (o = t; o < i; o++) {
                        var f = n[o - 1];
                        o % t == 0
                            ? ((f = (f << 8) | (f >>> 24)),
                              (f =
                                  (s.SBOX[f >>> 24] << 24) |
                                  (s.SBOX[(f >>> 16) & 255] << 16) |
                                  (s.SBOX[(f >>> 8) & 255] << 8) |
                                  s.SBOX[255 & f]),
                              (f ^= a[(o / t) | 0] << 24))
                            : t > 6 &&
                              o % t == 4 &&
                              (f =
                                  (s.SBOX[f >>> 24] << 24) |
                                  (s.SBOX[(f >>> 16) & 255] << 16) |
                                  (s.SBOX[(f >>> 8) & 255] << 8) |
                                  s.SBOX[255 & f]),
                            (n[o] = n[o - t] ^ f);
                    }
                    for (var c = [], h = 0; h < i; h++) {
                        var d = i - h,
                            u = n[d - (h % 4 ? 0 : 4)];
                        c[h] =
                            h < 4 || d <= 4
                                ? u
                                : s.INV_SUB_MIX[0][s.SBOX[u >>> 24]] ^
                                  s.INV_SUB_MIX[1][s.SBOX[(u >>> 16) & 255]] ^
                                  s.INV_SUB_MIX[2][s.SBOX[(u >>> 8) & 255]] ^
                                  s.INV_SUB_MIX[3][s.SBOX[255 & u]];
                    }
                    (this._nRounds = r),
                        (this._keySchedule = n),
                        (this._invKeySchedule = c);
                }),
                (c.prototype.encryptBlockRaw = function(e) {
                    return f(
                        (e = n(e)),
                        this._keySchedule,
                        s.SUB_MIX,
                        s.SBOX,
                        this._nRounds
                    );
                }),
                (c.prototype.encryptBlock = function(e) {
                    var t = this.encryptBlockRaw(e),
                        r = i.allocUnsafe(16);
                    return (
                        r.writeUInt32BE(t[0], 0),
                        r.writeUInt32BE(t[1], 4),
                        r.writeUInt32BE(t[2], 8),
                        r.writeUInt32BE(t[3], 12),
                        r
                    );
                }),
                (c.prototype.decryptBlock = function(e) {
                    var t = (e = n(e))[1];
                    (e[1] = e[3]), (e[3] = t);
                    var r = f(
                            e,
                            this._invKeySchedule,
                            s.INV_SUB_MIX,
                            s.INV_SBOX,
                            this._nRounds
                        ),
                        o = i.allocUnsafe(16);
                    return (
                        o.writeUInt32BE(r[0], 0),
                        o.writeUInt32BE(r[3], 4),
                        o.writeUInt32BE(r[2], 8),
                        o.writeUInt32BE(r[1], 12),
                        o
                    );
                }),
                (c.prototype.scrub = function() {
                    o(this._keySchedule), o(this._invKeySchedule), o(this._key);
                }),
                (e.exports.AES = c);
        },
        1819: function(e, t, r) {
            var i = r(60).Buffer,
                n = r(529);
            e.exports = function(e, t, r, o) {
                if (
                    (i.isBuffer(e) || (e = i.from(e, "binary")),
                    t &&
                        (i.isBuffer(t) || (t = i.from(t, "binary")),
                        8 !== t.length))
                )
                    throw new RangeError(
                        "salt should be Buffer with 8 byte length"
                    );
                for (
                    var f = r / 8,
                        a = i.alloc(f),
                        s = i.alloc(o || 0),
                        c = i.alloc(0);
                    f > 0 || o > 0;

                ) {
                    var h = new n();
                    h.update(c),
                        h.update(e),
                        t && h.update(t),
                        (c = h.digest());
                    var d = 0;
                    if (f > 0) {
                        var u = a.length - f;
                        (d = Math.min(f, c.length)),
                            c.copy(a, u, 0, d),
                            (f -= d);
                    }
                    if (d < c.length && o > 0) {
                        var p = s.length - o,
                            l = Math.min(o, c.length - d);
                        c.copy(s, p, d, d + l), (o -= l);
                    }
                }
                return c.fill(0), {key: a, iv: s};
            };
        },
        1820: function(e, t, r) {
            "use strict";
            var i = t;
            (i.base = r(1991)),
                (i.short = r(1992)),
                (i.mont = r(1993)),
                (i.edwards = r(1994));
        },
        1821: function(e, t, r) {
            (function(t) {
                var i = r(2010),
                    n = r(2021),
                    o = r(2022),
                    f = r(1831),
                    a = r(1850);
                function s(e) {
                    var r;
                    "object" != typeof e ||
                        t.isBuffer(e) ||
                        ((r = e.passphrase), (e = e.key)),
                        "string" == typeof e && (e = new t(e));
                    var s,
                        c,
                        h = o(e, r),
                        d = h.tag,
                        u = h.data;
                    switch (d) {
                        case "CERTIFICATE":
                            c = i.certificate.decode(u, "der").tbsCertificate
                                .subjectPublicKeyInfo;
                        case "PUBLIC KEY":
                            switch (
                                (c || (c = i.PublicKey.decode(u, "der")),
                                (s = c.algorithm.algorithm.join(".")))
                            ) {
                                case "1.2.840.113549.1.1.1":
                                    return i.RSAPublicKey.decode(
                                        c.subjectPublicKey.data,
                                        "der"
                                    );
                                case "1.2.840.10045.2.1":
                                    return (
                                        (c.subjectPrivateKey =
                                            c.subjectPublicKey),
                                        {type: "ec", data: c}
                                    );
                                case "1.2.840.10040.4.1":
                                    return (
                                        (c.algorithm.params.pub_key = i.DSAparam.decode(
                                            c.subjectPublicKey.data,
                                            "der"
                                        )),
                                        {type: "dsa", data: c.algorithm.params}
                                    );
                                default:
                                    throw new Error("unknown key id " + s);
                            }
                            throw new Error("unknown key type " + d);
                        case "ENCRYPTED PRIVATE KEY":
                            u = (function(e, r) {
                                var i = e.algorithm.decrypt.kde.kdeparams.salt,
                                    o = parseInt(
                                        e.algorithm.decrypt.kde.kdeparams.iters.toString(),
                                        10
                                    ),
                                    s =
                                        n[
                                            e.algorithm.decrypt.cipher.algo.join(
                                                "."
                                            )
                                        ],
                                    c = e.algorithm.decrypt.cipher.iv,
                                    h = e.subjectPrivateKey,
                                    d = parseInt(s.split("-")[1], 10) / 8,
                                    u = a.pbkdf2Sync(r, i, o, d),
                                    p = f.createDecipheriv(s, u, c),
                                    l = [];
                                return (
                                    l.push(p.update(h)),
                                    l.push(p.final()),
                                    t.concat(l)
                                );
                            })((u = i.EncryptedPrivateKey.decode(u, "der")), r);
                        case "PRIVATE KEY":
                            switch (
                                (s = (c = i.PrivateKey.decode(
                                    u,
                                    "der"
                                )).algorithm.algorithm.join("."))
                            ) {
                                case "1.2.840.113549.1.1.1":
                                    return i.RSAPrivateKey.decode(
                                        c.subjectPrivateKey,
                                        "der"
                                    );
                                case "1.2.840.10045.2.1":
                                    return {
                                        curve: c.algorithm.curve,
                                        privateKey: i.ECPrivateKey.decode(
                                            c.subjectPrivateKey,
                                            "der"
                                        ).privateKey
                                    };
                                case "1.2.840.10040.4.1":
                                    return (
                                        (c.algorithm.params.priv_key = i.DSAparam.decode(
                                            c.subjectPrivateKey,
                                            "der"
                                        )),
                                        {
                                            type: "dsa",
                                            params: c.algorithm.params
                                        }
                                    );
                                default:
                                    throw new Error("unknown key id " + s);
                            }
                            throw new Error("unknown key type " + d);
                        case "RSA PUBLIC KEY":
                            return i.RSAPublicKey.decode(u, "der");
                        case "RSA PRIVATE KEY":
                            return i.RSAPrivateKey.decode(u, "der");
                        case "DSA PRIVATE KEY":
                            return {
                                type: "dsa",
                                params: i.DSAPrivateKey.decode(u, "der")
                            };
                        case "EC PRIVATE KEY":
                            return {
                                curve: (u = i.ECPrivateKey.decode(u, "der"))
                                    .parameters.value,
                                privateKey: u.privateKey
                            };
                        default:
                            throw new Error("unknown key type " + d);
                    }
                }
                (e.exports = s), (s.signature = i.signature);
            }.call(this, r(114).Buffer));
        },
        1830: function(e, t, r) {
            "use strict";
            (t.utils = r(1967)),
                (t.Cipher = r(1968)),
                (t.DES = r(1969)),
                (t.CBC = r(1970)),
                (t.EDE = r(1971));
        },
        1831: function(e, t, r) {
            var i = r(1972),
                n = r(1980),
                o = r(1856);
            (t.createCipher = t.Cipher = i.createCipher),
                (t.createCipheriv = t.Cipheriv = i.createCipheriv),
                (t.createDecipher = t.Decipher = n.createDecipher),
                (t.createDecipheriv = t.Decipheriv = n.createDecipheriv),
                (t.listCiphers = t.getCiphers = function() {
                    return Object.keys(o);
                });
        },
        1832: function(e, t, r) {
            var i = {
                    ECB: r(1973),
                    CBC: r(1974),
                    CFB: r(1975),
                    CFB8: r(1976),
                    CFB1: r(1977),
                    OFB: r(1978),
                    CTR: r(1854),
                    GCM: r(1854)
                },
                n = r(1856);
            for (var o in n) n[o].module = i[n[o].mode];
            e.exports = n;
        },
        1833: function(e, t, r) {
            (function(t) {
                var i = r(1777),
                    n = r(1803);
                function o(e, r) {
                    var n = (function(e) {
                            var t = f(e);
                            return {
                                blinder: t
                                    .toRed(i.mont(e.modulus))
                                    .redPow(new i(e.publicExponent))
                                    .fromRed(),
                                unblinder: t.invm(e.modulus)
                            };
                        })(r),
                        o = r.modulus.byteLength(),
                        a = (i.mont(r.modulus),
                        new i(e).mul(n.blinder).umod(r.modulus)),
                        s = a.toRed(i.mont(r.prime1)),
                        c = a.toRed(i.mont(r.prime2)),
                        h = r.coefficient,
                        d = r.prime1,
                        u = r.prime2,
                        p = s.redPow(r.exponent1),
                        l = c.redPow(r.exponent2);
                    (p = p.fromRed()), (l = l.fromRed());
                    var b = p
                        .isub(l)
                        .imul(h)
                        .umod(d);
                    return (
                        b.imul(u),
                        l.iadd(b),
                        new t(
                            l
                                .imul(n.unblinder)
                                .umod(r.modulus)
                                .toArray(!1, o)
                        )
                    );
                }
                function f(e) {
                    for (
                        var t = e.modulus.byteLength(), r = new i(n(t));
                        r.cmp(e.modulus) >= 0 ||
                        !r.umod(e.prime1) ||
                        !r.umod(e.prime2);

                    )
                        r = new i(n(t));
                    return r;
                }
                (e.exports = o), (o.getr = f);
            }.call(this, r(114).Buffer));
        },
        1834: function(e, t, r) {
            var i = t;
            (i.utils = r(1787)),
                (i.common = r(1809)),
                (i.sha = r(1996)),
                (i.ripemd = r(2e3)),
                (i.hmac = r(2001)),
                (i.sha1 = i.sha.sha1),
                (i.sha256 = i.sha.sha256),
                (i.sha224 = i.sha.sha224),
                (i.sha384 = i.sha.sha384),
                (i.sha512 = i.sha.sha512),
                (i.ripemd160 = i.ripemd.ripemd160);
        },
        1835: function(e, t, r) {
            var i = r(2035);
            e.exports = {Ber: i, BerReader: i.Reader, BerWriter: i.Writer};
        },
        1836: function(e, t) {
            e.exports = {
                newInvalidAsn1Error: function(e) {
                    var t = new Error();
                    return (
                        (t.name = "InvalidAsn1Error"), (t.message = e || ""), t
                    );
                }
            };
        },
        1837: function(e, t) {
            e.exports = {
                EOC: 0,
                Boolean: 1,
                Integer: 2,
                BitString: 3,
                OctetString: 4,
                Null: 5,
                OID: 6,
                ObjectDescriptor: 7,
                External: 8,
                Real: 9,
                Enumeration: 10,
                PDV: 11,
                Utf8String: 12,
                RelativeOID: 13,
                Sequence: 16,
                Set: 17,
                NumericString: 18,
                PrintableString: 19,
                T61String: 20,
                VideotexString: 21,
                IA5String: 22,
                UTCTime: 23,
                GeneralizedTime: 24,
                GraphicString: 25,
                VisibleString: 26,
                GeneralString: 28,
                UniversalString: 29,
                CharacterString: 30,
                BMPString: 31,
                Constructor: 32,
                Context: 128
            };
        },
        1849: function(e) {
            e.exports = {
                sha224WithRSAEncryption: {
                    sign: "rsa",
                    hash: "sha224",
                    id: "302d300d06096086480165030402040500041c"
                },
                "RSA-SHA224": {
                    sign: "ecdsa/rsa",
                    hash: "sha224",
                    id: "302d300d06096086480165030402040500041c"
                },
                sha256WithRSAEncryption: {
                    sign: "rsa",
                    hash: "sha256",
                    id: "3031300d060960864801650304020105000420"
                },
                "RSA-SHA256": {
                    sign: "ecdsa/rsa",
                    hash: "sha256",
                    id: "3031300d060960864801650304020105000420"
                },
                sha384WithRSAEncryption: {
                    sign: "rsa",
                    hash: "sha384",
                    id: "3041300d060960864801650304020205000430"
                },
                "RSA-SHA384": {
                    sign: "ecdsa/rsa",
                    hash: "sha384",
                    id: "3041300d060960864801650304020205000430"
                },
                sha512WithRSAEncryption: {
                    sign: "rsa",
                    hash: "sha512",
                    id: "3051300d060960864801650304020305000440"
                },
                "RSA-SHA512": {
                    sign: "ecdsa/rsa",
                    hash: "sha512",
                    id: "3051300d060960864801650304020305000440"
                },
                "RSA-SHA1": {
                    sign: "rsa",
                    hash: "sha1",
                    id: "3021300906052b0e03021a05000414"
                },
                "ecdsa-with-SHA1": {sign: "ecdsa", hash: "sha1", id: ""},
                sha256: {sign: "ecdsa", hash: "sha256", id: ""},
                sha224: {sign: "ecdsa", hash: "sha224", id: ""},
                sha384: {sign: "ecdsa", hash: "sha384", id: ""},
                sha512: {sign: "ecdsa", hash: "sha512", id: ""},
                "DSA-SHA": {sign: "dsa", hash: "sha1", id: ""},
                "DSA-SHA1": {sign: "dsa", hash: "sha1", id: ""},
                DSA: {sign: "dsa", hash: "sha1", id: ""},
                "DSA-WITH-SHA224": {sign: "dsa", hash: "sha224", id: ""},
                "DSA-SHA224": {sign: "dsa", hash: "sha224", id: ""},
                "DSA-WITH-SHA256": {sign: "dsa", hash: "sha256", id: ""},
                "DSA-SHA256": {sign: "dsa", hash: "sha256", id: ""},
                "DSA-WITH-SHA384": {sign: "dsa", hash: "sha384", id: ""},
                "DSA-SHA384": {sign: "dsa", hash: "sha384", id: ""},
                "DSA-WITH-SHA512": {sign: "dsa", hash: "sha512", id: ""},
                "DSA-SHA512": {sign: "dsa", hash: "sha512", id: ""},
                "DSA-RIPEMD160": {sign: "dsa", hash: "rmd160", id: ""},
                ripemd160WithRSA: {
                    sign: "rsa",
                    hash: "rmd160",
                    id: "3021300906052b2403020105000414"
                },
                "RSA-RIPEMD160": {
                    sign: "rsa",
                    hash: "rmd160",
                    id: "3021300906052b2403020105000414"
                },
                md5WithRSAEncryption: {
                    sign: "rsa",
                    hash: "md5",
                    id: "3020300c06082a864886f70d020505000410"
                },
                "RSA-MD5": {
                    sign: "rsa",
                    hash: "md5",
                    id: "3020300c06082a864886f70d020505000410"
                }
            };
        },
        1850: function(e, t, r) {
            (t.pbkdf2 = r(1964)), (t.pbkdf2Sync = r(1853));
        },
        1851: function(e, t, r) {
            (function(t) {
                var r = Math.pow(2, 30) - 1;
                function i(e, r) {
                    if ("string" != typeof e && !t.isBuffer(e))
                        throw new TypeError(r + " must be a buffer or string");
                }
                e.exports = function(e, t, n, o) {
                    if ((i(e, "Password"), i(t, "Salt"), "number" != typeof n))
                        throw new TypeError("Iterations not a number");
                    if (n < 0) throw new TypeError("Bad iterations");
                    if ("number" != typeof o)
                        throw new TypeError("Key length not a number");
                    if (o < 0 || o > r || o != o)
                        throw new TypeError("Bad key length");
                };
            }.call(this, r(114).Buffer));
        },
        1852: function(e, t, r) {
            (function(t) {
                var r;
                t.browser
                    ? (r = "utf-8")
                    : (r =
                          parseInt(t.version.split(".")[0].slice(1), 10) >= 6
                              ? "utf-8"
                              : "binary");
                e.exports = r;
            }.call(this, r(108)));
        },
        1853: function(e, t, r) {
            var i = r(770),
                n = r(531),
                o = r(532),
                f = r(1851),
                a = r(1852),
                s = r(60).Buffer,
                c = s.alloc(128),
                h = {
                    md5: 16,
                    sha1: 20,
                    sha224: 28,
                    sha256: 32,
                    sha384: 48,
                    sha512: 64,
                    rmd160: 20,
                    ripemd160: 20
                };
            function d(e, t, r) {
                var f = (function(e) {
                        return "rmd160" === e || "ripemd160" === e
                            ? n
                            : "md5" === e
                                ? i
                                : function(t) {
                                      return o(e)
                                          .update(t)
                                          .digest();
                                  };
                    })(e),
                    a = "sha512" === e || "sha384" === e ? 128 : 64;
                t.length > a
                    ? (t = f(t))
                    : t.length < a && (t = s.concat([t, c], a));
                for (
                    var d = s.allocUnsafe(a + h[e]),
                        u = s.allocUnsafe(a + h[e]),
                        p = 0;
                    p < a;
                    p++
                )
                    (d[p] = 54 ^ t[p]), (u[p] = 92 ^ t[p]);
                var l = s.allocUnsafe(a + r + 4);
                d.copy(l, 0, 0, a),
                    (this.ipad1 = l),
                    (this.ipad2 = d),
                    (this.opad = u),
                    (this.alg = e),
                    (this.blocksize = a),
                    (this.hash = f),
                    (this.size = h[e]);
            }
            (d.prototype.run = function(e, t) {
                return (
                    e.copy(t, this.blocksize),
                    this.hash(t).copy(this.opad, this.blocksize),
                    this.hash(this.opad)
                );
            }),
                (e.exports = function(e, t, r, i, n) {
                    f(e, t, r, i),
                        s.isBuffer(e) || (e = s.from(e, a)),
                        s.isBuffer(t) || (t = s.from(t, a));
                    var o = new d((n = n || "sha1"), e, t.length),
                        c = s.allocUnsafe(i),
                        u = s.allocUnsafe(t.length + 4);
                    t.copy(u, 0, 0, t.length);
                    for (
                        var p = 0, l = h[n], b = Math.ceil(i / l), m = 1;
                        m <= b;
                        m++
                    ) {
                        u.writeUInt32BE(m, t.length);
                        for (
                            var y = o.run(u, o.ipad1), v = y, g = 1;
                            g < r;
                            g++
                        ) {
                            v = o.run(v, o.ipad2);
                            for (var _ = 0; _ < l; _++) y[_] ^= v[_];
                        }
                        y.copy(c, p), (p += l);
                    }
                    return c;
                });
        },
        1854: function(e, t, r) {
            var i = r(1808),
                n = r(60).Buffer,
                o = r(1855);
            function f(e) {
                var t = e._cipher.encryptBlockRaw(e._prev);
                return o(e._prev), t;
            }
            t.encrypt = function(e, t) {
                var r = Math.ceil(t.length / 16),
                    o = e._cache.length;
                e._cache = n.concat([e._cache, n.allocUnsafe(16 * r)]);
                for (var a = 0; a < r; a++) {
                    var s = f(e),
                        c = o + 16 * a;
                    e._cache.writeUInt32BE(s[0], c + 0),
                        e._cache.writeUInt32BE(s[1], c + 4),
                        e._cache.writeUInt32BE(s[2], c + 8),
                        e._cache.writeUInt32BE(s[3], c + 12);
                }
                var h = e._cache.slice(0, t.length);
                return (e._cache = e._cache.slice(t.length)), i(t, h);
            };
        },
        1855: function(e, t) {
            e.exports = function(e) {
                for (var t, r = e.length; r--; ) {
                    if (255 !== (t = e.readUInt8(r))) {
                        t++, e.writeUInt8(t, r);
                        break;
                    }
                    e.writeUInt8(0, r);
                }
            };
        },
        1856: function(e) {
            e.exports = {
                "aes-128-ecb": {
                    cipher: "AES",
                    key: 128,
                    iv: 0,
                    mode: "ECB",
                    type: "block"
                },
                "aes-192-ecb": {
                    cipher: "AES",
                    key: 192,
                    iv: 0,
                    mode: "ECB",
                    type: "block"
                },
                "aes-256-ecb": {
                    cipher: "AES",
                    key: 256,
                    iv: 0,
                    mode: "ECB",
                    type: "block"
                },
                "aes-128-cbc": {
                    cipher: "AES",
                    key: 128,
                    iv: 16,
                    mode: "CBC",
                    type: "block"
                },
                "aes-192-cbc": {
                    cipher: "AES",
                    key: 192,
                    iv: 16,
                    mode: "CBC",
                    type: "block"
                },
                "aes-256-cbc": {
                    cipher: "AES",
                    key: 256,
                    iv: 16,
                    mode: "CBC",
                    type: "block"
                },
                aes128: {
                    cipher: "AES",
                    key: 128,
                    iv: 16,
                    mode: "CBC",
                    type: "block"
                },
                aes192: {
                    cipher: "AES",
                    key: 192,
                    iv: 16,
                    mode: "CBC",
                    type: "block"
                },
                aes256: {
                    cipher: "AES",
                    key: 256,
                    iv: 16,
                    mode: "CBC",
                    type: "block"
                },
                "aes-128-cfb": {
                    cipher: "AES",
                    key: 128,
                    iv: 16,
                    mode: "CFB",
                    type: "stream"
                },
                "aes-192-cfb": {
                    cipher: "AES",
                    key: 192,
                    iv: 16,
                    mode: "CFB",
                    type: "stream"
                },
                "aes-256-cfb": {
                    cipher: "AES",
                    key: 256,
                    iv: 16,
                    mode: "CFB",
                    type: "stream"
                },
                "aes-128-cfb8": {
                    cipher: "AES",
                    key: 128,
                    iv: 16,
                    mode: "CFB8",
                    type: "stream"
                },
                "aes-192-cfb8": {
                    cipher: "AES",
                    key: 192,
                    iv: 16,
                    mode: "CFB8",
                    type: "stream"
                },
                "aes-256-cfb8": {
                    cipher: "AES",
                    key: 256,
                    iv: 16,
                    mode: "CFB8",
                    type: "stream"
                },
                "aes-128-cfb1": {
                    cipher: "AES",
                    key: 128,
                    iv: 16,
                    mode: "CFB1",
                    type: "stream"
                },
                "aes-192-cfb1": {
                    cipher: "AES",
                    key: 192,
                    iv: 16,
                    mode: "CFB1",
                    type: "stream"
                },
                "aes-256-cfb1": {
                    cipher: "AES",
                    key: 256,
                    iv: 16,
                    mode: "CFB1",
                    type: "stream"
                },
                "aes-128-ofb": {
                    cipher: "AES",
                    key: 128,
                    iv: 16,
                    mode: "OFB",
                    type: "stream"
                },
                "aes-192-ofb": {
                    cipher: "AES",
                    key: 192,
                    iv: 16,
                    mode: "OFB",
                    type: "stream"
                },
                "aes-256-ofb": {
                    cipher: "AES",
                    key: 256,
                    iv: 16,
                    mode: "OFB",
                    type: "stream"
                },
                "aes-128-ctr": {
                    cipher: "AES",
                    key: 128,
                    iv: 16,
                    mode: "CTR",
                    type: "stream"
                },
                "aes-192-ctr": {
                    cipher: "AES",
                    key: 192,
                    iv: 16,
                    mode: "CTR",
                    type: "stream"
                },
                "aes-256-ctr": {
                    cipher: "AES",
                    key: 256,
                    iv: 16,
                    mode: "CTR",
                    type: "stream"
                },
                "aes-128-gcm": {
                    cipher: "AES",
                    key: 128,
                    iv: 12,
                    mode: "GCM",
                    type: "auth"
                },
                "aes-192-gcm": {
                    cipher: "AES",
                    key: 192,
                    iv: 12,
                    mode: "GCM",
                    type: "auth"
                },
                "aes-256-gcm": {
                    cipher: "AES",
                    key: 256,
                    iv: 12,
                    mode: "GCM",
                    type: "auth"
                }
            };
        },
        1857: function(e, t, r) {
            var i = r(1818),
                n = r(60).Buffer,
                o = r(416),
                f = r(86),
                a = r(1979),
                s = r(1808),
                c = r(1855);
            function h(e, t, r, f) {
                o.call(this);
                var s = n.alloc(4, 0);
                this._cipher = new i.AES(t);
                var h = this._cipher.encryptBlock(s);
                (this._ghash = new a(h)),
                    (r = (function(e, t, r) {
                        if (12 === t.length)
                            return (
                                (e._finID = n.concat([
                                    t,
                                    n.from([0, 0, 0, 1])
                                ])),
                                n.concat([t, n.from([0, 0, 0, 2])])
                            );
                        var i = new a(r),
                            o = t.length,
                            f = o % 16;
                        i.update(t),
                            f && ((f = 16 - f), i.update(n.alloc(f, 0))),
                            i.update(n.alloc(8, 0));
                        var s = 8 * o,
                            h = n.alloc(8);
                        h.writeUIntBE(s, 0, 8),
                            i.update(h),
                            (e._finID = i.state);
                        var d = n.from(e._finID);
                        return c(d), d;
                    })(this, r, h)),
                    (this._prev = n.from(r)),
                    (this._cache = n.allocUnsafe(0)),
                    (this._secCache = n.allocUnsafe(0)),
                    (this._decrypt = f),
                    (this._alen = 0),
                    (this._len = 0),
                    (this._mode = e),
                    (this._authTag = null),
                    (this._called = !1);
            }
            f(h, o),
                (h.prototype._update = function(e) {
                    if (!this._called && this._alen) {
                        var t = 16 - (this._alen % 16);
                        t < 16 && ((t = n.alloc(t, 0)), this._ghash.update(t));
                    }
                    this._called = !0;
                    var r = this._mode.encrypt(this, e);
                    return (
                        this._decrypt
                            ? this._ghash.update(e)
                            : this._ghash.update(r),
                        (this._len += e.length),
                        r
                    );
                }),
                (h.prototype._final = function() {
                    if (this._decrypt && !this._authTag)
                        throw new Error(
                            "Unsupported state or unable to authenticate data"
                        );
                    var e = s(
                        this._ghash.final(8 * this._alen, 8 * this._len),
                        this._cipher.encryptBlock(this._finID)
                    );
                    if (
                        this._decrypt &&
                        (function(e, t) {
                            var r = 0;
                            e.length !== t.length && r++;
                            for (
                                var i = Math.min(e.length, t.length), n = 0;
                                n < i;
                                ++n
                            )
                                r += e[n] ^ t[n];
                            return r;
                        })(e, this._authTag)
                    )
                        throw new Error(
                            "Unsupported state or unable to authenticate data"
                        );
                    (this._authTag = e), this._cipher.scrub();
                }),
                (h.prototype.getAuthTag = function() {
                    if (this._decrypt || !n.isBuffer(this._authTag))
                        throw new Error(
                            "Attempting to get auth tag in unsupported state"
                        );
                    return this._authTag;
                }),
                (h.prototype.setAuthTag = function(e) {
                    if (!this._decrypt)
                        throw new Error(
                            "Attempting to set auth tag in unsupported state"
                        );
                    this._authTag = e;
                }),
                (h.prototype.setAAD = function(e) {
                    if (this._called)
                        throw new Error(
                            "Attempting to set AAD in unsupported state"
                        );
                    this._ghash.update(e), (this._alen += e.length);
                }),
                (e.exports = h);
        },
        1858: function(e, t, r) {
            var i = r(1818),
                n = r(60).Buffer,
                o = r(416);
            function f(e, t, r, f) {
                o.call(this),
                    (this._cipher = new i.AES(t)),
                    (this._prev = n.from(r)),
                    (this._cache = n.allocUnsafe(0)),
                    (this._secCache = n.allocUnsafe(0)),
                    (this._decrypt = f),
                    (this._mode = e);
            }
            r(86)(f, o),
                (f.prototype._update = function(e) {
                    return this._mode.encrypt(this, e, this._decrypt);
                }),
                (f.prototype._final = function() {
                    this._cipher.scrub();
                }),
                (e.exports = f);
        },
        1859: function(e, t, r) {
            var i = r(1803);
            (e.exports = v), (v.simpleSieve = m), (v.fermatTest = y);
            var n = r(1777),
                o = new n(24),
                f = new (r(1860))(),
                a = new n(1),
                s = new n(2),
                c = new n(5),
                h = (new n(16), new n(8), new n(10)),
                d = new n(3),
                u = (new n(7), new n(11)),
                p = new n(4),
                l = (new n(12), null);
            function b() {
                if (null !== l) return l;
                var e = [];
                e[0] = 2;
                for (var t = 1, r = 3; r < 1048576; r += 2) {
                    for (
                        var i = Math.ceil(Math.sqrt(r)), n = 0;
                        n < t && e[n] <= i && r % e[n] != 0;
                        n++
                    );
                    (t !== n && e[n] <= i) || (e[t++] = r);
                }
                return (l = e), e;
            }
            function m(e) {
                for (var t = b(), r = 0; r < t.length; r++)
                    if (0 === e.modn(t[r])) return 0 === e.cmpn(t[r]);
                return !0;
            }
            function y(e) {
                var t = n.mont(e);
                return (
                    0 ===
                    s
                        .toRed(t)
                        .redPow(e.subn(1))
                        .fromRed()
                        .cmpn(1)
                );
            }
            function v(e, t) {
                if (e < 16)
                    return new n(2 === t || 5 === t ? [140, 123] : [140, 39]);
                var r, l;
                for (t = new n(t); ; ) {
                    for (r = new n(i(Math.ceil(e / 8))); r.bitLength() > e; )
                        r.ishrn(1);
                    if (
                        (r.isEven() && r.iadd(a),
                        r.testn(1) || r.iadd(s),
                        t.cmp(s))
                    ) {
                        if (!t.cmp(c)) for (; r.mod(h).cmp(d); ) r.iadd(p);
                    } else for (; r.mod(o).cmp(u); ) r.iadd(p);
                    if (
                        m((l = r.shrn(1))) &&
                        m(r) &&
                        y(l) &&
                        y(r) &&
                        f.test(l) &&
                        f.test(r)
                    )
                        return r;
                }
            }
        },
        1860: function(e, t, r) {
            var i = r(1777),
                n = r(1861);
            function o(e) {
                this.rand = e || new n.Rand();
            }
            (e.exports = o),
                (o.create = function(e) {
                    return new o(e);
                }),
                (o.prototype._randbelow = function(e) {
                    var t = e.bitLength(),
                        r = Math.ceil(t / 8);
                    do {
                        var n = new i(this.rand.generate(r));
                    } while (n.cmp(e) >= 0);
                    return n;
                }),
                (o.prototype._randrange = function(e, t) {
                    var r = t.sub(e);
                    return e.add(this._randbelow(r));
                }),
                (o.prototype.test = function(e, t, r) {
                    var n = e.bitLength(),
                        o = i.mont(e),
                        f = new i(1).toRed(o);
                    t || (t = Math.max(1, (n / 48) | 0));
                    for (var a = e.subn(1), s = 0; !a.testn(s); s++);
                    for (var c = e.shrn(s), h = a.toRed(o); t > 0; t--) {
                        var d = this._randrange(new i(2), a);
                        r && r(d);
                        var u = d.toRed(o).redPow(c);
                        if (0 !== u.cmp(f) && 0 !== u.cmp(h)) {
                            for (var p = 1; p < s; p++) {
                                if (0 === (u = u.redSqr()).cmp(f)) return !1;
                                if (0 === u.cmp(h)) break;
                            }
                            if (p === s) return !1;
                        }
                    }
                    return !0;
                }),
                (o.prototype.getDivisor = function(e, t) {
                    var r = e.bitLength(),
                        n = i.mont(e),
                        o = new i(1).toRed(n);
                    t || (t = Math.max(1, (r / 48) | 0));
                    for (var f = e.subn(1), a = 0; !f.testn(a); a++);
                    for (var s = e.shrn(a), c = f.toRed(n); t > 0; t--) {
                        var h = this._randrange(new i(2), f),
                            d = e.gcd(h);
                        if (0 !== d.cmpn(1)) return d;
                        var u = h.toRed(n).redPow(s);
                        if (0 !== u.cmp(o) && 0 !== u.cmp(c)) {
                            for (var p = 1; p < a; p++) {
                                if (0 === (u = u.redSqr()).cmp(o))
                                    return u
                                        .fromRed()
                                        .subn(1)
                                        .gcd(e);
                                if (0 === u.cmp(c)) break;
                            }
                            if (p === a)
                                return (u = u.redSqr())
                                    .fromRed()
                                    .subn(1)
                                    .gcd(e);
                        }
                    }
                    return !1;
                });
        },
        1861: function(e, t, r) {
            var i;
            function n(e) {
                this.rand = e;
            }
            if (
                ((e.exports = function(e) {
                    return i || (i = new n(null)), i.generate(e);
                }),
                (e.exports.Rand = n),
                (n.prototype.generate = function(e) {
                    return this._rand(e);
                }),
                (n.prototype._rand = function(e) {
                    if (this.rand.getBytes) return this.rand.getBytes(e);
                    for (var t = new Uint8Array(e), r = 0; r < t.length; r++)
                        t[r] = this.rand.getByte();
                    return t;
                }),
                "object" == typeof self)
            )
                self.crypto && self.crypto.getRandomValues
                    ? (n.prototype._rand = function(e) {
                          var t = new Uint8Array(e);
                          return self.crypto.getRandomValues(t), t;
                      })
                    : self.msCrypto && self.msCrypto.getRandomValues
                        ? (n.prototype._rand = function(e) {
                              var t = new Uint8Array(e);
                              return self.msCrypto.getRandomValues(t), t;
                          })
                        : "object" == typeof window &&
                          (n.prototype._rand = function() {
                              throw new Error("Not implemented yet");
                          });
            else
                try {
                    var o = r(1984);
                    if ("function" != typeof o.randomBytes)
                        throw new Error("Not supported");
                    n.prototype._rand = function(e) {
                        return o.randomBytes(e);
                    };
                } catch (e) {}
        },
        1862: function(e, t, r) {
            "use strict";
            var i = t;
            function n(e) {
                return 1 === e.length ? "0" + e : e;
            }
            function o(e) {
                for (var t = "", r = 0; r < e.length; r++)
                    t += n(e[r].toString(16));
                return t;
            }
            (i.toArray = function(e, t) {
                if (Array.isArray(e)) return e.slice();
                if (!e) return [];
                var r = [];
                if ("string" != typeof e) {
                    for (var i = 0; i < e.length; i++) r[i] = 0 | e[i];
                    return r;
                }
                if ("hex" === t)
                    for (
                        (e = e.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 &&
                            (e = "0" + e),
                            i = 0;
                        i < e.length;
                        i += 2
                    )
                        r.push(parseInt(e[i] + e[i + 1], 16));
                else
                    for (i = 0; i < e.length; i++) {
                        var n = e.charCodeAt(i),
                            o = n >> 8,
                            f = 255 & n;
                        o ? r.push(o, f) : r.push(f);
                    }
                return r;
            }),
                (i.zero2 = n),
                (i.toHex = o),
                (i.encode = function(e, t) {
                    return "hex" === t ? o(e) : e;
                });
        },
        1863: function(e, t, r) {
            "use strict";
            var i = r(1787).rotr32;
            function n(e, t, r) {
                return (e & t) ^ (~e & r);
            }
            function o(e, t, r) {
                return (e & t) ^ (e & r) ^ (t & r);
            }
            function f(e, t, r) {
                return e ^ t ^ r;
            }
            (t.ft_1 = function(e, t, r, i) {
                return 0 === e
                    ? n(t, r, i)
                    : 1 === e || 3 === e
                        ? f(t, r, i)
                        : 2 === e
                            ? o(t, r, i)
                            : void 0;
            }),
                (t.ch32 = n),
                (t.maj32 = o),
                (t.p32 = f),
                (t.s0_256 = function(e) {
                    return i(e, 2) ^ i(e, 13) ^ i(e, 22);
                }),
                (t.s1_256 = function(e) {
                    return i(e, 6) ^ i(e, 11) ^ i(e, 25);
                }),
                (t.g0_256 = function(e) {
                    return i(e, 7) ^ i(e, 18) ^ (e >>> 3);
                }),
                (t.g1_256 = function(e) {
                    return i(e, 17) ^ i(e, 19) ^ (e >>> 10);
                });
        },
        1864: function(e, t, r) {
            "use strict";
            var i = r(1787),
                n = r(1809),
                o = r(1863),
                f = r(1783),
                a = i.sum32,
                s = i.sum32_4,
                c = i.sum32_5,
                h = o.ch32,
                d = o.maj32,
                u = o.s0_256,
                p = o.s1_256,
                l = o.g0_256,
                b = o.g1_256,
                m = n.BlockHash,
                y = [
                    1116352408,
                    1899447441,
                    3049323471,
                    3921009573,
                    961987163,
                    1508970993,
                    2453635748,
                    2870763221,
                    3624381080,
                    310598401,
                    607225278,
                    1426881987,
                    1925078388,
                    2162078206,
                    2614888103,
                    3248222580,
                    3835390401,
                    4022224774,
                    264347078,
                    604807628,
                    770255983,
                    1249150122,
                    1555081692,
                    1996064986,
                    2554220882,
                    2821834349,
                    2952996808,
                    3210313671,
                    3336571891,
                    3584528711,
                    113926993,
                    338241895,
                    666307205,
                    773529912,
                    1294757372,
                    1396182291,
                    1695183700,
                    1986661051,
                    2177026350,
                    2456956037,
                    2730485921,
                    2820302411,
                    3259730800,
                    3345764771,
                    3516065817,
                    3600352804,
                    4094571909,
                    275423344,
                    430227734,
                    506948616,
                    659060556,
                    883997877,
                    958139571,
                    1322822218,
                    1537002063,
                    1747873779,
                    1955562222,
                    2024104815,
                    2227730452,
                    2361852424,
                    2428436474,
                    2756734187,
                    3204031479,
                    3329325298
                ];
            function v() {
                if (!(this instanceof v)) return new v();
                m.call(this),
                    (this.h = [
                        1779033703,
                        3144134277,
                        1013904242,
                        2773480762,
                        1359893119,
                        2600822924,
                        528734635,
                        1541459225
                    ]),
                    (this.k = y),
                    (this.W = new Array(64));
            }
            i.inherits(v, m),
                (e.exports = v),
                (v.blockSize = 512),
                (v.outSize = 256),
                (v.hmacStrength = 192),
                (v.padLength = 64),
                (v.prototype._update = function(e, t) {
                    for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
                    for (; i < r.length; i++)
                        r[i] = s(
                            b(r[i - 2]),
                            r[i - 7],
                            l(r[i - 15]),
                            r[i - 16]
                        );
                    var n = this.h[0],
                        o = this.h[1],
                        m = this.h[2],
                        y = this.h[3],
                        v = this.h[4],
                        g = this.h[5],
                        _ = this.h[6],
                        w = this.h[7];
                    for (
                        f(this.k.length === r.length), i = 0;
                        i < r.length;
                        i++
                    ) {
                        var S = c(w, p(v), h(v, g, _), this.k[i], r[i]),
                            E = a(u(n), d(n, o, m));
                        (w = _),
                            (_ = g),
                            (g = v),
                            (v = a(y, S)),
                            (y = m),
                            (m = o),
                            (o = n),
                            (n = a(S, E));
                    }
                    (this.h[0] = a(this.h[0], n)),
                        (this.h[1] = a(this.h[1], o)),
                        (this.h[2] = a(this.h[2], m)),
                        (this.h[3] = a(this.h[3], y)),
                        (this.h[4] = a(this.h[4], v)),
                        (this.h[5] = a(this.h[5], g)),
                        (this.h[6] = a(this.h[6], _)),
                        (this.h[7] = a(this.h[7], w));
                }),
                (v.prototype._digest = function(e) {
                    return "hex" === e
                        ? i.toHex32(this.h, "big")
                        : i.split32(this.h, "big");
                });
        },
        1865: function(e, t, r) {
            "use strict";
            var i = r(1787),
                n = r(1809),
                o = r(1783),
                f = i.rotr64_hi,
                a = i.rotr64_lo,
                s = i.shr64_hi,
                c = i.shr64_lo,
                h = i.sum64,
                d = i.sum64_hi,
                u = i.sum64_lo,
                p = i.sum64_4_hi,
                l = i.sum64_4_lo,
                b = i.sum64_5_hi,
                m = i.sum64_5_lo,
                y = n.BlockHash,
                v = [
                    1116352408,
                    3609767458,
                    1899447441,
                    602891725,
                    3049323471,
                    3964484399,
                    3921009573,
                    2173295548,
                    961987163,
                    4081628472,
                    1508970993,
                    3053834265,
                    2453635748,
                    2937671579,
                    2870763221,
                    3664609560,
                    3624381080,
                    2734883394,
                    310598401,
                    1164996542,
                    607225278,
                    1323610764,
                    1426881987,
                    3590304994,
                    1925078388,
                    4068182383,
                    2162078206,
                    991336113,
                    2614888103,
                    633803317,
                    3248222580,
                    3479774868,
                    3835390401,
                    2666613458,
                    4022224774,
                    944711139,
                    264347078,
                    2341262773,
                    604807628,
                    2007800933,
                    770255983,
                    1495990901,
                    1249150122,
                    1856431235,
                    1555081692,
                    3175218132,
                    1996064986,
                    2198950837,
                    2554220882,
                    3999719339,
                    2821834349,
                    766784016,
                    2952996808,
                    2566594879,
                    3210313671,
                    3203337956,
                    3336571891,
                    1034457026,
                    3584528711,
                    2466948901,
                    113926993,
                    3758326383,
                    338241895,
                    168717936,
                    666307205,
                    1188179964,
                    773529912,
                    1546045734,
                    1294757372,
                    1522805485,
                    1396182291,
                    2643833823,
                    1695183700,
                    2343527390,
                    1986661051,
                    1014477480,
                    2177026350,
                    1206759142,
                    2456956037,
                    344077627,
                    2730485921,
                    1290863460,
                    2820302411,
                    3158454273,
                    3259730800,
                    3505952657,
                    3345764771,
                    106217008,
                    3516065817,
                    3606008344,
                    3600352804,
                    1432725776,
                    4094571909,
                    1467031594,
                    275423344,
                    851169720,
                    430227734,
                    3100823752,
                    506948616,
                    1363258195,
                    659060556,
                    3750685593,
                    883997877,
                    3785050280,
                    958139571,
                    3318307427,
                    1322822218,
                    3812723403,
                    1537002063,
                    2003034995,
                    1747873779,
                    3602036899,
                    1955562222,
                    1575990012,
                    2024104815,
                    1125592928,
                    2227730452,
                    2716904306,
                    2361852424,
                    442776044,
                    2428436474,
                    593698344,
                    2756734187,
                    3733110249,
                    3204031479,
                    2999351573,
                    3329325298,
                    3815920427,
                    3391569614,
                    3928383900,
                    3515267271,
                    566280711,
                    3940187606,
                    3454069534,
                    4118630271,
                    4000239992,
                    116418474,
                    1914138554,
                    174292421,
                    2731055270,
                    289380356,
                    3203993006,
                    460393269,
                    320620315,
                    685471733,
                    587496836,
                    852142971,
                    1086792851,
                    1017036298,
                    365543100,
                    1126000580,
                    2618297676,
                    1288033470,
                    3409855158,
                    1501505948,
                    4234509866,
                    1607167915,
                    987167468,
                    1816402316,
                    1246189591
                ];
            function g() {
                if (!(this instanceof g)) return new g();
                y.call(this),
                    (this.h = [
                        1779033703,
                        4089235720,
                        3144134277,
                        2227873595,
                        1013904242,
                        4271175723,
                        2773480762,
                        1595750129,
                        1359893119,
                        2917565137,
                        2600822924,
                        725511199,
                        528734635,
                        4215389547,
                        1541459225,
                        327033209
                    ]),
                    (this.k = v),
                    (this.W = new Array(160));
            }
            function _(e, t, r, i, n) {
                var o = (e & r) ^ (~e & n);
                return o < 0 && (o += 4294967296), o;
            }
            function w(e, t, r, i, n, o) {
                var f = (t & i) ^ (~t & o);
                return f < 0 && (f += 4294967296), f;
            }
            function S(e, t, r, i, n) {
                var o = (e & r) ^ (e & n) ^ (r & n);
                return o < 0 && (o += 4294967296), o;
            }
            function E(e, t, r, i, n, o) {
                var f = (t & i) ^ (t & o) ^ (i & o);
                return f < 0 && (f += 4294967296), f;
            }
            function M(e, t) {
                var r = f(e, t, 28) ^ f(t, e, 2) ^ f(t, e, 7);
                return r < 0 && (r += 4294967296), r;
            }
            function A(e, t) {
                var r = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
                return r < 0 && (r += 4294967296), r;
            }
            function I(e, t) {
                var r = f(e, t, 14) ^ f(e, t, 18) ^ f(t, e, 9);
                return r < 0 && (r += 4294967296), r;
            }
            function k(e, t) {
                var r = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
                return r < 0 && (r += 4294967296), r;
            }
            function B(e, t) {
                var r = f(e, t, 1) ^ f(e, t, 8) ^ s(e, t, 7);
                return r < 0 && (r += 4294967296), r;
            }
            function x(e, t) {
                var r = a(e, t, 1) ^ a(e, t, 8) ^ c(e, t, 7);
                return r < 0 && (r += 4294967296), r;
            }
            function O(e, t) {
                var r = f(e, t, 19) ^ f(t, e, 29) ^ s(e, t, 6);
                return r < 0 && (r += 4294967296), r;
            }
            function P(e, t) {
                var r = a(e, t, 19) ^ a(t, e, 29) ^ c(e, t, 6);
                return r < 0 && (r += 4294967296), r;
            }
            i.inherits(g, y),
                (e.exports = g),
                (g.blockSize = 1024),
                (g.outSize = 512),
                (g.hmacStrength = 192),
                (g.padLength = 128),
                (g.prototype._prepareBlock = function(e, t) {
                    for (var r = this.W, i = 0; i < 32; i++) r[i] = e[t + i];
                    for (; i < r.length; i += 2) {
                        var n = O(r[i - 4], r[i - 3]),
                            o = P(r[i - 4], r[i - 3]),
                            f = r[i - 14],
                            a = r[i - 13],
                            s = B(r[i - 30], r[i - 29]),
                            c = x(r[i - 30], r[i - 29]),
                            h = r[i - 32],
                            d = r[i - 31];
                        (r[i] = p(n, o, f, a, s, c, h, d)),
                            (r[i + 1] = l(n, o, f, a, s, c, h, d));
                    }
                }),
                (g.prototype._update = function(e, t) {
                    this._prepareBlock(e, t);
                    var r = this.W,
                        i = this.h[0],
                        n = this.h[1],
                        f = this.h[2],
                        a = this.h[3],
                        s = this.h[4],
                        c = this.h[5],
                        p = this.h[6],
                        l = this.h[7],
                        y = this.h[8],
                        v = this.h[9],
                        g = this.h[10],
                        B = this.h[11],
                        x = this.h[12],
                        O = this.h[13],
                        P = this.h[14],
                        T = this.h[15];
                    o(this.k.length === r.length);
                    for (var D = 0; D < r.length; D += 2) {
                        var R = P,
                            N = T,
                            C = I(y, v),
                            L = k(y, v),
                            q = _(y, v, g, B, x),
                            j = w(y, v, g, B, x, O),
                            U = this.k[D],
                            z = this.k[D + 1],
                            K = r[D],
                            G = r[D + 1],
                            H = b(R, N, C, L, q, j, U, z, K, G),
                            F = m(R, N, C, L, q, j, U, z, K, G);
                        (R = M(i, n)),
                            (N = A(i, n)),
                            (C = S(i, n, f, a, s)),
                            (L = E(i, n, f, a, s, c));
                        var V = d(R, N, C, L),
                            $ = u(R, N, C, L);
                        (P = x),
                            (T = O),
                            (x = g),
                            (O = B),
                            (g = y),
                            (B = v),
                            (y = d(p, l, H, F)),
                            (v = u(l, l, H, F)),
                            (p = s),
                            (l = c),
                            (s = f),
                            (c = a),
                            (f = i),
                            (a = n),
                            (i = d(H, F, V, $)),
                            (n = u(H, F, V, $));
                    }
                    h(this.h, 0, i, n),
                        h(this.h, 2, f, a),
                        h(this.h, 4, s, c),
                        h(this.h, 6, p, l),
                        h(this.h, 8, y, v),
                        h(this.h, 10, g, B),
                        h(this.h, 12, x, O),
                        h(this.h, 14, P, T);
                }),
                (g.prototype._digest = function(e) {
                    return "hex" === e
                        ? i.toHex32(this.h, "big")
                        : i.split32(this.h, "big");
                });
        },
        1866: function(e, t, r) {
            var i = r(86),
                n = r(1811).Reporter,
                o = r(114).Buffer;
            function f(e, t) {
                n.call(this, t),
                    o.isBuffer(e)
                        ? ((this.base = e),
                          (this.offset = 0),
                          (this.length = e.length))
                        : this.error("Input not Buffer");
            }
            function a(e, t) {
                if (Array.isArray(e))
                    (this.length = 0),
                        (this.value = e.map(function(e) {
                            return (
                                e instanceof a || (e = new a(e, t)),
                                (this.length += e.length),
                                e
                            );
                        }, this));
                else if ("number" == typeof e) {
                    if (!(0 <= e && e <= 255))
                        return t.error("non-byte EncoderBuffer value");
                    (this.value = e), (this.length = 1);
                } else if ("string" == typeof e)
                    (this.value = e), (this.length = o.byteLength(e));
                else {
                    if (!o.isBuffer(e))
                        return t.error("Unsupported type: " + typeof e);
                    (this.value = e), (this.length = e.length);
                }
            }
            i(f, n),
                (t.DecoderBuffer = f),
                (f.prototype.save = function() {
                    return {
                        offset: this.offset,
                        reporter: n.prototype.save.call(this)
                    };
                }),
                (f.prototype.restore = function(e) {
                    var t = new f(this.base);
                    return (
                        (t.offset = e.offset),
                        (t.length = this.offset),
                        (this.offset = e.offset),
                        n.prototype.restore.call(this, e.reporter),
                        t
                    );
                }),
                (f.prototype.isEmpty = function() {
                    return this.offset === this.length;
                }),
                (f.prototype.readUInt8 = function(e) {
                    return this.offset + 1 <= this.length
                        ? this.base.readUInt8(this.offset++, !0)
                        : this.error(e || "DecoderBuffer overrun");
                }),
                (f.prototype.skip = function(e, t) {
                    if (!(this.offset + e <= this.length))
                        return this.error(t || "DecoderBuffer overrun");
                    var r = new f(this.base);
                    return (
                        (r._reporterState = this._reporterState),
                        (r.offset = this.offset),
                        (r.length = this.offset + e),
                        (this.offset += e),
                        r
                    );
                }),
                (f.prototype.raw = function(e) {
                    return this.base.slice(
                        e ? e.offset : this.offset,
                        this.length
                    );
                }),
                (t.EncoderBuffer = a),
                (a.prototype.join = function(e, t) {
                    return (
                        e || (e = new o(this.length)),
                        t || (t = 0),
                        0 === this.length
                            ? e
                            : (Array.isArray(this.value)
                                  ? this.value.forEach(function(r) {
                                        r.join(e, t), (t += r.length);
                                    })
                                  : ("number" == typeof this.value
                                        ? (e[t] = this.value)
                                        : "string" == typeof this.value
                                            ? e.write(this.value, t)
                                            : o.isBuffer(this.value) &&
                                              this.value.copy(e, t),
                                    (t += this.length)),
                              e)
                    );
                });
        },
        1867: function(e, t, r) {
            var i = t;
            (i._reverse = function(e) {
                var t = {};
                return (
                    Object.keys(e).forEach(function(r) {
                        (0 | r) == r && (r |= 0);
                        var i = e[r];
                        t[i] = r;
                    }),
                    t
                );
            }),
                (i.der = r(2015));
        },
        1868: function(e, t, r) {
            var i = r(86),
                n = r(1810),
                o = n.base,
                f = n.bignum,
                a = n.constants.der;
            function s(e) {
                (this.enc = "der"),
                    (this.name = e.name),
                    (this.entity = e),
                    (this.tree = new c()),
                    this.tree._init(e.body);
            }
            function c(e) {
                o.Node.call(this, "der", e);
            }
            function h(e, t) {
                var r = e.readUInt8(t);
                if (e.isError(r)) return r;
                var i = a.tagClass[r >> 6],
                    n = 0 == (32 & r);
                if (31 == (31 & r)) {
                    var o = r;
                    for (r = 0; 128 == (128 & o); ) {
                        if (((o = e.readUInt8(t)), e.isError(o))) return o;
                        (r <<= 7), (r |= 127 & o);
                    }
                } else r &= 31;
                return {cls: i, primitive: n, tag: r, tagStr: a.tag[r]};
            }
            function d(e, t, r) {
                var i = e.readUInt8(r);
                if (e.isError(i)) return i;
                if (!t && 128 === i) return null;
                if (0 == (128 & i)) return i;
                var n = 127 & i;
                if (n > 4) return e.error("length octect is too long");
                i = 0;
                for (var o = 0; o < n; o++) {
                    i <<= 8;
                    var f = e.readUInt8(r);
                    if (e.isError(f)) return f;
                    i |= f;
                }
                return i;
            }
            (e.exports = s),
                (s.prototype.decode = function(e, t) {
                    return (
                        e instanceof o.DecoderBuffer ||
                            (e = new o.DecoderBuffer(e, t)),
                        this.tree._decode(e, t)
                    );
                }),
                i(c, o.Node),
                (c.prototype._peekTag = function(e, t, r) {
                    if (e.isEmpty()) return !1;
                    var i = e.save(),
                        n = h(e, 'Failed to peek tag: "' + t + '"');
                    return e.isError(n)
                        ? n
                        : (e.restore(i),
                          n.tag === t ||
                              n.tagStr === t ||
                              n.tagStr + "of" === t ||
                              r);
                }),
                (c.prototype._decodeTag = function(e, t, r) {
                    var i = h(e, 'Failed to decode tag of "' + t + '"');
                    if (e.isError(i)) return i;
                    var n = d(
                        e,
                        i.primitive,
                        'Failed to get length of "' + t + '"'
                    );
                    if (e.isError(n)) return n;
                    if (
                        !r &&
                        i.tag !== t &&
                        i.tagStr !== t &&
                        i.tagStr + "of" !== t
                    )
                        return e.error('Failed to match tag: "' + t + '"');
                    if (i.primitive || null !== n)
                        return e.skip(
                            n,
                            'Failed to match body of: "' + t + '"'
                        );
                    var o = e.save(),
                        f = this._skipUntilEnd(
                            e,
                            'Failed to skip indefinite length body: "' +
                                this.tag +
                                '"'
                        );
                    return e.isError(f)
                        ? f
                        : ((n = e.offset - o.offset),
                          e.restore(o),
                          e.skip(n, 'Failed to match body of: "' + t + '"'));
                }),
                (c.prototype._skipUntilEnd = function(e, t) {
                    for (;;) {
                        var r = h(e, t);
                        if (e.isError(r)) return r;
                        var i,
                            n = d(e, r.primitive, t);
                        if (e.isError(n)) return n;
                        if (
                            ((i =
                                r.primitive || null !== n
                                    ? e.skip(n)
                                    : this._skipUntilEnd(e, t)),
                            e.isError(i))
                        )
                            return i;
                        if ("end" === r.tagStr) break;
                    }
                }),
                (c.prototype._decodeList = function(e, t, r, i) {
                    for (var n = []; !e.isEmpty(); ) {
                        var o = this._peekTag(e, "end");
                        if (e.isError(o)) return o;
                        var f = r.decode(e, "der", i);
                        if (e.isError(f) && o) break;
                        n.push(f);
                    }
                    return n;
                }),
                (c.prototype._decodeStr = function(e, t) {
                    if ("bitstr" === t) {
                        var r = e.readUInt8();
                        return e.isError(r) ? r : {unused: r, data: e.raw()};
                    }
                    if ("bmpstr" === t) {
                        var i = e.raw();
                        if (i.length % 2 == 1)
                            return e.error(
                                "Decoding of string type: bmpstr length mismatch"
                            );
                        for (var n = "", o = 0; o < i.length / 2; o++)
                            n += String.fromCharCode(i.readUInt16BE(2 * o));
                        return n;
                    }
                    if ("numstr" === t) {
                        var f = e.raw().toString("ascii");
                        return this._isNumstr(f)
                            ? f
                            : e.error(
                                  "Decoding of string type: numstr unsupported characters"
                              );
                    }
                    if ("octstr" === t) return e.raw();
                    if ("objDesc" === t) return e.raw();
                    if ("printstr" === t) {
                        var a = e.raw().toString("ascii");
                        return this._isPrintstr(a)
                            ? a
                            : e.error(
                                  "Decoding of string type: printstr unsupported characters"
                              );
                    }
                    return /str$/.test(t)
                        ? e.raw().toString()
                        : e.error(
                              "Decoding of string type: " + t + " unsupported"
                          );
                }),
                (c.prototype._decodeObjid = function(e, t, r) {
                    for (var i, n = [], o = 0; !e.isEmpty(); ) {
                        var f = e.readUInt8();
                        (o <<= 7),
                            (o |= 127 & f),
                            0 == (128 & f) && (n.push(o), (o = 0));
                    }
                    128 & f && n.push(o);
                    var a = (n[0] / 40) | 0,
                        s = n[0] % 40;
                    if (((i = r ? n : [a, s].concat(n.slice(1))), t)) {
                        var c = t[i.join(" ")];
                        void 0 === c && (c = t[i.join(".")]),
                            void 0 !== c && (i = c);
                    }
                    return i;
                }),
                (c.prototype._decodeTime = function(e, t) {
                    var r = e.raw().toString();
                    if ("gentime" === t)
                        var i = 0 | r.slice(0, 4),
                            n = 0 | r.slice(4, 6),
                            o = 0 | r.slice(6, 8),
                            f = 0 | r.slice(8, 10),
                            a = 0 | r.slice(10, 12),
                            s = 0 | r.slice(12, 14);
                    else {
                        if ("utctime" !== t)
                            return e.error(
                                "Decoding " + t + " time is not supported yet"
                            );
                        (i = 0 | r.slice(0, 2)),
                            (n = 0 | r.slice(2, 4)),
                            (o = 0 | r.slice(4, 6)),
                            (f = 0 | r.slice(6, 8)),
                            (a = 0 | r.slice(8, 10)),
                            (s = 0 | r.slice(10, 12));
                        i = i < 70 ? 2e3 + i : 1900 + i;
                    }
                    return Date.UTC(i, n - 1, o, f, a, s, 0);
                }),
                (c.prototype._decodeNull = function(e) {
                    return null;
                }),
                (c.prototype._decodeBool = function(e) {
                    var t = e.readUInt8();
                    return e.isError(t) ? t : 0 !== t;
                }),
                (c.prototype._decodeInt = function(e, t) {
                    var r = e.raw(),
                        i = new f(r);
                    return t && (i = t[i.toString(10)] || i), i;
                }),
                (c.prototype._use = function(e, t) {
                    return (
                        "function" == typeof e && (e = e(t)),
                        e._getDecoder("der").tree
                    );
                });
        },
        1869: function(e, t, r) {
            var i = r(86),
                n = r(114).Buffer,
                o = r(1810),
                f = o.base,
                a = o.constants.der;
            function s(e) {
                (this.enc = "der"),
                    (this.name = e.name),
                    (this.entity = e),
                    (this.tree = new c()),
                    this.tree._init(e.body);
            }
            function c(e) {
                f.Node.call(this, "der", e);
            }
            function h(e) {
                return e < 10 ? "0" + e : e;
            }
            (e.exports = s),
                (s.prototype.encode = function(e, t) {
                    return this.tree._encode(e, t).join();
                }),
                i(c, f.Node),
                (c.prototype._encodeComposite = function(e, t, r, i) {
                    var o,
                        f = (function(e, t, r, i) {
                            var n;
                            "seqof" === e
                                ? (e = "seq")
                                : "setof" === e && (e = "set");
                            if (a.tagByName.hasOwnProperty(e))
                                n = a.tagByName[e];
                            else {
                                if ("number" != typeof e || (0 | e) !== e)
                                    return i.error("Unknown tag: " + e);
                                n = e;
                            }
                            if (n >= 31)
                                return i.error(
                                    "Multi-octet tag encoding unsupported"
                                );
                            t || (n |= 32);
                            return (n |=
                                a.tagClassByName[r || "universal"] << 6);
                        })(e, t, r, this.reporter);
                    if (i.length < 128)
                        return (
                            ((o = new n(2))[0] = f),
                            (o[1] = i.length),
                            this._createEncoderBuffer([o, i])
                        );
                    for (var s = 1, c = i.length; c >= 256; c >>= 8) s++;
                    ((o = new n(2 + s))[0] = f), (o[1] = 128 | s);
                    c = 1 + s;
                    for (var h = i.length; h > 0; c--, h >>= 8) o[c] = 255 & h;
                    return this._createEncoderBuffer([o, i]);
                }),
                (c.prototype._encodeStr = function(e, t) {
                    if ("bitstr" === t)
                        return this._createEncoderBuffer([
                            0 | e.unused,
                            e.data
                        ]);
                    if ("bmpstr" === t) {
                        for (
                            var r = new n(2 * e.length), i = 0;
                            i < e.length;
                            i++
                        )
                            r.writeUInt16BE(e.charCodeAt(i), 2 * i);
                        return this._createEncoderBuffer(r);
                    }
                    return "numstr" === t
                        ? this._isNumstr(e)
                            ? this._createEncoderBuffer(e)
                            : this.reporter.error(
                                  "Encoding of string type: numstr supports only digits and space"
                              )
                        : "printstr" === t
                            ? this._isPrintstr(e)
                                ? this._createEncoderBuffer(e)
                                : this.reporter.error(
                                      "Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark"
                                  )
                            : /str$/.test(t)
                                ? this._createEncoderBuffer(e)
                                : "objDesc" === t
                                    ? this._createEncoderBuffer(e)
                                    : this.reporter.error(
                                          "Encoding of string type: " +
                                              t +
                                              " unsupported"
                                      );
                }),
                (c.prototype._encodeObjid = function(e, t, r) {
                    if ("string" == typeof e) {
                        if (!t)
                            return this.reporter.error(
                                "string objid given, but no values map found"
                            );
                        if (!t.hasOwnProperty(e))
                            return this.reporter.error(
                                "objid not found in values map"
                            );
                        e = t[e].split(/[\s\.]+/g);
                        for (var i = 0; i < e.length; i++) e[i] |= 0;
                    } else if (Array.isArray(e)) {
                        e = e.slice();
                        for (i = 0; i < e.length; i++) e[i] |= 0;
                    }
                    if (!Array.isArray(e))
                        return this.reporter.error(
                            "objid() should be either array or string, got: " +
                                JSON.stringify(e)
                        );
                    if (!r) {
                        if (e[1] >= 40)
                            return this.reporter.error(
                                "Second objid identifier OOB"
                            );
                        e.splice(0, 2, 40 * e[0] + e[1]);
                    }
                    var o = 0;
                    for (i = 0; i < e.length; i++) {
                        var f = e[i];
                        for (o++; f >= 128; f >>= 7) o++;
                    }
                    var a = new n(o),
                        s = a.length - 1;
                    for (i = e.length - 1; i >= 0; i--) {
                        f = e[i];
                        for (a[s--] = 127 & f; (f >>= 7) > 0; )
                            a[s--] = 128 | (127 & f);
                    }
                    return this._createEncoderBuffer(a);
                }),
                (c.prototype._encodeTime = function(e, t) {
                    var r,
                        i = new Date(e);
                    return (
                        "gentime" === t
                            ? (r = [
                                  h(i.getFullYear()),
                                  h(i.getUTCMonth() + 1),
                                  h(i.getUTCDate()),
                                  h(i.getUTCHours()),
                                  h(i.getUTCMinutes()),
                                  h(i.getUTCSeconds()),
                                  "Z"
                              ].join(""))
                            : "utctime" === t
                                ? (r = [
                                      h(i.getFullYear() % 100),
                                      h(i.getUTCMonth() + 1),
                                      h(i.getUTCDate()),
                                      h(i.getUTCHours()),
                                      h(i.getUTCMinutes()),
                                      h(i.getUTCSeconds()),
                                      "Z"
                                  ].join(""))
                                : this.reporter.error(
                                      "Encoding " +
                                          t +
                                          " time is not supported yet"
                                  ),
                        this._encodeStr(r, "octstr")
                    );
                }),
                (c.prototype._encodeNull = function() {
                    return this._createEncoderBuffer("");
                }),
                (c.prototype._encodeInt = function(e, t) {
                    if ("string" == typeof e) {
                        if (!t)
                            return this.reporter.error(
                                "String int or enum given, but no values map"
                            );
                        if (!t.hasOwnProperty(e))
                            return this.reporter.error(
                                "Values map doesn't contain: " +
                                    JSON.stringify(e)
                            );
                        e = t[e];
                    }
                    if ("number" != typeof e && !n.isBuffer(e)) {
                        var r = e.toArray();
                        !e.sign && 128 & r[0] && r.unshift(0), (e = new n(r));
                    }
                    if (n.isBuffer(e)) {
                        var i = e.length;
                        0 === e.length && i++;
                        var o = new n(i);
                        return (
                            e.copy(o),
                            0 === e.length && (o[0] = 0),
                            this._createEncoderBuffer(o)
                        );
                    }
                    if (e < 128) return this._createEncoderBuffer(e);
                    if (e < 256) return this._createEncoderBuffer([0, e]);
                    i = 1;
                    for (var f = e; f >= 256; f >>= 8) i++;
                    for (f = (o = new Array(i)).length - 1; f >= 0; f--)
                        (o[f] = 255 & e), (e >>= 8);
                    return (
                        128 & o[0] && o.unshift(0),
                        this._createEncoderBuffer(new n(o))
                    );
                }),
                (c.prototype._encodeBool = function(e) {
                    return this._createEncoderBuffer(e ? 255 : 0);
                }),
                (c.prototype._use = function(e, t) {
                    return (
                        "function" == typeof e && (e = e(t)),
                        e._getEncoder("der").tree
                    );
                }),
                (c.prototype._skipDefault = function(e, t, r) {
                    var i,
                        n = this._baseState;
                    if (null === n.default) return !1;
                    var o = e.join();
                    if (
                        (void 0 === n.defaultBuffer &&
                            (n.defaultBuffer = this._encodeValue(
                                n.default,
                                t,
                                r
                            ).join()),
                        o.length !== n.defaultBuffer.length)
                    )
                        return !1;
                    for (i = 0; i < o.length; i++)
                        if (o[i] !== n.defaultBuffer[i]) return !1;
                    return !0;
                });
        },
        1870: function(e) {
            e.exports = {
                "1.3.132.0.10": "secp256k1",
                "1.3.132.0.33": "p224",
                "1.2.840.10045.3.1.1": "p192",
                "1.2.840.10045.3.1.7": "p256",
                "1.3.132.0.34": "p384",
                "1.3.132.0.35": "p521"
            };
        },
        1871: function(e, t, r) {
            (function(t) {
                var i = r(302);
                function n(e) {
                    var r = new t(4);
                    return r.writeUInt32BE(e, 0), r;
                }
                e.exports = function(e, r) {
                    for (var o, f = new t(""), a = 0; f.length < r; )
                        (o = n(a++)),
                            (f = t.concat([
                                f,
                                i("sha1")
                                    .update(e)
                                    .update(o)
                                    .digest()
                            ]));
                    return f.slice(0, r);
                };
            }.call(this, r(114).Buffer));
        },
        1872: function(e, t) {
            e.exports = function(e, t) {
                for (var r = e.length, i = -1; ++i < r; ) e[i] ^= t[i];
                return e;
            };
        },
        1873: function(e, t, r) {
            (function(t) {
                var i = r(1777);
                e.exports = function(e, r) {
                    return new t(
                        e
                            .toRed(i.mont(r.modulus))
                            .redPow(new i(r.publicExponent))
                            .fromRed()
                            .toArray()
                    );
                };
            }.call(this, r(114).Buffer));
        },
        1874: function(e, t, r) {
            var i = r(1812),
                n = r(1804);
            e.exports = function(e, t) {
                var r = n.pkcs1.makeScheme(e, t);
                return {
                    encrypt: function(t, n) {
                        var o, f;
                        return (
                            n
                                ? ((o = new i(r.encPad(t, {type: 1}))),
                                  (f = e.$doPrivate(o)))
                                : ((o = new i(e.encryptionScheme.encPad(t))),
                                  (f = e.$doPublic(o))),
                            f.toBuffer(e.encryptedDataLength)
                        );
                    },
                    decrypt: function(t, n) {
                        var o,
                            f = new i(t);
                        return n
                            ? ((o = e.$doPublic(f)),
                              r.encUnPad(o.toBuffer(e.encryptedDataLength), {
                                  type: 1
                              }))
                            : ((o = e.$doPrivate(f)),
                              e.encryptionScheme.encUnPad(
                                  o.toBuffer(e.encryptedDataLength)
                              ));
                    }
                };
            };
        },
        1961: function(e, t, r) {
            (function(t) {
                /*!
 * RSA library for Node.js
 *
 * Copyright (c) 2014 rzcoder
 * All Rights Reserved.
 *
 * License BSD
 */
                var i = r(1817),
                    n = r(1962),
                    o = (r(1786), r(1835).Ber, r(1782)._),
                    f = r(1782),
                    a = r(1804),
                    s = r(2038);
                void 0 === i.RSA_NO_PADDING && (i.RSA_NO_PADDING = 3),
                    (e.exports = (function() {
                        var e = {
                                node10: [
                                    "md4",
                                    "md5",
                                    "ripemd160",
                                    "sha",
                                    "sha1",
                                    "sha224",
                                    "sha256",
                                    "sha384",
                                    "sha512"
                                ],
                                node: [
                                    "md4",
                                    "md5",
                                    "ripemd160",
                                    "sha",
                                    "sha1",
                                    "sha224",
                                    "sha256",
                                    "sha384",
                                    "sha512"
                                ],
                                iojs: [
                                    "md4",
                                    "md5",
                                    "ripemd160",
                                    "sha",
                                    "sha1",
                                    "sha224",
                                    "sha256",
                                    "sha384",
                                    "sha512"
                                ],
                                browser: [
                                    "md5",
                                    "ripemd160",
                                    "sha1",
                                    "sha256",
                                    "sha512"
                                ]
                            },
                            r = "pkcs1_oaep",
                            i = "pkcs1",
                            c = {
                                private: "pkcs1-private-pem",
                                "private-der": "pkcs1-private-der",
                                public: "pkcs8-public-pem",
                                "public-der": "pkcs8-public-der"
                            };
                        function h(e, a, s) {
                            if (!(this instanceof h)) return new h(e, a, s);
                            o.isObject(a) && ((s = a), (a = void 0)),
                                (this.$options = {
                                    signingScheme: i,
                                    signingSchemeOptions: {
                                        hash: "sha256",
                                        saltLength: null
                                    },
                                    encryptionScheme: r,
                                    encryptionSchemeOptions: {
                                        hash: "sha1",
                                        label: null
                                    },
                                    environment: f.detectEnvironment(),
                                    rsaUtils: this
                                }),
                                (this.keyPair = new n.Key()),
                                (this.$cache = {}),
                                t.isBuffer(e) || o.isString(e)
                                    ? this.importKey(e, a)
                                    : o.isObject(e) &&
                                      this.generateKeyPair(e.b, e.e),
                                this.setOptions(s);
                        }
                        return (
                            (h.prototype.setOptions = function(t) {
                                if (
                                    ((t = t || {}).environment &&
                                        (this.$options.environment =
                                            t.environment),
                                    t.signingScheme)
                                ) {
                                    if (o.isString(t.signingScheme)) {
                                        var n = t.signingScheme
                                            .toLowerCase()
                                            .split("-");
                                        1 == n.length
                                            ? e.node.indexOf(n[0]) > -1
                                                ? ((this.$options.signingSchemeOptions = {
                                                      hash: n[0]
                                                  }),
                                                  (this.$options.signingScheme = i))
                                                : ((this.$options.signingScheme =
                                                      n[0]),
                                                  (this.$options.signingSchemeOptions = {
                                                      hash: null
                                                  }))
                                            : ((this.$options.signingSchemeOptions = {
                                                  hash: n[1]
                                              }),
                                              (this.$options.signingScheme =
                                                  n[0]));
                                    } else
                                        o.isObject(t.signingScheme) &&
                                            ((this.$options.signingScheme =
                                                t.signingScheme.scheme || i),
                                            (this.$options.signingSchemeOptions = o.omit(
                                                t.signingScheme,
                                                "scheme"
                                            )));
                                    if (
                                        !a.isSignature(
                                            this.$options.signingScheme
                                        )
                                    )
                                        throw Error(
                                            "Unsupported signing scheme"
                                        );
                                    if (
                                        this.$options.signingSchemeOptions
                                            .hash &&
                                        -1 ===
                                            e[
                                                this.$options.environment
                                            ].indexOf(
                                                this.$options
                                                    .signingSchemeOptions.hash
                                            )
                                    )
                                        throw Error(
                                            "Unsupported hashing algorithm for " +
                                                this.$options.environment +
                                                " environment"
                                        );
                                }
                                if (t.encryptionScheme) {
                                    if (
                                        (o.isString(t.encryptionScheme)
                                            ? ((this.$options.encryptionScheme = t.encryptionScheme.toLowerCase()),
                                              (this.$options.encryptionSchemeOptions = {}))
                                            : o.isObject(t.encryptionScheme) &&
                                              ((this.$options.encryptionScheme =
                                                  t.encryptionScheme.scheme ||
                                                  r),
                                              (this.$options.encryptionSchemeOptions = o.omit(
                                                  t.encryptionScheme,
                                                  "scheme"
                                              ))),
                                        !a.isEncryption(
                                            this.$options.encryptionScheme
                                        ))
                                    )
                                        throw Error(
                                            "Unsupported encryption scheme"
                                        );
                                    if (
                                        this.$options.encryptionSchemeOptions
                                            .hash &&
                                        -1 ===
                                            e[
                                                this.$options.environment
                                            ].indexOf(
                                                this.$options
                                                    .encryptionSchemeOptions
                                                    .hash
                                            )
                                    )
                                        throw Error(
                                            "Unsupported hashing algorithm for " +
                                                this.$options.environment +
                                                " environment"
                                        );
                                }
                                this.keyPair.setOptions(this.$options);
                            }),
                            (h.prototype.generateKeyPair = function(e, t) {
                                if (
                                    ((e = e || 2048),
                                    (t = t || 65537),
                                    e % 8 != 0)
                                )
                                    throw Error(
                                        "Key size must be a multiple of 8."
                                    );
                                return (
                                    this.keyPair.generate(e, t.toString(16)),
                                    (this.$cache = {}),
                                    this
                                );
                            }),
                            (h.prototype.importKey = function(e, t) {
                                if (!e) throw Error("Empty key given");
                                if (
                                    (t && (t = c[t] || t),
                                    !s.detectAndImport(this.keyPair, e, t) &&
                                        void 0 === t)
                                )
                                    throw Error("Key format must be specified");
                                this.$cache = {};
                            }),
                            (h.prototype.exportKey = function(e) {
                                return (
                                    (e = c[(e = e || "private")] || e),
                                    this.$cache[e] ||
                                        (this.$cache[e] = s.detectAndExport(
                                            this.keyPair,
                                            e
                                        )),
                                    this.$cache[e]
                                );
                            }),
                            (h.prototype.isPrivate = function() {
                                return this.keyPair.isPrivate();
                            }),
                            (h.prototype.isPublic = function(e) {
                                return this.keyPair.isPublic(e);
                            }),
                            (h.prototype.isEmpty = function(e) {
                                return !(
                                    this.keyPair.n ||
                                    this.keyPair.e ||
                                    this.keyPair.d
                                );
                            }),
                            (h.prototype.encrypt = function(e, t, r) {
                                return this.$$encryptKey(!1, e, t, r);
                            }),
                            (h.prototype.decrypt = function(e, t) {
                                return this.$$decryptKey(!1, e, t);
                            }),
                            (h.prototype.encryptPrivate = function(e, t, r) {
                                return this.$$encryptKey(!0, e, t, r);
                            }),
                            (h.prototype.decryptPublic = function(e, t) {
                                return this.$$decryptKey(!0, e, t);
                            }),
                            (h.prototype.$$encryptKey = function(e, t, r, i) {
                                try {
                                    var n = this.keyPair.encrypt(
                                        this.$getDataForEncrypt(t, i),
                                        e
                                    );
                                    return "buffer" != r && r
                                        ? n.toString(r)
                                        : n;
                                } catch (e) {
                                    throw Error(
                                        "Error during encryption. Original error: " +
                                            e
                                    );
                                }
                            }),
                            (h.prototype.$$decryptKey = function(e, r, i) {
                                try {
                                    r = o.isString(r) ? new t(r, "base64") : r;
                                    var n = this.keyPair.decrypt(r, e);
                                    if (null === n)
                                        throw Error(
                                            "Key decrypt method returns null."
                                        );
                                    return this.$getDecryptedData(n, i);
                                } catch (e) {
                                    throw Error(
                                        "Error during decryption (probably incorrect key). Original error: " +
                                            e
                                    );
                                }
                            }),
                            (h.prototype.sign = function(e, t, r) {
                                if (!this.isPrivate())
                                    throw Error("This is not private key");
                                var i = this.keyPair.sign(
                                    this.$getDataForEncrypt(e, r)
                                );
                                return (
                                    t && "buffer" != t && (i = i.toString(t)), i
                                );
                            }),
                            (h.prototype.verify = function(e, t, r, i) {
                                if (!this.isPublic())
                                    throw Error("This is not public key");
                                return (
                                    (i = i && "buffer" != i ? i : null),
                                    this.keyPair.verify(
                                        this.$getDataForEncrypt(e, r),
                                        t,
                                        i
                                    )
                                );
                            }),
                            (h.prototype.getKeySize = function() {
                                return this.keyPair.keySize;
                            }),
                            (h.prototype.getMaxMessageSize = function() {
                                return this.keyPair.maxMessageLength;
                            }),
                            (h.prototype.$getDataForEncrypt = function(e, r) {
                                if (o.isString(e) || o.isNumber(e))
                                    return new t("" + e, r || "utf8");
                                if (t.isBuffer(e)) return e;
                                if (o.isObject(e))
                                    return new t(JSON.stringify(e));
                                throw Error("Unexpected data type");
                            }),
                            (h.prototype.$getDecryptedData = function(e, t) {
                                return "buffer" == (t = t || "buffer")
                                    ? e
                                    : "json" == t
                                        ? JSON.parse(e.toString())
                                        : e.toString(t);
                            }),
                            h
                        );
                    })());
            }.call(this, r(114).Buffer));
        },
        1962: function(e, t, r) {
            (function(i) {
                var n = r(1782)._,
                    o = (r(1786), r(1812)),
                    f = r(1782),
                    a = r(1804),
                    s = r(2032);
                (t.BigInteger = o),
                    (e.exports.Key = (function() {
                        function e() {
                            (this.n = null),
                                (this.e = 0),
                                (this.d = null),
                                (this.p = null),
                                (this.q = null),
                                (this.dmp1 = null),
                                (this.dmq1 = null),
                                (this.coeff = null);
                        }
                        return (
                            (e.prototype.setOptions = function(e) {
                                var t = a[e.signingScheme],
                                    r = a[e.encryptionScheme];
                                t === r
                                    ? (this.signingScheme = this.encryptionScheme = r.makeScheme(
                                          this,
                                          e
                                      ))
                                    : ((this.encryptionScheme = r.makeScheme(
                                          this,
                                          e
                                      )),
                                      (this.signingScheme = t.makeScheme(
                                          this,
                                          e
                                      ))),
                                    (this.encryptEngine = s.getEngine(this, e));
                            }),
                            (e.prototype.generate = function(e, t) {
                                var r = e >> 1;
                                this.e = parseInt(t, 16);
                                for (var i = new o(t, 16); ; ) {
                                    for (
                                        ;
                                        (this.p = new o(e - r, 1)),
                                            0 !==
                                                this.p
                                                    .subtract(o.ONE)
                                                    .gcd(i)
                                                    .compareTo(o.ONE) ||
                                                !this.p.isProbablePrime(10);

                                    );
                                    for (
                                        ;
                                        (this.q = new o(r, 1)),
                                            0 !==
                                                this.q
                                                    .subtract(o.ONE)
                                                    .gcd(i)
                                                    .compareTo(o.ONE) ||
                                                !this.q.isProbablePrime(10);

                                    );
                                    if (this.p.compareTo(this.q) <= 0) {
                                        var n = this.p;
                                        (this.p = this.q), (this.q = n);
                                    }
                                    var f = this.p.subtract(o.ONE),
                                        a = this.q.subtract(o.ONE),
                                        s = f.multiply(a);
                                    if (0 === s.gcd(i).compareTo(o.ONE)) {
                                        if (
                                            ((this.n = this.p.multiply(this.q)),
                                            this.n.bitLength() < e)
                                        )
                                            continue;
                                        (this.d = i.modInverse(s)),
                                            (this.dmp1 = this.d.mod(f)),
                                            (this.dmq1 = this.d.mod(a)),
                                            (this.coeff = this.q.modInverse(
                                                this.p
                                            ));
                                        break;
                                    }
                                }
                                this.$$recalculateCache();
                            }),
                            (e.prototype.setPrivate = function(
                                e,
                                t,
                                r,
                                i,
                                a,
                                s,
                                c,
                                h
                            ) {
                                if (
                                    !(
                                        e &&
                                        t &&
                                        r &&
                                        e.length > 0 &&
                                        (n.isNumber(t) || t.length > 0) &&
                                        r.length > 0
                                    )
                                )
                                    throw Error("Invalid RSA private key");
                                (this.n = new o(e)),
                                    (this.e = n.isNumber(t)
                                        ? t
                                        : f.get32IntFromBuffer(t, 0)),
                                    (this.d = new o(r)),
                                    i &&
                                        a &&
                                        s &&
                                        c &&
                                        h &&
                                        ((this.p = new o(i)),
                                        (this.q = new o(a)),
                                        (this.dmp1 = new o(s)),
                                        (this.dmq1 = new o(c)),
                                        (this.coeff = new o(h))),
                                    this.$$recalculateCache();
                            }),
                            (e.prototype.setPublic = function(e, t) {
                                if (
                                    !(
                                        e &&
                                        t &&
                                        e.length > 0 &&
                                        (n.isNumber(t) || t.length > 0)
                                    )
                                )
                                    throw Error("Invalid RSA public key");
                                (this.n = new o(e)),
                                    (this.e = n.isNumber(t)
                                        ? t
                                        : f.get32IntFromBuffer(t, 0)),
                                    this.$$recalculateCache();
                            }),
                            (e.prototype.$doPrivate = function(e) {
                                if (this.p || this.q)
                                    return e.modPow(this.d, this.n);
                                for (
                                    var t = e
                                            .mod(this.p)
                                            .modPow(this.dmp1, this.p),
                                        r = e
                                            .mod(this.q)
                                            .modPow(this.dmq1, this.q);
                                    t.compareTo(r) < 0;

                                )
                                    t = t.add(this.p);
                                return t
                                    .subtract(r)
                                    .multiply(this.coeff)
                                    .mod(this.p)
                                    .multiply(this.q)
                                    .add(r);
                            }),
                            (e.prototype.$doPublic = function(e) {
                                return e.modPowInt(this.e, this.n);
                            }),
                            (e.prototype.encrypt = function(e, t) {
                                var r = [],
                                    n = [],
                                    o = e.length,
                                    f =
                                        Math.ceil(o / this.maxMessageLength) ||
                                        1,
                                    a = Math.ceil(o / f || 1);
                                if (1 == f) r.push(e);
                                else
                                    for (var s = 0; s < f; s++)
                                        r.push(e.slice(s * a, (s + 1) * a));
                                for (var c = 0; c < r.length; c++)
                                    n.push(this.encryptEngine.encrypt(r[c], t));
                                return i.concat(n);
                            }),
                            (e.prototype.decrypt = function(e, t) {
                                if (e.length % this.encryptedDataLength > 0)
                                    throw Error("Incorrect data or key");
                                for (
                                    var r = [],
                                        n = 0,
                                        o = 0,
                                        f = e.length / this.encryptedDataLength,
                                        a = 0;
                                    a < f;
                                    a++
                                )
                                    (o =
                                        (n = a * this.encryptedDataLength) +
                                        this.encryptedDataLength),
                                        r.push(
                                            this.encryptEngine.decrypt(
                                                e.slice(
                                                    n,
                                                    Math.min(o, e.length)
                                                ),
                                                t
                                            )
                                        );
                                return i.concat(r);
                            }),
                            (e.prototype.sign = function(e) {
                                return this.signingScheme.sign.apply(
                                    this.signingScheme,
                                    arguments
                                );
                            }),
                            (e.prototype.verify = function(e, t, r) {
                                return this.signingScheme.verify.apply(
                                    this.signingScheme,
                                    arguments
                                );
                            }),
                            (e.prototype.isPrivate = function() {
                                return (this.n && this.e && this.d) || !1;
                            }),
                            (e.prototype.isPublic = function(e) {
                                return (
                                    (this.n && this.e && !(e && this.d)) || !1
                                );
                            }),
                            Object.defineProperty(e.prototype, "keySize", {
                                get: function() {
                                    return this.cache.keyBitLength;
                                }
                            }),
                            Object.defineProperty(
                                e.prototype,
                                "encryptedDataLength",
                                {
                                    get: function() {
                                        return this.cache.keyByteLength;
                                    }
                                }
                            ),
                            Object.defineProperty(
                                e.prototype,
                                "maxMessageLength",
                                {
                                    get: function() {
                                        return this.encryptionScheme.maxMessageLength();
                                    }
                                }
                            ),
                            (e.prototype.$$recalculateCache = function() {
                                (this.cache = this.cache || {}),
                                    (this.cache.keyBitLength = this.n.bitLength()),
                                    (this.cache.keyByteLength =
                                        (this.cache.keyBitLength + 6) >> 3);
                            }),
                            e
                        );
                    })());
            }.call(this, r(114).Buffer));
        },
        1963: function(e, t, r) {
            e.exports = r(1849);
        },
        1964: function(e, t, r) {
            (function(t, i) {
                var n,
                    o = r(1851),
                    f = r(1852),
                    a = r(1853),
                    s = r(60).Buffer,
                    c = t.crypto && t.crypto.subtle,
                    h = {
                        sha: "SHA-1",
                        "sha-1": "SHA-1",
                        sha1: "SHA-1",
                        sha256: "SHA-256",
                        "sha-256": "SHA-256",
                        sha384: "SHA-384",
                        "sha-384": "SHA-384",
                        "sha-512": "SHA-512",
                        sha512: "SHA-512"
                    },
                    d = [];
                function u(e, t, r, i, n) {
                    return c
                        .importKey("raw", e, {name: "PBKDF2"}, !1, [
                            "deriveBits"
                        ])
                        .then(function(e) {
                            return c.deriveBits(
                                {
                                    name: "PBKDF2",
                                    salt: t,
                                    iterations: r,
                                    hash: {name: n}
                                },
                                e,
                                i << 3
                            );
                        })
                        .then(function(e) {
                            return s.from(e);
                        });
                }
                e.exports = function(e, r, p, l, b, m) {
                    "function" == typeof b && ((m = b), (b = void 0));
                    var y = h[(b = b || "sha1").toLowerCase()];
                    if (!y || "function" != typeof t.Promise)
                        return i.nextTick(function() {
                            var t;
                            try {
                                t = a(e, r, p, l, b);
                            } catch (e) {
                                return m(e);
                            }
                            m(null, t);
                        });
                    if ((o(e, r, p, l), "function" != typeof m))
                        throw new Error("No callback provided to pbkdf2");
                    s.isBuffer(e) || (e = s.from(e, f)),
                        s.isBuffer(r) || (r = s.from(r, f)),
                        (function(e, t) {
                            e.then(
                                function(e) {
                                    i.nextTick(function() {
                                        t(null, e);
                                    });
                                },
                                function(e) {
                                    i.nextTick(function() {
                                        t(e);
                                    });
                                }
                            );
                        })(
                            (function(e) {
                                if (t.process && !t.process.browser)
                                    return Promise.resolve(!1);
                                if (!c || !c.importKey || !c.deriveBits)
                                    return Promise.resolve(!1);
                                if (void 0 !== d[e]) return d[e];
                                var r = u((n = n || s.alloc(8)), n, 10, 128, e)
                                    .then(function() {
                                        return !0;
                                    })
                                    .catch(function() {
                                        return !1;
                                    });
                                return (d[e] = r), r;
                            })(y).then(function(t) {
                                return t ? u(e, r, p, l, y) : a(e, r, p, l, b);
                            }),
                            m
                        );
                };
            }.call(this, r(53), r(108)));
        },
        1965: function(e, t, r) {
            var i = r(1966),
                n = r(1831),
                o = r(1832),
                f = r(1981),
                a = r(1819);
            function s(e, t, r) {
                if (((e = e.toLowerCase()), o[e]))
                    return n.createCipheriv(e, t, r);
                if (f[e]) return new i({key: t, iv: r, mode: e});
                throw new TypeError("invalid suite type");
            }
            function c(e, t, r) {
                if (((e = e.toLowerCase()), o[e]))
                    return n.createDecipheriv(e, t, r);
                if (f[e]) return new i({key: t, iv: r, mode: e, decrypt: !0});
                throw new TypeError("invalid suite type");
            }
            (t.createCipher = t.Cipher = function(e, t) {
                var r, i;
                if (((e = e.toLowerCase()), o[e]))
                    (r = o[e].key), (i = o[e].iv);
                else {
                    if (!f[e]) throw new TypeError("invalid suite type");
                    (r = 8 * f[e].key), (i = f[e].iv);
                }
                var n = a(t, !1, r, i);
                return s(e, n.key, n.iv);
            }),
                (t.createCipheriv = t.Cipheriv = s),
                (t.createDecipher = t.Decipher = function(e, t) {
                    var r, i;
                    if (((e = e.toLowerCase()), o[e]))
                        (r = o[e].key), (i = o[e].iv);
                    else {
                        if (!f[e]) throw new TypeError("invalid suite type");
                        (r = 8 * f[e].key), (i = f[e].iv);
                    }
                    var n = a(t, !1, r, i);
                    return c(e, n.key, n.iv);
                }),
                (t.createDecipheriv = t.Decipheriv = c),
                (t.listCiphers = t.getCiphers = function() {
                    return Object.keys(f).concat(n.getCiphers());
                });
        },
        1966: function(e, t, r) {
            var i = r(416),
                n = r(1830),
                o = r(86),
                f = r(60).Buffer,
                a = {
                    "des-ede3-cbc": n.CBC.instantiate(n.EDE),
                    "des-ede3": n.EDE,
                    "des-ede-cbc": n.CBC.instantiate(n.EDE),
                    "des-ede": n.EDE,
                    "des-cbc": n.CBC.instantiate(n.DES),
                    "des-ecb": n.DES
                };
            function s(e) {
                i.call(this);
                var t,
                    r = e.mode.toLowerCase(),
                    n = a[r];
                t = e.decrypt ? "decrypt" : "encrypt";
                var o = e.key;
                f.isBuffer(o) || (o = f.from(o)),
                    ("des-ede" !== r && "des-ede-cbc" !== r) ||
                        (o = f.concat([o, o.slice(0, 8)]));
                var s = e.iv;
                f.isBuffer(s) || (s = f.from(s)),
                    (this._des = n.create({key: o, iv: s, type: t}));
            }
            (a.des = a["des-cbc"]),
                (a.des3 = a["des-ede3-cbc"]),
                (e.exports = s),
                o(s, i),
                (s.prototype._update = function(e) {
                    return f.from(this._des.update(e));
                }),
                (s.prototype._final = function() {
                    return f.from(this._des.final());
                });
        },
        1967: function(e, t, r) {
            "use strict";
            (t.readUInt32BE = function(e, t) {
                return (
                    ((e[0 + t] << 24) |
                        (e[1 + t] << 16) |
                        (e[2 + t] << 8) |
                        e[3 + t]) >>>
                    0
                );
            }),
                (t.writeUInt32BE = function(e, t, r) {
                    (e[0 + r] = t >>> 24),
                        (e[1 + r] = (t >>> 16) & 255),
                        (e[2 + r] = (t >>> 8) & 255),
                        (e[3 + r] = 255 & t);
                }),
                (t.ip = function(e, t, r, i) {
                    for (var n = 0, o = 0, f = 6; f >= 0; f -= 2) {
                        for (var a = 0; a <= 24; a += 8)
                            (n <<= 1), (n |= (t >>> (a + f)) & 1);
                        for (a = 0; a <= 24; a += 8)
                            (n <<= 1), (n |= (e >>> (a + f)) & 1);
                    }
                    for (f = 6; f >= 0; f -= 2) {
                        for (a = 1; a <= 25; a += 8)
                            (o <<= 1), (o |= (t >>> (a + f)) & 1);
                        for (a = 1; a <= 25; a += 8)
                            (o <<= 1), (o |= (e >>> (a + f)) & 1);
                    }
                    (r[i + 0] = n >>> 0), (r[i + 1] = o >>> 0);
                }),
                (t.rip = function(e, t, r, i) {
                    for (var n = 0, o = 0, f = 0; f < 4; f++)
                        for (var a = 24; a >= 0; a -= 8)
                            (n <<= 1),
                                (n |= (t >>> (a + f)) & 1),
                                (n <<= 1),
                                (n |= (e >>> (a + f)) & 1);
                    for (f = 4; f < 8; f++)
                        for (a = 24; a >= 0; a -= 8)
                            (o <<= 1),
                                (o |= (t >>> (a + f)) & 1),
                                (o <<= 1),
                                (o |= (e >>> (a + f)) & 1);
                    (r[i + 0] = n >>> 0), (r[i + 1] = o >>> 0);
                }),
                (t.pc1 = function(e, t, r, i) {
                    for (var n = 0, o = 0, f = 7; f >= 5; f--) {
                        for (var a = 0; a <= 24; a += 8)
                            (n <<= 1), (n |= (t >> (a + f)) & 1);
                        for (a = 0; a <= 24; a += 8)
                            (n <<= 1), (n |= (e >> (a + f)) & 1);
                    }
                    for (a = 0; a <= 24; a += 8)
                        (n <<= 1), (n |= (t >> (a + f)) & 1);
                    for (f = 1; f <= 3; f++) {
                        for (a = 0; a <= 24; a += 8)
                            (o <<= 1), (o |= (t >> (a + f)) & 1);
                        for (a = 0; a <= 24; a += 8)
                            (o <<= 1), (o |= (e >> (a + f)) & 1);
                    }
                    for (a = 0; a <= 24; a += 8)
                        (o <<= 1), (o |= (e >> (a + f)) & 1);
                    (r[i + 0] = n >>> 0), (r[i + 1] = o >>> 0);
                }),
                (t.r28shl = function(e, t) {
                    return ((e << t) & 268435455) | (e >>> (28 - t));
                });
            var i = [
                14,
                11,
                17,
                4,
                27,
                23,
                25,
                0,
                13,
                22,
                7,
                18,
                5,
                9,
                16,
                24,
                2,
                20,
                12,
                21,
                1,
                8,
                15,
                26,
                15,
                4,
                25,
                19,
                9,
                1,
                26,
                16,
                5,
                11,
                23,
                8,
                12,
                7,
                17,
                0,
                22,
                3,
                10,
                14,
                6,
                20,
                27,
                24
            ];
            (t.pc2 = function(e, t, r, n) {
                for (var o = 0, f = 0, a = i.length >>> 1, s = 0; s < a; s++)
                    (o <<= 1), (o |= (e >>> i[s]) & 1);
                for (s = a; s < i.length; s++)
                    (f <<= 1), (f |= (t >>> i[s]) & 1);
                (r[n + 0] = o >>> 0), (r[n + 1] = f >>> 0);
            }),
                (t.expand = function(e, t, r) {
                    var i = 0,
                        n = 0;
                    i = ((1 & e) << 5) | (e >>> 27);
                    for (var o = 23; o >= 15; o -= 4)
                        (i <<= 6), (i |= (e >>> o) & 63);
                    for (o = 11; o >= 3; o -= 4)
                        (n |= (e >>> o) & 63), (n <<= 6);
                    (n |= ((31 & e) << 1) | (e >>> 31)),
                        (t[r + 0] = i >>> 0),
                        (t[r + 1] = n >>> 0);
                });
            var n = [
                14,
                0,
                4,
                15,
                13,
                7,
                1,
                4,
                2,
                14,
                15,
                2,
                11,
                13,
                8,
                1,
                3,
                10,
                10,
                6,
                6,
                12,
                12,
                11,
                5,
                9,
                9,
                5,
                0,
                3,
                7,
                8,
                4,
                15,
                1,
                12,
                14,
                8,
                8,
                2,
                13,
                4,
                6,
                9,
                2,
                1,
                11,
                7,
                15,
                5,
                12,
                11,
                9,
                3,
                7,
                14,
                3,
                10,
                10,
                0,
                5,
                6,
                0,
                13,
                15,
                3,
                1,
                13,
                8,
                4,
                14,
                7,
                6,
                15,
                11,
                2,
                3,
                8,
                4,
                14,
                9,
                12,
                7,
                0,
                2,
                1,
                13,
                10,
                12,
                6,
                0,
                9,
                5,
                11,
                10,
                5,
                0,
                13,
                14,
                8,
                7,
                10,
                11,
                1,
                10,
                3,
                4,
                15,
                13,
                4,
                1,
                2,
                5,
                11,
                8,
                6,
                12,
                7,
                6,
                12,
                9,
                0,
                3,
                5,
                2,
                14,
                15,
                9,
                10,
                13,
                0,
                7,
                9,
                0,
                14,
                9,
                6,
                3,
                3,
                4,
                15,
                6,
                5,
                10,
                1,
                2,
                13,
                8,
                12,
                5,
                7,
                14,
                11,
                12,
                4,
                11,
                2,
                15,
                8,
                1,
                13,
                1,
                6,
                10,
                4,
                13,
                9,
                0,
                8,
                6,
                15,
                9,
                3,
                8,
                0,
                7,
                11,
                4,
                1,
                15,
                2,
                14,
                12,
                3,
                5,
                11,
                10,
                5,
                14,
                2,
                7,
                12,
                7,
                13,
                13,
                8,
                14,
                11,
                3,
                5,
                0,
                6,
                6,
                15,
                9,
                0,
                10,
                3,
                1,
                4,
                2,
                7,
                8,
                2,
                5,
                12,
                11,
                1,
                12,
                10,
                4,
                14,
                15,
                9,
                10,
                3,
                6,
                15,
                9,
                0,
                0,
                6,
                12,
                10,
                11,
                1,
                7,
                13,
                13,
                8,
                15,
                9,
                1,
                4,
                3,
                5,
                14,
                11,
                5,
                12,
                2,
                7,
                8,
                2,
                4,
                14,
                2,
                14,
                12,
                11,
                4,
                2,
                1,
                12,
                7,
                4,
                10,
                7,
                11,
                13,
                6,
                1,
                8,
                5,
                5,
                0,
                3,
                15,
                15,
                10,
                13,
                3,
                0,
                9,
                14,
                8,
                9,
                6,
                4,
                11,
                2,
                8,
                1,
                12,
                11,
                7,
                10,
                1,
                13,
                14,
                7,
                2,
                8,
                13,
                15,
                6,
                9,
                15,
                12,
                0,
                5,
                9,
                6,
                10,
                3,
                4,
                0,
                5,
                14,
                3,
                12,
                10,
                1,
                15,
                10,
                4,
                15,
                2,
                9,
                7,
                2,
                12,
                6,
                9,
                8,
                5,
                0,
                6,
                13,
                1,
                3,
                13,
                4,
                14,
                14,
                0,
                7,
                11,
                5,
                3,
                11,
                8,
                9,
                4,
                14,
                3,
                15,
                2,
                5,
                12,
                2,
                9,
                8,
                5,
                12,
                15,
                3,
                10,
                7,
                11,
                0,
                14,
                4,
                1,
                10,
                7,
                1,
                6,
                13,
                0,
                11,
                8,
                6,
                13,
                4,
                13,
                11,
                0,
                2,
                11,
                14,
                7,
                15,
                4,
                0,
                9,
                8,
                1,
                13,
                10,
                3,
                14,
                12,
                3,
                9,
                5,
                7,
                12,
                5,
                2,
                10,
                15,
                6,
                8,
                1,
                6,
                1,
                6,
                4,
                11,
                11,
                13,
                13,
                8,
                12,
                1,
                3,
                4,
                7,
                10,
                14,
                7,
                10,
                9,
                15,
                5,
                6,
                0,
                8,
                15,
                0,
                14,
                5,
                2,
                9,
                3,
                2,
                12,
                13,
                1,
                2,
                15,
                8,
                13,
                4,
                8,
                6,
                10,
                15,
                3,
                11,
                7,
                1,
                4,
                10,
                12,
                9,
                5,
                3,
                6,
                14,
                11,
                5,
                0,
                0,
                14,
                12,
                9,
                7,
                2,
                7,
                2,
                11,
                1,
                4,
                14,
                1,
                7,
                9,
                4,
                12,
                10,
                14,
                8,
                2,
                13,
                0,
                15,
                6,
                12,
                10,
                9,
                13,
                0,
                15,
                3,
                3,
                5,
                5,
                6,
                8,
                11
            ];
            t.substitute = function(e, t) {
                for (var r = 0, i = 0; i < 4; i++) {
                    (r <<= 4), (r |= n[64 * i + ((e >>> (18 - 6 * i)) & 63)]);
                }
                for (i = 0; i < 4; i++) {
                    (r <<= 4),
                        (r |= n[256 + 64 * i + ((t >>> (18 - 6 * i)) & 63)]);
                }
                return r >>> 0;
            };
            var o = [
                16,
                25,
                12,
                11,
                3,
                20,
                4,
                15,
                31,
                17,
                9,
                6,
                27,
                14,
                1,
                22,
                30,
                24,
                8,
                18,
                0,
                5,
                29,
                23,
                13,
                19,
                2,
                26,
                10,
                21,
                28,
                7
            ];
            (t.permute = function(e) {
                for (var t = 0, r = 0; r < o.length; r++)
                    (t <<= 1), (t |= (e >>> o[r]) & 1);
                return t >>> 0;
            }),
                (t.padSplit = function(e, t, r) {
                    for (var i = e.toString(2); i.length < t; ) i = "0" + i;
                    for (var n = [], o = 0; o < t; o += r)
                        n.push(i.slice(o, o + r));
                    return n.join(" ");
                });
        },
        1968: function(e, t, r) {
            "use strict";
            var i = r(1783);
            function n(e) {
                (this.options = e),
                    (this.type = this.options.type),
                    (this.blockSize = 8),
                    this._init(),
                    (this.buffer = new Array(this.blockSize)),
                    (this.bufferOff = 0);
            }
            (e.exports = n),
                (n.prototype._init = function() {}),
                (n.prototype.update = function(e) {
                    return 0 === e.length
                        ? []
                        : "decrypt" === this.type
                            ? this._updateDecrypt(e)
                            : this._updateEncrypt(e);
                }),
                (n.prototype._buffer = function(e, t) {
                    for (
                        var r = Math.min(
                                this.buffer.length - this.bufferOff,
                                e.length - t
                            ),
                            i = 0;
                        i < r;
                        i++
                    )
                        this.buffer[this.bufferOff + i] = e[t + i];
                    return (this.bufferOff += r), r;
                }),
                (n.prototype._flushBuffer = function(e, t) {
                    return (
                        this._update(this.buffer, 0, e, t),
                        (this.bufferOff = 0),
                        this.blockSize
                    );
                }),
                (n.prototype._updateEncrypt = function(e) {
                    var t = 0,
                        r = 0,
                        i = ((this.bufferOff + e.length) / this.blockSize) | 0,
                        n = new Array(i * this.blockSize);
                    0 !== this.bufferOff &&
                        ((t += this._buffer(e, t)),
                        this.bufferOff === this.buffer.length &&
                            (r += this._flushBuffer(n, r)));
                    for (
                        var o = e.length - ((e.length - t) % this.blockSize);
                        t < o;
                        t += this.blockSize
                    )
                        this._update(e, t, n, r), (r += this.blockSize);
                    for (; t < e.length; t++, this.bufferOff++)
                        this.buffer[this.bufferOff] = e[t];
                    return n;
                }),
                (n.prototype._updateDecrypt = function(e) {
                    for (
                        var t = 0,
                            r = 0,
                            i =
                                Math.ceil(
                                    (this.bufferOff + e.length) / this.blockSize
                                ) - 1,
                            n = new Array(i * this.blockSize);
                        i > 0;
                        i--
                    )
                        (t += this._buffer(e, t)),
                            (r += this._flushBuffer(n, r));
                    return (t += this._buffer(e, t)), n;
                }),
                (n.prototype.final = function(e) {
                    var t, r;
                    return (
                        e && (t = this.update(e)),
                        (r =
                            "encrypt" === this.type
                                ? this._finalEncrypt()
                                : this._finalDecrypt()),
                        t ? t.concat(r) : r
                    );
                }),
                (n.prototype._pad = function(e, t) {
                    if (0 === t) return !1;
                    for (; t < e.length; ) e[t++] = 0;
                    return !0;
                }),
                (n.prototype._finalEncrypt = function() {
                    if (!this._pad(this.buffer, this.bufferOff)) return [];
                    var e = new Array(this.blockSize);
                    return this._update(this.buffer, 0, e, 0), e;
                }),
                (n.prototype._unpad = function(e) {
                    return e;
                }),
                (n.prototype._finalDecrypt = function() {
                    i.equal(
                        this.bufferOff,
                        this.blockSize,
                        "Not enough data to decrypt"
                    );
                    var e = new Array(this.blockSize);
                    return this._flushBuffer(e, 0), this._unpad(e);
                });
        },
        1969: function(e, t, r) {
            "use strict";
            var i = r(1783),
                n = r(86),
                o = r(1830),
                f = o.utils,
                a = o.Cipher;
            function s(e) {
                a.call(this, e);
                var t = new function() {
                    (this.tmp = new Array(2)), (this.keys = null);
                }();
                (this._desState = t), this.deriveKeys(t, e.key);
            }
            n(s, a),
                (e.exports = s),
                (s.create = function(e) {
                    return new s(e);
                });
            var c = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
            (s.prototype.deriveKeys = function(e, t) {
                (e.keys = new Array(32)),
                    i.equal(t.length, this.blockSize, "Invalid key length");
                var r = f.readUInt32BE(t, 0),
                    n = f.readUInt32BE(t, 4);
                f.pc1(r, n, e.tmp, 0), (r = e.tmp[0]), (n = e.tmp[1]);
                for (var o = 0; o < e.keys.length; o += 2) {
                    var a = c[o >>> 1];
                    (r = f.r28shl(r, a)),
                        (n = f.r28shl(n, a)),
                        f.pc2(r, n, e.keys, o);
                }
            }),
                (s.prototype._update = function(e, t, r, i) {
                    var n = this._desState,
                        o = f.readUInt32BE(e, t),
                        a = f.readUInt32BE(e, t + 4);
                    f.ip(o, a, n.tmp, 0),
                        (o = n.tmp[0]),
                        (a = n.tmp[1]),
                        "encrypt" === this.type
                            ? this._encrypt(n, o, a, n.tmp, 0)
                            : this._decrypt(n, o, a, n.tmp, 0),
                        (o = n.tmp[0]),
                        (a = n.tmp[1]),
                        f.writeUInt32BE(r, o, i),
                        f.writeUInt32BE(r, a, i + 4);
                }),
                (s.prototype._pad = function(e, t) {
                    for (var r = e.length - t, i = t; i < e.length; i++)
                        e[i] = r;
                    return !0;
                }),
                (s.prototype._unpad = function(e) {
                    for (
                        var t = e[e.length - 1], r = e.length - t;
                        r < e.length;
                        r++
                    )
                        i.equal(e[r], t);
                    return e.slice(0, e.length - t);
                }),
                (s.prototype._encrypt = function(e, t, r, i, n) {
                    for (var o = t, a = r, s = 0; s < e.keys.length; s += 2) {
                        var c = e.keys[s],
                            h = e.keys[s + 1];
                        f.expand(a, e.tmp, 0), (c ^= e.tmp[0]), (h ^= e.tmp[1]);
                        var d = f.substitute(c, h),
                            u = a;
                        (a = (o ^ f.permute(d)) >>> 0), (o = u);
                    }
                    f.rip(a, o, i, n);
                }),
                (s.prototype._decrypt = function(e, t, r, i, n) {
                    for (
                        var o = r, a = t, s = e.keys.length - 2;
                        s >= 0;
                        s -= 2
                    ) {
                        var c = e.keys[s],
                            h = e.keys[s + 1];
                        f.expand(o, e.tmp, 0), (c ^= e.tmp[0]), (h ^= e.tmp[1]);
                        var d = f.substitute(c, h),
                            u = o;
                        (o = (a ^ f.permute(d)) >>> 0), (a = u);
                    }
                    f.rip(o, a, i, n);
                });
        },
        1970: function(e, t, r) {
            "use strict";
            var i = r(1783),
                n = r(86),
                o = {};
            (t.instantiate = function(e) {
                function t(t) {
                    e.call(this, t), this._cbcInit();
                }
                n(t, e);
                for (var r = Object.keys(o), i = 0; i < r.length; i++) {
                    var f = r[i];
                    t.prototype[f] = o[f];
                }
                return (
                    (t.create = function(e) {
                        return new t(e);
                    }),
                    t
                );
            }),
                (o._cbcInit = function() {
                    var e = new function(e) {
                        i.equal(e.length, 8, "Invalid IV length"),
                            (this.iv = new Array(8));
                        for (var t = 0; t < this.iv.length; t++)
                            this.iv[t] = e[t];
                    }(this.options.iv);
                    this._cbcState = e;
                }),
                (o._update = function(e, t, r, i) {
                    var n = this._cbcState,
                        o = this.constructor.super_.prototype,
                        f = n.iv;
                    if ("encrypt" === this.type) {
                        for (var a = 0; a < this.blockSize; a++)
                            f[a] ^= e[t + a];
                        o._update.call(this, f, 0, r, i);
                        for (a = 0; a < this.blockSize; a++) f[a] = r[i + a];
                    } else {
                        o._update.call(this, e, t, r, i);
                        for (a = 0; a < this.blockSize; a++) r[i + a] ^= f[a];
                        for (a = 0; a < this.blockSize; a++) f[a] = e[t + a];
                    }
                });
        },
        1971: function(e, t, r) {
            "use strict";
            var i = r(1783),
                n = r(86),
                o = r(1830),
                f = o.Cipher,
                a = o.DES;
            function s(e) {
                f.call(this, e);
                var t = new function(e, t) {
                    i.equal(t.length, 24, "Invalid key length");
                    var r = t.slice(0, 8),
                        n = t.slice(8, 16),
                        o = t.slice(16, 24);
                    this.ciphers =
                        "encrypt" === e
                            ? [
                                  a.create({type: "encrypt", key: r}),
                                  a.create({type: "decrypt", key: n}),
                                  a.create({type: "encrypt", key: o})
                              ]
                            : [
                                  a.create({type: "decrypt", key: o}),
                                  a.create({type: "encrypt", key: n}),
                                  a.create({type: "decrypt", key: r})
                              ];
                }(this.type, this.options.key);
                this._edeState = t;
            }
            n(s, f),
                (e.exports = s),
                (s.create = function(e) {
                    return new s(e);
                }),
                (s.prototype._update = function(e, t, r, i) {
                    var n = this._edeState;
                    n.ciphers[0]._update(e, t, r, i),
                        n.ciphers[1]._update(r, i, r, i),
                        n.ciphers[2]._update(r, i, r, i);
                }),
                (s.prototype._pad = a.prototype._pad),
                (s.prototype._unpad = a.prototype._unpad);
        },
        1972: function(e, t, r) {
            var i = r(1832),
                n = r(1857),
                o = r(60).Buffer,
                f = r(1858),
                a = r(416),
                s = r(1818),
                c = r(1819);
            function h(e, t, r) {
                a.call(this),
                    (this._cache = new u()),
                    (this._cipher = new s.AES(t)),
                    (this._prev = o.from(r)),
                    (this._mode = e),
                    (this._autopadding = !0);
            }
            r(86)(h, a),
                (h.prototype._update = function(e) {
                    var t, r;
                    this._cache.add(e);
                    for (var i = []; (t = this._cache.get()); )
                        (r = this._mode.encrypt(this, t)), i.push(r);
                    return o.concat(i);
                });
            var d = o.alloc(16, 16);
            function u() {
                this.cache = o.allocUnsafe(0);
            }
            function p(e, t, r) {
                var a = i[e.toLowerCase()];
                if (!a) throw new TypeError("invalid suite type");
                if (
                    ("string" == typeof t && (t = o.from(t)),
                    t.length !== a.key / 8)
                )
                    throw new TypeError("invalid key length " + t.length);
                if (
                    ("string" == typeof r && (r = o.from(r)),
                    "GCM" !== a.mode && r.length !== a.iv)
                )
                    throw new TypeError("invalid iv length " + r.length);
                return "stream" === a.type
                    ? new f(a.module, t, r)
                    : "auth" === a.type
                        ? new n(a.module, t, r)
                        : new h(a.module, t, r);
            }
            (h.prototype._final = function() {
                var e = this._cache.flush();
                if (this._autopadding)
                    return (
                        (e = this._mode.encrypt(this, e)),
                        this._cipher.scrub(),
                        e
                    );
                if (!e.equals(d))
                    throw (this._cipher.scrub(),
                    new Error("data not multiple of block length"));
            }),
                (h.prototype.setAutoPadding = function(e) {
                    return (this._autopadding = !!e), this;
                }),
                (u.prototype.add = function(e) {
                    this.cache = o.concat([this.cache, e]);
                }),
                (u.prototype.get = function() {
                    if (this.cache.length > 15) {
                        var e = this.cache.slice(0, 16);
                        return (this.cache = this.cache.slice(16)), e;
                    }
                    return null;
                }),
                (u.prototype.flush = function() {
                    for (
                        var e = 16 - this.cache.length,
                            t = o.allocUnsafe(e),
                            r = -1;
                        ++r < e;

                    )
                        t.writeUInt8(e, r);
                    return o.concat([this.cache, t]);
                }),
                (t.createCipheriv = p),
                (t.createCipher = function(e, t) {
                    var r = i[e.toLowerCase()];
                    if (!r) throw new TypeError("invalid suite type");
                    var n = c(t, !1, r.key, r.iv);
                    return p(e, n.key, n.iv);
                });
        },
        1973: function(e, t) {
            (t.encrypt = function(e, t) {
                return e._cipher.encryptBlock(t);
            }),
                (t.decrypt = function(e, t) {
                    return e._cipher.decryptBlock(t);
                });
        },
        1974: function(e, t, r) {
            var i = r(1808);
            (t.encrypt = function(e, t) {
                var r = i(t, e._prev);
                return (e._prev = e._cipher.encryptBlock(r)), e._prev;
            }),
                (t.decrypt = function(e, t) {
                    var r = e._prev;
                    e._prev = t;
                    var n = e._cipher.decryptBlock(t);
                    return i(n, r);
                });
        },
        1975: function(e, t, r) {
            var i = r(60).Buffer,
                n = r(1808);
            function o(e, t, r) {
                var o = t.length,
                    f = n(t, e._cache);
                return (
                    (e._cache = e._cache.slice(o)),
                    (e._prev = i.concat([e._prev, r ? t : f])),
                    f
                );
            }
            t.encrypt = function(e, t, r) {
                for (var n, f = i.allocUnsafe(0); t.length; ) {
                    if (
                        (0 === e._cache.length &&
                            ((e._cache = e._cipher.encryptBlock(e._prev)),
                            (e._prev = i.allocUnsafe(0))),
                        !(e._cache.length <= t.length))
                    ) {
                        f = i.concat([f, o(e, t, r)]);
                        break;
                    }
                    (n = e._cache.length),
                        (f = i.concat([f, o(e, t.slice(0, n), r)])),
                        (t = t.slice(n));
                }
                return f;
            };
        },
        1976: function(e, t, r) {
            var i = r(60).Buffer;
            function n(e, t, r) {
                var n = e._cipher.encryptBlock(e._prev)[0] ^ t;
                return (
                    (e._prev = i.concat([
                        e._prev.slice(1),
                        i.from([r ? t : n])
                    ])),
                    n
                );
            }
            t.encrypt = function(e, t, r) {
                for (var o = t.length, f = i.allocUnsafe(o), a = -1; ++a < o; )
                    f[a] = n(e, t[a], r);
                return f;
            };
        },
        1977: function(e, t, r) {
            var i = r(60).Buffer;
            function n(e, t, r) {
                for (var i, n, f, a = -1, s = 0; ++a < 8; )
                    (i = e._cipher.encryptBlock(e._prev)),
                        (n = t & (1 << (7 - a)) ? 128 : 0),
                        (s += (128 & (f = i[0] ^ n)) >> a % 8),
                        (e._prev = o(e._prev, r ? n : f));
                return s;
            }
            function o(e, t) {
                var r = e.length,
                    n = -1,
                    o = i.allocUnsafe(e.length);
                for (e = i.concat([e, i.from([t])]); ++n < r; )
                    o[n] = (e[n] << 1) | (e[n + 1] >> 7);
                return o;
            }
            t.encrypt = function(e, t, r) {
                for (var o = t.length, f = i.allocUnsafe(o), a = -1; ++a < o; )
                    f[a] = n(e, t[a], r);
                return f;
            };
        },
        1978: function(e, t, r) {
            (function(e) {
                var i = r(1808);
                function n(e) {
                    return (e._prev = e._cipher.encryptBlock(e._prev)), e._prev;
                }
                t.encrypt = function(t, r) {
                    for (; t._cache.length < r.length; )
                        t._cache = e.concat([t._cache, n(t)]);
                    var o = t._cache.slice(0, r.length);
                    return (t._cache = t._cache.slice(r.length)), i(r, o);
                };
            }.call(this, r(114).Buffer));
        },
        1979: function(e, t, r) {
            var i = r(60).Buffer,
                n = i.alloc(16, 0);
            function o(e) {
                var t = i.allocUnsafe(16);
                return (
                    t.writeUInt32BE(e[0] >>> 0, 0),
                    t.writeUInt32BE(e[1] >>> 0, 4),
                    t.writeUInt32BE(e[2] >>> 0, 8),
                    t.writeUInt32BE(e[3] >>> 0, 12),
                    t
                );
            }
            function f(e) {
                (this.h = e),
                    (this.state = i.alloc(16, 0)),
                    (this.cache = i.allocUnsafe(0));
            }
            (f.prototype.ghash = function(e) {
                for (var t = -1; ++t < e.length; ) this.state[t] ^= e[t];
                this._multiply();
            }),
                (f.prototype._multiply = function() {
                    for (
                        var e,
                            t,
                            r = (function(e) {
                                return [
                                    e.readUInt32BE(0),
                                    e.readUInt32BE(4),
                                    e.readUInt32BE(8),
                                    e.readUInt32BE(12)
                                ];
                            })(this.h),
                            i = [0, 0, 0, 0],
                            n = -1;
                        ++n < 128;

                    ) {
                        for (
                            0 !=
                                (this.state[~~(n / 8)] &
                                    (1 << (7 - (n % 8)))) &&
                                ((i[0] ^= r[0]),
                                (i[1] ^= r[1]),
                                (i[2] ^= r[2]),
                                (i[3] ^= r[3])),
                                t = 0 != (1 & r[3]),
                                e = 3;
                            e > 0;
                            e--
                        )
                            r[e] = (r[e] >>> 1) | ((1 & r[e - 1]) << 31);
                        (r[0] = r[0] >>> 1), t && (r[0] = r[0] ^ (225 << 24));
                    }
                    this.state = o(i);
                }),
                (f.prototype.update = function(e) {
                    var t;
                    for (
                        this.cache = i.concat([this.cache, e]);
                        this.cache.length >= 16;

                    )
                        (t = this.cache.slice(0, 16)),
                            (this.cache = this.cache.slice(16)),
                            this.ghash(t);
                }),
                (f.prototype.final = function(e, t) {
                    return (
                        this.cache.length &&
                            this.ghash(i.concat([this.cache, n], 16)),
                        this.ghash(o([0, e, 0, t])),
                        this.state
                    );
                }),
                (e.exports = f);
        },
        1980: function(e, t, r) {
            var i = r(1857),
                n = r(60).Buffer,
                o = r(1832),
                f = r(1858),
                a = r(416),
                s = r(1818),
                c = r(1819);
            function h(e, t, r) {
                a.call(this),
                    (this._cache = new d()),
                    (this._last = void 0),
                    (this._cipher = new s.AES(t)),
                    (this._prev = n.from(r)),
                    (this._mode = e),
                    (this._autopadding = !0);
            }
            function d() {
                this.cache = n.allocUnsafe(0);
            }
            function u(e, t, r) {
                var a = o[e.toLowerCase()];
                if (!a) throw new TypeError("invalid suite type");
                if (
                    ("string" == typeof r && (r = n.from(r)),
                    "GCM" !== a.mode && r.length !== a.iv)
                )
                    throw new TypeError("invalid iv length " + r.length);
                if (
                    ("string" == typeof t && (t = n.from(t)),
                    t.length !== a.key / 8)
                )
                    throw new TypeError("invalid key length " + t.length);
                return "stream" === a.type
                    ? new f(a.module, t, r, !0)
                    : "auth" === a.type
                        ? new i(a.module, t, r, !0)
                        : new h(a.module, t, r);
            }
            r(86)(h, a),
                (h.prototype._update = function(e) {
                    var t, r;
                    this._cache.add(e);
                    for (var i = []; (t = this._cache.get(this._autopadding)); )
                        (r = this._mode.decrypt(this, t)), i.push(r);
                    return n.concat(i);
                }),
                (h.prototype._final = function() {
                    var e = this._cache.flush();
                    if (this._autopadding)
                        return (function(e) {
                            var t = e[15];
                            if (t < 1 || t > 16)
                                throw new Error("unable to decrypt data");
                            var r = -1;
                            for (; ++r < t; )
                                if (e[r + (16 - t)] !== t)
                                    throw new Error("unable to decrypt data");
                            if (16 === t) return;
                            return e.slice(0, 16 - t);
                        })(this._mode.decrypt(this, e));
                    if (e) throw new Error("data not multiple of block length");
                }),
                (h.prototype.setAutoPadding = function(e) {
                    return (this._autopadding = !!e), this;
                }),
                (d.prototype.add = function(e) {
                    this.cache = n.concat([this.cache, e]);
                }),
                (d.prototype.get = function(e) {
                    var t;
                    if (e) {
                        if (this.cache.length > 16)
                            return (
                                (t = this.cache.slice(0, 16)),
                                (this.cache = this.cache.slice(16)),
                                t
                            );
                    } else if (this.cache.length >= 16)
                        return (
                            (t = this.cache.slice(0, 16)),
                            (this.cache = this.cache.slice(16)),
                            t
                        );
                    return null;
                }),
                (d.prototype.flush = function() {
                    if (this.cache.length) return this.cache;
                }),
                (t.createDecipher = function(e, t) {
                    var r = o[e.toLowerCase()];
                    if (!r) throw new TypeError("invalid suite type");
                    var i = c(t, !1, r.key, r.iv);
                    return u(e, i.key, i.iv);
                }),
                (t.createDecipheriv = u);
        },
        1981: function(e, t) {
            (t["des-ecb"] = {key: 8, iv: 0}),
                (t["des-cbc"] = t.des = {key: 8, iv: 8}),
                (t["des-ede3-cbc"] = t.des3 = {key: 24, iv: 8}),
                (t["des-ede3"] = {key: 24, iv: 0}),
                (t["des-ede-cbc"] = {key: 16, iv: 8}),
                (t["des-ede"] = {key: 16, iv: 0});
        },
        1982: function(e, t, r) {
            (function(e) {
                var i = r(1859),
                    n = r(1985),
                    o = r(1986);
                var f = {binary: !0, hex: !0, base64: !0};
                (t.DiffieHellmanGroup = t.createDiffieHellmanGroup = t.getDiffieHellman = function(
                    t
                ) {
                    var r = new e(n[t].prime, "hex"),
                        i = new e(n[t].gen, "hex");
                    return new o(r, i);
                }),
                    (t.createDiffieHellman = t.DiffieHellman = function t(
                        r,
                        n,
                        a,
                        s
                    ) {
                        return e.isBuffer(n) || void 0 === f[n]
                            ? t(r, "binary", n, a)
                            : ((n = n || "binary"),
                              (s = s || "binary"),
                              (a = a || new e([2])),
                              e.isBuffer(a) || (a = new e(a, s)),
                              "number" == typeof r
                                  ? new o(i(r, a), a, !0)
                                  : (e.isBuffer(r) || (r = new e(r, n)),
                                    new o(r, a, !0)));
                    });
            }.call(this, r(114).Buffer));
        },
        1985: function(e) {
            e.exports = {
                modp1: {
                    gen: "02",
                    prime:
                        "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
                },
                modp2: {
                    gen: "02",
                    prime:
                        "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
                },
                modp5: {
                    gen: "02",
                    prime:
                        "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
                },
                modp14: {
                    gen: "02",
                    prime:
                        "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
                },
                modp15: {
                    gen: "02",
                    prime:
                        "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
                },
                modp16: {
                    gen: "02",
                    prime:
                        "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
                },
                modp17: {
                    gen: "02",
                    prime:
                        "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
                },
                modp18: {
                    gen: "02",
                    prime:
                        "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
                }
            };
        },
        1986: function(e, t, r) {
            (function(t) {
                var i = r(1777),
                    n = new (r(1860))(),
                    o = new i(24),
                    f = new i(11),
                    a = new i(10),
                    s = new i(3),
                    c = new i(7),
                    h = r(1859),
                    d = r(1803);
                function u(e, r) {
                    return (
                        (r = r || "utf8"),
                        t.isBuffer(e) || (e = new t(e, r)),
                        (this._pub = new i(e)),
                        this
                    );
                }
                function p(e, r) {
                    return (
                        (r = r || "utf8"),
                        t.isBuffer(e) || (e = new t(e, r)),
                        (this._priv = new i(e)),
                        this
                    );
                }
                e.exports = b;
                var l = {};
                function b(e, t, r) {
                    this.setGenerator(t),
                        (this.__prime = new i(e)),
                        (this._prime = i.mont(this.__prime)),
                        (this._primeLen = e.length),
                        (this._pub = void 0),
                        (this._priv = void 0),
                        (this._primeCode = void 0),
                        r
                            ? ((this.setPublicKey = u),
                              (this.setPrivateKey = p))
                            : (this._primeCode = 8);
                }
                function m(e, r) {
                    var i = new t(e.toArray());
                    return r ? i.toString(r) : i;
                }
                Object.defineProperty(b.prototype, "verifyError", {
                    enumerable: !0,
                    get: function() {
                        return (
                            "number" != typeof this._primeCode &&
                                (this._primeCode = (function(e, t) {
                                    var r = t.toString("hex"),
                                        i = [r, e.toString(16)].join("_");
                                    if (i in l) return l[i];
                                    var d,
                                        u = 0;
                                    if (
                                        e.isEven() ||
                                        !h.simpleSieve ||
                                        !h.fermatTest(e) ||
                                        !n.test(e)
                                    )
                                        return (
                                            (u += 1),
                                            (u +=
                                                "02" === r || "05" === r
                                                    ? 8
                                                    : 4),
                                            (l[i] = u),
                                            u
                                        );
                                    switch (
                                        (n.test(e.shrn(1)) || (u += 2), r)
                                    ) {
                                        case "02":
                                            e.mod(o).cmp(f) && (u += 8);
                                            break;
                                        case "05":
                                            (d = e.mod(a)).cmp(s) &&
                                                d.cmp(c) &&
                                                (u += 8);
                                            break;
                                        default:
                                            u += 4;
                                    }
                                    return (l[i] = u), u;
                                })(this.__prime, this.__gen)),
                            this._primeCode
                        );
                    }
                }),
                    (b.prototype.generateKeys = function() {
                        return (
                            this._priv ||
                                (this._priv = new i(d(this._primeLen))),
                            (this._pub = this._gen
                                .toRed(this._prime)
                                .redPow(this._priv)
                                .fromRed()),
                            this.getPublicKey()
                        );
                    }),
                    (b.prototype.computeSecret = function(e) {
                        var r = (e = (e = new i(e)).toRed(this._prime))
                                .redPow(this._priv)
                                .fromRed(),
                            n = new t(r.toArray()),
                            o = this.getPrime();
                        if (n.length < o.length) {
                            var f = new t(o.length - n.length);
                            f.fill(0), (n = t.concat([f, n]));
                        }
                        return n;
                    }),
                    (b.prototype.getPublicKey = function(e) {
                        return m(this._pub, e);
                    }),
                    (b.prototype.getPrivateKey = function(e) {
                        return m(this._priv, e);
                    }),
                    (b.prototype.getPrime = function(e) {
                        return m(this.__prime, e);
                    }),
                    (b.prototype.getGenerator = function(e) {
                        return m(this._gen, e);
                    }),
                    (b.prototype.setGenerator = function(e, r) {
                        return (
                            (r = r || "utf8"),
                            t.isBuffer(e) || (e = new t(e, r)),
                            (this.__gen = e),
                            (this._gen = new i(e)),
                            this
                        );
                    });
            }.call(this, r(114).Buffer));
        },
        1987: function(e, t, r) {
            (function(t) {
                var i = r(302),
                    n = r(530),
                    o = r(86),
                    f = r(1988),
                    a = r(2023),
                    s = r(1849);
                function c(e) {
                    n.Writable.call(this);
                    var t = s[e];
                    if (!t) throw new Error("Unknown message digest");
                    (this._hashType = t.hash),
                        (this._hash = i(t.hash)),
                        (this._tag = t.id),
                        (this._signType = t.sign);
                }
                function h(e) {
                    n.Writable.call(this);
                    var t = s[e];
                    if (!t) throw new Error("Unknown message digest");
                    (this._hash = i(t.hash)),
                        (this._tag = t.id),
                        (this._signType = t.sign);
                }
                function d(e) {
                    return new c(e);
                }
                function u(e) {
                    return new h(e);
                }
                Object.keys(s).forEach(function(e) {
                    (s[e].id = new t(s[e].id, "hex")),
                        (s[e.toLowerCase()] = s[e]);
                }),
                    o(c, n.Writable),
                    (c.prototype._write = function(e, t, r) {
                        this._hash.update(e), r();
                    }),
                    (c.prototype.update = function(e, r) {
                        return (
                            "string" == typeof e && (e = new t(e, r)),
                            this._hash.update(e),
                            this
                        );
                    }),
                    (c.prototype.sign = function(e, t) {
                        this.end();
                        var r = this._hash.digest(),
                            i = f(
                                r,
                                e,
                                this._hashType,
                                this._signType,
                                this._tag
                            );
                        return t ? i.toString(t) : i;
                    }),
                    o(h, n.Writable),
                    (h.prototype._write = function(e, t, r) {
                        this._hash.update(e), r();
                    }),
                    (h.prototype.update = function(e, r) {
                        return (
                            "string" == typeof e && (e = new t(e, r)),
                            this._hash.update(e),
                            this
                        );
                    }),
                    (h.prototype.verify = function(e, r, i) {
                        "string" == typeof r && (r = new t(r, i)), this.end();
                        var n = this._hash.digest();
                        return a(r, n, e, this._signType, this._tag);
                    }),
                    (e.exports = {
                        Sign: d,
                        Verify: u,
                        createSign: d,
                        createVerify: u
                    });
            }.call(this, r(114).Buffer));
        },
        1988: function(e, t, r) {
            (function(t) {
                var i = r(533),
                    n = r(1833),
                    o = r(1780).ec,
                    f = r(1777),
                    a = r(1821),
                    s = r(1870);
                function c(e, r, n, o) {
                    if ((e = new t(e.toArray())).length < r.byteLength()) {
                        var f = new t(r.byteLength() - e.length);
                        f.fill(0), (e = t.concat([f, e]));
                    }
                    var a = n.length,
                        s = (function(e, r) {
                            e = (e = h(e, r)).mod(r);
                            var i = new t(e.toArray());
                            if (i.length < r.byteLength()) {
                                var n = new t(r.byteLength() - i.length);
                                n.fill(0), (i = t.concat([n, i]));
                            }
                            return i;
                        })(n, r),
                        c = new t(a);
                    c.fill(1);
                    var d = new t(a);
                    return (
                        d.fill(0),
                        (d = i(o, d)
                            .update(c)
                            .update(new t([0]))
                            .update(e)
                            .update(s)
                            .digest()),
                        (c = i(o, d)
                            .update(c)
                            .digest()),
                        {
                            k: (d = i(o, d)
                                .update(c)
                                .update(new t([1]))
                                .update(e)
                                .update(s)
                                .digest()),
                            v: (c = i(o, d)
                                .update(c)
                                .digest())
                        }
                    );
                }
                function h(e, t) {
                    var r = new f(e),
                        i = (e.length << 3) - t.bitLength();
                    return i > 0 && r.ishrn(i), r;
                }
                function d(e, r, n) {
                    var o, f;
                    do {
                        for (o = new t(0); 8 * o.length < e.bitLength(); )
                            (r.v = i(n, r.k)
                                .update(r.v)
                                .digest()),
                                (o = t.concat([o, r.v]));
                        (f = h(o, e)),
                            (r.k = i(n, r.k)
                                .update(r.v)
                                .update(new t([0]))
                                .digest()),
                            (r.v = i(n, r.k)
                                .update(r.v)
                                .digest());
                    } while (-1 !== f.cmp(e));
                    return f;
                }
                function u(e, t, r, i) {
                    return e
                        .toRed(f.mont(r))
                        .redPow(t)
                        .fromRed()
                        .mod(i);
                }
                (e.exports = function(e, r, i, p, l) {
                    var b = a(r);
                    if (b.curve) {
                        if ("ecdsa" !== p && "ecdsa/rsa" !== p)
                            throw new Error("wrong private key type");
                        return (function(e, r) {
                            var i = s[r.curve.join(".")];
                            if (!i)
                                throw new Error(
                                    "unknown curve " + r.curve.join(".")
                                );
                            var n = new o(i)
                                .keyFromPrivate(r.privateKey)
                                .sign(e);
                            return new t(n.toDER());
                        })(e, b);
                    }
                    if ("dsa" === b.type) {
                        if ("dsa" !== p)
                            throw new Error("wrong private key type");
                        return (function(e, r, i) {
                            for (
                                var n,
                                    o = r.params.priv_key,
                                    a = r.params.p,
                                    s = r.params.q,
                                    p = r.params.g,
                                    l = new f(0),
                                    b = h(e, s).mod(s),
                                    m = !1,
                                    y = c(o, s, e, i);
                                !1 === m;

                            )
                                (n = d(s, y, i)),
                                    (l = u(p, n, a, s)),
                                    0 ===
                                        (m = n
                                            .invm(s)
                                            .imul(b.add(o.mul(l)))
                                            .mod(s)).cmpn(0) &&
                                        ((m = !1), (l = new f(0)));
                            return (function(e, r) {
                                (e = e.toArray()),
                                    (r = r.toArray()),
                                    128 & e[0] && (e = [0].concat(e)),
                                    128 & r[0] && (r = [0].concat(r));
                                var i = [
                                    48,
                                    e.length + r.length + 4,
                                    2,
                                    e.length
                                ];
                                return (
                                    (i = i.concat(e, [2, r.length], r)),
                                    new t(i)
                                );
                            })(l, m);
                        })(e, b, i);
                    }
                    if ("rsa" !== p && "ecdsa/rsa" !== p)
                        throw new Error("wrong private key type");
                    e = t.concat([l, e]);
                    for (
                        var m = b.modulus.byteLength(), y = [0, 1];
                        e.length + y.length + 1 < m;

                    )
                        y.push(255);
                    y.push(0);
                    for (var v = -1; ++v < e.length; ) y.push(e[v]);
                    return n(y, b);
                }),
                    (e.exports.getKey = c),
                    (e.exports.makeKey = d);
            }.call(this, r(114).Buffer));
        },
        1989: function(e) {
            e.exports = {
                _args: [
                    ["elliptic@6.4.0", "/home/taquy/Projects/VueJS/wallet-bs"]
                ],
                _development: !0,
                _from: "elliptic@6.4.0",
                _id: "elliptic@6.4.0",
                _inBundle: !1,
                _integrity: "sha1-ysmvh2LIWDYYcAPI3+GT5eLq5d8=",
                _location: "/elliptic",
                _phantomChildren: {},
                _requested: {
                    type: "version",
                    registry: !0,
                    raw: "elliptic@6.4.0",
                    name: "elliptic",
                    escapedName: "elliptic",
                    rawSpec: "6.4.0",
                    saveSpec: null,
                    fetchSpec: "6.4.0"
                },
                _requiredBy: ["/browserify-sign", "/create-ecdh"],
                _resolved:
                    "https://registry.npmjs.org/elliptic/-/elliptic-6.4.0.tgz",
                _spec: "6.4.0",
                _where: "/home/taquy/Projects/VueJS/wallet-bs",
                author: {name: "Fedor Indutny", email: "fedor@indutny.com"},
                bugs: {url: "https://github.com/indutny/elliptic/issues"},
                dependencies: {
                    "bn.js": "^4.4.0",
                    brorand: "^1.0.1",
                    "hash.js": "^1.0.0",
                    "hmac-drbg": "^1.0.0",
                    inherits: "^2.0.1",
                    "minimalistic-assert": "^1.0.0",
                    "minimalistic-crypto-utils": "^1.0.0"
                },
                description: "EC cryptography",
                devDependencies: {
                    brfs: "^1.4.3",
                    coveralls: "^2.11.3",
                    grunt: "^0.4.5",
                    "grunt-browserify": "^5.0.0",
                    "grunt-cli": "^1.2.0",
                    "grunt-contrib-connect": "^1.0.0",
                    "grunt-contrib-copy": "^1.0.0",
                    "grunt-contrib-uglify": "^1.0.1",
                    "grunt-mocha-istanbul": "^3.0.1",
                    "grunt-saucelabs": "^8.6.2",
                    istanbul: "^0.4.2",
                    jscs: "^2.9.0",
                    jshint: "^2.6.0",
                    mocha: "^2.1.0"
                },
                files: ["lib"],
                homepage: "https://github.com/indutny/elliptic",
                keywords: ["EC", "Elliptic", "curve", "Cryptography"],
                license: "MIT",
                main: "lib/elliptic.js",
                name: "elliptic",
                repository: {
                    type: "git",
                    url: "git+ssh://git@github.com/indutny/elliptic.git"
                },
                scripts: {
                    jscs:
                        "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
                    jshint:
                        "jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",
                    lint: "npm run jscs && npm run jshint",
                    test: "npm run lint && npm run unit",
                    unit: "istanbul test _mocha --reporter=spec test/index.js",
                    version: "grunt dist && git add dist/"
                },
                version: "6.4.0"
            };
        },
        1990: function(e, t, r) {
            "use strict";
            var i = t,
                n = r(1777),
                o = r(1783),
                f = r(1862);
            (i.assert = o),
                (i.toArray = f.toArray),
                (i.zero2 = f.zero2),
                (i.toHex = f.toHex),
                (i.encode = f.encode),
                (i.getNAF = function(e, t) {
                    for (
                        var r = [], i = 1 << (t + 1), n = e.clone();
                        n.cmpn(1) >= 0;

                    ) {
                        var o;
                        if (n.isOdd()) {
                            var f = n.andln(i - 1);
                            (o = f > (i >> 1) - 1 ? (i >> 1) - f : f),
                                n.isubn(o);
                        } else o = 0;
                        r.push(o);
                        for (
                            var a =
                                    0 !== n.cmpn(0) && 0 === n.andln(i - 1)
                                        ? t + 1
                                        : 1,
                                s = 1;
                            s < a;
                            s++
                        )
                            r.push(0);
                        n.iushrn(a);
                    }
                    return r;
                }),
                (i.getJSF = function(e, t) {
                    var r = [[], []];
                    (e = e.clone()), (t = t.clone());
                    for (var i = 0, n = 0; e.cmpn(-i) > 0 || t.cmpn(-n) > 0; ) {
                        var o,
                            f,
                            a,
                            s = (e.andln(3) + i) & 3,
                            c = (t.andln(3) + n) & 3;
                        3 === s && (s = -1),
                            3 === c && (c = -1),
                            (o =
                                0 == (1 & s)
                                    ? 0
                                    : (3 != (a = (e.andln(7) + i) & 7) &&
                                          5 !== a) ||
                                      2 !== c
                                        ? s
                                        : -s),
                            r[0].push(o),
                            (f =
                                0 == (1 & c)
                                    ? 0
                                    : (3 != (a = (t.andln(7) + n) & 7) &&
                                          5 !== a) ||
                                      2 !== s
                                        ? c
                                        : -c),
                            r[1].push(f),
                            2 * i === o + 1 && (i = 1 - i),
                            2 * n === f + 1 && (n = 1 - n),
                            e.iushrn(1),
                            t.iushrn(1);
                    }
                    return r;
                }),
                (i.cachedProperty = function(e, t, r) {
                    var i = "_" + t;
                    e.prototype[t] = function() {
                        return void 0 !== this[i]
                            ? this[i]
                            : (this[i] = r.call(this));
                    };
                }),
                (i.parseBytes = function(e) {
                    return "string" == typeof e ? i.toArray(e, "hex") : e;
                }),
                (i.intFromLE = function(e) {
                    return new n(e, "hex", "le");
                });
        },
        1991: function(e, t, r) {
            "use strict";
            var i = r(1777),
                n = r(1780).utils,
                o = n.getNAF,
                f = n.getJSF,
                a = n.assert;
            function s(e, t) {
                (this.type = e),
                    (this.p = new i(t.p, 16)),
                    (this.red = t.prime ? i.red(t.prime) : i.mont(this.p)),
                    (this.zero = new i(0).toRed(this.red)),
                    (this.one = new i(1).toRed(this.red)),
                    (this.two = new i(2).toRed(this.red)),
                    (this.n = t.n && new i(t.n, 16)),
                    (this.g = t.g && this.pointFromJSON(t.g, t.gRed)),
                    (this._wnafT1 = new Array(4)),
                    (this._wnafT2 = new Array(4)),
                    (this._wnafT3 = new Array(4)),
                    (this._wnafT4 = new Array(4));
                var r = this.n && this.p.div(this.n);
                !r || r.cmpn(100) > 0
                    ? (this.redN = null)
                    : ((this._maxwellTrick = !0),
                      (this.redN = this.n.toRed(this.red)));
            }
            function c(e, t) {
                (this.curve = e), (this.type = t), (this.precomputed = null);
            }
            (e.exports = s),
                (s.prototype.point = function() {
                    throw new Error("Not implemented");
                }),
                (s.prototype.validate = function() {
                    throw new Error("Not implemented");
                }),
                (s.prototype._fixedNafMul = function(e, t) {
                    a(e.precomputed);
                    var r = e._getDoubles(),
                        i = o(t, 1),
                        n = (1 << (r.step + 1)) - (r.step % 2 == 0 ? 2 : 1);
                    n /= 3;
                    for (var f = [], s = 0; s < i.length; s += r.step) {
                        var c = 0;
                        for (t = s + r.step - 1; t >= s; t--)
                            c = (c << 1) + i[t];
                        f.push(c);
                    }
                    for (
                        var h = this.jpoint(null, null, null),
                            d = this.jpoint(null, null, null),
                            u = n;
                        u > 0;
                        u--
                    ) {
                        for (s = 0; s < f.length; s++) {
                            (c = f[s]) === u
                                ? (d = d.mixedAdd(r.points[s]))
                                : c === -u &&
                                  (d = d.mixedAdd(r.points[s].neg()));
                        }
                        h = h.add(d);
                    }
                    return h.toP();
                }),
                (s.prototype._wnafMul = function(e, t) {
                    var r = 4,
                        i = e._getNAFPoints(r);
                    r = i.wnd;
                    for (
                        var n = i.points,
                            f = o(t, r),
                            s = this.jpoint(null, null, null),
                            c = f.length - 1;
                        c >= 0;
                        c--
                    ) {
                        for (t = 0; c >= 0 && 0 === f[c]; c--) t++;
                        if ((c >= 0 && t++, (s = s.dblp(t)), c < 0)) break;
                        var h = f[c];
                        a(0 !== h),
                            (s =
                                "affine" === e.type
                                    ? h > 0
                                        ? s.mixedAdd(n[(h - 1) >> 1])
                                        : s.mixedAdd(n[(-h - 1) >> 1].neg())
                                    : h > 0
                                        ? s.add(n[(h - 1) >> 1])
                                        : s.add(n[(-h - 1) >> 1].neg()));
                    }
                    return "affine" === e.type ? s.toP() : s;
                }),
                (s.prototype._wnafMulAdd = function(e, t, r, i, n) {
                    for (
                        var a = this._wnafT1,
                            s = this._wnafT2,
                            c = this._wnafT3,
                            h = 0,
                            d = 0;
                        d < i;
                        d++
                    ) {
                        var u = (A = t[d])._getNAFPoints(e);
                        (a[d] = u.wnd), (s[d] = u.points);
                    }
                    for (d = i - 1; d >= 1; d -= 2) {
                        var p = d - 1,
                            l = d;
                        if (1 === a[p] && 1 === a[l]) {
                            var b = [t[p], null, null, t[l]];
                            0 === t[p].y.cmp(t[l].y)
                                ? ((b[1] = t[p].add(t[l])),
                                  (b[2] = t[p].toJ().mixedAdd(t[l].neg())))
                                : 0 === t[p].y.cmp(t[l].y.redNeg())
                                    ? ((b[1] = t[p].toJ().mixedAdd(t[l])),
                                      (b[2] = t[p].add(t[l].neg())))
                                    : ((b[1] = t[p].toJ().mixedAdd(t[l])),
                                      (b[2] = t[p].toJ().mixedAdd(t[l].neg())));
                            var m = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                                y = f(r[p], r[l]);
                            (h = Math.max(y[0].length, h)),
                                (c[p] = new Array(h)),
                                (c[l] = new Array(h));
                            for (var v = 0; v < h; v++) {
                                var g = 0 | y[0][v],
                                    _ = 0 | y[1][v];
                                (c[p][v] = m[3 * (g + 1) + (_ + 1)]),
                                    (c[l][v] = 0),
                                    (s[p] = b);
                            }
                        } else
                            (c[p] = o(r[p], a[p])),
                                (c[l] = o(r[l], a[l])),
                                (h = Math.max(c[p].length, h)),
                                (h = Math.max(c[l].length, h));
                    }
                    var w = this.jpoint(null, null, null),
                        S = this._wnafT4;
                    for (d = h; d >= 0; d--) {
                        for (var E = 0; d >= 0; ) {
                            var M = !0;
                            for (v = 0; v < i; v++)
                                (S[v] = 0 | c[v][d]), 0 !== S[v] && (M = !1);
                            if (!M) break;
                            E++, d--;
                        }
                        if ((d >= 0 && E++, (w = w.dblp(E)), d < 0)) break;
                        for (v = 0; v < i; v++) {
                            var A,
                                I = S[v];
                            0 !== I &&
                                (I > 0
                                    ? (A = s[v][(I - 1) >> 1])
                                    : I < 0 && (A = s[v][(-I - 1) >> 1].neg()),
                                (w =
                                    "affine" === A.type
                                        ? w.mixedAdd(A)
                                        : w.add(A)));
                        }
                    }
                    for (d = 0; d < i; d++) s[d] = null;
                    return n ? w : w.toP();
                }),
                (s.BasePoint = c),
                (c.prototype.eq = function() {
                    throw new Error("Not implemented");
                }),
                (c.prototype.validate = function() {
                    return this.curve.validate(this);
                }),
                (s.prototype.decodePoint = function(e, t) {
                    e = n.toArray(e, t);
                    var r = this.p.byteLength();
                    if (
                        (4 === e[0] || 6 === e[0] || 7 === e[0]) &&
                        e.length - 1 == 2 * r
                    )
                        return (
                            6 === e[0]
                                ? a(e[e.length - 1] % 2 == 0)
                                : 7 === e[0] && a(e[e.length - 1] % 2 == 1),
                            this.point(
                                e.slice(1, 1 + r),
                                e.slice(1 + r, 1 + 2 * r)
                            )
                        );
                    if ((2 === e[0] || 3 === e[0]) && e.length - 1 === r)
                        return this.pointFromX(e.slice(1, 1 + r), 3 === e[0]);
                    throw new Error("Unknown point format");
                }),
                (c.prototype.encodeCompressed = function(e) {
                    return this.encode(e, !0);
                }),
                (c.prototype._encode = function(e) {
                    var t = this.curve.p.byteLength(),
                        r = this.getX().toArray("be", t);
                    return e
                        ? [this.getY().isEven() ? 2 : 3].concat(r)
                        : [4].concat(r, this.getY().toArray("be", t));
                }),
                (c.prototype.encode = function(e, t) {
                    return n.encode(this._encode(t), e);
                }),
                (c.prototype.precompute = function(e) {
                    if (this.precomputed) return this;
                    var t = {doubles: null, naf: null, beta: null};
                    return (
                        (t.naf = this._getNAFPoints(8)),
                        (t.doubles = this._getDoubles(4, e)),
                        (t.beta = this._getBeta()),
                        (this.precomputed = t),
                        this
                    );
                }),
                (c.prototype._hasDoubles = function(e) {
                    if (!this.precomputed) return !1;
                    var t = this.precomputed.doubles;
                    return (
                        !!t &&
                        t.points.length >=
                            Math.ceil((e.bitLength() + 1) / t.step)
                    );
                }),
                (c.prototype._getDoubles = function(e, t) {
                    if (this.precomputed && this.precomputed.doubles)
                        return this.precomputed.doubles;
                    for (var r = [this], i = this, n = 0; n < t; n += e) {
                        for (var o = 0; o < e; o++) i = i.dbl();
                        r.push(i);
                    }
                    return {step: e, points: r};
                }),
                (c.prototype._getNAFPoints = function(e) {
                    if (this.precomputed && this.precomputed.naf)
                        return this.precomputed.naf;
                    for (
                        var t = [this],
                            r = (1 << e) - 1,
                            i = 1 === r ? null : this.dbl(),
                            n = 1;
                        n < r;
                        n++
                    )
                        t[n] = t[n - 1].add(i);
                    return {wnd: e, points: t};
                }),
                (c.prototype._getBeta = function() {
                    return null;
                }),
                (c.prototype.dblp = function(e) {
                    for (var t = this, r = 0; r < e; r++) t = t.dbl();
                    return t;
                });
        },
        1992: function(e, t, r) {
            "use strict";
            var i = r(1820),
                n = r(1780),
                o = r(1777),
                f = r(86),
                a = i.base,
                s = n.utils.assert;
            function c(e) {
                a.call(this, "short", e),
                    (this.a = new o(e.a, 16).toRed(this.red)),
                    (this.b = new o(e.b, 16).toRed(this.red)),
                    (this.tinv = this.two.redInvm()),
                    (this.zeroA = 0 === this.a.fromRed().cmpn(0)),
                    (this.threeA =
                        0 ===
                        this.a
                            .fromRed()
                            .sub(this.p)
                            .cmpn(-3)),
                    (this.endo = this._getEndomorphism(e)),
                    (this._endoWnafT1 = new Array(4)),
                    (this._endoWnafT2 = new Array(4));
            }
            function h(e, t, r, i) {
                a.BasePoint.call(this, e, "affine"),
                    null === t && null === r
                        ? ((this.x = null), (this.y = null), (this.inf = !0))
                        : ((this.x = new o(t, 16)),
                          (this.y = new o(r, 16)),
                          i &&
                              (this.x.forceRed(this.curve.red),
                              this.y.forceRed(this.curve.red)),
                          this.x.red || (this.x = this.x.toRed(this.curve.red)),
                          this.y.red || (this.y = this.y.toRed(this.curve.red)),
                          (this.inf = !1));
            }
            function d(e, t, r, i) {
                a.BasePoint.call(this, e, "jacobian"),
                    null === t && null === r && null === i
                        ? ((this.x = this.curve.one),
                          (this.y = this.curve.one),
                          (this.z = new o(0)))
                        : ((this.x = new o(t, 16)),
                          (this.y = new o(r, 16)),
                          (this.z = new o(i, 16))),
                    this.x.red || (this.x = this.x.toRed(this.curve.red)),
                    this.y.red || (this.y = this.y.toRed(this.curve.red)),
                    this.z.red || (this.z = this.z.toRed(this.curve.red)),
                    (this.zOne = this.z === this.curve.one);
            }
            f(c, a),
                (e.exports = c),
                (c.prototype._getEndomorphism = function(e) {
                    if (
                        this.zeroA &&
                        this.g &&
                        this.n &&
                        1 === this.p.modn(3)
                    ) {
                        var t, r;
                        if (e.beta) t = new o(e.beta, 16).toRed(this.red);
                        else {
                            var i = this._getEndoRoots(this.p);
                            t = (t = i[0].cmp(i[1]) < 0 ? i[0] : i[1]).toRed(
                                this.red
                            );
                        }
                        if (e.lambda) r = new o(e.lambda, 16);
                        else {
                            var n = this._getEndoRoots(this.n);
                            0 === this.g.mul(n[0]).x.cmp(this.g.x.redMul(t))
                                ? (r = n[0])
                                : ((r = n[1]),
                                  s(
                                      0 ===
                                          this.g
                                              .mul(r)
                                              .x.cmp(this.g.x.redMul(t))
                                  ));
                        }
                        return {
                            beta: t,
                            lambda: r,
                            basis: e.basis
                                ? e.basis.map(function(e) {
                                      return {
                                          a: new o(e.a, 16),
                                          b: new o(e.b, 16)
                                      };
                                  })
                                : this._getEndoBasis(r)
                        };
                    }
                }),
                (c.prototype._getEndoRoots = function(e) {
                    var t = e === this.p ? this.red : o.mont(e),
                        r = new o(2).toRed(t).redInvm(),
                        i = r.redNeg(),
                        n = new o(3)
                            .toRed(t)
                            .redNeg()
                            .redSqrt()
                            .redMul(r);
                    return [i.redAdd(n).fromRed(), i.redSub(n).fromRed()];
                }),
                (c.prototype._getEndoBasis = function(e) {
                    for (
                        var t,
                            r,
                            i,
                            n,
                            f,
                            a,
                            s,
                            c,
                            h,
                            d = this.n.ushrn(
                                Math.floor(this.n.bitLength() / 2)
                            ),
                            u = e,
                            p = this.n.clone(),
                            l = new o(1),
                            b = new o(0),
                            m = new o(0),
                            y = new o(1),
                            v = 0;
                        0 !== u.cmpn(0);

                    ) {
                        var g = p.div(u);
                        (c = p.sub(g.mul(u))), (h = m.sub(g.mul(l)));
                        var _ = y.sub(g.mul(b));
                        if (!i && c.cmp(d) < 0)
                            (t = s.neg()), (r = l), (i = c.neg()), (n = h);
                        else if (i && 2 == ++v) break;
                        (s = c),
                            (p = u),
                            (u = c),
                            (m = l),
                            (l = h),
                            (y = b),
                            (b = _);
                    }
                    (f = c.neg()), (a = h);
                    var w = i.sqr().add(n.sqr());
                    return (
                        f
                            .sqr()
                            .add(a.sqr())
                            .cmp(w) >= 0 && ((f = t), (a = r)),
                        i.negative && ((i = i.neg()), (n = n.neg())),
                        f.negative && ((f = f.neg()), (a = a.neg())),
                        [{a: i, b: n}, {a: f, b: a}]
                    );
                }),
                (c.prototype._endoSplit = function(e) {
                    var t = this.endo.basis,
                        r = t[0],
                        i = t[1],
                        n = i.b.mul(e).divRound(this.n),
                        o = r.b
                            .neg()
                            .mul(e)
                            .divRound(this.n),
                        f = n.mul(r.a),
                        a = o.mul(i.a),
                        s = n.mul(r.b),
                        c = o.mul(i.b);
                    return {k1: e.sub(f).sub(a), k2: s.add(c).neg()};
                }),
                (c.prototype.pointFromX = function(e, t) {
                    (e = new o(e, 16)).red || (e = e.toRed(this.red));
                    var r = e
                            .redSqr()
                            .redMul(e)
                            .redIAdd(e.redMul(this.a))
                            .redIAdd(this.b),
                        i = r.redSqrt();
                    if (
                        0 !==
                        i
                            .redSqr()
                            .redSub(r)
                            .cmp(this.zero)
                    )
                        throw new Error("invalid point");
                    var n = i.fromRed().isOdd();
                    return (
                        ((t && !n) || (!t && n)) && (i = i.redNeg()),
                        this.point(e, i)
                    );
                }),
                (c.prototype.validate = function(e) {
                    if (e.inf) return !0;
                    var t = e.x,
                        r = e.y,
                        i = this.a.redMul(t),
                        n = t
                            .redSqr()
                            .redMul(t)
                            .redIAdd(i)
                            .redIAdd(this.b);
                    return (
                        0 ===
                        r
                            .redSqr()
                            .redISub(n)
                            .cmpn(0)
                    );
                }),
                (c.prototype._endoWnafMulAdd = function(e, t, r) {
                    for (
                        var i = this._endoWnafT1, n = this._endoWnafT2, o = 0;
                        o < e.length;
                        o++
                    ) {
                        var f = this._endoSplit(t[o]),
                            a = e[o],
                            s = a._getBeta();
                        f.k1.negative && (f.k1.ineg(), (a = a.neg(!0))),
                            f.k2.negative && (f.k2.ineg(), (s = s.neg(!0))),
                            (i[2 * o] = a),
                            (i[2 * o + 1] = s),
                            (n[2 * o] = f.k1),
                            (n[2 * o + 1] = f.k2);
                    }
                    for (
                        var c = this._wnafMulAdd(1, i, n, 2 * o, r), h = 0;
                        h < 2 * o;
                        h++
                    )
                        (i[h] = null), (n[h] = null);
                    return c;
                }),
                f(h, a.BasePoint),
                (c.prototype.point = function(e, t, r) {
                    return new h(this, e, t, r);
                }),
                (c.prototype.pointFromJSON = function(e, t) {
                    return h.fromJSON(this, e, t);
                }),
                (h.prototype._getBeta = function() {
                    if (this.curve.endo) {
                        var e = this.precomputed;
                        if (e && e.beta) return e.beta;
                        var t = this.curve.point(
                            this.x.redMul(this.curve.endo.beta),
                            this.y
                        );
                        if (e) {
                            var r = this.curve,
                                i = function(e) {
                                    return r.point(
                                        e.x.redMul(r.endo.beta),
                                        e.y
                                    );
                                };
                            (e.beta = t),
                                (t.precomputed = {
                                    beta: null,
                                    naf: e.naf && {
                                        wnd: e.naf.wnd,
                                        points: e.naf.points.map(i)
                                    },
                                    doubles: e.doubles && {
                                        step: e.doubles.step,
                                        points: e.doubles.points.map(i)
                                    }
                                });
                        }
                        return t;
                    }
                }),
                (h.prototype.toJSON = function() {
                    return this.precomputed
                        ? [
                              this.x,
                              this.y,
                              this.precomputed && {
                                  doubles: this.precomputed.doubles && {
                                      step: this.precomputed.doubles.step,
                                      points: this.precomputed.doubles.points.slice(
                                          1
                                      )
                                  },
                                  naf: this.precomputed.naf && {
                                      wnd: this.precomputed.naf.wnd,
                                      points: this.precomputed.naf.points.slice(
                                          1
                                      )
                                  }
                              }
                          ]
                        : [this.x, this.y];
                }),
                (h.fromJSON = function(e, t, r) {
                    "string" == typeof t && (t = JSON.parse(t));
                    var i = e.point(t[0], t[1], r);
                    if (!t[2]) return i;
                    function n(t) {
                        return e.point(t[0], t[1], r);
                    }
                    var o = t[2];
                    return (
                        (i.precomputed = {
                            beta: null,
                            doubles: o.doubles && {
                                step: o.doubles.step,
                                points: [i].concat(o.doubles.points.map(n))
                            },
                            naf: o.naf && {
                                wnd: o.naf.wnd,
                                points: [i].concat(o.naf.points.map(n))
                            }
                        }),
                        i
                    );
                }),
                (h.prototype.inspect = function() {
                    return this.isInfinity()
                        ? "<EC Point Infinity>"
                        : "<EC Point x: " +
                              this.x.fromRed().toString(16, 2) +
                              " y: " +
                              this.y.fromRed().toString(16, 2) +
                              ">";
                }),
                (h.prototype.isInfinity = function() {
                    return this.inf;
                }),
                (h.prototype.add = function(e) {
                    if (this.inf) return e;
                    if (e.inf) return this;
                    if (this.eq(e)) return this.dbl();
                    if (this.neg().eq(e)) return this.curve.point(null, null);
                    if (0 === this.x.cmp(e.x))
                        return this.curve.point(null, null);
                    var t = this.y.redSub(e.y);
                    0 !== t.cmpn(0) &&
                        (t = t.redMul(this.x.redSub(e.x).redInvm()));
                    var r = t
                            .redSqr()
                            .redISub(this.x)
                            .redISub(e.x),
                        i = t.redMul(this.x.redSub(r)).redISub(this.y);
                    return this.curve.point(r, i);
                }),
                (h.prototype.dbl = function() {
                    if (this.inf) return this;
                    var e = this.y.redAdd(this.y);
                    if (0 === e.cmpn(0)) return this.curve.point(null, null);
                    var t = this.curve.a,
                        r = this.x.redSqr(),
                        i = e.redInvm(),
                        n = r
                            .redAdd(r)
                            .redIAdd(r)
                            .redIAdd(t)
                            .redMul(i),
                        o = n.redSqr().redISub(this.x.redAdd(this.x)),
                        f = n.redMul(this.x.redSub(o)).redISub(this.y);
                    return this.curve.point(o, f);
                }),
                (h.prototype.getX = function() {
                    return this.x.fromRed();
                }),
                (h.prototype.getY = function() {
                    return this.y.fromRed();
                }),
                (h.prototype.mul = function(e) {
                    return (
                        (e = new o(e, 16)),
                        this._hasDoubles(e)
                            ? this.curve._fixedNafMul(this, e)
                            : this.curve.endo
                                ? this.curve._endoWnafMulAdd([this], [e])
                                : this.curve._wnafMul(this, e)
                    );
                }),
                (h.prototype.mulAdd = function(e, t, r) {
                    var i = [this, t],
                        n = [e, r];
                    return this.curve.endo
                        ? this.curve._endoWnafMulAdd(i, n)
                        : this.curve._wnafMulAdd(1, i, n, 2);
                }),
                (h.prototype.jmulAdd = function(e, t, r) {
                    var i = [this, t],
                        n = [e, r];
                    return this.curve.endo
                        ? this.curve._endoWnafMulAdd(i, n, !0)
                        : this.curve._wnafMulAdd(1, i, n, 2, !0);
                }),
                (h.prototype.eq = function(e) {
                    return (
                        this === e ||
                        (this.inf === e.inf &&
                            (this.inf ||
                                (0 === this.x.cmp(e.x) &&
                                    0 === this.y.cmp(e.y))))
                    );
                }),
                (h.prototype.neg = function(e) {
                    if (this.inf) return this;
                    var t = this.curve.point(this.x, this.y.redNeg());
                    if (e && this.precomputed) {
                        var r = this.precomputed,
                            i = function(e) {
                                return e.neg();
                            };
                        t.precomputed = {
                            naf: r.naf && {
                                wnd: r.naf.wnd,
                                points: r.naf.points.map(i)
                            },
                            doubles: r.doubles && {
                                step: r.doubles.step,
                                points: r.doubles.points.map(i)
                            }
                        };
                    }
                    return t;
                }),
                (h.prototype.toJ = function() {
                    return this.inf
                        ? this.curve.jpoint(null, null, null)
                        : this.curve.jpoint(this.x, this.y, this.curve.one);
                }),
                f(d, a.BasePoint),
                (c.prototype.jpoint = function(e, t, r) {
                    return new d(this, e, t, r);
                }),
                (d.prototype.toP = function() {
                    if (this.isInfinity()) return this.curve.point(null, null);
                    var e = this.z.redInvm(),
                        t = e.redSqr(),
                        r = this.x.redMul(t),
                        i = this.y.redMul(t).redMul(e);
                    return this.curve.point(r, i);
                }),
                (d.prototype.neg = function() {
                    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
                }),
                (d.prototype.add = function(e) {
                    if (this.isInfinity()) return e;
                    if (e.isInfinity()) return this;
                    var t = e.z.redSqr(),
                        r = this.z.redSqr(),
                        i = this.x.redMul(t),
                        n = e.x.redMul(r),
                        o = this.y.redMul(t.redMul(e.z)),
                        f = e.y.redMul(r.redMul(this.z)),
                        a = i.redSub(n),
                        s = o.redSub(f);
                    if (0 === a.cmpn(0))
                        return 0 !== s.cmpn(0)
                            ? this.curve.jpoint(null, null, null)
                            : this.dbl();
                    var c = a.redSqr(),
                        h = c.redMul(a),
                        d = i.redMul(c),
                        u = s
                            .redSqr()
                            .redIAdd(h)
                            .redISub(d)
                            .redISub(d),
                        p = s.redMul(d.redISub(u)).redISub(o.redMul(h)),
                        l = this.z.redMul(e.z).redMul(a);
                    return this.curve.jpoint(u, p, l);
                }),
                (d.prototype.mixedAdd = function(e) {
                    if (this.isInfinity()) return e.toJ();
                    if (e.isInfinity()) return this;
                    var t = this.z.redSqr(),
                        r = this.x,
                        i = e.x.redMul(t),
                        n = this.y,
                        o = e.y.redMul(t).redMul(this.z),
                        f = r.redSub(i),
                        a = n.redSub(o);
                    if (0 === f.cmpn(0))
                        return 0 !== a.cmpn(0)
                            ? this.curve.jpoint(null, null, null)
                            : this.dbl();
                    var s = f.redSqr(),
                        c = s.redMul(f),
                        h = r.redMul(s),
                        d = a
                            .redSqr()
                            .redIAdd(c)
                            .redISub(h)
                            .redISub(h),
                        u = a.redMul(h.redISub(d)).redISub(n.redMul(c)),
                        p = this.z.redMul(f);
                    return this.curve.jpoint(d, u, p);
                }),
                (d.prototype.dblp = function(e) {
                    if (0 === e) return this;
                    if (this.isInfinity()) return this;
                    if (!e) return this.dbl();
                    if (this.curve.zeroA || this.curve.threeA) {
                        for (var t = this, r = 0; r < e; r++) t = t.dbl();
                        return t;
                    }
                    var i = this.curve.a,
                        n = this.curve.tinv,
                        o = this.x,
                        f = this.y,
                        a = this.z,
                        s = a.redSqr().redSqr(),
                        c = f.redAdd(f);
                    for (r = 0; r < e; r++) {
                        var h = o.redSqr(),
                            d = c.redSqr(),
                            u = d.redSqr(),
                            p = h
                                .redAdd(h)
                                .redIAdd(h)
                                .redIAdd(i.redMul(s)),
                            l = o.redMul(d),
                            b = p.redSqr().redISub(l.redAdd(l)),
                            m = l.redISub(b),
                            y = p.redMul(m);
                        y = y.redIAdd(y).redISub(u);
                        var v = c.redMul(a);
                        r + 1 < e && (s = s.redMul(u)),
                            (o = b),
                            (a = v),
                            (c = y);
                    }
                    return this.curve.jpoint(o, c.redMul(n), a);
                }),
                (d.prototype.dbl = function() {
                    return this.isInfinity()
                        ? this
                        : this.curve.zeroA
                            ? this._zeroDbl()
                            : this.curve.threeA
                                ? this._threeDbl()
                                : this._dbl();
                }),
                (d.prototype._zeroDbl = function() {
                    var e, t, r;
                    if (this.zOne) {
                        var i = this.x.redSqr(),
                            n = this.y.redSqr(),
                            o = n.redSqr(),
                            f = this.x
                                .redAdd(n)
                                .redSqr()
                                .redISub(i)
                                .redISub(o);
                        f = f.redIAdd(f);
                        var a = i.redAdd(i).redIAdd(i),
                            s = a
                                .redSqr()
                                .redISub(f)
                                .redISub(f),
                            c = o.redIAdd(o);
                        (c = (c = c.redIAdd(c)).redIAdd(c)),
                            (e = s),
                            (t = a.redMul(f.redISub(s)).redISub(c)),
                            (r = this.y.redAdd(this.y));
                    } else {
                        var h = this.x.redSqr(),
                            d = this.y.redSqr(),
                            u = d.redSqr(),
                            p = this.x
                                .redAdd(d)
                                .redSqr()
                                .redISub(h)
                                .redISub(u);
                        p = p.redIAdd(p);
                        var l = h.redAdd(h).redIAdd(h),
                            b = l.redSqr(),
                            m = u.redIAdd(u);
                        (m = (m = m.redIAdd(m)).redIAdd(m)),
                            (e = b.redISub(p).redISub(p)),
                            (t = l.redMul(p.redISub(e)).redISub(m)),
                            (r = (r = this.y.redMul(this.z)).redIAdd(r));
                    }
                    return this.curve.jpoint(e, t, r);
                }),
                (d.prototype._threeDbl = function() {
                    var e, t, r;
                    if (this.zOne) {
                        var i = this.x.redSqr(),
                            n = this.y.redSqr(),
                            o = n.redSqr(),
                            f = this.x
                                .redAdd(n)
                                .redSqr()
                                .redISub(i)
                                .redISub(o);
                        f = f.redIAdd(f);
                        var a = i
                                .redAdd(i)
                                .redIAdd(i)
                                .redIAdd(this.curve.a),
                            s = a
                                .redSqr()
                                .redISub(f)
                                .redISub(f);
                        e = s;
                        var c = o.redIAdd(o);
                        (c = (c = c.redIAdd(c)).redIAdd(c)),
                            (t = a.redMul(f.redISub(s)).redISub(c)),
                            (r = this.y.redAdd(this.y));
                    } else {
                        var h = this.z.redSqr(),
                            d = this.y.redSqr(),
                            u = this.x.redMul(d),
                            p = this.x.redSub(h).redMul(this.x.redAdd(h));
                        p = p.redAdd(p).redIAdd(p);
                        var l = u.redIAdd(u),
                            b = (l = l.redIAdd(l)).redAdd(l);
                        (e = p.redSqr().redISub(b)),
                            (r = this.y
                                .redAdd(this.z)
                                .redSqr()
                                .redISub(d)
                                .redISub(h));
                        var m = d.redSqr();
                        (m = (m = (m = m.redIAdd(m)).redIAdd(m)).redIAdd(m)),
                            (t = p.redMul(l.redISub(e)).redISub(m));
                    }
                    return this.curve.jpoint(e, t, r);
                }),
                (d.prototype._dbl = function() {
                    var e = this.curve.a,
                        t = this.x,
                        r = this.y,
                        i = this.z,
                        n = i.redSqr().redSqr(),
                        o = t.redSqr(),
                        f = r.redSqr(),
                        a = o
                            .redAdd(o)
                            .redIAdd(o)
                            .redIAdd(e.redMul(n)),
                        s = t.redAdd(t),
                        c = (s = s.redIAdd(s)).redMul(f),
                        h = a.redSqr().redISub(c.redAdd(c)),
                        d = c.redISub(h),
                        u = f.redSqr();
                    u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                    var p = a.redMul(d).redISub(u),
                        l = r.redAdd(r).redMul(i);
                    return this.curve.jpoint(h, p, l);
                }),
                (d.prototype.trpl = function() {
                    if (!this.curve.zeroA) return this.dbl().add(this);
                    var e = this.x.redSqr(),
                        t = this.y.redSqr(),
                        r = this.z.redSqr(),
                        i = t.redSqr(),
                        n = e.redAdd(e).redIAdd(e),
                        o = n.redSqr(),
                        f = this.x
                            .redAdd(t)
                            .redSqr()
                            .redISub(e)
                            .redISub(i),
                        a = (f = (f = (f = f.redIAdd(f))
                            .redAdd(f)
                            .redIAdd(f)).redISub(o)).redSqr(),
                        s = i.redIAdd(i);
                    s = (s = (s = s.redIAdd(s)).redIAdd(s)).redIAdd(s);
                    var c = n
                            .redIAdd(f)
                            .redSqr()
                            .redISub(o)
                            .redISub(a)
                            .redISub(s),
                        h = t.redMul(c);
                    h = (h = h.redIAdd(h)).redIAdd(h);
                    var d = this.x.redMul(a).redISub(h);
                    d = (d = d.redIAdd(d)).redIAdd(d);
                    var u = this.y.redMul(
                        c.redMul(s.redISub(c)).redISub(f.redMul(a))
                    );
                    u = (u = (u = u.redIAdd(u)).redIAdd(u)).redIAdd(u);
                    var p = this.z
                        .redAdd(f)
                        .redSqr()
                        .redISub(r)
                        .redISub(a);
                    return this.curve.jpoint(d, u, p);
                }),
                (d.prototype.mul = function(e, t) {
                    return (e = new o(e, t)), this.curve._wnafMul(this, e);
                }),
                (d.prototype.eq = function(e) {
                    if ("affine" === e.type) return this.eq(e.toJ());
                    if (this === e) return !0;
                    var t = this.z.redSqr(),
                        r = e.z.redSqr();
                    if (
                        0 !==
                        this.x
                            .redMul(r)
                            .redISub(e.x.redMul(t))
                            .cmpn(0)
                    )
                        return !1;
                    var i = t.redMul(this.z),
                        n = r.redMul(e.z);
                    return (
                        0 ===
                        this.y
                            .redMul(n)
                            .redISub(e.y.redMul(i))
                            .cmpn(0)
                    );
                }),
                (d.prototype.eqXToP = function(e) {
                    var t = this.z.redSqr(),
                        r = e.toRed(this.curve.red).redMul(t);
                    if (0 === this.x.cmp(r)) return !0;
                    for (var i = e.clone(), n = this.curve.redN.redMul(t); ; ) {
                        if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0))
                            return !1;
                        if ((r.redIAdd(n), 0 === this.x.cmp(r))) return !0;
                    }
                    return !1;
                }),
                (d.prototype.inspect = function() {
                    return this.isInfinity()
                        ? "<EC JPoint Infinity>"
                        : "<EC JPoint x: " +
                              this.x.toString(16, 2) +
                              " y: " +
                              this.y.toString(16, 2) +
                              " z: " +
                              this.z.toString(16, 2) +
                              ">";
                }),
                (d.prototype.isInfinity = function() {
                    return 0 === this.z.cmpn(0);
                });
        },
        1993: function(e, t, r) {
            "use strict";
            var i = r(1820),
                n = r(1777),
                o = r(86),
                f = i.base,
                a = r(1780).utils;
            function s(e) {
                f.call(this, "mont", e),
                    (this.a = new n(e.a, 16).toRed(this.red)),
                    (this.b = new n(e.b, 16).toRed(this.red)),
                    (this.i4 = new n(4).toRed(this.red).redInvm()),
                    (this.two = new n(2).toRed(this.red)),
                    (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
            }
            function c(e, t, r) {
                f.BasePoint.call(this, e, "projective"),
                    null === t && null === r
                        ? ((this.x = this.curve.one),
                          (this.z = this.curve.zero))
                        : ((this.x = new n(t, 16)),
                          (this.z = new n(r, 16)),
                          this.x.red || (this.x = this.x.toRed(this.curve.red)),
                          this.z.red ||
                              (this.z = this.z.toRed(this.curve.red)));
            }
            o(s, f),
                (e.exports = s),
                (s.prototype.validate = function(e) {
                    var t = e.normalize().x,
                        r = t.redSqr(),
                        i = r
                            .redMul(t)
                            .redAdd(r.redMul(this.a))
                            .redAdd(t);
                    return (
                        0 ===
                        i
                            .redSqrt()
                            .redSqr()
                            .cmp(i)
                    );
                }),
                o(c, f.BasePoint),
                (s.prototype.decodePoint = function(e, t) {
                    return this.point(a.toArray(e, t), 1);
                }),
                (s.prototype.point = function(e, t) {
                    return new c(this, e, t);
                }),
                (s.prototype.pointFromJSON = function(e) {
                    return c.fromJSON(this, e);
                }),
                (c.prototype.precompute = function() {}),
                (c.prototype._encode = function() {
                    return this.getX().toArray("be", this.curve.p.byteLength());
                }),
                (c.fromJSON = function(e, t) {
                    return new c(e, t[0], t[1] || e.one);
                }),
                (c.prototype.inspect = function() {
                    return this.isInfinity()
                        ? "<EC Point Infinity>"
                        : "<EC Point x: " +
                              this.x.fromRed().toString(16, 2) +
                              " z: " +
                              this.z.fromRed().toString(16, 2) +
                              ">";
                }),
                (c.prototype.isInfinity = function() {
                    return 0 === this.z.cmpn(0);
                }),
                (c.prototype.dbl = function() {
                    var e = this.x.redAdd(this.z).redSqr(),
                        t = this.x.redSub(this.z).redSqr(),
                        r = e.redSub(t),
                        i = e.redMul(t),
                        n = r.redMul(t.redAdd(this.curve.a24.redMul(r)));
                    return this.curve.point(i, n);
                }),
                (c.prototype.add = function() {
                    throw new Error("Not supported on Montgomery curve");
                }),
                (c.prototype.diffAdd = function(e, t) {
                    var r = this.x.redAdd(this.z),
                        i = this.x.redSub(this.z),
                        n = e.x.redAdd(e.z),
                        o = e.x.redSub(e.z).redMul(r),
                        f = n.redMul(i),
                        a = t.z.redMul(o.redAdd(f).redSqr()),
                        s = t.x.redMul(o.redISub(f).redSqr());
                    return this.curve.point(a, s);
                }),
                (c.prototype.mul = function(e) {
                    for (
                        var t = e.clone(),
                            r = this,
                            i = this.curve.point(null, null),
                            n = [];
                        0 !== t.cmpn(0);
                        t.iushrn(1)
                    )
                        n.push(t.andln(1));
                    for (var o = n.length - 1; o >= 0; o--)
                        0 === n[o]
                            ? ((r = r.diffAdd(i, this)), (i = i.dbl()))
                            : ((i = r.diffAdd(i, this)), (r = r.dbl()));
                    return i;
                }),
                (c.prototype.mulAdd = function() {
                    throw new Error("Not supported on Montgomery curve");
                }),
                (c.prototype.jumlAdd = function() {
                    throw new Error("Not supported on Montgomery curve");
                }),
                (c.prototype.eq = function(e) {
                    return 0 === this.getX().cmp(e.getX());
                }),
                (c.prototype.normalize = function() {
                    return (
                        (this.x = this.x.redMul(this.z.redInvm())),
                        (this.z = this.curve.one),
                        this
                    );
                }),
                (c.prototype.getX = function() {
                    return this.normalize(), this.x.fromRed();
                });
        },
        1994: function(e, t, r) {
            "use strict";
            var i = r(1820),
                n = r(1780),
                o = r(1777),
                f = r(86),
                a = i.base,
                s = n.utils.assert;
            function c(e) {
                (this.twisted = 1 != (0 | e.a)),
                    (this.mOneA = this.twisted && -1 == (0 | e.a)),
                    (this.extended = this.mOneA),
                    a.call(this, "edwards", e),
                    (this.a = new o(e.a, 16).umod(this.red.m)),
                    (this.a = this.a.toRed(this.red)),
                    (this.c = new o(e.c, 16).toRed(this.red)),
                    (this.c2 = this.c.redSqr()),
                    (this.d = new o(e.d, 16).toRed(this.red)),
                    (this.dd = this.d.redAdd(this.d)),
                    s(!this.twisted || 0 === this.c.fromRed().cmpn(1)),
                    (this.oneC = 1 == (0 | e.c));
            }
            function h(e, t, r, i, n) {
                a.BasePoint.call(this, e, "projective"),
                    null === t && null === r && null === i
                        ? ((this.x = this.curve.zero),
                          (this.y = this.curve.one),
                          (this.z = this.curve.one),
                          (this.t = this.curve.zero),
                          (this.zOne = !0))
                        : ((this.x = new o(t, 16)),
                          (this.y = new o(r, 16)),
                          (this.z = i ? new o(i, 16) : this.curve.one),
                          (this.t = n && new o(n, 16)),
                          this.x.red || (this.x = this.x.toRed(this.curve.red)),
                          this.y.red || (this.y = this.y.toRed(this.curve.red)),
                          this.z.red || (this.z = this.z.toRed(this.curve.red)),
                          this.t &&
                              !this.t.red &&
                              (this.t = this.t.toRed(this.curve.red)),
                          (this.zOne = this.z === this.curve.one),
                          this.curve.extended &&
                              !this.t &&
                              ((this.t = this.x.redMul(this.y)),
                              this.zOne ||
                                  (this.t = this.t.redMul(this.z.redInvm()))));
            }
            f(c, a),
                (e.exports = c),
                (c.prototype._mulA = function(e) {
                    return this.mOneA ? e.redNeg() : this.a.redMul(e);
                }),
                (c.prototype._mulC = function(e) {
                    return this.oneC ? e : this.c.redMul(e);
                }),
                (c.prototype.jpoint = function(e, t, r, i) {
                    return this.point(e, t, r, i);
                }),
                (c.prototype.pointFromX = function(e, t) {
                    (e = new o(e, 16)).red || (e = e.toRed(this.red));
                    var r = e.redSqr(),
                        i = this.c2.redSub(this.a.redMul(r)),
                        n = this.one.redSub(this.c2.redMul(this.d).redMul(r)),
                        f = i.redMul(n.redInvm()),
                        a = f.redSqrt();
                    if (
                        0 !==
                        a
                            .redSqr()
                            .redSub(f)
                            .cmp(this.zero)
                    )
                        throw new Error("invalid point");
                    var s = a.fromRed().isOdd();
                    return (
                        ((t && !s) || (!t && s)) && (a = a.redNeg()),
                        this.point(e, a)
                    );
                }),
                (c.prototype.pointFromY = function(e, t) {
                    (e = new o(e, 16)).red || (e = e.toRed(this.red));
                    var r = e.redSqr(),
                        i = r.redSub(this.one),
                        n = r.redMul(this.d).redAdd(this.one),
                        f = i.redMul(n.redInvm());
                    if (0 === f.cmp(this.zero)) {
                        if (t) throw new Error("invalid point");
                        return this.point(this.zero, e);
                    }
                    var a = f.redSqrt();
                    if (
                        0 !==
                        a
                            .redSqr()
                            .redSub(f)
                            .cmp(this.zero)
                    )
                        throw new Error("invalid point");
                    return (
                        a.isOdd() !== t && (a = a.redNeg()), this.point(a, e)
                    );
                }),
                (c.prototype.validate = function(e) {
                    if (e.isInfinity()) return !0;
                    e.normalize();
                    var t = e.x.redSqr(),
                        r = e.y.redSqr(),
                        i = t.redMul(this.a).redAdd(r),
                        n = this.c2.redMul(
                            this.one.redAdd(this.d.redMul(t).redMul(r))
                        );
                    return 0 === i.cmp(n);
                }),
                f(h, a.BasePoint),
                (c.prototype.pointFromJSON = function(e) {
                    return h.fromJSON(this, e);
                }),
                (c.prototype.point = function(e, t, r, i) {
                    return new h(this, e, t, r, i);
                }),
                (h.fromJSON = function(e, t) {
                    return new h(e, t[0], t[1], t[2]);
                }),
                (h.prototype.inspect = function() {
                    return this.isInfinity()
                        ? "<EC Point Infinity>"
                        : "<EC Point x: " +
                              this.x.fromRed().toString(16, 2) +
                              " y: " +
                              this.y.fromRed().toString(16, 2) +
                              " z: " +
                              this.z.fromRed().toString(16, 2) +
                              ">";
                }),
                (h.prototype.isInfinity = function() {
                    return 0 === this.x.cmpn(0) && 0 === this.y.cmp(this.z);
                }),
                (h.prototype._extDbl = function() {
                    var e = this.x.redSqr(),
                        t = this.y.redSqr(),
                        r = this.z.redSqr();
                    r = r.redIAdd(r);
                    var i = this.curve._mulA(e),
                        n = this.x
                            .redAdd(this.y)
                            .redSqr()
                            .redISub(e)
                            .redISub(t),
                        o = i.redAdd(t),
                        f = o.redSub(r),
                        a = i.redSub(t),
                        s = n.redMul(f),
                        c = o.redMul(a),
                        h = n.redMul(a),
                        d = f.redMul(o);
                    return this.curve.point(s, c, d, h);
                }),
                (h.prototype._projDbl = function() {
                    var e,
                        t,
                        r,
                        i = this.x.redAdd(this.y).redSqr(),
                        n = this.x.redSqr(),
                        o = this.y.redSqr();
                    if (this.curve.twisted) {
                        var f = (c = this.curve._mulA(n)).redAdd(o);
                        if (this.zOne)
                            (e = i
                                .redSub(n)
                                .redSub(o)
                                .redMul(f.redSub(this.curve.two))),
                                (t = f.redMul(c.redSub(o))),
                                (r = f
                                    .redSqr()
                                    .redSub(f)
                                    .redSub(f));
                        else {
                            var a = this.z.redSqr(),
                                s = f.redSub(a).redISub(a);
                            (e = i
                                .redSub(n)
                                .redISub(o)
                                .redMul(s)),
                                (t = f.redMul(c.redSub(o))),
                                (r = f.redMul(s));
                        }
                    } else {
                        var c = n.redAdd(o);
                        (a = this.curve._mulC(this.c.redMul(this.z)).redSqr()),
                            (s = c.redSub(a).redSub(a));
                        (e = this.curve._mulC(i.redISub(c)).redMul(s)),
                            (t = this.curve._mulC(c).redMul(n.redISub(o))),
                            (r = c.redMul(s));
                    }
                    return this.curve.point(e, t, r);
                }),
                (h.prototype.dbl = function() {
                    return this.isInfinity()
                        ? this
                        : this.curve.extended
                            ? this._extDbl()
                            : this._projDbl();
                }),
                (h.prototype._extAdd = function(e) {
                    var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
                        r = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
                        i = this.t.redMul(this.curve.dd).redMul(e.t),
                        n = this.z.redMul(e.z.redAdd(e.z)),
                        o = r.redSub(t),
                        f = n.redSub(i),
                        a = n.redAdd(i),
                        s = r.redAdd(t),
                        c = o.redMul(f),
                        h = a.redMul(s),
                        d = o.redMul(s),
                        u = f.redMul(a);
                    return this.curve.point(c, h, u, d);
                }),
                (h.prototype._projAdd = function(e) {
                    var t,
                        r,
                        i = this.z.redMul(e.z),
                        n = i.redSqr(),
                        o = this.x.redMul(e.x),
                        f = this.y.redMul(e.y),
                        a = this.curve.d.redMul(o).redMul(f),
                        s = n.redSub(a),
                        c = n.redAdd(a),
                        h = this.x
                            .redAdd(this.y)
                            .redMul(e.x.redAdd(e.y))
                            .redISub(o)
                            .redISub(f),
                        d = i.redMul(s).redMul(h);
                    return (
                        this.curve.twisted
                            ? ((t = i
                                  .redMul(c)
                                  .redMul(f.redSub(this.curve._mulA(o)))),
                              (r = s.redMul(c)))
                            : ((t = i.redMul(c).redMul(f.redSub(o))),
                              (r = this.curve._mulC(s).redMul(c))),
                        this.curve.point(d, t, r)
                    );
                }),
                (h.prototype.add = function(e) {
                    return this.isInfinity()
                        ? e
                        : e.isInfinity()
                            ? this
                            : this.curve.extended
                                ? this._extAdd(e)
                                : this._projAdd(e);
                }),
                (h.prototype.mul = function(e) {
                    return this._hasDoubles(e)
                        ? this.curve._fixedNafMul(this, e)
                        : this.curve._wnafMul(this, e);
                }),
                (h.prototype.mulAdd = function(e, t, r) {
                    return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !1);
                }),
                (h.prototype.jmulAdd = function(e, t, r) {
                    return this.curve._wnafMulAdd(1, [this, t], [e, r], 2, !0);
                }),
                (h.prototype.normalize = function() {
                    if (this.zOne) return this;
                    var e = this.z.redInvm();
                    return (
                        (this.x = this.x.redMul(e)),
                        (this.y = this.y.redMul(e)),
                        this.t && (this.t = this.t.redMul(e)),
                        (this.z = this.curve.one),
                        (this.zOne = !0),
                        this
                    );
                }),
                (h.prototype.neg = function() {
                    return this.curve.point(
                        this.x.redNeg(),
                        this.y,
                        this.z,
                        this.t && this.t.redNeg()
                    );
                }),
                (h.prototype.getX = function() {
                    return this.normalize(), this.x.fromRed();
                }),
                (h.prototype.getY = function() {
                    return this.normalize(), this.y.fromRed();
                }),
                (h.prototype.eq = function(e) {
                    return (
                        this === e ||
                        (0 === this.getX().cmp(e.getX()) &&
                            0 === this.getY().cmp(e.getY()))
                    );
                }),
                (h.prototype.eqXToP = function(e) {
                    var t = e.toRed(this.curve.red).redMul(this.z);
                    if (0 === this.x.cmp(t)) return !0;
                    for (
                        var r = e.clone(), i = this.curve.redN.redMul(this.z);
                        ;

                    ) {
                        if ((r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0))
                            return !1;
                        if ((t.redIAdd(i), 0 === this.x.cmp(t))) return !0;
                    }
                    return !1;
                }),
                (h.prototype.toP = h.prototype.normalize),
                (h.prototype.mixedAdd = h.prototype.add);
        },
        1995: function(e, t, r) {
            "use strict";
            var i,
                n = t,
                o = r(1834),
                f = r(1780),
                a = f.utils.assert;
            function s(e) {
                "short" === e.type
                    ? (this.curve = new f.curve.short(e))
                    : "edwards" === e.type
                        ? (this.curve = new f.curve.edwards(e))
                        : (this.curve = new f.curve.mont(e)),
                    (this.g = this.curve.g),
                    (this.n = this.curve.n),
                    (this.hash = e.hash),
                    a(this.g.validate(), "Invalid curve"),
                    a(
                        this.g.mul(this.n).isInfinity(),
                        "Invalid curve, G*N != O"
                    );
            }
            function c(e, t) {
                Object.defineProperty(n, e, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        var r = new s(t);
                        return (
                            Object.defineProperty(n, e, {
                                configurable: !0,
                                enumerable: !0,
                                value: r
                            }),
                            r
                        );
                    }
                });
            }
            (n.PresetCurve = s),
                c("p192", {
                    type: "short",
                    prime: "p192",
                    p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
                    a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
                    b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
                    n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
                    hash: o.sha256,
                    gRed: !1,
                    g: [
                        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
                        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
                    ]
                }),
                c("p224", {
                    type: "short",
                    prime: "p224",
                    p:
                        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
                    a:
                        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
                    b:
                        "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
                    n:
                        "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
                    hash: o.sha256,
                    gRed: !1,
                    g: [
                        "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
                        "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
                    ]
                }),
                c("p256", {
                    type: "short",
                    prime: null,
                    p:
                        "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
                    a:
                        "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
                    b:
                        "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
                    n:
                        "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
                    hash: o.sha256,
                    gRed: !1,
                    g: [
                        "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
                        "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
                    ]
                }),
                c("p384", {
                    type: "short",
                    prime: null,
                    p:
                        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
                    a:
                        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
                    b:
                        "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
                    n:
                        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
                    hash: o.sha384,
                    gRed: !1,
                    g: [
                        "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
                        "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
                    ]
                }),
                c("p521", {
                    type: "short",
                    prime: null,
                    p:
                        "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
                    a:
                        "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
                    b:
                        "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
                    n:
                        "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
                    hash: o.sha512,
                    gRed: !1,
                    g: [
                        "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
                        "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
                    ]
                }),
                c("curve25519", {
                    type: "mont",
                    prime: "p25519",
                    p:
                        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                    a: "76d06",
                    b: "1",
                    n:
                        "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                    hash: o.sha256,
                    gRed: !1,
                    g: ["9"]
                }),
                c("ed25519", {
                    type: "edwards",
                    prime: "p25519",
                    p:
                        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
                    a: "-1",
                    c: "1",
                    d:
                        "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
                    n:
                        "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
                    hash: o.sha256,
                    gRed: !1,
                    g: [
                        "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
                        "6666666666666666666666666666666666666666666666666666666666666658"
                    ]
                });
            try {
                i = r(2002);
            } catch (e) {
                i = void 0;
            }
            c("secp256k1", {
                type: "short",
                prime: "k256",
                p:
                    "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
                a: "0",
                b: "7",
                n:
                    "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
                h: "1",
                hash: o.sha256,
                beta:
                    "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
                lambda:
                    "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
                basis: [
                    {
                        a: "3086d221a7d46bcde86c90e49284eb15",
                        b: "-e4437ed6010e88286f547fa90abfe4c3"
                    },
                    {
                        a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                        b: "3086d221a7d46bcde86c90e49284eb15"
                    }
                ],
                gRed: !1,
                g: [
                    "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
                    "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
                    i
                ]
            });
        },
        1996: function(e, t, r) {
            "use strict";
            (t.sha1 = r(1997)),
                (t.sha224 = r(1998)),
                (t.sha256 = r(1864)),
                (t.sha384 = r(1999)),
                (t.sha512 = r(1865));
        },
        1997: function(e, t, r) {
            "use strict";
            var i = r(1787),
                n = r(1809),
                o = r(1863),
                f = i.rotl32,
                a = i.sum32,
                s = i.sum32_5,
                c = o.ft_1,
                h = n.BlockHash,
                d = [1518500249, 1859775393, 2400959708, 3395469782];
            function u() {
                if (!(this instanceof u)) return new u();
                h.call(this),
                    (this.h = [
                        1732584193,
                        4023233417,
                        2562383102,
                        271733878,
                        3285377520
                    ]),
                    (this.W = new Array(80));
            }
            i.inherits(u, h),
                (e.exports = u),
                (u.blockSize = 512),
                (u.outSize = 160),
                (u.hmacStrength = 80),
                (u.padLength = 64),
                (u.prototype._update = function(e, t) {
                    for (var r = this.W, i = 0; i < 16; i++) r[i] = e[t + i];
                    for (; i < r.length; i++)
                        r[i] = f(
                            r[i - 3] ^ r[i - 8] ^ r[i - 14] ^ r[i - 16],
                            1
                        );
                    var n = this.h[0],
                        o = this.h[1],
                        h = this.h[2],
                        u = this.h[3],
                        p = this.h[4];
                    for (i = 0; i < r.length; i++) {
                        var l = ~~(i / 20),
                            b = s(f(n, 5), c(l, o, h, u), p, r[i], d[l]);
                        (p = u), (u = h), (h = f(o, 30)), (o = n), (n = b);
                    }
                    (this.h[0] = a(this.h[0], n)),
                        (this.h[1] = a(this.h[1], o)),
                        (this.h[2] = a(this.h[2], h)),
                        (this.h[3] = a(this.h[3], u)),
                        (this.h[4] = a(this.h[4], p));
                }),
                (u.prototype._digest = function(e) {
                    return "hex" === e
                        ? i.toHex32(this.h, "big")
                        : i.split32(this.h, "big");
                });
        },
        1998: function(e, t, r) {
            "use strict";
            var i = r(1787),
                n = r(1864);
            function o() {
                if (!(this instanceof o)) return new o();
                n.call(this),
                    (this.h = [
                        3238371032,
                        914150663,
                        812702999,
                        4144912697,
                        4290775857,
                        1750603025,
                        1694076839,
                        3204075428
                    ]);
            }
            i.inherits(o, n),
                (e.exports = o),
                (o.blockSize = 512),
                (o.outSize = 224),
                (o.hmacStrength = 192),
                (o.padLength = 64),
                (o.prototype._digest = function(e) {
                    return "hex" === e
                        ? i.toHex32(this.h.slice(0, 7), "big")
                        : i.split32(this.h.slice(0, 7), "big");
                });
        },
        1999: function(e, t, r) {
            "use strict";
            var i = r(1787),
                n = r(1865);
            function o() {
                if (!(this instanceof o)) return new o();
                n.call(this),
                    (this.h = [
                        3418070365,
                        3238371032,
                        1654270250,
                        914150663,
                        2438529370,
                        812702999,
                        355462360,
                        4144912697,
                        1731405415,
                        4290775857,
                        2394180231,
                        1750603025,
                        3675008525,
                        1694076839,
                        1203062813,
                        3204075428
                    ]);
            }
            i.inherits(o, n),
                (e.exports = o),
                (o.blockSize = 1024),
                (o.outSize = 384),
                (o.hmacStrength = 192),
                (o.padLength = 128),
                (o.prototype._digest = function(e) {
                    return "hex" === e
                        ? i.toHex32(this.h.slice(0, 12), "big")
                        : i.split32(this.h.slice(0, 12), "big");
                });
        },
        2000: function(e, t, r) {
            "use strict";
            var i = r(1787),
                n = r(1809),
                o = i.rotl32,
                f = i.sum32,
                a = i.sum32_3,
                s = i.sum32_4,
                c = n.BlockHash;
            function h() {
                if (!(this instanceof h)) return new h();
                c.call(this),
                    (this.h = [
                        1732584193,
                        4023233417,
                        2562383102,
                        271733878,
                        3285377520
                    ]),
                    (this.endian = "little");
            }
            function d(e, t, r, i) {
                return e <= 15
                    ? t ^ r ^ i
                    : e <= 31
                        ? (t & r) | (~t & i)
                        : e <= 47
                            ? (t | ~r) ^ i
                            : e <= 63
                                ? (t & i) | (r & ~i)
                                : t ^ (r | ~i);
            }
            function u(e) {
                return e <= 15
                    ? 0
                    : e <= 31
                        ? 1518500249
                        : e <= 47
                            ? 1859775393
                            : e <= 63
                                ? 2400959708
                                : 2840853838;
            }
            function p(e) {
                return e <= 15
                    ? 1352829926
                    : e <= 31
                        ? 1548603684
                        : e <= 47
                            ? 1836072691
                            : e <= 63
                                ? 2053994217
                                : 0;
            }
            i.inherits(h, c),
                (t.ripemd160 = h),
                (h.blockSize = 512),
                (h.outSize = 160),
                (h.hmacStrength = 192),
                (h.padLength = 64),
                (h.prototype._update = function(e, t) {
                    for (
                        var r = this.h[0],
                            i = this.h[1],
                            n = this.h[2],
                            c = this.h[3],
                            h = this.h[4],
                            v = r,
                            g = i,
                            _ = n,
                            w = c,
                            S = h,
                            E = 0;
                        E < 80;
                        E++
                    ) {
                        var M = f(
                            o(s(r, d(E, i, n, c), e[l[E] + t], u(E)), m[E]),
                            h
                        );
                        (r = h),
                            (h = c),
                            (c = o(n, 10)),
                            (n = i),
                            (i = M),
                            (M = f(
                                o(
                                    s(v, d(79 - E, g, _, w), e[b[E] + t], p(E)),
                                    y[E]
                                ),
                                S
                            )),
                            (v = S),
                            (S = w),
                            (w = o(_, 10)),
                            (_ = g),
                            (g = M);
                    }
                    (M = a(this.h[1], n, w)),
                        (this.h[1] = a(this.h[2], c, S)),
                        (this.h[2] = a(this.h[3], h, v)),
                        (this.h[3] = a(this.h[4], r, g)),
                        (this.h[4] = a(this.h[0], i, _)),
                        (this.h[0] = M);
                }),
                (h.prototype._digest = function(e) {
                    return "hex" === e
                        ? i.toHex32(this.h, "little")
                        : i.split32(this.h, "little");
                });
            var l = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    7,
                    4,
                    13,
                    1,
                    10,
                    6,
                    15,
                    3,
                    12,
                    0,
                    9,
                    5,
                    2,
                    14,
                    11,
                    8,
                    3,
                    10,
                    14,
                    4,
                    9,
                    15,
                    8,
                    1,
                    2,
                    7,
                    0,
                    6,
                    13,
                    11,
                    5,
                    12,
                    1,
                    9,
                    11,
                    10,
                    0,
                    8,
                    12,
                    4,
                    13,
                    3,
                    7,
                    15,
                    14,
                    5,
                    6,
                    2,
                    4,
                    0,
                    5,
                    9,
                    7,
                    12,
                    2,
                    10,
                    14,
                    1,
                    3,
                    8,
                    11,
                    6,
                    15,
                    13
                ],
                b = [
                    5,
                    14,
                    7,
                    0,
                    9,
                    2,
                    11,
                    4,
                    13,
                    6,
                    15,
                    8,
                    1,
                    10,
                    3,
                    12,
                    6,
                    11,
                    3,
                    7,
                    0,
                    13,
                    5,
                    10,
                    14,
                    15,
                    8,
                    12,
                    4,
                    9,
                    1,
                    2,
                    15,
                    5,
                    1,
                    3,
                    7,
                    14,
                    6,
                    9,
                    11,
                    8,
                    12,
                    2,
                    10,
                    0,
                    4,
                    13,
                    8,
                    6,
                    4,
                    1,
                    3,
                    11,
                    15,
                    0,
                    5,
                    12,
                    2,
                    13,
                    9,
                    7,
                    10,
                    14,
                    12,
                    15,
                    10,
                    4,
                    1,
                    5,
                    8,
                    7,
                    6,
                    2,
                    13,
                    14,
                    0,
                    3,
                    9,
                    11
                ],
                m = [
                    11,
                    14,
                    15,
                    12,
                    5,
                    8,
                    7,
                    9,
                    11,
                    13,
                    14,
                    15,
                    6,
                    7,
                    9,
                    8,
                    7,
                    6,
                    8,
                    13,
                    11,
                    9,
                    7,
                    15,
                    7,
                    12,
                    15,
                    9,
                    11,
                    7,
                    13,
                    12,
                    11,
                    13,
                    6,
                    7,
                    14,
                    9,
                    13,
                    15,
                    14,
                    8,
                    13,
                    6,
                    5,
                    12,
                    7,
                    5,
                    11,
                    12,
                    14,
                    15,
                    14,
                    15,
                    9,
                    8,
                    9,
                    14,
                    5,
                    6,
                    8,
                    6,
                    5,
                    12,
                    9,
                    15,
                    5,
                    11,
                    6,
                    8,
                    13,
                    12,
                    5,
                    12,
                    13,
                    14,
                    11,
                    8,
                    5,
                    6
                ],
                y = [
                    8,
                    9,
                    9,
                    11,
                    13,
                    15,
                    15,
                    5,
                    7,
                    7,
                    8,
                    11,
                    14,
                    14,
                    12,
                    6,
                    9,
                    13,
                    15,
                    7,
                    12,
                    8,
                    9,
                    11,
                    7,
                    7,
                    12,
                    7,
                    6,
                    15,
                    13,
                    11,
                    9,
                    7,
                    15,
                    11,
                    8,
                    6,
                    6,
                    14,
                    12,
                    13,
                    5,
                    14,
                    13,
                    13,
                    7,
                    5,
                    15,
                    5,
                    8,
                    11,
                    14,
                    14,
                    6,
                    14,
                    6,
                    9,
                    12,
                    9,
                    12,
                    5,
                    15,
                    8,
                    8,
                    5,
                    12,
                    9,
                    12,
                    5,
                    14,
                    6,
                    8,
                    13,
                    6,
                    5,
                    15,
                    13,
                    11,
                    11
                ];
        },
        2001: function(e, t, r) {
            "use strict";
            var i = r(1787),
                n = r(1783);
            function o(e, t, r) {
                if (!(this instanceof o)) return new o(e, t, r);
                (this.Hash = e),
                    (this.blockSize = e.blockSize / 8),
                    (this.outSize = e.outSize / 8),
                    (this.inner = null),
                    (this.outer = null),
                    this._init(i.toArray(t, r));
            }
            (e.exports = o),
                (o.prototype._init = function(e) {
                    e.length > this.blockSize &&
                        (e = new this.Hash().update(e).digest()),
                        n(e.length <= this.blockSize);
                    for (var t = e.length; t < this.blockSize; t++) e.push(0);
                    for (t = 0; t < e.length; t++) e[t] ^= 54;
                    for (
                        this.inner = new this.Hash().update(e), t = 0;
                        t < e.length;
                        t++
                    )
                        e[t] ^= 106;
                    this.outer = new this.Hash().update(e);
                }),
                (o.prototype.update = function(e, t) {
                    return this.inner.update(e, t), this;
                }),
                (o.prototype.digest = function(e) {
                    return (
                        this.outer.update(this.inner.digest()),
                        this.outer.digest(e)
                    );
                });
        },
        2002: function(e, t) {
            e.exports = {
                doubles: {
                    step: 4,
                    points: [
                        [
                            "e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a",
                            "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"
                        ],
                        [
                            "8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508",
                            "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"
                        ],
                        [
                            "175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739",
                            "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"
                        ],
                        [
                            "363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640",
                            "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"
                        ],
                        [
                            "8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c",
                            "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"
                        ],
                        [
                            "723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda",
                            "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"
                        ],
                        [
                            "eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa",
                            "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"
                        ],
                        [
                            "100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0",
                            "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"
                        ],
                        [
                            "e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d",
                            "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"
                        ],
                        [
                            "feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d",
                            "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"
                        ],
                        [
                            "da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1",
                            "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"
                        ],
                        [
                            "53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0",
                            "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"
                        ],
                        [
                            "8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047",
                            "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"
                        ],
                        [
                            "385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862",
                            "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"
                        ],
                        [
                            "6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7",
                            "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"
                        ],
                        [
                            "3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd",
                            "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"
                        ],
                        [
                            "85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83",
                            "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"
                        ],
                        [
                            "948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a",
                            "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"
                        ],
                        [
                            "6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8",
                            "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"
                        ],
                        [
                            "e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d",
                            "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"
                        ],
                        [
                            "e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725",
                            "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"
                        ],
                        [
                            "213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754",
                            "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"
                        ],
                        [
                            "4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c",
                            "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"
                        ],
                        [
                            "fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6",
                            "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"
                        ],
                        [
                            "76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39",
                            "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"
                        ],
                        [
                            "c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891",
                            "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"
                        ],
                        [
                            "d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b",
                            "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"
                        ],
                        [
                            "b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03",
                            "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"
                        ],
                        [
                            "e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d",
                            "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"
                        ],
                        [
                            "a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070",
                            "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"
                        ],
                        [
                            "90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4",
                            "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"
                        ],
                        [
                            "8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da",
                            "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"
                        ],
                        [
                            "e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11",
                            "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"
                        ],
                        [
                            "8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e",
                            "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"
                        ],
                        [
                            "e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41",
                            "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"
                        ],
                        [
                            "b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef",
                            "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"
                        ],
                        [
                            "d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8",
                            "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"
                        ],
                        [
                            "324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d",
                            "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"
                        ],
                        [
                            "4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96",
                            "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"
                        ],
                        [
                            "9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd",
                            "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"
                        ],
                        [
                            "6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5",
                            "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"
                        ],
                        [
                            "a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266",
                            "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"
                        ],
                        [
                            "7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71",
                            "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"
                        ],
                        [
                            "928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac",
                            "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"
                        ],
                        [
                            "85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751",
                            "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"
                        ],
                        [
                            "ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e",
                            "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"
                        ],
                        [
                            "827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241",
                            "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"
                        ],
                        [
                            "eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3",
                            "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"
                        ],
                        [
                            "e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f",
                            "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"
                        ],
                        [
                            "1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19",
                            "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"
                        ],
                        [
                            "146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be",
                            "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"
                        ],
                        [
                            "fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9",
                            "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"
                        ],
                        [
                            "da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2",
                            "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"
                        ],
                        [
                            "a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13",
                            "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"
                        ],
                        [
                            "174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c",
                            "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"
                        ],
                        [
                            "959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba",
                            "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"
                        ],
                        [
                            "d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151",
                            "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"
                        ],
                        [
                            "64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073",
                            "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"
                        ],
                        [
                            "8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458",
                            "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"
                        ],
                        [
                            "13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b",
                            "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"
                        ],
                        [
                            "bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366",
                            "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"
                        ],
                        [
                            "8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa",
                            "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"
                        ],
                        [
                            "8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0",
                            "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"
                        ],
                        [
                            "dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787",
                            "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"
                        ],
                        [
                            "f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e",
                            "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"
                        ]
                    ]
                },
                naf: {
                    wnd: 7,
                    points: [
                        [
                            "f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9",
                            "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"
                        ],
                        [
                            "2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4",
                            "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"
                        ],
                        [
                            "5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc",
                            "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"
                        ],
                        [
                            "acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe",
                            "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"
                        ],
                        [
                            "774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb",
                            "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"
                        ],
                        [
                            "f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8",
                            "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"
                        ],
                        [
                            "d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e",
                            "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"
                        ],
                        [
                            "defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34",
                            "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"
                        ],
                        [
                            "2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c",
                            "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"
                        ],
                        [
                            "352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5",
                            "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"
                        ],
                        [
                            "2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f",
                            "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"
                        ],
                        [
                            "9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714",
                            "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"
                        ],
                        [
                            "daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729",
                            "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"
                        ],
                        [
                            "c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db",
                            "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"
                        ],
                        [
                            "6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4",
                            "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"
                        ],
                        [
                            "1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5",
                            "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"
                        ],
                        [
                            "605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479",
                            "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"
                        ],
                        [
                            "62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d",
                            "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"
                        ],
                        [
                            "80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f",
                            "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"
                        ],
                        [
                            "7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb",
                            "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"
                        ],
                        [
                            "d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9",
                            "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"
                        ],
                        [
                            "49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963",
                            "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"
                        ],
                        [
                            "77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74",
                            "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"
                        ],
                        [
                            "f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530",
                            "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"
                        ],
                        [
                            "463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b",
                            "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"
                        ],
                        [
                            "f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247",
                            "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"
                        ],
                        [
                            "caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1",
                            "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"
                        ],
                        [
                            "2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120",
                            "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"
                        ],
                        [
                            "7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435",
                            "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"
                        ],
                        [
                            "754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18",
                            "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"
                        ],
                        [
                            "e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8",
                            "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"
                        ],
                        [
                            "186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb",
                            "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"
                        ],
                        [
                            "df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f",
                            "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"
                        ],
                        [
                            "5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143",
                            "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"
                        ],
                        [
                            "290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba",
                            "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"
                        ],
                        [
                            "af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45",
                            "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"
                        ],
                        [
                            "766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a",
                            "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"
                        ],
                        [
                            "59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e",
                            "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"
                        ],
                        [
                            "f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8",
                            "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"
                        ],
                        [
                            "7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c",
                            "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"
                        ],
                        [
                            "948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519",
                            "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"
                        ],
                        [
                            "7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab",
                            "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"
                        ],
                        [
                            "3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca",
                            "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"
                        ],
                        [
                            "d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf",
                            "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"
                        ],
                        [
                            "1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610",
                            "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"
                        ],
                        [
                            "733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4",
                            "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"
                        ],
                        [
                            "15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c",
                            "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"
                        ],
                        [
                            "a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940",
                            "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"
                        ],
                        [
                            "e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980",
                            "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"
                        ],
                        [
                            "311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3",
                            "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"
                        ],
                        [
                            "34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf",
                            "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"
                        ],
                        [
                            "f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63",
                            "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"
                        ],
                        [
                            "d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448",
                            "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"
                        ],
                        [
                            "32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf",
                            "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"
                        ],
                        [
                            "7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5",
                            "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"
                        ],
                        [
                            "ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6",
                            "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"
                        ],
                        [
                            "16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5",
                            "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"
                        ],
                        [
                            "eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99",
                            "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"
                        ],
                        [
                            "78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51",
                            "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"
                        ],
                        [
                            "494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5",
                            "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"
                        ],
                        [
                            "a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5",
                            "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"
                        ],
                        [
                            "c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997",
                            "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"
                        ],
                        [
                            "841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881",
                            "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"
                        ],
                        [
                            "5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5",
                            "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"
                        ],
                        [
                            "36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66",
                            "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"
                        ],
                        [
                            "336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726",
                            "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"
                        ],
                        [
                            "8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede",
                            "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"
                        ],
                        [
                            "1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94",
                            "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"
                        ],
                        [
                            "85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31",
                            "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"
                        ],
                        [
                            "29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51",
                            "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"
                        ],
                        [
                            "a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252",
                            "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"
                        ],
                        [
                            "4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5",
                            "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"
                        ],
                        [
                            "d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b",
                            "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"
                        ],
                        [
                            "ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4",
                            "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"
                        ],
                        [
                            "af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f",
                            "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"
                        ],
                        [
                            "e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889",
                            "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"
                        ],
                        [
                            "591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246",
                            "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"
                        ],
                        [
                            "11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984",
                            "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"
                        ],
                        [
                            "3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a",
                            "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"
                        ],
                        [
                            "cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030",
                            "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"
                        ],
                        [
                            "c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197",
                            "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"
                        ],
                        [
                            "c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593",
                            "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"
                        ],
                        [
                            "a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef",
                            "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"
                        ],
                        [
                            "347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38",
                            "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"
                        ],
                        [
                            "da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a",
                            "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"
                        ],
                        [
                            "c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111",
                            "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"
                        ],
                        [
                            "4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502",
                            "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"
                        ],
                        [
                            "3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea",
                            "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"
                        ],
                        [
                            "cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26",
                            "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"
                        ],
                        [
                            "b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986",
                            "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"
                        ],
                        [
                            "d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e",
                            "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"
                        ],
                        [
                            "48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4",
                            "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"
                        ],
                        [
                            "dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda",
                            "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"
                        ],
                        [
                            "6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859",
                            "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"
                        ],
                        [
                            "e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f",
                            "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"
                        ],
                        [
                            "eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c",
                            "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"
                        ],
                        [
                            "13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942",
                            "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"
                        ],
                        [
                            "ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a",
                            "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"
                        ],
                        [
                            "b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80",
                            "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"
                        ],
                        [
                            "ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d",
                            "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"
                        ],
                        [
                            "8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1",
                            "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"
                        ],
                        [
                            "52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63",
                            "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"
                        ],
                        [
                            "e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352",
                            "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"
                        ],
                        [
                            "7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193",
                            "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"
                        ],
                        [
                            "5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00",
                            "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"
                        ],
                        [
                            "32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58",
                            "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"
                        ],
                        [
                            "e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7",
                            "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"
                        ],
                        [
                            "8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8",
                            "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"
                        ],
                        [
                            "4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e",
                            "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"
                        ],
                        [
                            "3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d",
                            "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"
                        ],
                        [
                            "674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b",
                            "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"
                        ],
                        [
                            "d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f",
                            "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"
                        ],
                        [
                            "30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6",
                            "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"
                        ],
                        [
                            "be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297",
                            "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"
                        ],
                        [
                            "93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a",
                            "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"
                        ],
                        [
                            "b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c",
                            "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"
                        ],
                        [
                            "d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52",
                            "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"
                        ],
                        [
                            "d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb",
                            "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"
                        ],
                        [
                            "463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065",
                            "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"
                        ],
                        [
                            "7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917",
                            "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"
                        ],
                        [
                            "74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9",
                            "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"
                        ],
                        [
                            "30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3",
                            "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"
                        ],
                        [
                            "9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57",
                            "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"
                        ],
                        [
                            "176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66",
                            "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"
                        ],
                        [
                            "75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8",
                            "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"
                        ],
                        [
                            "809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721",
                            "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"
                        ],
                        [
                            "1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180",
                            "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"
                        ]
                    ]
                }
            };
        },
        2003: function(e, t, r) {
            "use strict";
            var i = r(1777),
                n = r(2004),
                o = r(1780),
                f = o.utils.assert,
                a = r(2005),
                s = r(2006);
            function c(e) {
                if (!(this instanceof c)) return new c(e);
                "string" == typeof e &&
                    (f(o.curves.hasOwnProperty(e), "Unknown curve " + e),
                    (e = o.curves[e])),
                    e instanceof o.curves.PresetCurve && (e = {curve: e}),
                    (this.curve = e.curve.curve),
                    (this.n = this.curve.n),
                    (this.nh = this.n.ushrn(1)),
                    (this.g = this.curve.g),
                    (this.g = e.curve.g),
                    this.g.precompute(e.curve.n.bitLength() + 1),
                    (this.hash = e.hash || e.curve.hash);
            }
            (e.exports = c),
                (c.prototype.keyPair = function(e) {
                    return new a(this, e);
                }),
                (c.prototype.keyFromPrivate = function(e, t) {
                    return a.fromPrivate(this, e, t);
                }),
                (c.prototype.keyFromPublic = function(e, t) {
                    return a.fromPublic(this, e, t);
                }),
                (c.prototype.genKeyPair = function(e) {
                    e || (e = {});
                    for (
                        var t = new n({
                                hash: this.hash,
                                pers: e.pers,
                                persEnc: e.persEnc || "utf8",
                                entropy:
                                    e.entropy || o.rand(this.hash.hmacStrength),
                                entropyEnc:
                                    (e.entropy && e.entropyEnc) || "utf8",
                                nonce: this.n.toArray()
                            }),
                            r = this.n.byteLength(),
                            f = this.n.sub(new i(2));
                        ;

                    ) {
                        var a = new i(t.generate(r));
                        if (!(a.cmp(f) > 0))
                            return a.iaddn(1), this.keyFromPrivate(a);
                    }
                }),
                (c.prototype._truncateToN = function(e, t) {
                    var r = 8 * e.byteLength() - this.n.bitLength();
                    return (
                        r > 0 && (e = e.ushrn(r)),
                        !t && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
                    );
                }),
                (c.prototype.sign = function(e, t, r, o) {
                    "object" == typeof r && ((o = r), (r = null)),
                        o || (o = {}),
                        (t = this.keyFromPrivate(t, r)),
                        (e = this._truncateToN(new i(e, 16)));
                    for (
                        var f = this.n.byteLength(),
                            a = t.getPrivate().toArray("be", f),
                            c = e.toArray("be", f),
                            h = new n({
                                hash: this.hash,
                                entropy: a,
                                nonce: c,
                                pers: o.pers,
                                persEnc: o.persEnc || "utf8"
                            }),
                            d = this.n.sub(new i(1)),
                            u = 0;
                        ;
                        u++
                    ) {
                        var p = o.k
                            ? o.k(u)
                            : new i(h.generate(this.n.byteLength()));
                        if (
                            !(
                                (p = this._truncateToN(p, !0)).cmpn(1) <= 0 ||
                                p.cmp(d) >= 0
                            )
                        ) {
                            var l = this.g.mul(p);
                            if (!l.isInfinity()) {
                                var b = l.getX(),
                                    m = b.umod(this.n);
                                if (0 !== m.cmpn(0)) {
                                    var y = p
                                        .invm(this.n)
                                        .mul(m.mul(t.getPrivate()).iadd(e));
                                    if (0 !== (y = y.umod(this.n)).cmpn(0)) {
                                        var v =
                                            (l.getY().isOdd() ? 1 : 0) |
                                            (0 !== b.cmp(m) ? 2 : 0);
                                        return (
                                            o.canonical &&
                                                y.cmp(this.nh) > 0 &&
                                                ((y = this.n.sub(y)), (v ^= 1)),
                                            new s({
                                                r: m,
                                                s: y,
                                                recoveryParam: v
                                            })
                                        );
                                    }
                                }
                            }
                        }
                    }
                }),
                (c.prototype.verify = function(e, t, r, n) {
                    (e = this._truncateToN(new i(e, 16))),
                        (r = this.keyFromPublic(r, n));
                    var o = (t = new s(t, "hex")).r,
                        f = t.s;
                    if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0) return !1;
                    if (f.cmpn(1) < 0 || f.cmp(this.n) >= 0) return !1;
                    var a,
                        c = f.invm(this.n),
                        h = c.mul(e).umod(this.n),
                        d = c.mul(o).umod(this.n);
                    return this.curve._maxwellTrick
                        ? !(a = this.g.jmulAdd(
                              h,
                              r.getPublic(),
                              d
                          )).isInfinity() && a.eqXToP(o)
                        : !(a = this.g.mulAdd(
                              h,
                              r.getPublic(),
                              d
                          )).isInfinity() &&
                              0 ===
                                  a
                                      .getX()
                                      .umod(this.n)
                                      .cmp(o);
                }),
                (c.prototype.recoverPubKey = function(e, t, r, n) {
                    f(
                        (3 & r) === r,
                        "The recovery param is more than two bits"
                    ),
                        (t = new s(t, n));
                    var o = this.n,
                        a = new i(e),
                        c = t.r,
                        h = t.s,
                        d = 1 & r,
                        u = r >> 1;
                    if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && u)
                        throw new Error("Unable to find sencond key candinate");
                    c = u
                        ? this.curve.pointFromX(c.add(this.curve.n), d)
                        : this.curve.pointFromX(c, d);
                    var p = t.r.invm(o),
                        l = o
                            .sub(a)
                            .mul(p)
                            .umod(o),
                        b = h.mul(p).umod(o);
                    return this.g.mulAdd(l, c, b);
                }),
                (c.prototype.getKeyRecoveryParam = function(e, t, r, i) {
                    if (null !== (t = new s(t, i)).recoveryParam)
                        return t.recoveryParam;
                    for (var n = 0; n < 4; n++) {
                        var o;
                        try {
                            o = this.recoverPubKey(e, t, n);
                        } catch (e) {
                            continue;
                        }
                        if (o.eq(r)) return n;
                    }
                    throw new Error("Unable to find valid recovery factor");
                });
        },
        2004: function(e, t, r) {
            "use strict";
            var i = r(1834),
                n = r(1862),
                o = r(1783);
            function f(e) {
                if (!(this instanceof f)) return new f(e);
                (this.hash = e.hash),
                    (this.predResist = !!e.predResist),
                    (this.outLen = this.hash.outSize),
                    (this.minEntropy = e.minEntropy || this.hash.hmacStrength),
                    (this._reseed = null),
                    (this.reseedInterval = null),
                    (this.K = null),
                    (this.V = null);
                var t = n.toArray(e.entropy, e.entropyEnc || "hex"),
                    r = n.toArray(e.nonce, e.nonceEnc || "hex"),
                    i = n.toArray(e.pers, e.persEnc || "hex");
                o(
                    t.length >= this.minEntropy / 8,
                    "Not enough entropy. Minimum is: " +
                        this.minEntropy +
                        " bits"
                ),
                    this._init(t, r, i);
            }
            (e.exports = f),
                (f.prototype._init = function(e, t, r) {
                    var i = e.concat(t).concat(r);
                    (this.K = new Array(this.outLen / 8)),
                        (this.V = new Array(this.outLen / 8));
                    for (var n = 0; n < this.V.length; n++)
                        (this.K[n] = 0), (this.V[n] = 1);
                    this._update(i),
                        (this._reseed = 1),
                        (this.reseedInterval = 281474976710656);
                }),
                (f.prototype._hmac = function() {
                    return new i.hmac(this.hash, this.K);
                }),
                (f.prototype._update = function(e) {
                    var t = this._hmac()
                        .update(this.V)
                        .update([0]);
                    e && (t = t.update(e)),
                        (this.K = t.digest()),
                        (this.V = this._hmac()
                            .update(this.V)
                            .digest()),
                        e &&
                            ((this.K = this._hmac()
                                .update(this.V)
                                .update([1])
                                .update(e)
                                .digest()),
                            (this.V = this._hmac()
                                .update(this.V)
                                .digest()));
                }),
                (f.prototype.reseed = function(e, t, r, i) {
                    "string" != typeof t && ((i = r), (r = t), (t = null)),
                        (e = n.toArray(e, t)),
                        (r = n.toArray(r, i)),
                        o(
                            e.length >= this.minEntropy / 8,
                            "Not enough entropy. Minimum is: " +
                                this.minEntropy +
                                " bits"
                        ),
                        this._update(e.concat(r || [])),
                        (this._reseed = 1);
                }),
                (f.prototype.generate = function(e, t, r, i) {
                    if (this._reseed > this.reseedInterval)
                        throw new Error("Reseed is required");
                    "string" != typeof t && ((i = r), (r = t), (t = null)),
                        r && ((r = n.toArray(r, i || "hex")), this._update(r));
                    for (var o = []; o.length < e; )
                        (this.V = this._hmac()
                            .update(this.V)
                            .digest()),
                            (o = o.concat(this.V));
                    var f = o.slice(0, e);
                    return this._update(r), this._reseed++, n.encode(f, t);
                });
        },
        2005: function(e, t, r) {
            "use strict";
            var i = r(1777),
                n = r(1780).utils.assert;
            function o(e, t) {
                (this.ec = e),
                    (this.priv = null),
                    (this.pub = null),
                    t.priv && this._importPrivate(t.priv, t.privEnc),
                    t.pub && this._importPublic(t.pub, t.pubEnc);
            }
            (e.exports = o),
                (o.fromPublic = function(e, t, r) {
                    return t instanceof o ? t : new o(e, {pub: t, pubEnc: r});
                }),
                (o.fromPrivate = function(e, t, r) {
                    return t instanceof o ? t : new o(e, {priv: t, privEnc: r});
                }),
                (o.prototype.validate = function() {
                    var e = this.getPublic();
                    return e.isInfinity()
                        ? {result: !1, reason: "Invalid public key"}
                        : e.validate()
                            ? e.mul(this.ec.curve.n).isInfinity()
                                ? {result: !0, reason: null}
                                : {result: !1, reason: "Public key * N != O"}
                            : {result: !1, reason: "Public key is not a point"};
                }),
                (o.prototype.getPublic = function(e, t) {
                    return (
                        "string" == typeof e && ((t = e), (e = null)),
                        this.pub || (this.pub = this.ec.g.mul(this.priv)),
                        t ? this.pub.encode(t, e) : this.pub
                    );
                }),
                (o.prototype.getPrivate = function(e) {
                    return "hex" === e ? this.priv.toString(16, 2) : this.priv;
                }),
                (o.prototype._importPrivate = function(e, t) {
                    (this.priv = new i(e, t || 16)),
                        (this.priv = this.priv.umod(this.ec.curve.n));
                }),
                (o.prototype._importPublic = function(e, t) {
                    if (e.x || e.y)
                        return (
                            "mont" === this.ec.curve.type
                                ? n(e.x, "Need x coordinate")
                                : ("short" !== this.ec.curve.type &&
                                      "edwards" !== this.ec.curve.type) ||
                                  n(e.x && e.y, "Need both x and y coordinate"),
                            void (this.pub = this.ec.curve.point(e.x, e.y))
                        );
                    this.pub = this.ec.curve.decodePoint(e, t);
                }),
                (o.prototype.derive = function(e) {
                    return e.mul(this.priv).getX();
                }),
                (o.prototype.sign = function(e, t, r) {
                    return this.ec.sign(e, this, t, r);
                }),
                (o.prototype.verify = function(e, t) {
                    return this.ec.verify(e, t, this);
                }),
                (o.prototype.inspect = function() {
                    return (
                        "<Key priv: " +
                        (this.priv && this.priv.toString(16, 2)) +
                        " pub: " +
                        (this.pub && this.pub.inspect()) +
                        " >"
                    );
                });
        },
        2006: function(e, t, r) {
            "use strict";
            var i = r(1777),
                n = r(1780).utils,
                o = n.assert;
            function f(e, t) {
                if (e instanceof f) return e;
                this._importDER(e, t) ||
                    (o(e.r && e.s, "Signature without r or s"),
                    (this.r = new i(e.r, 16)),
                    (this.s = new i(e.s, 16)),
                    void 0 === e.recoveryParam
                        ? (this.recoveryParam = null)
                        : (this.recoveryParam = e.recoveryParam));
            }
            function a(e, t) {
                var r = e[t.place++];
                if (!(128 & r)) return r;
                for (var i = 15 & r, n = 0, o = 0, f = t.place; o < i; o++, f++)
                    (n <<= 8), (n |= e[f]);
                return (t.place = f), n;
            }
            function s(e) {
                for (
                    var t = 0, r = e.length - 1;
                    !e[t] && !(128 & e[t + 1]) && t < r;

                )
                    t++;
                return 0 === t ? e : e.slice(t);
            }
            function c(e, t) {
                if (t < 128) e.push(t);
                else {
                    var r = 1 + ((Math.log(t) / Math.LN2) >>> 3);
                    for (e.push(128 | r); --r; ) e.push((t >>> (r << 3)) & 255);
                    e.push(t);
                }
            }
            (e.exports = f),
                (f.prototype._importDER = function(e, t) {
                    e = n.toArray(e, t);
                    var r = new function() {
                        this.place = 0;
                    }();
                    if (48 !== e[r.place++]) return !1;
                    if (a(e, r) + r.place !== e.length) return !1;
                    if (2 !== e[r.place++]) return !1;
                    var o = a(e, r),
                        f = e.slice(r.place, o + r.place);
                    if (((r.place += o), 2 !== e[r.place++])) return !1;
                    var s = a(e, r);
                    if (e.length !== s + r.place) return !1;
                    var c = e.slice(r.place, s + r.place);
                    return (
                        0 === f[0] && 128 & f[1] && (f = f.slice(1)),
                        0 === c[0] && 128 & c[1] && (c = c.slice(1)),
                        (this.r = new i(f)),
                        (this.s = new i(c)),
                        (this.recoveryParam = null),
                        !0
                    );
                }),
                (f.prototype.toDER = function(e) {
                    var t = this.r.toArray(),
                        r = this.s.toArray();
                    for (
                        128 & t[0] && (t = [0].concat(t)),
                            128 & r[0] && (r = [0].concat(r)),
                            t = s(t),
                            r = s(r);
                        !(r[0] || 128 & r[1]);

                    )
                        r = r.slice(1);
                    var i = [2];
                    c(i, t.length), (i = i.concat(t)).push(2), c(i, r.length);
                    var o = i.concat(r),
                        f = [48];
                    return c(f, o.length), (f = f.concat(o)), n.encode(f, e);
                });
        },
        2007: function(e, t, r) {
            "use strict";
            var i = r(1834),
                n = r(1780),
                o = n.utils,
                f = o.assert,
                a = o.parseBytes,
                s = r(2008),
                c = r(2009);
            function h(e) {
                if (
                    (f("ed25519" === e, "only tested with ed25519 so far"),
                    !(this instanceof h))
                )
                    return new h(e);
                e = n.curves[e].curve;
                (this.curve = e),
                    (this.g = e.g),
                    this.g.precompute(e.n.bitLength() + 1),
                    (this.pointClass = e.point().constructor),
                    (this.encodingLength = Math.ceil(e.n.bitLength() / 8)),
                    (this.hash = i.sha512);
            }
            (e.exports = h),
                (h.prototype.sign = function(e, t) {
                    e = a(e);
                    var r = this.keyFromSecret(t),
                        i = this.hashInt(r.messagePrefix(), e),
                        n = this.g.mul(i),
                        o = this.encodePoint(n),
                        f = this.hashInt(o, r.pubBytes(), e).mul(r.priv()),
                        s = i.add(f).umod(this.curve.n);
                    return this.makeSignature({R: n, S: s, Rencoded: o});
                }),
                (h.prototype.verify = function(e, t, r) {
                    (e = a(e)), (t = this.makeSignature(t));
                    var i = this.keyFromPublic(r),
                        n = this.hashInt(t.Rencoded(), i.pubBytes(), e),
                        o = this.g.mul(t.S());
                    return t
                        .R()
                        .add(i.pub().mul(n))
                        .eq(o);
                }),
                (h.prototype.hashInt = function() {
                    for (var e = this.hash(), t = 0; t < arguments.length; t++)
                        e.update(arguments[t]);
                    return o.intFromLE(e.digest()).umod(this.curve.n);
                }),
                (h.prototype.keyFromPublic = function(e) {
                    return s.fromPublic(this, e);
                }),
                (h.prototype.keyFromSecret = function(e) {
                    return s.fromSecret(this, e);
                }),
                (h.prototype.makeSignature = function(e) {
                    return e instanceof c ? e : new c(this, e);
                }),
                (h.prototype.encodePoint = function(e) {
                    var t = e.getY().toArray("le", this.encodingLength);
                    return (
                        (t[this.encodingLength - 1] |= e.getX().isOdd()
                            ? 128
                            : 0),
                        t
                    );
                }),
                (h.prototype.decodePoint = function(e) {
                    var t = (e = o.parseBytes(e)).length - 1,
                        r = e.slice(0, t).concat(-129 & e[t]),
                        i = 0 != (128 & e[t]),
                        n = o.intFromLE(r);
                    return this.curve.pointFromY(n, i);
                }),
                (h.prototype.encodeInt = function(e) {
                    return e.toArray("le", this.encodingLength);
                }),
                (h.prototype.decodeInt = function(e) {
                    return o.intFromLE(e);
                }),
                (h.prototype.isPoint = function(e) {
                    return e instanceof this.pointClass;
                });
        },
        2008: function(e, t, r) {
            "use strict";
            var i = r(1780).utils,
                n = i.assert,
                o = i.parseBytes,
                f = i.cachedProperty;
            function a(e, t) {
                (this.eddsa = e),
                    (this._secret = o(t.secret)),
                    e.isPoint(t.pub)
                        ? (this._pub = t.pub)
                        : (this._pubBytes = o(t.pub));
            }
            (a.fromPublic = function(e, t) {
                return t instanceof a ? t : new a(e, {pub: t});
            }),
                (a.fromSecret = function(e, t) {
                    return t instanceof a ? t : new a(e, {secret: t});
                }),
                (a.prototype.secret = function() {
                    return this._secret;
                }),
                f(a, "pubBytes", function() {
                    return this.eddsa.encodePoint(this.pub());
                }),
                f(a, "pub", function() {
                    return this._pubBytes
                        ? this.eddsa.decodePoint(this._pubBytes)
                        : this.eddsa.g.mul(this.priv());
                }),
                f(a, "privBytes", function() {
                    var e = this.eddsa,
                        t = this.hash(),
                        r = e.encodingLength - 1,
                        i = t.slice(0, e.encodingLength);
                    return (i[0] &= 248), (i[r] &= 127), (i[r] |= 64), i;
                }),
                f(a, "priv", function() {
                    return this.eddsa.decodeInt(this.privBytes());
                }),
                f(a, "hash", function() {
                    return this.eddsa
                        .hash()
                        .update(this.secret())
                        .digest();
                }),
                f(a, "messagePrefix", function() {
                    return this.hash().slice(this.eddsa.encodingLength);
                }),
                (a.prototype.sign = function(e) {
                    return (
                        n(this._secret, "KeyPair can only verify"),
                        this.eddsa.sign(e, this)
                    );
                }),
                (a.prototype.verify = function(e, t) {
                    return this.eddsa.verify(e, t, this);
                }),
                (a.prototype.getSecret = function(e) {
                    return (
                        n(this._secret, "KeyPair is public only"),
                        i.encode(this.secret(), e)
                    );
                }),
                (a.prototype.getPublic = function(e) {
                    return i.encode(this.pubBytes(), e);
                }),
                (e.exports = a);
        },
        2009: function(e, t, r) {
            "use strict";
            var i = r(1777),
                n = r(1780).utils,
                o = n.assert,
                f = n.cachedProperty,
                a = n.parseBytes;
            function s(e, t) {
                (this.eddsa = e),
                    "object" != typeof t && (t = a(t)),
                    Array.isArray(t) &&
                        (t = {
                            R: t.slice(0, e.encodingLength),
                            S: t.slice(e.encodingLength)
                        }),
                    o(t.R && t.S, "Signature without R or S"),
                    e.isPoint(t.R) && (this._R = t.R),
                    t.S instanceof i && (this._S = t.S),
                    (this._Rencoded = Array.isArray(t.R) ? t.R : t.Rencoded),
                    (this._Sencoded = Array.isArray(t.S) ? t.S : t.Sencoded);
            }
            f(s, "S", function() {
                return this.eddsa.decodeInt(this.Sencoded());
            }),
                f(s, "R", function() {
                    return this.eddsa.decodePoint(this.Rencoded());
                }),
                f(s, "Rencoded", function() {
                    return this.eddsa.encodePoint(this.R());
                }),
                f(s, "Sencoded", function() {
                    return this.eddsa.encodeInt(this.S());
                }),
                (s.prototype.toBytes = function() {
                    return this.Rencoded().concat(this.Sencoded());
                }),
                (s.prototype.toHex = function() {
                    return n.encode(this.toBytes(), "hex").toUpperCase();
                }),
                (e.exports = s);
        },
        2010: function(e, t, r) {
            "use strict";
            var i = r(1810);
            t.certificate = r(2020);
            var n = i.define("RSAPrivateKey", function() {
                this.seq().obj(
                    this.key("version").int(),
                    this.key("modulus").int(),
                    this.key("publicExponent").int(),
                    this.key("privateExponent").int(),
                    this.key("prime1").int(),
                    this.key("prime2").int(),
                    this.key("exponent1").int(),
                    this.key("exponent2").int(),
                    this.key("coefficient").int()
                );
            });
            t.RSAPrivateKey = n;
            var o = i.define("RSAPublicKey", function() {
                this.seq().obj(
                    this.key("modulus").int(),
                    this.key("publicExponent").int()
                );
            });
            t.RSAPublicKey = o;
            var f = i.define("SubjectPublicKeyInfo", function() {
                this.seq().obj(
                    this.key("algorithm").use(a),
                    this.key("subjectPublicKey").bitstr()
                );
            });
            t.PublicKey = f;
            var a = i.define("AlgorithmIdentifier", function() {
                    this.seq().obj(
                        this.key("algorithm").objid(),
                        this.key("none")
                            .null_()
                            .optional(),
                        this.key("curve")
                            .objid()
                            .optional(),
                        this.key("params")
                            .seq()
                            .obj(
                                this.key("p").int(),
                                this.key("q").int(),
                                this.key("g").int()
                            )
                            .optional()
                    );
                }),
                s = i.define("PrivateKeyInfo", function() {
                    this.seq().obj(
                        this.key("version").int(),
                        this.key("algorithm").use(a),
                        this.key("subjectPrivateKey").octstr()
                    );
                });
            t.PrivateKey = s;
            var c = i.define("EncryptedPrivateKeyInfo", function() {
                this.seq().obj(
                    this.key("algorithm")
                        .seq()
                        .obj(
                            this.key("id").objid(),
                            this.key("decrypt")
                                .seq()
                                .obj(
                                    this.key("kde")
                                        .seq()
                                        .obj(
                                            this.key("id").objid(),
                                            this.key("kdeparams")
                                                .seq()
                                                .obj(
                                                    this.key("salt").octstr(),
                                                    this.key("iters").int()
                                                )
                                        ),
                                    this.key("cipher")
                                        .seq()
                                        .obj(
                                            this.key("algo").objid(),
                                            this.key("iv").octstr()
                                        )
                                )
                        ),
                    this.key("subjectPrivateKey").octstr()
                );
            });
            t.EncryptedPrivateKey = c;
            var h = i.define("DSAPrivateKey", function() {
                this.seq().obj(
                    this.key("version").int(),
                    this.key("p").int(),
                    this.key("q").int(),
                    this.key("g").int(),
                    this.key("pub_key").int(),
                    this.key("priv_key").int()
                );
            });
            (t.DSAPrivateKey = h),
                (t.DSAparam = i.define("DSAparam", function() {
                    this.int();
                }));
            var d = i.define("ECPrivateKey", function() {
                this.seq().obj(
                    this.key("version").int(),
                    this.key("privateKey").octstr(),
                    this.key("parameters")
                        .optional()
                        .explicit(0)
                        .use(u),
                    this.key("publicKey")
                        .optional()
                        .explicit(1)
                        .bitstr()
                );
            });
            t.ECPrivateKey = d;
            var u = i.define("ECParameters", function() {
                this.choice({namedCurve: this.objid()});
            });
            t.signature = i.define("signature", function() {
                this.seq().obj(this.key("r").int(), this.key("s").int());
            });
        },
        2011: function(e, t, r) {
            var i = r(1810),
                n = r(86);
            function o(e, t) {
                (this.name = e),
                    (this.body = t),
                    (this.decoders = {}),
                    (this.encoders = {});
            }
            (t.define = function(e, t) {
                return new o(e, t);
            }),
                (o.prototype._createNamed = function(e) {
                    var t;
                    try {
                        t = r(2012).runInThisContext(
                            "(function " +
                                this.name +
                                "(entity) {\n  this._initNamed(entity);\n})"
                        );
                    } catch (e) {
                        t = function(e) {
                            this._initNamed(e);
                        };
                    }
                    return (
                        n(t, e),
                        (t.prototype._initNamed = function(t) {
                            e.call(this, t);
                        }),
                        new t(this)
                    );
                }),
                (o.prototype._getDecoder = function(e) {
                    return (
                        (e = e || "der"),
                        this.decoders.hasOwnProperty(e) ||
                            (this.decoders[e] = this._createNamed(
                                i.decoders[e]
                            )),
                        this.decoders[e]
                    );
                }),
                (o.prototype.decode = function(e, t, r) {
                    return this._getDecoder(t).decode(e, r);
                }),
                (o.prototype._getEncoder = function(e) {
                    return (
                        (e = e || "der"),
                        this.encoders.hasOwnProperty(e) ||
                            (this.encoders[e] = this._createNamed(
                                i.encoders[e]
                            )),
                        this.encoders[e]
                    );
                }),
                (o.prototype.encode = function(e, t, r) {
                    return this._getEncoder(t).encode(e, r);
                });
        },
        2012: function(module, exports, __webpack_require__) {
            var indexOf = __webpack_require__(771),
                Object_keys = function(e) {
                    if (Object.keys) return Object.keys(e);
                    var t = [];
                    for (var r in e) t.push(r);
                    return t;
                },
                forEach = function(e, t) {
                    if (e.forEach) return e.forEach(t);
                    for (var r = 0; r < e.length; r++) t(e[r], r, e);
                },
                defineProp = (function() {
                    try {
                        return (
                            Object.defineProperty({}, "_", {}),
                            function(e, t, r) {
                                Object.defineProperty(e, t, {
                                    writable: !0,
                                    enumerable: !1,
                                    configurable: !0,
                                    value: r
                                });
                            }
                        );
                    } catch (e) {
                        return function(e, t, r) {
                            e[t] = r;
                        };
                    }
                })(),
                globals = [
                    "Array",
                    "Boolean",
                    "Date",
                    "Error",
                    "EvalError",
                    "Function",
                    "Infinity",
                    "JSON",
                    "Math",
                    "NaN",
                    "Number",
                    "Object",
                    "RangeError",
                    "ReferenceError",
                    "RegExp",
                    "String",
                    "SyntaxError",
                    "TypeError",
                    "URIError",
                    "decodeURI",
                    "decodeURIComponent",
                    "encodeURI",
                    "encodeURIComponent",
                    "escape",
                    "eval",
                    "isFinite",
                    "isNaN",
                    "parseFloat",
                    "parseInt",
                    "undefined",
                    "unescape"
                ];
            function Context() {}
            Context.prototype = {};
            var Script = (exports.Script = function(e) {
                if (!(this instanceof Script)) return new Script(e);
                this.code = e;
            });
            (Script.prototype.runInContext = function(e) {
                if (!(e instanceof Context))
                    throw new TypeError("needs a 'context' argument.");
                var t = document.createElement("iframe");
                t.style || (t.style = {}),
                    (t.style.display = "none"),
                    document.body.appendChild(t);
                var r = t.contentWindow,
                    i = r.eval,
                    n = r.execScript;
                !i && n && (n.call(r, "null"), (i = r.eval)),
                    forEach(Object_keys(e), function(t) {
                        r[t] = e[t];
                    }),
                    forEach(globals, function(t) {
                        e[t] && (r[t] = e[t]);
                    });
                var o = Object_keys(r),
                    f = i.call(r, this.code);
                return (
                    forEach(Object_keys(r), function(t) {
                        (t in e || -1 === indexOf(o, t)) && (e[t] = r[t]);
                    }),
                    forEach(globals, function(t) {
                        t in e || defineProp(e, t, r[t]);
                    }),
                    document.body.removeChild(t),
                    f
                );
            }),
                (Script.prototype.runInThisContext = function() {
                    return eval(this.code);
                }),
                (Script.prototype.runInNewContext = function(e) {
                    var t = Script.createContext(e),
                        r = this.runInContext(t);
                    return (
                        forEach(Object_keys(t), function(r) {
                            e[r] = t[r];
                        }),
                        r
                    );
                }),
                forEach(Object_keys(Script.prototype), function(e) {
                    exports[e] = Script[e] = function(t) {
                        var r = Script(t);
                        return r[e].apply(r, [].slice.call(arguments, 1));
                    };
                }),
                (exports.createScript = function(e) {
                    return exports.Script(e);
                }),
                (exports.createContext = Script.createContext = function(e) {
                    var t = new Context();
                    return (
                        "object" == typeof e &&
                            forEach(Object_keys(e), function(r) {
                                t[r] = e[r];
                            }),
                        t
                    );
                });
        },
        2013: function(e, t, r) {
            var i = r(86);
            function n(e) {
                this._reporterState = {
                    obj: null,
                    path: [],
                    options: e || {},
                    errors: []
                };
            }
            function o(e, t) {
                (this.path = e), this.rethrow(t);
            }
            (t.Reporter = n),
                (n.prototype.isError = function(e) {
                    return e instanceof o;
                }),
                (n.prototype.save = function() {
                    var e = this._reporterState;
                    return {obj: e.obj, pathLen: e.path.length};
                }),
                (n.prototype.restore = function(e) {
                    var t = this._reporterState;
                    (t.obj = e.obj), (t.path = t.path.slice(0, e.pathLen));
                }),
                (n.prototype.enterKey = function(e) {
                    return this._reporterState.path.push(e);
                }),
                (n.prototype.exitKey = function(e) {
                    var t = this._reporterState;
                    t.path = t.path.slice(0, e - 1);
                }),
                (n.prototype.leaveKey = function(e, t, r) {
                    var i = this._reporterState;
                    this.exitKey(e), null !== i.obj && (i.obj[t] = r);
                }),
                (n.prototype.path = function() {
                    return this._reporterState.path.join("/");
                }),
                (n.prototype.enterObject = function() {
                    var e = this._reporterState,
                        t = e.obj;
                    return (e.obj = {}), t;
                }),
                (n.prototype.leaveObject = function(e) {
                    var t = this._reporterState,
                        r = t.obj;
                    return (t.obj = e), r;
                }),
                (n.prototype.error = function(e) {
                    var t,
                        r = this._reporterState,
                        i = e instanceof o;
                    if (
                        ((t = i
                            ? e
                            : new o(
                                  r.path
                                      .map(function(e) {
                                          return "[" + JSON.stringify(e) + "]";
                                      })
                                      .join(""),
                                  e.message || e,
                                  e.stack
                              )),
                        !r.options.partial)
                    )
                        throw t;
                    return i || r.errors.push(t), t;
                }),
                (n.prototype.wrapResult = function(e) {
                    var t = this._reporterState;
                    return t.options.partial
                        ? {result: this.isError(e) ? null : e, errors: t.errors}
                        : e;
                }),
                i(o, Error),
                (o.prototype.rethrow = function(e) {
                    if (
                        ((this.message =
                            e + " at: " + (this.path || "(shallow)")),
                        Error.captureStackTrace &&
                            Error.captureStackTrace(this, o),
                        !this.stack)
                    )
                        try {
                            throw new Error(this.message);
                        } catch (e) {
                            this.stack = e.stack;
                        }
                    return this;
                });
        },
        2014: function(e, t, r) {
            var i = r(1811).Reporter,
                n = r(1811).EncoderBuffer,
                o = r(1811).DecoderBuffer,
                f = r(1783),
                a = [
                    "seq",
                    "seqof",
                    "set",
                    "setof",
                    "objid",
                    "bool",
                    "gentime",
                    "utctime",
                    "null_",
                    "enum",
                    "int",
                    "objDesc",
                    "bitstr",
                    "bmpstr",
                    "charstr",
                    "genstr",
                    "graphstr",
                    "ia5str",
                    "iso646str",
                    "numstr",
                    "octstr",
                    "printstr",
                    "t61str",
                    "unistr",
                    "utf8str",
                    "videostr"
                ],
                s = [
                    "key",
                    "obj",
                    "use",
                    "optional",
                    "explicit",
                    "implicit",
                    "def",
                    "choice",
                    "any",
                    "contains"
                ].concat(a);
            function c(e, t) {
                var r = {};
                (this._baseState = r),
                    (r.enc = e),
                    (r.parent = t || null),
                    (r.children = null),
                    (r.tag = null),
                    (r.args = null),
                    (r.reverseArgs = null),
                    (r.choice = null),
                    (r.optional = !1),
                    (r.any = !1),
                    (r.obj = !1),
                    (r.use = null),
                    (r.useDecoder = null),
                    (r.key = null),
                    (r.default = null),
                    (r.explicit = null),
                    (r.implicit = null),
                    (r.contains = null),
                    r.parent || ((r.children = []), this._wrap());
            }
            e.exports = c;
            var h = [
                "enc",
                "parent",
                "children",
                "tag",
                "args",
                "reverseArgs",
                "choice",
                "optional",
                "any",
                "obj",
                "use",
                "alteredUse",
                "key",
                "default",
                "explicit",
                "implicit",
                "contains"
            ];
            (c.prototype.clone = function() {
                var e = this._baseState,
                    t = {};
                h.forEach(function(r) {
                    t[r] = e[r];
                });
                var r = new this.constructor(t.parent);
                return (r._baseState = t), r;
            }),
                (c.prototype._wrap = function() {
                    var e = this._baseState;
                    s.forEach(function(t) {
                        this[t] = function() {
                            var r = new this.constructor(this);
                            return e.children.push(r), r[t].apply(r, arguments);
                        };
                    }, this);
                }),
                (c.prototype._init = function(e) {
                    var t = this._baseState;
                    f(null === t.parent),
                        e.call(this),
                        (t.children = t.children.filter(function(e) {
                            return e._baseState.parent === this;
                        }, this)),
                        f.equal(
                            t.children.length,
                            1,
                            "Root node can have only one child"
                        );
                }),
                (c.prototype._useArgs = function(e) {
                    var t = this._baseState,
                        r = e.filter(function(e) {
                            return e instanceof this.constructor;
                        }, this);
                    (e = e.filter(function(e) {
                        return !(e instanceof this.constructor);
                    }, this)),
                        0 !== r.length &&
                            (f(null === t.children),
                            (t.children = r),
                            r.forEach(function(e) {
                                e._baseState.parent = this;
                            }, this)),
                        0 !== e.length &&
                            (f(null === t.args),
                            (t.args = e),
                            (t.reverseArgs = e.map(function(e) {
                                if (
                                    "object" != typeof e ||
                                    e.constructor !== Object
                                )
                                    return e;
                                var t = {};
                                return (
                                    Object.keys(e).forEach(function(r) {
                                        r == (0 | r) && (r |= 0);
                                        var i = e[r];
                                        t[i] = r;
                                    }),
                                    t
                                );
                            })));
                }),
                [
                    "_peekTag",
                    "_decodeTag",
                    "_use",
                    "_decodeStr",
                    "_decodeObjid",
                    "_decodeTime",
                    "_decodeNull",
                    "_decodeInt",
                    "_decodeBool",
                    "_decodeList",
                    "_encodeComposite",
                    "_encodeStr",
                    "_encodeObjid",
                    "_encodeTime",
                    "_encodeNull",
                    "_encodeInt",
                    "_encodeBool"
                ].forEach(function(e) {
                    c.prototype[e] = function() {
                        var t = this._baseState;
                        throw new Error(
                            e + " not implemented for encoding: " + t.enc
                        );
                    };
                }),
                a.forEach(function(e) {
                    c.prototype[e] = function() {
                        var t = this._baseState,
                            r = Array.prototype.slice.call(arguments);
                        return (
                            f(null === t.tag),
                            (t.tag = e),
                            this._useArgs(r),
                            this
                        );
                    };
                }),
                (c.prototype.use = function(e) {
                    f(e);
                    var t = this._baseState;
                    return f(null === t.use), (t.use = e), this;
                }),
                (c.prototype.optional = function() {
                    return (this._baseState.optional = !0), this;
                }),
                (c.prototype.def = function(e) {
                    var t = this._baseState;
                    return (
                        f(null === t.default),
                        (t.default = e),
                        (t.optional = !0),
                        this
                    );
                }),
                (c.prototype.explicit = function(e) {
                    var t = this._baseState;
                    return (
                        f(null === t.explicit && null === t.implicit),
                        (t.explicit = e),
                        this
                    );
                }),
                (c.prototype.implicit = function(e) {
                    var t = this._baseState;
                    return (
                        f(null === t.explicit && null === t.implicit),
                        (t.implicit = e),
                        this
                    );
                }),
                (c.prototype.obj = function() {
                    var e = this._baseState,
                        t = Array.prototype.slice.call(arguments);
                    return (
                        (e.obj = !0), 0 !== t.length && this._useArgs(t), this
                    );
                }),
                (c.prototype.key = function(e) {
                    var t = this._baseState;
                    return f(null === t.key), (t.key = e), this;
                }),
                (c.prototype.any = function() {
                    return (this._baseState.any = !0), this;
                }),
                (c.prototype.choice = function(e) {
                    var t = this._baseState;
                    return (
                        f(null === t.choice),
                        (t.choice = e),
                        this._useArgs(
                            Object.keys(e).map(function(t) {
                                return e[t];
                            })
                        ),
                        this
                    );
                }),
                (c.prototype.contains = function(e) {
                    var t = this._baseState;
                    return f(null === t.use), (t.contains = e), this;
                }),
                (c.prototype._decode = function(e, t) {
                    var r = this._baseState;
                    if (null === r.parent)
                        return e.wrapResult(r.children[0]._decode(e, t));
                    var i,
                        n = r.default,
                        f = !0,
                        a = null;
                    if (
                        (null !== r.key && (a = e.enterKey(r.key)), r.optional)
                    ) {
                        var s = null;
                        if (
                            (null !== r.explicit
                                ? (s = r.explicit)
                                : null !== r.implicit
                                    ? (s = r.implicit)
                                    : null !== r.tag && (s = r.tag),
                            null !== s || r.any)
                        ) {
                            if (
                                ((f = this._peekTag(e, s, r.any)), e.isError(f))
                            )
                                return f;
                        } else {
                            var c = e.save();
                            try {
                                null === r.choice
                                    ? this._decodeGeneric(r.tag, e, t)
                                    : this._decodeChoice(e, t),
                                    (f = !0);
                            } catch (e) {
                                f = !1;
                            }
                            e.restore(c);
                        }
                    }
                    if ((r.obj && f && (i = e.enterObject()), f)) {
                        if (null !== r.explicit) {
                            var h = this._decodeTag(e, r.explicit);
                            if (e.isError(h)) return h;
                            e = h;
                        }
                        var d = e.offset;
                        if (null === r.use && null === r.choice) {
                            if (r.any) c = e.save();
                            var u = this._decodeTag(
                                e,
                                null !== r.implicit ? r.implicit : r.tag,
                                r.any
                            );
                            if (e.isError(u)) return u;
                            r.any ? (n = e.raw(c)) : (e = u);
                        }
                        if (
                            (t &&
                                t.track &&
                                null !== r.tag &&
                                t.track(e.path(), d, e.length, "tagged"),
                            t &&
                                t.track &&
                                null !== r.tag &&
                                t.track(
                                    e.path(),
                                    e.offset,
                                    e.length,
                                    "content"
                                ),
                            (n = r.any
                                ? n
                                : null === r.choice
                                    ? this._decodeGeneric(r.tag, e, t)
                                    : this._decodeChoice(e, t)),
                            e.isError(n))
                        )
                            return n;
                        if (
                            (r.any ||
                                null !== r.choice ||
                                null === r.children ||
                                r.children.forEach(function(r) {
                                    r._decode(e, t);
                                }),
                            r.contains &&
                                ("octstr" === r.tag || "bitstr" === r.tag))
                        ) {
                            var p = new o(n);
                            n = this._getUse(
                                r.contains,
                                e._reporterState.obj
                            )._decode(p, t);
                        }
                    }
                    return (
                        r.obj && f && (n = e.leaveObject(i)),
                        null === r.key || (null === n && !0 !== f)
                            ? null !== a && e.exitKey(a)
                            : e.leaveKey(a, r.key, n),
                        n
                    );
                }),
                (c.prototype._decodeGeneric = function(e, t, r) {
                    var i = this._baseState;
                    return "seq" === e || "set" === e
                        ? null
                        : "seqof" === e || "setof" === e
                            ? this._decodeList(t, e, i.args[0], r)
                            : /str$/.test(e)
                                ? this._decodeStr(t, e, r)
                                : "objid" === e && i.args
                                    ? this._decodeObjid(
                                          t,
                                          i.args[0],
                                          i.args[1],
                                          r
                                      )
                                    : "objid" === e
                                        ? this._decodeObjid(t, null, null, r)
                                        : "gentime" === e || "utctime" === e
                                            ? this._decodeTime(t, e, r)
                                            : "null_" === e
                                                ? this._decodeNull(t, r)
                                                : "bool" === e
                                                    ? this._decodeBool(t, r)
                                                    : "objDesc" === e
                                                        ? this._decodeStr(
                                                              t,
                                                              e,
                                                              r
                                                          )
                                                        : "int" === e ||
                                                          "enum" === e
                                                            ? this._decodeInt(
                                                                  t,
                                                                  i.args &&
                                                                      i.args[0],
                                                                  r
                                                              )
                                                            : null !== i.use
                                                                ? this._getUse(
                                                                      i.use,
                                                                      t
                                                                          ._reporterState
                                                                          .obj
                                                                  )._decode(
                                                                      t,
                                                                      r
                                                                  )
                                                                : t.error(
                                                                      "unknown tag: " +
                                                                          e
                                                                  );
                }),
                (c.prototype._getUse = function(e, t) {
                    var r = this._baseState;
                    return (
                        (r.useDecoder = this._use(e, t)),
                        f(null === r.useDecoder._baseState.parent),
                        (r.useDecoder = r.useDecoder._baseState.children[0]),
                        r.implicit !== r.useDecoder._baseState.implicit &&
                            ((r.useDecoder = r.useDecoder.clone()),
                            (r.useDecoder._baseState.implicit = r.implicit)),
                        r.useDecoder
                    );
                }),
                (c.prototype._decodeChoice = function(e, t) {
                    var r = this._baseState,
                        i = null,
                        n = !1;
                    return (
                        Object.keys(r.choice).some(function(o) {
                            var f = e.save(),
                                a = r.choice[o];
                            try {
                                var s = a._decode(e, t);
                                if (e.isError(s)) return !1;
                                (i = {type: o, value: s}), (n = !0);
                            } catch (t) {
                                return e.restore(f), !1;
                            }
                            return !0;
                        }, this),
                        n ? i : e.error("Choice not matched")
                    );
                }),
                (c.prototype._createEncoderBuffer = function(e) {
                    return new n(e, this.reporter);
                }),
                (c.prototype._encode = function(e, t, r) {
                    var i = this._baseState;
                    if (null === i.default || i.default !== e) {
                        var n = this._encodeValue(e, t, r);
                        if (void 0 !== n && !this._skipDefault(n, t, r))
                            return n;
                    }
                }),
                (c.prototype._encodeValue = function(e, t, r) {
                    var n = this._baseState;
                    if (null === n.parent)
                        return n.children[0]._encode(e, t || new i());
                    var o = null;
                    if (((this.reporter = t), n.optional && void 0 === e)) {
                        if (null === n.default) return;
                        e = n.default;
                    }
                    var f = null,
                        a = !1;
                    if (n.any) o = this._createEncoderBuffer(e);
                    else if (n.choice) o = this._encodeChoice(e, t);
                    else if (n.contains)
                        (f = this._getUse(n.contains, r)._encode(e, t)),
                            (a = !0);
                    else if (n.children)
                        (f = n.children
                            .map(function(r) {
                                if ("null_" === r._baseState.tag)
                                    return r._encode(null, t, e);
                                if (null === r._baseState.key)
                                    return t.error("Child should have a key");
                                var i = t.enterKey(r._baseState.key);
                                if ("object" != typeof e)
                                    return t.error(
                                        "Child expected, but input is not object"
                                    );
                                var n = r._encode(e[r._baseState.key], t, e);
                                return t.leaveKey(i), n;
                            }, this)
                            .filter(function(e) {
                                return e;
                            })),
                            (f = this._createEncoderBuffer(f));
                    else if ("seqof" === n.tag || "setof" === n.tag) {
                        if (!n.args || 1 !== n.args.length)
                            return t.error("Too many args for : " + n.tag);
                        if (!Array.isArray(e))
                            return t.error(
                                "seqof/setof, but data is not Array"
                            );
                        var s = this.clone();
                        (s._baseState.implicit = null),
                            (f = this._createEncoderBuffer(
                                e.map(function(r) {
                                    var i = this._baseState;
                                    return this._getUse(i.args[0], e)._encode(
                                        r,
                                        t
                                    );
                                }, s)
                            ));
                    } else
                        null !== n.use
                            ? (o = this._getUse(n.use, r)._encode(e, t))
                            : ((f = this._encodePrimitive(n.tag, e)), (a = !0));
                    if (!n.any && null === n.choice) {
                        var c = null !== n.implicit ? n.implicit : n.tag,
                            h = null === n.implicit ? "universal" : "context";
                        null === c
                            ? null === n.use &&
                              t.error("Tag could be omitted only for .use()")
                            : null === n.use &&
                              (o = this._encodeComposite(c, a, h, f));
                    }
                    return (
                        null !== n.explicit &&
                            (o = this._encodeComposite(
                                n.explicit,
                                !1,
                                "context",
                                o
                            )),
                        o
                    );
                }),
                (c.prototype._encodeChoice = function(e, t) {
                    var r = this._baseState,
                        i = r.choice[e.type];
                    return (
                        i ||
                            f(
                                !1,
                                e.type +
                                    " not found in " +
                                    JSON.stringify(Object.keys(r.choice))
                            ),
                        i._encode(e.value, t)
                    );
                }),
                (c.prototype._encodePrimitive = function(e, t) {
                    var r = this._baseState;
                    if (/str$/.test(e)) return this._encodeStr(t, e);
                    if ("objid" === e && r.args)
                        return this._encodeObjid(
                            t,
                            r.reverseArgs[0],
                            r.args[1]
                        );
                    if ("objid" === e) return this._encodeObjid(t, null, null);
                    if ("gentime" === e || "utctime" === e)
                        return this._encodeTime(t, e);
                    if ("null_" === e) return this._encodeNull();
                    if ("int" === e || "enum" === e)
                        return this._encodeInt(t, r.args && r.reverseArgs[0]);
                    if ("bool" === e) return this._encodeBool(t);
                    if ("objDesc" === e) return this._encodeStr(t, e);
                    throw new Error("Unsupported tag: " + e);
                }),
                (c.prototype._isNumstr = function(e) {
                    return /^[0-9 ]*$/.test(e);
                }),
                (c.prototype._isPrintstr = function(e) {
                    return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(e);
                });
        },
        2015: function(e, t, r) {
            var i = r(1867);
            (t.tagClass = {
                0: "universal",
                1: "application",
                2: "context",
                3: "private"
            }),
                (t.tagClassByName = i._reverse(t.tagClass)),
                (t.tag = {
                    0: "end",
                    1: "bool",
                    2: "int",
                    3: "bitstr",
                    4: "octstr",
                    5: "null_",
                    6: "objid",
                    7: "objDesc",
                    8: "external",
                    9: "real",
                    10: "enum",
                    11: "embed",
                    12: "utf8str",
                    13: "relativeOid",
                    16: "seq",
                    17: "set",
                    18: "numstr",
                    19: "printstr",
                    20: "t61str",
                    21: "videostr",
                    22: "ia5str",
                    23: "utctime",
                    24: "gentime",
                    25: "graphstr",
                    26: "iso646str",
                    27: "genstr",
                    28: "unistr",
                    29: "charstr",
                    30: "bmpstr"
                }),
                (t.tagByName = i._reverse(t.tag));
        },
        2016: function(e, t, r) {
            var i = t;
            (i.der = r(1868)), (i.pem = r(2017));
        },
        2017: function(e, t, r) {
            var i = r(86),
                n = r(114).Buffer,
                o = r(1868);
            function f(e) {
                o.call(this, e), (this.enc = "pem");
            }
            i(f, o),
                (e.exports = f),
                (f.prototype.decode = function(e, t) {
                    for (
                        var r = e.toString().split(/[\r\n]+/g),
                            i = t.label.toUpperCase(),
                            f = /^-----(BEGIN|END) ([^-]+)-----$/,
                            a = -1,
                            s = -1,
                            c = 0;
                        c < r.length;
                        c++
                    ) {
                        var h = r[c].match(f);
                        if (null !== h && h[2] === i) {
                            if (-1 !== a) {
                                if ("END" !== h[1]) break;
                                s = c;
                                break;
                            }
                            if ("BEGIN" !== h[1]) break;
                            a = c;
                        }
                    }
                    if (-1 === a || -1 === s)
                        throw new Error("PEM section not found for: " + i);
                    var d = r.slice(a + 1, s).join("");
                    d.replace(/[^a-z0-9\+\/=]+/gi, "");
                    var u = new n(d, "base64");
                    return o.prototype.decode.call(this, u, t);
                });
        },
        2018: function(e, t, r) {
            var i = t;
            (i.der = r(1869)), (i.pem = r(2019));
        },
        2019: function(e, t, r) {
            var i = r(86),
                n = r(1869);
            function o(e) {
                n.call(this, e), (this.enc = "pem");
            }
            i(o, n),
                (e.exports = o),
                (o.prototype.encode = function(e, t) {
                    for (
                        var r = n.prototype.encode
                                .call(this, e)
                                .toString("base64"),
                            i = ["-----BEGIN " + t.label + "-----"],
                            o = 0;
                        o < r.length;
                        o += 64
                    )
                        i.push(r.slice(o, o + 64));
                    return (
                        i.push("-----END " + t.label + "-----"), i.join("\n")
                    );
                });
        },
        2020: function(e, t, r) {
            "use strict";
            var i = r(1810),
                n = i.define("Time", function() {
                    this.choice({
                        utcTime: this.utctime(),
                        generalTime: this.gentime()
                    });
                }),
                o = i.define("AttributeTypeValue", function() {
                    this.seq().obj(
                        this.key("type").objid(),
                        this.key("value").any()
                    );
                }),
                f = i.define("AlgorithmIdentifier", function() {
                    this.seq().obj(
                        this.key("algorithm").objid(),
                        this.key("parameters").optional()
                    );
                }),
                a = i.define("SubjectPublicKeyInfo", function() {
                    this.seq().obj(
                        this.key("algorithm").use(f),
                        this.key("subjectPublicKey").bitstr()
                    );
                }),
                s = i.define("RelativeDistinguishedName", function() {
                    this.setof(o);
                }),
                c = i.define("RDNSequence", function() {
                    this.seqof(s);
                }),
                h = i.define("Name", function() {
                    this.choice({rdnSequence: this.use(c)});
                }),
                d = i.define("Validity", function() {
                    this.seq().obj(
                        this.key("notBefore").use(n),
                        this.key("notAfter").use(n)
                    );
                }),
                u = i.define("Extension", function() {
                    this.seq().obj(
                        this.key("extnID").objid(),
                        this.key("critical")
                            .bool()
                            .def(!1),
                        this.key("extnValue").octstr()
                    );
                }),
                p = i.define("TBSCertificate", function() {
                    this.seq().obj(
                        this.key("version")
                            .explicit(0)
                            .int(),
                        this.key("serialNumber").int(),
                        this.key("signature").use(f),
                        this.key("issuer").use(h),
                        this.key("validity").use(d),
                        this.key("subject").use(h),
                        this.key("subjectPublicKeyInfo").use(a),
                        this.key("issuerUniqueID")
                            .implicit(1)
                            .bitstr()
                            .optional(),
                        this.key("subjectUniqueID")
                            .implicit(2)
                            .bitstr()
                            .optional(),
                        this.key("extensions")
                            .explicit(3)
                            .seqof(u)
                            .optional()
                    );
                }),
                l = i.define("X509Certificate", function() {
                    this.seq().obj(
                        this.key("tbsCertificate").use(p),
                        this.key("signatureAlgorithm").use(f),
                        this.key("signatureValue").bitstr()
                    );
                });
            e.exports = l;
        },
        2021: function(e) {
            e.exports = {
                "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
                "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
                "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
                "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
                "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
                "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
                "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
                "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
                "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
                "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
                "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
                "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
            };
        },
        2022: function(e, t, r) {
            (function(t) {
                var i = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r\+\/\=]+)[\n\r]+/m,
                    n = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----/m,
                    o = /^-----BEGIN ((?:.* KEY)|CERTIFICATE)-----([0-9A-z\n\r\+\/\=]+)-----END \1-----$/m,
                    f = r(1819),
                    a = r(1831);
                e.exports = function(e, r) {
                    var s,
                        c = e.toString(),
                        h = c.match(i);
                    if (h) {
                        var d = "aes" + h[1],
                            u = new t(h[2], "hex"),
                            p = new t(h[3].replace(/[\r\n]/g, ""), "base64"),
                            l = f(r, u.slice(0, 8), parseInt(h[1], 10)).key,
                            b = [],
                            m = a.createDecipheriv(d, l, u);
                        b.push(m.update(p)),
                            b.push(m.final()),
                            (s = t.concat(b));
                    } else {
                        var y = c.match(o);
                        s = new t(y[2].replace(/[\r\n]/g, ""), "base64");
                    }
                    return {tag: c.match(n)[1], data: s};
                };
            }.call(this, r(114).Buffer));
        },
        2023: function(e, t, r) {
            (function(t) {
                var i = r(1777),
                    n = r(1780).ec,
                    o = r(1821),
                    f = r(1870);
                function a(e, t) {
                    if (e.cmpn(0) <= 0) throw new Error("invalid sig");
                    if (e.cmp(t) >= t) throw new Error("invalid sig");
                }
                e.exports = function(e, r, s, c, h) {
                    var d = o(s);
                    if ("ec" === d.type) {
                        if ("ecdsa" !== c && "ecdsa/rsa" !== c)
                            throw new Error("wrong public key type");
                        return (function(e, t, r) {
                            var i = f[r.data.algorithm.curve.join(".")];
                            if (!i)
                                throw new Error(
                                    "unknown curve " +
                                        r.data.algorithm.curve.join(".")
                                );
                            var o = new n(i),
                                a = r.data.subjectPrivateKey.data;
                            return o.verify(t, e, a);
                        })(e, r, d);
                    }
                    if ("dsa" === d.type) {
                        if ("dsa" !== c)
                            throw new Error("wrong public key type");
                        return (function(e, t, r) {
                            var n = r.data.p,
                                f = r.data.q,
                                s = r.data.g,
                                c = r.data.pub_key,
                                h = o.signature.decode(e, "der"),
                                d = h.s,
                                u = h.r;
                            a(d, f), a(u, f);
                            var p = i.mont(n),
                                l = d.invm(f);
                            return (
                                0 ===
                                s
                                    .toRed(p)
                                    .redPow(new i(t).mul(l).mod(f))
                                    .fromRed()
                                    .mul(
                                        c
                                            .toRed(p)
                                            .redPow(u.mul(l).mod(f))
                                            .fromRed()
                                    )
                                    .mod(n)
                                    .mod(f)
                                    .cmp(u)
                            );
                        })(e, r, d);
                    }
                    if ("rsa" !== c && "ecdsa/rsa" !== c)
                        throw new Error("wrong public key type");
                    r = t.concat([h, r]);
                    for (
                        var u = d.modulus.byteLength(), p = [1], l = 0;
                        r.length + p.length + 2 < u;

                    )
                        p.push(255), l++;
                    p.push(0);
                    for (var b = -1; ++b < r.length; ) p.push(r[b]);
                    p = new t(p);
                    var m = i.mont(d.modulus);
                    (e = (e = new i(e).toRed(m)).redPow(
                        new i(d.publicExponent)
                    )),
                        (e = new t(e.fromRed().toArray()));
                    var y = l < 8 ? 1 : 0;
                    for (
                        u = Math.min(e.length, p.length),
                            e.length !== p.length && (y = 1),
                            b = -1;
                        ++b < u;

                    )
                        y |= e[b] ^ p[b];
                    return 0 === y;
                };
            }.call(this, r(114).Buffer));
        },
        2024: function(e, t, r) {
            (function(t) {
                var i = r(1780),
                    n = r(1777);
                e.exports = function(e) {
                    return new f(e);
                };
                var o = {
                    secp256k1: {name: "secp256k1", byteLength: 32},
                    secp224r1: {name: "p224", byteLength: 28},
                    prime256v1: {name: "p256", byteLength: 32},
                    prime192v1: {name: "p192", byteLength: 24},
                    ed25519: {name: "ed25519", byteLength: 32},
                    secp384r1: {name: "p384", byteLength: 48},
                    secp521r1: {name: "p521", byteLength: 66}
                };
                function f(e) {
                    (this.curveType = o[e]),
                        this.curveType || (this.curveType = {name: e}),
                        (this.curve = new i.ec(this.curveType.name)),
                        (this.keys = void 0);
                }
                function a(e, r, i) {
                    Array.isArray(e) || (e = e.toArray());
                    var n = new t(e);
                    if (i && n.length < i) {
                        var o = new t(i - n.length);
                        o.fill(0), (n = t.concat([o, n]));
                    }
                    return r ? n.toString(r) : n;
                }
                (o.p224 = o.secp224r1),
                    (o.p256 = o.secp256r1 = o.prime256v1),
                    (o.p192 = o.secp192r1 = o.prime192v1),
                    (o.p384 = o.secp384r1),
                    (o.p521 = o.secp521r1),
                    (f.prototype.generateKeys = function(e, t) {
                        return (
                            (this.keys = this.curve.genKeyPair()),
                            this.getPublicKey(e, t)
                        );
                    }),
                    (f.prototype.computeSecret = function(e, r, i) {
                        return (
                            (r = r || "utf8"),
                            t.isBuffer(e) || (e = new t(e, r)),
                            a(
                                this.curve
                                    .keyFromPublic(e)
                                    .getPublic()
                                    .mul(this.keys.getPrivate())
                                    .getX(),
                                i,
                                this.curveType.byteLength
                            )
                        );
                    }),
                    (f.prototype.getPublicKey = function(e, t) {
                        var r = this.keys.getPublic("compressed" === t, !0);
                        return (
                            "hybrid" === t &&
                                (r[r.length - 1] % 2 ? (r[0] = 7) : (r[0] = 6)),
                            a(r, e)
                        );
                    }),
                    (f.prototype.getPrivateKey = function(e) {
                        return a(this.keys.getPrivate(), e);
                    }),
                    (f.prototype.setPublicKey = function(e, r) {
                        return (
                            (r = r || "utf8"),
                            t.isBuffer(e) || (e = new t(e, r)),
                            this.keys._importPublic(e),
                            this
                        );
                    }),
                    (f.prototype.setPrivateKey = function(e, r) {
                        (r = r || "utf8"), t.isBuffer(e) || (e = new t(e, r));
                        var i = new n(e);
                        return (
                            (i = i.toString(16)),
                            (this.keys = this.curve.genKeyPair()),
                            this.keys._importPrivate(i),
                            this
                        );
                    });
            }.call(this, r(114).Buffer));
        },
        2025: function(e, t, r) {
            (t.publicEncrypt = r(2026)),
                (t.privateDecrypt = r(2027)),
                (t.privateEncrypt = function(e, r) {
                    return t.publicEncrypt(e, r, !0);
                }),
                (t.publicDecrypt = function(e, r) {
                    return t.privateDecrypt(e, r, !0);
                });
        },
        2026: function(e, t, r) {
            (function(t) {
                var i = r(1821),
                    n = r(1803),
                    o = r(302),
                    f = r(1871),
                    a = r(1872),
                    s = r(1777),
                    c = r(1873),
                    h = r(1833);
                e.exports = function(e, r, d) {
                    var u;
                    u = e.padding ? e.padding : d ? 1 : 4;
                    var p,
                        l = i(e);
                    if (4 === u)
                        p = (function(e, r) {
                            var i = e.modulus.byteLength(),
                                c = r.length,
                                h = o("sha1")
                                    .update(new t(""))
                                    .digest(),
                                d = h.length,
                                u = 2 * d;
                            if (c > i - u - 2)
                                throw new Error("message too long");
                            var p = new t(i - c - u - 2);
                            p.fill(0);
                            var l = i - d - 1,
                                b = n(d),
                                m = a(
                                    t.concat([h, p, new t([1]), r], l),
                                    f(b, l)
                                ),
                                y = a(b, f(m, d));
                            return new s(t.concat([new t([0]), y, m], i));
                        })(l, r);
                    else if (1 === u)
                        p = (function(e, r, i) {
                            var o,
                                f = r.length,
                                a = e.modulus.byteLength();
                            if (f > a - 11) throw new Error("message too long");
                            i
                                ? (o = new t(a - f - 3)).fill(255)
                                : (o = (function(e, r) {
                                      var i,
                                          o = new t(e),
                                          f = 0,
                                          a = n(2 * e),
                                          s = 0;
                                      for (; f < e; )
                                          s === a.length &&
                                              ((a = n(2 * e)), (s = 0)),
                                              (i = a[s++]) && (o[f++] = i);
                                      return o;
                                  })(a - f - 3));
                            return new s(
                                t.concat(
                                    [new t([0, i ? 1 : 2]), o, new t([0]), r],
                                    a
                                )
                            );
                        })(l, r, d);
                    else {
                        if (3 !== u) throw new Error("unknown padding");
                        if ((p = new s(r)).cmp(l.modulus) >= 0)
                            throw new Error("data too long for modulus");
                    }
                    return d ? h(p, l) : c(p, l);
                };
            }.call(this, r(114).Buffer));
        },
        2027: function(e, t, r) {
            (function(t) {
                var i = r(1821),
                    n = r(1871),
                    o = r(1872),
                    f = r(1777),
                    a = r(1833),
                    s = r(302),
                    c = r(1873);
                e.exports = function(e, r, h) {
                    var d;
                    d = e.padding ? e.padding : h ? 1 : 4;
                    var u,
                        p = i(e),
                        l = p.modulus.byteLength();
                    if (r.length > l || new f(r).cmp(p.modulus) >= 0)
                        throw new Error("decryption error");
                    u = h ? c(new f(r), p) : a(r, p);
                    var b = new t(l - u.length);
                    if ((b.fill(0), (u = t.concat([b, u], l)), 4 === d))
                        return (function(e, r) {
                            e.modulus;
                            var i = e.modulus.byteLength(),
                                f = (r.length,
                                s("sha1")
                                    .update(new t(""))
                                    .digest()),
                                a = f.length;
                            if (0 !== r[0]) throw new Error("decryption error");
                            var c = r.slice(1, a + 1),
                                h = r.slice(a + 1),
                                d = o(c, n(h, a)),
                                u = o(h, n(d, i - a - 1));
                            if (
                                (function(e, r) {
                                    (e = new t(e)), (r = new t(r));
                                    var i = 0,
                                        n = e.length;
                                    e.length !== r.length &&
                                        (i++,
                                        (n = Math.min(e.length, r.length)));
                                    var o = -1;
                                    for (; ++o < n; ) i += e[o] ^ r[o];
                                    return i;
                                })(f, u.slice(0, a))
                            )
                                throw new Error("decryption error");
                            var p = a;
                            for (; 0 === u[p]; ) p++;
                            if (1 !== u[p++])
                                throw new Error("decryption error");
                            return u.slice(p);
                        })(p, u);
                    if (1 === d)
                        return (function(e, t, r) {
                            var i = t.slice(0, 2),
                                n = 2,
                                o = 0;
                            for (; 0 !== t[n++]; )
                                if (n >= t.length) {
                                    o++;
                                    break;
                                }
                            var f = t.slice(2, n - 1);
                            t.slice(n - 1, n);
                            (("0002" !== i.toString("hex") && !r) ||
                                ("0001" !== i.toString("hex") && r)) &&
                                o++;
                            f.length < 8 && o++;
                            if (o) throw new Error("decryption error");
                            return t.slice(n);
                        })(0, u, h);
                    if (3 === d) return u;
                    throw new Error("unknown padding");
                };
            }.call(this, r(114).Buffer));
        },
        2028: function(e, t, r) {
            "use strict";
            (function(e, i) {
                function n() {
                    throw new Error(
                        "secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11"
                    );
                }
                var o = r(60),
                    f = r(1803),
                    a = o.Buffer,
                    s = o.kMaxLength,
                    c = e.crypto || e.msCrypto,
                    h = Math.pow(2, 32) - 1;
                function d(e, t) {
                    if ("number" != typeof e || e != e)
                        throw new TypeError("offset must be a number");
                    if (e > h || e < 0)
                        throw new TypeError("offset must be a uint32");
                    if (e > s || e > t)
                        throw new RangeError("offset out of range");
                }
                function u(e, t, r) {
                    if ("number" != typeof e || e != e)
                        throw new TypeError("size must be a number");
                    if (e > h || e < 0)
                        throw new TypeError("size must be a uint32");
                    if (e + t > r || e > s)
                        throw new RangeError("buffer too small");
                }
                function p(e, t, r, n) {
                    if (i.browser) {
                        var o = e.buffer,
                            a = new Uint8Array(o, t, r);
                        return (
                            c.getRandomValues(a),
                            n
                                ? void i.nextTick(function() {
                                      n(null, e);
                                  })
                                : e
                        );
                    }
                    if (!n) return f(r).copy(e, t), e;
                    f(r, function(r, i) {
                        if (r) return n(r);
                        i.copy(e, t), n(null, e);
                    });
                }
                (c && c.getRandomValues) || !i.browser
                    ? ((t.randomFill = function(t, r, i, n) {
                          if (!(a.isBuffer(t) || t instanceof e.Uint8Array))
                              throw new TypeError(
                                  '"buf" argument must be a Buffer or Uint8Array'
                              );
                          if ("function" == typeof r)
                              (n = r), (r = 0), (i = t.length);
                          else if ("function" == typeof i)
                              (n = i), (i = t.length - r);
                          else if ("function" != typeof n)
                              throw new TypeError(
                                  '"cb" argument must be a function'
                              );
                          return (
                              d(r, t.length), u(i, r, t.length), p(t, r, i, n)
                          );
                      }),
                      (t.randomFillSync = function(t, r, i) {
                          void 0 === r && (r = 0);
                          if (!(a.isBuffer(t) || t instanceof e.Uint8Array))
                              throw new TypeError(
                                  '"buf" argument must be a Buffer or Uint8Array'
                              );
                          d(r, t.length), void 0 === i && (i = t.length - r);
                          return u(i, r, t.length), p(t, r, i);
                      }))
                    : ((t.randomFill = n), (t.randomFillSync = n));
            }.call(this, r(53), r(108)));
        },
        2029: function(e, t, r) {
            (function(t) {
                var i = r(1812),
                    n = r(1786),
                    o = r(1817),
                    f = {
                        md2: new t(
                            "3020300c06082a864886f70d020205000410",
                            "hex"
                        ),
                        md5: new t(
                            "3020300c06082a864886f70d020505000410",
                            "hex"
                        ),
                        sha1: new t("3021300906052b0e03021a05000414", "hex"),
                        sha224: new t(
                            "302d300d06096086480165030402040500041c",
                            "hex"
                        ),
                        sha256: new t(
                            "3031300d060960864801650304020105000420",
                            "hex"
                        ),
                        sha384: new t(
                            "3041300d060960864801650304020205000430",
                            "hex"
                        ),
                        sha512: new t(
                            "3051300d060960864801650304020305000440",
                            "hex"
                        ),
                        ripemd160: new t(
                            "3021300906052b2403020105000414",
                            "hex"
                        ),
                        rmd160: new t("3021300906052b2403020105000414", "hex")
                    },
                    a = {ripemd160: "rmd160"};
                (e.exports = {isEncryption: !0, isSignature: !0}),
                    (e.exports.makeScheme = function(e, r) {
                        function s(e, t) {
                            (this.key = e), (this.options = t);
                        }
                        return (
                            (s.prototype.maxMessageLength = function() {
                                return this.options.encryptionSchemeOptions &&
                                    this.options.encryptionSchemeOptions
                                        .padding == o.RSA_NO_PADDING
                                    ? this.key.encryptedDataLength
                                    : this.key.encryptedDataLength - 11;
                            }),
                            (s.prototype.encPad = function(e, r) {
                                var i;
                                if (
                                    ((r = r || {}),
                                    e.length > this.key.maxMessageLength)
                                )
                                    throw new Error(
                                        "Message too long for RSA (n=" +
                                            this.key.encryptedDataLength +
                                            ", l=" +
                                            e.length +
                                            ")"
                                    );
                                if (
                                    this.options.encryptionSchemeOptions &&
                                    this.options.encryptionSchemeOptions
                                        .padding == o.RSA_NO_PADDING
                                )
                                    return this.pkcs0pad(e);
                                if (1 === r.type)
                                    return (
                                        (i = new t(
                                            this.key.encryptedDataLength -
                                                e.length -
                                                1
                                        )).fill(255, 0, i.length - 1),
                                        (i[0] = 1),
                                        (i[i.length - 1] = 0),
                                        t.concat([i, e])
                                    );
                                ((i = new t(
                                    this.key.encryptedDataLength - e.length
                                ))[0] = 0),
                                    (i[1] = 2);
                                for (
                                    var f = n.randomBytes(i.length - 3), a = 0;
                                    a < f.length;
                                    a++
                                ) {
                                    for (var s = f[a]; 0 === s; )
                                        s = n.randomBytes(1)[0];
                                    i[a + 2] = s;
                                }
                                return (i[i.length - 1] = 0), t.concat([i, e]);
                            }),
                            (s.prototype.encUnPad = function(e, t) {
                                t = t || {};
                                var r = 0;
                                if (
                                    this.options.encryptionSchemeOptions &&
                                    this.options.encryptionSchemeOptions
                                        .padding == o.RSA_NO_PADDING
                                )
                                    return this.pkcs0unpad(e);
                                if (e.length < 4) return null;
                                if (1 === t.type) {
                                    if (0 !== e[0] && 1 !== e[1]) return null;
                                    for (r = 3; 0 !== e[r]; )
                                        if (255 != e[r] || ++r >= e.length)
                                            return null;
                                } else {
                                    if (0 !== e[0] && 2 !== e[1]) return null;
                                    for (r = 3; 0 !== e[r]; )
                                        if (++r >= e.length) return null;
                                }
                                return e.slice(r + 1, e.length);
                            }),
                            (s.prototype.sign = function(e) {
                                var t =
                                    this.options.signingSchemeOptions.hash ||
                                    "sha256";
                                if ("browser" === this.options.environment) {
                                    t = a[t] || t;
                                    var r = n.createHash(t);
                                    r.update(e);
                                    var o = this.pkcs1pad(r.digest(), t);
                                    return this.key
                                        .$doPrivate(new i(o))
                                        .toBuffer(this.key.encryptedDataLength);
                                }
                                var f = n.createSign("RSA-" + t.toUpperCase());
                                return (
                                    f.update(e),
                                    f.sign(
                                        this.options.rsaUtils.exportKey(
                                            "private"
                                        )
                                    )
                                );
                            }),
                            (s.prototype.verify = function(e, r, f) {
                                if (
                                    this.options.encryptionSchemeOptions &&
                                    this.options.encryptionSchemeOptions
                                        .padding == o.RSA_NO_PADDING
                                )
                                    return !1;
                                var s =
                                    this.options.signingSchemeOptions.hash ||
                                    "sha256";
                                if ("browser" === this.options.environment) {
                                    (s = a[s] || s), f && (r = new t(r, f));
                                    var c = n.createHash(s);
                                    c.update(e);
                                    var h = this.pkcs1pad(c.digest(), s);
                                    return (
                                        this.key
                                            .$doPublic(new i(r))
                                            .toBuffer()
                                            .toString("hex") ==
                                        h.toString("hex")
                                    );
                                }
                                var d = n.createVerify(
                                    "RSA-" + s.toUpperCase()
                                );
                                return (
                                    d.update(e),
                                    d.verify(
                                        this.options.rsaUtils.exportKey(
                                            "public"
                                        ),
                                        r,
                                        f
                                    )
                                );
                            }),
                            (s.prototype.pkcs0pad = function(e) {
                                var r = new t(
                                    this.key.maxMessageLength - e.length
                                );
                                return r.fill(0), t.concat([r, e]);
                            }),
                            (s.prototype.pkcs0unpad = function(e) {
                                return "function" == typeof e.lastIndexOf
                                    ? e.slice(e.lastIndexOf("\0") + 1, e.length)
                                    : e.slice(
                                          String.prototype.lastIndexOf.call(
                                              e,
                                              "\0"
                                          ) + 1,
                                          e.length
                                      );
                            }),
                            (s.prototype.pkcs1pad = function(e, r) {
                                var i = f[r];
                                if (!i)
                                    throw Error("Unsupported hash algorithm");
                                var n = t.concat([i, e]);
                                if (
                                    n.length + 10 >
                                    this.key.encryptedDataLength
                                )
                                    throw Error(
                                        "Key is too short for signing algorithm (" +
                                            r +
                                            ")"
                                    );
                                var o = new t(
                                    this.key.encryptedDataLength - n.length - 1
                                );
                                return (
                                    o.fill(255, 0, o.length - 1),
                                    (o[0] = 1),
                                    (o[o.length - 1] = 0),
                                    t.concat([o, n])
                                );
                            }),
                            new s(e, r)
                        );
                    });
            }.call(this, r(114).Buffer));
        },
        2030: function(e, t, r) {
            (function(t) {
                r(1812);
                var i = r(1786);
                (e.exports = {isEncryption: !0, isSignature: !1}),
                    (e.exports.digestLength = {
                        md4: 16,
                        md5: 16,
                        ripemd160: 20,
                        rmd160: 20,
                        sha: 20,
                        sha1: 20,
                        sha224: 28,
                        sha256: 32,
                        sha384: 48,
                        sha512: 64
                    });
                (e.exports.eme_oaep_mgf1 = function(r, n, o) {
                    o = o || "sha1";
                    for (
                        var f = e.exports.digestLength[o],
                            a = Math.ceil(n / f),
                            s = new t(f * a),
                            c = new t(4),
                            h = 0;
                        h < a;
                        ++h
                    ) {
                        var d = i.createHash(o);
                        d.update(r),
                            c.writeUInt32BE(h, 0),
                            d.update(c),
                            d.digest().copy(s, h * f);
                    }
                    return s.slice(0, n);
                }),
                    (e.exports.makeScheme = function(r, n) {
                        function o(e, t) {
                            (this.key = e), (this.options = t);
                        }
                        return (
                            (o.prototype.maxMessageLength = function() {
                                return (
                                    this.key.encryptedDataLength -
                                    2 *
                                        e.exports.digestLength[
                                            this.options.encryptionSchemeOptions
                                                .hash || "sha1"
                                        ] -
                                    2
                                );
                            }),
                            (o.prototype.encPad = function(r) {
                                var n =
                                        this.options.encryptionSchemeOptions
                                            .hash || "sha1",
                                    o =
                                        this.options.encryptionSchemeOptions
                                            .mgf || e.exports.eme_oaep_mgf1,
                                    f =
                                        this.options.encryptionSchemeOptions
                                            .label || new t(0),
                                    a = this.key.encryptedDataLength,
                                    s = e.exports.digestLength[n];
                                if (r.length > a - 2 * s - 2)
                                    throw new Error(
                                        "Message is too long to encode into an encoded message with a length of " +
                                            a +
                                            " bytes, increaseemLen to fix this error (minimum value for given parameters and options: " +
                                            (a - 2 * s - 2) +
                                            ")"
                                    );
                                var c = i.createHash(n);
                                c.update(f), (c = c.digest());
                                var h = new t(a - r.length - 2 * s - 1);
                                h.fill(0), (h[h.length - 1] = 1);
                                for (
                                    var d = t.concat([c, h, r]),
                                        u = i.randomBytes(s),
                                        p = o(u, d.length, n),
                                        l = 0;
                                    l < d.length;
                                    l++
                                )
                                    d[l] ^= p[l];
                                for (p = o(d, s, n), l = 0; l < u.length; l++)
                                    u[l] ^= p[l];
                                var b = new t(1 + u.length + d.length);
                                return (
                                    (b[0] = 0),
                                    u.copy(b, 1),
                                    d.copy(b, 1 + u.length),
                                    b
                                );
                            }),
                            (o.prototype.encUnPad = function(r) {
                                var n =
                                        this.options.encryptionSchemeOptions
                                            .hash || "sha1",
                                    o =
                                        this.options.encryptionSchemeOptions
                                            .mgf || e.exports.eme_oaep_mgf1,
                                    f =
                                        this.options.encryptionSchemeOptions
                                            .label || new t(0),
                                    a = e.exports.digestLength[n];
                                if (r.length < 2 * a + 2)
                                    throw new Error(
                                        "Error decoding message, the supplied message is not long enough to be a valid OAEP encoded message"
                                    );
                                for (
                                    var s = r.slice(1, a + 1),
                                        c = r.slice(1 + a),
                                        h = o(c, a, n),
                                        d = 0;
                                    d < s.length;
                                    d++
                                )
                                    s[d] ^= h[d];
                                for (
                                    h = o(s, c.length, n), d = 0;
                                    d < c.length;
                                    d++
                                )
                                    c[d] ^= h[d];
                                var u = i.createHash(n);
                                if (
                                    (u.update(f),
                                    (u = u.digest()),
                                    c.slice(0, a).toString("hex") !=
                                        u.toString("hex"))
                                )
                                    throw new Error(
                                        "Error decoding message, the lHash calculated from the label provided and the lHash in the encrypted data do not match."
                                    );
                                for (d = a; 0 === c[d++] && d < c.length; );
                                if (1 != c[d - 1])
                                    throw new Error(
                                        "Error decoding message, there is no padding message separator byte"
                                    );
                                return c.slice(d);
                            }),
                            new o(r, n)
                        );
                    });
            }.call(this, r(114).Buffer));
        },
        2031: function(e, t, r) {
            (function(t) {
                var i = r(1812),
                    n = r(1786);
                e.exports = {isEncryption: !1, isSignature: !0};
                e.exports.makeScheme = function(e, o) {
                    var f = r(1804).pkcs1_oaep;
                    function a(e, t) {
                        (this.key = e), (this.options = t);
                    }
                    return (
                        (a.prototype.sign = function(e) {
                            var t = n.createHash(
                                this.options.signingSchemeOptions.hash || "sha1"
                            );
                            t.update(e);
                            var r = this.emsa_pss_encode(
                                t.digest(),
                                this.key.keySize - 1
                            );
                            return this.key
                                .$doPrivate(new i(r))
                                .toBuffer(this.key.encryptedDataLength);
                        }),
                        (a.prototype.verify = function(e, r, o) {
                            o && (r = new t(r, o)), (r = new i(r));
                            var f = Math.ceil((this.key.keySize - 1) / 8),
                                a = this.key.$doPublic(r).toBuffer(f),
                                s = n.createHash(
                                    this.options.signingSchemeOptions.hash ||
                                        "sha1"
                                );
                            return (
                                s.update(e),
                                this.emsa_pss_verify(
                                    s.digest(),
                                    a,
                                    this.key.keySize - 1
                                )
                            );
                        }),
                        (a.prototype.emsa_pss_encode = function(e, r) {
                            var i =
                                    this.options.signingSchemeOptions.hash ||
                                    "sha1",
                                o =
                                    this.options.signingSchemeOptions.mgf ||
                                    f.eme_oaep_mgf1,
                                a =
                                    this.options.signingSchemeOptions
                                        .saltLength || 20,
                                s = f.digestLength[i],
                                c = Math.ceil(r / 8);
                            if (c < s + a + 2)
                                throw new Error(
                                    "Output length passed to emBits(" +
                                        r +
                                        ") is too small for the options specified(" +
                                        i +
                                        ", " +
                                        a +
                                        "). To fix this issue increase the value of emBits. (minimum size: " +
                                        (8 * s + 8 * a + 9) +
                                        ")"
                                );
                            var h = n.randomBytes(a),
                                d = new t(8 + s + a);
                            d.fill(0, 0, 8),
                                e.copy(d, 8),
                                h.copy(d, 8 + e.length);
                            var u = n.createHash(i);
                            u.update(d), (u = u.digest());
                            var p = new t(c - h.length - s - 2);
                            p.fill(0);
                            var l = new t(p.length + 1 + h.length);
                            p.copy(l),
                                (l[p.length] = 1),
                                h.copy(l, p.length + 1);
                            for (
                                var b = o(u, l.length, i),
                                    m = new t(l.length),
                                    y = 0;
                                y < b.length;
                                y++
                            )
                                m[y] = l[y] ^ b[y];
                            var v = 8 * c - r,
                                g = 255 ^ ((255 >> (8 - v)) << (8 - v));
                            m[0] = m[0] & g;
                            var _ = new t(m.length + u.length + 1);
                            return (
                                m.copy(_, 0),
                                u.copy(_, m.length),
                                (_[_.length - 1] = 188),
                                _
                            );
                        }),
                        (a.prototype.emsa_pss_verify = function(e, r, i) {
                            var o =
                                    this.options.signingSchemeOptions.hash ||
                                    "sha1",
                                a =
                                    this.options.signingSchemeOptions.mgf ||
                                    f.eme_oaep_mgf1,
                                s =
                                    this.options.signingSchemeOptions
                                        .saltLength || 20,
                                c = f.digestLength[o],
                                h = Math.ceil(i / 8);
                            if (h < c + s + 2 || 188 != r[r.length - 1])
                                return !1;
                            var d = new t(h - c - 1);
                            r.copy(d, 0, 0, h - c - 1);
                            for (var u = 0, p = 0, l = 8 * h - i; p < l; p++)
                                u |= 1 << (7 - p);
                            if (0 != (d[0] & u)) return !1;
                            var b = r.slice(h - c - 1, h - 1),
                                m = a(b, d.length, o);
                            for (p = 0; p < d.length; p++) d[p] ^= m[p];
                            for (
                                u =
                                    255 ^
                                    ((255 >> (8 - (l = 8 * h - i))) << (8 - l)),
                                    d[0] = d[0] & u,
                                    p = 0;
                                0 === d[p] && p < d.length;
                                p++
                            );
                            if (1 != d[p]) return !1;
                            var y = d.slice(d.length - s),
                                v = new t(8 + c + s);
                            v.fill(0, 0, 8),
                                e.copy(v, 8),
                                y.copy(v, 8 + e.length);
                            var g = n.createHash(o);
                            return (
                                g.update(v),
                                (g = g.digest()),
                                b.toString("hex") === g.toString("hex")
                            );
                        }),
                        new a(e, o)
                    );
                };
            }.call(this, r(114).Buffer));
        },
        2032: function(e, t, r) {
            var i = r(1786);
            e.exports = {
                getEngine: function(e, t) {
                    var n = r(1874);
                    return (
                        "node" === t.environment &&
                            "function" == typeof i.publicEncrypt &&
                            "function" == typeof i.privateDecrypt &&
                            (n =
                                "function" == typeof i.privateEncrypt &&
                                "function" == typeof i.publicDecrypt
                                    ? r(2033)
                                    : r(2034)),
                        n(e, t)
                    );
                }
            };
        },
        2033: function(e, t, r) {
            var i = r(1786),
                n = r(1817),
                o = r(1804);
            e.exports = function(e, t) {
                var r = o.pkcs1.makeScheme(e, t);
                return {
                    encrypt: function(e, o) {
                        if (o) {
                            var f = n.RSA_PKCS1_PADDING;
                            return (
                                t.encryptionSchemeOptions &&
                                    t.encryptionSchemeOptions.padding &&
                                    (f = t.encryptionSchemeOptions.padding),
                                i.privateEncrypt(
                                    {
                                        key: t.rsaUtils.exportKey("private"),
                                        padding: f
                                    },
                                    e
                                )
                            );
                        }
                        f = n.RSA_PKCS1_OAEP_PADDING;
                        "pkcs1" === t.encryptionScheme &&
                            (f = n.RSA_PKCS1_PADDING),
                            t.encryptionSchemeOptions &&
                                t.encryptionSchemeOptions.padding &&
                                (f = t.encryptionSchemeOptions.padding);
                        var a = e;
                        return (
                            f === n.RSA_NO_PADDING && (a = r.pkcs0pad(e)),
                            i.publicEncrypt(
                                {
                                    key: t.rsaUtils.exportKey("public"),
                                    padding: f
                                },
                                a
                            )
                        );
                    },
                    decrypt: function(e, o) {
                        if (o) {
                            var f = n.RSA_PKCS1_PADDING;
                            return (
                                t.encryptionSchemeOptions &&
                                    t.encryptionSchemeOptions.padding &&
                                    (f = t.encryptionSchemeOptions.padding),
                                i.publicDecrypt(
                                    {
                                        key: t.rsaUtils.exportKey("public"),
                                        padding: f
                                    },
                                    e
                                )
                            );
                        }
                        f = n.RSA_PKCS1_OAEP_PADDING;
                        "pkcs1" === t.encryptionScheme &&
                            (f = n.RSA_PKCS1_PADDING),
                            t.encryptionSchemeOptions &&
                                t.encryptionSchemeOptions.padding &&
                                (f = t.encryptionSchemeOptions.padding);
                        var a = i.privateDecrypt(
                            {key: t.rsaUtils.exportKey("private"), padding: f},
                            e
                        );
                        return f === n.RSA_NO_PADDING ? r.pkcs0unpad(a) : a;
                    }
                };
            };
        },
        2034: function(e, t, r) {
            var i = r(1786),
                n = r(1817),
                o = r(1804);
            e.exports = function(e, t) {
                var f = r(1874)(e, t),
                    a = o.pkcs1.makeScheme(e, t);
                return {
                    encrypt: function(e, r) {
                        if (r) return f.encrypt(e, r);
                        var o = n.RSA_PKCS1_OAEP_PADDING;
                        "pkcs1" === t.encryptionScheme &&
                            (o = n.RSA_PKCS1_PADDING),
                            t.encryptionSchemeOptions &&
                                t.encryptionSchemeOptions.padding &&
                                (o = t.encryptionSchemeOptions.padding);
                        var s = e;
                        return (
                            o === n.RSA_NO_PADDING && (s = a.pkcs0pad(e)),
                            i.publicEncrypt(
                                {
                                    key: t.rsaUtils.exportKey("public"),
                                    padding: o
                                },
                                s
                            )
                        );
                    },
                    decrypt: function(e, r) {
                        if (r) return f.decrypt(e, r);
                        var o = n.RSA_PKCS1_OAEP_PADDING;
                        "pkcs1" === t.encryptionScheme &&
                            (o = n.RSA_PKCS1_PADDING),
                            t.encryptionSchemeOptions &&
                                t.encryptionSchemeOptions.padding &&
                                (o = t.encryptionSchemeOptions.padding);
                        var s = i.privateDecrypt(
                            {key: t.rsaUtils.exportKey("private"), padding: o},
                            e
                        );
                        return o === n.RSA_NO_PADDING ? a.pkcs0unpad(s) : s;
                    }
                };
            };
        },
        2035: function(e, t, r) {
            var i = r(1836),
                n = r(1837),
                o = r(2036),
                f = r(2037);
            for (var a in ((e.exports = {Reader: o, Writer: f}), n))
                n.hasOwnProperty(a) && (e.exports[a] = n[a]);
            for (var s in i) i.hasOwnProperty(s) && (e.exports[s] = i[s]);
        },
        2036: function(e, t, r) {
            (function(t) {
                var i = r(27),
                    n = r(1837),
                    o = r(1836).newInvalidAsn1Error;
                function f(e) {
                    if (!e || !t.isBuffer(e))
                        throw new TypeError("data must be a node Buffer");
                    (this._buf = e),
                        (this._size = e.length),
                        (this._len = 0),
                        (this._offset = 0);
                }
                Object.defineProperty(f.prototype, "length", {
                    enumerable: !0,
                    get: function() {
                        return this._len;
                    }
                }),
                    Object.defineProperty(f.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            return this._offset;
                        }
                    }),
                    Object.defineProperty(f.prototype, "remain", {
                        get: function() {
                            return this._size - this._offset;
                        }
                    }),
                    Object.defineProperty(f.prototype, "buffer", {
                        get: function() {
                            return this._buf.slice(this._offset);
                        }
                    }),
                    (f.prototype.readByte = function(e) {
                        if (this._size - this._offset < 1) return null;
                        var t = 255 & this._buf[this._offset];
                        return e || (this._offset += 1), t;
                    }),
                    (f.prototype.peek = function() {
                        return this.readByte(!0);
                    }),
                    (f.prototype.readLength = function(e) {
                        if (
                            (void 0 === e && (e = this._offset),
                            e >= this._size)
                        )
                            return null;
                        var t = 255 & this._buf[e++];
                        if (null === t) return null;
                        if (128 == (128 & t)) {
                            if (0 == (t &= 127))
                                throw o("Indefinite length not supported");
                            if (t > 4) throw o("encoding too long");
                            if (this._size - e < t) return null;
                            this._len = 0;
                            for (var r = 0; r < t; r++)
                                this._len =
                                    (this._len << 8) + (255 & this._buf[e++]);
                        } else this._len = t;
                        return e;
                    }),
                    (f.prototype.readSequence = function(e) {
                        var t = this.peek();
                        if (null === t) return null;
                        if (void 0 !== e && e !== t)
                            throw o(
                                "Expected 0x" +
                                    e.toString(16) +
                                    ": got 0x" +
                                    t.toString(16)
                            );
                        var r = this.readLength(this._offset + 1);
                        return null === r ? null : ((this._offset = r), t);
                    }),
                    (f.prototype.readInt = function() {
                        return this._readTag(n.Integer);
                    }),
                    (f.prototype.readBoolean = function() {
                        return 0 !== this._readTag(n.Boolean);
                    }),
                    (f.prototype.readEnumeration = function() {
                        return this._readTag(n.Enumeration);
                    }),
                    (f.prototype.readString = function(e, r) {
                        e || (e = n.OctetString);
                        var i = this.peek();
                        if (null === i) return null;
                        if (i !== e)
                            throw o(
                                "Expected 0x" +
                                    e.toString(16) +
                                    ": got 0x" +
                                    i.toString(16)
                            );
                        var f = this.readLength(this._offset + 1);
                        if (null === f) return null;
                        if (this.length > this._size - f) return null;
                        if (((this._offset = f), 0 === this.length))
                            return r ? new t(0) : "";
                        var a = this._buf.slice(
                            this._offset,
                            this._offset + this.length
                        );
                        return (
                            (this._offset += this.length),
                            r ? a : a.toString("utf8")
                        );
                    }),
                    (f.prototype.readOID = function(e) {
                        e || (e = n.OID);
                        var t = this.readString(e, !0);
                        if (null === t) return null;
                        for (var r = [], i = 0, o = 0; o < t.length; o++) {
                            var f = 255 & t[o];
                            (i <<= 7),
                                (i += 127 & f),
                                0 == (128 & f) && (r.push(i), (i = 0));
                        }
                        return (
                            (i = r.shift()),
                            r.unshift(i % 40),
                            r.unshift((i / 40) >> 0),
                            r.join(".")
                        );
                    }),
                    (f.prototype._readTag = function(e) {
                        i.ok(void 0 !== e);
                        var t = this.peek();
                        if (null === t) return null;
                        if (t !== e)
                            throw o(
                                "Expected 0x" +
                                    e.toString(16) +
                                    ": got 0x" +
                                    t.toString(16)
                            );
                        var r = this.readLength(this._offset + 1);
                        if (null === r) return null;
                        if (this.length > 4)
                            throw o("Integer too long: " + this.length);
                        if (this.length > this._size - r) return null;
                        this._offset = r;
                        for (
                            var n = this._buf[this._offset], f = 0, a = 0;
                            a < this.length;
                            a++
                        )
                            (f <<= 8), (f |= 255 & this._buf[this._offset++]);
                        return (
                            128 == (128 & n) && 4 !== a && (f -= 1 << (8 * a)),
                            f >> 0
                        );
                    }),
                    (e.exports = f);
            }.call(this, r(114).Buffer));
        },
        2037: function(e, t, r) {
            (function(t) {
                var i = r(27),
                    n = r(1837),
                    o = (r(1836).newInvalidAsn1Error,
                    {size: 1024, growthFactor: 8});
                function f(e) {
                    (e = (function(e, t) {
                        return (
                            i.ok(e),
                            i.equal(typeof e, "object"),
                            i.ok(t),
                            i.equal(typeof t, "object"),
                            Object.getOwnPropertyNames(e).forEach(function(r) {
                                if (!t[r]) {
                                    var i = Object.getOwnPropertyDescriptor(
                                        e,
                                        r
                                    );
                                    Object.defineProperty(t, r, i);
                                }
                            }),
                            t
                        );
                    })(o, e || {})),
                        (this._buf = new t(e.size || 1024)),
                        (this._size = this._buf.length),
                        (this._offset = 0),
                        (this._options = e),
                        (this._seq = []);
                }
                Object.defineProperty(f.prototype, "buffer", {
                    get: function() {
                        if (this._seq.length)
                            throw new InvalidAsn1Error(
                                this._seq.length + " unended sequence(s)"
                            );
                        return this._buf.slice(0, this._offset);
                    }
                }),
                    (f.prototype.writeByte = function(e) {
                        if ("number" != typeof e)
                            throw new TypeError("argument must be a Number");
                        this._ensure(1), (this._buf[this._offset++] = e);
                    }),
                    (f.prototype.writeInt = function(e, t) {
                        if ("number" != typeof e)
                            throw new TypeError("argument must be a Number");
                        "number" != typeof t && (t = n.Integer);
                        for (
                            var r = 4;
                            (0 == (4286578688 & e) ||
                                -8388608 == (4286578688 & e)) &&
                            r > 1;

                        )
                            r--, (e <<= 8);
                        if (r > 4)
                            throw new InvalidAsn1Error(
                                "BER ints cannot be > 0xffffffff"
                            );
                        for (
                            this._ensure(2 + r),
                                this._buf[this._offset++] = t,
                                this._buf[this._offset++] = r;
                            r-- > 0;

                        )
                            (this._buf[this._offset++] =
                                (4278190080 & e) >>> 24),
                                (e <<= 8);
                    }),
                    (f.prototype.writeNull = function() {
                        this.writeByte(n.Null), this.writeByte(0);
                    }),
                    (f.prototype.writeEnumeration = function(e, t) {
                        if ("number" != typeof e)
                            throw new TypeError("argument must be a Number");
                        return (
                            "number" != typeof t && (t = n.Enumeration),
                            this.writeInt(e, t)
                        );
                    }),
                    (f.prototype.writeBoolean = function(e, t) {
                        if ("boolean" != typeof e)
                            throw new TypeError("argument must be a Boolean");
                        "number" != typeof t && (t = n.Boolean),
                            this._ensure(3),
                            (this._buf[this._offset++] = t),
                            (this._buf[this._offset++] = 1),
                            (this._buf[this._offset++] = e ? 255 : 0);
                    }),
                    (f.prototype.writeString = function(e, r) {
                        if ("string" != typeof e)
                            throw new TypeError(
                                "argument must be a string (was: " +
                                    typeof e +
                                    ")"
                            );
                        "number" != typeof r && (r = n.OctetString);
                        var i = t.byteLength(e);
                        this.writeByte(r),
                            this.writeLength(i),
                            i &&
                                (this._ensure(i),
                                this._buf.write(e, this._offset),
                                (this._offset += i));
                    }),
                    (f.prototype.writeBuffer = function(e, r) {
                        if ("number" != typeof r)
                            throw new TypeError("tag must be a number");
                        if (!t.isBuffer(e))
                            throw new TypeError("argument must be a buffer");
                        this.writeByte(r),
                            this.writeLength(e.length),
                            this._ensure(e.length),
                            e.copy(this._buf, this._offset, 0, e.length),
                            (this._offset += e.length);
                    }),
                    (f.prototype.writeStringArray = function(e) {
                        if (!e instanceof Array)
                            throw new TypeError(
                                "argument must be an Array[String]"
                            );
                        var t = this;
                        e.forEach(function(e) {
                            t.writeString(e);
                        });
                    }),
                    (f.prototype.writeOID = function(e, t) {
                        if ("string" != typeof e)
                            throw new TypeError("argument must be a string");
                        if (
                            ("number" != typeof t && (t = n.OID),
                            !/^([0-9]+\.){3,}[0-9]+$/.test(e))
                        )
                            throw new Error(
                                "argument is not a valid OID string"
                            );
                        var r = e.split("."),
                            i = [];
                        i.push(40 * parseInt(r[0], 10) + parseInt(r[1], 10)),
                            r.slice(2).forEach(function(e) {
                                !(function(e, t) {
                                    t < 128
                                        ? e.push(t)
                                        : t < 16384
                                            ? (e.push((t >>> 7) | 128),
                                              e.push(127 & t))
                                            : t < 2097152
                                                ? (e.push((t >>> 14) | 128),
                                                  e.push(
                                                      255 & ((t >>> 7) | 128)
                                                  ),
                                                  e.push(127 & t))
                                                : t < 268435456
                                                    ? (e.push((t >>> 21) | 128),
                                                      e.push(
                                                          255 &
                                                              ((t >>> 14) | 128)
                                                      ),
                                                      e.push(
                                                          255 &
                                                              ((t >>> 7) | 128)
                                                      ),
                                                      e.push(127 & t))
                                                    : (e.push(
                                                          255 &
                                                              ((t >>> 28) | 128)
                                                      ),
                                                      e.push(
                                                          255 &
                                                              ((t >>> 21) | 128)
                                                      ),
                                                      e.push(
                                                          255 &
                                                              ((t >>> 14) | 128)
                                                      ),
                                                      e.push(
                                                          255 &
                                                              ((t >>> 7) | 128)
                                                      ),
                                                      e.push(127 & t));
                                })(i, parseInt(e, 10));
                            });
                        var o = this;
                        this._ensure(2 + i.length),
                            this.writeByte(t),
                            this.writeLength(i.length),
                            i.forEach(function(e) {
                                o.writeByte(e);
                            });
                    }),
                    (f.prototype.writeLength = function(e) {
                        if ("number" != typeof e)
                            throw new TypeError("argument must be a Number");
                        if ((this._ensure(4), e <= 127))
                            this._buf[this._offset++] = e;
                        else if (e <= 255)
                            (this._buf[this._offset++] = 129),
                                (this._buf[this._offset++] = e);
                        else if (e <= 65535)
                            (this._buf[this._offset++] = 130),
                                (this._buf[this._offset++] = e >> 8),
                                (this._buf[this._offset++] = e);
                        else {
                            if (!(e <= 16777215))
                                throw new InvalidAsn1ERror(
                                    "Length too long (> 4 bytes)"
                                );
                            (this._buf[this._offset++] = 131),
                                (this._buf[this._offset++] = e >> 16),
                                (this._buf[this._offset++] = e >> 8),
                                (this._buf[this._offset++] = e);
                        }
                    }),
                    (f.prototype.startSequence = function(e) {
                        "number" != typeof e &&
                            (e = n.Sequence | n.Constructor),
                            this.writeByte(e),
                            this._seq.push(this._offset),
                            this._ensure(3),
                            (this._offset += 3);
                    }),
                    (f.prototype.endSequence = function() {
                        var e = this._seq.pop(),
                            t = e + 3,
                            r = this._offset - t;
                        if (r <= 127) this._shift(t, r, -2), (this._buf[e] = r);
                        else if (r <= 255)
                            this._shift(t, r, -1),
                                (this._buf[e] = 129),
                                (this._buf[e + 1] = r);
                        else if (r <= 65535)
                            (this._buf[e] = 130),
                                (this._buf[e + 1] = r >> 8),
                                (this._buf[e + 2] = r);
                        else {
                            if (!(r <= 16777215))
                                throw new InvalidAsn1Error("Sequence too long");
                            this._shift(t, r, 1),
                                (this._buf[e] = 131),
                                (this._buf[e + 1] = r >> 16),
                                (this._buf[e + 2] = r >> 8),
                                (this._buf[e + 3] = r);
                        }
                    }),
                    (f.prototype._shift = function(e, t, r) {
                        i.ok(void 0 !== e),
                            i.ok(void 0 !== t),
                            i.ok(r),
                            this._buf.copy(this._buf, e + r, e, e + t),
                            (this._offset += r);
                    }),
                    (f.prototype._ensure = function(e) {
                        if ((i.ok(e), this._size - this._offset < e)) {
                            var r = this._size * this._options.growthFactor;
                            r - this._offset < e && (r += e);
                            var n = new t(r);
                            this._buf.copy(n, 0, 0, this._offset),
                                (this._buf = n),
                                (this._size = r);
                        }
                    }),
                    (e.exports = f);
            }.call(this, r(114).Buffer));
        },
        2038: function(e, t, r) {
            r(1782)._;
            function i(e) {
                e = e.split("-");
                for (
                    var t = "private", r = {type: "default"}, i = 1;
                    i < e.length;
                    i++
                )
                    if (e[i])
                        switch (e[i]) {
                            case "public":
                            case "private":
                                t = e[i];
                                break;
                            case "pem":
                            case "der":
                                r.type = e[i];
                        }
                return {scheme: e[0], keyType: t, keyOpt: r};
            }
            e.exports = {
                pkcs1: r(2039),
                pkcs8: r(2040),
                components: r(2041),
                isPrivateExport: function(t) {
                    return (
                        e.exports[t] &&
                        "function" == typeof e.exports[t].privateExport
                    );
                },
                isPrivateImport: function(t) {
                    return (
                        e.exports[t] &&
                        "function" == typeof e.exports[t].privateImport
                    );
                },
                isPublicExport: function(t) {
                    return (
                        e.exports[t] &&
                        "function" == typeof e.exports[t].publicExport
                    );
                },
                isPublicImport: function(t) {
                    return (
                        e.exports[t] &&
                        "function" == typeof e.exports[t].publicImport
                    );
                },
                detectAndImport: function(t, r, n) {
                    if (void 0 === n) {
                        for (var o in e.exports)
                            if (
                                "function" == typeof e.exports[o].autoImport &&
                                e.exports[o].autoImport(t, r)
                            )
                                return !0;
                    } else if (n) {
                        var f = i(n);
                        if (!e.exports[f.scheme])
                            throw Error("Unsupported key format");
                        "private" === f.keyType
                            ? e.exports[f.scheme].privateImport(t, r, f.keyOpt)
                            : e.exports[f.scheme].publicImport(t, r, f.keyOpt);
                    }
                    return !1;
                },
                detectAndExport: function(t, r) {
                    if (r) {
                        var n = i(r);
                        if (e.exports[n.scheme]) {
                            if ("private" === n.keyType) {
                                if (!t.isPrivate())
                                    throw Error("This is not private key");
                                return e.exports[n.scheme].privateExport(
                                    t,
                                    n.keyOpt
                                );
                            }
                            if (!t.isPublic())
                                throw Error("This is not public key");
                            return e.exports[n.scheme].publicExport(
                                t,
                                n.keyOpt
                            );
                        }
                        throw Error("Unsupported key format");
                    }
                }
            };
        },
        2039: function(e, t, r) {
            (function(t) {
                var i = r(1835).Ber,
                    n = r(1782)._,
                    o = r(1782);
                e.exports = {
                    privateExport: function(e, t) {
                        t = t || {};
                        var r = e.n.toBuffer(),
                            n = e.d.toBuffer(),
                            f = e.p.toBuffer(),
                            a = e.q.toBuffer(),
                            s = e.dmp1.toBuffer(),
                            c = e.dmq1.toBuffer(),
                            h = e.coeff.toBuffer(),
                            d =
                                r.length +
                                n.length +
                                f.length +
                                a.length +
                                s.length +
                                c.length +
                                h.length +
                                512,
                            u = new i.Writer({size: d});
                        return (
                            u.startSequence(),
                            u.writeInt(0),
                            u.writeBuffer(r, 2),
                            u.writeInt(e.e),
                            u.writeBuffer(n, 2),
                            u.writeBuffer(f, 2),
                            u.writeBuffer(a, 2),
                            u.writeBuffer(s, 2),
                            u.writeBuffer(c, 2),
                            u.writeBuffer(h, 2),
                            u.endSequence(),
                            "der" === t.type
                                ? u.buffer
                                : "-----BEGIN RSA PRIVATE KEY-----\n" +
                                  o.linebrk(u.buffer.toString("base64"), 64) +
                                  "\n-----END RSA PRIVATE KEY-----"
                        );
                    },
                    privateImport: function(e, r, o) {
                        var f;
                        if ("der" !== (o = o || {}).type) {
                            if (
                                (t.isBuffer(r) && (r = r.toString("utf8")),
                                !n.isString(r))
                            )
                                throw Error("Unsupported key format");
                            var a = r
                                .replace("-----BEGIN RSA PRIVATE KEY-----", "")
                                .replace("-----END RSA PRIVATE KEY-----", "")
                                .replace(/\s+|\n\r|\n|\r$/gm, "");
                            f = new t(a, "base64");
                        } else {
                            if (!t.isBuffer(r))
                                throw Error("Unsupported key format");
                            f = r;
                        }
                        var s = new i.Reader(f);
                        s.readSequence(),
                            s.readString(2, !0),
                            e.setPrivate(
                                s.readString(2, !0),
                                s.readString(2, !0),
                                s.readString(2, !0),
                                s.readString(2, !0),
                                s.readString(2, !0),
                                s.readString(2, !0),
                                s.readString(2, !0),
                                s.readString(2, !0)
                            );
                    },
                    publicExport: function(e, t) {
                        t = t || {};
                        var r = e.n.toBuffer(),
                            n = r.length + 512,
                            f = new i.Writer({size: n});
                        return (
                            f.startSequence(),
                            f.writeBuffer(r, 2),
                            f.writeInt(e.e),
                            f.endSequence(),
                            "der" === t.type
                                ? f.buffer
                                : "-----BEGIN RSA PUBLIC KEY-----\n" +
                                  o.linebrk(f.buffer.toString("base64"), 64) +
                                  "\n-----END RSA PUBLIC KEY-----"
                        );
                    },
                    publicImport: function(e, r, o) {
                        var f;
                        if ("der" !== (o = o || {}).type) {
                            if (
                                (t.isBuffer(r) && (r = r.toString("utf8")),
                                n.isString(r))
                            ) {
                                var a = r
                                    .replace(
                                        "-----BEGIN RSA PUBLIC KEY-----",
                                        ""
                                    )
                                    .replace("-----END RSA PUBLIC KEY-----", "")
                                    .replace(/\s+|\n\r|\n|\r$/gm, "");
                                f = new t(a, "base64");
                            }
                        } else {
                            if (!t.isBuffer(r))
                                throw Error("Unsupported key format");
                            f = r;
                        }
                        var s = new i.Reader(f);
                        s.readSequence(),
                            e.setPublic(
                                s.readString(2, !0),
                                s.readString(2, !0)
                            );
                    },
                    autoImport: function(t, r) {
                        return /^\s*-----BEGIN RSA PRIVATE KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END RSA PRIVATE KEY-----\s*$/g.test(
                            r
                        )
                            ? (e.exports.privateImport(t, r), !0)
                            : !!/^\s*-----BEGIN RSA PUBLIC KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END RSA PUBLIC KEY-----\s*$/g.test(
                                  r
                              ) && (e.exports.publicImport(t, r), !0);
                    }
                };
            }.call(this, r(114).Buffer));
        },
        2040: function(e, t, r) {
            (function(t) {
                var i = r(1835).Ber,
                    n = r(1782)._,
                    o = r(1782);
                e.exports = {
                    privateExport: function(e, t) {
                        t = t || {};
                        var r = e.n.toBuffer(),
                            n = e.d.toBuffer(),
                            f = e.p.toBuffer(),
                            a = e.q.toBuffer(),
                            s = e.dmp1.toBuffer(),
                            c = e.dmq1.toBuffer(),
                            h = e.coeff.toBuffer(),
                            d =
                                r.length +
                                n.length +
                                f.length +
                                a.length +
                                s.length +
                                c.length +
                                h.length +
                                512,
                            u = new i.Writer({size: d});
                        u.startSequence(),
                            u.writeInt(0),
                            u.writeBuffer(r, 2),
                            u.writeInt(e.e),
                            u.writeBuffer(n, 2),
                            u.writeBuffer(f, 2),
                            u.writeBuffer(a, 2),
                            u.writeBuffer(s, 2),
                            u.writeBuffer(c, 2),
                            u.writeBuffer(h, 2),
                            u.endSequence();
                        var p = new i.Writer({size: d});
                        return (
                            p.startSequence(),
                            p.writeInt(0),
                            p.startSequence(),
                            p.writeOID("1.2.840.113549.1.1.1"),
                            p.writeNull(),
                            p.endSequence(),
                            p.writeBuffer(u.buffer, 4),
                            p.endSequence(),
                            "der" === t.type
                                ? p.buffer
                                : "-----BEGIN PRIVATE KEY-----\n" +
                                  o.linebrk(p.buffer.toString("base64"), 64) +
                                  "\n-----END PRIVATE KEY-----"
                        );
                    },
                    privateImport: function(e, r, o) {
                        var f;
                        if ("der" !== (o = o || {}).type) {
                            if (
                                (t.isBuffer(r) && (r = r.toString("utf8")),
                                !n.isString(r))
                            )
                                throw Error("Unsupported key format");
                            var a = r
                                .replace("-----BEGIN PRIVATE KEY-----", "")
                                .replace("-----END PRIVATE KEY-----", "")
                                .replace(/\s+|\n\r|\n|\r$/gm, "");
                            f = new t(a, "base64");
                        } else {
                            if (!t.isBuffer(r))
                                throw Error("Unsupported key format");
                            f = r;
                        }
                        var s = new i.Reader(f);
                        if (
                            (s.readSequence(),
                            s.readInt(0),
                            "1.2.840.113549.1.1.1" !==
                                new i.Reader(s.readString(48, !0)).readOID(
                                    6,
                                    !0
                                ))
                        )
                            throw Error("Invalid Public key format");
                        var c = new i.Reader(s.readString(4, !0));
                        c.readSequence(),
                            c.readString(2, !0),
                            e.setPrivate(
                                c.readString(2, !0),
                                c.readString(2, !0),
                                c.readString(2, !0),
                                c.readString(2, !0),
                                c.readString(2, !0),
                                c.readString(2, !0),
                                c.readString(2, !0),
                                c.readString(2, !0)
                            );
                    },
                    publicExport: function(e, t) {
                        t = t || {};
                        var r = e.n.toBuffer(),
                            n = r.length + 512,
                            f = new i.Writer({size: n});
                        f.writeByte(0),
                            f.startSequence(),
                            f.writeBuffer(r, 2),
                            f.writeInt(e.e),
                            f.endSequence();
                        var a = new i.Writer({size: n});
                        return (
                            a.startSequence(),
                            a.startSequence(),
                            a.writeOID("1.2.840.113549.1.1.1"),
                            a.writeNull(),
                            a.endSequence(),
                            a.writeBuffer(f.buffer, 3),
                            a.endSequence(),
                            "der" === t.type
                                ? a.buffer
                                : "-----BEGIN PUBLIC KEY-----\n" +
                                  o.linebrk(a.buffer.toString("base64"), 64) +
                                  "\n-----END PUBLIC KEY-----"
                        );
                    },
                    publicImport: function(e, r, o) {
                        var f;
                        if ("der" !== (o = o || {}).type) {
                            if (
                                (t.isBuffer(r) && (r = r.toString("utf8")),
                                n.isString(r))
                            ) {
                                var a = r
                                    .replace("-----BEGIN PUBLIC KEY-----", "")
                                    .replace("-----END PUBLIC KEY-----", "")
                                    .replace(/\s+|\n\r|\n|\r$/gm, "");
                                f = new t(a, "base64");
                            }
                        } else {
                            if (!t.isBuffer(r))
                                throw Error("Unsupported key format");
                            f = r;
                        }
                        var s = new i.Reader(f);
                        if (
                            (s.readSequence(),
                            "1.2.840.113549.1.1.1" !==
                                new i.Reader(s.readString(48, !0)).readOID(
                                    6,
                                    !0
                                ))
                        )
                            throw Error("Invalid Public key format");
                        var c = new i.Reader(s.readString(3, !0));
                        c.readByte(),
                            c.readSequence(),
                            e.setPublic(
                                c.readString(2, !0),
                                c.readString(2, !0)
                            );
                    },
                    autoImport: function(t, r) {
                        return /^\s*-----BEGIN PRIVATE KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END PRIVATE KEY-----\s*$/g.test(
                            r
                        )
                            ? (e.exports.privateImport(t, r), !0)
                            : !!/^\s*-----BEGIN PUBLIC KEY-----\s*(?=(([A-Za-z0-9+/=]+\s*)+))\1-----END PUBLIC KEY-----\s*$/g.test(
                                  r
                              ) && (e.exports.publicImport(t, r), !0);
                    }
                };
            }.call(this, r(114).Buffer));
        },
        2041: function(e, t, r) {
            r(1782)._, r(1782);
            e.exports = {
                privateExport: function(e, t) {
                    return {
                        n: e.n.toBuffer(),
                        e: e.e,
                        d: e.d.toBuffer(),
                        p: e.p.toBuffer(),
                        q: e.q.toBuffer(),
                        dmp1: e.dmp1.toBuffer(),
                        dmq1: e.dmq1.toBuffer(),
                        coeff: e.coeff.toBuffer()
                    };
                },
                privateImport: function(e, t, r) {
                    if (
                        !(
                            t.n &&
                            t.e &&
                            t.d &&
                            t.p &&
                            t.q &&
                            t.dmp1 &&
                            t.dmq1 &&
                            t.coeff
                        )
                    )
                        throw Error("Invalid key data");
                    e.setPrivate(
                        t.n,
                        t.e,
                        t.d,
                        t.p,
                        t.q,
                        t.dmp1,
                        t.dmq1,
                        t.coeff
                    );
                },
                publicExport: function(e, t) {
                    return {n: e.n.toBuffer(), e: e.e};
                },
                publicImport: function(e, t, r) {
                    if (!t.n || !t.e) throw Error("Invalid key data");
                    e.setPublic(t.n, t.e);
                },
                autoImport: function(t, r) {
                    return (
                        !(!r.n || !r.e) &&
                        (r.d && r.p && r.q && r.dmp1 && r.dmq1 && r.coeff
                            ? (e.exports.privateImport(t, r), !0)
                            : (e.exports.publicImport(t, r), !0))
                    );
                }
            };
        }
    }
]);
//# sourceMappingURL=vendors~deposit-withdraw.js.map
