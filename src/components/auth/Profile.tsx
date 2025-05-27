import React, { useState } from 'react';
import { useAuth } from '../../context/auth';
import type { User } from 'firebase/auth';
import { updateProfile, deleteUser } from 'firebase/auth';
import './auth.css';
const Profile = () => {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle profile update submission
  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!user) {
      setError('User not found');
      return;
    }
    try {
      await updateProfile(user, {
        displayName: displayName,
      });
      setSuccess('Profile updated successfully');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      if (!user) {
        setError('User not found');
        return;
      }
      await deleteUser(user);
      setSuccess('Account deleted successfully');
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <div className='form'>
      <h1>Profile</h1>
      {/* Add delete account button */}

      <form onSubmit={handleUpdateProfile}>
        <input
          type='text'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder='Name'
        />
        <input
          disabled={true}
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <button type='submit'>Update Profile</button>
        {success && <p className='success'>{success}</p>}
        {error && <p className='error'>{error}</p>}
        <div>
          <button onClick={handleDeleteAccount} className='deleteAccountButton'>
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
