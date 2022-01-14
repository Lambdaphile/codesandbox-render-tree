import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rccpHierarchy: hierarchy
    };
  }

  render() {
    const { rccpHierarchy: { Children = [] } = {} } = this.state;

    if (!this.props.childrenHierarchy) {
      return (
        <div className="App" style={{ border: "1px solid blue", width: 600 }}>
          <ul style={{ margin: 0, padding: 0 }}>
            {Children.map((children, index) => {
              return (
                <ListItem
                  key={`${index}-${children.Name}`}
                  name={children.Name}
                  childrenHierarchy={children}
                />
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="App">
          <ul>
            {this.props.childrenHierarchy.map((children, index) => {
              return (
                <ListItem
                  key={`${index}-${children.Name}`}
                  name={children.Name}
                  childrenHierarchy={children}
                />
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

class ListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleList = this.toggleList.bind(this);
  }

  toggleList() {
    const { isOpen = false } = this.state;

    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    const { isOpen = false } = this.state;
    const { name = "" } = this.props;

    return (
      <>
        <li onClick={this.toggleList}>{name}</li>
        <div style={{ backgroundColor: "red", height: 1, width: "100%" }} />
        <div
          style={{
            display:
              isOpen && this.props.childrenHierarchy.Children.length > 0
                ? ""
                : "none"
          }}
        >
          <App childrenHierarchy={this.props.childrenHierarchy.Children} />
        </div>
      </>
    );
  }
}

export default App;

const hierarchy = {
  Name: "Root",
  Type: "Root",
  Level: -1,
  Index: -1,
  Children: [
    {
      Name: "LINE 7",
      Type: "Resource",
      Level: 0,
      Index: 0,
      Children: [
        {
          Name: "HC",
          Type: "Prod_Category",
          Level: 1,
          Index: -1,
          Children: [
            {
              Name: "DOMESTOS TB 5400",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "67928904 - DOMESTOS KNSS CMSR SY CAM FER 4X5000ML",
                  Type: "Product",
                  Level: 3,
                  Index: 8,
                  Children: []
                }
              ]
            },
            {
              Name: "DOMESTOS TB 3500",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "67921884 - DOMESTOS KNSS CMSR SY OKYS FER 4X3240ML",
                  Type: "Product",
                  Level: 3,
                  Index: 4,
                  Children: []
                },
                {
                  Name: "67921896 - DOMESTOS KNSS CMSR SY ULTR BYZ 4X3240ML",
                  Type: "Product",
                  Level: 3,
                  Index: 6,
                  Children: []
                },
                {
                  Name: "67921889 - DOMESTOS KNSS CMSR SY CAM FER 4X3240ML",
                  Type: "Product",
                  Level: 3,
                  Index: 5,
                  Children: []
                }
              ]
            },
            {
              Name: "DOMESTOS TB 4000",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "67921898 - DOMESTOS KNSS CMSR SY CAM FER 4X3703ML",
                  Type: "Product",
                  Level: 3,
                  Index: 7,
                  Children: []
                }
              ]
            },
            {
              Name: "YUMOS 5000",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "32013582 - YUMOS BAHAR TAZELIGI 5LT",
                  Type: "Product",
                  Level: 3,
                  Index: 0,
                  Children: []
                },
                {
                  Name: "32013617 - YUMOS CICEK BAHCESI 5LT",
                  Type: "Product",
                  Level: 3,
                  Index: 1,
                  Children: []
                }
              ]
            },
            {
              Name: "YUMOS EXTRA 5000",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "68198976 - YUMOS EKSTRA PROFESYONEL P.CIC. JD 4X5LT",
                  Type: "Product",
                  Level: 3,
                  Index: 10,
                  Children: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      Name: "LINE 8",
      Type: "Resource",
      Level: 0,
      Index: 0,
      Children: [
        {
          Name: "HC",
          Type: "Prod_Category",
          Level: 1,
          Index: -1,
          Children: [
            {
              Name: "DOMESTOS TB 5400",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "67928904 - DOMESTOS KNSS CMSR SY CAM FER 4X5000ML",
                  Type: "Product",
                  Level: 3,
                  Index: 8,
                  Children: []
                }
              ]
            },
            {
              Name: "DOMESTOS TB 3500",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "67921884 - DOMESTOS KNSS CMSR SY OKYS FER 4X3240ML",
                  Type: "Product",
                  Level: 3,
                  Index: 4,
                  Children: []
                },
                {
                  Name: "67921896 - DOMESTOS KNSS CMSR SY ULTR BYZ 4X3240ML",
                  Type: "Product",
                  Level: 3,
                  Index: 6,
                  Children: []
                },
                {
                  Name: "67921889 - DOMESTOS KNSS CMSR SY CAM FER 4X3240ML",
                  Type: "Product",
                  Level: 3,
                  Index: 5,
                  Children: []
                }
              ]
            },
            {
              Name: "DOMESTOS TB 4000",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "67921898 - DOMESTOS KNSS CMSR SY CAM FER 4X3703ML",
                  Type: "Product",
                  Level: 3,
                  Index: 7,
                  Children: []
                }
              ]
            },
            {
              Name: "YUMOS 5000",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "32013582 - YUMOS BAHAR TAZELIGI 5LT",
                  Type: "Product",
                  Level: 3,
                  Index: 0,
                  Children: []
                },
                {
                  Name: "32013617 - YUMOS CICEK BAHCESI 5LT",
                  Type: "Product",
                  Level: 3,
                  Index: 1,
                  Children: []
                }
              ]
            },
            {
              Name: "YUMOS EXTRA 5000",
              Type: "Prod_FU",
              Level: 2,
              Index: -1,
              Children: [
                {
                  Name: "68198976 - YUMOS EKSTRA PROFESYONEL P.CIC. JD 4X5LT",
                  Type: "Product",
                  Level: 3,
                  Index: 10,
                  Children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
