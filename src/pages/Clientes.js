import Sidebar from '../components/UI/Sidebar'
import TopPart from '../components/UI/TopPart'

const Clientes = () => {
    return (
        <>
            <Sidebar></Sidebar>
            <div className="workSpace">
            <TopPart usuario={"Pablo"} titulo={"Clientes"} bntNuevoTxt={"Nuevo cliente"}></TopPart>
            </div>
        </>
    )
}

export default Clientes
