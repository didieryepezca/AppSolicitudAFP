if (function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
   if (!e.document) throw new Error("jQuery requires a window with a document");
   return t(e)
} : t(e)
}("undefined" != typeof window ? window : this, function (w, e) {
  "use strict";
  var t = [],
   x = w.document,
   i = Object.getPrototypeOf,
   a = t.slice,
   g = t.concat,
   l = t.push,
   r = t.indexOf,
   n = {},
   o = n.toString,
   p = n.hasOwnProperty,
   s = p.toString,
   u = s.call(Object),
   m = {};

  function v(e, t) {
   var n = (t = t || x).createElement("script");
   n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
}
  var c = "3.2.1",
   C = function (e, t) {
    return new C.fn.init(e, t)
},
   f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
   d = /^-ms-/,
   h = /-([a-z])/g,
   y = function (e, t) {
    return t.toUpperCase()
};

  function _(e) {
   var t = !!e && "length" in e && e.length,
    n = C.type(e);
   return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
}
  C.fn = C.prototype = {
    jquery: c,
    constructor: C,
    length: 0,
    toArray: function () {
    return a.call(this)
},
    get: function (e) {
    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
},
    pushStack: function (e) {
    var t = C.merge(this.constructor(), e);
    return t.prevObject = this, t
},
    each: function (e) {
    return C.each(this, e)
},
    map: function (n) {
    return this.pushStack(C.map(this, function (e, t) {
     return n.call(e, t, e)
}))
},
    slice: function () {
    return this.pushStack(a.apply(this, arguments))
},
    first: function () {
    return this.eq(0)
},
    last: function () {
    return this.eq(-1)
},
    eq: function (e) {
    var t = this.length,
     n = +e + (e < 0 ? t : 0);
    return this.pushStack(0 <= n && n < t ? [this[n]] : [])
},
    end: function () {
    return this.prevObject || this.constructor()
},
    push: l,
    sort: t.sort,
    splice: t.splice
}, C.extend = C.fn.extend = function () {
   var e, t, n, i, r, o, s = arguments[0] || {},
    a = 1,
    l = arguments.length,
    u = !1;
   for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || C.isFunction(s) || (s = {}), a === l && (s = this, a--) ; a < l; a++)
    if (null != (e = arguments[a]))
     for (t in e) n = s[t], s !== (i = e[t]) && (u && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && C.isPlainObject(n) ? n : {}, s[t] = C.extend(u, o, i)) : void 0 !== i && (s[t] = i));
   return s
}, C.extend({
    expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
    throw new Error(e)
},
    noop: function () { },
    isFunction: function (e) {
    return "function" === C.type(e)
},
    isWindow: function (e) {
    return null != e && e === e.window
},
    isNumeric: function (e) {
    var t = C.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
},
    isPlainObject: function (e) {
    var t, n;
    return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof (n = p.call(t, "constructor") && t.constructor) || s.call(n) !== u))
},
    isEmptyObject: function (e) {
    var t;
    for (t in e) return !1;
    return !0
},
    type: function (e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
},
    globalEval: function (e) {
    v(e)
},
    camelCase: function (e) {
    return e.replace(d, "ms-").replace(h, y)
},
    each: function (e, t) {
    var n, i = 0;
    if (_(e))
     for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]) ; i++);
