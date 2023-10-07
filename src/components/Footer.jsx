const Footer = () => {
  return (
    <footer className="p-2 bg-[#0b5c7e]">
        <div className="flex flex-row justify-between items-center">
            <p className="m-0 ms-3 ms-md-5">Derechos reservados Gonzalo Garcia Calvo &#169;</p>
            <a href="/#subir">
                <img src="images/flecha@72x.png" className="me-3 me-md-5 iconoSubir" alt="botón para subir" />
            </a> 
        </div>
    </footer>
  )
}
export default Footer