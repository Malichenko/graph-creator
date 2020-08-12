export const graphConfigs = Object.freeze({
  nodeHighlightBehavior: true,
  width: window.innerWidth,
  height: window.innerHeight,
  directed: true,
  maxZoom: 1,
  minZoom: 1,
  d3: {
    alphaTarget: 0.05,
    gravity: -200,
    linkLength: 200,
    linkStrength: 2,
    disableLinkForce: false,
  },
  node: {
    color: "tomato",
    size: 2000,
    highlightStrokeColor: "black",
    labelPosition: "center",
    fontColor: "white",
    fontSize: 16,
    fontWeight: "normal",
    highlightFontSize: 16,
  },
  link: {
    highlightColor: "black",
  },
});
