import React, {Component} from 'react';

class Item extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card p-2 m-2" style={{width: "18rem"}}>
                <div className="card-body">

                <button className={"btn btn-primary"}>
                    wqfwef
                </button>
                <h2>Item name: {this.props.data.name}</h2>
                <h5>Item price: {this.props.data.price}</h5>
                </div>
            </div>
        );
    }
}

export default Item;