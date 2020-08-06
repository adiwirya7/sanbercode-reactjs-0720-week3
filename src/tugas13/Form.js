import React, {Component} from "react"

class Form extends Component{

  constructor(props){
    super(props)
    this.state ={
     daftarHargaBuah : [ 
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500} 
    ],
    input:{
        nama : "" ,
        harga: "",
        berat: "",   
    },
        indexOfForm :-1
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event){
    let input = {...this.state.input}
    input[event.target.name] = event.target.value
    this.setState({input});
  }

  handleSubmit(event){
    event.preventDefault()
    let input = this.state.input
    if (input['nama'].replace(/\s/g,'') === "" || input['harga'].toString().replace(/\s/g,'') === "" ||input['berat'].toString().replace(/\s/g,'') === "") {
        alert("Input Tidak Boleh Ada Y Kosong")
    } else {
        let input = this.state.input
    let newDaftar = this.state.daftarHargaBuah
    let index = this.state.indexOfForm
    if(index ===-1){
        newDaftar = [...newDaftar,input]
    }
    else{
        newDaftar[index] = input
    }
    this.setState({
        daftarHargaBuah : newDaftar,
        input : {
            nama:"",
            harga:"",
            berat:""
        },
        indexOfForm:-1
    })
    }
    alert("Data Berhasil Ditambahkan")
  }
  handleEdit(event){
    let index = event.target.value
    let Buah = this.state.daftarHargaBuah[index]
    console.log(Buah);
    this.setState({
        input :{
            nama: Buah.nama,
            harga: Buah.harga,
            berat: Buah.berat
        },
        indexOfForm : index
    })
    alert("Data Berhasil Diubah")
  }
  
  handleDelete(event){
    let index = event.target.value
    let newDaftar = this.state.daftarHargaBuah
    let deldata = newDaftar[this.state.indexOfForm]
    newDaftar.splice(index,1)
    if(deldata !== undefined){
        let newIndex = newDaftar.findIndex((el)=> el === deldata)
        this.setState({daftarHargaBuah: newDaftar, indexOfForm: newIndex})
    }else{
        this.setState({daftarHargaBuah: newDaftar})
    }
    alert("Data Berhasil Dihapus")
  }

  render(){
    return(
      <>
        <div style={{width: "50%", margin:"auto"}}>
                    <h1 style={{textAlign:"center"}}>Tabel Harga Buah</h1>
                    <table style={{width:"100%"}}>
          <thead>
            <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.daftarHargaBuah.map((val,index)=>{
                  return(                    
                    <tr key={index}>
                      <td>{val.nama}</td>
                      <td>Rp {val.harga.toLocaleString()}</td>
                      <td>{val.berat/1000} kg</td>
                      <td><button onClick={this.handleEdit} value={index} style={{borderRadius:5, marginRight :"5%",marginLeft :"5%",border:"1px white solid",padding:5}}>edit</button>
                      <button onClick={this.handleDelete} value={index} style={{padding:5,border:"1px white",backgroundColor:"red", color:"white", borderRadius:5, marginRight :"5%",marginLeft :"5%"}}>delete</button></td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <div style={{border:"2px black solid", marginTop: 20}}>
        <h1 style={{textAlign:"center",}}>Form Penambahan Buah</h1>
        <form style={{textAlign:"center"}} onSubmit={this.handleSubmit}>
          <label>
            Masukkan Nama Buah:
          </label>          
          <input type="text" name='nama' value={this.state.input.nama} onChange={this.handleChange}/>
          <br/>
          <label>
            Masukkan Harga Buah:
          </label>          
          <input type="number" name='harga' placeholder="dalam rupiah" value={this.state.input.harga} onChange={this.handleChange}/>
          <br/>
          <label>
            Masukkan Berat Buah:
          </label>          
          <input type="number" name='berat' placeholder="dalam gram" value={this.state.input.berat} onChange={this.handleChange}/>
          <br/><br/>
          <button style={{backgroundColor:"green",borderRadius:5,padding:10 ,border:"1px white solid"}}>submit</button>
        </form>
        </div>
        </div>
      </>
    )
  }
}

export default Form
