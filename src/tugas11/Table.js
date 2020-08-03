import React from 'react';

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]
class Row extends React.Component{
    render(){
        return (
            dataHargaBuah.map(el=> {
                return (
                    <tr>
                    <td>{el.nama}</td>
                    <td>{el.harga}</td>
                    <td>{el.berat/1000} kg</td>
                    </tr>   
                )
            })
        )
    }
}

class Table extends React.Component {
    render() {
        return (
            <div style={{width: "50%", margin:"auto"}}>
                    <h1 style={{textAlign:"center"}}>Tabel Harga Buah</h1>
                    <table style={{width:"100%"}}>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                    <Row />
                    </table>
                </div>
        )
    }
}

export default Table
