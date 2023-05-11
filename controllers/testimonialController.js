import { Testimonial } from '../models/Testimoniales.js'

const guardarTestimonial = async (req, resp) =>{
   // console.log(req.body)
    
    //Validar
    const{nombre, correo, mensaje} = req.body;
    const errores = [];
    const caracteresEmail = [ '@', '.']
    if(nombre.trim() === ''){ errores.push({mensaje : 'El nombre está vacio'})}     
    if(correo.trim() === ''){ errores.push({mensaje : 'El coreo está vacio'})}     
    if(mensaje.trim() === ''){ errores.push({mensaje : 'El mensaje está vacio'})}     
    caracteresEmail.forEach(caract => {
        if(correo.trim() !== '')
           if(correo.indexOf(caract) === -1){ errores.push({mensaje : `Falta la ${caract} en el correo`})}   
    })
    //if(correo.indexOf("@") === -1){ errores.push({mensaje : 'Falta la @ en el correo'})}     
    
   if (errores.length > 0){
    //Mostrar  la vista con errores
    resp.render('testimoniales', {
        pagina: 'Testimoniales',
        errores,
        nombre,
        correo,
        mensaje
    })
   }else{
     //Guardar en la BD
     try {
        await Testimonial.create({
            nombre,
            correo,
            mensaje
        });
        resp.redirect('/testimoniales')
     } catch (error) {
        console.log(error)
        
     }
     
   }
    
}

export{
    guardarTestimonial,
}