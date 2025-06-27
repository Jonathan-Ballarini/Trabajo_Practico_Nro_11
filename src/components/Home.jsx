import { useState } from 'react';
import Mensaje from './Mensaje';

function Home() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [mensaje, setMensaje] = useState('');

    const generarMensaje = () => {
        if (!nombre || !edad) {
        setMensaje('Por favor, completá tu nombre y edad.');
        return;
        }

        const edadNumero = parseInt(edad);

        if (isNaN(edadNumero)) {
        setMensaje('La edad debe ser un número válido.');
        } else if (edadNumero < 18) {
        setMensaje(`Hola ${nombre}, eres muy joven para usar esta aplicación.`);
        } else {
        setMensaje(`Bienvenido ${nombre}, gracias por usar nuestra aplicación.`);
        }
    };

    return (
        <div>
        <h1>¡ Bienvenidos !</h1>

        <form
            onSubmit={(e) => {
            e.preventDefault();
            generarMensaje();
            setNombre('');
            setEdad('');
            }}
        >
            <div>
            <label>Nombre</label>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            </div>

            <div>
            <label>Edad</label>
            <input
                type="number"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            </div>

            <button type="submit">Enviar</button>
        </form>

        {}
        {mensaje && <Mensaje texto={mensaje} />}
        </div>
    );
    }

    export default Home;
