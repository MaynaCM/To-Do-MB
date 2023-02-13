import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Sidebar(){
    return(
        <div class="w-1/6 h-screen SideBar flex flex-col items-center">
            <button class="NewTask space-x-2 mt-24 items-center">
                <FontAwesomeIcon icon="circle-plus" size='2xl' className='purple-base' /> <span class="font-bold text-lg">Novo</span>
            </button>
            <ul class="space-y-20 mt-28 font-medium">
                <li>
                    <a class="space-x-3"> <FontAwesomeIcon icon="house" size='lg' className='purple-base'/> <span>Dashboard</span> </a>
                </li>
                <li>
                <a class="space-x-3"> <FontAwesomeIcon icon="list-check" size='lg' className='purple-base' /> <span>Tarefas</span> </a>
                </li>
                <li>
                <a class="space-x-3"> <FontAwesomeIcon icon="note-sticky" size='lg' className='purple-base'/> <span>Anotações</span> </a>
                </li>
                <li>
                <a class="space-x-3"> <FontAwesomeIcon icon="calendar-week" size='lg' className='purple-base'/> <span>Agenda</span> </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;