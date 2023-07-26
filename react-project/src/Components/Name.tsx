import { useState } from "react";
import './CSS/Name.css'

function Name() {

  const [name, setName] = useState<string | string[]>('');
  const [image, setImage] = useState<any | any[]>('');

  const onChangeInput = (from: any, event: any) => {
    if(from === 'nome') {
      setName(event.target.value);
    } else if (from === 'image') {
      setImage(event.target.value);
    }
  }

  return(
    <div>
      <input onChange={ () => { onChangeInput('nome', event) } } className="Name" type="text" />
      <p>Este site foi desenvolvido por <strong>{ name }</strong> e usa react!</p>
      <div className="photo">
        <p>Visualize esta foto:</p>
        <input onChange={ () => { onChangeInput('image', event) } } type="text" />
        <img src={ image } alt="" />
      </div>
    </div>  
  )
}

export default Name;
