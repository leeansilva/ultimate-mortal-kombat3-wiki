import React from "react";

const DataContext = React.createContext()

function DataProvider ({ children }) {
    const [fighter,setFighter] = React.useState();
    const [select,setSelect] = React.useState(null)

    const selectFighter =(id) =>{
        setFighter( { id } );
    }

    const fighterClick =(id) =>{
        setSelect( { id } )
    }



    const context = { fighter, selectFighter, select, fighterClick }

    return (
        <DataContext.Provider value ={context}>
            { children }
        </DataContext.Provider>
    )
}

function UseDataContext() {
    const context = React.useContext(DataContext);
    return context;
}

export {DataProvider, UseDataContext}