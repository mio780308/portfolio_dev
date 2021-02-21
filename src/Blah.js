import React from 'react';
import ListItemData from "./structs"

export default class Blah extends React.Component{
    render(){
        let data=[];

        data.push(new ListItemData("blah1","../img/chinesePavilion.png","3D modeling practice during class",false));
        data.push(new ListItemData("blah2","../img/chinesePavilion.png","3D modeling practice during class",false));
        data.push(new ListItemData("blah3","../img/chinesePavilion.png","3D modeling practice during class",false));

        return (
        <div className="">
            {data.map(function(d,idx){
                return <h2>{d.name}</h2>;
                })}
        </div>);
    }
}