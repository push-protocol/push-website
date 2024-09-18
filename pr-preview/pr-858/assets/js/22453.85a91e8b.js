"use strict";
(self["webpackChunkpush_website"] = self["webpackChunkpush_website"] || []).push([[22453],{

/***/ 10646:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ addHtmlLabel)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(482933);




function addHtmlLabel(root, node) {
  var fo = root.append('foreignObject').attr('width', '100000');

  var div = fo.append('xhtml:div');
  div.attr('xmlns', 'http://www.w3.org/1999/xhtml');

  var label = node.label;
  switch (typeof label) {
    case 'function':
      div.insert(label);
      break;
    case 'object':
      // Currently we assume this is a DOM object.
      div.insert(function () {
        return label;
      });
      break;
    default:
      div.html(label);
  }

  _util_js__WEBPACK_IMPORTED_MODULE_0__/* .applyStyle */ .AV(div, node.labelStyle);
  div.style('display', 'inline-block');
  // Fix for firefox
  div.style('white-space', 'nowrap');

  var client = div.node().getBoundingClientRect();
  fo.attr('width', client.width).attr('height', client.height);

  return fo;
}


/***/ }),

/***/ 482933:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AV: () => (/* binding */ applyStyle),
/* harmony export */   De: () => (/* binding */ isSubgraph),
/* harmony export */   c$: () => (/* binding */ applyTransition),
/* harmony export */   gh: () => (/* binding */ edgeToId),
/* harmony export */   nh: () => (/* binding */ applyClass)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(634963);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(389610);


// Public utility functions


/*
 * Returns true if the specified node in the graph is a subgraph node. A
 * subgraph node is one that contains other nodes.
 */
function isSubgraph(g, v) {
  return !!g.children(v).length;
}

function edgeToId(e) {
  return escapeId(e.v) + ':' + escapeId(e.w) + ':' + escapeId(e.name);
}

var ID_DELIM = /:/g;
function escapeId(str) {
  return str ? String(str).replace(ID_DELIM, '\\:') : '';
}

function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr('style', styleFn);
  }
}

function applyClass(dom, classFn, otherClasses) {
  if (classFn) {
    dom.attr('class', classFn).attr('class', otherClasses + ' ' + dom.attr('class'));
  }
}

function applyTransition(selection, g) {
  var graph = g.graph();

  if (lodash_es__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(graph)) {
    var transition = graph.transition;
    if (lodash_es__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(transition)) {
      return transition(selection);
    }
  }

  return selection;
}


/***/ }),

/***/ 375937:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272453);
/* harmony import */ var _color_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174886);
/* IMPORT */


/* MAIN */
const channel = (color, channel) => {
    return _utils_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.lang.round(_color_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.parse(color)[channel]);
};
/* EXPORT */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (channel);


/***/ }),

/***/ 22453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagram: () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _flowDb_c1833063_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(332548);
/* harmony import */ var _styles_483fbfea_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(165382);
/* harmony import */ var _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(999702);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126312);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(300697);
/* harmony import */ var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(621176);
/* harmony import */ var dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(414075);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(974353);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(416750);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(842838);





















const diagram = {
  parser: _flowDb_c1833063_js__WEBPACK_IMPORTED_MODULE_7__.p,
  db: _flowDb_c1833063_js__WEBPACK_IMPORTED_MODULE_7__.f,
  renderer: _styles_483fbfea_js__WEBPACK_IMPORTED_MODULE_8__.f,
  styles: _styles_483fbfea_js__WEBPACK_IMPORTED_MODULE_8__.a,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_9__.p)({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    _styles_483fbfea_js__WEBPACK_IMPORTED_MODULE_8__.f.setConf(cnf.flowchart);
    _flowDb_c1833063_js__WEBPACK_IMPORTED_MODULE_7__.f.clear();
    _flowDb_c1833063_js__WEBPACK_IMPORTED_MODULE_7__.f.setGen("gen-2");
  }
};



/***/ }),

/***/ 165382:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ flowStyles),
/* harmony export */   f: () => (/* binding */ flowRendererV2)
/* harmony export */ });
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(300697);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(126312);
/* harmony import */ var _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(999702);
/* harmony import */ var _index_01f381cb_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(212983);
/* harmony import */ var dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10646);
/* harmony import */ var khroma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(375937);
/* harmony import */ var khroma__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(225582);






