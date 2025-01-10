function Signup() {
  return (
    <div className="h-screen w-screen bg-gray-200 flex flex-col justify-center items-center">
    <div className="bg-white rounded-xl border min-w-48 border min-w-48 p-8">
        <div className="flex gap-2">
            <Input placeholder="Username" />
        </div>
        <div className="flex gap-2">
            <Input placeholder="Password" />
        </div>
        <div className="flex justify-center pt-4">
            <Button variant="primary" text="Signup" fullWidth={true} loading={true}/>
        </div>
    </div>
</div>
  )
}

export default Signup
