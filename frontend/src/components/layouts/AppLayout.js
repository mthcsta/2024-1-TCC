import { Menubar } from "primereact/menubar";
import NavBar from "../ui/NavBar";
import { Toaster } from "react-hot-toast";

export const AppLayout = ({ children, logged, showMenu }) => {
    const items = [
        { label: 'Inicio', icon: 'pi pi-fw pi-home' },
        { label: 'Meus TCCs', icon: 'pi pi-fw pi-book' },
        { label: 'Configurações', icon: 'pi pi-fw pi-cog' },
    ];

    return (
        <div className='bg-gray-100 min-h-screen'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <NavBar logged={logged} />

            <div style={{backgroundColor: '#f9fafb'}}>
                {
                    showMenu &&
                    <Menubar model={items} style={{borderWidth: 0}} className='max-w-screen-lg mx-auto' />
                    ||
                    <div>
                        <div className='max-w-screen-lg mx-auto text-gray-600 text-2xl p-6 ps-10'>Meu TCC IFRS Campus Restinga</div>
                    </div>
                }
            </div>

            {children}
        </div>
    );
};