const conf = {};
const setConf = function(cnf) {
  const keys = Object.keys(cnf);
  for (const key of keys) {
    conf[key] = cnf[key];
  }
};
const addVertices = async function(vert, g, svgId, root, doc, diagObj) {
  const svg = root.select(`[id="${svgId}"]`);
  const keys = Object.keys(vert);
  for (const id of keys) {
    const vertex = vert[id];
    let classStr = "default";
    if (vertex.classes.length > 0) {
      classStr = vertex.classes.join(" ");
    }
    classStr = classStr + " flowchart-label";
    const styles = (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.k)(vertex.styles);
    let vertexText = vertex.text !== void 0 ? vertex.text : vertex.id;
    let vertexNode;
    _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("vertex", vertex, vertex.labelType);
    if (vertex.labelType === "markdown") {
      _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("vertex", vertex, vertex.labelType);
    } else {
      if ((0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.m)((0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.c)().flowchart.htmlLabels)) {
        const node = {
          label: vertexText
        };
        vertexNode = (0,dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_3__/* .addHtmlLabel */ .H)(svg, node).node();
        vertexNode.parentNode.removeChild(vertexNode);
      } else {
        const svgLabel = doc.createElementNS("http://www.w3.org/2000/svg", "text");
        svgLabel.setAttribute("style", styles.labelStyle.replace("color:", "fill:"));
        const rows = vertexText.split(_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.e.lineBreakRegex);
        for (const row of rows) {
          const tspan = doc.createElementNS("http://www.w3.org/2000/svg", "tspan");
          tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
          tspan.setAttribute("dy", "1em");
          tspan.setAttribute("x", "1");
          tspan.textContent = row;
          svgLabel.appendChild(tspan);
        }
        vertexNode = svgLabel;
      }
    }
    let radius = 0;
    let _shape = "";
    switch (vertex.type) {
      case "round":
        radius = 5;
        _shape = "rect";
        break;
      case "square":
        _shape = "rect";
        break;
      case "diamond":
        _shape = "question";
        break;
      case "hexagon":
        _shape = "hexagon";
        break;
      case "odd":
        _shape = "rect_left_inv_arrow";
        break;
      case "lean_right":
        _shape = "lean_right";
        break;
      case "lean_left":
        _shape = "lean_left";
        break;
      case "trapezoid":
        _shape = "trapezoid";
        break;
      case "inv_trapezoid":
        _shape = "inv_trapezoid";
        break;
      case "odd_right":
        _shape = "rect_left_inv_arrow";
        break;
      case "circle":
        _shape = "circle";
        break;
      case "ellipse":
        _shape = "ellipse";
        break;
      case "stadium":
        _shape = "stadium";
        break;
      case "subroutine":
        _shape = "subroutine";
        break;
      case "cylinder":
        _shape = "cylinder";
        break;
      case "group":
        _shape = "rect";
        break;
      case "doublecircle":
        _shape = "doublecircle";
        break;
      default:
        _shape = "rect";
    }
    const labelText = await (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.r)(vertexText, (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.c)());
    g.setNode(vertex.id, {
      labelStyle: styles.labelStyle,
      shape: _shape,
      labelText,
      labelType: vertex.labelType,
      rx: radius,
      ry: radius,
      class: classStr,
      style: styles.style,
      id: vertex.id,
      link: vertex.link,
      linkTarget: vertex.linkTarget,
      tooltip: diagObj.db.getTooltip(vertex.id) || "",
      domId: diagObj.db.lookUpDomId(vertex.id),
      haveCallback: vertex.haveCallback,
      width: vertex.type === "group" ? 500 : void 0,
      dir: vertex.dir,
      type: vertex.type,
      props: vertex.props,
      padding: (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.c)().flowchart.padding
    });
    _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("setNode", {
      labelStyle: styles.labelStyle,
      labelType: vertex.labelType,
      shape: _shape,
      labelText,
      rx: radius,
      ry: radius,
      class: classStr,
      style: styles.style,
      id: vertex.id,
      domId: diagObj.db.lookUpDomId(vertex.id),
      width: vertex.type === "group" ? 500 : void 0,
      type: vertex.type,
      dir: vertex.dir,
      props: vertex.props,
      padding: (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.c)().flowchart.padding
    });
  }
};
const addEdges = async function(edges, g, diagObj) {
  _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("abc78 edges = ", edges);
  let cnt = 0;
  let linkIdCnt = {};
  let defaultStyle;
  let defaultLabelStyle;
  if (edges.defaultStyle !== void 0) {
    const defaultStyles = (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.k)(edges.defaultStyle);
    defaultStyle = defaultStyles.style;
    defaultLabelStyle = defaultStyles.labelStyle;
  }
  for (const edge of edges) {
    cnt++;
    const linkIdBase = "L-" + edge.start + "-" + edge.end;
    if (linkIdCnt[linkIdBase] === void 0) {
      linkIdCnt[linkIdBase] = 0;
      _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
    } else {
      linkIdCnt[linkIdBase]++;
      _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("abc78 new entry", linkIdBase, linkIdCnt[linkIdBase]);
    }
    let linkId = linkIdBase + "-" + linkIdCnt[linkIdBase];
    _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("abc78 new link id to be used is", linkIdBase, linkId, linkIdCnt[linkIdBase]);
    const linkNameStart = "LS-" + edge.start;
    const linkNameEnd = "LE-" + edge.end;
    const edgeData = { style: "", labelStyle: "" };
    edgeData.minlen = edge.length || 1;
    if (edge.type === "arrow_open") {
      edgeData.arrowhead = "none";
    } else {
      edgeData.arrowhead = "normal";
    }
    edgeData.arrowTypeStart = "arrow_open";
    edgeData.arrowTypeEnd = "arrow_open";
    switch (edge.type) {
      case "double_arrow_cross":
        edgeData.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        edgeData.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        edgeData.arrowTypeStart = "arrow_point";
      case "arrow_point":
        edgeData.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        edgeData.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        edgeData.arrowTypeEnd = "arrow_circle";
        break;
    }
    let style = "";
    let labelStyle = "";
    switch (edge.stroke) {
      case "normal":
        style = "fill:none;";
        if (defaultStyle !== void 0) {
          style = defaultStyle;
        }
        if (defaultLabelStyle !== void 0) {
          labelStyle = defaultLabelStyle;
        }
        edgeData.thickness = "normal";
        edgeData.pattern = "solid";
        break;
      case "dotted":
        edgeData.thickness = "normal";
        edgeData.pattern = "dotted";
        edgeData.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        edgeData.thickness = "thick";
        edgeData.pattern = "solid";
        edgeData.style = "stroke-width: 3.5px;fill:none;";
        break;
      case "invisible":
        edgeData.thickness = "invisible";
        edgeData.pattern = "solid";
        edgeData.style = "stroke-width: 0;fill:none;";
        break;
    }
    if (edge.style !== void 0) {
      const styles = (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.k)(edge.style);
      style = styles.style;
      labelStyle = styles.labelStyle;
    }
    edgeData.style = edgeData.style += style;
    edgeData.labelStyle = edgeData.labelStyle += labelStyle;
    if (edge.interpolate !== void 0) {
      edgeData.curve = (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.n)(edge.interpolate, d3__WEBPACK_IMPORTED_MODULE_1__/* .curveLinear */ .lUB);
    } else if (edges.defaultInterpolate !== void 0) {
      edgeData.curve = (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.n)(edges.defaultInterpolate, d3__WEBPACK_IMPORTED_MODULE_1__/* .curveLinear */ .lUB);
    } else {
      edgeData.curve = (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.n)(conf.curve, d3__WEBPACK_IMPORTED_MODULE_1__/* .curveLinear */ .lUB);
    }
    if (edge.text === void 0) {
      if (edge.style !== void 0) {
        edgeData.arrowheadStyle = "fill: #333";
      }
    } else {
      edgeData.arrowheadStyle = "fill: #333";
      edgeData.labelpos = "c";
    }
    edgeData.labelType = edge.labelType;
    edgeData.label = await (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.r)(edge.text.replace(_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.e.lineBreakRegex, "\n"), (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.c)());
    if (edge.style === void 0) {
      edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none;";
    }
    edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
    edgeData.id = linkId;
    edgeData.classes = "flowchart-link " + linkNameStart + " " + linkNameEnd;
    g.setEdge(edge.start, edge.end, edgeData, cnt);
  }
};
const getClasses = function(text, diagObj) {
  return diagObj.db.getClasses();
};
const draw = async function(text, id, _version, diagObj) {
  _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("Drawing flowchart");
  let dir = diagObj.db.getDirection();
  if (dir === void 0) {
    dir = "TD";
  }
  const { securityLevel, flowchart: conf2 } = (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.c)();
  const nodeSpacing = conf2.nodeSpacing || 50;
  const rankSpacing = conf2.rankSpacing || 50;
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ltv)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ltv)(sandboxElement.nodes()[0].contentDocument.body) : (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ltv)("body");
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  const g = new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_0__/* .Graph */ .T({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: dir,
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 0,
    marginy: 0
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let subG;
  const subGraphs = diagObj.db.getSubGraphs();
  _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("Subgraphs - ", subGraphs);
  for (let i2 = subGraphs.length - 1; i2 >= 0; i2--) {
    subG = subGraphs[i2];
    _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("Subgraph - ", subG);
    diagObj.db.addVertex(
      subG.id,
      { text: subG.title, type: subG.labelType },
      "group",
      void 0,
      subG.classes,
      subG.dir
    );
  }
  const vert = diagObj.db.getVertices();
  const edges = diagObj.db.getEdges();
  _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("Edges", edges);
  let i = 0;
  for (i = subGraphs.length - 1; i >= 0; i--) {
    subG = subGraphs[i];
    (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .selectAll */ .Ubm)("cluster").append("text");
    for (let j = 0; j < subG.nodes.length; j++) {
      _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.l.info("Setting up subgraphs", subG.nodes[j], subG.id);
      g.setParent(subG.nodes[j], subG.id);
    }
  }
  await addVertices(vert, g, id, root, doc, diagObj);
  await addEdges(edges, g);
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  await (0,_index_01f381cb_js__WEBPACK_IMPORTED_MODULE_4__.r)(element, g, ["point", "circle", "cross"], "flowchart", id);
  _mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.u.insertTitle(svg, "flowchartTitleText", conf2.titleTopMargin, diagObj.db.getDiagramTitle());
  (0,_mermaid_6dc72991_js__WEBPACK_IMPORTED_MODULE_2__.o)(g, svg, conf2.diagramPadding, conf2.useMaxWidth);
  diagObj.db.indexNodes("subGraph" + i);
  if (!conf2.htmlLabels) {
    const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
    for (const label of labels) {
      const dim = label.getBBox();
      const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("rx", 0);
      rect.setAttribute("ry", 0);
      rect.setAttribute("width", dim.width);
      rect.setAttribute("height", dim.height);
      label.insertBefore(rect, label.firstChild);
    }
  }
  const keys = Object.keys(vert);
  keys.forEach(function(key) {
    const vertex = vert[key];
    if (vertex.link) {
      const node = (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ltv)("#" + id + ' [id="' + key + '"]');
      if (node) {
        const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
        link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.classes.join(" "));
        link.setAttributeNS("http://www.w3.org/2000/svg", "href", vertex.link);
        link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
        if (securityLevel === "sandbox") {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
        } else if (vertex.linkTarget) {
          link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
        }
        const linkNode = node.insert(function() {
          return link;
        }, ":first-child");
        const shape = node.select(".label-container");
        if (shape) {
          linkNode.append(function() {
            return shape.node();
          });
        }
        const label = node.select(".label");
        if (label) {
          linkNode.append(function() {
            return label.node();
          });
        }
      }
    }
  });
};
const flowRendererV2 = {
  setConf,
  addVertices,
  addEdges,
  getClasses,
  draw
};
const fade = (color, opacity) => {
  const channel = khroma__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A;
  const r = channel(color, "r");
  const g = channel(color, "g");
  const b = channel(color, "b");
  return khroma__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A(r, g, b, opacity);
};
const getStyles = (options) => `.label {
    font-family: ${options.fontFamily};
    color: ${options.nodeTextColor || options.textColor};
  }
  .cluster-label text {
    fill: ${options.titleColor};
  }
  .cluster-label span,p {
    color: ${options.titleColor};
  }

  .label text,span,p {
    fill: ${options.nodeTextColor || options.textColor};
    color: ${options.nodeTextColor || options.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${options.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${options.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${options.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${options.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${options.edgeLabelBackground};
      fill: ${options.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(options.edgeLabelBackground, 0.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${options.clusterBkg};
    stroke: ${options.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${options.titleColor};
  }

  .cluster span,p {
    color: ${options.titleColor};
  }
  /* .cluster div {
    color: ${options.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${options.fontFamily};
    font-size: 12px;
    background: ${options.tertiaryColor};
    border: 1px solid ${options.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }
`;
const flowStyles = getStyles;



/***/ })

}]);