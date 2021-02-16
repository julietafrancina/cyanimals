import React from 'react';
import * as IoIcons from "react-icons/io";
import './About.scss';

const About = () => {
    return(
        <section className='about'>
            <h1>Sobre Nosotros</h1>
            <p>
                Somos parte del grupo Cyanogen y decidimos participar del primer Hackatón de
                CourseIt "HackIt". Como producto de la consigna que nos dieron, hicimos esta
                WebApp para poder abarcar una necesidad que varios tenemos: Encontrar a nuestro
                mejor amigo. Puede ser perro, gato, Charizard o cualquier otro animal, deseamos
                encontrar a nuestro amigo.
            </p>
            <p>
                Es por esto que les acercamos un medio en el cual podrán encontrar a ese anhelado
                amigo!
            </p>

            <h2>Autores</h2>
            <div className='authors'>
                <figure>
                    <img src='https://avatars.githubusercontent.com/u/67765730?s=460&u=467cbea668599b9b3237e2c9a24ae05dff50e3ce&v=4' />
                    <figcaption>Julieta Visser&nbsp;&nbsp;<a href='https://github.com/julietafrancina' target='_blank' ><IoIcons.IoLogoGithub className='iconGit' /></a></figcaption>
                </figure>
                <figure>
                    <img src='https://avatars.githubusercontent.com/u/68615684?s=460&u=2c0abf14df135891d8caaf53531757e0b7744118&v=4' />
                    <figcaption>Javier Rodriguez&nbsp;&nbsp;<a href='https://github.com/JaviCeRodriguez' target='_blank' ><IoIcons.IoLogoGithub className='iconGit' /></a></figcaption>
                </figure>
            </div>
        </section>
    );
}

export default About;