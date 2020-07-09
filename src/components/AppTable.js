import React from "react";
import './AppTable.css';

function AppTable({ data, any }) {
    var regex = RegExp(any);
    return (
        <>
            {data.map((d) => {
                // using props in child component and looping
                return (
                    <div className='div' key={d.name} style={{ backgroundColor: "#bae899" }}>
                        {regex.test(d.name) ||
                            regex.test(d.address) ||
                            regex.test(d.area) ? (
                                <ul>
                                    <li><b>{d.name}</b></li>
                                    <ul>
                                    <b>Address:- </b>{d.address}<br></br>
                                    <b>Area:- </b>{d.area}<br></br>
                                    <b>Price:- </b>{d.price}<br></br>
                                    </ul>
                                </ul>
                            ) : (
                                ""
                            )}
                    </div>
                );
            })}
        </>
    );
}

export default AppTable;
