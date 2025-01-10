import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import CreateContentModal from '../components/CreateContentModal';
import Button from '../components/Button';
import ShareIcon from '../icons/ShareIcon';
import PlusIcon from '../icons/PlusIcon';
import Card from '../components/Card';

function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <Sidebar />
            <div className="p-5 ml-72 min-h-screen bg-gray-100 border-2">
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
                    <Card type="twitter" link="https://x.com/narendramodi/status/1877634175693656344" title="first tweet" />
                    <Card type="youtube" link="https://www.youtube.com/watch?v=XqBRnHT9sLA" title="my first tutorial" />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
