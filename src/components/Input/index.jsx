const Input = () => {
  return (
    <div className="input-group mb-3 mt-3">
      <input type="text" className="form-control p-4" placeholder="Digite um endereço, bairro, cidade ou CEP" aria-label="Recipient's username" aria-describedby="button-addon2" />
      <button className="btn btn-primary" type="button" id="button-addon2"><i className="bi bi-search m-2 fs-4"></i></button>
    </div>
  )
}

export default Input