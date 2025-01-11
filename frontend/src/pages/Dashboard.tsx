import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import CreateContentModal from '../components/CreateContentModal';
import Button from '../components/Button';
import ShareIcon from '../icons/ShareIcon';
import PlusIcon from '../icons/PlusIcon';
import Card from '../components/Card';
import useContent from '../hooks/useContent';

function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    const {contents,refresh}=useContent();

    useEffect(()=>{
       refresh();
    },[modalOpen])
    return (
        <div>
            <Sidebar />
            <div className="p-5 ml-72 min-h-screen bg-gray-100 border-2 flex-wrap">
                <CreateContentModal open={modalOpen} onClose={() => {
                    setModalOpen(false);
                }} />
                <div className="flex justify-end gap-3">
                    <Button text="Share brain" variant="secondary" startIcon={<ShareIcon />} />
                    <Button text="Add Content" variant="primary" startIcon={<PlusIcon />} onClick={() => {
                        setModalOpen(true);
                    }} />
                </div>
                <div className="flex gap-4 pt-3">
                   {contents.map(({type,title,link})=>{
                     return <Card title={title} type={type} link={link}/>
                   })}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
