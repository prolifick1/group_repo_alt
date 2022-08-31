import axios from 'axios'
import "bootstrap/dist/css/bootstrap.css"
import Image from 'react-bootstrap/Image'
import { useState } from 'react'

function Profile({ user, curr_user }) {

    const [pic, setPic] = useState()

    const getDate = () => {
        let temp = user && Date.parse(user.date_joined)
        let newDate = new Date(temp)
        let split = newDate.toUTCString().split(" ")
        return `${split[0]} ${split[1]} ${split[2]} ${split[3]}`
    }

    const handleEditProfile = (e) => {
        e.preventDefault()
        // let pic = window.URL.createObjectURL(document.querySelector('#eprofile_pic').files[0])
        console.log(pic, 'in handleEdit')
        axios.put('profile', {
            first_name: document.querySelector('#efirst_name').value,
            last_name: document.querySelector('#elast_name').value,
            job_title: document.querySelector('#ejob_title').value,
            profile_picture: pic
        }).then(res => {
            console.log(res.data)
            curr_user()
            document.querySelector('#closeEP').click()
        })
    }

    return (
        <div>
            <div className='profile_info container'>
                <div className='circle'>
                    <img className='pic'
                        src={user && user.profile_picture || "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"} />
                </div>
                <div>
                    <h3>Name: {user && user.first_name} {user && user.last_name}</h3>
                    <h3>Job Title: {user && user.job_title}</h3>
                    <h3>Email: {user && user.email}</h3>
                    <h3>Member Since: {getDate()}</h3>
                    <button
                        className="btn btn-outline-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#eProfile"
                    >Edit Profile
                    </button>
                </div>

            </div>
            <div className="modal fade" id="eProfile" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="eProfile" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="eProfile">Edit Profile</h5>
                            <button id="closeEP" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleEditProfile}>
                                <label htmlFor="first_name"><strong>First Name</strong></label>
                                <input type="text" id="efirst_name" placeholder="First Name"
                                    className="form-control" autoComplete="off" required pattern="\w+.+"
                                    defaultValue={user && user.first_name} />
                                <br />
                                <label htmlFor="last_name"><strong>Last Name</strong></label>
                                <input type="text" id="elast_name" placeholder="Last Name"
                                    className="form-control" autoComplete="off" required pattern="\w+.+"
                                    defaultValue={user && user.last_name} />
                                <br />
                                <label htmlFor="ejob_title"><strong>Job Title</strong></label>
                                <input type="text" id="ejob_title" placeholder="Job Title"
                                    className="form-control" autoComplete="off" required pattern="\w+.+"
                                    defaultValue={user && user.job_title} />
                                <br />
                                <label htmlFor="eprofile_pic"><strong>Picture</strong></label>
                                <input type="file" class="form-control" id="eprofile_pic"
                                    onChange={() => {
                                        console.log(URL.createObjectURL(document.querySelector('#eprofile_pic').files[0]))
                                        setPic(URL.createObjectURL(document.querySelector('#eprofile_pic').files[0]))
                                    }}>
                                </input>
                                <br />
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary">Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Profile
