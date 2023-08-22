import Buy from "../../assets/Buy_a_home.webp"
import Sell from "../../assets/Sell_a_home.webp"
import Rent from "../../assets/Rent_a_home.webp"

const Products = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 g-4 m-4 align-items-center justify-content-center">
        <div className="col">
          <div className="card">
            <img src={Buy} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Compre sua casa</h5>
              <p className="card-text">Encontre o seu lugar com uma experiência fotográfica imersiva e a maioria das listagens, incluindo coisas que você não encontrará em nenhum outro lugar.</p>
              <button className="btn btn-primary">Procurar casas</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Sell} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Alugue uma casa</h5>
              <p className="card-text">Não importa o caminho que você tome para vender sua casa, podemos ajudá-lo a fazer uma venda bem-sucedida.</p>
              <button className="btn btn-primary">Selecione suas opções</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={Rent} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Venda seu imóvel</h5>
              <p className="card-text">Estamos criando uma experiência on-line perfeita – desde compras na maior rede de locadoras até a inscrição e o pagamento do aluguel.</p>
              <button className="btn btn-primary">Encontre aluguéis</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products