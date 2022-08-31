import Profile from '../components/Profile'
import NavBar from '../components/NavBar'


function ProfilePage({ user, curr_user }) {

    return (
        <div>
            <NavBar user={user} />
            <h1 style={{ marginLeft: '50px' }}>My Profile</h1>
            <Profile user={user} curr_user={curr_user} />

        </div>
    )
}
export default ProfilePage
