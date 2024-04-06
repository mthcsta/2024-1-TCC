import React from 'react';
import Image from 'next/image';
import { Button } from 'primereact/button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import AuthService from 'meutcc/services/AuthService';
import { Dropdown } from 'primereact/dropdown';
import UsuarioService from 'meutcc/services/UsuarioService';

const AuthPage = () => {

    const router = useRouter();
    const [username, setUsername] = React.useState('');
    const [usuarios, setUsuarios] = React.useState([]);

    const handleLoginClick = async () => {
        try {
            const data = await toast.promise(AuthService.autenticar({ username: username.code }), {
                loading: 'Conectando...',
                success: 'Conectado!',
                error: 'Erro ao conectar',
            });
            localStorage.setItem('token', data.token);
            window.location.pathname = ('/submeter-proposta');
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const { data } = await UsuarioService.listarUsuarios();
                setUsuarios(data.map((usuario) => ({ name: `${usuario.nome} (${usuario.resourcetype})`, code: usuario.email })));
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsuarios()
    }, []);

    return <div className='max-w-screen-lg mx-auto bg-white m-3 mt-6 flex flex-col'>
        <div className='flex flex-wrap align-items-center justify-around items-center py-10'>
            <div>
                <Image
                    src="/ifrs_colorido.svg"
                    alt="IFRS Logo"
                    height={100}
                    width={400}
                />
            </div>
            <div>
                <Dropdown value={username} onChange={(e) => setUsername(e.value)} options={usuarios} optionLabel="name" 
                    placeholder="Selecione a conta" className="w-full md:w-14rem" />

                <Button onClick={handleLoginClick} label="Entrar com o Google" icon="pi pi-google" className="p-button-raised p-button-rounded p-button-lg p-m-2" />
            </div>
        </div>
    </div>;
}

AuthPage.title = 'Autenticação';

export default AuthPage;