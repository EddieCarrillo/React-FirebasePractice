
import React, {Component} from 'react'

class DisplayData extends Component {
    constructor(props){
        super(props);

        this.state =  {
            items: []
        };

        this.firebaseRef = this.props.db.database().ref("teamMates")
        this.firebaseRef.on('value', dataSnapshot => {


            let items =[];
            dataSnapshot.forEach(childSnapShot => {
                let item = childSnapShot.val();
                item['.key'] = childSnapShot.key;
                items.push(item)
            });

            this.setState({items});


        });

    }

    componentWillUnmount(){
        this.firebaseRef.off();
    }

    render(){
        const records = this.state.items.map (items =>
            <tr key={items.name}>
                <td style={{width: '200px', textAlign: 'center'}}>{items.name}</td>
                <td style={{width: '200px', textAlign: 'center'}}>{items.age}</td>
            </tr>

        )


        return (<div style={{paddingTop: '20px'}}>
            <table>

                <thead>
                   <tr>
                       <th></th>
                       <th></th>

                   </tr>
                </thead>

                <tbody>
                {records}
                </tbody>
            </table>


        </div>)
    }
}

export default DisplayData;