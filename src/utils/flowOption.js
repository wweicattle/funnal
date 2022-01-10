// import { Graph, Cell } from '@antv/x6'
const { Graph } = X6

// console.log(Graph);

// // let t=()=
// Graph.registerNode(
//   'event',
//   {
//     inherit: 'circle',
//     attrs: {
//       body: {
//         strokeWidth: 2,
//         stroke: '#5F95FF',
//         fill: '#FFF',
//       },
//     },
//   },
//   true,
// )



Graph.registerNode(
  'activity',
  {
    inherit: 'rect',
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'image',
        selector: 'img',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        rx: 6,
        ry: 6,
        stroke: '#ccc',
        fill: '#48E54E',
        strokeWidth: 1,
      },
      img: {
        x: 6,
        y: 6,
        width: 16,
        height: 16,
        'xlink:href':
          'static/img/per.png',
      },
      label: {
        fontSize: 17,
        fill: '#fff',
      },
    },
  },
  true,
)
Graph.registerNode(
  'activityyi',
  {
    inherit: 'rect',
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'image',
        selector: 'img',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        rx: 6,
        ry: 6,
        stroke: '#ccc',
        fill: '#F60900',
        strokeWidth: 1,
      },
      img: {
        x: 6,
        y: 6,
        width: 16,
        height: 16,
        'xlink:href':
          'static/img/per.png',
      },
      label: {
        fontSize: 17,
        fill: '#fff',
      },
    },
  },
  true,
)
Graph.registerNode(
  'activityer',
  {
    inherit: 'rect',
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'image',
        selector: 'img',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        rx: 6,
        ry: 6,
        stroke: '#ccc',
        fill: '#0D74F3',
        strokeWidth: 1,
      },
      img: {
        x: 6,
        y: 6,
        width: 16,
        height: 16,
        'xlink:href':
          'static/img/per.png',
      },
      label: {
        fontSize: 17,
        fill: '#fff',
      },
    },
  },
  true,
)


Graph.registerNode(
  'gateway',
  {
    inherit: 'polygon',
    attrs: {
      body: {
        refPoints: '0,10 10,0 20,10 10,20',
        strokeWidth: 2,
        stroke: '#5F95FF',
        fill: '#008c8c',
      },
      label: {
        text: '+',
        fontSize: 40,
        fill: '#5F95FF',
      },
    },
  },
  true,
)

Graph.registerEdge(
  'bpmn-edge',
  {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2,
      },
    },
  },
  true,
)

export default Graph;
// const graph = new Graph({
//   container: document.getElementById('container')!,
//   connecting: {
//     router: 'orth',
//   },
// })

// fetch('../data/bpmn.json')
//   .then((response) => response.json())
//   .then((data) => {
//     const cells: Cell[] = []
//     data.forEach((item: any) => {
//       if (item.shape === 'bpmn-edge') {
//         cells.push(graph.createEdge(item))
//       } else {
//         cells.push(graph.createNode(item))
//       }
//     })
//     graph.resetCells(cells)
//     graph.zoomToFit({ padding: 10, maxScale: 1 })
//   })
