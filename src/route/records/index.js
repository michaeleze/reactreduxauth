import React,{useState} from 'react';
import {connect} from 'react-redux';
import {success} from '../../_action';


const Records = (props) => {
    const b = React.createRef();
    let {store} = props;
    let {test} = props;
    const [data,setData] = useState("nineteen")

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    console.log("environment variable", process.env)
    console.log("this:",this)
   // debugger

    const changeState = () => {
        data === "nineteen" && setData("fifteen");
        data === "fifteen" && setData("nineteen");
        console.log(test("input successful"));
    }

    return(
        <div>
            <button id="button" ref={b} onClick={changeState}>change name</button>
            <span>{data}</span>
            {console.log(props)}
            <input name="searchInput" onChange={(e) => handleChange(e)}/>
            {
                store.records.map((item,i)=>(
                    <ul key={i}>
                        <li>
                            {i+1}
                        </li>
                        <li>
                            {item}
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    test:success
})

const mapStateToProps = (state) => ({
        store:state
    })

export default connect(mapStateToProps,mapDispatchToProps)(Records)