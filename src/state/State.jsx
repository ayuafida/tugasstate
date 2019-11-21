import React, {Component} from 'react';

class Kursus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paket: "kursus programing",
            materi: "React js",
            desc: "belajar react js",
            harga: 200000
        };
    }
    render() {
        return(
            <div>
                <h1>Nama Paket      : {this.state.paket}</h1><br/>
                <h1>Jenis Materi    : {this.state.materi}</h1><br/>
                <h1>Deskripsi paket : {this.state.desc}</h1><br/>
                <h1>Harga Paket     : {this.state.harga}</h1><br/>
            </div>
        );
    }
}
export default Kursus;