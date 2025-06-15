export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6 text-[#2D2D2D]">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold">Create Your Account</h2>
        <input type="text" placeholder="Username" className="w-full border p-3 rounded-xl" />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded-xl" />
        <input type="password" placeholder="Password" className="w-full border p-3 rounded-xl" />
        <input type="text" placeholder="Postal Code" className="w-full border p-3 rounded-xl" />
        <button className="w-full py-3 bg-[#E63946] text-white rounded-xl font-medium">Sign Up</button>
      </form>
    </div>
  );
}
