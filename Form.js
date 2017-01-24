class AppComponent extends React.Component {
    constructor () {
        super();
        this.state = {
            txt: '',
            some: 'go'
        }

        this.sendFormData = this.sendFormData.bind(this);
        this.update = this.update.bind(this);
        };



    render() {
        let txtFromState = this.state.txt;

        return (
            <div>

            <input id="name" placeholder="Имя" name="name"/>
            <input  type="email" placeholder="Почта" name="mail"/>
            <input   placeholder="Телефон" name="number"/>
            <p><input type="submit" value="Отправить" onClick={this.sendFormData}/></p>
            <br/>
            <br/>
            <hr/>
            <input type="text" placeholder="parent field" onChange={this.update}/>
            <input type="text" placeholder="child field" value={this.state.txt}/>
           <p>{(this.state.txt == '') ? <h1> H1:{this.state.some} </h1> : <h1> H1:{this.state.txt} </h1>}</p>
            <h2>H2: {some}</h2>

        </div>
    )
    }

    update(e){
        this.setState({txt: e.target.value});
    }


    sendFormData() {


    axios({
        method: 'post',
            url: '/request.php',
            data: {
                firstName: 'John'
            }
        }).then(function (results) {
            console.log(results.data);
        });
        
    }
}
ReactDOM.render (
< AppComponent/>,
    document.getElementById("application")
);