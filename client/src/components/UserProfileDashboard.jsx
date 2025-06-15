export default function UserProfileDashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 text-[#2D2D2D]">
      <h2 className="text-3xl font-bold mb-6">My Profile</h2>
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input type="text" className="w-full border p-3 rounded-xl" defaultValue="foodie123" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full border p-3 rounded-xl" defaultValue="user@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium">Postal Code</label>
          <input type="text" className="w-full border p-3 rounded-xl" defaultValue="8001" />
        </div>
        <button className="px-4 py-2 bg-[#E63946] text-white rounded-xl">Update Profile</button>
      </div>
    </div>
  );
}
