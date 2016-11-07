var App = React.createClass({

  getInitialState: function() {
    return {

      color: "white"
    };
  },
  move: function() {
    var arr = [0, 1, 2, 4, 5, 6, 10, 11, 12, 19, 21, 22, 23, 25, 26];
    var cell = document.getElementById("container").getElementsByTagName("td");
    arr.sort(function() {
      return .15 - Math.random();
    })
    var comp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    var arrint = [];
    var counter = 0;
    var i=0;
    for (i = 0; i < arr.length; i++) {

      cell[arr[i]].style.backgroundColor = "red";
      if (arr[i] === comp[i]) {
        cell[comp[i]].style.backgroundColor = "red";
      } else {
       // cell[comp[i]].style.backgroundColor = "black";
      }
    }
  },
  componentDidMount: function() {
    var arr = [0, 1, 2, 4, 5, 6, 10, 11, 12, 19, 21, 22, 23, 25, 26];
    var cell = document.getElementById("container").getElementsByTagName("td");
    arr.sort(function() {
      return .15 - Math.random();
    })
    var comp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
    var arrint = [];
    var counter = 0;
    var th = this;
    setInterval(function() {
      var c = counter++;
      arrint.push(c)
      for (var i = 0; i < arr.length; i++) {
        if (comp[c] === arr[i]) {
          th.move()
          cell[comp[i]].style.backgroundColor = "black";
        }
      }
    }, 500);
  },

  render: function() {
    var indents = [];
    for (var i = 0; i < 5; i++) {
      indents.push(<table style={{backgroundColor: this.state.color}} className='table' ref="td"><tr><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>);
    }
    return (
      <div>
        {indents}
        <button onClick={this.getInitialState} >start</button>
    </div>
    );
  }
});

ReactDOM.render(
  <App  />,
  document.getElementById('container')
);