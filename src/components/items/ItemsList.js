import React, {Component} from 'react';
import Item from "./Item";

class ItemsList extends Component {

    constructor() {
        super();
        this.state = {

            items: [
                {name:"aa",price:100},
                {name:"bb",price:200},
                {name:"cc",price:300},
                {name:"dd",price:400},
                {name:"ee",price:500},
                {name:"ff",price:600}
                ]
        }

    }

    render() {
        return (
            <div className={"row pt-2 pl-5 pr-5 justify-content-center"}>
                {
                    this.state.items.map((value,i)=> {

                            return (
                                
                                            <Item data={value} key={i}/>
                            )
                        }
                    )

                }



            </div>
        );
    }
}

export default ItemsList;