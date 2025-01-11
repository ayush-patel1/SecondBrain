import Button from "../components/Button"
import { Input } from "../components/Input"
import { useRef } from "react";
import { BACKEND_URL } from '../../config';
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate=useNavigate();
    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
                username, password 
        })
        alert("you have signed up")
        navigate('/signin')
    }
    return (
        <div className="h-screen w-screen bg-gray-200 flex flex-col justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 border min-w-48 p-8">
                <div className="flex gap-2">
                    <Input placeholder="Username" reference={usernameRef} />
                </div>
                <div className="flex gap-2">
                    <Input placeholder="Password" reference={passwordRef} />
                </div>
                <div className="flex justify-center pt-4">
                    <Button variant="primary" text="Signup" fullWidth={true} loading={false} />
                </div>
            </div>
        </div>
    )
}

export default Signup