else
     for (i in e)
      if (!1 === t.call(e[i], i, e[i])) break;
    return e
},
    trim: function (e) {
    return null == e ? "" : (e + "").replace(f, "")
},
    makeArray: function (e, t) {
    var n = t || [];
    return null != e && (_(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
},
    inArray: function (e, t, n) {
    return null == t ? -1 : r.call(t, e, n)
},
    merge: function (e, t) {
    for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
    return e.length = r, e
},
    grep: function (e, t, n) {
    for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
    return i
},
    map: function (e, t, n) {
    var i, r, o = 0,
     s = [];
    if (_(e))
     for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
else
     for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
    return g.apply([], s)
},
    guid: 1,
    proxy: function (e, t) {
    var n, i, r;
    if ("string" == typeof t && (n = e[t], t = e, e = n), C.isFunction(e)) return i = a.call(arguments, 2), (r = function () {
     return e.apply(t || this, i.concat(a.call(arguments)))
}).guid = e.guid = e.guid || C.guid++, r
},
    now: Date.now,
    support: m
}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
   n["[object " + t + "]"] = t.toLowerCase()
});
  var b = function (n) {
   var e, h, b, o, r, p, f, g, T, l, u, E, w, s, x, m, a, c, v, C = "sizzle" + 1 * new Date,
    y = n.document,
    S = 0,
    i = 0,
    d = se(),
    _ = se(),
    A = se(),
    D = function (e, t) {
     return e === t && (u = !0), 0
},
    I = {}.hasOwnProperty,
    t = [],
    N = t.pop,
    k = t.push,
    O = t.push,
    j = t.slice,
    L = function (e, t) {
     for (var n = 0, i = e.length; n < i; n++)
      if (e[n] === t) return n;
     return -1
},
    H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
    P = "[\\x20\\t\\r\\n\\f]",
    R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
    F = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]",
    W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
    M = new RegExp(P + "+", "g"),
    q = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
    B = new RegExp("^" + P + "*," + P + "*"),
    U = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
    Q = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
    K = new RegExp(W),
    V = new RegExp("^" + R + "$"),
    $ = {
    ID: new RegExp("^#(" + R + ")"),
    CLASS: new RegExp("^\\.(" + R + ")"),
    TAG: new RegExp("^(" + R + "|[*])"),
    ATTR: new RegExp("^" + F),
    PSEUDO: new RegExp("^" + W),
    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
    bool: new RegExp("^(?:" + H + ")$", "i"),
    needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
},
    Y = /^(?:input|select|textarea|button)$/i,
    X = /^h\d$/i,
    z = /^[^{]+\{\s*\[native \w/,
    G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    J = /[+~]/,
    Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
    ee = function (e, t, n) {
     var i = "0x" + t - 65536;
     return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
},
    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
    ne = function (e, t) {
     return t ? "\0" === e ? "???" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
},
    ie = function () {
     E()
},
    re = ye(function (e) {
     return !0 === e.disabled && ("form" in e || "label" in e)
}, {
    dir: "parentNode",
    next: "legend"
});
   try {
    O.apply(t = j.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
} catch (e) {
    O = {
    apply: t.length ? function (e, t) {
      k.apply(e, j.call(t))
} : function (e, t) {
      for (var n = e.length, i = 0; e[n++] = t[i++];);
      e.length = n - 1
}
}
}

   function oe(e, t, n, i) {
    var r, o, s, a, l, u, c, f = t && t.ownerDocument,
     d = t ? t.nodeType : 9;
    if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
    if (!i && ((t ? t.ownerDocument || t : y) !== w && E(t), t = t || w, x)) {
     if (11 !== d && (l = G.exec(e)))
      if (r = l[1]) {
       if (9 === d) {
        if (!(s = t.getElementById(r))) return n;
        if (s.id === r) return n.push(s), n
} else if (f && (s = f.getElementById(r)) && v(t, s) && s.id === r) return n.push(s), n
} else {
       if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
       if ((r = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(r)), n
}
     if (h.qsa && !A[e + " "] && (!m || !m.test(e))) {
      if (1 !== d) f = t, c = e;
else if ("object" !== t.nodeName.toLowerCase()) {
       for ((a = t.getAttribute("id")) ? a = a.replace(te, ne) : t.setAttribute("id", a = C), o = (u = p(e)).length; o--;) u[o] = "#" + a + " " + ve(u[o]);
       c = u.join(","), f = J.test(e) && ge(t.parentNode) || t
}
      if (c) try {
       return O.apply(n, f.querySelectorAll(c)), n
} catch (e) { } finally {
       a === C && t.removeAttribute("id")
}
}
}
    return g(e.replace(q, "$1"), t, n, i)
}

   function se() {
    var i = [];
    return function e(t, n) {
     return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n
}
}

   function ae(e) {
    return e[C] = !0, e
}

   function le(e) {
    var t = w.createElement("fieldset");
    try {
     return !!e(t)
} catch (e) {
     return !1
} finally {
     t.parentNode && t.parentNode.removeChild(t), t = null
}
}

   function ue(e, t) {
    for (var n = e.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = t
}

   function ce(e, t) {
    var n = t && e,
     i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
    if (i) return i;
    if (n)
     for (; n = n.nextSibling;)
      if (n === t) return -1;
    return e ? 1 : -1
}

   function fe(t) {
    return function (e) {
     return "input" === e.nodeName.toLowerCase() && e.type === t
}
}

   function de(n) {
    return function (e) {
     var t = e.nodeName.toLowerCase();
     return ("input" === t || "button" === t) && e.type === n
}
}

   function he(t) {
    return function (e) {
     return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
}
}

   function pe(s) {
    return ae(function (o) {
     return o = +o, ae(function (e, t) {
      for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
})
})
}

   function ge(e) {
    return e && void 0 !== e.getElementsByTagName && e
}
   for (e in h = oe.support = {}, r = oe.isXML = function (e) {
     var t = e && (e.ownerDocument || e).documentElement;
     return !!t && "HTML" !== t.nodeName
}, E = oe.setDocument = function (e) {
     var t, n, i = e ? e.ownerDocument || e : y;
     return i !== w && 9 === i.nodeType && i.documentElement && (s = (w = i).documentElement, x = !r(w), y !== w && (n = w.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), h.attributes = le(function (e) {
      return e.className = "i", !e.getAttribute("className")
}), h.getElementsByTagName = le(function (e) {
      return e.appendChild(w.createComment("")), !e.getElementsByTagName("*").length
}), h.getElementsByClassName = z.test(w.getElementsByClassName), h.getById = le(function (e) {
      return s.appendChild(e).id = C, !w.getElementsByName || !w.getElementsByName(C).length
}), h.getById ? (b.filter.ID = function (e) {
      var t = e.replace(Z, ee);
      return function (e) {
       return e.getAttribute("id") === t
}
}, b.find.ID = function (e, t) {
      if (void 0 !== t.getElementById && x) {
       var n = t.getElementById(e);
       return n ? [n] : []
}
}) : (b.filter.ID = function (e) {
      var n = e.replace(Z, ee);
      return function (e) {
       var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
       return t && t.value === n
}
}, b.find.ID = function (e, t) {
      if (void 0 !== t.getElementById && x) {
       var n, i, r, o = t.getElementById(e);
       if (o) {
        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
         if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
}
       return []
}
}), b.find.TAG = h.getElementsByTagName ? function (e, t) {
      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
} : function (e, t) {
      var n, i = [],
       r = 0,
       o = t.getElementsByTagName(e);
      if ("*" === e) {
       for (; n = o[r++];) 1 === n.nodeType && i.push(n);
       return i
}
      return o
}, b.find.CLASS = h.getElementsByClassName && function (e, t) {
      if (void 0 !== t.getElementsByClassName && x) return t.getElementsByClassName(e)
}, a = [], m = [], (h.qsa = z.test(w.querySelectorAll)) && (le(function (e) {
      s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + P + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]")
}), le(function (e) {
      e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
      var t = w.createElement("input");
      t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + P + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
})), (h.matchesSelector = z.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function (e) {
      h.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", W)
}), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = z.test(s.compareDocumentPosition), v = t || z.test(s.contains) ? function (e, t) {
      var n = 9 === e.nodeType ? e.documentElement : e,
       i = t && t.parentNode;
      return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
} : function (e, t) {
      if (t)
       for (; t = t.parentNode;)
        if (t === e) return !0;
      return !1
}, D = t ? function (e, t) {
      if (e === t) return u = !0, 0;
      var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
      return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === w || e.ownerDocument === y && v(y, e) ? -1 : t === w || t.ownerDocument === y && v(y, t) ? 1 : l ? L(l, e) - L(l, t) : 0 : 4 & n ? -1 : 1)
} : function (e, t) {
      if (e === t) return u = !0, 0;
      var n, i = 0,
       r = e.parentNode,
       o = t.parentNode,
       s = [e],
       a = [t];
      if (!r || !o) return e === w ? -1 : t === w ? 1 : r ? -1 : o ? 1 : l ? L(l, e) - L(l, t) : 0;
      if (r === o) return ce(e, t);
      for (n = e; n = n.parentNode;) s.unshift(n);
      for (n = t; n = n.parentNode;) a.unshift(n);
      for (; s[i] === a[i];) i++;
      return i ? ce(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0
}), w
}, oe.matches = function (e, t) {
     return oe(e, null, null, t)
}, oe.matchesSelector = function (e, t) {
     if ((e.ownerDocument || e) !== w && E(e), t = t.replace(Q, "='$1']"), h.matchesSelector && x && !A[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
      var n = c.call(e, t);
      if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
} catch (e) { }
     return 0 < oe(t, w, null, [e]).length
}, oe.contains = function (e, t) {
     return (e.ownerDocument || e) !== w && E(e), v(e, t)
}, oe.attr = function (e, t) {
     (e.ownerDocument || e) !== w && E(e);
     var n = b.attrHandle[t.toLowerCase()],
      i = n && I.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !x) : void 0;
     return void 0 !== i ? i : h.attributes || !x ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
}, oe.escape = function (e) {
     return (e + "").replace(te, ne)
}, oe.error = function (e) {
     throw new Error("Syntax error, unrecognized expression: " + e)
}, oe.uniqueSort = function (e) {
     var t, n = [],
      i = 0,
      r = 0;
     if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(D), u) {
      for (; t = e[r++];) t === e[r] && (i = n.push(r));
      for (; i--;) e.splice(n[i], 1)
}
     return l = null, e
}, o = oe.getText = function (e) {
     var t, n = "",
      i = 0,
      r = e.nodeType;
     if (r) {
      if (1 === r || 9 === r || 11 === r) {
       if ("string" == typeof e.textContent) return e.textContent;
       for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
} else if (3 === r || 4 === r) return e.nodeValue
} else
      for (; t = e[i++];) n += o(t);
     return n
}, (b = oe.selectors = {
    cacheLength: 50,
    createPseudo: ae,
    match: $,
    attrHandle: {},
    find: {},
    relative: {
      ">": {
    dir: "parentNode",
    first: !0
},
      " ": {
    dir: "parentNode"
},
      "+": {
    dir: "previousSibling",
    first: !0
},
      "~": {
    dir: "previousSibling"
}
},
    preFilter: {
    ATTR: function (e) {
       return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
},
    CHILD: function (e) {
       return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
},
    PSEUDO: function (e) {
       var t, n = !e[6] && e[2];
       return $.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && K.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
}
},
    filter: {
    TAG: function (e) {
       var t = e.replace(Z, ee).toLowerCase();
       return "*" === e ? function () {
        return !0
} : function (e) {
        return e.nodeName && e.nodeName.toLowerCase() === t
}
},
    CLASS: function (e) {
       var t = d[e + " "];
       return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && d(e, function (e) {
        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
})
},
    ATTR: function (n, i, r) {
       return function (e) {
        var t = oe.attr(e, n);
        return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(M, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
}
},
    CHILD: function (p, e, t, g, m) {
       var v = "nth" !== p.slice(0, 3),
        y = "last" !== p.slice(-4),
        _ = "of-type" === e;
       return 1 === g && 0 === m ? function (e) {
        return !!e.parentNode
} : function (e, t, n) {
        var i, r, o, s, a, l, u = v !== y ? "nextSibling" : "previousSibling",
         c = e.parentNode,
         f = _ && e.nodeName.toLowerCase(),
         d = !n && !_,
         h = !1;
        if (c) {
         if (v) {
          for (; u;) {
           for (s = e; s = s[u];)
            if (_ ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
           l = u = "only" === p && !l && "nextSibling"
}
          return !0
}
         if (l = [y ? c.firstChild : c.lastChild], y && d) {
          for (h = (a = (i = (r = (o = (s = c)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (h = a = 0) || l.pop() ;)
           if (1 === s.nodeType && ++h && s === e) {
            r[p] = [S, a, h];
            break
}
} else if (d && (h = a = (i = (r = (o = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === h)
          for (;
           (s = ++a && s && s[u] || (h = a = 0) || l.pop()) && ((_ ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((r = (o = s[C] || (s[C] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [S, h]), s !== e)) ;);
         return (h -= m) === g || h % g == 0 && 0 <= h / g
}
}
},
    PSEUDO: function (e, o) {
       var t, s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
       return s[C] ? s(o) : 1 < s.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, t) {
        for (var n, i = s(e, o), r = i.length; r--;) e[n = L(e, i[r])] = !(t[n] = i[r])
}) : function (e) {
        return s(e, 0, t)
}) : s
}
},
    pseudos: {
    not: ae(function (e) {
       var i = [],
        r = [],
        a = f(e.replace(q, "$1"));
       return a[C] ? ae(function (e, t, n, i) {
        for (var r, o = a(e, null, i, []), s = e.length; s--;) (r = o[s]) && (e[s] = !(t[s] = r))
}) : function (e, t, n) {
        return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
}
}),
    has: ae(function (t) {
       return function (e) {
        return 0 < oe(t, e).length
}
}),
    contains: ae(function (t) {
       return t = t.replace(Z, ee),
        function (e) {
         return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
}
}),
    lang: ae(function (n) {
       return V.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(),
        function (e) {
         var t;
         do {
          if (t = x ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
} while ((e = e.parentNode) && 1 === e.nodeType);
         return !1
}
}),
    target: function (e) {
       var t = n.location && n.location.hash;
       return t && t.slice(1) === e.id
},
    root: function (e) {
       return e === s
},
    focus: function (e) {
       return e === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
},
    enabled: he(!1),
    disabled: he(!0),
    checked: function (e) {
       var t = e.nodeName.toLowerCase();
       return "input" === t && !!e.checked || "option" === t && !!e.selected
},
    selected: function (e) {
       return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
},
    empty: function (e) {
       for (e = e.firstChild; e; e = e.nextSibling)
        if (e.nodeType < 6) return !1;
       return !0
},
    parent: function (e) {
       return !b.pseudos.empty(e)
},
    header: function (e) {
       return X.test(e.nodeName)
},
    input: function (e) {
       return Y.test(e.nodeName)
},
    button: function (e) {
       var t = e.nodeName.toLowerCase();
       return "input" === t && "button" === e.type || "button" === t
},
    text: function (e) {
       var t;
       return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
},
    first: pe(function () {
       return [0]
}),
    last: pe(function (e, t) {
       return [t - 1]
}),
    eq: pe(function (e, t, n) {
       return [n < 0 ? n + t : n]
}),
    even: pe(function (e, t) {
       for (var n = 0; n < t; n += 2) e.push(n);
       return e
}),
    odd: pe(function (e, t) {
       for (var n = 1; n < t; n += 2) e.push(n);
       return e
}),
    lt: pe(function (e, t, n) {
       for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
       return e
}),
    gt: pe(function (e, t, n) {
       for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
       return e
})
}
}).pseudos.nth = b.pseudos.eq, {
    radio: !0,
    checkbox: !0,
    file: !0,
    password: !0,
    image: !0
}) b.pseudos[e] = fe(e);
   for (e in {
    submit: !0,
    reset: !0
}) b.pseudos[e] = de(e);

   function me() { }

   function ve(e) {
    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
    return i
}

   function ye(a, e, t) {
    var l = e.dir,
     u = e.next,
     c = u || l,
     f = t && "parentNode" === c,
     d = i++;
    return e.first ? function (e, t, n) {
     for (; e = e[l];)
      if (1 === e.nodeType || f) return a(e, t, n);
     return !1
} : function (e, t, n) {
     var i, r, o, s = [S, d];
     if (n) {
      for (; e = e[l];)
       if ((1 === e.nodeType || f) && a(e, t, n)) return !0
} else
      for (; e = e[l];)
       if (1 === e.nodeType || f)
        if (r = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
else {
         if ((i = r[c]) && i[0] === S && i[1] === d) return s[2] = i[2];
         if ((r[c] = s)[2] = a(e, t, n)) return !0
} return !1
}
}

   function _e(r) {
    return 1 < r.length ? function (e, t, n) {
     for (var i = r.length; i--;)
      if (!r[i](e, t, n)) return !1;
     return !0
} : r[0]
}

   function be(e, t, n, i, r) {
    for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
    return s
}

   function Te(h, p, g, m, v, e) {
    return m && !m[C] && (m = Te(m)), v && !v[C] && (v = Te(v, e)), ae(function (e, t, n, i) {
     var r, o, s, a = [],
      l = [],
      u = t.length,
      c = e || function (e, t, n) {
       for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
       return n
}(p || "*", n.nodeType ? [n] : n, []),
      f = !h || !e && p ? c : be(c, a, h, n, i),
      d = g ? v || (e ? h : u || m) ? [] : t : f;
     if (g && g(f, d, n, i), m)
      for (r = be(d, l), m(r, [], n, i), o = r.length; o--;) (s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
     if (e) {
      if (v || h) {
       if (v) {
        for (r = [], o = d.length; o--;) (s = d[o]) && r.push(f[o] = s);
        v(null, d = [], r, i)
}
       for (o = d.length; o--;) (s = d[o]) && -1 < (r = v ? L(e, s) : a[o]) && (e[r] = !(t[r] = s))
}
} else d = be(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, i) : O.apply(t, d)
})
}

   function Ee(e) {
    for (var r, t, n, i = e.length, o = b.relative[e[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = ye(function (e) {
      return e === r
}, s, !0), u = ye(function (e) {
      return -1 < L(r, e)
}, s, !0), c = [function (e, t, n) {
      var i = !o && (n || t !== T) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
      return r = null, i
}]; a < i; a++)
     if (t = b.relative[e[a].type]) c = [ye(_e(c), t)];
else {
      if ((t = b.filter[e[a].type].apply(null, e[a].matches))[C]) {
       for (n = ++a; n < i && !b.relative[e[n].type]; n++);
       return Te(1 < a && _e(c), 1 < a && ve(e.slice(0, a - 1).concat({
    value: " " === e[a - 2].type ? "*" : ""
})).replace(q, "$1"), t, a < n && Ee(e.slice(a, n)), n < i && Ee(e = e.slice(n)), n < i && ve(e))
}
      c.push(t)
}
    return _e(c)
}
   return me.prototype = b.filters = b.pseudos, b.setFilters = new me, p = oe.tokenize = function (e, t) {
    var n, i, r, o, s, a, l, u = _[e + " "];
    if (u) return t ? 0 : u.slice(0);
    for (s = e, a = [], l = b.preFilter; s;) {
     for (o in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = U.exec(s)) && (n = i.shift(), r.push({
    value: n,
    type: i[0].replace(q, " ")
}), s = s.slice(n.length)), b.filter) !(i = $[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
    value: n,
    type: o,
    matches: i
}), s = s.slice(n.length));
     if (!n) break
}
    return t ? s.length : s ? oe.error(e) : _(e, a).slice(0)
}, f = oe.compile = function (e, t) {
    var n, m, v, y, _, i, r = [],
     o = [],
     s = A[e + " "];
    if (!s) {
     for (t || (t = p(e)), n = t.length; n--;) (s = Ee(t[n]))[C] ? r.push(s) : o.push(s);
     (s = A(e, (m = o, y = 0 < (v = r).length, _ = 0 < m.length, i = function (e, t, n, i, r) {
      var o, s, a, l = 0,
       u = "0",
       c = e && [],
       f = [],
       d = T,
       h = e || _ && b.find.TAG("*", r),
       p = S += null == d ? 1 : Math.random() || .1,
       g = h.length;
      for (r && (T = t === w || t || r) ; u !== g && null != (o = h[u]) ; u++) {
       if (_ && o) {
        for (s = 0, t || o.ownerDocument === w || (E(o), n = !x) ; a = m[s++];)
         if (a(o, t || w, n)) {
          i.push(o);
          break
}
        r && (S = p)
}
       y && ((o = !a && o) && l--, e && c.push(o))
}
      if (l += u, y && u !== l) {
       for (s = 0; a = v[s++];) a(c, f, t, n);
       if (e) {
        if (0 < l)
         for (; u--;) c[u] || f[u] || (f[u] = N.call(i));
        f = be(f)
}
       O.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && oe.uniqueSort(i)
}
      return r && (S = p, T = d), c
}, y ? ae(i) : i))).selector = e
}
    return s
}, g = oe.select = function (e, t, n, i) {
    var r, o, s, a, l, u = "function" == typeof e && e,
     c = !i && p(e = u.selector || e);
    if (n = n || [], 1 === c.length) {
     if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && x && b.relative[o[1].type]) {
      if (!(t = (b.find.ID(s.matches[0].replace(Z, ee), t) || [])[0])) return n;
      u && (t = t.parentNode), e = e.slice(o.shift().value.length)
}
     for (r = $.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]) ;)
      if ((l = b.find[a]) && (i = l(s.matches[0].replace(Z, ee), J.test(o[0].type) && ge(t.parentNode) || t))) {
       if (o.splice(r, 1), !(e = i.length && ve(o))) return O.apply(n, i), n;
       break
}
}
    return (u || f(e, c))(i, t, !x, n, !t || J.test(e) && ge(t.parentNode) || t), n
}, h.sortStable = C.split("").sort(D).join("") === C, h.detectDuplicates = !!u, E(), h.sortDetached = le(function (e) {
    return 1 & e.compareDocumentPosition(w.createElement("fieldset"))
}), le(function (e) {
    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
}) || ue("type|href|height|width", function (e, t, n) {
    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
}), h.attributes && le(function (e) {
    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
}) || ue("value", function (e, t, n) {
    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
}), le(function (e) {
    return null == e.getAttribute("disabled")
}) || ue(H, function (e, t, n) {
    var i;
    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
}), oe
}(w);
  C.find = b, C.expr = b.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = b.uniqueSort, C.text = b.getText, C.isXMLDoc = b.isXML, C.contains = b.contains, C.escapeSelector = b.escape;
  var T = function (e, t, n) {
    for (var i = [], r = void 0 !== n;
     (e = e[t]) && 9 !== e.nodeType;)
     if (1 === e.nodeType) {
      if (r && C(e).is(n)) break;
      i.push(e)
}
    return i
},
   E = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
    return n
},
   S = C.expr.match.needsContext;

  function A(e, t) {
   return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
}
  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
   I = /^.[^:#\[\.,]*$/;

  function N(e, n, i) {
   return C.isFunction(n) ? C.grep(e, function (e, t) {
    return !!n.call(e, t, e) !== i
}) : n.nodeType ? C.grep(e, function (e) {
    return e === n !== i
}) : "string" != typeof n ? C.grep(e, function (e) {
    return -1 < r.call(n, e) !== i
}) : I.test(n) ? C.filter(n, e, i) : (n = C.filter(n, e), C.grep(e, function (e) {
    return -1 < r.call(n, e) !== i && 1 === e.nodeType
}))
}
  C.filter = function (e, t, n) {
   var i = t[0];
   return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function (e) {
    return 1 === e.nodeType
}))
}, C.fn.extend({
    find: function (e) {
    var t, n, i = this.length,
     r = this;
    if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
     for (t = 0; t < i; t++)
      if (C.contains(r[t], this)) return !0
}));
    for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
    return 1 < i ? C.uniqueSort(n) : n
},
    filter: function (e) {
    return this.pushStack(N(this, e || [], !1))
},
    not: function (e) {
    return this.pushStack(N(this, e || [], !0))
},
    is: function (e) {
    return !!N(this, "string" == typeof e && S.test(e) ? C(e) : e || [], !1).length
}
});
  var k, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (C.fn.init = function (e, t, n) {
   var i, r;
   if (!e) return this;
   if (n = n || k, "string" == typeof e) {
    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : O.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (i[1]) {
     if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), D.test(i[1]) && C.isPlainObject(t))
      for (i in t) C.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
     return this
}
    return (r = x.getElementById(i[2])) && (this[0] = r, this.length = 1), this
}
   return e.nodeType ? (this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
}).prototype = C.fn, k = C(x);
  var j = /^(?:parents|prev(?:Until|All))/,
   L = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
};

  function H(e, t) {
   for (;
    (e = e[t]) && 1 !== e.nodeType;);
   return e
}
  C.fn.extend({
    has: function (e) {
    var t = C(e, this),
     n = t.length;
    return this.filter(function () {
     for (var e = 0; e < n; e++)
      if (C.contains(this, t[e])) return !0
})
},
    closest: function (e, t) {
    var n, i = 0,
     r = this.length,
     o = [],
     s = "string" != typeof e && C(e);
    if (!S.test(e))
     for (; i < r; i++)
      for (n = this[i]; n && n !== t; n = n.parentNode)
       if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
        o.push(n);
        break
}
    return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
},
    index: function (e) {
    return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
},
    add: function (e, t) {
    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
},
    addBack: function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
}
}), C.each({
    parent: function (e) {
    var t = e.parentNode;
    return t && 11 !== t.nodeType ? t : null
},
    parents: function (e) {
    return T(e, "parentNode")
},
    parentsUntil: function (e, t, n) {
    return T(e, "parentNode", n)
},
    next: function (e) {
    return H(e, "nextSibling")
},
    prev: function (e) {
    return H(e, "previousSibling")
},
    nextAll: function (e) {
    return T(e, "nextSibling")
},
    prevAll: function (e) {
    return T(e, "previousSibling")
},
    nextUntil: function (e, t, n) {
    return T(e, "nextSibling", n)
},
    prevUntil: function (e, t, n) {
    return T(e, "previousSibling", n)
},
    siblings: function (e) {
    return E((e.parentNode || {}).firstChild, e)
},
    children: function (e) {
    return E(e.firstChild)
},
    contents: function (e) {
    return A(e, "iframe") ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
}
}, function (i, r) {
   C.fn[i] = function (e, t) {
    var n = C.map(this, r, e);
    return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (L[i] || C.uniqueSort(n), j.test(i) && n.reverse()), this.pushStack(n)
}
});
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
   return e
}

  function F(e) {
   throw e
}

  function W(e, t, n, i) {
   var r;
   try {
    e && C.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && C.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
} catch (e) {
    n.apply(void 0, [e])
}
}
  C.Callbacks = function (i) {
   var e, n;
   i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(P) || [], function (e, t) {
    n[t] = !0
}), n) : C.extend({}, i);
   var r, t, o, s, a = [],
    l = [],
    u = -1,
    c = function () {
     for (s = s || i.once, o = r = !0; l.length; u = -1)
      for (t = l.shift() ; ++u < a.length;) !1 === a[u].apply(t[0], t[1]) && i.stopOnFalse && (u = a.length, t = !1);
     i.memory || (t = !1), r = !1, s && (a = t ? [] : "")
},
    f = {
    add: function () {
      return a && (t && !r && (u = a.length - 1, l.push(t)), function n(e) {
       C.each(e, function (e, t) {
        C.isFunction(t) ? i.unique && f.has(t) || a.push(t) : t && t.length && "string" !== C.type(t) && n(t)
})
}(arguments), t && !r && c()), this
},
    remove: function () {
      return C.each(arguments, function (e, t) {
       for (var n; -1 < (n = C.inArray(t, a, n)) ;) a.splice(n, 1), n <= u && u--
}), this
},
    has: function (e) {
      return e ? -1 < C.inArray(e, a) : 0 < a.length
},
    empty: function () {
      return a && (a = []), this
},
    disable: function () {
      return s = l = [], a = t = "", this
},
    disabled: function () {
      return !a
},
    lock: function () {
      return s = l = [], t || r || (a = t = ""), this
},
    locked: function () {
      return !!s
},
    fireWith: function (e, t) {
      return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || c()), this
},
    fire: function () {
      return f.fireWith(this, arguments), this
},
    fired: function () {
      return !!o
}
};
   return f
}, C.extend({
    Deferred: function (e) {
    var o = [
      ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
      ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
      ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
],
     r = "pending",
     s = {
    state: function () {
       return r
},
    always: function () {
       return a.done(arguments).fail(arguments), this
},
      catch: function (e) {
       return s.then(null, e)
},
    pipe: function () {
       var r = arguments;
       return C.Deferred(function (i) {
        C.each(o, function (e, t) {
         var n = C.isFunction(r[t[4]]) && r[t[4]];
         a[t[1]](function () {
          var e = n && n.apply(this, arguments);
          e && C.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
})
}), r = null
}).promise()
},
    then: function (t, n, i) {
       var l = 0;

       function u(r, o, s, a) {
        return function () {
         var n = this,
          i = arguments,
          e = function () {
           var e, t;
           if (!(r < l)) {
            if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
            t = e && ("object" == typeof e || "function" == typeof e) && e.then, C.isFunction(t) ? a ? t.call(e, u(l, o, R, a), u(l, o, F, a)) : (l++, t.call(e, u(l, o, R, a), u(l, o, F, a), u(l, o, R, o.notifyWith))) : (s !== R && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
}
},
          t = a ? e : function () {
           try {
            e()
} catch (e) {
            C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== F && (n = void 0, i = [e]), o.rejectWith(n, i))
}
};
         r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), w.setTimeout(t))
}
}
       return C.Deferred(function (e) {
        o[0][3].add(u(0, e, C.isFunction(i) ? i : R, e.notifyWith)), o[1][3].add(u(0, e, C.isFunction(t) ? t : R)), o[2][3].add(u(0, e, C.isFunction(n) ? n : F))
}).promise()
},
    promise: function (e) {
       return null != e ? C.extend(e, s) : s
}
},
     a = {};
    return C.each(o, function (e, t) {
     var n = t[2],
      i = t[5];
     s[t[1]] = n.add, i && n.add(function () {
      r = i
}, o[3 - e][2].disable, o[0][2].lock), n.add(t[3].fire), a[t[0]] = function () {
      return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
}, a[t[0] + "With"] = n.fireWith
}), s.promise(a), e && e.call(a, a), a
},
    when: function (e) {
    var n = arguments.length,
     t = n,
     i = Array(t),
     r = a.call(arguments),
     o = C.Deferred(),
     s = function (t) {
      return function (e) {
       i[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || o.resolveWith(i, r)
}
};
    if (n <= 1 && (W(e, o.done(s(t)).resolve, o.reject, !n), "pending" === o.state() || C.isFunction(r[t] && r[t].then))) return o.then();
    for (; t--;) W(r[t], s(t), o.reject);
    return o.promise()
}
});
  var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  C.Deferred.exceptionHook = function (e, t) {
   w.console && w.console.warn && e && M.test(e.name) && w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
}, C.readyException = function (e) {
   w.setTimeout(function () {
    throw e
})
};
  var q = C.Deferred();

  function B() {
   x.removeEventListener("DOMContentLoaded", B), w.removeEventListener("load", B), C.ready()
}
  C.fn.ready = function (e) {
   return q.then(e).catch(function (e) {
    C.readyException(e)
}), this
}, C.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
    (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || q.resolveWith(x, [C]))
}
}), C.ready.then = q.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? w.setTimeout(C.ready) : (x.addEventListener("DOMContentLoaded", B), w.addEventListener("load", B));
  var U = function (e, t, n, i, r, o, s) {
    var a = 0,
     l = e.length,
     u = null == n;
    if ("object" === C.type(n))
     for (a in r = !0, n) U(e, t, a, n[a], !0, o, s);
else if (void 0 !== i && (r = !0, C.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
      return u.call(C(e), n)
})), t))
     for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
},
   Q = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
};

  function K() {
   this.expando = C.expando + K.uid++
}
  K.uid = 1, K.prototype = {
    cache: function (e) {
    var t = e[this.expando];
    return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
    value: t,
    configurable: !0
}))), t
},
    set: function (e, t, n) {
    var i, r = this.cache(e);
    if ("string" == typeof t) r[C.camelCase(t)] = n;
else
     for (i in t) r[C.camelCase(i)] = t[i];
    return r
},
    get: function (e, t) {
    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][C.camelCase(t)]
},
    access: function (e, t, n) {
    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
},
    remove: function (e, t) {
    var n, i = e[this.expando];
    if (void 0 !== i) {
     if (void 0 !== t) {
      Array.isArray(t) ? t = t.map(C.camelCase) : t = (t = C.camelCase(t)) in i ? [t] : t.match(P) || [], n = t.length;
      for (; n--;) delete i[t[n]]
} (void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
}
},
    hasData: function (e) {
    var t = e[this.expando];
    return void 0 !== t && !C.isEmptyObject(t)
}
};
  var V = new K,
   $ = new K,
   Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
   X = /[A-Z]/g;

  function z(e, t, n) {
   var i, r;
   if (void 0 === n && 1 === e.nodeType)
    if (i = "data-" + t.replace(X, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
     try {
      n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Y.test(r) ? JSON.parse(r) : r)
} catch (e) { }
     $.set(e, t, n)
} else n = void 0;
   return n
}
  C.extend({
    hasData: function (e) {
    return $.hasData(e) || V.hasData(e)
},
    data: function (e, t, n) {
    return $.access(e, t, n)
},
    removeData: function (e, t) {
    $.remove(e, t)
},
    _data: function (e, t, n) {
    return V.access(e, t, n)
},
    _removeData: function (e, t) {
    V.remove(e, t)
}
}), C.fn.extend({
    data: function (n, e) {
    var t, i, r, o = this[0],
     s = o && o.attributes;
    if (void 0 === n) {
     if (this.length && (r = $.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
      for (t = s.length; t--;) s[t] && (0 === (i = s[t].name).indexOf("data-") && (i = C.camelCase(i.slice(5)), z(o, i, r[i])));
      V.set(o, "hasDataAttrs", !0)
}
     return r
}
    return "object" == typeof n ? this.each(function () {
     $.set(this, n)
}) : U(this, function (e) {
     var t;
     if (o && void 0 === e) {
      if (void 0 !== (t = $.get(o, n))) return t;
      if (void 0 !== (t = z(o, n))) return t
} else this.each(function () {
      $.set(this, n, e)
})
}, null, e, 1 < arguments.length, null, !0)
},
    removeData: function (e) {
    return this.each(function () {
     $.remove(this, e)
})
}
}), C.extend({
    queue: function (e, t, n) {
    var i;
    if (e) return t = (t || "fx") + "queue", i = V.get(e, t), n && (!i || Array.isArray(n) ? i = V.access(e, t, C.makeArray(n)) : i.push(n)), i || []
},
    dequeue: function (e, t) {
    t = t || "fx";
    var n = C.queue(e, t),
     i = n.length,
     r = n.shift(),
     o = C._queueHooks(e, t);
    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
     C.dequeue(e, t)
}, o)), !i && o && o.empty.fire()
},
    _queueHooks: function (e, t) {
    var n = t + "queueHooks";
    return V.get(e, n) || V.access(e, n, {
    empty: C.Callbacks("once memory").add(function () {
      V.remove(e, [t + "queue", n])
})
})
}
}), C.fn.extend({
    queue: function (t, n) {
    var e = 2;
    return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function () {
     var e = C.queue(this, t, n);
     C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
})
},
    dequeue: function (e) {
    return this.each(function () {
     C.dequeue(this, e)
})
},
    clearQueue: function (e) {
    return this.queue(e || "fx", [])
},
    promise: function (e, t) {
    var n, i = 1,
     r = C.Deferred(),
     o = this,
     s = this.length,
     a = function () {
      --i || r.resolveWith(o, [o])
};
    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = V.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
    return a(), r.promise(t)
}
});
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
   J = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
   Z = ["Top", "Right", "Bottom", "Left"],
   ee = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
},
   te = function (e, t, n, i) {
    var r, o, s = {};
    for (o in t) s[o] = e.style[o], e.style[o] = t[o];
    for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
    return r
};

  function ne(e, t, n, i) {
   var r, o = 1,
    s = 20,
    a = i ? function () {
     return i.cur()
} : function () {
     return C.css(e, t, "")
},
    l = a(),
    u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
    c = (C.cssNumber[t] || "px" !== u && +l) && J.exec(C.css(e, t));
   if (c && c[3] !== u)
    for (u = u || c[3], n = n || [], c = +l || 1; c /= o = o || ".5", C.style(e, t, c + u), o !== (o = a() / l) && 1 !== o && --s;);
   return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
}
  var ie = {};

  function re(e, t) {
   for (var n, i, r = [], o = 0, s = e.length; o < s; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = V.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ee(i) && (r[o] = (f = u = l = void 0, u = (a = i).ownerDocument, c = a.nodeName, (f = ie[c]) || (l = u.body.appendChild(u.createElement(c)), f = C.css(l, "display"), l.parentNode.removeChild(l), "none" === f && (f = "block"), ie[c] = f)))) : "none" !== n && (r[o] = "none", V.set(i, "display", n)));
   var a, l, u, c, f;
   for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
   return e
}
  C.fn.extend({
    show: function () {
    return re(this, !0)
},
    hide: function () {
    return re(this)
},
    toggle: function (e) {
    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
     ee(this) ? C(this).show() : C(this).hide()
})
}
});
  var oe = /^(?:checkbox|radio)$/i,
   se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
   ae = /^$|\/(?:java|ecma)script/i,
   le = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
};

  function ue(e, t) {
   var n;
   return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? C.merge([e], n) : n
}

  function ce(e, t) {
   for (var n = 0, i = e.length; n < i; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
}
  le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
  var fe, de, he = /<|&#?\w+;/;

  function pe(e, t, n, i, r) {
   for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
    if ((o = e[h]) || 0 === o)
     if ("object" === C.type(o)) C.merge(d, o.nodeType ? [o] : o);
else if (he.test(o)) {
    for (s = s || f.appendChild(t.createElement("div")), a = (se.exec(o) || ["", ""])[1].toLowerCase(), l = le[a] || le._default, s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
    C.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
} else d.push(t.createTextNode(o));
   for (f.textContent = "", h = 0; o = d[h++];)
    if (i && -1 < C.inArray(o, i)) r && r.push(o);
else if (u = C.contains(o.ownerDocument, o), s = ue(f.appendChild(o), "script"), u && ce(s), n)
    for (c = 0; o = s[c++];) ae.test(o.type || "") && n.push(o);
   return f
}
  fe = x.createDocumentFragment().appendChild(x.createElement("div")), (de = x.createElement("input")).setAttribute("type", "radio"), de.setAttribute("checked", "checked"), de.setAttribute("name", "t"), fe.appendChild(de), m.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue;
  var ge = x.documentElement,
   me = /^key/,
   ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
   ye = /^([^.]*)(?:\.(.+)|)/;

  function _e() {
   return !0
}

  function be() {
   return !1
}

  function Te() {
   try {
    return x.activeElement
} catch (e) { }
}

  function Ee(e, t, n, i, r, o) {
   var s, a;
   if ("object" == typeof t) {
    for (a in "string" != typeof n && (i = i || n, n = void 0), t) Ee(e, a, n, i, t[a], o);
    return e
}
   if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = be;
else if (!r) return e;
   return 1 === o && (s = r, (r = function (e) {
    return C().off(e), s.apply(this, arguments)
}).guid = s.guid || (s.guid = C.guid++)), e.each(function () {
    C.event.add(this, t, r, i, n)
})
}
  C.event = {
    global: {},
    add: function (t, e, n, i, r) {
    var o, s, a, l, u, c, f, d, h, p, g, m = V.get(t);
    if (m)
     for (n.handler && (n = (o = n).handler, r = o.selector), r && C.find.matchesSelector(ge, r), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
       return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
}), u = (e = (e || "").match(P) || [""]).length; u--;) h = g = (a = ye.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = C.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = C.event.special[h] || {}, c = C.extend({
    type: h,
    origType: g,
    data: i,
    handler: n,
    guid: n.guid,
    selector: r,
    needsContext: r && C.expr.match.needsContext.test(r),
    namespace: p.join(".")
}, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), C.event.global[h] = !0)
},
    remove: function (e, t, n, i, r) {
    var o, s, a, l, u, c, f, d, h, p, g, m = V.hasData(e) && V.get(e);
    if (m && (l = m.events)) {
     for (u = (t = (t || "").match(P) || [""]).length; u--;)
      if (h = g = (a = ye.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
       for (f = C.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
       s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || C.removeEvent(e, h, m.handle), delete l[h])
} else
       for (h in l) C.event.remove(e, h + t[u], n, i, !0);
     C.isEmptyObject(l) && V.remove(e, "handle events")
}
},
    dispatch: function (e) {
    var t, n, i, r, o, s, a = C.event.fix(e),
     l = new Array(arguments.length),
     u = (V.get(this, "events") || {})[a.type] || [],
     c = C.event.special[a.type] || {};
    for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
    if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
     for (s = C.event.handlers.call(this, a, u), t = 0;
      (r = s[t++]) && !a.isPropagationStopped() ;)
      for (a.currentTarget = r.elem, n = 0;
       (o = r.handlers[n++]) && !a.isImmediatePropagationStopped() ;) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
     return c.postDispatch && c.postDispatch.call(this, a), a.result
}
},
    handlers: function (e, t) {
    var n, i, r, o, s, a = [],
     l = t.delegateCount,
     u = e.target;
    if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
     for (; u !== this; u = u.parentNode || this)
      if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
       for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < C(r, this).index(u) : C.find(r, this, null, [u]).length), s[r] && o.push(i);
       o.length && a.push({
    elem: u,
    handlers: o
})
}
    return u = this, l < t.length && a.push({
    elem: u,
    handlers: t.slice(l)
}), a
},
    addProp: function (t, e) {
    Object.defineProperty(C.Event.prototype, t, {
    enumerable: !0,
    configurable: !0,
    get: C.isFunction(e) ? function () {
      if (this.originalEvent) return e(this.originalEvent)
} : function () {
      if (this.originalEvent) return this.originalEvent[t]
},
    set: function (e) {
      Object.defineProperty(this, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: e
})
}
})
},
    fix: function (e) {
    return e[C.expando] ? e : new C.Event(e)
},
    special: {
    load: {
    noBubble: !0
},
    focus: {
    trigger: function () {
      if (this !== Te() && this.focus) return this.focus(), !1
},
    delegateType: "focusin"
},
    blur: {
    trigger: function () {
      if (this === Te() && this.blur) return this.blur(), !1
},
    delegateType: "focusout"
},
    click: {
    trigger: function () {
      if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1
},
    _default: function (e) {
      return A(e.target, "a")
}
},
    beforeunload: {
    postDispatch: function (e) {
      void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
}
}
}
}, C.removeEvent = function (e, t, n) {
   e.removeEventListener && e.removeEventListener(t, n)
}, C.Event = function (e, t) {
   return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), void (this[C.expando] = !0)) : new C.Event(e, t)
}, C.Event.prototype = {
    constructor: C.Event,
    isDefaultPrevented: be,
    isPropagationStopped: be,
    isImmediatePropagationStopped: be,
    isSimulated: !1,
    preventDefault: function () {
    var e = this.originalEvent;
    this.isDefaultPrevented = _e, e && !this.isSimulated && e.preventDefault()
},
    stopPropagation: function () {
    var e = this.originalEvent;
    this.isPropagationStopped = _e, e && !this.isSimulated && e.stopPropagation()
},
    stopImmediatePropagation: function () {
    var e = this.originalEvent;
    this.isImmediatePropagationStopped = _e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
}
}, C.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
    var t = e.button;
    return null == e.which && me.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
}
}, C.event.addProp), C.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, function (e, r) {
   C.event.special[e] = {
    delegateType: r,
    bindType: r,
    handle: function (e) {
     var t, n = e.relatedTarget,
      i = e.handleObj;
     return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
}
}
}), C.fn.extend({
    on: function (e, t, n, i) {
    return Ee(this, e, t, n, i)
},
    one: function (e, t, n, i) {
    return Ee(this, e, t, n, i, 1)
},
    off: function (e, t, n) {
    var i, r;
    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
    if ("object" == typeof e) {
     for (r in e) this.off(r, t, e[r]);
     return this
}
    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = be), this.each(function () {
     C.event.remove(this, e, n, t)
})
}
});
  var we = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
   xe = /<script|<style|<link/i,
   Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
   Se = /^true\/(.*)/,
   Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function De(e, t) {
   return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(">tbody", e)[0] || e
}

  function Ie(e) {
   return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
}

  function Ne(e) {
   var t = Se.exec(e.type);
   return t ? e.type = t[1] : e.removeAttribute("type"), e
}

  function ke(e, t) {
   var n, i, r, o, s, a, l, u;
   if (1 === t.nodeType) {
    if (V.hasData(e) && (o = V.access(e), s = V.set(t, o), u = o.events))
     for (r in delete s.handle, s.events = {}, u)
      for (n = 0, i = u[r].length; n < i; n++) C.event.add(t, r, u[r][n]);
    $.hasData(e) && (a = $.access(e), l = C.extend({}, a), $.set(t, l))
}
}

  function Oe(n, i, r, o) {
   i = g.apply([], i);
   var e, t, s, a, l, u, c = 0,
    f = n.length,
    d = f - 1,
    h = i[0],
    p = C.isFunction(h);
   if (p || 1 < f && "string" == typeof h && !m.checkClone && Ce.test(h)) return n.each(function (e) {
    var t = n.eq(e);
    p && (i[0] = h.call(this, e, t.html())), Oe(t, i, r, o)
});
   if (f && (t = (e = pe(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
    for (a = (s = C.map(ue(e, "script"), Ie)).length; c < f; c++) l = e, c !== d && (l = C.clone(l, !0, !0), a && C.merge(s, ue(l, "script"))), r.call(n[c], l, c);
    if (a)
     for (u = s[s.length - 1].ownerDocument, C.map(s, Ne), c = 0; c < a; c++) l = s[c], ae.test(l.type || "") && !V.access(l, "globalEval") && C.contains(u, l) && (l.src ? C._evalUrl && C._evalUrl(l.src) : v(l.textContent.replace(Ae, ""), u))
}
   return n
}

  function je(e, t, n) {
   for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]) ; o++) n || 1 !== i.nodeType || C.cleanData(ue(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && ce(ue(i, "script")), i.parentNode.removeChild(i));
   return e
}
  C.extend({
    htmlPrefilter: function (e) {
    return e.replace(we, "<$1></$2>")
},
    clone: function (e, t, n) {
    var i, r, o, s, a, l, u, c = e.cloneNode(!0),
     f = C.contains(e.ownerDocument, e);
    if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
     for (s = ue(c), i = 0, r = (o = ue(e)).length; i < r; i++) a = o[i], l = s[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && oe.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
    if (t)
     if (n)
      for (o = o || ue(e), s = s || ue(c), i = 0, r = o.length; i < r; i++) ke(o[i], s[i]);
else ke(e, c);
    return 0 < (s = ue(c, "script")).length && ce(s, !f && ue(e, "script")), c
},
    cleanData: function (e) {
    for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]) ; o++)
     if (Q(n)) {
      if (t = n[V.expando]) {
       if (t.events)
        for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
       n[V.expando] = void 0
}
      n[$.expando] && (n[$.expando] = void 0)
}
}
}), C.fn.extend({
    detach: function (e) {
    return je(this, e, !0)
},
    remove: function (e) {
    return je(this, e)
},
    text: function (e) {
    return U(this, function (e) {
     return void 0 === e ? C.text(this) : this.empty().each(function () {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
})
}, null, e, arguments.length)
},
    append: function () {
    return Oe(this, arguments, function (e) {
     1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
})
},
    prepend: function () {
    return Oe(this, arguments, function (e) {
     if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
      var t = De(this, e);
      t.insertBefore(e, t.firstChild)
}
})
},
    before: function () {
    return Oe(this, arguments, function (e) {
     this.parentNode && this.parentNode.insertBefore(e, this)
})
},
    after: function () {
    return Oe(this, arguments, function (e) {
     this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
})
},
    empty: function () {
    for (var e, t = 0; null != (e = this[t]) ; t++) 1 === e.nodeType && (C.cleanData(ue(e, !1)), e.textContent = "");
    return this
},
    clone: function (e, t) {
    return e = null != e && e, t = null == t ? e : t, this.map(function () {
     return C.clone(this, e, t)
})
},
    html: function (e) {
    return U(this, function (e) {
     var t = this[0] || {},
      n = 0,
      i = this.length;
     if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
     if ("string" == typeof e && !xe.test(e) && !le[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
      e = C.htmlPrefilter(e);
      try {
       for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(ue(t, !1)), t.innerHTML = e);
       t = 0
} catch (e) { }
}
     t && this.empty().append(e)
}, null, e, arguments.length)
},
    replaceWith: function () {
    var n = [];
    return Oe(this, arguments, function (e) {
     var t = this.parentNode;
     C.inArray(this, n) < 0 && (C.cleanData(ue(this)), t && t.replaceChild(e, this))
}, n)
}
}), C.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function (e, s) {
   C.fn[e] = function (e) {
    for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), C(i[o])[s](t), l.apply(n, t.get());
    return this.pushStack(n)
}
});
  var Le = /^margin/,
   He = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
   Pe = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = w), t.getComputedStyle(e)
};

  function Re(e, t, n) {
   var i, r, o, s, a = e.style;
   return (n = n || Pe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), !m.pixelMarginRight() && He.test(s) && Le.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
}

  function Fe(e, t) {
   return {
    get: function () {
     return e() ? void delete this.get : (this.get = t).apply(this, arguments)
}
}
} ! function () {
   function e() {
    if (s) {
     s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", ge.appendChild(o);
     var e = w.getComputedStyle(s);
     t = "1%" !== e.top, r = "2px" === e.marginLeft, n = "4px" === e.width, s.style.marginRight = "50%", i = "4px" === e.marginRight, ge.removeChild(o), s = null
}
}
   var t, n, i, r, o = x.createElement("div"),
    s = x.createElement("div");
   s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), C.extend(m, {
    pixelPosition: function () {
     return e(), t
},
    boxSizingReliable: function () {
     return e(), n
},
    pixelMarginRight: function () {
     return e(), i
},
    reliableMarginLeft: function () {
     return e(), r
}
}))
}();
  var We = /^(none|table(?!-c[ea]).+)/,
   Me = /^--/,
   qe = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
},
   Be = {
    letterSpacing: "0",
    fontWeight: "400"
},
   Ue = ["Webkit", "Moz", "ms"],
   Qe = x.createElement("div").style;

  function Ke(e) {
   var t = C.cssProps[e];
   return t || (t = C.cssProps[e] = function (e) {
    if (e in Qe) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
     if ((e = Ue[n] + t) in Qe) return e
}(e) || e), t
}

  function Ve(e, t, n) {
   var i = J.exec(t);
   return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
}

  function $e(e, t, n, i, r) {
   var o, s = 0;
   for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += C.css(e, n + Z[o], !0, r)), i ? ("content" === n && (s -= C.css(e, "padding" + Z[o], !0, r)), "margin" !== n && (s -= C.css(e, "border" + Z[o] + "Width", !0, r))) : (s += C.css(e, "padding" + Z[o], !0, r), "padding" !== n && (s += C.css(e, "border" + Z[o] + "Width", !0, r)));
   return s
}

  function Ye(e, t, n) {
   var i, r = Pe(e),
    o = Re(e, t, r),
    s = "border-box" === C.css(e, "boxSizing", !1, r);
   return He.test(o) ? o : (i = s && (m.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + $e(e, t, n || (s ? "border" : "content"), i, r) + "px")
}

  function Xe(e, t, n, i, r) {
   return new Xe.prototype.init(e, t, n, i, r)
}
  C.extend({
    cssHooks: {
    opacity: {
    get: function (e, t) {
      if (t) {
       var n = Re(e, "opacity");
       return "" === n ? "1" : n
}
}
}
},
    cssNumber: {
    animationIterationCount: !0,
    columnCount: !0,
    fillOpacity: !0,
    flexGrow: !0,
    flexShrink: !0,
    fontWeight: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0
},
    cssProps: {
    float: "cssFloat"
},
    style: function (e, t, n, i) {
    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
     var r, o, s, a = C.camelCase(t),
      l = Me.test(t),
      u = e.style;
     return l || (t = Ke(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : ("string" === (o = typeof n) && (r = J.exec(n)) && r[1] && (n = ne(e, t, r), o = "number"), void (null != n && n == n && ("number" === o && (n += r && r[3] || (C.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))))
}
},
    css: function (e, t, n, i) {
    var r, o, s, a = C.camelCase(t);
    return Me.test(t) || (t = Ke(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Re(e, t, i)), "normal" === r && t in Be && (r = Be[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
}
}), C.each(["height", "width"], function (e, s) {
   C.cssHooks[s] = {
    get: function (e, t, n) {
     if (t) return !We.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ye(e, s, n) : te(e, qe, function () {
      return Ye(e, s, n)
})
},
    set: function (e, t, n) {
     var i, r = n && Pe(e),
      o = n && $e(e, s, n, "border-box" === C.css(e, "boxSizing", !1, r), r);
     return o && (i = J.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = C.css(e, s)), Ve(0, t, o)
}
}
}), C.cssHooks.marginLeft = Fe(m.reliableMarginLeft, function (e, t) {
   if (t) return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
    marginLeft: 0
}, function () {
    return e.getBoundingClientRect().left
})) + "px"
}), C.each({
    margin: "",
    padding: "",
    border: "Width"
}, function (r, o) {
   C.cssHooks[r + o] = {
    expand: function (e) {
     for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + Z[t] + o] = i[t] || i[t - 2] || i[0];
     return n
}
}, Le.test(r) || (C.cssHooks[r + o].set = Ve)
}), C.fn.extend({
    css: function (e, t) {
    return U(this, function (e, t, n) {
     var i, r, o = {},
      s = 0;
     if (Array.isArray(t)) {
      for (i = Pe(e), r = t.length; s < r; s++) o[t[s]] = C.css(e, t[s], !1, i);
      return o
}
     return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
}, e, t, 1 < arguments.length)
}
}), ((C.Tween = Xe).prototype = {
    constructor: Xe,
    init: function (e, t, n, i, r, o) {
    this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px")
},
    cur: function () {
    var e = Xe.propHooks[this.prop];
    return e && e.get ? e.get(this) : Xe.propHooks._default.get(this)
},
    run: function (e) {
    var t, n = Xe.propHooks[this.prop];
    return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Xe.propHooks._default.set(this), this
}
}).init.prototype = Xe.prototype, (Xe.propHooks = {
    _default: {
    get: function (e) {
     var t;
     return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
},
    set: function (e) {
     C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
}
}
}).scrollTop = Xe.propHooks.scrollLeft = {
    set: function (e) {
    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
}
}, C.easing = {
    linear: function (e) {
    return e
},
    swing: function (e) {
    return .5 - Math.cos(e * Math.PI) / 2
},
    _default: "swing"
}, C.fx = Xe.prototype.init, C.fx.step = {};
  var ze, Ge, Je, Ze, et = /^(?:toggle|show|hide)$/,
   tt = /queueHooks$/;

  function nt() {
   Ge && (!1 === x.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(nt) : w.setTimeout(nt, C.fx.interval), C.fx.tick())
}

  function it() {
   return w.setTimeout(function () {
    ze = void 0
}), ze = C.now()
}

  function rt(e, t) {
   var n, i = 0,
    r = {
    height: e
};
   for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Z[i])] = r["padding" + n] = e;
   return t && (r.opacity = r.width = e), r
}

  function ot(e, t, n) {
   for (var i, r = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, s = r.length; o < s; o++)
    if (i = r[o].call(n, t, e)) return i
}

  function st(o, e, t) {
   var n, s, i = 0,
    r = st.prefilters.length,
    a = C.Deferred().always(function () {
     delete l.elem
}),
    l = function () {
     if (s) return !1;
     for (var e = ze || it(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
     return a.notifyWith(o, [u, n, t]), n < 1 && r ? t : (r || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
},
    u = a.promise({
    elem: o,
    props: C.extend({}, e),
    opts: C.extend(!0, {
    specialEasing: {},
    easing: C.easing._default
}, t),
    originalProperties: e,
    originalOptions: t,
    startTime: ze || it(),
    duration: t.duration,
    tweens: [],
    createTween: function (e, t) {
      var n = C.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
      return u.tweens.push(n), n
},
    stop: function (e) {
      var t = 0,
       n = e ? u.tweens.length : 0;
      if (s) return this;
      for (s = !0; t < n; t++) u.tweens[t].run(1);
      return e ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]), this
}
}),
    c = u.props;
   for (function (e, t) {
     var n, i, r, o, s;
     for (n in e)
      if (r = t[i = C.camelCase(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
       for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
else t[i] = r
}(c, u.opts.specialEasing) ; i < r; i++)
    if (n = st.prefilters[i].call(u, o, c, u.opts)) return C.isFunction(n.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = C.proxy(n.stop, n)), n;
   return C.map(c, ot, u), C.isFunction(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, {
    elem: o,
    anim: u,
    queue: u.opts.queue
})), u
}
  C.Animation = C.extend(st, {
    tweeners: {
    "*": [function (e, t) {
     var n = this.createTween(e, t);
     return ne(n.elem, e, J.exec(t), n), n
}]
},
    tweener: function (e, t) {
    C.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(P);
    for (var n, i = 0, r = e.length; i < r; i++) n = e[i], st.tweeners[n] = st.tweeners[n] || [], st.tweeners[n].unshift(t)
},
    prefilters: [function (e, t, n) {
    var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t,
     d = this,
     h = {},
     p = e.style,
     g = e.nodeType && ee(e),
     m = V.get(e, "fxshow");
    for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
      s.unqueued || a()
}), s.unqueued++, d.always(function () {
      d.always(function () {
       s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
})
})), t)
     if (r = t[i], et.test(r)) {
      if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
       if ("show" !== r || !m || void 0 === m[i]) continue;
       g = !0
}
      h[i] = m && m[i] || C.style(e, i)
}
    if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
     for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = V.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (re([e], !0), u = e.style.display || u, c = C.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (d.done(function () {
       p.display = u
}), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
       p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
})), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = V.access(e, "fxshow", {
    display: u
}), o && (m.hidden = !g), g && re([e], !0), d.done(function () {
      for (i in g || re([e]), V.remove(e, "fxshow"), h) C.style(e, i, h[i])
})), l = ot(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
}],
    prefilter: function (e, t) {
    t ? st.prefilters.unshift(e) : st.prefilters.push(e)
}
}), C.speed = function (e, t, n) {
   var i = e && "object" == typeof e ? C.extend({}, e) : {
    complete: n || !n && t || C.isFunction(e) && e,
    duration: e,
    easing: n && t || t && !C.isFunction(t) && t
};
   return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
    C.isFunction(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
}, i
}, C.fn.extend({
    fadeTo: function (e, t, n, i) {
    return this.filter(ee).css("opacity", 0).show().end().animate({
    opacity: t
}, e, n, i)
},
    animate: function (t, e, n, i) {
    var r = C.isEmptyObject(t),
     o = C.speed(e, n, i),
     s = function () {
      var e = st(this, C.extend({}, t), o);
      (r || V.get(this, "finish")) && e.stop(!0)
};
    return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
},
    stop: function (r, e, o) {
    var s = function (e) {
     var t = e.stop;
     delete e.stop, t(o)
};
    return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
     var e = !0,
      t = null != r && r + "queueHooks",
      n = C.timers,
      i = V.get(this);
     if (t) i[t] && i[t].stop && s(i[t]);
else
      for (t in i) i[t] && i[t].stop && tt.test(t) && s(i[t]);
     for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
     !e && o || C.dequeue(this, r)
})
},
    finish: function (s) {
    return !1 !== s && (s = s || "fx"), this.each(function () {
     var e, t = V.get(this),
      n = t[s + "queue"],
      i = t[s + "queueHooks"],
      r = C.timers,
      o = n ? n.length : 0;
     for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
     for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
     delete t.finish
})
}
}), C.each(["toggle", "show", "hide"], function (e, i) {
   var r = C.fn[i];
   C.fn[i] = function (e, t, n) {
    return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(rt(i, !0), e, t, n)
}
}), C.each({
    slideDown: rt("show"),
    slideUp: rt("hide"),
    slideToggle: rt("toggle"),
    fadeIn: {
    opacity: "show"
},
    fadeOut: {
    opacity: "hide"
},
    fadeToggle: {
    opacity: "toggle"
}
}, function (e, i) {
   C.fn[e] = function (e, t, n) {
    return this.animate(i, e, t, n)
}
}), C.timers = [], C.fx.tick = function () {
   var e, t = 0,
    n = C.timers;
   for (ze = C.now() ; t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
   n.length || C.fx.stop(), ze = void 0
}, C.fx.timer = function (e) {
   C.timers.push(e), C.fx.start()
}, C.fx.interval = 13, C.fx.start = function () {
   Ge || (Ge = !0, nt())
}, C.fx.stop = function () {
   Ge = null
}, C.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
}, C.fn.delay = function (i, e) {
   return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
    var n = w.setTimeout(e, i);
    t.stop = function () {
     w.clearTimeout(n)
}
})
}, Je = x.createElement("input"), Ze = x.createElement("select").appendChild(x.createElement("option")), Je.type = "checkbox", m.checkOn = "" !== Je.value, m.optSelected = Ze.selected, (Je = x.createElement("input")).value = "t", Je.type = "radio", m.radioValue = "t" === Je.value;
  var at, lt = C.expr.attrHandle;
  C.fn.extend({
    attr: function (e, t) {
    return U(this, C.attr, e, t, 1 < arguments.length)
},
    removeAttr: function (e) {
    return this.each(function () {
     C.removeAttr(this, e)
})
}
}), C.extend({
    attr: function (e, t, n) {
    var i, r, o = e.nodeType;
    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
},
    attrHooks: {
    type: {
    set: function (e, t) {
      if (!m.radioValue && "radio" === t && A(e, "input")) {
       var n = e.value;
       return e.setAttribute("type", t), n && (e.value = n), t
}
}
}
},
    removeAttr: function (e, t) {
    var n, i = 0,
     r = t && t.match(P);
    if (r && 1 === e.nodeType)
     for (; n = r[i++];) e.removeAttribute(n)
}
}), at = {
    set: function (e, t, n) {
    return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
}
}, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
   var s = lt[t] || C.find.attr;
   lt[t] = function (e, t, n) {
    var i, r, o = t.toLowerCase();
    return n || (r = lt[o], lt[o] = i, i = null != s(e, t, n) ? o : null, lt[o] = r), i
}
});
  var ut = /^(?:input|select|textarea|button)$/i,
   ct = /^(?:a|area)$/i;

  function ft(e) {
   return (e.match(P) || []).join(" ")
}

  function dt(e) {
   return e.getAttribute && e.getAttribute("class") || ""
}
  C.fn.extend({
    prop: function (e, t) {
    return U(this, C.prop, e, t, 1 < arguments.length)
},
    removeProp: function (e) {
    return this.each(function () {
     delete this[C.propFix[e] || e]
})
}
}), C.extend({
    prop: function (e, t, n) {
    var i, r, o = e.nodeType;
    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
},
    propHooks: {
    tabIndex: {
    get: function (e) {
      var t = C.find.attr(e, "tabindex");
      return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
}
}
},
    propFix: {
    for: "htmlFor",
    class: "className"
}
}), m.optSelected || (C.propHooks.selected = {
    get: function (e) {
    var t = e.parentNode;
    return t && t.parentNode && t.parentNode.selectedIndex, null
},
    set: function (e) {
    var t = e.parentNode;
    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
}
}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
   C.propFix[this.toLowerCase()] = this
}), C.fn.extend({
    addClass: function (t) {
    var e, n, i, r, o, s, a, l = 0;
    if (C.isFunction(t)) return this.each(function (e) {
     C(this).addClass(t.call(this, e, dt(this)))
});
    if ("string" == typeof t && t)
     for (e = t.match(P) || []; n = this[l++];)
      if (r = dt(n), i = 1 === n.nodeType && " " + ft(r) + " ") {
       for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
       r !== (a = ft(i)) && n.setAttribute("class", a)
}
    return this
},
    removeClass: function (t) {
    var e, n, i, r, o, s, a, l = 0;
    if (C.isFunction(t)) return this.each(function (e) {
     C(this).removeClass(t.call(this, e, dt(this)))
});
    if (!arguments.length) return this.attr("class", "");
    if ("string" == typeof t && t)
     for (e = t.match(P) || []; n = this[l++];)
      if (r = dt(n), i = 1 === n.nodeType && " " + ft(r) + " ") {
       for (s = 0; o = e[s++];)
        for (; -1 < i.indexOf(" " + o + " ") ;) i = i.replace(" " + o + " ", " ");
       r !== (a = ft(i)) && n.setAttribute("class", a)
}
    return this
},
    toggleClass: function (r, t) {
    var o = typeof r;
    return "boolean" == typeof t && "string" === o ? t ? this.addClass(r) : this.removeClass(r) : C.isFunction(r) ? this.each(function (e) {
     C(this).toggleClass(r.call(this, e, dt(this), t), t)
}) : this.each(function () {
     var e, t, n, i;
     if ("string" === o)
      for (t = 0, n = C(this), i = r.match(P) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
else void 0 !== r && "boolean" !== o || ((e = dt(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : V.get(this, "__className__") || ""))
})
},
    hasClass: function (e) {
    var t, n, i = 0;
    for (t = " " + e + " "; n = this[i++];)
     if (1 === n.nodeType && -1 < (" " + ft(dt(n)) + " ").indexOf(t)) return !0;
    return !1
}
});
  var ht = /\r/g;
  C.fn.extend({
    val: function (n) {
    var i, e, r, t = this[0];
    return arguments.length ? (r = C.isFunction(n), this.each(function (e) {
     var t;
     1 === this.nodeType && (null == (t = r ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function (e) {
      return null == e ? "" : e + ""
})), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
})) : t ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(ht, "") : null == e ? "" : e : void 0
}
}), C.extend({
    valHooks: {
    option: {
    get: function (e) {
      var t = C.find.attr(e, "value");
      return null != t ? t : ft(C.text(e))
}
},
    select: {
    get: function (e) {
      var t, n, i, r = e.options,
       o = e.selectedIndex,
       s = "select-one" === e.type,
       a = s ? null : [],
       l = s ? o + 1 : r.length;
      for (i = o < 0 ? l : s ? o : 0; i < l; i++)
       if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
        if (t = C(n).val(), s) return t;
        a.push(t)
}
      return a
},
    set: function (e, t) {
      for (var n, i, r = e.options, o = C.makeArray(t), s = r.length; s--;) ((i = r[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
      return n || (e.selectedIndex = -1), o
}
}
}
}), C.each(["radio", "checkbox"], function () {
   C.valHooks[this] = {
    set: function (e, t) {
     if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
}
}, m.checkOn || (C.valHooks[this].get = function (e) {
    return null === e.getAttribute("value") ? "on" : e.value
})
});
  var pt = /^(?:focusinfocus|focusoutblur)$/;
  C.extend(C.event, {
    trigger: function (e, t, n, i) {
    var r, o, s, a, l, u, c, f = [n || x],
     d = p.call(e, "type") ? e.type : e,
     h = p.call(e, "namespace") ? e.namespace.split(".") : [];
    if (o = s = n = n || x, 3 !== n.nodeType && 8 !== n.nodeType && !pt.test(d + C.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, (e = e[C.expando] ? e : new C.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), c = C.event.special[d] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
     if (!i && !c.noBubble && !C.isWindow(n)) {
      for (a = c.delegateType || d, pt.test(a + d) || (o = o.parentNode) ; o; o = o.parentNode) f.push(o), s = o;
      s === (n.ownerDocument || x) && f.push(s.defaultView || s.parentWindow || w)
}
     for (r = 0;
      (o = f[r++]) && !e.isPropagationStopped() ;) e.type = 1 < r ? a : c.bindType || d, (u = (V.get(o, "events") || {})[e.type] && V.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && Q(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
     return e.type = d, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !Q(n) || l && C.isFunction(n[d]) && !C.isWindow(n) && ((s = n[l]) && (n[l] = null), n[C.event.triggered = d](), C.event.triggered = void 0, s && (n[l] = s)), e.result
}
},
    simulate: function (e, t, n) {
    var i = C.extend(new C.Event, n, {
    type: e,
    isSimulated: !0
});
    C.event.trigger(i, null, t)
}
}), C.fn.extend({
    trigger: function (e, t) {
    return this.each(function () {
     C.event.trigger(e, t, this)
})
},
    triggerHandler: function (e, t) {
    var n = this[0];
    if (n) return C.event.trigger(e, t, n, !0)
}
}), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
   C.fn[n] = function (e, t) {
    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
}
}), C.fn.extend({
    hover: function (e, t) {
    return this.mouseenter(e).mouseleave(t || e)
}
}), m.focusin = "onfocusin" in w, m.focusin || C.each({
    focus: "focusin",
    blur: "focusout"
}, function (n, i) {
   var r = function (e) {
    C.event.simulate(i, e.target, C.event.fix(e))
};
   C.event.special[i] = {
    setup: function () {
     var e = this.ownerDocument || this,
      t = V.access(e, i);
     t || e.addEventListener(n, r, !0), V.access(e, i, (t || 0) + 1)
},
    teardown: function () {
     var e = this.ownerDocument || this,
      t = V.access(e, i) - 1;
     t ? V.access(e, i, t) : (e.removeEventListener(n, r, !0), V.remove(e, i))
}
}
});
  var gt = w.location,
   mt = C.now(),
   vt = /\?/;
  C.parseXML = function (e) {
   var t;
   if (!e || "string" != typeof e) return null;
   try {
    t = (new w.DOMParser).parseFromString(e, "text/xml")
} catch (e) {
    t = void 0
}
   return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
};
  var yt = /\[\]$/,
   _t = /\r?\n/g,
   bt = /^(?:submit|button|image|reset|file)$/i,
   Tt = /^(?:input|select|textarea|keygen)/i;

  function Et(n, e, i, r) {
   var t;
   if (Array.isArray(e)) C.each(e, function (e, t) {
    i || yt.test(n) ? r(n, t) : Et(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
});
else if (i || "object" !== C.type(e)) r(n, e);
else
    for (t in e) Et(n + "[" + t + "]", e[t], i, r)
}
  C.param = function (e, t) {
   var n, i = [],
    r = function (e, t) {
     var n = C.isFunction(t) ? t() : t;
     i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
};
   if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
    r(this.name, this.value)
});
else
    for (n in e) Et(n, e[n], t, r);
   return i.join("&")
}, C.fn.extend({
    serialize: function () {
    return C.param(this.serializeArray())
},
    serializeArray: function () {
    return this.map(function () {
     var e = C.prop(this, "elements");
     return e ? C.makeArray(e) : this
}).filter(function () {
     var e = this.type;
     return this.name && !C(this).is(":disabled") && Tt.test(this.nodeName) && !bt.test(e) && (this.checked || !oe.test(e))
}).map(function (e, t) {
     var n = C(this).val();
     return null == n ? null : Array.isArray(n) ? C.map(n, function (e) {
      return {
    name: t.name,
    value: e.replace(_t, "\r\n")
}
}) : {
    name: t.name,
    value: n.replace(_t, "\r\n")
}
}).get()
}
});
  var wt = /%20/g,
   xt = /#.*$/,
   Ct = /([?&])_=[^&]*/,
   St = /^(.*?):[ \t]*([^\r\n]*)$/gm,
   At = /^(?:GET|HEAD)$/,
   Dt = /^\/\//,
   It = {},
   Nt = {},
   kt = "*/".concat("*"),
   Ot = x.createElement("a");

  function jt(o) {
   return function (e, t) {
    "string" != typeof e && (t = e, e = "*");
    var n, i = 0,
     r = e.toLowerCase().match(P) || [];
    if (C.isFunction(t))
     for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
}
}

  function Lt(t, r, o, s) {
   var a = {},
    l = t === Nt;

   function u(e) {
    var i;
    return a[e] = !0, C.each(t[e] || [], function (e, t) {
     var n = t(r, o, s);
     return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
}), i
}
   return u(r.dataTypes[0]) || !a["*"] && u("*")
}

  function Ht(e, t) {
   var n, i, r = C.ajaxSettings.flatOptions || {};
   for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
   return i && C.extend(!0, e, i), e
}
  Ot.href = gt.href, C.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
    url: gt.href,
    type: "GET",
    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(gt.protocol),
    global: !0,
    processData: !0,
    async: !0,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    accepts: {
     "*": kt,
    text: "text/plain",
    html: "text/html",
    xml: "application/xml, text/xml",
    json: "application/json, text/javascript"
},
    contents: {
    xml: /\bxml\b/,
    html: /\bhtml/,
    json: /\bjson\b/
},
    responseFields: {
    xml: "responseXML",
    text: "responseText",
    json: "responseJSON"
},
    converters: {
     "* text": String,
     "text html": !0,
     "text json": JSON.parse,
     "text xml": C.parseXML
},
    flatOptions: {
    url: !0,
    context: !0
}
},
    ajaxSetup: function (e, t) {
    return t ? Ht(Ht(e, C.ajaxSettings), t) : Ht(C.ajaxSettings, e)
},
    ajaxPrefilter: jt(It),
    ajaxTransport: jt(Nt),
    ajax: function (e, t) {
    "object" == typeof e && (t = e, e = void 0), t = t || {};
    var c, f, d, n, h, i, p, g, r, o, m = C.ajaxSetup({}, t),
     v = m.context || m,
     y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
     _ = C.Deferred(),
     b = C.Callbacks("once memory"),
     T = m.statusCode || {},
     s = {},
     a = {},
     l = "canceled",
     E = {
    readyState: 0,
    getResponseHeader: function (e) {
       var t;
       if (p) {
        if (!n)
         for (n = {}; t = St.exec(d) ;) n[t[1].toLowerCase()] = t[2];
        t = n[e.toLowerCase()]
}
       return null == t ? null : t
},
    getAllResponseHeaders: function () {
       return p ? d : null
},
    setRequestHeader: function (e, t) {
       return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
},
    overrideMimeType: function (e) {
       return null == p && (m.mimeType = e), this
},
    statusCode: function (e) {
       var t;
       if (e)
        if (p) E.always(e[E.status]);
else
         for (t in e) T[t] = [T[t], e[t]];
       return this
},
    abort: function (e) {
       var t = e || l;
       return c && c.abort(t), u(0, t), this
}
};
    if (_.promise(E), m.url = ((e || m.url || gt.href) + "").replace(Dt, gt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(P) || [""], null == m.crossDomain) {
     i = x.createElement("a");
     try {
      i.href = m.url, i.href = i.href, m.crossDomain = Ot.protocol + "//" + Ot.host != i.protocol + "//" + i.host
} catch (e) {
      m.crossDomain = !0
}
}
    if (m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Lt(It, m, t, E), p) return E;
    for (r in (g = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !At.test(m.type), f = m.url.replace(xt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(wt, "+")) : (o = m.url.slice(f.length), m.data && (f += (vt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Ct, "$1"), o = (vt.test(f) ? "&" : "?") + "_=" + mt++ + o), m.url = f + o), m.ifModified && (C.lastModified[f] && E.setRequestHeader("If-Modified-Since", C.lastModified[f]), C.etag[f] && E.setRequestHeader("If-None-Match", C.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && E.setRequestHeader("Content-Type", m.contentType), E.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : m.accepts["*"]), m.headers) E.setRequestHeader(r, m.headers[r]);
    if (m.beforeSend && (!1 === m.beforeSend.call(v, E, m) || p)) return E.abort();
    if (l = "abort", b.add(m.complete), E.done(m.success), E.fail(m.error), c = Lt(Nt, m, t, E)) {
     if (E.readyState = 1, g && y.trigger("ajaxSend", [E, m]), p) return E;
     m.async && 0 < m.timeout && (h = w.setTimeout(function () {
      E.abort("timeout")
}, m.timeout));
     try {
      p = !1, c.send(s, u)
} catch (e) {
      if (p) throw e;
      u(-1, e)
}
} else u(-1, "No Transport");

    function u(e, t, n, i) {
     var r, o, s, a, l, u = t;
     p || (p = !0, h && w.clearTimeout(h), c = void 0, d = i || "", E.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
      for (var i, r, o, s, a = e.contents, l = e.dataTypes;
       "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
       for (r in a)
        if (a[r] && a[r].test(i)) {
         l.unshift(r);
         break
}
      if (l[0] in n) o = l[0];
else {
       for (r in n) {
        if (!l[0] || e.converters[r + " " + l[0]]) {
         o = r;
         break
}
        s || (s = r)
}
       o = o || s
}
      if (o) return o !== l[0] && l.unshift(o), n[o]
}(m, E, n)), a = function (e, t, n, i) {
      var r, o, s, a, l, u = {},
       c = e.dataTypes.slice();
      if (c[1])
       for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
      for (o = c.shift() ; o;)
       if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
        if ("*" === o) o = l;
else if ("*" !== l && l !== o) {
       if (!(s = u[l + " " + o] || u["* " + o]))
        for (r in u)
         if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
          !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
          break
}
       if (!0 !== s)
        if (s && e.throws) t = s(t);
else try {
         t = s(t)
} catch (e) {
         return {
    state: "parsererror",
    error: s ? e : "No conversion from " + l + " to " + o
}
}
}
      return {
    state: "success",
    data: t
}
}(m, a, E, r), r ? (m.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (C.lastModified[f] = l), (l = E.getResponseHeader("etag")) && (C.etag[f] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, r = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || u) + "", r ? _.resolveWith(v, [o, u, E]) : _.rejectWith(v, [E, u, s]), E.statusCode(T), T = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [E, m, r ? o : s]), b.fireWith(v, [E, u]), g && (y.trigger("ajaxComplete", [E, m]), --C.active || C.event.trigger("ajaxStop")))
}
    return E
},
    getJSON: function (e, t, n) {
    return C.get(e, t, n, "json")
},
    getScript: function (e, t) {
    return C.get(e, void 0, t, "script")
}
}), C.each(["get", "post"], function (e, r) {
   C[r] = function (e, t, n, i) {
    return C.isFunction(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
    url: e,
    type: r,
    dataType: i,
    data: t,
    success: n
}, C.isPlainObject(e) && e))
}
}), C._evalUrl = function (e) {
   return C.ajax({
    url: e,
    type: "GET",
    dataType: "script",
    cache: !0,
    async: !1,
    global: !1,
    throws: !0
})
}, C.fn.extend({
    wrapAll: function (e) {
    var t;
    return this[0] && (C.isFunction(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
     for (var e = this; e.firstElementChild;) e = e.firstElementChild;
     return e
}).append(this)), this
},
    wrapInner: function (n) {
    return C.isFunction(n) ? this.each(function (e) {
     C(this).wrapInner(n.call(this, e))
}) : this.each(function () {
     var e = C(this),
      t = e.contents();
     t.length ? t.wrapAll(n) : e.append(n)
})
},
    wrap: function (t) {
    var n = C.isFunction(t);
    return this.each(function (e) {
     C(this).wrapAll(n ? t.call(this, e) : t)
})
},
    unwrap: function (e) {
    return this.parent(e).not("body").each(function () {
     C(this).replaceWith(this.childNodes)
}), this
}
}), C.expr.pseudos.hidden = function (e) {
   return !C.expr.pseudos.visible(e)
}, C.expr.pseudos.visible = function (e) {
   return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
}, C.ajaxSettings.xhr = function () {
   try {
    return new w.XMLHttpRequest
} catch (e) { }
};
  var Pt = {
    0: 200,
    1223: 204
},
   Rt = C.ajaxSettings.xhr();
  m.cors = !!Rt && "withCredentials" in Rt, m.ajax = Rt = !!Rt, C.ajaxTransport(function (r) {
   var o, s;
   if (m.cors || Rt && !r.crossDomain) return {
    send: function (e, t) {
     var n, i = r.xhr();
     if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
      for (n in r.xhrFields) i[n] = r.xhrFields[n];
     for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
     o = function (e) {
      return function () {
       o && (o = s = i.onload = i.onerror = i.onabort = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Pt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
    binary: i.response
} : {
    text: i.responseText
}, i.getAllResponseHeaders()))
}
}, i.onload = o(), s = i.onerror = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
      4 === i.readyState && w.setTimeout(function () {
       o && s()
})
}, o = o("abort");
     try {
      i.send(r.hasContent && r.data || null)
} catch (e) {
      if (o) throw e
}
},
    abort: function () {
     o && o()
}
}
}), C.ajaxPrefilter(function (e) {
   e.crossDomain && (e.contents.script = !1)
}), C.ajaxSetup({
    accepts: {
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
    contents: {
    script: /\b(?:java|ecma)script\b/
},
    converters: {
    "text script": function (e) {
     return C.globalEval(e), e
}
}
}), C.ajaxPrefilter("script", function (e) {
   void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
}), C.ajaxTransport("script", function (n) {
   var i, r;
   if (n.crossDomain) return {
    send: function (e, t) {
     i = C("<script>").prop({
    charset: n.scriptCharset,
    src: n.url
}).on("load error", r = function (e) {
      i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
}), x.head.appendChild(i[0])
},
    abort: function () {
     r && r()
}
}
});
  var Ft, Wt = [],
   Mt = /(=)\?(?=&|$)|\?\?/;
  C.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
    var e = Wt.pop() || C.expando + "_" + mt++;
    return this[e] = !0, e
}
}), C.ajaxPrefilter("json jsonp", function (e, t, n) {
   var i, r, o, s = !1 !== e.jsonp && (Mt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(e.data) && "data");
   if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Mt, "$1" + i) : !1 !== e.jsonp && (e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
    return o || C.error(i + " was not called"), o[0]
}, e.dataTypes[0] = "json", r = w[i], w[i] = function () {
    o = arguments
}, n.always(function () {
    void 0 === r ? C(w).removeProp(i) : w[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Wt.push(i)), o && C.isFunction(r) && r(o[0]), o = r = void 0
}), "script"
}), m.createHTMLDocument = ((Ft = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ft.childNodes.length), C.parseHTML = function (e, t, n) {
   return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(i)) : t = x), o = !n && [], (r = D.exec(e)) ? [t.createElement(r[1])] : (r = pe([e], t, o), o && o.length && C(o).remove(), C.merge([], r.childNodes)));
   var i, r, o
}, C.fn.load = function (e, t, n) {
   var i, r, o, s = this,
    a = e.indexOf(" ");
   return -1 < a && (i = ft(e.slice(a)), e = e.slice(0, a)), C.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && C.ajax({
    url: e,
    type: r || "GET",
    dataType: "html",
    data: t
}).done(function (e) {
    o = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
}).always(n && function (e, t) {
    s.each(function () {
     n.apply(this, o || [e.responseText, t, e])
})
}), this
}, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
   C.fn[t] = function (e) {
    return this.on(t, e)
}
}), C.expr.pseudos.animated = function (t) {
   return C.grep(C.timers, function (e) {
    return t === e.elem
}).length
}, C.offset = {
    setOffset: function (e, t, n) {
    var i, r, o, s, a, l, u = C.css(e, "position"),
     c = C(e),
     f = {};
    "static" === u && (e.style.position = "relative"), a = c.offset(), o = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), C.isFunction(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
}
}, C.fn.extend({
    offset: function (t) {
    if (arguments.length) return void 0 === t ? this : this.each(function (e) {
     C.offset.setOffset(this, t, e)
});
    var e, n, i, r, o = this[0];
    return o ? o.getClientRects().length ? (i = o.getBoundingClientRect(), n = (e = o.ownerDocument).documentElement, r = e.defaultView, {
    top: i.top + r.pageYOffset - n.clientTop,
    left: i.left + r.pageXOffset - n.clientLeft
}) : {
    top: 0,
    left: 0
} : void 0
},
    position: function () {
    if (this[0]) {
     var e, t, n = this[0],
      i = {
    top: 0,
    left: 0
};
     return "fixed" === C.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), A(e[0], "html") || (i = e.offset()), i = {
    top: i.top + C.css(e[0], "borderTopWidth", !0),
    left: i.left + C.css(e[0], "borderLeftWidth", !0)
}), {
    top: t.top - i.top - C.css(n, "marginTop", !0),
    left: t.left - i.left - C.css(n, "marginLeft", !0)
}
}
},
    offsetParent: function () {
    return this.map(function () {
     for (var e = this.offsetParent; e && "static" === C.css(e, "position") ;) e = e.offsetParent;
     return e || ge
})
}
}), C.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
}, function (t, r) {
   var o = "pageYOffset" === r;
   C.fn[t] = function (e) {
    return U(this, function (e, t, n) {
     var i;
     return C.isWindow(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[r] : e[t] : void (i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n)
}, t, e, arguments.length)
}
}), C.each(["top", "left"], function (e, n) {
   C.cssHooks[n] = Fe(m.pixelPosition, function (e, t) {
    if (t) return t = Re(e, n), He.test(t) ? C(e).position()[n] + "px" : t
})
}), C.each({
    Height: "height",
    Width: "width"
}, function (s, a) {
   C.each({
    padding: "inner" + s,
    content: a,
    "": "outer" + s
}, function (i, o) {
    C.fn[o] = function (e, t) {
     var n = arguments.length && (i || "boolean" != typeof e),
      r = i || (!0 === e || !0 === t ? "margin" : "border");
     return U(this, function (e, t, n) {
      var i;
      return C.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
}, a, n ? e : void 0, n)
}
})
}), C.fn.extend({
    bind: function (e, t, n) {
    return this.on(e, null, t, n)
},
    unbind: function (e, t) {
    return this.off(e, null, t)
},
    delegate: function (e, t, n, i) {
    return this.on(t, e, n, i)
},
    undelegate: function (e, t, n) {
    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
}
}), C.holdReady = function (e) {
   e ? C.readyWait++ : C.ready(!0)
}, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = A, "function" == typeof define && define.amd && define("jquery", [], function () {
   return C
});
  var qt = w.jQuery,
   Bt = w.$;
  return C.noConflict = function (e) {
   return w.$ === C && (w.$ = Bt), e && w.jQuery === C && (w.jQuery = qt), C
}, e || (w.jQuery = w.$ = C), C
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
! function (e) {
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(),
function () {
    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
     t = function () {
         function i(e, t) {
             for (var n = 0; n < t.length; n++) {
                 var i = t[n];
                 i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
             }
         }
         return function (e, t, n) {
             return t && i(e.prototype, t), n && i(e, n), e
         }
     }();

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r, e, o, n, i, a, u, c, f, d, h, p, g, m, v, y, _, b, T, E, w, x, C, S, A, D, I, N, k, O, j, L, H, P, R, F, W, M, q, B, U, Q, K, V, $, Y, X, z, G, J, Z, ee, te, ne, ie, re, oe, se, ae, le, ue, ce, fe, de, he, pe, ge, me, ve, ye, _e, be, Te, Ee, we, xe, Ce, Se, Ae, De, Ie, Ne, ke, Oe, je, Le, He, Pe, Re, Fe, We, Me, qe, Be, Ue, Qe, Ke, Ve, $e, Ye, Xe, ze, Ge, Je, Ze, et, tt, nt, it, rt, ot, st, at, lt, ut, ct, ft, dt, ht, pt, gt, mt, vt, yt, _t, bt, Tt, Et, wt, xt, Ct, St, At, Dt, It, Nt, kt, Ot, jt, Lt, Ht, Pt, Rt, Ft, Wt, Mt, qt, Bt, Ut, Qt, Kt, Vt, $t, Yt, Xt, zt, Gt, Jt, Zt, en, tn, nn = function (i) {
        var t = !1,
         n = {
             WebkitTransition: "webkitTransitionEnd",
             MozTransition: "transitionend",
             OTransition: "oTransitionEnd otransitionend",
             transition: "transitionend"
         };

        function e(e) {
            var t = this,
             n = !1;
            return i(this).one(r.TRANSITION_END, function () {
                n = !0
            }), setTimeout(function () {
                n || r.triggerTransitionEnd(t)
            }, e), this
        }
        var r = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                for (; e += ~~(1e6 * Math.random()), document.getElementById(e) ;);
                return e
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                return t || (t = e.getAttribute("href") || "", t = /^#[a-z]/i.test(t) ? t : null), t
            },
            reflow: function (e) {
                return e.offsetHeight
            },
            triggerTransitionEnd: function (e) {
                i(e).trigger(t.end)
            },
            supportsTransitionEnd: function () {
                return Boolean(t)
            },
            typeCheckConfig: function (e, t, n) {
                for (var i in n)
                    if (n.hasOwnProperty(i)) {
                        var r = n[i],
                         o = t[i],
                         s = o && ((l = o)[0] || l).nodeType ? "element" : (a = o, {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                        if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                    }
                var a, l
            }
        };
        return t = function () {
            if (window.QUnit) return !1;
            var e = document.createElement("bootstrap");
            for (var t in n)
                if (void 0 !== e.style[t]) return {
                    end: n[t]
                };
            return !1
        }(), i.fn.emulateTransitionEnd = e, r.supportsTransitionEnd() && (i.event.special[r.TRANSITION_END] = {
            bindType: t.end,
            delegateType: t.end,
            handle: function (e) {
                if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        }), r
    }(jQuery),
     rn = (r = jQuery, e = "alert", n = "." + (o = "bs.alert"), i = r.fn[e], a = {
         CLOSE: "close" + n,
         CLOSED: "closed" + n,
         CLICK_DATA_API: "click" + n + ".data-api"
     }, u = "alert", c = "fade", f = "show", d = function () {
         function i(e) {
             l(this, i), this._element = e
         }
         return i.prototype.close = function (e) {
             e = e || this._element;
             var t = this._getRootElement(e);
             this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
         }, i.prototype.dispose = function () {
             r.removeData(this._element, o), this._element = null
         }, i.prototype._getRootElement = function (e) {
             var t = nn.getSelectorFromElement(e),
              n = !1;
             return t && (n = r(t)[0]), n || (n = r(e).closest("." + u)[0]), n
         }, i.prototype._triggerCloseEvent = function (e) {
             var t = r.Event(a.CLOSE);
             return r(e).trigger(t), t
         }, i.prototype._removeElement = function (t) {
             var n = this;
             r(t).removeClass(f), nn.supportsTransitionEnd() && r(t).hasClass(c) ? r(t).one(nn.TRANSITION_END, function (e) {
                 return n._destroyElement(t, e)
             }).emulateTransitionEnd(150) : this._destroyElement(t)
         }, i.prototype._destroyElement = function (e) {
             r(e).detach().trigger(a.CLOSED).remove()
         }, i._jQueryInterface = function (n) {
             return this.each(function () {
                 var e = r(this),
                  t = e.data(o);
                 t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this)
             })
         }, i._handleDismiss = function (t) {
             return function (e) {
                 e && e.preventDefault(), t.close(this)
             }
         }, t(i, null, [{
             key: "VERSION",
             get: function () {
                 return "4.0.0-alpha.6"
             }
         }]), i
     }(), r(document).on(a.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), r.fn[e] = d._jQueryInterface, r.fn[e].Constructor = d, r.fn[e].noConflict = function () {
         return r.fn[e] = i, d._jQueryInterface
     }, h = jQuery, p = "button", m = "." + (g = "bs.button"), v = ".data-api", y = h.fn[p], _ = "active", b = "btn", E = '[data-toggle^="button"]', w = '[data-toggle="buttons"]', x = "input", C = ".active", S = ".btn", A = {
         CLICK_DATA_API: "click" + m + v,
         FOCUS_BLUR_DATA_API: (T = "focus") + m + v + " blur" + m + v
     }, D = function () {
         function n(e) {
             l(this, n), this._element = e
         }
         return n.prototype.toggle = function () {
             var e = !0,
              t = h(this._element).closest(w)[0];
             if (t) {
                 var n = h(this._element).find(x)[0];
                 if (n) {
                     if ("radio" === n.type)
                         if (n.checked && h(this._element).hasClass(_)) e = !1;
                         else {
                             var i = h(t).find(C)[0];
                             i && h(i).removeClass(_)
                         }
                     e && (n.checked = !h(this._element).hasClass(_), h(n).trigger("change")), n.focus()
                 }
             }
             this._element.setAttribute("aria-pressed", !h(this._element).hasClass(_)), e && h(this._element).toggleClass(_)
         }, n.prototype.dispose = function () {
             h.removeData(this._element, g), this._element = null
         }, n._jQueryInterface = function (t) {
             return this.each(function () {
                 var e = h(this).data(g);
                 e || (e = new n(this), h(this).data(g, e)), "toggle" === t && e[t]()
             })
         }, t(n, null, [{
             key: "VERSION",
             get: function () {
                 return "4.0.0-alpha.6"
             }
         }]), n
     }(), h(document).on(A.CLICK_DATA_API, E, function (e) {
         e.preventDefault();
         var t = e.target;
         h(t).hasClass(b) || (t = h(t).closest(S)), D._jQueryInterface.call(h(t), "toggle")
     }).on(A.FOCUS_BLUR_DATA_API, E, function (e) {
         var t = h(e.target).closest(S)[0];
         h(t).toggleClass(T, /^focus(in)?$/.test(e.type))
     }), h.fn[p] = D._jQueryInterface, h.fn[p].Constructor = D, h.fn[p].noConflict = function () {
         return h.fn[p] = y, D._jQueryInterface
     }, I = jQuery, N = "carousel", O = "." + (k = "bs.carousel"), j = ".data-api", L = I.fn[N], H = {
         interval: 5e3,
         keyboard: !0,
         slide: !1,
         pause: "hover",
         wrap: !0
     }, P = {
         interval: "(number|boolean)",
         keyboard: "boolean",
         slide: "(boolean|string)",
         pause: "(string|boolean)",
         wrap: "boolean"
     }, R = {
         NEXT: "next",
         PREV: "prev",
         LEFT: "left",
         RIGHT: "right"
     }, F = {
         SLIDE: "slide" + O,
         SLID: "slid" + O,
         KEYDOWN: "keydown" + O,
         MOUSEENTER: "mouseenter" + O,
         MOUSELEAVE: "mouseleave" + O,
         LOAD_DATA_API: "load" + O + j,
         CLICK_DATA_API: "click" + O + j
     }, W = "carousel", M = "active", q = "slide", B = "carousel-item-right", U = "carousel-item-left", Q = "carousel-item-next", K = "carousel-item-prev", V = {
         ACTIVE: ".active",
         ACTIVE_ITEM: ".active.carousel-item",
         ITEM: ".carousel-item",
         NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
         INDICATORS: ".carousel-indicators",
         DATA_SLIDE: "[data-slide], [data-slide-to]",
         DATA_RIDE: '[data-ride="carousel"]'
     }, $ = function () {
         function o(e, t) {
             l(this, o), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(t), this._element = I(e)[0], this._indicatorsElement = I(this._element).find(V.INDICATORS)[0], this._addEventListeners()
         }
         return o.prototype.next = function () {
             if (this._isSliding) throw new Error("Carousel is sliding");
             this._slide(R.NEXT)
         }, o.prototype.nextWhenVisible = function () {
             document.hidden || this.next()
         }, o.prototype.prev = function () {
             if (this._isSliding) throw new Error("Carousel is sliding");
             this._slide(R.PREVIOUS)
         }, o.prototype.pause = function (e) {
             e || (this._isPaused = !0), I(this._element).find(V.NEXT_PREV)[0] && nn.supportsTransitionEnd() && (nn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
         }, o.prototype.cycle = function (e) {
             e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
         }, o.prototype.to = function (e) {
             var t = this;
             this._activeElement = I(this._element).find(V.ACTIVE_ITEM)[0];
             var n = this._getItemIndex(this._activeElement);
             if (!(e > this._items.length - 1 || e < 0))
                 if (this._isSliding) I(this._element).one(F.SLID, function () {
                     return t.to(e)
                 });
                 else {
                     if (n === e) return this.pause(), void this.cycle();
                     var i = n < e ? R.NEXT : R.PREVIOUS;
                     this._slide(i, this._items[e])
                 }
         }, o.prototype.dispose = function () {
             I(this._element).off(O), I.removeData(this._element, k), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
         }, o.prototype._getConfig = function (e) {
             return e = I.extend({}, H, e), nn.typeCheckConfig(N, e, P), e
         }, o.prototype._addEventListeners = function () {
             var t = this;
             this._config.keyboard && I(this._element).on(F.KEYDOWN, function (e) {
                 return t._keydown(e)
             }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || I(this._element).on(F.MOUSEENTER, function (e) {
                 return t.pause(e)
             }).on(F.MOUSELEAVE, function (e) {
                 return t.cycle(e)
             })
         }, o.prototype._keydown = function (e) {
             if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                 case 37:
                     e.preventDefault(), this.prev();
                     break;
                 case 39:
                     e.preventDefault(), this.next();
                     break;
                 default:
                     return
             }
         }, o.prototype._getItemIndex = function (e) {
             return this._items = I.makeArray(I(e).parent().find(V.ITEM)), this._items.indexOf(e)
         }, o.prototype._getItemByDirection = function (e, t) {
             var n = e === R.NEXT,
              i = e === R.PREVIOUS,
              r = this._getItemIndex(t),
              o = this._items.length - 1;
             if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
             var s = (r + (e === R.PREVIOUS ? -1 : 1)) % this._items.length;
             return -1 === s ? this._items[this._items.length - 1] : this._items[s]
         }, o.prototype._triggerSlideEvent = function (e, t) {
             var n = I.Event(F.SLIDE, {
                 relatedTarget: e,
                 direction: t
             });
             return I(this._element).trigger(n), n
         }, o.prototype._setActiveIndicatorElement = function (e) {
             if (this._indicatorsElement) {
                 I(this._indicatorsElement).find(V.ACTIVE).removeClass(M);
                 var t = this._indicatorsElement.children[this._getItemIndex(e)];
                 t && I(t).addClass(M)
             }
         }, o.prototype._slide = function (e, t) {
             var n = this,
              i = I(this._element).find(V.ACTIVE_ITEM)[0],
              r = t || i && this._getItemByDirection(e, i),
              o = Boolean(this._interval),
              s = void 0,
              a = void 0,
              l = void 0;
             if (e === R.NEXT ? (s = U, a = Q, l = R.LEFT) : (s = B, a = K, l = R.RIGHT), r && I(r).hasClass(M)) this._isSliding = !1;
             else if (!this._triggerSlideEvent(r, l).isDefaultPrevented() && i && r) {
                 this._isSliding = !0, o && this.pause(), this._setActiveIndicatorElement(r);
                 var u = I.Event(F.SLID, {
                     relatedTarget: r,
                     direction: l
                 });
                 nn.supportsTransitionEnd() && I(this._element).hasClass(q) ? (I(r).addClass(a), nn.reflow(r), I(i).addClass(s), I(r).addClass(s), I(i).one(nn.TRANSITION_END, function () {
                     I(r).removeClass(s + " " + a).addClass(M), I(i).removeClass(M + " " + a + " " + s), n._isSliding = !1, setTimeout(function () {
                         return I(n._element).trigger(u)
                     }, 0)
                 }).emulateTransitionEnd(600)) : (I(i).removeClass(M), I(r).addClass(M), this._isSliding = !1, I(this._element).trigger(u)), o && this.cycle()
             }
         }, o._jQueryInterface = function (i) {
             return this.each(function () {
                 var e = I(this).data(k),
                  t = I.extend({}, H, I(this).data());
                 "object" === (void 0 === i ? "undefined" : s(i)) && I.extend(t, i);
                 var n = "string" == typeof i ? i : t.slide;
                 if (e || (e = new o(this, t), I(this).data(k, e)), "number" == typeof i) e.to(i);
                 else if ("string" == typeof n) {
                     if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                     e[n]()
                 } else t.interval && (e.pause(), e.cycle())
             })
         }, o._dataApiClickHandler = function (e) {
             var t = nn.getSelectorFromElement(this);
             if (t) {
                 var n = I(t)[0];
                 if (n && I(n).hasClass(W)) {
                     var i = I.extend({}, I(n).data(), I(this).data()),
                      r = this.getAttribute("data-slide-to");
                     r && (i.interval = !1), o._jQueryInterface.call(I(n), i), r && I(n).data(k).to(r), e.preventDefault()
                 }
             }
         }, t(o, null, [{
             key: "VERSION",
             get: function () {
                 return "4.0.0-alpha.6"
             }
         }, {
             key: "Default",
             get: function () {
                 return H
             }
         }]), o
     }(), I(document).on(F.CLICK_DATA_API, V.DATA_SLIDE, $._dataApiClickHandler), I(window).on(F.LOAD_DATA_API, function () {
         I(V.DATA_RIDE).each(function () {
             var e = I(this);
             $._jQueryInterface.call(e, e.data())
         })
     }), I.fn[N] = $._jQueryInterface, I.fn[N].Constructor = $, I.fn[N].noConflict = function () {
         return I.fn[N] = L, $._jQueryInterface
     }, Y = jQuery, X = "collapse", G = "." + (z = "bs.collapse"), J = Y.fn[X], Z = {
         toggle: !0,
         parent: ""
     }, ee = {
         toggle: "boolean",
         parent: "string"
     }, te = {
         SHOW: "show" + G,
         SHOWN: "shown" + G,
         HIDE: "hide" + G,
         HIDDEN: "hidden" + G,
         CLICK_DATA_API: "click" + G + ".data-api"
     }, ne = "show", ie = "collapse", re = "collapsing", oe = "collapsed", se = "width", ae = "height", le = ".card > .show, .card > .collapsing", ue = '[data-toggle="collapse"]', ce = function () {
         function a(e, t) {
             l(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = Y.makeArray(Y('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
         }
         return a.prototype.toggle = function () {
             Y(this._element).hasClass(ne) ? this.hide() : this.show()
         }, a.prototype.show = function () {
             var e = this;
             if (this._isTransitioning) throw new Error("Collapse is transitioning");
             if (!Y(this._element).hasClass(ne)) {
                 var t = void 0,
                  n = void 0;
                 if (this._parent && ((t = Y.makeArray(Y(this._parent).find(le))).length || (t = null)), !(t && (n = Y(t).data(z)) && n._isTransitioning)) {
                     var i = Y.Event(te.SHOW);
                     if (Y(this._element).trigger(i), !i.isDefaultPrevented()) {
                         t && (a._jQueryInterface.call(Y(t), "hide"), n || Y(t).data(z, null));
                         var r = this._getDimension();
                         Y(this._element).removeClass(ie).addClass(re), this._element.style[r] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && Y(this._triggerArray).removeClass(oe).attr("aria-expanded", !0), this.setTransitioning(!0);
                         var o = function () {
                             Y(e._element).removeClass(re).addClass(ie).addClass(ne), e._element.style[r] = "", e.setTransitioning(!1), Y(e._element).trigger(te.SHOWN)
                         };
                         if (nn.supportsTransitionEnd()) {
                             var s = "scroll" + (r[0].toUpperCase() + r.slice(1));
                             Y(this._element).one(nn.TRANSITION_END, o).emulateTransitionEnd(600), this._element.style[r] = this._element[s] + "px"
                         } else o()
                     }
                 }
             }
         }, a.prototype.hide = function () {
             var e = this;
             if (this._isTransitioning) throw new Error("Collapse is transitioning");
             if (Y(this._element).hasClass(ne)) {
                 var t = Y.Event(te.HIDE);
                 if (Y(this._element).trigger(t), !t.isDefaultPrevented()) {
                     var n = this._getDimension(),
                      i = n === se ? "offsetWidth" : "offsetHeight";
                     this._element.style[n] = this._element[i] + "px", nn.reflow(this._element), Y(this._element).addClass(re).removeClass(ie).removeClass(ne), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && Y(this._triggerArray).addClass(oe).attr("aria-expanded", !1), this.setTransitioning(!0);
                     var r = function () {
                         e.setTransitioning(!1), Y(e._element).removeClass(re).addClass(ie).trigger(te.HIDDEN)
                     };
                     this._element.style[n] = "", nn.supportsTransitionEnd() ? Y(this._element).one(nn.TRANSITION_END, r).emulateTransitionEnd(600) : r()
                 }
             }
         }, a.prototype.setTransitioning = function (e) {
             this._isTransitioning = e
         }, a.prototype.dispose = function () {
             Y.removeData(this._element, z), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
         }, a.prototype._getConfig = function (e) {
             return (e = Y.extend({}, Z, e)).toggle = Boolean(e.toggle), nn.typeCheckConfig(X, e, ee), e
         }, a.prototype._getDimension = function () {
             return Y(this._element).hasClass(se) ? se : ae
         }, a.prototype._getParent = function () {
             var n = this,
              e = Y(this._config.parent)[0],
              t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
             return Y(e).find(t).each(function (e, t) {
                 n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
             }), e
         }, a.prototype._addAriaAndCollapsedClass = function (e, t) {
             if (e) {
                 var n = Y(e).hasClass(ne);
                 e.setAttribute("aria-expanded", n), t.length && Y(t).toggleClass(oe, !n).attr("aria-expanded", n)
             }
         }, a._getTargetFromElement = function (e) {
             var t = nn.getSelectorFromElement(e);
             return t ? Y(t)[0] : null
         }, a._jQueryInterface = function (i) {
             return this.each(function () {
                 var e = Y(this),
                  t = e.data(z),
                  n = Y.extend({}, Z, e.data(), "object" === (void 0 === i ? "undefined" : s(i)) && i);
                 if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(z, t)), "string" == typeof i) {
                     if (void 0 === t[i]) throw new Error('No method named "' + i + '"');
                     t[i]()
                 }
             })
         }, t(a, null, [{
             key: "VERSION",
             get: function () {
                 return "4.0.0-alpha.6"
             }
         }, {
             key: "Default",
             get: function () {
                 return Z
             }
         }]), a
     }(), Y(document).on(te.CLICK_DATA_API, ue, function (e) {
         e.preventDefault();
         var t = ce._getTargetFromElement(this),
          n = Y(t).data(z) ? "toggle" : Y(this).data();
         ce._jQueryInterface.call(Y(t), n)
     }), Y.fn[X] = ce._jQueryInterface, Y.fn[X].Constructor = ce, Y.fn[X].noConflict = function () {
         return Y.fn[X] = J, ce._jQueryInterface
     }, fe = jQuery, de = "dropdown", pe = "." + (he = "bs.dropdown"), ge = ".data-api", me = fe.fn[de], ve = {
         HIDE: "hide" + pe,
         HIDDEN: "hidden" + pe,
         SHOW: "show" + pe,
         SHOWN: "shown" + pe,
         CLICK: "click" + pe,
         CLICK_DATA_API: "click" + pe + ge,
         FOCUSIN_DATA_API: "focusin" + pe + ge,
         KEYDOWN_DATA_API: "keydown" + pe + ge
     }, ye = "dropdown-backdrop", _e = "disabled", be = "show", Te = ".dropdown-backdrop", Ee = '[data-toggle="dropdown"]', we = ".dropdown form", xe = '[role="menu"]', Ce = '[role="listbox"]', Se = ".navbar-nav", Ae = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a', De = function () {
         function a(e) {
             l(this, a), this._element = e, this._addEventListeners()
         }
         return a.prototype.toggle = function () {
             if (this.disabled || fe(this).hasClass(_e)) return !1;
             var e = a._getParentFromElement(this),
              t = fe(e).hasClass(be);
             if (a._clearMenus(), t) return !1;
             if ("ontouchstart" in document.documentElement && !fe(e).closest(Se).length) {
                 var n = document.createElement("div");
                 n.className = ye, fe(n).insertBefore(this), fe(n).on("click", a._clearMenus)
             }
             var i = {
                 relatedTarget: this
             },
              r = fe.Event(ve.SHOW, i);
             return fe(e).trigger(r), r.isDefaultPrevented() || (this.focus(), this.setAttribute("aria-expanded", !0), fe(e).toggleClass(be), fe(e).trigger(fe.Event(ve.SHOWN, i))), !1
         }, a.prototype.dispose = function () {
             fe.removeData(this._element, he), fe(this._element).off(pe), this._element = null
         }, a.prototype._addEventListeners = function () {
             fe(this._element).on(ve.CLICK, this.toggle)
         }, a._jQueryInterface = function (t) {
             return this.each(function () {
                 var e = fe(this).data(he);
                 if (e || (e = new a(this), fe(this).data(he, e)), "string" == typeof t) {
                     if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
                     e[t].call(this)
                 }
             })
         }, a._clearMenus = function (e) {
             if (!e || 3 !== e.which) {
                 var t = fe(Te)[0];
                 t && t.parentNode.removeChild(t);
                 for (var n = fe.makeArray(fe(Ee)), i = 0; i < n.length; i++) {
                     var r = a._getParentFromElement(n[i]),
                      o = {
                          relatedTarget: n[i]
                      };
                     if (fe(r).hasClass(be) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "focusin" === e.type) && fe.contains(r, e.target))) {
                         var s = fe.Event(ve.HIDE, o);
                         fe(r).trigger(s), s.isDefaultPrevented() || (n[i].setAttribute("aria-expanded", "false"), fe(r).removeClass(be).trigger(fe.Event(ve.HIDDEN, o)))
                     }
                 }
             }
         }, a._getParentFromElement = function (e) {
             var t = void 0,
              n = nn.getSelectorFromElement(e);
             return n && (t = fe(n)[0]), t || e.parentNode
         }, a._dataApiKeydownHandler = function (e) {
             if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !fe(this).hasClass(_e))) {
                 var t = a._getParentFromElement(this),
                  n = fe(t).hasClass(be);
                 if (!n && 27 !== e.which || n && 27 === e.which) {
                     if (27 === e.which) {
                         var i = fe(t).find(Ee)[0];
                         fe(i).trigger("focus")
                     }
                     fe(this).trigger("click")
                 } else {
                     var r = fe(t).find(Ae).get();
                     if (r.length) {
                         var o = r.indexOf(e.target);
                         38 === e.which && 0 < o && o--, 40 === e.which && o < r.length - 1 && o++, o < 0 && (o = 0), r[o].focus()
                     }
                 }
             }
         }, t(a, null, [{
             key: "VERSION",
             get: function () {
                 return "4.0.0-alpha.6"
             }
         }]), a
     }(), fe(document).on(ve.KEYDOWN_DATA_API, Ee, De._dataApiKeydownHandler).on(ve.KEYDOWN_DATA_API, xe, De._dataApiKeydownHandler).on(ve.KEYDOWN_DATA_API, Ce, De._dataApiKeydownHandler).on(ve.CLICK_DATA_API + " " + ve.FOCUSIN_DATA_API, De._clearMenus).on(ve.CLICK_DATA_API, Ee, De.prototype.toggle).on(ve.CLICK_DATA_API, we, function (e) {
         e.stopPropagation()
     }), fe.fn[de] = De._jQueryInterface, fe.fn[de].Constructor = De, fe.fn[de].noConflict = function () {
         return fe.fn[de] = me, De._jQueryInterface
     }, Ie = jQuery, Ne = "modal", Oe = "." + (ke = "bs.modal"), je = Ie.fn[Ne], Le = {
         backdrop: !0,
         keyboard: !0,
         focus: !0,
         show: !0
     }, He = {
         backdrop: "(boolean|string)",
         keyboard: "boolean",
         focus: "boolean",
         show: "boolean"
     }, Pe = {
         HIDE: "hide" + Oe,
         HIDDEN: "hidden" + Oe,
         SHOW: "show" + Oe,
         SHOWN: "shown" + Oe,
         FOCUSIN: "focusin" + Oe,
         RESIZE: "resize" + Oe,
         CLICK_DISMISS: "click.dismiss" + Oe,
         KEYDOWN_DISMISS: "keydown.dismiss" + Oe,
         MOUSEUP_DISMISS: "mouseup.dismiss" + Oe,
         MOUSEDOWN_DISMISS: "mousedown.dismiss" + Oe,
         CLICK_DATA_API: "click" + Oe + ".data-api"
     }, Re = "modal-scrollbar-measure", Fe = "modal-backdrop", We = "modal-open", Me = "fade", qe = "show", Be = {
         DIALOG: ".modal-dialog",
         DATA_TOGGLE: '[data-toggle="modal"]',
         DATA_DISMISS: '[data-dismiss="modal"]',
         FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
     }, Ue = function () {
         function r(e, t) {
             l(this, r), this._config = this._getConfig(t), this._element = e, this._dialog = Ie(e).find(Be.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
         }
         return r.prototype.toggle = function (e) {
             return this._isShown ? this.hide() : this.show(e)
         }, r.prototype.show = function (e) {
             var t = this;
             if (this._isTransitioning) throw new Error("Modal is transitioning");
             nn.supportsTransitionEnd() && Ie(this._element).hasClass(Me) && (this._isTransitioning = !0);
             var n = Ie.Event(Pe.SHOW, {
                 relatedTarget: e
             });
             Ie(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), Ie(document.body).addClass(We), this._setEscapeEvent(), this._setResizeEvent(), Ie(this._element).on(Pe.CLICK_DISMISS, Be.DATA_DISMISS, function (e) {
                 return t.hide(e)
             }), Ie(this._dialog).on(Pe.MOUSEDOWN_DISMISS, function () {
                 Ie(t._element).one(Pe.MOUSEUP_DISMISS, function (e) {
                     Ie(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                 })
             }), this._showBackdrop(function () {
                 return t._showElement(e)
             }))
         }, r.prototype.hide = function (e) {
             var t = this;
             if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
             var n = nn.supportsTransitionEnd() && Ie(this._element).hasClass(Me);
             n && (this._isTransitioning = !0);
             var i = Ie.Event(Pe.HIDE);
             Ie(this._element).trigger(i), this._isShown && !i.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), Ie(document).off(Pe.FOCUSIN), Ie(this._element).removeClass(qe), Ie(this._element).off(Pe.CLICK_DISMISS), Ie(this._dialog).off(Pe.MOUSEDOWN_DISMISS), n ? Ie(this._element).one(nn.TRANSITION_END, function (e) {
                 return t._hideModal(e)
             }).emulateTransitionEnd(300) : this._hideModal())
         }, r.prototype.dispose = function () {
             Ie.removeData(this._element, ke), Ie(window, document, this._element, this._backdrop).off(Oe), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
         }, r.prototype._getConfig = function (e) {
             return e = Ie.extend({}, Le, e), nn.typeCheckConfig(Ne, e, He), e
         }, r.prototype._showElement = function (e) {
             var t = this,
              n = nn.supportsTransitionEnd() && Ie(this._element).hasClass(Me);
             this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && nn.reflow(this._element), Ie(this._element).addClass(qe), this._config.focus && this._enforceFocus();
             var i = Ie.Event(Pe.SHOWN, {
                 relatedTarget: e
             }),
              r = function () {
                  t._config.focus && t._element.focus(), t._isTransitioning = !1, Ie(t._element).trigger(i)
              };
             n ? Ie(this._dialog).one(nn.TRANSITION_END, r).emulateTransitionEnd(300) : r()
         }, r.prototype._enforceFocus = function () {
             var t = this;
             Ie(document).off(Pe.FOCUSIN).on(Pe.FOCUSIN, function (e) {
                 document === e.target || t._element === e.target || Ie(t._element).has(e.target).length || t._element.focus()
             })
         }, r.prototype._setEscapeEvent = function () {
             var t = this;
             this._isShown && this._config.keyboard ? Ie(this._element).on(Pe.KEYDOWN_DISMISS, function (e) {
                 27 === e.which && t.hide()
             }) : this._isShown || Ie(this._element).off(Pe.KEYDOWN_DISMISS)
         }, r.prototype._setResizeEvent = function () {
             var t = this;
             this._isShown ? Ie(window).on(Pe.RESIZE, function (e) {
                 return t._handleUpdate(e)
             }) : Ie(window).off(Pe.RESIZE)
         }, r.prototype._hideModal = function () {
             var e = this;
             this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function () {
                 Ie(document.body).removeClass(We), e._resetAdjustments(), e._resetScrollbar(), Ie(e._element).trigger(Pe.HIDDEN)
             })
         }, r.prototype._removeBackdrop = function () {
             this._backdrop && (Ie(this._backdrop).remove(), this._backdrop = null)
         }, r.prototype._showBackdrop = function (e) {
             var t = this,
              n = Ie(this._element).hasClass(Me) ? Me : "";
             if (this._isShown && this._config.backdrop) {
                 var i = nn.supportsTransitionEnd() && n;
                 if (this._backdrop = document.createElement("div"), this._backdrop.className = Fe, n && Ie(this._backdrop).addClass(n), Ie(this._backdrop).appendTo(document.body), Ie(this._element).on(Pe.CLICK_DISMISS, function (e) {
                   t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                 }), i && nn.reflow(this._backdrop), Ie(this._backdrop).addClass(qe), !e) return;
                 if (!i) return void e();
                 Ie(this._backdrop).one(nn.TRANSITION_END, e).emulateTransitionEnd(150)
             } else if (!this._isShown && this._backdrop) {
                 Ie(this._backdrop).removeClass(qe);
                 var r = function () {
                     t._removeBackdrop(), e && e()
                 };
                 nn.supportsTransitionEnd() && Ie(this._element).hasClass(Me) ? Ie(this._backdrop).one(nn.TRANSITION_END, r).emulateTransitionEnd(150) : r()
             } else e && e()
         }, r.prototype._handleUpdate = function () {
             this._adjustDialog()
         }, r.prototype._adjustDialog = function () {
             var e = this._element.scrollHeight > document.documentElement.clientHeight;
             !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
         }, r.prototype._resetAdjustments = function () {
             this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
         }, r.prototype._checkScrollbar = function () {
             this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
         }, r.prototype._setScrollbar = function () {
             var e = parseInt(Ie(Be.FIXED_CONTENT).css("padding-right") || 0, 10);
             this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
         }, r.prototype._resetScrollbar = function () {
             document.body.style.paddingRight = this._originalBodyPadding
         }, r.prototype._getScrollbarWidth = function () {
             var e = document.createElement("div");
             e.className = Re, document.body.appendChild(e);
             var t = e.offsetWidth - e.clientWidth;
             return document.body.removeChild(e), t
         }, r._jQueryInterface = function (n, i) {
             return this.each(function () {
                 var e = Ie(this).data(ke),
                  t = Ie.extend({}, r.Default, Ie(this).data(), "object" === (void 0 === n ? "undefined" : s(n)) && n);
                 if (e || (e = new r(this, t), Ie(this).data(ke, e)), "string" == typeof n) {
                     if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                     e[n](i)
                 } else t.show && e.show(i)
             })
         }, t(r, null, [{
             key: "VERSION",
             get: function () {
                 return "4.0.0-alpha.6"
             }
         }, {
             key: "Default",
             get: function () {
                 return Le
             }
         }]), r
     }(), Ie(document).on(Pe.CLICK_DATA_API, Be.DATA_TOGGLE, function (e) {
         var t = this,
          n = void 0,
          i = nn.getSelectorFromElement(this);
         i && (n = Ie(i)[0]);
         var r = Ie(n).data(ke) ? "toggle" : Ie.extend({}, Ie(n).data(), Ie(this).data());
         "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
         var o = Ie(n).one(Pe.SHOW, function (e) {
             e.isDefaultPrevented() || o.one(Pe.HIDDEN, function () {
                 Ie(t).is(":visible") && t.focus()
             })
         });
         Ue._jQueryInterface.call(Ie(n), r, this)
     }), Ie.fn[Ne] = Ue._jQueryInterface, Ie.fn[Ne].Constructor = Ue, Ie.fn[Ne].noConflict = function () {
         return Ie.fn[Ne] = je, Ue._jQueryInterface
     }, Qe = jQuery, Ke = "scrollspy", $e = "." + (Ve = "bs.scrollspy"), Ye = Qe.fn[Ke], Xe = {
         offset: 10,
         method: "auto",
         target: ""
     }, ze = {
         offset: "number",
         method: "string",
         target: "(string|element)"
     }, Ge = {
         ACTIVATE: "activate" + $e,
         SCROLL: "scroll" + $e,
         LOAD_DATA_API: "load" + $e + ".data-api"
     }, Je = "dropdown-item", Ze = "active", et = {
         DATA_SPY: '[data-spy="scroll"]',
         ACTIVE: ".active",
         LIST_ITEM: ".list-item",
         LI: "li",
         LI_DROPDOWN: "li.dropdown",
         NAV_LINKS: ".nav-link",
         DROPDOWN: ".dropdown",
         DROPDOWN_ITEMS: ".dropdown-item",
         DROPDOWN_TOGGLE: ".dropdown-toggle"
     }, tt = "offset", nt = "position", it = function () {
         function i(e, t) {
             var n = this;
             l(this, i), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + et.NAV_LINKS + "," + this._config.target + " " + et.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Qe(this._scrollElement).on(Ge.SCROLL, function (e) {
                 return n._process(e)
             }), this.refresh(), this._process()
         }
         return i.prototype.refresh = function () {
             var t = this,
              e = this._scrollElement !== this._scrollElement.window ? nt : tt,
              i = "auto" === this._config.method ? e : this._config.method,
              r = i === nt ? this._getScrollTop() : 0;
             this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Qe.makeArray(Qe(this._selector)).map(function (e) {
                 var t = void 0,
                  n = nn.getSelectorFromElement(e);
                 return n && (t = Qe(n)[0]), t && (t.offsetWidth || t.offsetHeight) ? [Qe(t)[i]().top + r, n] : null
             }).filter(function (e) {
                 return e
             }).sort(function (e, t) {
                 return e[0] - t[0]
             }).forEach(function (e) {
                 t._offsets.push(e[0]), t._targets.push(e[1])
             })
         }, i.prototype.dispose = function () {
             Qe.removeData(this._element, Ve), Qe(this._scrollElement).off($e), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
         }, i.prototype._getConfig = function (e) {
             if ("string" != typeof (e = Qe.extend({}, Xe, e)).target) {
                 var t = Qe(e.target).attr("id");
                 t || (t = nn.getUID(Ke), Qe(e.target).attr("id", t)), e.target = "#" + t
             }
             return nn.typeCheckConfig(Ke, e, ze), e
         }, i.prototype._getScrollTop = function () {
             return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
         }, i.prototype._getScrollHeight = function () {
             return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
         }, i.prototype._getOffsetHeight = function () {
             return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
         }, i.prototype._process = function () {
             var e = this._getScrollTop() + this._config.offset,
              t = this._getScrollHeight(),
              n = this._config.offset + t - this._getOffsetHeight();
             if (this._scrollHeight !== t && this.refresh(), n <= e) {
                 var i = this._targets[this._targets.length - 1];
                 this._activeTarget !== i && this._activate(i)
             } else {
                 if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                 for (var r = this._offsets.length; r--;) {
                     this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                 }
             }
         }, i.prototype._activate = function (t) {
             this._activeTarget = t, this._clear();
             var e = this._selector.split(",");
             e = e.map(function (e) {
                 return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
             });
             var n = Qe(e.join(","));
             n.hasClass(Je) ? (n.closest(et.DROPDOWN).find(et.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : n.parents(et.LI).find("> " + et.NAV_LINKS).addClass(Ze), Qe(this._scrollElement).trigger(Ge.ACTIVATE, {
                 relatedTarget: t
             })
         }, i.prototype._clear = function () {
             Qe(this._selector).filter(et.ACTIVE).removeClass(Ze)
         }, i._jQueryInterface = function (n) {
             return this.each(function () {
                 var e = Qe(this).data(Ve),
                  t = "object" === (void 0 === n ? "undefined" : s(n)) && n;
                 if (e || (e = new i(this, t), Qe(this).data(Ve, e)), "string" == typeof n) {
                     if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                     e[n]()
                 }
             })
         }, t(i, null, [{
             key: "VERSION",
             get: function () {
                 return "4.0.0-alpha.6"
             }
         }, {
             key: "Default",
             get: function () {
                 return Xe
             }
         }]), i
     }(), Qe(window).on(Ge.LOAD_DATA_API, function () {
         for (var e = Qe.makeArray(Qe(et.DATA_SPY)), t = e.length; t--;) {
             var n = Qe(e[t]);
             it._jQueryInterface.call(n, n.data())
         }
     }), Qe.fn[Ke] = it._jQueryInterface, Qe.fn[Ke].Constructor = it, Qe.fn[Ke].noConflict = function () {
         return Qe.fn[Ke] = Ye, it._jQueryInterface
     }, rt = jQuery, st = "." + (ot = "bs.tab"), at = rt.fn.tab, lt = {
         HIDE: "hide" + st,
         HIDDEN: "hidden" + st,
         SHOW: "show" + st,
         SHOWN: "shown" + st,
         CLICK_DATA_API: "click" + st + ".data-api"
     }, ut = "dropdown-menu", ct = "active", ft = "disabled", dt = "fade", ht = "show", pt = ".dropdown", gt = "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)", mt = "> .nav-item .fade, > .fade", vt = ".active", yt = "> .nav-item > .active, > .active", _t = '[data-toggle="tab"], [data-toggle="pill"]', bt = ".dropdown-toggle", Tt = "> .dropdown-menu .active", Et = function () {
         function i(e) {
             l(this, i), this._element = e
         }
         return i.prototype.show = function () {
             var n = this;
             if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rt(this._element).hasClass(ct) || rt(this._element).hasClass(ft))) {
                 var e = void 0,
                  i = void 0,
                  t = rt(this._element).closest(gt)[0],
                  r = nn.getSelectorFromElement(this._element);
                 t && (i = (i = rt.makeArray(rt(t).find(vt)))[i.length - 1]);
                 var o = rt.Event(lt.HIDE, {
                     relatedTarget: this._element
                 }),
                  s = rt.Event(lt.SHOW, {
                      relatedTarget: i
                  });
                 if (i && rt(i).trigger(o), rt(this._element).trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                     r && (e = rt(r)[0]), this._activate(this._element, t);
                     var a = function () {
                         var e = rt.Event(lt.HIDDEN, {
                             relatedTarget: n._element
                         }),
                          t = rt.Event(lt.SHOWN, {
                              relatedTarget: i
                          });
                         rt(i).trigger(e), rt(n._element).trigger(t)
                     };
                     e ? this._activate(e, e.parentNode, a) : a()
                 }
             }
         }, i.prototype.dispose = function () {
             rt.removeClass(this._element, ot), this._element = null
         }, i.prototype._activate = function (e, t, n) {
             var i = this,
              r = rt(t).find(yt)[0],
              o = n && nn.supportsTransitionEnd() && (r && rt(r).hasClass(dt) || Boolean(rt(t).find(mt)[0])),
              s = function () {
                  return i._transitionComplete(e, r, o, n)
              };
             r && o ? rt(r).one(nn.TRANSITION_END, s).emulateTransitionEnd(150) : s(), r && rt(r).removeClass(ht)
         }, i.prototype._transitionComplete = function (e, t, n, i) {
             if (t) {
                 rt(t).removeClass(ct);
                 var r = rt(t.parentNode).find(Tt)[0];
                 r && rt(r).removeClass(ct), t.setAttribute("aria-expanded", !1)
             }
             if (rt(e).addClass(ct), e.setAttribute("aria-expanded", !0), n ? (nn.reflow(e), rt(e).addClass(ht)) : rt(e).removeClass(dt), e.parentNode && rt(e.parentNode).hasClass(ut)) {
                 var o = rt(e).closest(pt)[0];
                 o && rt(o).find(bt).addClass(ct), e.setAttribute("aria-expanded", !0)
             }
             i && i()
         }, i._jQueryInterface = function (n) {
             return this.each(function () {
                 var e = rt(this),
                  t = e.data(ot);
                 if (t || (t = new i(this), e.data(ot, t)), "string" == typeof n) {
                     if (void 0 === t[n]) throw new Error('No method named "' + n + '"');
                     t[n]()
                 }
             })
         }, t(i, null, [{
             key: "VERSION",
             get: function () {
                 return "4.0.0-alpha.6"
             }
         }]), i
     }(), rt(document).on(lt.CLICK_DATA_API, _t, function (e) {
         e.preventDefault(), Et._jQueryInterface.call(rt(this), "show")
     }), rt.fn.tab = Et._jQueryInterface, rt.fn.tab.Constructor = Et, rt.fn.tab.noConflict = function () {
         return rt.fn.tab = at, Et._jQueryInterface
     }, wt = jQuery, xt = "tooltip", St = "." + (Ct = "bs.tooltip"), At = wt.fn[xt], Dt = {
         animation: !0,
         template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
         trigger: "hover focus",
         title: "",
         delay: 0,
         html: !1,
         selector: !1,
         placement: "top",
         offset: "0 0",
         constraints: [],
         container: !1
     }, It = {
         animation: "boolean",
         template: "string",
         title: "(string|element|function)",
         trigger: "string",
         delay: "(number|object)",
         html: "boolean",
         selector: "(string|boolean)",
         placement: "(string|function)",
         offset: "string",
         constraints: "array",
         container: "(string|element|boolean)"
     }, Nt = {
         TOP: "bottom center",
         RIGHT: "middle left",
         BOTTOM: "top center",
         LEFT: "middle right"
     }, Ot = "out", jt = {
         HIDE: "hide" + St,
         HIDDEN: "hidden" + St,
         SHOW: (kt = "show") + St,
         SHOWN: "shown" + St,
         INSERTED: "inserted" + St,
         CLICK: "click" + St,
         FOCUSIN: "focusin" + St,
         FOCUSOUT: "focusout" + St,
         MOUSEENTER: "mouseenter" + St,
         MOUSELEAVE: "mouseleave" + St
     }, Lt = "fade", Rt = {
         element: !(Pt = ".tooltip-inner"),
         enabled: !(Ht = "show")
     }, Ft = "hover", Wt = "focus", Mt = "click", qt = "manual", Bt = function () {
         function u(e, t) {
             l(this, u), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
         }
         return u.prototype.enable = function () {
             this._isEnabled = !0
         }, u.prototype.disable = function () {
             this._isEnabled = !1
         }, u.prototype.toggleEnabled = function () {
             this._isEnabled = !this._isEnabled
         }, u.prototype.toggle = function (e) {
             if (e) {
                 var t = this.constructor.DATA_KEY,
                  n = wt(e.currentTarget).data(t);
                 n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), wt(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
             } else {
                 if (wt(this.getTipElement()).hasClass(Ht)) return void this._leave(null, this);
                 this._enter(null, this)
             }
         }, u.prototype.dispose = function () {
             clearTimeout(this._timeout), this.cleanupTether(), wt.removeData(this.element, this.constructor.DATA_KEY), wt(this.element).off(this.constructor.EVENT_KEY), wt(this.element).closest(".modal").off("hide.bs.modal"), this.tip && wt(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
         }, u.prototype.show = function () {
             var t = this;
             if ("none" === wt(this.element).css("display")) throw new Error("Please use show on visible elements");
             var e = wt.Event(this.constructor.Event.SHOW);
             if (this.isWithContent() && this._isEnabled) {
                 if (this._isTransitioning) throw new Error("Tooltip is transitioning");
                 wt(this.element).trigger(e);
                 var n = wt.contains(this.element.ownerDocument.documentElement, this.element);
                 if (e.isDefaultPrevented() || !n) return;
                 var i = this.getTipElement(),
                  r = nn.getUID(this.constructor.NAME);
                 i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && wt(i).addClass(Lt);
                 var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                  s = this._getAttachment(o),
                  a = !1 === this.config.container ? document.body : wt(this.config.container);
                 wt(i).data(this.constructor.DATA_KEY, this).appendTo(a), wt(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                     attachment: s,
                     element: i,
                     target: this.element,
                     classes: Rt,
                     classPrefix: "bs-tether",
                     offset: this.config.offset,
                     constraints: this.config.constraints,
                     addTargetClasses: !1
                 }), nn.reflow(i), this._tether.position(), wt(i).addClass(Ht);
                 var l = function () {
                     var e = t._hoverState;
                     t._hoverState = null, t._isTransitioning = !1, wt(t.element).trigger(t.constructor.Event.SHOWN), e === Ot && t._leave(null, t)
                 };
                 if (nn.supportsTransitionEnd() && wt(this.tip).hasClass(Lt)) return this._isTransitioning = !0, void wt(this.tip).one(nn.TRANSITION_END, l).emulateTransitionEnd(u._TRANSITION_DURATION);
                 l()
             }
         }, u.prototype.hide = function (e) {
             var t = this,
              n = this.getTipElement(),
              i = wt.Event(this.constructor.Event.HIDE);
             if (this._isTransitioning) throw new Error("Tooltip is transitioning");
             var r = function () {
                 t._hoverState !== kt && n.parentNode && n.parentNode.removeChild(n), t.element.removeAttribute("aria-describedby"), wt(t.element).trigger(t.constructor.Event.HIDDEN), t._isTransitioning = !1, t.cleanupTether(), e && e()
             };
             wt(this.element).trigger(i), i.isDefaultPrevented() || (wt(n).removeClass(Ht), this._activeTrigger[Mt] = !1, this._activeTrigger[Wt] = !1, this._activeTrigger[Ft] = !1, nn.supportsTransitionEnd() && wt(this.tip).hasClass(Lt) ? (this._isTransitioning = !0, wt(n).one(nn.TRANSITION_END, r).emulateTransitionEnd(150)) : r(), this._hoverState = "")
         }, u.prototype.isWithContent = function () {
             return Boolean(this.getTitle())
         }, u.prototype.getTipElement = function () {
             return this.tip = this.tip || wt(this.config.template)[0]
         }, u.prototype.setContent = function () {
             var e = wt(this.getTipElement());
             this.setElementContent(e.find(Pt), this.getTitle()), e.removeClass(Lt + " " + Ht), this.cleanupTether()
         }, u.prototype.setElementContent = function (e, t) {
             var n = this.config.html;
             "object" === (void 0 === t ? "undefined" : s(t)) && (t.nodeType || t.jquery) ? n ? wt(t).parent().is(e) || e.empty().append(t) : e.text(wt(t).text()) : e[n ? "html" : "text"](t)
         }, u.prototype.getTitle = function () {
             var e = this.element.getAttribute("data-original-title");
             return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
         }, u.prototype.cleanupTether = function () {
             this._tether && this._tether.destroy()
         }, u.prototype._getAttachment = function (e) {
             return Nt[e.toUpperCase()]
         }, u.prototype._setListeners = function () {
             var i = this;
             this.config.trigger.split(" ").forEach(function (e) {
                 if ("click" === e) wt(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
                     return i.toggle(e)
                 });
                 else if (e !== qt) {
                     var t = e === Ft ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                      n = e === Ft ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                     wt(i.element).on(t, i.config.selector, function (e) {
                         return i._enter(e)
                     }).on(n, i.config.selector, function (e) {
                         return i._leave(e)
                     })
                 }
                 wt(i.element).closest(".modal").on("hide.bs.modal", function () {
                     return i.hide()
                 })
             }), this.config.selector ? this.config = wt.extend({}, this.config, {
                 trigger: "manual",
                 selector: ""
             }) : this._fixTitle()
         }, u.prototype._fixTitle = function () {
             var e = s(this.element.getAttribute("data-original-title"));
             (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
         }, u.prototype._enter = function (e, t) {
             var n = this.constructor.DATA_KEY;
             (t = t || wt(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), wt(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Wt : Ft] = !0), wt(t.getTipElement()).hasClass(Ht) || t._hoverState === kt ? t._hoverState = kt : (clearTimeout(t._timeout), t._hoverState = kt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                 t._hoverState === kt && t.show()
             }, t.config.delay.show) : t.show())
         }, u.prototype._leave = function (e, t) {
             var n = this.constructor.DATA_KEY;
             (t = t || wt(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), wt(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Wt : Ft] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Ot, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                 t._hoverState === Ot && t.hide()
             }, t.config.delay.hide) : t.hide())
         }, u.prototype._isWithActiveTrigger = function () {
             for (var e in this._activeTrigger)
                 if (this._activeTrigger[e]) return !0;
             return !1
         }, u.prototype._getConfig = function (e) {
             return (e = wt.extend({}, this.constructor.Default, wt(this.element).data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                 show: e.delay,
                 hide: e.delay
             }), nn.typeCheckConfig(xt, e, this.constructor.DefaultType), e
         }, u.prototype._getDelegateConfig = function () {
             var e = {};
             if (this.config)
                 for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
             return e
         }, u._jQueryInterface = function (n) {
             return this.each(function () {
                 var e = wt(this).data(Ct),
                  t = "object" === (void 0 === n ? "undefined" : s(n)) && n;
                 if ((e || !/dispose|hide/.test(n)) && (e || (e = new u(this, t), wt(this).data(Ct, e)), "string" == typeof n)) {
                     if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                     e[n]()
                 }
             })
         }, t(u, null, [{
             key: "VERSION",
             get: function () {
                 return "4.0.0-alpha.6"
             }
         }, {
             key: "Default",
             get: function () {
                 return Dt
             }
         }, {
             key: "NAME",
             get: function () {
                 return xt
             }
         }, {
             key: "DATA_KEY",
             get: function () {
                 return Ct
             }
         }, {
             key: "Event",
             get: function () {
                 return jt
             }
         }, {
             key: "EVENT_KEY",
             get: function () {
                 return St
             }
         }, {
             key: "DefaultType",
             get: function () {
                 return It
             }
         }]), u
     }(), wt.fn[xt] = Bt._jQueryInterface, wt.fn[xt].Constructor = Bt, wt.fn[xt].noConflict = function () {
         return wt.fn[xt] = At, Bt._jQueryInterface
     }, Bt);
    Ut = jQuery, Qt = "popover", Vt = "." + (Kt = "bs.popover"), $t = Ut.fn[Qt], Yt = Ut.extend({}, rn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), Xt = Ut.extend({}, rn.DefaultType, {
        content: "(string|element|function)"
    }), zt = "fade", Jt = ".popover-title", Zt = ".popover-content", en = {
        HIDE: "hide" + Vt,
        HIDDEN: "hidden" + Vt,
        SHOW: (Gt = "show") + Vt,
        SHOWN: "shown" + Vt,
        INSERTED: "inserted" + Vt,
        CLICK: "click" + Vt,
        FOCUSIN: "focusin" + Vt,
        FOCUSOUT: "focusout" + Vt,
        MOUSEENTER: "mouseenter" + Vt,
        MOUSELEAVE: "mouseleave" + Vt
    }, tn = function (e) {
        function i() {
            return l(this, i),
             function (e, t) {
                 if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                 return !t || "object" != typeof t && "function" != typeof t ? e : t
             }(this, e.apply(this, arguments))
        }
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(i, e), i.prototype.isWithContent = function () {
            return this.getTitle() || this._getContent()
        }, i.prototype.getTipElement = function () {
            return this.tip = this.tip || Ut(this.config.template)[0]
        }, i.prototype.setContent = function () {
            var e = Ut(this.getTipElement());
            this.setElementContent(e.find(Jt), this.getTitle()), this.setElementContent(e.find(Zt), this._getContent()), e.removeClass(zt + " " + Gt), this.cleanupTether()
        }, i.prototype._getContent = function () {
            return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
        }, i._jQueryInterface = function (n) {
            return this.each(function () {
                var e = Ut(this).data(Kt),
                 t = "object" === (void 0 === n ? "undefined" : s(n)) ? n : null;
                if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Ut(this).data(Kt, e)), "string" == typeof n)) {
                    if (void 0 === e[n]) throw new Error('No method named "' + n + '"');
                    e[n]()
                }
            })
        }, t(i, null, [{
            key: "VERSION",
            get: function () {
                return "4.0.0-alpha.6"
            }
        }, {
            key: "Default",
            get: function () {
                return Yt
            }
        }, {
            key: "NAME",
            get: function () {
                return Qt
            }
        }, {
            key: "DATA_KEY",
            get: function () {
                return Kt
            }
        }, {
            key: "Event",
            get: function () {
                return en
            }
        }, {
            key: "EVENT_KEY",
            get: function () {
                return Vt
            }
        }, {
            key: "DefaultType",
            get: function () {
                return Xt
            }
        }]), i
    }(rn), Ut.fn[Qt] = tn._jQueryInterface, Ut.fn[Qt].Constructor = tn, Ut.fn[Qt].noConflict = function () {
        return Ut.fn[Qt] = $t, tn._jQueryInterface
    }
}();