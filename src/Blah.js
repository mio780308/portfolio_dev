import React from 'react';
import {ListItemData,shit} from "./structs"

export default class Blah extends React.Component{
    render(){
        let data=[];
        //let a = new shit();
        data.push(new ListItemData("blah553","../img/chinesePavilion.png","3D modeling practice during class",false));
        data.push(new ListItemData("blah22" ,"../img/chinesePavilion.png" ,"3D modeling practice during class" ,false));
        data.push(new ListItemData("blah11" ,"../img/chinesePavilion.png" ,"3D modeling practice during class" ,false));

        return (
        <div className="">
            {data.map(this.buildRow)}
        </div>);
    }

    buildRow(d, idx){
        return <h2>{d.name}</h2>;
    }
}