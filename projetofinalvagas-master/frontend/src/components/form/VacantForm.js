import { useState } from 'react'

import formStyles from './Form.module.css'

import Input from './Input'
import Select from './Select'

function VacantForm({ handleSubmit, vacantData, btnText }) {
  const [vacant, setVacant] = useState(vacantData || {})
  const [preview, setPreview] = useState([])
  const modalitys = ['Presencial', 'Hibrido', 'Remoto', 'Voluntário']

  function onFileChange(e) {
    console.log(Array.from(e.target.files))
    setPreview(Array.from(e.target.files))
    setVacant({ ...vacant, images: [...e.target.files] })
  }

  function handleChange(e) {
    setVacant({ ...vacant, [e.target.name]: e.target.value })
  }

  function handleModality(e) {
    setVacant({
      ...vacant,
      modality: e.target.options[e.target.selectedIndex].text,
    })
  }

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(vacant)
  }

  return (
    <form onSubmit={submit} className={formStyles.form_container}>
      <div className={formStyles.preview_vacant_images}>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={vacant.name}
                key={`${vacant.name}+${index}`}
              />
            ))
          : vacant.images &&
            vacant.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/vacants/${image}`}
                alt={vacant.name}
                key={`${vacant.name}+${index}`}
              />
            ))}
      </div>
      <Input
        text="Imagens da vaga(JPG ou NPG)"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Input
        text="Nome da Vaga"
        type="text"
        name="name"
        placeholder="Digite o nome"
        handleOnChange={handleChange}
        value={vacant.name || ''}
      />
      <Input
        text="Salario da vaga"
        type="number"
        name="salary"
        placeholder="Digite o salario"
        handleOnChange={handleChange}
        value={vacant.salary || ''}
      />
      <Input
        text="Empresa que oferece a vaga"
        type="text"
        name="company"
        placeholder="Digite o nome da empresa"
        value={vacant.company || ''}
        handleOnChange={handleChange}
      />
      <Select
        name="modality"
        text="Selecione a categoria"
        options={modalitys}
        handleOnChange={handleModality}
        value={vacant.modality || ''}
      />
      <input type="submit" value={btnText} />
    </form>
  )
}

export default VacantForm
