import React, { Component } from 'react';
import './App.css';
import jamaica from './images/jamaica.jpeg';
import raspericos from './images/raspericos.jpeg';
import sauce from './images/hot-sauce.jpeg';
import tacos from './images/tacos.jpeg';

class App extends Component {
  state = {
    selected: null
  }

  highlightImageSelection() {
    switch (this.state.selected) {
      case 'jamaica':
        return jamaica;
      case 'sauce':
        return sauce;
      case 'tacos':
        return tacos;
      default:
        return raspericos;
    }
  }

  render() {
    return (
      <main>
        <h1>TULUM</h1>
        <p>click shit</p>
        <img onClick={() => this.setState({selected: null})} width="3583px" src={this.highlightImageSelection()} useMap="#raspericos" alt="raspericos" />
        <map name="raspericos">
            <area alt="jamaica" onClick={() => this.setState({selected: 'jamaica'})} title="jamaica" coords="2127,1965,2067,1933,2013,1886,1975,1819,1966,1715,1962,1579,1966,1348,1950,1294,1950,1240,1975,1174,2013,1117,2083,1073,2140,1050,2254,1038,2339,1044,2437,1069,2519,1110,2589,1167,2646,1250,2671,1332,2665,1386,2652,1430,2624,1471,2602,1496,2535,1601,2504,1667,2440,1797,2390,1873,2358,1917,2317,1949,2266,1971,2206,1980" shape="poly" />
            <area alt="hot sauce" onClick={() => this.setState({selected: 'sauce'})} title="hot sauce" coords="193,1098,120,1164,82,1215,54,1284,51,1348,73,1411,120,1471,190,1512,260,1531,348,1538,291,1639,298,1664,339,1664,383,1648,415,1623,453,1528,567,1487,646,1439,709,1383,756,1319,782,1247,788,1199,782,1155,760,1110,734,1079,696,1050,646,1025,592,1009,522,1000,456,1003,377,1016,285,1047" shape="poly" />
            <area alt="taco1" onClick={() => this.setState({selected: 'tacos'})} title="taco thing " coords="2149,690,2051,731,1905,785,1842,848,1817,848,1722,892,1697,940,1649,962,1640,1031,1690,1054,1738,1044,1861,974,2193,794,2178,734" shape="poly" />
            <area alt="taco2" onClick={() => this.setState({selected: 'tacos'})} title="more tacos" coords="3580,1345,3301,1303,3251,1322,3187,1322,3162,1386,3159,1446,3184,1465,3422,1496,3393,1506,3276,1500,3225,1503,3194,1588,3191,1626,3206,1648,3172,1648,3146,1750,3149,1765,3219,1778,3222,1810,3194,1816,3143,1797,3121,1832,3099,1892,3108,1980,3251,1996,3266,1920,3285,1854,3317,1806,3361,1765,3425,1737,3491,1718,3545,1712,3580,1712" shape="poly" />
            <area alt="taco3" onClick={() => this.setState({selected: 'tacos'})} title="we all had tacos" coords="1953,2351,1928,2357,1909,2427,1858,2455,1855,2417,1823,2452,1814,2480,1801,2521,1773,2563,1738,2610,1687,2683,2311,2683,2326,2661,2295,2639,2295,2616,2288,2572,2263,2499,2197,2449,2162,2490,2070,2601,2013,2677,1956,2680,1988,2632,2032,2582,2051,2563,2073,2559,2070,2537,2048,2509,2070,2477,2073,2449,2064,2401,2016,2351" shape="poly" />
        </map>
      </main>
    );
  }
}

export default App;
