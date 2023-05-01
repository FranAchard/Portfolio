import React from "react";
const About = () => {
    return (
        <div className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-img">
                <img src="/public/assets/Captura de pantalla 2023-04-30 102717.png" />
                    <span className="circle-spin"></span>
            </div>
            <div className="about-content">
                <h3>Frontend Developer!</h3>
                <p>Hola, mi nombre es Francisco Achard y tengo 21 años. Soy un desarrollador Frontend con experiencia en las siguientes tecnologías: JavaScript, HTML, CSS, Node, React, Redux, SQL y Typescript. También estoy familiarizado con la herramienta de desarrollo Vite.

                    Soy apasionado por la tecnología y me encanta estar al día con las últimas tendencias y avances en el campo del desarrollo web. Me encanta trabajar en equipo y soy muy colaborativo. Me gusta aprender de los demás y compartir mis conocimientos con aquellos que están dispuestos a escuchar.

                    Actualmente estoy buscando oportunidades laborales en el campo del desarrollo web. Me encantaría trabajar en un entorno que me desafíe y me permita crecer tanto personal como profesionalmente.

                    En mi portafolio encontrarás algunos de mis trabajos más recientes, donde he utilizado mis habilidades en Frontend para crear aplicaciones web modernas y funcionales. Si te interesa trabajar conmigo o si tienes alguna pregunta, no dudes en ponerte en contacto conmigo a través de mi correo electrónico o mis redes sociales.

                    ¡Gracias por visitar mi portafolio!</p>
                <div className="btn-box btns">
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </div>
    )
}
export default About