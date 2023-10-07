const MyCv = () => {
  return (
    <div>
      <h1 className="pt-8 pb-5 text-center text-2xl">Mi CV</h1>
      <div className="boxPdf">
          <object className="pdf" data="CV-GonzaloGarciaCalvo2023.pdf"></object>
      </div>
      <div className="flex flex-row justify-center btnDescargar">
        <a href="CV-GonzaloGarciaCalvo2023.pdf" target="_blank"  className="fs-2 text-decoration-none">
            <p className="text-center text-2xl mt-3 mb-4">Descargar CV</p>
        </a>
      </div>
    </div>
  )
}
export default MyCv